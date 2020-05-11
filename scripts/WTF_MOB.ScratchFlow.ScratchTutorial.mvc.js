define("WTF_MOB.ScratchFlow.ScratchTutorial.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$UserWtfAcceptRegulationScratch", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("acceptRegulamentChoose", "acceptRegulamentChooseVar", "acceptRegulamentChoose", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("nDiamondsBonus", "nDiamondsBonusIn", "nDiamondsBonus", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_nDiamondsBonusInDataFetchStatus", "_nDiamondsBonusInDataFetchStatus", "_nDiamondsBonusInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HasAccept", "hasAcceptIn", "HasAccept", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_hasAcceptInDataFetchStatus", "_hasAcceptInDataFetchStatus", "_hasAcceptInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("DemoAppWithoutLogin", "demoAppWithoutLoginIn", "DemoAppWithoutLogin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_demoAppWithoutLoginInDataFetchStatus", "_demoAppWithoutLoginInDataFetchStatus", "_demoAppWithoutLoginInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("nDiamondsBonus" in inputs) {
this.variables.nDiamondsBonusIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.nDiamondsBonus, OS.Types.Integer);
}

if("HasAccept" in inputs) {
this.variables.hasAcceptIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.HasAccept, OS.Types.Boolean);
}

if("DemoAppWithoutLogin" in inputs) {
this.variables.demoAppWithoutLoginIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.DemoAppWithoutLogin, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ScratchFlow.ScratchTutorial.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.ScratchFlow.ScratchTutorial.mvc$model", "WTF_MOB.ScratchFlow.ScratchTutorial.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.ScratchFlow.TourContent_TutorialScratch.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$UserWtfAcceptRegulationScratch", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, React, OSView, WTF_MOB_ScratchFlow_ScratchTutorial_mvc_model, WTF_MOB_ScratchFlow_ScratchTutorial_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_ScratchFlow_TourContent_TutorialScratch_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "ScratchFlow.ScratchTutorial";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchFlow.ScratchTutorial.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_ScratchFlow_TourContent_TutorialScratch_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchTutorial_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchTutorial_mvc_controller;
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
PageTitle: "Scratch Tutorial",
PageType: "Operação",
PageSection: "Scratch",
withoutLogin: model.variables.demoAppWithoutLoginIn,
ScreenName: "ScratchTutorial",
ContentClass: "b-transparent"
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
style: "o-contentBlank",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "W2NRnt1yCk+1O4stJRaCcw"
},
style: "accept-regulament text-center mv-32 b-tranparent",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_ScratchFlow_TourContent_TutorialScratch_mvc_view, {
inputs: {
TourContentTypeId: WTF_MOBModel.staticEntities.tOUR_CONTENT_TYPE_WTF.tutorialScratch
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
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "inner",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
gridProperties: {
classes: "OSInline"
},
style: "pv-24 ph-16 gridRow",
visible: (model.variables.hasAcceptIn === false),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-2",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Switch, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedProperties: {
"data-style-key": "V_Ky43Tq1EOr_V37gYUGuA"
},
style: "switch a-switch",
variable: model.createVariable(OS.Types.Boolean, model.variables.acceptRegulamentChooseVar, function (value) {
model.variables.acceptRegulamentChooseVar = value;
}),
_idProps: {
service: idService,
name: "Switch1"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: "qgRq1yWxzkaxdn9PdvtbWg",
"data-style-key": "qgRq1yWxzkaxdn9PdvtbWg"
},
style: "col-10",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -xSmall -inline c-warmPurple",
value: "Declaro que li e aceito as ",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToRulesScratch$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-black -bold -xSmall -padding",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Regras"), React.createElement(OSWidgets.Expression, {
style: "a-textRead -xSmall -inline c-warmPurple",
value: " do jogo",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
style: "pt-16 ph-16 gridRow",
visible: model.variables.demoAppWithoutLoginIn,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-warmPurple -bold",
value: "Queres jogar?",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("PrimaryButton.Style"), function () {
return ((model.variables.hasAcceptIn) ? ("mt-24") : (""));
}, function () {
return model.variables.hasAcceptIn;
}),
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.demoAppWithoutLoginIn, false, this, function () {
return [React.createElement(OSWidgets.Button, {
enabled: ((model.variables.acceptRegulamentChooseVar === true) || (model.variables.hasAcceptIn === true)),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.login$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -fullWidth",
visible: true,
_idProps: {
service: idService,
name: "LoginLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Iniciar sessão",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(OSWidgets.Button, {
enabled: ((model.variables.acceptRegulamentChooseVar === true) || (model.variables.hasAcceptIn === true)),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.acceptRulesOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -fullWidth",
visible: true,
_idProps: {
service: idService,
name: "AcceptButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("ButtonTextPrimary2.Value"), function () {
return ((model.variables.hasAcceptIn) ? ("Dá-lhe um Scratch") : ("Começar"));
}, function () {
return model.variables.hasAcceptIn;
}),
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})))))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
Page: "Scratch",
DemoAppWithoutLogin: model.variables.demoAppWithoutLoginIn,
IsOffline: false
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
uuid: "19",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.demoAppWithoutLoginIn), asPrimitiveValue(model.variables.acceptRegulamentChooseVar), asPrimitiveValue(model.variables.hasAcceptIn)]
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
uuid: "20",
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
define("WTF_MOB.ScratchFlow.ScratchTutorial.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.ScratchFlow.controller", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$UserWtfAcceptRegulationScratch", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_ScratchFlowController) {
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
Controller.prototype._login$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Login");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Menu sem login", "Iniciar sessão", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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
Controller.prototype._goToRulesScratch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToRulesScratch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Tutorial Scratch", "Ver Regras", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/RulesScratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RulesScratch", {
nDiamondsBonus: model.variables.nDiamondsBonusIn,
HasAccept: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ScratchTutorial.GoToRulesScratch", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._acceptRulesOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AcceptRulesOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var userWtfAcceptRegulationScratchVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("AcceptButton"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Tutorial Scratch", ((model.variables.demoAppWithoutLoginIn) ? ("Iniciar sessão") : (((model.variables.hasAcceptIn) ? ("Dá-lhe um Scratch") : ("Aceita")))), 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.hasAcceptIn)) {
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("AcceptButton"), true, callContext);
// Destination: /WTF_MOB/Scratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: UserWtfAcceptRegulationScratch
model.flush();
return WTF_MBPController.default.userWtfAcceptRegulationScratch$Action(callContext).then(function (value) {
userWtfAcceptRegulationScratchVar.value = value;
}).then(function () {
if(((userWtfAcceptRegulationScratchVar.value.successOut === true))) {
if((userWtfAcceptRegulationScratchVar.value.isFirstTimeOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton4
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("AcceptButton"), true, callContext);
// Destination: /WTF_MOB/MessageSuccess_WonDiamond
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/MessageSuccess_WonDiamond", {
Section: "Scratch",
diamond_default: OS.BuiltinFunctions.integerToLongInteger(model.variables.nDiamondsBonusIn),
Title: ""
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(userWtfAcceptRegulationScratchVar.value.messageOut, 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
}

} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(userWtfAcceptRegulationScratchVar.value.messageOut, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
}

// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("AcceptButton"), true, callContext);
// Destination: /WTF_MOB/Scratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ScratchTutorial.AcceptRulesOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("AcceptButton"), true, callContext);
return OS.Flow.returnAsync();

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
// AnalyticsAuxVar.TraceName = "Turorial Scratch " + If
model.variables.analyticsAuxVarVar.traceNameAttr = ("Turorial Scratch " + ((model.variables.demoAppWithoutLoginIn) ? ("Sem Login") : ("")));
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ScratchTutorial.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
return OS.Flow.executeSequence(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
return OS.Flow.returnAsync();

} else {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
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

Controller.prototype.login$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._login$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.goToRulesScratch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToRulesScratch$Action, callContext);

};
Controller.prototype.acceptRulesOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._acceptRulesOnClick$Action, callContext);

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
return WTF_MOB_ScratchFlowController.default.handleError(ex, this.callContext());
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

