define("WTF_MOB.ExceptionsFlow.GenericError.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MOB.Common.LayoutBlank.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MOB_Common_LayoutBlank_mvcModel, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("Title", "titleIn", "Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Text", "textIn", "Text", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ButtonText", "buttonTextIn", "ButtonText", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", "_buttonTextInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("Title" in inputs) {
this.variables.titleIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Title, OS.Types.Text);
}

if("Text" in inputs) {
this.variables.textIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Text, OS.Types.Text);
}

if("ButtonText" in inputs) {
this.variables.buttonTextIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ButtonText, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ExceptionsFlow.GenericError.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "react", "OutSystemsReactView", "WTF_MOB.ExceptionsFlow.GenericError.mvc$model", "WTF_MOB.ExceptionsFlow.GenericError.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, React, OSView, WTF_MOB_ExceptionsFlow_GenericError_mvc_model, WTF_MOB_ExceptionsFlow_GenericError_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "ExceptionsFlow.GenericError";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ExceptionsFlow.GenericError.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_GenericError_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_GenericError_mvc_controller;
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
PageSection: "Erro Genérico",
ScreenName: "GenericError",
PageTitle: model.variables.titleIn
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
Text: model.variables.textIn,
Title: model.variables.titleIn
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
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.Warning.svg"),
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
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.callback$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -secondary -negative -fullWidth -big mb-16",
visible: ((model.variables.buttonTextIn) !== ("")),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.buttonTextIn,
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
_dependencies: [asPrimitiveValue(model.variables.buttonTextIn)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_trampa",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.EmptyStateBackground.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "12"
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
uuid: "13",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.buttonTextIn), asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables.textIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ExceptionsFlow.GenericError.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MOB.languageResources", "WTF_MOB.ExceptionsFlow.controller", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MOBLanguageResources, WTF_MOB_ExceptionsFlowController) {
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
Controller.prototype._callback$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Callback");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Erro Genérico", model.variables.buttonTextIn, 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = Title
model.variables.analyticsAuxVarVar.traceNameAttr = model.variables.titleIn;
// AnalyticsAuxVar.Category = "Erro Genérico"
model.variables.analyticsAuxVarVar.categoryAttr = "Erro Genérico";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("GenericError.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
};

Controller.prototype.callback$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._callback$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

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

