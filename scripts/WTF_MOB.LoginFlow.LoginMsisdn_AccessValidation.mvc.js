define("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation.mvc$model", ["OutSystems", "WTF_MOB.model", "Mobile_LoginNOS.model", "WTF_MOB.controller", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$Token_Rec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$TriggerOfflineDataSync", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth$WTF_MBP", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.controller$LoginAction", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, Mobile_LoginNOSModel, WTF_MOBController, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("IsTokenValid", "isTokenValidVar", "IsTokenValid", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("TokenVar", "tokenVarVar", "TokenVar", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("PhoneNumber", "phoneNumberIn", "PhoneNumber", true, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ClientId", "clientIdIn", "ClientId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ClientSecret", "clientSecretIn", "ClientSecret", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_clientSecretInDataFetchStatus", "_clientSecretInDataFetchStatus", "_clientSecretInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ApplicationName", "applicationNameIn", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
})
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
if("PhoneNumber" in inputs) {
this.variables.phoneNumberIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.PhoneNumber, OS.Types.PhoneNumber);
}

if("ClientId" in inputs) {
this.variables.clientIdIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ClientId, OS.Types.Text);
}

if("ClientSecret" in inputs) {
this.variables.clientSecretIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ClientSecret, OS.Types.Text);
}

if("ApplicationName" in inputs) {
this.variables.applicationNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ApplicationName, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation.mvc$model", "WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$Token_Rec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$TriggerOfflineDataSync", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth$WTF_MBP", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.controller$LoginAction", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, React, OSView, WTF_MOB_LoginFlow_LoginMsisdn_AccessValidation_mvc_model, WTF_MOB_LoginFlow_LoginMsisdn_AccessValidation_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "LoginFlow.LoginMsisdn_AccessValidation";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_AccessValidation_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_AccessValidation_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_LayoutBlank_mvc_view, {
inputs: {
PageType: "Consulta",
PageSection: "Login",
ScreenName: "LoginMsisdn_Waiting",
PageTitle: "A aceder com o teu número"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
isConnectedEvent$Action: function (isConnectedIn) {
var eventHandlerContext = callContext.clone();
controller.layoutBlankIsConnectedEvent$Action(controller.callContext(eventHandlerContext));

;
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
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "L0KZVWK5cEOvr+HnSf4YWg"
},
style: "b-pinkToBlue",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateHead",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.double_path.svg"),
style: "paths_double",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "form",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-white",
value: "Insere aqui o código que te enviámos por SMS ",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
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
style: model.getCachedValue(idService.getId("p1gPNH3RYkK3PyW4ky7Hvw.Style"), function () {
return ("m-inputDigit" + ((model.variables.isTokenValidVar) ? (" -error") : ("")));
}, function () {
return model.variables.isTokenValidVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
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
variable: model.createVariable(OS.Types.Text, model.variables.tokenVarVar, function (value) {
model.variables.tokenVarVar = value;
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
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("kqyd7OPvdUqOC_LeXx90vw.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 1)) ? ("-typed") : ("")));
}, function () {
return model.variables.tokenVarVar;
}),
value: model.getCachedValue(idService.getId("kqyd7OPvdUqOC_LeXx90vw.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 1)) ? (OS.BuiltinFunctions.substr(model.variables.tokenVarVar, 0, 1)) : (""));
}, function () {
return model.variables.tokenVarVar;
}),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("JI5ypXvYtkqGNKUaOs2VQg.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 2)) ? ("-typed") : ("")));
}, function () {
return model.variables.tokenVarVar;
}),
value: model.getCachedValue(idService.getId("JI5ypXvYtkqGNKUaOs2VQg.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 2)) ? (OS.BuiltinFunctions.substr(model.variables.tokenVarVar, 1, 1)) : (""));
}, function () {
return model.variables.tokenVarVar;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("U+oFegzk8UCsjUZAYqz3GQ.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 3)) ? ("-typed") : ("")));
}, function () {
return model.variables.tokenVarVar;
}),
value: model.getCachedValue(idService.getId("U+oFegzk8UCsjUZAYqz3GQ.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 3)) ? (OS.BuiltinFunctions.substr(model.variables.tokenVarVar, 2, 1)) : (""));
}, function () {
return model.variables.tokenVarVar;
}),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("vGgY1MDv7EyZgZa4dvoc2g.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 4)) ? ("-typed") : ("")));
}, function () {
return model.variables.tokenVarVar;
}),
value: model.getCachedValue(idService.getId("vGgY1MDv7EyZgZa4dvoc2g.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 4)) ? (OS.BuiltinFunctions.substr(model.variables.tokenVarVar, 3, 1)) : (""));
}, function () {
return model.variables.tokenVarVar;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("wg9LrKt3r0CttUS92iWPsw.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 5)) ? ("-typed") : ("")));
}, function () {
return model.variables.tokenVarVar;
}),
value: model.getCachedValue(idService.getId("wg9LrKt3r0CttUS92iWPsw.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 5)) ? (OS.BuiltinFunctions.substr(model.variables.tokenVarVar, 4, 1)) : (""));
}, function () {
return model.variables.tokenVarVar;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("L_w2qauB3ES8Cfv8oPlAIg.Style"), function () {
return ("m-inputDigitItem " + (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 6)) ? ("-typed") : ("")));
}, function () {
return model.variables.tokenVarVar;
}),
value: model.getCachedValue(idService.getId("L_w2qauB3ES8Cfv8oPlAIg.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.tokenVarVar) >= 6)) ? (OS.BuiltinFunctions.substr(model.variables.tokenVarVar, 5, 1)) : (""));
}, function () {
return model.variables.tokenVarVar;
}),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "7+kL+Qpt606AKmRtBpJZqw"
},
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "IIWzSmqdYkS8ns0Qo5Yh3w"
},
style: "mv-20 mt-48 text-center",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "P6YARc8gKEOjfGp7pWKvzQ"
},
style: "c-white",
value: "Não recebeste o SMS?",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.sendTokenCodeForSMS$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link c-white -purple ma-24",
visible: true,
_idProps: {
service: idService,
name: "TryAgain2"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Reenviar")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_trampa",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.EmptyStateBackground.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateFooter",
visible: true,
_idProps: {
service: idService,
uuid: "24"
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
uuid: "25",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("Send.Enabled"), function () {
return (OS.BuiltinFunctions.length(model.variables.tokenVarVar) === 6);
}, function () {
return model.variables.tokenVarVar;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.validate$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative -fullWidth -big mb-16",
visible: true,
_idProps: {
service: idService,
name: "Send"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Validar",
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.tokenVarVar)]
}), React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "29",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cancel$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -secondary -negative -fullWidth -big mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.tokenVarVar), asPrimitiveValue(model.variables.isTokenValidVar)]
}), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "33",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.LoginFlow.controller", "WTF_MOB.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$Token_Rec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$TriggerOfflineDataSync", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth$WTF_MBP", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.controller$LoginAction", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_LoginFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.postPasswordless_Login$ServerAction = function (applicationIn, doLoggingIn, log_ExtendedParameterListIn, phone_numberIn, verification_codeIn, clientIdIn, clientSecretIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS(),
Phone_number: OS.DataTypes.JSConversions.basicTypeToJS(phone_numberIn, OS.Types.Text),
Verification_code: OS.DataTypes.JSConversions.basicTypeToJS(verification_codeIn, OS.Types.Text),
ClientId: OS.DataTypes.JSConversions.basicTypeToJS(clientIdIn, OS.Types.Text),
ClientSecret: OS.DataTypes.JSConversions.basicTypeToJS(clientSecretIn, OS.Types.Text)
};
return controller.callServerAction("PostPasswordless_Login", "screenservices/WTF_MOB/LoginFlow/LoginMsisdn_AccessValidation/ActionPostPasswordless_Login", "H0Uf7osT9i1GNP7OYkoLbQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation$rssespacemobile_loginnos_ActionPostPasswordless_Login"))();
executeServerActionResult.responseOut = Mobile_LoginNOSModel.Token_Rec.fromJS(outputs.Response);
executeServerActionResult.subOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Sub, OS.Types.Text);
executeServerActionResult.clientIpOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.ClientIp, OS.Types.Text);
executeServerActionResult.isMobileNetworkOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.IsMobileNetwork, OS.Types.Boolean);
executeServerActionResult.mobilePhoneOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.MobilePhone, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation$rssespacemobile_loginnos_ActionPostPasswordless_Login", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.Token_Rec();
},
complexType: Mobile_LoginNOSModel.Token_Rec
}, {
name: "Sub",
attrName: "subOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ClientIp",
attrName: "clientIpOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsMobileNetwork",
attrName: "isMobileNetworkOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "MobilePhone",
attrName: "mobilePhoneOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype.validateRegisteredUser$ServerAction = function (subIn, callContext) {
var controller = this.controller;
var inputs = {
Sub: OS.DataTypes.JSConversions.basicTypeToJS(subIn, OS.Types.Text)
};
return controller.callServerAction("ValidateRegisteredUser", "screenservices/WTF_MOB/LoginFlow/LoginMsisdn_AccessValidation/ActionValidateRegisteredUser", "iy+K4ZbV67ZL2pHV4lEKAg", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation$rssespacemobile_loginnos_ActionValidateRegisteredUser"))();
executeServerActionResult.isRegisteredUserOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.IsRegisteredUser, OS.Types.Boolean);
executeServerActionResult.hasErrorOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.HasError, OS.Types.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation$rssespacemobile_loginnos_ActionValidateRegisteredUser", [{
name: "IsRegisteredUser",
attrName: "isRegisteredUserOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasError",
attrName: "hasErrorOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype.postPasswordless_Send$ServerAction = function (phone_numberIn, client_idIn, applicationIn, doLoggingIn, log_ExtendedParameterListIn, callContext) {
var controller = this.controller;
var inputs = {
Phone_number: OS.DataTypes.JSConversions.basicTypeToJS(phone_numberIn, OS.Types.Text),
Client_id: OS.DataTypes.JSConversions.basicTypeToJS(client_idIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS()
};
return controller.callServerAction("PostPasswordless_Send", "screenservices/WTF_MOB/LoginFlow/LoginMsisdn_AccessValidation/ActionPostPasswordless_Send", "gtS5At8Nm2cbNvG94L9JsQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation$rssespacemobile_loginnos_ActionPostPasswordless_Send"))();
executeServerActionResult.responseOut = Mobile_LoginNOSModel.PostpasswordlessSendResponseRec.fromJS(outputs.Response);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessValidation$rssespacemobile_loginnos_ActionPostPasswordless_Send", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.PostpasswordlessSendResponseRec();
},
complexType: Mobile_LoginNOSModel.PostpasswordlessSendResponseRec
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._validate$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Validate");
callContext = controller.callContext(callContext);
var postPasswordless_LoginVar = new OS.DataTypes.VariableHolder();
var validateRegisteredUserVar = new OS.DataTypes.VariableHolder();
var registerDeviceInfoVar = new OS.DataTypes.VariableHolder();
var checkIfUserHasEverLoggedInVar = new OS.DataTypes.VariableHolder();
var validateIfUserAreBlockedVar = new OS.DataTypes.VariableHolder();
var loginActionVar = new OS.DataTypes.VariableHolder();
var getUserInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Validar", 0, "", callContext).then(function () {
// Execute Action: PostPasswordless_Login
model.flush();
return controller.postPasswordless_Login$ServerAction(model.variables.applicationNameIn, true, new WTF_MOBModel.STR_LogNameValueRecordList(), model.variables.phoneNumberIn, model.variables.tokenVarVar, model.variables.clientIdIn, model.variables.clientSecretIn, callContext).then(function (value) {
postPasswordless_LoginVar.value = value;
});
}).then(function () {
// HasError
return OS.Flow.executeSequence(function () {
if((((postPasswordless_LoginVar.value.responseOut.faultAttr.detailAttr.errorcodeAttr) !== ("")))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/LoginMsisdn_WrongCode
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoginMsisdn_WrongCode", {
ClientSecret: model.variables.clientSecretIn,
ApplicationName: model.variables.applicationNameIn,
PhoneNumber: model.variables.phoneNumberIn,
ClientId: model.variables.clientIdIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: ValidateRegisteredUser
model.flush();
return controller.validateRegisteredUser$ServerAction(postPasswordless_LoginVar.value.subOut, callContext).then(function (value) {
validateRegisteredUserVar.value = value;
}).then(function () {
// IsRegisteredUser
return OS.Flow.executeSequence(function () {
if((validateRegisteredUserVar.value.isRegisteredUserOut)) {
// Execute Action: LoginAction
model.flush();
return WTF_MOBController.default.loginAction$Action(OS.DataTypes.JSConversions.typeConvertRecord(postPasswordless_LoginVar.value.responseOut, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
target.access_tokenAttr = source.access_tokenAttr;
target.token_typeAttr = source.token_typeAttr;
target.scopeAttr = source.scopeAttr;
target.expires_inAttr = source.expires_inAttr;
target.issued_atAttr = source.issued_atAttr;
target.statusAttr = source.statusAttr;
target.refresh_tokenAttr = source.refresh_tokenAttr;
target.refresh_token_expires_inAttr = source.refresh_token_expires_inAttr;
target.refresh_token_issued_atAttr = source.refresh_token_issued_atAttr;
target.refresh_token_statusAttr = source.refresh_token_statusAttr;
target.refresh_countAttr = source.refresh_countAttr;
target.id_tokenAttr = source.id_tokenAttr;
target.faultstringAttr = source.faultAttr.faultstringAttr;
return target;
}), false, true, callContext).then(function (value) {
loginActionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((loginActionVar.value.successOut)) {
// Execute Action: LogMessage2
OS.SystemActions.logMessage("[Login] Start TriggerOfflineDataSync", "AssociationSync", callContext);
// Aggregate: GetUserInfo
var getUserInfoAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_NOS_INFORecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6";
} else {
selectSql += "\"ENLocal_USER_NOS_INFO\".\"Uid\" o0, \"ENLocal_USER_NOS_INFO\".\"Name\" o1, \"ENLocal_USER_NOS_INFO\".\"Birth_date\" o2, \"ENLocal_USER_NOS_INFO\".\"Gender\" o3, \"ENLocal_USER_NOS_INFO\".\"Username\" o4, \"ENLocal_USER_NOS_INFO\".\"Picture\" o5, \"ENLocal_USER_NOS_INFO\".\"CreatedAt\" o6";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_NOS_INFO\" \"ENLocal_USER_NOS_INFO\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_NOS_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_NOS_INFOAttr",
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
return getUserInfoVar.value;
});
};
return getUserInfoAggr().then(function () {
// Execute Action: RegisterDeviceInfo
model.flush();
return CustomerNotifications_MBPController.default.registerDeviceInfo_v3$Action(getUserInfoVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_NOS_INFOAttr.uidAttr, "WTF", callContext).then(function (value) {
registerDeviceInfoVar.value = value;
});
}).then(function () {
// Execute Action: SyncBalanceConfig
WTF_MOBController.default.triggerOfflineDataSync$Action(WTF_MOBModel.staticEntities.sYNC_UNIT.balanceConfig, false, callContext);
// Execute Action: TriggerOfflineDataSync
WTF_MOBController.default.triggerOfflineDataSync$Action(WTF_MOBModel.staticEntities.sYNC_UNIT.aggregates, false, callContext);
// Execute Action: ValidateIfUserAreBlocked
model.flush();
return WTF_MBPController.default.validateIfUserAreBlocked$Action(callContext).then(function (value) {
validateIfUserAreBlockedVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((validateIfUserAreBlockedVar.value.hasBockOut === true))) {
// Execute Action: LogMessage4
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "The user is blocked..."), "WTF_MOB", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/UserBlocked
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserBlocked", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
// Execute Action: LogMessage5
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "The user is NOT blocked..."), "WTF_MOB", callContext);
return OS.Flow.executeSequence(function () {
if(((loginActionVar.value.app_UserAssociations_LengthOut >= 1))) {
// Execute Action: LogMessage6
OS.SystemActions.logMessage((((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "After associations, the length: ") + (loginActionVar.value.app_UserAssociations_LengthOut).toString()), "WTF_MOB", callContext);
// Execute Action: CheckIfUserHasEverLoggedIn
model.flush();
return WTF_MOBController.default.checkIfUserHasEverLoggedIn$Action(false, callContext).then(function (value) {
checkIfUserHasEverLoggedInVar.value = value;
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).then(function () {
// HasLoggedIn?
if((checkIfUserHasEverLoggedInVar.value.hasLoggedInOut)) {
// Destination: /WTF_MOB/LoadingSplash
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoadingSplash", {
FromRegister: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/OnBoarding
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/OnBoarding", {
DemoAppWithoutLogin: false,
FromRegister: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
} else {
// Execute Action: LogMessage7
OS.SystemActions.logMessage((((((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "After associations, the length: ") + (loginActionVar.value.app_UserAssociations_LengthOut).toString()) + "\r\n") + "Going to the protection screen..."), "WTF_MOB", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/ProtectionScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ProtectionScreen", {
FromRegister: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
}

});
});
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/LoginMsisdn_WithoutRegister
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoginMsisdn_WithoutRegister", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}

});
});
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
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "A aceder com o teu número"
model.variables.analyticsAuxVarVar.traceNameAttr = "A aceder com o teu número";
// AnalyticsAuxVar.Category = "Login"
model.variables.analyticsAuxVarVar.categoryAttr = "Login";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: setActivityLog_LOGIN_MSISDN_VISIT
model.flush();
return WTF_MBPController.default.setActivityLog_LOGIN_MSISDN_VISIT$Action("", "WIFI_REGISTERED", callContext);
}).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_AccessValidation.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage3
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
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Execute Action: StopTrace3
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
Controller.prototype._sendTokenCodeForSMS$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SendTokenCodeForSMS");
callContext = controller.callContext(callContext);
var postPasswordless_SendVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Resend Token", 0, "", callContext).then(function () {
// Execute Action: PostPasswordless_Send
model.flush();
return controller.postPasswordless_Send$ServerAction(model.variables.phoneNumberIn, model.variables.clientIdIn, model.variables.applicationNameIn, true, new WTF_MOBModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
postPasswordless_SendVar.value = value;
});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
});
};
Controller.prototype._cancel$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Cancel");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Cancelar", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
};
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
};

Controller.prototype.validate$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._validate$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.sendTokenCodeForSMS$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sendTokenCodeForSMS$Action, callContext);

};
Controller.prototype.cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cancel$Action, callContext);

};
Controller.prototype.layoutBlankIsConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutBlankIsConnectedEvent$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_LoginFlowController.default.handleError(ex, this.callContext());
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

