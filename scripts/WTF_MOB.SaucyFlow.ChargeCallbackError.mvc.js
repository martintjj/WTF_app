define("WTF_MOB.SaucyFlow.ChargeCallbackError.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "WTF_MOB.controller$Analytics_TrackException", "BALANCE_MBP.controller$GetLastPaymentProcess", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_BalanceCharge", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl1_mvcModel) {
var OS = OutSystems.Internal;
var GetAccessTokenInfoAggrRec = (function (_super) {
__extends(GetAccessTokenInfoAggrRec, _super);
function GetAccessTokenInfoAggrRec(defaults) {
_super.apply(this, arguments);
}
GetAccessTokenInfoAggrRec.RecordListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
GetAccessTokenInfoAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetAccessTokenInfoAggrRec.init();
return GetAccessTokenInfoAggrRec;
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
this.attr("paymentValue", "paymentValueIn", "paymentValue", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_paymentValueInDataFetchStatus", "_paymentValueInDataFetchStatus", "_paymentValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("payment_type_code", "payment_type_codeIn", "payment_type_code", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_payment_type_codeInDataFetchStatus", "_payment_type_codeInDataFetchStatus", "_payment_type_codeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("returnCode", "returnCodeIn", "returnCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_returnCodeInDataFetchStatus", "_returnCodeInDataFetchStatus", "_returnCodeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("shortMsg", "shortMsgIn", "shortMsg", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_shortMsgInDataFetchStatus", "_shortMsgInDataFetchStatus", "_shortMsgInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetAccessTokenInfo", "getAccessTokenInfoAggr", "getAccessTokenInfoAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetAccessTokenInfoAggrRec());
}, GetAccessTokenInfoAggrRec)
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
if("paymentValue" in inputs) {
this.variables.paymentValueIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.paymentValue, OS.Types.Text);
}

if("payment_type_code" in inputs) {
this.variables.payment_type_codeIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.payment_type_code, OS.Types.Text);
}

if("returnCode" in inputs) {
this.variables.returnCodeIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.returnCode, OS.Types.Text);
}

if("shortMsg" in inputs) {
this.variables.shortMsgIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.shortMsg, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.ChargeCallbackError.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.ChargeCallbackError.mvc$model", "WTF_MOB.SaucyFlow.ChargeCallbackError.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.controller$Analytics_TrackException", "BALANCE_MBP.controller$GetLastPaymentProcess", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_BalanceCharge", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_SaucyFlow_ChargeCallbackError_mvc_model, WTF_MOB_SaucyFlow_ChargeCallbackError_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets) {
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
        View.displayName = "SaucyFlow.ChargeCallbackError";
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
                return WTF_MOB_SaucyFlow_ChargeCallbackError_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_ChargeCallbackError_mvc_controller;
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
PageSection: "Carregamento",
WithoutLogin: false,
IsOfflineMode: false,
ContentClass: "pv-16 b-transparent",
ScreenName: "ChargeCallbackError",
PageTitle: "Erro"
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
"data-style-key": "_ZyxmLirE0CmoofW4DoOiA"
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
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.thumbsdown.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "pv-16 a-flexCardTitle app-title text-center bingo c-yellow",
value: "Ocorreu um erro após efetuares o carregamento do teu telemóvel",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "50px"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
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
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.voltarOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Voltar ao início",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
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
define("WTF_MOB.SaucyFlow.ChargeCallbackError.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.SaucyFlow.controller", "WTF_MOB.controller$Analytics_TrackException", "BALANCE_MBP.controller$GetLastPaymentProcess", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_BalanceCharge", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_SaucyFlowController) {
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
Controller.prototype.getAccessTokenInfo$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

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
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
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
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getAccessTokenInfoAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getAccessTokenInfo$AggrRefresh"];
// Client Actions
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.ChargeCallbackError.AfterFetch$vars"))());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLastPaymentProcessVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Carregamento"
model.variables.analyticsAuxVarVar.traceNameAttr = "Carregamento";
// AnalyticsAuxVar.Category = "Erro"
model.variables.analyticsAuxVarVar.categoryAttr = "Erro";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Pay_topup_fail", callContext);

}).then(function () {
// EmptyToken?
return OS.Flow.executeSequence(function () {
if((!(model.variables.getAccessTokenInfoAggr.listOut.isEmpty))) {
// Execute Action: GetLastPaymentProcess
model.flush();
return BALANCE_MBPController.default.getLastPaymentProcess$Action(callContext).then(function (value) {
getLastPaymentProcessVar.value = value;
}).then(function () {
// ConvertedValue = TextToDecimal
vars.value.convertedValueVar = OS.BuiltinFunctions.textToDecimal(OS.BuiltinFunctions.replace(OS.BuiltinFunctions.substr(model.variables.paymentValueIn, 0, (OS.BuiltinFunctions.length(model.variables.paymentValueIn) - 3)), ",", "."));
// Execute Action: setActivityLog_BalanceCharge
model.flush();
return WTF_MBPController.default.setActivityLog_BalanceCharge$Action("", vars.value.convertedValueVar, model.variables.payment_type_codeIn, true, getLastPaymentProcessVar.value.paymentRefOut, model.variables.returnCodeIn, model.variables.shortMsgIn, callContext);
});
}

});
}).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ChargeCallbackError.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
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
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.ChargeCallbackError.AfterFetch$vars", [{
name: "ConvertedValue",
attrName: "convertedValueVar",
mandatory: false,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.prototype._voltarOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("VoltarOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Erro", "Voltar ao início", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
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

Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.voltarOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._voltarOnClick$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
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

