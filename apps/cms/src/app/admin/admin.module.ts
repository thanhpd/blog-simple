import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostManageComponent } from './post-manage/post-manage.component';
import { AdminComponent } from './admin.component';
import { PreviewPipe } from '../_pipes/preview.pipe';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
    PostListComponent,
    PostManageComponent,
    AdminComponent,
    PreviewPipe,
  ],
  entryComponents: [PostManageComponent]
})
export class AdminModule { }
