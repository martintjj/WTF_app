define("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "BALANCE_MBP.model", "App_Config_MBP.controller", "MobileUIWidgets.controller", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$NearestMultiple", "BALANCE_MBLOCKS.model$TopUpPresetValueList", "BALANCE_MBLOCKS.model$TopUpPresetValueRec", "BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecordList", "BALANCE_MBP.model$Local_TOP_UP_SELECTIONRec", "BALANCE_MBP.entities", "App_Config_MBP.controller$GetConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth$App_Config_MBP", "BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecord", "BALANCE_MBP.controller$CreateOrUpdateLocal_TOP_UP_SELECTION_Logic", "BALANCE_MBP.controller$CreateOrUpdateLastPaymentProcess", "BALANCE_MBP.controller$SetPaygateTopUpWithWalletCardsV2", "MobileUIWidgets.controller$Error", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$Balance_ClearCache", "BALANCE_MBLOCKS.model$STR_WalletCardsList", "BALANCE_MBP.controller$GetAllCards"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, BALANCE_MBPModel, App_Config_MBPController, MobileUIWidgetsController) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ShowOtherValueBlock", "showOtherValueBlockVar", "ShowOtherValueBlock", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AmountSelected", "amountSelectedVar", "AmountSelected", true, OS.Types.Decimal, function () {
return (OS.DataTypes.Decimal.defaultValue);
}), 
this.attr("TopUpPresetValueList", "topUpPresetValueListVar", "TopUpPresetValueList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.TopUpPresetValueList());
}, BALANCE_MBLOCKSModel.TopUpPresetValueList), 
this.attr("TopUpPresetIdSelected", "topUpPresetIdSelectedVar", "TopUpPresetIdSelected", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("IsDestroyed", "isDestroyedVar", "IsDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("WalletCards", "walletCardsVar", "WalletCards", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_WalletCardsList());
}, BALANCE_MBLOCKSModel.STR_WalletCardsList), 
this.attr("PhoneNumber", "phoneNumberIn", "PhoneNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Rateplan", "rateplanIn", "Rateplan", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_rateplanInDataFetchStatus", "_rateplanInDataFetchStatus", "_rateplanInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
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
this.attr("PaymentMethodMinValue", "paymentMethodMinValueIn", "PaymentMethodMinValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_paymentMethodMinValueInDataFetchStatus", "_paymentMethodMinValueInDataFetchStatus", "_paymentMethodMinValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PaymentMethodMaxValue", "paymentMethodMaxValueIn", "PaymentMethodMaxValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_paymentMethodMaxValueInDataFetchStatus", "_paymentMethodMaxValueInDataFetchStatus", "_paymentMethodMaxValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AdditionalInfo", "additionalInfoIn", "AdditionalInfo", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_additionalInfoInDataFetchStatus", "_additionalInfoInDataFetchStatus", "_additionalInfoInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopUpValueListDefaultValue", "topUpValueListDefaultValueIn", "TopUpValueListDefaultValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_topUpValueListDefaultValueInDataFetchStatus", "_topUpValueListDefaultValueInDataFetchStatus", "_topUpValueListDefaultValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopUpValueListStep", "topUpValueListStepIn", "TopUpValueListStep", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_topUpValueListStepInDataFetchStatus", "_topUpValueListStepInDataFetchStatus", "_topUpValueListStepInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopUpValueListLength", "topUpValueListLengthIn", "TopUpValueListLength", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_topUpValueListLengthInDataFetchStatus", "_topUpValueListLengthInDataFetchStatus", "_topUpValueListLengthInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsReadyToRun", "isReadyToRunIn", "IsReadyToRun", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isReadyToRunInDataFetchStatus", "_isReadyToRunInDataFetchStatus", "_isReadyToRunInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleCustomStyleClass", "titleCustomStyleClassIn", "TitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceValueCustomStyleClass", "balanceValueCustomStyleClassIn", "BalanceValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceValueCustomStyleClassInDataFetchStatus", "_balanceValueCustomStyleClassInDataFetchStatus", "_balanceValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceMessageCustomStyleClass", "balanceMessageCustomStyleClassIn", "BalanceMessageCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceMessageCustomStyleClassInDataFetchStatus", "_balanceMessageCustomStyleClassInDataFetchStatus", "_balanceMessageCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("InstructionsCustomStyleClass", "instructionsCustomStyleClassIn", "InstructionsCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_instructionsCustomStyleClassInDataFetchStatus", "_instructionsCustomStyleClassInDataFetchStatus", "_instructionsCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PlaceholderCustomStyleClass", "placeholderCustomStyleClassIn", "PlaceholderCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_placeholderCustomStyleClassInDataFetchStatus", "_placeholderCustomStyleClassInDataFetchStatus", "_placeholderCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Step", "stepIn", "Step", true, OS.Types.Integer, function () {
return 1;
}), 
this.attr("_stepInDataFetchStatus", "_stepInDataFetchStatus", "_stepInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Application", "applicationIn", "Application", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationInDataFetchStatus", "_applicationInDataFetchStatus", "_applicationInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RefreshToken", "refreshTokenIn", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_refreshTokenInDataFetchStatus", "_refreshTokenInDataFetchStatus", "_refreshTokenInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AssociationID", "associationIDIn", "AssociationID", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_associationIDInDataFetchStatus", "_associationIDInDataFetchStatus", "_associationIDInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PersonName", "personNameIn", "PersonName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_personNameInDataFetchStatus", "_personNameInDataFetchStatus", "_personNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ContactPhoneNumber", "contactPhoneNumberIn", "ContactPhoneNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_contactPhoneNumberInDataFetchStatus", "_contactPhoneNumberInDataFetchStatus", "_contactPhoneNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PaymentProcessID", "paymentProcessIDIn", "PaymentProcessID", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_paymentProcessIDInDataFetchStatus", "_paymentProcessIDInDataFetchStatus", "_paymentProcessIDInDataFetchStatus", true, OS.Types.Integer, function () {
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
txtAmountSelected: OS.Model.ValidationWidgetRecord
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
if("PhoneNumber" in inputs) {
this.variables.phoneNumberIn = inputs.PhoneNumber;
if("_phoneNumberInDataFetchStatus" in inputs) {
this.variables._phoneNumberInDataFetchStatus = inputs._phoneNumberInDataFetchStatus;
}

}

if("Rateplan" in inputs) {
this.variables.rateplanIn = inputs.Rateplan;
if("_rateplanInDataFetchStatus" in inputs) {
this.variables._rateplanInDataFetchStatus = inputs._rateplanInDataFetchStatus;
}

}

if("BalanceValue" in inputs) {
this.variables.balanceValueIn = inputs.BalanceValue;
if("_balanceValueInDataFetchStatus" in inputs) {
this.variables._balanceValueInDataFetchStatus = inputs._balanceValueInDataFetchStatus;
}

}

if("BalanceMessage" in inputs) {
this.variables.balanceMessageIn = inputs.BalanceMessage;
if("_balanceMessageInDataFetchStatus" in inputs) {
this.variables._balanceMessageInDataFetchStatus = inputs._balanceMessageInDataFetchStatus;
}

}

if("PaymentMethodMinValue" in inputs) {
this.variables.paymentMethodMinValueIn = inputs.PaymentMethodMinValue;
if("_paymentMethodMinValueInDataFetchStatus" in inputs) {
this.variables._paymentMethodMinValueInDataFetchStatus = inputs._paymentMethodMinValueInDataFetchStatus;
}

}

if("PaymentMethodMaxValue" in inputs) {
this.variables.paymentMethodMaxValueIn = inputs.PaymentMethodMaxValue;
if("_paymentMethodMaxValueInDataFetchStatus" in inputs) {
this.variables._paymentMethodMaxValueInDataFetchStatus = inputs._paymentMethodMaxValueInDataFetchStatus;
}

}

if("AdditionalInfo" in inputs) {
this.variables.additionalInfoIn = inputs.AdditionalInfo;
if("_additionalInfoInDataFetchStatus" in inputs) {
this.variables._additionalInfoInDataFetchStatus = inputs._additionalInfoInDataFetchStatus;
}

}

if("TopUpValueListDefaultValue" in inputs) {
this.variables.topUpValueListDefaultValueIn = inputs.TopUpValueListDefaultValue;
if("_topUpValueListDefaultValueInDataFetchStatus" in inputs) {
this.variables._topUpValueListDefaultValueInDataFetchStatus = inputs._topUpValueListDefaultValueInDataFetchStatus;
}

}

if("TopUpValueListStep" in inputs) {
this.variables.topUpValueListStepIn = inputs.TopUpValueListStep;
if("_topUpValueListStepInDataFetchStatus" in inputs) {
this.variables._topUpValueListStepInDataFetchStatus = inputs._topUpValueListStepInDataFetchStatus;
}

}

if("TopUpValueListLength" in inputs) {
this.variables.topUpValueListLengthIn = inputs.TopUpValueListLength;
if("_topUpValueListLengthInDataFetchStatus" in inputs) {
this.variables._topUpValueListLengthInDataFetchStatus = inputs._topUpValueListLengthInDataFetchStatus;
}

}

if("IsReadyToRun" in inputs) {
this.variables.isReadyToRunIn = inputs.IsReadyToRun;
if("_isReadyToRunInDataFetchStatus" in inputs) {
this.variables._isReadyToRunInDataFetchStatus = inputs._isReadyToRunInDataFetchStatus;
}

}

if("TitleCustomStyleClass" in inputs) {
this.variables.titleCustomStyleClassIn = inputs.TitleCustomStyleClass;
if("_titleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._titleCustomStyleClassInDataFetchStatus = inputs._titleCustomStyleClassInDataFetchStatus;
}

}

if("BalanceValueCustomStyleClass" in inputs) {
this.variables.balanceValueCustomStyleClassIn = inputs.BalanceValueCustomStyleClass;
if("_balanceValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._balanceValueCustomStyleClassInDataFetchStatus = inputs._balanceValueCustomStyleClassInDataFetchStatus;
}

}

if("BalanceMessageCustomStyleClass" in inputs) {
this.variables.balanceMessageCustomStyleClassIn = inputs.BalanceMessageCustomStyleClass;
if("_balanceMessageCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._balanceMessageCustomStyleClassInDataFetchStatus = inputs._balanceMessageCustomStyleClassInDataFetchStatus;
}

}

if("InstructionsCustomStyleClass" in inputs) {
this.variables.instructionsCustomStyleClassIn = inputs.InstructionsCustomStyleClass;
if("_instructionsCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._instructionsCustomStyleClassInDataFetchStatus = inputs._instructionsCustomStyleClassInDataFetchStatus;
}

}

if("PlaceholderCustomStyleClass" in inputs) {
this.variables.placeholderCustomStyleClassIn = inputs.PlaceholderCustomStyleClass;
if("_placeholderCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._placeholderCustomStyleClassInDataFetchStatus = inputs._placeholderCustomStyleClassInDataFetchStatus;
}

}

if("Step" in inputs) {
this.variables.stepIn = inputs.Step;
if("_stepInDataFetchStatus" in inputs) {
this.variables._stepInDataFetchStatus = inputs._stepInDataFetchStatus;
}

}

if("Application" in inputs) {
this.variables.applicationIn = inputs.Application;
if("_applicationInDataFetchStatus" in inputs) {
this.variables._applicationInDataFetchStatus = inputs._applicationInDataFetchStatus;
}

}

if("RefreshToken" in inputs) {
this.variables.refreshTokenIn = inputs.RefreshToken;
if("_refreshTokenInDataFetchStatus" in inputs) {
this.variables._refreshTokenInDataFetchStatus = inputs._refreshTokenInDataFetchStatus;
}

}

if("AssociationID" in inputs) {
this.variables.associationIDIn = inputs.AssociationID;
if("_associationIDInDataFetchStatus" in inputs) {
this.variables._associationIDInDataFetchStatus = inputs._associationIDInDataFetchStatus;
}

}

if("PersonName" in inputs) {
this.variables.personNameIn = inputs.PersonName;
if("_personNameInDataFetchStatus" in inputs) {
this.variables._personNameInDataFetchStatus = inputs._personNameInDataFetchStatus;
}

}

if("ContactPhoneNumber" in inputs) {
this.variables.contactPhoneNumberIn = inputs.ContactPhoneNumber;
if("_contactPhoneNumberInDataFetchStatus" in inputs) {
this.variables._contactPhoneNumberInDataFetchStatus = inputs._contactPhoneNumberInDataFetchStatus;
}

}

if("PaymentProcessID" in inputs) {
this.variables.paymentProcessIDIn = inputs.PaymentProcessID;
if("_paymentProcessIDInDataFetchStatus" in inputs) {
this.variables._paymentProcessIDInDataFetchStatus = inputs._paymentProcessIDInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "App_Config_MBP.controller", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.mvc$model", "BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "BALANCE_MBLOCKS.TopUpBlocks.TopUpValueButton.mvc$view", "BALANCE_MBLOCKS.GenericBlocks.PreFilledInput.mvc$view", "InputMasksMobile.InputMasks.CurrencyMask.mvc$view", "BALANCE_MBLOCKS.TopUpBlocks.PaymentMethodsCard.mvc$view", "BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$view", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$NearestMultiple", "BALANCE_MBLOCKS.model$TopUpPresetValueList", "BALANCE_MBLOCKS.model$TopUpPresetValueRec", "BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecordList", "BALANCE_MBP.model$Local_TOP_UP_SELECTIONRec", "BALANCE_MBP.entities", "App_Config_MBP.controller$GetConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth$App_Config_MBP", "BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecord", "BALANCE_MBP.controller$CreateOrUpdateLocal_TOP_UP_SELECTION_Logic", "BALANCE_MBP.controller$CreateOrUpdateLastPaymentProcess", "BALANCE_MBP.controller$SetPaygateTopUpWithWalletCardsV2", "MobileUIWidgets.controller$Error", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$Balance_ClearCache", "BALANCE_MBLOCKS.model$STR_WalletCardsList", "BALANCE_MBP.controller$GetAllCards"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, App_Config_MBPController, MobileUIWidgetsController, React, OSView, BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvc_model, BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_TopUpValueButton_mvc_view, BALANCE_MBLOCKS_GenericBlocks_PreFilledInput_mvc_view, InputMasksMobile_InputMasks_CurrencyMask_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_PaymentMethodsCard_mvc_view, BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_view) {
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
        View.displayName = "TopUpBlocks.TopUpBlockWithWalletCardV2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_TopUpValueButton_mvc_view, BALANCE_MBLOCKS_GenericBlocks_PreFilledInput_mvc_view, InputMasksMobile_InputMasks_CurrencyMask_mvc_view, BALANCE_MBLOCKS_TopUpBlocks_PaymentMethodsCard_mvc_view, BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_TopUpBlocks_TopUpBlockWithWalletCardV2_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16 ph-16 mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (model.variables.stepIn === 1),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._stepInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
StyleClass: "-paddingMedium text-center",
HasLeftSide: false
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
uuid: "2",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("pWwRuRKXEUiW_43FvvPzTA.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: ((("Saldo do " + model.variables.phoneNumberIn) + " ") + model.variables.rateplanIn),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._phoneNumberInDataFetchStatus, model.variables._rateplanInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("sZT1D9WFCUeS0BbUiL6ylw.Style"), function () {
return (((model.variables.balanceValueCustomStyleClassIn === "")) ? ("a-textBigLight mt-12") : (model.variables.balanceValueCustomStyleClassIn));
}, function () {
return model.variables.balanceValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("sZT1D9WFCUeS0BbUiL6ylw.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.balanceValueIn, callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.balanceValueIn;
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("0DB_hsalvk2lF1mkG3WI9A.Style"), function () {
return (((OS.BuiltinFunctions.trim(model.variables.balanceMessageIn) === "")) ? ("") : ("mt-16 h3 -regular c-gray6 d-block"));
}, function () {
return model.variables.balanceMessageIn;
}),
visible: model.getCachedValue(idService.getId("0DB_hsalvk2lF1mkG3WI9A.Visible"), function () {
return ((((OS.BuiltinFunctions.trim(model.variables.balanceMessageIn)) !== (""))) ? (true) : (false));
}, function () {
return model.variables.balanceMessageIn;
}),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageInDataFetchStatus),
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: model.variables.balanceMessageCustomStyleClassIn,
value: model.variables.balanceMessageIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageInDataFetchStatus)
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.balanceMessageCustomStyleClassIn), asPrimitiveValue(model.variables.balanceMessageIn), asPrimitiveValue(model.variables.balanceValueCustomStyleClassIn), asPrimitiveValue(model.variables.balanceValueIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._balanceMessageCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._balanceMessageInDataFetchStatus), asPrimitiveValue(model.variables._balanceValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._balanceValueInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._rateplanInDataFetchStatus), asPrimitiveValue(model.variables._phoneNumberInDataFetchStatus), asPrimitiveValue(model.variables.rateplanIn), asPrimitiveValue(model.variables.phoneNumberIn)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
StyleClass: "-paddingEqual text-center",
HasRightSide: false
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
uuid: "8",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "text-center"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder1,
style: ("a-flexCardTitle -bold " + model.variables.placeholderCustomStyleClassIn),
_idProps: {
service: idService,
name: "Placeholder1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._placeholderCustomStyleClassInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Left*/ 1,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.topUpPresetValueListVar,
style: "button-group mt-16 a-button-group -payment",
tag: "div",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-button-group-payment",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.topUpPresetIdSelectedVar), asPrimitiveValue(model.variables.topUpPresetValueListVar.length), asPrimitiveValue(model.variables.topUpPresetValueListVar.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).amountAttr), asPrimitiveValue(model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).presetIdAttr)]
}, React.createElement(BALANCE_MBLOCKS_TopUpBlocks_TopUpValueButton_mvc_view, {
inputs: {
IsSelected: model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).presetIdAttr.equals(model.variables.topUpPresetIdSelectedVar),
Value: model.getCachedValue(idService.getId("dpHWzgcNx0uaAsrM9u+ygg.Value"), function () {
return ((!(model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).amountAttr.equals(OS.BuiltinFunctions.integerToDecimal(0)))) ? (BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).amountAttr, callContext.withoutIterationContext()).resultOut) : ("Outro"));
}, function () {
return model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).amountAttr;
}),
IsLast: (model.variables.topUpPresetValueListVar.getCurrentRowNumber(callContext.iterationContext) === (model.variables.topUpPresetValueListVar.length - 1)),
PresetId: model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).presetIdAttr
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClickEvent$Action: function (presetIdIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick_TopUpValue$Action(model.variables.topUpPresetValueListVar.getCurrent(callContext.iterationContext).presetIdAttr, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "15",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.topUpPresetIdSelectedVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mt-24 text-center",
visible: model.variables.showOtherValueBlockVar,
_idProps: {
service: idService,
name: "InputContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BALANCE_MBLOCKS_GenericBlocks_PreFilledInput_mvc_view, {
inputs: {
StyleClasses: "-minified",
ShowFilledText: true,
FilledText: "€"
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
uuid: "17",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
input: new PlaceholderContent(function () {
return [React.createElement(InputMasksMobile_InputMasks_CurrencyMask_mvc_view, {
inputs: {
DecimalSeparator: ",",
DecimalDigits: 2,
CurrencySymbol: "",
GroupSeparator: ".",
IsSuffix: false
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
uuid: "18",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onKeyUp: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onChange_AmountSelected$Action(controller.callContext(eventHandlerContext));
});
;
}
},
extendedProperties: {
maxLength: "6"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Number*/ 2,
mandatory: false,
maxLength: 0,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onChange_AmountSelected$Action(controller.callContext(eventHandlerContext));
});
;
},
prompt: "0,00",
style: "form-control a-input",
variable: model.createVariable(OS.Types.Decimal, model.variables.amountSelectedVar, function (value) {
model.variables.amountSelectedVar = value;
}),
_idProps: {
service: idService,
name: "txtAmountSelected"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.amountSelectedVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.amountSelectedVar)]
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("1vi+5n3g2E28iNf4kvtcuQ.Style"), function () {
return (((model.variables.instructionsCustomStyleClassIn === "")) ? ("a-textRead mt-8") : (model.variables.instructionsCustomStyleClassIn));
}, function () {
return model.variables.instructionsCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("1vi+5n3g2E28iNf4kvtcuQ.Value"), function () {
return ((("Insira um valor entre " + BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.paymentMethodMinValueIn, callContext.withoutIterationContext()).resultOut) + " e ") + BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.paymentMethodMaxValueIn, callContext.withoutIterationContext()).resultOut);
}, function () {
return model.variables.paymentMethodMinValueIn;
}, function () {
return model.variables.paymentMethodMaxValueIn;
}),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._instructionsCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._paymentMethodMinValueInDataFetchStatus, model.variables._paymentMethodMaxValueInDataFetchStatus)
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
}
})), $if(((OS.BuiltinFunctions.trim(model.variables.additionalInfoIn)) !== ("")), false, this, function () {
return [React.createElement(BALANCE_MBLOCKS_TopUpBlocks_PaymentMethodsCard_mvc_view, {
inputs: {
Description: model.variables.additionalInfoIn,
_descriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._additionalInfoInDataFetchStatus)
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
uuid: "21",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.placeholder2,
_idProps: {
service: idService,
name: "Placeholder2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (model.variables.stepIn === 2),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._stepInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRightSide: false,
ContentClass: "mt-24",
StyleClass: "-paddingMedium text-center"
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
uuid: "24",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("Xi6V6omE40+9BS5nvg+rKg.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: "Valor total",
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("X4rPkEu_mEyL8IbTA44zrQ.Style"), function () {
return (((model.variables.balanceValueCustomStyleClassIn === "")) ? ("a-textBigLight mt-12") : (model.variables.balanceValueCustomStyleClassIn));
}, function () {
return model.variables.balanceValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("X4rPkEu_mEyL8IbTA44zrQ.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.amountSelectedVar, callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.amountSelectedVar;
}),
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("+_Vc5nO1rk2OmDPp46mm7A.Style"), function () {
return (((OS.BuiltinFunctions.trim(model.variables.balanceMessageIn) === "")) ? ("") : ("mt-16 h3 -regular c-gray6 d-block"));
}, function () {
return model.variables.balanceMessageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead",
value: "Saldo atual",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "a-textRead c-black mv-8",
value: model.getCachedValue(idService.getId("q7lMfOQTzUGkIwFZasiZFw.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.balanceValueIn, callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.balanceValueIn;
}),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("UQND12dJmEOfryjEqpE12w.Style"), function () {
return (((OS.BuiltinFunctions.trim(model.variables.balanceMessageIn) === "")) ? ("") : ("mt-16 h3 -regular c-gray6 d-block"));
}, function () {
return model.variables.balanceMessageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead",
value: "Resultante",
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "a-textRead c-black mv-8",
value: model.getCachedValue(idService.getId("z9+xEryjN0K2pGEXJJMbng.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.balanceValueIn.plus(model.variables.amountSelectedVar), callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.balanceValueIn;
}, function () {
return model.variables.amountSelectedVar;
}),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueInDataFetchStatus)
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.balanceValueIn), asPrimitiveValue(model.variables.balanceMessageIn), asPrimitiveValue(model.variables.balanceValueCustomStyleClassIn), asPrimitiveValue(model.variables.amountSelectedVar), asPrimitiveValue(model.variables._balanceValueInDataFetchStatus), asPrimitiveValue(model.variables._balanceMessageInDataFetchStatus), asPrimitiveValue(model.variables._balanceValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables.titleCustomStyleClassIn)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24 payments_container",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-white h6",
value: "Escolhe um método de pagamento",
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.ListItem, {
extendedProperties: {
"data-style-key": "N0K6Q8Qn4E6EirTNWb3NFg"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick_PayGeneral$Action(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.mBWAY, OS.BuiltinFunctions.integerToLongInteger(0), controller.callContext(eventHandlerContext));
});
;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-white text-left pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "sY8A0xxVsUOPKPXvU6imbg"
},
gridProperties: {
classes: "ThemeGrid_Width3"
},
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BALANCE_MBLOCKS.mbway.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "OQuM4yBi+0CBS0geMVlR5w"
},
gridProperties: {
classes: "ThemeGrid_Width9 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "XoLVTujTa0u_ILymyzL9DQ"
},
style: "a-textRead c-black -medium  vertical-align-span",
value: "MBWAY",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
}
}), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"data-style-key": "3LyD33o4mk+gbuMtJKBScw"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.walletCardsVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
"data-style-key": "4JBzkK+WAkG0Qoaxh3lXwQ"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick_PayGeneral$Action(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).paymentTypeIdAttr, model.variables.walletCardsVar.getCurrent(callContext.iterationContext).identifierAttr, controller.callContext(eventHandlerContext));
});
;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-white text-left pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "NbPQxXVYmEO4n0dJus622w"
},
gridProperties: {
classes: "ThemeGrid_Width3"
},
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).hasBankAttr, false, this, function () {
return [React.createElement(BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_view, {
inputs: {
Classes: "",
BinaryData: model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_BinaryAttr,
MimeType: model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_TypeAttr
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
uuid: "46",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if((model.variables.walletCardsVar.getCurrent(callContext.iterationContext).paymentTypeIdAttr === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.mASTECARD), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BALANCE_MBLOCKS.mastercard.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.walletCardsVar.getCurrent(callContext.iterationContext).paymentTypeIdAttr === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.vISA), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BALANCE_MBLOCKS.visa.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "A37xznWU30imNupHSEUZNQ"
},
gridProperties: {
classes: "ThemeGrid_Width9 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "oIrhYXB9lk6RJi+Atsohig"
},
style: "a-textRead c-black -medium  vertical-align-span",
value: model.variables.walletCardsVar.getCurrent(callContext.iterationContext).codeNumberAttr,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).codeNumberAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).paymentTypeIdAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_TypeAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_BinaryAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).hasBankAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: []
}), React.createElement(OSWidgets.ListItem, {
extendedProperties: {
"data-style-key": "0Y7N0+i0MEiQFyuXqfiD7g"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick_PayGeneral$Action(OS.BuiltinFunctions.nullIdentifier(), OS.BuiltinFunctions.integerToLongInteger(0), controller.callContext(eventHandlerContext));
});
;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-white text-left pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "AUKLTmqzS0Ce+1Czv9tLRQ"
},
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_Width12"
},
style: "a-textRead c-black -medium",
value: "Carregar com outro cartão",
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
}
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "App_Config_MBP.controller", "MobileUIWidgets.controller", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$NearestMultiple", "BALANCE_MBLOCKS.model$TopUpPresetValueList", "BALANCE_MBLOCKS.model$TopUpPresetValueRec", "BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecordList", "BALANCE_MBP.model$Local_TOP_UP_SELECTIONRec", "BALANCE_MBP.entities", "App_Config_MBP.controller$GetConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth$App_Config_MBP", "BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecord", "BALANCE_MBP.controller$CreateOrUpdateLocal_TOP_UP_SELECTION_Logic", "BALANCE_MBP.controller$CreateOrUpdateLastPaymentProcess", "BALANCE_MBP.controller$SetPaygateTopUpWithWalletCardsV2", "MobileUIWidgets.controller$Error", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$Balance_ClearCache", "BALANCE_MBLOCKS.model$STR_WalletCardsList", "BALANCE_MBP.controller$GetAllCards"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, App_Config_MBPController, MobileUIWidgetsController, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._fillTopUpPresetValueList$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("FillTopUpPresetValueList");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.FillTopUpPresetValueList$vars"))());
var listIndexOfAmountByPrevAmtVar = new OS.DataTypes.VariableHolder();
var listIndexOfDefaultVar = new OS.DataTypes.VariableHolder();
var listIndexOfAmountVar = new OS.DataTypes.VariableHolder();
var getPreviousTopUpSelectionVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecordList))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(((((((((((((((((("Curr Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "Payment Min Value: ") + OS.BuiltinFunctions.decimalToText(model.variables.paymentMethodMinValueIn)) + "\r\n") + "Payment Max Value: ") + OS.BuiltinFunctions.decimalToText(model.variables.paymentMethodMaxValueIn)) + "\r\n") + "Default Value: ") + OS.BuiltinFunctions.decimalToText(model.variables.topUpValueListDefaultValueIn)) + "\r\n") + "Step: ") + OS.BuiltinFunctions.decimalToText(model.variables.topUpValueListStepIn)) + "\r\n") + "Length: ") + (model.variables.topUpValueListLengthIn).toString()) + "\r\n"), "SELFCARE_MBLOCKS", callContext);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.topUpPresetValueListVar, callContext);
// Counter = Length?
while ((!((vars.value.counterVar === model.variables.topUpValueListLengthIn)))) {
// TopUpPresetValueRec
// TopUpPresetValueRec.PresetId = IntegerToIdentifier
vars.value.topUpPresetValueRecVar.presetIdAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.integerToIdentifier((vars.value.counterVar + 1)));
// TopUpPresetValueRec.Amount = If
vars.value.topUpPresetValueRecVar.amountAttr = (((vars.value.counterVar === 0)) ? (model.variables.topUpValueListDefaultValueIn) : (((OS.BuiltinFunctions.mod(OS.BuiltinFunctions.round(model.variables.topUpPresetValueListVar.getItem((vars.value.counterVar - 1)).amountAttr.plus(model.variables.topUpValueListStepIn), 0), model.variables.topUpValueListStepIn).equals(OS.BuiltinFunctions.integerToDecimal(0))) ? (OS.BuiltinFunctions.round(model.variables.topUpPresetValueListVar.getItem((vars.value.counterVar - 1)).amountAttr, 0).plus(model.variables.topUpValueListStepIn)) : (BALANCE_MBPController.default.nearestMultiple$Action(model.variables.topUpPresetValueListVar.getItem((vars.value.counterVar - 1)).amountAttr, model.variables.topUpValueListStepIn, callContext.withoutIterationContext()).outputValueOut))));
// TopUpPresetValueRec.Label = FormatCurrency_MBP(TopUpPresetValueRec.Amount)
vars.value.topUpPresetValueRecVar.labelAttr = BALANCE_MBPController.default.formatCurrency_MBP$Action(vars.value.topUpPresetValueRecVar.amountAttr, callContext.withoutIterationContext()).resultOut;
// TopUpPresetValueRec.IsDefault = TopUpPresetValueRec.Amount = TopUpValueListDefaultValue
vars.value.topUpPresetValueRecVar.isDefaultAttr = vars.value.topUpPresetValueRecVar.amountAttr.equals(model.variables.topUpValueListDefaultValueIn);
// Execute Action: ListAppendLocalPayment
OS.SystemActions.listAppend(model.variables.topUpPresetValueListVar, vars.value.topUpPresetValueRecVar, callContext);
// Counter++
// Counter = Counter + 1
vars.value.counterVar = (vars.value.counterVar + 1);
}

// TopUpPresetValueRec
// TopUpPresetValueRec.PresetId = NullIdentifier
vars.value.topUpPresetValueRecVar.presetIdAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// TopUpPresetValueRec.IsDefault = False
vars.value.topUpPresetValueRecVar.isDefaultAttr = false;
// TopUpPresetValueRec.Label = "Outro"
vars.value.topUpPresetValueRecVar.labelAttr = "Outro";
// TopUpPresetValueRec.Amount = 0
vars.value.topUpPresetValueRecVar.amountAttr = OS.BuiltinFunctions.integerToDecimal(0);
// Execute Action: ListAppendOtherOption
OS.SystemActions.listAppend(model.variables.topUpPresetValueListVar, vars.value.topUpPresetValueRecVar, callContext);
// AmountSelected <> 0 ?
return OS.Flow.executeSequence(function () {
if((!(model.variables.amountSelectedVar.equals(OS.BuiltinFunctions.integerToDecimal(0))))) {
// Execute Action: ListIndexOfAmount
listIndexOfAmountVar.value = OS.SystemActions.listIndexOf(model.variables.topUpPresetValueListVar, function (p) {
return p.amountAttr.equals(model.variables.amountSelectedVar);
}, callContext);

// ListIndex <> -1
if((((listIndexOfAmountVar.value.positionOut) !== (-1)))) {
// TopUpPresetIdSelected = TopUpPresetValueList[ListIndexOfAmount.Position].PresetId
model.variables.topUpPresetIdSelectedVar = model.variables.topUpPresetValueListVar.getItem(listIndexOfAmountVar.value.positionOut).presetIdAttr;
} else {
// TopUpPresetIdSelected = NullIdentifier
model.variables.topUpPresetIdSelectedVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// ShowOtherValueBlock = True
model.variables.showOtherValueBlockVar = true;
}

// dummy
// dummy
} else {
// Aggregate: GetPreviousTopUpSelection
var getPreviousTopUpSelectionAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstMSISDN = model.variables.phoneNumberIn;

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
selectSql += "\"ENLocal_TOP_UP_SELECTION\".\"Id\" o0, \"ENLocal_TOP_UP_SELECTION\".\"MSISDN\" o1, \"ENLocal_TOP_UP_SELECTION\".\"Instant\" o2, \"ENLocal_TOP_UP_SELECTION\".\"Amount\" o3, \"ENLocal_TOP_UP_SELECTION\".\"Message\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_TOP_UP_SELECTION\" \"ENLocal_TOP_UP_SELECTION\"";
fromAndWhereSql += " WHERE (\"ENLocal_TOP_UP_SELECTION\".\"MSISDN\" = :qpstMSISDN)";
orderBySql += " ORDER BY \"ENLocal_TOP_UP_SELECTION\".\"Instant\" DESC ";
argsList.add("qpstMSISDN", /*TEXT*/ 0, qpstMSISDN);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_TOP_UP_SELECTIONAttr",
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
return getPreviousTopUpSelectionVar.value;
});
};
return getPreviousTopUpSelectionAggr().then(function () {
// GetPreviousTopUpSelection.Empty?
if((getPreviousTopUpSelectionVar.value.listOut.isEmpty)) {
// Execute Action: ListIndexOfDefault
listIndexOfDefaultVar.value = OS.SystemActions.listIndexOf(model.variables.topUpPresetValueListVar, function (p) {
return (p.isDefaultAttr === true);
}, callContext);

// ListIndex <> -1
if((((listIndexOfDefaultVar.value.positionOut) !== (-1)))) {
// TopUpPresetIdSelected = TopUpPresetValueList[ListIndexOfDefault.Position].PresetId
model.variables.topUpPresetIdSelectedVar = model.variables.topUpPresetValueListVar.getItem(listIndexOfDefaultVar.value.positionOut).presetIdAttr;
// AmountSelected = TopUpPresetValueList[ListIndexOfDefault.Position].Amount
model.variables.amountSelectedVar = model.variables.topUpPresetValueListVar.getItem(listIndexOfDefaultVar.value.positionOut).amountAttr;
return OS.Flow.breakAsync();
} else {
return OS.Flow.breakAsync();
}

} else {
// Execute Action: ListIndexOfAmountByPrevAmt
listIndexOfAmountByPrevAmtVar.value = OS.SystemActions.listIndexOf(model.variables.topUpPresetValueListVar, function (p) {
return p.amountAttr.equals(getPreviousTopUpSelectionVar.value.listOut.getCurrent(callContext.iterationContext).local_TOP_UP_SELECTIONAttr.amountAttr);
}, callContext);

// ListIndex = -1
if(((listIndexOfAmountByPrevAmtVar.value.positionOut === -1))) {
// TopUpPresetIdSelected = NullIdentifier
model.variables.topUpPresetIdSelectedVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// AmountSelected = 0
model.variables.amountSelectedVar = OS.BuiltinFunctions.integerToDecimal(0);
// ShowOtherValueBlock = True
model.variables.showOtherValueBlockVar = true;
} else {
// TopUpPresetIdSelected = TopUpPresetValueList[ListIndexOfAmountByPrevAmt.Position].PresetId
model.variables.topUpPresetIdSelectedVar = model.variables.topUpPresetValueListVar.getItem(listIndexOfAmountByPrevAmtVar.value.positionOut).presetIdAttr;
// AmountSelected = GetPreviousTopUpSelection.List.Current.Local_TOP_UP_SELECTION.Amount
model.variables.amountSelectedVar = getPreviousTopUpSelectionVar.value.listOut.getCurrent(callContext.iterationContext).local_TOP_UP_SELECTIONAttr.amountAttr;
}

}

});
}

}).then(function () {
// dummy
// dummy
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: Trg_AmountSelected
return controller.event_AmountChanged$Action(model.variables.amountSelectedVar, "", callContext);
}

});
});
});
};
Controller.registerVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.FillTopUpPresetValueList$vars", [{
name: "Counter",
attrName: "counterVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "TopUpPresetValueRec",
attrName: "topUpPresetValueRecVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.TopUpPresetValueRec();
},
complexType: BALANCE_MBLOCKSModel.TopUpPresetValueRec
}]);
Controller.prototype._onClick_TopUpValue$Action = function (presetIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnClick_TopUpValue");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.OnClick_TopUpValue$vars"))());
vars.value.presetIdInLocal = presetIdIn;
var listIndexOfVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// TopUpPresetIdSelected = PresetId
model.variables.topUpPresetIdSelectedVar = vars.value.presetIdInLocal;
if((model.variables.topUpPresetIdSelectedVar.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
// ShowOtherValueBlock = True
model.variables.showOtherValueBlockVar = true;
// AmountSelected = 0
model.variables.amountSelectedVar = OS.BuiltinFunctions.integerToDecimal(0);
} else {
// ShowOtherValueBlock = False
model.variables.showOtherValueBlockVar = false;
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.topUpPresetValueListVar, function (p) {
return p.presetIdAttr.equals(model.variables.topUpPresetIdSelectedVar);
}, callContext);

// ListIndex
if((((listIndexOfVar.value.positionOut) !== (-1)))) {
// AmountSelected = TopUpPresetValueList[ListIndexOf.Position].Amount
model.variables.amountSelectedVar = model.variables.topUpPresetValueListVar.getItem(listIndexOfVar.value.positionOut).amountAttr;
}

}

return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: Trg_AmountSelected
return controller.event_AmountChanged$Action(model.variables.amountSelectedVar, "Escolher_opcao", callContext);
}

});
});
};
Controller.registerVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.OnClick_TopUpValue$vars", [{
name: "PresetId",
attrName: "presetIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var getConfigValueAsText_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.isReadyToRunIn)) {
// Execute Action: GetConfigValueAsText_MBP
model.flush();
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(model.variables.applicationIn, "LABEL_NIF_ERRO", callContext).then(function (value) {
getConfigValueAsText_MBPVar.value = value;
}).then(function () {
// Execute Action: FillTopUpPresetValueList
return controller._fillTopUpPresetValueList$Action(callContext);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: EndLoading
return controller.endLoading$Action(callContext);
}

});
});
}

});
});
};
Controller.prototype._onClick_PayGeneral$Action = function (paymentTypeIdIn, identifierIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnClick_PayGeneral");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.OnClick_PayGeneral$vars"))());
vars.value.paymentTypeIdInLocal = paymentTypeIdIn;
vars.value.identifierInLocal = identifierIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createOrUpdateLocal_TOP_UP_SELECTION_LogicVar = new OS.DataTypes.VariableHolder();
var getConfigValueAsText_MBP_GenericErrorVar = new OS.DataTypes.VariableHolder();
var setPaygateTopUpWithWalletCardsV2Var = new OS.DataTypes.VariableHolder();
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
var getPreviousTopUpSelectionVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: StartLoading
return controller.startLoading$Action(callContext).then(function () {
// Aggregate: GetPreviousTopUpSelection
var getPreviousTopUpSelectionAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstMSISDN = model.variables.phoneNumberIn;

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
selectSql += "\"ENLocal_TOP_UP_SELECTION\".\"Id\" o0, \"ENLocal_TOP_UP_SELECTION\".\"MSISDN\" o1, \"ENLocal_TOP_UP_SELECTION\".\"Instant\" o2, \"ENLocal_TOP_UP_SELECTION\".\"Amount\" o3, \"ENLocal_TOP_UP_SELECTION\".\"Message\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_TOP_UP_SELECTION\" \"ENLocal_TOP_UP_SELECTION\"";
fromAndWhereSql += " WHERE (\"ENLocal_TOP_UP_SELECTION\".\"MSISDN\" = :qpstMSISDN)";
orderBySql += " ORDER BY \"ENLocal_TOP_UP_SELECTION\".\"Instant\" DESC ";
argsList.add("qpstMSISDN", /*TEXT*/ 0, qpstMSISDN);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_TOP_UP_SELECTIONAttr",
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
return getPreviousTopUpSelectionVar.value;
});
};
return getPreviousTopUpSelectionAggr();
}).then(function () {
// SetLocalPhoneCharge
// GetPreviousTopUpSelection.List.Current.Local_TOP_UP_SELECTION.MSISDN = PhoneNumber
getPreviousTopUpSelectionVar.value.listOut.getCurrent(callContext.iterationContext).local_TOP_UP_SELECTIONAttr.mSISDNAttr = model.variables.phoneNumberIn;
// GetPreviousTopUpSelection.List.Current.Local_TOP_UP_SELECTION.Instant = CurrDateTime
getPreviousTopUpSelectionVar.value.listOut.getCurrent(callContext.iterationContext).local_TOP_UP_SELECTIONAttr.instantAttr = OS.BuiltinFunctions.currDateTime();
// GetPreviousTopUpSelection.List.Current.Local_TOP_UP_SELECTION.Amount = AmountSelected
getPreviousTopUpSelectionVar.value.listOut.getCurrent(callContext.iterationContext).local_TOP_UP_SELECTIONAttr.amountAttr = model.variables.amountSelectedVar;
// GetPreviousTopUpSelection.List.Current.Local_TOP_UP_SELECTION.Message = BalanceMessage
getPreviousTopUpSelectionVar.value.listOut.getCurrent(callContext.iterationContext).local_TOP_UP_SELECTIONAttr.messageAttr = model.variables.balanceMessageIn;
// Execute Action: CreateOrUpdateLocal_TOP_UP_SELECTION_Logic
model.flush();
return BALANCE_MBPController.default.createOrUpdateLocal_TOP_UP_SELECTION_Logic$Action(getPreviousTopUpSelectionVar.value.listOut.getCurrent(callContext.iterationContext), callContext).then(function (value) {
createOrUpdateLocal_TOP_UP_SELECTION_LogicVar.value = value;
});
}).then(function () {
// Execute Action: SetPaygateTopUpWithWalletCardsV2
model.flush();
return BALANCE_MBPController.default.setPaygateTopUpWithWalletCardsV2$Action(model.variables.refreshTokenIn, model.variables.associationIDIn, model.variables.amountSelectedVar, model.variables.paymentProcessIDIn, model.variables.phoneNumberIn, "", OS.BuiltinFunctions.decimalToText(model.variables.balanceValueIn), model.variables.personNameIn, model.variables.contactPhoneNumberIn, model.variables.applicationIn, vars.value.paymentTypeIdInLocal, vars.value.identifierInLocal, callContext).then(function (value) {
setPaygateTopUpWithWalletCardsV2Var.value = value;
});
}).then(function () {
// Success?
return OS.Flow.executeSequence(function () {
if((setPaygateTopUpWithWalletCardsV2Var.value.operationSucessOut)) {
// Trigger Event: Event_ClickCarregarSuccessWalletCard_Analytics
return controller.event_ClickCarregarSuccessWalletCard_Analytics$Action((((((vars.value.paymentTypeIdInLocal === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.vISA) || (vars.value.paymentTypeIdInLocal === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.mASTECARD)) && !(vars.value.identifierInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0))))) ? ((("Cartão " + (((vars.value.paymentTypeIdInLocal === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.vISA)) ? ("VISA") : ("MASTERCARD"))) + " guardado previamente.")) : ((((vars.value.paymentTypeIdInLocal === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.vISA)) ? ("VISA") : ((((vars.value.paymentTypeIdInLocal === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.mASTECARD)) ? ("MASTERCARD") : ("MBWAY")))))), callContext).then(function () {
// Execute Action: CreateOrUpdateLastPaymentProcess
model.flush();
return BALANCE_MBPController.default.createOrUpdateLastPaymentProcess$Action("BALANCE", false, model.variables.phoneNumberIn, callContext);
}).then(function () {
// Execute Action: Balance_ClearCache
model.flush();
return BALANCE_MBPController.default.balance_ClearCache$Action(callContext).then(function (value) {
balance_ClearCacheVar.value = value;
});
}).then(function () {
// Trigger Event: Event_ClickCarregarSuccess
return controller.event_ClickCarregarSuccess$Action(callContext);
}).then(function () {
// IsWalletCard?
return OS.Flow.executeSequence(function () {
if(((((vars.value.paymentTypeIdInLocal === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.vISA) || (vars.value.paymentTypeIdInLocal === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.mASTECARD)) && !(vars.value.identifierInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(0)))))) {
// Trigger Event: Event_ClickCarregarSuccessWalletCard
return controller.event_ClickCarregarSuccessWalletCard$Action((((BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.vISA === vars.value.paymentTypeIdInLocal)) ? ("VISA") : ("MASTERCARD")), callContext).then(function () {
// Trigger Event: EndLoading
return controller.endLoading$Action(callContext);
});
} else {
// Destination: /BALANCE_MBLOCKS/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(setPaygateTopUpWithWalletCardsV2Var.value.paymentUrlOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
} else {
// Execute Action: GetConfigValueAsText_MBP_GenericError
model.flush();
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(model.variables.applicationIn, "Message_GenericError", callContext).then(function (value) {
getConfigValueAsText_MBP_GenericErrorVar.value = value;
}).then(function () {
// Execute Action: Error
MobileUIWidgetsController.default.error$Action(getConfigValueAsText_MBP_GenericErrorVar.value.valueOut, callContext);
// Trigger Event: EndLoading2
return controller.endLoading$Action(callContext);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("TopUpBlockWithWalletCardV2.OnClick_PayGeneral", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
return OS.Flow.returnAsync();

} else {
// Trigger Event: EndLoading_Exceptoion
return controller.endLoading$Action(callContext).then(function () {
return OS.Flow.returnAsync();

});
}

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpBlockWithWalletCardV2.OnClick_PayGeneral$vars", [{
name: "PaymentTypeId",
attrName: "paymentTypeIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Identifier",
attrName: "identifierInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._onChange_AmountSelected$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnChange_AmountSelected");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: Trg_AmountSelected
return controller.event_AmountChanged$Action(model.variables.amountSelectedVar, "Outro_valor", callContext);
}

});
});
};
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// IsDestroyed = True
model.variables.isDestroyedVar = true;
};
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getAllCardsVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage((((("TopUpBlock - BalanceValue [" + OS.BuiltinFunctions.decimalToText(model.variables.balanceValueIn)) + "] BalanceMessage [") + model.variables.balanceMessageIn) + "]"), "ChargePh", callContext);
// Execute Action: GetAllCards
model.flush();
return BALANCE_MBPController.default.getAllCards$Action(model.variables.refreshTokenIn, model.variables.applicationIn, model.variables.phoneNumberIn, model.variables.associationIDIn, callContext).then(function (value) {
getAllCardsVar.value = value;
}).then(function () {
// WalletCards = GetAllCards.WalletCards
model.variables.walletCardsVar = getAllCardsVar.value.walletCardsOut;
});
});
};

Controller.prototype.fillTopUpPresetValueList$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fillTopUpPresetValueList$Action, callContext);

};
Controller.prototype.onClick_TopUpValue$Action = function (presetIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_TopUpValue$Action, callContext, presetIdIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onClick_PayGeneral$Action = function (paymentTypeIdIn, identifierIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_PayGeneral$Action, callContext, paymentTypeIdIn, identifierIn);

};
Controller.prototype.onChange_AmountSelected$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onChange_AmountSelected$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.event_ClickCarregarSuccessWalletCard$Action = function () {
return Promise.resolve();
};
Controller.prototype.endLoading$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_ClickCarregarSuccessWalletCard_Analytics$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_AmountChanged$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_ClickCarregarSuccess$Action = function () {
return Promise.resolve();
};
Controller.prototype.startLoading$Action = function () {
return Promise.resolve();
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
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return BALANCE_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, BALANCE_MBLOCKSLanguageResources);
});

