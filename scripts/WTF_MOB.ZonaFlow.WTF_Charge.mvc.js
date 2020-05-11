define("WTF_MOB.ZonaFlow.WTF_Charge.mvc$model", ["OutSystems", "WTF_MOB.model", "BALANCE_MBP.controller", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "CON_GDR.model", "WTF_MOB.Common.Layout_Lvl3.mvc$model", "WTF_MOB.Common.HeaderLvl3.mvc$model", "BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.Common.BottomLvl3.mvc$model", "BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen.mvc$model", "BALANCE_MBP.controller$FormatCurrency_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$CONST_GetRefData_TopUp", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MBP.controller$GetConfigurationsChargePhone", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "BALANCE_MBP.controller$GetPaygateTopUpInfo", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$LOV2_outRecordList", "WTF_MOB.model$LOV_outRecordList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "CON_GDR.model$outputMessageRec", "WTF_MOB.referencesHealth$CON_GDR"], function (OutSystems, WTF_MOBModel, BALANCE_MBPController, WTF_MOBController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, CON_GDRModel, WTF_MOB_Common_Layout_Lvl3_mvcModel, WTF_MOB_Common_HeaderLvl3_mvcModel, BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvcModel, WTF_MOB_Common_Waiting_mvcModel, WTF_MOB_Common_BottomLvl3_mvcModel, BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvcModel) {
var OS = OutSystems.Internal;

var GetRefData_BPDataActRec = (function (_super) {
__extends(GetRefData_BPDataActRec, _super);
function GetRefData_BPDataActRec(defaults) {
_super.apply(this, arguments);
}
GetRefData_BPDataActRec.attributesToDeclare = function () {
return [
this.attr("RefData_outputMessage", "refData_outputMessageOut", "RefData_outputMessage", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GDRModel.outputMessageRec());
}, CON_GDRModel.outputMessageRec), 
this.attr("Success", "successOut", "Success", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("Message", "messageOut", "Message", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
GetRefData_BPDataActRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetRefData_BPDataActRec.init();
return GetRefData_BPDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IntegrationSuccessful", "integrationSuccessfulVar", "IntegrationSuccessful", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("MSISDN", "mSISDNVar", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsReadyToRunOut", "isReadyToRunOutVar", "IsReadyToRunOut", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("PaymentMethodMinValue", "paymentMethodMinValueVar", "PaymentMethodMinValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("PaymentMethodMaxValue", "paymentMethodMaxValueVar", "PaymentMethodMaxValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AdditionalInfo", "additionalInfoVar", "AdditionalInfo", true, OS.Types.Text, function () {
return "";
}), 
this.attr("TopUpValueListDefaultValue", "topUpValueListDefaultValueVar", "TopUpValueListDefaultValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TopUpValueListStep", "topUpValueListStepVar", "TopUpValueListStep", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TopUpValueListLength", "topUpValueListLengthVar", "TopUpValueListLength", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Rateplan", "rateplanVar", "Rateplan", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AmountSelected", "amountSelectedVar", "AmountSelected", true, OS.Types.Decimal, function () {
return (OS.DataTypes.Decimal.defaultValue);
}), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonName", "personNameVar", "PersonName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonContactPhoneNumber", "personContactPhoneNumberVar", "PersonContactPhoneNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonNIF", "personNIFVar", "PersonNIF", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AssociationId", "associationIdVar", "AssociationId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Application", "applicationVar", "Application", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("Step", "stepVar", "Step", true, OS.Types.Integer, function () {
return 1;
}), 
this.attr("CONST_GetRefData_TopUp_Process", "cONST_GetRefData_TopUp_ProcessVar", "CONST_GetRefData_TopUp_Process", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CONST_GetRefData_TopUp_LOVType", "cONST_GetRefData_TopUp_LOVTypeVar", "CONST_GetRefData_TopUp_LOVType", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CONST_GetRefData_TopUp_Channel", "cONST_GetRefData_TopUp_ChannelVar", "CONST_GetRefData_TopUp_Channel", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CONST_GetRefData_TopUp_FinancialMovement", "cONST_GetRefData_TopUp_FinancialMovementVar", "CONST_GetRefData_TopUp_FinancialMovement", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceValue", "balanceValueIn", "BalanceValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_balanceValueInDataFetchStatus", "_balanceValueInDataFetchStatus", "_balanceValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceMessage", "balanceMessageIn", "BalanceMessage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceMessageInDataFetchStatus", "_balanceMessageInDataFetchStatus", "_balanceMessageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("FromPaygateCancel", "fromPaygateCancelIn", "FromPaygateCancel", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_fromPaygateCancelInDataFetchStatus", "_fromPaygateCancelInDataFetchStatus", "_fromPaygateCancelInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetRefData_BP", "getRefData_BPDataAct", "getRefData_BPDataAct", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetRefData_BPDataActRec());
}, GetRefData_BPDataActRec)
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
Model._hasValidationWidgetsValue = (((((WTF_MOB_Common_Layout_Lvl3_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl3_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomLvl3_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("BalanceValue" in inputs) {
this.variables.balanceValueIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.BalanceValue, OS.Types.Decimal);
}

if("BalanceMessage" in inputs) {
this.variables.balanceMessageIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.BalanceMessage, OS.Types.Text);
}

if("FromPaygateCancel" in inputs) {
this.variables.fromPaygateCancelIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.FromPaygateCancel, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.WTF_Charge.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "CON_GDR.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_Charge.mvc$model", "WTF_MOB.ZonaFlow.WTF_Charge.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.Common.BottomLvl3.mvc$view", "BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen.mvc$view", "BALANCE_MBP.controller$FormatCurrency_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$CONST_GetRefData_TopUp", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MBP.controller$GetConfigurationsChargePhone", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "BALANCE_MBP.controller$GetPaygateTopUpInfo", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$LOV2_outRecordList", "WTF_MOB.model$LOV_outRecordList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "CON_GDR.model$outputMessageRec", "WTF_MOB.referencesHealth$CON_GDR"], function (OutSystems, WTF_MOBModel, WTF_MOBController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, CON_GDRModel, React, OSView, WTF_MOB_ZonaFlow_WTF_Charge_mvc_model, WTF_MOB_ZonaFlow_WTF_Charge_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_Common_BottomLvl3_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_Charge";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_Charge.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_Common_BottomLvl3_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Charge_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Charge_mvc_controller;
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
PageType: "Operação",
PageTitle: "Carregar saldo",
ScreenName: "WTF_Charge",
ContentClass: "b-warmPurple",
PageSection: "Saldos",
withoutLogin: false
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
Title: "Carregar saldo"
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
return [$if(model.variables.integrationSuccessfulVar, false, this, function () {
return [React.createElement(BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvc_view, {
inputs: {
InstructionsCustomStyleClass: "a-textRead c-brownishGrey mt-8",
Rateplan: model.variables.rateplanVar,
Step: model.variables.stepVar,
PaymentProcessID: WTF_MOBModel.staticEntities.pAYMENT_PROCESS.recharge,
BalanceValueCustomStyleClass: "a-textBigBold -black mb-24 mt-8",
BalanceValue: model.variables.balanceValueIn,
PaymentMethodMinValue: model.variables.paymentMethodMinValueVar,
TopUpValueListLength: model.variables.topUpValueListLengthVar,
BalanceMessage: model.variables.balanceMessageIn,
TopUpValueListStep: model.variables.topUpValueListStepVar,
PaymentMethodMaxValue: model.variables.paymentMethodMaxValueVar,
Application: model.variables.applicationVar,
RefreshToken: model.variables.refreshTokenVar,
PersonName: model.variables.personNameVar,
AdditionalInfo: model.variables.additionalInfoVar,
PlaceholderCustomStyleClass: "c-strongPink",
IsReadyToRun: model.variables.isReadyToRunOutVar,
TopUpValueListDefaultValue: model.variables.topUpValueListDefaultValueVar,
PhoneNumber: model.variables.mSISDNVar,
ContactPhoneNumber: model.variables.personContactPhoneNumberVar,
TitleCustomStyleClass: "h3",
AssociationID: model.variables.associationIdVar,
BalanceMessageCustomStyleClass: "a-textRead -italic"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClickCarregarSuccess$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpButtonBlockEvent_ClickCarregarSuccess$Action(controller.callContext(eventHandlerContext));
});
;
},
endLoading$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpBlockEndLoading$Action(controller.callContext(eventHandlerContext));
});
;
},
event_ClickCarregarSuccessWalletCard$Action: function (paymentTypeCodeIn) {
var eventHandlerContext = callContext.clone();
controller.topUpBlockWithWalletCardEvent_ClickCarregarSuccess$Action(paymentTypeCodeIn, controller.callContext(eventHandlerContext));

;
},
event_ClickCarregarSuccessWalletCard_Analytics$Action: function (paymentTypeLabelIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpBlockWithWalletCardEvent_Analytics$Action(paymentTypeLabelIn, controller.callContext(eventHandlerContext));
});
;
},
event_AmountChanged$Action: function (newAmountSelectedIn, analytics_CategoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onAmountSelected$Action(newAmountSelectedIn, controller.callContext(eventHandlerContext));
});
;
},
startLoading$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpBlockStartLoading$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
placeholder1: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Quanto queres carregar?",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
placeholder2: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.revolut_desponivel_new.jpg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})];
}, function () {
return [];
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomLvl3_mvc_view, {
inputs: {
class: "b-warmPurple"
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
uuid: "6",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvc_view, {
inputs: {
RefreshToken: model.variables.refreshTokenVar,
AmountGreaterThanMaxErrorMessage: model.getCachedValue(idService.getId("ANEYaMEOu0OcMw9lxvovig.AmountGreaterThanMaxErrorMessage"), function () {
return (("Por favor selecione um valor inferior a " + BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.paymentMethodMaxValueVar, callContext.withoutIterationContext()).resultOut) + " para fazer o carregamento.");
}, function () {
return model.variables.paymentMethodMaxValueVar;
}),
PaymentMethodMinValue: model.variables.paymentMethodMinValueVar,
AmountIsZeroErrorMessage: model.getCachedValue(idService.getId("ANEYaMEOu0OcMw9lxvovig.AmountIsZeroErrorMessage"), function () {
return (("Por favor selecione um valor superior a " + BALANCE_MBPController.default.formatCurrency_MBP$Action(OS.BuiltinFunctions.integerToDecimal(0), callContext.withoutIterationContext()).resultOut) + " para efetuar o pagamento.");
}),
AssociationId: model.variables.associationIdVar,
CustomClass: model.getCachedValue(idService.getId("ANEYaMEOu0OcMw9lxvovig.CustomClass"), function () {
return (((model.variables.stepVar === 1)) ? ("btn btn-primary -primary -negative") : ("btn -secondary -negative"));
}, function () {
return model.variables.stepVar;
}),
Step: model.variables.stepVar,
PaymentMethodMaxValue: model.variables.paymentMethodMaxValueVar,
AmountLowerThanMinErrorMessage: model.getCachedValue(idService.getId("ANEYaMEOu0OcMw9lxvovig.AmountLowerThanMinErrorMessage"), function () {
return (("Por favor selecione um valor superior a " + BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.paymentMethodMinValueVar, callContext.withoutIterationContext()).resultOut) + " para fazer o carregamento.");
}, function () {
return model.variables.paymentMethodMinValueVar;
}),
Amount: model.variables.amountSelectedVar,
Application: model.variables.applicationVar,
IsButtonEnabled: model.getCachedValue(idService.getId("ANEYaMEOu0OcMw9lxvovig.IsButtonEnabled"), function () {
return (((model.variables.isLoadingVar || !(model.variables.integrationSuccessfulVar))) ? (false) : (true));
}, function () {
return model.variables.isLoadingVar;
}, function () {
return model.variables.integrationSuccessfulVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_ClickCarregarStep1Success$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpButtonBlockEvent_ClickCarregarStep1Success$Action(controller.callContext(eventHandlerContext));
});
;
},
endLoading$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpButtonBlockEndLoading$Action(controller.callContext(eventHandlerContext));
});
;
},
event_ClickCarregarStep2$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpButtonBlockEvent_ClickCarregarStep2$Action(controller.callContext(eventHandlerContext));
});
;
},
event_ClickCarregarStep1$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.topUpButtonBlockEvent_ClickCarregarStep1$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.integrationSuccessfulVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.applicationVar), asPrimitiveValue(model.variables.amountSelectedVar), asPrimitiveValue(model.variables.stepVar), asPrimitiveValue(model.variables.associationIdVar), asPrimitiveValue(model.variables.paymentMethodMinValueVar), asPrimitiveValue(model.variables.paymentMethodMaxValueVar), asPrimitiveValue(model.variables.refreshTokenVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.amountSelectedVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.associationIdVar), asPrimitiveValue(model.variables.personContactPhoneNumberVar), asPrimitiveValue(model.variables.mSISDNVar), asPrimitiveValue(model.variables.topUpValueListDefaultValueVar), asPrimitiveValue(model.variables.isReadyToRunOutVar), asPrimitiveValue(model.variables.additionalInfoVar), asPrimitiveValue(model.variables.personNameVar), asPrimitiveValue(model.variables.refreshTokenVar), asPrimitiveValue(model.variables.applicationVar), asPrimitiveValue(model.variables.paymentMethodMaxValueVar), asPrimitiveValue(model.variables.topUpValueListStepVar), asPrimitiveValue(model.variables.balanceMessageIn), asPrimitiveValue(model.variables.topUpValueListLengthVar), asPrimitiveValue(model.variables.paymentMethodMinValueVar), asPrimitiveValue(model.variables.balanceValueIn), asPrimitiveValue(model.variables.stepVar), asPrimitiveValue(model.variables.rateplanVar), asPrimitiveValue(model.variables.integrationSuccessfulVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_Charge.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "CON_GDR.model", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "BALANCE_MBP.controller$FormatCurrency_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$CONST_GetRefData_TopUp", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MBP.controller$GetConfigurationsChargePhone", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "BALANCE_MBP.controller$GetPaygateTopUpInfo", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$LOV2_outRecordList", "WTF_MOB.model$LOV_outRecordList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "CON_GDR.model$outputMessageRec", "WTF_MOB.referencesHealth$CON_GDR"], function (OutSystems, WTF_MOBModel, WTF_MOBController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, CON_GDRModel, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
Controller.prototype.getRefData_BP$DataActRefresh = function () {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();
return controller.callDataAction("DataActionGetRefData_BP", "screenservices/WTF_MOB/ZonaFlow/WTF_Charge/DataActionGetRefData_BP", "6yhoN_V48NlnebWPpftK+Q", function (b) {
model.variables.getRefData_BPDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getRefData_BPDataAct.fromJS(json);
}, undefined).then(function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getRefData_BP$DataActRefresh"];
// Client Actions
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getAdditionalInfoVar = new OS.DataTypes.VariableHolder();
var getConfig_NoInfoVar = new OS.DataTypes.VariableHolder();
var getConfig_NullNIFPaygateVar = new OS.DataTypes.VariableHolder();
var getConfig_MinValueAllowedVar = new OS.DataTypes.VariableHolder();
var cONST_GetRefData_TopUpVar = new OS.DataTypes.VariableHolder();
var getApplicationName_MBPVar = new OS.DataTypes.VariableHolder();
var getChargePhoneConfigurationsVar = new OS.DataTypes.VariableHolder();
var getAccessTokenVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
var getServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList))());
var getLocalUSERWTFSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Carregar Saldos"
model.variables.analyticsAuxVarVar.traceNameAttr = "Carregar Saldos";
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Aggregate: GetLocalUSERWTFS
var getLocalUSERWTFSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_WTFRecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4";
} else {
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_WTF\" \"ENLocal_USER_WTF\"";
orderBySql += " ORDER BY \"ENLocal_USER_WTF\".\"CodeMember\" ASC ";
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
return getLocalUSERWTFSVar.value;
});
};
return getLocalUSERWTFSAggr();
}).then(function () {
// UserWTF.Empty?
return OS.Flow.executeSequence(function () {
if((getLocalUSERWTFSVar.value.listOut.isEmpty)) {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
} else {
// MSISDN = GetLocalUSERWTFS.List.Current.Local_USER_WTF.Msisdn
model.variables.mSISDNVar = (getLocalUSERWTFSVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr).toString();
// Aggregate: GetService
var getServiceAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstLocal_SERVICE_ServiceId = model.variables.mSISDNVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13, NULL o14, NULL o15, NULL o16, NULL o17, NULL o18, NULL o19, NULL o20, NULL o21, NULL o22, NULL o23, NULL o24";
} else {
selectSql += "\"ENLocal_ASSOCIATION\".\"Id\" o0, \"ENLocal_ASSOCIATION\".\"DisplayValue\" o1, \"ENLocal_ASSOCIATION\".\"FriendlyName\" o2, \"ENLocal_ASSOCIATION\".\"RoleName\" o3, \"ENLocal_ASSOCIATION\".\"Key\" o4, \"ENLocal_ASSOCIATION\".\"Value\" o5, \"ENLocal_ASSOCIATION\".\"Master\" o6, \"ENLocal_ASSOCIATION\".\"ContractDN\" o7, \"ENLocal_ASSOCIATION\".\"AccountOwner\" o8, \"ENLocal_ASSOCIATION\".\"AccountOwnerNIF\" o9, \"ENLocal_ASSOCIATION\".\"AccountOwnerEmail\" o10, \"ENLocal_ASSOCIATION\".\"AccountOwnerPhoneNr\" o11, \"ENLocal_ASSOCIATION\".\"CustCode_ClientNumber\" o12, \"ENLocal_ASSOCIATION\".\"PersonId\" o13, \"ENLocal_ASSOCIATION\".\"IsPending\" o14, \"ENLocal_ASSOCIATION\".\"UA\" o15, \"ENLocal_SERVICE\".\"Id\" o16, \"ENLocal_SERVICE\".\"ServiceId\" o17, \"ENLocal_SERVICE\".\"AssociationID\" o18, \"ENLocal_SERVICE\".\"Name\" o19, \"ENLocal_SERVICE\".\"ServiceAccount\" o20, \"ENLocal_SERVICE\".\"UiLabel\" o21, \"ENLocal_SERVICE\".\"Plan\" o22, \"ENLocal_SERVICE\".\"TMCodeID\" o23, \"ENLocal_SERVICE\".\"TMCodeDesc\" o24";
}
fromAndWhereSql += " FROM (\"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\" Inner JOIN \"MAIN\".\"OSUSR_p9g_Local_ASSOCIATION\" \"ENLocal_ASSOCIATION\" ON (\"ENLocal_SERVICE\".\"AssociationID\" = \"ENLocal_ASSOCIATION\".\"Id\")) ";
fromAndWhereSql += " WHERE (\"ENLocal_SERVICE\".\"ServiceId\" = :qpstLocal_SERVICE_ServiceId)";
argsList.add("qpstLocal_SERVICE_ServiceId", /*TEXT*/ 0, qpstLocal_SERVICE_ServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ASSOCIATIONAttr",
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
return getServiceAggr().then(function () {
// Service not Found?
return OS.Flow.executeSequence(function () {
if((getServiceVar.value.listOut.isEmpty)) {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
} else {
// PersonName = GetService.List.Current.Local_ASSOCIATION.AccountOwner
model.variables.personNameVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.accountOwnerAttr;
// PersonContactPhoneNumber = GetService.List.Current.Local_ASSOCIATION.AccountOwnerPhoneNr
model.variables.personContactPhoneNumberVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.accountOwnerPhoneNrAttr;
// PersonNIF = GetService.List.Current.Local_ASSOCIATION.AccountOwnerNIF
model.variables.personNIFVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.accountOwnerNIFAttr;
// AssociationId = GetService.List.Current.Local_ASSOCIATION.Id
model.variables.associationIdVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.idAttr;
// Execute Action: GetApplicationName_MBP
model.flush();
return WTF_MBPController.default.getApplicationName_MBP$Action(callContext).then(function (value) {
getApplicationName_MBPVar.value = value;
}).then(function () {
// Application = GetApplicationName_MBP.Value
model.variables.applicationVar = getApplicationName_MBPVar.value.valueOut;
// Aggregate: GetAccessToken
var getAccessTokenAggr = function (maxRecords) {
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
return getAccessTokenVar.value;
});
};
return getAccessTokenAggr();
}).then(function () {
// Empty Access token?
return OS.Flow.executeSequence(function () {
if((getAccessTokenVar.value.listOut.isEmpty)) {
// Execute Action: StopTrace5
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
} else {
// RefreshToken = GetAccessToken.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = getAccessTokenVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
// Execute Action: GetConfig_NoInfo
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("CLIENT_NO_INFO", callContext).then(function (value) {
getConfig_NoInfoVar.value = value;
}).then(function () {
// PersonNIF = No Info?
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.toLower(model.variables.personNIFVar) === OS.BuiltinFunctions.toLower(getConfig_NoInfoVar.value.valueOut)))) {
// Execute Action: GetConfig_NullNIFPaygate
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("PAYGATE_RECHARGE_NULL_NIF", callContext).then(function (value) {
getConfig_NullNIFPaygateVar.value = value;
}).then(function () {
// PersonNIF = GetConfig_NullNIFPaygate.Value
model.variables.personNIFVar = getConfig_NullNIFPaygateVar.value.valueOut;
});
}

});
}).then(function () {
// Execute Action: GetConfig_MinValueAllowed
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("CHARGE_MIN_VALUE_ALLOWED", callContext).then(function (value) {
getConfig_MinValueAllowedVar.value = value;
}).then(function () {
// PaymentMethodMinValue = TextToDecimal
model.variables.paymentMethodMinValueVar = OS.BuiltinFunctions.textToDecimal(getConfig_MinValueAllowedVar.value.valueOut);
// Execute Action: GetChargePhoneConfigurations
model.flush();
return WTF_MBPController.default.getConfigurationsChargePhone$Action(callContext).then(function (value) {
getChargePhoneConfigurationsVar.value = value;
});
}).then(function () {
// SetChargePhoneConfigurations
// TopUpValueListDefaultValue = GetChargePhoneConfigurations.DefaultChargeValue
model.variables.topUpValueListDefaultValueVar = getChargePhoneConfigurationsVar.value.defaultChargeValueOut;
// TopUpValueListStep = GetChargePhoneConfigurations.StepValue
model.variables.topUpValueListStepVar = OS.BuiltinFunctions.integerToDecimal(getChargePhoneConfigurationsVar.value.stepValueOut);
// TopUpValueListLength = GetChargePhoneConfigurations.NumberOfOptions
model.variables.topUpValueListLengthVar = getChargePhoneConfigurationsVar.value.numberOfOptionsOut;
// Execute Action: GetAdditionalInfo
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("PAYMENT_ADDITIONALINFO", callContext).then(function (value) {
getAdditionalInfoVar.value = value;
});
}).then(function () {
// AdditionalInfo = GetAdditionalInfo.Value
model.variables.additionalInfoVar = getAdditionalInfoVar.value.valueOut;
// Execute Action: CONST_GetRefData_TopUp
cONST_GetRefData_TopUpVar.value = WTF_MBPController.default.cONST_GetRefData_TopUp$Action(callContext);

// CONST_GetRefData_TopUp_Process = CONST_GetRefData_TopUp.Process
model.variables.cONST_GetRefData_TopUp_ProcessVar = cONST_GetRefData_TopUpVar.value.processOut;
// CONST_GetRefData_TopUp_LOVType = CONST_GetRefData_TopUp.LOVType
model.variables.cONST_GetRefData_TopUp_LOVTypeVar = cONST_GetRefData_TopUpVar.value.lOVTypeOut;
// CONST_GetRefData_TopUp_Channel = CONST_GetRefData_TopUp.Channel
model.variables.cONST_GetRefData_TopUp_ChannelVar = cONST_GetRefData_TopUpVar.value.channelOut;
// CONST_GetRefData_TopUp_FinancialMovement = CONST_GetRefData_TopUp.FinancialMovement
model.variables.cONST_GetRefData_TopUp_FinancialMovementVar = cONST_GetRefData_TopUpVar.value.financialMovementOut;
});
});
}

});
});
}

});
});
}

});
});
});
};
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getPaygateTopUpInfoVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// GetRefData_BP.Success?
return OS.Flow.executeSequence(function () {
if((model.variables.getRefData_BPDataAct.successOut)) {
// IntegrationSuccessful = True
model.variables.integrationSuccessfulVar = true;
// LOV
// Foreach GetRefData_BP.RefData_outputMessage.DataOutput.DataOutput.LOVs.LOVs_out.LOV
callContext.iterationContext.registerIterationStart(model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr);
try {var lOVIterator = callContext.iterationContext.getIterator(model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr);
var lOVIndexMax = model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.length;
var lOVIndex = 0;
while ((((lOVIndex < model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.length)) && (lOVIndexMax > 0))) {
lOVIterator.currentRowNumber = lOVIndex;
// LOVs
// Foreach GetRefData_BP.RefData_outputMessage.DataOutput.DataOutput.LOVs.LOVs_out.LOV.Current.LOV_out.LOVs
callContext.iterationContext.registerIterationStart(model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.getItem(lOVIndex.valueOf()).lOV_outAttr.lOVsAttr);
try {var lOVsIterator = callContext.iterationContext.getIterator(model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.getItem(lOVIndex.valueOf()).lOV_outAttr.lOVsAttr);
var lOVsIndexMax = model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.getItem(lOVIndex.valueOf()).lOV_outAttr.lOVsAttr.length;
var lOVsIndex = 0;
while ((((lOVsIndex < model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.getItem(lOVIndex.valueOf()).lOV_outAttr.lOVsAttr.length)) && (lOVsIndexMax > 0))) {
lOVsIterator.currentRowNumber = lOVsIndex;
// IsPaymentMethodType?
if(((model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.getItem(lOVIndex.valueOf()).lOV_outAttr.lOVsAttr.getItem(lOVsIndex.valueOf()).lOV2_outAttr.typeAttr === "PAYMENTMETHODTYPE"))) {
// PaymentMethodMaxValue = Max
model.variables.paymentMethodMaxValueVar = OS.BuiltinFunctions.max(model.variables.paymentMethodMaxValueVar, OS.BuiltinFunctions.textToDecimal(model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.getItem(lOVIndex.valueOf()).lOV_outAttr.parametersAttr.getCurrent(callContext.iterationContext).parameter_outAttr.valueAttr));
}

lOVsIndexMax--;
lOVsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr.getItem(lOVIndex.valueOf()).lOV_outAttr.lOVsAttr);
}

lOVIndexMax--;
lOVIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.getRefData_BPDataAct.refData_outputMessageOut.dataOutputAttr.dataOutputAttr.lOVsAttr.lOVs_outAttr.lOVAttr);
}

return OS.Flow.executeSequence(function () {
if((model.variables.fromPaygateCancelIn)) {
// Execute Action: GetPaygateTopUpInfo
model.flush();
return BALANCE_MBPController.default.getPaygateTopUpInfo$Action(model.variables.mSISDNVar, callContext).then(function (value) {
getPaygateTopUpInfoVar.value = value;
}).then(function () {
// BalanceMessage = GetPaygateTopUpInfo.BalanceMsg
model.variables.balanceMessageIn = getPaygateTopUpInfoVar.value.balanceMsgOut;
});
}

}).then(function () {
// IsReadyToRunOut = True
model.variables.isReadyToRunOutVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace7
return controller._stopTrace$Action(callContext);
});
} else {
// Execute Action: StopTrace6
return controller._stopTrace$Action(callContext).then(function () {
// IntegrationSuccessful = False
model.variables.integrationSuccessfulVar = false;
});
}

});
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
Controller.prototype._topUpButtonBlockEvent_ClickCarregarStep2$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpButtonBlockEvent_ClickCarregarStep2");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Step = 1
model.variables.stepVar = 1;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Carregar saldo", "Cancelar pagamento", 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.TopUpButtonBlockEvent_ClickCarregarStep2", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._topUpBlockStartLoading$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpBlockStartLoading");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.TopUpBlockStartLoading", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._topUpButtonBlockEndLoading$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpButtonBlockEndLoading");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.TopUpButtonBlockEndLoading", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._topUpBlockWithWalletCardEvent_Analytics$Action = function (paymentTypeLabelIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpBlockWithWalletCardEvent_Analytics");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Charge.TopUpBlockWithWalletCardEvent_Analytics$vars"))());
vars.value.paymentTypeLabelInLocal = paymentTypeLabelIn;
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Carregar saldo", ("Método de pagamento: " + vars.value.paymentTypeLabelInLocal), 0, "", callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Charge.TopUpBlockWithWalletCardEvent_Analytics$vars", [{
name: "PaymentTypeLabel",
attrName: "paymentTypeLabelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onAmountSelected$Action = function (newAmountSelectedIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnAmountSelected");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Charge.OnAmountSelected$vars"))());
vars.value.newAmountSelectedInLocal = newAmountSelectedIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// AmountSelected = NewAmountSelected
model.variables.amountSelectedVar = vars.value.newAmountSelectedInLocal;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Carregar saldo", ("Selecionado montante " + OS.BuiltinFunctions.decimalToText(model.variables.amountSelectedVar)), 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.OnAmountSelected", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Charge.OnAmountSelected$vars", [{
name: "NewAmountSelected",
attrName: "newAmountSelectedInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.prototype._topUpBlockWithWalletCardEvent_ClickCarregarSuccess$Action = function (paymentTypeCodeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpBlockWithWalletCardEvent_ClickCarregarSuccess");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Charge.TopUpBlockWithWalletCardEvent_ClickCarregarSuccess$vars"))());
vars.value.paymentTypeCodeInLocal = paymentTypeCodeIn;
// Destination: /WTF_MOB/ChargeCallbackSuccess
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ChargeCallbackSuccess", {
card_bin: "",
payment_type_code: vars.value.paymentTypeCodeInLocal,
payment_ref: "",
paymentValue: OS.BuiltinFunctions.decimalToText(model.variables.amountSelectedVar)
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Charge.TopUpBlockWithWalletCardEvent_ClickCarregarSuccess$vars", [{
name: "PaymentTypeCode",
attrName: "paymentTypeCodeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._topUpButtonBlockEvent_ClickCarregarStep1Success$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpButtonBlockEvent_ClickCarregarStep1Success");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Step = 2
model.variables.stepVar = 2;
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.TopUpButtonBlockEvent_ClickCarregarStep1Success", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._topUpBlockEndLoading$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpBlockEndLoading");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.TopUpBlockEndLoading", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._topUpButtonBlockEvent_ClickCarregarStep1$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpButtonBlockEvent_ClickCarregarStep1");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.TopUpButtonBlockEvent_ClickCarregarStep1", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._topUpButtonBlockEvent_ClickCarregarSuccess$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TopUpButtonBlockEvent_ClickCarregarSuccess");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Carregar saldo", "Carregar", 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("WTF_Charge.TopUpButtonBlockEvent_ClickCarregarSuccess", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.topUpButtonBlockEvent_ClickCarregarStep2$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpButtonBlockEvent_ClickCarregarStep2$Action, callContext);

};
Controller.prototype.topUpBlockStartLoading$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpBlockStartLoading$Action, callContext);

};
Controller.prototype.topUpButtonBlockEndLoading$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpButtonBlockEndLoading$Action, callContext);

};
Controller.prototype.topUpBlockWithWalletCardEvent_Analytics$Action = function (paymentTypeLabelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpBlockWithWalletCardEvent_Analytics$Action, callContext, paymentTypeLabelIn);

};
Controller.prototype.onAmountSelected$Action = function (newAmountSelectedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAmountSelected$Action, callContext, newAmountSelectedIn);

};
Controller.prototype.topUpBlockWithWalletCardEvent_ClickCarregarSuccess$Action = function (paymentTypeCodeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpBlockWithWalletCardEvent_ClickCarregarSuccess$Action, callContext, paymentTypeCodeIn);

};
Controller.prototype.topUpButtonBlockEvent_ClickCarregarStep1Success$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpButtonBlockEvent_ClickCarregarStep1Success$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.topUpBlockEndLoading$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpBlockEndLoading$Action, callContext);

};
Controller.prototype.topUpButtonBlockEvent_ClickCarregarStep1$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpButtonBlockEvent_ClickCarregarStep1$Action, callContext);

};
Controller.prototype.topUpButtonBlockEvent_ClickCarregarSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._topUpButtonBlockEvent_ClickCarregarSuccess$Action, callContext);

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

