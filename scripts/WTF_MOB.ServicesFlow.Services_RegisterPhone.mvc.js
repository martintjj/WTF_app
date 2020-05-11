define("WTF_MOB.ServicesFlow.Services_RegisterPhone.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$MobilePhoneActivation_SendSMS", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$MobilePhoneActivation_ValidateToken", "WTF_MBP.controller$setActivityLog_ServiceMobileRegister", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel) {
var OS = OutSystems.Internal;
var GetAccessTokenInfoAggrRec = (function (_super) {
__extends(GetAccessTokenInfoAggrRec, _super);
function GetAccessTokenInfoAggrRec(defaults) {
_super.apply(this, arguments);
}
GetAccessTokenInfoAggrRec.RecordListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
GetAccessTokenInfoAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetAccessTokenInfoAggrRec.init();
return GetAccessTokenInfoAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("AfterReady", "afterReadyVar", "AfterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("MSISDN_ToRegister", "mSISDN_ToRegisterVar", "MSISDN_ToRegister", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AlreadyHaveToken", "alreadyHaveTokenVar", "AlreadyHaveToken", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Code", "codeVar", "Code", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsCodeInvalid", "isCodeInvalidVar", "IsCodeInvalid", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("GetAccessTokenInfo", "getAccessTokenInfoAggr", "getAccessTokenInfoAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetAccessTokenInfoAggrRec());
}, GetAccessTokenInfoAggrRec)
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
Input_MSISDN: OS.Model.ValidationWidgetRecord,
Input_TextVar7: OS.Model.ValidationWidgetRecord
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
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ServicesFlow.Services_RegisterPhone.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ServicesFlow.Services_RegisterPhone.mvc$model", "WTF_MOB.ServicesFlow.Services_RegisterPhone.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$MobilePhoneActivation_SendSMS", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$MobilePhoneActivation_ValidateToken", "WTF_MBP.controller$setActivityLog_ServiceMobileRegister", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_ServicesFlow_Services_RegisterPhone_mvc_model, WTF_MOB_ServicesFlow_Services_RegisterPhone_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view) {
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
        View.displayName = "ServicesFlow.Services_RegisterPhone";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ServicesFlow.Services_RegisterPhone.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ServicesFlow_Services_RegisterPhone_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ServicesFlow_Services_RegisterPhone_mvc_controller;
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
ScreenName: "Services_RegisterPhone",
PageSection: "Perfil",
PageType: "Operação",
withoutLogin: false,
ContentClass: "b-warmPurple",
PageTitle: "Associar Servico"
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
return [React.createElement(WTF_MOB_Common_HeaderLvl2_mvc_view, {
inputs: {
Title: "Registar telemóvel",
PageControllsBack: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.headerLvl2BackEvent$Action(controller.callContext(eventHandlerContext));

;
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
animate: true,
style: "form pa-16",
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.alreadyHaveTokenVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "BIJoFOx3aEikpkalbTivvQ"
},
gridProperties: {
marginTop: "20px"
},
style: "c-white",
value: "Insere os teus dados para registares o teu telemóvel",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 b-white pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 pa-10",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Telemóvel",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 9,
prompt: "Telemóvel",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.mSISDN_ToRegisterVar, function (value) {
model.variables.mSISDN_ToRegisterVar = value;
}),
_idProps: {
service: idService,
name: "Input_MSISDN"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20",
visible: true,
_idProps: {
service: idService,
name: "ButtonContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("btn_nextStep.Enabled"), function () {
return (OS.BuiltinFunctions.length(model.variables.mSISDN_ToRegisterVar) === 9);
}, function () {
return model.variables.mSISDN_ToRegisterVar;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.sendTokenCodeForSMS$Action(false, controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "btn_nextStep"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Enviar código",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "3Glz9FIBeUOqsQz8A7FotA"
},
gridProperties: {
marginTop: "20px"
},
style: "c-white",
value: ("Enviámos-te uma chave de 6 dígitos por SMS para o número " + model.variables.mSISDN_ToRegisterVar),
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 b-white pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Indica o código que recebeste por SMS",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 pa-10",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("2JoWRRcgeUauy1kTwJVOLw.Style"), function () {
return ("m-inputDigit" + ((model.variables.isCodeInvalidVar) ? (" -error") : ("")));
}, function () {
return model.variables.isCodeInvalidVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedProperties: {
pattern: "[0-9]*",
"inputMode": "decimal"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 6,
style: "form-control m-inputDigitHidden",
variable: model.createVariable(OS.Types.Text, model.variables.codeVar, function (value) {
model.variables.codeVar = value;
}),
_idProps: {
service: idService,
name: "Input_TextVar7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-inputDigitContainer",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("L3kyFX4hu0S8mbuoCEGp5Q.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 1)) ? ("-typed") : ("")));
}, function () {
return model.variables.codeVar;
}),
value: model.getCachedValue(idService.getId("L3kyFX4hu0S8mbuoCEGp5Q.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 1)) ? (OS.BuiltinFunctions.substr(model.variables.codeVar, 0, 1)) : (""));
}, function () {
return model.variables.codeVar;
}),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("fYej0TKhvUCFr4I7HSYT8w.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 2)) ? ("-typed") : ("")));
}, function () {
return model.variables.codeVar;
}),
value: model.getCachedValue(idService.getId("fYej0TKhvUCFr4I7HSYT8w.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 2)) ? (OS.BuiltinFunctions.substr(model.variables.codeVar, 1, 1)) : (""));
}, function () {
return model.variables.codeVar;
}),
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("vs6MwwWAdkmQ8_d+ZLpmsQ.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 3)) ? ("-typed") : ("")));
}, function () {
return model.variables.codeVar;
}),
value: model.getCachedValue(idService.getId("vs6MwwWAdkmQ8_d+ZLpmsQ.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 3)) ? (OS.BuiltinFunctions.substr(model.variables.codeVar, 2, 1)) : (""));
}, function () {
return model.variables.codeVar;
}),
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("3CVhdMpMGki5tmS9tf3s6A.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 4)) ? ("-typed") : ("")));
}, function () {
return model.variables.codeVar;
}),
value: model.getCachedValue(idService.getId("3CVhdMpMGki5tmS9tf3s6A.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 4)) ? (OS.BuiltinFunctions.substr(model.variables.codeVar, 3, 1)) : (""));
}, function () {
return model.variables.codeVar;
}),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("uxYSBw6K2EO6otxJOx0Tug.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 5)) ? ("-typed") : ("")));
}, function () {
return model.variables.codeVar;
}),
value: model.getCachedValue(idService.getId("uxYSBw6K2EO6otxJOx0Tug.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 5)) ? (OS.BuiltinFunctions.substr(model.variables.codeVar, 4, 1)) : (""));
}, function () {
return model.variables.codeVar;
}),
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("C_MVH_fqy0qu1P5Ynpendw.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 6)) ? ("-typed") : ("")));
}, function () {
return model.variables.codeVar;
}),
value: model.getCachedValue(idService.getId("C_MVH_fqy0qu1P5Ynpendw.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.codeVar) >= 6)) ? (OS.BuiltinFunctions.substr(model.variables.codeVar, 5, 1)) : (""));
}, function () {
return model.variables.codeVar;
}),
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.isCodeInvalidVar,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-red mt-4",
value: "O código que inseriste não é válido.",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "f+HjhRwtSEKMz9tiqsNvdg"
},
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "YKYEU0_7jEioDftqAjOcow"
},
style: "mv-20 mt-56 text-center",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "5ZdPRJOiiEKaPv6QIJJzMw"
},
style: "c-white",
value: "Não recebeste o SMS?",
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.sendTokenCodeForSMS$Action(true, controller.callContext(eventHandlerContext));
});
;
},
style: "a-link c-white ma-24",
visible: true,
_idProps: {
service: idService,
name: "TryAgain2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Enviar novamente")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pv-16",
visible: model.getCachedValue(idService.getId("e7chdoBhG0as3gLHq3ESsg.Visible"), function () {
return ((model.variables.isLoadingVar) ? (false) : (true));
}, function () {
return model.variables.isLoadingVar;
}),
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
inputs: {},
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
uuid: "43",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.headerLvl2BackEvent$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn -secondary -negative w-100 -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Voltar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
inputs: {},
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
uuid: "47",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("Validate.Enabled"), function () {
return (OS.BuiltinFunctions.length(model.variables.codeVar) === 6);
}, function () {
return model.variables.codeVar;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.validateToken$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative w-100",
visible: true,
_idProps: {
service: idService,
name: "Validate"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Validar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.codeVar)]
}))))];
}))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.codeVar), asPrimitiveValue(model.variables.isCodeInvalidVar), asPrimitiveValue(model.variables.mSISDN_ToRegisterVar), asPrimitiveValue(model.variables.alreadyHaveTokenVar), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ServicesFlow.Services_RegisterPhone.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ServicesFlow.controller", "WTF_MOB.ServicesFlow.Services_RegisterPhone.mvc$controller.SendTokenCodeForSMS.ValidateInputFormatJS", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$MobilePhoneActivation_SendSMS", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$MobilePhoneActivation_ValidateToken", "WTF_MBP.controller$setActivityLog_ServiceMobileRegister", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ServicesFlowController, WTF_MOB_ServicesFlow_Services_RegisterPhone_mvc_controller_SendTokenCodeForSMS_ValidateInputFormatJS) {
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
Controller.prototype.getAccessTokenInfo$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

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
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
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
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getAccessTokenInfoAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getAccessTokenInfo$AggrRefresh"];
// Client Actions
Controller.prototype._headerLvl2BackEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("HeaderLvl2BackEvent");
callContext = controller.callContext(callContext);
if((model.variables.alreadyHaveTokenVar)) {
// AlreadyHaveToken = False
model.variables.alreadyHaveTokenVar = false;
} else {
// Destination: /WTF_MOB/SelectMsisdn
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SelectMsisdn", {
isAfterLogin: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

};
Controller.prototype._sendTokenCodeForSMS$Action = function (tryAgainIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SendTokenCodeForSMS");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ServicesFlow.Services_RegisterPhone.SendTokenCodeForSMS$vars"))());
vars.value.tryAgainInLocal = tryAgainIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var mobilePhoneActivation_SendSMSVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var validateInputFormatJSResult = new OS.DataTypes.VariableHolder();
var getLocalSERVICESByServiceIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_SERVICERecordList))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
return OS.Flow.executeSequence(function () {
if((vars.value.tryAgainInLocal)) {
// Execute Action: DisabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("TryAgain2"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Associar servico", "Enviar código novamente", 0, "", callContext);
} else {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), false, callContext);
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Associar servico", "Inserir telemovel", 0, "", callContext);
}

}).then(function () {
validateInputFormatJSResult.value = controller.safeExecuteJSNode(WTF_MOB_ServicesFlow_Services_RegisterPhone_mvc_controller_SendTokenCodeForSMS_ValidateInputFormatJS, "ValidateInputFormat", "SendTokenCodeForSMS", {
Value: OS.DataTypes.JSConversions.basicTypeToJS(OS.BuiltinFunctions.textToInteger(model.variables.mSISDN_ToRegisterVar), OS.Types.Integer, true),
IsValid: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.ServicesFlow.Services_RegisterPhone.SendTokenCodeForSMS$validateInputFormatJSResult"))();
jsNodeResult.isValidOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.IsValid, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
// Aggregate: GetLocalSERVICESByServiceId
var getLocalSERVICESByServiceIdAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_SERVICERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstServiceId = model.variables.mSISDN_ToRegisterVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8";
} else {
selectSql += "\"ENLocal_SERVICE\".\"Id\" o0, \"ENLocal_SERVICE\".\"ServiceId\" o1, \"ENLocal_SERVICE\".\"AssociationID\" o2, \"ENLocal_SERVICE\".\"Name\" o3, \"ENLocal_SERVICE\".\"ServiceAccount\" o4, \"ENLocal_SERVICE\".\"UiLabel\" o5, \"ENLocal_SERVICE\".\"Plan\" o6, \"ENLocal_SERVICE\".\"TMCodeID\" o7, \"ENLocal_SERVICE\".\"TMCodeDesc\" o8";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\"";
fromAndWhereSql += " WHERE (\"ENLocal_SERVICE\".\"ServiceId\" = :qpstServiceId)";
orderBySql += " ORDER BY \"ENLocal_SERVICE\".\"Name\" ASC ";
argsList.add("qpstServiceId", /*TEXT*/ 0, qpstServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_SERVICERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SERVICEAttr",
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
return getLocalSERVICESByServiceIdVar.value;
});
};
return getLocalSERVICESByServiceIdAggr();
}).then(function () {
// ServicesEmpty?
return OS.Flow.executeSequence(function () {
if((getLocalSERVICESByServiceIdVar.value.listOut.isEmpty)) {
return OS.Flow.executeSequence(function () {
if((validateInputFormatJSResult.value.isValidOut)) {
// Execute Action: MobilePhoneActivation_SendSMS
model.flush();
return WTF_MBPController.default.mobilePhoneActivation_SendSMS$Action(model.variables.refreshTokenVar, OS.BuiltinFunctions.textToInteger(model.variables.mSISDN_ToRegisterVar), callContext).then(function (value) {
mobilePhoneActivation_SendSMSVar.value = value;
}).then(function () {
if((mobilePhoneActivation_SendSMSVar.value.successOut)) {
// IsWTF?
if((mobilePhoneActivation_SendSMSVar.value.isWtfOut)) {
// AlreadyHaveToken = True
model.variables.alreadyHaveTokenVar = true;
} else {
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("Não encontrámos nenhum tarifário WTF associado a este número. Por favor, escolhe um número WTF.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(mobilePhoneActivation_SendSMSVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Formato do nº de telemóvel inválido", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
} else {
// Execute Action: CustomFeedbackMessage6
MobileUIWidgetsController.default.customFeedbackMessage$Action("Este número já é teu!", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Code = ""
model.variables.codeVar = "";
if((vars.value.tryAgainInLocal)) {
// Execute Action: DisabledButton4
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("TryAgain2"), false, callContext);
} else {
// Execute Action: DisabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), false, callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("Services_RegisterPhone.SendTokenCodeForSMS", OS.Exceptions.getMessage(ex), ex.name);
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
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), true, callContext);
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ServicesFlow.Services_RegisterPhone.SendTokenCodeForSMS$vars", [{
name: "TryAgain",
attrName: "tryAgainInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("WTF_MOB.ServicesFlow.Services_RegisterPhone.SendTokenCodeForSMS$validateInputFormatJSResult", [{
name: "IsValid",
attrName: "isValidOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
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
Controller.prototype._validateToken$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ValidateToken");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var mobilePhoneActivation_ValidateTokenVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Associar servico", "Validar código", 0, "", callContext).then(function () {
// Execute Action: MobilePhoneActivation_ValidateToken
model.flush();
return WTF_MBPController.default.mobilePhoneActivation_ValidateToken$Action(model.variables.refreshTokenVar, OS.BuiltinFunctions.textToInteger(model.variables.mSISDN_ToRegisterVar), model.variables.codeVar, callContext).then(function (value) {
mobilePhoneActivation_ValidateTokenVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((mobilePhoneActivation_ValidateTokenVar.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((mobilePhoneActivation_ValidateTokenVar.value.isValidOut)) {
// Execute Action: setActivityLog_ServiceMobileRegister
model.flush();
return WTF_MBPController.default.setActivityLog_ServiceMobileRegister$Action(model.variables.mSISDN_ToRegisterVar, callContext).then(function () {
// Destination: /WTF_MOB/ProtectionScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ProtectionScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
} else {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Código inválido", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(mobilePhoneActivation_ValidateTokenVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("Services_RegisterPhone.ValidateToken", OS.Exceptions.getMessage(ex), ex.name);
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
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage6
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Associar servico"
model.variables.analyticsAuxVarVar.traceNameAttr = "Associar servico";
// AnalyticsAuxVar.Category = "Perfil"
model.variables.analyticsAuxVarVar.categoryAttr = "Perfil";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// AfterReady = True
model.variables.afterReadyVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
// RefreshToken = GetAccessTokenInfo.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = model.variables.getAccessTokenInfoAggr.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
});
}).catch(function (ex) {
OS.Logger.trace("Services_RegisterPhone.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};

Controller.prototype.headerLvl2BackEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._headerLvl2BackEvent$Action, callContext);

};
Controller.prototype.sendTokenCodeForSMS$Action = function (tryAgainIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sendTokenCodeForSMS$Action, callContext, tryAgainIn);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.validateToken$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._validateToken$Action, callContext);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_ServicesFlowController.default.handleError(ex, this.callContext());
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
define("WTF_MOB.ServicesFlow.Services_RegisterPhone.mvc$controller.SendTokenCodeForSMS.ValidateInputFormatJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var regex = new RegExp('^[0-9]*$');

$parameters.IsValid = regex.test($parameters.Value);
};
});

