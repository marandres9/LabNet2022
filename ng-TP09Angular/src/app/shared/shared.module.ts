import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
    declarations: [ToolbarComponent],
    imports: [CommonModule, MatToolbarModule],
    exports: [ToolbarComponent],
})
export class SharedModule {}
