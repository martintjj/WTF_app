﻿define("WTF_MOB.ZonaFlow.ChangeTarifario_Sucess.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MOB_Common_Layout_Lvl1_mvcModel) {
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
this.attr("afterReady", "afterReadyVar", "afterReady", true, OS.Types.Boolean, function () {
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
Model._hasValidationWidgetsValue = WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets;
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
define("WTF_MOB.ZonaFlow.ChangeTarifario_Sucess.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.ChangeTarifario_Sucess.mvc$model", "WTF_MOB.ZonaFlow.ChangeTarifario_Sucess.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, React, OSView, WTF_MOB_ZonaFlow_ChangeTarifario_Sucess_mvc_model, WTF_MOB_ZonaFlow_ChangeTarifario_Sucess_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets) {
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
        View.displayName = "ZonaFlow.ChangeTarifario_Sucess";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_ChangeTarifario_Sucess_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_ChangeTarifario_Sucess_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl1_mvc_view, {
inputs: {
ContentClass: "pv-16 b-transparent",
WithoutLogin: false,
HasBackgroundChristmas: true,
PageTitle: "Sucesso",
IsOfflineMode: false,
ScreenName: "ChangeTarifario_Sucess",
PageSection: "Mudar Tarifario",
PageType: "Consulta"
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
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "qGEF_7FiaE6IExgLH4ebwA"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
style: "screen-centered",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.thumbsup.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "UKHBI0khbEiLpcaryPR1Gw"
},
style: "pv-16 a-flexCardTitle text-center bingo c-yellow",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Mudança de tarifário efectuada com sucesso",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "6Hb2f73gNkGcC+8+y2MAZw"
},
style: "a-flexCardTitle text-center",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "A mudança do teu tarifário foi efectuada com sucesso. Esta mudança poderá demorar até uma hora até estar activa.",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "50px"
},
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "10px"
},
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.back$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Voltar ao início",
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.ChangeTarifario_Sucess.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Mudar Tarifario", "Voltar ao inicio", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ChangeTarifario_Sucess.Back", OS.Exceptions.getMessage(ex), ex.name);
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
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Sucesso"
model.variables.analyticsAuxVarVar.traceNameAttr = "Sucesso";
// AnalyticsAuxVar.Category = "Mudar Tarifario"
model.variables.analyticsAuxVarVar.categoryAttr = "Mudar Tarifario";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ChangeTarifario_Sucess.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
// afterReady = True
model.variables.afterReadyVar = true;
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

Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

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
return WTF_MOB_ZonaFlowController.default.handleError(ex, this.callContext());
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

