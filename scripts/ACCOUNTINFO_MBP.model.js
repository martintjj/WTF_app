define("ACCOUNTINFO_MBP.model$Parameter31Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Parameter31Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Parameter31Record = (function (_super) {
__extends(Parameter31Record, _super);
function Parameter31Record(defaults) {
_super.apply(this, arguments);
}
Parameter31Record.attributesToDeclare = function () {
return [
this.attr("Parameter31", "parameter31Attr", "Parameter31", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Parameter31Rec());
}, CON_BILLINGModel.Parameter31Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter31Record.fromStructure = function (str) {
return new Parameter31Record(new Parameter31Record.RecordClass({
parameter31Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter31Record.IsAnonymousRecord = true;
Parameter31Record.UniqueId = "42f9f189-96e0-886e-4dc8-bc8688932593";
Parameter31Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter31Record.init();
return Parameter31Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Parameter31Record = Parameter31Record;

});
define("ACCOUNTINFO_MBP.model$Parameter31RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Parameter31Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Parameter31RecordList = (function (_super) {
__extends(Parameter31RecordList, _super);
function Parameter31RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter31RecordList.RecordType = ACCOUNTINFO_MBPModel.Parameter31Record;
return Parameter31RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Parameter31RecordList = Parameter31RecordList;

});
define("ACCOUNTINFO_MBP.model$AccessData25Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$AccessData25Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var AccessData25Record = (function (_super) {
__extends(AccessData25Record, _super);
function AccessData25Record(defaults) {
_super.apply(this, arguments);
}
AccessData25Record.attributesToDeclare = function () {
return [
this.attr("AccessData25", "accessData25Attr", "AccessData25", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.AccessData25Rec());
}, CON_BILLINGModel.AccessData25Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData25Record.fromStructure = function (str) {
return new AccessData25Record(new AccessData25Record.RecordClass({
accessData25Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData25Record.IsAnonymousRecord = true;
AccessData25Record.UniqueId = "9fbf284c-e4bd-447a-cbbc-3f11b8b8cd5d";
AccessData25Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData25Record.init();
return AccessData25Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.AccessData25Record = AccessData25Record;

});
define("ACCOUNTINFO_MBP.model$HistoryStep24Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$HistoryStep24Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var HistoryStep24Record = (function (_super) {
__extends(HistoryStep24Record, _super);
function HistoryStep24Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep24Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep24", "historyStep24Attr", "HistoryStep24", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.HistoryStep24Rec());
}, CON_BILLINGModel.HistoryStep24Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep24Record.fromStructure = function (str) {
return new HistoryStep24Record(new HistoryStep24Record.RecordClass({
historyStep24Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep24Record.IsAnonymousRecord = true;
HistoryStep24Record.UniqueId = "34f13bec-db75-ebae-76e9-4c95fed8e665";
HistoryStep24Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep24Record.init();
return HistoryStep24Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.HistoryStep24Record = HistoryStep24Record;

});
define("ACCOUNTINFO_MBP.model$HistoryStep24RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$HistoryStep24Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var HistoryStep24RecordList = (function (_super) {
__extends(HistoryStep24RecordList, _super);
function HistoryStep24RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep24RecordList.RecordType = ACCOUNTINFO_MBPModel.HistoryStep24Record;
return HistoryStep24RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.HistoryStep24RecordList = HistoryStep24RecordList;

});
define("ACCOUNTINFO_MBP.model$eCodes25Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$eCodes25Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var eCodes25Record = (function (_super) {
__extends(eCodes25Record, _super);
function eCodes25Record(defaults) {
_super.apply(this, arguments);
}
eCodes25Record.attributesToDeclare = function () {
return [
this.attr("eCodes25", "eCodes25Attr", "eCodes25", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.eCodes25Rec());
}, CON_BILLINGModel.eCodes25Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes25Record.fromStructure = function (str) {
return new eCodes25Record(new eCodes25Record.RecordClass({
eCodes25Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes25Record.IsAnonymousRecord = true;
eCodes25Record.UniqueId = "1e5b24ba-6e3e-000d-ecc5-fe9090506f7c";
eCodes25Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes25Record.init();
return eCodes25Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.eCodes25Record = eCodes25Record;

});
define("ACCOUNTINFO_MBP.model$eCodes25RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$eCodes25Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var eCodes25RecordList = (function (_super) {
__extends(eCodes25RecordList, _super);
function eCodes25RecordList(defaults) {
_super.apply(this, arguments);
}
eCodes25RecordList.RecordType = ACCOUNTINFO_MBPModel.eCodes25Record;
return eCodes25RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.eCodes25RecordList = eCodes25RecordList;

});
define("ACCOUNTINFO_MBP.model$Status25Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Status25Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Status25Record = (function (_super) {
__extends(Status25Record, _super);
function Status25Record(defaults) {
_super.apply(this, arguments);
}
Status25Record.attributesToDeclare = function () {
return [
this.attr("Status25", "status25Attr", "Status25", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Status25Rec());
}, CON_BILLINGModel.Status25Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status25Record.fromStructure = function (str) {
return new Status25Record(new Status25Record.RecordClass({
status25Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status25Record.IsAnonymousRecord = true;
Status25Record.UniqueId = "8082f7a6-9786-f37f-c819-3fd749c19263";
Status25Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status25Record.init();
return Status25Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Status25Record = Status25Record;

});
define("ACCOUNTINFO_MBP.model$Header24Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Header24Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Header24Record = (function (_super) {
__extends(Header24Record, _super);
function Header24Record(defaults) {
_super.apply(this, arguments);
}
Header24Record.attributesToDeclare = function () {
return [
this.attr("Header24", "header24Attr", "Header24", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Header24Rec());
}, CON_BILLINGModel.Header24Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header24Record.fromStructure = function (str) {
return new Header24Record(new Header24Record.RecordClass({
header24Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header24Record.IsAnonymousRecord = true;
Header24Record.UniqueId = "030e0c69-36f4-4374-666e-1d444e9dc876";
Header24Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header24Record.init();
return Header24Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Header24Record = Header24Record;

});
define("ACCOUNTINFO_MBP.model$Status25RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Status25Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Status25RecordList = (function (_super) {
__extends(Status25RecordList, _super);
function Status25RecordList(defaults) {
_super.apply(this, arguments);
}
Status25RecordList.RecordType = ACCOUNTINFO_MBPModel.Status25Record;
return Status25RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Status25RecordList = Status25RecordList;

});
define("ACCOUNTINFO_MBP.model$Identification_out2Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Identification_out2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Identification_out2Record = (function (_super) {
__extends(Identification_out2Record, _super);
function Identification_out2Record(defaults) {
_super.apply(this, arguments);
}
Identification_out2Record.attributesToDeclare = function () {
return [
this.attr("Identification_out2", "identification_out2Attr", "Identification_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Identification_out2Rec());
}, CON_BILLINGModel.Identification_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Identification_out2Record.fromStructure = function (str) {
return new Identification_out2Record(new Identification_out2Record.RecordClass({
identification_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Identification_out2Record.IsAnonymousRecord = true;
Identification_out2Record.UniqueId = "057f52f6-5a58-4718-6c7f-160c266c68e2";
Identification_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Identification_out2Record.init();
return Identification_out2Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Identification_out2Record = Identification_out2Record;

});
define("ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CACHE_CONTROL_SERVICESRec = (function (_super) {
__extends(Local_CACHE_CONTROL_SERVICESRec, _super);
function Local_CACHE_CONTROL_SERVICESRec(defaults) {
_super.apply(this, arguments);
}
Local_CACHE_CONTROL_SERVICESRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CacheServiceId", "cacheServiceIdAttr", "CacheServiceId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CacheControlId", "cacheControlIdAttr", "CacheControlId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("LastUpdateAt", "lastUpdateAtAttr", "LastUpdateAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("ExpirationDate", "expirationDateAttr", "ExpirationDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("LastCacheCheck", "lastCacheCheckAttr", "LastCacheCheck", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Local_CACHE_CONTROL_SERVICESRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Local_CACHE_CONTROL_SERVICESRec.init();
return Local_CACHE_CONTROL_SERVICESRec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRec = Local_CACHE_CONTROL_SERVICESRec;

});
define("ACCOUNTINFO_MBP.model$Contract_out_2Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Contract_out_2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contract_out_2Record = (function (_super) {
__extends(Contract_out_2Record, _super);
function Contract_out_2Record(defaults) {
_super.apply(this, arguments);
}
Contract_out_2Record.attributesToDeclare = function () {
return [
this.attr("Contract_out_2", "contract_out_2Attr", "Contract_out_2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Contract_out_2Rec());
}, CON_BILLINGModel.Contract_out_2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contract_out_2Record.fromStructure = function (str) {
return new Contract_out_2Record(new Contract_out_2Record.RecordClass({
contract_out_2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contract_out_2Record.IsAnonymousRecord = true;
Contract_out_2Record.UniqueId = "0af2a383-b63c-9012-48a8-0ab27f4d1856";
Contract_out_2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contract_out_2Record.init();
return Contract_out_2Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Contract_out_2Record = Contract_out_2Record;

});
define("ACCOUNTINFO_MBP.model$TextRecord", ["exports", "OutSystems", "Extension.Text.model", "ACCOUNTINFO_MBP.model", "Extension.Text.model$TextRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$Text"], function (exports, OutSystems, Extension_TextModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var TextRecord = (function (_super) {
__extends(TextRecord, _super);
function TextRecord(defaults) {
_super.apply(this, arguments);
}
TextRecord.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_TextModel.TextRec());
}, Extension_TextModel.TextRec)
].concat(_super.attributesToDeclare.call(this));
};
TextRecord.fromStructure = function (str) {
return new TextRecord(new TextRecord.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRecord.IsAnonymousRecord = true;
TextRecord.UniqueId = "0d84b59e-ff89-87c4-71ae-b49dfa9f2c39";
TextRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
TextRecord.init();
return TextRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.TextRecord = TextRecord;

});
define("ACCOUNTINFO_MBP.model$STR_CLIENT_CARDList", ["exports", "OutSystems", "ACCOUNTINFO_BP.model", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_BP.model$STR_CLIENT_CARDRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$ACCOUNTINFO_BP"], function (exports, OutSystems, ACCOUNTINFO_BPModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_CLIENT_CARDList = (function (_super) {
__extends(STR_CLIENT_CARDList, _super);
function STR_CLIENT_CARDList(defaults) {
_super.apply(this, arguments);
}
STR_CLIENT_CARDList.RecordType = ACCOUNTINFO_BPModel.STR_CLIENT_CARDRec;
return STR_CLIENT_CARDList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_CLIENT_CARDList = STR_CLIENT_CARDList;

});
define("ACCOUNTINFO_MBP.model$Contact5List", ["exports", "OutSystems", "CON_SIEBEL.model", "ACCOUNTINFO_MBP.model", "CON_SIEBEL.model$ContactRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_SIEBEL"], function (exports, OutSystems, CON_SIEBELModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contact5List = (function (_super) {
__extends(Contact5List, _super);
function Contact5List(defaults) {
_super.apply(this, arguments);
}
Contact5List.RecordType = CON_SIEBELModel.ContactRec;
return Contact5List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Contact5List = Contact5List;

});
define("ACCOUNTINFO_MBP.model$TextList", ["exports", "OutSystems", "Extension.Text.model", "ACCOUNTINFO_MBP.model", "Extension.Text.model$TextRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$Text"], function (exports, OutSystems, Extension_TextModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.RecordType = Extension_TextModel.TextRec;
return TextList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.TextList = TextList;

});
define("ACCOUNTINFO_MBP.model$STR_NOS_CARDRec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_NOS_CARDRec = (function (_super) {
__extends(STR_NOS_CARDRec, _super);
function STR_NOS_CARDRec(defaults) {
_super.apply(this, arguments);
}
STR_NOS_CARDRec.attributesToDeclare = function () {
return [
this.attr("ClientNumber", "clientNumberAttr", "ClientNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CardNumber", "cardNumberAttr", "CardNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CardName", "cardNameAttr", "CardName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UpdatedDate", "updatedDateAttr", "UpdatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsCardDelegated", "isCardDelegatedAttr", "IsCardDelegated", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CanBeDelegated", "canBeDelegatedAttr", "CanBeDelegated", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LocalCardID", "localCardIDAttr", "LocalCardID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("StatusCode", "statusCodeAttr", "StatusCode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_NOS_CARDRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_NOS_CARDRec.init();
return STR_NOS_CARDRec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.STR_NOS_CARDRec = STR_NOS_CARDRec;

});
define("ACCOUNTINFO_MBP.model$STR_NOS_CARDRecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_NOS_CARDRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_NOS_CARDRecord = (function (_super) {
__extends(STR_NOS_CARDRecord, _super);
function STR_NOS_CARDRecord(defaults) {
_super.apply(this, arguments);
}
STR_NOS_CARDRecord.attributesToDeclare = function () {
return [
this.attr("STR_NOS_CARD", "sTR_NOS_CARDAttr", "STR_NOS_CARD", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.STR_NOS_CARDRec());
}, ACCOUNTINFO_MBPModel.STR_NOS_CARDRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_NOS_CARDRecord.fromStructure = function (str) {
return new STR_NOS_CARDRecord(new STR_NOS_CARDRecord.RecordClass({
sTR_NOS_CARDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_NOS_CARDRecord.IsAnonymousRecord = true;
STR_NOS_CARDRecord.UniqueId = "68c4735c-4058-e828-fdea-b78a486f9b92";
STR_NOS_CARDRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_NOS_CARDRecord.init();
return STR_NOS_CARDRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.STR_NOS_CARDRecord = STR_NOS_CARDRecord;

});
define("ACCOUNTINFO_MBP.model$STR_NOS_CARDRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_NOS_CARDRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_NOS_CARDRecordList = (function (_super) {
__extends(STR_NOS_CARDRecordList, _super);
function STR_NOS_CARDRecordList(defaults) {
_super.apply(this, arguments);
}
STR_NOS_CARDRecordList.RecordType = ACCOUNTINFO_MBPModel.STR_NOS_CARDRecord;
return STR_NOS_CARDRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_NOS_CARDRecordList = STR_NOS_CARDRecordList;

});
define("ACCOUNTINFO_MBP.model$Contact5Record", ["exports", "OutSystems", "CON_SIEBEL.model", "ACCOUNTINFO_MBP.model", "CON_SIEBEL.model$ContactRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_SIEBEL"], function (exports, OutSystems, CON_SIEBELModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contact5Record = (function (_super) {
__extends(Contact5Record, _super);
function Contact5Record(defaults) {
_super.apply(this, arguments);
}
Contact5Record.attributesToDeclare = function () {
return [
this.attr("Contact5", "contactAttr", "Contact5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_SIEBELModel.ContactRec());
}, CON_SIEBELModel.ContactRec)
].concat(_super.attributesToDeclare.call(this));
};
Contact5Record.fromStructure = function (str) {
return new Contact5Record(new Contact5Record.RecordClass({
contactAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact5Record.IsAnonymousRecord = true;
Contact5Record.UniqueId = "dfb405cc-15d7-a64c-3295-91466f0672e5";
Contact5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact5Record.init();
return Contact5Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Contact5Record = Contact5Record;

});
define("ACCOUNTINFO_MBP.model$Contact5RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Contact5Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contact5RecordList = (function (_super) {
__extends(Contact5RecordList, _super);
function Contact5RecordList(defaults) {
_super.apply(this, arguments);
}
Contact5RecordList.RecordType = ACCOUNTINFO_MBPModel.Contact5Record;
return Contact5RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Contact5RecordList = Contact5RecordList;

});
define("ACCOUNTINFO_MBP.model$STR_FPRec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_FPRec = (function (_super) {
__extends(STR_FPRec, _super);
function STR_FPRec(defaults) {
_super.apply(this, arguments);
}
STR_FPRec.attributesToDeclare = function () {
return [
this.attr("FP_CARDTITLE", "fP_CARDTITLEAttr", "FP_CARDTITLE", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FP_CARDDESCRIPTION", "fP_CARDDESCRIPTIONAttr", "FP_CARDDESCRIPTION", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FP_DESCRIPTION_POP_UP", "fP_DESCRIPTION_POP_UPAttr", "FP_DESCRIPTION_POP_UP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FP_TITLE_DATE_POP_UP", "fP_TITLE_DATE_POP_UPAttr", "FP_TITLE_DATE_POP_UP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FP_TITLE_VALUE_POP_UP", "fP_TITLE_VALUE_POP_UPAttr", "FP_TITLE_VALUE_POP_UP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FP_DISABLECARD", "fP_DISABLECARDAttr", "FP_DISABLECARD", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_FPRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_FPRec.init();
return STR_FPRec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.STR_FPRec = STR_FPRec;

});
define("ACCOUNTINFO_MBP.model$STR_FPList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_FPRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_FPList = (function (_super) {
__extends(STR_FPList, _super);
function STR_FPList(defaults) {
_super.apply(this, arguments);
}
STR_FPList.RecordType = ACCOUNTINFO_MBPModel.STR_FPRec;
return STR_FPList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_FPList = STR_FPList;

});
define("ACCOUNTINFO_MBP.model$Contract_out_2RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Contract_out_2Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contract_out_2RecordList = (function (_super) {
__extends(Contract_out_2RecordList, _super);
function Contract_out_2RecordList(defaults) {
_super.apply(this, arguments);
}
Contract_out_2RecordList.RecordType = ACCOUNTINFO_MBPModel.Contract_out_2Record;
return Contract_out_2RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Contract_out_2RecordList = Contract_out_2RecordList;

});
define("ACCOUNTINFO_MBP.model$Invoice7Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Invoice7Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Invoice7Record = (function (_super) {
__extends(Invoice7Record, _super);
function Invoice7Record(defaults) {
_super.apply(this, arguments);
}
Invoice7Record.attributesToDeclare = function () {
return [
this.attr("Invoice7", "invoice7Attr", "Invoice7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Invoice7Rec());
}, CON_BILLINGModel.Invoice7Rec)
].concat(_super.attributesToDeclare.call(this));
};
Invoice7Record.fromStructure = function (str) {
return new Invoice7Record(new Invoice7Record.RecordClass({
invoice7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Invoice7Record.IsAnonymousRecord = true;
Invoice7Record.UniqueId = "de6efda6-bd7a-f06b-96be-cfe549604a7a";
Invoice7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Invoice7Record.init();
return Invoice7Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Invoice7Record = Invoice7Record;

});
define("ACCOUNTINFO_MBP.model$Invoice7RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Invoice7Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Invoice7RecordList = (function (_super) {
__extends(Invoice7RecordList, _super);
function Invoice7RecordList(defaults) {
_super.apply(this, arguments);
}
Invoice7RecordList.RecordType = ACCOUNTINFO_MBPModel.Invoice7Record;
return Invoice7RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Invoice7RecordList = Invoice7RecordList;

});
define("ACCOUNTINFO_MBP.model$STR_NOS_CARDList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_NOS_CARDRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_NOS_CARDList = (function (_super) {
__extends(STR_NOS_CARDList, _super);
function STR_NOS_CARDList(defaults) {
_super.apply(this, arguments);
}
STR_NOS_CARDList.RecordType = ACCOUNTINFO_MBPModel.STR_NOS_CARDRec;
return STR_NOS_CARDList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_NOS_CARDList = STR_NOS_CARDList;

});
define("ACCOUNTINFO_MBP.model$CampaignRecord", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$CampaignRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CampaignRecord = (function (_super) {
__extends(CampaignRecord, _super);
function CampaignRecord(defaults) {
_super.apply(this, arguments);
}
CampaignRecord.attributesToDeclare = function () {
return [
this.attr("Campaign", "campaignAttr", "Campaign", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.CampaignRec());
}, CON_BILLINGModel.CampaignRec)
].concat(_super.attributesToDeclare.call(this));
};
CampaignRecord.fromStructure = function (str) {
return new CampaignRecord(new CampaignRecord.RecordClass({
campaignAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CampaignRecord.IsAnonymousRecord = true;
CampaignRecord.UniqueId = "3cb78940-49d8-6bd0-f478-a9f250cb2f6e";
CampaignRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CampaignRecord.init();
return CampaignRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.CampaignRecord = CampaignRecord;

});
define("ACCOUNTINFO_MBP.model$LoyaltyPointsRecord", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$LoyaltyPointsRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyPointsRecord = (function (_super) {
__extends(LoyaltyPointsRecord, _super);
function LoyaltyPointsRecord(defaults) {
_super.apply(this, arguments);
}
LoyaltyPointsRecord.attributesToDeclare = function () {
return [
this.attr("LoyaltyPoints", "loyaltyPointsAttr", "LoyaltyPoints", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.LoyaltyPointsRec());
}, CON_BILLINGModel.LoyaltyPointsRec)
].concat(_super.attributesToDeclare.call(this));
};
LoyaltyPointsRecord.fromStructure = function (str) {
return new LoyaltyPointsRecord(new LoyaltyPointsRecord.RecordClass({
loyaltyPointsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoyaltyPointsRecord.IsAnonymousRecord = true;
LoyaltyPointsRecord.UniqueId = "8d7869c3-5266-0753-eb18-b845a5e7345a";
LoyaltyPointsRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
LoyaltyPointsRecord.init();
return LoyaltyPointsRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.LoyaltyPointsRecord = LoyaltyPointsRecord;

});
define("ACCOUNTINFO_MBP.model$LoyaltyPurchaseRecord", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$LoyaltyPurchaseRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyPurchaseRecord = (function (_super) {
__extends(LoyaltyPurchaseRecord, _super);
function LoyaltyPurchaseRecord(defaults) {
_super.apply(this, arguments);
}
LoyaltyPurchaseRecord.attributesToDeclare = function () {
return [
this.attr("LoyaltyPurchase", "loyaltyPurchaseAttr", "LoyaltyPurchase", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.LoyaltyPurchaseRec());
}, CON_BILLINGModel.LoyaltyPurchaseRec)
].concat(_super.attributesToDeclare.call(this));
};
LoyaltyPurchaseRecord.fromStructure = function (str) {
return new LoyaltyPurchaseRecord(new LoyaltyPurchaseRecord.RecordClass({
loyaltyPurchaseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoyaltyPurchaseRecord.IsAnonymousRecord = true;
LoyaltyPurchaseRecord.UniqueId = "40fe96c7-4c96-74d1-532b-5e16ff4b62e1";
LoyaltyPurchaseRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
LoyaltyPurchaseRecord.init();
return LoyaltyPurchaseRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.LoyaltyPurchaseRecord = LoyaltyPurchaseRecord;

});
define("ACCOUNTINFO_MBP.model$LoyaltyTransactionRecord", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$LoyaltyTransactionRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyTransactionRecord = (function (_super) {
__extends(LoyaltyTransactionRecord, _super);
function LoyaltyTransactionRecord(defaults) {
_super.apply(this, arguments);
}
LoyaltyTransactionRecord.attributesToDeclare = function () {
return [
this.attr("LoyaltyTransaction", "loyaltyTransactionAttr", "LoyaltyTransaction", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.LoyaltyTransactionRec());
}, CON_BILLINGModel.LoyaltyTransactionRec)
].concat(_super.attributesToDeclare.call(this));
};
LoyaltyTransactionRecord.fromStructure = function (str) {
return new LoyaltyTransactionRecord(new LoyaltyTransactionRecord.RecordClass({
loyaltyTransactionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoyaltyTransactionRecord.IsAnonymousRecord = true;
LoyaltyTransactionRecord.UniqueId = "f04b1ffd-acb8-c483-ed85-a43ad719e685";
LoyaltyTransactionRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
LoyaltyTransactionRecord.init();
return LoyaltyTransactionRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.LoyaltyTransactionRecord = LoyaltyTransactionRecord;

});
define("ACCOUNTINFO_MBP.model$Parameter30Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Parameter30Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Parameter30Record = (function (_super) {
__extends(Parameter30Record, _super);
function Parameter30Record(defaults) {
_super.apply(this, arguments);
}
Parameter30Record.attributesToDeclare = function () {
return [
this.attr("Parameter30", "parameter30Attr", "Parameter30", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Parameter30Rec());
}, CON_BILLINGModel.Parameter30Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter30Record.fromStructure = function (str) {
return new Parameter30Record(new Parameter30Record.RecordClass({
parameter30Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter30Record.IsAnonymousRecord = true;
Parameter30Record.UniqueId = "c5c0502e-ec0d-b4e9-76b1-8bc2b8959efa";
Parameter30Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter30Record.init();
return Parameter30Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Parameter30Record = Parameter30Record;

});
define("ACCOUNTINFO_MBP.model$Parameter30RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Parameter30Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Parameter30RecordList = (function (_super) {
__extends(Parameter30RecordList, _super);
function Parameter30RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter30RecordList.RecordType = ACCOUNTINFO_MBPModel.Parameter30Record;
return Parameter30RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Parameter30RecordList = Parameter30RecordList;

});
define("ACCOUNTINFO_MBP.model$Loyalty2List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Loyalty2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Loyalty2List = (function (_super) {
__extends(Loyalty2List, _super);
function Loyalty2List(defaults) {
_super.apply(this, arguments);
}
Loyalty2List.RecordType = CON_BILLINGModel.Loyalty2Rec;
return Loyalty2List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Loyalty2List = Loyalty2List;

});
define("ACCOUNTINFO_MBP.model$Contract_out9Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Contract_out9Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contract_out9Record = (function (_super) {
__extends(Contract_out9Record, _super);
function Contract_out9Record(defaults) {
_super.apply(this, arguments);
}
Contract_out9Record.attributesToDeclare = function () {
return [
this.attr("Contract_out9", "contract_out9Attr", "Contract_out9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Contract_out9Rec());
}, CON_BILLINGModel.Contract_out9Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contract_out9Record.fromStructure = function (str) {
return new Contract_out9Record(new Contract_out9Record.RecordClass({
contract_out9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contract_out9Record.IsAnonymousRecord = true;
Contract_out9Record.UniqueId = "d968d65e-ddd3-d5d8-b6a0-d14c64a1eac3";
Contract_out9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contract_out9Record.init();
return Contract_out9Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Contract_out9Record = Contract_out9Record;

});
define("ACCOUNTINFO_MBP.model$SalesForce2Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$SalesForce2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var SalesForce2Record = (function (_super) {
__extends(SalesForce2Record, _super);
function SalesForce2Record(defaults) {
_super.apply(this, arguments);
}
SalesForce2Record.attributesToDeclare = function () {
return [
this.attr("SalesForce2", "salesForce2Attr", "SalesForce2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.SalesForce2Rec());
}, CON_BILLINGModel.SalesForce2Rec)
].concat(_super.attributesToDeclare.call(this));
};
SalesForce2Record.fromStructure = function (str) {
return new SalesForce2Record(new SalesForce2Record.RecordClass({
salesForce2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SalesForce2Record.IsAnonymousRecord = true;
SalesForce2Record.UniqueId = "b51802d7-49eb-9527-1d9f-fa64aa74da4c";
SalesForce2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
SalesForce2Record.init();
return SalesForce2Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.SalesForce2Record = SalesForce2Record;

});
define("ACCOUNTINFO_MBP.model$Loyalty2Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Loyalty2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Loyalty2Record = (function (_super) {
__extends(Loyalty2Record, _super);
function Loyalty2Record(defaults) {
_super.apply(this, arguments);
}
Loyalty2Record.attributesToDeclare = function () {
return [
this.attr("Loyalty2", "loyalty2Attr", "Loyalty2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.Loyalty2Rec());
}, CON_BILLINGModel.Loyalty2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Loyalty2Record.fromStructure = function (str) {
return new Loyalty2Record(new Loyalty2Record.RecordClass({
loyalty2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Loyalty2Record.IsAnonymousRecord = true;
Loyalty2Record.UniqueId = "84d574f5-b646-c634-e3d9-f90c81f6f149";
Loyalty2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Loyalty2Record.init();
return Loyalty2Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Loyalty2Record = Loyalty2Record;

});
define("ACCOUNTINFO_MBP.model$CustomerAccount_out6Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$CustomerAccount_out6Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CustomerAccount_out6Record = (function (_super) {
__extends(CustomerAccount_out6Record, _super);
function CustomerAccount_out6Record(defaults) {
_super.apply(this, arguments);
}
CustomerAccount_out6Record.attributesToDeclare = function () {
return [
this.attr("CustomerAccount_out6", "customerAccount_out6Attr", "CustomerAccount_out6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.CustomerAccount_out6Rec());
}, CON_BILLINGModel.CustomerAccount_out6Rec)
].concat(_super.attributesToDeclare.call(this));
};
CustomerAccount_out6Record.fromStructure = function (str) {
return new CustomerAccount_out6Record(new CustomerAccount_out6Record.RecordClass({
customerAccount_out6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CustomerAccount_out6Record.IsAnonymousRecord = true;
CustomerAccount_out6Record.UniqueId = "3eee56ba-a04f-b37f-e853-aa467a933547";
CustomerAccount_out6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CustomerAccount_out6Record.init();
return CustomerAccount_out6Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.CustomerAccount_out6Record = CustomerAccount_out6Record;

});
define("ACCOUNTINFO_MBP.model$Contract_out9RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Contract_out9Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contract_out9RecordList = (function (_super) {
__extends(Contract_out9RecordList, _super);
function Contract_out9RecordList(defaults) {
_super.apply(this, arguments);
}
Contract_out9RecordList.RecordType = ACCOUNTINFO_MBPModel.Contract_out9Record;
return Contract_out9RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Contract_out9RecordList = Contract_out9RecordList;

});
define("ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_CACHE_SERVICERec = (function (_super) {
__extends(STR_CACHE_SERVICERec, _super);
function STR_CACHE_SERVICERec(defaults) {
_super.apply(this, arguments);
}
STR_CACHE_SERVICERec.attributesToDeclare = function () {
return [
this.attr("AppConfig", "appConfigAttr", "AppConfig", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NOSCard", "nOSCardAttr", "NOSCard", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PINPUK", "pINPUKAttr", "PINPUK", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceConfig", "balanceConfigAttr", "BalanceConfig", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BalanceInfo", "balanceInfoAttr", "BalanceInfo", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HomepageBalanceInfo", "homepageBalanceInfoAttr", "HomepageBalanceInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_CACHE_SERVICERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_CACHE_SERVICERec.init();
return STR_CACHE_SERVICERec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERec = STR_CACHE_SERVICERec;

});
define("ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_CACHE_SERVICERecord = (function (_super) {
__extends(STR_CACHE_SERVICERecord, _super);
function STR_CACHE_SERVICERecord(defaults) {
_super.apply(this, arguments);
}
STR_CACHE_SERVICERecord.attributesToDeclare = function () {
return [
this.attr("STR_CACHE_SERVICE", "sTR_CACHE_SERVICEAttr", "STR_CACHE_SERVICE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERec());
}, ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERec)
].concat(_super.attributesToDeclare.call(this));
};
STR_CACHE_SERVICERecord.fromStructure = function (str) {
return new STR_CACHE_SERVICERecord(new STR_CACHE_SERVICERecord.RecordClass({
sTR_CACHE_SERVICEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_CACHE_SERVICERecord.IsAnonymousRecord = true;
STR_CACHE_SERVICERecord.UniqueId = "6ed2430e-9496-a036-4848-344e9865ab79";
STR_CACHE_SERVICERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_CACHE_SERVICERecord.init();
return STR_CACHE_SERVICERecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERecord = STR_CACHE_SERVICERecord;

});
define("ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_CACHE_SERVICERecordList = (function (_super) {
__extends(STR_CACHE_SERVICERecordList, _super);
function STR_CACHE_SERVICERecordList(defaults) {
_super.apply(this, arguments);
}
STR_CACHE_SERVICERecordList.RecordType = ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERecord;
return STR_CACHE_SERVICERecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERecordList = STR_CACHE_SERVICERecordList;

});
define("ACCOUNTINFO_MBP.model$AccessData25RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$AccessData25Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var AccessData25RecordList = (function (_super) {
__extends(AccessData25RecordList, _super);
function AccessData25RecordList(defaults) {
_super.apply(this, arguments);
}
AccessData25RecordList.RecordType = ACCOUNTINFO_MBPModel.AccessData25Record;
return AccessData25RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.AccessData25RecordList = AccessData25RecordList;

});
define("ACCOUNTINFO_MBP.model$LoyaltyTransactionRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$LoyaltyTransactionRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyTransactionRecordList = (function (_super) {
__extends(LoyaltyTransactionRecordList, _super);
function LoyaltyTransactionRecordList(defaults) {
_super.apply(this, arguments);
}
LoyaltyTransactionRecordList.RecordType = ACCOUNTINFO_MBPModel.LoyaltyTransactionRecord;
return LoyaltyTransactionRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.LoyaltyTransactionRecordList = LoyaltyTransactionRecordList;

});
define("ACCOUNTINFO_MBP.model$Contract_out9List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Contract_out9Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contract_out9List = (function (_super) {
__extends(Contract_out9List, _super);
function Contract_out9List(defaults) {
_super.apply(this, arguments);
}
Contract_out9List.RecordType = CON_BILLINGModel.Contract_out9Rec;
return Contract_out9List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Contract_out9List = Contract_out9List;

});
define("ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CLIENT_CARDRec = (function (_super) {
__extends(Local_CLIENT_CARDRec, _super);
function Local_CLIENT_CARDRec(defaults) {
_super.apply(this, arguments);
}
Local_CLIENT_CARDRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("ClientName", "clientNameAttr", "ClientName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CardNumber", "cardNumberAttr", "CardNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UserID", "userIDAttr", "UserID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientNumber", "clientNumberAttr", "ClientNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UpdateDateTime", "updateDateTimeAttr", "UpdateDateTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("IsDelegated", "isDelegatedAttr", "IsDelegated", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CanBeDelegated", "canBeDelegatedAttr", "CanBeDelegated", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("RegisterDateTime", "registerDateTimeAttr", "RegisterDateTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("QRCardID", "qRCardIDAttr", "QRCardID", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("AccountId", "accountIdAttr", "AccountId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("StatusCode", "statusCodeAttr", "StatusCode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Local_CLIENT_CARDRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Local_CLIENT_CARDRec.init();
return Local_CLIENT_CARDRec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec = Local_CLIENT_CARDRec;

});
define("ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CLIENT_CARDRecord = (function (_super) {
__extends(Local_CLIENT_CARDRecord, _super);
function Local_CLIENT_CARDRecord(defaults) {
_super.apply(this, arguments);
}
Local_CLIENT_CARDRecord.attributesToDeclare = function () {
return [
this.attr("Local_CLIENT_CARD", "local_CLIENT_CARDAttr", "Local_CLIENT_CARD", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec());
}, ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_CLIENT_CARDRecord.fromStructure = function (str) {
return new Local_CLIENT_CARDRecord(new Local_CLIENT_CARDRecord.RecordClass({
local_CLIENT_CARDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_CLIENT_CARDRecord.IsAnonymousRecord = true;
Local_CLIENT_CARDRecord.UniqueId = "55117c92-5fee-8a2f-6199-e0a692054851";
Local_CLIENT_CARDRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_CLIENT_CARDRecord.init();
return Local_CLIENT_CARDRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecord = Local_CLIENT_CARDRecord;

});
define("ACCOUNTINFO_MBP.model$Local_SIM_INFORec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_SIM_INFORec = (function (_super) {
__extends(Local_SIM_INFORec, _super);
function Local_SIM_INFORec(defaults) {
_super.apply(this, arguments);
}
Local_SIM_INFORec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("ServiceId", "serviceIdAttr", "ServiceId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SIMNumber", "sIMNumberAttr", "SIMNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PIN", "pINAttr", "PIN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PUK", "pUKAttr", "PUK", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Local_SIM_INFORec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Local_SIM_INFORec.init();
return Local_SIM_INFORec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_SIM_INFORec = Local_SIM_INFORec;

});
define("ACCOUNTINFO_MBP.model$Local_SIM_INFORecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_SIM_INFORec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_SIM_INFORecord = (function (_super) {
__extends(Local_SIM_INFORecord, _super);
function Local_SIM_INFORecord(defaults) {
_super.apply(this, arguments);
}
Local_SIM_INFORecord.attributesToDeclare = function () {
return [
this.attr("Local_SIM_INFO", "local_SIM_INFOAttr", "Local_SIM_INFO", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.Local_SIM_INFORec());
}, ACCOUNTINFO_MBPModel.Local_SIM_INFORec)
].concat(_super.attributesToDeclare.call(this));
};
Local_SIM_INFORecord.fromStructure = function (str) {
return new Local_SIM_INFORecord(new Local_SIM_INFORecord.RecordClass({
local_SIM_INFOAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_SIM_INFORecord.IsAnonymousRecord = true;
Local_SIM_INFORecord.UniqueId = "7dc787d8-1879-5ef0-cc2f-945dfde649ed";
Local_SIM_INFORecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_SIM_INFORecord.init();
return Local_SIM_INFORecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_SIM_INFORecord = Local_SIM_INFORecord;

});
define("ACCOUNTINFO_MBP.model$Local_SIM_INFORecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_SIM_INFORecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_SIM_INFORecordList = (function (_super) {
__extends(Local_SIM_INFORecordList, _super);
function Local_SIM_INFORecordList(defaults) {
_super.apply(this, arguments);
}
Local_SIM_INFORecordList.RecordType = ACCOUNTINFO_MBPModel.Local_SIM_INFORecord;
return Local_SIM_INFORecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_SIM_INFORecordList = Local_SIM_INFORecordList;

});
define("ACCOUNTINFO_MBP.model$CustomerAccount_out6List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$CustomerAccount_out6Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CustomerAccount_out6List = (function (_super) {
__extends(CustomerAccount_out6List, _super);
function CustomerAccount_out6List(defaults) {
_super.apply(this, arguments);
}
CustomerAccount_out6List.RecordType = CON_BILLINGModel.CustomerAccount_out6Rec;
return CustomerAccount_out6List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.CustomerAccount_out6List = CustomerAccount_out6List;

});
define("ACCOUNTINFO_MBP.model$Parameter31List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Parameter31Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Parameter31List = (function (_super) {
__extends(Parameter31List, _super);
function Parameter31List(defaults) {
_super.apply(this, arguments);
}
Parameter31List.RecordType = CON_BILLINGModel.Parameter31Rec;
return Parameter31List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Parameter31List = Parameter31List;

});
define("ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CACHE_CONTROL_SERVICESRecord = (function (_super) {
__extends(Local_CACHE_CONTROL_SERVICESRecord, _super);
function Local_CACHE_CONTROL_SERVICESRecord(defaults) {
_super.apply(this, arguments);
}
Local_CACHE_CONTROL_SERVICESRecord.attributesToDeclare = function () {
return [
this.attr("Local_CACHE_CONTROL_SERVICES", "local_CACHE_CONTROL_SERVICESAttr", "Local_CACHE_CONTROL_SERVICES", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRec());
}, ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_CACHE_CONTROL_SERVICESRecord.fromStructure = function (str) {
return new Local_CACHE_CONTROL_SERVICESRecord(new Local_CACHE_CONTROL_SERVICESRecord.RecordClass({
local_CACHE_CONTROL_SERVICESAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_CACHE_CONTROL_SERVICESRecord.IsAnonymousRecord = true;
Local_CACHE_CONTROL_SERVICESRecord.UniqueId = "91f141d4-bafa-10ce-a596-b090115b9a76";
Local_CACHE_CONTROL_SERVICESRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_CACHE_CONTROL_SERVICESRecord.init();
return Local_CACHE_CONTROL_SERVICESRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecord = Local_CACHE_CONTROL_SERVICESRecord;

});
define("ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CACHE_CONTROL_SERVICESRecordList = (function (_super) {
__extends(Local_CACHE_CONTROL_SERVICESRecordList, _super);
function Local_CACHE_CONTROL_SERVICESRecordList(defaults) {
_super.apply(this, arguments);
}
Local_CACHE_CONTROL_SERVICESRecordList.RecordType = ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecord;
return Local_CACHE_CONTROL_SERVICESRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecordList = Local_CACHE_CONTROL_SERVICESRecordList;

});
define("ACCOUNTINFO_MBP.model$LoyaltyPointsRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$LoyaltyPointsRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyPointsRecordList = (function (_super) {
__extends(LoyaltyPointsRecordList, _super);
function LoyaltyPointsRecordList(defaults) {
_super.apply(this, arguments);
}
LoyaltyPointsRecordList.RecordType = ACCOUNTINFO_MBPModel.LoyaltyPointsRecord;
return LoyaltyPointsRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.LoyaltyPointsRecordList = LoyaltyPointsRecordList;

});
define("ACCOUNTINFO_MBP.model$eCodes25List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$eCodes25Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var eCodes25List = (function (_super) {
__extends(eCodes25List, _super);
function eCodes25List(defaults) {
_super.apply(this, arguments);
}
eCodes25List.RecordType = CON_BILLINGModel.eCodes25Rec;
return eCodes25List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.eCodes25List = eCodes25List;

});
define("ACCOUNTINFO_MBP.model$TextRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$TextRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.RecordType = ACCOUNTINFO_MBPModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.TextRecordList = TextRecordList;

});
define("ACCOUNTINFO_MBP.model$Loyalty2RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Loyalty2Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Loyalty2RecordList = (function (_super) {
__extends(Loyalty2RecordList, _super);
function Loyalty2RecordList(defaults) {
_super.apply(this, arguments);
}
Loyalty2RecordList.RecordType = ACCOUNTINFO_MBPModel.Loyalty2Record;
return Loyalty2RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Loyalty2RecordList = Loyalty2RecordList;

});
define("ACCOUNTINFO_MBP.model$Contract_out_2List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Contract_out_2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Contract_out_2List = (function (_super) {
__extends(Contract_out_2List, _super);
function Contract_out_2List(defaults) {
_super.apply(this, arguments);
}
Contract_out_2List.RecordType = CON_BILLINGModel.Contract_out_2Rec;
return Contract_out_2List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Contract_out_2List = Contract_out_2List;

});
define("ACCOUNTINFO_MBP.model$STR_CLIENT_CARDRecord", ["exports", "OutSystems", "ACCOUNTINFO_BP.model", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_BP.model$STR_CLIENT_CARDRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$ACCOUNTINFO_BP"], function (exports, OutSystems, ACCOUNTINFO_BPModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_CLIENT_CARDRecord = (function (_super) {
__extends(STR_CLIENT_CARDRecord, _super);
function STR_CLIENT_CARDRecord(defaults) {
_super.apply(this, arguments);
}
STR_CLIENT_CARDRecord.attributesToDeclare = function () {
return [
this.attr("STR_CLIENT_CARD", "sTR_CLIENT_CARDAttr", "STR_CLIENT_CARD", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_BPModel.STR_CLIENT_CARDRec());
}, ACCOUNTINFO_BPModel.STR_CLIENT_CARDRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_CLIENT_CARDRecord.fromStructure = function (str) {
return new STR_CLIENT_CARDRecord(new STR_CLIENT_CARDRecord.RecordClass({
sTR_CLIENT_CARDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_CLIENT_CARDRecord.IsAnonymousRecord = true;
STR_CLIENT_CARDRecord.UniqueId = "ec108683-8704-8494-69ab-6afc4bf64f0d";
STR_CLIENT_CARDRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_CLIENT_CARDRecord.init();
return STR_CLIENT_CARDRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.STR_CLIENT_CARDRecord = STR_CLIENT_CARDRecord;

});
define("ACCOUNTINFO_MBP.model$STR_CLIENT_CARDRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_CLIENT_CARDRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_CLIENT_CARDRecordList = (function (_super) {
__extends(STR_CLIENT_CARDRecordList, _super);
function STR_CLIENT_CARDRecordList(defaults) {
_super.apply(this, arguments);
}
STR_CLIENT_CARDRecordList.RecordType = ACCOUNTINFO_MBPModel.STR_CLIENT_CARDRecord;
return STR_CLIENT_CARDRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_CLIENT_CARDRecordList = STR_CLIENT_CARDRecordList;

});
define("ACCOUNTINFO_MBP.model$Status25List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Status25Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Status25List = (function (_super) {
__extends(Status25List, _super);
function Status25List(defaults) {
_super.apply(this, arguments);
}
Status25List.RecordType = CON_BILLINGModel.Status25Rec;
return Status25List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Status25List = Status25List;

});
define("ACCOUNTINFO_MBP.model$LoyaltyPurchaseRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$LoyaltyPurchaseRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyPurchaseRecordList = (function (_super) {
__extends(LoyaltyPurchaseRecordList, _super);
function LoyaltyPurchaseRecordList(defaults) {
_super.apply(this, arguments);
}
LoyaltyPurchaseRecordList.RecordType = ACCOUNTINFO_MBPModel.LoyaltyPurchaseRecord;
return LoyaltyPurchaseRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.LoyaltyPurchaseRecordList = LoyaltyPurchaseRecordList;

});
define("ACCOUNTINFO_MBP.model$STR_FPRecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_FPRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_FPRecord = (function (_super) {
__extends(STR_FPRecord, _super);
function STR_FPRecord(defaults) {
_super.apply(this, arguments);
}
STR_FPRecord.attributesToDeclare = function () {
return [
this.attr("STR_FP", "sTR_FPAttr", "STR_FP", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.STR_FPRec());
}, ACCOUNTINFO_MBPModel.STR_FPRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_FPRecord.fromStructure = function (str) {
return new STR_FPRecord(new STR_FPRecord.RecordClass({
sTR_FPAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_FPRecord.IsAnonymousRecord = true;
STR_FPRecord.UniqueId = "b4defd76-f5eb-8925-5240-901dbb0261b2";
STR_FPRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_FPRecord.init();
return STR_FPRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.STR_FPRecord = STR_FPRecord;

});
define("ACCOUNTINFO_MBP.model$STR_FPRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_FPRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_FPRecordList = (function (_super) {
__extends(STR_FPRecordList, _super);
function STR_FPRecordList(defaults) {
_super.apply(this, arguments);
}
STR_FPRecordList.RecordType = ACCOUNTINFO_MBPModel.STR_FPRecord;
return STR_FPRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_FPRecordList = STR_FPRecordList;

});
define("ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_LOYALTY_POINTSRec = (function (_super) {
__extends(Local_LOYALTY_POINTSRec, _super);
function Local_LOYALTY_POINTSRec(defaults) {
_super.apply(this, arguments);
}
Local_LOYALTY_POINTSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("CustCode_ClientNumber", "custCode_ClientNumberAttr", "CustCode_ClientNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsError", "isErrorAttr", "IsError", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsEligible", "isEligibleAttr", "IsEligible", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsMissingCustInfo", "isMissingCustInfoAttr", "IsMissingCustInfo", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ShowInfo", "showInfoAttr", "ShowInfo", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Amount", "amountAttr", "Amount", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("ExpirationDate", "expirationDateAttr", "ExpirationDate", false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("ExpiringAmount", "expiringAmountAttr", "ExpiringAmount", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Local_LOYALTY_POINTSRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Local_LOYALTY_POINTSRec.init();
return Local_LOYALTY_POINTSRec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRec = Local_LOYALTY_POINTSRec;

});
define("ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_LOYALTY_POINTSRecord = (function (_super) {
__extends(Local_LOYALTY_POINTSRecord, _super);
function Local_LOYALTY_POINTSRecord(defaults) {
_super.apply(this, arguments);
}
Local_LOYALTY_POINTSRecord.attributesToDeclare = function () {
return [
this.attr("Local_LOYALTY_POINTS", "local_LOYALTY_POINTSAttr", "Local_LOYALTY_POINTS", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRec());
}, ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_LOYALTY_POINTSRecord.fromStructure = function (str) {
return new Local_LOYALTY_POINTSRecord(new Local_LOYALTY_POINTSRecord.RecordClass({
local_LOYALTY_POINTSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_LOYALTY_POINTSRecord.IsAnonymousRecord = true;
Local_LOYALTY_POINTSRecord.UniqueId = "85e767b6-1027-419b-1a62-2b682633e531";
Local_LOYALTY_POINTSRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_LOYALTY_POINTSRecord.init();
return Local_LOYALTY_POINTSRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecord = Local_LOYALTY_POINTSRecord;

});
define("ACCOUNTINFO_MBP.model$LoyaltyPointsList", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$LoyaltyPointsRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyPointsList = (function (_super) {
__extends(LoyaltyPointsList, _super);
function LoyaltyPointsList(defaults) {
_super.apply(this, arguments);
}
LoyaltyPointsList.RecordType = CON_BILLINGModel.LoyaltyPointsRec;
return LoyaltyPointsList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.LoyaltyPointsList = LoyaltyPointsList;

});
define("ACCOUNTINFO_MBP.model$AccessData25List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$AccessData25Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var AccessData25List = (function (_super) {
__extends(AccessData25List, _super);
function AccessData25List(defaults) {
_super.apply(this, arguments);
}
AccessData25List.RecordType = CON_BILLINGModel.AccessData25Rec;
return AccessData25List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.AccessData25List = AccessData25List;

});
define("ACCOUNTINFO_MBP.model$CPMList", ["exports", "OutSystems", "CON_BSCS.model", "ACCOUNTINFO_MBP.model", "CON_BSCS.model$CPMRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BSCS"], function (exports, OutSystems, CON_BSCSModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CPMList = (function (_super) {
__extends(CPMList, _super);
function CPMList(defaults) {
_super.apply(this, arguments);
}
CPMList.RecordType = CON_BSCSModel.CPMRec;
return CPMList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.CPMList = CPMList;

});
define("ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CACHE_CONTROL_SERVICESList = (function (_super) {
__extends(Local_CACHE_CONTROL_SERVICESList, _super);
function Local_CACHE_CONTROL_SERVICESList(defaults) {
_super.apply(this, arguments);
}
Local_CACHE_CONTROL_SERVICESList.RecordType = ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRec;
return Local_CACHE_CONTROL_SERVICESList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESList = Local_CACHE_CONTROL_SERVICESList;

});
define("ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_LOYALTY_POINTSList = (function (_super) {
__extends(Local_LOYALTY_POINTSList, _super);
function Local_LOYALTY_POINTSList(defaults) {
_super.apply(this, arguments);
}
Local_LOYALTY_POINTSList.RecordType = ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRec;
return Local_LOYALTY_POINTSList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSList = Local_LOYALTY_POINTSList;

});
define("ACCOUNTINFO_MBP.model$Identification_out2List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Identification_out2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Identification_out2List = (function (_super) {
__extends(Identification_out2List, _super);
function Identification_out2List(defaults) {
_super.apply(this, arguments);
}
Identification_out2List.RecordType = CON_BILLINGModel.Identification_out2Rec;
return Identification_out2List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Identification_out2List = Identification_out2List;

});
define("ACCOUNTINFO_MBP.model$HistoryStep24List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$HistoryStep24Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var HistoryStep24List = (function (_super) {
__extends(HistoryStep24List, _super);
function HistoryStep24List(defaults) {
_super.apply(this, arguments);
}
HistoryStep24List.RecordType = CON_BILLINGModel.HistoryStep24Rec;
return HistoryStep24List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.HistoryStep24List = HistoryStep24List;

});
define("ACCOUNTINFO_MBP.model$LoyaltyPurchaseList", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$LoyaltyPurchaseRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyPurchaseList = (function (_super) {
__extends(LoyaltyPurchaseList, _super);
function LoyaltyPurchaseList(defaults) {
_super.apply(this, arguments);
}
LoyaltyPurchaseList.RecordType = CON_BILLINGModel.LoyaltyPurchaseRec;
return LoyaltyPurchaseList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.LoyaltyPurchaseList = LoyaltyPurchaseList;

});
define("ACCOUNTINFO_MBP.model$Header24RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Header24Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Header24RecordList = (function (_super) {
__extends(Header24RecordList, _super);
function Header24RecordList(defaults) {
_super.apply(this, arguments);
}
Header24RecordList.RecordType = ACCOUNTINFO_MBPModel.Header24Record;
return Header24RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Header24RecordList = Header24RecordList;

});
define("ACCOUNTINFO_MBP.model$Local_QR_CARDRec", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_QR_CARDRec = (function (_super) {
__extends(Local_QR_CARDRec, _super);
function Local_QR_CARDRec(defaults) {
_super.apply(this, arguments);
}
Local_QR_CARDRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Filename", "filenameAttr", "Filename", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Binary", "binaryAttr", "Binary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
Local_QR_CARDRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
var result = this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
result = result.set("binaryAttr", ACCOUNTINFO_MBPModel.entities.Local_QR_CARD.getBinary("Binary", result.get("idAttr"), result.get("binaryAttr")));
return result;
};
Local_QR_CARDRec.init();
return Local_QR_CARDRec;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_QR_CARDRec = Local_QR_CARDRec;

});
define("ACCOUNTINFO_MBP.model$Local_QR_CARDList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_QR_CARDRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_QR_CARDList = (function (_super) {
__extends(Local_QR_CARDList, _super);
function Local_QR_CARDList(defaults) {
_super.apply(this, arguments);
}
Local_QR_CARDList.RecordType = ACCOUNTINFO_MBPModel.Local_QR_CARDRec;
return Local_QR_CARDList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_QR_CARDList = Local_QR_CARDList;

});
define("ACCOUNTINFO_MBP.model$SalesForce2RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$SalesForce2Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var SalesForce2RecordList = (function (_super) {
__extends(SalesForce2RecordList, _super);
function SalesForce2RecordList(defaults) {
_super.apply(this, arguments);
}
SalesForce2RecordList.RecordType = ACCOUNTINFO_MBPModel.SalesForce2Record;
return SalesForce2RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.SalesForce2RecordList = SalesForce2RecordList;

});
define("ACCOUNTINFO_MBP.model$STR_CACHE_SERVICEList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var STR_CACHE_SERVICEList = (function (_super) {
__extends(STR_CACHE_SERVICEList, _super);
function STR_CACHE_SERVICEList(defaults) {
_super.apply(this, arguments);
}
STR_CACHE_SERVICEList.RecordType = ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERec;
return STR_CACHE_SERVICEList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.STR_CACHE_SERVICEList = STR_CACHE_SERVICEList;

});
define("ACCOUNTINFO_MBP.model$LoyaltyTransactionList", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$LoyaltyTransactionRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var LoyaltyTransactionList = (function (_super) {
__extends(LoyaltyTransactionList, _super);
function LoyaltyTransactionList(defaults) {
_super.apply(this, arguments);
}
LoyaltyTransactionList.RecordType = CON_BILLINGModel.LoyaltyTransactionRec;
return LoyaltyTransactionList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.LoyaltyTransactionList = LoyaltyTransactionList;

});
define("ACCOUNTINFO_MBP.model$Invoice7List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Invoice7Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Invoice7List = (function (_super) {
__extends(Invoice7List, _super);
function Invoice7List(defaults) {
_super.apply(this, arguments);
}
Invoice7List.RecordType = CON_BILLINGModel.Invoice7Rec;
return Invoice7List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Invoice7List = Invoice7List;

});
define("ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CLIENT_CARDRecordList = (function (_super) {
__extends(Local_CLIENT_CARDRecordList, _super);
function Local_CLIENT_CARDRecordList(defaults) {
_super.apply(this, arguments);
}
Local_CLIENT_CARDRecordList.RecordType = ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecord;
return Local_CLIENT_CARDRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList = Local_CLIENT_CARDRecordList;

});
define("ACCOUNTINFO_MBP.model$CPMRecord", ["exports", "OutSystems", "CON_BSCS.model", "ACCOUNTINFO_MBP.model", "CON_BSCS.model$CPMRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BSCS"], function (exports, OutSystems, CON_BSCSModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CPMRecord = (function (_super) {
__extends(CPMRecord, _super);
function CPMRecord(defaults) {
_super.apply(this, arguments);
}
CPMRecord.attributesToDeclare = function () {
return [
this.attr("CPM", "cPMAttr", "CPM", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BSCSModel.CPMRec());
}, CON_BSCSModel.CPMRec)
].concat(_super.attributesToDeclare.call(this));
};
CPMRecord.fromStructure = function (str) {
return new CPMRecord(new CPMRecord.RecordClass({
cPMAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CPMRecord.IsAnonymousRecord = true;
CPMRecord.UniqueId = "bdbc0bb1-a2c0-fd88-0214-aee0eff1374d";
CPMRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CPMRecord.init();
return CPMRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.CPMRecord = CPMRecord;

});
define("ACCOUNTINFO_MBP.model$Local_QR_CARDRecord", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_QR_CARDRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_QR_CARDRecord = (function (_super) {
__extends(Local_QR_CARDRecord, _super);
function Local_QR_CARDRecord(defaults) {
_super.apply(this, arguments);
}
Local_QR_CARDRecord.attributesToDeclare = function () {
return [
this.attr("Local_QR_CARD", "local_QR_CARDAttr", "Local_QR_CARD", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ACCOUNTINFO_MBPModel.Local_QR_CARDRec());
}, ACCOUNTINFO_MBPModel.Local_QR_CARDRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_QR_CARDRecord.fromStructure = function (str) {
return new Local_QR_CARDRecord(new Local_QR_CARDRecord.RecordClass({
local_QR_CARDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_QR_CARDRecord.IsAnonymousRecord = true;
Local_QR_CARDRecord.UniqueId = "e4fe8328-1511-1202-b5ee-ea97026e8e0c";
Local_QR_CARDRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_QR_CARDRecord.init();
return Local_QR_CARDRecord;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.Local_QR_CARDRecord = Local_QR_CARDRecord;

});
define("ACCOUNTINFO_MBP.model$Local_QR_CARDRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_QR_CARDRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_QR_CARDRecordList = (function (_super) {
__extends(Local_QR_CARDRecordList, _super);
function Local_QR_CARDRecordList(defaults) {
_super.apply(this, arguments);
}
Local_QR_CARDRecordList.RecordType = ACCOUNTINFO_MBPModel.Local_QR_CARDRecord;
return Local_QR_CARDRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_QR_CARDRecordList = Local_QR_CARDRecordList;

});
define("ACCOUNTINFO_MBP.model$Local_CLIENT_CARDList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_CLIENT_CARDList = (function (_super) {
__extends(Local_CLIENT_CARDList, _super);
function Local_CLIENT_CARDList(defaults) {
_super.apply(this, arguments);
}
Local_CLIENT_CARDList.RecordType = ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec;
return Local_CLIENT_CARDList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_CLIENT_CARDList = Local_CLIENT_CARDList;

});
define("ACCOUNTINFO_MBP.model$Local_SIM_INFOList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_SIM_INFORec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_SIM_INFOList = (function (_super) {
__extends(Local_SIM_INFOList, _super);
function Local_SIM_INFOList(defaults) {
_super.apply(this, arguments);
}
Local_SIM_INFOList.RecordType = ACCOUNTINFO_MBPModel.Local_SIM_INFORec;
return Local_SIM_INFOList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_SIM_INFOList = Local_SIM_INFOList;

});
define("ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Local_LOYALTY_POINTSRecordList = (function (_super) {
__extends(Local_LOYALTY_POINTSRecordList, _super);
function Local_LOYALTY_POINTSRecordList(defaults) {
_super.apply(this, arguments);
}
Local_LOYALTY_POINTSRecordList.RecordType = ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecord;
return Local_LOYALTY_POINTSRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecordList = Local_LOYALTY_POINTSRecordList;

});
define("ACCOUNTINFO_MBP.model$CampaignRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$CampaignRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CampaignRecordList = (function (_super) {
__extends(CampaignRecordList, _super);
function CampaignRecordList(defaults) {
_super.apply(this, arguments);
}
CampaignRecordList.RecordType = ACCOUNTINFO_MBPModel.CampaignRecord;
return CampaignRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.CampaignRecordList = CampaignRecordList;

});
define("ACCOUNTINFO_MBP.model$SalesForce2List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$SalesForce2Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var SalesForce2List = (function (_super) {
__extends(SalesForce2List, _super);
function SalesForce2List(defaults) {
_super.apply(this, arguments);
}
SalesForce2List.RecordType = CON_BILLINGModel.SalesForce2Rec;
return SalesForce2List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.SalesForce2List = SalesForce2List;

});
define("ACCOUNTINFO_MBP.model$CampaignList", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$CampaignRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CampaignList = (function (_super) {
__extends(CampaignList, _super);
function CampaignList(defaults) {
_super.apply(this, arguments);
}
CampaignList.RecordType = CON_BILLINGModel.CampaignRec;
return CampaignList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.CampaignList = CampaignList;

});
define("ACCOUNTINFO_MBP.model$CustomerAccount_out6RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$CustomerAccount_out6Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CustomerAccount_out6RecordList = (function (_super) {
__extends(CustomerAccount_out6RecordList, _super);
function CustomerAccount_out6RecordList(defaults) {
_super.apply(this, arguments);
}
CustomerAccount_out6RecordList.RecordType = ACCOUNTINFO_MBPModel.CustomerAccount_out6Record;
return CustomerAccount_out6RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.CustomerAccount_out6RecordList = CustomerAccount_out6RecordList;

});
define("ACCOUNTINFO_MBP.model$outputMessage24Record", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$outputMessage24Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var outputMessage24Record = (function (_super) {
__extends(outputMessage24Record, _super);
function outputMessage24Record(defaults) {
_super.apply(this, arguments);
}
outputMessage24Record.attributesToDeclare = function () {
return [
this.attr("outputMessage24", "outputMessage24Attr", "outputMessage24", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_BILLINGModel.outputMessage24Rec());
}, CON_BILLINGModel.outputMessage24Rec)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage24Record.fromStructure = function (str) {
return new outputMessage24Record(new outputMessage24Record.RecordClass({
outputMessage24Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
outputMessage24Record.IsAnonymousRecord = true;
outputMessage24Record.UniqueId = "e7443e53-b5fd-2c33-dacc-1426e21db475";
outputMessage24Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
outputMessage24Record.init();
return outputMessage24Record;
})(OS.DataTypes.GenericRecord);
ACCOUNTINFO_MBPModel.outputMessage24Record = outputMessage24Record;

});
define("ACCOUNTINFO_MBP.model$Parameter30List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Parameter30Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Parameter30List = (function (_super) {
__extends(Parameter30List, _super);
function Parameter30List(defaults) {
_super.apply(this, arguments);
}
Parameter30List.RecordType = CON_BILLINGModel.Parameter30Rec;
return Parameter30List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Parameter30List = Parameter30List;

});
define("ACCOUNTINFO_MBP.model$CPMRecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$CPMRecord"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var CPMRecordList = (function (_super) {
__extends(CPMRecordList, _super);
function CPMRecordList(defaults) {
_super.apply(this, arguments);
}
CPMRecordList.RecordType = ACCOUNTINFO_MBPModel.CPMRecord;
return CPMRecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.CPMRecordList = CPMRecordList;

});
define("ACCOUNTINFO_MBP.model$outputMessage24RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$outputMessage24Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var outputMessage24RecordList = (function (_super) {
__extends(outputMessage24RecordList, _super);
function outputMessage24RecordList(defaults) {
_super.apply(this, arguments);
}
outputMessage24RecordList.RecordType = ACCOUNTINFO_MBPModel.outputMessage24Record;
return outputMessage24RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.outputMessage24RecordList = outputMessage24RecordList;

});
define("ACCOUNTINFO_MBP.model$outputMessage24List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$outputMessage24Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var outputMessage24List = (function (_super) {
__extends(outputMessage24List, _super);
function outputMessage24List(defaults) {
_super.apply(this, arguments);
}
outputMessage24List.RecordType = CON_BILLINGModel.outputMessage24Rec;
return outputMessage24List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.outputMessage24List = outputMessage24List;

});
define("ACCOUNTINFO_MBP.model$Identification_out2RecordList", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Identification_out2Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Identification_out2RecordList = (function (_super) {
__extends(Identification_out2RecordList, _super);
function Identification_out2RecordList(defaults) {
_super.apply(this, arguments);
}
Identification_out2RecordList.RecordType = ACCOUNTINFO_MBPModel.Identification_out2Record;
return Identification_out2RecordList;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Identification_out2RecordList = Identification_out2RecordList;

});
define("ACCOUNTINFO_MBP.model$Header24List", ["exports", "OutSystems", "CON_BILLING.model", "ACCOUNTINFO_MBP.model", "CON_BILLING.model$Header24Rec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BILLING"], function (exports, OutSystems, CON_BILLINGModel, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var Header24List = (function (_super) {
__extends(Header24List, _super);
function Header24List(defaults) {
_super.apply(this, arguments);
}
Header24List.RecordType = CON_BILLINGModel.Header24Rec;
return Header24List;
})(OS.DataTypes.GenericRecordList);
ACCOUNTINFO_MBPModel.Header24List = Header24List;

});
define("ACCOUNTINFO_MBP.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ACCOUNTINFO_MBPModel = exports;
Object.defineProperty(ACCOUNTINFO_MBPModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["65709236-bbe3-4bca-a979-ced213c6601c"];
}
});

ACCOUNTINFO_MBPModel.staticEntities = {};
});
