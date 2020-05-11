define("WTF_MOB.ExceptionsFlow.Oops.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "NOSCordovaPlugin.controller", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$model", "WTF_MOB.Common.LayoutBlank.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.LoginFlow.NOSID_Logout.mvc$model", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$ValidateUserSession", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$setActivityLog_ClickAddServices", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$OpenNOSPlugin", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "WTF_MOB.referencesHealth$NOSCordovaPlugin", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, NOSCordovaPluginController, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel, WTF_MOB_Common_LayoutBlank_mvcModel, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_LoginFlow_NOSID_Logout_mvcModel) {
var OS = OutSystems.Internal;


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
this.attr("IsNOSPluginAvailable", "isNOSPluginAvailableVar", "IsNOSPluginAvailable", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec)
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
Model._hasValidationWidgetsValue = ((((NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel.hasValidationWidgets || WTF_MOB_Common_LayoutBlank_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || WTF_MOB_LoginFlow_NOSID_Logout_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.ExceptionsFlow.Oops.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "NOSCordovaPlugin.controller", "react", "OutSystemsReactView", "WTF_MOB.ExceptionsFlow.Oops.mvc$model", "WTF_MOB.ExceptionsFlow.Oops.mvc$controller", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.LayoutBlank.mvc$view", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.LoginFlow.NOSID_Logout.mvc$view", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$ValidateUserSession", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$setActivityLog_ClickAddServices", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$OpenNOSPlugin", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "WTF_MOB.referencesHealth$NOSCordovaPlugin", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, NOSCordovaPluginController, React, OSView, WTF_MOB_ExceptionsFlow_Oops_mvc_model, WTF_MOB_ExceptionsFlow_Oops_mvc_controller, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view, OSWidgets, WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_LoginFlow_NOSID_Logout_mvc_view) {
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
        View.displayName = "ExceptionsFlow.Oops";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ExceptionsFlow.Oops.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view, WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_LoginFlow_NOSID_Logout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_Oops_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_Oops_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(model.variables.isNOSPluginAvailableVar, false, this, function () {
return [React.createElement(NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onError$Action: function (errorIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnError$Action(errorIn, controller.callContext(eventHandlerContext));
});
;
},
onSuccess$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnSuccess$Action(controller.callContext(eventHandlerContext));
});
;
},
onLoginSuccess$Action: function (urlIn, browserIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.doNothing$Action(controller.callContext(eventHandlerContext));
});
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
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(WTF_MOB_Common_LayoutBlank_mvc_view, {
inputs: {
ScreenName: "Oops",
PageSection: "Oops",
PageTitle: "Oops",
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "_0v57RxFSkeNJbq23dSiNA"
},
style: "b-pinkToBlue",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateHead",
visible: true,
_idProps: {
service: idService,
uuid: "3"
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
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, {
inputs: {
Text: "Ainda não associaste o teu cartão a esta conta. Regista-te abaixo para começares a ganhar prémios que até fervem.",
Title: "Oops!"
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
spokeImage: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.SIM.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "6"
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
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.associarServicosOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "a-flexCard -communication b-white ma-16",
visible: true,
_idProps: {
service: idService,
name: "AssociarServicos"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master text-center",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "oDwDTaWIRUOiOscK2Agc7Q"
},
visible: true,
_idProps: {
service: idService,
name: "RegistarCartao"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-strongPink -bold",
value: "Registar cartão WTF",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "m+NWvRDHCkqdl0VgVMRZvg"
},
visible: true,
_idProps: {
service: idService,
name: "Description"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "9P1tdDj0p0GG_4ctq4K8yA"
},
style: "a-flexCardDesc c-gray6",
value: "Tens um cartão WTF que não está a aparecer? Experimenta registar-lo novamente",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-right",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "a-icon c-warmPurple",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight
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
uuid: "15",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pt-8 pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_LoginFlow_NOSID_Logout_mvc_view, {
inputs: {
StyleClass: "a-link c-white -bold"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
logoutError$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_LogoutError$Action(controller.callContext(eventHandlerContext));
});
;
},
setLoading$Action: function (evt_IsLoadingIn) {
var eventHandlerContext = callContext.clone();
controller.nOSID_LogoutSetLoading$Action(evt_IsLoadingIn, controller.callContext(eventHandlerContext));

;
},
logout_Close$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Close$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "17",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_trampa",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.EmptyStateBackground.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ExceptionsFlow.Oops.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "NOSCordovaPlugin.controller", "WTF_MOB.languageResources", "WTF_MOB.ExceptionsFlow.controller", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$ValidateUserSession", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$setActivityLog_ClickAddServices", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$OpenNOSPlugin", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "WTF_MOB.referencesHealth$NOSCordovaPlugin", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, NOSCordovaPluginController, WTF_MOBLanguageResources, WTF_MOB_ExceptionsFlowController) {
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
Controller.prototype._nOSID_Logout_Close$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Logout_Close");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var logoutVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Oops", "Terminar sessão", 0, "", callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("Oops.NOSID_Logout_Close", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._nOSID_LogoutError$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_LogoutError");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
}).catch(function (ex) {
OS.Logger.trace("Oops.NOSID_LogoutError", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
};
Controller.prototype._showWebViewListenerOnError$Action = function (errorIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ExceptionsFlow.Oops.ShowWebViewListenerOnError$vars"))());
vars.value.errorInLocal = errorIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validateUserSessionVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(("Error:" + vars.value.errorInLocal), "PluginHandler", callContext);
return OS.Flow.executeSequence(function () {
if((((vars.value.errorInLocal === "0") || (vars.value.errorInLocal === "")))) {
// IsLoading = False
model.variables.isLoadingVar = false;
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.errorInLocal === "401")) {
// Execute Action: ValidateUserSession
model.flush();
return WTF_MOBController.default.validateUserSession$Action(false, callContext).then(function (value) {
validateUserSessionVar.value = value;
}).then(function () {
if((!(validateUserSessionVar.value.isValidOut))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("A sessão expirou. Faça novo login por favor", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

}).then(function () {
// Destination: /WTF_MOB/Oops
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Oops", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}

});
}).catch(function (ex) {
OS.Logger.trace("Oops.ShowWebViewListenerOnError", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ExceptionsFlow.Oops.ShowWebViewListenerOnError$vars", [{
name: "Error",
attrName: "errorInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._showWebViewListenerOnSuccess$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnSuccess");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var createUserWtfActiveVar = new OS.DataTypes.VariableHolder();
var getActiveUserWTFVar = new OS.DataTypes.VariableHolder();
var getServicesVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetServices
model.flush();
return WTF_MBPController.default.getServices$Action(true, callContext).then(function (value) {
getServicesVar.value = value;
}).then(function () {
// NoAssociations?
return OS.Flow.executeSequence(function () {
if(((!(getServicesVar.value.successOut) || getServicesVar.value.app_UserAssociationsWithServicesOut.isEmpty))) {
// Destination: /WTF_MOB/ProtectionScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ProtectionScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: CreateUserWtfActive
model.flush();
return WTF_MBPController.default.getUserAssociationAndCreateUserWtfActive$Action(getServicesVar.value.app_UserAssociationsWithServicesOut.getCurrent(callContext.iterationContext).associationIdAttr, callContext).then(function (value) {
createUserWtfActiveVar.value = value;
}).then(function () {
// AlreadyInUse?
return OS.Flow.executeSequence(function () {
if((createUserWtfActiveVar.value.alreadyInUseOut)) {
// Execute Action: GetActiveUserWTF
model.flush();
return WTF_MBPController.default.getActiveUserWTF$Action(callContext).then(function (value) {
getActiveUserWTFVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/RecoveryMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RecoveryMsisdn", {
Msisdn: (getActiveUserWTFVar.value.userWTFActiveNowOut.msisdnAttr).toString()
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Serviço associado com sucesso!", 1, true, "icon-message_success level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Oops.ShowWebViewListenerOnSuccess", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._associarServicosOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AssociarServicosOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var logout2Var = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getAssociarServicosIsDebug2Var = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTFVar = new OS.DataTypes.VariableHolder();
var getAssociarServicosTitle2Var = new OS.DataTypes.VariableHolder();
var getAssociarServicosURL2Var = new OS.DataTypes.VariableHolder();
var getServices_Register_Native_IsActiveVar = new OS.DataTypes.VariableHolder();
var openNOSPlugin2Var = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Oops", "Associar serviço", 0, "", callContext).then(function () {
// Execute Action: LogEventFacebookSDK_WTF
logEventFacebookSDK_WTFVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("click_add_services", callContext);

// Execute Action: setActivityLog_ClickAddServices2
model.flush();
return WTF_MBPController.default.setActivityLog_ClickAddServices$Action("", callContext);
}).then(function () {
// Execute Action: GetServices_Register_Native_IsActive
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("Services_Register_Native_IsActive", callContext).then(function (value) {
getServices_Register_Native_IsActiveVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.toLower(getServices_Register_Native_IsActiveVar.value.valueOut) === "true"))) {
// Destination: /WTF_MOB/Services_RegisterPhone
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Services_RegisterPhone", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((model.variables.isNOSPluginAvailableVar)) {
// Execute Action: GetAssociarServicosURL2
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_AssociarServicos", callContext).then(function (value) {
getAssociarServicosURL2Var.value = value;
}).then(function () {
// Execute Action: GetAssociarServicosTitle2
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_AssociarServicos_Title", callContext).then(function (value) {
getAssociarServicosTitle2Var.value = value;
});
}).then(function () {
// Execute Action: GetAssociarServicosIsDebug2
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_AssociarServicos_IsDebug", callContext).then(function (value) {
getAssociarServicosIsDebug2Var.value = value;
});
}).then(function () {
// Execute Action: OpenNOSPlugin2
model.flush();
return WTF_MOBController.default.openNOSPlugin$Action(getAssociarServicosTitle2Var.value.valueOut, getAssociarServicosURL2Var.value.valueOut, (((OS.BuiltinFunctions.toLower(getAssociarServicosIsDebug2Var.value.valueOut) === "true")) ? (true) : (false)), true, WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, false, callContext).then(function (value) {
openNOSPlugin2Var.value = value;
});
}).then(function () {
// SessionExpired?
return OS.Flow.executeSequence(function () {
if((openNOSPlugin2Var.value.sessionExpiredOut)) {
// Execute Action: Logout2
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logout2Var.value = value;
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logout2Var.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
} else {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Serviço não disponível", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Oops.AssociarServicosOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._doNothing$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DoNothing");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).catch(function (ex) {
OS.Logger.trace("Oops.DoNothing", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._nOSID_LogoutSetLoading$Action = function (evt_IsLoadingIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_LogoutSetLoading");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ExceptionsFlow.Oops.NOSID_LogoutSetLoading$vars"))());
vars.value.evt_IsLoadingInLocal = evt_IsLoadingIn;
// IsLoading = Evt_IsLoading
model.variables.isLoadingVar = vars.value.evt_IsLoadingInLocal;
};
Controller.registerVariableGroupType("WTF_MOB.ExceptionsFlow.Oops.NOSID_LogoutSetLoading$vars", [{
name: "Evt_IsLoading",
attrName: "evt_IsLoadingInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkNOSCordovaPluginVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Oops"
model.variables.analyticsAuxVarVar.traceNameAttr = "Oops";
// AnalyticsAuxVar.Category = "Oops"
model.variables.analyticsAuxVarVar.categoryAttr = "Oops";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: CheckNOSCordovaPlugin
checkNOSCordovaPluginVar.value = NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action(callContext);

// IsNOSPluginAvailable = CheckNOSCordovaPlugin.IsAvailable
model.variables.isNOSPluginAvailableVar = checkNOSCordovaPluginVar.value.isAvailableOut;
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Oops.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.nOSID_Logout_Close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Logout_Close$Action, callContext);

};
Controller.prototype.nOSID_LogoutError$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_LogoutError$Action, callContext);

};
Controller.prototype.layoutBlankIsConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutBlankIsConnectedEvent$Action, callContext);

};
Controller.prototype.showWebViewListenerOnError$Action = function (errorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnError$Action, callContext, errorIn);

};
Controller.prototype.showWebViewListenerOnSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnSuccess$Action, callContext);

};
Controller.prototype.associarServicosOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._associarServicosOnClick$Action, callContext);

};
Controller.prototype.doNothing$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._doNothing$Action, callContext);

};
Controller.prototype.nOSID_LogoutSetLoading$Action = function (evt_IsLoadingIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_LogoutSetLoading$Action, callContext, evt_IsLoadingIn);

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
return WTF_MOB_ExceptionsFlowController.default.handleError(ex, this.callContext());
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

