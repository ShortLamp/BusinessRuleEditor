import {Component, Input, Output} from '@angular/core';
import {Rule, RuleLeaf} from "../Services/BusinessRuleEditorService"
import {BusinessRuleEditorService} from "../Services/BusinessRuleEditorService";

interface ruleStructure {
  label: string,
  options: null | any[]
}

@Component({
  selector: 'app-rule-creator',
  templateUrl: './rule-creator.component.html',
  styleUrls: ['./rule-creator.component.scss']
})
export class RuleCreatorComponent {
    operatorDict = new Map<string, string>([
        ["Equals", "Eq"],
    ["Not equals", "NE"],
    ["Greater than", "GT"],
    ["Greater than or equal", "GTE"],
    ["Less than", "LT"],
    ["Less than or equal", "LTE"],
    ["In", "IN"],
    ["Not in", "NIN"]])

    valueControls: string[] = ["text", "combo", "radio", "checkbox", "checkboxgroup", "datepicker",
      "timepicker", "hidden", "calculation", "signaturepad", "geolocation", "search", "likert",
      "twofactorverification"]
    title = 'RuleCreator';
    selected: ruleStructure = {
      label: "",
      options: null
    };
    operator: string = ""
    value: string = "";
    pages: any[] = [
      {
          "_id": {
              "$oid": "63d08fe5971a3fb973b3df95"
          },
          "Rules": [],
          "ExternalRuleHandlers": [],
          "SubmitsApplication": false,
          "SubmitLabel": "Submit",
          "PageTitle": "Page 1",
          "MenuTitle": "Page 1",
          "Controls": [
              {
                  "Validators": [
                      {
                          "ValidatorId": "62fdb83ef54f2e923d5e1b1d",
                          "Message": "Please enter alphabetic characters only"
                      }
                  ],
                  "VisibilityRule": null,
                  "Rows": 1,
                  "Maxlength": null,
                  "Size": "m",
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "Placeholder": "",
                  "PersistValue": false,
                  "MobileKeyboardOptions": {
                      "Autocapitalise": null,
                      "Autocomplete": null,
                      "Spellcheck": null,
                      "Autocorrect": null
                  },
                  "Floating": false,
                  "Label": "Name",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 3,
                  "Name": "Name",
                  "OrderPosition": 1,
                  "ParentControl": null,
                  "Type": "text"
              },
              {
                  "Validators": [
                      {
                          "ValidatorId": "62fdb83ef54f2e923d5e1b1e",
                          "Message": "Please enter alphanumeric characters only"
                      }
                  ],
                  "VisibilityRule": null,
                  "Rows": 4,
                  "Maxlength": null,
                  "Size": "m",
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "Placeholder": "",
                  "PersistValue": false,
                  "MobileKeyboardOptions": {
                      "Autocapitalise": null,
                      "Autocomplete": null,
                      "Spellcheck": null,
                      "Autocorrect": null
                  },
                  "Floating": false,
                  "Label": "Text area",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 4,
                  "Name": "Text_area",
                  "OrderPosition": 2,
                  "ParentControl": null,
                  "Type": "text"
              },
              {
                  "VisibilityRule": null,
                  "Rows": 1,
                  "UseAutocomplete": false,
                  "UseCloudSearch": null,
                  "PersistValue": false,
                  "Floating": false,
                  "OptionFilterControl": "",
                  "AllowMultipleSelect": false,
                  "OptionSource": {
                      "ResponseFieldMap": [
                          {
                              "Source": "Description",
                              "MapType": "Content",
                              "Target": "Value"
                          },
                          {
                              "Source": "Description",
                              "MapType": "Content",
                              "Target": "Description"
                          }
                      ],
                      "Type": "Prebuilt",
                      "DataSetId": "62fdb83ef54f2e923d5e1b2c",
                      "Sort": "Unsorted"
                  },
                  "Options": [
                      {
                          "Value": "Australian Capital Territory",
                          "Description": "Australian Capital Territory",
                          "Category": ""
                      },
                      {
                          "Value": "New South Wales",
                          "Description": "New South Wales",
                          "Category": ""
                      },
                      {
                          "Value": "Northern Territory",
                          "Description": "Northern Territory",
                          "Category": ""
                      },
                      {
                          "Value": "Queensland",
                          "Description": "Queensland",
                          "Category": ""
                      },
                      {
                          "Value": "South Australia",
                          "Description": "South Australia",
                          "Category": ""
                      },
                      {
                          "Value": "Tasmania",
                          "Description": "Tasmania",
                          "Category": ""
                      },
                      {
                          "Value": "Victoria",
                          "Description": "Victoria",
                          "Category": ""
                      },
                      {
                          "Value": "Western Australia",
                          "Description": "Western Australia",
                          "Category": ""
                      }
                  ],
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "Label": "Combo",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 5,
                  "Name": "Combo",
                  "OrderPosition": 3,
                  "ParentControl": null,
                  "Type": "combo"
              },
              {
                  "VisibilityRule": null,
                  "PersistValue": false,
                  "Floating": false,
                  "DisplayAsButton": true,
                  "ScoringEnabled": false,
                  "DisplayAsCarousel": false,
                  "OptionFilterControl": "",
                  "AllowMultipleSelect": false,
                  "OptionSource": {
                      "Type": "Static",
                      "Options": [
                          {
                              "Value": "A",
                              "Description": "A",
                              "Category": ""
                          },
                          {
                              "Value": "B",
                              "Description": "B",
                              "Category": ""
                          },
                          {
                              "Value": "C",
                              "Description": "C",
                              "Category": ""
                          }
                      ]
                  },
                  "Options": [
                      {
                          "Value": "A",
                          "Description": "A",
                          "Category": ""
                      },
                      {
                          "Value": "B",
                          "Description": "B",
                          "Category": ""
                      },
                      {
                          "Value": "C",
                          "Description": "C",
                          "Category": ""
                      }
                  ],
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "Label": "Radio Group",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 6,
                  "Name": "Radio_group",
                  "OrderPosition": 4,
                  "ParentControl": null,
                  "Type": "radio"
              },
              {
                  "VisibilityRule": null,
                  "Value": "checked",
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "PersistValue": false,
                  "Floating": false,
                  "Label": "Checkbox",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 7,
                  "Name": "Checkbox",
                  "OrderPosition": 5,
                  "ParentControl": null,
                  "Type": "checkbox"
              },
              {
                  "VisibilityRule": null,
                  "PersistValue": false,
                  "Floating": false,
                  "ScoringEnabled": false,
                  "DisplayAsCarousel": false,
                  "OptionFilterControl": "",
                  "AllowMultipleSelect": true,
                  "OptionSource": {
                      "Type": "Static",
                      "Options": [
                          {
                              "Value": "Male",
                              "Description": "Male",
                              "Category": ""
                          },
                          {
                              "Value": "Female",
                              "Description": "Female",
                              "Category": ""
                          }
                      ]
                  },
                  "Options": [
                      {
                          "Value": "Male",
                          "Description": "Male",
                          "Category": ""
                      },
                      {
                          "Value": "Female",
                          "Description": "Female",
                          "Category": ""
                      }
                  ],
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "Label": "Checkbox Group",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 8,
                  "Name": "Checkbox_group",
                  "OrderPosition": 6,
                  "ParentControl": null,
                  "Type": "checkboxgroup"
              },
              {
                  "VisibilityRule": null,
                  "MinDate": "",
                  "MaxDate": "",
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "Placeholder": "",
                  "IsHidden": false,
                  "Floating": false,
                  "Label": "Date",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 9,
                  "Name": "Date",
                  "OrderPosition": 7,
                  "ParentControl": null,
                  "Type": "datepicker"
              },
              {
                  "VisibilityRule": null,
                  "DefaultValue": "",
                  "IdentificationField": false,
                  "Tooltip": "",
                  "Placeholder": "",
                  "Floating": false,
                  "MinuteIncrement": 5,
                  "Label": "Time",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 10,
                  "Name": "Time",
                  "OrderPosition": 8,
                  "ParentControl": null,
                  "Type": "timepicker"
              },
              {
                  "VisibilityRule": null,
                  "Content": "This is a label",
                  "Id": 11,
                  "Name": "Label",
                  "OrderPosition": 9,
                  "ParentControl": null,
                  "Type": "label"
              },
              {
                  "VisibilityRule": null,
                  "Content": "This is heading 1",
                  "Level": 1,
                  "Id": 12,
                  "Name": "Heading",
                  "OrderPosition": 10,
                  "ParentControl": null,
                  "Type": "heading"
              },
              {
                  "VisibilityRule": null,
                  "AllowedFileTypes": [],
                  "MaximumFileSizePerFile": 10,
                  "MaximumFileUploadCount": 5,
                  "Tooltip": "",
                  "PersistValue": true,
                  "Label": "File",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 13,
                  "Name": "File",
                  "OrderPosition": 11,
                  "ParentControl": null,
                  "Type": "filebrowser"
              },
              {
                  "VisibilityRule": null,
                  "Content": "\u003cp\u003eThis is html\u003c/p\u003e",
                  "Id": 14,
                  "Name": "Html_content",
                  "OrderPosition": 12,
                  "ParentControl": null,
                  "Type": "html"
              },
              {
                  "VisibilityRule": null,
                  "DefaultValue": null,
                  "IdentificationField": false,
                  "Label": "Hidden control",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 15,
                  "Name": "Hidden_control",
                  "OrderPosition": 13,
                  "ParentControl": null,
                  "Type": "hidden"
              },
              {
                  "VisibilityRule": null,
                  "Label": "Calculation",
                  "CalculationExpression": "\u0027{%Name%}\u0027",
                  "Size": "m",
                  "Tooltip": "",
                  "FormatAsCurrency": false,
                  "IsHidden": false,
                  "Floating": false,
                  "Id": 16,
                  "Name": "Calculation",
                  "OrderPosition": 14,
                  "ParentControl": null,
                  "Type": "calculation"
              },
              {
                  "VisibilityRule": null,
                  "Tooltip": "",
                  "Label": "Signature",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 17,
                  "Name": "Signature",
                  "OrderPosition": 15,
                  "ParentControl": null,
                  "Type": "signaturepad"
              },
              {
                  "VisibilityRule": null,
                  "DisplayStyleGeolocation": "coordinates",
                  "Tooltip": "",
                  "Label": "Geo",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 18,
                  "Name": "Geo",
                  "OrderPosition": 16,
                  "ParentControl": null,
                  "Type": "geolocation"
              },
              {
                  "VisibilityRule": null,
                  "Label": "Dynamic",
                  "Placeholder": "",
                  "SearchSource": {
                      "RequestFieldMap": [],
                      "ResponseFieldMap": [],
                      "ServiceEndpointId": "635b3b670034c6848a0d4e16",
                      "RestHttpMethod": null,
                      "RestRequestFormat": null,
                      "RestRequestRoot": null,
                      "MaxResults": 20,
                      "MapAllFieldsInRequest": false,
                      "ResponseFieldsMatchRequest": false
                  },
                  "RetainValue": false,
                  "StaticOption": false,
                  "StaticOptionMessage": null,
                  "SearchDisplayField": null,
                  "AutoSelectSingleResult": false,
                  "Floating": false,
                  "MinimumInputLength": 4,
                  "ManualSearch": false,
                  "SearchAgainAndClear": null,
                  "TriggerSaveEvent": false,
                  "Validators": [
                      {
                          "ValidatorId": "62fdb83ef54f2e923d5e1b1f",
                          "Message": "Please enter a valid currency value"
                      }
                  ],
                  "Size": "l",
                  "Id": 19,
                  "Name": "Dynamic",
                  "OrderPosition": 17,
                  "ParentControl": null,
                  "Type": "search"
              },
              {
                  "VisibilityRule": null,
                  "Scale": [
                      {
                          "Value": "1",
                          "Description": "Strongly Disagree"
                      },
                      {
                          "Value": "2",
                          "Description": "Disagree"
                      },
                      {
                          "Value": "3",
                          "Description": "Neutral"
                      },
                      {
                          "Value": "4",
                          "Description": "Agree"
                      },
                      {
                          "Value": "5",
                          "Description": "Strongly Agree"
                      }
                  ],
                  "Questions": [],
                  "Tooltip": "",
                  "Label": "Likert",
                  "Mandatory": false,
                  "MandatoryMessage": "",
                  "AllowPrepopulate": false,
                  "Id": 20,
                  "Name": "Likert",
                  "OrderPosition": 18,
                  "ParentControl": null,
                  "Type": "likert"
              },
              {
                  "VisibilityRule": null,
                  "PhotoSize": "m",
                  "Orientation": "portrait",
                  "TakePhotoLabel": "Take Photo",
                  "Tooltip": "",
                  "PersistValue": true,
                  "PhotoFillColour": "#585858",
                  "Label": "Photo Booth",
                  "Mandatory": false,
                  "MandatoryMessage": null,
                  "AllowPrepopulate": false,
                  "Id": 21,
                  "Name": "Photo_booth",
                  "OrderPosition": 19,
                  "ParentControl": null,
                  "Type": "photobooth"
              },
              {
                  "VisibilityRule": null,
                  "Label": "DocGen",
                  "Content": "\u003ca href=\\'{%Docgen%}\\'\u003ePlease click here to download your document\u003c/a\u003e",
                  "DocumentTemplateFile": "TestingDoc (3) (1) (3).docm",
                  "DocumentName": "Testing",
                  "Regenerate": false,
                  "AppendUploadedFiles": false,
                  "RenderRole": "62fdb834f54f2e923d5e1b12",
                  "Id": 22,
                  "Name": "Docgen",
                  "OrderPosition": 20,
                  "ParentControl": null,
                  "Type": "docgen"
              },
              {
                  "VisibilityRule": null,
                  "Validators": [],
                  "NavigateOnSuccess": false,
                  "BarcodeType": "qr",
                  "ScanWidth": 50,
                  "ScanHeight": 25,
                  "ScanBarcodeLabel": "Scan Barcode",
                  "Tooltip": "",
                  "PersistValue": true,
                  "Placeholder": "",
                  "DisplayValue": false,
                  "Label": "BarCode scanner",
                  "Mandatory": false,
                  "MandatoryMessage": null,
                  "AllowPrepopulate": false,
                  "Id": 23,
                  "Name": "Barcode_scanner",
                  "OrderPosition": 21,
                  "ParentControl": null,
                  "Type": "barcodescanner"
              }
          ],
          "PageId": 1,
          "PageType": "user",
          "SortOrder": 1,
          "SubPage": false,
          "ProductId": "63d07526971a3fb973b3de9a",
          "ProductVersion": 8
      },
      {
          "_id": {
              "$oid": "63d08fe5971a3fb973b3df96"
          },
          "Rules": [],
          "ExternalRuleHandlers": [],
          "SubmitsApplication": false,
          "SubmitLabel": "Submit",
          "PageTitle": "Page2",
          "MenuTitle": "Page2",
          "Controls": [
              {
                  "VisibilityRule": null,
                  "BackgroundImage": null,
                  "BackgroundColor": null,
                  "FontColor": null,
                  "ButtonLabel": null,
                  "Label": "Control Group",
                  "Id": 24,
                  "Name": "Control_group",
                  "OrderPosition": 22,
                  "ParentControl": null,
                  "Type": "group",
                  "Controls": [
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 1,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "Name",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 25,
                          "Name": "Name_1",
                          "OrderPosition": 23,
                          "ParentControl": 24,
                          "Type": "text"
                      },
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 4,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "Text area",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 26,
                          "Name": "Text_area_1",
                          "OrderPosition": 24,
                          "ParentControl": 24,
                          "Type": "text"
                      },
                      {
                          "VisibilityRule": null,
                          "Rows": 1,
                          "UseAutocomplete": false,
                          "UseCloudSearch": null,
                          "PersistValue": false,
                          "Floating": false,
                          "OptionFilterControl": "",
                          "AllowMultipleSelect": false,
                          "OptionSource": {
                              "ResponseFieldMap": [
                                  {
                                      "Source": "Description",
                                      "MapType": "Content",
                                      "Target": "Value"
                                  },
                                  {
                                      "Source": "Description",
                                      "MapType": "Content",
                                      "Target": "Description"
                                  }
                              ],
                              "Type": "Prebuilt",
                              "DataSetId": "62fdb83ef54f2e923d5e1b2c",
                              "Sort": "Unsorted"
                          },
                          "Options": [
                              {
                                  "Value": "Australian Capital Territory",
                                  "Description": "Australian Capital Territory",
                                  "Category": ""
                              },
                              {
                                  "Value": "New South Wales",
                                  "Description": "New South Wales",
                                  "Category": ""
                              },
                              {
                                  "Value": "Northern Territory",
                                  "Description": "Northern Territory",
                                  "Category": ""
                              },
                              {
                                  "Value": "Queensland",
                                  "Description": "Queensland",
                                  "Category": ""
                              },
                              {
                                  "Value": "South Australia",
                                  "Description": "South Australia",
                                  "Category": ""
                              },
                              {
                                  "Value": "Tasmania",
                                  "Description": "Tasmania",
                                  "Category": ""
                              },
                              {
                                  "Value": "Victoria",
                                  "Description": "Victoria",
                                  "Category": ""
                              },
                              {
                                  "Value": "Western Australia",
                                  "Description": "Western Australia",
                                  "Category": ""
                              }
                          ],
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Label": "Combo",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 27,
                          "Name": "Combo_1",
                          "OrderPosition": 25,
                          "ParentControl": 24,
                          "Type": "combo"
                      },
                      {
                          "VisibilityRule": null,
                          "PersistValue": false,
                          "Floating": false,
                          "DisplayAsButton": true,
                          "ScoringEnabled": false,
                          "DisplayAsCarousel": false,
                          "OptionFilterControl": "",
                          "AllowMultipleSelect": false,
                          "OptionSource": {
                              "Type": "Static",
                              "Options": [
                                  {
                                      "Value": "A",
                                      "Description": "A",
                                      "Category": ""
                                  },
                                  {
                                      "Value": "B",
                                      "Description": "B",
                                      "Category": ""
                                  },
                                  {
                                      "Value": "C",
                                      "Description": "C",
                                      "Category": ""
                                  }
                              ]
                          },
                          "Options": [
                              {
                                  "Value": "A",
                                  "Description": "A",
                                  "Category": ""
                              },
                              {
                                  "Value": "B",
                                  "Description": "B",
                                  "Category": ""
                              },
                              {
                                  "Value": "C",
                                  "Description": "C",
                                  "Category": ""
                              }
                          ],
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Label": "Radio Group",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 28,
                          "Name": "Radio_group_1",
                          "OrderPosition": 26,
                          "ParentControl": 24,
                          "Type": "radio"
                      },
                      {
                          "VisibilityRule": null,
                          "Value": "checked",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "PersistValue": false,
                          "Floating": false,
                          "Label": "Checkbox",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 29,
                          "Name": "Checkbox_1",
                          "OrderPosition": 27,
                          "ParentControl": 24,
                          "Type": "checkbox"
                      },
                      {
                          "VisibilityRule": null,
                          "PersistValue": false,
                          "Floating": false,
                          "ScoringEnabled": false,
                          "DisplayAsCarousel": false,
                          "OptionFilterControl": "",
                          "AllowMultipleSelect": true,
                          "OptionSource": {
                              "Type": "Static",
                              "Options": [
                                  {
                                      "Value": "Male",
                                      "Description": "Male",
                                      "Category": ""
                                  },
                                  {
                                      "Value": "Female",
                                      "Description": "Female",
                                      "Category": ""
                                  }
                              ]
                          },
                          "Options": [
                              {
                                  "Value": "Male",
                                  "Description": "Male",
                                  "Category": ""
                              },
                              {
                                  "Value": "Female",
                                  "Description": "Female",
                                  "Category": ""
                              }
                          ],
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Label": "Checkbox Group",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 30,
                          "Name": "Checkbox_group_1",
                          "OrderPosition": 28,
                          "ParentControl": 24,
                          "Type": "checkboxgroup"
                      },
                      {
                          "VisibilityRule": null,
                          "MinDate": "",
                          "MaxDate": "",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "IsHidden": false,
                          "Floating": false,
                          "Label": "Date",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 31,
                          "Name": "Date_1",
                          "OrderPosition": 29,
                          "ParentControl": 24,
                          "Type": "datepicker"
                      },
                      {
                          "VisibilityRule": null,
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "Floating": false,
                          "MinuteIncrement": 5,
                          "Label": "Time",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 32,
                          "Name": "Time_1",
                          "OrderPosition": 30,
                          "ParentControl": 24,
                          "Type": "timepicker"
                      },
                      {
                          "VisibilityRule": null,
                          "Content": "This is a label",
                          "Id": 33,
                          "Name": "Label_1",
                          "OrderPosition": 31,
                          "ParentControl": 24,
                          "Type": "label"
                      },
                      {
                          "VisibilityRule": null,
                          "Content": "This is heading 1",
                          "Level": 1,
                          "Id": 34,
                          "Name": "Heading_1",
                          "OrderPosition": 32,
                          "ParentControl": 24,
                          "Type": "heading"
                      },
                      {
                          "VisibilityRule": null,
                          "AllowedFileTypes": [],
                          "MaximumFileSizePerFile": 10,
                          "MaximumFileUploadCount": 5,
                          "Tooltip": "",
                          "PersistValue": true,
                          "Label": "File",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 35,
                          "Name": "File_1",
                          "OrderPosition": 33,
                          "ParentControl": 24,
                          "Type": "filebrowser"
                      },
                      {
                          "VisibilityRule": null,
                          "Content": "\u003cp\u003eThis is html\u003c/p\u003e",
                          "Id": 36,
                          "Name": "Html_content_1",
                          "OrderPosition": 34,
                          "ParentControl": 24,
                          "Type": "html"
                      },
                      {
                          "VisibilityRule": null,
                          "DefaultValue": null,
                          "IdentificationField": false,
                          "Label": "Hidden control",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 37,
                          "Name": "Hidden_control_1",
                          "OrderPosition": 35,
                          "ParentControl": 24,
                          "Type": "hidden"
                      },
                      {
                          "VisibilityRule": null,
                          "Label": "Calculation",
                          "CalculationExpression": "\u0027{%Name_1%}\u0027",
                          "Size": "m",
                          "Tooltip": "",
                          "FormatAsCurrency": false,
                          "IsHidden": false,
                          "Floating": false,
                          "Id": 38,
                          "Name": "Calculation_1",
                          "OrderPosition": 36,
                          "ParentControl": 24,
                          "Type": "calculation"
                      },
                      {
                          "VisibilityRule": null,
                          "Tooltip": "",
                          "Label": "Signature",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 39,
                          "Name": "Signature_1",
                          "OrderPosition": 37,
                          "ParentControl": 24,
                          "Type": "signaturepad"
                      },
                      {
                          "VisibilityRule": null,
                          "DisplayStyleGeolocation": "coordinates",
                          "Tooltip": "",
                          "Label": "Geo",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 40,
                          "Name": "Geo_1",
                          "OrderPosition": 38,
                          "ParentControl": 24,
                          "Type": "geolocation"
                      },
                      {
                          "VisibilityRule": null,
                          "Label": "Dynamic",
                          "Placeholder": "",
                          "SearchSource": {
                              "RequestFieldMap": [],
                              "ResponseFieldMap": [],
                              "ServiceEndpointId": "635b3b670034c6848a0d4e16",
                              "RestHttpMethod": null,
                              "RestRequestFormat": null,
                              "RestRequestRoot": null,
                              "MaxResults": 20,
                              "MapAllFieldsInRequest": false,
                              "ResponseFieldsMatchRequest": false
                          },
                          "RetainValue": false,
                          "StaticOption": false,
                          "StaticOptionMessage": null,
                          "SearchDisplayField": null,
                          "AutoSelectSingleResult": false,
                          "Floating": false,
                          "MinimumInputLength": 4,
                          "ManualSearch": false,
                          "SearchAgainAndClear": null,
                          "TriggerSaveEvent": false,
                          "Validators": [],
                          "Size": "l",
                          "Id": 41,
                          "Name": "Dynamic_1",
                          "OrderPosition": 39,
                          "ParentControl": 24,
                          "Type": "search"
                      },
                      {
                          "VisibilityRule": null,
                          "Scale": [
                              {
                                  "Value": "1",
                                  "Description": "Strongly Disagree"
                              },
                              {
                                  "Value": "2",
                                  "Description": "Disagree"
                              },
                              {
                                  "Value": "3",
                                  "Description": "Neutral"
                              },
                              {
                                  "Value": "4",
                                  "Description": "Agree"
                              },
                              {
                                  "Value": "5",
                                  "Description": "Strongly Agree"
                              }
                          ],
                          "Questions": [],
                          "Tooltip": "",
                          "Label": "Likert",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 42,
                          "Name": "Likert_1",
                          "OrderPosition": 40,
                          "ParentControl": 24,
                          "Type": "likert"
                      },
                      {
                          "VisibilityRule": null,
                          "PhotoSize": "m",
                          "Orientation": "portrait",
                          "TakePhotoLabel": "Take Photo",
                          "Tooltip": "",
                          "PersistValue": true,
                          "PhotoFillColour": "#585858",
                          "Label": "Photo Booth",
                          "Mandatory": false,
                          "MandatoryMessage": null,
                          "AllowPrepopulate": false,
                          "Id": 43,
                          "Name": "Photo_booth_1",
                          "OrderPosition": 41,
                          "ParentControl": 24,
                          "Type": "photobooth"
                      },
                      {
                          "VisibilityRule": null,
                          "Label": "DocGen",
                          "Content": "\u003ca href=\\'{%Docgen_1%}\\'\u003ePlease click here to download your document\u003c/a\u003e",
                          "DocumentTemplateFile": "TestingDoc (3) (1) (3).docm",
                          "DocumentName": "Testing",
                          "Regenerate": false,
                          "AppendUploadedFiles": false,
                          "RenderRole": "62fdb834f54f2e923d5e1b12",
                          "Id": 44,
                          "Name": "Docgen_1",
                          "OrderPosition": 42,
                          "ParentControl": 24,
                          "Type": "docgen"
                      },
                      {
                          "VisibilityRule": null,
                          "Validators": [],
                          "NavigateOnSuccess": false,
                          "BarcodeType": "qr",
                          "ScanWidth": 50,
                          "ScanHeight": 25,
                          "ScanBarcodeLabel": "Scan Barcode",
                          "Tooltip": "",
                          "PersistValue": true,
                          "Placeholder": "",
                          "DisplayValue": false,
                          "Label": "BarCode scanner",
                          "Mandatory": false,
                          "MandatoryMessage": null,
                          "AllowPrepopulate": false,
                          "Id": 45,
                          "Name": "Barcode_scanner_1",
                          "OrderPosition": 43,
                          "ParentControl": 24,
                          "Type": "barcodescanner"
                      }
                  ]
              },
              {
                  "SummaryFields": [],
                  "UniqueFields": [],
                  "TotalFields": [],
                  "VisibilityRule": null,
                  "MasterControl": null,
                  "SlaveControls": [],
                  "DisplayStyle": "table",
                  "DisplayRowNumber": false,
                  "MinimumCount": null,
                  "MinimumCountField": null,
                  "MaximumCount": null,
                  "MaximumCountField": null,
                  "MaximumCountSource": "Value",
                  "MinimumCountSource": "Value",
                  "MasterRepeater": null,
                  "AddRowButtonLabel": "Add more",
                  "UniqueValidationMessage": "Uniqueness validation failed. Please remove a duplicate row.",
                  "Label": "Repeatable Table",
                  "Id": 46,
                  "Name": "Repeatable_table",
                  "OrderPosition": 44,
                  "ParentControl": null,
                  "Type": "repeater",
                  "Controls": [
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 1,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "First Name",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 47,
                          "Name": "First_name",
                          "OrderPosition": 45,
                          "ParentControl": 46,
                          "Type": "text"
                      },
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 1,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "Last Name",
                          "Mandatory": true,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 48,
                          "Name": "Last_name",
                          "OrderPosition": 46,
                          "ParentControl": 46,
                          "Type": "text"
                      },
                      {
                          "VisibilityRule": null,
                          "Value": "checked",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "PersistValue": false,
                          "Floating": false,
                          "Label": "Graduates",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 49,
                          "Name": "Graduates",
                          "OrderPosition": 47,
                          "ParentControl": 46,
                          "Type": "checkbox"
                      }
                  ]
              },
              {
                  "SummaryFields": [
                      "First_name2",
                      "Last_name2",
                      "Graduates2"
                  ],
                  "UniqueFields": [
                      "Last_name2"
                  ],
                  "TotalFields": [
                      "First_name2"
                  ],
                  "VisibilityRule": null,
                  "MasterControl": null,
                  "SlaveControls": [],
                  "DisplayStyle": "vertical",
                  "DisplayRowNumber": false,
                  "MinimumCount": 0,
                  "MinimumCountField": null,
                  "MaximumCount": 10,
                  "MaximumCountField": null,
                  "MaximumCountSource": "Value",
                  "MinimumCountSource": "Value",
                  "MasterRepeater": null,
                  "AddRowButtonLabel": "Add more",
                  "UniqueValidationMessage": "Uniqueness validation failed. Please remove a duplicate row.",
                  "Label": "Repeatable Vertical",
                  "Id": 50,
                  "Name": "Repeatable_vertical",
                  "OrderPosition": 48,
                  "ParentControl": null,
                  "Type": "repeater",
                  "Controls": [
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 1,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "First Name2",
                          "Mandatory": true,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 51,
                          "Name": "First_name2",
                          "OrderPosition": 49,
                          "ParentControl": 50,
                          "Type": "text"
                      },
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 1,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "Last Name2",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 52,
                          "Name": "Last_name2",
                          "OrderPosition": 50,
                          "ParentControl": 50,
                          "Type": "text"
                      },
                      {
                          "VisibilityRule": null,
                          "Value": "checked",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "PersistValue": false,
                          "Floating": false,
                          "Label": "Graduates2",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 53,
                          "Name": "Graduates2",
                          "OrderPosition": 51,
                          "ParentControl": 50,
                          "Type": "checkbox"
                      }
                  ]
              },
              {
                  "SummaryFields": [
                      "First_name3"
                  ],
                  "UniqueFields": [
                      "Last_name3"
                  ],
                  "TotalFields": [
                      "First_name3"
                  ],
                  "VisibilityRule": null,
                  "MasterControl": "",
                  "SlaveControls": [],
                  "DisplayStyle": "page",
                  "DisplayRowNumber": false,
                  "MinimumCount": 1,
                  "MinimumCountField": null,
                  "MaximumCount": 5,
                  "MaximumCountField": null,
                  "MaximumCountSource": "Value",
                  "MinimumCountSource": "Value",
                  "MasterRepeater": null,
                  "AddRowButtonLabel": "Add more",
                  "UniqueValidationMessage": "Uniqueness validation failed. Please remove a duplicate row.",
                  "Label": "Repeatable Page",
                  "Id": 54,
                  "Name": "Repeatable_page",
                  "OrderPosition": 52,
                  "ParentControl": null,
                  "Type": "repeater",
                  "Controls": [
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 1,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "First Name3",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 55,
                          "Name": "First_name3",
                          "OrderPosition": 53,
                          "ParentControl": 54,
                          "Type": "text"
                      },
                      {
                          "Validators": [],
                          "VisibilityRule": null,
                          "Rows": 1,
                          "Maxlength": null,
                          "Size": "m",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "Placeholder": "",
                          "PersistValue": false,
                          "MobileKeyboardOptions": {
                              "Autocapitalise": null,
                              "Autocomplete": null,
                              "Spellcheck": null,
                              "Autocorrect": null
                          },
                          "Floating": false,
                          "Label": "Last Name3",
                          "Mandatory": false,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 56,
                          "Name": "Last_name3",
                          "OrderPosition": 54,
                          "ParentControl": 54,
                          "Type": "text"
                      },
                      {
                          "VisibilityRule": null,
                          "Value": "checked",
                          "DefaultValue": "",
                          "IdentificationField": false,
                          "Tooltip": "",
                          "PersistValue": false,
                          "Floating": false,
                          "Label": "Graduates3",
                          "Mandatory": true,
                          "MandatoryMessage": "",
                          "AllowPrepopulate": false,
                          "Id": 57,
                          "Name": "Graduates3",
                          "OrderPosition": 55,
                          "ParentControl": 54,
                          "Type": "checkbox"
                      }
                  ]
              }
          ],
          "PageId": 3,
          "PageType": "user",
          "SortOrder": 2,
          "SubPage": false,
          "ProductId": "63d07526971a3fb973b3de9a",
          "ProductVersion": 8
      }
    ]

    @Input() rule: RuleLeaf | Rule;

    constructor(private businessRuleEditorService: BusinessRuleEditorService) {
    }

formControls: ruleStructure[] = [];

    ngOnInit() {

      for (let page of this.pages){

        this.getControlsFromList(page.Controls);
        console.log(page)
      }
      console.log(this.formControls)
    }

    //get controls list
    getControlsFromList(data: any) {
      for (let control of data){
        console.log(control)
        if (control.Controls){
        } else if (this.valueControls.includes(control.Type)){
          this.formControls.push({
            label: control.Label,
            options: control.Options
          })
        }
      }
    }

    displaySelected() {
      console.log(this.selected)
    }


    saveRuleLeaf() {
        console.log("saving")
        if (typeof this.rule === 'object' && this.rule !== null && 'RuleType' in this.rule && this.rule.RuleType === "EVAL"){

            this.rule.Value = {
                id: this.businessRuleEditorService.getAvailableId().toString(),
                CompareTo: "Value",
                Operator: this.operatorDict.get(this.operator),
                Field: this.selected.label,
                Scope: "unknown",
                Value: this.value,
            }
        }
        console.log(this.rule)
    }

}

