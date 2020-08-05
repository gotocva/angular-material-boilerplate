import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./material.module";
import { AuthGuard } from "./auth/auth.guard";
import { LocalStorageService } from "./local-storage.service";

const MODULES = [
  MaterialModule,
  ReactiveFormsModule,
  HttpClientModule
];
const COMPONENTS = [

];
const SERVICES = [
  AuthGuard,
  LocalStorageService
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,...COMPONENTS
  ],
  providers: [
    ...SERVICES
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
