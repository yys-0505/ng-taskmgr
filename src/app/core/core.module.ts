import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from './app-routing.module';
import { ServicesModule } from "../services/services.module";
import { AppEffectsModule } from "../effects";
import { AppStoreModule } from "../reducers";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from "../utils/svg.util";

import 'hammerjs';
import '../utils/debug.util'
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    AppEffectsModule,
    AppStoreModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  providers: [
    {
      provide: 'BASE_CONFIG', useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ){
    if (parent) {
      throw new Error('模块已经存在, 不能再次加载!');
    }
    loadSvgResources(ir, ds);
  }
}
