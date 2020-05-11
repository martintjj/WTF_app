define("WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "Mobile_LoginNOS.model", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.Common.LayoutBlank.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$model", "WTF_MOB.LoginFlow.NOSID_Register.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$setActivityLog_ClickLoginPage", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, Mobile_LoginNOSModel, WTF_MBPModel, MobileUIWidgetsController, WTF_MOB_Common_LayoutBlank_mvcModel, MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvcModel, WTF_MOB_LoginFlow_NOSID_Register_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
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
this.attr("LoginMode", "loginModeVar", "LoginMode", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UseOpenId", "useOpenIdVar", "UseOpenId", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("isDestroyed", "isDestroyedVar", "isDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
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
return {};
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ((((WTF_MOB_Common_LayoutBlank_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvcModel.hasValidationWidgets) || WTF_MOB_LoginFlow_NOSID_Register_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "Mobile_LoginNOS.model", "WTF_MBP.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.mvc$model", "WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$view", "WTF_MOB.LoginFlow.NOSID_Register.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$setActivityLog_ClickLoginPage", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, Mobile_LoginNOSModel, WTF_MBPModel, MobileUIWidgetsController, React, OSView, WTF_MOB_LoginFlow_LoginMsisdn_WithoutRegister_mvc_model, WTF_MOB_LoginFlow_LoginMsisdn_WithoutRegister_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_view, WTF_MOB_LoginFlow_NOSID_Register_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "LoginFlow.LoginMsisdn_WithoutRegister";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_view, WTF_MOB_LoginFlow_NOSID_Register_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_WithoutRegister_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_WithoutRegister_mvc_controller;
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
ScreenName: "LoginMsisdn_WithoutRegister",
PageType: "Consulta",
PageSection: "Login",
PageTitle: "Nº não registado"
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
"data-style-key": "ImoNXIGXQEeSrCsdLFmcMA"
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
Title: "OOPS!",
Text: "O teu número de telemóvel ainda não está registado.\r\nPara teres acesso a todas as funcionalidade da tua App WTF, tens que fazer o registo do teu número de telemóvel.",
Subtitle: "Número não registado"
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
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateFooter",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "qZ6ywsTNq0+SrzStUHx3eg"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_LoginFlow_NOSID_Register_mvc_view, {
inputs: {
UseMSISDN: false,
ScreenName: "PreLogin",
UseMSISDNWithoutRegister: true,
LoginMode: model.variables.loginModeVar,
UseOpenId: model.variables.useOpenIdVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
register_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Error$Action("PreLogin.NOSID_RegisterRegister_Error -> IsDestroyed ", error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
register_Start$Action: function (analytics_LabelIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Start$Action(controller.callContext(eventHandlerContext));
});
;
},
register_Close$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Closed$Action(OS.DataTypes.JSConversions.typeConvertRecord(accessTokenInfoIn, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
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
target.faultstringAttr = source.faultAttr.faultstringAttr;
return target;
}), "PreLogin.NOSID_RegisterRegister_Close -> IsDestroyed ", true, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "8",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "rkMXVr9+E0apiWOzMpu9Yg"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
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
uuid: "10",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.back$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -secondary -negative -fullWidth -big mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_trampa",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.EmptyStateBackground.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: [asPrimitiveValue(model.variables.useOpenIdVar), asPrimitiveValue(model.variables.loginModeVar)]
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
uuid: "16",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "Mobile_LoginNOS.model", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.LoginFlow.controller", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$setActivityLog_ClickLoginPage", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, Mobile_LoginNOSModel, WTF_MBPModel, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_LoginFlowController) {
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

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._nOSID_Register_Error$Action = function (logMessageInputIn, error_MessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Register_Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.NOSID_Register_Error$vars"))());
vars.value.logMessageInputInLocal = logMessageInputIn;
vars.value.error_MessageInLocal = error_MessageIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: LogMessage3
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "Entering Register or login ERROR..."), "WTF_MOB", callContext);
if((model.variables.isDestroyedVar)) {
// Execute Action: LogMessage
OS.SystemActions.logMessage(vars.value.logMessageInputInLocal, "OnDestroy", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
} else {
// Error_Message = "Error Message"
vars.value.error_MessageInLocal = "Error Message";
// IsLoading = False
model.variables.isLoadingVar = false;
}

}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_WithoutRegister.NOSID_Register_Error", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.NOSID_Register_Error$vars", [{
name: "LogMessageInput",
attrName: "logMessageInputInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Error_Message",
attrName: "error_MessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
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
Controller.prototype._nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, logMessageInputIn, fromRegisterInputIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_RegisterOrLogin_Closed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.NOSID_RegisterOrLogin_Closed$vars"))());
vars.value.accessTokenInfoInLocal = accessTokenInfoIn.clone();
vars.value.logMessageInputInLocal = logMessageInputIn;
vars.value.fromRegisterInputInLocal = fromRegisterInputIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validateIfUserAreBlockedVar = new OS.DataTypes.VariableHolder();
var registerDeviceInfoVar = new OS.DataTypes.VariableHolder();
var checkIfUserHasEverLoggedInVar = new OS.DataTypes.VariableHolder();
var loginActionVar = new OS.DataTypes.VariableHolder();
var getUserInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: LogMessage3
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "Entering Register or login closed..."), "WTF_MOB", callContext);
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
// Execute Action: LogMessage
OS.SystemActions.logMessage(vars.value.logMessageInputInLocal, "OnDestroy", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
} else {
// Execute Action: LoginAction
model.flush();
return WTF_MOBController.default.loginAction$Action(vars.value.accessTokenInfoInLocal, false, true, callContext).then(function (value) {
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
if((!(vars.value.fromRegisterInputInLocal))) {
// HasLoggedIn?
if((checkIfUserHasEverLoggedInVar.value.hasLoggedInOut)) {
// Destination: /WTF_MOB/LoadingSplash
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoadingSplash", {
FromRegister: vars.value.fromRegisterInputInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

// Destination: /WTF_MOB/OnBoarding
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/OnBoarding", {
FromRegister: vars.value.fromRegisterInputInLocal,
DemoAppWithoutLogin: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: LogMessage7
OS.SystemActions.logMessage((((((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "After associations, the length: ") + (loginActionVar.value.app_UserAssociations_LengthOut).toString()) + "\r\n") + "Going to the protection screen..."), "WTF_MOB", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/ProtectionScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ProtectionScreen", {
FromRegister: vars.value.fromRegisterInputInLocal
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
}

});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_WithoutRegister.NOSID_RegisterOrLogin_Closed", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_WithoutRegister.NOSID_RegisterOrLogin_Closed$vars", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec
}, {
name: "LogMessageInput",
attrName: "logMessageInputInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "FromRegisterInput",
attrName: "fromRegisterInputInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
};
Controller.prototype._nOSID_Register_Start$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Register_Start");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTFVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Login", "Registar", 0, "", callContext).then(function () {
// Execute Action: LogEventFacebookSDK_WTF
logEventFacebookSDK_WTFVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Click_register", callContext);

// Execute Action: setActivityLog_ClickLoginPage
model.flush();
return WTF_MBPController.default.setActivityLog_ClickLoginPage$Action(true, callContext);
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_WithoutRegister.NOSID_Register_Start", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException3
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._back$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Back");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Cancelar", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_WithoutRegister.Back", OS.Exceptions.getMessage(ex), ex.name);
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
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
// AnalyticsAuxVar.TraceName = "Nº não registado"
model.variables.analyticsAuxVarVar.traceNameAttr = "Nº não registado";
// AnalyticsAuxVar.Category = "Login"
model.variables.analyticsAuxVarVar.categoryAttr = "Login";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: setActivityLog_LOGIN_MSISDN_VISIT
model.flush();
return WTF_MBPController.default.setActivityLog_LOGIN_MSISDN_VISIT$Action("", "WIFI_NOREGISTER", callContext);
}).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_WithoutRegister.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.nOSID_Register_Error$Action = function (logMessageInputIn, error_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Register_Error$Action, callContext, logMessageInputIn, error_MessageIn);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, logMessageInputIn, fromRegisterInputIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_RegisterOrLogin_Closed$Action, callContext, accessTokenInfoIn, logMessageInputIn, fromRegisterInputIn);

};
Controller.prototype.layoutBlankIsConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutBlankIsConnectedEvent$Action, callContext);

};
Controller.prototype.nOSID_Register_Start$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Register_Start$Action, callContext);

};
Controller.prototype.back$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._back$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

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

