import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from "../../../_services/user.service";
import { ChangeDetectorRef } from "@angular/core";
import { Subscription, Observable } from 'rxjs';
import { ProgressSpinnerService } from "../../../_messages/progress-spinner.service";
import { ResetPConnectService } from "../../../_messages/reset-pconnect.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { interval } from "rxjs/internal/observable/interval";
import { endpoints } from '../../../_services/endpoints';
import { UpdateWorklistService } from '../../../_messages/update-worklist.service';
import { AutoLoginService } from "../../../_services/auto-login.service";
import { DatapageService } from "../../../_services/datapage.service";
import { HttpParams } from '@angular/common/http';
import { Utils } from "../../../_helpers/utils";
import { Title } from '@angular/platform-browser';
import { ServerConfigService } from 'src/app/_services/server-config.service';
import { compareSdkPCoreVersions } from 'src/app/_helpers/versionHelpers';

declare global {
  interface Window {
    PCore: {
      onPCoreReady: Function;
      createPConnect: Function;
      getStore(): any;
      getConstants(): any;
      setBehaviorOverrides: Function;
      setBehaviorOverride: Function;
      getBehaviorOverrides: Function;
      getAttachmentUtils: Function;
      getDataApiUtils: Function;
      getAssetLoader: Function;
      getEnvironmentInfo: Function;
      getPubSubUtils(): any;
      getUserApi() : any;
      getAuthUtils(): any;
      registerComponentCreator( c11nPropObject ): Function;
    },
    myLoadMashup: Function;
  }
}


@Component({
  selector: 'app-mc-nav',
  templateUrl: './mc-nav.component.html',
  styleUrls: ['./mc-nav.component.scss'],
  providers: [Utils]
})
export class MCNavComponent implements OnInit {

  starterPackVersion$: string = endpoints.SP_VERSION;

  bLoggedIn$: boolean = false;
  bPConnectLoaded$ : boolean = false;
  bHasPConnect$ : boolean = false;
  userName$: string = "";
  subscription: Subscription;
  isProgress$: boolean = false;


  progressSpinnerMessage: any;
  progressSpinnerSubscription: Subscription;
  resetPConnectSubscription: Subscription;

  pConn$: any;
  PCore$: any;

  bootstrapShell: any;

  constructor(private uservice: UserService,
              private cdRef: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private settingsDialog: MatDialog,
              private psservice: ProgressSpinnerService,
              private rpcservice: ResetPConnectService,
              private uwservice: UpdateWorklistService,
              private alservice: AutoLoginService,
              private dservice: DatapageService,
              private titleServide: Title,
              private scservice: ServerConfigService,
              private utils: Utils) { }

  ngOnInit() {

    this.scservice.getServerConfig().then( () => {
      this.initialize();
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.progressSpinnerSubscription.unsubscribe();
    this.resetPConnectSubscription.unsubscribe();
  }


  initialize() {
    if (!this.PCore$) {
      this.PCore$ = window.PCore;
    }

    this.titleServide.setTitle("Media Co");

    sessionStorage.clear();

    // handle showing and hiding the progress spinner
    this.progressSpinnerSubscription = this.psservice.getMessage().subscribe(message => {
      this.progressSpinnerMessage = message;

      this.showHideProgress(this.progressSpinnerMessage.show);
    });

    this.resetPConnectSubscription = this.rpcservice.getMessage().subscribe(message => {

      if (message.reset) {
        this.bPConnectLoaded$ = false;

        ///window.PCore = null;

        let timer = interval(1000).subscribe(() => {

          //this.getPConnectAndUpdate();
          this.bootstrapShell.loadMashup('app-root', false);

          // update the worklist
          this.uwservice.sendMessage(true);

          timer.unsubscribe();
        });


      }

    });

    // Add event listener for when logged in and constellation bootstrap is loaded
    document.addEventListener("ConstellationReady", () => {
      this.bLoggedIn$ = true;
      // start the portal
      this.startMashup();
    });
  
    /* Login if needed (and indicate this is an embedded scenario) */
    this.uservice.loginIfNecessary(true);
  }

  startMashup() {

    if (!this.PCore$) {
      this.PCore$ = window.PCore;
    }

    this.PCore$.onPCoreReady( (renderObj) => {
    // Check that we're seeing the PCore version we expect
    compareSdkPCoreVersions();

    // Need to register the callback function for PCore.registerComponentCreator
    //  This callback is invoked if/when you call a PConnect createComponent
    window.PCore.registerComponentCreator((c11nEnv, additionalProps = {}) => {
      // debugger;

      return c11nEnv;

      // REACT implementaion:
      // const PConnectComp = createPConnectComponent();
      // return (
      //     <PConnectComp {
      //       ...{
      //         ...c11nEnv,
      //         ...c11nEnv.getPConnect().getConfigProps(),
      //         ...c11nEnv.getPConnect().getActions(),
      //         additionalProps
      //       }}
      //     />
      //   );
    });

      // Change to reflect new use of arg in the callback:
      const { props /*, domContainerID = null */ } = renderObj;

      this.pConn$ = props.getPConnect();

      this.bHasPConnect$ = true;
      this.bPConnectLoaded$ = true;

      this.showHideProgress(false);

      sessionStorage.setItem("pCoreUsage", "AngularSDKMashup");


    } );

    this.scservice.selectPortal()
    .then( () => {
      const thePortal = this.scservice.getAppPortal();
      window.myLoadMashup("app-root", false);   // this is defined in bootstrap shell that's been loaded already
    })

  }


  showHideProgress(bShow: boolean) {
    this.isProgress$ = bShow;
    this.cdRef.detectChanges();
  }



  logOff() {
    this.uservice.logout();
    // Reload the page to kick off the login
    setTimeout(()=>{
      window.location.reload();
    }, 500);
  }

}
