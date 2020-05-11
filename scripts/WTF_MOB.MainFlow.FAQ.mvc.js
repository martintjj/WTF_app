define("WTF_MOB.MainFlow.FAQ.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl3.mvc$model", "WTF_MOB.Common.HeaderLvl3.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.SectionExpandable_Ext.mvc$model", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$setActivityLog_CheckFAQs", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetAppFAQs", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_APP_FAQSRecordList", "WTF_MOB.model$Local_APP_FAQSList", "WTF_MBP.model$Local_APP_FAQSRec", "WTF_MBP.entities", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl3_mvcModel, WTF_MOB_Common_HeaderLvl3_mvcModel, WTF_MOB_Common_Waiting_mvcModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_SectionExpandable_Ext_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("RowNumberSelected", "rowNumberSelectedVar", "RowNumberSelected", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsOpenSection", "isOpenSectionVar", "IsOpenSection", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("Faqs", "faqsVar", "Faqs", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.Local_APP_FAQSList());
}, WTF_MOBModel.Local_APP_FAQSList)
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
Model._hasValidationWidgetsValue = ((((WTF_MOB_Common_Layout_Lvl3_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl3_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_SectionExpandable_Ext_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.MainFlow.FAQ.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.MainFlow.FAQ.mvc$model", "WTF_MOB.MainFlow.FAQ.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsContent.SectionExpandable_Ext.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$setActivityLog_CheckFAQs", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetAppFAQs", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_APP_FAQSRecordList", "WTF_MOB.model$Local_APP_FAQSList", "WTF_MBP.model$Local_APP_FAQSRec", "WTF_MBP.entities", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, React, OSView, WTF_MOB_MainFlow_FAQ_mvc_model, WTF_MOB_MainFlow_FAQ_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_SectionExpandable_Ext_mvc_view) {
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
        View.displayName = "MainFlow.FAQ";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.MainFlow.FAQ.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_SectionExpandable_Ext_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_MainFlow_FAQ_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_MainFlow_FAQ_mvc_controller;
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
withoutLogin: false,
ContentClass: "b-transparent",
PageSection: "Mais",
ScreenName: "FAQ",
PageTitle: "Ajuda App",
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
header: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_HeaderLvl3_mvc_view, {
inputs: {
Title: "Ajuda App"
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "ph-16 mt-16 mb-24",
visible: !(model.variables.isLoadingVar),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-32",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mb-16"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-yellow -bold",
value: "Sobre o WTF",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.faqsVar,
style: "list list-group -noBgd",
tag: "div",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
HasLeftSide: false,
StyleClass: "mb-2 -noPadding"
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
uuid: "9",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_SectionExpandable_Ext_mvc_view, {
inputs: {
StyleClass: "-noBorder -titleSpacer",
ArrowStyleClass: model.getCachedValue(idService.getId("eYGtQ6zMzkatNmYFRR7cxA.ArrowStyleClass"), function () {
return (" a-icon -wtf " + ((((model.variables.faqsVar.getCurrentRowNumber(callContext.iterationContext) === model.variables.rowNumberSelectedVar) && model.variables.isOpenSectionVar)) ? ("c-strongPink -active") : ("c-warmPurple")));
}, function () {
return model.variables.faqsVar.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.rowNumberSelectedVar;
}, function () {
return model.variables.isOpenSectionVar;
}),
IconArrowClosed: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowDown,
IconArrowOpened: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowUp,
HasIcon: true,
IsTitleTruncated: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onToggle$Action: function (isExpandedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onToggle$Action(isExpandedIn, model.variables.faqsVar.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "10",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
title: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("_0CKB6B1+EKHk39mmBmhUA.Style"), function () {
return ((((model.variables.faqsVar.getCurrentRowNumber(callContext.iterationContext) === model.variables.rowNumberSelectedVar) && model.variables.isOpenSectionVar)) ? ("c-strongPink") : ("c-warmPurple"));
}, function () {
return model.variables.faqsVar.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.rowNumberSelectedVar;
}, function () {
return model.variables.isOpenSectionVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead.-small",
value: model.variables.faqsVar.getCurrent(callContext.iterationContext).questionAttr,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16 pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-gray6",
value: model.variables.faqsVar.getCurrent(callContext.iterationContext).answerAttr,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isOpenSectionVar), asPrimitiveValue(model.variables.rowNumberSelectedVar), asPrimitiveValue(model.variables.faqsVar.getCurrent(callContext.iterationContext).answerAttr), asPrimitiveValue(model.variables.faqsVar.getCurrent(callContext.iterationContext).questionAttr), asPrimitiveValue(model.variables.faqsVar.getCurrentRowNumber(callContext.iterationContext))]
})];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isOpenSectionVar), asPrimitiveValue(model.variables.rowNumberSelectedVar), asPrimitiveValue(model.variables.faqsVar.getCurrent(callContext.iterationContext).answerAttr), asPrimitiveValue(model.variables.faqsVar.getCurrent(callContext.iterationContext).questionAttr), asPrimitiveValue(model.variables.faqsVar.getCurrentRowNumber(callContext.iterationContext))]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.isOpenSectionVar), asPrimitiveValue(model.variables.rowNumberSelectedVar)]
}))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isOpenSectionVar), asPrimitiveValue(model.variables.rowNumberSelectedVar), asPrimitiveValue(model.variables.faqsVar), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.MainFlow.FAQ.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.MainFlow.controller", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$setActivityLog_CheckFAQs", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetAppFAQs", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_APP_FAQSRecordList", "WTF_MOB.model$Local_APP_FAQSList", "WTF_MBP.model$Local_APP_FAQSRec", "WTF_MBP.entities", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_MainFlowController) {
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
Controller.prototype._onToggle$Action = function (isExpandedIn, rowNumberIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnToggle");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.MainFlow.FAQ.OnToggle$vars"))());
vars.value.isExpandedInLocal = isExpandedIn;
vars.value.rowNumberInLocal = rowNumberIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// SetOpenSection
// RowNumberSelected = RowNumber
model.variables.rowNumberSelectedVar = vars.value.rowNumberInLocal;
// IsOpenSection = IsExpanded
model.variables.isOpenSectionVar = vars.value.isExpandedInLocal;
return OS.Flow.executeSequence(function () {
if(((vars.value.isExpandedInLocal === true))) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Ajuda App", model.variables.faqsVar.getItem(vars.value.rowNumberInLocal).questionAttr, 0, "", callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("FAQ.OnToggle", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.MainFlow.FAQ.OnToggle$vars", [{
name: "IsExpanded",
attrName: "isExpandedInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "RowNumber",
attrName: "rowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getAppFAQsVar = new OS.DataTypes.VariableHolder();
var getLocalAPPFAQSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_APP_FAQSRecordList))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// AnalyticsAuxVar.TraceName = "Ajuda App"
model.variables.analyticsAuxVarVar.traceNameAttr = "Ajuda App";
// AnalyticsAuxVar.Category = "Mais"
model.variables.analyticsAuxVarVar.categoryAttr = "Mais";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetAppFAQs
model.flush();
return WTF_MBPController.default.getAppFAQs$Action(callContext).then(function (value) {
getAppFAQsVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getAppFAQsVar.value.successOut)) {
// Aggregate: GetLocalAPPFAQS
var getLocalAPPFAQSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_APP_FAQSRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3";
} else {
selectSql += "\"ENLocal_APP_FAQS\".\"Id\" o0, \"ENLocal_APP_FAQS\".\"Question\" o1, \"ENLocal_APP_FAQS\".\"Answer\" o2, \"ENLocal_APP_FAQS\".\"Order\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_APP_FAQS\" \"ENLocal_APP_FAQS\"";
orderBySql += " ORDER BY \"ENLocal_APP_FAQS\".\"Order\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_APP_FAQSRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_APP_FAQSAttr",
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
return getLocalAPPFAQSVar.value;
});
};
return getLocalAPPFAQSAggr().then(function () {
// Faqs = GetLocalAPPFAQS.List
model.variables.faqsVar = OS.DataTypes.JSConversions.typeConvertRecordList(getLocalAPPFAQSVar.value.listOut, new WTF_MOBModel.Local_APP_FAQSList(), function (source, target) {
target = source.local_APP_FAQSAttr;
return target;
});
}).then(function () {
if((!(getLocalAPPFAQSVar.value.listOut.isEmpty))) {
return OS.Flow.breakAsync();
}

});
}

});
}).then(function () {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Não foi possível obter as questões, por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
});
}).then(function () {
// Execute Action: setActivityLog_CheckFAQs
model.flush();
return WTF_MBPController.default.setActivityLog_CheckFAQs$Action("", callContext).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Check_FAQs", callContext);

// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
});
}).catch(function (ex) {
OS.Logger.trace("FAQ.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Execute Action: Analytics_TrackException2
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
Controller.prototype._onRender$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
// Execute Action: OpenAllExternalLinksOnSystemBrowser
WTF_MOBController.default.openAllExternalLinksOnSystemBrowser$Action(idService.getId("apppopup"), callContext);
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
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
};

Controller.prototype.onToggle$Action = function (isExpandedIn, rowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onToggle$Action, callContext, isExpandedIn, rowNumberIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onRender$Action(callContext);

};
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_MainFlowController.default.handleError(ex, this.callContext());
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

