define("WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.model", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$FillUserWtfWalletItemAddress", "WTF_MOB.model$Form_fillAddressRec", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$App_UserWtfAddressList", "WTF_MBP.controller$UserWtfAddress_GetAll", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_BP.model$App_UserWtfAddressRec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPModel) {
var OS = OutSystems.Internal;
var GetLocalUSERWTFSAggrRec = (function (_super) {
__extends(GetLocalUSERWTFSAggrRec, _super);
function GetLocalUSERWTFSAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalUSERWTFSAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetLocalUSERWTFSAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalUSERWTFSAggrRec.init();
return GetLocalUSERWTFSAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Form_fillAddress", "form_fillAddressVar", "Form_fillAddress", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.Form_fillAddressRec());
}, WTF_MOBModel.Form_fillAddressRec), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("afterSelectLastAddress", "afterSelectLastAddressVar", "afterSelectLastAddress", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("App_UserWtfAddressList", "app_UserWtfAddressListVar", "App_UserWtfAddressList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_UserWtfAddressList());
}, WTF_MOBModel.App_UserWtfAddressList), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("ItemId", "itemIdIn", "ItemId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_itemIdInDataFetchStatus", "_itemIdInDataFetchStatus", "_itemIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalUSERWTFS", "getLocalUSERWTFSAggr", "getLocalUSERWTFSAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalUSERWTFSAggrRec());
}, GetLocalUSERWTFSAggrRec)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {
InputName: OS.Model.ValidationWidgetRecord,
InputAddress: OS.Model.ValidationWidgetRecord,
InputPostalCodeLeft: OS.Model.ValidationWidgetRecord,
InputPostalCodeRight: OS.Model.ValidationWidgetRecord,
InputCity: OS.Model.ValidationWidgetRecord,
InputMSISDN: OS.Model.ValidationWidgetRecord,
Switch1: OS.Model.ValidationWidgetRecord
};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("ItemId" in inputs) {
this.variables.itemIdIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ItemId, OS.Types.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$model", "WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "InputMasksMobile.InputMasks.NumberMask.mvc$view", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$FillUserWtfWalletItemAddress", "WTF_MOB.model$Form_fillAddressRec", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$App_UserWtfAddressList", "WTF_MBP.controller$UserWtfAddress_GetAll", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_BP.model$App_UserWtfAddressRec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPModel, React, OSView, WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_model, WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, InputMasksMobile_InputMasks_NumberMask_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "WalletFlow.WalletFillAddressWithItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.WalletFlow.WalletFillAddressWithItem.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, InputMasksMobile_InputMasks_NumberMask_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var _this = this;

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl3_mvc_view, {
inputs: {
withoutLogin: false,
ContentClass: "b-warmPurple",
ScreenName: "FillAdress",
PageTitle: "Wallet envio",
GoToScratch: true,
PageSection: "Wallet",
PageType: "Operação",
BottomClass: "b-warmPurple"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
header: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_HeaderLvl3_mvc_view, {
inputs: {
Title: "Envio de itens",
GoToScratch: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
inputs: {
IsLoading: model.variables.isLoadingVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "form pv-16",
visible: true,
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "top",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24 mh-8 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-32",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "form-title",
value: "Para onde queres que enviemos o teu item?",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if((model.variables.afterSelectLastAddressVar === true), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Nome",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
controller.inputAddressOnKeyUp$Action(idService.getId("InputAddress"), controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 0,
prompt: "Nome",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.nameAttr, function (value) {
model.variables.form_fillAddressVar.nameAttr = value;
}),
_idProps: {
service: idService,
name: "InputName"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Morada",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
controller.inputAddressOnKeyUp$Action(idService.getId("InputPostalCodeLeft"), controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 0,
prompt: "Morada",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.addressAttr, function (value) {
model.variables.form_fillAddressVar.addressAttr = value;
}),
_idProps: {
service: idService,
name: "InputAddress"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 postalCodeContainer",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Código Postal",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
controller.inputAddressOnKeyUp$Action(idService.getId("InputPostalCodeRight"), controller.callContext(eventHandlerContext));

;
},
onKeyPress: function () {
var eventHandlerContext = callContext.clone();
controller.inputPostalCodeLeftOnKeypress$Action(controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 4,
prompt: "Código Postal",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.postalCodeLeftSideAttr, function (value) {
model.variables.form_fillAddressVar.postalCodeLeftSideAttr = value;
}),
_idProps: {
service: idService,
name: "InputPostalCodeLeft"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "pa-12",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "-",
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
controller.inputAddressOnKeyUp$Action(idService.getId("InputCity"), controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 3,
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.postalCodeRightSideAttr, function (value) {
model.variables.form_fillAddressVar.postalCodeRightSideAttr = value;
}),
_idProps: {
service: idService,
name: "InputPostalCodeRight"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cidade",
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
var eventHandlerContext = callContext.clone();
controller.inputAddressOnKeyUp$Action(idService.getId("InputMSISDN"), controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 0,
prompt: "Cidade",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.cityAttr, function (value) {
model.variables.form_fillAddressVar.cityAttr = value;
}),
_idProps: {
service: idService,
name: "InputCity"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Telefone de contacto",
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(InputMasksMobile_InputMasks_NumberMask_mvc_view, {
inputs: {
GroupSeparator: "",
DecimalDigits: 0,
DecimalSeparator: ""
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "59",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedProperties: {
maxLength: "9"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Phone*/ 6,
mandatory: false,
maxLength: 0,
prompt: "Telefone de contacto",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.PhoneNumber, model.variables.form_fillAddressVar.msisdnAttr, function (value) {
model.variables.form_fillAddressVar.msisdnAttr = value;
}),
_idProps: {
service: idService,
name: "InputMSISDN"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.form_fillAddressVar.msisdnAttr)]
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width3"
},
visible: true,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Switch, {
_validationProps: {
validationService: validationService
},
enabled: true,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.switchOnChange$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "switch a-switch",
variable: model.createVariable(OS.Types.Boolean, model.variables.form_fillAddressVar.savedAddressAttr, function (value) {
model.variables.form_fillAddressVar.savedAddressAttr = value;
}),
_idProps: {
service: idService,
name: "Switch1"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width9 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Guardar morada para futuros envios de Prémios e outros itens",
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "checkbox-container",
visible: true,
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text",
visible: true,
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Podes apagar ou alterar esta morada através do menu no perfil",
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.app_UserWtfAddressListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.selectAddressOnClick$Action(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext), false, controller.callContext(eventHandlerContext));
});
;
},
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "8db+D3aB206dPfa6cpYQmg"
},
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameOfAddressAttr,
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "d2ZINe7S4ke3ZZHeu3iQ5g"
},
gridProperties: {
classes: "OSFillParent"
},
value: ((((((((((model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameAttr + ", ") + model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressStreetAttr) + ", ") + model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeLeftSideAttr) + "-") + model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeRightSideAttr) + " - ") + model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressPostalCityAttr) + ", ") + OS.BuiltinFunctions.longIntegerToText(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).msisdnAttr)),
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).msisdnAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressPostalCityAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeRightSideAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeLeftSideAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressStreetAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameOfAddressAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "HK+lzuiJukqo3sg6HlavAQ"
},
style: "pt-24",
visible: true,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "f0+hXG1tgkOwnz7HWIN_zg"
},
gridProperties: {
marginTop: "20px"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.selectAddressOnClick$Action(new WTF_BPModel.App_UserWtfAddressRec(), true, controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-warmPurple my-32",
visible: true,
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Usar uma morada diferente",
_idProps: {
service: idService,
name: "Link2"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}))))))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16",
visible: true,
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("button.Enabled"), function () {
return (((((((model.variables.form_fillAddressVar.nameAttr) !== ("")) && ((model.variables.form_fillAddressVar.addressAttr) !== (""))) && ((model.variables.form_fillAddressVar.postalCodeLeftSideAttr) !== (""))) && ((model.variables.form_fillAddressVar.postalCodeRightSideAttr) !== (""))) && ((model.variables.form_fillAddressVar.cityAttr) !== (""))) && (OS.BuiltinFunctions.length(model.variables.form_fillAddressVar.msisdnAttr) === 9));
}, function () {
return model.variables.form_fillAddressVar.nameAttr;
}, function () {
return model.variables.form_fillAddressVar.addressAttr;
}, function () {
return model.variables.form_fillAddressVar.postalCodeLeftSideAttr;
}, function () {
return model.variables.form_fillAddressVar.postalCodeRightSideAttr;
}, function () {
return model.variables.form_fillAddressVar.cityAttr;
}, function () {
return model.variables.form_fillAddressVar.msisdnAttr;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.fillAddressOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "button"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Enviar",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.app_UserWtfAddressListVar), asPrimitiveValue(model.variables.form_fillAddressVar.savedAddressAttr), asPrimitiveValue(model.variables.form_fillAddressVar.msisdnAttr), asPrimitiveValue(model.variables.form_fillAddressVar.cityAttr), asPrimitiveValue(model.variables.form_fillAddressVar.postalCodeRightSideAttr), asPrimitiveValue(model.variables.form_fillAddressVar.postalCodeLeftSideAttr), asPrimitiveValue(model.variables.form_fillAddressVar.addressAttr), asPrimitiveValue(model.variables.form_fillAddressVar.nameAttr), asPrimitiveValue(model.variables.afterSelectLastAddressVar), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.WalletFlow.controller", "WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller.InputAddressOnKeyUp.JavaScript1JS", "WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller.InputPostalCodeLeftOnKeypress.JavaScript1JS", "WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller.InputPostalCode.JavaScript1JS", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$FillUserWtfWalletItemAddress", "WTF_MOB.model$Form_fillAddressRec", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$App_UserWtfAddressList", "WTF_MBP.controller$UserWtfAddress_GetAll", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_BP.model$App_UserWtfAddressRec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_WalletFlowController, WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller_InputAddressOnKeyUp_JavaScript1JS, WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller_InputPostalCodeLeftOnKeypress_JavaScript1JS, WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller_InputPostalCode_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLocalUSERWTFS$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_WTFRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
} else {
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_WTF\" \"ENLocal_USER_WTF\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_WTFRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_WTFAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalUSERWTFSAggr;
}, function () {
return controller._getLocalUSERWTFSOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTFS$AggrRefresh"];
// Client Actions
Controller.prototype._inputAddressOnKeyUp$Action = function (nextInputIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InputAddressOnKeyUp");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.WalletFillAddressWithItem.InputAddressOnKeyUp$vars"))());
vars.value.nextInputIdInLocal = nextInputIdIn;
controller.safeExecuteJSNode(WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller_InputAddressOnKeyUp_JavaScript1JS, "JavaScript1", "InputAddressOnKeyUp", {
NextInputId: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.nextInputIdInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.WalletFillAddressWithItem.InputAddressOnKeyUp$vars", [{
name: "NextInputId",
attrName: "nextInputIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._inputPostalCodeLeftOnKeypress$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InputPostalCodeLeftOnKeypress");
callContext = controller.callContext(callContext);
controller.safeExecuteJSNode(WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller_InputPostalCodeLeftOnKeypress_JavaScript1JS, "JavaScript1", "InputPostalCodeLeftOnKeypress", null, function ($parameters) {
}, {}, {});
};
Controller.prototype._stopTrace$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("StopTrace");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: StopTraceGlobalAction
model.flush();
return WTF_MOBController.default.stopTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.analytics_PerformanceStopedAttr, model.variables.analyticsAuxVarVar.traceNameAttr, model.variables.analyticsAuxVarVar.trace_StartAtAttr, model.variables.analyticsAuxVarVar.categoryAttr, callContext).then(function () {
// Analytics_PerformanceStoped
// AnalyticsAuxVar.Analytics_PerformanceStoped = True
model.variables.analyticsAuxVarVar.analytics_PerformanceStopedAttr = true;
});
});
};
Controller.prototype._fillAddressOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("FillAddressOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var wallet_ClearCacheVar = new OS.DataTypes.VariableHolder();
var fillUserWtfWalletItemAddressVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("button"), false, callContext);
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet envio", "btn_enviar", 0, "", callContext).then(function () {
// InvalidPostalCode?
return OS.Flow.executeSequence(function () {
if((((OS.BuiltinFunctions.length(model.variables.form_fillAddressVar.postalCodeLeftSideAttr) < 4) || (OS.BuiltinFunctions.length(model.variables.form_fillAddressVar.postalCodeRightSideAttr) < 3)))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("button"), true, callContext);
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("O código Postal inserido é inválido", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
// InvalidMSISDN?
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.length(model.variables.form_fillAddressVar.msisdnAttr) < 9))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("button"), true, callContext);
// Execute Action: CustomFeedbackMessage6
MobileUIWidgetsController.default.customFeedbackMessage$Action("O número de telefone inserido é inválido", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
// Execute Action: FillUserWtfWalletItemAddress
model.flush();
return WTF_MBPController.default.fillUserWtfWalletItemAddress$Action(OS.DataTypes.JSConversions.typeConvertRecord(model.variables.form_fillAddressVar, new WTF_BPModel.App_UserWtfPrizeAddressRec(), function (source, target) {
target.nameAttr = source.nameAttr;
target.addressStreetAttr = source.addressAttr;
target.addressPostalCityAttr = source.cityAttr;
target.addressPostalCodeAttr = ((source.postalCodeLeftSideAttr + "-") + source.postalCodeRightSideAttr);
target.msisdnAttr = source.msisdnAttr;
target.authorizeAttr = source.savedAddressAttr;
return target;
}), model.variables.itemIdIn, callContext).then(function (value) {
fillUserWtfWalletItemAddressVar.value = value;
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).then(function () {
if((!(fillUserWtfWalletItemAddressVar.value.successOut))) {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action(fillUserWtfWalletItemAddressVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

// Execute Action: Wallet_ClearCache
model.flush();
return WTF_MBPController.default.wallet_ClearCache$Action(callContext).then(function (value) {
wallet_ClearCacheVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WalletFillAddressWithItem.FillAddressOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("button"), true, callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._switchOnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SwitchOnChange");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet envio", (((model.variables.form_fillAddressVar.savedAddressAttr === true)) ? ("btn_guardar_morada") : ("btn_nao_guardar_morada")), 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("WalletFillAddressWithItem.SwitchOnChange", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFSOnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var userWtfAddress_GetAll_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Wallet form envio"
model.variables.analyticsAuxVarVar.traceNameAttr = "Wallet form envio";
// AnalyticsAuxVar.Category = "Wallet"
model.variables.analyticsAuxVarVar.categoryAttr = "Wallet";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Aggregate: GetLocalACCESSTOKENINFOES
var getLocalACCESSTOKENINFOESAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3";
} else {
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_ACCESS_TOKEN_INFO\" \"ENLocal_ACCESS_TOKEN_INFO\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ACCESS_TOKEN_INFOAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeClientAggregate(executeQuery, function () {
return getLocalACCESSTOKENINFOESVar.value;
});
};
return getLocalACCESSTOKENINFOESAggr();
}).then(function () {
// Execute Action: UserWtfAddress_GetAll_MBP
model.flush();
return WTF_MBPController.default.userWtfAddress_GetAll$Action(OS.BuiltinFunctions.longIntegerToInteger(model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr), getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
userWtfAddress_GetAll_MBPVar.value = value;
});
}).then(function () {
if(((userWtfAddress_GetAll_MBPVar.value.successOut && !(userWtfAddress_GetAll_MBPVar.value.app_UserWtfAddressListOut.isEmpty)))) {
// App_UserWtfAddressList = UserWtfAddress_GetAll_MBP.App_UserWtfAddressList
model.variables.app_UserWtfAddressListVar = userWtfAddress_GetAll_MBPVar.value.app_UserWtfAddressListOut;
} else {
// afterSelectLastAddress = True
model.variables.afterSelectLastAddressVar = true;
}

if((model.variables.afterSelectLastAddressVar)) {
// Execute Action: InputPostalCode
controller._inputPostalCode$Action(callContext);
}

// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("WalletFillAddressWithItem.GetLocalUSERWTFSOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
return OS.Flow.returnAsync();

} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._selectAddressOnClick$Action = function (addressIn, withoutLastIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SelectAddressOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.WalletFillAddressWithItem.SelectAddressOnClick$vars"))());
vars.value.addressInLocal = addressIn.clone();
vars.value.withoutLastInLocal = withoutLastIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((vars.value.withoutLastInLocal === true))) {
// afterSelectLastAddress = True
model.variables.afterSelectLastAddressVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet envio", "btn_morada diferente", 0, "", callContext).then(function () {
// Execute Action: InputPostalCode
controller._inputPostalCode$Action(callContext);
});
} else {
// Form_fillAddress = Address
model.variables.form_fillAddressVar = OS.DataTypes.JSConversions.typeConvertRecord(vars.value.addressInLocal, new WTF_MOBModel.Form_fillAddressRec(), function (source, target) {
target.nameAttr = source.nameAttr;
target.addressAttr = source.addressStreetAttr;
target.postalCodeLeftSideAttr = source.postalCodeLeftSideAttr;
target.postalCodeRightSideAttr = source.postalCodeRightSideAttr;
target.cityAttr = source.addressPostalCityAttr;
target.msisdnAttr = OS.BuiltinFunctions.longIntegerToText(source.msisdnAttr);
target.savedAddressAttr = true;
return target;
});
// afterSelectLastAddress = True
model.variables.afterSelectLastAddressVar = true;
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet envio", "btn_morada_guardada", 0, "", callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("WalletFillAddressWithItem.SelectAddressOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.WalletFillAddressWithItem.SelectAddressOnClick$vars", [{
name: "Address",
attrName: "addressInLocal",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_BPModel.App_UserWtfAddressRec();
},
complexType: WTF_BPModel.App_UserWtfAddressRec
}, {
name: "WithoutLast",
attrName: "withoutLastInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._inputPostalCode$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InputPostalCode");
callContext = controller.callContext(callContext);
controller.safeExecuteJSNode(WTF_MOB_WalletFlow_WalletFillAddressWithItem_mvc_controller_InputPostalCode_JavaScript1JS, "JavaScript1", "InputPostalCode", {
RightInputPostalCodeId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("InputPostalCodeRight"), OS.Types.Text, true),
LeftInputPostalCodeId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("InputPostalCodeLeft"), OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
};

Controller.prototype.inputAddressOnKeyUp$Action = function (nextInputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputAddressOnKeyUp$Action, callContext, nextInputIdIn);

};
Controller.prototype.inputPostalCodeLeftOnKeypress$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputPostalCodeLeftOnKeypress$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.fillAddressOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fillAddressOnClick$Action, callContext);

};
Controller.prototype.switchOnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._switchOnChange$Action, callContext);

};
Controller.prototype.getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFSOnAfterFetch$Action, callContext);

};
Controller.prototype.selectAddressOnClick$Action = function (addressIn, withoutLastIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectAddressOnClick$Action, callContext, addressIn, withoutLastIn);

};
Controller.prototype.inputPostalCode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputPostalCode$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_WalletFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return WTF_MOBController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, WTF_MOBLanguageResources);
});
define("WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller.InputAddressOnKeyUp.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var evt = window.event;

if(evt.keyCode == 13)
    document.getElementById($parameters.NextInputId).focus();
};
});
define("WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller.InputPostalCodeLeftOnKeypress.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
"return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
};
});
define("WTF_MOB.WalletFlow.WalletFillAddressWithItem.mvc$controller.InputPostalCode.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

setInputFilter(document.getElementById($parameters.LeftInputPostalCodeId), function(value) {
  return /^\d*$/.test(value); 
});

setInputFilter(document.getElementById($parameters.RightInputPostalCodeId), function(value) {
  return /^\d*$/.test(value); 
});
};
});

