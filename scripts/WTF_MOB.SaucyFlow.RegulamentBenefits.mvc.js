define("WTF_MOB.SaucyFlow.RegulamentBenefits.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl3.mvc$model", "WTF_MOB.Common.HeaderLvl3.mvc$model", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_RegulationRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl3_mvcModel, WTF_MOB_Common_HeaderLvl3_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalUSERWTFAggrRec = (function (_super) {
__extends(GetLocalUSERWTFAggrRec, _super);
function GetLocalUSERWTFAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalUSERWTFAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetLocalUSERWTFAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalUSERWTFAggrRec.init();
return GetLocalUSERWTFAggrRec;
})(OS.Model.AggregateRecord);


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
this.attr("TitleElement", "titleElementVar", "TitleElement", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BodyElement", "bodyElementVar", "BodyElement", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Category", "categoryIn", "Category", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_categoryInDataFetchStatus", "_categoryInDataFetchStatus", "_categoryInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalUSERWTF", "getLocalUSERWTFAggr", "getLocalUSERWTFAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalUSERWTFAggrRec());
}, GetLocalUSERWTFAggrRec)
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
Model._hasValidationWidgetsValue = (WTF_MOB_Common_Layout_Lvl3_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl3_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Category" in inputs) {
this.variables.categoryIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Category, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.RegulamentBenefits.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.RegulamentBenefits.mvc$model", "WTF_MOB.SaucyFlow.RegulamentBenefits.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_RegulationRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MBPModel, React, OSView, WTF_MOB_SaucyFlow_RegulamentBenefits_mvc_model, WTF_MOB_SaucyFlow_RegulamentBenefits_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view) {
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
        View.displayName = "SaucyFlow.RegulamentBenefits";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.SaucyFlow.RegulamentBenefits.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_RegulamentBenefits_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_RegulamentBenefits_mvc_controller;
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
PageType: "Consulta",
withoutLogin: false,
PageSection: "Saucy",
AllowPrevious: true,
ContentClass: "b-warmPurple",
ScreenName: "RegulamentBenefits",
PageTitle: "Como Funciona"
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
AllowPrevious: true,
Title: "Como funciona?"
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
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
name: "TextContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
visible: true,
_idProps: {
service: idService,
name: "TitleContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "70BOe1l_wE6ACiR4_pkBvw"
},
value: model.variables.titleElementVar,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "BodyContent"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.titleElementVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.SaucyFlow.RegulamentBenefits.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.SaucyFlow.controller", "WTF_MOB.SaucyFlow.RegulamentBenefits.mvc$controller.OnRender.CinemaJS", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_RegulationRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_SaucyFlowController, WTF_MOB_SaucyFlow_RegulamentBenefits_mvc_controller_OnRender_CinemaJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.getRegulationServer$ServerAction = function (moduleIn, localUserWTFIdActiveNowIn, refreshTokenIn, callContext) {
var controller = this.controller;
var inputs = {
Module: OS.DataTypes.JSConversions.basicTypeToJS(moduleIn, OS.Types.Text),
LocalUserWTFIdActiveNow: OS.DataTypes.JSConversions.basicTypeToJS(localUserWTFIdActiveNowIn, OS.Types.LongInteger),
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text)
};
return controller.callServerAction("GetRegulationServer", "screenservices/WTF_MOB/SaucyFlow/RegulamentBenefits/ActionGetRegulationServer", "AHlOVnBJk9zLkY89VRZ3Ng", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.RegulamentBenefits$rssespacewtf_mbp_ActionGetRegulationServer"))();
executeServerActionResult.app_RegulationOut = WTF_BPModel.App_RegulationRec.fromJS(outputs.App_Regulation);
executeServerActionResult.hasAcceptedOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.HasAccepted, OS.Types.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.RegulamentBenefits$rssespacewtf_mbp_ActionGetRegulationServer", [{
name: "App_Regulation",
attrName: "app_RegulationOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_BPModel.App_RegulationRec();
},
complexType: WTF_BPModel.App_RegulationRec
}, {
name: "HasAccepted",
attrName: "hasAcceptedOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);

// Aggregates and Data Actions
Controller.prototype.getLocalUSERWTF$AggrRefresh = function (maxRecords) {
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
return model.variables.getLocalUSERWTFAggr;
}, function () {
return controller._getLocalUSERWTFOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTF$AggrRefresh"];
// Client Actions
Controller.prototype._onRender$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
controller.safeExecuteJSNode(WTF_MOB_SaucyFlow_RegulamentBenefits_mvc_controller_OnRender_CinemaJS, "Cinema", "OnRender", {
WidgetId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("BodyContent"), OS.Types.Text, true),
HTML: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.bodyElementVar, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
// Execute Action: OpenAllExternalLinksOnSystemBrowser
WTF_MOBController.default.openAllExternalLinksOnSystemBrowser$Action(idService.getId("BodyContent"), callContext);
}).catch(function (ex) {
OS.Logger.trace("RegulamentBenefits.OnRender", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFOnAfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getRegulationServerVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Como Funciona"
model.variables.analyticsAuxVarVar.traceNameAttr = "Como Funciona";
// AnalyticsAuxVar.Category = "Saucy"
model.variables.analyticsAuxVarVar.categoryAttr = "Saucy";
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
// Execute Action: GetRegulationServer
model.flush();
return controller.getRegulationServer$ServerAction((((model.variables.categoryIn === "cinemas")) ? ("Cinemas") : ((((model.variables.categoryIn === "revolut")) ? ("Revolut") : ("Uber")))), model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
getRegulationServerVar.value = value;
});
}).then(function () {
// TitleElement = GetRegulationServer.App_Regulation.Title
model.variables.titleElementVar = getRegulationServerVar.value.app_RegulationOut.titleAttr;
// BodyElement = GetRegulationServer.App_Regulation.Body
model.variables.bodyElementVar = getRegulationServerVar.value.app_RegulationOut.bodyAttr;
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("RegulamentBenefits.GetLocalUSERWTFOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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

Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFOnAfterFetch$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

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
return WTF_MOB_SaucyFlowController.default.handleError(ex, this.callContext());
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
define("WTF_MOB.SaucyFlow.RegulamentBenefits.mvc$controller.OnRender.CinemaJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.WidgetId).innerHTML = $parameters.HTML

};
});

