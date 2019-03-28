import { NgModule } from '@angular/core';

import { SystemProjectsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SystemProjectsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SystemProjectsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SystemProjectsSharedCommonModule {}
