define("BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.model", "MobileUIWidgets.SkeletonComponents.SkeletonTitle.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.SkeletonComponents.SkeletonGaugeChart.mvc$model", "MobileUIWidgets.SkeletonComponents.SkeletonDesc.mvc$model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.MasterBalanceCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.AddOnsAppCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.BalanceHomeInfoCard.mvc$model", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec", "BALANCE_MBLOCKS.model$STR_BALANCE_INFOList", "BALANCE_MBP.controller$GetBalanceConfigInfo", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.controller$ReplaceBalanceTagsWithValue", "BALANCE_MBLOCKS.controller$ReplaceBalancePipesWithValue", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec", "BALANCE_MBLOCKS.controller$GetBalanceAPPConfig", "BALANCE_MBP.controller$GetBalanceLinesV2_MBP", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecord", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBLOCKS.model$Local_SYNC_BALANCE_CONFIGRecordList", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBP.model$Local_SYNC_BALANCE_CONFIGRec", "BALANCE_MBP.entities"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, BALANCE_MBLOCKSController, BALANCE_MBPModel, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvcModel, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvcModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("EmptyBalanceRecord", "emptyBalanceRecordVar", "EmptyBalanceRecord", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec), 
this.attr("CashBalanceRecord", "cashBalanceRecordVar", "CashBalanceRecord", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceCashStructRec), 
this.attr("EmptyRecordCashBalance", "emptyRecordCashBalanceVar", "EmptyRecordCashBalance", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceCashStructRec), 
this.attr("MinimumBalanceValue", "minimumBalanceValueVar", "MinimumBalanceValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("BalanceList", "balanceListVar", "BalanceList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList), 
this.attr("BalanceTagCodes", "balanceTagCodesVar", "BalanceTagCodes", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec), 
this.attr("BalanceCardTypeCodes", "balanceCardTypeCodesVar", "BalanceCardTypeCodes", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec), 
this.attr("BalanceAttributesCodes", "balanceAttributesCodesVar", "BalanceAttributesCodes", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec), 
this.attr("MessageGroup", "messageGroupVar", "MessageGroup", true, OS.Types.Text, function () {
return "";
}), 
this.attr("MinSMSType", "minSMSTypeVar", "MinSMSType", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceGroupMoney", "balanceGroupMoneyVar", "BalanceGroupMoney", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PositionTagList", "positionTagListVar", "PositionTagList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new OS.DataTypes.TextList());
}, OS.DataTypes.TextList), 
this.attr("TempLocalBalance", "tempLocalBalanceVar", "TempLocalBalance", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec), 
this.attr("BalanceListAux", "balanceListAuxVar", "BalanceListAux", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList), 
this.attr("CashAdditionalInformation", "cashAdditionalInformationVar", "CashAdditionalInformation", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsCashBalanceSet", "isCashBalanceSetVar", "IsCashBalanceSet", true, OS.Types.Boolean, function () {
return false;
}), 
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
this.attr("HasNoService", "hasNoServiceVar", "HasNoService", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoaded", "isLoadedVar", "IsLoaded", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("BalanceList_AddOns", "balanceList_AddOnsVar", "BalanceList_AddOns", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList), 
this.attr("CellPhoneNumber", "cellPhoneNumberIn", "CellPhoneNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_cellPhoneNumberInDataFetchStatus", "_cellPhoneNumberInDataFetchStatus", "_cellPhoneNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CellPhoneTariff", "cellPhoneTariffIn", "CellPhoneTariff", true, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("_cellPhoneTariffInDataFetchStatus", "_cellPhoneTariffInDataFetchStatus", "_cellPhoneTariffInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsReadyToRun", "isReadyToRunIn", "IsReadyToRun", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isReadyToRunInDataFetchStatus", "_isReadyToRunInDataFetchStatus", "_isReadyToRunInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("PageCode", "pageCodeIn", "PageCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pageCodeInDataFetchStatus", "_pageCodeInDataFetchStatus", "_pageCodeInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("MasterBalanceCardStyleClass", "masterBalanceCardStyleClassIn", "MasterBalanceCardStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterBalanceCardStyleClassInDataFetchStatus", "_masterBalanceCardStyleClassInDataFetchStatus", "_masterBalanceCardStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IconArrowRight", "iconArrowRightIn", "IconArrowRight", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_iconArrowRightInDataFetchStatus", "_iconArrowRightInDataFetchStatus", "_iconArrowRightInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IconCustomStyleClass", "iconCustomStyleClassIn", "IconCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_iconCustomStyleClassInDataFetchStatus", "_iconCustomStyleClassInDataFetchStatus", "_iconCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MasterBalanceCardTitleCustomStyleClass", "masterBalanceCardTitleCustomStyleClassIn", "MasterBalanceCardTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterBalanceCardTitleCustomStyleClassInDataFetchStatus", "_masterBalanceCardTitleCustomStyleClassInDataFetchStatus", "_masterBalanceCardTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MasterBalanceCardShortLabelCustomStyleClass", "masterBalanceCardShortLabelCustomStyleClassIn", "MasterBalanceCardShortLabelCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterBalanceCardShortLabelCustomStyleClassInDataFetchStatus", "_masterBalanceCardShortLabelCustomStyleClassInDataFetchStatus", "_masterBalanceCardShortLabelCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MasterBalanceAvailableTitleCustomStyleClass", "masterBalanceAvailableTitleCustomStyleClassIn", "MasterBalanceAvailableTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterBalanceAvailableTitleCustomStyleClassInDataFetchStatus", "_masterBalanceAvailableTitleCustomStyleClassInDataFetchStatus", "_masterBalanceAvailableTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MasterBalanceAvailableValueCustomStyleClass", "masterBalanceAvailableValueCustomStyleClassIn", "MasterBalanceAvailableValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterBalanceAvailableValueCustomStyleClassInDataFetchStatus", "_masterBalanceAvailableValueCustomStyleClassInDataFetchStatus", "_masterBalanceAvailableValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MasterBalanceSpentTitleCustomStyleClass", "masterBalanceSpentTitleCustomStyleClassIn", "MasterBalanceSpentTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterBalanceSpentTitleCustomStyleClassInDataFetchStatus", "_masterBalanceSpentTitleCustomStyleClassInDataFetchStatus", "_masterBalanceSpentTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MasterBalanceSpentValueCustomStyleClass", "masterBalanceSpentValueCustomStyleClassIn", "MasterBalanceSpentValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterBalanceSpentValueCustomStyleClassInDataFetchStatus", "_masterBalanceSpentValueCustomStyleClassInDataFetchStatus", "_masterBalanceSpentValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TwoGraphCustomStyleClass", "twoGraphCustomStyleClassIn", "TwoGraphCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_twoGraphCustomStyleClassInDataFetchStatus", "_twoGraphCustomStyleClassInDataFetchStatus", "_twoGraphCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TwoGraphAvailableTitleCustomStyleClass", "twoGraphAvailableTitleCustomStyleClassIn", "TwoGraphAvailableTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_twoGraphAvailableTitleCustomStyleClassInDataFetchStatus", "_twoGraphAvailableTitleCustomStyleClassInDataFetchStatus", "_twoGraphAvailableTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TwoGraphAvailableValueCustomStyleClass", "twoGraphAvailableValueCustomStyleClassIn", "TwoGraphAvailableValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_twoGraphAvailableValueCustomStyleClassInDataFetchStatus", "_twoGraphAvailableValueCustomStyleClassInDataFetchStatus", "_twoGraphAvailableValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceCustomClass", "balanceCustomClassIn", "BalanceCustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceCustomClassInDataFetchStatus", "_balanceCustomClassInDataFetchStatus", "_balanceCustomClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceTitleCustomStyleClass", "balanceTitleCustomStyleClassIn", "BalanceTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceTitleCustomStyleClassInDataFetchStatus", "_balanceTitleCustomStyleClassInDataFetchStatus", "_balanceTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("IsErrorCard", "isErrorCardIn", "IsErrorCard", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isErrorCardInDataFetchStatus", "_isErrorCardInDataFetchStatus", "_isErrorCardInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((((((MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvcModel.hasValidationWidgets) || MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("CellPhoneNumber" in inputs) {
this.variables.cellPhoneNumberIn = inputs.CellPhoneNumber;
if("_cellPhoneNumberInDataFetchStatus" in inputs) {
this.variables._cellPhoneNumberInDataFetchStatus = inputs._cellPhoneNumberInDataFetchStatus;
}

}

if("CellPhoneTariff" in inputs) {
this.variables.cellPhoneTariffIn = inputs.CellPhoneTariff;
if("_cellPhoneTariffInDataFetchStatus" in inputs) {
this.variables._cellPhoneTariffInDataFetchStatus = inputs._cellPhoneTariffInDataFetchStatus;
}

}

if("IsReadyToRun" in inputs) {
this.variables.isReadyToRunIn = inputs.IsReadyToRun;
if("_isReadyToRunInDataFetchStatus" in inputs) {
this.variables._isReadyToRunInDataFetchStatus = inputs._isReadyToRunInDataFetchStatus;
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

if("PageCode" in inputs) {
this.variables.pageCodeIn = inputs.PageCode;
if("_pageCodeInDataFetchStatus" in inputs) {
this.variables._pageCodeInDataFetchStatus = inputs._pageCodeInDataFetchStatus;
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

if("MasterBalanceCardStyleClass" in inputs) {
this.variables.masterBalanceCardStyleClassIn = inputs.MasterBalanceCardStyleClass;
if("_masterBalanceCardStyleClassInDataFetchStatus" in inputs) {
this.variables._masterBalanceCardStyleClassInDataFetchStatus = inputs._masterBalanceCardStyleClassInDataFetchStatus;
}

}

if("IconArrowRight" in inputs) {
this.variables.iconArrowRightIn = inputs.IconArrowRight;
if("_iconArrowRightInDataFetchStatus" in inputs) {
this.variables._iconArrowRightInDataFetchStatus = inputs._iconArrowRightInDataFetchStatus;
}

}

if("IconCustomStyleClass" in inputs) {
this.variables.iconCustomStyleClassIn = inputs.IconCustomStyleClass;
if("_iconCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._iconCustomStyleClassInDataFetchStatus = inputs._iconCustomStyleClassInDataFetchStatus;
}

}

if("MasterBalanceCardTitleCustomStyleClass" in inputs) {
this.variables.masterBalanceCardTitleCustomStyleClassIn = inputs.MasterBalanceCardTitleCustomStyleClass;
if("_masterBalanceCardTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._masterBalanceCardTitleCustomStyleClassInDataFetchStatus = inputs._masterBalanceCardTitleCustomStyleClassInDataFetchStatus;
}

}

if("MasterBalanceCardShortLabelCustomStyleClass" in inputs) {
this.variables.masterBalanceCardShortLabelCustomStyleClassIn = inputs.MasterBalanceCardShortLabelCustomStyleClass;
if("_masterBalanceCardShortLabelCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._masterBalanceCardShortLabelCustomStyleClassInDataFetchStatus = inputs._masterBalanceCardShortLabelCustomStyleClassInDataFetchStatus;
}

}

if("MasterBalanceAvailableTitleCustomStyleClass" in inputs) {
this.variables.masterBalanceAvailableTitleCustomStyleClassIn = inputs.MasterBalanceAvailableTitleCustomStyleClass;
if("_masterBalanceAvailableTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._masterBalanceAvailableTitleCustomStyleClassInDataFetchStatus = inputs._masterBalanceAvailableTitleCustomStyleClassInDataFetchStatus;
}

}

if("MasterBalanceAvailableValueCustomStyleClass" in inputs) {
this.variables.masterBalanceAvailableValueCustomStyleClassIn = inputs.MasterBalanceAvailableValueCustomStyleClass;
if("_masterBalanceAvailableValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._masterBalanceAvailableValueCustomStyleClassInDataFetchStatus = inputs._masterBalanceAvailableValueCustomStyleClassInDataFetchStatus;
}

}

if("MasterBalanceSpentTitleCustomStyleClass" in inputs) {
this.variables.masterBalanceSpentTitleCustomStyleClassIn = inputs.MasterBalanceSpentTitleCustomStyleClass;
if("_masterBalanceSpentTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._masterBalanceSpentTitleCustomStyleClassInDataFetchStatus = inputs._masterBalanceSpentTitleCustomStyleClassInDataFetchStatus;
}

}

if("MasterBalanceSpentValueCustomStyleClass" in inputs) {
this.variables.masterBalanceSpentValueCustomStyleClassIn = inputs.MasterBalanceSpentValueCustomStyleClass;
if("_masterBalanceSpentValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._masterBalanceSpentValueCustomStyleClassInDataFetchStatus = inputs._masterBalanceSpentValueCustomStyleClassInDataFetchStatus;
}

}

if("TwoGraphCustomStyleClass" in inputs) {
this.variables.twoGraphCustomStyleClassIn = inputs.TwoGraphCustomStyleClass;
if("_twoGraphCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._twoGraphCustomStyleClassInDataFetchStatus = inputs._twoGraphCustomStyleClassInDataFetchStatus;
}

}

if("TwoGraphAvailableTitleCustomStyleClass" in inputs) {
this.variables.twoGraphAvailableTitleCustomStyleClassIn = inputs.TwoGraphAvailableTitleCustomStyleClass;
if("_twoGraphAvailableTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._twoGraphAvailableTitleCustomStyleClassInDataFetchStatus = inputs._twoGraphAvailableTitleCustomStyleClassInDataFetchStatus;
}

}

if("TwoGraphAvailableValueCustomStyleClass" in inputs) {
this.variables.twoGraphAvailableValueCustomStyleClassIn = inputs.TwoGraphAvailableValueCustomStyleClass;
if("_twoGraphAvailableValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._twoGraphAvailableValueCustomStyleClassInDataFetchStatus = inputs._twoGraphAvailableValueCustomStyleClassInDataFetchStatus;
}

}

if("BalanceCustomClass" in inputs) {
this.variables.balanceCustomClassIn = inputs.BalanceCustomClass;
if("_balanceCustomClassInDataFetchStatus" in inputs) {
this.variables._balanceCustomClassInDataFetchStatus = inputs._balanceCustomClassInDataFetchStatus;
}

}

if("BalanceTitleCustomStyleClass" in inputs) {
this.variables.balanceTitleCustomStyleClassIn = inputs.BalanceTitleCustomStyleClass;
if("_balanceTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._balanceTitleCustomStyleClassInDataFetchStatus = inputs._balanceTitleCustomStyleClassInDataFetchStatus;
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

if("IsErrorCard" in inputs) {
this.variables.isErrorCardIn = inputs.IsErrorCard;
if("_isErrorCardInDataFetchStatus" in inputs) {
this.variables._isErrorCardInDataFetchStatus = inputs._isErrorCardInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$model", "BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.SkeletonComponents.SkeletonTitle.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonGaugeChart.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonDesc.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.MasterBalanceCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.AddOnsAppCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.BalanceHomeInfoCard.mvc$view", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec", "BALANCE_MBLOCKS.model$STR_BALANCE_INFOList", "BALANCE_MBP.controller$GetBalanceConfigInfo", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.controller$ReplaceBalanceTagsWithValue", "BALANCE_MBLOCKS.controller$ReplaceBalancePipesWithValue", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec", "BALANCE_MBLOCKS.controller$GetBalanceAPPConfig", "BALANCE_MBP.controller$GetBalanceLinesV2_MBP", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecord", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBLOCKS.model$Local_SYNC_BALANCE_CONFIGRecordList", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBP.model$Local_SYNC_BALANCE_CONFIGRec", "BALANCE_MBP.entities"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, React, OSView, BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_model, BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_controller, OSWidgets, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvc_view) {
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
        View.displayName = "HomePageBlocks.HomePageBalanceOrchestrationV3";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_controller;
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
style: "mb-24",
visible: true,
_idProps: {
service: idService,
name: "BalancesWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "BalancesSkeleton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-skeletonCard mb-2",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-4 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: false
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPaddingRight text-right",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.small,
StyleClass: "c-gray3",
IconName: BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconArrowRight
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
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-30 mb-16 text-center"
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, {
inputs: {},
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
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingLeft text-center",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
uuid: "15",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {},
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingRight text-center",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
uuid: "22",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {},
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
uuid: "25",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))))))];
}, function () {
return [$if((model.variables.isErrorCardIn && model.variables.hasNoServiceVar), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.refreshCard$Action(controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24 a-failMessageContainer",
visible: true,
_idProps: {
service: idService,
name: "Saldos"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-skeletonCard mb-2",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-4 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {},
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
uuid: "31",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPaddingRight text-right",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconArrowRight,
StyleClass: "c-gray3",
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.small
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
uuid: "33",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-30 mb-16 text-center"
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
uuid: "35",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, {
inputs: {},
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
uuid: "36",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingLeft text-center",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
uuid: "41",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {},
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
uuid: "44",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingRight text-center",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
uuid: "48",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {},
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
uuid: "51",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-failMessage",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
RightStyleClass: "-vCenter"
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
name: "ErrorMessage",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-pureWhite",
IconName: BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconErrorRoundedFilledV2,
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.large
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
uuid: "54",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "a-textRead c-pureWhite",
value: "Não foi possível carregar a informação dos saldos",
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-pureWhite -small",
value: "Carregue para tentar novamente",
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-pureWhite",
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.large,
IconName: BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconRefresh
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
uuid: "57",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})))))];
}, function () {
return [$if(model.variables.balanceListVar.isEmpty, false, this, function () {
return [];
}, function () {
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvc_view, {
inputs: {
TitleCustomStyleClass: model.variables.masterBalanceCardTitleCustomStyleClassIn,
_titleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._masterBalanceCardTitleCustomStyleClassInDataFetchStatus),
AvailableTitleCustomStyleClass: model.variables.masterBalanceAvailableTitleCustomStyleClassIn,
_availableTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._masterBalanceAvailableTitleCustomStyleClassInDataFetchStatus),
AvailableValueCustomStyleClass: model.variables.masterBalanceAvailableValueCustomStyleClassIn,
_availableValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._masterBalanceAvailableValueCustomStyleClassInDataFetchStatus),
SpentTitleCustomStyleClass: model.variables.masterBalanceSpentTitleCustomStyleClassIn,
_spentTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._masterBalanceSpentTitleCustomStyleClassInDataFetchStatus),
IconArrowRight: model.variables.iconArrowRightIn,
_iconArrowRightInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconArrowRightInDataFetchStatus),
CustomStyleClass: model.variables.masterBalanceCardStyleClassIn,
_customStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._masterBalanceCardStyleClassInDataFetchStatus),
ChartMarkerTriangleColor: model.variables.chartMarkerTriangleColorIn,
_chartMarkerTriangleColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartMarkerTriangleColorInDataFetchStatus),
SpentValueCustomStyleClass: model.variables.masterBalanceSpentValueCustomStyleClassIn,
_spentValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._masterBalanceSpentValueCustomStyleClassInDataFetchStatus),
ShortLabelCustomStyleClass: model.variables.masterBalanceCardShortLabelCustomStyleClassIn,
_shortLabelCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._masterBalanceCardShortLabelCustomStyleClassInDataFetchStatus),
CellPhoneNumber: model.variables.cellPhoneNumberIn,
_cellPhoneNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cellPhoneNumberInDataFetchStatus),
BalanceRecord: model.getCachedValue(idService.getId("fCvvn7YGekGso1NCk2cOqA.BalanceRecord"), function () {
return (((model.variables.balanceListVar.length >= 1)) ? (model.variables.balanceListVar.getItem(0)) : (model.variables.emptyBalanceRecordVar));
}, function () {
return model.variables.balanceListVar.length;
}, function () {
return model.variables.balanceListVar.getItem(0);
}, function () {
return model.variables.emptyBalanceRecordVar;
}),
IconCustomStyleClass: model.variables.iconCustomStyleClassIn,
_iconCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconCustomStyleClassInDataFetchStatus),
ChartBorderMarkerBackgroundColor: model.variables.chartBorderMarkerBackgroundColorIn,
_chartBorderMarkerBackgroundColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartBorderMarkerBackgroundColorInDataFetchStatus),
ChartBackgroundColor: model.variables.chartBackgroundColorIn,
_chartBackgroundColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartBackgroundColorInDataFetchStatus),
CellPhoneTariff: model.variables.cellPhoneTariffIn,
_cellPhoneTariffInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cellPhoneTariffInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
internetBalanceClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardInternetBalanceClickEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
internetNameClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardInternetNameClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "58",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_view, {
inputs: {
LeftBalanceRecord: model.getCachedValue(idService.getId("z3PYmbZack+S3RZR2qzpRw.LeftBalanceRecord"), function () {
return (((model.variables.balanceListVar.length > 1)) ? (model.variables.balanceListVar.getItem(1)) : (model.variables.emptyBalanceRecordVar));
}, function () {
return model.variables.balanceListVar.length;
}, function () {
return model.variables.balanceListVar.getItem(1);
}, function () {
return model.variables.emptyBalanceRecordVar;
}),
AvailableTitleCustomStyleClass: model.variables.twoGraphAvailableTitleCustomStyleClassIn,
_availableTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._twoGraphAvailableTitleCustomStyleClassInDataFetchStatus),
CustomStyleClass: model.variables.twoGraphCustomStyleClassIn,
_customStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._twoGraphCustomStyleClassInDataFetchStatus),
AvailableValueCustomStyleClass: model.variables.twoGraphAvailableValueCustomStyleClassIn,
_availableValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._twoGraphAvailableValueCustomStyleClassInDataFetchStatus),
RightBalanceRecord: model.getCachedValue(idService.getId("z3PYmbZack+S3RZR2qzpRw.RightBalanceRecord"), function () {
return (((model.variables.balanceListVar.length > 2)) ? (model.variables.balanceListVar.getItem(2)) : (model.variables.emptyBalanceRecordVar));
}, function () {
return model.variables.balanceListVar.length;
}, function () {
return model.variables.balanceListVar.getItem(2);
}, function () {
return model.variables.emptyBalanceRecordVar;
}),
ShowLeftGraph: model.getCachedValue(idService.getId("z3PYmbZack+S3RZR2qzpRw.ShowLeftGraph"), function () {
return (((model.variables.balanceListVar.length > 1)) ? (true) : (false));
}, function () {
return model.variables.balanceListVar.length;
}),
ShowRightGraph: model.getCachedValue(idService.getId("z3PYmbZack+S3RZR2qzpRw.ShowRightGraph"), function () {
return (((model.variables.balanceListVar.length > 2)) ? (true) : (false));
}, function () {
return model.variables.balanceListVar.length;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
minutesInternetAdditionalClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.twoGraphCardClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "59",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(model.variables.balanceList_AddOnsVar.isEmpty, false, this, function () {
return [];
}, function () {
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvc_view, {
inputs: {
BalanceList: model.variables.balanceList_AddOnsVar
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
uuid: "60",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvc_view, {
inputs: {
BalanceValueCustomStyleClass: model.variables.balanceValueCustomStyleClassIn,
_balanceValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueCustomStyleClassInDataFetchStatus),
CashBalanceRecord: model.variables.cashBalanceRecordVar,
CustomClass: model.variables.balanceCustomClassIn,
_customClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceCustomClassInDataFetchStatus),
BalanceMessageCustomStyleClass: model.variables.balanceMessageCustomStyleClassIn,
_balanceMessageCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageCustomStyleClassInDataFetchStatus),
TitleCustomStyleClass: model.variables.balanceTitleCustomStyleClassIn,
_titleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceTitleCustomStyleClassInDataFetchStatus),
Description: model.variables.cashAdditionalInformationVar,
MinimumBalanceValueIn: model.variables.minimumBalanceValueVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
chargeOnClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardChargeClick$Action(controller.callContext(eventHandlerContext));
});
;
},
clickBalanceEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardClickBalance$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "61",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec", "BALANCE_MBLOCKS.model$STR_BALANCE_INFOList", "BALANCE_MBP.controller$GetBalanceConfigInfo", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.controller$ReplaceBalanceTagsWithValue", "BALANCE_MBLOCKS.controller$ReplaceBalancePipesWithValue", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec", "BALANCE_MBLOCKS.controller$GetBalanceAPPConfig", "BALANCE_MBP.controller$GetBalanceLinesV2_MBP", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecord", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBLOCKS.model$Local_SYNC_BALANCE_CONFIGRecordList", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBP.model$Local_SYNC_BALANCE_CONFIGRec", "BALANCE_MBP.entities"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._cardInternetBalanceClickEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CardInternetBalanceClickEvent");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: CardInternetClickBalanceEvent
return controller.cardInternetClickBalanceEvent$Action(callContext);
}

});
});
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(((((((((((((("1  - CellPhoneNumber:" + model.variables.cellPhoneNumberIn) + " CellPhoneTariff:") + model.variables.cellPhoneTariffIn) + " IsReadyToRun:") + (model.variables.isReadyToRunIn ? "True" : "False")) + " Application:") + model.variables.applicationIn) + " RefreshToken:") + model.variables.refreshTokenIn) + " AssociationID:") + OS.BuiltinFunctions.longIntegerToText(model.variables.associationIDIn)) + " PageCode:") + model.variables.pageCodeIn), "HomepageBalance", callContext);
return OS.Flow.executeSequence(function () {
if((model.variables.isReadyToRunIn)) {
// Execute Action: RefreshCard
return controller._refreshCard$Action(callContext);
}

});
});
};
Controller.prototype._twoGraphCardClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TwoGraphCardClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: TwoGraphCardClickEvent
return controller.twoGraphCardClickEvent$Action(callContext);
});
};
Controller.prototype._refreshCard$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RefreshCard");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var listIndexOfDescriptionVar = new OS.DataTypes.VariableHolder();
var getBalanceConfigInfoVar = new OS.DataTypes.VariableHolder();
var getMinimumBalanceAmountVar = new OS.DataTypes.VariableHolder();
var replaceTitleWithTagsVar = new OS.DataTypes.VariableHolder();
var listFilterOrder_0Var = new OS.DataTypes.VariableHolder();
var listFilterOrder_3Var = new OS.DataTypes.VariableHolder();
var replaceDescriptionBalancePipesVar = new OS.DataTypes.VariableHolder();
var getBalanceGroupEURVar = new OS.DataTypes.VariableHolder();
var getBalanceAPPConfigVar = new OS.DataTypes.VariableHolder();
var getBalanceLinesV2_MBPVar = new OS.DataTypes.VariableHolder();
var listFilterOrder_2Var = new OS.DataTypes.VariableHolder();
var listFilterOrder_1Var = new OS.DataTypes.VariableHolder();
var replaceDescriptionWithTagsVar = new OS.DataTypes.VariableHolder();
var listIndexOfTitleVar = new OS.DataTypes.VariableHolder();
var replaceTitleBalancePipesVar = new OS.DataTypes.VariableHolder();
var getPositionTagCodesVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESRecordList))());
var getCreditLinesVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGERecordList))());
var getCardTypeVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList))());
var getLinesBalanceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList))());
var getUserPortfolioSyncVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_SYNC_BALANCE_CONFIGRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// ClearVariables
// IsCashBalanceSet = False
model.variables.isCashBalanceSetVar = false;
// CashAdditionalInformation = ""
model.variables.cashAdditionalInformationVar = "";
// BalanceTagCodes = BalanceTagCodesEmpty
model.variables.balanceTagCodesVar = model.variables.balanceTagCodesEmptyVar;
// BalanceCardTypeCodes = BalanceCardTypeCodesEmpty
model.variables.balanceCardTypeCodesVar = model.variables.balanceCardTypeCodesEmptyVar;
// BalanceAttributesCodes = BalanceAttributesCodesEmpty
model.variables.balanceAttributesCodesVar = model.variables.balanceAttributesCodesEmptyVar;
// CashBalanceRecord = EmptyRecordCashBalance
model.variables.cashBalanceRecordVar = model.variables.emptyRecordCashBalanceVar;
// TempLocalBalance = EmptyBalanceRecord
model.variables.tempLocalBalanceVar = model.variables.emptyBalanceRecordVar;
// MinimumBalanceValue = 0.0
model.variables.minimumBalanceValueVar = (OS.DataTypes.Decimal.defaultValue);
// IsLoaded = False
model.variables.isLoadedVar = false;
// Execute Action: ListClearBalanceList
OS.SystemActions.listClear(model.variables.balanceListVar, callContext);
// Execute Action: ListClearBalanceListAux
OS.SystemActions.listClear(model.variables.balanceListAuxVar, callContext);
// Execute Action: ListClearBalanceAddOns
OS.SystemActions.listClear(model.variables.balanceList_AddOnsVar, callContext);
// Execute Action: ListClearPositionTag
OS.SystemActions.listClear(model.variables.positionTagListVar, callContext);
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetMinimumBalanceAmount
model.flush();
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("MINIMUM_BALANCE_AMOUNT", callContext).then(function (value) {
getMinimumBalanceAmountVar.value = value;
}).then(function () {
// SetMinimumBalanceAmount
// MinimumBalanceValue = TextToDecimal
model.variables.minimumBalanceValueVar = OS.BuiltinFunctions.textToDecimal(getMinimumBalanceAmountVar.value.valueOut);
// Execute Action: GetBalanceAPPConfig
model.flush();
return BALANCE_MBLOCKSController.default.getBalanceAPPConfig$Action(callContext).then(function (value) {
getBalanceAPPConfigVar.value = value;
});
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
// Execute Action: ListAppendAllPositionTag
OS.SystemActions.listAppendAll(model.variables.positionTagListVar, OS.DataTypes.JSConversions.typeConvertRecordList(getPositionTagCodesVar.value.listOut, new OS.DataTypes.TextList(), function (source, target) {
target = source.local_BALANCE_TAG_CODESAttr.codeAttr;
return target;
}), callContext);
// Aggregate: GetUserPortfolioSync
var getUserPortfolioSyncAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_SYNC_BALANCE_CONFIGRecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2";
} else {
selectSql += "\"ENLocal_SYNC_BALANCE_CONFIG\".\"Id\" o0, \"ENLocal_SYNC_BALANCE_CONFIG\".\"UpdatedAt\" o1, \"ENLocal_SYNC_BALANCE_CONFIG\".\"BalanceConfigSuccessfullyUpd\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_SYNC_BALANCE_CONFIG\" \"ENLocal_SYNC_BALANCE_CONFIG\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_SYNC_BALANCE_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SYNC_BALANCE_CONFIGAttr",
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
return getUserPortfolioSyncVar.value;
});
};
return getUserPortfolioSyncAggr();
}).then(function () {
// Execute Action: LogMessage2
OS.SystemActions.logMessage(("2  - BalanceConfigSuccessfullyUpd:" + (getUserPortfolioSyncVar.value.listOut.getCurrent(callContext.iterationContext).local_SYNC_BALANCE_CONFIGAttr.balanceConfigSuccessfullyUpdAttr ? "True" : "False")), "HomepageBalance", callContext);
}).then(function () {
// BalanceConfigSuccessfullyUpd?
return OS.Flow.executeSequence(function () {
if((getUserPortfolioSyncVar.value.listOut.getCurrent(callContext.iterationContext).local_SYNC_BALANCE_CONFIGAttr.balanceConfigSuccessfullyUpdAttr)) {
// Execute Action: GetBalanceLinesV2_MBP
model.flush();
return BALANCE_MBPController.default.getBalanceLinesV2_MBP$Action(model.variables.cellPhoneNumberIn, "HomePage", false, model.variables.pageCodeIn, model.variables.refreshTokenIn, model.variables.associationIDIn, model.variables.applicationIn, model.variables.cacheValidationIntervalIn, callContext).then(function (value) {
getBalanceLinesV2_MBPVar.value = value;
}).then(function () {
// Execute Action: LogMessage3
OS.SystemActions.logMessage(("3  - BalanceSuccess:" + (getBalanceLinesV2_MBPVar.value.successOut ? "True" : "False")), "HomepageBalance", callContext);
}).then(function () {
// GetBalanceLines.Success?
return OS.Flow.executeSequence(function () {
if((getBalanceLinesV2_MBPVar.value.successOut)) {
// Aggregate: GetLinesBalance
var getLinesBalanceAggr = function (maxRecords) {
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

var qpstLocal_BALANCE_LINES_CellPhoneNumber = model.variables.cellPhoneNumberIn;
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
fromAndWhereSql += " WHERE (\"ENLocal_BALANCE_LINES\".\"CellPhoneNumber\" = :qpstLocal_BALANCE_LINES_CellPhoneNumber) AND (\"ENLocal_BALANCE_LINES\".\"PageCode\" = :qpstPageCode) AND (\"ENLocal_PAGE\".\"Code\" = :qpstPageCode) AND (\"ENLocal_BALANCE_LINES\".\"IsCredit\" = 0)";
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
return getLinesBalanceVar.value;
});
};
return getLinesBalanceAggr().then(function () {
// GetLinesList
// Foreach GetLinesBalance.List
callContext.iterationContext.registerIterationStart(getLinesBalanceVar.value.listOut);
}).then(function () {
return OS.Flow.tryFinally(function () {
var getLinesBalanceIterator = callContext.iterationContext.getIterator(getLinesBalanceVar.value.listOut);
var getLinesBalanceIndexMax = getLinesBalanceVar.value.listOut.length;
var getLinesBalanceIndex = 0;
return OS.Flow.whileAsync(function () {
return (((getLinesBalanceIndex < getLinesBalanceVar.value.listOut.length)) && (getLinesBalanceIndexMax > 0));
}, function () {
getLinesBalanceIterator.currentRowNumber = getLinesBalanceIndex;
// SetLocalBalance
// TempLocalBalance = GetLinesBalance.List.Current.Local_BALANCE_LINES
model.variables.tempLocalBalanceVar = OS.DataTypes.JSConversions.typeConvertRecord(getLinesBalanceVar.value.listOut.getItem(getLinesBalanceIndex.valueOf()).local_BALANCE_LINESAttr, new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec(), function (source, target) {
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
// Execute Action: GetBalanceConfigInfo
model.flush();
return BALANCE_MBPController.default.getBalanceConfigInfo$Action(getLinesBalanceVar.value.listOut.getItem(getLinesBalanceIndex.valueOf()).local_BALANCE_CONFIGAttr.idAttr, getLinesBalanceVar.value.listOut.getItem(getLinesBalanceIndex.valueOf()).local_BALANCE_LINESAttr.idAttr, callContext).then(function (value) {
getBalanceConfigInfoVar.value = value;
}).then(function () {
// TempLocalBalance.GraphTypeID = GetBalanceConfigInfo.BalanceGraphTypeID
model.variables.tempLocalBalanceVar.graphTypeIDAttr = getBalanceConfigInfoVar.value.balanceGraphTypeIDOut;
// TempLocalBalance.CardTypeID = GetBalanceConfigInfo.BalanceCardTypeID
model.variables.tempLocalBalanceVar.cardTypeIDAttr = getBalanceConfigInfoVar.value.balanceCardTypeIDOut;
}).then(function () {
// GetBalanceConfiInfo.Empty?
return OS.Flow.executeSequence(function () {
if((!((!(getBalanceConfigInfoVar.value.successOut) || getBalanceConfigInfoVar.value.balanceConfigListOut.isEmpty)))) {
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
listIndexOfTitleVar.value = OS.SystemActions.listIndexOf(getBalanceConfigInfoVar.value.balanceConfigListOut, function (p) {
return (p.attributeCodeAttr === model.variables.balanceAttributesCodesVar.titleCodeAttr);
}, callContext);

// TitleNotFound?
return OS.Flow.executeSequence(function () {
if((!((listIndexOfTitleVar.value.positionOut === -1)))) {
// Execute Action: ReplaceTitleWithTags
replaceTitleWithTagsVar.value = BALANCE_MBLOCKSController.default.replaceBalanceTagsWithValue$Action(getBalanceConfigInfoVar.value.balanceConfigListOut.getItem(listIndexOfTitleVar.value.positionOut).valueAttr, model.variables.tempLocalBalanceVar, model.variables.balanceTagCodesVar.availableBalanceTagAttr, model.variables.balanceTagCodesVar.availableBalanceUnitTagAttr, model.variables.balanceTagCodesVar.spentBalanceTagAttr, model.variables.balanceTagCodesVar.plafondBalanceTagAttr, model.variables.balanceTagCodesVar.packageNumberBalanceTagAttr, model.variables.balanceTagCodesVar.spentBalanceUnitTagAttr, model.variables.balanceTagCodesVar.totalBalanceUnitTagAttr, callContext);

// Execute Action: ReplaceTitleBalancePipes
model.flush();
return BALANCE_MBLOCKSController.default.replaceBalancePipesWithValue$Action(replaceTitleWithTagsVar.value.outputTextOut, getLinesBalanceVar.value.listOut.getItem(getLinesBalanceIndex.valueOf()).local_BALANCE_LINESAttr.idAttr, model.variables.positionTagListVar, model.variables.balanceTagCodesVar.balanceDataTypeSeparatorAttr, callContext).then(function (value) {
replaceTitleBalancePipesVar.value = value;
}).then(function () {
// SeTitle
// TempLocalBalance.Title = ReplaceTitleBalancePipes.OutputText
model.variables.tempLocalBalanceVar.titleAttr = replaceTitleBalancePipesVar.value.outputTextOut;
});
}

}).then(function () {
// Execute Action: ListIndexOfDescription
listIndexOfDescriptionVar.value = OS.SystemActions.listIndexOf(getBalanceConfigInfoVar.value.balanceConfigListOut, function (p) {
return (p.attributeCodeAttr === model.variables.balanceAttributesCodesVar.descriptionCodeAttr);
}, callContext);

// DescriptionNotFound?
return OS.Flow.executeSequence(function () {
if((!((listIndexOfDescriptionVar.value.positionOut === -1)))) {
// Execute Action: ReplaceDescriptionWithTags
replaceDescriptionWithTagsVar.value = BALANCE_MBLOCKSController.default.replaceBalanceTagsWithValue$Action(getBalanceConfigInfoVar.value.balanceConfigListOut.getItem(listIndexOfDescriptionVar.value.positionOut).valueAttr, model.variables.tempLocalBalanceVar, model.variables.balanceTagCodesVar.availableBalanceTagAttr, model.variables.balanceTagCodesVar.availableBalanceUnitTagAttr, model.variables.balanceTagCodesVar.spentBalanceTagAttr, model.variables.balanceTagCodesVar.plafondBalanceTagAttr, model.variables.balanceTagCodesVar.packageNumberBalanceTagAttr, model.variables.balanceTagCodesVar.spentBalanceUnitTagAttr, model.variables.balanceTagCodesVar.totalBalanceUnitTagAttr, callContext);

// Execute Action: ReplaceDescriptionBalancePipes
model.flush();
return BALANCE_MBLOCKSController.default.replaceBalancePipesWithValue$Action(replaceDescriptionWithTagsVar.value.outputTextOut, getLinesBalanceVar.value.listOut.getItem(getLinesBalanceIndex.valueOf()).local_BALANCE_LINESAttr.idAttr, model.variables.positionTagListVar, model.variables.balanceTagCodesVar.balanceDataTypeSeparatorAttr, callContext).then(function (value) {
replaceDescriptionBalancePipesVar.value = value;
}).then(function () {
// SetDescription
// TempLocalBalance.Description = ReplaceDescriptionBalancePipes.OutputText
model.variables.tempLocalBalanceVar.descriptionAttr = replaceDescriptionBalancePipesVar.value.outputTextOut;
});
}

});
}).then(function () {
// IsCash?
if(((OS.BuiltinFunctions.toLower(getCardTypeVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_CARD_TYPEAttr.codeAttr) === OS.BuiltinFunctions.toLower(model.variables.balanceCardTypeCodesVar.cashCardCodeAttr)))) {
// IsMessageGroup?
if(((OS.BuiltinFunctions.toLower(getLinesBalanceVar.value.listOut.getItem(getLinesBalanceIndex.valueOf()).local_BALANCE_LINESAttr.balanceGroupDescriptionAttr) === OS.BuiltinFunctions.toLower(model.variables.messageGroupVar)))) {
// CashAdditionalInformation = If
model.variables.cashAdditionalInformationVar = ((((OS.BuiltinFunctions.trim(model.variables.tempLocalBalanceVar.descriptionAttr)) !== (""))) ? (((model.variables.cashAdditionalInformationVar + " ") + model.variables.tempLocalBalanceVar.descriptionAttr)) : (model.variables.cashAdditionalInformationVar));
} else {
if((!(model.variables.isCashBalanceSetVar))) {
// SetCashBalanceRecord
// CashBalanceRecord = TempLocalBalance
model.variables.cashBalanceRecordVar = OS.DataTypes.JSConversions.typeConvertRecord(model.variables.tempLocalBalanceVar, new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec(), function (source, target) {
target.titleAttr = source.titleAttr;
target.valueAttr = source.availableAmountAttr;
return target;
});
// CashAdditionalInformation = CashAdditionalInformation + " " + TempLocalBalance.Description
model.variables.cashAdditionalInformationVar = ((model.variables.cashAdditionalInformationVar + " ") + model.variables.tempLocalBalanceVar.descriptionAttr);
// IsCashBalanceSet = True
model.variables.isCashBalanceSetVar = true;
}

}

} else {
// Is AddOns?
if(((OS.BuiltinFunctions.toLower(getCardTypeVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_CARD_TYPEAttr.codeAttr) === OS.BuiltinFunctions.toLower(model.variables.balanceCardTypeCodesVar.addOnsCardCodeAttr)))) {
// Execute Action: ListAppendBalance_AddOns
OS.SystemActions.listAppend(model.variables.balanceList_AddOnsVar, model.variables.tempLocalBalanceVar, callContext);
} else {
// Execute Action: ListAppendBalanceAux
OS.SystemActions.listAppend(model.variables.balanceListAuxVar, model.variables.tempLocalBalanceVar, callContext);
}

}

});
}

});
});
}

});
}).then(function () {
getLinesBalanceIndexMax--;
getLinesBalanceIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(getLinesBalanceVar.value.listOut);
});
}).then(function () {
// Execute Action: LogMessage4
OS.SystemActions.logMessage(("4  - BalanceList Length:" + (model.variables.balanceListVar.length).toString()), "HomepageBalance", callContext);
// BalanceList.Length >= 3?
return OS.Flow.executeSequence(function () {
if(((model.variables.balanceListAuxVar.length >= 3))) {
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
// Execute Action: LogMessage5
OS.SystemActions.logMessage(("4.2  - BalanceList Length:" + (model.variables.balanceListVar.length).toString()), "HomepageBalance", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
// IsLoaded = True
model.variables.isLoadedVar = true;
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
return OS.Flow.returnAsync();

} else {
// Trigger Event: LoadingFinished3
return controller.loadingFinished$Action(model.variables.cashBalanceRecordVar.valueAttr, model.variables.cashAdditionalInformationVar, true, model.variables.balanceListVar.length, callContext).then(function () {
return OS.Flow.returnAsync();

});
}

});
} else {
// Aggregate: GetCreditLines
var getCreditLinesAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstLocal_BALANCE_LINES_CellPhoneNumber = model.variables.cellPhoneNumberIn;
var qpstPageCode = model.variables.pageCodeIn;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13, NULL o14, NULL o15, NULL o16, NULL o17, NULL o18, NULL o19, NULL o20, NULL o21, NULL o22, NULL o23, NULL o24, NULL o25, NULL o26, NULL o27";
} else {
selectSql += "\"ENLocal_BALANCE_LINES\".\"Id\" o0, \"ENLocal_BALANCE_LINES\".\"BalanceGroupDescription\" o1, \"ENLocal_BALANCE_LINES\".\"AvailableAmount\" o2, \"ENLocal_BALANCE_LINES\".\"AvailableAmountUnit\" o3, \"ENLocal_BALANCE_LINES\".\"CellPhoneNumber\" o4, \"ENLocal_BALANCE_LINES\".\"ConsumedAmount\" o5, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountUnit\" o6, \"ENLocal_BALANCE_LINES\".\"TotalAmount\" o7, \"ENLocal_BALANCE_LINES\".\"TotalAmountUnit\" o8, \"ENLocal_BALANCE_LINES\".\"Order\" o9, \"ENLocal_BALANCE_LINES\".\"DateTime\" o10, \"ENLocal_BALANCE_LINES\".\"PackageNumber\" o11, \"ENLocal_BALANCE_LINES\".\"IsCredit\" o12, \"ENLocal_BALANCE_LINES\".\"CreditDescription\" o13, \"ENLocal_BALANCE_LINES\".\"TagCode\" o14, \"ENLocal_BALANCE_LINES\".\"PageCode\" o15, \"ENLocal_BALANCE_LINES\".\"AvailableAmountFmt\" o16, \"ENLocal_BALANCE_LINES\".\"AvailableAmountUnitFmt\" o17, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountFmt\" o18, \"ENLocal_BALANCE_LINES\".\"ConsumedAmountUnitFmt\" o19, \"ENLocal_BALANCE_LINES\".\"TotalAmountFmt\" o20, \"ENLocal_BALANCE_LINES\".\"TotalAmountUnitFmt\" o21, \"ENLocal_BALANCE_LINES\".\"CacheExpirationDate\" o22, \"ENLocal_BALANCE_LINES\".\"ExpiryDate\" o23, \"ENLocal_PAGE\".\"Id\" o24, \"ENLocal_PAGE\".\"Label\" o25, \"ENLocal_PAGE\".\"Code\" o26, \"ENLocal_PAGE\".\"DateTime\" o27";
}
fromAndWhereSql += " FROM (\"MAIN\".\"OSUSR_qsx_Local_BALANCE_LINES\" \"ENLocal_BALANCE_LINES\" Inner JOIN \"MAIN\".\"OSUSR_qsx_Local_PAGE\" \"ENLocal_PAGE\" ON (\"ENLocal_BALANCE_LINES\".\"PageCode\" = \"ENLocal_PAGE\".\"Code\")) ";
fromAndWhereSql += " WHERE (\"ENLocal_BALANCE_LINES\".\"CellPhoneNumber\" = :qpstLocal_BALANCE_LINES_CellPhoneNumber) AND (\"ENLocal_BALANCE_LINES\".\"PageCode\" = :qpstPageCode) AND (\"ENLocal_PAGE\".\"Code\" = :qpstPageCode) AND (\"ENLocal_BALANCE_LINES\".\"IsCredit\" = 1)";
argsList.add("qpstLocal_BALANCE_LINES_CellPhoneNumber", /*TEXT*/ 0, qpstLocal_BALANCE_LINES_CellPhoneNumber);
argsList.add("qpstPageCode", /*TEXT*/ 0, qpstPageCode);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
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
return getCreditLinesVar.value;
});
};
return getCreditLinesAggr().then(function () {
// GetCreditLines
// Foreach GetCreditLines.List
callContext.iterationContext.registerIterationStart(getCreditLinesVar.value.listOut);
}).then(function () {
try {var getCreditLinesIterator = callContext.iterationContext.getIterator(getCreditLinesVar.value.listOut);
var getCreditLinesIndexMax = getCreditLinesVar.value.listOut.length;
var getCreditLinesIndex = 0;
while ((((getCreditLinesIndex < getCreditLinesVar.value.listOut.length)) && (getCreditLinesIndexMax > 0))) {
getCreditLinesIterator.currentRowNumber = getCreditLinesIndex;
// CreditGraphUnavailable?
if((!(((getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()).local_BALANCE_LINESAttr.totalAmountAttr === "0") && (getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()).local_BALANCE_LINESAttr.availableAmountAttr === "0"))))) {
// IsMoneyBalance?
if((!((OS.BuiltinFunctions.toLower(getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()).local_BALANCE_LINESAttr.balanceGroupDescriptionAttr) === OS.BuiltinFunctions.toLower(model.variables.balanceGroupMoneyVar))))) {
// Execute Action: ListAppendCredit
OS.SystemActions.listAppend(model.variables.balanceListAuxVar, OS.DataTypes.JSConversions.typeConvertRecord(getCreditLinesVar.value.listOut.getItem(getCreditLinesIndex.valueOf()), new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec(), function (source, target) {
target.titleAttr = source.local_BALANCE_LINESAttr.creditDescriptionAttr;
target.availableAmountAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.availableAmountAttr);
target.availableAmountUnitAttr = source.local_BALANCE_LINESAttr.availableAmountUnitAttr;
target.consumedAmountAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.consumedAmountAttr);
target.consumedAmountUnitAttr = source.local_BALANCE_LINESAttr.consumedAmountUnitAttr;
target.totalAmountAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountAttr);
target.totalAmountUnitAttr = source.local_BALANCE_LINESAttr.totalAmountUnitAttr;
target.mSISDNAttr = source.local_BALANCE_LINESAttr.cellPhoneNumberAttr;
target.showBalanceUnitAttr = (((source.local_BALANCE_LINESAttr.balanceGroupDescriptionAttr === model.variables.minSMSTypeVar)) ? (false) : (true));
target.orderAttr = source.local_BALANCE_LINESAttr.orderAttr;
target.isLimitedAttr = (((OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountAttr).gte(OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.availableAmountAttr)) && OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountAttr).gt(OS.BuiltinFunctions.integerToDecimal(0)))) ? (true) : (false));
target.availableAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.availableAmountFmtAttr);
target.availableAmountUnitFmtAttr = source.local_BALANCE_LINESAttr.availableAmountUnitFmtAttr;
target.consumedAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.consumedAmountFmtAttr);
target.consumedAmountUnitFmtAttr = source.local_BALANCE_LINESAttr.consumedAmountUnitFmtAttr;
target.totalAmountFmtAttr = OS.BuiltinFunctions.textToDecimal(source.local_BALANCE_LINESAttr.totalAmountFmtAttr);
target.totalAmountUnitFmtAttr = source.local_BALANCE_LINESAttr.totalAmountUnitFmtAttr;
return target;
}), callContext);
}

}

getCreditLinesIndexMax--;
getCreditLinesIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(getCreditLinesVar.value.listOut);
}

// Execute Action: ListFilterOrder_2
listFilterOrder_2Var.value = OS.SystemActions.listFilter(model.variables.balanceListAuxVar, function (p) {
return (p.orderAttr >= 1);
}, callContext);

// Execute Action: ListAppendAllOrder_2
OS.SystemActions.listAppendAll(model.variables.balanceListVar, listFilterOrder_2Var.value.filteredListOut, callContext);
// Execute Action: ListFilterOrder_3
listFilterOrder_3Var.value = OS.SystemActions.listFilter(model.variables.balanceListAuxVar, function (p) {
return (p.orderAttr === 0);
}, callContext);

// Execute Action: ListAppendAllOrder_3
OS.SystemActions.listAppendAll(model.variables.balanceListVar, listFilterOrder_3Var.value.filteredListOut, callContext);
// Execute Action: LogMessage6
OS.SystemActions.logMessage(("4.1  - BalanceList Length:" + (model.variables.balanceListVar.length).toString()), "HomepageBalance", callContext);
// HasNoService = False
model.variables.hasNoServiceVar = false;
// IsLoading = False
model.variables.isLoadingVar = false;
// IsLoaded = True
model.variables.isLoadedVar = true;
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
return OS.Flow.returnAsync();

} else {
// Trigger Event: LoadingFinished4
return controller.loadingFinished$Action(model.variables.cashBalanceRecordVar.valueAttr, model.variables.cashAdditionalInformationVar, true, model.variables.balanceListVar.length, callContext).then(function () {
return OS.Flow.returnAsync();

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
}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: LoadingFinished
return controller.loadingFinished$Action((OS.DataTypes.Decimal.defaultValue), "", false, model.variables.balanceListVar.length, callContext).then(function () {
// HasNoService = True
model.variables.hasNoServiceVar = true;
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("HomePageBalanceOrchestrationV3.RefreshCard", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// HasNoService = True
model.variables.hasNoServiceVar = true;
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
return OS.Flow.returnAsync();

} else {
// Trigger Event: LoadingFinished5
return controller.loadingFinished$Action((OS.DataTypes.Decimal.defaultValue), "", false, model.variables.balanceListVar.length, callContext).then(function () {
return OS.Flow.returnAsync();

});
}

});
});
}

throw ex;
});
};
Controller.prototype._cardInternetNameClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CardInternetNameClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: CardInternetNameClickEvent
return controller.cardInternetNameClickEvent$Action(callContext);
}

});
});
};
Controller.prototype._cardClickBalance$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CardClickBalance");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: CardInternetClickBalanceEvent
return controller.cardInternetClickBalanceEvent$Action(callContext);
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
Controller.prototype._cardChargeClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CardChargeClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: CardChargeClickEvent
return controller.cardChargeClickEvent$Action(callContext);
}

});
});
};

Controller.prototype.cardInternetBalanceClickEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardInternetBalanceClickEvent$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.twoGraphCardClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._twoGraphCardClick$Action, callContext);

};
Controller.prototype.refreshCard$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._refreshCard$Action, callContext);

};
Controller.prototype.cardInternetNameClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardInternetNameClick$Action, callContext);

};
Controller.prototype.cardClickBalance$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardClickBalance$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.cardChargeClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardChargeClick$Action, callContext);

};
Controller.prototype.loadingFinished$Action = function () {
return Promise.resolve();
};
Controller.prototype.cardChargeClickEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.cardInternetNameClickEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.twoGraphCardClickEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.cardInternetClickBalanceEvent$Action = function () {
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

