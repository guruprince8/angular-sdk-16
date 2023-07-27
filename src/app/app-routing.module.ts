import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopAppComponent } from '@pega/angular-sdk-library';
import { TopAppMashupComponent} from '@pega/angular-sdk-library';
import { NavigationComponent } from '@pega/angular-sdk-library';
import { MCNavComponent } from '@pega/angular-sdk-library';
import { endpoints } from '@pega/angular-sdk-library';

// Adding path to remove "Cannot match routes" error at launch
//  Tried this at one point... Need to add /app in path now...
// const appName = window.PCore.getStore().getState().data.app.Application.pyLabel;
//  Unfortunately, called before onPCoreReady...
//
// But we can get it from window.location.pathname

const appName = window.location.pathname.split('/')[3];

// TopAppComponent no longer used (was for when login into PegaInfinity and being directed from there to an Angular app,
// similiar to Nebula/Constellaion)

const routes: Routes = [
  { path: '', component: MCNavComponent },
  { path: endpoints.PORTAL, component: TopAppMashupComponent },
  { path: endpoints.PORTALHMTL, component: TopAppMashupComponent },
  { path: endpoints.FULLPORTAL, component: TopAppMashupComponent },
  { path: endpoints.FULLPORTALHTML, component: TopAppMashupComponent },
  { path: endpoints.SIMPLEPORTAL, component: NavigationComponent },
  { path: endpoints.SIMPLEPORTALHTML, component: NavigationComponent },
  { path: endpoints.EMBEDDED, component: MCNavComponent },
  { path: endpoints.EMBEDDEDHTML, component: MCNavComponent },
  { path: endpoints.MASHUP, component: MCNavComponent },
  { path: endpoints.MASHUPHTML, component: MCNavComponent },
  { path: `prweb/app/${appName}`, component: TopAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
