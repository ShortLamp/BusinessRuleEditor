import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {Item, Rule, RuleLeaf} from "../Services/BusinessRuleEditorService";
import {BusinessRuleEditorService} from "../Services/BusinessRuleEditorService";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('onDragDrop') public onDragDrop$!: Subject<CdkDragDrop<Array<Item>>>;
  @Input() invert!: boolean;

  @Input() rule: Rule | RuleLeaf;

  constructor(private businessRuleEditorService: BusinessRuleEditorService) {}

  ngOnInit() {}

  convertToString(rule: Rule | RuleLeaf): string {
    if (typeof rule === 'object' && rule !== null && 'RuleType' in rule &&  rule.RuleType==="EVAL") {
      if ('Field' in rule.Value){
        return rule.Value.Field + " " + rule.Value.Operator + " " + rule.Value.Value.toString();
      }
    } else if (typeof rule === 'object' && rule !== null && 'RuleType' in rule) {
      return rule.RuleType
    }
  }

  isRuleLeaf(rule: Rule | RuleLeaf): boolean {
    return typeof rule === 'object' && rule !== null && 'RuleType' in rule && rule.RuleType === "EVAL";

  }

  isEmptyRuleLeaf(rule: RuleLeaf | Rule): boolean {
    return typeof rule === 'object' && rule !== null && 'RuleType' in rule && rule.RuleType === "EVAL" && rule.Value===null;
  }

  addNewItem() {
    if (typeof this.rule === 'object' && this.rule !== null && 'RuleType' in this.rule) {
      if (Array.isArray(this.rule.Value)) {
        this.rule.Value.push({
          id: this.businessRuleEditorService.getAvailableId().toString(),
          RuleType: "EVAL",
          Value: null
        })

      }

    }
  }

  addNewNode(type: number){
    if (typeof this.rule === 'object' && this.rule !== null && Array.isArray(this.rule.Value)){
      if ('RuleType' in this.rule){

        if (type===1) {
          this.rule.Value.push({
            id: this.businessRuleEditorService.getAvailableId().toString(),
            RuleType: "AND",
            Value: []
          })
        } else if (type===2) {

          this.rule.Value.push({
            id: this.businessRuleEditorService.getAvailableId().toString(),
            RuleType: "OR",
            Value: []
          })
        }
      }
    }
  }

  removeNode() {
    this.businessRuleEditorService.deleteNodeById(Number.parseInt(this.rule.id));
  }
}
