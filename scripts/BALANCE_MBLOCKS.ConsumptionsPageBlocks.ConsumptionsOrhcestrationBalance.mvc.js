define("BALANCE_MBLOCKS.ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "BALANCE_MBLOCKS.BalanceBlocks.CashOrchestrationCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsBalance.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.CreditConsumptionsOrchestrationCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.UnidentifiedBalanceMessages.mvc$model", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.controller$ReplaceBalanceTagsWithValue", "BALANCE_MBLOCKS.controller$ReplaceBalancePipesWithValue", "BALANCE_MBP.controller$GetBalanceLines_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BALANCE_INFOList", "BALANCE_MBP.controller$GetBalanceConfigInfo", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec", "BALANCE_MBLOCKS.controller$GetBalanceAPPConfig", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecordList", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList", "BALANCE_MBLOCKS.model$STR_Balance_CreditList", "BALANCE_MBLOCKS.model$STR_BalanceCashStructList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecord", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBP.entities"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_UnidentifiedBalanceMessages_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("CreditMessageList", "creditMessageListVar", "CreditMessageList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, OS.DataTypes.TextList), 
this.attr("BalanceCreditGraphList", "balanceCreditGraphListVar", "BalanceCreditGraphList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_CreditList());
}, BALANCE_MBLOCKSModel.STR_Balance_CreditList), 
this.attr("BalanceList", "balanceListVar", "BalanceList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList), 
this.attr("BalanceCashList", "balanceCashListVar", "BalanceCashList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceCashStructList());
}, BALANCE_MBLOCKSModel.STR_BalanceCashStructList), 
this.attr("BalanceCashDescription", "balanceCashDescriptionVar", "BalanceCashDescription", true, OS.Types.Text, function () {
return "";
}), 
this.attr("MinSMSType", "minSMSTypeVar", "MinSMSType", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PositionTagList", "positionTagListVar", "PositionTagList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, OS.DataTypes.TextList), 
this.attr("MessageGroup", "messageGroupVar", "MessageGroup", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IntegrationSuccessful", "integrationSuccessfulVar", "IntegrationSuccessful", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("BalanceGroupMoney", "balanceGroupMoneyVar", "BalanceGroupMoney", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceTagCodes", "balanceTagCodesVar", "BalanceTagCodes", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec), 
this.attr("BalanceCardTypeCodes", "balanceCardTypeCodesVar", "BalanceCardTypeCodes", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec), 
this.attr("BalanceAttributesCodes", "balanceAttributesCodesVar", "BalanceAttributesCodes", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec), 
this.attr("TempLocalBalance", "tempLocalBalanceVar", "TempLocalBalance", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec), 
this.attr("TempLocalCashBalance", "tempLocalCashBalanceVar", "TempLocalCashBalance", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceCashStructRec), 
this.attr("BalanceListAux", "balanceListAuxVar", "BalanceListAux", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList), 
this.attr("BalanceCreditListAux", "balanceCreditListAuxVar", "BalanceCreditListAux", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_CreditList());
}, BALANCE_MBLOCKSModel.STR_Balance_CreditList), 
this.attr("BalanceTagCodesEmpty", "balanceTagCodesEmptyVar", "BalanceTagCodesEmpty", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec), 
this.attr("BalanceCardTypeCodesEmpty", "balanceCardTypeCodesEmptyVar", "BalanceCardTypeCodesEmpty", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec), 
this.attr("BalanceAttributesCodesEmpty", "balanceAttributesCodesEmptyVar", "BalanceAttributesCodesEmpty", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec), 
this.attr("IsDestroyed", "isDestroyedVar", "IsDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("FirstPositionAddOnCard", "firstPositionAddOnCardVar", "FirstPositionAddOnCard", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsReadyToRun", "isReadyToRunIn", "IsReadyToRun", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isReadyToRunInDataFetchStatus", "_isReadyToRunInDataFetchStatus", "_isReadyToRunInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MSISDN", "mSISDNIn", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_mSISDNInDataFetchStatus", "_mSISDNInDataFetchStatus", "_mSISDNInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PageCode", "pageCodeIn", "PageCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pageCodeInDataFetchStatus", "_pageCodeInDataFetchStatus", "_pageCodeInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("Application", "applicationIn", "Application", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationInDataFetchStatus", "_applicationInDataFetchStatus", "_applicationInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CacheValidationInterval", "cacheValidationIntervalIn", "CacheValidationInterval", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_cacheValidationIntervalInDataFetchStatus", "_cacheValidationIntervalInDataFetchStatus", "_cacheValidationIntervalInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ChartBackgroundColor", "chartBackgroundColorIn", "ChartBackgroundColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_chartBackgroundColorInDataFetchStatus", "_chartBackgroundColorInDataFetchStatus", "_chartBackgroundColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ChartBorderMarkerBackgroundColor", "chartBorderMarkerBackgroundColorIn", "ChartBorderMarkerBackgroundColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_chartBorderMarkerBackgroundColorInDataFetchStatus", "_chartBorderMarkerBackgroundColorInDataFetchStatus", "_chartBorderMarkerBackgroundColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ChartMarkerTriangleColor", "chartMarkerTriangleColorIn", "ChartMarkerTriangleColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_chartMarkerTriangleColorInDataFetchStatus", "_chartMarkerTriangleColorInDataFetchStatus", "_chartMarkerTriangleColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleCustomStyleClass", "titleCustomStyleClassIn", "TitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ConsumptionsGraphCustomStyleClass", "consumptionsGraphCustomStyleClassIn", "ConsumptionsGraphCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_consumptionsGraphCustomStyleClassInDataFetchStatus", "_consumptionsGraphCustomStyleClassInDataFetchStatus", "_consumptionsGraphCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableTitleCustomStyleClass", "availableTitleCustomStyleClassIn", "AvailableTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableTitleCustomStyleClassInDataFetchStatus", "_availableTitleCustomStyleClassInDataFetchStatus", "_availableTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableValueCustomStyleClass", "availableValueCustomStyleClassIn", "AvailableValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableValueCustomStyleClassInDataFetchStatus", "_availableValueCustomStyleClassInDataFetchStatus", "_availableValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SpentTitleCustomStyleClass", "spentTitleCustomStyleClassIn", "SpentTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_spentTitleCustomStyleClassInDataFetchStatus", "_spentTitleCustomStyleClassInDataFetchStatus", "_spentTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SpentValueCustomStyleClass", "spentValueCustomStyleClassIn", "SpentValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_spentValueCustomStyleClassInDataFetchStatus", "_spentValueCustomStyleClassInDataFetchStatus", "_spentValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableBalanceCustomStyleClass", "availableBalanceCustomStyleClassIn", "AvailableBalanceCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableBalanceCustomStyleClassInDataFetchStatus", "_availableBalanceCustomStyleClassInDataFetchStatus", "_availableBalanceCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableBalanceTitleCustomStyleClass", "availableBalanceTitleCustomStyleClassIn", "AvailableBalanceTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableBalanceTitleCustomStyleClassInDataFetchStatus", "_availableBalanceTitleCustomStyleClassInDataFetchStatus", "_availableBalanceTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GeneralBalanceCustomStyleClass", "generalBalanceCustomStyleClassIn", "GeneralBalanceCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_generalBalanceCustomStyleClassInDataFetchStatus", "_generalBalanceCustomStyleClassInDataFetchStatus", "_generalBalanceCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GeneralBalanceTitleCustomStyleClass", "generalBalanceTitleCustomStyleClassIn", "GeneralBalanceTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_generalBalanceTitleCustomStyleClassInDataFetchStatus", "_generalBalanceTitleCustomStyleClassInDataFetchStatus", "_generalBalanceTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopTitleCustomStyleClass", "topTitleCustomStyleClassIn", "TopTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topTitleCustomStyleClassInDataFetchStatus", "_topTitleCustomStyleClassInDataFetchStatus", "_topTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopCustomClass", "topCustomClassIn", "TopCustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topCustomClassInDataFetchStatus", "_topCustomClassInDataFetchStatus", "_topCustomClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopBalanceValueCustomStyleClass", "topBalanceValueCustomStyleClassIn", "TopBalanceValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topBalanceValueCustomStyleClassInDataFetchStatus", "_topBalanceValueCustomStyleClassInDataFetchStatus", "_topBalanceValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopBalanceMessageCustomStyleClass", "topBalanceMessageCustomStyleClassIn", "TopBalanceMessageCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topBalanceMessageCustomStyleClassInDataFetchStatus", "_topBalanceMessageCustomStyleClassInDataFetchStatus", "_topBalanceMessageCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ListCustomClass", "listCustomClassIn", "ListCustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_listCustomClassInDataFetchStatus", "_listCustomClassInDataFetchStatus", "_listCustomClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowContent", "showContentIn", "ShowContent", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showContentInDataFetchStatus", "_showContentInDataFetchStatus", "_showContentInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (((BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvcModel.hasValidationWidgets || BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_UnidentifiedBalanceMessages_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsReadyToRun" in inputs) {
this.variables.isReadyToRunIn = inputs.IsReadyToRun;
if("_isReadyToRunInDataFetchStatus" in inputs) {
this.variables._isReadyToRunInDataFetchStatus = inputs._isReadyToRunInDataFetchStatus;
}

}

if("MSISDN" in inputs) {
this.variables.mSISDNIn = inputs.MSISDN;
if("_mSISDNInDataFetchStatus" in inputs) {
this.variables._mSISDNInDataFetchStatus = inputs._mSISDNInDataFetchStatus;
}

}

if("PageCode" in inputs) {
this.variables.pageCodeIn = inputs.PageCode;
if("_pageCodeInDataFetchStatus" in inputs) {
this.variables._pageCodeInDataFetchStatus = inputs._pageCodeInDataFetchStatus;
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

if("Application" in inputs) {
this.variables.applicationIn = inputs.Application;
if("_applicationInDataFetchStatus" in inputs) {
this.variables._applicationInDataFetchStatus = inputs._applicationInDataFetchStatus;
}

}

if("CacheValidationInterval" in inputs) {
this.variables.cacheValidationIntervalIn = inputs.CacheValidationInterval;
if("_cacheValidationIntervalInDataFetchStatus" in inputs) {
this.variables._cacheValidationIntervalInDataFetchStatus = inputs._cacheValidationIntervalInDataFetchStatus;
}

}

if("ChartBackgroundColor" in inputs) {
this.variables.chartBackgroundColorIn = inputs.ChartBackgroundColor;
if("_chartBackgroundColorInDataFetchStatus" in inputs) {
this.variables._chartBackgroundColorInDataFetchStatus = inputs._chartBackgroundColorInDataFetchStatus;
}

}

if("ChartBorderMarkerBackgroundColor" in inputs) {
this.variables.chartBorderMarkerBackgroundColorIn = inputs.ChartBorderMarkerBackgroundColor;
if("_chartBorderMarkerBackgroundColorInDataFetchStatus" in inputs) {
this.variables._chartBorderMarkerBackgroundColorInDataFetchStatus = inputs._chartBorderMarkerBackgroundColorInDataFetchStatus;
}

}

if("ChartMarkerTriangleColor" in inputs) {
this.variables.chartMarkerTriangleColorIn = inputs.ChartMarkerTriangleColor;
if("_chartMarkerTriangleColorInDataFetchStatus" in inputs) {
this.variables._chartMarkerTriangleColorInDataFetchStatus = inputs._chartMarkerTriangleColorInDataFetchStatus;
}

}

if("TitleCustomStyleClass" in inputs) {
this.variables.titleCustomStyleClassIn = inputs.TitleCustomStyleClass;
if("_titleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._titleCustomStyleClassInDataFetchStatus = inputs._titleCustomStyleClassInDataFetchStatus;
}

}

if("ConsumptionsGraphCustomStyleClass" in inputs) {
this.variables.consumptionsGraphCustomStyleClassIn = inputs.ConsumptionsGraphCustomStyleClass;
if("_consumptionsGraphCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._consumptionsGraphCustomStyleClassInDataFetchStatus = inputs._consumptionsGraphCustomStyleClassInDataFetchStatus;
}

}

if("AvailableTitleCustomStyleClass" in inputs) {
this.variables.availableTitleCustomStyleClassIn = inputs.AvailableTitleCustomStyleClass;
if("_availableTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableTitleCustomStyleClassInDataFetchStatus = inputs._availableTitleCustomStyleClassInDataFetchStatus;
}

}

if("AvailableValueCustomStyleClass" in inputs) {
this.variables.availableValueCustomStyleClassIn = inputs.AvailableValueCustomStyleClass;
if("_availableValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableValueCustomStyleClassInDataFetchStatus = inputs._availableValueCustomStyleClassInDataFetchStatus;
}

}

if("SpentTitleCustomStyleClass" in inputs) {
this.variables.spentTitleCustomStyleClassIn = inputs.SpentTitleCustomStyleClass;
if("_spentTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._spentTitleCustomStyleClassInDataFetchStatus = inputs._spentTitleCustomStyleClassInDataFetchStatus;
}

}

if("SpentValueCustomStyleClass" in inputs) {
this.variables.spentValueCustomStyleClassIn = inputs.SpentValueCustomStyleClass;
if("_spentValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._spentValueCustomStyleClassInDataFetchStatus = inputs._spentValueCustomStyleClassInDataFetchStatus;
}

}

if("AvailableBalanceCustomStyleClass" in inputs) {
this.variables.availableBalanceCustomStyleClassIn = inputs.AvailableBalanceCustomStyleClass;
if("_availableBalanceCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableBalanceCustomStyleClassInDataFetchStatus = inputs._availableBalanceCustomStyleClassInDataFetchStatus;
}

}

if("AvailableBalanceTitleCustomStyleClass" in inputs) {
this.variables.availableBalanceTitleCustomStyleClassIn = inputs.AvailableBalanceTitleCustomStyleClass;
if("_availableBalanceTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableBalanceTitleCustomStyleClassInDataFetchStatus = inputs._availableBalanceTitleCustomStyleClassInDataFetchStatus;
}

}

if("GeneralBalanceCustomStyleClass" in inputs) {
this.variables.generalBalanceCustomStyleClassIn = inputs.GeneralBalanceCustomStyleClass;
if("_generalBalanceCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._generalBalanceCustomStyleClassInDataFetchStatus = inputs._generalBalanceCustomStyleClassInDataFetchStatus;
}

}

if("GeneralBalanceTitleCustomStyleClass" in inputs) {
this.variables.generalBalanceTitleCustomStyleClassIn = inputs.GeneralBalanceTitleCustomStyleClass;
if("_generalBalanceTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._generalBalanceTitleCustomStyleClassInDataFetchStatus = inputs._generalBalanceTitleCustomStyleClassInDataFetchStatus;
}

}

if("TopTitleCustomStyleClass" in inputs) {
this.variables.topTitleCustomStyleClassIn = inputs.TopTitleCustomStyleClass;
if("_topTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._topTitleCustomStyleClassInDataFetchStatus = inputs._topTitleCustomStyleClassInDataFetchStatus;
}

}

if("TopCustomClass" in inputs) {
this.variables.topCustomClassIn = inputs.TopCustomClass;
if("_topCustomClassInDataFetchStatus" in inputs) {
this.variables._topCustomClassInDataFetchStatus = inputs._topCustomClassInDataFetchStatus;
}

}

if("TopBalanceValueCustomStyleClass" in inputs) {
this.variables.topBalanceValueCustomStyleClassIn = inputs.TopBalanceValueCustomStyleClass;
if("_topBalanceValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._topBalanceValueCustomStyleClassInDataFetchStatus = inputs._topBalanceValueCustomStyleClassInDataFetchStatus;
}

}

if("TopBalanceMessageCustomStyleClass" in inputs) {
this.variables.topBalanceMessageCustomStyleClassIn = inputs.TopBalanceMessageCustomStyleClass;
if("_topBalanceMessageCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._topBalanceMessageCustomStyleClassInDataFetchStatus = inputs._topBalanceMessageCustomStyleClassInDataFetchStatus;
}

}

if("ListCustomClass" in inputs) {
this.variables.listCustomClassIn = inputs.ListCustomClass;
if("_listCustomClassInDataFetchStatus" in inputs) {
this.variables._listCustomClassInDataFetchStatus = inputs._listCustomClassInDataFetchStatus;
}

}

if("ShowContent" in inputs) {
this.variables.showContentIn = inputs.ShowContent;
if("_showContentInDataFetchStatus" in inputs) {
this.variables._showContentInDataFetchStatus = inputs._showContentInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance.mvc$model", "BALANCE_MBLOCKS.ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance.mvc$controller", "OutSystemsReactWidgets", "BALANCE_MBLOCKS.BalanceBlocks.CashOrchestrationCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsBalance.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.CreditConsumptionsOrchestrationCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.UnidentifiedBalanceMessages.mvc$view", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.controller$ReplaceBalanceTagsWithValue", "BALANCE_MBLOCKS.controller$ReplaceBalancePipesWithValue", "BALANCE_MBP.controller$GetBalanceLines_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BALANCE_INFOList", "BALANCE_MBP.controller$GetBalanceConfigInfo", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec", "BALANCE_MBLOCKS.controller$GetBalanceAPPConfig", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecordList", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList", "BALANCE_MBLOCKS.model$STR_Balance_CreditList", "BALANCE_MBLOCKS.model$STR_BalanceCashStructList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecord", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBP.entities"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, React, OSView, BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvc_model, BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvc_controller, OSWidgets, BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_UnidentifiedBalanceMessages_mvc_view) {
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
        View.displayName = "ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_UnidentifiedBalanceMessages_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(model.variables.showContentIn, false, this, function () {
return [$if(model.variables.balanceCashListVar.isEmpty, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.balanceCashListVar,
style: "list list-group -noBgd",
tag: "div",
_idProps: {
service: idService,
name: "CashList"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvc_view, {
inputs: {
TopBalanceValueCustomStyleClass: model.variables.topBalanceValueCustomStyleClassIn,
_topBalanceValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topBalanceValueCustomStyleClassInDataFetchStatus),
TopTitleCustomStyleClass: model.variables.topTitleCustomStyleClassIn,
_topTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topTitleCustomStyleClassInDataFetchStatus),
TopBalanceMessageCustomStyleClass: model.variables.topBalanceMessageCustomStyleClassIn,
_topBalanceMessageCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topBalanceMessageCustomStyleClassInDataFetchStatus),
TopCustomClass: model.variables.topCustomClassIn,
_topCustomClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topCustomClassInDataFetchStatus),
BalanceCash: model.variables.balanceCashListVar.getCurrent(callContext.iterationContext),
IsFirstRegister: model.getCachedValue(idService.getId("gGnDW0EwbkSq5uyc5ZQX9A.IsFirstRegister"), function () {
return (((model.variables.balanceCashListVar.getCurrentRowNumber(callContext.iterationContext) === 0)) ? (true) : (false));
}, function () {
return model.variables.balanceCashListVar.getCurrentRowNumber(callContext.iterationContext);
}),
ListCustomClass: model.variables.listCustomClassIn,
_listCustomClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listCustomClassInDataFetchStatus),
BalanceCashDescriptionIN: model.variables.balanceCashDescriptionVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
chargeBalanceEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.chargePhoneHandler$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.balanceCashDescriptionVar), asPrimitiveValue(model.variables.listCustomClassIn), asPrimitiveValue(model.variables.topCustomClassIn), asPrimitiveValue(model.variables.topBalanceMessageCustomStyleClassIn), asPrimitiveValue(model.variables.topTitleCustomStyleClassIn), asPrimitiveValue(model.variables._listCustomClassInDataFetchStatus), asPrimitiveValue(model.variables._topCustomClassInDataFetchStatus), asPrimitiveValue(model.variables._topBalanceMessageCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._topTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._topBalanceValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables.topBalanceValueCustomStyleClassIn)]
})];
}), $if(model.variables.balanceListVar.isEmpty, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.balanceListVar,
style: "list list-group -noBgd mt-24",
tag: "div",
_idProps: {
service: idService,
name: "BalanceGraphList"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvc_view, {
inputs: {
AvailableValueCustomStyleClass: model.variables.availableValueCustomStyleClassIn,
_availableValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
AvailableTitleCustomStyleClass: model.variables.availableTitleCustomStyleClassIn,
_availableTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
ChartMarkerTriangleColor: model.variables.chartMarkerTriangleColorIn,
_chartMarkerTriangleColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartMarkerTriangleColorInDataFetchStatus),
GeneralBalanceTitleCustomStyleClass: model.variables.generalBalanceTitleCustomStyleClassIn,
_generalBalanceTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._generalBalanceTitleCustomStyleClassInDataFetchStatus),
SpentValueCustomStyleClass: model.variables.spentValueCustomStyleClassIn,
_spentValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentValueCustomStyleClassInDataFetchStatus),
SpentTitleCustomStyleClass: model.variables.spentTitleCustomStyleClassIn,
_spentTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentTitleCustomStyleClassInDataFetchStatus),
AvailableBalanceTitleCustomStyleClass: model.variables.availableBalanceTitleCustomStyleClassIn,
_availableBalanceTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableBalanceTitleCustomStyleClassInDataFetchStatus),
ChartBorderMarkerBackgroundColor: model.variables.chartBorderMarkerBackgroundColorIn,
_chartBorderMarkerBackgroundColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartBorderMarkerBackgroundColorInDataFetchStatus),
GeneralBalanceCustomStyleClass: model.variables.generalBalanceCustomStyleClassIn,
_generalBalanceCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._generalBalanceCustomStyleClassInDataFetchStatus),
IsShowAddOns: true,
ConsumptionsGraphCustomStyleClass: model.variables.consumptionsGraphCustomStyleClassIn,
_consumptionsGraphCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._consumptionsGraphCustomStyleClassInDataFetchStatus),
BalanceOrchestrationStruct: model.variables.balanceListVar.getCurrent(callContext.iterationContext),
IsShowTitleAddOns: (model.variables.balanceListVar.getCurrentRowNumber(callContext.iterationContext) === model.variables.firstPositionAddOnCardVar),
TitleCustomStyleClass: model.variables.titleCustomStyleClassIn,
_titleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
ChartBackgroundColor: model.variables.chartBackgroundColorIn,
_chartBackgroundColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartBackgroundColorInDataFetchStatus),
InternetCardCode: model.variables.balanceCardTypeCodesVar.internetCardCodeAttr,
MinutesCardCode: model.variables.balanceCardTypeCodesVar.minutesCardCodeAttr,
AddOnsCardCode: model.variables.balanceCardTypeCodesVar.addOnsCardCodeAttr,
GeneralCardCode: model.variables.balanceCardTypeCodesVar.generalCardCodeAttr,
RowNumber: model.variables.balanceListVar.getCurrentRowNumber(callContext.iterationContext),
AvailableBalanceCustomStyleClass: model.variables.availableBalanceCustomStyleClassIn,
_availableBalanceCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableBalanceCustomStyleClassInDataFetchStatus)
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
})];
}, callContext, idService, "2")
},
_dependencies: [asPrimitiveValue(model.variables.availableBalanceCustomStyleClassIn), asPrimitiveValue(model.variables.balanceCardTypeCodesVar.generalCardCodeAttr), asPrimitiveValue(model.variables.balanceCardTypeCodesVar.addOnsCardCodeAttr), asPrimitiveValue(model.variables.balanceCardTypeCodesVar.minutesCardCodeAttr), asPrimitiveValue(model.variables.balanceCardTypeCodesVar.internetCardCodeAttr), asPrimitiveValue(model.variables.chartBackgroundColorIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables.firstPositionAddOnCardVar), asPrimitiveValue(model.variables.consumptionsGraphCustomStyleClassIn), asPrimitiveValue(model.variables.generalBalanceCustomStyleClassIn), asPrimitiveValue(model.variables.chartBorderMarkerBackgroundColorIn), asPrimitiveValue(model.variables.availableBalanceTitleCustomStyleClassIn), asPrimitiveValue(model.variables.spentTitleCustomStyleClassIn), asPrimitiveValue(model.variables.spentValueCustomStyleClassIn), asPrimitiveValue(model.variables.generalBalanceTitleCustomStyleClassIn), asPrimitiveValue(model.variables.chartMarkerTriangleColorIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._availableBalanceCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._chartBackgroundColorInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._consumptionsGraphCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._generalBalanceCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._chartBorderMarkerBackgroundColorInDataFetchStatus), asPrimitiveValue(model.variables._availableBalanceTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._spentTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._spentValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._generalBalanceTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._chartMarkerTriangleColorInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn)]
})];
}), $if(model.variables.balanceCreditGraphListVar.isEmpty, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.balanceCreditGraphListVar,
style: "list list-group -noBgd mt-24",
tag: "div",
_idProps: {
service: idService,
name: "CreditGraphList"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvc_view, {
inputs: {
TotalValue: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).totalAmountFmtAttr,
SpentValue: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).consumedAmountFmtAttr,
TotalUnit: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).totalAmountUnitFmtAttr,
ShowUnit: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).showBalanceUnitAttr,
CardTitle: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).titleAttr,
RowNumber: model.variables.balanceCreditGraphListVar.getCurrentRowNumber(callContext.iterationContext),
IsLimited: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).isLimitedAttr,
SpentUnit: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).consumedAmountUnitFmtAttr,
AvailableUnit: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).availableAmountUnitFmtAttr,
AvailableValue: model.variables.balanceCreditGraphListVar.getCurrent(callContext.iterationContext).availableAmountFmtAttr
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "3")
},
_dependencies: []
})];
}), $if(model.variables.creditMessageListVar.isEmpty, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mb-16"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-gray8 -bold",
value: "Tem disponíveis",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: false,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.creditMessageListVar,
style: "list list-group -noBgd",
tag: "div",
_idProps: {
service: idService,
name: "UnidentifiedCreditMessages"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_UnidentifiedBalanceMessages_mvc_view, {
inputs: {
Description: model.variables.creditMessageListVar.getCurrent(callContext.iterationContext)
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
uuid: "10",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "4")
},
_dependencies: []
}))];
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.controller$ReplaceBalanceTagsWithValue", "BALANCE_MBLOCKS.controller$ReplaceBalancePipesWithValue", "BALANCE_MBP.controller$GetBalanceLines_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BALANCE_INFOList", "BALANCE_MBP.controller$GetBalanceConfigInfo", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec", "BALANCE_MBLOCKS.controller$GetBalanceAPPConfig", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecordList", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList", "BALANCE_MBLOCKS.model$STR_Balance_CreditList", "BALANCE_MBLOCKS.model$STR_BalanceCashStructList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecord", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBP.entities"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// IsDestroyed = True
model.variables.isDestroyedVar = true;
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var replaceTitleWithTagsVar = new OS.DataTypes.VariableHolder();
var replaceTitleBalancePipesVar = new OS.DataTypes.VariableHolder();
var listIndexOfDescriptionVar = new OS.DataTypes.VariableHolder();
var getBalanceLines_MBPVar = new OS.DataTypes.VariableHolder();
var listFilterCreditOrder_1Var = new OS.DataTypes.VariableHolder();
var listFilterOrder_1Var = new OS.DataTypes.VariableHolder();
var listIndexOfTitleVar = new OS.DataTypes.VariableHolder();
var getConfigInfoVar = new OS.DataTypes.VariableHolder();
var getBalanceGroupEURVar = new OS.DataTypes.VariableHolder();
var listFilterCreditOrder_0Var = new OS.DataTypes.VariableHolder();
var getBalanceAPPConfigVar = new OS.DataTypes.VariableHolder();
var listFilterOrder_0Var = new OS.DataTypes.VariableHolder();
var replaceDescriptionBalancePipesVar = new OS.DataTypes.VariableHolder();
var replaceDescriptionWithTagsVar = new OS.DataTypes.VariableHolder();
var getPositionTagCodesVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESRecordList))());
var getLinesVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList))());
var getCreditLinesVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_LINESRecordList))());
var getCardTypeVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.isReadyToRunIn)) {
// ClearVariables
// IntegrationSuccessful = True
model.variables.integrationSuccessfulVar = true;
// MinSMSType = ""
model.variables.minSMSTypeVar = "";
// BalanceCashDescription = ""
model.variables.balanceCashDescriptionVar = "";
// BalanceTagCodes = BalanceTagCodesEmpty
model.variables.balanceTagCodesVar = model.variables.balanceTagCodesEmptyVar;
// BalanceCardTypeCodes = BalanceCardTypeCodesEmpty
model.variables.balanceCardTypeCodesVar = model.variables.balanceCardTypeCodesEmptyVar;
// BalanceAttributesCodes = BalanceAttributesCodesEmpty
model.variables.balanceAttributesCodesVar = model.variables.balanceAttributesCodesEmptyVar;
// Execute Action: ListClearBalance
OS.SystemActions.listClear(model.variables.balanceListVar, callContext);
// Execute Action: ListClearBalanceAux
OS.SystemActions.listClear(model.variables.balanceListAuxVar, callContext);
// Execute Action: ListClearCashBalance
OS.SystemActions.listClear(model.variables.balanceCashListVar, callContext);
// Execute Action: ListClearPositionTags
OS.SystemActions.listClear(model.variables.positionTagListVar, callContext);
// Execute Action: ListClearCreditBalance
OS.SystemActions.listClear(model.variables.balanceCreditGraphListVar, callContext);
// Execute Action: ListClearCreditBalanceAux
OS.SystemActions.listClear(model.variables.balanceCreditListAuxVar, callContext);
// Execute Action: ListClearCreditMessage
OS.SystemActions.listClear(model.variables.creditMessageListVar, callContext);
// Execute Action: GetBalanceAPPConfig
model.flush();
return BALANCE_MBLOCKSController.default.getBalanceAPPConfig$Action(callContext).then(function (value) {
getBalanceAPPConfigVar.value = value;
}).then(function () {
// Action Output
// BalanceTagCodes = GetBalanceAPPConfig.BalanceTagCodesStruct
model.variables.balanceTagCodesVar = getBalanceAPPConfigVar.value.balanceTagCodesStructOut;
// BalanceCardTypeCodes = GetBalanceAPPConfig.BalanceCardTypeStruct
model.variables.balanceCardTypeCodesVar = getBalanceAPPConfigVar.value.balanceCardTypeStructOut;
// BalanceAttributesCodes = GetBalanceAPPConfig.BalanceAttributesCodesStruct
model.variables.balanceAttributesCodesVar = getBalanceAPPConfigVar.value.balanceAttributesCodesStructOut;
// MessageGroup = GetBalanceAPPConfig.MessageGroupOut
model.variables.messageGroupVar = getBalanceAPPConfigVar.value.messageGroupOutOut;
// MinSMSType = GetBalanceAPPConfig.MinSMSTypeOut
model.variables.minSMSTypeVar = getBalanceAPPConfigVar.value.minSMSTypeOutOut;
// Execute Action: GetBalanceGroupEUR
model.flush();
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_GROUP_EUR", callContext).then(function (value) {
getBalanceGroupEURVar.value = value;
});
}).then(function () {
// SetBalanceGroupMoney
// BalanceGroupMoney = GetBalanceGroupEUR.Value
model.variables.balanceGroupMoneyVar = getBalanceGroupEURVar.value.valueOut;
// Aggregate: GetPositionTagCodes
var getPositionTagCodesAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESRecordList;
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
selectSql += "\"ENLocal_BALANCE_TAG_CODES\".\"Id\" o0, \"ENLocal_BALANCE_TAG_CODES\".\"Code\" o1, \"ENLocal_BALANCE_TAG_CODES\".\"IsPositionConfiguration\" o2, \"ENLocal_BALANCE_TAG_CODES\".\"DateTime\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_TAG_CODES\" \"ENLocal_BALANCE_TAG_CODES\"";
fromAndWhereSql += " WHERE (\"ENLocal_BALANCE_TAG_CODES\".\"IsPositionConfiguration\" = 1)";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_TAG_CODESAttr",
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
return getPositionTagCodesVar.value;
});
};
return getPositionTagCodesAggr();
}).then(function () {
// Execute Action: ListAppendAllTagCodes
OS.SystemActions.listAppendAll(model.variables.positionTagListVar, OS.DataTypes.JSConversions.typeConvertRecordList(getPositionTagCodesVar.value.listOut, new OS.DataTypes.TextList(), function (source, target) {
target = source.local_BALANCE_TAG_CODESAttr.codeAttr;
return target;
}), callContext);
// Execute Action: GetBalanceLines_MBP
model.flush();
return BALANCE_MBPController.default.getBalanceLines_MBP$Action(model.variables.mSISDNIn, "Saldos", true, model.variables.pageCodeIn, model.variables.refreshTokenIn, model.variables.associationIDIn, model.variables.applicationIn, model.variables.cacheValidationIntervalIn, callContext).then(function (value) {
getBalanceLines_MBPVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getBalanceLines_MBPVar.value.successOut)) {
// Aggregate: GetLines
var getLinesAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstLocal_BALANCE_LINES_CellPhoneNumber = model.variables.mSISDNIn;
var qpstPageCode = model.variables.pageCodeIn;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13, NULL o14, NULL o15, NULL o16, NULL o17, NULL o18, NULL o19, NULL o20, NULL o21, NULL o22, NULL o23, NULL o24, NULL o25, NULL o26, NULL o27, NULL o28, NULL o29, NULL o30, NULL o31, NULL o32, NULL o33, NULL o34, NULL o35";
} else {
selectSql += "\"ENLocal_BALANCE_CONFIG\".\"Id\" o0, \"ENLocal_BALANCE_CONFIG\".\"Tag\" o1, \"ENLocal_BALANCE_CONFIG\".\"BalanceName\" o2, \"ENLocal_BALANCE_CONFIG\".\"DateTime\" o3, \"ENLocal_BALANCE_CONFIG\".\"HideWhenBalanceIsZero\" o4, \"ENLocal_BALANCE_CONFIG\".\"CardTypeID\" o5, \"ENLocal_BALANCE_CONFIG\".\"GraphTypeID\" o6, \"ENLocal_BALANCE_CONFIG\".\"PageID\" o7, \"ENLocal_BALANCE_LINES\".\"Id\" o8, \"ENLocal_BALANCE_LINES\".\"BalanceGroupDescription\" o9, \"ENLocal_BALANCE_LINES\".\"AvailableAmount\" o10, \"ENLocal_BALANCE_LINES\".\"AvailableAmountUnit\" o11, \"ENLocal_BALANCE_LINES\".\"CellPhoneNumber\" o12, \"ENLocal_BALANCE_LINES\".\"ConsumedAmount\" o13, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountUnit\" o14, \"ENLocal_BALANCE_LINES\".\"TotalAmount\" o15, \"ENLocal_BALANCE_LINES\".\"TotalAmountUnit\" o16, \"ENLocal_BALANCE_LINES\".\"Order\" o17, \"ENLocal_BALANCE_LINES\".\"DateTime\" o18, \"ENLocal_BALANCE_LINES\".\"PackageNumber\" o19, \"ENLocal_BALANCE_LINES\".\"IsCredit\" o20, \"ENLocal_BALANCE_LINES\".\"CreditDescription\" o21, \"ENLocal_BALANCE_LINES\".\"TagCode\" o22, \"ENLocal_BALANCE_LINES\".\"PageCode\" o23, \"ENLocal_BALANCE_LINES\".\"AvailableAmountFmt\" o24, \"ENLocal_BALANCE_LINES\".\"AvailableAmountUnitFmt\" o25, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountFmt\" o26, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountUnitFmt\" o27, \"ENLocal_BALANCE_LINES\".\"TotalAmountFmt\" o28, \"ENLocal_BALANCE_LINES\".\"TotalAmountUnitFmt\" o29, \"ENLocal_BALANCE_LINES\".\"CacheExpirationDate\" o30, \"ENLocal_BALANCE_LINES\".\"ExpiryDate\" o31, \"ENLocal_PAGE\".\"Id\" o32, \"ENLocal_PAGE\".\"Label\" o33, \"ENLocal_PAGE\".\"Code\" o34, \"ENLocal_PAGE\".\"DateTime\" o35";
}
fromAndWhereSql += " FROM ((\"MAIN\".\"OSUSR_qsx_Local_BALANCE_LINES\" \"ENLocal_BALANCE_LINES\" Inner JOIN \"MAIN\".\"OSUSR_qsx_Local_BALANCE_CONFIG\" \"ENLocal_BALANCE_CONFIG\" ON (\"ENLocal_BALANCE_LINES\".\"TagCode\" = \"ENLocal_BALANCE_CONFIG\".\"Tag\"))  Inner JOIN \"MAIN\".\"OSUSR_qsx_Local_PAGE\" \"ENLocal_PAGE\" ON (\"ENLocal_BALANCE_CONFIG\".\"PageID\" = \"ENLocal_PAGE\".\"Id\")) ";
fromAndWhereSql += " WHERE (\"ENLocal_BALANCE_LINES\".\"CellPhoneNumber\" = :qpstLocal_BALANCE_LINES_CellPhoneNumber) AND (\"ENLocal_BALANCE_LINES\".\"PageCode\" = :qpstPageCode) AND (\"ENLocal_PAGE\".\"Code\" = :qpstPageCode)";
orderBySql += " ORDER BY \"ENLocal_BALANCE_LINES\".\"Order\" ASC ";
argsList.add("qpstLocal_BALANCE_LINES_CellPhoneNumber", /*TEXT*/ 0, qpstLocal_BALANCE_LINES_CellPhoneNumber);
argsList.add("qpstPageCode", /*TEXT*/ 0, qpstPageCode);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_CONFIGAttr",
"local_BALANCE_LINESAttr",
"local_PAGEAttr",
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
return getLinesVar.value;
});
};
return getLinesAggr().then(function () {
// GetLines.Empty?
return OS.Flow.executeSequence(function () {
if((!(getLinesVar.value.listOut.isEmpty))) {
// GetLinesList
// Foreach GetLines.List
callContext.iterationContext.registerIterationStart(getLinesVar.value.listOut);
return OS.Flow.tryFinally(function () {
var getLinesIterator = callContext.iterationContext.getIterator(getLinesVar.value.listOut);
var getLinesIndexMax = getLinesVar.value.listOut.length;
var getLinesIndex = 0;
return OS.Flow.whileAsync(function () {
return (((getLinesIndex < getLinesVar.value.listOut.length)) && (getLinesIndexMax > 0));
}, function () {
getLinesIterator.currentRowNumber = getLinesIndex;
// SetLocalBalance
// TempLocalBalance = GetLines.List.Current.Local_BALANCE_LINES
model.variables.tempLocalBalanceVar = OS.DataTypes.JSConversions.typeConvertRecord(getLinesVar.value.listOut.getItem(getLinesIndex.valueOf()).local_BALANCE_LINESAttr, new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec(), function (source, target) {
target.availableAmountAttr = OS.BuiltinFunctions.textToDecimal(source.availableAmountAttr);
target.availableAmountUnitAttr = source.availableAmountUnitAttr;
target.consumedAmountAttr = OS.BuiltinFunctions.textToDecimal(source.consumedAmountAttr);
target.consumedAmountUnitAttr = source.consumedAmountUnitAttr;
target.totalAmountAttr = OS.BuiltinFunctions.textToDecimal(source.totalAmountAttr);
target.totalAmountUnitAttr = source.totalAmountUnitAttr;
target.mSISDNAttr = source.cellPhoneNumberAttr;
target.showBalanceUnitAttr = (((source.balanceGroupDescriptionAttr === model.variables.minSMSTypeVar)) ? (false) : (true));
target.packageNumberAttr = source.packageNumberAttr;
target.orderAttr = source.orderAttr;
target.availableAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.availableAmountFmtAttr);
target.availableAmountUnitFmtAttr = source.availableAmountUnitFmtAttr;
target.consumedAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.consumedAmountFmtAttr);
target.consumedAmountUnitFmtAttr = source.consumedAmountUnitFmtAttr;
target.totalAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.totalAmountFmtAttr);
target.totalAmountUnitFmtAttr = source.totalAmountUnitFmtAttr;
return target;
});
// Execute Action: GetConfigInfo
model.flush();
return BALANCE_MBPController.default.getBalanceConfigInfo$Action(getLinesVar.value.listOut.getItem(getLinesIndex.valueOf()).local_BALANCE_CONFIGAttr.idAttr, getLinesVar.value.listOut.getItem(getLinesIndex.valueOf()).local_BALANCE_LINESAttr.idAttr, callContext).then(function (value) {
getConfigInfoVar.value = value;
}).then(function () {
// SetTempLocalBalance
// TempLocalBalance.GraphTypeID = GetConfigInfo.BalanceGraphTypeID
model.variables.tempLocalBalanceVar.graphTypeIDAttr = getConfigInfoVar.value.balanceGraphTypeIDOut;
// TempLocalBalance.CardTypeID = GetConfigInfo.BalanceCardTypeID
model.variables.tempLocalBalanceVar.cardTypeIDAttr = getConfigInfoVar.value.balanceCardTypeIDOut;
}).then(function () {
// GetBalanceConfiInfo.Empty?
return OS.Flow.executeSequence(function () {
if((!((!(getConfigInfoVar.value.successOut) || getConfigInfoVar.value.balanceConfigListOut.isEmpty)))) {
// Aggregate: GetCardType
var getCardTypeAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qploId = model.variables.tempLocalBalanceVar.cardTypeIDAttr;

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
selectSql += "\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" o0, \"ENLocal_BALANCE_CARD_TYPE\".\"Label\" o1, \"ENLocal_BALANCE_CARD_TYPE\".\"Code\" o2, \"ENLocal_BALANCE_CARD_TYPE\".\"DateTime\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_CARD_TYPE\" \"ENLocal_BALANCE_CARD_TYPE\"";
fromAndWhereSql += " WHERE ";
if (qploId != 0) {
fromAndWhereSql += "((\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" = :qploId) AND (\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" IS NOT NULL))";
argsList.add("qploId", /*LONGINTEGER*/ 4, qploId);
} else {
fromAndWhereSql += "(\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_CARD_TYPEAttr",
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
return getCardTypeVar.value;
});
};
return getCardTypeAggr().then(function () {
// GetCardType.Empty?
return OS.Flow.executeSequence(function () {
if((!(getCardTypeVar.value.listOut.isEmpty))) {
// Execute Action: ListIndexOfTitle
listIndexOfTitleVar.value = OS.SystemActions.listIndexOf(getConfigInfoVar.value.balanceConfigListOut, function (p) {
return (p.attributeCodeAttr === model.variables.balanceAttributesCodesVar.titleCodeAttr);
}, callContext);

// TitleNotFound?
return OS.Flow.executeSequence(function () {
if((!((listIndexOfTitleVar.value.positionOut === -1)))) {
// Execute Action: ReplaceTitleWithTags
replaceTitleWithTagsVar.value = BALANCE_MBLOCKSController.default.replaceBalanceTagsWithValue$Action(getConfigInfoVar.value.balanceConfigListOut.getItem(listIndexOfTitleVar.value.positionOut).valueAttr, model.variables.tempLocalBalanceVar, model.variables.balanceTagCodesVar.availableBalanceTagAttr, model.variables.balanceTagCodesVar.availableBalanceUnitTagAttr, model.variables.balanceTagCodesVar.spentBalanceTagAttr, model.variables.balanceTagCodesVar.plafondBalanceTagAttr, model.variables.balanceTagCodesVar.packageNumberBalanceTagAttr, model.variables.balanceTagCodesVar.spentBalanceUnitTagAttr, model.variables.balanceTagCodesVar.totalBalanceUnitTagAttr, callContext);

// Execute Action: ReplaceTitleBalancePipes
model.flush();
return BALANCE_MBLOCKSController.default.replaceBalancePipesWithValue$Action(replaceTitleWithTagsVar.value.outputTextOut, getLinesVar.value.listOut.getItem(getLinesIndex.valueOf()).local_BALANCE_LINESAttr.idAttr, model.variables.positionTagListVar, model.variables.balanceTagCodesVar.balanceDataTypeSeparatorAttr, callContext).then(function (value) {
replaceTitleBalancePipesVar.value = value;
}).then(function () {
// SetLocalBalanceTitle
// TempLocalBalance.Title = ReplaceTitleBalancePipes.OutputText
model.variables.tempLocalBalanceVar.titleAttr = replaceTitleBalancePipesVar.value.outputTextOut;
});
}

}).then(function () {
// Execute Action: ListIndexOfDescription
listIndexOfDescriptionVar.value = OS.SystemActions.listIndexOf(getConfigInfoVar.value.balanceConfigListOut, function (p) {
return (p.attributeCodeAttr === model.variables.balanceAttributesCodesVar.descriptionCodeAttr);
}, callContext);

// DescriptionNotFound?
return OS.Flow.executeSequence(function () {
if((!((listIndexOfDescriptionVar.value.positionOut === -1)))) {
// Execute Action: ReplaceDescriptionWithTags
replaceDescriptionWithTagsVar.value = BALANCE_MBLOCKSController.default.replaceBalanceTagsWithValue$Action(getConfigInfoVar.value.balanceConfigListOut.getItem(listIndexOfDescriptionVar.value.positionOut).valueAttr, model.variables.tempLocalBalanceVar, model.variables.balanceTagCodesVar.availableBalanceTagAttr, model.variables.balanceTagCodesVar.availableBalanceUnitTagAttr, model.variables.balanceTagCodesVar.spentBalanceTagAttr, model.variables.balanceTagCodesVar.plafondBalanceTagAttr, model.variables.balanceTagCodesVar.packageNumberBalanceTagAttr, model.variables.balanceTagCodesVar.spentBalanceUnitTagAttr, model.variables.balanceTagCodesVar.totalBalanceUnitTagAttr, callContext);

// Execute Action: ReplaceDescriptionBalancePipes
model.flush();
return BALANCE_MBLOCKSController.default.replaceBalancePipesWithValue$Action(replaceDescriptionWithTagsVar.value.outputTextOut, getLinesVar.value.listOut.getItem(getLinesIndex.valueOf()).local_BALANCE_LINESAttr.idAttr, model.variables.positionTagListVar, model.variables.balanceTagCodesVar.balanceDataTypeSeparatorAttr, callContext).then(function (value) {
replaceDescriptionBalancePipesVar.value = value;
}).then(function () {
// SetDescription
// TempLocalBalance.Description = ReplaceDescriptionBalancePipes.OutputText
model.variables.tempLocalBalanceVar.descriptionAttr = replaceDescriptionBalancePipesVar.value.outputTextOut;
});
}

});
}).then(function () {
// IsCardCash?
if(((OS.BuiltinFunctions.toLower(getCardTypeVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_CARD_TYPEAttr.codeAttr) === OS.BuiltinFunctions.toLower(model.variables.balanceCardTypeCodesVar.cashCardCodeAttr)))) {
// IsMessageGroup?
if(((OS.BuiltinFunctions.toLower(getLinesVar.value.listOut.getItem(getLinesIndex.valueOf()).local_BALANCE_LINESAttr.balanceGroupDescriptionAttr) === OS.BuiltinFunctions.toLower(model.variables.messageGroupVar)))) {
// SetBalanceCashDescription
// BalanceCashDescription = If
model.variables.balanceCashDescriptionVar = (((OS.BuiltinFunctions.trim(model.variables.balanceCashDescriptionVar) === "")) ? (model.variables.tempLocalBalanceVar.descriptionAttr) : ((((OS.BuiltinFunctions.trim(model.variables.tempLocalBalanceVar.descriptionAttr) === "")) ? (model.variables.balanceCashDescriptionVar) : (((model.variables.balanceCashDescriptionVar + "\r\n") + model.variables.tempLocalBalanceVar.descriptionAttr)))));
} else {
// SetTempLocalCashBalance
// TempLocalCashBalance = TempLocalBalance
model.variables.tempLocalCashBalanceVar = OS.DataTypes.JSConversions.typeConvertRecord(model.variables.tempLocalBalanceVar, new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec(), function (source, target) {
target.titleAttr = source.titleAttr;
target.valueAttr = source.availableAmountAttr;
target.orderAttr = source.orderAttr;
return target;
});
// Execute Action: ListAppendCashList
OS.SystemActions.listAppend(model.variables.balanceCashListVar, model.variables.tempLocalCashBalanceVar, callContext);
}

} else {
// Execute Action: ListAppendBalanceAux
OS.SystemActions.listAppend(model.variables.balanceListAuxVar, model.variables.tempLocalBalanceVar, callContext);
// IsAddOnsCard?
if(((((OS.BuiltinFunctions.toLower(getCardTypeVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_CARD_TYPEAttr.codeAttr) === OS.BuiltinFunctions.toLower(model.variables.balanceCardTypeCodesVar.addOnsCardCodeAttr)) && (model.variables.firstPositionAddOnCardVar === 0)) && !(model.variables.tempLocalBalanceVar.totalAmountFmtAttr.equals(OS.BuiltinFunctions.integerToDecimal(0)))))) {
// FirstPositionAddOnCard = BalanceListAux.Length - 1
model.variables.firstPositionAddOnCardVar = (model.variables.balanceListAuxVar.length - 1);
}

}

});
}

});
});
}

});
}).then(function () {
getLinesIndexMax--;
getLinesIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(getLinesVar.value.listOut);
});
}

});
});
} else {
// SetIntegrationSuccessful
// IntegrationSuccessful = False
model.variables.integrationSuccessfulVar = false;
}

});
}).then(function () {
// Execute Action: ListFilterOrder_1
listFilterOrder_1Var.value = OS.SystemActions.listFilter(model.variables.balanceListAuxVar, function (p) {
return (p.orderAttr >= 1);
}, callContext);

// Execute Action: ListAppendAllOrder_1
OS.SystemActions.listAppendAll(model.variables.balanceListVar, listFilterOrder_1Var.value.filteredListOut, callContext);
// Execute Action: ListFilterOrder_0
listFilterOrder_0Var.value = OS.SystemActions.listFilter(model.variables.balanceListAuxVar, function (p) {
return (p.orderAttr === 0);
}, callContext);

// Execute Action: ListAppendAllOrder_0
OS.SystemActions.listAppendAll(model.variables.balanceListVar, listFilterOrder_0Var.value.filteredListOut, callContext);
// Aggregate: GetCreditLines
var getCreditLinesAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_LINESRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstCellPhoneNumber = model.variables.mSISDNIn;
var qpstPageCode = model.variables.pageCodeIn;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13, NULL o14, NULL o15, NULL o16, NULL o17, NULL o18, NULL o19, NULL o20, NULL o21, NULL o22, NULL o23";
} else {
selectSql += "\"ENLocal_BALANCE_LINES\".\"Id\" o0, \"ENLocal_BALANCE_LINES\".\"BalanceGroupDescription\" o1, \"ENLocal_BALANCE_LINES\".\"AvailableAmount\" o2, \"ENLocal_BALANCE_LINES\".\"AvailableAmountUnit\" o3, \"ENLocal_BALANCE_LINES\".\"CellPhoneNumber\" o4, \"ENLocal_BALANCE_LINES\".\"ConsumedAmount\" o5, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountUnit\" o6, \"ENLocal_BALANCE_LINES\".\"TotalAmount\" o7, \"ENLocal_BALANCE_LINES\".\"TotalAmountUnit\" o8, \"ENLocal_BALANCE_LINES\".\"Order\" o9, \"ENLocal_BALANCE_LINES\".\"DateTime\" o10, \"ENLocal_BALANCE_LINES\".\"PackageNumber\" o11, \"ENLocal_BALANCE_LINES\".\"IsCredit\" o12, \"ENLocal_BALANCE_LINES\".\"CreditDescription\" o13, \"ENLocal_BALANCE_LINES\".\"TagCode\" o14, \"ENLocal_BALANCE_LINES\".\"PageCode\" o15, \"ENLocal_BALANCE_LINES\".\"AvailableAmountFmt\" o16, \"ENLocal_BALANCE_LINES\".\"AvailableAmountUnitFmt\" o17, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountFmt\" o18, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountUnitFmt\" o19, \"ENLocal_BALANCE_LINES\".\"TotalAmountFmt\" o20, \"ENLocal_BALANCE_LINES\".\"TotalAmountUnitFmt\" o21, \"ENLocal_BALANCE_LINES\".\"CacheExpirationDate\" o22, \"ENLocal_BALANCE_LINES\".\"ExpiryDate\" o23";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_LINES\" \"ENLocal_BALANCE_LINES\"";
fromAndWhereSql += " WHERE (\"ENLocal_BALANCE_LINES\".\"CellPhoneNumber\" = :qpstCellPhoneNumber) AND (\"ENLocal_BALANCE_LINES\".\"PageCode\" = :qpstPageCode) AND (\"ENLocal_BALANCE_LINES\".\"IsCredit\" = 1)";
argsList.add("qpstCellPhoneNumber", /*TEXT*/ 0, qpstCellPhoneNumber);
argsList.add("qpstPageCode", /*TEXT*/ 0, qpstPageCode);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_LINESRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_LINESAttr",
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
return getCreditLinesVar.value;
});
};
return getCreditLinesAggr().then(function () {
// GetCreditLines
// Foreach GetCreditLines.List
callContext.iterationContext.registerIterationStart(getCreditLinesVar.value.listOut);
});
}).then(function () {
try {var getCreditLinesIterator = callContext.iterationContext.getIterator(getCreditLinesVar.value.listOut);
var getCreditLinesIndexMax = getCreditLinesVar.value.listOut.length;
var getCreditLinesIndex = 0;
while ((((getCreditLinesIndex < getCreditLinesVar.value.listOut.length)) && (getCreditLinesIndexMax > 0))) {
getCreditLinesIterator.currentRowNumber = getCreditLinesIndex;
// CreditGraphUnavailable?
if(((((getCreditLinesVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_LINESAttr.totalAmountAttr === "0") && (getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()).local_BALANCE_LINESAttr.availableAmountAttr === "0")) || (OS.BuiltinFunctions.toLower(getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()).local_BALANCE_LINESAttr.balanceGroupDescriptionAttr) === OS.BuiltinFunctions.toLower(model.variables.balanceGroupMoneyVar))))) {
// CreditDescription Empty?
if((!((getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()).local_BALANCE_LINESAttr.creditDescriptionAttr === "")))) {
// Execute Action: ListAppendCreditMessage
OS.SystemActions.listAppend(model.variables.creditMessageListVar, getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()).local_BALANCE_LINESAttr.creditDescriptionAttr, callContext);
}

} else {
// Execute Action: ListAppendCredit
OS.SystemActions.listAppend(model.variables.balanceCreditListAuxVar, OS.DataTypes.JSConversions.typeConvertRecord(getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()), new BALANCE_MBLOCKSModel.STR_Balance_CreditRec(), function (source, target) {
target.titleAttr = source.local_BALANCE_LINESAttr.creditDescriptionAttr;
target.availableAmountAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.availableAmountAttr);
target.availableAmountUnitAttr = source.local_BALANCE_LINESAttr.availableAmountUnitAttr;
target.consumedAmountAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.consumedAmountAttr);
target.consumedAmountUnitAttr = source.local_BALANCE_LINESAttr.consumedAmountUnitAttr;
target.totalAmountAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountAttr);
target.totalAmountUnitAttr = source.local_BALANCE_LINESAttr.totalAmountUnitAttr;
target.mSISDNAttr = source.local_BALANCE_LINESAttr.cellPhoneNumberAttr;
target.orderAttr = source.local_BALANCE_LINESAttr.orderAttr;
target.isLimitedAttr = (((OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountAttr).gte(OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.availableAmountAttr)) && OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountAttr).gt(OS.BuiltinFunctions.integerToDecimal(0)))) ? (true) : (false));
target.showBalanceUnitAttr = (((source.local_BALANCE_LINESAttr.balanceGroupDescriptionAttr === model.variables.minSMSTypeVar)) ? (false) : (true));
target.availableAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.availableAmountFmtAttr);
target.availableAmountUnitFmtAttr = source.local_BALANCE_LINESAttr.availableAmountUnitFmtAttr;
target.consumedAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.consumedAmountFmtAttr);
target.consumedAmountUnitFmtAttr = source.local_BALANCE_LINESAttr.consumedAmountUnitFmtAttr;
target.totalAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountFmtAttr);
target.totalAmountUnitFmtAttr = source.local_BALANCE_LINESAttr.totalAmountUnitFmtAttr;
return target;
}), callContext);
}

getCreditLinesIndexMax--;
getCreditLinesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(getCreditLinesVar.value.listOut);
}

// Execute Action: ListFilterCreditOrder_1
listFilterCreditOrder_1Var.value = OS.SystemActions.listFilter(model.variables.balanceCreditListAuxVar, function (p) {
return (p.orderAttr >= 1);
}, callContext);

// Execute Action: ListAppendAllCreditOrder_1
OS.SystemActions.listAppendAll(model.variables.balanceCreditGraphListVar, listFilterCreditOrder_1Var.value.filteredListOut, callContext);
// Execute Action: ListFilterCreditOrder_0
listFilterCreditOrder_0Var.value = OS.SystemActions.listFilter(model.variables.balanceCreditListAuxVar, function (p) {
return (p.orderAttr === 0);
}, callContext);

// Execute Action: ListAppendAllCreditOrder_0
OS.SystemActions.listAppendAll(model.variables.balanceCreditGraphListVar, listFilterCreditOrder_0Var.value.filteredListOut, callContext);
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: LoadingFinished
return controller.loadingFinished$Action(((model.variables.balanceCashListVar.isEmpty) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.balanceCashListVar.getItem(0).valueAttr)), model.variables.balanceCashDescriptionVar, "True", (((((model.variables.balanceListVar.isEmpty && model.variables.balanceCashListVar.isEmpty) && model.variables.balanceCreditGraphListVar.isEmpty) && model.variables.creditMessageListVar.isEmpty)) ? (true) : (false)), model.variables.integrationSuccessfulVar, callContext);
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("ConsumptionsOrhcestrationBalance.OnParametersChanged", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
return OS.Flow.returnAsync();

} else {
// Trigger Event: LoadingFinished2
return controller.loadingFinished$Action((OS.DataTypes.Decimal.defaultValue), "", "False", true, false, callContext).then(function () {
return OS.Flow.returnAsync();

});
}

});
});
}

throw ex;
});
};
Controller.prototype._chargePhoneHandler$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ChargePhoneHandler");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: ChargePhoneEvent
return controller.chargePhoneEvent$Action(callContext);
}

});
});
};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.chargePhoneHandler$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._chargePhoneHandler$Action, callContext);

};
Controller.prototype.chargePhoneEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.loadingFinished$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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

