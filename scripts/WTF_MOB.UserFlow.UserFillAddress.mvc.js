define("WTF_MOB.UserFlow.UserFillAddress.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_UserWtfAddressRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$UserWtfAddress_CreateOrUpdate", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$UserWtfAddress_GetById", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPController, WTF_MBPModel) {
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
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_UserWtfAddressRec());
}, WTF_BPModel.App_UserWtfAddressRec), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("UserWtfAddressId", "userWtfAddressIdIn", "UserWtfAddressId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_userWtfAddressIdInDataFetchStatus", "_userWtfAddressIdInDataFetchStatus", "_userWtfAddressIdInDataFetchStatus", true, OS.Types.Integer, function () {
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
InputAddressName: OS.Model.ValidationWidgetRecord,
InputName: OS.Model.ValidationWidgetRecord,
InputAddress: OS.Model.ValidationWidgetRecord,
InputPostalCodeLeft: OS.Model.ValidationWidgetRecord,
InputPostalCodeRight: OS.Model.ValidationWidgetRecord,
InputCity: OS.Model.ValidationWidgetRecord,
InputNumberMSISDN: OS.Model.ValidationWidgetRecord
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
if("UserWtfAddressId" in inputs) {
this.variables.userWtfAddressIdIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.UserWtfAddressId, OS.Types.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.UserFlow.UserFillAddress.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.UserFlow.UserFillAddress.mvc$model", "WTF_MOB.UserFlow.UserFillAddress.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "InputMasksMobile.InputMasks.NumberMask.mvc$view", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_UserWtfAddressRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$UserWtfAddress_CreateOrUpdate", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$UserWtfAddress_GetById", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_UserFlow_UserFillAddress_mvc_model, WTF_MOB_UserFlow_UserFillAddress_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, InputMasksMobile_InputMasks_NumberMask_mvc_view) {
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
        View.displayName = "UserFlow.UserFillAddress";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.UserFlow.UserFillAddress.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, InputMasksMobile_InputMasks_NumberMask_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_UserFlow_UserFillAddress_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_UserFlow_UserFillAddress_mvc_controller;
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
BottomClass: "b-warmPurple",
ScreenName: "FillAddress",
AllowPrevious: true,
PageTitle: model.getCachedValue(idService.getId("3HdCZc86oUqhh8hAcWRhPA.PageTitle"), function () {
return ((model.variables.userWtfAddressIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) ? ("Criar morada") : ("Editar morada"));
}, function () {
return model.variables.userWtfAddressIdIn;
}),
withoutLogin: false,
ContentClass: "b-warmPurple",
PageType: "Operação",
PageSection: "Perfil"
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
AllowPrevious: true,
Title: model.getCachedValue(idService.getId("yOralEYqVEmwmdDqnwiHmw.Title"), function () {
return ((model.variables.userWtfAddressIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) ? ("Adicionar morada") : ("Editar morada"));
}, function () {
return model.variables.userWtfAddressIdIn;
})
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
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Nome",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "14"
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
controller.inputAddressOnKeyUp$Action(idService.getId("InputName"), controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 255,
prompt: "Nome da morada",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.nameOfAddressAttr, function (value) {
model.variables.form_fillAddressVar.nameOfAddressAttr = value;
}),
_idProps: {
service: idService,
name: "InputAddressName"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Destinatário",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "22"
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
mandatory: true,
maxLength: 255,
prompt: "Destinatário",
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
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Morada",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "30"
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
mandatory: true,
maxLength: 50,
prompt: "Morada",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.addressStreetAttr, function (value) {
model.variables.form_fillAddressVar.addressStreetAttr = value;
}),
_idProps: {
service: idService,
name: "InputAddress"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 postalCodeContainer",
visible: true,
_idProps: {
service: idService,
uuid: "32"
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
uuid: "33"
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
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Código Postal",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "38"
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
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
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
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "-",
_idProps: {
service: idService,
uuid: "41"
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
uuid: "42"
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
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "46"
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
mandatory: true,
maxLength: 3,
prompt: "Código Postal",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.postalCodeRightSideAttr, function (value) {
model.variables.form_fillAddressVar.postalCodeRightSideAttr = value;
}),
_idProps: {
service: idService,
name: "InputPostalCodeRight"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cidade",
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "54"
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
controller.inputAddressOnKeyUp$Action(idService.getId("InputNumberMSISDN"), controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 50,
prompt: "Cidade",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.form_fillAddressVar.addressPostalCityAttr, function (value) {
model.variables.form_fillAddressVar.addressPostalCityAttr = value;
}),
_idProps: {
service: idService,
name: "InputCity"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-8",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Telefone de contacto",
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "62"
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
uuid: "63",
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
inputType: /*Number*/ 2,
mandatory: true,
maxLength: 0,
prompt: "Telefone de contacto",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.LongInteger, model.variables.form_fillAddressVar.msisdnAttr, function (value) {
model.variables.form_fillAddressVar.msisdnAttr = value;
}),
_idProps: {
service: idService,
name: "InputNumberMSISDN"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.form_fillAddressVar.msisdnAttr)]
})))))))))))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16",
visible: true,
_idProps: {
service: idService,
uuid: "65"
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
enabled: model.getCachedValue(idService.getId("btn_createAddress.Enabled"), function () {
return (((((((OS.BuiltinFunctions.length(OS.BuiltinFunctions.longIntegerToText(model.variables.form_fillAddressVar.msisdnAttr)) === 9) && ((model.variables.form_fillAddressVar.nameOfAddressAttr) !== (""))) && ((model.variables.form_fillAddressVar.nameAttr) !== (""))) && ((model.variables.form_fillAddressVar.addressStreetAttr) !== (""))) && ((model.variables.form_fillAddressVar.postalCodeLeftSideAttr) !== (""))) && ((model.variables.form_fillAddressVar.postalCodeRightSideAttr) !== (""))) && ((model.variables.form_fillAddressVar.addressPostalCityAttr) !== ("")));
}, function () {
return model.variables.form_fillAddressVar.msisdnAttr;
}, function () {
return model.variables.form_fillAddressVar.nameOfAddressAttr;
}, function () {
return model.variables.form_fillAddressVar.nameAttr;
}, function () {
return model.variables.form_fillAddressVar.addressStreetAttr;
}, function () {
return model.variables.form_fillAddressVar.postalCodeLeftSideAttr;
}, function () {
return model.variables.form_fillAddressVar.postalCodeRightSideAttr;
}, function () {
return model.variables.form_fillAddressVar.addressPostalCityAttr;
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
name: "btn_createAddress"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("ButtonTextPrimary.Value"), function () {
return ((model.variables.userWtfAddressIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) ? ("Criar morada") : ("Guardar alterações"));
}, function () {
return model.variables.userWtfAddressIdIn;
}),
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.form_fillAddressVar.msisdnAttr), asPrimitiveValue(model.variables.form_fillAddressVar.addressPostalCityAttr), asPrimitiveValue(model.variables.form_fillAddressVar.postalCodeRightSideAttr), asPrimitiveValue(model.variables.form_fillAddressVar.postalCodeLeftSideAttr), asPrimitiveValue(model.variables.form_fillAddressVar.addressStreetAttr), asPrimitiveValue(model.variables.form_fillAddressVar.nameAttr), asPrimitiveValue(model.variables.form_fillAddressVar.nameOfAddressAttr), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.userWtfAddressIdIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.UserFlow.UserFillAddress.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.UserFlow.controller", "WTF_MOB.UserFlow.UserFillAddress.mvc$controller.InputAddressOnKeyUp.JavaScript1JS", "WTF_MOB.UserFlow.UserFillAddress.mvc$controller.AfterFetch.JavaScript1JS", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_UserWtfAddressRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$UserWtfAddress_CreateOrUpdate", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$UserWtfAddress_GetById", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_UserFlowController, WTF_MOB_UserFlow_UserFillAddress_mvc_controller_InputAddressOnKeyUp_JavaScript1JS, WTF_MOB_UserFlow_UserFillAddress_mvc_controller_AfterFetch_JavaScript1JS) {
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
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTFS$AggrRefresh"];
// Client Actions
Controller.prototype._fillAddressOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("FillAddressOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var userWtfAddress_CreateOrUpdateVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_createAddress"), false, callContext);
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ((model.variables.userWtfAddressIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) ? ("Criar morada") : ("Editar morada")), ((model.variables.userWtfAddressIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) ? ("Criar") : ("Guardar")), 0, "", callContext).then(function () {
// InvalidPostalCode?
return OS.Flow.executeSequence(function () {
if((((OS.BuiltinFunctions.length(model.variables.form_fillAddressVar.postalCodeLeftSideAttr) < 4) || (OS.BuiltinFunctions.length(model.variables.form_fillAddressVar.postalCodeRightSideAttr) < 3)))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_createAddress"), true, callContext);
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("O código Postal inserido é inválido", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
// InvalidMSISDN?
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.length(OS.BuiltinFunctions.longIntegerToText(model.variables.form_fillAddressVar.msisdnAttr)) < 9))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_createAddress"), true, callContext);
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("O número de telefone inserido é inválido", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
// Execute Action: UserWtfAddress_CreateOrUpdate
model.flush();
return WTF_MBPController.default.userWtfAddress_CreateOrUpdate$Action(model.variables.form_fillAddressVar, model.variables.userWtfAddressIdIn, callContext).then(function (value) {
userWtfAddress_CreateOrUpdateVar.value = value;
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).then(function () {
// CreateOrUpdate.Success?
if((userWtfAddress_CreateOrUpdateVar.value.successOut)) {
// Destination: /WTF_MOB/UserAddresses
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserAddresses", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: EnabledButton4
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_createAddress"), true, callContext);
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action(userWtfAddress_CreateOrUpdateVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("UserFillAddress.FillAddressOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_createAddress"), true, callContext);
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
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
Controller.prototype._inputAddressOnKeyUp$Action = function (nextInputIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InputAddressOnKeyUp");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.UserFlow.UserFillAddress.InputAddressOnKeyUp$vars"))());
vars.value.nextInputIdInLocal = nextInputIdIn;
controller.safeExecuteJSNode(WTF_MOB_UserFlow_UserFillAddress_mvc_controller_InputAddressOnKeyUp_JavaScript1JS, "JavaScript1", "InputAddressOnKeyUp", {
NextInputId: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.nextInputIdInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
};
Controller.registerVariableGroupType("WTF_MOB.UserFlow.UserFillAddress.InputAddressOnKeyUp$vars", [{
name: "NextInputId",
attrName: "nextInputIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var userWtfAddress_GetByIdVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = If
model.variables.analyticsAuxVarVar.traceNameAttr = ((model.variables.userWtfAddressIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) ? ("Criar morada") : ("Editar morada"));
// AnalyticsAuxVar.Category = "Perfil"
model.variables.analyticsAuxVarVar.categoryAttr = "Perfil";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.userWtfAddressIdIn.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
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
return getLocalACCESSTOKENINFOESAggr().then(function () {
// Execute Action: UserWtfAddress_GetById
model.flush();
return WTF_MBPController.default.userWtfAddress_GetById$Action(model.variables.userWtfAddressIdIn, OS.BuiltinFunctions.longIntegerToInteger(model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr), getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
userWtfAddress_GetByIdVar.value = value;
});
}).then(function () {
if((userWtfAddress_GetByIdVar.value.successOut)) {
// Form_fillAddress = UserWtfAddress_GetById.App_UserWtfAddress
model.variables.form_fillAddressVar = userWtfAddress_GetByIdVar.value.app_UserWtfAddressOut;
} else {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action(userWtfAddress_GetByIdVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}

});
}).then(function () {
controller.safeExecuteJSNode(WTF_MOB_UserFlow_UserFillAddress_mvc_controller_AfterFetch_JavaScript1JS, "JavaScript1", "AfterFetch", {
LeftInputPostalCodeId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("InputPostalCodeLeft"), OS.Types.Text, true),
RightInputPostalCodeId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("InputPostalCodeRight"), OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("UserFillAddress.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
return OS.Flow.returnAsync();

} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
};

Controller.prototype.fillAddressOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fillAddressOnClick$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.inputAddressOnKeyUp$Action = function (nextInputIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._inputAddressOnKeyUp$Action, callContext, nextInputIdIn);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_UserFlowController.default.handleError(ex, this.callContext());
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
define("WTF_MOB.UserFlow.UserFillAddress.mvc$controller.InputAddressOnKeyUp.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var evt = window.event;

if(evt.keyCode == 13){
 
 
    evt.preventDefault();

    document.getElementById($parameters.NextInputId).focus();    

    return false;
}
};
});
define("WTF_MOB.UserFlow.UserFillAddress.mvc$controller.AfterFetch.JavaScript1JS", [], function () {
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

