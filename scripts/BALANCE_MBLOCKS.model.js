define("BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.model$Local_PAGERec"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_LINESLocal_PAGERecord = (function (_super) {
__extends(Local_BALANCE_LINESLocal_PAGERecord, _super);
function Local_BALANCE_LINESLocal_PAGERecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_LINESLocal_PAGERecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_LINES", "local_BALANCE_LINESAttr", "Local_BALANCE_LINES", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_LINESRec());
}, BALANCE_MBPModel.Local_BALANCE_LINESRec), 
this.attr("Local_PAGE", "local_PAGEAttr", "Local_PAGE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_PAGERec());
}, BALANCE_MBPModel.Local_PAGERec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_LINESLocal_PAGERecord.IsAnonymousRecord = true;
Local_BALANCE_LINESLocal_PAGERecord.UniqueId = "28c7685d-1cb1-9829-0003-7271c5aa0c68";
Local_BALANCE_LINESLocal_PAGERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_LINESLocal_PAGERecord.init();
return Local_BALANCE_LINESLocal_PAGERecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGERecord = Local_BALANCE_LINESLocal_PAGERecord;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGERecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_LINESLocal_PAGERecordList = (function (_super) {
__extends(Local_BALANCE_LINESLocal_PAGERecordList, _super);
function Local_BALANCE_LINESLocal_PAGERecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_LINESLocal_PAGERecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGERecord;
return Local_BALANCE_LINESLocal_PAGERecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGERecordList = Local_BALANCE_LINESLocal_PAGERecordList;

});
define("BALANCE_MBLOCKS.model$ICON_CLASSRecord", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$ICON_CLASSRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASSRecord = (function (_super) {
__extends(ICON_CLASSRecord, _super);
function ICON_CLASSRecord(defaults) {
_super.apply(this, arguments);
}
ICON_CLASSRecord.attributesToDeclare = function () {
return [
this.attr("ICON_CLASS", "iCON_CLASSAttr", "ICON_CLASS", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.ICON_CLASSRec());
}, MobileUIWidgetsModel.ICON_CLASSRec)
].concat(_super.attributesToDeclare.call(this));
};
ICON_CLASSRecord.fromStructure = function (str) {
return new ICON_CLASSRecord(new ICON_CLASSRecord.RecordClass({
iCON_CLASSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ICON_CLASSRecord.IsAnonymousRecord = true;
ICON_CLASSRecord.UniqueId = "23a73a44-82ba-068c-0bd7-39ce6861e6e4";
ICON_CLASSRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ICON_CLASSRecord.init();
return ICON_CLASSRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.ICON_CLASSRecord = ICON_CLASSRecord;

});
define("BALANCE_MBLOCKS.model$ICON_CLASSRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$ICON_CLASSRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASSRecordList = (function (_super) {
__extends(ICON_CLASSRecordList, _super);
function ICON_CLASSRecordList(defaults) {
_super.apply(this, arguments);
}
ICON_CLASSRecordList.RecordType = BALANCE_MBLOCKSModel.ICON_CLASSRecord;
return ICON_CLASSRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.ICON_CLASSRecordList = ICON_CLASSRecordList;

});
define("BALANCE_MBLOCKS.model$ValidatePersonInfo_OutputRecord", ["exports", "OutSystems", "CON_GLOBE.model", "BALANCE_MBLOCKS.model", "CON_GLOBE.model$ValidatePersonInfo_OutputRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$CON_GLOBE"], function (exports, OutSystems, CON_GLOBEModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ValidatePersonInfo_OutputRecord = (function (_super) {
__extends(ValidatePersonInfo_OutputRecord, _super);
function ValidatePersonInfo_OutputRecord(defaults) {
_super.apply(this, arguments);
}
ValidatePersonInfo_OutputRecord.attributesToDeclare = function () {
return [
this.attr("ValidatePersonInfo_Output", "validatePersonInfo_OutputAttr", "ValidatePersonInfo_Output", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ValidatePersonInfo_OutputRec());
}, CON_GLOBEModel.ValidatePersonInfo_OutputRec)
].concat(_super.attributesToDeclare.call(this));
};
ValidatePersonInfo_OutputRecord.fromStructure = function (str) {
return new ValidatePersonInfo_OutputRecord(new ValidatePersonInfo_OutputRecord.RecordClass({
validatePersonInfo_OutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValidatePersonInfo_OutputRecord.IsAnonymousRecord = true;
ValidatePersonInfo_OutputRecord.UniqueId = "47abfa5a-6a4f-75cc-b4b1-b339e8bc9148";
ValidatePersonInfo_OutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ValidatePersonInfo_OutputRecord.init();
return ValidatePersonInfo_OutputRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.ValidatePersonInfo_OutputRecord = ValidatePersonInfo_OutputRecord;

});
define("BALANCE_MBLOCKS.model$ValidatePersonInfo_OutputRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$ValidatePersonInfo_OutputRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ValidatePersonInfo_OutputRecordList = (function (_super) {
__extends(ValidatePersonInfo_OutputRecordList, _super);
function ValidatePersonInfo_OutputRecordList(defaults) {
_super.apply(this, arguments);
}
ValidatePersonInfo_OutputRecordList.RecordType = BALANCE_MBLOCKSModel.ValidatePersonInfo_OutputRecord;
return ValidatePersonInfo_OutputRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.ValidatePersonInfo_OutputRecordList = ValidatePersonInfo_OutputRecordList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPEList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_CARD_TYPEList = (function (_super) {
__extends(Local_BALANCE_CARD_TYPEList, _super);
function Local_BALANCE_CARD_TYPEList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_CARD_TYPEList.RecordType = BALANCE_MBPModel.Local_BALANCE_CARD_TYPERec;
return Local_BALANCE_CARD_TYPEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPEList = Local_BALANCE_CARD_TYPEList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_GRAPH_TYPERecord = (function (_super) {
__extends(Local_BALANCE_GRAPH_TYPERecord, _super);
function Local_BALANCE_GRAPH_TYPERecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_GRAPH_TYPERecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_GRAPH_TYPE", "local_BALANCE_GRAPH_TYPEAttr", "Local_BALANCE_GRAPH_TYPE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_GRAPH_TYPERec());
}, BALANCE_MBPModel.Local_BALANCE_GRAPH_TYPERec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_GRAPH_TYPERecord.fromStructure = function (str) {
return new Local_BALANCE_GRAPH_TYPERecord(new Local_BALANCE_GRAPH_TYPERecord.RecordClass({
local_BALANCE_GRAPH_TYPEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_BALANCE_GRAPH_TYPERecord.IsAnonymousRecord = true;
Local_BALANCE_GRAPH_TYPERecord.UniqueId = "c9ad3ceb-e0b9-8e06-3030-c9fb0ad7d121";
Local_BALANCE_GRAPH_TYPERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_GRAPH_TYPERecord.init();
return Local_BALANCE_GRAPH_TYPERecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecord = Local_BALANCE_GRAPH_TYPERecord;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_GRAPH_TYPERecordList = (function (_super) {
__extends(Local_BALANCE_GRAPH_TYPERecordList, _super);
function Local_BALANCE_GRAPH_TYPERecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_GRAPH_TYPERecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecord;
return Local_BALANCE_GRAPH_TYPERecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList = Local_BALANCE_GRAPH_TYPERecordList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_CONFIGRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_CONFIGRecord = (function (_super) {
__extends(Local_BALANCE_CONFIGRecord, _super);
function Local_BALANCE_CONFIGRecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_CONFIGRecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_CONFIG", "local_BALANCE_CONFIGAttr", "Local_BALANCE_CONFIG", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_CONFIGRec());
}, BALANCE_MBPModel.Local_BALANCE_CONFIGRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_CONFIGRecord.fromStructure = function (str) {
return new Local_BALANCE_CONFIGRecord(new Local_BALANCE_CONFIGRecord.RecordClass({
local_BALANCE_CONFIGAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_BALANCE_CONFIGRecord.IsAnonymousRecord = true;
Local_BALANCE_CONFIGRecord.UniqueId = "1103597b-1df6-f6bc-089b-1cff071e1932";
Local_BALANCE_CONFIGRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_CONFIGRecord.init();
return Local_BALANCE_CONFIGRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_CONFIGRecord = Local_BALANCE_CONFIGRecord;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Card_TypeRec = (function (_super) {
__extends(STR_Balance_Card_TypeRec, _super);
function STR_Balance_Card_TypeRec(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Card_TypeRec.attributesToDeclare = function () {
return [
this.attr("InternetCardCode", "internetCardCodeAttr", "InternetCardCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MinutesCardCode", "minutesCardCodeAttr", "MinutesCardCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("GeneralCardCode", "generalCardCodeAttr", "GeneralCardCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CashCardCode", "cashCardCodeAttr", "CashCardCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AddOnsCardCode", "addOnsCardCodeAttr", "AddOnsCardCode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_Balance_Card_TypeRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_Balance_Card_TypeRec.init();
return STR_Balance_Card_TypeRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec = STR_Balance_Card_TypeRec;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Card_TypeRecord = (function (_super) {
__extends(STR_Balance_Card_TypeRecord, _super);
function STR_Balance_Card_TypeRecord(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Card_TypeRecord.attributesToDeclare = function () {
return [
this.attr("STR_Balance_Card_Type", "sTR_Balance_Card_TypeAttr", "STR_Balance_Card_Type", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_Balance_Card_TypeRecord.fromStructure = function (str) {
return new STR_Balance_Card_TypeRecord(new STR_Balance_Card_TypeRecord.RecordClass({
sTR_Balance_Card_TypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_Balance_Card_TypeRecord.IsAnonymousRecord = true;
STR_Balance_Card_TypeRecord.UniqueId = "923aa286-acc2-e42e-6a75-da97059777b0";
STR_Balance_Card_TypeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_Balance_Card_TypeRecord.init();
return STR_Balance_Card_TypeRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRecord = STR_Balance_Card_TypeRecord;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Card_TypeRecordList = (function (_super) {
__extends(STR_Balance_Card_TypeRecordList, _super);
function STR_Balance_Card_TypeRecordList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Card_TypeRecordList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRecord;
return STR_Balance_Card_TypeRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRecordList = STR_Balance_Card_TypeRecordList;

});
define("BALANCE_MBLOCKS.model$STR_BALANCE_INFORecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$STR_BALANCE_INFORec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_INFORecord = (function (_super) {
__extends(STR_BALANCE_INFORecord, _super);
function STR_BALANCE_INFORecord(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_INFORecord.attributesToDeclare = function () {
return [
this.attr("STR_BALANCE_INFO", "sTR_BALANCE_INFOAttr", "STR_BALANCE_INFO", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.STR_BALANCE_INFORec());
}, BALANCE_MBPModel.STR_BALANCE_INFORec)
].concat(_super.attributesToDeclare.call(this));
};
STR_BALANCE_INFORecord.fromStructure = function (str) {
return new STR_BALANCE_INFORecord(new STR_BALANCE_INFORecord.RecordClass({
sTR_BALANCE_INFOAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_BALANCE_INFORecord.IsAnonymousRecord = true;
STR_BALANCE_INFORecord.UniqueId = "1d870602-04d0-d969-7cfd-e50ffeda997c";
STR_BALANCE_INFORecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_BALANCE_INFORecord.init();
return STR_BALANCE_INFORecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BALANCE_INFORecord = STR_BALANCE_INFORecord;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_CARD_TYPERecord = (function (_super) {
__extends(Local_BALANCE_CARD_TYPERecord, _super);
function Local_BALANCE_CARD_TYPERecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_CARD_TYPERecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_CARD_TYPE", "local_BALANCE_CARD_TYPEAttr", "Local_BALANCE_CARD_TYPE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_CARD_TYPERec());
}, BALANCE_MBPModel.Local_BALANCE_CARD_TYPERec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_CARD_TYPERecord.fromStructure = function (str) {
return new Local_BALANCE_CARD_TYPERecord(new Local_BALANCE_CARD_TYPERecord.RecordClass({
local_BALANCE_CARD_TYPEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_BALANCE_CARD_TYPERecord.IsAnonymousRecord = true;
Local_BALANCE_CARD_TYPERecord.UniqueId = "67dd828f-13aa-7c19-ca7b-a3b968129380";
Local_BALANCE_CARD_TYPERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_CARD_TYPERecord.init();
return Local_BALANCE_CARD_TYPERecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecord = Local_BALANCE_CARD_TYPERecord;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_CARD_TYPERecordList = (function (_super) {
__extends(Local_BALANCE_CARD_TYPERecordList, _super);
function Local_BALANCE_CARD_TYPERecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_CARD_TYPERecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecord;
return Local_BALANCE_CARD_TYPERecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList = Local_BALANCE_CARD_TYPERecordList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_CreditRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_CreditRec = (function (_super) {
__extends(STR_Balance_CreditRec, _super);
function STR_Balance_CreditRec(defaults) {
_super.apply(this, arguments);
}
STR_Balance_CreditRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmount", "availableAmountAttr", "AvailableAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AvailableAmountUnit", "availableAmountUnitAttr", "AvailableAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmount", "consumedAmountAttr", "ConsumedAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("ConsumedAmountUnit", "consumedAmountUnitAttr", "ConsumedAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmount", "totalAmountAttr", "TotalAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalAmountUnit", "totalAmountUnitAttr", "TotalAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsLimited", "isLimitedAttr", "IsLimited", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ShowBalanceUnit", "showBalanceUnitAttr", "ShowBalanceUnit", false, OS.Types.Boolean, function () {
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
STR_Balance_CreditRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_Balance_CreditRec.init();
return STR_Balance_CreditRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_CreditRec = STR_Balance_CreditRec;

});
define("BALANCE_MBLOCKS.model$STR_Balance_CreditList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_CreditRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_CreditList = (function (_super) {
__extends(STR_Balance_CreditList, _super);
function STR_Balance_CreditList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_CreditList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_CreditRec;
return STR_Balance_CreditList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_CreditList = STR_Balance_CreditList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceSimulatorRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceSimulatorRec = (function (_super) {
__extends(STR_BalanceSimulatorRec, _super);
function STR_BalanceSimulatorRec(defaults) {
_super.apply(this, arguments);
}
STR_BalanceSimulatorRec.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CellPhoneNumber", "cellPhoneNumberAttr", "CellPhoneNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TagCode", "tagCodeAttr", "TagCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmount", "availableAmountAttr", "AvailableAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmountFmt", "availableAmountFmtAttr", "AvailableAmountFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmountUnit", "availableAmountUnitAttr", "AvailableAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmountUnitFmt", "availableAmountUnitFmtAttr", "AvailableAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmount", "consumedAmountAttr", "ConsumedAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmountUnit", "consumedAmountUnitAttr", "ConsumedAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmountFmt", "consumedAmountFmtAttr", "ConsumedAmountFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmountUnitFmt", "consumedAmountUnitFmtAttr", "ConsumedAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmount", "totalAmountAttr", "TotalAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmountFmt", "totalAmountFmtAttr", "TotalAmountFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmountUnit", "totalAmountUnitAttr", "TotalAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmountUnitFmt", "totalAmountUnitFmtAttr", "TotalAmountUnitFmt", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsCredit", "isCreditAttr", "IsCredit", false, OS.Types.Text, function () {
return "False";
}), 
this.attr("CreditDescription", "creditDescriptionAttr", "CreditDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BalanceSimulatorRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BalanceSimulatorRec.init();
return STR_BalanceSimulatorRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceSimulatorRec = STR_BalanceSimulatorRec;

});
define("BALANCE_MBLOCKS.model$STR_BalanceSimulatorRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceSimulatorRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceSimulatorRecord = (function (_super) {
__extends(STR_BalanceSimulatorRecord, _super);
function STR_BalanceSimulatorRecord(defaults) {
_super.apply(this, arguments);
}
STR_BalanceSimulatorRecord.attributesToDeclare = function () {
return [
this.attr("STR_BalanceSimulator", "sTR_BalanceSimulatorAttr", "STR_BalanceSimulator", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceSimulatorRec());
}, BALANCE_MBLOCKSModel.STR_BalanceSimulatorRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_BalanceSimulatorRecord.fromStructure = function (str) {
return new STR_BalanceSimulatorRecord(new STR_BalanceSimulatorRecord.RecordClass({
sTR_BalanceSimulatorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_BalanceSimulatorRecord.IsAnonymousRecord = true;
STR_BalanceSimulatorRecord.UniqueId = "b17bfa05-0cad-0023-3c31-88f337bb2bba";
STR_BalanceSimulatorRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_BalanceSimulatorRecord.init();
return STR_BalanceSimulatorRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceSimulatorRecord = STR_BalanceSimulatorRecord;

});
define("BALANCE_MBLOCKS.model$STR_BalanceSimulatorRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceSimulatorRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceSimulatorRecordList = (function (_super) {
__extends(STR_BalanceSimulatorRecordList, _super);
function STR_BalanceSimulatorRecordList(defaults) {
_super.apply(this, arguments);
}
STR_BalanceSimulatorRecordList.RecordType = BALANCE_MBLOCKSModel.STR_BalanceSimulatorRecord;
return STR_BalanceSimulatorRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceSimulatorRecordList = STR_BalanceSimulatorRecordList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_CONFIGList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_CONFIGList = (function (_super) {
__extends(Local_BALANCE_CONFIGList, _super);
function Local_BALANCE_CONFIGList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_CONFIGList.RecordType = BALANCE_MBPModel.Local_BALANCE_CONFIGRec;
return Local_BALANCE_CONFIGList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_CONFIGList = Local_BALANCE_CONFIGList;

});
define("BALANCE_MBLOCKS.model$ICON_SIZEList", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$ICON_SIZERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_SIZEList = (function (_super) {
__extends(ICON_SIZEList, _super);
function ICON_SIZEList(defaults) {
_super.apply(this, arguments);
}
ICON_SIZEList.RecordType = MobileUIWidgetsModel.ICON_SIZERec;
return ICON_SIZEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.ICON_SIZEList = ICON_SIZEList;

});
define("BALANCE_MBLOCKS.model$SolidSubTitle2List", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$SolidSubTitleRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidSubTitle2List = (function (_super) {
__extends(SolidSubTitle2List, _super);
function SolidSubTitle2List(defaults) {
_super.apply(this, arguments);
}
SolidSubTitle2List.RecordType = MobileUIWidgetsModel.SolidSubTitleRec;
return SolidSubTitle2List;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.SolidSubTitle2List = SolidSubTitle2List;

});
define("BALANCE_MBLOCKS.model$SolidGaugeEasyFormat2Record", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidGaugeEasyFormat2Record = (function (_super) {
__extends(SolidGaugeEasyFormat2Record, _super);
function SolidGaugeEasyFormat2Record(defaults) {
_super.apply(this, arguments);
}
SolidGaugeEasyFormat2Record.attributesToDeclare = function () {
return [
this.attr("SolidGaugeEasyFormat2", "solidGaugeEasyFormatAttr", "SolidGaugeEasyFormat2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.SolidGaugeEasyFormatRec());
}, MobileUIWidgetsModel.SolidGaugeEasyFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
SolidGaugeEasyFormat2Record.fromStructure = function (str) {
return new SolidGaugeEasyFormat2Record(new SolidGaugeEasyFormat2Record.RecordClass({
solidGaugeEasyFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SolidGaugeEasyFormat2Record.IsAnonymousRecord = true;
SolidGaugeEasyFormat2Record.UniqueId = "2d1cf3da-1eb9-6247-d025-d016792d5b76";
SolidGaugeEasyFormat2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
SolidGaugeEasyFormat2Record.init();
return SolidGaugeEasyFormat2Record;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.SolidGaugeEasyFormat2Record = SolidGaugeEasyFormat2Record;

});
define("BALANCE_MBLOCKS.model$ICON_SIZERecord", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$ICON_SIZERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_SIZERecord = (function (_super) {
__extends(ICON_SIZERecord, _super);
function ICON_SIZERecord(defaults) {
_super.apply(this, arguments);
}
ICON_SIZERecord.attributesToDeclare = function () {
return [
this.attr("ICON_SIZE", "iCON_SIZEAttr", "ICON_SIZE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.ICON_SIZERec());
}, MobileUIWidgetsModel.ICON_SIZERec)
].concat(_super.attributesToDeclare.call(this));
};
ICON_SIZERecord.fromStructure = function (str) {
return new ICON_SIZERecord(new ICON_SIZERecord.RecordClass({
iCON_SIZEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ICON_SIZERecord.IsAnonymousRecord = true;
ICON_SIZERecord.UniqueId = "96e2dead-976a-b4a9-57f5-f6d2f7ab94d5";
ICON_SIZERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ICON_SIZERecord.init();
return ICON_SIZERecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.ICON_SIZERecord = ICON_SIZERecord;

});
define("BALANCE_MBLOCKS.model$ICON_SIZERecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$ICON_SIZERecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_SIZERecordList = (function (_super) {
__extends(ICON_SIZERecordList, _super);
function ICON_SIZERecordList(defaults) {
_super.apply(this, arguments);
}
ICON_SIZERecordList.RecordType = BALANCE_MBLOCKSModel.ICON_SIZERecord;
return ICON_SIZERecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.ICON_SIZERecordList = ICON_SIZERecordList;

});
define("BALANCE_MBLOCKS.model$SolidChartTitle2List", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$SolidChartTitleRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidChartTitle2List = (function (_super) {
__extends(SolidChartTitle2List, _super);
function SolidChartTitle2List(defaults) {
_super.apply(this, arguments);
}
SolidChartTitle2List.RecordType = MobileUIWidgetsModel.SolidChartTitleRec;
return SolidChartTitle2List;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.SolidChartTitle2List = SolidChartTitle2List;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructV2Rec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructV2Rec = (function (_super) {
__extends(STR_BalanceOrchestrationStructV2Rec, _super);
function STR_BalanceOrchestrationStructV2Rec(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructV2Rec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmount", "availableAmountAttr", "AvailableAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AvailableAmountUnit", "availableAmountUnitAttr", "AvailableAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmount", "consumedAmountAttr", "ConsumedAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("ConsumedAmountUnit", "consumedAmountUnitAttr", "ConsumedAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmount", "totalAmountAttr", "TotalAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalAmountUnit", "totalAmountUnitAttr", "TotalAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ShowBalanceUnit", "showBalanceUnitAttr", "ShowBalanceUnit", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("PackageNumber", "packageNumberAttr", "PackageNumber", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsLimited", "isLimitedAttr", "IsLimited", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsUnlimited", "isUnlimitedAttr", "IsUnlimited", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("GraphTypeID", "graphTypeIDAttr", "GraphTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CardTypeID", "cardTypeIDAttr", "CardTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
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
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BalanceOrchestrationStructV2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BalanceOrchestrationStructV2Rec.init();
return STR_BalanceOrchestrationStructV2Rec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2Rec = STR_BalanceOrchestrationStructV2Rec;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructV2Record", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructV2Rec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructV2Record = (function (_super) {
__extends(STR_BalanceOrchestrationStructV2Record, _super);
function STR_BalanceOrchestrationStructV2Record(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructV2Record.attributesToDeclare = function () {
return [
this.attr("STR_BalanceOrchestrationStructV2", "sTR_BalanceOrchestrationStructV2Attr", "STR_BalanceOrchestrationStructV2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2Rec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2Rec)
].concat(_super.attributesToDeclare.call(this));
};
STR_BalanceOrchestrationStructV2Record.fromStructure = function (str) {
return new STR_BalanceOrchestrationStructV2Record(new STR_BalanceOrchestrationStructV2Record.RecordClass({
sTR_BalanceOrchestrationStructV2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_BalanceOrchestrationStructV2Record.IsAnonymousRecord = true;
STR_BalanceOrchestrationStructV2Record.UniqueId = "e21bd38a-327d-28a5-4a9a-fe0d37bb50fc";
STR_BalanceOrchestrationStructV2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_BalanceOrchestrationStructV2Record.init();
return STR_BalanceOrchestrationStructV2Record;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2Record = STR_BalanceOrchestrationStructV2Record;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructV2RecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructV2Record"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructV2RecordList = (function (_super) {
__extends(STR_BalanceOrchestrationStructV2RecordList, _super);
function STR_BalanceOrchestrationStructV2RecordList(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructV2RecordList.RecordType = BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2Record;
return STR_BalanceOrchestrationStructV2RecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2RecordList = STR_BalanceOrchestrationStructV2RecordList;

});
define("BALANCE_MBLOCKS.model$SolidGaugeEasyFormat2List", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidGaugeEasyFormat2List = (function (_super) {
__extends(SolidGaugeEasyFormat2List, _super);
function SolidGaugeEasyFormat2List(defaults) {
_super.apply(this, arguments);
}
SolidGaugeEasyFormat2List.RecordType = MobileUIWidgetsModel.SolidGaugeEasyFormatRec;
return SolidGaugeEasyFormat2List;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.SolidGaugeEasyFormat2List = SolidGaugeEasyFormat2List;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBP.model$Local_BALANCE_CONFIGRec"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord = (function (_super) {
__extends(Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord, _super);
function Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_LINES", "local_BALANCE_LINESAttr", "Local_BALANCE_LINES", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_LINESRec());
}, BALANCE_MBPModel.Local_BALANCE_LINESRec), 
this.attr("Local_PAGE", "local_PAGEAttr", "Local_PAGE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_PAGERec());
}, BALANCE_MBPModel.Local_PAGERec), 
this.attr("Local_BALANCE_CONFIG", "local_BALANCE_CONFIGAttr", "Local_BALANCE_CONFIG", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_CONFIGRec());
}, BALANCE_MBPModel.Local_BALANCE_CONFIGRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord.IsAnonymousRecord = true;
Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord.UniqueId = "5e903385-2854-442a-4512-9f9cc38b52da";
Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord.init();
return Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord = Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList = (function (_super) {
__extends(Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList, _super);
function Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecord;
return Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList = Local_BALANCE_LINESLocal_PAGELocal_BALANCE_CONFIGRecordList;

});
define("BALANCE_MBLOCKS.model$SolidChartTitle2Record", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$SolidChartTitleRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidChartTitle2Record = (function (_super) {
__extends(SolidChartTitle2Record, _super);
function SolidChartTitle2Record(defaults) {
_super.apply(this, arguments);
}
SolidChartTitle2Record.attributesToDeclare = function () {
return [
this.attr("SolidChartTitle2", "solidChartTitleAttr", "SolidChartTitle2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.SolidChartTitleRec());
}, MobileUIWidgetsModel.SolidChartTitleRec)
].concat(_super.attributesToDeclare.call(this));
};
SolidChartTitle2Record.fromStructure = function (str) {
return new SolidChartTitle2Record(new SolidChartTitle2Record.RecordClass({
solidChartTitleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SolidChartTitle2Record.IsAnonymousRecord = true;
SolidChartTitle2Record.UniqueId = "94f2ed30-1c60-d1f2-c8c1-cd7748a72f5f";
SolidChartTitle2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
SolidChartTitle2Record.init();
return SolidChartTitle2Record;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.SolidChartTitle2Record = SolidChartTitle2Record;

});
define("BALANCE_MBLOCKS.model$SolidChartTitle2RecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$SolidChartTitle2Record"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidChartTitle2RecordList = (function (_super) {
__extends(SolidChartTitle2RecordList, _super);
function SolidChartTitle2RecordList(defaults) {
_super.apply(this, arguments);
}
SolidChartTitle2RecordList.RecordType = BALANCE_MBLOCKSModel.SolidChartTitle2Record;
return SolidChartTitle2RecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.SolidChartTitle2RecordList = SolidChartTitle2RecordList;

});
define("BALANCE_MBLOCKS.model$Local_PAGEList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_PAGEList = (function (_super) {
__extends(Local_PAGEList, _super);
function Local_PAGEList(defaults) {
_super.apply(this, arguments);
}
Local_PAGEList.RecordType = BALANCE_MBPModel.Local_PAGERec;
return Local_PAGEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_PAGEList = Local_PAGEList;

});
define("BALANCE_MBLOCKS.model$ICON_CLASSList", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$ICON_CLASSRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASSList = (function (_super) {
__extends(ICON_CLASSList, _super);
function ICON_CLASSList(defaults) {
_super.apply(this, arguments);
}
ICON_CLASSList.RecordType = MobileUIWidgetsModel.ICON_CLASSRec;
return ICON_CLASSList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.ICON_CLASSList = ICON_CLASSList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPERecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_TAG_DATATYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_DATATYPERecord = (function (_super) {
__extends(Local_BALANCE_TAG_DATATYPERecord, _super);
function Local_BALANCE_TAG_DATATYPERecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_DATATYPERecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_TAG_DATATYPE", "local_BALANCE_TAG_DATATYPEAttr", "Local_BALANCE_TAG_DATATYPE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_TAG_DATATYPERec());
}, BALANCE_MBPModel.Local_BALANCE_TAG_DATATYPERec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_TAG_DATATYPERecord.fromStructure = function (str) {
return new Local_BALANCE_TAG_DATATYPERecord(new Local_BALANCE_TAG_DATATYPERecord.RecordClass({
local_BALANCE_TAG_DATATYPEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_BALANCE_TAG_DATATYPERecord.IsAnonymousRecord = true;
Local_BALANCE_TAG_DATATYPERecord.UniqueId = "3dbeb231-6e15-060a-1d68-645a27067b64";
Local_BALANCE_TAG_DATATYPERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_TAG_DATATYPERecord.init();
return Local_BALANCE_TAG_DATATYPERecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPERecord = Local_BALANCE_TAG_DATATYPERecord;

});
define("BALANCE_MBLOCKS.model$Local_PAGERecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_PAGERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_PAGERecord = (function (_super) {
__extends(Local_PAGERecord, _super);
function Local_PAGERecord(defaults) {
_super.apply(this, arguments);
}
Local_PAGERecord.attributesToDeclare = function () {
return [
this.attr("Local_PAGE", "local_PAGEAttr", "Local_PAGE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_PAGERec());
}, BALANCE_MBPModel.Local_PAGERec)
].concat(_super.attributesToDeclare.call(this));
};
Local_PAGERecord.fromStructure = function (str) {
return new Local_PAGERecord(new Local_PAGERecord.RecordClass({
local_PAGEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_PAGERecord.IsAnonymousRecord = true;
Local_PAGERecord.UniqueId = "f2061853-1b31-30f4-7b5b-ab5ed41267d7";
Local_PAGERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_PAGERecord.init();
return Local_PAGERecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_PAGERecord = Local_PAGERecord;

});
define("BALANCE_MBLOCKS.model$Local_PAGERecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_PAGERecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_PAGERecordList = (function (_super) {
__extends(Local_PAGERecordList, _super);
function Local_PAGERecordList(defaults) {
_super.apply(this, arguments);
}
Local_PAGERecordList.RecordType = BALANCE_MBLOCKSModel.Local_PAGERecord;
return Local_PAGERecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_PAGERecordList = Local_PAGERecordList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Tag_CodesRec = (function (_super) {
__extends(STR_Balance_Tag_CodesRec, _super);
function STR_Balance_Tag_CodesRec(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Tag_CodesRec.attributesToDeclare = function () {
return [
this.attr("AvailableBalanceTag", "availableBalanceTagAttr", "AvailableBalanceTag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableBalanceUnitTag", "availableBalanceUnitTagAttr", "AvailableBalanceUnitTag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SpentBalanceTag", "spentBalanceTagAttr", "SpentBalanceTag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PlafondBalanceTag", "plafondBalanceTagAttr", "PlafondBalanceTag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceDataTypeSeparator", "balanceDataTypeSeparatorAttr", "BalanceDataTypeSeparator", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PackageNumberBalanceTag", "packageNumberBalanceTagAttr", "PackageNumberBalanceTag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalBalanceUnitTag", "totalBalanceUnitTagAttr", "TotalBalanceUnitTag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SpentBalanceUnitTag", "spentBalanceUnitTagAttr", "SpentBalanceUnitTag", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_Balance_Tag_CodesRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_Balance_Tag_CodesRec.init();
return STR_Balance_Tag_CodesRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec = STR_Balance_Tag_CodesRec;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_CONFIGRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_CONFIGRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_CONFIGRecordList = (function (_super) {
__extends(Local_BALANCE_CONFIGRecordList, _super);
function Local_BALANCE_CONFIGRecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_CONFIGRecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_CONFIGRecord;
return Local_BALANCE_CONFIGRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_CONFIGRecordList = Local_BALANCE_CONFIGRecordList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Card_TypeList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Card_TypeRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Card_TypeList = (function (_super) {
__extends(STR_Balance_Card_TypeList, _super);
function STR_Balance_Card_TypeList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Card_TypeList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_Card_TypeRec;
return STR_Balance_Card_TypeList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_Card_TypeList = STR_Balance_Card_TypeList;

});
define("BALANCE_MBLOCKS.model$DataPointList", ["exports", "OutSystems", "ChartsMobile.model", "BALANCE_MBLOCKS.model", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var DataPointList = (function (_super) {
__extends(DataPointList, _super);
function DataPointList(defaults) {
_super.apply(this, arguments);
}
DataPointList.RecordType = ChartsMobileModel.DataPointRec;
return DataPointList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.DataPointList = DataPointList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructV2List", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructV2Rec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructV2List = (function (_super) {
__extends(STR_BalanceOrchestrationStructV2List, _super);
function STR_BalanceOrchestrationStructV2List(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructV2List.RecordType = BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2Rec;
return STR_BalanceOrchestrationStructV2List;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructV2List = STR_BalanceOrchestrationStructV2List;

});
define("BALANCE_MBLOCKS.model$PAYMENT_PROCESSRecord", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_MBLOCKS.model", "BALANCE_BP.model$PAYMENT_PROCESSRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_BP"], function (exports, OutSystems, BALANCE_BPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var PAYMENT_PROCESSRecord = (function (_super) {
__extends(PAYMENT_PROCESSRecord, _super);
function PAYMENT_PROCESSRecord(defaults) {
_super.apply(this, arguments);
}
PAYMENT_PROCESSRecord.attributesToDeclare = function () {
return [
this.attr("PAYMENT_PROCESS", "pAYMENT_PROCESSAttr", "PAYMENT_PROCESS", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.PAYMENT_PROCESSRec());
}, BALANCE_BPModel.PAYMENT_PROCESSRec)
].concat(_super.attributesToDeclare.call(this));
};
PAYMENT_PROCESSRecord.fromStructure = function (str) {
return new PAYMENT_PROCESSRecord(new PAYMENT_PROCESSRecord.RecordClass({
pAYMENT_PROCESSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PAYMENT_PROCESSRecord.IsAnonymousRecord = true;
PAYMENT_PROCESSRecord.UniqueId = "54a81275-db01-2b8d-96c9-cab381f7e7a9";
PAYMENT_PROCESSRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PAYMENT_PROCESSRecord.init();
return PAYMENT_PROCESSRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.PAYMENT_PROCESSRecord = PAYMENT_PROCESSRecord;

});
define("BALANCE_MBLOCKS.model$STR_BALANCE_INFOList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$STR_BALANCE_INFORec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_INFOList = (function (_super) {
__extends(STR_BALANCE_INFOList, _super);
function STR_BALANCE_INFOList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_INFOList.RecordType = BALANCE_MBPModel.STR_BALANCE_INFORec;
return STR_BALANCE_INFOList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BALANCE_INFOList = STR_BALANCE_INFOList;

});
define("BALANCE_MBLOCKS.model$PAYMENT_TYPERecord", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_MBLOCKS.model", "BALANCE_BP.model$PAYMENT_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_BP"], function (exports, OutSystems, BALANCE_BPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var PAYMENT_TYPERecord = (function (_super) {
__extends(PAYMENT_TYPERecord, _super);
function PAYMENT_TYPERecord(defaults) {
_super.apply(this, arguments);
}
PAYMENT_TYPERecord.attributesToDeclare = function () {
return [
this.attr("PAYMENT_TYPE", "pAYMENT_TYPEAttr", "PAYMENT_TYPE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.PAYMENT_TYPERec());
}, BALANCE_BPModel.PAYMENT_TYPERec)
].concat(_super.attributesToDeclare.call(this));
};
PAYMENT_TYPERecord.fromStructure = function (str) {
return new PAYMENT_TYPERecord(new PAYMENT_TYPERecord.RecordClass({
pAYMENT_TYPEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PAYMENT_TYPERecord.IsAnonymousRecord = true;
PAYMENT_TYPERecord.UniqueId = "f4690dea-847d-c15b-dcfa-f456141dee83";
PAYMENT_TYPERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PAYMENT_TYPERecord.init();
return PAYMENT_TYPERecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.PAYMENT_TYPERecord = PAYMENT_TYPERecord;

});
define("BALANCE_MBLOCKS.model$PAYMENT_TYPERecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$PAYMENT_TYPERecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var PAYMENT_TYPERecordList = (function (_super) {
__extends(PAYMENT_TYPERecordList, _super);
function PAYMENT_TYPERecordList(defaults) {
_super.apply(this, arguments);
}
PAYMENT_TYPERecordList.RecordType = BALANCE_MBLOCKSModel.PAYMENT_TYPERecord;
return PAYMENT_TYPERecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.PAYMENT_TYPERecordList = PAYMENT_TYPERecordList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Attributes_CodesRec = (function (_super) {
__extends(STR_Balance_Attributes_CodesRec, _super);
function STR_Balance_Attributes_CodesRec(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Attributes_CodesRec.attributesToDeclare = function () {
return [
this.attr("TitleCode", "titleCodeAttr", "TitleCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DescriptionCode", "descriptionCodeAttr", "DescriptionCode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_Balance_Attributes_CodesRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_Balance_Attributes_CodesRec.init();
return STR_Balance_Attributes_CodesRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec = STR_Balance_Attributes_CodesRec;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Attributes_CodesRecord = (function (_super) {
__extends(STR_Balance_Attributes_CodesRecord, _super);
function STR_Balance_Attributes_CodesRecord(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Attributes_CodesRecord.attributesToDeclare = function () {
return [
this.attr("STR_Balance_Attributes_Codes", "sTR_Balance_Attributes_CodesAttr", "STR_Balance_Attributes_Codes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_Balance_Attributes_CodesRecord.fromStructure = function (str) {
return new STR_Balance_Attributes_CodesRecord(new STR_Balance_Attributes_CodesRecord.RecordClass({
sTR_Balance_Attributes_CodesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_Balance_Attributes_CodesRecord.IsAnonymousRecord = true;
STR_Balance_Attributes_CodesRecord.UniqueId = "cff9b94e-6341-23cc-5304-41b4bca565b4";
STR_Balance_Attributes_CodesRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_Balance_Attributes_CodesRecord.init();
return STR_Balance_Attributes_CodesRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRecord = STR_Balance_Attributes_CodesRecord;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Attributes_CodesRecordList = (function (_super) {
__extends(STR_Balance_Attributes_CodesRecordList, _super);
function STR_Balance_Attributes_CodesRecordList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Attributes_CodesRecordList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRecord;
return STR_Balance_Attributes_CodesRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRecordList = STR_Balance_Attributes_CodesRecordList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_LINESRecord = (function (_super) {
__extends(Local_BALANCE_LINESRecord, _super);
function Local_BALANCE_LINESRecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_LINESRecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_LINES", "local_BALANCE_LINESAttr", "Local_BALANCE_LINES", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_LINESRec());
}, BALANCE_MBPModel.Local_BALANCE_LINESRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_LINESRecord.fromStructure = function (str) {
return new Local_BALANCE_LINESRecord(new Local_BALANCE_LINESRecord.RecordClass({
local_BALANCE_LINESAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_BALANCE_LINESRecord.IsAnonymousRecord = true;
Local_BALANCE_LINESRecord.UniqueId = "cddd8bf9-c5da-c911-c23b-a902c605e7df";
Local_BALANCE_LINESRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_LINESRecord.init();
return Local_BALANCE_LINESRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_LINESRecord = Local_BALANCE_LINESRecord;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_LINESRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_LINESRecordList = (function (_super) {
__extends(Local_BALANCE_LINESRecordList, _super);
function Local_BALANCE_LINESRecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_LINESRecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_LINESRecord;
return Local_BALANCE_LINESRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_LINESRecordList = Local_BALANCE_LINESRecordList;

});
define("BALANCE_MBLOCKS.model$DataPointRecord", ["exports", "OutSystems", "ChartsMobile.model", "BALANCE_MBLOCKS.model", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile"], function (exports, OutSystems, ChartsMobileModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var DataPointRecord = (function (_super) {
__extends(DataPointRecord, _super);
function DataPointRecord(defaults) {
_super.apply(this, arguments);
}
DataPointRecord.attributesToDeclare = function () {
return [
this.attr("DataPoint", "dataPointAttr", "DataPoint", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataPointRec());
}, ChartsMobileModel.DataPointRec)
].concat(_super.attributesToDeclare.call(this));
};
DataPointRecord.fromStructure = function (str) {
return new DataPointRecord(new DataPointRecord.RecordClass({
dataPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataPointRecord.IsAnonymousRecord = true;
DataPointRecord.UniqueId = "6ceb0a54-ddbc-9244-6ab6-6e8c847870c1";
DataPointRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataPointRecord.init();
return DataPointRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.DataPointRecord = DataPointRecord;

});
define("BALANCE_MBLOCKS.model$ValidatePersonInfo_OutputList", ["exports", "OutSystems", "CON_GLOBE.model", "BALANCE_MBLOCKS.model", "CON_GLOBE.model$ValidatePersonInfo_OutputRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$CON_GLOBE"], function (exports, OutSystems, CON_GLOBEModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ValidatePersonInfo_OutputList = (function (_super) {
__extends(ValidatePersonInfo_OutputList, _super);
function ValidatePersonInfo_OutputList(defaults) {
_super.apply(this, arguments);
}
ValidatePersonInfo_OutputList.RecordType = CON_GLOBEModel.ValidatePersonInfo_OutputRec;
return ValidatePersonInfo_OutputList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.ValidatePersonInfo_OutputList = ValidatePersonInfo_OutputList;

});
define("BALANCE_MBLOCKS.model$DataPointRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$DataPointRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var DataPointRecordList = (function (_super) {
__extends(DataPointRecordList, _super);
function DataPointRecordList(defaults) {
_super.apply(this, arguments);
}
DataPointRecordList.RecordType = BALANCE_MBLOCKSModel.DataPointRecord;
return DataPointRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.DataPointRecordList = DataPointRecordList;

});
define("BALANCE_MBLOCKS.model$Ticks2List", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$TicksRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Ticks2List = (function (_super) {
__extends(Ticks2List, _super);
function Ticks2List(defaults) {
_super.apply(this, arguments);
}
Ticks2List.RecordType = MobileUIWidgetsModel.TicksRec;
return Ticks2List;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Ticks2List = Ticks2List;

});
define("BALANCE_MBLOCKS.model$Ticks2Record", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$TicksRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Ticks2Record = (function (_super) {
__extends(Ticks2Record, _super);
function Ticks2Record(defaults) {
_super.apply(this, arguments);
}
Ticks2Record.attributesToDeclare = function () {
return [
this.attr("Ticks2", "ticksAttr", "Ticks2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.TicksRec());
}, MobileUIWidgetsModel.TicksRec)
].concat(_super.attributesToDeclare.call(this));
};
Ticks2Record.fromStructure = function (str) {
return new Ticks2Record(new Ticks2Record.RecordClass({
ticksAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Ticks2Record.IsAnonymousRecord = true;
Ticks2Record.UniqueId = "80c44581-05d0-eed8-ca53-c1964b732776";
Ticks2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Ticks2Record.init();
return Ticks2Record;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Ticks2Record = Ticks2Record;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Attributes_CodesRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Attributes_CodesList = (function (_super) {
__extends(STR_Balance_Attributes_CodesList, _super);
function STR_Balance_Attributes_CodesList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Attributes_CodesList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesRec;
return STR_Balance_Attributes_CodesList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_Attributes_CodesList = STR_Balance_Attributes_CodesList;

});
define("BALANCE_MBLOCKS.model$TopUpPresetValueRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var TopUpPresetValueRec = (function (_super) {
__extends(TopUpPresetValueRec, _super);
function TopUpPresetValueRec(defaults) {
_super.apply(this, arguments);
}
TopUpPresetValueRec.attributesToDeclare = function () {
return [
this.attr("PresetId", "presetIdAttr", "PresetId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Amount", "amountAttr", "Amount", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsDefault", "isDefaultAttr", "IsDefault", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
TopUpPresetValueRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
TopUpPresetValueRec.init();
return TopUpPresetValueRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.TopUpPresetValueRec = TopUpPresetValueRec;

});
define("BALANCE_MBLOCKS.model$STR_BalanceSimulatorList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceSimulatorRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceSimulatorList = (function (_super) {
__extends(STR_BalanceSimulatorList, _super);
function STR_BalanceSimulatorList(defaults) {
_super.apply(this, arguments);
}
STR_BalanceSimulatorList.RecordType = BALANCE_MBLOCKSModel.STR_BalanceSimulatorRec;
return STR_BalanceSimulatorList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceSimulatorList = STR_BalanceSimulatorList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceCashStructRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceCashStructRec = (function (_super) {
__extends(STR_BalanceCashStructRec, _super);
function STR_BalanceCashStructRec(defaults) {
_super.apply(this, arguments);
}
STR_BalanceCashStructRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
STR_BalanceCashStructRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BalanceCashStructRec.init();
return STR_BalanceCashStructRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceCashStructRec = STR_BalanceCashStructRec;

});
define("BALANCE_MBLOCKS.model$STR_BalanceCashStructRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceCashStructRecord = (function (_super) {
__extends(STR_BalanceCashStructRecord, _super);
function STR_BalanceCashStructRecord(defaults) {
_super.apply(this, arguments);
}
STR_BalanceCashStructRecord.attributesToDeclare = function () {
return [
this.attr("STR_BalanceCashStruct", "sTR_BalanceCashStructAttr", "STR_BalanceCashStruct", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceCashStructRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_BalanceCashStructRecord.fromStructure = function (str) {
return new STR_BalanceCashStructRecord(new STR_BalanceCashStructRecord.RecordClass({
sTR_BalanceCashStructAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_BalanceCashStructRecord.IsAnonymousRecord = true;
STR_BalanceCashStructRecord.UniqueId = "8c0dc6f2-f4c5-a326-1f44-009208b5e5ea";
STR_BalanceCashStructRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_BalanceCashStructRecord.init();
return STR_BalanceCashStructRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceCashStructRecord = STR_BalanceCashStructRecord;

});
define("BALANCE_MBLOCKS.model$Local_PIPE_INFORMATIONRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_PIPE_INFORMATIONRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_PIPE_INFORMATIONRecord = (function (_super) {
__extends(Local_PIPE_INFORMATIONRecord, _super);
function Local_PIPE_INFORMATIONRecord(defaults) {
_super.apply(this, arguments);
}
Local_PIPE_INFORMATIONRecord.attributesToDeclare = function () {
return [
this.attr("Local_PIPE_INFORMATION", "local_PIPE_INFORMATIONAttr", "Local_PIPE_INFORMATION", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_PIPE_INFORMATIONRec());
}, BALANCE_MBPModel.Local_PIPE_INFORMATIONRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_PIPE_INFORMATIONRecord.fromStructure = function (str) {
return new Local_PIPE_INFORMATIONRecord(new Local_PIPE_INFORMATIONRecord.RecordClass({
local_PIPE_INFORMATIONAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_PIPE_INFORMATIONRecord.IsAnonymousRecord = true;
Local_PIPE_INFORMATIONRecord.UniqueId = "968aa8f8-4c8c-1038-06d5-5221daf0a273";
Local_PIPE_INFORMATIONRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_PIPE_INFORMATIONRecord.init();
return Local_PIPE_INFORMATIONRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_PIPE_INFORMATIONRecord = Local_PIPE_INFORMATIONRecord;

});
define("BALANCE_MBLOCKS.model$Local_PIPE_INFORMATIONRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_PIPE_INFORMATIONRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_PIPE_INFORMATIONRecordList = (function (_super) {
__extends(Local_PIPE_INFORMATIONRecordList, _super);
function Local_PIPE_INFORMATIONRecordList(defaults) {
_super.apply(this, arguments);
}
Local_PIPE_INFORMATIONRecordList.RecordType = BALANCE_MBLOCKSModel.Local_PIPE_INFORMATIONRecord;
return Local_PIPE_INFORMATIONRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_PIPE_INFORMATIONRecordList = Local_PIPE_INFORMATIONRecordList;

});
define("BALANCE_MBLOCKS.model$PAYMENT_PROCESSRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$PAYMENT_PROCESSRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var PAYMENT_PROCESSRecordList = (function (_super) {
__extends(PAYMENT_PROCESSRecordList, _super);
function PAYMENT_PROCESSRecordList(defaults) {
_super.apply(this, arguments);
}
PAYMENT_PROCESSRecordList.RecordType = BALANCE_MBLOCKSModel.PAYMENT_PROCESSRecord;
return PAYMENT_PROCESSRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.PAYMENT_PROCESSRecordList = PAYMENT_PROCESSRecordList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Tag_CodesRecord = (function (_super) {
__extends(STR_Balance_Tag_CodesRecord, _super);
function STR_Balance_Tag_CodesRecord(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Tag_CodesRecord.attributesToDeclare = function () {
return [
this.attr("STR_Balance_Tag_Codes", "sTR_Balance_Tag_CodesAttr", "STR_Balance_Tag_Codes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec());
}, BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_Balance_Tag_CodesRecord.fromStructure = function (str) {
return new STR_Balance_Tag_CodesRecord(new STR_Balance_Tag_CodesRecord.RecordClass({
sTR_Balance_Tag_CodesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_Balance_Tag_CodesRecord.IsAnonymousRecord = true;
STR_Balance_Tag_CodesRecord.UniqueId = "fd66b42e-8e31-0dd5-488e-189695268f2d";
STR_Balance_Tag_CodesRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_Balance_Tag_CodesRecord.init();
return STR_Balance_Tag_CodesRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRecord = STR_Balance_Tag_CodesRecord;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Tag_CodesRecordList = (function (_super) {
__extends(STR_Balance_Tag_CodesRecordList, _super);
function STR_Balance_Tag_CodesRecordList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Tag_CodesRecordList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRecord;
return STR_Balance_Tag_CodesRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRecordList = STR_Balance_Tag_CodesRecordList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceCashStructRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceCashStructRecordList = (function (_super) {
__extends(STR_BalanceCashStructRecordList, _super);
function STR_BalanceCashStructRecordList(defaults) {
_super.apply(this, arguments);
}
STR_BalanceCashStructRecordList.RecordType = BALANCE_MBLOCKSModel.STR_BalanceCashStructRecord;
return STR_BalanceCashStructRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceCashStructRecordList = STR_BalanceCashStructRecordList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceCashStructList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceCashStructList = (function (_super) {
__extends(STR_BalanceCashStructList, _super);
function STR_BalanceCashStructList(defaults) {
_super.apply(this, arguments);
}
STR_BalanceCashStructList.RecordType = BALANCE_MBLOCKSModel.STR_BalanceCashStructRec;
return STR_BalanceCashStructList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceCashStructList = STR_BalanceCashStructList;

});
define("BALANCE_MBLOCKS.model$PAYMENT_PROCESSList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_MBLOCKS.model", "BALANCE_BP.model$PAYMENT_PROCESSRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_BP"], function (exports, OutSystems, BALANCE_BPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var PAYMENT_PROCESSList = (function (_super) {
__extends(PAYMENT_PROCESSList, _super);
function PAYMENT_PROCESSList(defaults) {
_super.apply(this, arguments);
}
PAYMENT_PROCESSList.RecordType = BALANCE_BPModel.PAYMENT_PROCESSRec;
return PAYMENT_PROCESSList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.PAYMENT_PROCESSList = PAYMENT_PROCESSList;

});
define("BALANCE_MBLOCKS.model$STR_WalletCardsList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_MBLOCKS.model", "BALANCE_BP.model$STR_WalletCardsRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_BP"], function (exports, OutSystems, BALANCE_BPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_WalletCardsList = (function (_super) {
__extends(STR_WalletCardsList, _super);
function STR_WalletCardsList(defaults) {
_super.apply(this, arguments);
}
STR_WalletCardsList.RecordType = BALANCE_BPModel.STR_WalletCardsRec;
return STR_WalletCardsList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_WalletCardsList = STR_WalletCardsList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPERecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPERecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_DATATYPERecordList = (function (_super) {
__extends(Local_BALANCE_TAG_DATATYPERecordList, _super);
function Local_BALANCE_TAG_DATATYPERecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_DATATYPERecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPERecord;
return Local_BALANCE_TAG_DATATYPERecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPERecordList = Local_BALANCE_TAG_DATATYPERecordList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", ["exports", "OutSystems", "BALANCE_MBLOCKS.model"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructRec = (function (_super) {
__extends(STR_BalanceOrchestrationStructRec, _super);
function STR_BalanceOrchestrationStructRec(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AvailableAmount", "availableAmountAttr", "AvailableAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AvailableAmountUnit", "availableAmountUnitAttr", "AvailableAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ConsumedAmount", "consumedAmountAttr", "ConsumedAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("ConsumedAmountUnit", "consumedAmountUnitAttr", "ConsumedAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TotalAmount", "totalAmountAttr", "TotalAmount", false, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("TotalAmountUnit", "totalAmountUnitAttr", "TotalAmountUnit", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ShowBalanceUnit", "showBalanceUnitAttr", "ShowBalanceUnit", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("PackageNumber", "packageNumberAttr", "PackageNumber", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsLimited", "isLimitedAttr", "IsLimited", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsUnlimited", "isUnlimitedAttr", "IsUnlimited", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("GraphTypeID", "graphTypeIDAttr", "GraphTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CardTypeID", "cardTypeIDAttr", "CardTypeID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
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
STR_BalanceOrchestrationStructRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_BalanceOrchestrationStructRec.init();
return STR_BalanceOrchestrationStructRec;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec = STR_BalanceOrchestrationStructRec;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_TAG_DATATYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.model$Local_PIPE_INFORMATIONRec"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord = (function (_super) {
__extends(Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord, _super);
function Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_TAG_DATATYPE", "local_BALANCE_TAG_DATATYPEAttr", "Local_BALANCE_TAG_DATATYPE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_TAG_DATATYPERec());
}, BALANCE_MBPModel.Local_BALANCE_TAG_DATATYPERec), 
this.attr("Local_PIPE_INFORMATION", "local_PIPE_INFORMATIONAttr", "Local_PIPE_INFORMATION", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_PIPE_INFORMATIONRec());
}, BALANCE_MBPModel.Local_PIPE_INFORMATIONRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord.IsAnonymousRecord = true;
Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord.UniqueId = "a1822e01-1082-9137-10ad-24e733ed723f";
Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord.init();
return Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord = Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList = (function (_super) {
__extends(Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList, _super);
function Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecord;
return Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList = Local_BALANCE_TAG_DATATYPELocal_PIPE_INFORMATIONRecordList;

});
define("BALANCE_MBLOCKS.model$LabelsList", ["exports", "OutSystems", "GaugeChartsMobile.model", "BALANCE_MBLOCKS.model", "GaugeChartsMobile.model$LabelsRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$GaugeChartsMobile"], function (exports, OutSystems, GaugeChartsMobileModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var LabelsList = (function (_super) {
__extends(LabelsList, _super);
function LabelsList(defaults) {
_super.apply(this, arguments);
}
LabelsList.RecordType = GaugeChartsMobileModel.LabelsRec;
return LabelsList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.LabelsList = LabelsList;

});
define("BALANCE_MBLOCKS.model$Local_SYNC_BALANCE_CONFIGRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_SYNC_BALANCE_CONFIGRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_SYNC_BALANCE_CONFIGRecord = (function (_super) {
__extends(Local_SYNC_BALANCE_CONFIGRecord, _super);
function Local_SYNC_BALANCE_CONFIGRecord(defaults) {
_super.apply(this, arguments);
}
Local_SYNC_BALANCE_CONFIGRecord.attributesToDeclare = function () {
return [
this.attr("Local_SYNC_BALANCE_CONFIG", "local_SYNC_BALANCE_CONFIGAttr", "Local_SYNC_BALANCE_CONFIG", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_SYNC_BALANCE_CONFIGRec());
}, BALANCE_MBPModel.Local_SYNC_BALANCE_CONFIGRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_SYNC_BALANCE_CONFIGRecord.fromStructure = function (str) {
return new Local_SYNC_BALANCE_CONFIGRecord(new Local_SYNC_BALANCE_CONFIGRecord.RecordClass({
local_SYNC_BALANCE_CONFIGAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_SYNC_BALANCE_CONFIGRecord.IsAnonymousRecord = true;
Local_SYNC_BALANCE_CONFIGRecord.UniqueId = "ab7431bd-044b-2316-13a4-8b06ba1a3270";
Local_SYNC_BALANCE_CONFIGRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_SYNC_BALANCE_CONFIGRecord.init();
return Local_SYNC_BALANCE_CONFIGRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_SYNC_BALANCE_CONFIGRecord = Local_SYNC_BALANCE_CONFIGRecord;

});
define("BALANCE_MBLOCKS.model$LabelsRecord", ["exports", "OutSystems", "GaugeChartsMobile.model", "BALANCE_MBLOCKS.model", "GaugeChartsMobile.model$LabelsRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$GaugeChartsMobile"], function (exports, OutSystems, GaugeChartsMobileModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var LabelsRecord = (function (_super) {
__extends(LabelsRecord, _super);
function LabelsRecord(defaults) {
_super.apply(this, arguments);
}
LabelsRecord.attributesToDeclare = function () {
return [
this.attr("Labels", "labelsAttr", "Labels", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GaugeChartsMobileModel.LabelsRec());
}, GaugeChartsMobileModel.LabelsRec)
].concat(_super.attributesToDeclare.call(this));
};
LabelsRecord.fromStructure = function (str) {
return new LabelsRecord(new LabelsRecord.RecordClass({
labelsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LabelsRecord.IsAnonymousRecord = true;
LabelsRecord.UniqueId = "bbabb94a-e69a-ddae-c427-76266f09d83d";
LabelsRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
LabelsRecord.init();
return LabelsRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.LabelsRecord = LabelsRecord;

});
define("BALANCE_MBLOCKS.model$LabelsRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$LabelsRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var LabelsRecordList = (function (_super) {
__extends(LabelsRecordList, _super);
function LabelsRecordList(defaults) {
_super.apply(this, arguments);
}
LabelsRecordList.RecordType = BALANCE_MBLOCKSModel.LabelsRecord;
return LabelsRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.LabelsRecordList = LabelsRecordList;

});
define("BALANCE_MBLOCKS.model$Local_PIPE_INFORMATIONList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_PIPE_INFORMATIONRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_PIPE_INFORMATIONList = (function (_super) {
__extends(Local_PIPE_INFORMATIONList, _super);
function Local_PIPE_INFORMATIONList(defaults) {
_super.apply(this, arguments);
}
Local_PIPE_INFORMATIONList.RecordType = BALANCE_MBPModel.Local_PIPE_INFORMATIONRec;
return Local_PIPE_INFORMATIONList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_PIPE_INFORMATIONList = Local_PIPE_INFORMATIONList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_CODESRecord = (function (_super) {
__extends(Local_BALANCE_TAG_CODESRecord, _super);
function Local_BALANCE_TAG_CODESRecord(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_CODESRecord.attributesToDeclare = function () {
return [
this.attr("Local_BALANCE_TAG_CODES", "local_BALANCE_TAG_CODESAttr", "Local_BALANCE_TAG_CODES", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_BALANCE_TAG_CODESRec());
}, BALANCE_MBPModel.Local_BALANCE_TAG_CODESRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_BALANCE_TAG_CODESRecord.fromStructure = function (str) {
return new Local_BALANCE_TAG_CODESRecord(new Local_BALANCE_TAG_CODESRecord.RecordClass({
local_BALANCE_TAG_CODESAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_BALANCE_TAG_CODESRecord.IsAnonymousRecord = true;
Local_BALANCE_TAG_CODESRecord.UniqueId = "b0beccec-c2bd-7008-83cf-6f970408385f";
Local_BALANCE_TAG_CODESRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_BALANCE_TAG_CODESRecord.init();
return Local_BALANCE_TAG_CODESRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESRecord = Local_BALANCE_TAG_CODESRecord;

});
define("BALANCE_MBLOCKS.model$TopUpPresetValueRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$TopUpPresetValueRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var TopUpPresetValueRecord = (function (_super) {
__extends(TopUpPresetValueRecord, _super);
function TopUpPresetValueRecord(defaults) {
_super.apply(this, arguments);
}
TopUpPresetValueRecord.attributesToDeclare = function () {
return [
this.attr("TopUpPresetValue", "topUpPresetValueAttr", "TopUpPresetValue", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.TopUpPresetValueRec());
}, BALANCE_MBLOCKSModel.TopUpPresetValueRec)
].concat(_super.attributesToDeclare.call(this));
};
TopUpPresetValueRecord.fromStructure = function (str) {
return new TopUpPresetValueRecord(new TopUpPresetValueRecord.RecordClass({
topUpPresetValueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TopUpPresetValueRecord.IsAnonymousRecord = true;
TopUpPresetValueRecord.UniqueId = "b2c9d5af-1ff1-9224-bcfd-e42a4bdd4893";
TopUpPresetValueRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
TopUpPresetValueRecord.init();
return TopUpPresetValueRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.TopUpPresetValueRecord = TopUpPresetValueRecord;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructRecord = (function (_super) {
__extends(STR_BalanceOrchestrationStructRecord, _super);
function STR_BalanceOrchestrationStructRecord(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructRecord.attributesToDeclare = function () {
return [
this.attr("STR_BalanceOrchestrationStruct", "sTR_BalanceOrchestrationStructAttr", "STR_BalanceOrchestrationStruct", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_BalanceOrchestrationStructRecord.fromStructure = function (str) {
return new STR_BalanceOrchestrationStructRecord(new STR_BalanceOrchestrationStructRecord.RecordClass({
sTR_BalanceOrchestrationStructAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_BalanceOrchestrationStructRecord.IsAnonymousRecord = true;
STR_BalanceOrchestrationStructRecord.UniqueId = "b39e6c86-9661-16c8-16ef-9ab883b84594";
STR_BalanceOrchestrationStructRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_BalanceOrchestrationStructRecord.init();
return STR_BalanceOrchestrationStructRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRecord = STR_BalanceOrchestrationStructRecord;

});
define("BALANCE_MBLOCKS.model$TopUpPresetValueList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$TopUpPresetValueRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var TopUpPresetValueList = (function (_super) {
__extends(TopUpPresetValueList, _super);
function TopUpPresetValueList(defaults) {
_super.apply(this, arguments);
}
TopUpPresetValueList.RecordType = BALANCE_MBLOCKSModel.TopUpPresetValueRec;
return TopUpPresetValueList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.TopUpPresetValueList = TopUpPresetValueList;

});
define("BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecord", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_TOP_UP_SELECTIONRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_TOP_UP_SELECTIONRecord = (function (_super) {
__extends(Local_TOP_UP_SELECTIONRecord, _super);
function Local_TOP_UP_SELECTIONRecord(defaults) {
_super.apply(this, arguments);
}
Local_TOP_UP_SELECTIONRecord.attributesToDeclare = function () {
return [
this.attr("Local_TOP_UP_SELECTION", "local_TOP_UP_SELECTIONAttr", "Local_TOP_UP_SELECTION", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBPModel.Local_TOP_UP_SELECTIONRec());
}, BALANCE_MBPModel.Local_TOP_UP_SELECTIONRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_TOP_UP_SELECTIONRecord.fromStructure = function (str) {
return new Local_TOP_UP_SELECTIONRecord(new Local_TOP_UP_SELECTIONRecord.RecordClass({
local_TOP_UP_SELECTIONAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_TOP_UP_SELECTIONRecord.IsAnonymousRecord = true;
Local_TOP_UP_SELECTIONRecord.UniqueId = "ee1db1f5-93bd-1749-279e-a4f117af83bf";
Local_TOP_UP_SELECTIONRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_TOP_UP_SELECTIONRecord.init();
return Local_TOP_UP_SELECTIONRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecord = Local_TOP_UP_SELECTIONRecord;

});
define("BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_TOP_UP_SELECTIONRecordList = (function (_super) {
__extends(Local_TOP_UP_SELECTIONRecordList, _super);
function Local_TOP_UP_SELECTIONRecordList(defaults) {
_super.apply(this, arguments);
}
Local_TOP_UP_SELECTIONRecordList.RecordType = BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecord;
return Local_TOP_UP_SELECTIONRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONRecordList = Local_TOP_UP_SELECTIONRecordList;

});
define("BALANCE_MBLOCKS.model$STR_WalletCardsRecord", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_MBLOCKS.model", "BALANCE_BP.model$STR_WalletCardsRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_BP"], function (exports, OutSystems, BALANCE_BPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_WalletCardsRecord = (function (_super) {
__extends(STR_WalletCardsRecord, _super);
function STR_WalletCardsRecord(defaults) {
_super.apply(this, arguments);
}
STR_WalletCardsRecord.attributesToDeclare = function () {
return [
this.attr("STR_WalletCards", "sTR_WalletCardsAttr", "STR_WalletCards", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_BPModel.STR_WalletCardsRec());
}, BALANCE_BPModel.STR_WalletCardsRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_WalletCardsRecord.fromStructure = function (str) {
return new STR_WalletCardsRecord(new STR_WalletCardsRecord.RecordClass({
sTR_WalletCardsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_WalletCardsRecord.IsAnonymousRecord = true;
STR_WalletCardsRecord.UniqueId = "c1792437-c06a-da7d-409f-f430cd857572";
STR_WalletCardsRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_WalletCardsRecord.init();
return STR_WalletCardsRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_WalletCardsRecord = STR_WalletCardsRecord;

});
define("BALANCE_MBLOCKS.model$Local_TOP_UP_SELECTIONList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_TOP_UP_SELECTIONRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_TOP_UP_SELECTIONList = (function (_super) {
__extends(Local_TOP_UP_SELECTIONList, _super);
function Local_TOP_UP_SELECTIONList(defaults) {
_super.apply(this, arguments);
}
Local_TOP_UP_SELECTIONList.RecordType = BALANCE_MBPModel.Local_TOP_UP_SELECTIONRec;
return Local_TOP_UP_SELECTIONList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_TOP_UP_SELECTIONList = Local_TOP_UP_SELECTIONList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_CreditRecord", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_CreditRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_CreditRecord = (function (_super) {
__extends(STR_Balance_CreditRecord, _super);
function STR_Balance_CreditRecord(defaults) {
_super.apply(this, arguments);
}
STR_Balance_CreditRecord.attributesToDeclare = function () {
return [
this.attr("STR_Balance_Credit", "sTR_Balance_CreditAttr", "STR_Balance_Credit", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_Balance_CreditRec());
}, BALANCE_MBLOCKSModel.STR_Balance_CreditRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_Balance_CreditRecord.fromStructure = function (str) {
return new STR_Balance_CreditRecord(new STR_Balance_CreditRecord.RecordClass({
sTR_Balance_CreditAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_Balance_CreditRecord.IsAnonymousRecord = true;
STR_Balance_CreditRecord.UniqueId = "c63e6a60-3e6b-42c3-e235-0472cb9561a5";
STR_Balance_CreditRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_Balance_CreditRecord.init();
return STR_Balance_CreditRecord;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.STR_Balance_CreditRecord = STR_Balance_CreditRecord;

});
define("BALANCE_MBLOCKS.model$SolidGaugeEasyFormat2RecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$SolidGaugeEasyFormat2Record"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidGaugeEasyFormat2RecordList = (function (_super) {
__extends(SolidGaugeEasyFormat2RecordList, _super);
function SolidGaugeEasyFormat2RecordList(defaults) {
_super.apply(this, arguments);
}
SolidGaugeEasyFormat2RecordList.RecordType = BALANCE_MBLOCKSModel.SolidGaugeEasyFormat2Record;
return SolidGaugeEasyFormat2RecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.SolidGaugeEasyFormat2RecordList = SolidGaugeEasyFormat2RecordList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPEList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_GRAPH_TYPEList = (function (_super) {
__extends(Local_BALANCE_GRAPH_TYPEList, _super);
function Local_BALANCE_GRAPH_TYPEList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_GRAPH_TYPEList.RecordType = BALANCE_MBPModel.Local_BALANCE_GRAPH_TYPERec;
return Local_BALANCE_GRAPH_TYPEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPEList = Local_BALANCE_GRAPH_TYPEList;

});
define("BALANCE_MBLOCKS.model$STR_WalletCardsRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_WalletCardsRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_WalletCardsRecordList = (function (_super) {
__extends(STR_WalletCardsRecordList, _super);
function STR_WalletCardsRecordList(defaults) {
_super.apply(this, arguments);
}
STR_WalletCardsRecordList.RecordType = BALANCE_MBLOCKSModel.STR_WalletCardsRecord;
return STR_WalletCardsRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_WalletCardsRecordList = STR_WalletCardsRecordList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructList = (function (_super) {
__extends(STR_BalanceOrchestrationStructList, _super);
function STR_BalanceOrchestrationStructList(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructList.RecordType = BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec;
return STR_BalanceOrchestrationStructList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList = STR_BalanceOrchestrationStructList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_DATATYPEList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_TAG_DATATYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_DATATYPEList = (function (_super) {
__extends(Local_BALANCE_TAG_DATATYPEList, _super);
function Local_BALANCE_TAG_DATATYPEList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_DATATYPEList.RecordType = BALANCE_MBPModel.Local_BALANCE_TAG_DATATYPERec;
return Local_BALANCE_TAG_DATATYPEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_DATATYPEList = Local_BALANCE_TAG_DATATYPEList;

});
define("BALANCE_MBLOCKS.model$TopUpPresetValueRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$TopUpPresetValueRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var TopUpPresetValueRecordList = (function (_super) {
__extends(TopUpPresetValueRecordList, _super);
function TopUpPresetValueRecordList(defaults) {
_super.apply(this, arguments);
}
TopUpPresetValueRecordList.RecordType = BALANCE_MBLOCKSModel.TopUpPresetValueRecord;
return TopUpPresetValueRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.TopUpPresetValueRecordList = TopUpPresetValueRecordList;

});
define("BALANCE_MBLOCKS.model$Ticks2RecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Ticks2Record"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Ticks2RecordList = (function (_super) {
__extends(Ticks2RecordList, _super);
function Ticks2RecordList(defaults) {
_super.apply(this, arguments);
}
Ticks2RecordList.RecordType = BALANCE_MBLOCKSModel.Ticks2Record;
return Ticks2RecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Ticks2RecordList = Ticks2RecordList;

});
define("BALANCE_MBLOCKS.model$Local_SYNC_BALANCE_CONFIGRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_SYNC_BALANCE_CONFIGRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_SYNC_BALANCE_CONFIGRecordList = (function (_super) {
__extends(Local_SYNC_BALANCE_CONFIGRecordList, _super);
function Local_SYNC_BALANCE_CONFIGRecordList(defaults) {
_super.apply(this, arguments);
}
Local_SYNC_BALANCE_CONFIGRecordList.RecordType = BALANCE_MBLOCKSModel.Local_SYNC_BALANCE_CONFIGRecord;
return Local_SYNC_BALANCE_CONFIGRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_SYNC_BALANCE_CONFIGRecordList = Local_SYNC_BALANCE_CONFIGRecordList;

});
define("BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BalanceOrchestrationStructRecordList = (function (_super) {
__extends(STR_BalanceOrchestrationStructRecordList, _super);
function STR_BalanceOrchestrationStructRecordList(defaults) {
_super.apply(this, arguments);
}
STR_BalanceOrchestrationStructRecordList.RecordType = BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRecord;
return STR_BalanceOrchestrationStructRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRecordList = STR_BalanceOrchestrationStructRecordList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_Tag_CodesRec"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_Tag_CodesList = (function (_super) {
__extends(STR_Balance_Tag_CodesList, _super);
function STR_Balance_Tag_CodesList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_Tag_CodesList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesRec;
return STR_Balance_Tag_CodesList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_Tag_CodesList = STR_Balance_Tag_CodesList;

});
define("BALANCE_MBLOCKS.model$STR_BALANCE_INFORecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_BALANCE_INFORecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_BALANCE_INFORecordList = (function (_super) {
__extends(STR_BALANCE_INFORecordList, _super);
function STR_BALANCE_INFORecordList(defaults) {
_super.apply(this, arguments);
}
STR_BALANCE_INFORecordList.RecordType = BALANCE_MBLOCKSModel.STR_BALANCE_INFORecord;
return STR_BALANCE_INFORecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_BALANCE_INFORecordList = STR_BALANCE_INFORecordList;

});
define("BALANCE_MBLOCKS.model$SolidSubTitle2Record", ["exports", "OutSystems", "MobileUIWidgets.model", "BALANCE_MBLOCKS.model", "MobileUIWidgets.model$SolidSubTitleRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidSubTitle2Record = (function (_super) {
__extends(SolidSubTitle2Record, _super);
function SolidSubTitle2Record(defaults) {
_super.apply(this, arguments);
}
SolidSubTitle2Record.attributesToDeclare = function () {
return [
this.attr("SolidSubTitle2", "solidSubTitleAttr", "SolidSubTitle2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.SolidSubTitleRec());
}, MobileUIWidgetsModel.SolidSubTitleRec)
].concat(_super.attributesToDeclare.call(this));
};
SolidSubTitle2Record.fromStructure = function (str) {
return new SolidSubTitle2Record(new SolidSubTitle2Record.RecordClass({
solidSubTitleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SolidSubTitle2Record.IsAnonymousRecord = true;
SolidSubTitle2Record.UniqueId = "f649351c-6295-9b22-d478-a0385fd1053f";
SolidSubTitle2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
SolidSubTitle2Record.init();
return SolidSubTitle2Record;
})(OS.DataTypes.GenericRecord);
BALANCE_MBLOCKSModel.SolidSubTitle2Record = SolidSubTitle2Record;

});
define("BALANCE_MBLOCKS.model$SolidSubTitle2RecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$SolidSubTitle2Record"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SolidSubTitle2RecordList = (function (_super) {
__extends(SolidSubTitle2RecordList, _super);
function SolidSubTitle2RecordList(defaults) {
_super.apply(this, arguments);
}
SolidSubTitle2RecordList.RecordType = BALANCE_MBLOCKSModel.SolidSubTitle2Record;
return SolidSubTitle2RecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.SolidSubTitle2RecordList = SolidSubTitle2RecordList;

});
define("BALANCE_MBLOCKS.model$STR_Balance_CreditRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$STR_Balance_CreditRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var STR_Balance_CreditRecordList = (function (_super) {
__extends(STR_Balance_CreditRecordList, _super);
function STR_Balance_CreditRecordList(defaults) {
_super.apply(this, arguments);
}
STR_Balance_CreditRecordList.RecordType = BALANCE_MBLOCKSModel.STR_Balance_CreditRecord;
return STR_Balance_CreditRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.STR_Balance_CreditRecordList = STR_Balance_CreditRecordList;

});
define("BALANCE_MBLOCKS.model$PAYMENT_TYPEList", ["exports", "OutSystems", "BALANCE_BP.model", "BALANCE_MBLOCKS.model", "BALANCE_BP.model$PAYMENT_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_BP"], function (exports, OutSystems, BALANCE_BPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var PAYMENT_TYPEList = (function (_super) {
__extends(PAYMENT_TYPEList, _super);
function PAYMENT_TYPEList(defaults) {
_super.apply(this, arguments);
}
PAYMENT_TYPEList.RecordType = BALANCE_BPModel.PAYMENT_TYPERec;
return PAYMENT_TYPEList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.PAYMENT_TYPEList = PAYMENT_TYPEList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecordList", ["exports", "OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESRecord"], function (exports, OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_CODESRecordList = (function (_super) {
__extends(Local_BALANCE_TAG_CODESRecordList, _super);
function Local_BALANCE_TAG_CODESRecordList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_CODESRecordList.RecordType = BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESRecord;
return Local_BALANCE_TAG_CODESRecordList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESRecordList = Local_BALANCE_TAG_CODESRecordList;

});
define("BALANCE_MBLOCKS.model$Local_SYNC_BALANCE_CONFIGList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_SYNC_BALANCE_CONFIGRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_SYNC_BALANCE_CONFIGList = (function (_super) {
__extends(Local_SYNC_BALANCE_CONFIGList, _super);
function Local_SYNC_BALANCE_CONFIGList(defaults) {
_super.apply(this, arguments);
}
Local_SYNC_BALANCE_CONFIGList.RecordType = BALANCE_MBPModel.Local_SYNC_BALANCE_CONFIGRec;
return Local_SYNC_BALANCE_CONFIGList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_SYNC_BALANCE_CONFIGList = Local_SYNC_BALANCE_CONFIGList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_TAG_CODESList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_TAG_CODESRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_TAG_CODESList = (function (_super) {
__extends(Local_BALANCE_TAG_CODESList, _super);
function Local_BALANCE_TAG_CODESList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_TAG_CODESList.RecordType = BALANCE_MBPModel.Local_BALANCE_TAG_CODESRec;
return Local_BALANCE_TAG_CODESList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_TAG_CODESList = Local_BALANCE_TAG_CODESList;

});
define("BALANCE_MBLOCKS.model$Local_BALANCE_LINESList", ["exports", "OutSystems", "BALANCE_MBP.model", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model$Local_BALANCE_LINESRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (exports, OutSystems, BALANCE_MBPModel, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;
var Local_BALANCE_LINESList = (function (_super) {
__extends(Local_BALANCE_LINESList, _super);
function Local_BALANCE_LINESList(defaults) {
_super.apply(this, arguments);
}
Local_BALANCE_LINESList.RecordType = BALANCE_MBPModel.Local_BALANCE_LINESRec;
return Local_BALANCE_LINESList;
})(OS.DataTypes.GenericRecordList);
BALANCE_MBLOCKSModel.Local_BALANCE_LINESList = Local_BALANCE_LINESList;

});
define("BALANCE_MBLOCKS.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var BALANCE_MBLOCKSModel = exports;
Object.defineProperty(BALANCE_MBLOCKSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["1dfd4897-a72c-493d-9372-6c4cbed125b3"];
}
});

BALANCE_MBLOCKSModel.staticEntities = {};
BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE = {};
var getICON_SIZERecord = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["b60cb512-9fee-4638-ac38-ced6b6d81a86"][record];
};
Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE, "xSmall", {
get: function () {
return getICON_SIZERecord("22883d0d-95e6-4a32-8126-12f1839ac2d2");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE, "xLarge", {
get: function () {
return getICON_SIZERecord("3a1cde3c-a513-4514-b687-8ff0ada45a36");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE, "small", {
get: function () {
return getICON_SIZERecord("5f77c5ff-0d3d-4372-8b4e-614de51c3692");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE, "large", {
get: function () {
return getICON_SIZERecord("ca7f18e8-1f3b-4d8c-b3f5-40cc9898aaf4");
}
});

BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS = {};
var getICON_CLASSRecord = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["d68ff46d-b9b2-4c6c-bd04-e5036faf1127"][record];
};
Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEditar", {
get: function () {
return getICON_CLASSRecord("01b8d616-ff1d-4e29-b940-20ba8465e363");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMagnifyingGlass", {
get: function () {
return getICON_CLASSRecord("032ae929-7f5d-4489-8b0a-55af8b12c3d9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconServicosFilled", {
get: function () {
return getICON_CLASSRecord("038452a6-2759-497b-a77f-20eb45826fdd");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLeftArrow", {
get: function () {
return getICON_CLASSRecord("0409be96-f7ee-4d5c-a028-ac78484c3bbe");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowRightWTF", {
get: function () {
return getICON_CLASSRecord("04bfe465-5af3-44e1-b82c-c46f4a3cf55d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTabAjudaFilled", {
get: function () {
return getICON_CLASSRecord("05ae3224-6bce-4456-92bc-482986a0a48b");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWalletNatalFilled", {
get: function () {
return getICON_CLASSRecord("05d8fc66-bc9a-47d8-b8aa-bcad6a780bb8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGear", {
get: function () {
return getICON_CLASSRecord("0640e0ba-34b8-4f18-8f00-1c9e8d50fa89");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLojasNos", {
get: function () {
return getICON_CLASSRecord("08bbd6db-9ba1-4cc3-85d7-02c5d5aab166");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropRightCheia", {
get: function () {
return getICON_CLASSRecord("08d9b49d-3aeb-45e0-8566-21115fac7d1c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRefresh", {
get: function () {
return getICON_CLASSRecord("0b6eabc3-eb2c-4cb7-ac02-2cfd3d3fd6b7");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSeat", {
get: function () {
return getICON_CLASSRecord("0c442ec8-f11d-4560-91bd-e35fe582f1d6");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDebitDirect", {
get: function () {
return getICON_CLASSRecord("0cb27d76-c1ee-473b-9d45-19c6ab7fca58");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconColapsar", {
get: function () {
return getICON_CLASSRecord("0f09179e-1f92-49b3-b9d5-b1aa8f4bd00a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconConsulta", {
get: function () {
return getICON_CLASSRecord("0f9bb09d-be4f-4606-8237-cf03fdcbaaf9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropUpCheia", {
get: function () {
return getICON_CLASSRecord("15b10abc-f76d-4653-aa25-9e51c9fb6909");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopcornMenu", {
get: function () {
return getICON_CLASSRecord("16dd9fb6-02bc-47f2-bb05-c3646f537ab0");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInicioFilled", {
get: function () {
return getICON_CLASSRecord("17af2fa8-31e0-46d1-9183-993328cfa197");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSoundcloud", {
get: function () {
return getICON_CLASSRecord("19f057d0-b1b3-4e52-97b2-06ab27b7924f");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEye", {
get: function () {
return getICON_CLASSRecord("1a14d6e2-19dd-49f7-8e9b-a1d5a9d660e0");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTickets", {
get: function () {
return getICON_CLASSRecord("1ea79111-2bf7-48d0-bcfd-439b0be289e8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFavoriteFilled", {
get: function () {
return getICON_CLASSRecord("21c595f7-41b4-42b4-b92d-1feb327f77e9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWallet", {
get: function () {
return getICON_CLASSRecord("21fbf0cb-5d18-41d1-bb06-badbdbb8d31d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTwitter", {
get: function () {
return getICON_CLASSRecord("227e5db3-1b86-473a-becf-461589681205");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlertTriangle", {
get: function () {
return getICON_CLASSRecord("2994f6fa-43f1-429c-a6c7-e8dafcd8e7d7");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconServicos", {
get: function () {
return getICON_CLASSRecord("2bcb5e0a-e178-4919-8a21-5aa172de0f29");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSmsFilled", {
get: function () {
return getICON_CLASSRecord("2c35b671-4271-411f-bd19-b860652a2f94");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFiltros", {
get: function () {
return getICON_CLASSRecord("2ea87344-d9dc-4623-bf8e-a53742bfa968");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLike", {
get: function () {
return getICON_CLASSRecord("2eb4d1f1-127b-4bff-ab3f-1b3d40b63a4f");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratchFilled", {
get: function () {
return getICON_CLASSRecord("33ce4a85-b9c0-41cc-8cd7-c0f4f96b43d8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBookmarked", {
get: function () {
return getICON_CLASSRecord("34c9bdb1-85ab-4e3e-aab8-6de2c51e88f9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNetflix", {
get: function () {
return getICON_CLASSRecord("34fadac0-fe8c-45b8-b907-c0bf368b3825");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBus", {
get: function () {
return getICON_CLASSRecord("358de172-7980-4357-ac8b-3e31184038b8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropDownCheia", {
get: function () {
return getICON_CLASSRecord("368fcad0-53ed-48e5-bac2-a31d905bc6cf");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZonaNatal", {
get: function () {
return getICON_CLASSRecord("3824c108-7674-4276-b9dd-a1e79a28e2a2");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucyNatal", {
get: function () {
return getICON_CLASSRecord("384bf376-3bfc-4080-89b3-8171614b4266");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPencil", {
get: function () {
return getICON_CLASSRecord("3965762b-39d7-462d-ba0e-143a9ad07ddb");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconShareAndroid", {
get: function () {
return getICON_CLASSRecord("39e27a3d-2e63-4263-ab0b-a6cc7753f0ab");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCardSuccess0102", {
get: function () {
return getICON_CLASSRecord("3b7b8961-ed4c-4301-9562-411a84dda131");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInfoRounded", {
get: function () {
return getICON_CLASSRecord("3bbfd8ac-5b41-4c64-bc0b-cc81ddc5c832");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckBoxOn", {
get: function () {
return getICON_CLASSRecord("3c4f6dbb-d6dc-472b-8355-42b876f3169d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconVerMais", {
get: function () {
return getICON_CLASSRecord("3dc47c2d-28d4-4f6c-86d5-202aa7355d4c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLinkedIn", {
get: function () {
return getICON_CLASSRecord("3de989ad-406e-42b1-9c1d-ed6f8a89e392");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMessageInsuccessWTF", {
get: function () {
return getICON_CLASSRecord("3eed6eba-c22a-45a7-ae61-7d920223fd05");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconConta", {
get: function () {
return getICON_CLASSRecord("407a7026-c85d-4faf-8248-fa987edc6aea");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInfoRoundedFilled", {
get: function () {
return getICON_CLASSRecord("41fb7aad-e455-4dc0-8a24-40b661eabdb7");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCartaoNosV2", {
get: function () {
return getICON_CLASSRecord("42781948-5e52-4d30-969f-ff8377ca2364");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowRight", {
get: function () {
return getICON_CLASSRecord("434f85a5-2762-4d26-9f43-8329430c30ce");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopcornMenuV2", {
get: function () {
return getICON_CLASSRecord("4385f301-fce4-4da3-bbb3-964b16571194");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWirelessDisable", {
get: function () {
return getICON_CLASSRecord("44155b78-929d-411e-9920-82b8b25e7828");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPlus", {
get: function () {
return getICON_CLASSRecord("454b040a-1099-46da-b5d2-fbdd4f3f9bed");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAppsNosV2", {
get: function () {
return getICON_CLASSRecord("4766006c-dc30-4237-a099-00e9cb197b63");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSkype", {
get: function () {
return getICON_CLASSRecord("488d131e-fcc9-4de5-81fb-d38d5d6e2267");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNotificacoesOn", {
get: function () {
return getICON_CLASSRecord("4c2671d9-65d7-468e-8105-0ce41d867eb3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFacebookLight", {
get: function () {
return getICON_CLASSRecord("4e49a907-6642-48ac-b7fb-ba6098616ba1");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopCorn", {
get: function () {
return getICON_CLASSRecord("4ebdf68a-3a7a-4e79-af32-8d1e5223d02f");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconVimeo", {
get: function () {
return getICON_CLASSRecord("4ee8f792-b0ee-4129-9063-bb3f32773fb6");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLess", {
get: function () {
return getICON_CLASSRecord("4f26250b-ef0d-438d-bb3c-99d0bd867bbb");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHistory", {
get: function () {
return getICON_CLASSRecord("55e53638-fe04-4f40-afef-b80dd2de48ee");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRecycleBinEmptyFilled", {
get: function () {
return getICON_CLASSRecord("5b71ccd7-2caa-4160-8b39-95c221b02853");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconsSeatxl", {
get: function () {
return getICON_CLASSRecord("5ceb2c1b-c693-41e4-98cf-342538744b20");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSnapchat", {
get: function () {
return getICON_CLASSRecord("5d5f49b9-44fe-4e36-a130-dbb9678a6559");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAppsNos", {
get: function () {
return getICON_CLASSRecord("5d8408e1-b496-41d2-8658-344129e8a3b9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEyeHide", {
get: function () {
return getICON_CLASSRecord("5fe83dd4-fa34-4f40-965f-ad5bec5d3215");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAtalhosFilled", {
get: function () {
return getICON_CLASSRecord("609ff505-1065-43fc-96f1-3720d145ea0d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTelefone", {
get: function () {
return getICON_CLASSRecord("60d626d3-433d-408f-b44a-1b8e694efdd9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTumblr", {
get: function () {
return getICON_CLASSRecord("611c7d6a-9a1c-4abf-91d1-f8dd0c14713d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconParking", {
get: function () {
return getICON_CLASSRecord("61b30cd0-6653-439b-8dd2-369fca293ad3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTvCellPhonePlus", {
get: function () {
return getICON_CLASSRecord("62bc61ca-d82c-42e4-8b67-473fd819dc8a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTopics", {
get: function () {
return getICON_CLASSRecord("63c445a9-e00b-439e-894a-f654a9e05e10");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSms", {
get: function () {
return getICON_CLASSRecord("645894eb-6a2a-4f3d-9f5a-d1d00890a56a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFaq", {
get: function () {
return getICON_CLASSRecord("64cf46ef-ea9f-4660-a177-f48f2a579d58");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEncomenda", {
get: function () {
return getICON_CLASSRecord("6589fd14-7c33-4a72-9064-20efefe6cbac");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInstagram", {
get: function () {
return getICON_CLASSRecord("674b7527-e077-4ad3-8c2c-9b9342171cd8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropLeftCheia", {
get: function () {
return getICON_CLASSRecord("694e5a50-3cb8-4ebc-af08-5af555c7b215");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMore", {
get: function () {
return getICON_CLASSRecord("6a520bf2-b475-4adf-ae64-9415882ff1d9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCurrentLocation", {
get: function () {
return getICON_CLASSRecord("6a5a33b0-0175-4b2d-804a-4db38c9db0d2");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconItunes", {
get: function () {
return getICON_CLASSRecord("6bae4222-38f7-49ff-8e78-5fd2596b4121");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCartaz", {
get: function () {
return getICON_CLASSRecord("6cdd0308-8940-4740-bcff-c48a34bb1ea9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFavorite", {
get: function () {
return getICON_CLASSRecord("6eb70ef0-4a5b-4687-b631-ab7eaa03f246");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPrime", {
get: function () {
return getICON_CLASSRecord("7132c09e-9e19-43dc-a715-65b4f4000cf6");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMessenger", {
get: function () {
return getICON_CLASSRecord("714140ea-e4f1-46ac-931d-ce197005d7fa");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconUserPlus", {
get: function () {
return getICON_CLASSRecord("71a80589-7bf8-42dc-ba08-9e46b561029a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckCircleLine", {
get: function () {
return getICON_CLASSRecord("723da398-6895-4db2-bffe-981d3fffffe3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHbo", {
get: function () {
return getICON_CLASSRecord("725dab7a-d101-4027-bd37-9f4d3eec70d6");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHome", {
get: function () {
return getICON_CLASSRecord("72c1ea44-44c8-4aa8-8731-55fe90fa8ca0");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconContacto", {
get: function () {
return getICON_CLASSRecord("73d73c7c-1d7c-4129-a999-1202918387b4");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTabAjuda", {
get: function () {
return getICON_CLASSRecord("79a52476-1ce5-4901-84d8-9d88cd81cab9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconClose", {
get: function () {
return getICON_CLASSRecord("7b8503c7-a296-4714-aaa5-54727448226f");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMetro", {
get: function () {
return getICON_CLASSRecord("7b96765a-c5b2-4d6a-825a-d15504573de3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratchNatalFilled", {
get: function () {
return getICON_CLASSRecord("7c6f3a2d-00f0-478e-a3f0-167cd3227894");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorRoundedV2", {
get: function () {
return getICON_CLASSRecord("7d4b0b9d-921d-475e-a367-ea09342d84c8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWalletNatal", {
get: function () {
return getICON_CLASSRecord("7e077556-3472-468e-be3b-cecfd17fccf9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGoogle", {
get: function () {
return getICON_CLASSRecord("7f74c380-9afe-4511-b05e-0bb4102416d4");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSearch", {
get: function () {
return getICON_CLASSRecord("7fa60abf-fd65-4c02-90f3-f13cb3e9e460");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconVip", {
get: function () {
return getICON_CLASSRecord("80b8643f-4ea9-4e56-b005-b8d3b8fc69e2");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCalendar", {
get: function () {
return getICON_CLASSRecord("811f7369-61f8-44fe-bf88-dfb1e863ea62");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMagnifyingGlassMin", {
get: function () {
return getICON_CLASSRecord("81f62088-b850-40a9-9d24-c4b912e38789");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucy", {
get: function () {
return getICON_CLASSRecord("8278feb3-bf45-4eba-9983-ae16cc6251fd");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorNovo", {
get: function () {
return getICON_CLASSRecord("832b127c-7e55-4bb1-8ed5-bf207ae07a50");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHeart", {
get: function () {
return getICON_CLASSRecord("8419ef28-e5f9-4a79-af67-2916b230164d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconExternalLink", {
get: function () {
return getICON_CLASSRecord("853d8d6a-35e8-4bcf-9c7c-9723234b539a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCartaoNos", {
get: function () {
return getICON_CLASSRecord("85799301-4686-4962-9dc6-48fd5ed86b8c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZonaFilled", {
get: function () {
return getICON_CLASSRecord("85ba2fcb-3c07-4418-91c5-f106423e0541");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMovie", {
get: function () {
return getICON_CLASSRecord("867b3a21-d19a-4ffd-bb6d-b4562489b82c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconChat", {
get: function () {
return getICON_CLASSRecord("890f1121-90c8-4658-a79f-6bd652a5c992");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "icontTvPlus", {
get: function () {
return getICON_CLASSRecord("8a7394d7-fb7b-4bae-9850-360c288b79ab");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAjudaNos", {
get: function () {
return getICON_CLASSRecord("8a7dacd9-d79a-4bb5-b351-f2f9ea45f6ff");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckAll", {
get: function () {
return getICON_CLASSRecord("8ab6722f-0b42-49ce-a149-89befe5a4bb6");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTabBarAtalhos", {
get: function () {
return getICON_CLASSRecord("8e45834b-ca5f-4045-984f-bbccada61826");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCardError01", {
get: function () {
return getICON_CLASSRecord("8f29ee51-b0b3-4626-b9e7-d9422168dd96");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPremium", {
get: function () {
return getICON_CLASSRecord("8f7497d3-400d-4bb6-9d01-340372cccd39");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratchNatal", {
get: function () {
return getICON_CLASSRecord("9071e854-ba1a-43cd-a665-dd2f5d56920c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRadioButtonOff", {
get: function () {
return getICON_CLASSRecord("9157d001-7087-4463-b9f1-0314dca5f528");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconIMessage", {
get: function () {
return getICON_CLASSRecord("9400960f-16b2-4b1b-bb95-b5fe828dc3d1");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTeather", {
get: function () {
return getICON_CLASSRecord("95bea852-0c3e-48b1-86de-38b38c36303e");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGesturesWipeHorizontal", {
get: function () {
return getICON_CLASSRecord("9656dca4-51a4-437f-ab5c-e283659834de");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconYoutube", {
get: function () {
return getICON_CLASSRecord("96c0d608-9194-4170-a8f0-03c6f7aceb37");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSlidersEqual", {
get: function () {
return getICON_CLASSRecord("9744a38b-e2d6-4edd-a0d5-566f4ceec129");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTwitch", {
get: function () {
return getICON_CLASSRecord("98031b00-d686-4694-b56f-2ea1b1ff45a1");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPinterest", {
get: function () {
return getICON_CLASSRecord("9b54ebaa-f706-4e53-8b3e-cc577eabb5d8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMuda", {
get: function () {
return getICON_CLASSRecord("9c68a1ef-6782-430e-bcf5-8e601310e53d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowUp", {
get: function () {
return getICON_CLASSRecord("9d00a261-df34-4bbb-ac68-bd957888b3d9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheck", {
get: function () {
return getICON_CLASSRecord("9f85dd1a-28d8-4a3e-a9b0-09f88ecb093e");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSeatsXl", {
get: function () {
return getICON_CLASSRecord("a074b85b-9a45-429e-9d5c-c940de46ce47");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPcSmartphone", {
get: function () {
return getICON_CLASSRecord("a2f0c7b1-d94c-423a-8dd3-561e1e3e3f77");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTicket", {
get: function () {
return getICON_CLASSRecord("a4bc95b7-ce62-4da5-afe8-4895ed545b73");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlterarContexto", {
get: function () {
return getICON_CLASSRecord("a57ff59c-5608-4c3c-b300-413aa3b6fb47");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTv", {
get: function () {
return getICON_CLASSRecord("a5b64568-2c3b-4569-9452-8fb56f199718");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEletronicInvoice", {
get: function () {
return getICON_CLASSRecord("a77500a0-d6ef-4152-9ac3-5e3bd7b250fd");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSimCard", {
get: function () {
return getICON_CLASSRecord("a84626a8-2967-4578-953a-a8939787af79");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZona", {
get: function () {
return getICON_CLASSRecord("a8f22183-52f4-4341-9bc4-3bc8cd0ff992");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBookmark", {
get: function () {
return getICON_CLASSRecord("aa47b522-2816-4858-bf9d-c83880b2fe6e");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPlayCircle", {
get: function () {
return getICON_CLASSRecord("aa8d6c1c-b6e7-44bb-a116-f67b8c669cbe");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLocation", {
get: function () {
return getICON_CLASSRecord("ab8e19b4-fa25-4fa4-bcbe-8ef79807cf0c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTicketsFilled", {
get: function () {
return getICON_CLASSRecord("acf32c21-52de-4e7d-91e8-f08fd460c192");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTvHD", {
get: function () {
return getICON_CLASSRecord("b0769287-51cb-47f3-9473-a6445af70fa3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTelemovel", {
get: function () {
return getICON_CLASSRecord("b1f13a43-5240-410f-a1c7-74aed8c2c0d3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorRounded", {
get: function () {
return getICON_CLASSRecord("b33adfc1-7559-4bae-9170-5019ca3ce1df");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBill", {
get: function () {
return getICON_CLASSRecord("b635c5d1-d875-4eb4-9140-b854d84506d6");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconListInverted", {
get: function () {
return getICON_CLASSRecord("b6649ac2-4b33-4d07-85c3-9392355136ca");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopCornNew", {
get: function () {
return getICON_CLASSRecord("b68cfa8f-1566-400a-88e2-169e166679c2");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCopiar", {
get: function () {
return getICON_CLASSRecord("b6bab7da-9419-40da-bb39-a42e83720f0a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSeatColor", {
get: function () {
return getICON_CLASSRecord("b7e797f4-b455-443a-8fb7-8c082dd9b67a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratch", {
get: function () {
return getICON_CLASSRecord("b7f71ed8-f49a-470e-aa4c-c3d1bb791b38");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMaisNatalWTF", {
get: function () {
return getICON_CLASSRecord("b8d6b224-7c36-4a09-8be5-ee29f47cd115");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFilterFilled", {
get: function () {
return getICON_CLASSRecord("b9aa8387-f155-4bb8-b920-fa5d3b08c947");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckBoxOff", {
get: function () {
return getICON_CLASSRecord("ba5e3751-896e-4615-8386-e08039f43e0f");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNotificacoes", {
get: function () {
return getICON_CLASSRecord("bb610fbf-72c5-49c0-9806-e9a630529824");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMessageSuccessWTF", {
get: function () {
return getICON_CLASSRecord("bbfd4eac-b4c8-424f-9522-f3c8256ccde1");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPremiumSeatXL", {
get: function () {
return getICON_CLASSRecord("bdfeb64e-3109-4f84-808f-a09d59d8d5b7");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAppleMusic", {
get: function () {
return getICON_CLASSRecord("be911cac-a3df-4adf-a602-0bffaed86100");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRouter", {
get: function () {
return getICON_CLASSRecord("bea8023a-f5ec-4cef-abab-c208537890eb");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEnvelopOpen", {
get: function () {
return getICON_CLASSRecord("bef95d1d-3e00-4187-a067-7900d1b5c95c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInternet", {
get: function () {
return getICON_CLASSRecord("bfd476fc-ac45-4a38-bff1-524d65e24334");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGoogleMusic", {
get: function () {
return getICON_CLASSRecord("c06618eb-7595-4a21-8d26-876bd7ff2a38");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMaisWTF", {
get: function () {
return getICON_CLASSRecord("c0c1b4d3-435f-49b1-af20-2bea36276a50");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlertRounded", {
get: function () {
return getICON_CLASSRecord("c10f6c06-a595-4f1c-af4b-7a0a819878f8");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTicketFilled", {
get: function () {
return getICON_CLASSRecord("c1cb057f-5ffd-437b-bb74-eecedd69667a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconUser", {
get: function () {
return getICON_CLASSRecord("c2921be5-b316-42e3-aa26-d7d590c127c4");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZonaNatalFilled", {
get: function () {
return getICON_CLASSRecord("c49fa011-b4c1-4d3d-87e2-b7e624b821e3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDotsHorizontal", {
get: function () {
return getICON_CLASSRecord("c588a0d6-c262-4f33-84f9-2b25aa343dd6");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBack", {
get: function () {
return getICON_CLASSRecord("c605ef4d-f8e5-4d9c-8d32-96de02fec138");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowLeft", {
get: function () {
return getICON_CLASSRecord("c6839bc2-52e1-49f9-9a33-0f2c61befe82");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDotsVertical", {
get: function () {
return getICON_CLASSRecord("cb7aa433-4cd2-4a59-a08c-d95c4bf1941d");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconForumNos", {
get: function () {
return getICON_CLASSRecord("cd6557a8-a44d-417b-93c4-336b6df9e444");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEletronicInvoiceNew", {
get: function () {
return getICON_CLASSRecord("cf2cc7cb-eafa-453c-b310-352580360073");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorRoundedFilledV2", {
get: function () {
return getICON_CLASSRecord("d0be93fe-114a-42ea-b172-38376cbc1b04");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBellCheck", {
get: function () {
return getICON_CLASSRecord("d0d2579c-59fb-4e16-a871-1a71d193332a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNetMovel", {
get: function () {
return getICON_CLASSRecord("d1f7d660-8a76-4250-9782-82f8e244c719");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucyNatalFilled", {
get: function () {
return getICON_CLASSRecord("d22d0b57-de00-4f93-8eb0-80c400ec90b0");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowDown", {
get: function () {
return getICON_CLASSRecord("d2cd9ec7-9b69-468b-8b1c-2a34ba3b9da3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGestureDoubleTap", {
get: function () {
return getICON_CLASSRecord("d4b4e0d3-94dc-4bf7-9cad-5eb9aa00e2ca");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWindows", {
get: function () {
return getICON_CLASSRecord("d6455aba-7cef-4a48-8d1e-5799c53dbf1a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlertTriangleFilled", {
get: function () {
return getICON_CLASSRecord("d8a3f9d2-0f15-4667-a6ae-91cf9ec34d99");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFacebook", {
get: function () {
return getICON_CLASSRecord("da91f8cd-c1a2-4e79-a3b2-6f358bfa43ba");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDislike", {
get: function () {
return getICON_CLASSRecord("dba88543-c98a-434b-8ab7-b3bad26038b3");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFaceTime", {
get: function () {
return getICON_CLASSRecord("df92fd71-9b56-41cb-85c2-665f9e5fc1fe");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSpotify", {
get: function () {
return getICON_CLASSRecord("e1d2fd99-388f-4312-82b2-07d85e0319b7");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucyFilled", {
get: function () {
return getICON_CLASSRecord("e2d0c688-8770-4a9e-a3b9-0635dcee6b62");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInternetData", {
get: function () {
return getICON_CLASSRecord("e5030fb0-23c7-4754-8a94-ba385f85988a");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRadioButtonOn", {
get: function () {
return getICON_CLASSRecord("e63cf556-7f97-4a41-9f86-7d2498336765");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckCircle", {
get: function () {
return getICON_CLASSRecord("e67bde37-6a83-4a29-8ccb-c3dcaa996eae");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRecycleBinEmpty", {
get: function () {
return getICON_CLASSRecord("e722390d-6826-4c00-809b-421808b2edb0");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEnvelopeClosed", {
get: function () {
return getICON_CLASSRecord("e889b360-6d3d-4db6-913e-801ad74ad638");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMobilidade", {
get: function () {
return getICON_CLASSRecord("ec3ba0bc-94ba-4c3e-a224-5b7ebae2bfd1");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEdit", {
get: function () {
return getICON_CLASSRecord("ecf06917-d913-4a0b-95ef-dc1571fa875c");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAdmin", {
get: function () {
return getICON_CLASSRecord("f0614f61-661d-4c96-a384-42eb2363ab5f");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAmazon", {
get: function () {
return getICON_CLASSRecord("f1121331-7df3-44a2-926a-9b162df5fed9");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWhatsapp", {
get: function () {
return getICON_CLASSRecord("f1b721a3-dfdb-47f4-9b3f-f9a60dfc5311");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconShare", {
get: function () {
return getICON_CLASSRecord("f576738a-b1f7-47f0-891d-5d2e97c1f525");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWalletFilled", {
get: function () {
return getICON_CLASSRecord("fa0cf488-587a-4b71-a3ff-ff24002f169f");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconViber", {
get: function () {
return getICON_CLASSRecord("fac3d751-fe8e-4590-a202-813145d1c877");
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHeartFilled", {
get: function () {
return getICON_CLASSRecord("fcc8dde8-3d2f-4589-9f97-9ee7a5e9b90c");
}
});

BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE = {};
var getPAYMENT_TYPERecord = function (record) {
return OS.ApplicationInfo.getModules()["fa7eec4c-f025-4c7b-8b45-ed9ab5cc88e6"].staticEntities["3bce4563-e78e-4b4d-aa61-214237bb9edb"][record];
};
Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE, "mASTECARD", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_TYPERecord("3084aac3-0a41-4d11-aadc-01c0049a336d"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE, "vISA", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_TYPERecord("67e9701b-051e-4503-8486-dda266c5722e"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE, "mBWAY", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_TYPERecord("800c427f-cf98-4888-bb28-25e3118cf444"));
}
});

BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS = {};
var getPAYMENT_PROCESSRecord = function (record) {
return OS.ApplicationInfo.getModules()["fa7eec4c-f025-4c7b-8b45-ed9ab5cc88e6"].staticEntities["669e6e7e-b1b3-43d0-8098-00546737e8cc"][record];
};
Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS, "invoicePartialPayment", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_PROCESSRecord("255aae5d-73f1-41e0-823e-511c3493c6ae"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS, "invoiceReferenceATM", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_PROCESSRecord("2874699e-54c2-440f-b73b-3fafeac35945"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS, "invoicePayment", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_PROCESSRecord("297abc9c-3531-408d-ad83-c5bb6bae2f2a"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS, "chargeOptions", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_PROCESSRecord("7e08ab55-2c7d-4676-ac2a-ac72262b17ae"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS, "homepage", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_PROCESSRecord("8271183d-f2dd-463c-b985-28b1fc3e5f51"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS, "recharge_NewCard", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_PROCESSRecord("8e9a8a3b-c980-465e-9e02-a19cefa82690"));
}
});

Object.defineProperty(BALANCE_MBLOCKSModel.staticEntities.pAYMENT_PROCESS, "recharge", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getPAYMENT_PROCESSRecord("efdd7f3f-f200-4aa4-84a7-8a38618ba55a"));
}
});

});
