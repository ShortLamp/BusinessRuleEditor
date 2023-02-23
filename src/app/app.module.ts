import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { DragAndDropManagerService } from './Services/drag-and-drop-manager.service';
import {
  DragAndDropManagerDirective,
  DragAndDropManagerRootDirective
} from './Services/drag-and-drop-manager.directive';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RuleCreatorComponent} from "./rule-creator/rule-creator.component";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessRuleRootComponent } from './business-rule-root/business-rule-root.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule, DragDropModule, MatIconModule, MatButtonModule, MatMenuModule, MatInputModule, MatSelectModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    ItemComponent,
    DragAndDropManagerDirective,
    DragAndDropManagerRootDirective,
    RuleCreatorComponent,
    BusinessRuleRootComponent
  ],
  bootstrap: [AppComponent],
  providers: [DragAndDropManagerService]
})
export class AppModule {}
