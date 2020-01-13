import { NgModule } from '@angular/core';
import { MatMenuModule , MatInputModule, MatFormFieldModule, MatTableModule} from '@angular/material';

const MaterialComponents = [
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
