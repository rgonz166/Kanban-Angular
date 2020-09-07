import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const components = [ShellComponent];
const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  LayoutModule,
  RouterModule
];


@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [
    ...components,
    ...modules,
    
  ]
})
export class SharedModule { }
