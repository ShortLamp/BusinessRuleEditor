import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import {BusinessRuleEditorService, Rule} from "../Services/BusinessRuleEditorService";
import {installPatch} from "../Services/patch";


@Component({
  selector: 'app-business-rule-root',
  templateUrl: './business-rule-root.component.html',
  styleUrls: ['./business-rule-root.component.css']
})
export class BusinessRuleRootComponent implements OnInit {

  public invert: boolean = true;
  public onDragDrop$ = new Subject<CdkDragDrop<Array<Rule>>>();

  processedData = this.businessRuleEditorService.processedData

  constructor(private businessRuleEditorService: BusinessRuleEditorService) {}

  ngOnInit() {
    installPatch()
    this.onDragDrop$.subscribe(this.onDragDrop);
  }

  private onDragDrop = (event: CdkDragDrop<Array<Rule>>) => {
    if (event.container === event.previousContainer) {

      moveItemInArray(
          event.container.data,
          event.previousIndex,
          event.currentIndex
      );
    } else {
      transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
      );
    }
  };
}

