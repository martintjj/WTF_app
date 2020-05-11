define("WTF_MOB.SaucyFlow.ChargeCallbackSuccess.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_BalanceCharge", "WTF_MOB.controller$VerifyNetworkStatus", "BALANCE_MBP.controller$GetLastPaymentProcess", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$GetConfigValueAsText_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$CreateCardV2", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl1_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
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
this.attr("showAddNewWalletCard", "showAddNewWalletCardVar", "showAddNewWalletCard", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationName", "applicationNameVar", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AssociationID", "associationIDVar", "AssociationID", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Contract_DN", "contract_DNVar", "Contract_DN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ShowPaymentsBtn", "showPaymentsBtnVar", "ShowPaymentsBtn", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
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
this.attr("payment_ref", "payment_refIn", "payment_ref", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_payment_refInDataFetchStatus", "_payment_refInDataFetchStatus", "_payment_refInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("card_bin", "card_binIn", "card_bin", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_card_binInDataFetchStatus", "_card_binInDataFetchStatus", "_card_binInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
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

if("payment_ref" in inputs) {
this.variables.payment_refIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.payment_ref, OS.Types.Text);
}

if("card_bin" in inputs) {
this.variables.card_binIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.card_bin, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.ChargeCallbackSuccess.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.ChargeCallbackSuccess.mvc$model", "WTF_MOB.SaucyFlow.ChargeCallbackSuccess.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_BalanceCharge", "WTF_MOB.controller$VerifyNetworkStatus", "BALANCE_MBP.controller$GetLastPaymentProcess", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$GetConfigValueAsText_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$CreateCardV2", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, MobileUIWidgetsController, WTF_MBPModel, React, OSView, WTF_MOB_SaucyFlow_ChargeCallbackSuccess_mvc_model, WTF_MOB_SaucyFlow_ChargeCallbackSuccess_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "SaucyFlow.ChargeCallbackSuccess";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.SaucyFlow.ChargeCallbackSuccess.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_ChargeCallbackSuccess_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_ChargeCallbackSuccess_mvc_controller;
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
NotCloseFeedbackMessage: true,
PageTitle: "Sucesso",
WithoutLogin: false,
ContentClass: "pv-16 b-transparent",
PageType: "Operação",
IsOfflineMode: false,
ScreenName: "ChargeCallbackSuccess",
PageSection: "Carregamento"
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
"data-style-key": "2YDNZeBA0kO26BJheC35dA"
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
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "pv-16 a-flexCardTitle app-title text-center bingo c-yellow",
value: "AWESOME, BORA LÁ :)",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "a-flexCardTitle app-title text-center",
value: "Ganhaste Bling Blings para jogar no scratch!",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.showAddNewWalletCardVar,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-24 a-flexCardTitle app-title text-center",
value: "O cartão que utilizaste não está associado ao teu perfil, queres adicioná-lo aos teus métodos de pagamento?",
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
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick$Action(controller.callContext(eventHandlerContext));
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
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "10px"
},
visible: model.variables.showAddNewWalletCardVar,
_idProps: {
service: idService,
name: "SecondaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.createNewWalletCard$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -secondary",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Adicionar cartão",
_idProps: {
service: idService,
name: "ButtonTextSecondary"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.showAddNewWalletCardVar)]
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
uuid: "14",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.SaucyFlow.ChargeCallbackSuccess.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.SaucyFlow.controller", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_BalanceCharge", "WTF_MOB.controller$VerifyNetworkStatus", "BALANCE_MBP.controller$GetLastPaymentProcess", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$GetConfigValueAsText_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$CreateCardV2", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_SaucyFlowController) {
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
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.ChargeCallbackSuccess.AfterFetch$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLastPaymentProcessVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Carregamento"
model.variables.analyticsAuxVarVar.traceNameAttr = "Carregamento";
// AnalyticsAuxVar.Category = "Sucesso"
model.variables.analyticsAuxVarVar.categoryAttr = "Sucesso";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// RefreshToken = GetAccessTokenInfo.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = model.variables.getAccessTokenInfoAggr.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Pay_topup_success", callContext);

}).then(function () {
// Empty Token?
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
return WTF_MBPController.default.setActivityLog_BalanceCharge$Action("", vars.value.convertedValueVar, model.variables.payment_type_codeIn, false, getLastPaymentProcessVar.value.paymentRefOut, "", "", callContext);
});
}

});
}).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ChargeCallbackSuccess.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.ChargeCallbackSuccess.AfterFetch$vars", [{
name: "ConvertedValue",
attrName: "convertedValueVar",
mandatory: false,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.prototype._onClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.traceNameAttr, "Voltar ao início", 0, "", callContext).then(function () {
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
var getWTF_WalletPayment_Btn_DisabledVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetWTF_WalletPayment_Btn_Disabled
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_WalletPayment_Btn_Disabled", callContext).then(function (value) {
getWTF_WalletPayment_Btn_DisabledVar.value = value;
}).then(function () {
// ShowPaymentsBtn = ToLower = "false"
model.variables.showPaymentsBtnVar = (OS.BuiltinFunctions.toLower(getWTF_WalletPayment_Btn_DisabledVar.value.valueOut) === "false");
}).then(function () {
if(((((model.variables.showPaymentsBtnVar && ((model.variables.card_binIn) !== (""))) && ((model.variables.payment_refIn) !== (""))) && ((model.variables.payment_type_codeIn) !== ("MBWAY"))))) {
// showAddNewWalletCard = True
model.variables.showAddNewWalletCardVar = true;
}

});
});
};
Controller.prototype._createNewWalletCard$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CreateNewWalletCard");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createCardV2Var = new OS.DataTypes.VariableHolder();
var getApplicationName_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getUserWTFVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFRecordList))());
var getServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_SERVICERecordList))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.traceNameAttr, "Adicionar cartão", 0, "", callContext).then(function () {
// Aggregate: GetUserWTF
var getUserWTFAggr = function (maxRecords) {
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4";
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
return controller.executeClientAggregate(executeQuery, function () {
return getUserWTFVar.value;
});
};
return getUserWTFAggr();
}).then(function () {
// Contract_DN = GetUserWTF.List.Current.Local_USER_WTF.Msisdn
model.variables.contract_DNVar = (getUserWTFVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr).toString();
// Execute Action: GetApplicationName_MBP
model.flush();
return WTF_MBPController.default.getApplicationName_MBP$Action(callContext).then(function (value) {
getApplicationName_MBPVar.value = value;
});
}).then(function () {
// SetApplicationName
// ApplicationName = GetApplicationName_MBP.Value
model.variables.applicationNameVar = getApplicationName_MBPVar.value.valueOut;
// Aggregate: GetService
var getServiceAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_SERVICERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstServiceId = model.variables.contract_DNVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8";
} else {
selectSql += "\"ENLocal_SERVICE\".\"Id\" o0, \"ENLocal_SERVICE\".\"ServiceId\" o1, \"ENLocal_SERVICE\".\"AssociationID\" o2, \"ENLocal_SERVICE\".\"Name\" o3, \"ENLocal_SERVICE\".\"ServiceAccount\" o4, \"ENLocal_SERVICE\".\"UiLabel\" o5, \"ENLocal_SERVICE\".\"Plan\" o6, \"ENLocal_SERVICE\".\"TMCodeID\" o7, \"ENLocal_SERVICE\".\"TMCodeDesc\" o8";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\"";
fromAndWhereSql += " WHERE (\"ENLocal_SERVICE\".\"ServiceId\" = :qpstServiceId)";
argsList.add("qpstServiceId", /*TEXT*/ 0, qpstServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_SERVICERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SERVICEAttr",
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
return getServiceVar.value;
});
};
return getServiceAggr();
}).then(function () {
// Service not Found?
return OS.Flow.executeSequence(function () {
if((!(getServiceVar.value.listOut.isEmpty))) {
// AssociationID = GetService.List.Current.Local_SERVICE.AssociationID
model.variables.associationIDVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr;
// Execute Action: CreateCardV2
model.flush();
return BALANCE_MBPController.default.createCardV2$Action(model.variables.refreshTokenVar, model.variables.payment_refIn, model.variables.applicationNameVar, model.variables.contract_DNVar, model.variables.associationIDVar, model.variables.card_binIn, callContext).then(function (value) {
createCardV2Var.value = value;
}).then(function () {
if((createCardV2Var.value.successOut)) {
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action((("O cartão terminado em " + createCardV2Var.value.lastFourDigitsCardNumberOut) + " foi adicionado com sucesso aos métodos de pagamento."), 1, true, "icon-message_success", true, false, 3000, "", "-large", callContext);
return OS.Flow.breakAsync();
}

});
}

});
}).then(function () {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Não foi possível adicionar o teu cartão", 3, true, "icon-message_insuccess", true, false, 3000, "", "-large", callContext);
});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ChargeCallbackSuccess.CreateNewWalletCard", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.createNewWalletCard$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._createNewWalletCard$Action, callContext);

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

