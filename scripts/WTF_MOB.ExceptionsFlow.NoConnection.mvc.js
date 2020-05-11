define("WTF_MOB.ExceptionsFlow.NoConnection.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "Essentials_MOB.controller", "WTF_MOB.Common.LayoutBlank.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$ValidateUserSession", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$GetLastURL", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, Essentials_MOBController, WTF_MOB_Common_LayoutBlank_mvcModel, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("HasConnection", "hasConnectionVar", "HasConnection", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsDestroyed", "isDestroyedVar", "IsDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("HasSession", "hasSessionVar", "HasSession", true, OS.Types.Boolean, function () {
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_LayoutBlank_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.ExceptionsFlow.NoConnection.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "Essentials_MOB.controller", "react", "OutSystemsReactView", "WTF_MOB.ExceptionsFlow.NoConnection.mvc$model", "WTF_MOB.ExceptionsFlow.NoConnection.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$ValidateUserSession", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$GetLastURL", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, Essentials_MOBController, React, OSView, WTF_MOB_ExceptionsFlow_NoConnection_mvc_model, WTF_MOB_ExceptionsFlow_NoConnection_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "ExceptionsFlow.NoConnection";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ExceptionsFlow.NoConnection.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_NoConnection_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_NoConnection_mvc_controller;
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
PageSection: "Sem conectividade",
PageType: "Operacao",
ScreenName: "NoConnection",
PageTitle: "Sem conectividade"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
isConnectedEvent$Action: function (isConnectedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.isConnectedEvent$Action(controller.callContext(eventHandlerContext));
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
}), React.createElement(MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, {
inputs: {
Title: "Sem conetividade",
Text: "Esta página não se encontra disponível neste momento, por favor, tenta novamente mais tarde."
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
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.NoConnection.svg"),
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
uuid: "7",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.variables.hasConnectionVar,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.noConnectionTryAgainEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative -fullWidth -big mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Tentar novamente",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.hasConnectionVar)]
}), $if(model.variables.hasSessionVar, false, this, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "11",
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
controller.goToWallet$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -secondary -negative -fullWidth -big mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Wallet Offline",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
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
}))), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "17",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.hasSessionVar), asPrimitiveValue(model.variables.hasConnectionVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ExceptionsFlow.NoConnection.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "Essentials_MOB.controller", "WTF_MOB.languageResources", "WTF_MOB.ExceptionsFlow.controller", "WTF_MOB.ExceptionsFlow.NoConnection.mvc$controller.OnDestroy.RemoveSetIntervalJS", "WTF_MOB.ExceptionsFlow.NoConnection.mvc$controller.OnReady.SetCheckNetworkIntervalJS", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$ValidateUserSession", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$GetLastURL", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, Essentials_MOBController, WTF_MOBLanguageResources, WTF_MOB_ExceptionsFlowController, WTF_MOB_ExceptionsFlow_NoConnection_mvc_controller_OnDestroy_RemoveSetIntervalJS, WTF_MOB_ExceptionsFlow_NoConnection_mvc_controller_OnReady_SetCheckNetworkIntervalJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
checkNetwork$Action: function () {
return controller.executeActionInsideJSNode(controller._checkNetwork$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
controller.safeExecuteJSNode(WTF_MOB_ExceptionsFlow_NoConnection_mvc_controller_OnDestroy_RemoveSetIntervalJS, "RemoveSetInterval", "OnDestroy", null, function ($parameters) {
}, {}, {});
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext).then(function () {
// IsDestroyed = True
model.variables.isDestroyedVar = true;
});
});
};
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ExceptionsFlow.NoConnection.OnReady$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validateUserSessionVar = new OS.DataTypes.VariableHolder();
var getConfigValueAsText_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Sem conectividade"
model.variables.analyticsAuxVarVar.traceNameAttr = "Sem conectividade";
// AnalyticsAuxVar.Category = "Sem conectividade"
model.variables.analyticsAuxVarVar.categoryAttr = "Sem conectividade";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: ValidateUserSession
model.flush();
return WTF_MOBController.default.validateUserSession$Action(false, callContext).then(function (value) {
validateUserSessionVar.value = value;
});
}).then(function () {
// HasSession = ValidateUserSession.IsValid
model.variables.hasSessionVar = validateUserSessionVar.value.isValidOut;
// Execute Action: GetConfigValueAsText_MBP
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("OFFLINE_CHECKNETWORK_INTERVAL", callContext).then(function (value) {
getConfigValueAsText_MBPVar.value = value;
});
}).then(function () {
// NetworkInterval = If * 1000
vars.value.networkIntervalVar = ((((OS.BuiltinFunctions.textToInteger(getConfigValueAsText_MBPVar.value.valueOut) > 0)) ? (OS.BuiltinFunctions.textToInteger(getConfigValueAsText_MBPVar.value.valueOut)) : (1)) * 1000);
controller.safeExecuteJSNode(WTF_MOB_ExceptionsFlow_NoConnection_mvc_controller_OnReady_SetCheckNetworkIntervalJS, "SetCheckNetworkInterval", "OnReady", {
NetworkInterval: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.networkIntervalVar, OS.Types.Integer, true)
}, function ($parameters) {
}, {
CheckNetwork: controller.clientActionProxies.checkNetwork$Action
}, {});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Execute Action: CheckNetwork
return controller._checkNetwork$Action(callContext);
}

});
}).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("NoConnection.OnReady", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ExceptionsFlow.NoConnection.OnReady$vars", [{
name: "NetworkInterval",
attrName: "networkIntervalVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._noConnectionTryAgainEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NoConnectionTryAgainEvent");
callContext = controller.callContext(callContext);
var getLastURLVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Sem conectividade", "Tentar novamente", 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.hasConnectionVar)) {
// Execute Action: GetLastURL
model.flush();
return WTF_MBPController.default.getLastURL$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()), callContext).then(function (value) {
getLastURLVar.value = value;
}).then(function () {
if(((getLastURLVar.value.uRLOut === ""))) {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getLastURLVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true));
}

});
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
}

});
});
});
};
Controller.prototype._checkNetwork$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CheckNetwork");
callContext = controller.callContext(callContext);
var checkNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CheckNetworkStatus
model.flush();
return Essentials_MOBController.default.checkNetworkStatus$Action(callContext).then(function (value) {
checkNetworkStatusVar.value = value;
}).then(function () {
// HasConnection = CheckNetworkStatus.isOnline
model.variables.hasConnectionVar = checkNetworkStatusVar.value.isOnlineOut;
});
});
};
Controller.prototype._isConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("IsConnectedEvent");
callContext = controller.callContext(callContext);
var checkNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CheckNetworkStatus
model.flush();
return Essentials_MOBController.default.checkNetworkStatus$Action(callContext).then(function (value) {
checkNetworkStatusVar.value = value;
}).then(function () {
// HasConnection = CheckNetworkStatus.isOnline
model.variables.hasConnectionVar = checkNetworkStatusVar.value.isOnlineOut;
});
});
};
Controller.prototype._goToWallet$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToWallet");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Sem conectividade", "Wallet Offline", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.noConnectionTryAgainEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._noConnectionTryAgainEvent$Action, callContext);

};
Controller.prototype.checkNetwork$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._checkNetwork$Action, callContext);

};
Controller.prototype.isConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._isConnectedEvent$Action, callContext);

};
Controller.prototype.goToWallet$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToWallet$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
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
define("WTF_MOB.ExceptionsFlow.NoConnection.mvc$controller.OnDestroy.RemoveSetIntervalJS", [], function () {
return function ($actions, $roles, $public) {
clearInterval(window.NoConnection_CheckNetwork_SetInterval);
};
});
define("WTF_MOB.ExceptionsFlow.NoConnection.mvc$controller.OnReady.SetCheckNetworkIntervalJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
clearInterval(window.NoConnection_CheckNetwork_SetInterval);
window.NoConnection_CheckNetwork_SetInterval = setInterval(function() {
    $actions.CheckNetwork();
}, $parameters.NetworkInterval);
};
});

