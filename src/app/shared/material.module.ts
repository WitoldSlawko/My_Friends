import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardContent,
    MatCardHeader,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatRadioModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSlideToggleModule
} from '@angular/material';

import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule {}
