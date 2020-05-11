define("WTF_MOB.ScratchFlow.ScratchPrize.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_BP.model", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "WTF_MOB.ScratchFlow.ScratchPrize_ContainerPrizeBlock.mvc$model", "WTF_MBP.model$App_PrizeMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_BP.model$App_QuizRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_CopiesRec", "WTF_MBP.controller$PlayScratch", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MBPModel, WTF_MOBController, WTF_MBPController, WTF_BPModel, WTF_MOB_Common_Layout_Lvl1_mvcModel, WTF_MOB_ScratchFlow_ScratchPrize_ContainerPrizeBlock_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("app_prize", "app_prizeVar", "app_prize", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_PrizeMBPRec());
}, WTF_MBPModel.App_PrizeMBPRec), 
this.attr("app_quiz", "app_quizVar", "app_quiz", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_QuizRec());
}, WTF_BPModel.App_QuizRec), 
this.attr("hasWon", "hasWonVar", "hasWon", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CategoryPrize", "categoryPrizeVar", "CategoryPrize", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("App_Copies", "app_CopiesVar", "App_Copies", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_CopiesRec());
}, WTF_BPModel.App_CopiesRec), 
this.attr("DiamondTypeName", "diamondTypeNameIn", "DiamondTypeName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_diamondTypeNameInDataFetchStatus", "_diamondTypeNameInDataFetchStatus", "_diamondTypeNameInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets || WTF_MOB_ScratchFlow_ScratchPrize_ContainerPrizeBlock_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("DiamondTypeName" in inputs) {
this.variables.diamondTypeNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.DiamondTypeName, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ScratchFlow.ScratchPrize.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.ScratchFlow.ScratchPrize.mvc$model", "WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.ScratchFlow.ScratchPrize_ContainerPrizeBlock.mvc$view", "WTF_MBP.model$App_PrizeMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_BP.model$App_QuizRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_CopiesRec", "WTF_MBP.controller$PlayScratch", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, WTF_BPModel, React, OSView, WTF_MOB_ScratchFlow_ScratchPrize_mvc_model, WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, WTF_MOB_ScratchFlow_ScratchPrize_ContainerPrizeBlock_mvc_view) {
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
        View.displayName = "ScratchFlow.ScratchPrize";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchFlow.ScratchPrize.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/WTF_MOB.BackButtonNull.js", "scripts/WTF_MOB.soundjs_min.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, WTF_MOB_ScratchFlow_ScratchPrize_ContainerPrizeBlock_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchPrize_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller;
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
PageType: "Operação",
ContentClass: "b-strongPink",
Diamante: model.variables.diamondTypeNameIn,
Premio: model.variables.app_prizeVar.nameAttr,
PageTitle: "Scratch resultado com premio",
PageSection: "Scratch",
ScreenName: "ScratchPrize",
WithoutLogin: false,
IsOfflineMode: false
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
style: "active",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "prize-screen",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "object-container",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.group_yellow.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "h2 c-yellow -bold app-title",
value: "BINGO!",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(WTF_MOB_ScratchFlow_ScratchPrize_ContainerPrizeBlock_mvc_view, {
inputs: {
CategoryPrize: model.variables.categoryPrizeVar,
app_prize: model.variables.app_prizeVar
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
uuid: "7",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "question",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "a-flexCardTitle app-title top"
},
tag: "p",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_Width8"
},
value: "Yeah, o prémio já cá canta",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "a-flexCardDesc",
value: "Para o agarrar, responde bem à questão:",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "a-flexCardTitle app-title"
},
tag: "p",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_Width7"
},
value: model.variables.app_quizVar.questionAttr,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"data-style-key": "EFVrTm3T30+gUpbcVbqKDg"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.app_quizVar.appAnswersAttr,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
"data-style-key": "dMLH7Zu2mECVE_ALUTdR1w"
},
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.answerQuiz$Action(OS.BuiltinFunctions.longIntegerToInteger(model.variables.app_quizVar.appAnswersAttr.getCurrent(callContext.iterationContext).quizAnswerIdAttr), OS.BuiltinFunctions.longIntegerToInteger(model.variables.app_quizVar.quizIdAttr), model.variables.app_quizVar.appAnswersAttr.getCurrent(callContext.iterationContext).answerAttr, controller.callContext(eventHandlerContext));
});
;
},
style: ("btn btn-secondary -secondary -negative option-answer answer-" + OS.BuiltinFunctions.longIntegerToText(model.variables.app_quizVar.appAnswersAttr.getCurrent(callContext.iterationContext).quizAnswerIdAttr)),
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.app_quizVar.appAnswersAttr.getCurrent(callContext.iterationContext).answerAttr,
_idProps: {
service: idService,
name: "ButtonTextSecondary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.app_quizVar.appAnswersAttr.getCurrent(callContext.iterationContext).answerAttr), asPrimitiveValue(model.variables.app_quizVar.appAnswersAttr.getCurrent(callContext.iterationContext).quizAnswerIdAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
}))))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.app_quizVar.appAnswersAttr), asPrimitiveValue(model.variables.app_quizVar.questionAttr), asPrimitiveValue(model.variables.app_prizeVar), asPrimitiveValue(model.variables.categoryPrizeVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_BP.model", "WTF_MOB.languageResources", "WTF_MOB.ScratchFlow.controller", "WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.OnReady.JavaScript1JS", "WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.AnswerQuiz.JavaScript1JS", "WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.PlayScratchOnInitialize.playLooseSoundFXJS", "WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.PlayScratchOnInitialize.playWinSoundFX2JS", "WTF_MBP.model$App_PrizeMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_BP.model$App_QuizRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_CopiesRec", "WTF_MBP.controller$PlayScratch", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, WTF_BPModel, WTF_MOBLanguageResources, WTF_MOB_ScratchFlowController, WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_OnReady_JavaScript1JS, WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_AnswerQuiz_JavaScript1JS, WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_PlayScratchOnInitialize_playLooseSoundFXJS, WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_PlayScratchOnInitialize_playWinSoundFX2JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
goToResult$Action: function (quizAnswerIdIn, quizIdIn, answerIn) {
quizAnswerIdIn = (quizAnswerIdIn === undefined) ? 0 : quizAnswerIdIn;
quizIdIn = (quizIdIn === undefined) ? 0 : quizIdIn;
answerIn = (answerIn === undefined) ? "" : answerIn;
return controller.executeActionInsideJSNode(controller._goToResult$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(quizAnswerIdIn, OS.Types.Integer), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(quizIdIn, OS.Types.Integer), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(answerIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
});
}
};
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
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", null, function ($parameters) {
}, {}, {});
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).catch(function (ex) {
OS.Logger.trace("ScratchPrize.OnReady", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._goToResult$Action = function (quizAnswerIdIn, quizIdIn, answerIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToResult");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.ScratchPrize.GoToResult$vars"))());
vars.value.quizAnswerIdInLocal = quizAnswerIdIn;
vars.value.quizIdInLocal = quizIdIn;
vars.value.answerInLocal = answerIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Scratch_resposta_" + (vars.value.quizIdInLocal).toString()), vars.value.answerInLocal, 0, "", callContext).then(function () {
// Dummy
// Destination: /WTF_MOB/ScratchResult
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ScratchResult", {
Copy2_Looser: model.variables.app_CopiesVar.copy2Attr,
DiamondTypeName: model.variables.diamondTypeNameIn,
Copy1_Looser: model.variables.app_CopiesVar.copy1Attr,
PrizeName: model.variables.app_prizeVar.nameAttr,
hasWinner: true,
UserPlaysQuizId: OS.BuiltinFunctions.longIntegerToInteger(model.variables.app_quizVar.userPlaysQuizIdAttr),
QuizAnswerIdInput: vars.value.quizAnswerIdInLocal,
QuizIdInput: vars.value.quizIdInLocal,
ShowLinkToWallet: (((model.variables.app_prizeVar.itemTypeIdAttr) !== (WTF_MOBModel.staticEntities.iTEM_TYPES.diamanteDefault)) && ((model.variables.app_prizeVar.itemTypeIdAttr) !== (WTF_MOBModel.staticEntities.iTEM_TYPES.diamanteGolden)))
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ScratchPrize.GoToResult", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.ScratchPrize.GoToResult$vars", [{
name: "QuizAnswerId",
attrName: "quizAnswerIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "QuizId",
attrName: "quizIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Answer",
attrName: "answerInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._answerQuiz$Action = function (quizAnswerIdIn, quizIdIn, answerIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AnswerQuiz");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.ScratchPrize.AnswerQuiz$vars"))());
vars.value.quizAnswerIdInLocal = quizAnswerIdIn;
vars.value.quizIdInLocal = quizIdIn;
vars.value.answerInLocal = answerIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_AnswerQuiz_JavaScript1JS, "JavaScript1", "AnswerQuiz", {
Answer: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.answerInLocal, OS.Types.Text, true),
QuizId: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.quizIdInLocal, OS.Types.Integer, true),
class_correct: OS.DataTypes.JSConversions.basicTypeToJS(("answer-" + (vars.value.quizAnswerIdInLocal).toString()), OS.Types.Text, true),
QuizAnswerId: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.quizAnswerIdInLocal, OS.Types.Integer, true)
}, function ($parameters) {
}, {
GoToResult: controller.clientActionProxies.goToResult$Action
}, {});
}).catch(function (ex) {
OS.Logger.trace("ScratchPrize.AnswerQuiz", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.ScratchPrize.AnswerQuiz$vars", [{
name: "QuizAnswerId",
attrName: "quizAnswerIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "QuizId",
attrName: "quizIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Answer",
attrName: "answerInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._playScratchOnInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PlayScratchOnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var logEventFacebookSDK_WTF2Var = new OS.DataTypes.VariableHolder();
var playScratchVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getActiveUserWTFVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Scratch resultado"
model.variables.analyticsAuxVarVar.traceNameAttr = "Scratch resultado";
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: GetActiveUserWTF
model.flush();
return WTF_MBPController.default.getActiveUserWTF$Action(callContext).then(function (value) {
getActiveUserWTFVar.value = value;
});
}).then(function () {
// Execute Action: PlayScratch
model.flush();
return WTF_MBPController.default.playScratch$Action(model.variables.diamondTypeNameIn, callContext).then(function (value) {
playScratchVar.value = value;
});
}).then(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(((((((((("PLAYSCRATCH!! ## HasWon: " + (playScratchVar.value.hasWonOut ? "True" : "False")) + "  ##CategoryPrize: ") + playScratchVar.value.categoryPrizeOut) + " ##UserPlaysQuizId: ") + OS.BuiltinFunctions.longIntegerToText(playScratchVar.value.appQuizOut.userPlaysQuizIdAttr)) + " ##QuizId: ") + OS.BuiltinFunctions.longIntegerToText(playScratchVar.value.appQuizOut.quizIdAttr)) + " ##PrizeName: ") + playScratchVar.value.app_PrizeOut.nameAttr), "WTF_MOB", callContext);
// App_Copies = PlayScratch.App_Copies
model.variables.app_CopiesVar = playScratchVar.value.app_CopiesOut;
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((playScratchVar.value.hasWonOut === true))) {
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_PlayScratchOnInitialize_playWinSoundFX2JS, "playWinSoundFX2", "PlayScratchOnInitialize", null, function ($parameters) {
}, {}, {});
// app_prize = PlayScratch.App_Prize
model.variables.app_prizeVar = playScratchVar.value.app_PrizeOut;
// app_quiz = PlayScratch.AppQuiz
model.variables.app_quizVar = playScratchVar.value.appQuizOut;
// hasWon = True
model.variables.hasWonVar = true;
// CategoryPrize = PlayScratch.CategoryPrize
model.variables.categoryPrizeVar = playScratchVar.value.categoryPrizeOut;
} else {
// Execute Action: LogEventFacebookSDK_WTF2
logEventFacebookSDK_WTF2Var.value = WTF_MBPController.default.logEventFacebook_MBP$Action((((model.variables.diamondTypeNameIn === "Silver")) ? ("Scratch_silver_prize_fail") : ("Scratch_golden_prize_fail")), callContext);

controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_ScratchPrize_mvc_controller_PlayScratchOnInitialize_playLooseSoundFXJS, "playLooseSoundFX", "PlayScratchOnInitialize", null, function ($parameters) {
}, {}, {});
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/ScratchResult
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ScratchResult", {
hasWinner: false,
ShowLinkToWallet: (((model.variables.app_prizeVar.itemTypeIdAttr) !== (WTF_MOBModel.staticEntities.iTEM_TYPES.diamanteDefault)) && ((model.variables.app_prizeVar.itemTypeIdAttr) !== (WTF_MOBModel.staticEntities.iTEM_TYPES.diamanteGolden))),
PrizeName: "",
Copy2_Looser: model.variables.app_CopiesVar.copy2Attr,
Copy1_Looser: model.variables.app_CopiesVar.copy1Attr,
DiamondTypeName: model.variables.diamondTypeNameIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ScratchPrize.PlayScratchOnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
// Destination: /WTF_MOB/GenericError
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/GenericError", {
ButtonText: "Dá-lhe outro Scratch",
Title: "Ooops",
Text: "Ocorreu um erro, por favor tenta novamente."
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.goToResult$Action = function (quizAnswerIdIn, quizIdIn, answerIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToResult$Action, callContext, quizAnswerIdIn, quizIdIn, answerIn);

};
Controller.prototype.answerQuiz$Action = function (quizAnswerIdIn, quizIdIn, answerIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._answerQuiz$Action, callContext, quizAnswerIdIn, quizIdIn, answerIn);

};
Controller.prototype.playScratchOnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._playScratchOnInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.playScratchOnInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
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
define("WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
var l = 0;

var scroll = function()
{
    var o = document.getElementsByClassName("object-container")[ 0];
    var d = document.getElementsByClassName("question")[ 0];


    if( o.scrollTop <= d.scrollHeight)
    {
        o.scrollTop += 5;
        if( l != o.scrollTop)
        {
            l = o.scrollTop;
            requestAnimationFrame( scroll);
        }
    }  
}

setTimeout( function(){
    document.getElementsByClassName( "center-square")[ 0].classList.add( "visible");
}, 500);

setTimeout( function(){
    document.getElementsByClassName( "prize-screen")[ 0].classList.add( "active");
}, 1000);

setTimeout( function(){
    document.getElementsByClassName( "item-name")[ 0].classList.add( "visible");    
    
    if(document.getElementsByClassName( "item-desc").length > 0)
        document.getElementsByClassName( "item-desc")[ 0].classList.add( "visible");
        
    document.getElementsByClassName( "question")[ 0].style.display = "block";
}, 1500);

setTimeout( function(){
    scroll();
    document.getElementsByClassName( "question")[ 0].classList.add( "active");
}, 3000);


};
});
define("WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.AnswerQuiz.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(document.getElementsByClassName("option-answer -inactive").length === 0){
    var answers = document.getElementsByClassName("option-answer");

    answers.className += "-inactive";
    
    for(var i=0; i<answers.length; i++){
        answers[i].className += " -inactive";
    }
    
    var answers_correct  = document.getElementsByClassName($parameters.class_correct);
    answers_correct[0].classList.remove("-inactive");
    
    setTimeout(function(){
        $actions.GoToResult($parameters.QuizAnswerId, $parameters.QuizId, $parameters.Answer)
    }, 500);
}
};
});
define("WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.PlayScratchOnInitialize.playLooseSoundFXJS", [], function () {
return function ($actions, $roles, $public) {
createjs.Sound.play("loose");
};
});
define("WTF_MOB.ScratchFlow.ScratchPrize.mvc$controller.PlayScratchOnInitialize.playWinSoundFX2JS", [], function () {
return function ($actions, $roles, $public) {
createjs.Sound.play("win");
};
});

