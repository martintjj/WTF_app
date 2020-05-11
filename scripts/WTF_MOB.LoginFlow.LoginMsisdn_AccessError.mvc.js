define("WTF_MOB.LoginFlow.LoginMsisdn_AccessError.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "MobileUIWidgets.controller", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, MobileUIWidgetsController) {
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
this.attr("Msisdn", "msisdnVar", "Msisdn", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ClientId", "clientIdIn", "ClientId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ApplicationName", "applicationNameIn", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ClientSecret", "clientSecretIn", "ClientSecret", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_clientSecretInDataFetchStatus", "_clientSecretInDataFetchStatus", "_clientSecretInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("ClientId" in inputs) {
this.variables.clientIdIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ClientId, OS.Types.Text);
}

if("ApplicationName" in inputs) {
this.variables.applicationNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ApplicationName, OS.Types.Text);
}

if("ClientSecret" in inputs) {
this.variables.clientSecretIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ClientSecret, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.LoginMsisdn_AccessError.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.LoginMsisdn_AccessError.mvc$model", "WTF_MOB.LoginFlow.LoginMsisdn_AccessError.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$view", "InputMasksMobile.InputMasks.NumberMask.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, MobileUIWidgetsController, React, OSView, WTF_MOB_LoginFlow_LoginMsisdn_AccessError_mvc_model, WTF_MOB_LoginFlow_LoginMsisdn_AccessError_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_view, InputMasksMobile_InputMasks_NumberMask_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "LoginFlow.LoginMsisdn_AccessError";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.LoginFlow.LoginMsisdn_AccessError.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_view, InputMasksMobile_InputMasks_NumberMask_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_AccessError_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_AccessError_mvc_controller;
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
PageTitle: "Não foi possível aceder",
ScreenName: "LoginMsisdn_AccessError",
PageSection: "Login",
PageType: "Consulta"
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
"data-style-key": "S26tYmd+NU2BMFzOHjsd7g"
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
}), React.createElement(MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_view, {
inputs: {
Title: "Oops!",
Text: "É preciso ligares os teus dados móveis para confirmarmos o teu número.\r\n\r\nInsire o teu número de telemóvel para verificar via SMS",
Subtitle: "Não foi possível aceder"
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
uuid: "4",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
spokeImage: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.oops.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-24 mt-16",
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
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Número telemóvel",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "12"
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
uuid: "13",
alias: "3"
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
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 0,
prompt: "Número telemóvel",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.msisdnVar, function (value) {
model.variables.msisdnVar = value;
}),
_idProps: {
service: idService,
name: "InputNumberMSISDN"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.msisdnVar)]
}))))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_trampa",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.EmptyStateBackground.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateFooter",
visible: true,
_idProps: {
service: idService,
uuid: "17"
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
uuid: "18",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("Send.Enabled"), function () {
return (OS.BuiltinFunctions.length(model.variables.msisdnVar) === 9);
}, function () {
return model.variables.msisdnVar;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.sendSMS$Action(controller.callContext(eventHandlerContext));
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
value: "Enviar",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.msisdnVar)]
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
uuid: "22",
alias: "5"
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
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.msisdnVar)]
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
uuid: "26",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.LoginFlow.LoginMsisdn_AccessError.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.LoginFlow.controller", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_LoginFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.postPasswordless_Send$ServerAction = function (phone_numberIn, client_idIn, applicationIn, doLoggingIn, log_ExtendedParameterListIn, callContext) {
var controller = this.controller;
var inputs = {
Phone_number: OS.DataTypes.JSConversions.basicTypeToJS(phone_numberIn, OS.Types.Text),
Client_id: OS.DataTypes.JSConversions.basicTypeToJS(client_idIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS()
};
return controller.callServerAction("PostPasswordless_Send", "screenservices/WTF_MOB/LoginFlow/LoginMsisdn_AccessError/ActionPostPasswordless_Send", "gtS5At8Nm2cbNvG94L9JsQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessError$rssespacemobile_loginnos_ActionPostPasswordless_Send"))();
executeServerActionResult.responseOut = Mobile_LoginNOSModel.PostpasswordlessSendResponseRec.fromJS(outputs.Response);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_AccessError$rssespacemobile_loginnos_ActionPostPasswordless_Send", [{
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
Controller.prototype._sendSMS$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SendSMS");
callContext = controller.callContext(callContext);
var postPasswordless_SendVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Enviar SMS", 0, "", callContext).then(function () {
// Execute Action: PostPasswordless_Send
model.flush();
return controller.postPasswordless_Send$ServerAction(model.variables.msisdnVar, model.variables.clientIdIn, model.variables.applicationNameIn, true, new WTF_MOBModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
postPasswordless_SendVar.value = value;
});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).then(function () {
// HasError
if((((postPasswordless_SendVar.value.responseOut.faultAttr.detailAttr.errorcodeAttr) !== ("")))) {
// Destination: /WTF_MOB/LoginMsisdn_WithoutRegister
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoginMsisdn_WithoutRegister", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/LoginMsisdn_AccessValidation
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoginMsisdn_AccessValidation", {
ClientId: model.variables.clientIdIn,
ApplicationName: model.variables.applicationNameIn,
PhoneNumber: model.variables.msisdnVar,
ClientSecret: model.variables.clientSecretIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

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
// AnalyticsAuxVar.TraceName = "Não foi possível aceder"
model.variables.analyticsAuxVarVar.traceNameAttr = "Não foi possível aceder";
// AnalyticsAuxVar.Category = "Login"
model.variables.analyticsAuxVarVar.categoryAttr = "Login";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_AccessError.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
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

Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.sendSMS$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sendSMS$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.layoutBlankIsConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutBlankIsConnectedEvent$Action, callContext);

};
Controller.prototype.cancel$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cancel$Action, callContext);

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

