define("WTF_MOB.ScratchOtherPagesFlow.RulesScratch.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.model$STR_SCRATCH_RULESRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetScratchRules", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_ScratchCheckRules", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, MobileUIWidgetsController, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalUSERWTFSAggrRec = (function (_super) {
__extends(GetLocalUSERWTFSAggrRec, _super);
function GetLocalUSERWTFSAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalUSERWTFSAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetLocalUSERWTFSAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalUSERWTFSAggrRec.init();
return GetLocalUSERWTFSAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("TitleElement", "titleElementVar", "TitleElement", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BodyElement", "bodyElementVar", "BodyElement", true, OS.Types.Text, function () {
return "";
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
this.attr("GetLocalUSERWTFS", "getLocalUSERWTFSAggr", "getLocalUSERWTFSAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalUSERWTFSAggrRec());
}, GetLocalUSERWTFSAggrRec)
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
Model._hasValidationWidgetsValue = (WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("nDiamondsBonus" in inputs) {
this.variables.nDiamondsBonusIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.nDiamondsBonus, OS.Types.Integer);
}

if("HasAccept" in inputs) {
this.variables.hasAcceptIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.HasAccept, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ScratchOtherPagesFlow.RulesScratch.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.ScratchOtherPagesFlow.RulesScratch.mvc$model", "WTF_MOB.ScratchOtherPagesFlow.RulesScratch.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.model$STR_SCRATCH_RULESRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetScratchRules", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_ScratchCheckRules", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, MobileUIWidgetsController, React, OSView, WTF_MOB_ScratchOtherPagesFlow_RulesScratch_mvc_model, WTF_MOB_ScratchOtherPagesFlow_RulesScratch_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view) {
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
        View.displayName = "ScratchOtherPagesFlow.RulesScratch";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchOtherPagesFlow.RulesScratch.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchOtherPagesFlow_RulesScratch_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchOtherPagesFlow_RulesScratch_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
PageSection: "Scratch",
ContentClass: "b-warmPurple",
ScreenName: "RulesScratch",
PageTitle: "Scratch Regras",
PageType: "Consulta",
AllowPrevious: !(model.variables.hasAcceptIn)
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
return [React.createElement(WTF_MOB_Common_HeaderLvl2_mvc_view, {
inputs: {
Title: "Regras",
AllowPrevious: !(model.variables.hasAcceptIn)
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
style: "b-warmPurple",
visible: true,
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "pa-16",
visible: model.variables.hasAcceptIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "omnqERdEwEqe1xIzL0+TXw"
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-warmPurple -bold",
value: "Como jogar Scratch",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Passaste o tutorial e não te lembras? ",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "qn22En2J9ka+pkxjq3SrwQ"
},
style: "pt-16",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToTutorial$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-warmPurple",
visible: true,
_idProps: {
service: idService,
name: "ShowTutorial"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Ver tutorial",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "qiFcDjJLYkCd4F5UaKaDLQ"
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TextContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
name: "TitleContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.titleElementVar,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "XaMLGVyjuUGHYeDkMyVo2Q"
},
style: "mt-12 a-textRead.-small",
visible: true,
_idProps: {
service: idService,
name: "BodyContent"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.titleElementVar), asPrimitiveValue(model.variables.hasAcceptIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ScratchOtherPagesFlow.RulesScratch.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.ScratchOtherPagesFlow.controller", "WTF_MOB.ScratchOtherPagesFlow.RulesScratch.mvc$controller.OnRender.RegulationsJS", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.model$STR_SCRATCH_RULESRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetScratchRules", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_ScratchCheckRules", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_ScratchOtherPagesFlowController, WTF_MOB_ScratchOtherPagesFlow_RulesScratch_mvc_controller_OnRender_RegulationsJS) {
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
Controller.prototype.getLocalUSERWTFS$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_WTFRecordList;
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
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
} else {
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_WTF\" \"ENLocal_USER_WTF\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_WTFRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_WTFAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalUSERWTFSAggr;
}, function () {
return controller._getLocalUSERWTFSOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTFS$AggrRefresh"];
// Client Actions
Controller.prototype._onRender$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
controller.safeExecuteJSNode(WTF_MOB_ScratchOtherPagesFlow_RulesScratch_mvc_controller_OnRender_RegulationsJS, "Regulations", "OnRender", {
HTML: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.bodyElementVar, OS.Types.Text, true),
WidgetId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("BodyContent"), OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
// Execute Action: OpenAllExternalLinksOnSystemBrowser
WTF_MOBController.default.openAllExternalLinksOnSystemBrowser$Action(idService.getId("BodyContent"), callContext);
}).catch(function (ex) {
OS.Logger.trace("RulesScratch.OnRender", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFSOnAfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getScratchRulesVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Scratch_regulamento"
model.variables.analyticsAuxVarVar.traceNameAttr = "Scratch_regulamento";
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Aggregate: GetLocalACCESSTOKENINFOES
var getLocalACCESSTOKENINFOESAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3";
} else {
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_ACCESS_TOKEN_INFO\" \"ENLocal_ACCESS_TOKEN_INFO\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ACCESS_TOKEN_INFOAttr",
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
return getLocalACCESSTOKENINFOESVar.value;
});
};
return getLocalACCESSTOKENINFOESAggr();
}).then(function () {
// Execute Action: GetScratchRules
model.flush();
return WTF_MBPController.default.getScratchRules$Action(model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
getScratchRulesVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getScratchRulesVar.value.successOut)) {
// TitleElement = GetScratchRules.ScratchRules.Title
model.variables.titleElementVar = getScratchRulesVar.value.scratchRulesOut.titleAttr;
// BodyElement = GetScratchRules.ScratchRules.Body
model.variables.bodyElementVar = getScratchRulesVar.value.scratchRulesOut.bodyAttr;
// Execute Action: setActivityLog_ScratchCheckRules
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchCheckRules$Action("", callContext).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Scratch_check_rules", callContext);

// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
});
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Regulamento ainda não foi criado no BO", 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/Scratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("RulesScratch.GetLocalUSERWTFSOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace3
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
Controller.prototype._goToTutorial$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToTutorial");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_regras", "Ver Tutorial", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/ScratchTutorial
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ScratchTutorial", {
nDiamondsBonus: model.variables.nDiamondsBonusIn,
HasAccept: true,
DemoAppWithoutLogin: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("RulesScratch.GoToTutorial", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFSOnAfterFetch$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.goToTutorial$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToTutorial$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onRender$Action(callContext);

};
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_ScratchOtherPagesFlowController.default.handleError(ex, this.callContext());
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
define("WTF_MOB.ScratchOtherPagesFlow.RulesScratch.mvc$controller.OnRender.RegulationsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.WidgetId).innerHTML = $parameters.HTML

};
});

