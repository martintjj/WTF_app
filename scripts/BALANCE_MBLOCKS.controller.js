define("BALANCE_MBLOCKS.controller$GetBalanceAPPConfig", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.controller$GetBalanceConfigAttributes", "BALANCE_MBLOCKS.controller$GetBalanceTagsCodes", "BALANCE_MBLOCKS.controller$GetBalanceCardTypeCodes", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceAPPConfig$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getMessageGroupVar = new OS.DataTypes.VariableHolder();
var getBalanceConfigAttributesVar = new OS.DataTypes.VariableHolder();
var getExpiryDateDifDaysVar = new OS.DataTypes.VariableHolder();
var getBalanceTagsCodesVar = new OS.DataTypes.VariableHolder();
var getBalanceCardTypeCodesVar = new OS.DataTypes.VariableHolder();
var getMinSmsTypeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceAPPConfig$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetBalanceTagsCodes
return BALANCE_MBLOCKSController.default.getBalanceTagsCodes$Action(callContext).then(function (value) {
getBalanceTagsCodesVar.value = value;
}).then(function () {
// SetBalanceTagCodes
// BalanceTagCodesStruct.AvailableBalanceTag = GetBalanceTagsCodes.AvailableBalanceTagOut
outVars.value.balanceTagCodesStructOut.availableBalanceTagAttr = getBalanceTagsCodesVar.value.availableBalanceTagOutOut;
// BalanceTagCodesStruct.AvailableBalanceUnitTag = GetBalanceTagsCodes.AvailableBalanceUnitTagOut
outVars.value.balanceTagCodesStructOut.availableBalanceUnitTagAttr = getBalanceTagsCodesVar.value.availableBalanceUnitTagOutOut;
// BalanceTagCodesStruct.SpentBalanceTag = GetBalanceTagsCodes.SpentBalanceTagOut
outVars.value.balanceTagCodesStructOut.spentBalanceTagAttr = getBalanceTagsCodesVar.value.spentBalanceTagOutOut;
// BalanceTagCodesStruct.PlafondBalanceTag = GetBalanceTagsCodes.PlafondBalanceTagOut
outVars.value.balanceTagCodesStructOut.plafondBalanceTagAttr = getBalanceTagsCodesVar.value.plafondBalanceTagOutOut;
// BalanceTagCodesStruct.BalanceDataTypeSeparator = GetBalanceTagsCodes.BalanceDataTypeSeparator
outVars.value.balanceTagCodesStructOut.balanceDataTypeSeparatorAttr = getBalanceTagsCodesVar.value.balanceDataTypeSeparatorOut;
// BalanceTagCodesStruct.PackageNumberBalanceTag = GetBalanceTagsCodes.PackageNumberTagOut
outVars.value.balanceTagCodesStructOut.packageNumberBalanceTagAttr = getBalanceTagsCodesVar.value.packageNumberTagOutOut;
// BalanceTagCodesStruct.TotalBalanceUnitTag = GetBalanceTagsCodes.PlafondBalanceUnitTagOut
outVars.value.balanceTagCodesStructOut.totalBalanceUnitTagAttr = getBalanceTagsCodesVar.value.plafondBalanceUnitTagOutOut;
// BalanceTagCodesStruct.SpentBalanceUnitTag = GetBalanceTagsCodes.SpentBalanceUnitTagOut
outVars.value.balanceTagCodesStructOut.spentBalanceUnitTagAttr = getBalanceTagsCodesVar.value.spentBalanceUnitTagOutOut;
// Execute Action: GetBalanceConfigAttributes
return BALANCE_MBLOCKSController.default.getBalanceConfigAttributes$Action(callContext).then(function (value) {
getBalanceConfigAttributesVar.value = value;
});
}).then(function () {
// SetConfigAttributes
// BalanceAttributesCodesStruct.TitleCode = GetBalanceConfigAttributes.TitleCodeOut
outVars.value.balanceAttributesCodesStructOut.titleCodeAttr = getBalanceConfigAttributesVar.value.titleCodeOutOut;
// BalanceAttributesCodesStruct.DescriptionCode = GetBalanceConfigAttributes.DescriptionCodeOut
outVars.value.balanceAttributesCodesStructOut.descriptionCodeAttr = getBalanceConfigAttributesVar.value.descriptionCodeOutOut;
// Execute Action: GetBalanceCardTypeCodes
return BALANCE_MBLOCKSController.default.getBalanceCardTypeCodes$Action(callContext).then(function (value) {
getBalanceCardTypeCodesVar.value = value;
});
}).then(function () {
// SetCardTypeCodes
// BalanceCardTypeStruct.InternetCardCode = GetBalanceCardTypeCodes.InternetCardCodeOut
outVars.value.balanceCardTypeStructOut.internetCardCodeAttr = getBalanceCardTypeCodesVar.value.internetCardCodeOutOut;
// BalanceCardTypeStruct.MinutesCardCode = GetBalanceCardTypeCodes.MinutesCardCodeOut
outVars.value.balanceCardTypeStructOut.minutesCardCodeAttr = getBalanceCardTypeCodesVar.value.minutesCardCodeOutOut;
// BalanceCardTypeStruct.GeneralCardCode = GetBalanceCardTypeCodes.GeneralCardCodeOut
outVars.value.balanceCardTypeStructOut.generalCardCodeAttr = getBalanceCardTypeCodesVar.value.generalCardCodeOutOut;
// BalanceCardTypeStruct.CashCardCode = GetBalanceCardTypeCodes.CashCardCodeOut
outVars.value.balanceCardTypeStructOut.cashCardCodeAttr = getBalanceCardTypeCodesVar.value.cashCardCodeOutOut;
// BalanceCardTypeStruct.AddOnsCardCode = GetBalanceCardTypeCodes.AddOnsCodeOut
outVars.value.balanceCardTypeStructOut.addOnsCardCodeAttr = getBalanceCardTypeCodesVar.value.addOnsCodeOutOut;
// Execute Action: GetMinSmsType
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("MINUTE_SMS_TYPE_DESCRIPTION", callContext).then(function (value) {
getMinSmsTypeVar.value = value;
});
}).then(function () {
// SetMinSMSType
// MinSMSTypeOut = GetMinSmsType.Value
outVars.value.minSMSTypeOutOut = getMinSmsTypeVar.value.valueOut;
// Execute Action: GetMessageGroup
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_MESSAGE_GROUP", callContext).then(function (value) {
getMessageGroupVar.value = value;
});
}).then(function () {
// SetMessageGroup
// MessageGroupOut = GetMessageGroup.Value
outVars.value.messageGroupOutOut = getMessageGroupVar.value.valueOut;
// Execute Action: GetExpiryDateDifDays
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("EXPIRY_DATE_DIFFDAYS", callContext).then(function (value) {
getExpiryDateDifDaysVar.value = value;
});
}).then(function () {
// SetGetExpiryDateDifDays
// ExpiryDateDiffDays = TextToInteger
outVars.value.expiryDateDiffDaysOut = OS.BuiltinFunctions.textToInteger(getExpiryDateDifDaysVar.value.valueOut);
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceAPPConfig", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceAPPConfig$outVars", [{
name: "BalanceTagCodesStruct",
attrName: "balanceTagCodesStructOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec();
},
complexType: BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec
}, {
name: "BalanceAttributesCodesStruct",
attrName: "balanceAttributesCodesStructOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec();
},
complexType: BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec
}, {
name: "BalanceCardTypeStruct",
attrName: "balanceCardTypeStructOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec();
},
complexType: BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec
}, {
name: "MessageGroupOut",
attrName: "messageGroupOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MinSMSTypeOut",
attrName: "minSMSTypeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ExpiryDateDiffDays",
attrName: "expiryDateDiffDaysOut",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceAPPConfig$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceAPPConfig$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BalanceTagCodesStruct: actionResults.balanceTagCodesStructOut,
BalanceAttributesCodesStruct: actionResults.balanceAttributesCodesStructOut,
BalanceCardTypeStruct: actionResults.balanceCardTypeStructOut,
MessageGroupOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.messageGroupOutOut, OS.Types.Text, true),
MinSMSTypeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.minSMSTypeOutOut, OS.Types.Text, true),
ExpiryDateDiffDays: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.expiryDateDiffDaysOut, OS.Types.Integer, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$GetBalanceAPPConfigBO", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.controller$GetBalanceTagsCodesBO", "BALANCE_MBLOCKS.controller$GetBalanceCardTypeCodesBO", "BALANCE_MBLOCKS.controller$GetBalanceConfigAttributesBO", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceAPPConfigBO$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getMinSmsTypeVar = new OS.DataTypes.VariableHolder();
var getBalanceTagsCodesBOVar = new OS.DataTypes.VariableHolder();
var getBalanceCardTypeCodesBOVar = new OS.DataTypes.VariableHolder();
var getMessageGroupVar = new OS.DataTypes.VariableHolder();
var getBalanceConfigAttributesBOVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceAPPConfigBO$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetBalanceTagsCodesBO
return BALANCE_MBLOCKSController.default.getBalanceTagsCodesBO$Action(callContext).then(function (value) {
getBalanceTagsCodesBOVar.value = value;
}).then(function () {
// SetBalanceTagCodes
// BalanceTagCodesStruct.AvailableBalanceTag = GetBalanceTagsCodesBO.AvailableBalanceTagOut
outVars.value.balanceTagCodesStructOut.availableBalanceTagAttr = getBalanceTagsCodesBOVar.value.availableBalanceTagOutOut;
// BalanceTagCodesStruct.AvailableBalanceUnitTag = GetBalanceTagsCodesBO.AvailableBalanceUnitTagOut
outVars.value.balanceTagCodesStructOut.availableBalanceUnitTagAttr = getBalanceTagsCodesBOVar.value.availableBalanceUnitTagOutOut;
// BalanceTagCodesStruct.SpentBalanceTag = GetBalanceTagsCodesBO.SpentBalanceTagOut
outVars.value.balanceTagCodesStructOut.spentBalanceTagAttr = getBalanceTagsCodesBOVar.value.spentBalanceTagOutOut;
// BalanceTagCodesStruct.PlafondBalanceTag = GetBalanceTagsCodesBO.PlafondBalanceTagOut
outVars.value.balanceTagCodesStructOut.plafondBalanceTagAttr = getBalanceTagsCodesBOVar.value.plafondBalanceTagOutOut;
// BalanceTagCodesStruct.BalanceDataTypeSeparator = GetBalanceTagsCodesBO.BalanceDataTypeSeparator
outVars.value.balanceTagCodesStructOut.balanceDataTypeSeparatorAttr = getBalanceTagsCodesBOVar.value.balanceDataTypeSeparatorOut;
// BalanceTagCodesStruct.PackageNumberBalanceTag = GetBalanceTagsCodesBO.PackageNumberTagOut
outVars.value.balanceTagCodesStructOut.packageNumberBalanceTagAttr = getBalanceTagsCodesBOVar.value.packageNumberTagOutOut;
// BalanceTagCodesStruct.TotalBalanceUnitTag = GetBalanceTagsCodesBO.PlafondBalanceUnitTagOut
outVars.value.balanceTagCodesStructOut.totalBalanceUnitTagAttr = getBalanceTagsCodesBOVar.value.plafondBalanceUnitTagOutOut;
// BalanceTagCodesStruct.SpentBalanceUnitTag = GetBalanceTagsCodesBO.SpentBalanceUnitTagOut
outVars.value.balanceTagCodesStructOut.spentBalanceUnitTagAttr = getBalanceTagsCodesBOVar.value.spentBalanceUnitTagOutOut;
// Execute Action: GetBalanceConfigAttributesBO
return BALANCE_MBLOCKSController.default.getBalanceConfigAttributesBO$Action(callContext).then(function (value) {
getBalanceConfigAttributesBOVar.value = value;
});
}).then(function () {
// SetConfigAttributes
// BalanceAttributesCodesStruct.TitleCode = GetBalanceConfigAttributesBO.TitleCodeOut
outVars.value.balanceAttributesCodesStructOut.titleCodeAttr = getBalanceConfigAttributesBOVar.value.titleCodeOutOut;
// BalanceAttributesCodesStruct.DescriptionCode = GetBalanceConfigAttributesBO.DescriptionCodeOut
outVars.value.balanceAttributesCodesStructOut.descriptionCodeAttr = getBalanceConfigAttributesBOVar.value.descriptionCodeOutOut;
// Execute Action: GetBalanceCardTypeCodesBO
return BALANCE_MBLOCKSController.default.getBalanceCardTypeCodesBO$Action(callContext).then(function (value) {
getBalanceCardTypeCodesBOVar.value = value;
});
}).then(function () {
// SetCardTypeCodes
// BalanceCardTypeStruct.InternetCardCode = GetBalanceCardTypeCodesBO.InternetCardCodeOut
outVars.value.balanceCardTypeStructOut.internetCardCodeAttr = getBalanceCardTypeCodesBOVar.value.internetCardCodeOutOut;
// BalanceCardTypeStruct.MinutesCardCode = GetBalanceCardTypeCodesBO.MinutesCardCodeOut
outVars.value.balanceCardTypeStructOut.minutesCardCodeAttr = getBalanceCardTypeCodesBOVar.value.minutesCardCodeOutOut;
// BalanceCardTypeStruct.GeneralCardCode = GetBalanceCardTypeCodesBO.GeneralCardCodeOut
outVars.value.balanceCardTypeStructOut.generalCardCodeAttr = getBalanceCardTypeCodesBOVar.value.generalCardCodeOutOut;
// BalanceCardTypeStruct.CashCardCode = GetBalanceCardTypeCodesBO.CashCardCodeOut
outVars.value.balanceCardTypeStructOut.cashCardCodeAttr = getBalanceCardTypeCodesBOVar.value.cashCardCodeOutOut;
// BalanceCardTypeStruct.AddOnsCardCode = GetBalanceCardTypeCodesBO.AddOnsCodeOut
outVars.value.balanceCardTypeStructOut.addOnsCardCodeAttr = getBalanceCardTypeCodesBOVar.value.addOnsCodeOutOut;
// Execute Action: GetMinSmsType
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("MINUTE_SMS_TYPE_DESCRIPTION", callContext).then(function (value) {
getMinSmsTypeVar.value = value;
});
}).then(function () {
// SetMinSMSType
// MinSMSTypeOut = GetMinSmsType.Value
outVars.value.minSMSTypeOutOut = getMinSmsTypeVar.value.valueOut;
// Execute Action: GetMessageGroup
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_MESSAGE_GROUP", callContext).then(function (value) {
getMessageGroupVar.value = value;
});
}).then(function () {
// SetMessageGroup
// MessageGroupOut = GetMessageGroup.Value
outVars.value.messageGroupOutOut = getMessageGroupVar.value.valueOut;
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceAPPConfigBO", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceAPPConfigBO$outVars", [{
name: "BalanceTagCodesStruct",
attrName: "balanceTagCodesStructOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec();
},
complexType: BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec
}, {
name: "BalanceAttributesCodesStruct",
attrName: "balanceAttributesCodesStructOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec();
},
complexType: BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec
}, {
name: "BalanceCardTypeStruct",
attrName: "balanceCardTypeStructOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec();
},
complexType: BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec
}, {
name: "MessageGroupOut",
attrName: "messageGroupOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MinSMSTypeOut",
attrName: "minSMSTypeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceAPPConfigBO$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceAPPConfigBO$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
BalanceTagCodesStruct: actionResults.balanceTagCodesStructOut,
BalanceAttributesCodesStruct: actionResults.balanceAttributesCodesStructOut,
BalanceCardTypeStruct: actionResults.balanceCardTypeStructOut,
MessageGroupOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.messageGroupOutOut, OS.Types.Text, true),
MinSMSTypeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.minSMSTypeOutOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$GetBalanceCardTypeCodes", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceCardTypeCodes$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getGeneralCardCodeVar = new OS.DataTypes.VariableHolder();
var getCashCardCodeVar = new OS.DataTypes.VariableHolder();
var getMinutesCardCodeVar = new OS.DataTypes.VariableHolder();
var getAddOnsCardCodeVar = new OS.DataTypes.VariableHolder();
var getInternetCardCodeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceCardTypeCodes$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetInternetCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_INTERNET_CARD_CODE", callContext).then(function (value) {
getInternetCardCodeVar.value = value;
}).then(function () {
// SetInternetCardCodeOut
// InternetCardCodeOut = GetInternetCardCode.Value
outVars.value.internetCardCodeOutOut = getInternetCardCodeVar.value.valueOut;
// Execute Action: GetMinutesCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_MINUTES_CARD_CODE", callContext).then(function (value) {
getMinutesCardCodeVar.value = value;
});
}).then(function () {
// SetMinutesCardCodeOut
// MinutesCardCodeOut = GetMinutesCardCode.Value
outVars.value.minutesCardCodeOutOut = getMinutesCardCodeVar.value.valueOut;
// Execute Action: GetGeneralCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_GENERAL_CARD_CODE", callContext).then(function (value) {
getGeneralCardCodeVar.value = value;
});
}).then(function () {
// SetGeneralCardCodeOut
// GeneralCardCodeOut = GetGeneralCardCode.Value
outVars.value.generalCardCodeOutOut = getGeneralCardCodeVar.value.valueOut;
// Execute Action: GetCashCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_CASH_CARD_CODE", callContext).then(function (value) {
getCashCardCodeVar.value = value;
});
}).then(function () {
// SetGeneralCardCodeOut
// CashCardCodeOut = GetCashCardCode.Value
outVars.value.cashCardCodeOutOut = getCashCardCodeVar.value.valueOut;
// Execute Action: GetAddOnsCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_ADDONS_CARD_CODE", callContext).then(function (value) {
getAddOnsCardCodeVar.value = value;
});
}).then(function () {
// SetAddOnsCardCodeOut
// AddOnsCodeOut = GetAddOnsCardCode.Value
outVars.value.addOnsCodeOutOut = getAddOnsCardCodeVar.value.valueOut;
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceCardTypeCodes", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceCardTypeCodes$outVars", [{
name: "InternetCardCodeOut",
attrName: "internetCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MinutesCardCodeOut",
attrName: "minutesCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "GeneralCardCodeOut",
attrName: "generalCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CashCardCodeOut",
attrName: "cashCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AddOnsCodeOut",
attrName: "addOnsCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceCardTypeCodes$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceCardTypeCodes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
InternetCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.internetCardCodeOutOut, OS.Types.Text, true),
MinutesCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.minutesCardCodeOutOut, OS.Types.Text, true),
GeneralCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.generalCardCodeOutOut, OS.Types.Text, true),
CashCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.cashCardCodeOutOut, OS.Types.Text, true),
AddOnsCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.addOnsCodeOutOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$GetBalanceCardTypeCodesBO", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceCardTypeCodesBO$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getMinutesCardCodeVar = new OS.DataTypes.VariableHolder();
var getGeneralCardCodeVar = new OS.DataTypes.VariableHolder();
var getAddOnsCardCodeVar = new OS.DataTypes.VariableHolder();
var getInternetCardCodeVar = new OS.DataTypes.VariableHolder();
var getCashCardCodeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceCardTypeCodesBO$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetInternetCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_INTERNET_CARD_CODE", callContext).then(function (value) {
getInternetCardCodeVar.value = value;
}).then(function () {
// SetInternetCardCodeOut
// InternetCardCodeOut = GetInternetCardCode.Value
outVars.value.internetCardCodeOutOut = getInternetCardCodeVar.value.valueOut;
// Execute Action: GetMinutesCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_MINUTES_CARD_CODE", callContext).then(function (value) {
getMinutesCardCodeVar.value = value;
});
}).then(function () {
// SetMinutesCardCodeOut
// MinutesCardCodeOut = GetMinutesCardCode.Value
outVars.value.minutesCardCodeOutOut = getMinutesCardCodeVar.value.valueOut;
// Execute Action: GetGeneralCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_GENERAL_CARD_CODE", callContext).then(function (value) {
getGeneralCardCodeVar.value = value;
});
}).then(function () {
// SetGeneralCardCodeOut
// GeneralCardCodeOut = GetGeneralCardCode.Value
outVars.value.generalCardCodeOutOut = getGeneralCardCodeVar.value.valueOut;
// Execute Action: GetCashCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_CASH_CARD_CODE", callContext).then(function (value) {
getCashCardCodeVar.value = value;
});
}).then(function () {
// SetGeneralCardCodeOut
// CashCardCodeOut = GetCashCardCode.Value
outVars.value.cashCardCodeOutOut = getCashCardCodeVar.value.valueOut;
// Execute Action: GetAddOnsCardCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_ADDONS_CARD_CODE", callContext).then(function (value) {
getAddOnsCardCodeVar.value = value;
});
}).then(function () {
// SetAddOnsCardCodeOut
// AddOnsCodeOut = GetAddOnsCardCode.Value
outVars.value.addOnsCodeOutOut = getAddOnsCardCodeVar.value.valueOut;
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceCardTypeCodesBO", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceCardTypeCodesBO$outVars", [{
name: "InternetCardCodeOut",
attrName: "internetCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MinutesCardCodeOut",
attrName: "minutesCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "GeneralCardCodeOut",
attrName: "generalCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CashCardCodeOut",
attrName: "cashCardCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AddOnsCodeOut",
attrName: "addOnsCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceCardTypeCodesBO$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceCardTypeCodesBO$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
InternetCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.internetCardCodeOutOut, OS.Types.Text, true),
MinutesCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.minutesCardCodeOutOut, OS.Types.Text, true),
GeneralCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.generalCardCodeOutOut, OS.Types.Text, true),
CashCardCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.cashCardCodeOutOut, OS.Types.Text, true),
AddOnsCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.addOnsCodeOutOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$GetBalanceConfigAttributes", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceConfigAttributes$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getTitleCodeVar = new OS.DataTypes.VariableHolder();
var getDescriptionCodeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceConfigAttributes$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetTitleCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_TITLE_CODE", callContext).then(function (value) {
getTitleCodeVar.value = value;
}).then(function () {
// SetTitleCodeOut
// TitleCodeOut = GetTitleCode.Value
outVars.value.titleCodeOutOut = getTitleCodeVar.value.valueOut;
// Execute Action: GetDescriptionCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("DESC_BALANCE_CODE", callContext).then(function (value) {
getDescriptionCodeVar.value = value;
});
}).then(function () {
// SetDescriptionCodeOut
// DescriptionCodeOut = GetDescriptionCode.Value
outVars.value.descriptionCodeOutOut = getDescriptionCodeVar.value.valueOut;
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceConfigAttributes", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceConfigAttributes$outVars", [{
name: "TitleCodeOut",
attrName: "titleCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "DescriptionCodeOut",
attrName: "descriptionCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceConfigAttributes$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceConfigAttributes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TitleCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.titleCodeOutOut, OS.Types.Text, true),
DescriptionCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.descriptionCodeOutOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$GetBalanceConfigAttributesBO", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceConfigAttributesBO$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getDescriptionCodeVar = new OS.DataTypes.VariableHolder();
var getTitleCodeVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceConfigAttributesBO$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetTitleCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_TITLE_CODE", callContext).then(function (value) {
getTitleCodeVar.value = value;
}).then(function () {
// SetTitleCodeOut
// TitleCodeOut = GetTitleCode.Value
outVars.value.titleCodeOutOut = getTitleCodeVar.value.valueOut;
// Execute Action: GetDescriptionCode
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("DESC_BALANCE_CODE", callContext).then(function (value) {
getDescriptionCodeVar.value = value;
});
}).then(function () {
// SetDescriptionCodeOut
// DescriptionCodeOut = GetDescriptionCode.Value
outVars.value.descriptionCodeOutOut = getDescriptionCodeVar.value.valueOut;
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceConfigAttributesBO", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceConfigAttributesBO$outVars", [{
name: "TitleCodeOut",
attrName: "titleCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "DescriptionCodeOut",
attrName: "descriptionCodeOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceConfigAttributesBO$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceConfigAttributesBO$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
TitleCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.titleCodeOutOut, OS.Types.Text, true),
DescriptionCodeOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.descriptionCodeOutOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$GetBalanceTagsCodes", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceTagsCodes$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getPlafondBalanceTagVar = new OS.DataTypes.VariableHolder();
var getAvailableBalanceUnitTagVar = new OS.DataTypes.VariableHolder();
var getPackageNumberBalanceTagVar = new OS.DataTypes.VariableHolder();
var getBalanceDataTypeSeparatorVar = new OS.DataTypes.VariableHolder();
var getSpentBalanceUnitTagVar = new OS.DataTypes.VariableHolder();
var getAvailableBalanceTagVar = new OS.DataTypes.VariableHolder();
var getPlafondBalanceUnitTagVar = new OS.DataTypes.VariableHolder();
var getSpentBalanceTagVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceTagsCodes$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetAvailableBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("AVAILABLE_BALANCE_TAG", callContext).then(function (value) {
getAvailableBalanceTagVar.value = value;
}).then(function () {
// SetAvailableBalanceTagOut
// AvailableBalanceTagOut = GetAvailableBalanceTag.Value
outVars.value.availableBalanceTagOutOut = getAvailableBalanceTagVar.value.valueOut;
// Execute Action: GetAvailableBalanceUnitTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("AVAILABLE_BALANCE_UNIT_TAG", callContext).then(function (value) {
getAvailableBalanceUnitTagVar.value = value;
});
}).then(function () {
// SetAvailableBalanceUnitTag
// AvailableBalanceUnitTagOut = GetAvailableBalanceUnitTag.Value
outVars.value.availableBalanceUnitTagOutOut = getAvailableBalanceUnitTagVar.value.valueOut;
// Execute Action: GetSpentBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("SPENT_BALANCE_TAG", callContext).then(function (value) {
getSpentBalanceTagVar.value = value;
});
}).then(function () {
// SpentBalanceTagOut = GetSpentBalanceTag.Value
outVars.value.spentBalanceTagOutOut = getSpentBalanceTagVar.value.valueOut;
// Execute Action: GetPlafondBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("PLAFOND_BALANCE_TAG", callContext).then(function (value) {
getPlafondBalanceTagVar.value = value;
});
}).then(function () {
// PlafondBalanceTagOut = GetPlafondBalanceTag.Value
outVars.value.plafondBalanceTagOutOut = getPlafondBalanceTagVar.value.valueOut;
// Execute Action: GetPackageNumberBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("PACKAGE_NUMBER_BALANCE_TAG", callContext).then(function (value) {
getPackageNumberBalanceTagVar.value = value;
});
}).then(function () {
// PackageNumberTagOut = GetPackageNumberBalanceTag.Value
outVars.value.packageNumberTagOutOut = getPackageNumberBalanceTagVar.value.valueOut;
// Execute Action: GetBalanceDataTypeSeparator
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_DATATYPE_SEPARATOR", callContext).then(function (value) {
getBalanceDataTypeSeparatorVar.value = value;
});
}).then(function () {
// BalanceDataTypeSeparator = GetBalanceDataTypeSeparator.Value
outVars.value.balanceDataTypeSeparatorOut = getBalanceDataTypeSeparatorVar.value.valueOut;
// Execute Action: GetSpentBalanceUnitTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("SPENT_BALANCE_UNIT_TAG", callContext).then(function (value) {
getSpentBalanceUnitTagVar.value = value;
});
}).then(function () {
// SpentBalanceUnitTagOut = GetSpentBalanceUnitTag.Value
outVars.value.spentBalanceUnitTagOutOut = getSpentBalanceUnitTagVar.value.valueOut;
// Execute Action: GetPlafondBalanceUnitTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("PLAFOND_BALANCE_UNIT_TAG", callContext).then(function (value) {
getPlafondBalanceUnitTagVar.value = value;
});
}).then(function () {
// PlafondBalanceUnitTagOut = GetPlafondBalanceUnitTag.Value
outVars.value.plafondBalanceUnitTagOutOut = getPlafondBalanceUnitTagVar.value.valueOut;
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceTagsCodes", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceTagsCodes$outVars", [{
name: "AvailableBalanceTagOut",
attrName: "availableBalanceTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AvailableBalanceUnitTagOut",
attrName: "availableBalanceUnitTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpentBalanceTagOut",
attrName: "spentBalanceTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PlafondBalanceTagOut",
attrName: "plafondBalanceTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PackageNumberTagOut",
attrName: "packageNumberTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "BalanceDataTypeSeparator",
attrName: "balanceDataTypeSeparatorOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpentBalanceUnitTagOut",
attrName: "spentBalanceUnitTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PlafondBalanceUnitTagOut",
attrName: "plafondBalanceUnitTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceTagsCodes$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceTagsCodes$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AvailableBalanceTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.availableBalanceTagOutOut, OS.Types.Text, true),
AvailableBalanceUnitTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.availableBalanceUnitTagOutOut, OS.Types.Text, true),
SpentBalanceTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.spentBalanceTagOutOut, OS.Types.Text, true),
PlafondBalanceTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.plafondBalanceTagOutOut, OS.Types.Text, true),
PackageNumberTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.packageNumberTagOutOut, OS.Types.Text, true),
BalanceDataTypeSeparator: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.balanceDataTypeSeparatorOut, OS.Types.Text, true),
SpentBalanceUnitTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.spentBalanceUnitTagOutOut, OS.Types.Text, true),
PlafondBalanceUnitTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.plafondBalanceUnitTagOutOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$GetBalanceTagsCodesBO", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetSelfcareConfigValueAsText_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.getBalanceTagsCodesBO$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getSpentBalanceTagVar = new OS.DataTypes.VariableHolder();
var getAvailableBalanceTagVar = new OS.DataTypes.VariableHolder();
var getPlafondBalanceUnitTagVar = new OS.DataTypes.VariableHolder();
var getPlafondBalanceTagVar = new OS.DataTypes.VariableHolder();
var getAvailableBalanceUnitTagVar = new OS.DataTypes.VariableHolder();
var getPackageNumberBalanceTagVar = new OS.DataTypes.VariableHolder();
var getSpentBalanceUnitTagVar = new OS.DataTypes.VariableHolder();
var getBalanceDataTypeSeparatorVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceTagsCodesBO$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetAvailableBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("AVAILABLE_BALANCE_TAG", callContext).then(function (value) {
getAvailableBalanceTagVar.value = value;
}).then(function () {
// SetAvailableBalanceTagOut
// AvailableBalanceTagOut = GetAvailableBalanceTag.Value
outVars.value.availableBalanceTagOutOut = getAvailableBalanceTagVar.value.valueOut;
// Execute Action: GetAvailableBalanceUnitTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("AVAILABLE_BALANCE_UNIT_TAG", callContext).then(function (value) {
getAvailableBalanceUnitTagVar.value = value;
});
}).then(function () {
// SetAvailableBalanceUnitTag
// AvailableBalanceUnitTagOut = GetAvailableBalanceUnitTag.Value
outVars.value.availableBalanceUnitTagOutOut = getAvailableBalanceUnitTagVar.value.valueOut;
// Execute Action: GetSpentBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("SPENT_BALANCE_TAG", callContext).then(function (value) {
getSpentBalanceTagVar.value = value;
});
}).then(function () {
// SpentBalanceTagOut = GetSpentBalanceTag.Value
outVars.value.spentBalanceTagOutOut = getSpentBalanceTagVar.value.valueOut;
// Execute Action: GetPlafondBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("PLAFOND_BALANCE_TAG", callContext).then(function (value) {
getPlafondBalanceTagVar.value = value;
});
}).then(function () {
// PlafondBalanceTagOut = GetPlafondBalanceTag.Value
outVars.value.plafondBalanceTagOutOut = getPlafondBalanceTagVar.value.valueOut;
// Execute Action: GetPackageNumberBalanceTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("PACKAGE_NUMBER_BALANCE_TAG", callContext).then(function (value) {
getPackageNumberBalanceTagVar.value = value;
});
}).then(function () {
// PackageNumberTagOut = GetPackageNumberBalanceTag.Value
outVars.value.packageNumberTagOutOut = getPackageNumberBalanceTagVar.value.valueOut;
// Execute Action: GetBalanceDataTypeSeparator
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("BALANCE_DATATYPE_SEPARATOR", callContext).then(function (value) {
getBalanceDataTypeSeparatorVar.value = value;
});
}).then(function () {
// BalanceDataTypeSeparator = GetBalanceDataTypeSeparator.Value
outVars.value.balanceDataTypeSeparatorOut = getBalanceDataTypeSeparatorVar.value.valueOut;
// Execute Action: GetSpentBalanceUnitTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("SPENT_BALANCE_UNIT_TAG", callContext).then(function (value) {
getSpentBalanceUnitTagVar.value = value;
});
}).then(function () {
// SpentBalanceUnitTagOut = GetSpentBalanceUnitTag.Value
outVars.value.spentBalanceUnitTagOutOut = getSpentBalanceUnitTagVar.value.valueOut;
// Execute Action: GetPlafondBalanceUnitTag
return BALANCE_MBPController.default.getSelfcareConfigValueAsText_MBP$Action("PLAFOND_BALANCE_UNIT_TAG", callContext).then(function (value) {
getPlafondBalanceUnitTagVar.value = value;
});
}).then(function () {
// PlafondBalanceUnitTagOut = GetPlafondBalanceUnitTag.Value
outVars.value.plafondBalanceUnitTagOutOut = getPlafondBalanceUnitTagVar.value.valueOut;
});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.GetBalanceTagsCodesBO", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.GetBalanceTagsCodesBO$outVars", [{
name: "AvailableBalanceTagOut",
attrName: "availableBalanceTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AvailableBalanceUnitTagOut",
attrName: "availableBalanceUnitTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpentBalanceTagOut",
attrName: "spentBalanceTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PlafondBalanceTagOut",
attrName: "plafondBalanceTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PackageNumberTagOut",
attrName: "packageNumberTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "BalanceDataTypeSeparator",
attrName: "balanceDataTypeSeparatorOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpentBalanceUnitTagOut",
attrName: "spentBalanceUnitTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PlafondBalanceUnitTagOut",
attrName: "plafondBalanceUnitTagOutOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.getBalanceTagsCodesBO$Action = function () {
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.getBalanceTagsCodesBO$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AvailableBalanceTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.availableBalanceTagOutOut, OS.Types.Text, true),
AvailableBalanceUnitTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.availableBalanceUnitTagOutOut, OS.Types.Text, true),
SpentBalanceTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.spentBalanceTagOutOut, OS.Types.Text, true),
PlafondBalanceTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.plafondBalanceTagOutOut, OS.Types.Text, true),
PackageNumberTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.packageNumberTagOutOut, OS.Types.Text, true),
BalanceDataTypeSeparator: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.balanceDataTypeSeparatorOut, OS.Types.Text, true),
SpentBalanceUnitTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.spentBalanceUnitTagOutOut, OS.Types.Text, true),
PlafondBalanceUnitTagOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.plafondBalanceUnitTagOutOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$ReplaceBalancePipesWithValue", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList", "BALANCE_MBP.model$Local_BALANCE_TAG_DATATYPERec", "BALANCE_MBP.model$Local_PIPE_INFORMATIONRec", "BALANCE_MBP.entities"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.replaceBalancePipesWithValue$Action = function (inputTextIn, balanceLineIDIn, positionTagListIn, dataTypeSeparatorIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalancePipesWithValue$vars"))());
vars.value.inputTextInLocal = inputTextIn;
vars.value.balanceLineIDInLocal = balanceLineIDIn;
vars.value.positionTagListInLocal = positionTagListIn.clone();
vars.value.dataTypeSeparatorInLocal = dataTypeSeparatorIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var listIndexTagVar = new OS.DataTypes.VariableHolder();
var getPipeInformationsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalancePipesWithValue$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// PipeFound?
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, "#pos", 0, false, false) >= 0))) {
// Aggregate: GetPipeInformations
var getPipeInformationsAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qploLocal_PIPE_INFORMATION_BalanceLineID = vars.value.balanceLineIDInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10";
} else {
selectSql += "\"ENLocal_BALANCE_TAG_DATATYP\".\"Id\" o0, \"ENLocal_BALANCE_TAG_DATATYP\".\"Code\" o1, \"ENLocal_BALANCE_TAG_DATATYP\".\"Format\" o2, \"ENLocal_BALANCE_TAG_DATATYP\".\"FormatReceived\" o3, \"ENLocal_BALANCE_TAG_DATATYP\".\"DateTime\" o4, \"ENLocal_PIPE_INFORMATION\".\"Id\" o5, \"ENLocal_PIPE_INFORMATION\".\"Tag\" o6, \"ENLocal_PIPE_INFORMATION\".\"Value\" o7, \"ENLocal_PIPE_INFORMATION\".\"DataTypeID\" o8, \"ENLocal_PIPE_INFORMATION\".\"BalanceLineID\" o9, \"ENLocal_PIPE_INFORMATION\".\"BalanceConfigID\" o10";
}
fromAndWhereSql += " FROM (\"MAIN\".\"OSUSR_qsx_Local_PIPE_INFORMATION\" \"ENLocal_PIPE_INFORMATION\" Inner JOIN \"MAIN\".\"OSUSR_qsx_Local_BALANCE_TAG_DATATYPE\" \"ENLocal_BALANCE_TAG_DATATYP\" ON (\"ENLocal_PIPE_INFORMATION\".\"DataTypeID\" = \"ENLocal_BALANCE_TAG_DATATYP\".\"Id\")) ";
fromAndWhereSql += " WHERE ";
if (qploLocal_PIPE_INFORMATION_BalanceLineID != 0) {
fromAndWhereSql += "((\"ENLocal_PIPE_INFORMATION\".\"BalanceLineID\" = :qploLocal_PIPE_INFORMATION_BalanceLineID) AND (\"ENLocal_PIPE_INFORMATION\".\"BalanceLineID\" IS NOT NULL))";
argsList.add("qploLocal_PIPE_INFORMATION_BalanceLineID", /*LONGINTEGER*/ 4, qploLocal_PIPE_INFORMATION_BalanceLineID);
} else {
fromAndWhereSql += "(\"ENLocal_PIPE_INFORMATION\".\"BalanceLineID\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_TAG_DATATYPEAttr",
"local_PIPE_INFORMATIONAttr",
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
return getPipeInformationsVar.value;
});
};
return getPipeInformationsAggr().then(function () {
// GetPipeInformations.Empty?
if((getPipeInformationsVar.value.listOut.isEmpty)) {
// ConfigurationTagsFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, "#", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.inputTextInLocal, "@", 0, false, false) > -1)))) {
// SetOutputText
// OutputText = ""
outVars.value.outputTextOut = "";
} else {
// SetOutputText
// OutputText = InputText
outVars.value.outputTextOut = vars.value.inputTextInLocal;
}

} else {
// SetTempText
// TempText = InputText
vars.value.tempTextVar = vars.value.inputTextInLocal;
// PositionTagList
// Foreach PositionTagList
callContext.iterationContext.registerIterationStart(vars.value.positionTagListInLocal);
try {var positionTagListIterator = callContext.iterationContext.getIterator(vars.value.positionTagListInLocal);
var positionTagListIndexMax = vars.value.positionTagListInLocal.length;
var positionTagListIndex = 0;
while ((((positionTagListIndex < vars.value.positionTagListInLocal.length)) && (positionTagListIndexMax > 0))) {
positionTagListIterator.currentRowNumber = positionTagListIndex;
// TagFound?
if(((OS.BuiltinFunctions.index(vars.value.tempTextVar, vars.value.positionTagListInLocal.getItem(positionTagListIndex.valueOf()), 0, false, false) >= 0))) {
// Execute Action: ListIndexTag
listIndexTagVar.value = OS.SystemActions.listIndexOf(getPipeInformationsVar.value.listOut, function (p) {
return (p.local_PIPE_INFORMATIONAttr.tagAttr === vars.value.positionTagListInLocal.getItem(positionTagListIndex.valueOf()));
}, callContext);

// TagPosition >= 0?
if(((listIndexTagVar.value.positionOut >= 0))) {
// SetPipeValue
// PipeValue = GetPipeInformations.List[ListIndexTag.Position].Local_PIPE_INFORMATION.Value
vars.value.pipeValueVar = getPipeInformationsVar.value.listOut.getItem(listIndexTagVar.value.positionOut).local_PIPE_INFORMATIONAttr.valueAttr;
if(((OS.BuiltinFunctions.toLower(getPipeInformationsVar.value.listOut.getItem(listIndexTagVar.value.positionOut).local_BALANCE_TAG_DATATYPEAttr.codeAttr) === "@decimal"))) {
// SetPipeValue
// PipeValue = FormatCurrency_MBP(TextToDecimal)
vars.value.pipeValueVar = BALANCE_MBPController.default.formatCurrency_MBP$Action(OS.BuiltinFunctions.textToDecimal(vars.value.pipeValueVar), callContext.withoutIterationContext()).resultOut;
}

// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.positionTagListInLocal.getItem(positionTagListIndex.valueOf()), vars.value.pipeValueVar);
// DataTypeFound?
if(((OS.BuiltinFunctions.index(vars.value.tempTextVar, getPipeInformationsVar.value.listOut.getItem(listIndexTagVar.value.positionOut).local_BALANCE_TAG_DATATYPEAttr.codeAttr, 0, false, false) >= 0))) {
// RemoveDataType
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, getPipeInformationsVar.value.listOut.getItem(listIndexTagVar.value.positionOut).local_BALANCE_TAG_DATATYPEAttr.codeAttr, "");
}

}

}

positionTagListIndexMax--;
positionTagListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.positionTagListInLocal);
}

// RemoveEndDataType
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.dataTypeSeparatorInLocal, "");
// ConfigurationTagsFound?
if((((OS.BuiltinFunctions.index(vars.value.tempTextVar, "#", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.tempTextVar, "@", 0, false, false) > -1)))) {
// SetOutputText
// OutputText = ""
outVars.value.outputTextOut = "";
} else {
// SetOutputText
// OutputText = TempText
outVars.value.outputTextOut = vars.value.tempTextVar;
}

}

});
} else {
// ConfigurationTagsFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, "#", 0, false, false) > -1) || (OS.BuiltinFunctions.index(vars.value.inputTextInLocal, "@", 0, false, false) > -1)))) {
// SetOutputText
// OutputText = ""
outVars.value.outputTextOut = "";
} else {
// SetOutputText
// OutputText = InputText
outVars.value.outputTextOut = vars.value.inputTextInLocal;
}

}

});
}).catch(function (ex) {
OS.Logger.trace("BalanceCards.ReplaceBalancePipesWithValue", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// OutputText = ""
outVars.value.outputTextOut = "";
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalancePipesWithValue$vars", [{
name: "InputText",
attrName: "inputTextInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "BalanceLineID",
attrName: "balanceLineIDInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "PositionTagList",
attrName: "positionTagListInLocal",
mandatory: true,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new OS.DataTypes.TextList();
},
complexType: OS.DataTypes.TextList
}, {
name: "DataTypeSeparator",
attrName: "dataTypeSeparatorInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TempText",
attrName: "tempTextVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PipeValue",
attrName: "pipeValueVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalancePipesWithValue$outVars", [{
name: "OutputText",
attrName: "outputTextOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.replaceBalancePipesWithValue$Action = function (inputTextIn, balanceLineIDIn, positionTagListIn, dataTypeSeparatorIn) {
inputTextIn = (inputTextIn === undefined) ? "" : inputTextIn;
balanceLineIDIn = (balanceLineIDIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : balanceLineIDIn;
positionTagListIn = (positionTagListIn === undefined) ? new OS.DataTypes.TextList() : positionTagListIn;
dataTypeSeparatorIn = (dataTypeSeparatorIn === undefined) ? "" : dataTypeSeparatorIn;
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.replaceBalancePipesWithValue$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(inputTextIn, OS.Types.Text), balanceLineIDIn, positionTagListIn, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(dataTypeSeparatorIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OutputText: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.outputTextOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller$ReplaceBalanceTagsWithValue", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController) {
var OS = OutSystems.Internal;
BALANCE_MBLOCKSController.default.replaceBalanceTagsWithValue$Action = function (inputTextIn, balanceElementIn, availableBalanceTagIn, availableBalanceUnitTagIn, spentBalanceTagIn, plafondBalanceTagIn, packageNumberTagIn, spentBalanceUnitTagIn, plafondBalanceUnitTagIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalanceTagsWithValue$vars"))());
vars.value.inputTextInLocal = inputTextIn;
vars.value.balanceElementInLocal = balanceElementIn.clone();
vars.value.availableBalanceTagInLocal = availableBalanceTagIn;
vars.value.availableBalanceUnitTagInLocal = availableBalanceUnitTagIn;
vars.value.spentBalanceTagInLocal = spentBalanceTagIn;
vars.value.plafondBalanceTagInLocal = plafondBalanceTagIn;
vars.value.packageNumberTagInLocal = packageNumberTagIn;
vars.value.spentBalanceUnitTagInLocal = spentBalanceUnitTagIn;
vars.value.plafondBalanceUnitTagInLocal = plafondBalanceUnitTagIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalanceTagsWithValue$outVars"))());
try {// TagFound?
if(((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, "#", 0, false, false) >= 0))) {
// SetTempText
// TempText = InputText
vars.value.tempTextVar = vars.value.inputTextInLocal;
// AvailableBalanceTagFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, vars.value.availableBalanceTagInLocal, 0, false, false)) !== (-1)))) {
// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.availableBalanceTagInLocal, BALANCE_MBPController.default.formatDecimal_MBP$Action(vars.value.balanceElementInLocal.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(vars.value.balanceElementInLocal.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut);
}

// AvailableBalanceUnitTagFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, vars.value.availableBalanceUnitTagInLocal, 0, false, false)) !== (-1)))) {
// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.availableBalanceUnitTagInLocal, vars.value.balanceElementInLocal.availableAmountUnitFmtAttr);
}

// SpentBalanceTagFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, vars.value.spentBalanceTagInLocal, 0, false, false)) !== (-1)))) {
// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.spentBalanceTagInLocal, BALANCE_MBPController.default.formatDecimal_MBP$Action(vars.value.balanceElementInLocal.consumedAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(vars.value.balanceElementInLocal.consumedAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut);
}

// PlafondBalanceTagFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, vars.value.plafondBalanceTagInLocal, 0, false, false)) !== (-1)))) {
// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.plafondBalanceTagInLocal, BALANCE_MBPController.default.formatDecimal_MBP$Action(vars.value.balanceElementInLocal.totalAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(vars.value.balanceElementInLocal.totalAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut);
}

// PackageNumberTagFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, vars.value.packageNumberTagInLocal, 0, false, false)) !== (-1)))) {
// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.packageNumberTagInLocal, (vars.value.balanceElementInLocal.packageNumberAttr).toString());
}

// SpentBalanceUnitTagFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, vars.value.spentBalanceUnitTagInLocal, 0, false, false)) !== (-1)))) {
// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.spentBalanceUnitTagInLocal, vars.value.balanceElementInLocal.consumedAmountUnitFmtAttr);
}

// PlafondBalanceUnitTagFound?
if((((OS.BuiltinFunctions.index(vars.value.inputTextInLocal, vars.value.plafondBalanceUnitTagInLocal, 0, false, false)) !== (-1)))) {
// SetTempText
// TempText = Replace
vars.value.tempTextVar = OS.BuiltinFunctions.replace(vars.value.tempTextVar, vars.value.plafondBalanceUnitTagInLocal, vars.value.balanceElementInLocal.totalAmountUnitFmtAttr);
}

// SetOutputText
// OutputText = TempText
outVars.value.outputTextOut = vars.value.tempTextVar;
} else {
// SetOutputText
// OutputText = InputText
outVars.value.outputTextOut = vars.value.inputTextInLocal;
}

} catch (ex) {
(function () {
OS.Logger.trace("BalanceCards.ReplaceBalanceTagsWithValue", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
// OutputText = ""
outVars.value.outputTextOut = "";
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
};
var controller = BALANCE_MBLOCKSController.default;
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalanceTagsWithValue$vars", [{
name: "InputText",
attrName: "inputTextInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "BalanceElement",
attrName: "balanceElementInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec();
},
complexType: BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec
}, {
name: "AvailableBalanceTag",
attrName: "availableBalanceTagInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AvailableBalanceUnitTag",
attrName: "availableBalanceUnitTagInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpentBalanceTag",
attrName: "spentBalanceTagInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PlafondBalanceTag",
attrName: "plafondBalanceTagInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PackageNumberTag",
attrName: "packageNumberTagInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SpentBalanceUnitTag",
attrName: "spentBalanceUnitTagInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PlafondBalanceUnitTag",
attrName: "plafondBalanceUnitTagInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TempText",
attrName: "tempTextVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.constructor.registerVariableGroupType("BALANCE_MBLOCKS.BalanceCards.ReplaceBalanceTagsWithValue$outVars", [{
name: "OutputText",
attrName: "outputTextOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
BALANCE_MBLOCKSController.default.clientActionProxies.replaceBalanceTagsWithValue$Action = function (inputTextIn, balanceElementIn, availableBalanceTagIn, availableBalanceUnitTagIn, spentBalanceTagIn, plafondBalanceTagIn, packageNumberTagIn, spentBalanceUnitTagIn, plafondBalanceUnitTagIn) {
inputTextIn = (inputTextIn === undefined) ? "" : inputTextIn;
balanceElementIn = (balanceElementIn === undefined) ? new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec() : balanceElementIn;
availableBalanceTagIn = (availableBalanceTagIn === undefined) ? "" : availableBalanceTagIn;
availableBalanceUnitTagIn = (availableBalanceUnitTagIn === undefined) ? "" : availableBalanceUnitTagIn;
spentBalanceTagIn = (spentBalanceTagIn === undefined) ? "" : spentBalanceTagIn;
plafondBalanceTagIn = (plafondBalanceTagIn === undefined) ? "" : plafondBalanceTagIn;
packageNumberTagIn = (packageNumberTagIn === undefined) ? "" : packageNumberTagIn;
spentBalanceUnitTagIn = (spentBalanceUnitTagIn === undefined) ? "" : spentBalanceUnitTagIn;
plafondBalanceUnitTagIn = (plafondBalanceUnitTagIn === undefined) ? "" : plafondBalanceUnitTagIn;
return controller.executeActionInsideJSNode(BALANCE_MBLOCKSController.default.replaceBalanceTagsWithValue$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(inputTextIn, OS.Types.Text), balanceElementIn, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(availableBalanceTagIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(availableBalanceUnitTagIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(spentBalanceTagIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(plafondBalanceTagIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(packageNumberTagIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(spentBalanceUnitTagIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(plafondBalanceUnitTagIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OutputText: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.outputTextOut, OS.Types.Text, true)
};
});
};
});

define("BALANCE_MBLOCKS.controller", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var BALANCE_MBLOCKSController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 30;
Controller.prototype.getDefaultTimeout = function () {
return BALANCE_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
BALANCE_MBLOCKSController.default = new Controller();
});
