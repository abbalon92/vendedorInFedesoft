import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoveltyCreatePage } from './novelty-create.page';

const routes: Routes = [
  {
    path: '',
    component: NoveltyCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoveltyCreatePage]
})
export class NoveltyCreatePageModule {}
