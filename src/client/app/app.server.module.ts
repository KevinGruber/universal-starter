import { NgModule } from '@angular/core';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';

import { AppModule } from './app.module';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        FlexLayoutServerModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {
}
