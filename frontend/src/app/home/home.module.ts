import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UploadModule } from '../upload/upload.module';

@NgModule({
  imports: [CommonModule, UploadModule],
  declarations: [HeaderComponent, FooterComponent,ContainerComponent],
  exports: [ContainerComponent],
  entryComponents: [], // Add the DialogComponent as entry component
  providers: []
})
export class HomeModule {}
