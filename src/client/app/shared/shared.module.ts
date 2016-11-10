import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Material Design 
import { MaterialModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule.forRoot(),
	],
	declarations: [],
	providers: [],
	exports: [
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		CommonModule,
	]
})

export class SharedModule {

  static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        
      };
    }
}

export class SharedRootModule { }
