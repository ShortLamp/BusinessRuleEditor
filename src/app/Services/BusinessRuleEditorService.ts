import {Injectable} from "@angular/core";


export type Item = {
    id: string;
    name: string;
    children: Array<Item>;
};

export type Rule = {
    id: string;
    RuleType: string;
    Value: Rule[] | RuleLeaf;
};

export type RuleLeaf = {
    id: string;
    CompareTo: string;
    Operator: string;
    Field: string;
    Scope: string;
    Value: string | string[];
};

@Injectable({
    providedIn: 'root'
})

export class BusinessRuleEditorService {
    usedIds: number[] = []

    testData: any[] = [
        {
            RuleType: 'AND',
            Value: [
                {
                    RuleType: 'EVAL',
                    Value: {
                        CompareTo: 'Value',
                        Operator: 'IN',
                        Field: 'Days_open',
                        Scope: 'unknown',
                        Value: ['Monday', 'Tuesday'],
                    },
                },
                {
                    RuleType: 'EVAL',
                    Value: {
                        CompareTo: 'Value',
                        Operator: 'LT',
                        Field: 'Number_of_participants',
                        Scope: 'unknown',
                        Value: '50',
                    },
                },
            ],
        },
    ];
    processedData: Rule[] = [];

    constructor() {

        this.processedData.push(this.assignIdsToRules(this.testData[0]));

    }


    getAvailableId() {
        let id = 0;
        while (this.usedIds.includes(id)) {
            id ++;
        }
        this.usedIds.push(id)
        return id;
    }


    assignIdsToRules(tree) {

        const traverse = (node) => {
            const newNode = { ...node };
            if (node.RuleType) {
                newNode.id = this.getAvailableId().toString();
            }
            if (node.Value && Array.isArray(node.Value)) {
                newNode.Value = node.Value.map(child => traverse(child));
            }
            return newNode;
        }

        return traverse(tree);
    }

    removeNumberFromArray(numToRemove: number) {
        const index = this.usedIds.indexOf(numToRemove);
        if (index !== -1) {
            this.usedIds.splice(index, 1);
        }
    }

    deleteNodeChildIfEqualsId(node: Rule, id: number){
        if (Array.isArray(node.Value) && node.RuleType!="EVAL"){
            for (let i=0; i<node.Value.length; i++){
                if (node.Value[i].id===id.toString()){
                    node.Value.splice(i,1);
                    return;
                } else {
                    this.deleteNodeChildIfEqualsId(node.Value[i], id)
                }
            }
        }
    }

    deleteNodeById(id: number){
        this.deleteNodeChildIfEqualsId(this.processedData[0], id);
    }


}