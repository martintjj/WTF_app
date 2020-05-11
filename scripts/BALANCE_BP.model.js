define("BALANCE_BP.model$BALANCESIMULATOR_TOKENRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCESIMULATOR_TOKENRec = (function (_super) {
__extends(BALANCESIMULATOR_TOKENRec, _super);
function BALANCESIMULATOR_TOKENRec(defaults) {
_super.apply(this, arguments);
}
BALANCESIMULATOR_TOKENRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceToken", "balanceTokenAttr", "BalanceToken", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PageCode", "pageCodeAttr", "PageCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TokenValidation", "tokenValidationAttr", "TokenValidation", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCESIMULATOR_TOKENRec.generateFromLocalStorage = function () {
return false;
};
BALANCESIMULATOR_TOKENRec.init();
return BALANCESIMULATOR_TOKENRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCESIMULATOR_TOKENRec = BALANCESIMULATOR_TOKENRec;

});
define("BALANCE_BP.model$STR_BALANCE_TAG_DATATYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_TAG_DATATYPERec = (function (_super) {
__extends(STR_BALANCE_TAG_DATATYPERec, _super);
function STR_BALANCE_TAG_DATATYPERec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_TAG_DATATYPERec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Format", "formatAttr", "Format", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FormatReceived", "formatReceivedAttr", "FormatReceived", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_TAG_DATATYPERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_TAG_DATATYPERec.init();
return STR_BALANCE_TAG_DATATYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_TAG_DATATYPERec = STR_BALANCE_TAG_DATATYPERec;

});
define("BALANCE_BP.model$STR_BALANCE_TAG_DATATYPEList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_TAG_DATATYPERec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_TAG_DATATYPEList = (function (_super) {
__extends(STR_BALANCE_TAG_DATATYPEList, _super);
function STR_BALANCE_TAG_DATATYPEList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_TAG_DATATYPEList.RecordType = BALANCE_BPModel.STR_BALANCE_TAG_DATATYPERec;
return STR_BALANCE_TAG_DATATYPEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_TAG_DATATYPEList = STR_BALANCE_TAG_DATATYPEList;

});
define("BALANCE_BP.model$STR_BALANCE_TAG_CODESRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_TAG_CODESRec = (function (_super) {
__extends(STR_BALANCE_TAG_CODESRec, _super);
function STR_BALANCE_TAG_CODESRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_TAG_CODESRec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsPositionConfiguration", "isPositionConfigurationAttr", "IsPositionConfiguration", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_TAG_CODESRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_TAG_CODESRec.init();
return STR_BALANCE_TAG_CODESRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_TAG_CODESRec = STR_BALANCE_TAG_CODESRec;

});
define("BALANCE_BP.model$STR_BALANCE_TAG_CODESList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_TAG_CODESRec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_TAG_CODESList = (function (_super) {
__extends(STR_BALANCE_TAG_CODESList, _super);
function STR_BALANCE_TAG_CODESList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_TAG_CODESList.RecordType = BALANCE_BPModel.STR_BALANCE_TAG_CODESRec;
return STR_BALANCE_TAG_CODESList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_TAG_CODESList = STR_BALANCE_TAG_CODESList;

});
define("BALANCE_BP.model$STR_BALANCE_CARD_TYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CARD_TYPERec = (function (_super) {
__extends(STR_BALANCE_CARD_TYPERec, _super);
function STR_BALANCE_CARD_TYPERec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CARD_TYPERec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_CARD_TYPERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_CARD_TYPERec.init();
return STR_BALANCE_CARD_TYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_CARD_TYPERec = STR_BALANCE_CARD_TYPERec;

});
define("BALANCE_BP.model$STR_BALANCE_CARD_TYPEList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_CARD_TYPERec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CARD_TYPEList = (function (_super) {
__extends(STR_BALANCE_CARD_TYPEList, _super);
function STR_BALANCE_CARD_TYPEList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CARD_TYPEList.RecordType = BALANCE_BPModel.STR_BALANCE_CARD_TYPERec;
return STR_BALANCE_CARD_TYPEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_CARD_TYPEList = STR_BALANCE_CARD_TYPEList;

});
define("BALANCE_BP.model$STR_BALANCE_GRAPH_TYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_GRAPH_TYPERec = (function (_super) {
__extends(STR_BALANCE_GRAPH_TYPERec, _super);
function STR_BALANCE_GRAPH_TYPERec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_GRAPH_TYPERec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLimitedGraph", "isLimitedGraphAttr", "IsLimitedGraph", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsUnlimitedGraph", "isUnlimitedGraphAttr", "IsUnlimitedGraph", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_GRAPH_TYPERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_GRAPH_TYPERec.init();
return STR_BALANCE_GRAPH_TYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_GRAPH_TYPERec = STR_BALANCE_GRAPH_TYPERec;

});
define("BALANCE_BP.model$STR_BALANCE_GRAPH_TYPEList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_GRAPH_TYPERec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_GRAPH_TYPEList = (function (_super) {
__extends(STR_BALANCE_GRAPH_TYPEList, _super);
function STR_BALANCE_GRAPH_TYPEList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_GRAPH_TYPEList.RecordType = BALANCE_BPModel.STR_BALANCE_GRAPH_TYPERec;
return STR_BALANCE_GRAPH_TYPEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_GRAPH_TYPEList = STR_BALANCE_GRAPH_TYPEList;

});
define("BALANCE_BP.model$STR_PAGERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_PAGERec = (function (_super) {
__extends(STR_PAGERec, _super);
function STR_PAGERec(defaults) {
_super.apply(this, arguments);
}
STR_PAGERec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_PAGERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_PAGERec.init();
return STR_PAGERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_PAGERec = STR_PAGERec;

});
define("BALANCE_BP.model$STR_PAGEList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_PAGERec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_PAGEList = (function (_super) {
__extends(STR_PAGEList, _super);
function STR_PAGEList(defaults) {
_super.apply(this, arguments);
}
STR_PAGEList.RecordType = BALANCE_BPModel.STR_PAGERec;
return STR_PAGEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_PAGEList = STR_PAGEList;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIGRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIGRec = (function (_super) {
__extends(STR_BALANCE_CONFIGRec, _super);
function STR_BALANCE_CONFIGRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIGRec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceName", "balanceNameAttr", "BalanceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CardID", "cardIDAttr", "CardID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceGraphID", "balanceGraphIDAttr", "BalanceGraphID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CardTypeID", "cardTypeIDAttr", "CardTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("PageID", "pageIDAttr", "PageID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_CONFIGRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_CONFIGRec.init();
return STR_BALANCE_CONFIGRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_CONFIGRec = STR_BALANCE_CONFIGRec;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIGList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_CONFIGRec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIGList = (function (_super) {
__extends(STR_BALANCE_CONFIGList, _super);
function STR_BALANCE_CONFIGList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIGList.RecordType = BALANCE_BPModel.STR_BALANCE_CONFIGRec;
return STR_BALANCE_CONFIGList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_CONFIGList = STR_BALANCE_CONFIGList;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIG_INFORec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIG_INFORec = (function (_super) {
__extends(STR_BALANCE_CONFIG_INFORec, _super);
function STR_BALANCE_CONFIG_INFORec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIG_INFORec.attributesToDeclare = function () {
return [
this.attr("BalanceConfigInfoID", "balanceConfigInfoIDAttr", "BalanceConfigInfoID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AttributeID", "attributeIDAttr", "AttributeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("PageID", "pageIDAttr", "PageID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceConfigID", "balanceConfigIDAttr", "BalanceConfigID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceConfigInfoGroupID", "balanceConfigInfoGroupIDAttr", "BalanceConfigInfoGroupID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_CONFIG_INFORec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_CONFIG_INFORec.init();
return STR_BALANCE_CONFIG_INFORec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_CONFIG_INFORec = STR_BALANCE_CONFIG_INFORec;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIG_INFOList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_CONFIG_INFORec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIG_INFOList = (function (_super) {
__extends(STR_BALANCE_CONFIG_INFOList, _super);
function STR_BALANCE_CONFIG_INFOList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIG_INFOList.RecordType = BALANCE_BPModel.STR_BALANCE_CONFIG_INFORec;
return STR_BALANCE_CONFIG_INFOList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_CONFIG_INFOList = STR_BALANCE_CONFIG_INFOList;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIG_INFO_GROUPRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIG_INFO_GROUPRec = (function (_super) {
__extends(STR_BALANCE_CONFIG_INFO_GROUPRec, _super);
function STR_BALANCE_CONFIG_INFO_GROUPRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIG_INFO_GROUPRec.attributesToDeclare = function () {
return [
this.attr("BalanceConfigInfoGroupID", "balanceConfigInfoGroupIDAttr", "BalanceConfigInfoGroupID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceCardTypeID", "balanceCardTypeIDAttr", "BalanceCardTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceGraphTypeID", "balanceGraphTypeIDAttr", "BalanceGraphTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceUnitID", "balanceUnitIDAttr", "BalanceUnitID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_CONFIG_INFO_GROUPRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_CONFIG_INFO_GROUPRec.init();
return STR_BALANCE_CONFIG_INFO_GROUPRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_CONFIG_INFO_GROUPRec = STR_BALANCE_CONFIG_INFO_GROUPRec;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIG_INFO_GROUPList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_CONFIG_INFO_GROUPRec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIG_INFO_GROUPList = (function (_super) {
__extends(STR_BALANCE_CONFIG_INFO_GROUPList, _super);
function STR_BALANCE_CONFIG_INFO_GROUPList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIG_INFO_GROUPList.RecordType = BALANCE_BPModel.STR_BALANCE_CONFIG_INFO_GROUPRec;
return STR_BALANCE_CONFIG_INFO_GROUPList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_CONFIG_INFO_GROUPList = STR_BALANCE_CONFIG_INFO_GROUPList;

});
define("BALANCE_BP.model$STR_BALANCE_ATTRIBUTESRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_ATTRIBUTESRec = (function (_super) {
__extends(STR_BALANCE_ATTRIBUTESRec, _super);
function STR_BALANCE_ATTRIBUTESRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_ATTRIBUTESRec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_ATTRIBUTESRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_ATTRIBUTESRec.init();
return STR_BALANCE_ATTRIBUTESRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_ATTRIBUTESRec = STR_BALANCE_ATTRIBUTESRec;

});
define("BALANCE_BP.model$STR_BALANCE_ATTRIBUTESList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_ATTRIBUTESRec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_ATTRIBUTESList = (function (_super) {
__extends(STR_BALANCE_ATTRIBUTESList, _super);
function STR_BALANCE_ATTRIBUTESList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_ATTRIBUTESList.RecordType = BALANCE_BPModel.STR_BALANCE_ATTRIBUTESRec;
return STR_BALANCE_ATTRIBUTESList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_ATTRIBUTESList = STR_BALANCE_ATTRIBUTESList;

});
define("BALANCE_BP.model$STR_BALANCE_UNITSRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_UNITSRec = (function (_super) {
__extends(STR_BALANCE_UNITSRec, _super);
function STR_BALANCE_UNITSRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_UNITSRec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Unit", "unitAttr", "Unit", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_UNITSRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_UNITSRec.init();
return STR_BALANCE_UNITSRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_UNITSRec = STR_BALANCE_UNITSRec;

});
define("BALANCE_BP.model$STR_BALANCE_UNITSList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_UNITSRec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_UNITSList = (function (_super) {
__extends(STR_BALANCE_UNITSList, _super);
function STR_BALANCE_UNITSList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_UNITSList.RecordType = BALANCE_BPModel.STR_BALANCE_UNITSRec;
return STR_BALANCE_UNITSList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_UNITSList = STR_BALANCE_UNITSList;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIGSRec", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_TAG_DATATYPEList", "BALANCE_BP.model$STR_BALANCE_TAG_CODESList", "BALANCE_BP.model$STR_BALANCE_CARD_TYPEList", "BALANCE_BP.model$STR_BALANCE_GRAPH_TYPEList", "BALANCE_BP.model$STR_PAGEList", "BALANCE_BP.model$STR_BALANCE_CONFIGList", "BALANCE_BP.model$STR_BALANCE_CONFIG_INFOList", "BALANCE_BP.model$STR_BALANCE_CONFIG_INFO_GROUPList", "BALANCE_BP.model$STR_BALANCE_ATTRIBUTESList", "BALANCE_BP.model$STR_BALANCE_UNITSList"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIGSRec = (function (_super) {
__extends(STR_BALANCE_CONFIGSRec, _super);
function STR_BALANCE_CONFIGSRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIGSRec.attributesToDeclare = function () {
return [
this.attr("BalanceTagDataTypes", "balanceTagDataTypesAttr", "BalanceTagDataTypes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_TAG_DATATYPEList());
}, BALANCE_BPModel.STR_BALANCE_TAG_DATATYPEList), 
this.attr("BalanceTagCodes", "balanceTagCodesAttr", "BalanceTagCodes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_TAG_CODESList());
}, BALANCE_BPModel.STR_BALANCE_TAG_CODESList), 
this.attr("BalanceCardTypes", "balanceCardTypesAttr", "BalanceCardTypes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CARD_TYPEList());
}, BALANCE_BPModel.STR_BALANCE_CARD_TYPEList), 
this.attr("BalanceGraphTypes", "balanceGraphTypesAttr", "BalanceGraphTypes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_GRAPH_TYPEList());
}, BALANCE_BPModel.STR_BALANCE_GRAPH_TYPEList), 
this.attr("Pages", "pagesAttr", "Pages", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_PAGEList());
}, BALANCE_BPModel.STR_PAGEList), 
this.attr("BalanceConfigs", "balanceConfigsAttr", "BalanceConfigs", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CONFIGList());
}, BALANCE_BPModel.STR_BALANCE_CONFIGList), 
this.attr("BalanceConfigInfos", "balanceConfigInfosAttr", "BalanceConfigInfos", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CONFIG_INFOList());
}, BALANCE_BPModel.STR_BALANCE_CONFIG_INFOList), 
this.attr("BalanceConfigInfosGroup", "balanceConfigInfosGroupAttr", "BalanceConfigInfosGroup", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CONFIG_INFO_GROUPList());
}, BALANCE_BPModel.STR_BALANCE_CONFIG_INFO_GROUPList), 
this.attr("BalanceConfigAttributes", "balanceConfigAttributesAttr", "BalanceConfigAttributes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_ATTRIBUTESList());
}, BALANCE_BPModel.STR_BALANCE_ATTRIBUTESList), 
this.attr("BalanceUnits", "balanceUnitsAttr", "BalanceUnits", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_UNITSList());
}, BALANCE_BPModel.STR_BALANCE_UNITSList)
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_CONFIGSRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_CONFIGSRec.init();
return STR_BALANCE_CONFIGSRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_CONFIGSRec = STR_BALANCE_CONFIGSRec;

});
define("BALANCE_BP.model$STR_BALANCERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCERec = (function (_super) {
__extends(STR_BALANCERec, _super);
function STR_BALANCERec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCERec.attributesToDeclare = function () {
return [
this.attr("Amount", "amountAttr", "Amount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AmountConsumed", "amountConsumedAttr", "AmountConsumed", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AmountLimit", "amountLimitAttr", "AmountLimit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Currency", "currencyAttr", "Currency", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ExpiryDate", "expiryDateAttr", "ExpiryDate", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCERec.init();
return STR_BALANCERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCERec = STR_BALANCERec;

});
define("BALANCE_BP.model$STR_BALANCEList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCERec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCEList = (function (_super) {
__extends(STR_BALANCEList, _super);
function STR_BALANCEList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCEList.RecordType = BALANCE_BPModel.STR_BALANCERec;
return STR_BALANCEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCEList = STR_BALANCEList;

});
define("BALANCE_BP.model$STR_BALACE_MESSAGERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALACE_MESSAGERec = (function (_super) {
__extends(STR_BALACE_MESSAGERec, _super);
function STR_BALACE_MESSAGERec(defaults) {
_super.apply(this, arguments);
}
STR_BALACE_MESSAGERec.attributesToDeclare = function () {
return [
this.attr("CollectAmount", "collectAmountAttr", "CollectAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MinimumAmount", "minimumAmountAttr", "MinimumAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NextChargeAmount", "nextChargeAmountAttr", "NextChargeAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NextChargeDate", "nextChargeDateAttr", "NextChargeDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALACE_MESSAGERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALACE_MESSAGERec.init();
return STR_BALACE_MESSAGERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALACE_MESSAGERec = STR_BALACE_MESSAGERec;

});
define("BALANCE_BP.model$STR_BALANCES_v2Rec", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCEList", "BALANCE_BP.model$STR_BALACE_MESSAGERec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCES_v2Rec = (function (_super) {
__extends(STR_BALANCES_v2Rec, _super);
function STR_BALANCES_v2Rec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCES_v2Rec.attributesToDeclare = function () {
return [
this.attr("Saldo", "saldoAttr", "Saldo", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCEList());
}, BALANCE_BPModel.STR_BALANCEList), 
this.attr("Internet", "internetAttr", "Internet", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCEList());
}, BALANCE_BPModel.STR_BALANCEList), 
this.attr("MIN_SMS_MMS", "mIN_SMS_MMSAttr", "MIN_SMS_MMS", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCEList());
}, BALANCE_BPModel.STR_BALANCEList), 
this.attr("RoamingUE", "roamingUEAttr", "RoamingUE", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCEList());
}, BALANCE_BPModel.STR_BALANCEList), 
this.attr("Mensagem", "mensagemAttr", "Mensagem", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALACE_MESSAGERec());
}, BALANCE_BPModel.STR_BALACE_MESSAGERec)
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCES_v2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCES_v2Rec.init();
return STR_BALANCES_v2Rec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCES_v2Rec = STR_BALANCES_v2Rec;

});
define("BALANCE_BP.model$CARD_BRANDRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var CARD_BRANDRec = (function (_super) {
__extends(CARD_BRANDRec, _super);
function CARD_BRANDRec(defaults) {
_super.apply(this, arguments);
}
CARD_BRANDRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
CARD_BRANDRec.generateFromLocalStorage = function () {
return false;
};
CARD_BRANDRec.init();
return CARD_BRANDRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.CARD_BRANDRec = CARD_BRANDRec;

});
define("BALANCE_BP.model$BALANCE_CONFIGRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CONFIGRec = (function (_super) {
__extends(BALANCE_CONFIGRec, _super);
function BALANCE_CONFIGRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CONFIGRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Tag", "tagAttr", "Tag", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PageContextId", "pageContextIdAttr", "PageContextId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("BalanceSegmentId", "balanceSegmentIdAttr", "BalanceSegmentId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceCategoryId", "balanceCategoryIdAttr", "BalanceCategoryId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceRegionId", "balanceRegionIdAttr", "BalanceRegionId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceGraphTypeId", "balanceGraphTypeIdAttr", "BalanceGraphTypeId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("BalanceCardId", "balanceCardIdAttr", "BalanceCardId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("isEnable", "isEnableAttr", "isEnable", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedAt", "updatedAtAttr", "UpdatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
}), 
this.attr("HideWhenBalanceIsZero", "hideWhenBalanceIsZeroAttr", "HideWhenBalanceIsZero", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CONFIGRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CONFIGRec.init();
return BALANCE_CONFIGRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CONFIGRec = BALANCE_CONFIGRec;

});
define("BALANCE_BP.model$BALANCE_GROUPRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_GROUPRec = (function (_super) {
__extends(BALANCE_GROUPRec, _super);
function BALANCE_GROUPRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_GROUPRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Unit", "unitAttr", "Unit", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_GROUPRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_GROUPRec.init();
return BALANCE_GROUPRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_GROUPRec = BALANCE_GROUPRec;

});
define("BALANCE_BP.model$STR_COMMUNICATIONRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_COMMUNICATIONRec = (function (_super) {
__extends(STR_COMMUNICATIONRec, _super);
function STR_COMMUNICATIONRec(defaults) {
_super.apply(this, arguments);
}
STR_COMMUNICATIONRec.attributesToDeclare = function () {
return [
this.attr("StartDate", "startDateAttr", "StartDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("StartTime", "startTimeAttr", "StartTime", false, OS.Types.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("EndDate", "endDateAttr", "EndDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DestinationNumber", "destinationNumberAttr", "DestinationNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DurationUnits", "durationUnitsAttr", "DurationUnits", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cost", "costAttr", "Cost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Domain", "domainAttr", "Domain", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_COMMUNICATIONRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_COMMUNICATIONRec.init();
return STR_COMMUNICATIONRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_COMMUNICATIONRec = STR_COMMUNICATIONRec;

});
define("BALANCE_BP.model$BALANCE_REGIONRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_REGIONRec = (function (_super) {
__extends(BALANCE_REGIONRec, _super);
function BALANCE_REGIONRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_REGIONRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_REGIONRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_REGIONRec.init();
return BALANCE_REGIONRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_REGIONRec = BALANCE_REGIONRec;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIG_v2Rec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIG_v2Rec = (function (_super) {
__extends(STR_BALANCE_CONFIG_v2Rec, _super);
function STR_BALANCE_CONFIG_v2Rec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIG_v2Rec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceName", "balanceNameAttr", "BalanceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CardID", "cardIDAttr", "CardID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceGraphID", "balanceGraphIDAttr", "BalanceGraphID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CardTypeID", "cardTypeIDAttr", "CardTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("PageID", "pageIDAttr", "PageID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("HideWhenBalanceIsZero", "hideWhenBalanceIsZeroAttr", "HideWhenBalanceIsZero", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_CONFIG_v2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_CONFIG_v2Rec.init();
return STR_BALANCE_CONFIG_v2Rec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_CONFIG_v2Rec = STR_BALANCE_CONFIG_v2Rec;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIG_v2List", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_CONFIG_v2Rec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIG_v2List = (function (_super) {
__extends(STR_BALANCE_CONFIG_v2List, _super);
function STR_BALANCE_CONFIG_v2List(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIG_v2List.RecordType = BALANCE_BPModel.STR_BALANCE_CONFIG_v2Rec;
return STR_BALANCE_CONFIG_v2List;
})(OS.DataTypes.GenericRecordList);
BALANCE_BPModel.STR_BALANCE_CONFIG_v2List = STR_BALANCE_CONFIG_v2List;

});
define("BALANCE_BP.model$STR_BALANCE_CONFIGS_v2Rec", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCE_TAG_DATATYPEList", "BALANCE_BP.model$STR_BALANCE_TAG_CODESList", "BALANCE_BP.model$STR_BALANCE_CARD_TYPEList", "BALANCE_BP.model$STR_BALANCE_GRAPH_TYPEList", "BALANCE_BP.model$STR_PAGEList", "BALANCE_BP.model$STR_BALANCE_CONFIG_v2List", "BALANCE_BP.model$STR_BALANCE_CONFIG_INFOList", "BALANCE_BP.model$STR_BALANCE_CONFIG_INFO_GROUPList", "BALANCE_BP.model$STR_BALANCE_ATTRIBUTESList", "BALANCE_BP.model$STR_BALANCE_UNITSList"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_CONFIGS_v2Rec = (function (_super) {
__extends(STR_BALANCE_CONFIGS_v2Rec, _super);
function STR_BALANCE_CONFIGS_v2Rec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_CONFIGS_v2Rec.attributesToDeclare = function () {
return [
this.attr("BalanceTagDataTypes", "balanceTagDataTypesAttr", "BalanceTagDataTypes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_TAG_DATATYPEList());
}, BALANCE_BPModel.STR_BALANCE_TAG_DATATYPEList), 
this.attr("BalanceTagCodes", "balanceTagCodesAttr", "BalanceTagCodes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_TAG_CODESList());
}, BALANCE_BPModel.STR_BALANCE_TAG_CODESList), 
this.attr("BalanceCardTypes", "balanceCardTypesAttr", "BalanceCardTypes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CARD_TYPEList());
}, BALANCE_BPModel.STR_BALANCE_CARD_TYPEList), 
this.attr("BalanceGraphTypes", "balanceGraphTypesAttr", "BalanceGraphTypes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_GRAPH_TYPEList());
}, BALANCE_BPModel.STR_BALANCE_GRAPH_TYPEList), 
this.attr("Pages", "pagesAttr", "Pages", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_PAGEList());
}, BALANCE_BPModel.STR_PAGEList), 
this.attr("BalanceConfigs", "balanceConfigsAttr", "BalanceConfigs", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CONFIG_v2List());
}, BALANCE_BPModel.STR_BALANCE_CONFIG_v2List), 
this.attr("BalanceConfigInfos", "balanceConfigInfosAttr", "BalanceConfigInfos", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CONFIG_INFOList());
}, BALANCE_BPModel.STR_BALANCE_CONFIG_INFOList), 
this.attr("BalanceConfigInfosGroup", "balanceConfigInfosGroupAttr", "BalanceConfigInfosGroup", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_CONFIG_INFO_GROUPList());
}, BALANCE_BPModel.STR_BALANCE_CONFIG_INFO_GROUPList), 
this.attr("BalanceConfigAttributes", "balanceConfigAttributesAttr", "BalanceConfigAttributes", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_ATTRIBUTESList());
}, BALANCE_BPModel.STR_BALANCE_ATTRIBUTESList), 
this.attr("BalanceUnits", "balanceUnitsAttr", "BalanceUnits", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCE_UNITSList());
}, BALANCE_BPModel.STR_BALANCE_UNITSList)
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_CONFIGS_v2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_CONFIGS_v2Rec.init();
return STR_BALANCE_CONFIGS_v2Rec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_CONFIGS_v2Rec = STR_BALANCE_CONFIGS_v2Rec;

});
define("BALANCE_BP.model$BALANCE_CATEGORYRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CATEGORYRec = (function (_super) {
__extends(BALANCE_CATEGORYRec, _super);
function BALANCE_CATEGORYRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CATEGORYRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CATEGORYRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CATEGORYRec.init();
return BALANCE_CATEGORYRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CATEGORYRec = BALANCE_CATEGORYRec;

});
define("BALANCE_BP.model$BALANCE_TAGS_DATATYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_TAGS_DATATYPERec = (function (_super) {
__extends(BALANCE_TAGS_DATATYPERec, _super);
function BALANCE_TAGS_DATATYPERec(defaults) {
_super.apply(this, arguments);
}
BALANCE_TAGS_DATATYPERec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_TAGS_DATATYPERec.generateFromLocalStorage = function () {
return false;
};
BALANCE_TAGS_DATATYPERec.init();
return BALANCE_TAGS_DATATYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_TAGS_DATATYPERec = BALANCE_TAGS_DATATYPERec;

});
define("BALANCE_BP.model$STR_BALANCESRec", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_BP.model$STR_BALANCERec"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCESRec = (function (_super) {
__extends(STR_BALANCESRec, _super);
function STR_BALANCESRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCESRec.attributesToDeclare = function () {
return [
this.attr("Saldo", "saldoAttr", "Saldo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCERec());
}, BALANCE_BPModel.STR_BALANCERec), 
this.attr("Internet", "internetAttr", "Internet", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCERec());
}, BALANCE_BPModel.STR_BALANCERec), 
this.attr("MIN_SMS_MMS", "mIN_SMS_MMSAttr", "MIN_SMS_MMS", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCERec());
}, BALANCE_BPModel.STR_BALANCERec), 
this.attr("RoamingUE", "roamingUEAttr", "RoamingUE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_BALANCERec());
}, BALANCE_BPModel.STR_BALANCERec)
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCESRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCESRec.init();
return STR_BALANCESRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCESRec = STR_BALANCESRec;

});
define("BALANCE_BP.model$STR_BALANCE_PLAFONDRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_PLAFONDRec = (function (_super) {
__extends(STR_BALANCE_PLAFONDRec, _super);
function STR_BALANCE_PLAFONDRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_PLAFONDRec.attributesToDeclare = function () {
return [
this.attr("FixedPlafond", "fixedPlafondAttr", "FixedPlafond", false, OS.Types.Text, function () {
return "";
}), 
this.attr("VariablePlafond", "variablePlafondAttr", "VariablePlafond", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientPlafond", "clientPlafondAttr", "ClientPlafond", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CPMPlafond", "cPMPlafondAttr", "CPMPlafond", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CPMMaxPlafond", "cPMMaxPlafondAttr", "CPMMaxPlafond", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_PLAFONDRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_PLAFONDRec.init();
return STR_BALANCE_PLAFONDRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_PLAFONDRec = STR_BALANCE_PLAFONDRec;

});
define("BALANCE_BP.model$STR_PHBALANCEV2Rec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_PHBALANCEV2Rec = (function (_super) {
__extends(STR_PHBALANCEV2Rec, _super);
function STR_PHBALANCEV2Rec(defaults) {
_super.apply(this, arguments);
}
STR_PHBALANCEV2Rec.attributesToDeclare = function () {
return [
this.attr("BalanceGroupId", "balanceGroupIdAttr", "BalanceGroupId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceGroupDescription", "balanceGroupDescriptionAttr", "BalanceGroupDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmount", "availableAmountAttr", "AvailableAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Unit", "unitAttr", "Unit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmount", "consumedAmountAttr", "ConsumedAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalAmount", "totalAmountAttr", "TotalAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PackageNumber", "packageNumberAttr", "PackageNumber", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsCreditBalance", "isCreditBalanceAttr", "IsCreditBalance", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AvailableAmountFmt", "availableAmountFmtAttr", "AvailableAmountFmt", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AvailableAmountUnitFmt", "availableAmountUnitFmtAttr", "AvailableAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmountFmt", "consumedAmountFmtAttr", "ConsumedAmountFmt", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("ConsumedAmountUnitFmt", "consumedAmountUnitFmtAttr", "ConsumedAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmountFmt", "totalAmountFmtAttr", "TotalAmountFmt", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalAmountUnitFmt", "totalAmountUnitFmtAttr", "TotalAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ExpiryDate", "expiryDateAttr", "ExpiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_PHBALANCEV2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_PHBALANCEV2Rec.init();
return STR_PHBALANCEV2Rec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_PHBALANCEV2Rec = STR_PHBALANCEV2Rec;

});
define("BALANCE_BP.model$STR_VoDDateRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_VoDDateRec = (function (_super) {
__extends(STR_VoDDateRec, _super);
function STR_VoDDateRec(defaults) {
_super.apply(this, arguments);
}
STR_VoDDateRec.attributesToDeclare = function () {
return [
this.attr("Month", "monthAttr", "Month", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Year", "yearAttr", "Year", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_VoDDateRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_VoDDateRec.init();
return STR_VoDDateRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_VoDDateRec = STR_VoDDateRec;

});
define("BALANCE_BP.model$STR_PHBALANCERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_PHBALANCERec = (function (_super) {
__extends(STR_PHBALANCERec, _super);
function STR_PHBALANCERec(defaults) {
_super.apply(this, arguments);
}
STR_PHBALANCERec.attributesToDeclare = function () {
return [
this.attr("BalanceGroupId", "balanceGroupIdAttr", "BalanceGroupId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceGroupDescription", "balanceGroupDescriptionAttr", "BalanceGroupDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmount", "availableAmountAttr", "AvailableAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Unit", "unitAttr", "Unit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmount", "consumedAmountAttr", "ConsumedAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalAmount", "totalAmountAttr", "TotalAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PackageNumber", "packageNumberAttr", "PackageNumber", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsCreditBalance", "isCreditBalanceAttr", "IsCreditBalance", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AvailableAmountFmt", "availableAmountFmtAttr", "AvailableAmountFmt", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AvailableAmountUnitFmt", "availableAmountUnitFmtAttr", "AvailableAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmountFmt", "consumedAmountFmtAttr", "ConsumedAmountFmt", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("ConsumedAmountUnitFmt", "consumedAmountUnitFmtAttr", "ConsumedAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmountFmt", "totalAmountFmtAttr", "TotalAmountFmt", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalAmountUnitFmt", "totalAmountUnitFmtAttr", "TotalAmountUnitFmt", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_PHBALANCERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_PHBALANCERec.init();
return STR_PHBALANCERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_PHBALANCERec = STR_PHBALANCERec;

});
define("BALANCE_BP.model$BALANCE_GRAPH_TYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_GRAPH_TYPERec = (function (_super) {
__extends(BALANCE_GRAPH_TYPERec, _super);
function BALANCE_GRAPH_TYPERec(defaults) {
_super.apply(this, arguments);
}
BALANCE_GRAPH_TYPERec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLimitedGraph", "isLimitedGraphAttr", "IsLimitedGraph", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsUnlimitedGraph", "isUnlimitedGraphAttr", "IsUnlimitedGraph", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_GRAPH_TYPERec.generateFromLocalStorage = function () {
return false;
};
BALANCE_GRAPH_TYPERec.init();
return BALANCE_GRAPH_TYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_GRAPH_TYPERec = BALANCE_GRAPH_TYPERec;

});
define("BALANCE_BP.model$BALANCE_CARD_IMAGERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CARD_IMAGERec = (function (_super) {
__extends(BALANCE_CARD_IMAGERec, _super);
function BALANCE_CARD_IMAGERec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CARD_IMAGERec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Content", "contentAttr", "Content", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("Filename", "filenameAttr", "Filename", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CARD_IMAGERec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CARD_IMAGERec.init();
return BALANCE_CARD_IMAGERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CARD_IMAGERec = BALANCE_CARD_IMAGERec;

});
define("BALANCE_BP.model$BALANCE_UNITSRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_UNITSRec = (function (_super) {
__extends(BALANCE_UNITSRec, _super);
function BALANCE_UNITSRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_UNITSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Unit", "unitAttr", "Unit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceGroupID", "balanceGroupIDAttr", "BalanceGroupID", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_UNITSRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_UNITSRec.init();
return BALANCE_UNITSRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_UNITSRec = BALANCE_UNITSRec;

});
define("BALANCE_BP.model$BALANCE_SEGMENTRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_SEGMENTRec = (function (_super) {
__extends(BALANCE_SEGMENTRec, _super);
function BALANCE_SEGMENTRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_SEGMENTRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_SEGMENTRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_SEGMENTRec.init();
return BALANCE_SEGMENTRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_SEGMENTRec = BALANCE_SEGMENTRec;

});
define("BALANCE_BP.model$BALANCE_CONFIG_INFO_GROUPRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CONFIG_INFO_GROUPRec = (function (_super) {
__extends(BALANCE_CONFIG_INFO_GROUPRec, _super);
function BALANCE_CONFIG_INFO_GROUPRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CONFIG_INFO_GROUPRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceConfigID", "balanceConfigIDAttr", "BalanceConfigID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceUnitID", "balanceUnitIDAttr", "BalanceUnitID", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("BalanceGraphTypeId", "balanceGraphTypeIdAttr", "BalanceGraphTypeId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("BalanceCardId", "balanceCardIdAttr", "BalanceCardId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedAt", "updatedAtAttr", "UpdatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CONFIG_INFO_GROUPRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CONFIG_INFO_GROUPRec.init();
return BALANCE_CONFIG_INFO_GROUPRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CONFIG_INFO_GROUPRec = BALANCE_CONFIG_INFO_GROUPRec;

});
define("BALANCE_BP.model$BALANCE_CARDRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CARDRec = (function (_super) {
__extends(BALANCE_CARDRec, _super);
function BALANCE_CARDRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CARDRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("BalanceCardImageID", "balanceCardImageIDAttr", "BalanceCardImageID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceCardTypeId", "balanceCardTypeIdAttr", "BalanceCardTypeId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CARDRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CARDRec.init();
return BALANCE_CARDRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CARDRec = BALANCE_CARDRec;

});
define("BALANCE_BP.model$STR_KANGURU_CONSUMPTIONSRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_KANGURU_CONSUMPTIONSRec = (function (_super) {
__extends(STR_KANGURU_CONSUMPTIONSRec, _super);
function STR_KANGURU_CONSUMPTIONSRec(defaults) {
_super.apply(this, arguments);
}
STR_KANGURU_CONSUMPTIONSRec.attributesToDeclare = function () {
return [
this.attr("MSISDN", "mSISDNAttr", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsUnlimited", "isUnlimitedAttr", "IsUnlimited", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ShowMaxValueToRestablish", "showMaxValueToRestablishAttr", "ShowMaxValueToRestablish", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("MaxValueToRestablish", "maxValueToRestablishAttr", "MaxValueToRestablish", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MaxValueToRestablishUnit", "maxValueToRestablishUnitAttr", "MaxValueToRestablishUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ShowPlafondExtra", "showPlafondExtraAttr", "ShowPlafondExtra", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("PlafondExtra", "plafondExtraAttr", "PlafondExtra", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("PlafondExtraUnit", "plafondExtraUnitAttr", "PlafondExtraUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableValue", "availableValueAttr", "AvailableValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AvailableValueUnit", "availableValueUnitAttr", "AvailableValueUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SpentValue", "spentValueAttr", "SpentValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("SpentValueUnit", "spentValueUnitAttr", "SpentValueUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalValue", "totalValueAttr", "TotalValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalValueUnit", "totalValueUnitAttr", "TotalValueUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ShowUETraffic", "showUETrafficAttr", "ShowUETraffic", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UETrafficAmount", "uETrafficAmountAttr", "UETrafficAmount", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("UETrafficAmountUnit", "uETrafficAmountUnitAttr", "UETrafficAmountUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("UERoamingExpireDate", "uERoamingExpireDateAttr", "UERoamingExpireDate", true, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("ShowRMTraffic", "showRMTrafficAttr", "ShowRMTraffic", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("RMTrafficAmount", "rMTrafficAmountAttr", "RMTrafficAmount", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RMTrafficAmountUnit", "rMTrafficAmountUnitAttr", "RMTrafficAmountUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RMRoamingExpireDate", "rMRoamingExpireDateAttr", "RMRoamingExpireDate", true, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("ShowHappyHour", "showHappyHourAttr", "ShowHappyHour", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("HappyHourValue", "happyHourValueAttr", "HappyHourValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("HappyHourValueUnit", "happyHourValueUnitAttr", "HappyHourValueUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("MaxValueToRestablishFmt", "maxValueToRestablishFmtAttr", "MaxValueToRestablishFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("MaxValueToRestablishUnitFmt", "maxValueToRestablishUnitFmtAttr", "MaxValueToRestablishUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PlafondExtraFmt", "plafondExtraFmtAttr", "PlafondExtraFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("PlafondExtraUnitFmt", "plafondExtraUnitFmtAttr", "PlafondExtraUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableValueFmt", "availableValueFmtAttr", "AvailableValueFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AvailableValueUnitFmt", "availableValueUnitFmtAttr", "AvailableValueUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SpentValueFmt", "spentValueFmtAttr", "SpentValueFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("SpentValueUnitFmt", "spentValueUnitFmtAttr", "SpentValueUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalValueFmt", "totalValueFmtAttr", "TotalValueFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalValueUnitFmt", "totalValueUnitFmtAttr", "TotalValueUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("UETrafficAmountFmt", "uETrafficAmountFmtAttr", "UETrafficAmountFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("UETrafficAmountUnitFmt", "uETrafficAmountUnitFmtAttr", "UETrafficAmountUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RMTrafficAmountFmt", "rMTrafficAmountFmtAttr", "RMTrafficAmountFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RMTrafficAmountUnitFmt", "rMTrafficAmountUnitFmtAttr", "RMTrafficAmountUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("HappyHourValueFmt", "happyHourValueFmtAttr", "HappyHourValueFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("HappyHourValueUnitFmt", "happyHourValueUnitFmtAttr", "HappyHourValueUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ShowRecurrentPackage", "showRecurrentPackageAttr", "ShowRecurrentPackage", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("RecurrentPackageAmount", "recurrentPackageAmountAttr", "RecurrentPackageAmount", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RecurrentPackageAmountUnit", "recurrentPackageAmountUnitAttr", "RecurrentPackageAmountUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurrentPackageInitialAmount", "recurrentPackageInitialAmountAttr", "RecurrentPackageInitialAmount", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RecurrentPackageInitialAmountUnit", "recurrentPackageInitialAmountUnitAttr", "RecurrentPackageInitialAmountUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurrentPackageAvailableAmount", "recurrentPackageAvailableAmountAttr", "RecurrentPackageAvailableAmount", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RecurrentPackageAvailableAmountUnit", "recurrentPackageAvailableAmountUnitAttr", "RecurrentPackageAvailableAmountUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurrentPackageAmountFmt", "recurrentPackageAmountFmtAttr", "RecurrentPackageAmountFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RecurrentPackageAmountUnitFmt", "recurrentPackageAmountUnitFmtAttr", "RecurrentPackageAmountUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurrentPackageInitialAmountFmt", "recurrentPackageInitialAmountFmtAttr", "RecurrentPackageInitialAmountFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RecurrentPackageInitialAmountUnitFmt", "recurrentPackageInitialAmountUnitFmtAttr", "RecurrentPackageInitialAmountUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurrentPackageAvailableAmountFmt", "recurrentPackageAvailableAmountFmtAttr", "RecurrentPackageAvailableAmountFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RecurrentPackageAvailableAmountUnitFmt", "recurrentPackageAvailableAmountUnitFmtAttr", "RecurrentPackageAvailableAmountUnitFmt", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_KANGURU_CONSUMPTIONSRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_KANGURU_CONSUMPTIONSRec.init();
return STR_KANGURU_CONSUMPTIONSRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_KANGURU_CONSUMPTIONSRec = STR_KANGURU_CONSUMPTIONSRec;

});
define("BALANCE_BP.model$PAYMENT_TYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var PAYMENT_TYPERec = (function (_super) {
__extends(PAYMENT_TYPERec, _super);
function PAYMENT_TYPERec(defaults) {
_super.apply(this, arguments);
}
PAYMENT_TYPERec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Is_Card", "is_CardAttr", "Is_Card", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
PAYMENT_TYPERec.generateFromLocalStorage = function () {
return false;
};
PAYMENT_TYPERec.init();
return PAYMENT_TYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.PAYMENT_TYPERec = PAYMENT_TYPERec;

});
define("BALANCE_BP.model$STR_OfferDataRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_OfferDataRec = (function (_super) {
__extends(STR_OfferDataRec, _super);
function STR_OfferDataRec(defaults) {
_super.apply(this, arguments);
}
STR_OfferDataRec.attributesToDeclare = function () {
return [
this.attr("MSISDN", "mSISDNAttr", "MSISDN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Previous_Base", "previous_BaseAttr", "Previous_Base", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Previous_Extra", "previous_ExtraAttr", "Previous_Extra", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Previous_Complement", "previous_ComplementAttr", "Previous_Complement", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Next_Base", "next_BaseAttr", "Next_Base", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Next_Extra", "next_ExtraAttr", "Next_Extra", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Next_Complement", "next_ComplementAttr", "Next_Complement", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Renew_Date", "renew_DateAttr", "Renew_Date", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Min_Extra", "min_ExtraAttr", "Min_Extra", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_OfferDataRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_OfferDataRec.init();
return STR_OfferDataRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_OfferDataRec = STR_OfferDataRec;

});
define("BALANCE_BP.model$STR_BALANCE_NOT_FOUNDRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_NOT_FOUNDRec = (function (_super) {
__extends(STR_BALANCE_NOT_FOUNDRec, _super);
function STR_BALANCE_NOT_FOUNDRec(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_NOT_FOUNDRec.attributesToDeclare = function () {
return [
this.attr("BalanceTag", "balanceTagAttr", "BalanceTag", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_NOT_FOUNDRec.fromStructure = function (str) {
return new STR_BALANCE_NOT_FOUNDRec(new STR_BALANCE_NOT_FOUNDRec.RecordClass({
balanceTagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_BALANCE_NOT_FOUNDRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BALANCE_NOT_FOUNDRec.init();
return STR_BALANCE_NOT_FOUNDRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_BALANCE_NOT_FOUNDRec = STR_BALANCE_NOT_FOUNDRec;

});
define("BALANCE_BP.model$BALANCE_CONFIG_INFORec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CONFIG_INFORec = (function (_super) {
__extends(BALANCE_CONFIG_INFORec, _super);
function BALANCE_CONFIG_INFORec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CONFIG_INFORec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceConfigInfoGroupID", "balanceConfigInfoGroupIDAttr", "BalanceConfigInfoGroupID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceConfigId", "balanceConfigIdAttr", "BalanceConfigId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceConfigAttributeId", "balanceConfigAttributeIdAttr", "BalanceConfigAttributeId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("AfttributeValue", "afttributeValueAttr", "AfttributeValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedAt", "updatedAtAttr", "UpdatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CONFIG_INFORec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CONFIG_INFORec.init();
return BALANCE_CONFIG_INFORec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CONFIG_INFORec = BALANCE_CONFIG_INFORec;

});
define("BALANCE_BP.model$STR_VoDLINERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_VoDLINERec = (function (_super) {
__extends(STR_VoDLINERec, _super);
function STR_VoDLINERec(defaults) {
_super.apply(this, arguments);
}
STR_VoDLINERec.attributesToDeclare = function () {
return [
this.attr("Datetime", "datetimeAttr", "Datetime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Price", "priceAttr", "Price", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("EventType", "eventTypeAttr", "EventType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ClassColor", "classColorAttr", "ClassColor", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Category", "categoryAttr", "Category", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_VoDLINERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_VoDLINERec.init();
return STR_VoDLINERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_VoDLINERec = STR_VoDLINERec;

});
define("BALANCE_BP.model$BALANCE_CONFIG_ATTRIBUTESRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CONFIG_ATTRIBUTESRec = (function (_super) {
__extends(BALANCE_CONFIG_ATTRIBUTESRec, _super);
function BALANCE_CONFIG_ATTRIBUTESRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CONFIG_ATTRIBUTESRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("isEnable", "isEnableAttr", "isEnable", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CONFIG_ATTRIBUTESRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CONFIG_ATTRIBUTESRec.init();
return BALANCE_CONFIG_ATTRIBUTESRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CONFIG_ATTRIBUTESRec = BALANCE_CONFIG_ATTRIBUTESRec;

});
define("BALANCE_BP.model$BALANCE_CARD_TYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_CARD_TYPERec = (function (_super) {
__extends(BALANCE_CARD_TYPERec, _super);
function BALANCE_CARD_TYPERec(defaults) {
_super.apply(this, arguments);
}
BALANCE_CARD_TYPERec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_CARD_TYPERec.generateFromLocalStorage = function () {
return false;
};
BALANCE_CARD_TYPERec.init();
return BALANCE_CARD_TYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_CARD_TYPERec = BALANCE_CARD_TYPERec;

});
define("BALANCE_BP.model$VOD_PURCHASE_TYPERec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var VOD_PURCHASE_TYPERec = (function (_super) {
__extends(VOD_PURCHASE_TYPERec, _super);
function VOD_PURCHASE_TYPERec(defaults) {
_super.apply(this, arguments);
}
VOD_PURCHASE_TYPERec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ColorClass", "colorClassAttr", "ColorClass", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
VOD_PURCHASE_TYPERec.generateFromLocalStorage = function () {
return false;
};
VOD_PURCHASE_TYPERec.init();
return VOD_PURCHASE_TYPERec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.VOD_PURCHASE_TYPERec = VOD_PURCHASE_TYPERec;

});
define("BALANCE_BP.model$STR_WalletCardsRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var STR_WalletCardsRec = (function (_super) {
__extends(STR_WalletCardsRec, _super);
function STR_WalletCardsRec(defaults) {
_super.apply(this, arguments);
}
STR_WalletCardsRec.attributesToDeclare = function () {
return [
this.attr("Identifier", "identifierAttr", "Identifier", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CodeNumber", "codeNumberAttr", "CodeNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PaymentTypeId", "paymentTypeIdAttr", "PaymentTypeId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Content_Type", "content_TypeAttr", "Content_Type", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Content_Binary", "content_BinaryAttr", "Content_Binary", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("hasBank", "hasBankAttr", "hasBank", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_WalletCardsRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_WalletCardsRec.init();
return STR_WalletCardsRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.STR_WalletCardsRec = STR_WalletCardsRec;

});
define("BALANCE_BP.model$BALANCE_TAGS_DATATYPE_CONFIGRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_TAGS_DATATYPE_CONFIGRec = (function (_super) {
__extends(BALANCE_TAGS_DATATYPE_CONFIGRec, _super);
function BALANCE_TAGS_DATATYPE_CONFIGRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_TAGS_DATATYPE_CONFIGRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BalanceTagsdataTypeId", "balanceTagsdataTypeIdAttr", "BalanceTagsdataTypeId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("DataTypeFormat", "dataTypeFormatAttr", "DataTypeFormat", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DataTypeFormatReceived", "dataTypeFormatReceivedAttr", "DataTypeFormatReceived", false, OS.Types.Text, function () {
return "";
}), 
this.attr("isEnable", "isEnableAttr", "isEnable", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_TAGS_DATATYPE_CONFIGRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_TAGS_DATATYPE_CONFIGRec.init();
return BALANCE_TAGS_DATATYPE_CONFIGRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_TAGS_DATATYPE_CONFIGRec = BALANCE_TAGS_DATATYPE_CONFIGRec;

});
define("BALANCE_BP.model$BALANCE_TAGSRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BALANCE_TAGSRec = (function (_super) {
__extends(BALANCE_TAGSRec, _super);
function BALANCE_TAGSRec(defaults) {
_super.apply(this, arguments);
}
BALANCE_TAGSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsPositionConfiguration", "isPositionConfigurationAttr", "IsPositionConfiguration", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
BALANCE_TAGSRec.generateFromLocalStorage = function () {
return false;
};
BALANCE_TAGSRec.init();
return BALANCE_TAGSRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BALANCE_TAGSRec = BALANCE_TAGSRec;

});
define("BALANCE_BP.model$BANKSRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BANKSRec = (function (_super) {
__extends(BANKSRec, _super);
function BANKSRec(defaults) {
_super.apply(this, arguments);
}
BANKSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ContentId", "contentIdAttr", "ContentId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
BANKSRec.generateFromLocalStorage = function () {
return false;
};
BANKSRec.init();
return BANKSRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BANKSRec = BANKSRec;

});
define("BALANCE_BP.model$PAYMENT_PROCESSRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var PAYMENT_PROCESSRec = (function (_super) {
__extends(PAYMENT_PROCESSRec, _super);
function PAYMENT_PROCESSRec(defaults) {
_super.apply(this, arguments);
}
PAYMENT_PROCESSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CancelScreenConfiguration", "cancelScreenConfigurationAttr", "CancelScreenConfiguration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SuccessScreenConfiguration", "successScreenConfigurationAttr", "SuccessScreenConfiguration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ErrorScreenConfiguration", "errorScreenConfigurationAttr", "ErrorScreenConfiguration", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PAYMENT_PROCESSRec.generateFromLocalStorage = function () {
return false;
};
PAYMENT_PROCESSRec.init();
return PAYMENT_PROCESSRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.PAYMENT_PROCESSRec = PAYMENT_PROCESSRec;

});
define("BALANCE_BP.model$BIN_CODESRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var BIN_CODESRec = (function (_super) {
__extends(BIN_CODESRec, _super);
function BIN_CODESRec(defaults) {
_super.apply(this, arguments);
}
BIN_CODESRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("BIN", "bINAttr", "BIN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CardBrandId", "cardBrandIdAttr", "CardBrandId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("BankId", "bankIdAttr", "BankId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Country_Region", "country_RegionAttr", "Country_Region", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
BIN_CODESRec.generateFromLocalStorage = function () {
return false;
};
BIN_CODESRec.init();
return BIN_CODESRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.BIN_CODESRec = BIN_CODESRec;

});
define("BALANCE_BP.model$PAGE_CONTEXTRec", ["exports", "OutSystems", "BALANCE_BP.model"], function (exports, OutSystems, BALANCE_BPModel) {
var OS = OutSystems.Internal;
var PAGE_CONTEXTRec = (function (_super) {
__extends(PAGE_CONTEXTRec, _super);
function PAGE_CONTEXTRec(defaults) {
_super.apply(this, arguments);
}
PAGE_CONTEXTRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Code", "codeAttr", "Code", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("isEnable", "isEnableAttr", "isEnable", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedAt", "updatedAtAttr", "UpdatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Application", "applicationAttr", "Application", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PAGE_CONTEXTRec.generateFromLocalStorage = function () {
return false;
};
PAGE_CONTEXTRec.init();
return PAGE_CONTEXTRec;
})(OS.DataTypes.GenericRecord);
BALANCE_BPModel.PAGE_CONTEXTRec = PAGE_CONTEXTRec;

});
define("BALANCE_BP.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var BALANCE_BPModel = exports;
});
