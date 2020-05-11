define("ADDONS_BP.model$STR_POSTREFILLS_WSRESPONSERec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var STR_POSTREFILLS_WSRESPONSERec = (function (_super) {
__extends(STR_POSTREFILLS_WSRESPONSERec, _super);
function STR_POSTREFILLS_WSRESPONSERec(defaults) {
_super.apply(this, arguments);
}
STR_POSTREFILLS_WSRESPONSERec.attributesToDeclare = function () {
return [
this.attr("WidgetId", "widgetIdAttr", "widgetId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Error_message", "error_messageAttr", "error_message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_type", "error_typeAttr", "error_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_code", "error_codeAttr", "error_code", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Error_detail", "error_detailAttr", "error_detail", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_POSTREFILLS_WSRESPONSERec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_POSTREFILLS_WSRESPONSERec.init();
return STR_POSTREFILLS_WSRESPONSERec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.STR_POSTREFILLS_WSRESPONSERec = STR_POSTREFILLS_WSRESPONSERec;

});
define("ADDONS_BP.model$ADDON_REFILL_CATEGORIESRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var ADDON_REFILL_CATEGORIESRec = (function (_super) {
__extends(ADDON_REFILL_CATEGORIESRec, _super);
function ADDON_REFILL_CATEGORIESRec(defaults) {
_super.apply(this, arguments);
}
ADDON_REFILL_CATEGORIESRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Category", "categoryAttr", "Category", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Icon", "iconAttr", "Icon", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedAt", "updatedAtAttr", "UpdatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
ADDON_REFILL_CATEGORIESRec.generateFromLocalStorage = function () {
return false;
};
ADDON_REFILL_CATEGORIESRec.init();
return ADDON_REFILL_CATEGORIESRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.ADDON_REFILL_CATEGORIESRec = ADDON_REFILL_CATEGORIESRec;

});
define("ADDONS_BP.model$STR_ADDON_REFILLRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var STR_ADDON_REFILLRec = (function (_super) {
__extends(STR_ADDON_REFILLRec, _super);
function STR_ADDON_REFILLRec(defaults) {
_super.apply(this, arguments);
}
STR_ADDON_REFILLRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Id_Addons_Refills", "id_Addons_RefillsAttr", "Id_Addons_Refills", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cost", "costAttr", "Cost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsSubscribed", "isSubscribedAttr", "IsSubscribed", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("StatusLabel", "statusLabelAttr", "StatusLabel", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CanSubscribe", "canSubscribeAttr", "CanSubscribe", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsPending", "isPendingAttr", "IsPending", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CanUnsubscribe", "canUnsubscribeAttr", "CanUnsubscribe", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ExpiryDate", "expiryDateAttr", "ExpiryDate", false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AddonIconClassId", "addonIconClassIdAttr", "AddonIconClassId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailable", "isAvailableAttr", "IsAvailable", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Msisdn", "msisdnAttr", "Msisdn", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CommercialDescription", "commercialDescriptionAttr", "CommercialDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PackageGroup", "packageGroupAttr", "PackageGroup", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Category", "categoryAttr", "Category", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryLabel", "categoryLabelAttr", "CategoryLabel", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryDescription", "categoryDescriptionAttr", "CategoryDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAddOn", "isAddOnAttr", "IsAddOn", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsRefill", "isRefillAttr", "IsRefill", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("SubscriptionStart", "subscriptionStartAttr", "SubscriptionStart", false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Icons", "iconsAttr", "Icons", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_ADDON_REFILLRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_ADDON_REFILLRec.init();
return STR_ADDON_REFILLRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.STR_ADDON_REFILLRec = STR_ADDON_REFILLRec;

});
define("ADDONS_BP.model$Invoice_outRecord", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Invoice_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Invoice_outRecord = (function (_super) {
__extends(Invoice_outRecord, _super);
function Invoice_outRecord(defaults) {
_super.apply(this, arguments);
}
Invoice_outRecord.attributesToDeclare = function () {
return [
this.attr("Invoice_out", "invoice_outAttr", "Invoice_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Invoice_outRec());
}, CON_RULESModel.Invoice_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Invoice_outRecord.fromStructure = function (str) {
return new Invoice_outRecord(new Invoice_outRecord.RecordClass({
invoice_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Invoice_outRecord.IsAnonymousRecord = true;
Invoice_outRecord.UniqueId = "dd721105-e792-b590-d0a3-81d9fed3bd32";
Invoice_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Invoice_outRecord.init();
return Invoice_outRecord;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.Invoice_outRecord = Invoice_outRecord;

});
define("ADDONS_BP.model$Siebel_out2Record", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Siebel_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Siebel_out2Record = (function (_super) {
__extends(Siebel_out2Record, _super);
function Siebel_out2Record(defaults) {
_super.apply(this, arguments);
}
Siebel_out2Record.attributesToDeclare = function () {
return [
this.attr("Siebel_out2", "siebel_outAttr", "Siebel_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Siebel_outRec());
}, CON_RULESModel.Siebel_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Siebel_out2Record.fromStructure = function (str) {
return new Siebel_out2Record(new Siebel_out2Record.RecordClass({
siebel_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Siebel_out2Record.IsAnonymousRecord = true;
Siebel_out2Record.UniqueId = "0088e52f-917f-ce88-c5ee-5f5a54866c0f";
Siebel_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Siebel_out2Record.init();
return Siebel_out2Record;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.Siebel_out2Record = Siebel_out2Record;

});
define("ADDONS_BP.model$Reason_outRecord", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Reason_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Reason_outRecord = (function (_super) {
__extends(Reason_outRecord, _super);
function Reason_outRecord(defaults) {
_super.apply(this, arguments);
}
Reason_outRecord.attributesToDeclare = function () {
return [
this.attr("Reason_out", "reason_outAttr", "Reason_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Reason_outRec());
}, CON_RULESModel.Reason_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Reason_outRecord.fromStructure = function (str) {
return new Reason_outRecord(new Reason_outRecord.RecordClass({
reason_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Reason_outRecord.IsAnonymousRecord = true;
Reason_outRecord.UniqueId = "7ddd317b-a5d0-6170-b1cb-7825cc3b477f";
Reason_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Reason_outRecord.init();
return Reason_outRecord;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.Reason_outRecord = Reason_outRecord;

});
define("ADDONS_BP.model$Schedule_outRecord", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Schedule_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Schedule_outRecord = (function (_super) {
__extends(Schedule_outRecord, _super);
function Schedule_outRecord(defaults) {
_super.apply(this, arguments);
}
Schedule_outRecord.attributesToDeclare = function () {
return [
this.attr("Schedule_out", "schedule_outAttr", "Schedule_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Schedule_outRec());
}, CON_RULESModel.Schedule_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Schedule_outRecord.fromStructure = function (str) {
return new Schedule_outRecord(new Schedule_outRecord.RecordClass({
schedule_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Schedule_outRecord.IsAnonymousRecord = true;
Schedule_outRecord.UniqueId = "c6d3bc7e-e6ef-bfb3-db01-ff016c2b1543";
Schedule_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Schedule_outRecord.init();
return Schedule_outRecord;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.Schedule_outRecord = Schedule_outRecord;

});
define("ADDONS_BP.model$Offer_Offer_outRecord", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Offer_Offer_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Offer_Offer_outRecord = (function (_super) {
__extends(Offer_Offer_outRecord, _super);
function Offer_Offer_outRecord(defaults) {
_super.apply(this, arguments);
}
Offer_Offer_outRecord.attributesToDeclare = function () {
return [
this.attr("Offer_Offer_out", "offer_Offer_outAttr", "Offer_Offer_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Offer_Offer_outRec());
}, CON_RULESModel.Offer_Offer_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Offer_Offer_outRecord.fromStructure = function (str) {
return new Offer_Offer_outRecord(new Offer_Offer_outRecord.RecordClass({
offer_Offer_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Offer_Offer_outRecord.IsAnonymousRecord = true;
Offer_Offer_outRecord.UniqueId = "84541122-a3f4-6b24-9b21-1968536a0201";
Offer_Offer_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Offer_Offer_outRecord.init();
return Offer_Offer_outRecord;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.Offer_Offer_outRecord = Offer_Offer_outRecord;

});
define("ADDONS_BP.model$Offer_Offer_outRecordList", ["exports", "OutSystems", "ADDONS_BP.model", "ADDONS_BP.model$Offer_Offer_outRecord"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Offer_Offer_outRecordList = (function (_super) {
__extends(Offer_Offer_outRecordList, _super);
function Offer_Offer_outRecordList(defaults) {
_super.apply(this, arguments);
}
Offer_Offer_outRecordList.RecordType = ADDONS_BPModel.Offer_Offer_outRecord;
return Offer_Offer_outRecordList;
})(OS.DataTypes.GenericRecordList);
ADDONS_BPModel.Offer_Offer_outRecordList = Offer_Offer_outRecordList;

});
define("ADDONS_BP.model$Package_Product_outRecord", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Package_Product_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Package_Product_outRecord = (function (_super) {
__extends(Package_Product_outRecord, _super);
function Package_Product_outRecord(defaults) {
_super.apply(this, arguments);
}
Package_Product_outRecord.attributesToDeclare = function () {
return [
this.attr("Package_Product_out", "package_Product_outAttr", "Package_Product_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Package_Product_outRec());
}, CON_RULESModel.Package_Product_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Package_Product_outRecord.fromStructure = function (str) {
return new Package_Product_outRecord(new Package_Product_outRecord.RecordClass({
package_Product_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Package_Product_outRecord.IsAnonymousRecord = true;
Package_Product_outRecord.UniqueId = "63231013-5a1a-2c36-bc9a-281135504f0c";
Package_Product_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Package_Product_outRecord.init();
return Package_Product_outRecord;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.Package_Product_outRecord = Package_Product_outRecord;

});
define("ADDONS_BP.model$Package_Product_outRecordList", ["exports", "OutSystems", "ADDONS_BP.model", "ADDONS_BP.model$Package_Product_outRecord"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Package_Product_outRecordList = (function (_super) {
__extends(Package_Product_outRecordList, _super);
function Package_Product_outRecordList(defaults) {
_super.apply(this, arguments);
}
Package_Product_outRecordList.RecordType = ADDONS_BPModel.Package_Product_outRecord;
return Package_Product_outRecordList;
})(OS.DataTypes.GenericRecordList);
ADDONS_BPModel.Package_Product_outRecordList = Package_Product_outRecordList;

});
define("ADDONS_BP.model$Parameter_Parameter_outRecord", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Parameter_Parameter_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Parameter_Parameter_outRecord = (function (_super) {
__extends(Parameter_Parameter_outRecord, _super);
function Parameter_Parameter_outRecord(defaults) {
_super.apply(this, arguments);
}
Parameter_Parameter_outRecord.attributesToDeclare = function () {
return [
this.attr("Parameter_Parameter_out", "parameter_Parameter_outAttr", "Parameter_Parameter_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Parameter_Parameter_outRec());
}, CON_RULESModel.Parameter_Parameter_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter_Parameter_outRecord.fromStructure = function (str) {
return new Parameter_Parameter_outRecord(new Parameter_Parameter_outRecord.RecordClass({
parameter_Parameter_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter_Parameter_outRecord.IsAnonymousRecord = true;
Parameter_Parameter_outRecord.UniqueId = "dbab51c4-1146-d908-af43-9a59a1e6339d";
Parameter_Parameter_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter_Parameter_outRecord.init();
return Parameter_Parameter_outRecord;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.Parameter_Parameter_outRecord = Parameter_Parameter_outRecord;

});
define("ADDONS_BP.model$Parameter_Parameter_outRecordList", ["exports", "OutSystems", "ADDONS_BP.model", "ADDONS_BP.model$Parameter_Parameter_outRecord"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var Parameter_Parameter_outRecordList = (function (_super) {
__extends(Parameter_Parameter_outRecordList, _super);
function Parameter_Parameter_outRecordList(defaults) {
_super.apply(this, arguments);
}
Parameter_Parameter_outRecordList.RecordType = ADDONS_BPModel.Parameter_Parameter_outRecord;
return Parameter_Parameter_outRecordList;
})(OS.DataTypes.GenericRecordList);
ADDONS_BPModel.Parameter_Parameter_outRecordList = Parameter_Parameter_outRecordList;

});
define("ADDONS_BP.model$STR_ADDONS_STRUCTRec", ["exports", "OutSystems", "CON_RULES.model", "ADDONS_BP.model", "CON_RULES.model$Product_outRec", "ADDONS_BP.referencesHealth", "ADDONS_BP.referencesHealth$CON_RULES"], function (exports, OutSystems, CON_RULESModel, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var STR_ADDONS_STRUCTRec = (function (_super) {
__extends(STR_ADDONS_STRUCTRec, _super);
function STR_ADDONS_STRUCTRec(defaults) {
_super.apply(this, arguments);
}
STR_ADDONS_STRUCTRec.attributesToDeclare = function () {
return [
this.attr("AddonId", "addonIdAttr", "id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Msisdn", "msisdnAttr", "msisdn", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cost", "costAttr", "cost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsSubscribed", "isSubscribedAttr", "is_subscribed", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsPending", "isPendingAttr", "is_pending", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CanUnsubscribe", "canUnsubscribeAttr", "can_unsubscribe", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CanSubscribe", "canSubscribeAttr", "can_subscribe", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Status_label_trans", "status_label_transAttr", "status_label_trans", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailable", "isAvailableAttr", "is_available", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Status_label", "status_labelAttr", "status_label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expiry_date", "expiry_dateAttr", "expiry_date", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Package_group", "package_groupAttr", "package_group", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Subscription_start", "subscription_startAttr", "Subscription_start", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AddonIconClassId", "addonIconClassIdAttr", "AddonIconClassId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CommercialDescription", "commercialDescriptionAttr", "CommercialDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurrType", "recurrTypeAttr", "RecurrType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Category", "categoryAttr", "Category", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryLabel", "categoryLabelAttr", "CategoryLabel", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryDescription", "categoryDescriptionAttr", "CategoryDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Icons", "iconsAttr", "Icons", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SiebelProductData", "siebelProductDataAttr", "SiebelProductData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_RULESModel.Product_outRec());
}, CON_RULESModel.Product_outRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_ADDONS_STRUCTRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_ADDONS_STRUCTRec.init();
return STR_ADDONS_STRUCTRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.STR_ADDONS_STRUCTRec = STR_ADDONS_STRUCTRec;

});
define("ADDONS_BP.model$ADDON_ICONRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var ADDON_ICONRec = (function (_super) {
__extends(ADDON_ICONRec, _super);
function ADDON_ICONRec(defaults) {
_super.apply(this, arguments);
}
ADDON_ICONRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("AddonId", "addonIdAttr", "AddonId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("IconClassId", "iconClassIdAttr", "IconClassId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
ADDON_ICONRec.generateFromLocalStorage = function () {
return false;
};
ADDON_ICONRec.init();
return ADDON_ICONRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.ADDON_ICONRec = ADDON_ICONRec;

});
define("ADDONS_BP.model$ADDON_REFILL_PROCESSRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var ADDON_REFILL_PROCESSRec = (function (_super) {
__extends(ADDON_REFILL_PROCESSRec, _super);
function ADDON_REFILL_PROCESSRec(defaults) {
_super.apply(this, arguments);
}
ADDON_REFILL_PROCESSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Application", "applicationAttr", "Application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NOSId", "nOSIdAttr", "NOSId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ServiceID", "serviceIDAttr", "ServiceID", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SnCode", "snCodeAttr", "SnCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsActivation", "isActivationAttr", "IsActivation", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("TransactionId", "transactionIdAttr", "TransactionId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsProcessed", "isProcessedAttr", "IsProcessed", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsError", "isErrorAttr", "IsError", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsProcessedAt", "isProcessedAtAttr", "IsProcessedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
ADDON_REFILL_PROCESSRec.generateFromLocalStorage = function () {
return false;
};
ADDON_REFILL_PROCESSRec.init();
return ADDON_REFILL_PROCESSRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.ADDON_REFILL_PROCESSRec = ADDON_REFILL_PROCESSRec;

});
define("ADDONS_BP.model$STR_ADDONSRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var STR_ADDONSRec = (function (_super) {
__extends(STR_ADDONSRec, _super);
function STR_ADDONSRec(defaults) {
_super.apply(this, arguments);
}
STR_ADDONSRec.attributesToDeclare = function () {
return [
this.attr("WidgetId", "widgetIdAttr", "widgetId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Error_message", "error_messageAttr", "error_message", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_detail", "error_detailAttr", "Error_detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_type", "error_typeAttr", "error_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Error_code", "error_codeAttr", "error_code", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Success", "successAttr", "success", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Message", "messageAttr", "message", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_ADDONSRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_ADDONSRec.init();
return STR_ADDONSRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.STR_ADDONSRec = STR_ADDONSRec;

});
define("ADDONS_BP.model$STR_ADDON_REFILL_WEBRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var STR_ADDON_REFILL_WEBRec = (function (_super) {
__extends(STR_ADDON_REFILL_WEBRec, _super);
function STR_ADDON_REFILL_WEBRec(defaults) {
_super.apply(this, arguments);
}
STR_ADDON_REFILL_WEBRec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Amount", "amountAttr", "Amount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refill_In_KBytes", "refill_In_KBytesAttr", "Refill_In_KBytes", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_ADDON_REFILL_WEBRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_ADDON_REFILL_WEBRec.init();
return STR_ADDON_REFILL_WEBRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.STR_ADDON_REFILL_WEBRec = STR_ADDON_REFILL_WEBRec;

});
define("ADDONS_BP.model$ADDONRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var ADDONRec = (function (_super) {
__extends(ADDONRec, _super);
function ADDONRec(defaults) {
_super.apply(this, arguments);
}
ADDONRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("AddOn_Id", "addOn_IdAttr", "AddOn_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ServiceDescription", "serviceDescriptionAttr", "ServiceDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryId", "categoryIdAttr", "CategoryId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Observations", "observationsAttr", "Observations", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IconClassId", "iconClassIdAttr", "IconClassId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedAt", "updatedAtAttr", "UpdatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
ADDONRec.generateFromLocalStorage = function () {
return false;
};
ADDONRec.init();
return ADDONRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.ADDONRec = ADDONRec;

});
define("ADDONS_BP.model$STR_REFILLS_STRUCTRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var STR_REFILLS_STRUCTRec = (function (_super) {
__extends(STR_REFILLS_STRUCTRec, _super);
function STR_REFILLS_STRUCTRec(defaults) {
_super.apply(this, arguments);
}
STR_REFILLS_STRUCTRec.attributesToDeclare = function () {
return [
this.attr("RefillId", "refillIdAttr", "id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Msisdn", "msisdnAttr", "msisdn", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Cost", "costAttr", "cost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsSubscribed", "isSubscribedAttr", "is_subscribed", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsPending", "isPendingAttr", "is_pending", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CanUnsubscribe", "canUnsubscribeAttr", "can_unsubscribe", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CanSubscribe", "canSubscribeAttr", "can_subscribe", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Status_label_trans", "status_label_transAttr", "status_label_trans", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailable", "isAvailableAttr", "is_available", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Status_label", "status_labelAttr", "status_label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expiry_date", "expiry_dateAttr", "expiry_date", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Package_group", "package_groupAttr", "package_group", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Subscription_start", "subscription_startAttr", "Subscription_start", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AddonIconClassId", "addonIconClassIdAttr", "AddonIconClassId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CommercialDescription", "commercialDescriptionAttr", "CommercialDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurrType", "recurrTypeAttr", "RecurrType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Category", "categoryAttr", "Category", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryLabel", "categoryLabelAttr", "CategoryLabel", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryDescription", "categoryDescriptionAttr", "CategoryDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Icons", "iconsAttr", "Icons", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_REFILLS_STRUCTRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_REFILLS_STRUCTRec.init();
return STR_REFILLS_STRUCTRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.STR_REFILLS_STRUCTRec = STR_REFILLS_STRUCTRec;

});
define("ADDONS_BP.model$STR_PREMIUM_CHANNELS_SUBSCRIBEDRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var STR_PREMIUM_CHANNELS_SUBSCRIBEDRec = (function (_super) {
__extends(STR_PREMIUM_CHANNELS_SUBSCRIBEDRec, _super);
function STR_PREMIUM_CHANNELS_SUBSCRIBEDRec(defaults) {
_super.apply(this, arguments);
}
STR_PREMIUM_CHANNELS_SUBSCRIBEDRec.attributesToDeclare = function () {
return [
this.attr("IntegrationId", "integrationIdAttr", "IntegrationId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_PREMIUM_CHANNELS_SUBSCRIBEDRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_PREMIUM_CHANNELS_SUBSCRIBEDRec.init();
return STR_PREMIUM_CHANNELS_SUBSCRIBEDRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.STR_PREMIUM_CHANNELS_SUBSCRIBEDRec = STR_PREMIUM_CHANNELS_SUBSCRIBEDRec;

});
define("ADDONS_BP.model$REFILLRec", ["exports", "OutSystems", "ADDONS_BP.model"], function (exports, OutSystems, ADDONS_BPModel) {
var OS = OutSystems.Internal;
var REFILLRec = (function (_super) {
__extends(REFILLRec, _super);
function REFILLRec(defaults) {
_super.apply(this, arguments);
}
REFILLRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Refill_Id", "refill_IdAttr", "Refill_Id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ServiceDescription", "serviceDescriptionAttr", "ServiceDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryId", "categoryIdAttr", "CategoryId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Observations", "observationsAttr", "Observations", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedAt", "createdAtAttr", "CreatedAt", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedAt", "updatedAtAttr", "UpdatedAt", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
REFILLRec.generateFromLocalStorage = function () {
return false;
};
REFILLRec.init();
return REFILLRec;
})(OS.DataTypes.GenericRecord);
ADDONS_BPModel.REFILLRec = REFILLRec;

});
define("ADDONS_BP.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ADDONS_BPModel = exports;
});
