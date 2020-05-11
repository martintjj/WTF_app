define("CON_GLOBE.model$ServiceAccount_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ServiceAccount_outRec = (function (_super) {
__extends(ServiceAccount_outRec, _super);
function ServiceAccount_outRec(defaults) {
_super.apply(this, arguments);
}
ServiceAccount_outRec.attributesToDeclare = function () {
return [
this.attr("ServiceAccountID", "serviceAccountIDAttr", "ServiceAccountID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ServiceAccount_outRec.fromStructure = function (str) {
return new ServiceAccount_outRec(new ServiceAccount_outRec.RecordClass({
serviceAccountIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAccount_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ServiceAccount_outRec.init();
return ServiceAccount_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ServiceAccount_outRec = ServiceAccount_outRec;

});
define("CON_GLOBE.model$ServiceAccount_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ServiceAccount_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ServiceAccount_outRecord = (function (_super) {
__extends(ServiceAccount_outRecord, _super);
function ServiceAccount_outRecord(defaults) {
_super.apply(this, arguments);
}
ServiceAccount_outRecord.attributesToDeclare = function () {
return [
this.attr("ServiceAccount_out", "serviceAccount_outAttr", "ServiceAccount_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ServiceAccount_outRec());
}, CON_GLOBEModel.ServiceAccount_outRec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceAccount_outRecord.fromStructure = function (str) {
return new ServiceAccount_outRecord(new ServiceAccount_outRecord.RecordClass({
serviceAccount_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAccount_outRecord.IsAnonymousRecord = true;
ServiceAccount_outRecord.UniqueId = "5f555bce-533e-eded-00d4-ecd66a64f7a6";
ServiceAccount_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ServiceAccount_outRecord.init();
return ServiceAccount_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ServiceAccount_outRecord = ServiceAccount_outRecord;

});
define("CON_GLOBE.model$Product_out_1Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ServiceAccount_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_out_1Rec = (function (_super) {
__extends(Product_out_1Rec, _super);
function Product_out_1Rec(defaults) {
_super.apply(this, arguments);
}
Product_out_1Rec.attributesToDeclare = function () {
return [
this.attr("ServiceAccount", "serviceAccountAttr", "ServiceAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ServiceAccount_outRecord());
}, CON_GLOBEModel.ServiceAccount_outRecord), 
this.attr("CatalogID", "catalogIDAttr", "CatalogID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DeactivationDate", "deactivationDateAttr", "DeactivationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateUser", "lastUpdateUserAttr", "LastUpdateUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MarketName", "marketNameAttr", "MarketName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NFCount", "nFCountAttr", "NFCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NMCount", "nMCountAttr", "NMCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OthersCount", "othersCountAttr", "OthersCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProductID", "productIDAttr", "ProductID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceSystem", "sourceSystemAttr", "SourceSystem", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TVCount", "tVCountAttr", "TVCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TechnicalName", "technicalNameAttr", "TechnicalName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("VFCount", "vFCountAttr", "VFCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("VMCount", "vMCountAttr", "VMCount", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Product_out_1Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Product_out_1Rec.init();
return Product_out_1Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Product_out_1Rec = Product_out_1Rec;

});
define("CON_GLOBE.model$AccessData15Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData15Rec = (function (_super) {
__extends(AccessData15Rec, _super);
function AccessData15Rec(defaults) {
_super.apply(this, arguments);
}
AccessData15Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData15Rec.init();
return AccessData15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData15Rec = AccessData15Rec;

});
define("CON_GLOBE.model$Contact_in6Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in6Rec = (function (_super) {
__extends(Contact_in6Rec, _super);
function Contact_in6Rec(defaults) {
_super.apply(this, arguments);
}
Contact_in6Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ContactID", "contactIDAttr", "ContactID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FlagCharges", "flagChargesAttr", "FlagCharges", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailableInPortfolio", "isAvailableInPortfolioAttr", "IsAvailableInPortfolio", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsEmailBilling", "isEmailBillingAttr", "IsEmailBilling", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainContact", "isMainContactAttr", "IsMainContact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PreferredSchedule", "preferredScheduleAttr", "PreferredSchedule", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceSystem", "sourceSystemAttr", "SourceSystem", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_in6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_in6Rec.init();
return Contact_in6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in6Rec = Contact_in6Rec;

});
define("CON_GLOBE.model$Contact_in6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in6Record = (function (_super) {
__extends(Contact_in6Record, _super);
function Contact_in6Record(defaults) {
_super.apply(this, arguments);
}
Contact_in6Record.attributesToDeclare = function () {
return [
this.attr("Contact_in6", "contact_in6Attr", "Contact_in6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in6Rec());
}, CON_GLOBEModel.Contact_in6Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_in6Record.fromStructure = function (str) {
return new Contact_in6Record(new Contact_in6Record.RecordClass({
contact_in6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_in6Record.IsAnonymousRecord = true;
Contact_in6Record.UniqueId = "0b242fe7-66a2-8cfd-1441-4302d0ef8fbd";
Contact_in6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_in6Record.init();
return Contact_in6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in6Record = Contact_in6Record;

});
define("CON_GLOBE.model$Contact_in6RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in6RecordList = (function (_super) {
__extends(Contact_in6RecordList, _super);
function Contact_in6RecordList(defaults) {
_super.apply(this, arguments);
}
Contact_in6RecordList.RecordType = CON_GLOBEModel.Contact_in6Record;
return Contact_in6RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Contact_in6RecordList = Contact_in6RecordList;

});
define("CON_GLOBE.model$Account_in9Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in9Rec = (function (_super) {
__extends(Account_in9Rec, _super);
function Account_in9Rec(defaults) {
_super.apply(this, arguments);
}
Account_in9Rec.attributesToDeclare = function () {
return [
this.attr("AccountID", "accountIDAttr", "AccountID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_in9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_in9Rec.init();
return Account_in9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in9Rec = Account_in9Rec;

});
define("CON_GLOBE.model$Account_in9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in9Record = (function (_super) {
__extends(Account_in9Record, _super);
function Account_in9Record(defaults) {
_super.apply(this, arguments);
}
Account_in9Record.attributesToDeclare = function () {
return [
this.attr("Account_in9", "account_in9Attr", "Account_in9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in9Rec());
}, CON_GLOBEModel.Account_in9Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_in9Record.fromStructure = function (str) {
return new Account_in9Record(new Account_in9Record.RecordClass({
account_in9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in9Record.IsAnonymousRecord = true;
Account_in9Record.UniqueId = "f86046b4-bc3e-2d0b-47e4-4d326c53181a";
Account_in9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_in9Record.init();
return Account_in9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in9Record = Account_in9Record;

});
define("CON_GLOBE.model$Role_in3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in6RecordList", "CON_GLOBE.model$Account_in9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_in3Rec = (function (_super) {
__extends(Role_in3Rec, _super);
function Role_in3Rec(defaults) {
_super.apply(this, arguments);
}
Role_in3Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in6RecordList());
}, CON_GLOBEModel.Contact_in6RecordList), 
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in9Record());
}, CON_GLOBEModel.Account_in9Record), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyCreationDate", "legacyCreationDateAttr", "LegacyCreationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RoleID", "roleIDAttr", "RoleID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Role_in3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Role_in3Rec.init();
return Role_in3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_in3Rec = Role_in3Rec;

});
define("CON_GLOBE.model$AccessData10Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData10Rec = (function (_super) {
__extends(AccessData10Rec, _super);
function AccessData10Rec(defaults) {
_super.apply(this, arguments);
}
AccessData10Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData10Rec.init();
return AccessData10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData10Rec = AccessData10Rec;

});
define("CON_GLOBE.model$Account_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_outRec = (function (_super) {
__extends(Account_outRec, _super);
function Account_outRec(defaults) {
_super.apply(this, arguments);
}
Account_outRec.attributesToDeclare = function () {
return [
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationDate", "calculationDateAttr", "CalculationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationIntegrationDate", "calculationIntegrationDateAttr", "CalculationIntegrationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationIntegrationID", "calculationIntegrationIDAttr", "CalculationIntegrationID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationMessage", "calculationMessageAttr", "CalculationMessage", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationType", "calculationTypeAttr", "CalculationType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ComplementaryRecurringGrossAmount", "complementaryRecurringGrossAmountAttr", "ComplementaryRecurringGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DiscountGrossAmount", "discountGrossAmountAttr", "DiscountGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HasCalculation", "hasCalculationAttr", "HasCalculation", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HasCalculationRestriction", "hasCalculationRestrictionAttr", "HasCalculationRestriction", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PermanencyDate", "permanencyDateAttr", "PermanencyDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurringGrossAmount", "recurringGrossAmountAttr", "RecurringGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResourceRecurringGrossAmount", "resourceRecurringGrossAmountAttr", "ResourceRecurringGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UsageGrossAmount", "usageGrossAmountAttr", "UsageGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("WeightGrossValue", "weightGrossValueAttr", "WeightGrossValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("WeightNetValue", "weightNetValueAttr", "WeightNetValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("WeightPermanencyDate", "weightPermanencyDateAttr", "WeightPermanencyDate", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_outRec.init();
return Account_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_outRec = Account_outRec;

});
define("CON_GLOBE.model$Account_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_outRecord = (function (_super) {
__extends(Account_outRecord, _super);
function Account_outRecord(defaults) {
_super.apply(this, arguments);
}
Account_outRecord.attributesToDeclare = function () {
return [
this.attr("Account_out", "account_outAttr", "Account_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_outRec());
}, CON_GLOBEModel.Account_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Account_outRecord.fromStructure = function (str) {
return new Account_outRecord(new Account_outRecord.RecordClass({
account_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_outRecord.IsAnonymousRecord = true;
Account_outRecord.UniqueId = "11c76d9c-f410-d4b6-8c55-e3cd858ae9e1";
Account_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_outRecord.init();
return Account_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_outRecord = Account_outRecord;

});
define("CON_GLOBE.model$Account_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_outRecordList = (function (_super) {
__extends(Account_outRecordList, _super);
function Account_outRecordList(defaults) {
_super.apply(this, arguments);
}
Account_outRecordList.RecordType = CON_GLOBEModel.Account_outRecord;
return Account_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Account_outRecordList = Account_outRecordList;

});
define("CON_GLOBE.model$Accounts_outRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_outRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Accounts_outRec = (function (_super) {
__extends(Accounts_outRec, _super);
function Accounts_outRec(defaults) {
_super.apply(this, arguments);
}
Accounts_outRec.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_outRecordList());
}, CON_GLOBEModel.Account_outRecordList), 
this.attr("Count", "countAttr", "Count", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Accounts_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Accounts_outRec.init();
return Accounts_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Accounts_outRec = Accounts_outRec;

});
define("CON_GLOBE.model$eCodes7Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes7Rec = (function (_super) {
__extends(eCodes7Rec, _super);
function eCodes7Rec(defaults) {
_super.apply(this, arguments);
}
eCodes7Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes7Rec.init();
return eCodes7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes7Rec = eCodes7Rec;

});
define("CON_GLOBE.model$eCodes7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes7Record = (function (_super) {
__extends(eCodes7Record, _super);
function eCodes7Record(defaults) {
_super.apply(this, arguments);
}
eCodes7Record.attributesToDeclare = function () {
return [
this.attr("eCodes7", "eCodes7Attr", "eCodes7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes7Rec());
}, CON_GLOBEModel.eCodes7Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes7Record.fromStructure = function (str) {
return new eCodes7Record(new eCodes7Record.RecordClass({
eCodes7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes7Record.IsAnonymousRecord = true;
eCodes7Record.UniqueId = "d7f74507-e5a3-9b8f-de94-1fe7b1291aa1";
eCodes7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes7Record.init();
return eCodes7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes7Record = eCodes7Record;

});
define("CON_GLOBE.model$eCodes7RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes7RecordList = (function (_super) {
__extends(eCodes7RecordList, _super);
function eCodes7RecordList(defaults) {
_super.apply(this, arguments);
}
eCodes7RecordList.RecordType = CON_GLOBEModel.eCodes7Record;
return eCodes7RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eCodes7RecordList = eCodes7RecordList;

});
define("CON_GLOBE.model$Status7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes7Record", "CON_GLOBE.model$eCodes7RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status7Rec = (function (_super) {
__extends(Status7Rec, _super);
function Status7Rec(defaults) {
_super.apply(this, arguments);
}
Status7Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes7Record());
}, CON_GLOBEModel.eCodes7Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes7RecordList());
}, CON_GLOBEModel.eCodes7RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status7Rec.init();
return Status7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status7Rec = Status7Rec;

});
define("CON_GLOBE.model$HistoryStep11Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep11Rec = (function (_super) {
__extends(HistoryStep11Rec, _super);
function HistoryStep11Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep11Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep11Rec.init();
return HistoryStep11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep11Rec = HistoryStep11Rec;

});
define("CON_GLOBE.model$Account_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_inRec = (function (_super) {
__extends(Account_inRec, _super);
function Account_inRec(defaults) {
_super.apply(this, arguments);
}
Account_inRec.attributesToDeclare = function () {
return [
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_inRec.fromStructure = function (str) {
return new Account_inRec(new Account_inRec.RecordClass({
accountNumberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_inRec.init();
return Account_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_inRec = Account_inRec;

});
define("CON_GLOBE.model$NetworkGroup_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var NetworkGroup_outRec = (function (_super) {
__extends(NetworkGroup_outRec, _super);
function NetworkGroup_outRec(defaults) {
_super.apply(this, arguments);
}
NetworkGroup_outRec.attributesToDeclare = function () {
return [
this.attr("NetworkGroupID", "networkGroupIDAttr", "NetworkGroupID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
NetworkGroup_outRec.fromStructure = function (str) {
return new NetworkGroup_outRec(new NetworkGroup_outRec.RecordClass({
networkGroupIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NetworkGroup_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
NetworkGroup_outRec.init();
return NetworkGroup_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.NetworkGroup_outRec = NetworkGroup_outRec;

});
define("CON_GLOBE.model$NetworkGroup_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$NetworkGroup_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var NetworkGroup_outRecord = (function (_super) {
__extends(NetworkGroup_outRecord, _super);
function NetworkGroup_outRecord(defaults) {
_super.apply(this, arguments);
}
NetworkGroup_outRecord.attributesToDeclare = function () {
return [
this.attr("NetworkGroup_out", "networkGroup_outAttr", "NetworkGroup_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.NetworkGroup_outRec());
}, CON_GLOBEModel.NetworkGroup_outRec)
].concat(_super.attributesToDeclare.call(this));
};
NetworkGroup_outRecord.fromStructure = function (str) {
return new NetworkGroup_outRecord(new NetworkGroup_outRecord.RecordClass({
networkGroup_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NetworkGroup_outRecord.IsAnonymousRecord = true;
NetworkGroup_outRecord.UniqueId = "d10d630d-cdbc-9a85-5553-65ee81beeba4";
NetworkGroup_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
NetworkGroup_outRecord.init();
return NetworkGroup_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.NetworkGroup_outRecord = NetworkGroup_outRecord;

});
define("CON_GLOBE.model$NetworkGroup_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$NetworkGroup_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var NetworkGroup_outRecordList = (function (_super) {
__extends(NetworkGroup_outRecordList, _super);
function NetworkGroup_outRecordList(defaults) {
_super.apply(this, arguments);
}
NetworkGroup_outRecordList.RecordType = CON_GLOBEModel.NetworkGroup_outRecord;
return NetworkGroup_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.NetworkGroup_outRecordList = NetworkGroup_outRecordList;

});
define("CON_GLOBE.model$Product_out_2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$NetworkGroup_outRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_out_2Rec = (function (_super) {
__extends(Product_out_2Rec, _super);
function Product_out_2Rec(defaults) {
_super.apply(this, arguments);
}
Product_out_2Rec.attributesToDeclare = function () {
return [
this.attr("NetworkGroup", "networkGroupAttr", "NetworkGroup", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.NetworkGroup_outRecordList());
}, CON_GLOBEModel.NetworkGroup_outRecordList), 
this.attr("CatalogID", "catalogIDAttr", "CatalogID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DeactivationDate", "deactivationDateAttr", "DeactivationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateUser", "lastUpdateUserAttr", "LastUpdateUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNAttr", "MSISDN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("MarketName", "marketNameAttr", "MarketName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NFCount", "nFCountAttr", "NFCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NMCount", "nMCountAttr", "NMCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NTWKCount", "nTWKCountAttr", "NTWKCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OthersCount", "othersCountAttr", "OthersCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProductID", "productIDAttr", "ProductID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceSystem", "sourceSystemAttr", "SourceSystem", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TVCount", "tVCountAttr", "TVCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TechnicalName", "technicalNameAttr", "TechnicalName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("VFCount", "vFCountAttr", "VFCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("VMCount", "vMCountAttr", "VMCount", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Product_out_2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Product_out_2Rec.init();
return Product_out_2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Product_out_2Rec = Product_out_2Rec;

});
define("CON_GLOBE.model$Address_out3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_out3Rec = (function (_super) {
__extends(Address_out3Rec, _super);
function Address_out3Rec(defaults) {
_super.apply(this, arguments);
}
Address_out3Rec.attributesToDeclare = function () {
return [
this.attr("AddressName", "addressNameAttr", "AddressName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ContinentCode", "continentCodeAttr", "ContinentCode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Address_out3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Address_out3Rec.init();
return Address_out3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_out3Rec = Address_out3Rec;

});
define("CON_GLOBE.model$Address_out3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_out3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_out3Record = (function (_super) {
__extends(Address_out3Record, _super);
function Address_out3Record(defaults) {
_super.apply(this, arguments);
}
Address_out3Record.attributesToDeclare = function () {
return [
this.attr("Address_out3", "address_out3Attr", "Address_out3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_out3Rec());
}, CON_GLOBEModel.Address_out3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Address_out3Record.fromStructure = function (str) {
return new Address_out3Record(new Address_out3Record.RecordClass({
address_out3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Address_out3Record.IsAnonymousRecord = true;
Address_out3Record.UniqueId = "fe338fa6-f656-9c45-e3d9-95b95ca7480d";
Address_out3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Address_out3Record.init();
return Address_out3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_out3Record = Address_out3Record;

});
define("CON_GLOBE.model$ServiceAccount_out5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ServiceAccount_out5Rec = (function (_super) {
__extends(ServiceAccount_out5Rec, _super);
function ServiceAccount_out5Rec(defaults) {
_super.apply(this, arguments);
}
ServiceAccount_out5Rec.attributesToDeclare = function () {
return [
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ServiceAccount_out5Rec.fromStructure = function (str) {
return new ServiceAccount_out5Rec(new ServiceAccount_out5Rec.RecordClass({
numberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAccount_out5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ServiceAccount_out5Rec.init();
return ServiceAccount_out5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ServiceAccount_out5Rec = ServiceAccount_out5Rec;

});
define("CON_GLOBE.model$ServiceAccount_out5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ServiceAccount_out5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ServiceAccount_out5Record = (function (_super) {
__extends(ServiceAccount_out5Record, _super);
function ServiceAccount_out5Record(defaults) {
_super.apply(this, arguments);
}
ServiceAccount_out5Record.attributesToDeclare = function () {
return [
this.attr("ServiceAccount_out5", "serviceAccount_out5Attr", "ServiceAccount_out5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ServiceAccount_out5Rec());
}, CON_GLOBEModel.ServiceAccount_out5Rec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceAccount_out5Record.fromStructure = function (str) {
return new ServiceAccount_out5Record(new ServiceAccount_out5Record.RecordClass({
serviceAccount_out5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAccount_out5Record.IsAnonymousRecord = true;
ServiceAccount_out5Record.UniqueId = "7811be86-6c29-c7a2-13ca-818c6b58012a";
ServiceAccount_out5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ServiceAccount_out5Record.init();
return ServiceAccount_out5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ServiceAccount_out5Record = ServiceAccount_out5Record;

});
define("CON_GLOBE.model$BillingAccount_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccount_out2Rec = (function (_super) {
__extends(BillingAccount_out2Rec, _super);
function BillingAccount_out2Rec(defaults) {
_super.apply(this, arguments);
}
BillingAccount_out2Rec.attributesToDeclare = function () {
return [
this.attr("BillingAccountNumber", "billingAccountNumberAttr", "BillingAccountNumber", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BillingAccount_out2Rec.fromStructure = function (str) {
return new BillingAccount_out2Rec(new BillingAccount_out2Rec.RecordClass({
billingAccountNumberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BillingAccount_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
BillingAccount_out2Rec.init();
return BillingAccount_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccount_out2Rec = BillingAccount_out2Rec;

});
define("CON_GLOBE.model$BillingAccount_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$BillingAccount_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccount_out2Record = (function (_super) {
__extends(BillingAccount_out2Record, _super);
function BillingAccount_out2Record(defaults) {
_super.apply(this, arguments);
}
BillingAccount_out2Record.attributesToDeclare = function () {
return [
this.attr("BillingAccount_out2", "billingAccount_out2Attr", "BillingAccount_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccount_out2Rec());
}, CON_GLOBEModel.BillingAccount_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
BillingAccount_out2Record.fromStructure = function (str) {
return new BillingAccount_out2Record(new BillingAccount_out2Record.RecordClass({
billingAccount_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BillingAccount_out2Record.IsAnonymousRecord = true;
BillingAccount_out2Record.UniqueId = "82e39ae9-4b16-783a-e184-f53440fc2311";
BillingAccount_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
BillingAccount_out2Record.init();
return BillingAccount_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccount_out2Record = BillingAccount_out2Record;

});
define("CON_GLOBE.model$Eligibility_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Eligibility_outRec = (function (_super) {
__extends(Eligibility_outRec, _super);
function Eligibility_outRec(defaults) {
_super.apply(this, arguments);
}
Eligibility_outRec.attributesToDeclare = function () {
return [
this.attr("Date", "dateAttr", "Date", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EligibilityID", "eligibilityIDAttr", "EligibilityID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("isForced", "isForcedAttr", "isForced", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Eligibility_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Eligibility_outRec.init();
return Eligibility_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Eligibility_outRec = Eligibility_outRec;

});
define("CON_GLOBE.model$Eligibility_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Eligibility_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Eligibility_outRecord = (function (_super) {
__extends(Eligibility_outRecord, _super);
function Eligibility_outRecord(defaults) {
_super.apply(this, arguments);
}
Eligibility_outRecord.attributesToDeclare = function () {
return [
this.attr("Eligibility_out", "eligibility_outAttr", "Eligibility_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Eligibility_outRec());
}, CON_GLOBEModel.Eligibility_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Eligibility_outRecord.fromStructure = function (str) {
return new Eligibility_outRecord(new Eligibility_outRecord.RecordClass({
eligibility_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Eligibility_outRecord.IsAnonymousRecord = true;
Eligibility_outRecord.UniqueId = "5aac154b-865a-4e34-c93a-2f0f96c98dd7";
Eligibility_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Eligibility_outRecord.init();
return Eligibility_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Eligibility_outRecord = Eligibility_outRecord;

});
define("CON_GLOBE.model$LoyaltyCard_outRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Eligibility_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var LoyaltyCard_outRec = (function (_super) {
__extends(LoyaltyCard_outRec, _super);
function LoyaltyCard_outRec(defaults) {
_super.apply(this, arguments);
}
LoyaltyCard_outRec.attributesToDeclare = function () {
return [
this.attr("Eligibility", "eligibilityAttr", "Eligibility", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Eligibility_outRecord());
}, CON_GLOBEModel.Eligibility_outRecord), 
this.attr("BarCode", "barCodeAttr", "BarCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CinemaRequestDate", "cinemaRequestDateAttr", "CinemaRequestDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CinemaSendDate", "cinemaSendDateAttr", "CinemaSendDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FinishingRequestDate", "finishingRequestDateAttr", "FinishingRequestDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FinishingSendDate", "finishingSendDateAttr", "FinishingSendDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateDescription", "lastUpdateDescriptionAttr", "LastUpdateDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Version", "versionAttr", "Version", false, OS.Types.Text, function () {
return "";
}), 
this.attr("isCopy", "isCopyAttr", "isCopy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("wasRequestedToCinema", "wasRequestedToCinemaAttr", "wasRequestedToCinema", false, OS.Types.Text, function () {
return "";
}), 
this.attr("wasRequestedToFinishing", "wasRequestedToFinishingAttr", "wasRequestedToFinishing", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
LoyaltyCard_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
LoyaltyCard_outRec.init();
return LoyaltyCard_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.LoyaltyCard_outRec = LoyaltyCard_outRec;

});
define("CON_GLOBE.model$LoyaltyCard_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$LoyaltyCard_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var LoyaltyCard_outRecord = (function (_super) {
__extends(LoyaltyCard_outRecord, _super);
function LoyaltyCard_outRecord(defaults) {
_super.apply(this, arguments);
}
LoyaltyCard_outRecord.attributesToDeclare = function () {
return [
this.attr("LoyaltyCard_out", "loyaltyCard_outAttr", "LoyaltyCard_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.LoyaltyCard_outRec());
}, CON_GLOBEModel.LoyaltyCard_outRec)
].concat(_super.attributesToDeclare.call(this));
};
LoyaltyCard_outRecord.fromStructure = function (str) {
return new LoyaltyCard_outRecord(new LoyaltyCard_outRecord.RecordClass({
loyaltyCard_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoyaltyCard_outRecord.IsAnonymousRecord = true;
LoyaltyCard_outRecord.UniqueId = "433d67cf-7659-2c71-e2d4-d8c6169c5fa0";
LoyaltyCard_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
LoyaltyCard_outRecord.init();
return LoyaltyCard_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.LoyaltyCard_outRecord = LoyaltyCard_outRecord;

});
define("CON_GLOBE.model$Account_out4Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_out3Record", "CON_GLOBE.model$ServiceAccount_out5Record", "CON_GLOBE.model$BillingAccount_out2Record", "CON_GLOBE.model$LoyaltyCard_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_out4Rec = (function (_super) {
__extends(Account_out4Rec, _super);
function Account_out4Rec(defaults) {
_super.apply(this, arguments);
}
Account_out4Rec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_out3Record());
}, CON_GLOBEModel.Address_out3Record), 
this.attr("ServiceAccount", "serviceAccountAttr", "ServiceAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ServiceAccount_out5Record());
}, CON_GLOBEModel.ServiceAccount_out5Record), 
this.attr("BillingAccount", "billingAccountAttr", "BillingAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccount_out2Record());
}, CON_GLOBEModel.BillingAccount_out2Record), 
this.attr("LoyaltyCard", "loyaltyCardAttr", "LoyaltyCard", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.LoyaltyCard_outRecord());
}, CON_GLOBEModel.LoyaltyCard_outRecord), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_out4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_out4Rec.init();
return Account_out4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_out4Rec = Account_out4Rec;

});
define("CON_GLOBE.model$Account_out4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_out4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_out4Record = (function (_super) {
__extends(Account_out4Record, _super);
function Account_out4Record(defaults) {
_super.apply(this, arguments);
}
Account_out4Record.attributesToDeclare = function () {
return [
this.attr("Account_out4", "account_out4Attr", "Account_out4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_out4Rec());
}, CON_GLOBEModel.Account_out4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_out4Record.fromStructure = function (str) {
return new Account_out4Record(new Account_out4Record.RecordClass({
account_out4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_out4Record.IsAnonymousRecord = true;
Account_out4Record.UniqueId = "9b4ca727-8976-52d9-0d07-01505523c297";
Account_out4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_out4Record.init();
return Account_out4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_out4Record = Account_out4Record;

});
define("CON_GLOBE.model$Person_out6Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_out4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out6Rec = (function (_super) {
__extends(Person_out6Rec, _super);
function Person_out6Rec(defaults) {
_super.apply(this, arguments);
}
Person_out6Rec.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_out4Record());
}, CON_GLOBEModel.Account_out4Record), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out6Rec.init();
return Person_out6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out6Rec = Person_out6Rec;

});
define("CON_GLOBE.model$Person_out6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out6Record = (function (_super) {
__extends(Person_out6Record, _super);
function Person_out6Record(defaults) {
_super.apply(this, arguments);
}
Person_out6Record.attributesToDeclare = function () {
return [
this.attr("Person_out6", "person_out6Attr", "Person_out6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out6Rec());
}, CON_GLOBEModel.Person_out6Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_out6Record.fromStructure = function (str) {
return new Person_out6Record(new Person_out6Record.RecordClass({
person_out6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out6Record.IsAnonymousRecord = true;
Person_out6Record.UniqueId = "9ba8a122-3ab6-7811-005d-dcc054f4c88b";
Person_out6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_out6Record.init();
return Person_out6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out6Record = Person_out6Record;

});
define("CON_GLOBE.model$DataOutput7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput7Rec = (function (_super) {
__extends(DataOutput7Rec, _super);
function DataOutput7Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput7Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out6Record());
}, CON_GLOBEModel.Person_out6Record)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput7Rec.fromStructure = function (str) {
return new DataOutput7Rec(new DataOutput7Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput7Rec.init();
return DataOutput7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput7Rec = DataOutput7Rec;

});
define("CON_GLOBE.model$AccessData4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData4Rec = (function (_super) {
__extends(AccessData4Rec, _super);
function AccessData4Rec(defaults) {
_super.apply(this, arguments);
}
AccessData4Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData4Rec.init();
return AccessData4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData4Rec = AccessData4Rec;

});
define("CON_GLOBE.model$eNative2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative2Rec = (function (_super) {
__extends(eNative2Rec, _super);
function eNative2Rec(defaults) {
_super.apply(this, arguments);
}
eNative2Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative2Rec.init();
return eNative2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative2Rec = eNative2Rec;

});
define("CON_GLOBE.model$Parameter15Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter15Rec = (function (_super) {
__extends(Parameter15Rec, _super);
function Parameter15Rec(defaults) {
_super.apply(this, arguments);
}
Parameter15Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter15Rec.init();
return Parameter15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter15Rec = Parameter15Rec;

});
define("CON_GLOBE.model$Parameter15Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter15Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter15Record = (function (_super) {
__extends(Parameter15Record, _super);
function Parameter15Record(defaults) {
_super.apply(this, arguments);
}
Parameter15Record.attributesToDeclare = function () {
return [
this.attr("Parameter15", "parameter15Attr", "Parameter15", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter15Rec());
}, CON_GLOBEModel.Parameter15Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter15Record.fromStructure = function (str) {
return new Parameter15Record(new Parameter15Record.RecordClass({
parameter15Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter15Record.IsAnonymousRecord = true;
Parameter15Record.UniqueId = "94a0f3da-4dd5-1e44-3537-1ae658b49f55";
Parameter15Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter15Record.init();
return Parameter15Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter15Record = Parameter15Record;

});
define("CON_GLOBE.model$Parameter15RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter15Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter15RecordList = (function (_super) {
__extends(Parameter15RecordList, _super);
function Parameter15RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter15RecordList.RecordType = CON_GLOBEModel.Parameter15Record;
return Parameter15RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter15RecordList = Parameter15RecordList;

});
define("CON_GLOBE.model$AccessData12Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData12Rec = (function (_super) {
__extends(AccessData12Rec, _super);
function AccessData12Rec(defaults) {
_super.apply(this, arguments);
}
AccessData12Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData12Rec.init();
return AccessData12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData12Rec = AccessData12Rec;

});
define("CON_GLOBE.model$AccessData12Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData12Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData12Record = (function (_super) {
__extends(AccessData12Record, _super);
function AccessData12Record(defaults) {
_super.apply(this, arguments);
}
AccessData12Record.attributesToDeclare = function () {
return [
this.attr("AccessData12", "accessData12Attr", "AccessData12", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData12Rec());
}, CON_GLOBEModel.AccessData12Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData12Record.fromStructure = function (str) {
return new AccessData12Record(new AccessData12Record.RecordClass({
accessData12Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData12Record.IsAnonymousRecord = true;
AccessData12Record.UniqueId = "fb1ed227-5bd1-af97-1872-7de0d6f59933";
AccessData12Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData12Record.init();
return AccessData12Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData12Record = AccessData12Record;

});
define("CON_GLOBE.model$HistoryStep11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep11Record = (function (_super) {
__extends(HistoryStep11Record, _super);
function HistoryStep11Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep11Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep11", "historyStep11Attr", "HistoryStep11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep11Rec());
}, CON_GLOBEModel.HistoryStep11Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep11Record.fromStructure = function (str) {
return new HistoryStep11Record(new HistoryStep11Record.RecordClass({
historyStep11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep11Record.IsAnonymousRecord = true;
HistoryStep11Record.UniqueId = "6c4610ff-7784-8932-ab4f-0e84935cb9bc";
HistoryStep11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep11Record.init();
return HistoryStep11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep11Record = HistoryStep11Record;

});
define("CON_GLOBE.model$HistoryStep11RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep11Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep11RecordList = (function (_super) {
__extends(HistoryStep11RecordList, _super);
function HistoryStep11RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep11RecordList.RecordType = CON_GLOBEModel.HistoryStep11Record;
return HistoryStep11RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep11RecordList = HistoryStep11RecordList;

});
define("CON_GLOBE.model$eCodes12Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes12Rec = (function (_super) {
__extends(eCodes12Rec, _super);
function eCodes12Rec(defaults) {
_super.apply(this, arguments);
}
eCodes12Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes12Rec.init();
return eCodes12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes12Rec = eCodes12Rec;

});
define("CON_GLOBE.model$eCodes12Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes12Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes12Record = (function (_super) {
__extends(eCodes12Record, _super);
function eCodes12Record(defaults) {
_super.apply(this, arguments);
}
eCodes12Record.attributesToDeclare = function () {
return [
this.attr("eCodes12", "eCodes12Attr", "eCodes12", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes12Rec());
}, CON_GLOBEModel.eCodes12Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes12Record.fromStructure = function (str) {
return new eCodes12Record(new eCodes12Record.RecordClass({
eCodes12Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes12Record.IsAnonymousRecord = true;
eCodes12Record.UniqueId = "82707d01-038f-f1b8-60ff-f4faa7c53886";
eCodes12Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes12Record.init();
return eCodes12Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes12Record = eCodes12Record;

});
define("CON_GLOBE.model$eNative9Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative9Rec = (function (_super) {
__extends(eNative9Rec, _super);
function eNative9Rec(defaults) {
_super.apply(this, arguments);
}
eNative9Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative9Rec.init();
return eNative9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative9Rec = eNative9Rec;

});
define("CON_GLOBE.model$eNative9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative9Record = (function (_super) {
__extends(eNative9Record, _super);
function eNative9Record(defaults) {
_super.apply(this, arguments);
}
eNative9Record.attributesToDeclare = function () {
return [
this.attr("eNative9", "eNative9Attr", "eNative9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative9Rec());
}, CON_GLOBEModel.eNative9Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative9Record.fromStructure = function (str) {
return new eNative9Record(new eNative9Record.RecordClass({
eNative9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative9Record.IsAnonymousRecord = true;
eNative9Record.UniqueId = "a9d6baaf-9dcd-c25a-8467-8182abc7ca9a";
eNative9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative9Record.init();
return eNative9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative9Record = eNative9Record;

});
define("CON_GLOBE.model$eNative9RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative9RecordList = (function (_super) {
__extends(eNative9RecordList, _super);
function eNative9RecordList(defaults) {
_super.apply(this, arguments);
}
eNative9RecordList.RecordType = CON_GLOBEModel.eNative9Record;
return eNative9RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative9RecordList = eNative9RecordList;

});
define("CON_GLOBE.model$Status12Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes12Record", "CON_GLOBE.model$eNative9RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status12Rec = (function (_super) {
__extends(Status12Rec, _super);
function Status12Rec(defaults) {
_super.apply(this, arguments);
}
Status12Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes12Record());
}, CON_GLOBEModel.eCodes12Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative9RecordList());
}, CON_GLOBEModel.eNative9RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status12Rec.init();
return Status12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status12Rec = Status12Rec;

});
define("CON_GLOBE.model$Status12Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status12Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status12Record = (function (_super) {
__extends(Status12Record, _super);
function Status12Record(defaults) {
_super.apply(this, arguments);
}
Status12Record.attributesToDeclare = function () {
return [
this.attr("Status12", "status12Attr", "Status12", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status12Rec());
}, CON_GLOBEModel.Status12Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status12Record.fromStructure = function (str) {
return new Status12Record(new Status12Record.RecordClass({
status12Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status12Record.IsAnonymousRecord = true;
Status12Record.UniqueId = "85f51c5c-d1c0-6d33-7824-8e989ef01df6";
Status12Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status12Record.init();
return Status12Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status12Record = Status12Record;

});
define("CON_GLOBE.model$Header11Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter15RecordList", "CON_GLOBE.model$AccessData12Record", "CON_GLOBE.model$HistoryStep11RecordList", "CON_GLOBE.model$Status12Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header11Rec = (function (_super) {
__extends(Header11Rec, _super);
function Header11Rec(defaults) {
_super.apply(this, arguments);
}
Header11Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter15RecordList());
}, CON_GLOBEModel.Parameter15RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData12Record());
}, CON_GLOBEModel.AccessData12Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep11RecordList());
}, CON_GLOBEModel.HistoryStep11RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status12Record());
}, CON_GLOBEModel.Status12Record)
].concat(_super.attributesToDeclare.call(this));
};
Header11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header11Rec.init();
return Header11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header11Rec = Header11Rec;

});
define("CON_GLOBE.model$Header11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header11Record = (function (_super) {
__extends(Header11Record, _super);
function Header11Record(defaults) {
_super.apply(this, arguments);
}
Header11Record.attributesToDeclare = function () {
return [
this.attr("Header11", "header11Attr", "Header11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header11Rec());
}, CON_GLOBEModel.Header11Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header11Record.fromStructure = function (str) {
return new Header11Record(new Header11Record.RecordClass({
header11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header11Record.IsAnonymousRecord = true;
Header11Record.UniqueId = "312d677d-2250-5ade-a9fe-c83c6a9ee79d";
Header11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header11Record.init();
return Header11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header11Record = Header11Record;

});
define("CON_GLOBE.model$ServiceAccount_in3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ServiceAccount_in3Rec = (function (_super) {
__extends(ServiceAccount_in3Rec, _super);
function ServiceAccount_in3Rec(defaults) {
_super.apply(this, arguments);
}
ServiceAccount_in3Rec.attributesToDeclare = function () {
return [
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ServiceAccount_in3Rec.fromStructure = function (str) {
return new ServiceAccount_in3Rec(new ServiceAccount_in3Rec.RecordClass({
numberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAccount_in3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ServiceAccount_in3Rec.init();
return ServiceAccount_in3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ServiceAccount_in3Rec = ServiceAccount_in3Rec;

});
define("CON_GLOBE.model$ServiceAccount_in3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ServiceAccount_in3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ServiceAccount_in3Record = (function (_super) {
__extends(ServiceAccount_in3Record, _super);
function ServiceAccount_in3Record(defaults) {
_super.apply(this, arguments);
}
ServiceAccount_in3Record.attributesToDeclare = function () {
return [
this.attr("ServiceAccount_in3", "serviceAccount_in3Attr", "ServiceAccount_in3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ServiceAccount_in3Rec());
}, CON_GLOBEModel.ServiceAccount_in3Rec)
].concat(_super.attributesToDeclare.call(this));
};
ServiceAccount_in3Record.fromStructure = function (str) {
return new ServiceAccount_in3Record(new ServiceAccount_in3Record.RecordClass({
serviceAccount_in3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ServiceAccount_in3Record.IsAnonymousRecord = true;
ServiceAccount_in3Record.UniqueId = "9cf5828f-9c43-722b-4eb0-0db25898dd49";
ServiceAccount_in3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ServiceAccount_in3Record.init();
return ServiceAccount_in3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ServiceAccount_in3Record = ServiceAccount_in3Record;

});
define("CON_GLOBE.model$LoyaltyCard_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var LoyaltyCard_inRec = (function (_super) {
__extends(LoyaltyCard_inRec, _super);
function LoyaltyCard_inRec(defaults) {
_super.apply(this, arguments);
}
LoyaltyCard_inRec.attributesToDeclare = function () {
return [
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
LoyaltyCard_inRec.fromStructure = function (str) {
return new LoyaltyCard_inRec(new LoyaltyCard_inRec.RecordClass({
numberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoyaltyCard_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
LoyaltyCard_inRec.init();
return LoyaltyCard_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.LoyaltyCard_inRec = LoyaltyCard_inRec;

});
define("CON_GLOBE.model$LoyaltyCard_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$LoyaltyCard_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var LoyaltyCard_inRecord = (function (_super) {
__extends(LoyaltyCard_inRecord, _super);
function LoyaltyCard_inRecord(defaults) {
_super.apply(this, arguments);
}
LoyaltyCard_inRecord.attributesToDeclare = function () {
return [
this.attr("LoyaltyCard_in", "loyaltyCard_inAttr", "LoyaltyCard_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.LoyaltyCard_inRec());
}, CON_GLOBEModel.LoyaltyCard_inRec)
].concat(_super.attributesToDeclare.call(this));
};
LoyaltyCard_inRecord.fromStructure = function (str) {
return new LoyaltyCard_inRecord(new LoyaltyCard_inRecord.RecordClass({
loyaltyCard_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LoyaltyCard_inRecord.IsAnonymousRecord = true;
LoyaltyCard_inRecord.UniqueId = "117f3c36-a6f0-1293-38d8-c8a1a3ac570c";
LoyaltyCard_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
LoyaltyCard_inRecord.init();
return LoyaltyCard_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.LoyaltyCard_inRecord = LoyaltyCard_inRecord;

});
define("CON_GLOBE.model$Account_in7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ServiceAccount_in3Record", "CON_GLOBE.model$LoyaltyCard_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in7Rec = (function (_super) {
__extends(Account_in7Rec, _super);
function Account_in7Rec(defaults) {
_super.apply(this, arguments);
}
Account_in7Rec.attributesToDeclare = function () {
return [
this.attr("ServiceAccount", "serviceAccountAttr", "ServiceAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ServiceAccount_in3Record());
}, CON_GLOBEModel.ServiceAccount_in3Record), 
this.attr("LoyaltyCard", "loyaltyCardAttr", "LoyaltyCard", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.LoyaltyCard_inRecord());
}, CON_GLOBEModel.LoyaltyCard_inRecord), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_in7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_in7Rec.init();
return Account_in7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in7Rec = Account_in7Rec;

});
define("CON_GLOBE.model$Account_in7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in7Record = (function (_super) {
__extends(Account_in7Record, _super);
function Account_in7Record(defaults) {
_super.apply(this, arguments);
}
Account_in7Record.attributesToDeclare = function () {
return [
this.attr("Account_in7", "account_in7Attr", "Account_in7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in7Rec());
}, CON_GLOBEModel.Account_in7Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_in7Record.fromStructure = function (str) {
return new Account_in7Record(new Account_in7Record.RecordClass({
account_in7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in7Record.IsAnonymousRecord = true;
Account_in7Record.UniqueId = "395fc553-8150-7fdc-35ce-d2198f0448df";
Account_in7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_in7Record.init();
return Account_in7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in7Record = Account_in7Record;

});
define("CON_GLOBE.model$Person_in8Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in8Rec = (function (_super) {
__extends(Person_in8Rec, _super);
function Person_in8Rec(defaults) {
_super.apply(this, arguments);
}
Person_in8Rec.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in7Record());
}, CON_GLOBEModel.Account_in7Record)
].concat(_super.attributesToDeclare.call(this));
};
Person_in8Rec.fromStructure = function (str) {
return new Person_in8Rec(new Person_in8Rec.RecordClass({
accountAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in8Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in8Rec.init();
return Person_in8Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in8Rec = Person_in8Rec;

});
define("CON_GLOBE.model$Person_in8Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in8Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in8Record = (function (_super) {
__extends(Person_in8Record, _super);
function Person_in8Record(defaults) {
_super.apply(this, arguments);
}
Person_in8Record.attributesToDeclare = function () {
return [
this.attr("Person_in8", "person_in8Attr", "Person_in8", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in8Rec());
}, CON_GLOBEModel.Person_in8Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in8Record.fromStructure = function (str) {
return new Person_in8Record(new Person_in8Record.RecordClass({
person_in8Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in8Record.IsAnonymousRecord = true;
Person_in8Record.UniqueId = "d557b09e-c438-18d8-ef36-c97f9824330d";
Person_in8Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in8Record.init();
return Person_in8Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in8Record = Person_in8Record;

});
define("CON_GLOBE.model$DataInput10Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in8Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput10Rec = (function (_super) {
__extends(DataInput10Rec, _super);
function DataInput10Rec(defaults) {
_super.apply(this, arguments);
}
DataInput10Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in8Record());
}, CON_GLOBEModel.Person_in8Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput10Rec.fromStructure = function (str) {
return new DataInput10Rec(new DataInput10Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput10Rec.init();
return DataInput10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput10Rec = DataInput10Rec;

});
define("CON_GLOBE.model$DataInput10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput10Record = (function (_super) {
__extends(DataInput10Record, _super);
function DataInput10Record(defaults) {
_super.apply(this, arguments);
}
DataInput10Record.attributesToDeclare = function () {
return [
this.attr("DataInput10", "dataInput10Attr", "DataInput10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput10Rec());
}, CON_GLOBEModel.DataInput10Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput10Record.fromStructure = function (str) {
return new DataInput10Record(new DataInput10Record.RecordClass({
dataInput10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput10Record.IsAnonymousRecord = true;
DataInput10Record.UniqueId = "7a1bddb4-9324-9517-81c3-d33cd58efed3";
DataInput10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput10Record.init();
return DataInput10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput10Record = DataInput10Record;

});
define("CON_GLOBE.model$inputMessage11Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header11Record", "CON_GLOBE.model$DataInput10Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage11Rec = (function (_super) {
__extends(inputMessage11Rec, _super);
function inputMessage11Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage11Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header11Record());
}, CON_GLOBEModel.Header11Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput10Record());
}, CON_GLOBEModel.DataInput10Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage11Rec.init();
return inputMessage11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage11Rec = inputMessage11Rec;

});
define("CON_GLOBE.model$Parameter14Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter14Rec = (function (_super) {
__extends(Parameter14Rec, _super);
function Parameter14Rec(defaults) {
_super.apply(this, arguments);
}
Parameter14Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter14Rec.init();
return Parameter14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter14Rec = Parameter14Rec;

});
define("CON_GLOBE.model$Parameter14Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter14Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter14Record = (function (_super) {
__extends(Parameter14Record, _super);
function Parameter14Record(defaults) {
_super.apply(this, arguments);
}
Parameter14Record.attributesToDeclare = function () {
return [
this.attr("Parameter14", "parameter14Attr", "Parameter14", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter14Rec());
}, CON_GLOBEModel.Parameter14Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter14Record.fromStructure = function (str) {
return new Parameter14Record(new Parameter14Record.RecordClass({
parameter14Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter14Record.IsAnonymousRecord = true;
Parameter14Record.UniqueId = "c1fe384a-be22-b068-f860-15d2f1638009";
Parameter14Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter14Record.init();
return Parameter14Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter14Record = Parameter14Record;

});
define("CON_GLOBE.model$Parameter14RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter14Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter14RecordList = (function (_super) {
__extends(Parameter14RecordList, _super);
function Parameter14RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter14RecordList.RecordType = CON_GLOBEModel.Parameter14Record;
return Parameter14RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter14RecordList = Parameter14RecordList;

});
define("CON_GLOBE.model$AccessData15Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData15Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData15Record = (function (_super) {
__extends(AccessData15Record, _super);
function AccessData15Record(defaults) {
_super.apply(this, arguments);
}
AccessData15Record.attributesToDeclare = function () {
return [
this.attr("AccessData15", "accessData15Attr", "AccessData15", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData15Rec());
}, CON_GLOBEModel.AccessData15Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData15Record.fromStructure = function (str) {
return new AccessData15Record(new AccessData15Record.RecordClass({
accessData15Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData15Record.IsAnonymousRecord = true;
AccessData15Record.UniqueId = "6241d961-b95d-b03a-95d7-ad4a7e53de86";
AccessData15Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData15Record.init();
return AccessData15Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData15Record = AccessData15Record;

});
define("CON_GLOBE.model$HistoryStep15Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep15Rec = (function (_super) {
__extends(HistoryStep15Rec, _super);
function HistoryStep15Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep15Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep15Rec.init();
return HistoryStep15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep15Rec = HistoryStep15Rec;

});
define("CON_GLOBE.model$HistoryStep15Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep15Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep15Record = (function (_super) {
__extends(HistoryStep15Record, _super);
function HistoryStep15Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep15Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep15", "historyStep15Attr", "HistoryStep15", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep15Rec());
}, CON_GLOBEModel.HistoryStep15Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep15Record.fromStructure = function (str) {
return new HistoryStep15Record(new HistoryStep15Record.RecordClass({
historyStep15Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep15Record.IsAnonymousRecord = true;
HistoryStep15Record.UniqueId = "77b44ff2-b21c-c7f6-9853-98c3ed870abb";
HistoryStep15Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep15Record.init();
return HistoryStep15Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep15Record = HistoryStep15Record;

});
define("CON_GLOBE.model$HistoryStep15RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep15Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep15RecordList = (function (_super) {
__extends(HistoryStep15RecordList, _super);
function HistoryStep15RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep15RecordList.RecordType = CON_GLOBEModel.HistoryStep15Record;
return HistoryStep15RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep15RecordList = HistoryStep15RecordList;

});
define("CON_GLOBE.model$eCodes15Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes15Rec = (function (_super) {
__extends(eCodes15Rec, _super);
function eCodes15Rec(defaults) {
_super.apply(this, arguments);
}
eCodes15Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes15Rec.init();
return eCodes15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes15Rec = eCodes15Rec;

});
define("CON_GLOBE.model$eCodes15Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes15Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes15Record = (function (_super) {
__extends(eCodes15Record, _super);
function eCodes15Record(defaults) {
_super.apply(this, arguments);
}
eCodes15Record.attributesToDeclare = function () {
return [
this.attr("eCodes15", "eCodes15Attr", "eCodes15", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes15Rec());
}, CON_GLOBEModel.eCodes15Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes15Record.fromStructure = function (str) {
return new eCodes15Record(new eCodes15Record.RecordClass({
eCodes15Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes15Record.IsAnonymousRecord = true;
eCodes15Record.UniqueId = "f3f7a7e2-9645-1f91-1d88-459f6389550c";
eCodes15Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes15Record.init();
return eCodes15Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes15Record = eCodes15Record;

});
define("CON_GLOBE.model$eNative14Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative14Rec = (function (_super) {
__extends(eNative14Rec, _super);
function eNative14Rec(defaults) {
_super.apply(this, arguments);
}
eNative14Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative14Rec.init();
return eNative14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative14Rec = eNative14Rec;

});
define("CON_GLOBE.model$eNative14Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative14Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative14Record = (function (_super) {
__extends(eNative14Record, _super);
function eNative14Record(defaults) {
_super.apply(this, arguments);
}
eNative14Record.attributesToDeclare = function () {
return [
this.attr("eNative14", "eNative14Attr", "eNative14", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative14Rec());
}, CON_GLOBEModel.eNative14Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative14Record.fromStructure = function (str) {
return new eNative14Record(new eNative14Record.RecordClass({
eNative14Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative14Record.IsAnonymousRecord = true;
eNative14Record.UniqueId = "38a58534-3a92-0043-eca2-0d8b3c00f61d";
eNative14Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative14Record.init();
return eNative14Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative14Record = eNative14Record;

});
define("CON_GLOBE.model$eNative14RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative14Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative14RecordList = (function (_super) {
__extends(eNative14RecordList, _super);
function eNative14RecordList(defaults) {
_super.apply(this, arguments);
}
eNative14RecordList.RecordType = CON_GLOBEModel.eNative14Record;
return eNative14RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative14RecordList = eNative14RecordList;

});
define("CON_GLOBE.model$Status15Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes15Record", "CON_GLOBE.model$eNative14RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status15Rec = (function (_super) {
__extends(Status15Rec, _super);
function Status15Rec(defaults) {
_super.apply(this, arguments);
}
Status15Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes15Record());
}, CON_GLOBEModel.eCodes15Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative14RecordList());
}, CON_GLOBEModel.eNative14RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status15Rec.init();
return Status15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status15Rec = Status15Rec;

});
define("CON_GLOBE.model$Status15Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status15Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status15Record = (function (_super) {
__extends(Status15Record, _super);
function Status15Record(defaults) {
_super.apply(this, arguments);
}
Status15Record.attributesToDeclare = function () {
return [
this.attr("Status15", "status15Attr", "Status15", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status15Rec());
}, CON_GLOBEModel.Status15Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status15Record.fromStructure = function (str) {
return new Status15Record(new Status15Record.RecordClass({
status15Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status15Record.IsAnonymousRecord = true;
Status15Record.UniqueId = "44af1b41-0c65-8400-cada-dfc3583689d2";
Status15Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status15Record.init();
return Status15Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status15Record = Status15Record;

});
define("CON_GLOBE.model$Header15Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter14RecordList", "CON_GLOBE.model$AccessData15Record", "CON_GLOBE.model$HistoryStep15RecordList", "CON_GLOBE.model$Status15Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header15Rec = (function (_super) {
__extends(Header15Rec, _super);
function Header15Rec(defaults) {
_super.apply(this, arguments);
}
Header15Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter14RecordList());
}, CON_GLOBEModel.Parameter14RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData15Record());
}, CON_GLOBEModel.AccessData15Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep15RecordList());
}, CON_GLOBEModel.HistoryStep15RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status15Record());
}, CON_GLOBEModel.Status15Record)
].concat(_super.attributesToDeclare.call(this));
};
Header15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header15Rec.init();
return Header15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header15Rec = Header15Rec;

});
define("CON_GLOBE.model$eNative8Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative8Rec = (function (_super) {
__extends(eNative8Rec, _super);
function eNative8Rec(defaults) {
_super.apply(this, arguments);
}
eNative8Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative8Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative8Rec.init();
return eNative8Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative8Rec = eNative8Rec;

});
define("CON_GLOBE.model$Parameter11Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter11Rec = (function (_super) {
__extends(Parameter11Rec, _super);
function Parameter11Rec(defaults) {
_super.apply(this, arguments);
}
Parameter11Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter11Rec.init();
return Parameter11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter11Rec = Parameter11Rec;

});
define("CON_GLOBE.model$eCodes11Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes11Rec = (function (_super) {
__extends(eCodes11Rec, _super);
function eCodes11Rec(defaults) {
_super.apply(this, arguments);
}
eCodes11Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes11Rec.init();
return eCodes11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes11Rec = eCodes11Rec;

});
define("CON_GLOBE.model$Address_out4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_out4Rec = (function (_super) {
__extends(Address_out4Rec, _super);
function Address_out4Rec(defaults) {
_super.apply(this, arguments);
}
Address_out4Rec.attributesToDeclare = function () {
return [
this.attr("AddressID", "addressIDAttr", "AddressID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainAddress", "isMainAddressAttr", "IsMainAddress", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Address_out4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Address_out4Rec.init();
return Address_out4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_out4Rec = Address_out4Rec;

});
define("CON_GLOBE.model$Address_out4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_out4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_out4Record = (function (_super) {
__extends(Address_out4Record, _super);
function Address_out4Record(defaults) {
_super.apply(this, arguments);
}
Address_out4Record.attributesToDeclare = function () {
return [
this.attr("Address_out4", "address_out4Attr", "Address_out4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_out4Rec());
}, CON_GLOBEModel.Address_out4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Address_out4Record.fromStructure = function (str) {
return new Address_out4Record(new Address_out4Record.RecordClass({
address_out4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Address_out4Record.IsAnonymousRecord = true;
Address_out4Record.UniqueId = "5540bc59-820e-b076-e832-d7e8b1b5c7b1";
Address_out4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Address_out4Record.init();
return Address_out4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_out4Record = Address_out4Record;

});
define("CON_GLOBE.model$Contact_out4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out4Rec = (function (_super) {
__extends(Contact_out4Rec, _super);
function Contact_out4Rec(defaults) {
_super.apply(this, arguments);
}
Contact_out4Rec.attributesToDeclare = function () {
return [
this.attr("ContactID", "contactIDAttr", "ContactID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailableInPortfolio", "isAvailableInPortfolioAttr", "IsAvailableInPortfolio", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainContact", "isMainContactAttr", "IsMainContact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_out4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_out4Rec.init();
return Contact_out4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_out4Rec = Contact_out4Rec;

});
define("CON_GLOBE.model$Contact_out4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_out4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out4Record = (function (_super) {
__extends(Contact_out4Record, _super);
function Contact_out4Record(defaults) {
_super.apply(this, arguments);
}
Contact_out4Record.attributesToDeclare = function () {
return [
this.attr("Contact_out4", "contact_out4Attr", "Contact_out4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_out4Rec());
}, CON_GLOBEModel.Contact_out4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_out4Record.fromStructure = function (str) {
return new Contact_out4Record(new Contact_out4Record.RecordClass({
contact_out4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_out4Record.IsAnonymousRecord = true;
Contact_out4Record.UniqueId = "393b2df7-6cf5-8827-746a-6dc2b04e3175";
Contact_out4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_out4Record.init();
return Contact_out4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_out4Record = Contact_out4Record;

});
define("CON_GLOBE.model$Contact_out4RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_out4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out4RecordList = (function (_super) {
__extends(Contact_out4RecordList, _super);
function Contact_out4RecordList(defaults) {
_super.apply(this, arguments);
}
Contact_out4RecordList.RecordType = CON_GLOBEModel.Contact_out4Record;
return Contact_out4RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Contact_out4RecordList = Contact_out4RecordList;

});
define("CON_GLOBE.model$Person_out9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_out4Record", "CON_GLOBE.model$Contact_out4RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out9Rec = (function (_super) {
__extends(Person_out9Rec, _super);
function Person_out9Rec(defaults) {
_super.apply(this, arguments);
}
Person_out9Rec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_out4Record());
}, CON_GLOBEModel.Address_out4Record), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_out4RecordList());
}, CON_GLOBEModel.Contact_out4RecordList), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out9Rec.init();
return Person_out9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out9Rec = Person_out9Rec;

});
define("CON_GLOBE.model$eNative4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative4Rec = (function (_super) {
__extends(eNative4Rec, _super);
function eNative4Rec(defaults) {
_super.apply(this, arguments);
}
eNative4Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative4Rec.init();
return eNative4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative4Rec = eNative4Rec;

});
define("CON_GLOBE.model$Parameter5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter5Rec = (function (_super) {
__extends(Parameter5Rec, _super);
function Parameter5Rec(defaults) {
_super.apply(this, arguments);
}
Parameter5Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter5Rec.init();
return Parameter5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter5Rec = Parameter5Rec;

});
define("CON_GLOBE.model$Parameter5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter5Record = (function (_super) {
__extends(Parameter5Record, _super);
function Parameter5Record(defaults) {
_super.apply(this, arguments);
}
Parameter5Record.attributesToDeclare = function () {
return [
this.attr("Parameter5", "parameter5Attr", "Parameter5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter5Rec());
}, CON_GLOBEModel.Parameter5Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter5Record.fromStructure = function (str) {
return new Parameter5Record(new Parameter5Record.RecordClass({
parameter5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter5Record.IsAnonymousRecord = true;
Parameter5Record.UniqueId = "76e86080-464d-7222-3b85-c22ee1c24321";
Parameter5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter5Record.init();
return Parameter5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter5Record = Parameter5Record;

});
define("CON_GLOBE.model$Parameter5RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter5RecordList = (function (_super) {
__extends(Parameter5RecordList, _super);
function Parameter5RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter5RecordList.RecordType = CON_GLOBEModel.Parameter5Record;
return Parameter5RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter5RecordList = Parameter5RecordList;

});
define("CON_GLOBE.model$AccessData5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData5Rec = (function (_super) {
__extends(AccessData5Rec, _super);
function AccessData5Rec(defaults) {
_super.apply(this, arguments);
}
AccessData5Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData5Rec.init();
return AccessData5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData5Rec = AccessData5Rec;

});
define("CON_GLOBE.model$AccessData5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData5Record = (function (_super) {
__extends(AccessData5Record, _super);
function AccessData5Record(defaults) {
_super.apply(this, arguments);
}
AccessData5Record.attributesToDeclare = function () {
return [
this.attr("AccessData5", "accessData5Attr", "AccessData5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData5Rec());
}, CON_GLOBEModel.AccessData5Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData5Record.fromStructure = function (str) {
return new AccessData5Record(new AccessData5Record.RecordClass({
accessData5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData5Record.IsAnonymousRecord = true;
AccessData5Record.UniqueId = "9c81ad5c-a601-1693-6ad3-533a76a85bd4";
AccessData5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData5Record.init();
return AccessData5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData5Record = AccessData5Record;

});
define("CON_GLOBE.model$HistoryStep5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep5Rec = (function (_super) {
__extends(HistoryStep5Rec, _super);
function HistoryStep5Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep5Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep5Rec.init();
return HistoryStep5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep5Rec = HistoryStep5Rec;

});
define("CON_GLOBE.model$HistoryStep5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep5Record = (function (_super) {
__extends(HistoryStep5Record, _super);
function HistoryStep5Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep5Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep5", "historyStep5Attr", "HistoryStep5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep5Rec());
}, CON_GLOBEModel.HistoryStep5Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep5Record.fromStructure = function (str) {
return new HistoryStep5Record(new HistoryStep5Record.RecordClass({
historyStep5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep5Record.IsAnonymousRecord = true;
HistoryStep5Record.UniqueId = "23513510-f246-79f5-e2e3-6bc0d7eb1330";
HistoryStep5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep5Record.init();
return HistoryStep5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep5Record = HistoryStep5Record;

});
define("CON_GLOBE.model$HistoryStep5RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep5RecordList = (function (_super) {
__extends(HistoryStep5RecordList, _super);
function HistoryStep5RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep5RecordList.RecordType = CON_GLOBEModel.HistoryStep5Record;
return HistoryStep5RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep5RecordList = HistoryStep5RecordList;

});
define("CON_GLOBE.model$eCodes5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes5Rec = (function (_super) {
__extends(eCodes5Rec, _super);
function eCodes5Rec(defaults) {
_super.apply(this, arguments);
}
eCodes5Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes5Rec.init();
return eCodes5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes5Rec = eCodes5Rec;

});
define("CON_GLOBE.model$eCodes5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes5Record = (function (_super) {
__extends(eCodes5Record, _super);
function eCodes5Record(defaults) {
_super.apply(this, arguments);
}
eCodes5Record.attributesToDeclare = function () {
return [
this.attr("eCodes5", "eCodes5Attr", "eCodes5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes5Rec());
}, CON_GLOBEModel.eCodes5Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes5Record.fromStructure = function (str) {
return new eCodes5Record(new eCodes5Record.RecordClass({
eCodes5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes5Record.IsAnonymousRecord = true;
eCodes5Record.UniqueId = "476efd1a-7fd9-dc53-bde6-275a706347f4";
eCodes5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes5Record.init();
return eCodes5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes5Record = eCodes5Record;

});
define("CON_GLOBE.model$eNative5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative5Rec = (function (_super) {
__extends(eNative5Rec, _super);
function eNative5Rec(defaults) {
_super.apply(this, arguments);
}
eNative5Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative5Rec.init();
return eNative5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative5Rec = eNative5Rec;

});
define("CON_GLOBE.model$eNative5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative5Record = (function (_super) {
__extends(eNative5Record, _super);
function eNative5Record(defaults) {
_super.apply(this, arguments);
}
eNative5Record.attributesToDeclare = function () {
return [
this.attr("eNative5", "eNative5Attr", "eNative5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative5Rec());
}, CON_GLOBEModel.eNative5Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative5Record.fromStructure = function (str) {
return new eNative5Record(new eNative5Record.RecordClass({
eNative5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative5Record.IsAnonymousRecord = true;
eNative5Record.UniqueId = "45cf0e70-9c28-18ad-69bb-c037f8f5f86c";
eNative5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative5Record.init();
return eNative5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative5Record = eNative5Record;

});
define("CON_GLOBE.model$eNative5RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative5RecordList = (function (_super) {
__extends(eNative5RecordList, _super);
function eNative5RecordList(defaults) {
_super.apply(this, arguments);
}
eNative5RecordList.RecordType = CON_GLOBEModel.eNative5Record;
return eNative5RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative5RecordList = eNative5RecordList;

});
define("CON_GLOBE.model$Status5Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes5Record", "CON_GLOBE.model$eNative5RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status5Rec = (function (_super) {
__extends(Status5Rec, _super);
function Status5Rec(defaults) {
_super.apply(this, arguments);
}
Status5Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes5Record());
}, CON_GLOBEModel.eCodes5Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative5RecordList());
}, CON_GLOBEModel.eNative5RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status5Rec.init();
return Status5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status5Rec = Status5Rec;

});
define("CON_GLOBE.model$Status5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status5Record = (function (_super) {
__extends(Status5Record, _super);
function Status5Record(defaults) {
_super.apply(this, arguments);
}
Status5Record.attributesToDeclare = function () {
return [
this.attr("Status5", "status5Attr", "Status5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status5Rec());
}, CON_GLOBEModel.Status5Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status5Record.fromStructure = function (str) {
return new Status5Record(new Status5Record.RecordClass({
status5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status5Record.IsAnonymousRecord = true;
Status5Record.UniqueId = "bca20505-ed71-41de-e3e3-80ce2574e5be";
Status5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status5Record.init();
return Status5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status5Record = Status5Record;

});
define("CON_GLOBE.model$Header5Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter5RecordList", "CON_GLOBE.model$AccessData5Record", "CON_GLOBE.model$HistoryStep5RecordList", "CON_GLOBE.model$Status5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header5Rec = (function (_super) {
__extends(Header5Rec, _super);
function Header5Rec(defaults) {
_super.apply(this, arguments);
}
Header5Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter5RecordList());
}, CON_GLOBEModel.Parameter5RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData5Record());
}, CON_GLOBEModel.AccessData5Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep5RecordList());
}, CON_GLOBEModel.HistoryStep5RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status5Record());
}, CON_GLOBEModel.Status5Record)
].concat(_super.attributesToDeclare.call(this));
};
Header5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header5Rec.init();
return Header5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header5Rec = Header5Rec;

});
define("CON_GLOBE.model$Header5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header5Record = (function (_super) {
__extends(Header5Record, _super);
function Header5Record(defaults) {
_super.apply(this, arguments);
}
Header5Record.attributesToDeclare = function () {
return [
this.attr("Header5", "header5Attr", "Header5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header5Rec());
}, CON_GLOBEModel.Header5Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header5Record.fromStructure = function (str) {
return new Header5Record(new Header5Record.RecordClass({
header5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header5Record.IsAnonymousRecord = true;
Header5Record.UniqueId = "50eb53d5-e798-6709-8cac-fdd97d027f38";
Header5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header5Record.init();
return Header5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header5Record = Header5Record;

});
define("CON_GLOBE.model$Person_out4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out4Rec = (function (_super) {
__extends(Person_out4Rec, _super);
function Person_out4Rec(defaults) {
_super.apply(this, arguments);
}
Person_out4Rec.attributesToDeclare = function () {
return [
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out4Rec.fromStructure = function (str) {
return new Person_out4Rec(new Person_out4Rec.RecordClass({
personIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out4Rec.init();
return Person_out4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out4Rec = Person_out4Rec;

});
define("CON_GLOBE.model$Person_out4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out4Record = (function (_super) {
__extends(Person_out4Record, _super);
function Person_out4Record(defaults) {
_super.apply(this, arguments);
}
Person_out4Record.attributesToDeclare = function () {
return [
this.attr("Person_out4", "person_out4Attr", "Person_out4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out4Rec());
}, CON_GLOBEModel.Person_out4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_out4Record.fromStructure = function (str) {
return new Person_out4Record(new Person_out4Record.RecordClass({
person_out4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out4Record.IsAnonymousRecord = true;
Person_out4Record.UniqueId = "13575f73-a5d0-baad-d6b9-2eb7f8127356";
Person_out4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_out4Record.init();
return Person_out4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out4Record = Person_out4Record;

});
define("CON_GLOBE.model$Contact_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out2Rec = (function (_super) {
__extends(Contact_out2Rec, _super);
function Contact_out2Rec(defaults) {
_super.apply(this, arguments);
}
Contact_out2Rec.attributesToDeclare = function () {
return [
this.attr("ContactID", "contactIDAttr", "ContactID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsEmailBilling", "isEmailBillingAttr", "IsEmailBilling", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_out2Rec.init();
return Contact_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_out2Rec = Contact_out2Rec;

});
define("CON_GLOBE.model$Contact_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out2Record = (function (_super) {
__extends(Contact_out2Record, _super);
function Contact_out2Record(defaults) {
_super.apply(this, arguments);
}
Contact_out2Record.attributesToDeclare = function () {
return [
this.attr("Contact_out2", "contact_out2Attr", "Contact_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_out2Rec());
}, CON_GLOBEModel.Contact_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_out2Record.fromStructure = function (str) {
return new Contact_out2Record(new Contact_out2Record.RecordClass({
contact_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_out2Record.IsAnonymousRecord = true;
Contact_out2Record.UniqueId = "b874899d-fd2e-11f0-89d2-a9010eb83fd0";
Contact_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_out2Record.init();
return Contact_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_out2Record = Contact_out2Record;

});
define("CON_GLOBE.model$Contact_out2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_out2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out2RecordList = (function (_super) {
__extends(Contact_out2RecordList, _super);
function Contact_out2RecordList(defaults) {
_super.apply(this, arguments);
}
Contact_out2RecordList.RecordType = CON_GLOBEModel.Contact_out2Record;
return Contact_out2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Contact_out2RecordList = Contact_out2RecordList;

});
define("CON_GLOBE.model$Account_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_out2Rec = (function (_super) {
__extends(Account_out2Rec, _super);
function Account_out2Rec(defaults) {
_super.apply(this, arguments);
}
Account_out2Rec.attributesToDeclare = function () {
return [
this.attr("AccountID", "accountIDAttr", "AccountID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_out2Rec.init();
return Account_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_out2Rec = Account_out2Rec;

});
define("CON_GLOBE.model$Account_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_out2Record = (function (_super) {
__extends(Account_out2Record, _super);
function Account_out2Record(defaults) {
_super.apply(this, arguments);
}
Account_out2Record.attributesToDeclare = function () {
return [
this.attr("Account_out2", "account_out2Attr", "Account_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_out2Rec());
}, CON_GLOBEModel.Account_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_out2Record.fromStructure = function (str) {
return new Account_out2Record(new Account_out2Record.RecordClass({
account_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_out2Record.IsAnonymousRecord = true;
Account_out2Record.UniqueId = "1327d913-6107-c36f-c6f2-590ab85e12ae";
Account_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_out2Record.init();
return Account_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_out2Record = Account_out2Record;

});
define("CON_GLOBE.model$BillingAccount_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccount_outRec = (function (_super) {
__extends(BillingAccount_outRec, _super);
function BillingAccount_outRec(defaults) {
_super.apply(this, arguments);
}
BillingAccount_outRec.attributesToDeclare = function () {
return [
this.attr("BillingAccountID", "billingAccountIDAttr", "BillingAccountID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BillingAccountNumber", "billingAccountNumberAttr", "BillingAccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BillingAccount_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
BillingAccount_outRec.init();
return BillingAccount_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccount_outRec = BillingAccount_outRec;

});
define("CON_GLOBE.model$BillingAccount_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$BillingAccount_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccount_outRecord = (function (_super) {
__extends(BillingAccount_outRecord, _super);
function BillingAccount_outRecord(defaults) {
_super.apply(this, arguments);
}
BillingAccount_outRecord.attributesToDeclare = function () {
return [
this.attr("BillingAccount_out", "billingAccount_outAttr", "BillingAccount_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccount_outRec());
}, CON_GLOBEModel.BillingAccount_outRec)
].concat(_super.attributesToDeclare.call(this));
};
BillingAccount_outRecord.fromStructure = function (str) {
return new BillingAccount_outRecord(new BillingAccount_outRecord.RecordClass({
billingAccount_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BillingAccount_outRecord.IsAnonymousRecord = true;
BillingAccount_outRecord.UniqueId = "4c757efc-dd21-8dcd-094d-bf002b7d4882";
BillingAccount_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
BillingAccount_outRecord.init();
return BillingAccount_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccount_outRecord = BillingAccount_outRecord;

});
define("CON_GLOBE.model$Role_outRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out4Record", "CON_GLOBE.model$Contact_out2RecordList", "CON_GLOBE.model$Account_out2Record", "CON_GLOBE.model$BillingAccount_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_outRec = (function (_super) {
__extends(Role_outRec, _super);
function Role_outRec(defaults) {
_super.apply(this, arguments);
}
Role_outRec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out4Record());
}, CON_GLOBEModel.Person_out4Record), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_out2RecordList());
}, CON_GLOBEModel.Contact_out2RecordList), 
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_out2Record());
}, CON_GLOBEModel.Account_out2Record), 
this.attr("BillingAccount", "billingAccountAttr", "BillingAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccount_outRecord());
}, CON_GLOBEModel.BillingAccount_outRecord), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreationDate", "creationDateAttr", "CreationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DeactivationDate", "deactivationDateAttr", "DeactivationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateProcessID", "lastUpdateProcessIDAttr", "LastUpdateProcessID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyCreationDate", "legacyCreationDateAttr", "LegacyCreationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ReactivationDate", "reactivationDateAttr", "ReactivationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RoleID", "roleIDAttr", "RoleID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Role_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Role_outRec.init();
return Role_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_outRec = Role_outRec;

});
define("CON_GLOBE.model$Role_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_outRecord = (function (_super) {
__extends(Role_outRecord, _super);
function Role_outRecord(defaults) {
_super.apply(this, arguments);
}
Role_outRecord.attributesToDeclare = function () {
return [
this.attr("Role_out", "role_outAttr", "Role_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_outRec());
}, CON_GLOBEModel.Role_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Role_outRecord.fromStructure = function (str) {
return new Role_outRecord(new Role_outRecord.RecordClass({
role_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Role_outRecord.IsAnonymousRecord = true;
Role_outRecord.UniqueId = "e3811b82-e8f2-3b03-0641-337e8683b992";
Role_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Role_outRecord.init();
return Role_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_outRecord = Role_outRecord;

});
define("CON_GLOBE.model$Role_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_outRecordList = (function (_super) {
__extends(Role_outRecordList, _super);
function Role_outRecordList(defaults) {
_super.apply(this, arguments);
}
Role_outRecordList.RecordType = CON_GLOBEModel.Role_outRecord;
return Role_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Role_outRecordList = Role_outRecordList;

});
define("CON_GLOBE.model$outputMessage5Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header5Record", "CON_GLOBE.model$Role_outRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage5Rec = (function (_super) {
__extends(outputMessage5Rec, _super);
function outputMessage5Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage5Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header5Record());
}, CON_GLOBEModel.Header5Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_outRecordList());
}, CON_GLOBEModel.Role_outRecordList)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage5Rec.init();
return outputMessage5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage5Rec = outputMessage5Rec;

});
define("CON_GLOBE.model$AddressLocation_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AddressLocation_out2Rec = (function (_super) {
__extends(AddressLocation_out2Rec, _super);
function AddressLocation_out2Rec(defaults) {
_super.apply(this, arguments);
}
AddressLocation_out2Rec.attributesToDeclare = function () {
return [
this.attr("AddressLocationID", "addressLocationIDAttr", "AddressLocationID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AddressLocation_out2Rec.fromStructure = function (str) {
return new AddressLocation_out2Rec(new AddressLocation_out2Rec.RecordClass({
addressLocationIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AddressLocation_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AddressLocation_out2Rec.init();
return AddressLocation_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AddressLocation_out2Rec = AddressLocation_out2Rec;

});
define("CON_GLOBE.model$Parameter9Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter9Rec = (function (_super) {
__extends(Parameter9Rec, _super);
function Parameter9Rec(defaults) {
_super.apply(this, arguments);
}
Parameter9Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter9Rec.init();
return Parameter9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter9Rec = Parameter9Rec;

});
define("CON_GLOBE.model$Parameter9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter9Record = (function (_super) {
__extends(Parameter9Record, _super);
function Parameter9Record(defaults) {
_super.apply(this, arguments);
}
Parameter9Record.attributesToDeclare = function () {
return [
this.attr("Parameter9", "parameter9Attr", "Parameter9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter9Rec());
}, CON_GLOBEModel.Parameter9Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter9Record.fromStructure = function (str) {
return new Parameter9Record(new Parameter9Record.RecordClass({
parameter9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter9Record.IsAnonymousRecord = true;
Parameter9Record.UniqueId = "1800115c-ba33-6402-bedb-55074548521b";
Parameter9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter9Record.init();
return Parameter9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter9Record = Parameter9Record;

});
define("CON_GLOBE.model$Parameter9RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter9RecordList = (function (_super) {
__extends(Parameter9RecordList, _super);
function Parameter9RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter9RecordList.RecordType = CON_GLOBEModel.Parameter9Record;
return Parameter9RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter9RecordList = Parameter9RecordList;

});
define("CON_GLOBE.model$AccessData9Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData9Rec = (function (_super) {
__extends(AccessData9Rec, _super);
function AccessData9Rec(defaults) {
_super.apply(this, arguments);
}
AccessData9Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData9Rec.init();
return AccessData9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData9Rec = AccessData9Rec;

});
define("CON_GLOBE.model$AccessData9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData9Record = (function (_super) {
__extends(AccessData9Record, _super);
function AccessData9Record(defaults) {
_super.apply(this, arguments);
}
AccessData9Record.attributesToDeclare = function () {
return [
this.attr("AccessData9", "accessData9Attr", "AccessData9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData9Rec());
}, CON_GLOBEModel.AccessData9Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData9Record.fromStructure = function (str) {
return new AccessData9Record(new AccessData9Record.RecordClass({
accessData9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData9Record.IsAnonymousRecord = true;
AccessData9Record.UniqueId = "a1b0c4c5-dc70-7576-58db-d29f84232845";
AccessData9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData9Record.init();
return AccessData9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData9Record = AccessData9Record;

});
define("CON_GLOBE.model$HistoryStep9Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep9Rec = (function (_super) {
__extends(HistoryStep9Rec, _super);
function HistoryStep9Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep9Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep9Rec.init();
return HistoryStep9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep9Rec = HistoryStep9Rec;

});
define("CON_GLOBE.model$HistoryStep9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep9Record = (function (_super) {
__extends(HistoryStep9Record, _super);
function HistoryStep9Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep9Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep9", "historyStep9Attr", "HistoryStep9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep9Rec());
}, CON_GLOBEModel.HistoryStep9Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep9Record.fromStructure = function (str) {
return new HistoryStep9Record(new HistoryStep9Record.RecordClass({
historyStep9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep9Record.IsAnonymousRecord = true;
HistoryStep9Record.UniqueId = "742e422b-f076-1feb-6be6-c5de5fd4f5ee";
HistoryStep9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep9Record.init();
return HistoryStep9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep9Record = HistoryStep9Record;

});
define("CON_GLOBE.model$HistoryStep9RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep9RecordList = (function (_super) {
__extends(HistoryStep9RecordList, _super);
function HistoryStep9RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep9RecordList.RecordType = CON_GLOBEModel.HistoryStep9Record;
return HistoryStep9RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep9RecordList = HistoryStep9RecordList;

});
define("CON_GLOBE.model$eCodes9Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes9Rec = (function (_super) {
__extends(eCodes9Rec, _super);
function eCodes9Rec(defaults) {
_super.apply(this, arguments);
}
eCodes9Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes9Rec.init();
return eCodes9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes9Rec = eCodes9Rec;

});
define("CON_GLOBE.model$eCodes9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes9Record = (function (_super) {
__extends(eCodes9Record, _super);
function eCodes9Record(defaults) {
_super.apply(this, arguments);
}
eCodes9Record.attributesToDeclare = function () {
return [
this.attr("eCodes9", "eCodes9Attr", "eCodes9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes9Rec());
}, CON_GLOBEModel.eCodes9Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes9Record.fromStructure = function (str) {
return new eCodes9Record(new eCodes9Record.RecordClass({
eCodes9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes9Record.IsAnonymousRecord = true;
eCodes9Record.UniqueId = "03a80feb-230e-72f2-93bb-b173b9101fd5";
eCodes9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes9Record.init();
return eCodes9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes9Record = eCodes9Record;

});
define("CON_GLOBE.model$eNative8Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative8Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative8Record = (function (_super) {
__extends(eNative8Record, _super);
function eNative8Record(defaults) {
_super.apply(this, arguments);
}
eNative8Record.attributesToDeclare = function () {
return [
this.attr("eNative8", "eNative8Attr", "eNative8", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative8Rec());
}, CON_GLOBEModel.eNative8Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative8Record.fromStructure = function (str) {
return new eNative8Record(new eNative8Record.RecordClass({
eNative8Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative8Record.IsAnonymousRecord = true;
eNative8Record.UniqueId = "33a512f4-16e8-e7c3-1678-40ce4e5f31a8";
eNative8Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative8Record.init();
return eNative8Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative8Record = eNative8Record;

});
define("CON_GLOBE.model$eNative8RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative8Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative8RecordList = (function (_super) {
__extends(eNative8RecordList, _super);
function eNative8RecordList(defaults) {
_super.apply(this, arguments);
}
eNative8RecordList.RecordType = CON_GLOBEModel.eNative8Record;
return eNative8RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative8RecordList = eNative8RecordList;

});
define("CON_GLOBE.model$Status9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes9Record", "CON_GLOBE.model$eNative8RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status9Rec = (function (_super) {
__extends(Status9Rec, _super);
function Status9Rec(defaults) {
_super.apply(this, arguments);
}
Status9Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes9Record());
}, CON_GLOBEModel.eCodes9Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative8RecordList());
}, CON_GLOBEModel.eNative8RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status9Rec.init();
return Status9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status9Rec = Status9Rec;

});
define("CON_GLOBE.model$Status9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status9Record = (function (_super) {
__extends(Status9Record, _super);
function Status9Record(defaults) {
_super.apply(this, arguments);
}
Status9Record.attributesToDeclare = function () {
return [
this.attr("Status9", "status9Attr", "Status9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status9Rec());
}, CON_GLOBEModel.Status9Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status9Record.fromStructure = function (str) {
return new Status9Record(new Status9Record.RecordClass({
status9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status9Record.IsAnonymousRecord = true;
Status9Record.UniqueId = "412a1554-40f3-a8c0-3e8c-f05f23e0e7f8";
Status9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status9Record.init();
return Status9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status9Record = Status9Record;

});
define("CON_GLOBE.model$Header9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter9RecordList", "CON_GLOBE.model$AccessData9Record", "CON_GLOBE.model$HistoryStep9RecordList", "CON_GLOBE.model$Status9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header9Rec = (function (_super) {
__extends(Header9Rec, _super);
function Header9Rec(defaults) {
_super.apply(this, arguments);
}
Header9Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter9RecordList());
}, CON_GLOBEModel.Parameter9RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData9Record());
}, CON_GLOBEModel.AccessData9Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep9RecordList());
}, CON_GLOBEModel.HistoryStep9RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status9Record());
}, CON_GLOBEModel.Status9Record)
].concat(_super.attributesToDeclare.call(this));
};
Header9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header9Rec.init();
return Header9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header9Rec = Header9Rec;

});
define("CON_GLOBE.model$Header9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header9Record = (function (_super) {
__extends(Header9Record, _super);
function Header9Record(defaults) {
_super.apply(this, arguments);
}
Header9Record.attributesToDeclare = function () {
return [
this.attr("Header9", "header9Attr", "Header9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header9Rec());
}, CON_GLOBEModel.Header9Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header9Record.fromStructure = function (str) {
return new Header9Record(new Header9Record.RecordClass({
header9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header9Record.IsAnonymousRecord = true;
Header9Record.UniqueId = "98fb93ff-080e-49f4-baa3-5bf324e5c174";
Header9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header9Record.init();
return Header9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header9Record = Header9Record;

});
define("CON_GLOBE.model$GroupFunction_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var GroupFunction_out2Rec = (function (_super) {
__extends(GroupFunction_out2Rec, _super);
function GroupFunction_out2Rec(defaults) {
_super.apply(this, arguments);
}
GroupFunction_out2Rec.attributesToDeclare = function () {
return [
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
GroupFunction_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GroupFunction_out2Rec.init();
return GroupFunction_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.GroupFunction_out2Rec = GroupFunction_out2Rec;

});
define("CON_GLOBE.model$GroupFunction_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$GroupFunction_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var GroupFunction_out2Record = (function (_super) {
__extends(GroupFunction_out2Record, _super);
function GroupFunction_out2Record(defaults) {
_super.apply(this, arguments);
}
GroupFunction_out2Record.attributesToDeclare = function () {
return [
this.attr("GroupFunction_out2", "groupFunction_out2Attr", "GroupFunction_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.GroupFunction_out2Rec());
}, CON_GLOBEModel.GroupFunction_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
GroupFunction_out2Record.fromStructure = function (str) {
return new GroupFunction_out2Record(new GroupFunction_out2Record.RecordClass({
groupFunction_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupFunction_out2Record.IsAnonymousRecord = true;
GroupFunction_out2Record.UniqueId = "7e122c7a-9e1f-3ed1-bd0f-76373cf711a9";
GroupFunction_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
GroupFunction_out2Record.init();
return GroupFunction_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.GroupFunction_out2Record = GroupFunction_out2Record;

});
define("CON_GLOBE.model$Group_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$GroupFunction_out2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Group_out2Rec = (function (_super) {
__extends(Group_out2Rec, _super);
function Group_out2Rec(defaults) {
_super.apply(this, arguments);
}
Group_out2Rec.attributesToDeclare = function () {
return [
this.attr("GroupFunction", "groupFunctionAttr", "GroupFunction", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.GroupFunction_out2Record());
}, CON_GLOBEModel.GroupFunction_out2Record), 
this.attr("GroupID", "groupIDAttr", "GroupID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Group_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Group_out2Rec.init();
return Group_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Group_out2Rec = Group_out2Rec;

});
define("CON_GLOBE.model$Group_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Group_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Group_out2Record = (function (_super) {
__extends(Group_out2Record, _super);
function Group_out2Record(defaults) {
_super.apply(this, arguments);
}
Group_out2Record.attributesToDeclare = function () {
return [
this.attr("Group_out2", "group_out2Attr", "Group_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Group_out2Rec());
}, CON_GLOBEModel.Group_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Group_out2Record.fromStructure = function (str) {
return new Group_out2Record(new Group_out2Record.RecordClass({
group_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Group_out2Record.IsAnonymousRecord = true;
Group_out2Record.UniqueId = "da8dcef6-3354-f13f-aa72-d9c3d6a58219";
Group_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Group_out2Record.init();
return Group_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Group_out2Record = Group_out2Record;

});
define("CON_GLOBE.model$Group_out2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Group_out2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Group_out2RecordList = (function (_super) {
__extends(Group_out2RecordList, _super);
function Group_out2RecordList(defaults) {
_super.apply(this, arguments);
}
Group_out2RecordList.RecordType = CON_GLOBEModel.Group_out2Record;
return Group_out2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Group_out2RecordList = Group_out2RecordList;

});
define("CON_GLOBE.model$Person_out5Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Group_out2RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out5Rec = (function (_super) {
__extends(Person_out5Rec, _super);
function Person_out5Rec(defaults) {
_super.apply(this, arguments);
}
Person_out5Rec.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Group_out2RecordList());
}, CON_GLOBEModel.Group_out2RecordList), 
this.attr("AbvTitle", "abvTitleAttr", "AbvTitle", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ActivationDate", "activationDateAttr", "ActivationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Birthdate", "birthdateAttr", "Birthdate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAE", "cAEAttr", "CAE", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAEDescription", "cAEDescriptionAttr", "CAEDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CertificationCommercialRegistration", "certificationCommercialRegistrationAttr", "CertificationCommercialRegistration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CollaboratorsRange", "collaboratorsRangeAttr", "CollaboratorsRange", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CommunicationExpenses", "communicationExpensesAttr", "CommunicationExpenses", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreationDate", "creationDateAttr", "CreationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DN", "dNAttr", "DN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FlagOldNIF", "flagOldNIFAttr", "FlagOldNIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Gender", "genderAttr", "Gender", false, OS.Types.Text, function () {
return "";
}), 
this.attr("GroupCount", "groupCountAttr", "GroupCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsProspect", "isProspectAttr", "IsProspect", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateProcessID", "lastUpdateProcessIDAttr", "LastUpdateProcessID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyBSCSID", "legacyBSCSIDAttr", "LegacyBSCSID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacySiebelID", "legacySiebelIDAttr", "LegacySiebelID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIFType", "nIFTypeAttr", "NIFType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OldNIF", "oldNIFAttr", "OldNIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ParentID", "parentIDAttr", "ParentID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerName", "personManagerNameAttr", "PersonManagerName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerUser", "personManagerUserAttr", "PersonManagerUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProspectType", "prospectTypeAttr", "ProspectType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TurnoverValue", "turnoverValueAttr", "TurnoverValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Website", "websiteAttr", "Website", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out5Rec.init();
return Person_out5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out5Rec = Person_out5Rec;

});
define("CON_GLOBE.model$Person_out5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out5Record = (function (_super) {
__extends(Person_out5Record, _super);
function Person_out5Record(defaults) {
_super.apply(this, arguments);
}
Person_out5Record.attributesToDeclare = function () {
return [
this.attr("Person_out5", "person_out5Attr", "Person_out5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out5Rec());
}, CON_GLOBEModel.Person_out5Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_out5Record.fromStructure = function (str) {
return new Person_out5Record(new Person_out5Record.RecordClass({
person_out5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out5Record.IsAnonymousRecord = true;
Person_out5Record.UniqueId = "e008b382-9dd7-e14a-8fc8-26f03cd2f6de";
Person_out5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_out5Record.init();
return Person_out5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out5Record = Person_out5Record;

});
define("CON_GLOBE.model$DataOutput6Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput6Rec = (function (_super) {
__extends(DataOutput6Rec, _super);
function DataOutput6Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput6Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out5Record());
}, CON_GLOBEModel.Person_out5Record)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput6Rec.fromStructure = function (str) {
return new DataOutput6Rec(new DataOutput6Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput6Rec.init();
return DataOutput6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput6Rec = DataOutput6Rec;

});
define("CON_GLOBE.model$DataOutput6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput6Record = (function (_super) {
__extends(DataOutput6Record, _super);
function DataOutput6Record(defaults) {
_super.apply(this, arguments);
}
DataOutput6Record.attributesToDeclare = function () {
return [
this.attr("DataOutput6", "dataOutput6Attr", "DataOutput6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput6Rec());
}, CON_GLOBEModel.DataOutput6Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput6Record.fromStructure = function (str) {
return new DataOutput6Record(new DataOutput6Record.RecordClass({
dataOutput6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput6Record.IsAnonymousRecord = true;
DataOutput6Record.UniqueId = "19f7ac85-4ce8-d238-5c94-a692f5aefed5";
DataOutput6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput6Record.init();
return DataOutput6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput6Record = DataOutput6Record;

});
define("CON_GLOBE.model$outputMessage9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header9Record", "CON_GLOBE.model$DataOutput6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage9Rec = (function (_super) {
__extends(outputMessage9Rec, _super);
function outputMessage9Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage9Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header9Record());
}, CON_GLOBEModel.Header9Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput6Record());
}, CON_GLOBEModel.DataOutput6Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage9Rec.init();
return outputMessage9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage9Rec = outputMessage9Rec;

});
define("CON_GLOBE.model$Parameter3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter3Rec = (function (_super) {
__extends(Parameter3Rec, _super);
function Parameter3Rec(defaults) {
_super.apply(this, arguments);
}
Parameter3Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter3Rec.init();
return Parameter3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter3Rec = Parameter3Rec;

});
define("CON_GLOBE.model$Parameter3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter3Record = (function (_super) {
__extends(Parameter3Record, _super);
function Parameter3Record(defaults) {
_super.apply(this, arguments);
}
Parameter3Record.attributesToDeclare = function () {
return [
this.attr("Parameter3", "parameter3Attr", "Parameter3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter3Rec());
}, CON_GLOBEModel.Parameter3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter3Record.fromStructure = function (str) {
return new Parameter3Record(new Parameter3Record.RecordClass({
parameter3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter3Record.IsAnonymousRecord = true;
Parameter3Record.UniqueId = "a934d451-9855-5681-d96e-606b5d6ed83e";
Parameter3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter3Record.init();
return Parameter3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter3Record = Parameter3Record;

});
define("CON_GLOBE.model$Parameter3RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter3RecordList = (function (_super) {
__extends(Parameter3RecordList, _super);
function Parameter3RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter3RecordList.RecordType = CON_GLOBEModel.Parameter3Record;
return Parameter3RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter3RecordList = Parameter3RecordList;

});
define("CON_GLOBE.model$AccessData3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData3Rec = (function (_super) {
__extends(AccessData3Rec, _super);
function AccessData3Rec(defaults) {
_super.apply(this, arguments);
}
AccessData3Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData3Rec.init();
return AccessData3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData3Rec = AccessData3Rec;

});
define("CON_GLOBE.model$AccessData3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData3Record = (function (_super) {
__extends(AccessData3Record, _super);
function AccessData3Record(defaults) {
_super.apply(this, arguments);
}
AccessData3Record.attributesToDeclare = function () {
return [
this.attr("AccessData3", "accessData3Attr", "AccessData3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData3Rec());
}, CON_GLOBEModel.AccessData3Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData3Record.fromStructure = function (str) {
return new AccessData3Record(new AccessData3Record.RecordClass({
accessData3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData3Record.IsAnonymousRecord = true;
AccessData3Record.UniqueId = "a90ebdfa-f173-9882-2019-22a32ea25036";
AccessData3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData3Record.init();
return AccessData3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData3Record = AccessData3Record;

});
define("CON_GLOBE.model$HistoryStep3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep3Rec = (function (_super) {
__extends(HistoryStep3Rec, _super);
function HistoryStep3Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep3Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep3Rec.init();
return HistoryStep3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep3Rec = HistoryStep3Rec;

});
define("CON_GLOBE.model$HistoryStep3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep3Record = (function (_super) {
__extends(HistoryStep3Record, _super);
function HistoryStep3Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep3Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep3", "historyStep3Attr", "HistoryStep3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep3Rec());
}, CON_GLOBEModel.HistoryStep3Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep3Record.fromStructure = function (str) {
return new HistoryStep3Record(new HistoryStep3Record.RecordClass({
historyStep3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep3Record.IsAnonymousRecord = true;
HistoryStep3Record.UniqueId = "b2054820-dc2c-3ded-93da-c68c78dc6723";
HistoryStep3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep3Record.init();
return HistoryStep3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep3Record = HistoryStep3Record;

});
define("CON_GLOBE.model$HistoryStep3RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep3RecordList = (function (_super) {
__extends(HistoryStep3RecordList, _super);
function HistoryStep3RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep3RecordList.RecordType = CON_GLOBEModel.HistoryStep3Record;
return HistoryStep3RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep3RecordList = HistoryStep3RecordList;

});
define("CON_GLOBE.model$eCodes3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes3Rec = (function (_super) {
__extends(eCodes3Rec, _super);
function eCodes3Rec(defaults) {
_super.apply(this, arguments);
}
eCodes3Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes3Rec.init();
return eCodes3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes3Rec = eCodes3Rec;

});
define("CON_GLOBE.model$eCodes3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes3Record = (function (_super) {
__extends(eCodes3Record, _super);
function eCodes3Record(defaults) {
_super.apply(this, arguments);
}
eCodes3Record.attributesToDeclare = function () {
return [
this.attr("eCodes3", "eCodes3Attr", "eCodes3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes3Rec());
}, CON_GLOBEModel.eCodes3Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes3Record.fromStructure = function (str) {
return new eCodes3Record(new eCodes3Record.RecordClass({
eCodes3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes3Record.IsAnonymousRecord = true;
eCodes3Record.UniqueId = "f4f33956-531f-68e2-4ee4-0070eee5973b";
eCodes3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes3Record.init();
return eCodes3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes3Record = eCodes3Record;

});
define("CON_GLOBE.model$eNative3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative3Rec = (function (_super) {
__extends(eNative3Rec, _super);
function eNative3Rec(defaults) {
_super.apply(this, arguments);
}
eNative3Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative3Rec.init();
return eNative3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative3Rec = eNative3Rec;

});
define("CON_GLOBE.model$eNative3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative3Record = (function (_super) {
__extends(eNative3Record, _super);
function eNative3Record(defaults) {
_super.apply(this, arguments);
}
eNative3Record.attributesToDeclare = function () {
return [
this.attr("eNative3", "eNative3Attr", "eNative3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative3Rec());
}, CON_GLOBEModel.eNative3Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative3Record.fromStructure = function (str) {
return new eNative3Record(new eNative3Record.RecordClass({
eNative3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative3Record.IsAnonymousRecord = true;
eNative3Record.UniqueId = "1dd242cf-65c0-49ea-34b6-f5b7b4caa743";
eNative3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative3Record.init();
return eNative3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative3Record = eNative3Record;

});
define("CON_GLOBE.model$eNative3RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative3RecordList = (function (_super) {
__extends(eNative3RecordList, _super);
function eNative3RecordList(defaults) {
_super.apply(this, arguments);
}
eNative3RecordList.RecordType = CON_GLOBEModel.eNative3Record;
return eNative3RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative3RecordList = eNative3RecordList;

});
define("CON_GLOBE.model$Status3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes3Record", "CON_GLOBE.model$eNative3RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status3Rec = (function (_super) {
__extends(Status3Rec, _super);
function Status3Rec(defaults) {
_super.apply(this, arguments);
}
Status3Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes3Record());
}, CON_GLOBEModel.eCodes3Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative3RecordList());
}, CON_GLOBEModel.eNative3RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status3Rec.init();
return Status3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status3Rec = Status3Rec;

});
define("CON_GLOBE.model$Status3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status3Record = (function (_super) {
__extends(Status3Record, _super);
function Status3Record(defaults) {
_super.apply(this, arguments);
}
Status3Record.attributesToDeclare = function () {
return [
this.attr("Status3", "status3Attr", "Status3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status3Rec());
}, CON_GLOBEModel.Status3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status3Record.fromStructure = function (str) {
return new Status3Record(new Status3Record.RecordClass({
status3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status3Record.IsAnonymousRecord = true;
Status3Record.UniqueId = "14f3846e-5748-7ef1-9d48-f8131ebbdc37";
Status3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status3Record.init();
return Status3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status3Record = Status3Record;

});
define("CON_GLOBE.model$Header3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter3RecordList", "CON_GLOBE.model$AccessData3Record", "CON_GLOBE.model$HistoryStep3RecordList", "CON_GLOBE.model$Status3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header3Rec = (function (_super) {
__extends(Header3Rec, _super);
function Header3Rec(defaults) {
_super.apply(this, arguments);
}
Header3Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter3RecordList());
}, CON_GLOBEModel.Parameter3RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData3Record());
}, CON_GLOBEModel.AccessData3Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep3RecordList());
}, CON_GLOBEModel.HistoryStep3RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status3Record());
}, CON_GLOBEModel.Status3Record)
].concat(_super.attributesToDeclare.call(this));
};
Header3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header3Rec.init();
return Header3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header3Rec = Header3Rec;

});
define("CON_GLOBE.model$Header3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header3Record = (function (_super) {
__extends(Header3Record, _super);
function Header3Record(defaults) {
_super.apply(this, arguments);
}
Header3Record.attributesToDeclare = function () {
return [
this.attr("Header3", "header3Attr", "Header3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header3Rec());
}, CON_GLOBEModel.Header3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header3Record.fromStructure = function (str) {
return new Header3Record(new Header3Record.RecordClass({
header3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header3Record.IsAnonymousRecord = true;
Header3Record.UniqueId = "07a5ad89-4154-a9ba-5c25-8e9435e5f139";
Header3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header3Record.init();
return Header3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header3Record = Header3Record;

});
define("CON_GLOBE.model$GroupFunction_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var GroupFunction_outRec = (function (_super) {
__extends(GroupFunction_outRec, _super);
function GroupFunction_outRec(defaults) {
_super.apply(this, arguments);
}
GroupFunction_outRec.attributesToDeclare = function () {
return [
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
GroupFunction_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GroupFunction_outRec.init();
return GroupFunction_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.GroupFunction_outRec = GroupFunction_outRec;

});
define("CON_GLOBE.model$GroupFunction_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$GroupFunction_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var GroupFunction_outRecord = (function (_super) {
__extends(GroupFunction_outRecord, _super);
function GroupFunction_outRecord(defaults) {
_super.apply(this, arguments);
}
GroupFunction_outRecord.attributesToDeclare = function () {
return [
this.attr("GroupFunction_out", "groupFunction_outAttr", "GroupFunction_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.GroupFunction_outRec());
}, CON_GLOBEModel.GroupFunction_outRec)
].concat(_super.attributesToDeclare.call(this));
};
GroupFunction_outRecord.fromStructure = function (str) {
return new GroupFunction_outRecord(new GroupFunction_outRecord.RecordClass({
groupFunction_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupFunction_outRecord.IsAnonymousRecord = true;
GroupFunction_outRecord.UniqueId = "94a6a871-8900-d063-b3f4-44d3af65e279";
GroupFunction_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
GroupFunction_outRecord.init();
return GroupFunction_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.GroupFunction_outRecord = GroupFunction_outRecord;

});
define("CON_GLOBE.model$Group_outRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$GroupFunction_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Group_outRec = (function (_super) {
__extends(Group_outRec, _super);
function Group_outRec(defaults) {
_super.apply(this, arguments);
}
Group_outRec.attributesToDeclare = function () {
return [
this.attr("GroupFunction", "groupFunctionAttr", "GroupFunction", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.GroupFunction_outRecord());
}, CON_GLOBEModel.GroupFunction_outRecord), 
this.attr("GroupID", "groupIDAttr", "GroupID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ParentGroupID", "parentGroupIDAttr", "ParentGroupID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Group_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Group_outRec.init();
return Group_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Group_outRec = Group_outRec;

});
define("CON_GLOBE.model$Group_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Group_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Group_outRecord = (function (_super) {
__extends(Group_outRecord, _super);
function Group_outRecord(defaults) {
_super.apply(this, arguments);
}
Group_outRecord.attributesToDeclare = function () {
return [
this.attr("Group_out", "group_outAttr", "Group_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Group_outRec());
}, CON_GLOBEModel.Group_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Group_outRecord.fromStructure = function (str) {
return new Group_outRecord(new Group_outRecord.RecordClass({
group_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Group_outRecord.IsAnonymousRecord = true;
Group_outRecord.UniqueId = "acd401a9-51a8-5d01-2e55-7eae79749ff5";
Group_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Group_outRecord.init();
return Group_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Group_outRecord = Group_outRecord;

});
define("CON_GLOBE.model$Group_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Group_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Group_outRecordList = (function (_super) {
__extends(Group_outRecordList, _super);
function Group_outRecordList(defaults) {
_super.apply(this, arguments);
}
Group_outRecordList.RecordType = CON_GLOBEModel.Group_outRecord;
return Group_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Group_outRecordList = Group_outRecordList;

});
define("CON_GLOBE.model$Person_out3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Group_outRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out3Rec = (function (_super) {
__extends(Person_out3Rec, _super);
function Person_out3Rec(defaults) {
_super.apply(this, arguments);
}
Person_out3Rec.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Group_outRecordList());
}, CON_GLOBEModel.Group_outRecordList), 
this.attr("AbvTitle", "abvTitleAttr", "AbvTitle", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ActivationDate", "activationDateAttr", "ActivationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Birthdate", "birthdateAttr", "Birthdate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAE", "cAEAttr", "CAE", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAEDescription", "cAEDescriptionAttr", "CAEDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CertificationCommercialRegistration", "certificationCommercialRegistrationAttr", "CertificationCommercialRegistration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CollaboratorsRange", "collaboratorsRangeAttr", "CollaboratorsRange", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CommunicationExpenses", "communicationExpensesAttr", "CommunicationExpenses", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreationDate", "creationDateAttr", "CreationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DN", "dNAttr", "DN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FlagOldNIF", "flagOldNIFAttr", "FlagOldNIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Gender", "genderAttr", "Gender", false, OS.Types.Text, function () {
return "";
}), 
this.attr("GroupCount", "groupCountAttr", "GroupCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsProspect", "isProspectAttr", "IsProspect", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateProcessID", "lastUpdateProcessIDAttr", "LastUpdateProcessID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyBSCSID", "legacyBSCSIDAttr", "LegacyBSCSID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacySiebelID", "legacySiebelIDAttr", "LegacySiebelID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIFType", "nIFTypeAttr", "NIFType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OldNIF", "oldNIFAttr", "OldNIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ParentID", "parentIDAttr", "ParentID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerName", "personManagerNameAttr", "PersonManagerName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerUser", "personManagerUserAttr", "PersonManagerUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProspectType", "prospectTypeAttr", "ProspectType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SonCount", "sonCountAttr", "SonCount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TurnoverValue", "turnoverValueAttr", "TurnoverValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Website", "websiteAttr", "Website", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out3Rec.init();
return Person_out3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out3Rec = Person_out3Rec;

});
define("CON_GLOBE.model$Person_out3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out3Record = (function (_super) {
__extends(Person_out3Record, _super);
function Person_out3Record(defaults) {
_super.apply(this, arguments);
}
Person_out3Record.attributesToDeclare = function () {
return [
this.attr("Person_out3", "person_out3Attr", "Person_out3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out3Rec());
}, CON_GLOBEModel.Person_out3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_out3Record.fromStructure = function (str) {
return new Person_out3Record(new Person_out3Record.RecordClass({
person_out3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out3Record.IsAnonymousRecord = true;
Person_out3Record.UniqueId = "da22b60c-f256-494b-3b65-b4409c4e3b1f";
Person_out3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_out3Record.init();
return Person_out3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out3Record = Person_out3Record;

});
define("CON_GLOBE.model$Person_out3RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out3RecordList = (function (_super) {
__extends(Person_out3RecordList, _super);
function Person_out3RecordList(defaults) {
_super.apply(this, arguments);
}
Person_out3RecordList.RecordType = CON_GLOBEModel.Person_out3Record;
return Person_out3RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Person_out3RecordList = Person_out3RecordList;

});
define("CON_GLOBE.model$outputMessage3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header3Record", "CON_GLOBE.model$Person_out3RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage3Rec = (function (_super) {
__extends(outputMessage3Rec, _super);
function outputMessage3Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage3Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header3Record());
}, CON_GLOBEModel.Header3Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out3RecordList());
}, CON_GLOBEModel.Person_out3RecordList)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage3Rec.init();
return outputMessage3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage3Rec = outputMessage3Rec;

});
define("CON_GLOBE.model$Contact_in5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in5Rec = (function (_super) {
__extends(Contact_in5Rec, _super);
function Contact_in5Rec(defaults) {
_super.apply(this, arguments);
}
Contact_in5Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailableInPortfolio", "isAvailableInPortfolioAttr", "IsAvailableInPortfolio", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainContact", "isMainContactAttr", "IsMainContact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_in5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_in5Rec.init();
return Contact_in5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in5Rec = Contact_in5Rec;

});
define("CON_GLOBE.model$Parameter7Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter7Rec = (function (_super) {
__extends(Parameter7Rec, _super);
function Parameter7Rec(defaults) {
_super.apply(this, arguments);
}
Parameter7Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter7Rec.init();
return Parameter7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter7Rec = Parameter7Rec;

});
define("CON_GLOBE.model$FileRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var FileRec = (function (_super) {
__extends(FileRec, _super);
function FileRec(defaults) {
_super.apply(this, arguments);
}
FileRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
FileRec.fromStructure = function (str) {
return new FileRec(new FileRec.RecordClass({
nameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
FileRec.init();
return FileRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.FileRec = FileRec;

});
define("CON_GLOBE.model$BillingAccount_in2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccount_in2Rec = (function (_super) {
__extends(BillingAccount_in2Rec, _super);
function BillingAccount_in2Rec(defaults) {
_super.apply(this, arguments);
}
BillingAccount_in2Rec.attributesToDeclare = function () {
return [
this.attr("BillingAccountID", "billingAccountIDAttr", "BillingAccountID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BillingAccountNumber", "billingAccountNumberAttr", "BillingAccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BillingAccount_in2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
BillingAccount_in2Rec.init();
return BillingAccount_in2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccount_in2Rec = BillingAccount_in2Rec;

});
define("CON_GLOBE.model$eCodes4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes4Rec = (function (_super) {
__extends(eCodes4Rec, _super);
function eCodes4Rec(defaults) {
_super.apply(this, arguments);
}
eCodes4Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes4Rec.init();
return eCodes4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes4Rec = eCodes4Rec;

});
define("CON_GLOBE.model$eCodes4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes4Record = (function (_super) {
__extends(eCodes4Record, _super);
function eCodes4Record(defaults) {
_super.apply(this, arguments);
}
eCodes4Record.attributesToDeclare = function () {
return [
this.attr("eCodes4", "eCodes4Attr", "eCodes4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes4Rec());
}, CON_GLOBEModel.eCodes4Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes4Record.fromStructure = function (str) {
return new eCodes4Record(new eCodes4Record.RecordClass({
eCodes4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes4Record.IsAnonymousRecord = true;
eCodes4Record.UniqueId = "465501d0-b9ab-a152-97cb-bf0cd58acd62";
eCodes4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes4Record.init();
return eCodes4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes4Record = eCodes4Record;

});
define("CON_GLOBE.model$eNative4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative4Record = (function (_super) {
__extends(eNative4Record, _super);
function eNative4Record(defaults) {
_super.apply(this, arguments);
}
eNative4Record.attributesToDeclare = function () {
return [
this.attr("eNative4", "eNative4Attr", "eNative4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative4Rec());
}, CON_GLOBEModel.eNative4Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative4Record.fromStructure = function (str) {
return new eNative4Record(new eNative4Record.RecordClass({
eNative4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative4Record.IsAnonymousRecord = true;
eNative4Record.UniqueId = "ca011e69-0104-efec-c78d-8e8ca5cf67c5";
eNative4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative4Record.init();
return eNative4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative4Record = eNative4Record;

});
define("CON_GLOBE.model$eNative4RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative4RecordList = (function (_super) {
__extends(eNative4RecordList, _super);
function eNative4RecordList(defaults) {
_super.apply(this, arguments);
}
eNative4RecordList.RecordType = CON_GLOBEModel.eNative4Record;
return eNative4RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative4RecordList = eNative4RecordList;

});
define("CON_GLOBE.model$Status4Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes4Record", "CON_GLOBE.model$eNative4RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status4Rec = (function (_super) {
__extends(Status4Rec, _super);
function Status4Rec(defaults) {
_super.apply(this, arguments);
}
Status4Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes4Record());
}, CON_GLOBEModel.eCodes4Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative4RecordList());
}, CON_GLOBEModel.eNative4RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status4Rec.init();
return Status4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status4Rec = Status4Rec;

});
define("CON_GLOBE.model$HistoryStep10Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep10Rec = (function (_super) {
__extends(HistoryStep10Rec, _super);
function HistoryStep10Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep10Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep10Rec.init();
return HistoryStep10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep10Rec = HistoryStep10Rec;

});
define("CON_GLOBE.model$Parameter6Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter6Rec = (function (_super) {
__extends(Parameter6Rec, _super);
function Parameter6Rec(defaults) {
_super.apply(this, arguments);
}
Parameter6Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter6Rec.init();
return Parameter6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter6Rec = Parameter6Rec;

});
define("CON_GLOBE.model$Parameter6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter6Record = (function (_super) {
__extends(Parameter6Record, _super);
function Parameter6Record(defaults) {
_super.apply(this, arguments);
}
Parameter6Record.attributesToDeclare = function () {
return [
this.attr("Parameter6", "parameter6Attr", "Parameter6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter6Rec());
}, CON_GLOBEModel.Parameter6Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter6Record.fromStructure = function (str) {
return new Parameter6Record(new Parameter6Record.RecordClass({
parameter6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter6Record.IsAnonymousRecord = true;
Parameter6Record.UniqueId = "425b5984-9593-0672-590f-46a1914d15c7";
Parameter6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter6Record.init();
return Parameter6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter6Record = Parameter6Record;

});
define("CON_GLOBE.model$Parameter6RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter6RecordList = (function (_super) {
__extends(Parameter6RecordList, _super);
function Parameter6RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter6RecordList.RecordType = CON_GLOBEModel.Parameter6Record;
return Parameter6RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter6RecordList = Parameter6RecordList;

});
define("CON_GLOBE.model$AccessData6Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData6Rec = (function (_super) {
__extends(AccessData6Rec, _super);
function AccessData6Rec(defaults) {
_super.apply(this, arguments);
}
AccessData6Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData6Rec.init();
return AccessData6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData6Rec = AccessData6Rec;

});
define("CON_GLOBE.model$AccessData6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData6Record = (function (_super) {
__extends(AccessData6Record, _super);
function AccessData6Record(defaults) {
_super.apply(this, arguments);
}
AccessData6Record.attributesToDeclare = function () {
return [
this.attr("AccessData6", "accessData6Attr", "AccessData6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData6Rec());
}, CON_GLOBEModel.AccessData6Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData6Record.fromStructure = function (str) {
return new AccessData6Record(new AccessData6Record.RecordClass({
accessData6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData6Record.IsAnonymousRecord = true;
AccessData6Record.UniqueId = "c7d38cee-9a8b-ecc3-939c-927c294fdb78";
AccessData6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData6Record.init();
return AccessData6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData6Record = AccessData6Record;

});
define("CON_GLOBE.model$HistoryStep6Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep6Rec = (function (_super) {
__extends(HistoryStep6Rec, _super);
function HistoryStep6Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep6Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep6Rec.init();
return HistoryStep6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep6Rec = HistoryStep6Rec;

});
define("CON_GLOBE.model$HistoryStep6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep6Record = (function (_super) {
__extends(HistoryStep6Record, _super);
function HistoryStep6Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep6Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep6", "historyStep6Attr", "HistoryStep6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep6Rec());
}, CON_GLOBEModel.HistoryStep6Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep6Record.fromStructure = function (str) {
return new HistoryStep6Record(new HistoryStep6Record.RecordClass({
historyStep6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep6Record.IsAnonymousRecord = true;
HistoryStep6Record.UniqueId = "7a24f0bb-2fd5-3543-ba07-133303a5a3f8";
HistoryStep6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep6Record.init();
return HistoryStep6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep6Record = HistoryStep6Record;

});
define("CON_GLOBE.model$HistoryStep6RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep6RecordList = (function (_super) {
__extends(HistoryStep6RecordList, _super);
function HistoryStep6RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep6RecordList.RecordType = CON_GLOBEModel.HistoryStep6Record;
return HistoryStep6RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep6RecordList = HistoryStep6RecordList;

});
define("CON_GLOBE.model$eCodes6Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes6Rec = (function (_super) {
__extends(eCodes6Rec, _super);
function eCodes6Rec(defaults) {
_super.apply(this, arguments);
}
eCodes6Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes6Rec.init();
return eCodes6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes6Rec = eCodes6Rec;

});
define("CON_GLOBE.model$eCodes6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes6Record = (function (_super) {
__extends(eCodes6Record, _super);
function eCodes6Record(defaults) {
_super.apply(this, arguments);
}
eCodes6Record.attributesToDeclare = function () {
return [
this.attr("eCodes6", "eCodes6Attr", "eCodes6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes6Rec());
}, CON_GLOBEModel.eCodes6Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes6Record.fromStructure = function (str) {
return new eCodes6Record(new eCodes6Record.RecordClass({
eCodes6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes6Record.IsAnonymousRecord = true;
eCodes6Record.UniqueId = "c6e51c1c-7f42-67c5-bda6-962f840fa1ae";
eCodes6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes6Record.init();
return eCodes6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes6Record = eCodes6Record;

});
define("CON_GLOBE.model$eNative6Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative6Rec = (function (_super) {
__extends(eNative6Rec, _super);
function eNative6Rec(defaults) {
_super.apply(this, arguments);
}
eNative6Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative6Rec.init();
return eNative6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative6Rec = eNative6Rec;

});
define("CON_GLOBE.model$eNative6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative6Record = (function (_super) {
__extends(eNative6Record, _super);
function eNative6Record(defaults) {
_super.apply(this, arguments);
}
eNative6Record.attributesToDeclare = function () {
return [
this.attr("eNative6", "eNative6Attr", "eNative6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative6Rec());
}, CON_GLOBEModel.eNative6Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative6Record.fromStructure = function (str) {
return new eNative6Record(new eNative6Record.RecordClass({
eNative6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative6Record.IsAnonymousRecord = true;
eNative6Record.UniqueId = "2724d7d5-d9dd-a1ed-d2a8-84c65b109e97";
eNative6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative6Record.init();
return eNative6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative6Record = eNative6Record;

});
define("CON_GLOBE.model$eNative6RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative6RecordList = (function (_super) {
__extends(eNative6RecordList, _super);
function eNative6RecordList(defaults) {
_super.apply(this, arguments);
}
eNative6RecordList.RecordType = CON_GLOBEModel.eNative6Record;
return eNative6RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative6RecordList = eNative6RecordList;

});
define("CON_GLOBE.model$Status6Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes6Record", "CON_GLOBE.model$eNative6RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status6Rec = (function (_super) {
__extends(Status6Rec, _super);
function Status6Rec(defaults) {
_super.apply(this, arguments);
}
Status6Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes6Record());
}, CON_GLOBEModel.eCodes6Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative6RecordList());
}, CON_GLOBEModel.eNative6RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status6Rec.init();
return Status6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status6Rec = Status6Rec;

});
define("CON_GLOBE.model$Status6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status6Record = (function (_super) {
__extends(Status6Record, _super);
function Status6Record(defaults) {
_super.apply(this, arguments);
}
Status6Record.attributesToDeclare = function () {
return [
this.attr("Status6", "status6Attr", "Status6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status6Rec());
}, CON_GLOBEModel.Status6Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status6Record.fromStructure = function (str) {
return new Status6Record(new Status6Record.RecordClass({
status6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status6Record.IsAnonymousRecord = true;
Status6Record.UniqueId = "2410c055-b7f4-9667-3ef5-eb1d00020ac7";
Status6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status6Record.init();
return Status6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status6Record = Status6Record;

});
define("CON_GLOBE.model$Header6Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter6RecordList", "CON_GLOBE.model$AccessData6Record", "CON_GLOBE.model$HistoryStep6RecordList", "CON_GLOBE.model$Status6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header6Rec = (function (_super) {
__extends(Header6Rec, _super);
function Header6Rec(defaults) {
_super.apply(this, arguments);
}
Header6Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter6RecordList());
}, CON_GLOBEModel.Parameter6RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData6Record());
}, CON_GLOBEModel.AccessData6Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep6RecordList());
}, CON_GLOBEModel.HistoryStep6RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status6Record());
}, CON_GLOBEModel.Status6Record)
].concat(_super.attributesToDeclare.call(this));
};
Header6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header6Rec.init();
return Header6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header6Rec = Header6Rec;

});
define("CON_GLOBE.model$Header6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header6Record = (function (_super) {
__extends(Header6Record, _super);
function Header6Record(defaults) {
_super.apply(this, arguments);
}
Header6Record.attributesToDeclare = function () {
return [
this.attr("Header6", "header6Attr", "Header6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header6Rec());
}, CON_GLOBEModel.Header6Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header6Record.fromStructure = function (str) {
return new Header6Record(new Header6Record.RecordClass({
header6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header6Record.IsAnonymousRecord = true;
Header6Record.UniqueId = "a4b6fbde-1779-08f2-7e3e-686c3e5902eb";
Header6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header6Record.init();
return Header6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header6Record = Header6Record;

});
define("CON_GLOBE.model$Account_in5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in5Rec = (function (_super) {
__extends(Account_in5Rec, _super);
function Account_in5Rec(defaults) {
_super.apply(this, arguments);
}
Account_in5Rec.attributesToDeclare = function () {
return [
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_in5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_in5Rec.init();
return Account_in5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in5Rec = Account_in5Rec;

});
define("CON_GLOBE.model$Account_in5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in5Record = (function (_super) {
__extends(Account_in5Record, _super);
function Account_in5Record(defaults) {
_super.apply(this, arguments);
}
Account_in5Record.attributesToDeclare = function () {
return [
this.attr("Account_in5", "account_in5Attr", "Account_in5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in5Rec());
}, CON_GLOBEModel.Account_in5Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_in5Record.fromStructure = function (str) {
return new Account_in5Record(new Account_in5Record.RecordClass({
account_in5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in5Record.IsAnonymousRecord = true;
Account_in5Record.UniqueId = "99b24e7b-5e95-a0e4-db7b-67cc68f5da49";
Account_in5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_in5Record.init();
return Account_in5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in5Record = Account_in5Record;

});
define("CON_GLOBE.model$DataInput6Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput6Rec = (function (_super) {
__extends(DataInput6Rec, _super);
function DataInput6Rec(defaults) {
_super.apply(this, arguments);
}
DataInput6Rec.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in5Record());
}, CON_GLOBEModel.Account_in5Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput6Rec.fromStructure = function (str) {
return new DataInput6Rec(new DataInput6Rec.RecordClass({
accountAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput6Rec.init();
return DataInput6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput6Rec = DataInput6Rec;

});
define("CON_GLOBE.model$DataInput6Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput6Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput6Record = (function (_super) {
__extends(DataInput6Record, _super);
function DataInput6Record(defaults) {
_super.apply(this, arguments);
}
DataInput6Record.attributesToDeclare = function () {
return [
this.attr("DataInput6", "dataInput6Attr", "DataInput6", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput6Rec());
}, CON_GLOBEModel.DataInput6Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput6Record.fromStructure = function (str) {
return new DataInput6Record(new DataInput6Record.RecordClass({
dataInput6Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput6Record.IsAnonymousRecord = true;
DataInput6Record.UniqueId = "c98938e9-3f13-1a5c-8568-e342537ed530";
DataInput6Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput6Record.init();
return DataInput6Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput6Record = DataInput6Record;

});
define("CON_GLOBE.model$inputMessage6Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header6Record", "CON_GLOBE.model$DataInput6Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage6Rec = (function (_super) {
__extends(inputMessage6Rec, _super);
function inputMessage6Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage6Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header6Record());
}, CON_GLOBEModel.Header6Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput6Record());
}, CON_GLOBEModel.DataInput6Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage6Rec.init();
return inputMessage6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage6Rec = inputMessage6Rec;

});
define("CON_GLOBE.model$Order_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Order_outRec = (function (_super) {
__extends(Order_outRec, _super);
function Order_outRec(defaults) {
_super.apply(this, arguments);
}
Order_outRec.attributesToDeclare = function () {
return [
this.attr("OrderID", "orderIDAttr", "OrderID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Order_outRec.fromStructure = function (str) {
return new Order_outRec(new Order_outRec.RecordClass({
orderIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Order_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Order_outRec.init();
return Order_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Order_outRec = Order_outRec;

});
define("CON_GLOBE.model$AccessData11Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData11Rec = (function (_super) {
__extends(AccessData11Rec, _super);
function AccessData11Rec(defaults) {
_super.apply(this, arguments);
}
AccessData11Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData11Rec.init();
return AccessData11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData11Rec = AccessData11Rec;

});
define("CON_GLOBE.model$AccessData2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData2Rec = (function (_super) {
__extends(AccessData2Rec, _super);
function AccessData2Rec(defaults) {
_super.apply(this, arguments);
}
AccessData2Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData2Rec.init();
return AccessData2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData2Rec = AccessData2Rec;

});
define("CON_GLOBE.model$Role_in3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_in3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_in3Record = (function (_super) {
__extends(Role_in3Record, _super);
function Role_in3Record(defaults) {
_super.apply(this, arguments);
}
Role_in3Record.attributesToDeclare = function () {
return [
this.attr("Role_in3", "role_in3Attr", "Role_in3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_in3Rec());
}, CON_GLOBEModel.Role_in3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Role_in3Record.fromStructure = function (str) {
return new Role_in3Record(new Role_in3Record.RecordClass({
role_in3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Role_in3Record.IsAnonymousRecord = true;
Role_in3Record.UniqueId = "83731229-7744-03f4-7160-3c4a6f7996c6";
Role_in3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Role_in3Record.init();
return Role_in3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_in3Record = Role_in3Record;

});
define("CON_GLOBE.model$Role_in3RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_in3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_in3RecordList = (function (_super) {
__extends(Role_in3RecordList, _super);
function Role_in3RecordList(defaults) {
_super.apply(this, arguments);
}
Role_in3RecordList.RecordType = CON_GLOBEModel.Role_in3Record;
return Role_in3RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Role_in3RecordList = Role_in3RecordList;

});
define("CON_GLOBE.model$Person_in11Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in6RecordList", "CON_GLOBE.model$Role_in3RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in11Rec = (function (_super) {
__extends(Person_in11Rec, _super);
function Person_in11Rec(defaults) {
_super.apply(this, arguments);
}
Person_in11Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in6RecordList());
}, CON_GLOBEModel.Contact_in6RecordList), 
this.attr("Role", "roleAttr", "Role", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_in3RecordList());
}, CON_GLOBEModel.Role_in3RecordList), 
this.attr("Birthdate", "birthdateAttr", "Birthdate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAE", "cAEAttr", "CAE", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAEDescription", "cAEDescriptionAttr", "CAEDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CertificationCommercialRegistration", "certificationCommercialRegistrationAttr", "CertificationCommercialRegistration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CollaboratorsRange", "collaboratorsRangeAttr", "CollaboratorsRange", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CommunicationExpenses", "communicationExpensesAttr", "CommunicationExpenses", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DN", "dNAttr", "DN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Gender", "genderAttr", "Gender", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsProspect", "isProspectAttr", "IsProspect", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyBSCSID", "legacyBSCSIDAttr", "LegacyBSCSID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacySiebelID", "legacySiebelIDAttr", "LegacySiebelID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIFType", "nIFTypeAttr", "NIFType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ParentID", "parentIDAttr", "ParentID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerID", "personManagerIDAttr", "PersonManagerID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerName", "personManagerNameAttr", "PersonManagerName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerUser", "personManagerUserAttr", "PersonManagerUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProspectType", "prospectTypeAttr", "ProspectType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TurnoverValue", "turnoverValueAttr", "TurnoverValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Website", "websiteAttr", "Website", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in11Rec.init();
return Person_in11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in11Rec = Person_in11Rec;

});
define("CON_GLOBE.model$ValidatePersonInfo_OutputRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ValidatePersonInfo_OutputRec = (function (_super) {
__extends(ValidatePersonInfo_OutputRec, _super);
function ValidatePersonInfo_OutputRec(defaults) {
_super.apply(this, arguments);
}
ValidatePersonInfo_OutputRec.attributesToDeclare = function () {
return [
this.attr("NIF_IsValid", "nIF_IsValidAttr", "NIF_IsValid", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("DocumentNumber_IsValid", "documentNumber_IsValidAttr", "DocumentNumber_IsValid", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("Contact_IsValid", "contact_IsValidAttr", "Contact_IsValid", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("CreditCard_IsValid", "creditCard_IsValidAttr", "CreditCard_IsValid", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("IBAN_IsValid", "iBAN_IsValidAttr", "IBAN_IsValid", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("BirthDate_IsValid", "birthDate_IsValidAttr", "BirthDate_IsValid", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("PostalCode_IsValid", "postalCode_IsValidAttr", "PostalCode_IsValid", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("IMEI_IsValid", "iMEI_IsValidAttr", "IMEI_IsValid", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
ValidatePersonInfo_OutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ValidatePersonInfo_OutputRec.init();
return ValidatePersonInfo_OutputRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ValidatePersonInfo_OutputRec = ValidatePersonInfo_OutputRec;

});
define("CON_GLOBE.model$Contact_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_inRec = (function (_super) {
__extends(Contact_inRec, _super);
function Contact_inRec(defaults) {
_super.apply(this, arguments);
}
Contact_inRec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailableInPortfolio", "isAvailableInPortfolioAttr", "IsAvailableInPortfolio", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_inRec.init();
return Contact_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_inRec = Contact_inRec;

});
define("CON_GLOBE.model$Contact_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_inRecord = (function (_super) {
__extends(Contact_inRecord, _super);
function Contact_inRecord(defaults) {
_super.apply(this, arguments);
}
Contact_inRecord.attributesToDeclare = function () {
return [
this.attr("Contact_in", "contact_inAttr", "Contact_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_inRec());
}, CON_GLOBEModel.Contact_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_inRecord.fromStructure = function (str) {
return new Contact_inRecord(new Contact_inRecord.RecordClass({
contact_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_inRecord.IsAnonymousRecord = true;
Contact_inRecord.UniqueId = "cc067bf5-3361-ed9b-4f0a-f4b4c55fb0b8";
Contact_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_inRecord.init();
return Contact_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_inRecord = Contact_inRecord;

});
define("CON_GLOBE.model$Person_in3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in3Rec = (function (_super) {
__extends(Person_in3Rec, _super);
function Person_in3Rec(defaults) {
_super.apply(this, arguments);
}
Person_in3Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_inRecord());
}, CON_GLOBEModel.Contact_inRecord), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyBSCSID", "legacyBSCSIDAttr", "LegacyBSCSID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacySiebelID", "legacySiebelIDAttr", "LegacySiebelID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIFType", "nIFTypeAttr", "NIFType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in3Rec.init();
return Person_in3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in3Rec = Person_in3Rec;

});
define("CON_GLOBE.model$Person_in3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in3Record = (function (_super) {
__extends(Person_in3Record, _super);
function Person_in3Record(defaults) {
_super.apply(this, arguments);
}
Person_in3Record.attributesToDeclare = function () {
return [
this.attr("Person_in3", "person_in3Attr", "Person_in3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in3Rec());
}, CON_GLOBEModel.Person_in3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in3Record.fromStructure = function (str) {
return new Person_in3Record(new Person_in3Record.RecordClass({
person_in3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in3Record.IsAnonymousRecord = true;
Person_in3Record.UniqueId = "eadd97c4-e622-654e-d494-8a0a5d796d17";
Person_in3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in3Record.init();
return Person_in3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in3Record = Person_in3Record;

});
define("CON_GLOBE.model$DataInput3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput3Rec = (function (_super) {
__extends(DataInput3Rec, _super);
function DataInput3Rec(defaults) {
_super.apply(this, arguments);
}
DataInput3Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in3Record());
}, CON_GLOBEModel.Person_in3Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput3Rec.fromStructure = function (str) {
return new DataInput3Rec(new DataInput3Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput3Rec.init();
return DataInput3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput3Rec = DataInput3Rec;

});
define("CON_GLOBE.model$DataInput3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput3Record = (function (_super) {
__extends(DataInput3Record, _super);
function DataInput3Record(defaults) {
_super.apply(this, arguments);
}
DataInput3Record.attributesToDeclare = function () {
return [
this.attr("DataInput3", "dataInput3Attr", "DataInput3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput3Rec());
}, CON_GLOBEModel.DataInput3Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput3Record.fromStructure = function (str) {
return new DataInput3Record(new DataInput3Record.RecordClass({
dataInput3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput3Record.IsAnonymousRecord = true;
DataInput3Record.UniqueId = "ec536275-23f2-da2f-cc49-22d8adbecec4";
DataInput3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput3Record.init();
return DataInput3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput3Record = DataInput3Record;

});
define("CON_GLOBE.model$inputMessage3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header3Record", "CON_GLOBE.model$DataInput3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage3Rec = (function (_super) {
__extends(inputMessage3Rec, _super);
function inputMessage3Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage3Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header3Record());
}, CON_GLOBEModel.Header3Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput3Record());
}, CON_GLOBEModel.DataInput3Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage3Rec.init();
return inputMessage3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage3Rec = inputMessage3Rec;

});
define("CON_GLOBE.model$Person_in4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in4Rec = (function (_super) {
__extends(Person_in4Rec, _super);
function Person_in4Rec(defaults) {
_super.apply(this, arguments);
}
Person_in4Rec.attributesToDeclare = function () {
return [
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in4Rec.fromStructure = function (str) {
return new Person_in4Rec(new Person_in4Rec.RecordClass({
personIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in4Rec.init();
return Person_in4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in4Rec = Person_in4Rec;

});
define("CON_GLOBE.model$Person_in4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in4Record = (function (_super) {
__extends(Person_in4Record, _super);
function Person_in4Record(defaults) {
_super.apply(this, arguments);
}
Person_in4Record.attributesToDeclare = function () {
return [
this.attr("Person_in4", "person_in4Attr", "Person_in4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in4Rec());
}, CON_GLOBEModel.Person_in4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in4Record.fromStructure = function (str) {
return new Person_in4Record(new Person_in4Record.RecordClass({
person_in4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in4Record.IsAnonymousRecord = true;
Person_in4Record.UniqueId = "fa0a069f-95f9-4e8b-3e12-a12cdb16af61";
Person_in4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in4Record.init();
return Person_in4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in4Record = Person_in4Record;

});
define("CON_GLOBE.model$Contact_in2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in2Rec = (function (_super) {
__extends(Contact_in2Rec, _super);
function Contact_in2Rec(defaults) {
_super.apply(this, arguments);
}
Contact_in2Rec.attributesToDeclare = function () {
return [
this.attr("ContactID", "contactIDAttr", "ContactID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsEmailBilling", "isEmailBillingAttr", "IsEmailBilling", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainContact", "isMainContactAttr", "IsMainContact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_in2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_in2Rec.init();
return Contact_in2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in2Rec = Contact_in2Rec;

});
define("CON_GLOBE.model$Contact_in2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in2Record = (function (_super) {
__extends(Contact_in2Record, _super);
function Contact_in2Record(defaults) {
_super.apply(this, arguments);
}
Contact_in2Record.attributesToDeclare = function () {
return [
this.attr("Contact_in2", "contact_in2Attr", "Contact_in2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in2Rec());
}, CON_GLOBEModel.Contact_in2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_in2Record.fromStructure = function (str) {
return new Contact_in2Record(new Contact_in2Record.RecordClass({
contact_in2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_in2Record.IsAnonymousRecord = true;
Contact_in2Record.UniqueId = "00e868b0-0d13-add0-037e-ec32798af8c9";
Contact_in2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_in2Record.init();
return Contact_in2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in2Record = Contact_in2Record;

});
define("CON_GLOBE.model$Contact_in2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in2RecordList = (function (_super) {
__extends(Contact_in2RecordList, _super);
function Contact_in2RecordList(defaults) {
_super.apply(this, arguments);
}
Contact_in2RecordList.RecordType = CON_GLOBEModel.Contact_in2Record;
return Contact_in2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Contact_in2RecordList = Contact_in2RecordList;

});
define("CON_GLOBE.model$Account_in4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in4Rec = (function (_super) {
__extends(Account_in4Rec, _super);
function Account_in4Rec(defaults) {
_super.apply(this, arguments);
}
Account_in4Rec.attributesToDeclare = function () {
return [
this.attr("AccountID", "accountIDAttr", "AccountID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_in4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_in4Rec.init();
return Account_in4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in4Rec = Account_in4Rec;

});
define("CON_GLOBE.model$Account_in4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in4Record = (function (_super) {
__extends(Account_in4Record, _super);
function Account_in4Record(defaults) {
_super.apply(this, arguments);
}
Account_in4Record.attributesToDeclare = function () {
return [
this.attr("Account_in4", "account_in4Attr", "Account_in4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in4Rec());
}, CON_GLOBEModel.Account_in4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_in4Record.fromStructure = function (str) {
return new Account_in4Record(new Account_in4Record.RecordClass({
account_in4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in4Record.IsAnonymousRecord = true;
Account_in4Record.UniqueId = "08af3bfc-bc12-5627-ff75-6689536973e7";
Account_in4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_in4Record.init();
return Account_in4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in4Record = Account_in4Record;

});
define("CON_GLOBE.model$BillingAccount_in2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$BillingAccount_in2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccount_in2Record = (function (_super) {
__extends(BillingAccount_in2Record, _super);
function BillingAccount_in2Record(defaults) {
_super.apply(this, arguments);
}
BillingAccount_in2Record.attributesToDeclare = function () {
return [
this.attr("BillingAccount_in2", "billingAccount_in2Attr", "BillingAccount_in2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccount_in2Rec());
}, CON_GLOBEModel.BillingAccount_in2Rec)
].concat(_super.attributesToDeclare.call(this));
};
BillingAccount_in2Record.fromStructure = function (str) {
return new BillingAccount_in2Record(new BillingAccount_in2Record.RecordClass({
billingAccount_in2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BillingAccount_in2Record.IsAnonymousRecord = true;
BillingAccount_in2Record.UniqueId = "b5909df2-87b5-cedd-102f-b6a3733163f6";
BillingAccount_in2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
BillingAccount_in2Record.init();
return BillingAccount_in2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccount_in2Record = BillingAccount_in2Record;

});
define("CON_GLOBE.model$Role_inRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in4Record", "CON_GLOBE.model$Contact_in2RecordList", "CON_GLOBE.model$Account_in4Record", "CON_GLOBE.model$BillingAccount_in2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_inRec = (function (_super) {
__extends(Role_inRec, _super);
function Role_inRec(defaults) {
_super.apply(this, arguments);
}
Role_inRec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in4Record());
}, CON_GLOBEModel.Person_in4Record), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in2RecordList());
}, CON_GLOBEModel.Contact_in2RecordList), 
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in4Record());
}, CON_GLOBEModel.Account_in4Record), 
this.attr("BillingAccount", "billingAccountAttr", "BillingAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccount_in2Record());
}, CON_GLOBEModel.BillingAccount_in2Record), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Role_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Role_inRec.init();
return Role_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_inRec = Role_inRec;

});
define("CON_GLOBE.model$Role_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_inRecord = (function (_super) {
__extends(Role_inRecord, _super);
function Role_inRecord(defaults) {
_super.apply(this, arguments);
}
Role_inRecord.attributesToDeclare = function () {
return [
this.attr("Role_in", "role_inAttr", "Role_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_inRec());
}, CON_GLOBEModel.Role_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Role_inRecord.fromStructure = function (str) {
return new Role_inRecord(new Role_inRecord.RecordClass({
role_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Role_inRecord.IsAnonymousRecord = true;
Role_inRecord.UniqueId = "9bb2eeb6-8b62-d07e-bff0-0dc150d3af4f";
Role_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Role_inRecord.init();
return Role_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_inRecord = Role_inRecord;

});
define("CON_GLOBE.model$DataInput5Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput5Rec = (function (_super) {
__extends(DataInput5Rec, _super);
function DataInput5Rec(defaults) {
_super.apply(this, arguments);
}
DataInput5Rec.attributesToDeclare = function () {
return [
this.attr("Role", "roleAttr", "Role", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_inRecord());
}, CON_GLOBEModel.Role_inRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataInput5Rec.fromStructure = function (str) {
return new DataInput5Rec(new DataInput5Rec.RecordClass({
roleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput5Rec.init();
return DataInput5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput5Rec = DataInput5Rec;

});
define("CON_GLOBE.model$DataInput5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput5Record = (function (_super) {
__extends(DataInput5Record, _super);
function DataInput5Record(defaults) {
_super.apply(this, arguments);
}
DataInput5Record.attributesToDeclare = function () {
return [
this.attr("DataInput5", "dataInput5Attr", "DataInput5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput5Rec());
}, CON_GLOBEModel.DataInput5Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput5Record.fromStructure = function (str) {
return new DataInput5Record(new DataInput5Record.RecordClass({
dataInput5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput5Record.IsAnonymousRecord = true;
DataInput5Record.UniqueId = "7b26b558-d09d-3c3d-22d0-2d811399b84f";
DataInput5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput5Record.init();
return DataInput5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput5Record = DataInput5Record;

});
define("CON_GLOBE.model$inputMessage5Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header5Record", "CON_GLOBE.model$DataInput5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage5Rec = (function (_super) {
__extends(inputMessage5Rec, _super);
function inputMessage5Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage5Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header5Record());
}, CON_GLOBEModel.Header5Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput5Record());
}, CON_GLOBEModel.DataInput5Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage5Rec.init();
return inputMessage5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage5Rec = inputMessage5Rec;

});
define("CON_GLOBE.model$Order_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Order_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Order_outRecord = (function (_super) {
__extends(Order_outRecord, _super);
function Order_outRecord(defaults) {
_super.apply(this, arguments);
}
Order_outRecord.attributesToDeclare = function () {
return [
this.attr("Order_out", "order_outAttr", "Order_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Order_outRec());
}, CON_GLOBEModel.Order_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Order_outRecord.fromStructure = function (str) {
return new Order_outRecord(new Order_outRecord.RecordClass({
order_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Order_outRecord.IsAnonymousRecord = true;
Order_outRecord.UniqueId = "34623cbd-037f-877d-1efe-39d92af0d7d4";
Order_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Order_outRecord.init();
return Order_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Order_outRecord = Order_outRecord;

});
define("CON_GLOBE.model$DataOutput9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Order_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput9Rec = (function (_super) {
__extends(DataOutput9Rec, _super);
function DataOutput9Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput9Rec.attributesToDeclare = function () {
return [
this.attr("Order", "orderAttr", "Order", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Order_outRecord());
}, CON_GLOBEModel.Order_outRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput9Rec.fromStructure = function (str) {
return new DataOutput9Rec(new DataOutput9Rec.RecordClass({
orderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput9Rec.init();
return DataOutput9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput9Rec = DataOutput9Rec;

});
define("CON_GLOBE.model$Address_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_out2Rec = (function (_super) {
__extends(Address_out2Rec, _super);
function Address_out2Rec(defaults) {
_super.apply(this, arguments);
}
Address_out2Rec.attributesToDeclare = function () {
return [
this.attr("AddressID", "addressIDAttr", "AddressID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainAddress", "isMainAddressAttr", "IsMainAddress", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Address_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Address_out2Rec.init();
return Address_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_out2Rec = Address_out2Rec;

});
define("CON_GLOBE.model$HistoryStepRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStepRec = (function (_super) {
__extends(HistoryStepRec, _super);
function HistoryStepRec(defaults) {
_super.apply(this, arguments);
}
HistoryStepRec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStepRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStepRec.init();
return HistoryStepRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStepRec = HistoryStepRec;

});
define("CON_GLOBE.model$ParameterRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ParameterRec = (function (_super) {
__extends(ParameterRec, _super);
function ParameterRec(defaults) {
_super.apply(this, arguments);
}
ParameterRec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ParameterRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ParameterRec.init();
return ParameterRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ParameterRec = ParameterRec;

});
define("CON_GLOBE.model$ParameterRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ParameterRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ParameterRecord = (function (_super) {
__extends(ParameterRecord, _super);
function ParameterRecord(defaults) {
_super.apply(this, arguments);
}
ParameterRecord.attributesToDeclare = function () {
return [
this.attr("Parameter", "parameterAttr", "Parameter", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ParameterRec());
}, CON_GLOBEModel.ParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
ParameterRecord.fromStructure = function (str) {
return new ParameterRecord(new ParameterRecord.RecordClass({
parameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ParameterRecord.IsAnonymousRecord = true;
ParameterRecord.UniqueId = "470c76ac-cb95-dcd2-f4cb-aa7489e78d89";
ParameterRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ParameterRecord.init();
return ParameterRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ParameterRecord = ParameterRecord;

});
define("CON_GLOBE.model$ParameterRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ParameterRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ParameterRecordList = (function (_super) {
__extends(ParameterRecordList, _super);
function ParameterRecordList(defaults) {
_super.apply(this, arguments);
}
ParameterRecordList.RecordType = CON_GLOBEModel.ParameterRecord;
return ParameterRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.ParameterRecordList = ParameterRecordList;

});
define("CON_GLOBE.model$AccessDataRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessDataRec = (function (_super) {
__extends(AccessDataRec, _super);
function AccessDataRec(defaults) {
_super.apply(this, arguments);
}
AccessDataRec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessDataRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessDataRec.init();
return AccessDataRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessDataRec = AccessDataRec;

});
define("CON_GLOBE.model$AccessDataRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessDataRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessDataRecord = (function (_super) {
__extends(AccessDataRecord, _super);
function AccessDataRecord(defaults) {
_super.apply(this, arguments);
}
AccessDataRecord.attributesToDeclare = function () {
return [
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessDataRec());
}, CON_GLOBEModel.AccessDataRec)
].concat(_super.attributesToDeclare.call(this));
};
AccessDataRecord.fromStructure = function (str) {
return new AccessDataRecord(new AccessDataRecord.RecordClass({
accessDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessDataRecord.IsAnonymousRecord = true;
AccessDataRecord.UniqueId = "23ea5a39-ffe0-2728-52b7-e24280aa16f0";
AccessDataRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessDataRecord.init();
return AccessDataRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessDataRecord = AccessDataRecord;

});
define("CON_GLOBE.model$HistoryStepRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStepRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStepRecord = (function (_super) {
__extends(HistoryStepRecord, _super);
function HistoryStepRecord(defaults) {
_super.apply(this, arguments);
}
HistoryStepRecord.attributesToDeclare = function () {
return [
this.attr("HistoryStep", "historyStepAttr", "HistoryStep", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStepRec());
}, CON_GLOBEModel.HistoryStepRec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStepRecord.fromStructure = function (str) {
return new HistoryStepRecord(new HistoryStepRecord.RecordClass({
historyStepAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStepRecord.IsAnonymousRecord = true;
HistoryStepRecord.UniqueId = "6d61e5b7-5aa3-5a30-cab6-8b979784028e";
HistoryStepRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStepRecord.init();
return HistoryStepRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStepRecord = HistoryStepRecord;

});
define("CON_GLOBE.model$HistoryStepRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStepRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStepRecordList = (function (_super) {
__extends(HistoryStepRecordList, _super);
function HistoryStepRecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStepRecordList.RecordType = CON_GLOBEModel.HistoryStepRecord;
return HistoryStepRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStepRecordList = HistoryStepRecordList;

});
define("CON_GLOBE.model$eCodesRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodesRec = (function (_super) {
__extends(eCodesRec, _super);
function eCodesRec(defaults) {
_super.apply(this, arguments);
}
eCodesRec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodesRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodesRec.init();
return eCodesRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodesRec = eCodesRec;

});
define("CON_GLOBE.model$eCodesRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodesRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodesRecord = (function (_super) {
__extends(eCodesRecord, _super);
function eCodesRecord(defaults) {
_super.apply(this, arguments);
}
eCodesRecord.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodesRec());
}, CON_GLOBEModel.eCodesRec)
].concat(_super.attributesToDeclare.call(this));
};
eCodesRecord.fromStructure = function (str) {
return new eCodesRecord(new eCodesRecord.RecordClass({
eCodesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodesRecord.IsAnonymousRecord = true;
eCodesRecord.UniqueId = "53d03f3d-a570-3c47-25ad-3ef910c3d383";
eCodesRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodesRecord.init();
return eCodesRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodesRecord = eCodesRecord;

});
define("CON_GLOBE.model$eNativeRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNativeRec = (function (_super) {
__extends(eNativeRec, _super);
function eNativeRec(defaults) {
_super.apply(this, arguments);
}
eNativeRec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNativeRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNativeRec.init();
return eNativeRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNativeRec = eNativeRec;

});
define("CON_GLOBE.model$eNativeRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNativeRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNativeRecord = (function (_super) {
__extends(eNativeRecord, _super);
function eNativeRecord(defaults) {
_super.apply(this, arguments);
}
eNativeRecord.attributesToDeclare = function () {
return [
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNativeRec());
}, CON_GLOBEModel.eNativeRec)
].concat(_super.attributesToDeclare.call(this));
};
eNativeRecord.fromStructure = function (str) {
return new eNativeRecord(new eNativeRecord.RecordClass({
eNativeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNativeRecord.IsAnonymousRecord = true;
eNativeRecord.UniqueId = "a1a32d0a-8169-65bc-ae4b-87bf55efa653";
eNativeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNativeRecord.init();
return eNativeRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNativeRecord = eNativeRecord;

});
define("CON_GLOBE.model$eNativeRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNativeRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNativeRecordList = (function (_super) {
__extends(eNativeRecordList, _super);
function eNativeRecordList(defaults) {
_super.apply(this, arguments);
}
eNativeRecordList.RecordType = CON_GLOBEModel.eNativeRecord;
return eNativeRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNativeRecordList = eNativeRecordList;

});
define("CON_GLOBE.model$StatusRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodesRecord", "CON_GLOBE.model$eNativeRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var StatusRec = (function (_super) {
__extends(StatusRec, _super);
function StatusRec(defaults) {
_super.apply(this, arguments);
}
StatusRec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodesRecord());
}, CON_GLOBEModel.eCodesRecord), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNativeRecordList());
}, CON_GLOBEModel.eNativeRecordList)
].concat(_super.attributesToDeclare.call(this));
};
StatusRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
StatusRec.init();
return StatusRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.StatusRec = StatusRec;

});
define("CON_GLOBE.model$StatusRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$StatusRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var StatusRecord = (function (_super) {
__extends(StatusRecord, _super);
function StatusRecord(defaults) {
_super.apply(this, arguments);
}
StatusRecord.attributesToDeclare = function () {
return [
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.StatusRec());
}, CON_GLOBEModel.StatusRec)
].concat(_super.attributesToDeclare.call(this));
};
StatusRecord.fromStructure = function (str) {
return new StatusRecord(new StatusRecord.RecordClass({
statusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StatusRecord.IsAnonymousRecord = true;
StatusRecord.UniqueId = "194ab644-4b10-7b2f-cd28-113366e16fad";
StatusRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
StatusRecord.init();
return StatusRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.StatusRecord = StatusRecord;

});
define("CON_GLOBE.model$HeaderRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ParameterRecordList", "CON_GLOBE.model$AccessDataRecord", "CON_GLOBE.model$HistoryStepRecordList", "CON_GLOBE.model$StatusRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HeaderRec = (function (_super) {
__extends(HeaderRec, _super);
function HeaderRec(defaults) {
_super.apply(this, arguments);
}
HeaderRec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ParameterRecordList());
}, CON_GLOBEModel.ParameterRecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessDataRecord());
}, CON_GLOBEModel.AccessDataRecord), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStepRecordList());
}, CON_GLOBEModel.HistoryStepRecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.StatusRecord());
}, CON_GLOBEModel.StatusRecord)
].concat(_super.attributesToDeclare.call(this));
};
HeaderRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HeaderRec.init();
return HeaderRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HeaderRec = HeaderRec;

});
define("CON_GLOBE.model$HeaderRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HeaderRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HeaderRecord = (function (_super) {
__extends(HeaderRecord, _super);
function HeaderRecord(defaults) {
_super.apply(this, arguments);
}
HeaderRecord.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HeaderRec());
}, CON_GLOBEModel.HeaderRec)
].concat(_super.attributesToDeclare.call(this));
};
HeaderRecord.fromStructure = function (str) {
return new HeaderRecord(new HeaderRecord.RecordClass({
headerAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HeaderRecord.IsAnonymousRecord = true;
HeaderRecord.UniqueId = "7145e66b-ed1e-d409-442b-3457fa30296c";
HeaderRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HeaderRecord.init();
return HeaderRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HeaderRecord = HeaderRecord;

});
define("CON_GLOBE.model$Person_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_outRec = (function (_super) {
__extends(Person_outRec, _super);
function Person_outRec(defaults) {
_super.apply(this, arguments);
}
Person_outRec.attributesToDeclare = function () {
return [
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_outRec.fromStructure = function (str) {
return new Person_outRec(new Person_outRec.RecordClass({
personIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_outRec.init();
return Person_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_outRec = Person_outRec;

});
define("CON_GLOBE.model$Person_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_outRecord = (function (_super) {
__extends(Person_outRecord, _super);
function Person_outRecord(defaults) {
_super.apply(this, arguments);
}
Person_outRecord.attributesToDeclare = function () {
return [
this.attr("Person_out", "person_outAttr", "Person_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_outRec());
}, CON_GLOBEModel.Person_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Person_outRecord.fromStructure = function (str) {
return new Person_outRecord(new Person_outRecord.RecordClass({
person_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_outRecord.IsAnonymousRecord = true;
Person_outRecord.UniqueId = "da1cecdc-f45d-023a-62ca-cc817e03f397";
Person_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_outRecord.init();
return Person_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_outRecord = Person_outRecord;

});
define("CON_GLOBE.model$Person_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_outRecordList = (function (_super) {
__extends(Person_outRecordList, _super);
function Person_outRecordList(defaults) {
_super.apply(this, arguments);
}
Person_outRecordList.RecordType = CON_GLOBEModel.Person_outRecord;
return Person_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Person_outRecordList = Person_outRecordList;

});
define("CON_GLOBE.model$ProcessLog_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ProcessLog_outRec = (function (_super) {
__extends(ProcessLog_outRec, _super);
function ProcessLog_outRec(defaults) {
_super.apply(this, arguments);
}
ProcessLog_outRec.attributesToDeclare = function () {
return [
this.attr("ProcessLogID", "processLogIDAttr", "ProcessLogID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ProcessLog_outRec.fromStructure = function (str) {
return new ProcessLog_outRec(new ProcessLog_outRec.RecordClass({
processLogIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProcessLog_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ProcessLog_outRec.init();
return ProcessLog_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ProcessLog_outRec = ProcessLog_outRec;

});
define("CON_GLOBE.model$ProcessLog_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ProcessLog_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ProcessLog_outRecord = (function (_super) {
__extends(ProcessLog_outRecord, _super);
function ProcessLog_outRecord(defaults) {
_super.apply(this, arguments);
}
ProcessLog_outRecord.attributesToDeclare = function () {
return [
this.attr("ProcessLog_out", "processLog_outAttr", "ProcessLog_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ProcessLog_outRec());
}, CON_GLOBEModel.ProcessLog_outRec)
].concat(_super.attributesToDeclare.call(this));
};
ProcessLog_outRecord.fromStructure = function (str) {
return new ProcessLog_outRecord(new ProcessLog_outRecord.RecordClass({
processLog_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProcessLog_outRecord.IsAnonymousRecord = true;
ProcessLog_outRecord.UniqueId = "6113dab4-ad6b-dd9e-030b-bfb6ab0302e9";
ProcessLog_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ProcessLog_outRecord.init();
return ProcessLog_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ProcessLog_outRecord = ProcessLog_outRecord;

});
define("CON_GLOBE.model$ProcessLog_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ProcessLog_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ProcessLog_outRecordList = (function (_super) {
__extends(ProcessLog_outRecordList, _super);
function ProcessLog_outRecordList(defaults) {
_super.apply(this, arguments);
}
ProcessLog_outRecordList.RecordType = CON_GLOBEModel.ProcessLog_outRecord;
return ProcessLog_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.ProcessLog_outRecordList = ProcessLog_outRecordList;

});
define("CON_GLOBE.model$Parameter_outRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_outRecordList", "CON_GLOBE.model$ProcessLog_outRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter_outRec = (function (_super) {
__extends(Parameter_outRec, _super);
function Parameter_outRec(defaults) {
_super.apply(this, arguments);
}
Parameter_outRec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_outRecordList());
}, CON_GLOBEModel.Person_outRecordList), 
this.attr("ProcessLog", "processLogAttr", "ProcessLog", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ProcessLog_outRecordList());
}, CON_GLOBEModel.ProcessLog_outRecordList), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UpdatedDate", "updatedDateAttr", "UpdatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UpdatedUser", "updatedUserAttr", "UpdatedUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter_outRec.init();
return Parameter_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter_outRec = Parameter_outRec;

});
define("CON_GLOBE.model$Parameter_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter_outRecord = (function (_super) {
__extends(Parameter_outRecord, _super);
function Parameter_outRecord(defaults) {
_super.apply(this, arguments);
}
Parameter_outRecord.attributesToDeclare = function () {
return [
this.attr("Parameter_out", "parameter_outAttr", "Parameter_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter_outRec());
}, CON_GLOBEModel.Parameter_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter_outRecord.fromStructure = function (str) {
return new Parameter_outRecord(new Parameter_outRecord.RecordClass({
parameter_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter_outRecord.IsAnonymousRecord = true;
Parameter_outRecord.UniqueId = "b1d70a4c-9c05-487d-d54e-47dafbd0e56c";
Parameter_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter_outRecord.init();
return Parameter_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter_outRecord = Parameter_outRecord;

});
define("CON_GLOBE.model$Parameter_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter_outRecordList = (function (_super) {
__extends(Parameter_outRecordList, _super);
function Parameter_outRecordList(defaults) {
_super.apply(this, arguments);
}
Parameter_outRecordList.RecordType = CON_GLOBEModel.Parameter_outRecord;
return Parameter_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter_outRecordList = Parameter_outRecordList;

});
define("CON_GLOBE.model$DataOutputRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter_outRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutputRec = (function (_super) {
__extends(DataOutputRec, _super);
function DataOutputRec(defaults) {
_super.apply(this, arguments);
}
DataOutputRec.attributesToDeclare = function () {
return [
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter_outRecordList());
}, CON_GLOBEModel.Parameter_outRecordList)
].concat(_super.attributesToDeclare.call(this));
};
DataOutputRec.fromStructure = function (str) {
return new DataOutputRec(new DataOutputRec.RecordClass({
parametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutputRec.init();
return DataOutputRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutputRec = DataOutputRec;

});
define("CON_GLOBE.model$DataOutputRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutputRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutputRecord = (function (_super) {
__extends(DataOutputRecord, _super);
function DataOutputRecord(defaults) {
_super.apply(this, arguments);
}
DataOutputRecord.attributesToDeclare = function () {
return [
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutputRec());
}, CON_GLOBEModel.DataOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutputRecord.fromStructure = function (str) {
return new DataOutputRecord(new DataOutputRecord.RecordClass({
dataOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutputRecord.IsAnonymousRecord = true;
DataOutputRecord.UniqueId = "35090b22-f5c9-a797-2303-4d373d378599";
DataOutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutputRecord.init();
return DataOutputRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutputRecord = DataOutputRecord;

});
define("CON_GLOBE.model$outputMessageRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HeaderRecord", "CON_GLOBE.model$DataOutputRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessageRec = (function (_super) {
__extends(outputMessageRec, _super);
function outputMessageRec(defaults) {
_super.apply(this, arguments);
}
outputMessageRec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HeaderRecord());
}, CON_GLOBEModel.HeaderRecord), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutputRecord());
}, CON_GLOBEModel.DataOutputRecord)
].concat(_super.attributesToDeclare.call(this));
};
outputMessageRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessageRec.init();
return outputMessageRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessageRec = outputMessageRec;

});
define("CON_GLOBE.model$Event_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Event_outRec = (function (_super) {
__extends(Event_outRec, _super);
function Event_outRec(defaults) {
_super.apply(this, arguments);
}
Event_outRec.attributesToDeclare = function () {
return [
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EventID", "eventIDAttr", "EventID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Event_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Event_outRec.init();
return Event_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Event_outRec = Event_outRec;

});
define("CON_GLOBE.model$Event_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Event_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Event_outRecord = (function (_super) {
__extends(Event_outRecord, _super);
function Event_outRecord(defaults) {
_super.apply(this, arguments);
}
Event_outRecord.attributesToDeclare = function () {
return [
this.attr("Event_out", "event_outAttr", "Event_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Event_outRec());
}, CON_GLOBEModel.Event_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Event_outRecord.fromStructure = function (str) {
return new Event_outRecord(new Event_outRecord.RecordClass({
event_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Event_outRecord.IsAnonymousRecord = true;
Event_outRecord.UniqueId = "5f6e0260-e4c5-3daf-1974-2bf085b076da";
Event_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Event_outRecord.init();
return Event_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Event_outRecord = Event_outRecord;

});
define("CON_GLOBE.model$DataOutput4Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Event_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput4Rec = (function (_super) {
__extends(DataOutput4Rec, _super);
function DataOutput4Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput4Rec.attributesToDeclare = function () {
return [
this.attr("Event", "eventAttr", "Event", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Event_outRecord());
}, CON_GLOBEModel.Event_outRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput4Rec.fromStructure = function (str) {
return new DataOutput4Rec(new DataOutput4Rec.RecordClass({
eventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput4Rec.init();
return DataOutput4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput4Rec = DataOutput4Rec;

});
define("CON_GLOBE.model$Parameter13Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter13Rec = (function (_super) {
__extends(Parameter13Rec, _super);
function Parameter13Rec(defaults) {
_super.apply(this, arguments);
}
Parameter13Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter13Rec.init();
return Parameter13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter13Rec = Parameter13Rec;

});
define("CON_GLOBE.model$Account_in2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in2Rec = (function (_super) {
__extends(Account_in2Rec, _super);
function Account_in2Rec(defaults) {
_super.apply(this, arguments);
}
Account_in2Rec.attributesToDeclare = function () {
return [
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_in2Rec.fromStructure = function (str) {
return new Account_in2Rec(new Account_in2Rec.RecordClass({
accountNumberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_in2Rec.init();
return Account_in2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in2Rec = Account_in2Rec;

});
define("CON_GLOBE.model$Account_in2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in2Record = (function (_super) {
__extends(Account_in2Record, _super);
function Account_in2Record(defaults) {
_super.apply(this, arguments);
}
Account_in2Record.attributesToDeclare = function () {
return [
this.attr("Account_in2", "account_in2Attr", "Account_in2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in2Rec());
}, CON_GLOBEModel.Account_in2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_in2Record.fromStructure = function (str) {
return new Account_in2Record(new Account_in2Record.RecordClass({
account_in2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in2Record.IsAnonymousRecord = true;
Account_in2Record.UniqueId = "0983f248-3c66-68f3-da46-b590e559ea5f";
Account_in2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_in2Record.init();
return Account_in2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in2Record = Account_in2Record;

});
define("CON_GLOBE.model$Person_in2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in2Rec = (function (_super) {
__extends(Person_in2Rec, _super);
function Person_in2Rec(defaults) {
_super.apply(this, arguments);
}
Person_in2Rec.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in2Record());
}, CON_GLOBEModel.Account_in2Record), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in2Rec.init();
return Person_in2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in2Rec = Person_in2Rec;

});
define("CON_GLOBE.model$Product_out_1Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Product_out_1Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_out_1Record = (function (_super) {
__extends(Product_out_1Record, _super);
function Product_out_1Record(defaults) {
_super.apply(this, arguments);
}
Product_out_1Record.attributesToDeclare = function () {
return [
this.attr("Product_out_1", "product_out_1Attr", "Product_out_1", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Product_out_1Rec());
}, CON_GLOBEModel.Product_out_1Rec)
].concat(_super.attributesToDeclare.call(this));
};
Product_out_1Record.fromStructure = function (str) {
return new Product_out_1Record(new Product_out_1Record.RecordClass({
product_out_1Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Product_out_1Record.IsAnonymousRecord = true;
Product_out_1Record.UniqueId = "7214e024-d38a-1069-d9ef-35ed7ea5e18f";
Product_out_1Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Product_out_1Record.init();
return Product_out_1Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Product_out_1Record = Product_out_1Record;

});
define("CON_GLOBE.model$Product_out_1RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Product_out_1Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_out_1RecordList = (function (_super) {
__extends(Product_out_1RecordList, _super);
function Product_out_1RecordList(defaults) {
_super.apply(this, arguments);
}
Product_out_1RecordList.RecordType = CON_GLOBEModel.Product_out_1Record;
return Product_out_1RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Product_out_1RecordList = Product_out_1RecordList;

});
define("CON_GLOBE.model$AddressLocation_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AddressLocation_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AddressLocation_out2Record = (function (_super) {
__extends(AddressLocation_out2Record, _super);
function AddressLocation_out2Record(defaults) {
_super.apply(this, arguments);
}
AddressLocation_out2Record.attributesToDeclare = function () {
return [
this.attr("AddressLocation_out2", "addressLocation_out2Attr", "AddressLocation_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AddressLocation_out2Rec());
}, CON_GLOBEModel.AddressLocation_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
AddressLocation_out2Record.fromStructure = function (str) {
return new AddressLocation_out2Record(new AddressLocation_out2Record.RecordClass({
addressLocation_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AddressLocation_out2Record.IsAnonymousRecord = true;
AddressLocation_out2Record.UniqueId = "03a9f1dd-b9eb-ff30-6c38-a9f19f804b1c";
AddressLocation_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AddressLocation_out2Record.init();
return AddressLocation_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AddressLocation_out2Record = AddressLocation_out2Record;

});
define("CON_GLOBE.model$AddressLocation_out2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AddressLocation_out2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AddressLocation_out2RecordList = (function (_super) {
__extends(AddressLocation_out2RecordList, _super);
function AddressLocation_out2RecordList(defaults) {
_super.apply(this, arguments);
}
AddressLocation_out2RecordList.RecordType = CON_GLOBEModel.AddressLocation_out2Record;
return AddressLocation_out2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.AddressLocation_out2RecordList = AddressLocation_out2RecordList;

});
define("CON_GLOBE.model$Address_outRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Product_out_1RecordList", "CON_GLOBE.model$AddressLocation_out2RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_outRec = (function (_super) {
__extends(Address_outRec, _super);
function Address_outRec(defaults) {
_super.apply(this, arguments);
}
Address_outRec.attributesToDeclare = function () {
return [
this.attr("Product", "productAttr", "Product", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Product_out_1RecordList());
}, CON_GLOBEModel.Product_out_1RecordList), 
this.attr("AddressLocation", "addressLocationAttr", "AddressLocation", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AddressLocation_out2RecordList());
}, CON_GLOBEModel.AddressLocation_out2RecordList), 
this.attr("AddressName", "addressNameAttr", "AddressName", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Address_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Address_outRec.init();
return Address_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_outRec = Address_outRec;

});
define("CON_GLOBE.model$Address_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_outRecord = (function (_super) {
__extends(Address_outRecord, _super);
function Address_outRecord(defaults) {
_super.apply(this, arguments);
}
Address_outRecord.attributesToDeclare = function () {
return [
this.attr("Address_out", "address_outAttr", "Address_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_outRec());
}, CON_GLOBEModel.Address_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Address_outRecord.fromStructure = function (str) {
return new Address_outRecord(new Address_outRecord.RecordClass({
address_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Address_outRecord.IsAnonymousRecord = true;
Address_outRecord.UniqueId = "cc8cdd14-0a1f-6e12-2e6e-00227799e332";
Address_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Address_outRecord.init();
return Address_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_outRecord = Address_outRecord;

});
define("CON_GLOBE.model$Address_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_outRecordList = (function (_super) {
__extends(Address_outRecordList, _super);
function Address_outRecordList(defaults) {
_super.apply(this, arguments);
}
Address_outRecordList.RecordType = CON_GLOBEModel.Address_outRecord;
return Address_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Address_outRecordList = Address_outRecordList;

});
define("CON_GLOBE.model$Product_out_2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Product_out_2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_out_2Record = (function (_super) {
__extends(Product_out_2Record, _super);
function Product_out_2Record(defaults) {
_super.apply(this, arguments);
}
Product_out_2Record.attributesToDeclare = function () {
return [
this.attr("Product_out_2", "product_out_2Attr", "Product_out_2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Product_out_2Rec());
}, CON_GLOBEModel.Product_out_2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Product_out_2Record.fromStructure = function (str) {
return new Product_out_2Record(new Product_out_2Record.RecordClass({
product_out_2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Product_out_2Record.IsAnonymousRecord = true;
Product_out_2Record.UniqueId = "4b46ae63-c2dc-f4fe-5a0e-ab5e1f01c802";
Product_out_2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Product_out_2Record.init();
return Product_out_2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Product_out_2Record = Product_out_2Record;

});
define("CON_GLOBE.model$Product_out_2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Product_out_2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_out_2RecordList = (function (_super) {
__extends(Product_out_2RecordList, _super);
function Product_out_2RecordList(defaults) {
_super.apply(this, arguments);
}
Product_out_2RecordList.RecordType = CON_GLOBEModel.Product_out_2Record;
return Product_out_2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Product_out_2RecordList = Product_out_2RecordList;

});
define("CON_GLOBE.model$Account_out3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_outRecordList", "CON_GLOBE.model$Product_out_2RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_out3Rec = (function (_super) {
__extends(Account_out3Rec, _super);
function Account_out3Rec(defaults) {
_super.apply(this, arguments);
}
Account_out3Rec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_outRecordList());
}, CON_GLOBEModel.Address_outRecordList), 
this.attr("Product", "productAttr", "Product", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Product_out_2RecordList());
}, CON_GLOBEModel.Product_out_2RecordList), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_out3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_out3Rec.init();
return Account_out3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_out3Rec = Account_out3Rec;

});
define("CON_GLOBE.model$Account_out3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_out3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_out3Record = (function (_super) {
__extends(Account_out3Record, _super);
function Account_out3Record(defaults) {
_super.apply(this, arguments);
}
Account_out3Record.attributesToDeclare = function () {
return [
this.attr("Account_out3", "account_out3Attr", "Account_out3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_out3Rec());
}, CON_GLOBEModel.Account_out3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_out3Record.fromStructure = function (str) {
return new Account_out3Record(new Account_out3Record.RecordClass({
account_out3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_out3Record.IsAnonymousRecord = true;
Account_out3Record.UniqueId = "f0a39f8b-4937-5038-f292-eb724e42af7e";
Account_out3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_out3Record.init();
return Account_out3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_out3Record = Account_out3Record;

});
define("CON_GLOBE.model$DataOutput3Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_out3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput3Rec = (function (_super) {
__extends(DataOutput3Rec, _super);
function DataOutput3Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput3Rec.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_out3Record());
}, CON_GLOBEModel.Account_out3Record)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput3Rec.fromStructure = function (str) {
return new DataOutput3Rec(new DataOutput3Rec.RecordClass({
accountAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput3Rec.init();
return DataOutput3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput3Rec = DataOutput3Rec;

});
define("CON_GLOBE.model$DataOutput3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput3Record = (function (_super) {
__extends(DataOutput3Record, _super);
function DataOutput3Record(defaults) {
_super.apply(this, arguments);
}
DataOutput3Record.attributesToDeclare = function () {
return [
this.attr("DataOutput3", "dataOutput3Attr", "DataOutput3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput3Rec());
}, CON_GLOBEModel.DataOutput3Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput3Record.fromStructure = function (str) {
return new DataOutput3Record(new DataOutput3Record.RecordClass({
dataOutput3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput3Record.IsAnonymousRecord = true;
DataOutput3Record.UniqueId = "a9b0ebfe-7668-f0a2-69f8-6c7c5ad3d593";
DataOutput3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput3Record.init();
return DataOutput3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput3Record = DataOutput3Record;

});
define("CON_GLOBE.model$outputMessage6Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header6Record", "CON_GLOBE.model$DataOutput3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage6Rec = (function (_super) {
__extends(outputMessage6Rec, _super);
function outputMessage6Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage6Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header6Record());
}, CON_GLOBEModel.Header6Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput3Record());
}, CON_GLOBEModel.DataOutput3Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage6Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage6Rec.init();
return outputMessage6Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage6Rec = outputMessage6Rec;

});
define("CON_GLOBE.model$eCodes2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes2Rec = (function (_super) {
__extends(eCodes2Rec, _super);
function eCodes2Rec(defaults) {
_super.apply(this, arguments);
}
eCodes2Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes2Rec.init();
return eCodes2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes2Rec = eCodes2Rec;

});
define("CON_GLOBE.model$Parameter13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter13Record = (function (_super) {
__extends(Parameter13Record, _super);
function Parameter13Record(defaults) {
_super.apply(this, arguments);
}
Parameter13Record.attributesToDeclare = function () {
return [
this.attr("Parameter13", "parameter13Attr", "Parameter13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter13Rec());
}, CON_GLOBEModel.Parameter13Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter13Record.fromStructure = function (str) {
return new Parameter13Record(new Parameter13Record.RecordClass({
parameter13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter13Record.IsAnonymousRecord = true;
Parameter13Record.UniqueId = "45339927-ad1f-2ffa-e5c9-29c1c86b7ad6";
Parameter13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter13Record.init();
return Parameter13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter13Record = Parameter13Record;

});
define("CON_GLOBE.model$Parameter13RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter13Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter13RecordList = (function (_super) {
__extends(Parameter13RecordList, _super);
function Parameter13RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter13RecordList.RecordType = CON_GLOBEModel.Parameter13Record;
return Parameter13RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter13RecordList = Parameter13RecordList;

});
define("CON_GLOBE.model$AccessData14Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData14Rec = (function (_super) {
__extends(AccessData14Rec, _super);
function AccessData14Rec(defaults) {
_super.apply(this, arguments);
}
AccessData14Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData14Rec.init();
return AccessData14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData14Rec = AccessData14Rec;

});
define("CON_GLOBE.model$AccessData14Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData14Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData14Record = (function (_super) {
__extends(AccessData14Record, _super);
function AccessData14Record(defaults) {
_super.apply(this, arguments);
}
AccessData14Record.attributesToDeclare = function () {
return [
this.attr("AccessData14", "accessData14Attr", "AccessData14", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData14Rec());
}, CON_GLOBEModel.AccessData14Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData14Record.fromStructure = function (str) {
return new AccessData14Record(new AccessData14Record.RecordClass({
accessData14Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData14Record.IsAnonymousRecord = true;
AccessData14Record.UniqueId = "ae2e0e3e-5461-4982-073b-568541fd8a5d";
AccessData14Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData14Record.init();
return AccessData14Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData14Record = AccessData14Record;

});
define("CON_GLOBE.model$HistoryStep14Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep14Rec = (function (_super) {
__extends(HistoryStep14Rec, _super);
function HistoryStep14Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep14Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep14Rec.init();
return HistoryStep14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep14Rec = HistoryStep14Rec;

});
define("CON_GLOBE.model$HistoryStep14Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep14Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep14Record = (function (_super) {
__extends(HistoryStep14Record, _super);
function HistoryStep14Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep14Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep14", "historyStep14Attr", "HistoryStep14", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep14Rec());
}, CON_GLOBEModel.HistoryStep14Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep14Record.fromStructure = function (str) {
return new HistoryStep14Record(new HistoryStep14Record.RecordClass({
historyStep14Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep14Record.IsAnonymousRecord = true;
HistoryStep14Record.UniqueId = "1767c4a8-01e8-f4b4-c1ad-cb50bef3bc84";
HistoryStep14Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep14Record.init();
return HistoryStep14Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep14Record = HistoryStep14Record;

});
define("CON_GLOBE.model$HistoryStep14RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep14Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep14RecordList = (function (_super) {
__extends(HistoryStep14RecordList, _super);
function HistoryStep14RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep14RecordList.RecordType = CON_GLOBEModel.HistoryStep14Record;
return HistoryStep14RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep14RecordList = HistoryStep14RecordList;

});
define("CON_GLOBE.model$eCodes14Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes14Rec = (function (_super) {
__extends(eCodes14Rec, _super);
function eCodes14Rec(defaults) {
_super.apply(this, arguments);
}
eCodes14Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes14Rec.init();
return eCodes14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes14Rec = eCodes14Rec;

});
define("CON_GLOBE.model$eCodes14Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes14Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes14Record = (function (_super) {
__extends(eCodes14Record, _super);
function eCodes14Record(defaults) {
_super.apply(this, arguments);
}
eCodes14Record.attributesToDeclare = function () {
return [
this.attr("eCodes14", "eCodes14Attr", "eCodes14", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes14Rec());
}, CON_GLOBEModel.eCodes14Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes14Record.fromStructure = function (str) {
return new eCodes14Record(new eCodes14Record.RecordClass({
eCodes14Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes14Record.IsAnonymousRecord = true;
eCodes14Record.UniqueId = "5852eeea-da39-a67b-5b3b-5c0714999e18";
eCodes14Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes14Record.init();
return eCodes14Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes14Record = eCodes14Record;

});
define("CON_GLOBE.model$eNative13Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative13Rec = (function (_super) {
__extends(eNative13Rec, _super);
function eNative13Rec(defaults) {
_super.apply(this, arguments);
}
eNative13Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative13Rec.init();
return eNative13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative13Rec = eNative13Rec;

});
define("CON_GLOBE.model$eNative13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative13Record = (function (_super) {
__extends(eNative13Record, _super);
function eNative13Record(defaults) {
_super.apply(this, arguments);
}
eNative13Record.attributesToDeclare = function () {
return [
this.attr("eNative13", "eNative13Attr", "eNative13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative13Rec());
}, CON_GLOBEModel.eNative13Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative13Record.fromStructure = function (str) {
return new eNative13Record(new eNative13Record.RecordClass({
eNative13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative13Record.IsAnonymousRecord = true;
eNative13Record.UniqueId = "021270f5-7b18-f35f-132c-fdf329d0e96b";
eNative13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative13Record.init();
return eNative13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative13Record = eNative13Record;

});
define("CON_GLOBE.model$eNative13RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative13Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative13RecordList = (function (_super) {
__extends(eNative13RecordList, _super);
function eNative13RecordList(defaults) {
_super.apply(this, arguments);
}
eNative13RecordList.RecordType = CON_GLOBEModel.eNative13Record;
return eNative13RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative13RecordList = eNative13RecordList;

});
define("CON_GLOBE.model$Status14Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes14Record", "CON_GLOBE.model$eNative13RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status14Rec = (function (_super) {
__extends(Status14Rec, _super);
function Status14Rec(defaults) {
_super.apply(this, arguments);
}
Status14Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes14Record());
}, CON_GLOBEModel.eCodes14Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative13RecordList());
}, CON_GLOBEModel.eNative13RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status14Rec.init();
return Status14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status14Rec = Status14Rec;

});
define("CON_GLOBE.model$Status14Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status14Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status14Record = (function (_super) {
__extends(Status14Record, _super);
function Status14Record(defaults) {
_super.apply(this, arguments);
}
Status14Record.attributesToDeclare = function () {
return [
this.attr("Status14", "status14Attr", "Status14", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status14Rec());
}, CON_GLOBEModel.Status14Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status14Record.fromStructure = function (str) {
return new Status14Record(new Status14Record.RecordClass({
status14Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status14Record.IsAnonymousRecord = true;
Status14Record.UniqueId = "971ec1cb-b3d6-48e3-c1e7-1800ddfddf12";
Status14Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status14Record.init();
return Status14Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status14Record = Status14Record;

});
define("CON_GLOBE.model$Header14Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter13RecordList", "CON_GLOBE.model$AccessData14Record", "CON_GLOBE.model$HistoryStep14RecordList", "CON_GLOBE.model$Status14Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header14Rec = (function (_super) {
__extends(Header14Rec, _super);
function Header14Rec(defaults) {
_super.apply(this, arguments);
}
Header14Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter13RecordList());
}, CON_GLOBEModel.Parameter13RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData14Record());
}, CON_GLOBEModel.AccessData14Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep14RecordList());
}, CON_GLOBEModel.HistoryStep14RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status14Record());
}, CON_GLOBEModel.Status14Record)
].concat(_super.attributesToDeclare.call(this));
};
Header14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header14Rec.init();
return Header14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header14Rec = Header14Rec;

});
define("CON_GLOBE.model$Header14Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header14Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header14Record = (function (_super) {
__extends(Header14Record, _super);
function Header14Record(defaults) {
_super.apply(this, arguments);
}
Header14Record.attributesToDeclare = function () {
return [
this.attr("Header14", "header14Attr", "Header14", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header14Rec());
}, CON_GLOBEModel.Header14Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header14Record.fromStructure = function (str) {
return new Header14Record(new Header14Record.RecordClass({
header14Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header14Record.IsAnonymousRecord = true;
Header14Record.UniqueId = "ccfb826a-47f0-86da-9884-d120731a4137";
Header14Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header14Record.init();
return Header14Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header14Record = Header14Record;

});
define("CON_GLOBE.model$DataOutput9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput9Record = (function (_super) {
__extends(DataOutput9Record, _super);
function DataOutput9Record(defaults) {
_super.apply(this, arguments);
}
DataOutput9Record.attributesToDeclare = function () {
return [
this.attr("DataOutput9", "dataOutput9Attr", "DataOutput9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput9Rec());
}, CON_GLOBEModel.DataOutput9Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput9Record.fromStructure = function (str) {
return new DataOutput9Record(new DataOutput9Record.RecordClass({
dataOutput9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput9Record.IsAnonymousRecord = true;
DataOutput9Record.UniqueId = "3ceb0191-f0cb-7f67-6f42-bd6f48423662";
DataOutput9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput9Record.init();
return DataOutput9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput9Record = DataOutput9Record;

});
define("CON_GLOBE.model$outputMessage14Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header14Record", "CON_GLOBE.model$DataOutput9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage14Rec = (function (_super) {
__extends(outputMessage14Rec, _super);
function outputMessage14Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage14Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header14Record());
}, CON_GLOBEModel.Header14Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput9Record());
}, CON_GLOBEModel.DataOutput9Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage14Rec.init();
return outputMessage14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage14Rec = outputMessage14Rec;

});
define("CON_GLOBE.model$Person_in11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in11Record = (function (_super) {
__extends(Person_in11Record, _super);
function Person_in11Record(defaults) {
_super.apply(this, arguments);
}
Person_in11Record.attributesToDeclare = function () {
return [
this.attr("Person_in11", "person_in11Attr", "Person_in11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in11Rec());
}, CON_GLOBEModel.Person_in11Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in11Record.fromStructure = function (str) {
return new Person_in11Record(new Person_in11Record.RecordClass({
person_in11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in11Record.IsAnonymousRecord = true;
Person_in11Record.UniqueId = "74efa4bc-a7fb-fa15-1240-939bd25a094b";
Person_in11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in11Record.init();
return Person_in11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in11Record = Person_in11Record;

});
define("CON_GLOBE.model$DataInput15Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in11Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput15Rec = (function (_super) {
__extends(DataInput15Rec, _super);
function DataInput15Rec(defaults) {
_super.apply(this, arguments);
}
DataInput15Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in11Record());
}, CON_GLOBEModel.Person_in11Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput15Rec.fromStructure = function (str) {
return new DataInput15Rec(new DataInput15Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput15Rec.init();
return DataInput15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput15Rec = DataInput15Rec;

});
define("CON_GLOBE.model$Parameter2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter2Rec = (function (_super) {
__extends(Parameter2Rec, _super);
function Parameter2Rec(defaults) {
_super.apply(this, arguments);
}
Parameter2Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter2Rec.init();
return Parameter2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter2Rec = Parameter2Rec;

});
define("CON_GLOBE.model$Parameter2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter2Record = (function (_super) {
__extends(Parameter2Record, _super);
function Parameter2Record(defaults) {
_super.apply(this, arguments);
}
Parameter2Record.attributesToDeclare = function () {
return [
this.attr("Parameter2", "parameter2Attr", "Parameter2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter2Rec());
}, CON_GLOBEModel.Parameter2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter2Record.fromStructure = function (str) {
return new Parameter2Record(new Parameter2Record.RecordClass({
parameter2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter2Record.IsAnonymousRecord = true;
Parameter2Record.UniqueId = "f7ba8cc1-cb26-656a-4a87-d2e16b1a4291";
Parameter2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter2Record.init();
return Parameter2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter2Record = Parameter2Record;

});
define("CON_GLOBE.model$Parameter2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter2RecordList = (function (_super) {
__extends(Parameter2RecordList, _super);
function Parameter2RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter2RecordList.RecordType = CON_GLOBEModel.Parameter2Record;
return Parameter2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter2RecordList = Parameter2RecordList;

});
define("CON_GLOBE.model$AccessData2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData2Record = (function (_super) {
__extends(AccessData2Record, _super);
function AccessData2Record(defaults) {
_super.apply(this, arguments);
}
AccessData2Record.attributesToDeclare = function () {
return [
this.attr("AccessData2", "accessData2Attr", "AccessData2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData2Rec());
}, CON_GLOBEModel.AccessData2Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData2Record.fromStructure = function (str) {
return new AccessData2Record(new AccessData2Record.RecordClass({
accessData2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData2Record.IsAnonymousRecord = true;
AccessData2Record.UniqueId = "0238bb0e-f8f2-ae5b-73ac-144bc878ca81";
AccessData2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData2Record.init();
return AccessData2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData2Record = AccessData2Record;

});
define("CON_GLOBE.model$HistoryStep2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep2Rec = (function (_super) {
__extends(HistoryStep2Rec, _super);
function HistoryStep2Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep2Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep2Rec.init();
return HistoryStep2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep2Rec = HistoryStep2Rec;

});
define("CON_GLOBE.model$HistoryStep2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep2Record = (function (_super) {
__extends(HistoryStep2Record, _super);
function HistoryStep2Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep2Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep2", "historyStep2Attr", "HistoryStep2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep2Rec());
}, CON_GLOBEModel.HistoryStep2Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep2Record.fromStructure = function (str) {
return new HistoryStep2Record(new HistoryStep2Record.RecordClass({
historyStep2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep2Record.IsAnonymousRecord = true;
HistoryStep2Record.UniqueId = "824f504b-3567-0be1-b2d1-aac83b5e61b9";
HistoryStep2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep2Record.init();
return HistoryStep2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep2Record = HistoryStep2Record;

});
define("CON_GLOBE.model$HistoryStep2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep2RecordList = (function (_super) {
__extends(HistoryStep2RecordList, _super);
function HistoryStep2RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep2RecordList.RecordType = CON_GLOBEModel.HistoryStep2Record;
return HistoryStep2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep2RecordList = HistoryStep2RecordList;

});
define("CON_GLOBE.model$eCodes2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes2Record = (function (_super) {
__extends(eCodes2Record, _super);
function eCodes2Record(defaults) {
_super.apply(this, arguments);
}
eCodes2Record.attributesToDeclare = function () {
return [
this.attr("eCodes2", "eCodes2Attr", "eCodes2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes2Rec());
}, CON_GLOBEModel.eCodes2Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes2Record.fromStructure = function (str) {
return new eCodes2Record(new eCodes2Record.RecordClass({
eCodes2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes2Record.IsAnonymousRecord = true;
eCodes2Record.UniqueId = "4beb2a72-d7f2-3322-a637-50df158fae9f";
eCodes2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes2Record.init();
return eCodes2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes2Record = eCodes2Record;

});
define("CON_GLOBE.model$eNative2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative2Record = (function (_super) {
__extends(eNative2Record, _super);
function eNative2Record(defaults) {
_super.apply(this, arguments);
}
eNative2Record.attributesToDeclare = function () {
return [
this.attr("eNative2", "eNative2Attr", "eNative2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative2Rec());
}, CON_GLOBEModel.eNative2Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative2Record.fromStructure = function (str) {
return new eNative2Record(new eNative2Record.RecordClass({
eNative2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative2Record.IsAnonymousRecord = true;
eNative2Record.UniqueId = "483ed9a1-8cd2-0b4d-c75e-ad773a166720";
eNative2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative2Record.init();
return eNative2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative2Record = eNative2Record;

});
define("CON_GLOBE.model$eNative2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative2RecordList = (function (_super) {
__extends(eNative2RecordList, _super);
function eNative2RecordList(defaults) {
_super.apply(this, arguments);
}
eNative2RecordList.RecordType = CON_GLOBEModel.eNative2Record;
return eNative2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative2RecordList = eNative2RecordList;

});
define("CON_GLOBE.model$Status2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes2Record", "CON_GLOBE.model$eNative2RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status2Rec = (function (_super) {
__extends(Status2Rec, _super);
function Status2Rec(defaults) {
_super.apply(this, arguments);
}
Status2Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes2Record());
}, CON_GLOBEModel.eCodes2Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative2RecordList());
}, CON_GLOBEModel.eNative2RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status2Rec.init();
return Status2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status2Rec = Status2Rec;

});
define("CON_GLOBE.model$Status2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status2Record = (function (_super) {
__extends(Status2Record, _super);
function Status2Record(defaults) {
_super.apply(this, arguments);
}
Status2Record.attributesToDeclare = function () {
return [
this.attr("Status2", "status2Attr", "Status2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status2Rec());
}, CON_GLOBEModel.Status2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status2Record.fromStructure = function (str) {
return new Status2Record(new Status2Record.RecordClass({
status2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status2Record.IsAnonymousRecord = true;
Status2Record.UniqueId = "8ad4e5f9-45d6-2e44-1081-3f49a9b5ae5e";
Status2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status2Record.init();
return Status2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status2Record = Status2Record;

});
define("CON_GLOBE.model$Header2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter2RecordList", "CON_GLOBE.model$AccessData2Record", "CON_GLOBE.model$HistoryStep2RecordList", "CON_GLOBE.model$Status2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header2Rec = (function (_super) {
__extends(Header2Rec, _super);
function Header2Rec(defaults) {
_super.apply(this, arguments);
}
Header2Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter2RecordList());
}, CON_GLOBEModel.Parameter2RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData2Record());
}, CON_GLOBEModel.AccessData2Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep2RecordList());
}, CON_GLOBEModel.HistoryStep2RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status2Record());
}, CON_GLOBEModel.Status2Record)
].concat(_super.attributesToDeclare.call(this));
};
Header2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header2Rec.init();
return Header2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header2Rec = Header2Rec;

});
define("CON_GLOBE.model$Header2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header2Record = (function (_super) {
__extends(Header2Record, _super);
function Header2Record(defaults) {
_super.apply(this, arguments);
}
Header2Record.attributesToDeclare = function () {
return [
this.attr("Header2", "header2Attr", "Header2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header2Rec());
}, CON_GLOBEModel.Header2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header2Record.fromStructure = function (str) {
return new Header2Record(new Header2Record.RecordClass({
header2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header2Record.IsAnonymousRecord = true;
Header2Record.UniqueId = "e4a25347-f193-be1f-0022-300f12893258";
Header2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header2Record.init();
return Header2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header2Record = Header2Record;

});
define("CON_GLOBE.model$Accounts_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Accounts_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Accounts_outRecord = (function (_super) {
__extends(Accounts_outRecord, _super);
function Accounts_outRecord(defaults) {
_super.apply(this, arguments);
}
Accounts_outRecord.attributesToDeclare = function () {
return [
this.attr("Accounts_out", "accounts_outAttr", "Accounts_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Accounts_outRec());
}, CON_GLOBEModel.Accounts_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Accounts_outRecord.fromStructure = function (str) {
return new Accounts_outRecord(new Accounts_outRecord.RecordClass({
accounts_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Accounts_outRecord.IsAnonymousRecord = true;
Accounts_outRecord.UniqueId = "e543ab16-596f-818d-80f3-1f904a2ff6a4";
Accounts_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Accounts_outRecord.init();
return Accounts_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Accounts_outRecord = Accounts_outRecord;

});
define("CON_GLOBE.model$Person_out2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Accounts_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out2Rec = (function (_super) {
__extends(Person_out2Rec, _super);
function Person_out2Rec(defaults) {
_super.apply(this, arguments);
}
Person_out2Rec.attributesToDeclare = function () {
return [
this.attr("Accounts", "accountsAttr", "Accounts", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Accounts_outRecord());
}, CON_GLOBEModel.Accounts_outRecord), 
this.attr("CalculationDate", "calculationDateAttr", "CalculationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationIntegrationDate", "calculationIntegrationDateAttr", "CalculationIntegrationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationIntegrationID", "calculationIntegrationIDAttr", "CalculationIntegrationID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationMessage", "calculationMessageAttr", "CalculationMessage", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CalculationType", "calculationTypeAttr", "CalculationType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ComplementaryRecurringGrossAmount", "complementaryRecurringGrossAmountAttr", "ComplementaryRecurringGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DiscountGrossAmount", "discountGrossAmountAttr", "DiscountGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HasCalculation", "hasCalculationAttr", "HasCalculation", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HasCalculationRestriction", "hasCalculationRestrictionAttr", "HasCalculationRestriction", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PermanencyDate", "permanencyDateAttr", "PermanencyDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RecurringGrossAmount", "recurringGrossAmountAttr", "RecurringGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResourceRecurringGrossAmount", "resourceRecurringGrossAmountAttr", "ResourceRecurringGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UsageGrossAmount", "usageGrossAmountAttr", "UsageGrossAmount", false, OS.Types.Text, function () {
return "";
}), 
this.attr("WeightGrossValue", "weightGrossValueAttr", "WeightGrossValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("WeightNetValue", "weightNetValueAttr", "WeightNetValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("WeightPermanencyDate", "weightPermanencyDateAttr", "WeightPermanencyDate", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out2Rec.init();
return Person_out2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out2Rec = Person_out2Rec;

});
define("CON_GLOBE.model$Person_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out2Record = (function (_super) {
__extends(Person_out2Record, _super);
function Person_out2Record(defaults) {
_super.apply(this, arguments);
}
Person_out2Record.attributesToDeclare = function () {
return [
this.attr("Person_out2", "person_out2Attr", "Person_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out2Rec());
}, CON_GLOBEModel.Person_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_out2Record.fromStructure = function (str) {
return new Person_out2Record(new Person_out2Record.RecordClass({
person_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out2Record.IsAnonymousRecord = true;
Person_out2Record.UniqueId = "ac8af42f-4b55-a7ed-6db5-16d9446d8a63";
Person_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_out2Record.init();
return Person_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out2Record = Person_out2Record;

});
define("CON_GLOBE.model$DataOutput2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput2Rec = (function (_super) {
__extends(DataOutput2Rec, _super);
function DataOutput2Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput2Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out2Record());
}, CON_GLOBEModel.Person_out2Record)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput2Rec.fromStructure = function (str) {
return new DataOutput2Rec(new DataOutput2Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput2Rec.init();
return DataOutput2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput2Rec = DataOutput2Rec;

});
define("CON_GLOBE.model$DataOutput2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput2Record = (function (_super) {
__extends(DataOutput2Record, _super);
function DataOutput2Record(defaults) {
_super.apply(this, arguments);
}
DataOutput2Record.attributesToDeclare = function () {
return [
this.attr("DataOutput2", "dataOutput2Attr", "DataOutput2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput2Rec());
}, CON_GLOBEModel.DataOutput2Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput2Record.fromStructure = function (str) {
return new DataOutput2Record(new DataOutput2Record.RecordClass({
dataOutput2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput2Record.IsAnonymousRecord = true;
DataOutput2Record.UniqueId = "c17e30b5-f506-f4e1-84f5-5bac1a7fa381";
DataOutput2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput2Record.init();
return DataOutput2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput2Record = DataOutput2Record;

});
define("CON_GLOBE.model$outputMessage2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header2Record", "CON_GLOBE.model$DataOutput2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage2Rec = (function (_super) {
__extends(outputMessage2Rec, _super);
function outputMessage2Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage2Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header2Record());
}, CON_GLOBEModel.Header2Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput2Record());
}, CON_GLOBEModel.DataOutput2Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage2Rec.init();
return outputMessage2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage2Rec = outputMessage2Rec;

});
define("CON_GLOBE.model$Person2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person2Rec = (function (_super) {
__extends(Person2Rec, _super);
function Person2Rec(defaults) {
_super.apply(this, arguments);
}
Person2Rec.attributesToDeclare = function () {
return [
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person2Rec.init();
return Person2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person2Rec = Person2Rec;

});
define("CON_GLOBE.model$CreditCardInRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CreditCardInRec = (function (_super) {
__extends(CreditCardInRec, _super);
function CreditCardInRec(defaults) {
_super.apply(this, arguments);
}
CreditCardInRec.attributesToDeclare = function () {
return [
this.attr("ExpirationDate", "expirationDateAttr", "ExpirationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CreditCardInRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CreditCardInRec.init();
return CreditCardInRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CreditCardInRec = CreditCardInRec;

});
define("CON_GLOBE.model$eNative15Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative15Rec = (function (_super) {
__extends(eNative15Rec, _super);
function eNative15Rec(defaults) {
_super.apply(this, arguments);
}
eNative15Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative15Rec.init();
return eNative15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative15Rec = eNative15Rec;

});
define("CON_GLOBE.model$OptionsMarketingFlagRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var OptionsMarketingFlagRec = (function (_super) {
__extends(OptionsMarketingFlagRec, _super);
function OptionsMarketingFlagRec(defaults) {
_super.apply(this, arguments);
}
OptionsMarketingFlagRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("isDefaultValue", "isDefaultValueAttr", "isDefaultValue", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
OptionsMarketingFlagRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
OptionsMarketingFlagRec.init();
return OptionsMarketingFlagRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.OptionsMarketingFlagRec = OptionsMarketingFlagRec;

});
define("CON_GLOBE.model$OptionsMarketingFlagRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$OptionsMarketingFlagRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var OptionsMarketingFlagRecord = (function (_super) {
__extends(OptionsMarketingFlagRecord, _super);
function OptionsMarketingFlagRecord(defaults) {
_super.apply(this, arguments);
}
OptionsMarketingFlagRecord.attributesToDeclare = function () {
return [
this.attr("OptionsMarketingFlag", "optionsMarketingFlagAttr", "OptionsMarketingFlag", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.OptionsMarketingFlagRec());
}, CON_GLOBEModel.OptionsMarketingFlagRec)
].concat(_super.attributesToDeclare.call(this));
};
OptionsMarketingFlagRecord.fromStructure = function (str) {
return new OptionsMarketingFlagRecord(new OptionsMarketingFlagRecord.RecordClass({
optionsMarketingFlagAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OptionsMarketingFlagRecord.IsAnonymousRecord = true;
OptionsMarketingFlagRecord.UniqueId = "1da011fd-23f3-a47f-f98d-671021aebd6f";
OptionsMarketingFlagRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
OptionsMarketingFlagRecord.init();
return OptionsMarketingFlagRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.OptionsMarketingFlagRecord = OptionsMarketingFlagRecord;

});
define("CON_GLOBE.model$OptionsMarketingFlagRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$OptionsMarketingFlagRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var OptionsMarketingFlagRecordList = (function (_super) {
__extends(OptionsMarketingFlagRecordList, _super);
function OptionsMarketingFlagRecordList(defaults) {
_super.apply(this, arguments);
}
OptionsMarketingFlagRecordList.RecordType = CON_GLOBEModel.OptionsMarketingFlagRecord;
return OptionsMarketingFlagRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.OptionsMarketingFlagRecordList = OptionsMarketingFlagRecordList;

});
define("CON_GLOBE.model$MarketingFlagsRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$OptionsMarketingFlagRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var MarketingFlagsRec = (function (_super) {
__extends(MarketingFlagsRec, _super);
function MarketingFlagsRec(defaults) {
_super.apply(this, arguments);
}
MarketingFlagsRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OptionsMarketingFlags", "optionsMarketingFlagsAttr", "OptionsMarketingFlags", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.OptionsMarketingFlagRecordList());
}, CON_GLOBEModel.OptionsMarketingFlagRecordList)
].concat(_super.attributesToDeclare.call(this));
};
MarketingFlagsRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
MarketingFlagsRec.init();
return MarketingFlagsRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.MarketingFlagsRec = MarketingFlagsRec;

});
define("CON_GLOBE.model$MarketingFlagsRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$MarketingFlagsRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var MarketingFlagsRecord = (function (_super) {
__extends(MarketingFlagsRecord, _super);
function MarketingFlagsRecord(defaults) {
_super.apply(this, arguments);
}
MarketingFlagsRecord.attributesToDeclare = function () {
return [
this.attr("MarketingFlags", "marketingFlagsAttr", "MarketingFlags", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.MarketingFlagsRec());
}, CON_GLOBEModel.MarketingFlagsRec)
].concat(_super.attributesToDeclare.call(this));
};
MarketingFlagsRecord.fromStructure = function (str) {
return new MarketingFlagsRecord(new MarketingFlagsRecord.RecordClass({
marketingFlagsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MarketingFlagsRecord.IsAnonymousRecord = true;
MarketingFlagsRecord.UniqueId = "55ffcafe-3645-802a-2aeb-9cf03ccb41cb";
MarketingFlagsRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
MarketingFlagsRecord.init();
return MarketingFlagsRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.MarketingFlagsRecord = MarketingFlagsRecord;

});
define("CON_GLOBE.model$MarketingFlagsRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$MarketingFlagsRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var MarketingFlagsRecordList = (function (_super) {
__extends(MarketingFlagsRecordList, _super);
function MarketingFlagsRecordList(defaults) {
_super.apply(this, arguments);
}
MarketingFlagsRecordList.RecordType = CON_GLOBEModel.MarketingFlagsRecord;
return MarketingFlagsRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.MarketingFlagsRecordList = MarketingFlagsRecordList;

});
define("CON_GLOBE.model$MarketingFlagGroupRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$MarketingFlagsRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var MarketingFlagGroupRec = (function (_super) {
__extends(MarketingFlagGroupRec, _super);
function MarketingFlagGroupRec(defaults) {
_super.apply(this, arguments);
}
MarketingFlagGroupRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NumberOfMarketingFlags", "numberOfMarketingFlagsAttr", "NumberOfMarketingFlags", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MarketingFlags", "marketingFlagsAttr", "MarketingFlags", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.MarketingFlagsRecordList());
}, CON_GLOBEModel.MarketingFlagsRecordList)
].concat(_super.attributesToDeclare.call(this));
};
MarketingFlagGroupRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
MarketingFlagGroupRec.init();
return MarketingFlagGroupRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.MarketingFlagGroupRec = MarketingFlagGroupRec;

});
define("CON_GLOBE.model$BillingAccountInRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccountInRec = (function (_super) {
__extends(BillingAccountInRec, _super);
function BillingAccountInRec(defaults) {
_super.apply(this, arguments);
}
BillingAccountInRec.attributesToDeclare = function () {
return [
this.attr("ID", "iDAttr", "ID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
BillingAccountInRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
BillingAccountInRec.init();
return BillingAccountInRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccountInRec = BillingAccountInRec;

});
define("CON_GLOBE.model$BillingAccountInRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$BillingAccountInRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var BillingAccountInRecord = (function (_super) {
__extends(BillingAccountInRecord, _super);
function BillingAccountInRecord(defaults) {
_super.apply(this, arguments);
}
BillingAccountInRecord.attributesToDeclare = function () {
return [
this.attr("BillingAccountIn", "billingAccountInAttr", "BillingAccountIn", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccountInRec());
}, CON_GLOBEModel.BillingAccountInRec)
].concat(_super.attributesToDeclare.call(this));
};
BillingAccountInRecord.fromStructure = function (str) {
return new BillingAccountInRecord(new BillingAccountInRecord.RecordClass({
billingAccountInAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BillingAccountInRecord.IsAnonymousRecord = true;
BillingAccountInRecord.UniqueId = "d3453986-d4e9-fc71-8688-9a4542fe23f6";
BillingAccountInRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
BillingAccountInRecord.init();
return BillingAccountInRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.BillingAccountInRecord = BillingAccountInRecord;

});
define("CON_GLOBE.model$CreditCardInRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CreditCardInRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CreditCardInRecord = (function (_super) {
__extends(CreditCardInRecord, _super);
function CreditCardInRecord(defaults) {
_super.apply(this, arguments);
}
CreditCardInRecord.attributesToDeclare = function () {
return [
this.attr("CreditCardIn", "creditCardInAttr", "CreditCardIn", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CreditCardInRec());
}, CON_GLOBEModel.CreditCardInRec)
].concat(_super.attributesToDeclare.call(this));
};
CreditCardInRecord.fromStructure = function (str) {
return new CreditCardInRecord(new CreditCardInRecord.RecordClass({
creditCardInAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CreditCardInRecord.IsAnonymousRecord = true;
CreditCardInRecord.UniqueId = "578830e5-5d91-3755-d839-bd5830996aca";
CreditCardInRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CreditCardInRecord.init();
return CreditCardInRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CreditCardInRecord = CreditCardInRecord;

});
define("CON_GLOBE.model$PaymentInRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CreditCardInRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var PaymentInRec = (function (_super) {
__extends(PaymentInRec, _super);
function PaymentInRec(defaults) {
_super.apply(this, arguments);
}
PaymentInRec.attributesToDeclare = function () {
return [
this.attr("CreditCard", "creditCardAttr", "CreditCard", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CreditCardInRecord());
}, CON_GLOBEModel.CreditCardInRecord), 
this.attr("Bank", "bankAttr", "Bank", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BankBranchID", "bankBranchIDAttr", "BankBranchID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BankID", "bankIDAttr", "BankID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IBAN", "iBANAttr", "IBAN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IBANCountryCode", "iBANCountryCodeAttr", "IBANCountryCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Method", "methodAttr", "Method", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SWIFT", "sWIFTAttr", "SWIFT", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PaymentInRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PaymentInRec.init();
return PaymentInRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.PaymentInRec = PaymentInRec;

});
define("CON_GLOBE.model$PaymentInRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$PaymentInRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var PaymentInRecord = (function (_super) {
__extends(PaymentInRecord, _super);
function PaymentInRecord(defaults) {
_super.apply(this, arguments);
}
PaymentInRecord.attributesToDeclare = function () {
return [
this.attr("PaymentIn", "paymentInAttr", "PaymentIn", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.PaymentInRec());
}, CON_GLOBEModel.PaymentInRec)
].concat(_super.attributesToDeclare.call(this));
};
PaymentInRecord.fromStructure = function (str) {
return new PaymentInRecord(new PaymentInRecord.RecordClass({
paymentInAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PaymentInRecord.IsAnonymousRecord = true;
PaymentInRecord.UniqueId = "96614562-b12d-eac8-5807-026c727f3599";
PaymentInRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PaymentInRecord.init();
return PaymentInRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.PaymentInRecord = PaymentInRecord;

});
define("CON_GLOBE.model$SalesForceInRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var SalesForceInRec = (function (_super) {
__extends(SalesForceInRec, _super);
function SalesForceInRec(defaults) {
_super.apply(this, arguments);
}
SalesForceInRec.attributesToDeclare = function () {
return [
this.attr("SFID", "sFIDAttr", "SFID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
SalesForceInRec.fromStructure = function (str) {
return new SalesForceInRec(new SalesForceInRec.RecordClass({
sFIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SalesForceInRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
SalesForceInRec.init();
return SalesForceInRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.SalesForceInRec = SalesForceInRec;

});
define("CON_GLOBE.model$SalesForceInRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$SalesForceInRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var SalesForceInRecord = (function (_super) {
__extends(SalesForceInRecord, _super);
function SalesForceInRecord(defaults) {
_super.apply(this, arguments);
}
SalesForceInRecord.attributesToDeclare = function () {
return [
this.attr("SalesForceIn", "salesForceInAttr", "SalesForceIn", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.SalesForceInRec());
}, CON_GLOBEModel.SalesForceInRec)
].concat(_super.attributesToDeclare.call(this));
};
SalesForceInRecord.fromStructure = function (str) {
return new SalesForceInRecord(new SalesForceInRecord.RecordClass({
salesForceInAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SalesForceInRecord.IsAnonymousRecord = true;
SalesForceInRecord.UniqueId = "f615f1be-08b7-e32a-2647-424c0532d227";
SalesForceInRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
SalesForceInRecord.init();
return SalesForceInRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.SalesForceInRecord = SalesForceInRecord;

});
define("CON_GLOBE.model$CustomerAccountInRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$BillingAccountInRecord", "CON_GLOBE.model$PaymentInRecord", "CON_GLOBE.model$SalesForceInRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerAccountInRec = (function (_super) {
__extends(CustomerAccountInRec, _super);
function CustomerAccountInRec(defaults) {
_super.apply(this, arguments);
}
CustomerAccountInRec.attributesToDeclare = function () {
return [
this.attr("BillingAccount", "billingAccountAttr", "BillingAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.BillingAccountInRecord());
}, CON_GLOBEModel.BillingAccountInRecord), 
this.attr("Payment", "paymentAttr", "Payment", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.PaymentInRecord());
}, CON_GLOBEModel.PaymentInRecord), 
this.attr("SalesForce", "salesForceAttr", "SalesForce", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.SalesForceInRecord());
}, CON_GLOBEModel.SalesForceInRecord), 
this.attr("CustCode", "custCodeAttr", "CustCode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CustomerAccountInRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CustomerAccountInRec.init();
return CustomerAccountInRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerAccountInRec = CustomerAccountInRec;

});
define("CON_GLOBE.model$ChannelRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ChannelRec = (function (_super) {
__extends(ChannelRec, _super);
function ChannelRec(defaults) {
_super.apply(this, arguments);
}
ChannelRec.attributesToDeclare = function () {
return [
this.attr("Area", "areaAttr", "Area", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SubArea", "subAreaAttr", "SubArea", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ChannelRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ChannelRec.init();
return ChannelRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ChannelRec = ChannelRec;

});
define("CON_GLOBE.model$eCodes10Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes10Rec = (function (_super) {
__extends(eCodes10Rec, _super);
function eCodes10Rec(defaults) {
_super.apply(this, arguments);
}
eCodes10Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes10Rec.init();
return eCodes10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes10Rec = eCodes10Rec;

});
define("CON_GLOBE.model$Parameter16Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter16Rec = (function (_super) {
__extends(Parameter16Rec, _super);
function Parameter16Rec(defaults) {
_super.apply(this, arguments);
}
Parameter16Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter16Rec.init();
return Parameter16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter16Rec = Parameter16Rec;

});
define("CON_GLOBE.model$CustomerAccountInRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CustomerAccountInRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerAccountInRecord = (function (_super) {
__extends(CustomerAccountInRecord, _super);
function CustomerAccountInRecord(defaults) {
_super.apply(this, arguments);
}
CustomerAccountInRecord.attributesToDeclare = function () {
return [
this.attr("CustomerAccountIn", "customerAccountInAttr", "CustomerAccountIn", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerAccountInRec());
}, CON_GLOBEModel.CustomerAccountInRec)
].concat(_super.attributesToDeclare.call(this));
};
CustomerAccountInRecord.fromStructure = function (str) {
return new CustomerAccountInRecord(new CustomerAccountInRecord.RecordClass({
customerAccountInAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CustomerAccountInRecord.IsAnonymousRecord = true;
CustomerAccountInRecord.UniqueId = "8a9e8c2e-57f7-019c-f7cb-ff2a07c2e94a";
CustomerAccountInRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CustomerAccountInRecord.init();
return CustomerAccountInRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerAccountInRecord = CustomerAccountInRecord;

});
define("CON_GLOBE.model$DataInput7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CustomerAccountInRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput7Rec = (function (_super) {
__extends(DataInput7Rec, _super);
function DataInput7Rec(defaults) {
_super.apply(this, arguments);
}
DataInput7Rec.attributesToDeclare = function () {
return [
this.attr("CustomerAccount", "customerAccountAttr", "CustomerAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerAccountInRecord());
}, CON_GLOBEModel.CustomerAccountInRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataInput7Rec.fromStructure = function (str) {
return new DataInput7Rec(new DataInput7Rec.RecordClass({
customerAccountAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput7Rec.init();
return DataInput7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput7Rec = DataInput7Rec;

});
define("CON_GLOBE.model$Parameter4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter4Rec = (function (_super) {
__extends(Parameter4Rec, _super);
function Parameter4Rec(defaults) {
_super.apply(this, arguments);
}
Parameter4Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter4Rec.init();
return Parameter4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter4Rec = Parameter4Rec;

});
define("CON_GLOBE.model$Parameter4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter4Record = (function (_super) {
__extends(Parameter4Record, _super);
function Parameter4Record(defaults) {
_super.apply(this, arguments);
}
Parameter4Record.attributesToDeclare = function () {
return [
this.attr("Parameter4", "parameter4Attr", "Parameter4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter4Rec());
}, CON_GLOBEModel.Parameter4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter4Record.fromStructure = function (str) {
return new Parameter4Record(new Parameter4Record.RecordClass({
parameter4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter4Record.IsAnonymousRecord = true;
Parameter4Record.UniqueId = "99f121b4-ebda-5a69-b09e-c22138d70206";
Parameter4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter4Record.init();
return Parameter4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter4Record = Parameter4Record;

});
define("CON_GLOBE.model$Parameter4RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter4RecordList = (function (_super) {
__extends(Parameter4RecordList, _super);
function Parameter4RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter4RecordList.RecordType = CON_GLOBEModel.Parameter4Record;
return Parameter4RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter4RecordList = Parameter4RecordList;

});
define("CON_GLOBE.model$AccessData4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData4Record = (function (_super) {
__extends(AccessData4Record, _super);
function AccessData4Record(defaults) {
_super.apply(this, arguments);
}
AccessData4Record.attributesToDeclare = function () {
return [
this.attr("AccessData4", "accessData4Attr", "AccessData4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData4Rec());
}, CON_GLOBEModel.AccessData4Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData4Record.fromStructure = function (str) {
return new AccessData4Record(new AccessData4Record.RecordClass({
accessData4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData4Record.IsAnonymousRecord = true;
AccessData4Record.UniqueId = "9006608e-92e5-7d65-6aab-83543da6c229";
AccessData4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData4Record.init();
return AccessData4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData4Record = AccessData4Record;

});
define("CON_GLOBE.model$HistoryStep4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep4Rec = (function (_super) {
__extends(HistoryStep4Rec, _super);
function HistoryStep4Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep4Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep4Rec.init();
return HistoryStep4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep4Rec = HistoryStep4Rec;

});
define("CON_GLOBE.model$HistoryStep4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep4Record = (function (_super) {
__extends(HistoryStep4Record, _super);
function HistoryStep4Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep4Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep4", "historyStep4Attr", "HistoryStep4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep4Rec());
}, CON_GLOBEModel.HistoryStep4Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep4Record.fromStructure = function (str) {
return new HistoryStep4Record(new HistoryStep4Record.RecordClass({
historyStep4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep4Record.IsAnonymousRecord = true;
HistoryStep4Record.UniqueId = "531a1ceb-939c-8645-8c2e-a3749ae06e6f";
HistoryStep4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep4Record.init();
return HistoryStep4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep4Record = HistoryStep4Record;

});
define("CON_GLOBE.model$HistoryStep4RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep4RecordList = (function (_super) {
__extends(HistoryStep4RecordList, _super);
function HistoryStep4RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep4RecordList.RecordType = CON_GLOBEModel.HistoryStep4Record;
return HistoryStep4RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep4RecordList = HistoryStep4RecordList;

});
define("CON_GLOBE.model$Status4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status4Record = (function (_super) {
__extends(Status4Record, _super);
function Status4Record(defaults) {
_super.apply(this, arguments);
}
Status4Record.attributesToDeclare = function () {
return [
this.attr("Status4", "status4Attr", "Status4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status4Rec());
}, CON_GLOBEModel.Status4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status4Record.fromStructure = function (str) {
return new Status4Record(new Status4Record.RecordClass({
status4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status4Record.IsAnonymousRecord = true;
Status4Record.UniqueId = "2f69d1ee-fdfa-f1ea-819e-46eb340c350c";
Status4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status4Record.init();
return Status4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status4Record = Status4Record;

});
define("CON_GLOBE.model$Header4Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter4RecordList", "CON_GLOBE.model$AccessData4Record", "CON_GLOBE.model$HistoryStep4RecordList", "CON_GLOBE.model$Status4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header4Rec = (function (_super) {
__extends(Header4Rec, _super);
function Header4Rec(defaults) {
_super.apply(this, arguments);
}
Header4Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter4RecordList());
}, CON_GLOBEModel.Parameter4RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData4Record());
}, CON_GLOBEModel.AccessData4Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep4RecordList());
}, CON_GLOBEModel.HistoryStep4RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status4Record());
}, CON_GLOBEModel.Status4Record)
].concat(_super.attributesToDeclare.call(this));
};
Header4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header4Rec.init();
return Header4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header4Rec = Header4Rec;

});
define("CON_GLOBE.model$Header4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header4Record = (function (_super) {
__extends(Header4Record, _super);
function Header4Record(defaults) {
_super.apply(this, arguments);
}
Header4Record.attributesToDeclare = function () {
return [
this.attr("Header4", "header4Attr", "Header4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header4Rec());
}, CON_GLOBEModel.Header4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header4Record.fromStructure = function (str) {
return new Header4Record(new Header4Record.RecordClass({
header4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header4Record.IsAnonymousRecord = true;
Header4Record.UniqueId = "f461936a-4746-f9bc-eff6-cfbb25ae7be4";
Header4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header4Record.init();
return Header4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header4Record = Header4Record;

});
define("CON_GLOBE.model$DataOutput4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput4Record = (function (_super) {
__extends(DataOutput4Record, _super);
function DataOutput4Record(defaults) {
_super.apply(this, arguments);
}
DataOutput4Record.attributesToDeclare = function () {
return [
this.attr("DataOutput4", "dataOutput4Attr", "DataOutput4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput4Rec());
}, CON_GLOBEModel.DataOutput4Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput4Record.fromStructure = function (str) {
return new DataOutput4Record(new DataOutput4Record.RecordClass({
dataOutput4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput4Record.IsAnonymousRecord = true;
DataOutput4Record.UniqueId = "f86375c8-fb78-2661-5ee5-36e4225f3153";
DataOutput4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput4Record.init();
return DataOutput4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput4Record = DataOutput4Record;

});
define("CON_GLOBE.model$outputMessage4Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header4Record", "CON_GLOBE.model$DataOutput4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage4Rec = (function (_super) {
__extends(outputMessage4Rec, _super);
function outputMessage4Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage4Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header4Record());
}, CON_GLOBEModel.Header4Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput4Record());
}, CON_GLOBEModel.DataOutput4Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage4Rec.init();
return outputMessage4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage4Rec = outputMessage4Rec;

});
define("CON_GLOBE.model$Address_out2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_out2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address_out2Record = (function (_super) {
__extends(Address_out2Record, _super);
function Address_out2Record(defaults) {
_super.apply(this, arguments);
}
Address_out2Record.attributesToDeclare = function () {
return [
this.attr("Address_out2", "address_out2Attr", "Address_out2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_out2Rec());
}, CON_GLOBEModel.Address_out2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Address_out2Record.fromStructure = function (str) {
return new Address_out2Record(new Address_out2Record.RecordClass({
address_out2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Address_out2Record.IsAnonymousRecord = true;
Address_out2Record.UniqueId = "bfce9327-0e24-6bc9-a852-455db70cb693";
Address_out2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Address_out2Record.init();
return Address_out2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address_out2Record = Address_out2Record;

});
define("CON_GLOBE.model$Contact_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_outRec = (function (_super) {
__extends(Contact_outRec, _super);
function Contact_outRec(defaults) {
_super.apply(this, arguments);
}
Contact_outRec.attributesToDeclare = function () {
return [
this.attr("ContactID", "contactIDAttr", "ContactID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailableInPortfolio", "isAvailableInPortfolioAttr", "IsAvailableInPortfolio", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainContact", "isMainContactAttr", "IsMainContact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_outRec.init();
return Contact_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_outRec = Contact_outRec;

});
define("CON_GLOBE.model$Contact_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_outRecord = (function (_super) {
__extends(Contact_outRecord, _super);
function Contact_outRecord(defaults) {
_super.apply(this, arguments);
}
Contact_outRecord.attributesToDeclare = function () {
return [
this.attr("Contact_out", "contact_outAttr", "Contact_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_outRec());
}, CON_GLOBEModel.Contact_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_outRecord.fromStructure = function (str) {
return new Contact_outRecord(new Contact_outRecord.RecordClass({
contact_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_outRecord.IsAnonymousRecord = true;
Contact_outRecord.UniqueId = "d894f390-d7a6-1d43-be1a-440c5e58bfd0";
Contact_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_outRecord.init();
return Contact_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_outRecord = Contact_outRecord;

});
define("CON_GLOBE.model$Contact_outRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_outRecordList = (function (_super) {
__extends(Contact_outRecordList, _super);
function Contact_outRecordList(defaults) {
_super.apply(this, arguments);
}
Contact_outRecordList.RecordType = CON_GLOBEModel.Contact_outRecord;
return Contact_outRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Contact_outRecordList = Contact_outRecordList;

});
define("CON_GLOBE.model$Person_out7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address_out2Record", "CON_GLOBE.model$Contact_outRecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out7Rec = (function (_super) {
__extends(Person_out7Rec, _super);
function Person_out7Rec(defaults) {
_super.apply(this, arguments);
}
Person_out7Rec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address_out2Record());
}, CON_GLOBEModel.Address_out2Record), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_outRecordList());
}, CON_GLOBEModel.Contact_outRecordList), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out7Rec.init();
return Person_out7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out7Rec = Person_out7Rec;

});
define("CON_GLOBE.model$Parameter7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter7Record = (function (_super) {
__extends(Parameter7Record, _super);
function Parameter7Record(defaults) {
_super.apply(this, arguments);
}
Parameter7Record.attributesToDeclare = function () {
return [
this.attr("Parameter7", "parameter7Attr", "Parameter7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter7Rec());
}, CON_GLOBEModel.Parameter7Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter7Record.fromStructure = function (str) {
return new Parameter7Record(new Parameter7Record.RecordClass({
parameter7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter7Record.IsAnonymousRecord = true;
Parameter7Record.UniqueId = "98c007a9-cb93-8807-aaf2-790168ad4c81";
Parameter7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter7Record.init();
return Parameter7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter7Record = Parameter7Record;

});
define("CON_GLOBE.model$Parameter7RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter7RecordList = (function (_super) {
__extends(Parameter7RecordList, _super);
function Parameter7RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter7RecordList.RecordType = CON_GLOBEModel.Parameter7Record;
return Parameter7RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter7RecordList = Parameter7RecordList;

});
define("CON_GLOBE.model$AccessData7Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData7Rec = (function (_super) {
__extends(AccessData7Rec, _super);
function AccessData7Rec(defaults) {
_super.apply(this, arguments);
}
AccessData7Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData7Rec.init();
return AccessData7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData7Rec = AccessData7Rec;

});
define("CON_GLOBE.model$AccessData7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData7Record = (function (_super) {
__extends(AccessData7Record, _super);
function AccessData7Record(defaults) {
_super.apply(this, arguments);
}
AccessData7Record.attributesToDeclare = function () {
return [
this.attr("AccessData7", "accessData7Attr", "AccessData7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData7Rec());
}, CON_GLOBEModel.AccessData7Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData7Record.fromStructure = function (str) {
return new AccessData7Record(new AccessData7Record.RecordClass({
accessData7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData7Record.IsAnonymousRecord = true;
AccessData7Record.UniqueId = "24421326-d0ff-29aa-3733-215076bb6b69";
AccessData7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData7Record.init();
return AccessData7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData7Record = AccessData7Record;

});
define("CON_GLOBE.model$HistoryStep7Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep7Rec = (function (_super) {
__extends(HistoryStep7Rec, _super);
function HistoryStep7Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep7Rec.attributesToDeclare = function () {
return [
this.attr("domain", "domainAttr", "domain", false, OS.Types.Text, function () {
return "";
}), 
this.attr("type", "typeAttr", "type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep7Rec.init();
return HistoryStep7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep7Rec = HistoryStep7Rec;

});
define("CON_GLOBE.model$HistoryStep7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep7Record = (function (_super) {
__extends(HistoryStep7Record, _super);
function HistoryStep7Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep7Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep7", "historyStep7Attr", "HistoryStep7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep7Rec());
}, CON_GLOBEModel.HistoryStep7Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep7Record.fromStructure = function (str) {
return new HistoryStep7Record(new HistoryStep7Record.RecordClass({
historyStep7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep7Record.IsAnonymousRecord = true;
HistoryStep7Record.UniqueId = "27f07065-a599-6624-b3db-47310cf35e00";
HistoryStep7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep7Record.init();
return HistoryStep7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep7Record = HistoryStep7Record;

});
define("CON_GLOBE.model$HistoryStep7RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep7RecordList = (function (_super) {
__extends(HistoryStep7RecordList, _super);
function HistoryStep7RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep7RecordList.RecordType = CON_GLOBEModel.HistoryStep7Record;
return HistoryStep7RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep7RecordList = HistoryStep7RecordList;

});
define("CON_GLOBE.model$Status7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status7Record = (function (_super) {
__extends(Status7Record, _super);
function Status7Record(defaults) {
_super.apply(this, arguments);
}
Status7Record.attributesToDeclare = function () {
return [
this.attr("Status7", "status7Attr", "Status7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status7Rec());
}, CON_GLOBEModel.Status7Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status7Record.fromStructure = function (str) {
return new Status7Record(new Status7Record.RecordClass({
status7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status7Record.IsAnonymousRecord = true;
Status7Record.UniqueId = "8ec2b79a-bd82-62dc-359a-b59812222ebc";
Status7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status7Record.init();
return Status7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status7Record = Status7Record;

});
define("CON_GLOBE.model$Header7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter7RecordList", "CON_GLOBE.model$AccessData7Record", "CON_GLOBE.model$HistoryStep7RecordList", "CON_GLOBE.model$Status7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header7Rec = (function (_super) {
__extends(Header7Rec, _super);
function Header7Rec(defaults) {
_super.apply(this, arguments);
}
Header7Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("service", "serviceAttr", "service", false, OS.Types.Text, function () {
return "";
}), 
this.attr("target", "targetAttr", "target", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("optionalParams", "optionalParamsAttr", "optionalParams", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter7RecordList());
}, CON_GLOBEModel.Parameter7RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData7Record());
}, CON_GLOBEModel.AccessData7Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep7RecordList());
}, CON_GLOBEModel.HistoryStep7RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status7Record());
}, CON_GLOBEModel.Status7Record)
].concat(_super.attributesToDeclare.call(this));
};
Header7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header7Rec.init();
return Header7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header7Rec = Header7Rec;

});
define("CON_GLOBE.model$GROUP_MARKETINGFLAGRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var GROUP_MARKETINGFLAGRec = (function (_super) {
__extends(GROUP_MARKETINGFLAGRec, _super);
function GROUP_MARKETINGFLAGRec(defaults) {
_super.apply(this, arguments);
}
GROUP_MARKETINGFLAGRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ApplicationName", "applicationNameAttr", "ApplicationName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("isActive", "isActiveAttr", "isActive", false, OS.Types.Boolean, function () {
return true;
})
].concat(_super.attributesToDeclare.call(this));
};
GROUP_MARKETINGFLAGRec.generateFromLocalStorage = function () {
return false;
};
GROUP_MARKETINGFLAGRec.init();
return GROUP_MARKETINGFLAGRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.GROUP_MARKETINGFLAGRec = GROUP_MARKETINGFLAGRec;

});
define("CON_GLOBE.model$Parameter_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter_inRec = (function (_super) {
__extends(Parameter_inRec, _super);
function Parameter_inRec(defaults) {
_super.apply(this, arguments);
}
Parameter_inRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter_inRec.init();
return Parameter_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter_inRec = Parameter_inRec;

});
define("CON_GLOBE.model$Contact_in4Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in4Rec = (function (_super) {
__extends(Contact_in4Rec, _super);
function Contact_in4Rec(defaults) {
_super.apply(this, arguments);
}
Contact_in4Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ContactID", "contactIDAttr", "ContactID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FlagCharges", "flagChargesAttr", "FlagCharges", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailableInPortfolio", "isAvailableInPortfolioAttr", "IsAvailableInPortfolio", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsEmailBilling", "isEmailBillingAttr", "IsEmailBilling", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainContact", "isMainContactAttr", "IsMainContact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PreferredSchedule", "preferredScheduleAttr", "PreferredSchedule", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceSystem", "sourceSystemAttr", "SourceSystem", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_in4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_in4Rec.init();
return Contact_in4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in4Rec = Contact_in4Rec;

});
define("CON_GLOBE.model$Contact_in4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in4Record = (function (_super) {
__extends(Contact_in4Record, _super);
function Contact_in4Record(defaults) {
_super.apply(this, arguments);
}
Contact_in4Record.attributesToDeclare = function () {
return [
this.attr("Contact_in4", "contact_in4Attr", "Contact_in4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in4Rec());
}, CON_GLOBEModel.Contact_in4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_in4Record.fromStructure = function (str) {
return new Contact_in4Record(new Contact_in4Record.RecordClass({
contact_in4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_in4Record.IsAnonymousRecord = true;
Contact_in4Record.UniqueId = "1d3bf47f-4646-178e-030b-56ed5403d8a3";
Contact_in4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_in4Record.init();
return Contact_in4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in4Record = Contact_in4Record;

});
define("CON_GLOBE.model$Contact_in4RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in4RecordList = (function (_super) {
__extends(Contact_in4RecordList, _super);
function Contact_in4RecordList(defaults) {
_super.apply(this, arguments);
}
Contact_in4RecordList.RecordType = CON_GLOBEModel.Contact_in4Record;
return Contact_in4RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Contact_in4RecordList = Contact_in4RecordList;

});
define("CON_GLOBE.model$Account_in8Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in8Rec = (function (_super) {
__extends(Account_in8Rec, _super);
function Account_in8Rec(defaults) {
_super.apply(this, arguments);
}
Account_in8Rec.attributesToDeclare = function () {
return [
this.attr("AccountID", "accountIDAttr", "AccountID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_in8Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_in8Rec.init();
return Account_in8Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in8Rec = Account_in8Rec;

});
define("CON_GLOBE.model$Account_in8Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in8Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in8Record = (function (_super) {
__extends(Account_in8Record, _super);
function Account_in8Record(defaults) {
_super.apply(this, arguments);
}
Account_in8Record.attributesToDeclare = function () {
return [
this.attr("Account_in8", "account_in8Attr", "Account_in8", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in8Rec());
}, CON_GLOBEModel.Account_in8Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_in8Record.fromStructure = function (str) {
return new Account_in8Record(new Account_in8Record.RecordClass({
account_in8Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in8Record.IsAnonymousRecord = true;
Account_in8Record.UniqueId = "b52dc27a-b3eb-4d2e-a59e-c3bff6bd3fe2";
Account_in8Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_in8Record.init();
return Account_in8Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in8Record = Account_in8Record;

});
define("CON_GLOBE.model$Role_in2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in4RecordList", "CON_GLOBE.model$Account_in8Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_in2Rec = (function (_super) {
__extends(Role_in2Rec, _super);
function Role_in2Rec(defaults) {
_super.apply(this, arguments);
}
Role_in2Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in4RecordList());
}, CON_GLOBEModel.Contact_in4RecordList), 
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in8Record());
}, CON_GLOBEModel.Account_in8Record), 
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyCreationDate", "legacyCreationDateAttr", "LegacyCreationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RoleID", "roleIDAttr", "RoleID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Role_in2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Role_in2Rec.init();
return Role_in2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_in2Rec = Role_in2Rec;

});
define("CON_GLOBE.model$Role_in2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_in2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_in2Record = (function (_super) {
__extends(Role_in2Record, _super);
function Role_in2Record(defaults) {
_super.apply(this, arguments);
}
Role_in2Record.attributesToDeclare = function () {
return [
this.attr("Role_in2", "role_in2Attr", "Role_in2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_in2Rec());
}, CON_GLOBEModel.Role_in2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Role_in2Record.fromStructure = function (str) {
return new Role_in2Record(new Role_in2Record.RecordClass({
role_in2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Role_in2Record.IsAnonymousRecord = true;
Role_in2Record.UniqueId = "c1fdd3b5-9148-7784-8b2e-25c04a6612fc";
Role_in2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Role_in2Record.init();
return Role_in2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Role_in2Record = Role_in2Record;

});
define("CON_GLOBE.model$Role_in2RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Role_in2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Role_in2RecordList = (function (_super) {
__extends(Role_in2RecordList, _super);
function Role_in2RecordList(defaults) {
_super.apply(this, arguments);
}
Role_in2RecordList.RecordType = CON_GLOBEModel.Role_in2Record;
return Role_in2RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Role_in2RecordList = Role_in2RecordList;

});
define("CON_GLOBE.model$Person_in9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in4RecordList", "CON_GLOBE.model$Role_in2RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in9Rec = (function (_super) {
__extends(Person_in9Rec, _super);
function Person_in9Rec(defaults) {
_super.apply(this, arguments);
}
Person_in9Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in4RecordList());
}, CON_GLOBEModel.Contact_in4RecordList), 
this.attr("Role", "roleAttr", "Role", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Role_in2RecordList());
}, CON_GLOBEModel.Role_in2RecordList), 
this.attr("Birthdate", "birthdateAttr", "Birthdate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAE", "cAEAttr", "CAE", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CAEDescription", "cAEDescriptionAttr", "CAEDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CertificationCommercialRegistration", "certificationCommercialRegistrationAttr", "CertificationCommercialRegistration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CollaboratorsRange", "collaboratorsRangeAttr", "CollaboratorsRange", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CommunicationExpenses", "communicationExpensesAttr", "CommunicationExpenses", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DN", "dNAttr", "DN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Gender", "genderAttr", "Gender", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsProspect", "isProspectAttr", "IsProspect", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyBSCSID", "legacyBSCSIDAttr", "LegacyBSCSID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacySiebelID", "legacySiebelIDAttr", "LegacySiebelID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIFType", "nIFTypeAttr", "NIFType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ParentID", "parentIDAttr", "ParentID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerID", "personManagerIDAttr", "PersonManagerID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerName", "personManagerNameAttr", "PersonManagerName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonManagerUser", "personManagerUserAttr", "PersonManagerUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProspectType", "prospectTypeAttr", "ProspectType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Title", "titleAttr", "Title", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TurnoverValue", "turnoverValueAttr", "TurnoverValue", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Website", "websiteAttr", "Website", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in9Rec.init();
return Person_in9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in9Rec = Person_in9Rec;

});
define("CON_GLOBE.model$Person_in9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in9Record = (function (_super) {
__extends(Person_in9Record, _super);
function Person_in9Record(defaults) {
_super.apply(this, arguments);
}
Person_in9Record.attributesToDeclare = function () {
return [
this.attr("Person_in9", "person_in9Attr", "Person_in9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in9Rec());
}, CON_GLOBEModel.Person_in9Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in9Record.fromStructure = function (str) {
return new Person_in9Record(new Person_in9Record.RecordClass({
person_in9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in9Record.IsAnonymousRecord = true;
Person_in9Record.UniqueId = "7e3244e4-a139-eef5-2bfc-9d8f3fd1da87";
Person_in9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in9Record.init();
return Person_in9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in9Record = Person_in9Record;

});
define("CON_GLOBE.model$DataInput11Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput11Rec = (function (_super) {
__extends(DataInput11Rec, _super);
function DataInput11Rec(defaults) {
_super.apply(this, arguments);
}
DataInput11Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in9Record());
}, CON_GLOBEModel.Person_in9Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput11Rec.fromStructure = function (str) {
return new DataInput11Rec(new DataInput11Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput11Rec.init();
return DataInput11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput11Rec = DataInput11Rec;

});
define("CON_GLOBE.model$Person_out9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out9Record = (function (_super) {
__extends(Person_out9Record, _super);
function Person_out9Record(defaults) {
_super.apply(this, arguments);
}
Person_out9Record.attributesToDeclare = function () {
return [
this.attr("Person_out9", "person_out9Attr", "Person_out9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out9Rec());
}, CON_GLOBEModel.Person_out9Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_out9Record.fromStructure = function (str) {
return new Person_out9Record(new Person_out9Record.RecordClass({
person_out9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out9Record.IsAnonymousRecord = true;
Person_out9Record.UniqueId = "e8c844f3-cf12-138f-2545-b453bf78648d";
Person_out9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_out9Record.init();
return Person_out9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out9Record = Person_out9Record;

});
define("CON_GLOBE.model$DataOutput10Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput10Rec = (function (_super) {
__extends(DataOutput10Rec, _super);
function DataOutput10Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput10Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out9Record());
}, CON_GLOBEModel.Person_out9Record)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput10Rec.fromStructure = function (str) {
return new DataOutput10Rec(new DataOutput10Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput10Rec.init();
return DataOutput10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput10Rec = DataOutput10Rec;

});
define("CON_GLOBE.model$Person_in2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in2Record = (function (_super) {
__extends(Person_in2Record, _super);
function Person_in2Record(defaults) {
_super.apply(this, arguments);
}
Person_in2Record.attributesToDeclare = function () {
return [
this.attr("Person_in2", "person_in2Attr", "Person_in2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in2Rec());
}, CON_GLOBEModel.Person_in2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in2Record.fromStructure = function (str) {
return new Person_in2Record(new Person_in2Record.RecordClass({
person_in2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in2Record.IsAnonymousRecord = true;
Person_in2Record.UniqueId = "c06cc20d-071c-f9b5-3913-1d04d2d6f0f8";
Person_in2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in2Record.init();
return Person_in2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in2Record = Person_in2Record;

});
define("CON_GLOBE.model$DataInput2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput2Rec = (function (_super) {
__extends(DataInput2Rec, _super);
function DataInput2Rec(defaults) {
_super.apply(this, arguments);
}
DataInput2Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in2Record());
}, CON_GLOBEModel.Person_in2Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput2Rec.fromStructure = function (str) {
return new DataInput2Rec(new DataInput2Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput2Rec.init();
return DataInput2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput2Rec = DataInput2Rec;

});
define("CON_GLOBE.model$DataInput2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput2Record = (function (_super) {
__extends(DataInput2Record, _super);
function DataInput2Record(defaults) {
_super.apply(this, arguments);
}
DataInput2Record.attributesToDeclare = function () {
return [
this.attr("DataInput2", "dataInput2Attr", "DataInput2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput2Rec());
}, CON_GLOBEModel.DataInput2Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput2Record.fromStructure = function (str) {
return new DataInput2Record(new DataInput2Record.RecordClass({
dataInput2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput2Record.IsAnonymousRecord = true;
DataInput2Record.UniqueId = "57941f07-a5e4-52e2-ce00-0698abc4de4d";
DataInput2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput2Record.init();
return DataInput2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput2Record = DataInput2Record;

});
define("CON_GLOBE.model$inputMessage2Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header2Record", "CON_GLOBE.model$DataInput2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage2Rec = (function (_super) {
__extends(inputMessage2Rec, _super);
function inputMessage2Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage2Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header2Record());
}, CON_GLOBEModel.Header2Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput2Record());
}, CON_GLOBEModel.DataInput2Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage2Rec.init();
return inputMessage2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage2Rec = inputMessage2Rec;

});
define("CON_GLOBE.model$Order_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Order_inRec = (function (_super) {
__extends(Order_inRec, _super);
function Order_inRec(defaults) {
_super.apply(this, arguments);
}
Order_inRec.attributesToDeclare = function () {
return [
this.attr("DueDate", "dueDateAttr", "DueDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IdInClient", "idInClientAttr", "IdInClient", false, OS.Types.Text, function () {
return "";
}), 
this.attr("OrderContent", "orderContentAttr", "OrderContent", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Reprocess", "reprocessAttr", "Reprocess", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Order_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Order_inRec.init();
return Order_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Order_inRec = Order_inRec;

});
define("CON_GLOBE.model$Person_in5Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in5Rec = (function (_super) {
__extends(Person_in5Rec, _super);
function Person_in5Rec(defaults) {
_super.apply(this, arguments);
}
Person_in5Rec.attributesToDeclare = function () {
return [
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in5Rec.fromStructure = function (str) {
return new Person_in5Rec(new Person_in5Rec.RecordClass({
personIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in5Rec.init();
return Person_in5Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in5Rec = Person_in5Rec;

});
define("CON_GLOBE.model$Person_in5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in5Record = (function (_super) {
__extends(Person_in5Record, _super);
function Person_in5Record(defaults) {
_super.apply(this, arguments);
}
Person_in5Record.attributesToDeclare = function () {
return [
this.attr("Person_in5", "person_in5Attr", "Person_in5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in5Rec());
}, CON_GLOBEModel.Person_in5Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in5Record.fromStructure = function (str) {
return new Person_in5Record(new Person_in5Record.RecordClass({
person_in5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in5Record.IsAnonymousRecord = true;
Person_in5Record.UniqueId = "e4f36e9d-df14-65a5-6606-0166bdead29d";
Person_in5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in5Record.init();
return Person_in5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in5Record = Person_in5Record;

});
define("CON_GLOBE.model$Contact_in3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in3Rec = (function (_super) {
__extends(Contact_in3Rec, _super);
function Contact_in3Rec(defaults) {
_super.apply(this, arguments);
}
Contact_in3Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_in3Rec.fromStructure = function (str) {
return new Contact_in3Rec(new Contact_in3Rec.RecordClass({
contactAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_in3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_in3Rec.init();
return Contact_in3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in3Rec = Contact_in3Rec;

});
define("CON_GLOBE.model$Contact_in3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in3Record = (function (_super) {
__extends(Contact_in3Record, _super);
function Contact_in3Record(defaults) {
_super.apply(this, arguments);
}
Contact_in3Record.attributesToDeclare = function () {
return [
this.attr("Contact_in3", "contact_in3Attr", "Contact_in3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in3Rec());
}, CON_GLOBEModel.Contact_in3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_in3Record.fromStructure = function (str) {
return new Contact_in3Record(new Contact_in3Record.RecordClass({
contact_in3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_in3Record.IsAnonymousRecord = true;
Contact_in3Record.UniqueId = "68c24407-5924-b674-f8e4-ad588c216395";
Contact_in3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_in3Record.init();
return Contact_in3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in3Record = Contact_in3Record;

});
define("CON_GLOBE.model$Account_in3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in3Rec = (function (_super) {
__extends(Account_in3Rec, _super);
function Account_in3Rec(defaults) {
_super.apply(this, arguments);
}
Account_in3Rec.attributesToDeclare = function () {
return [
this.attr("AccountID", "accountIDAttr", "AccountID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Account_in3Rec.fromStructure = function (str) {
return new Account_in3Rec(new Account_in3Rec.RecordClass({
accountIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Account_in3Rec.init();
return Account_in3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in3Rec = Account_in3Rec;

});
define("CON_GLOBE.model$Account_in3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_in3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_in3Record = (function (_super) {
__extends(Account_in3Record, _super);
function Account_in3Record(defaults) {
_super.apply(this, arguments);
}
Account_in3Record.attributesToDeclare = function () {
return [
this.attr("Account_in3", "account_in3Attr", "Account_in3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in3Rec());
}, CON_GLOBEModel.Account_in3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Account_in3Record.fromStructure = function (str) {
return new Account_in3Record(new Account_in3Record.RecordClass({
account_in3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_in3Record.IsAnonymousRecord = true;
Account_in3Record.UniqueId = "731fed9a-a9fd-5dff-288a-f5d944671782";
Account_in3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_in3Record.init();
return Account_in3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_in3Record = Account_in3Record;

});
define("CON_GLOBE.model$Billing_Account_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Billing_Account_inRec = (function (_super) {
__extends(Billing_Account_inRec, _super);
function Billing_Account_inRec(defaults) {
_super.apply(this, arguments);
}
Billing_Account_inRec.attributesToDeclare = function () {
return [
this.attr("BillingAccountID", "billingAccountIDAttr", "BillingAccountID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Billing_Account_inRec.fromStructure = function (str) {
return new Billing_Account_inRec(new Billing_Account_inRec.RecordClass({
billingAccountIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Billing_Account_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Billing_Account_inRec.init();
return Billing_Account_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Billing_Account_inRec = Billing_Account_inRec;

});
define("CON_GLOBE.model$Billing_Account_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Billing_Account_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Billing_Account_inRecord = (function (_super) {
__extends(Billing_Account_inRecord, _super);
function Billing_Account_inRecord(defaults) {
_super.apply(this, arguments);
}
Billing_Account_inRecord.attributesToDeclare = function () {
return [
this.attr("Billing_Account_in", "billing_Account_inAttr", "Billing_Account_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Billing_Account_inRec());
}, CON_GLOBEModel.Billing_Account_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Billing_Account_inRecord.fromStructure = function (str) {
return new Billing_Account_inRecord(new Billing_Account_inRecord.RecordClass({
billing_Account_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Billing_Account_inRecord.IsAnonymousRecord = true;
Billing_Account_inRecord.UniqueId = "113498b5-e91c-9947-8373-ea26599b7ab7";
Billing_Account_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Billing_Account_inRecord.init();
return Billing_Account_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Billing_Account_inRecord = Billing_Account_inRecord;

});
define("CON_GLOBE.model$Product_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_inRec = (function (_super) {
__extends(Product_inRec, _super);
function Product_inRec(defaults) {
_super.apply(this, arguments);
}
Product_inRec.attributesToDeclare = function () {
return [
this.attr("ProductID", "productIDAttr", "ProductID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Product_inRec.fromStructure = function (str) {
return new Product_inRec(new Product_inRec.RecordClass({
productIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Product_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Product_inRec.init();
return Product_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Product_inRec = Product_inRec;

});
define("CON_GLOBE.model$Product_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Product_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Product_inRecord = (function (_super) {
__extends(Product_inRecord, _super);
function Product_inRecord(defaults) {
_super.apply(this, arguments);
}
Product_inRecord.attributesToDeclare = function () {
return [
this.attr("Product_in", "product_inAttr", "Product_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Product_inRec());
}, CON_GLOBEModel.Product_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Product_inRecord.fromStructure = function (str) {
return new Product_inRecord(new Product_inRecord.RecordClass({
product_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Product_inRecord.IsAnonymousRecord = true;
Product_inRecord.UniqueId = "a579abcb-0883-6563-135e-c5d2910d97d4";
Product_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Product_inRecord.init();
return Product_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Product_inRecord = Product_inRecord;

});
define("CON_GLOBE.model$Event_inRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in5Record", "CON_GLOBE.model$Contact_in3Record", "CON_GLOBE.model$Account_in3Record", "CON_GLOBE.model$Billing_Account_inRecord", "CON_GLOBE.model$Product_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Event_inRec = (function (_super) {
__extends(Event_inRec, _super);
function Event_inRec(defaults) {
_super.apply(this, arguments);
}
Event_inRec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in5Record());
}, CON_GLOBEModel.Person_in5Record), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in3Record());
}, CON_GLOBEModel.Contact_in3Record), 
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_in3Record());
}, CON_GLOBEModel.Account_in3Record), 
this.attr("BillingAccount", "billingAccountAttr", "BillingAccount", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Billing_Account_inRecord());
}, CON_GLOBEModel.Billing_Account_inRecord), 
this.attr("Product", "productAttr", "Product", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Product_inRecord());
}, CON_GLOBEModel.Product_inRecord), 
this.attr("Content", "contentAttr", "Content", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceSystem", "sourceSystemAttr", "SourceSystem", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Event_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Event_inRec.init();
return Event_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Event_inRec = Event_inRec;

});
define("CON_GLOBE.model$Event_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Event_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Event_inRecord = (function (_super) {
__extends(Event_inRecord, _super);
function Event_inRecord(defaults) {
_super.apply(this, arguments);
}
Event_inRecord.attributesToDeclare = function () {
return [
this.attr("Event_in", "event_inAttr", "Event_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Event_inRec());
}, CON_GLOBEModel.Event_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Event_inRecord.fromStructure = function (str) {
return new Event_inRecord(new Event_inRecord.RecordClass({
event_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Event_inRecord.IsAnonymousRecord = true;
Event_inRecord.UniqueId = "ecec4eb5-01e1-9f41-f6f3-5508236b35da";
Event_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Event_inRecord.init();
return Event_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Event_inRecord = Event_inRecord;

});
define("CON_GLOBE.model$DataInput4Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Event_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput4Rec = (function (_super) {
__extends(DataInput4Rec, _super);
function DataInput4Rec(defaults) {
_super.apply(this, arguments);
}
DataInput4Rec.attributesToDeclare = function () {
return [
this.attr("Event", "eventAttr", "Event", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Event_inRecord());
}, CON_GLOBEModel.Event_inRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataInput4Rec.fromStructure = function (str) {
return new DataInput4Rec(new DataInput4Rec.RecordClass({
eventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput4Rec.init();
return DataInput4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput4Rec = DataInput4Rec;

});
define("CON_GLOBE.model$CustomerInquiryRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerInquiryRec = (function (_super) {
__extends(CustomerInquiryRec, _super);
function CustomerInquiryRec(defaults) {
_super.apply(this, arguments);
}
CustomerInquiryRec.attributesToDeclare = function () {
return [
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CustomerInquiryRec.fromStructure = function (str) {
return new CustomerInquiryRec(new CustomerInquiryRec.RecordClass({
numberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CustomerInquiryRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CustomerInquiryRec.init();
return CustomerInquiryRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerInquiryRec = CustomerInquiryRec;

});
define("CON_GLOBE.model$Parameter11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter11Record = (function (_super) {
__extends(Parameter11Record, _super);
function Parameter11Record(defaults) {
_super.apply(this, arguments);
}
Parameter11Record.attributesToDeclare = function () {
return [
this.attr("Parameter11", "parameter11Attr", "Parameter11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter11Rec());
}, CON_GLOBEModel.Parameter11Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter11Record.fromStructure = function (str) {
return new Parameter11Record(new Parameter11Record.RecordClass({
parameter11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter11Record.IsAnonymousRecord = true;
Parameter11Record.UniqueId = "1281bbe2-eb91-a2de-3bf1-371b9cdcc412";
Parameter11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter11Record.init();
return Parameter11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter11Record = Parameter11Record;

});
define("CON_GLOBE.model$Parameter11RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter11Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter11RecordList = (function (_super) {
__extends(Parameter11RecordList, _super);
function Parameter11RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter11RecordList.RecordType = CON_GLOBEModel.Parameter11Record;
return Parameter11RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter11RecordList = Parameter11RecordList;

});
define("CON_GLOBE.model$AccessData11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData11Record = (function (_super) {
__extends(AccessData11Record, _super);
function AccessData11Record(defaults) {
_super.apply(this, arguments);
}
AccessData11Record.attributesToDeclare = function () {
return [
this.attr("AccessData11", "accessData11Attr", "AccessData11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData11Rec());
}, CON_GLOBEModel.AccessData11Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData11Record.fromStructure = function (str) {
return new AccessData11Record(new AccessData11Record.RecordClass({
accessData11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData11Record.IsAnonymousRecord = true;
AccessData11Record.UniqueId = "b3b4897a-0c39-b452-ecea-da205655aa68";
AccessData11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData11Record.init();
return AccessData11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData11Record = AccessData11Record;

});
define("CON_GLOBE.model$HistoryStep12Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep12Rec = (function (_super) {
__extends(HistoryStep12Rec, _super);
function HistoryStep12Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep12Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep12Rec.init();
return HistoryStep12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep12Rec = HistoryStep12Rec;

});
define("CON_GLOBE.model$HistoryStep12Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep12Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep12Record = (function (_super) {
__extends(HistoryStep12Record, _super);
function HistoryStep12Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep12Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep12", "historyStep12Attr", "HistoryStep12", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep12Rec());
}, CON_GLOBEModel.HistoryStep12Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep12Record.fromStructure = function (str) {
return new HistoryStep12Record(new HistoryStep12Record.RecordClass({
historyStep12Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep12Record.IsAnonymousRecord = true;
HistoryStep12Record.UniqueId = "3d279038-66d7-9a51-23c8-17841fe5a1c4";
HistoryStep12Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep12Record.init();
return HistoryStep12Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep12Record = HistoryStep12Record;

});
define("CON_GLOBE.model$HistoryStep12RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep12Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep12RecordList = (function (_super) {
__extends(HistoryStep12RecordList, _super);
function HistoryStep12RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep12RecordList.RecordType = CON_GLOBEModel.HistoryStep12Record;
return HistoryStep12RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep12RecordList = HistoryStep12RecordList;

});
define("CON_GLOBE.model$eCodes11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes11Record = (function (_super) {
__extends(eCodes11Record, _super);
function eCodes11Record(defaults) {
_super.apply(this, arguments);
}
eCodes11Record.attributesToDeclare = function () {
return [
this.attr("eCodes11", "eCodes11Attr", "eCodes11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes11Rec());
}, CON_GLOBEModel.eCodes11Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes11Record.fromStructure = function (str) {
return new eCodes11Record(new eCodes11Record.RecordClass({
eCodes11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes11Record.IsAnonymousRecord = true;
eCodes11Record.UniqueId = "409677ca-fd47-b0d4-ca14-6c7cea372770";
eCodes11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes11Record.init();
return eCodes11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes11Record = eCodes11Record;

});
define("CON_GLOBE.model$eNative10Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative10Rec = (function (_super) {
__extends(eNative10Rec, _super);
function eNative10Rec(defaults) {
_super.apply(this, arguments);
}
eNative10Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative10Rec.init();
return eNative10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative10Rec = eNative10Rec;

});
define("CON_GLOBE.model$eNative10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative10Record = (function (_super) {
__extends(eNative10Record, _super);
function eNative10Record(defaults) {
_super.apply(this, arguments);
}
eNative10Record.attributesToDeclare = function () {
return [
this.attr("eNative10", "eNative10Attr", "eNative10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative10Rec());
}, CON_GLOBEModel.eNative10Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative10Record.fromStructure = function (str) {
return new eNative10Record(new eNative10Record.RecordClass({
eNative10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative10Record.IsAnonymousRecord = true;
eNative10Record.UniqueId = "17156c37-e78d-8bf8-1937-73438b8d8981";
eNative10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative10Record.init();
return eNative10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative10Record = eNative10Record;

});
define("CON_GLOBE.model$eNative10RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative10Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative10RecordList = (function (_super) {
__extends(eNative10RecordList, _super);
function eNative10RecordList(defaults) {
_super.apply(this, arguments);
}
eNative10RecordList.RecordType = CON_GLOBEModel.eNative10Record;
return eNative10RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative10RecordList = eNative10RecordList;

});
define("CON_GLOBE.model$Status11Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes11Record", "CON_GLOBE.model$eNative10RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status11Rec = (function (_super) {
__extends(Status11Rec, _super);
function Status11Rec(defaults) {
_super.apply(this, arguments);
}
Status11Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes11Record());
}, CON_GLOBEModel.eCodes11Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative10RecordList());
}, CON_GLOBEModel.eNative10RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status11Rec.init();
return Status11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status11Rec = Status11Rec;

});
define("CON_GLOBE.model$Status11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status11Record = (function (_super) {
__extends(Status11Record, _super);
function Status11Record(defaults) {
_super.apply(this, arguments);
}
Status11Record.attributesToDeclare = function () {
return [
this.attr("Status11", "status11Attr", "Status11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status11Rec());
}, CON_GLOBEModel.Status11Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status11Record.fromStructure = function (str) {
return new Status11Record(new Status11Record.RecordClass({
status11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status11Record.IsAnonymousRecord = true;
Status11Record.UniqueId = "4020c5e2-229f-2ba7-0301-e7a76abe66d8";
Status11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status11Record.init();
return Status11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status11Record = Status11Record;

});
define("CON_GLOBE.model$Header12Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter11RecordList", "CON_GLOBE.model$AccessData11Record", "CON_GLOBE.model$HistoryStep12RecordList", "CON_GLOBE.model$Status11Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header12Rec = (function (_super) {
__extends(Header12Rec, _super);
function Header12Rec(defaults) {
_super.apply(this, arguments);
}
Header12Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter11RecordList());
}, CON_GLOBEModel.Parameter11RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData11Record());
}, CON_GLOBEModel.AccessData11Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep12RecordList());
}, CON_GLOBEModel.HistoryStep12RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status11Record());
}, CON_GLOBEModel.Status11Record)
].concat(_super.attributesToDeclare.call(this));
};
Header12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header12Rec.init();
return Header12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header12Rec = Header12Rec;

});
define("CON_GLOBE.model$ValidatePersonInfo_LogOutputRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ValidatePersonInfo_OutputRec", "CON_GLOBE.model$Header12Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ValidatePersonInfo_LogOutputRec = (function (_super) {
__extends(ValidatePersonInfo_LogOutputRec, _super);
function ValidatePersonInfo_LogOutputRec(defaults) {
_super.apply(this, arguments);
}
ValidatePersonInfo_LogOutputRec.attributesToDeclare = function () {
return [
this.attr("ValidatePersonInfo_Output", "validatePersonInfo_OutputAttr", "ValidatePersonInfo_Output", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ValidatePersonInfo_OutputRec());
}, CON_GLOBEModel.ValidatePersonInfo_OutputRec), 
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header12Rec());
}, CON_GLOBEModel.Header12Rec)
].concat(_super.attributesToDeclare.call(this));
};
ValidatePersonInfo_LogOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ValidatePersonInfo_LogOutputRec.init();
return ValidatePersonInfo_LogOutputRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ValidatePersonInfo_LogOutputRec = ValidatePersonInfo_LogOutputRec;

});
define("CON_GLOBE.model$StoreRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var StoreRec = (function (_super) {
__extends(StoreRec, _super);
function StoreRec(defaults) {
_super.apply(this, arguments);
}
StoreRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
StoreRec.fromStructure = function (str) {
return new StoreRec(new StoreRec.RecordClass({
nameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StoreRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
StoreRec.init();
return StoreRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.StoreRec = StoreRec;

});
define("CON_GLOBE.model$OPTION_MARKETINGFLAGRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var OPTION_MARKETINGFLAGRec = (function (_super) {
__extends(OPTION_MARKETINGFLAGRec, _super);
function OPTION_MARKETINGFLAGRec(defaults) {
_super.apply(this, arguments);
}
OPTION_MARKETINGFLAGRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MarketingFlagId", "marketingFlagIdAttr", "MarketingFlagId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("isDefaultValue", "isDefaultValueAttr", "isDefaultValue", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
OPTION_MARKETINGFLAGRec.generateFromLocalStorage = function () {
return false;
};
OPTION_MARKETINGFLAGRec.init();
return OPTION_MARKETINGFLAGRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.OPTION_MARKETINGFLAGRec = OPTION_MARKETINGFLAGRec;

});
define("CON_GLOBE.model$HistoryStep16Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep16Rec = (function (_super) {
__extends(HistoryStep16Rec, _super);
function HistoryStep16Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep16Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep16Rec.init();
return HistoryStep16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep16Rec = HistoryStep16Rec;

});
define("CON_GLOBE.model$DataInput4Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput4Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput4Record = (function (_super) {
__extends(DataInput4Record, _super);
function DataInput4Record(defaults) {
_super.apply(this, arguments);
}
DataInput4Record.attributesToDeclare = function () {
return [
this.attr("DataInput4", "dataInput4Attr", "DataInput4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput4Rec());
}, CON_GLOBEModel.DataInput4Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput4Record.fromStructure = function (str) {
return new DataInput4Record(new DataInput4Record.RecordClass({
dataInput4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput4Record.IsAnonymousRecord = true;
DataInput4Record.UniqueId = "cb1cadbf-bc24-afda-2642-be89152f5a87";
DataInput4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput4Record.init();
return DataInput4Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput4Record = DataInput4Record;

});
define("CON_GLOBE.model$inputMessage4Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header4Record", "CON_GLOBE.model$DataInput4Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage4Rec = (function (_super) {
__extends(inputMessage4Rec, _super);
function inputMessage4Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage4Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header4Record());
}, CON_GLOBEModel.Header4Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput4Record());
}, CON_GLOBEModel.DataInput4Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage4Rec.init();
return inputMessage4Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage4Rec = inputMessage4Rec;

});
define("CON_GLOBE.model$Contact_out3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out3Rec = (function (_super) {
__extends(Contact_out3Rec, _super);
function Contact_out3Rec(defaults) {
_super.apply(this, arguments);
}
Contact_out3Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ContactID", "contactIDAttr", "ContactID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CreationDate", "creationDateAttr", "CreationDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FlagCharges", "flagChargesAttr", "FlagCharges", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsAvailableInPortfolio", "isAvailableInPortfolioAttr", "IsAvailableInPortfolio", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsEmailBilling", "isEmailBillingAttr", "IsEmailBilling", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IsMainContact", "isMainContactAttr", "IsMainContact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdateProcessID", "lastUpdateProcessIDAttr", "LastUpdateProcessID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedBy", "lastUpdatedByAttr", "LastUpdatedBy", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LastUpdatedDate", "lastUpdatedDateAttr", "LastUpdatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacyID", "legacyIDAttr", "LegacyID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PreferredSchedule", "preferredScheduleAttr", "PreferredSchedule", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceSystem", "sourceSystemAttr", "SourceSystem", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact_out3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact_out3Rec.init();
return Contact_out3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_out3Rec = Contact_out3Rec;

});
define("CON_GLOBE.model$Contact_out3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_out3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out3Record = (function (_super) {
__extends(Contact_out3Record, _super);
function Contact_out3Record(defaults) {
_super.apply(this, arguments);
}
Contact_out3Record.attributesToDeclare = function () {
return [
this.attr("Contact_out3", "contact_out3Attr", "Contact_out3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_out3Rec());
}, CON_GLOBEModel.Contact_out3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_out3Record.fromStructure = function (str) {
return new Contact_out3Record(new Contact_out3Record.RecordClass({
contact_out3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_out3Record.IsAnonymousRecord = true;
Contact_out3Record.UniqueId = "b51328c3-f7f6-30fd-fab5-a2a88a9c40e1";
Contact_out3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_out3Record.init();
return Contact_out3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_out3Record = Contact_out3Record;

});
define("CON_GLOBE.model$Contact_out3RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_out3Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_out3RecordList = (function (_super) {
__extends(Contact_out3RecordList, _super);
function Contact_out3RecordList(defaults) {
_super.apply(this, arguments);
}
Contact_out3RecordList.RecordType = CON_GLOBEModel.Contact_out3Record;
return Contact_out3RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Contact_out3RecordList = Contact_out3RecordList;

});
define("CON_GLOBE.model$Person_out8Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_out3RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out8Rec = (function (_super) {
__extends(Person_out8Rec, _super);
function Person_out8Rec(defaults) {
_super.apply(this, arguments);
}
Person_out8Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_out3RecordList());
}, CON_GLOBEModel.Contact_out3RecordList), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_out8Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_out8Rec.init();
return Person_out8Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out8Rec = Person_out8Rec;

});
define("CON_GLOBE.model$MARKETINGFLAGRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var MARKETINGFLAGRec = (function (_super) {
__extends(MARKETINGFLAGRec, _super);
function MARKETINGFLAGRec(defaults) {
_super.apply(this, arguments);
}
MARKETINGFLAGRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("GroupMarketingFlagId", "groupMarketingFlagIdAttr", "GroupMarketingFlagId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
}), 
this.attr("IntegrationLabel", "integrationLabelAttr", "IntegrationLabel", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
MARKETINGFLAGRec.generateFromLocalStorage = function () {
return false;
};
MARKETINGFLAGRec.init();
return MARKETINGFLAGRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.MARKETINGFLAGRec = MARKETINGFLAGRec;

});
define("CON_GLOBE.model$CustomerInteraction_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerInteraction_outRec = (function (_super) {
__extends(CustomerInteraction_outRec, _super);
function CustomerInteraction_outRec(defaults) {
_super.apply(this, arguments);
}
CustomerInteraction_outRec.attributesToDeclare = function () {
return [
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CustomerInteractionID", "customerInteractionIDAttr", "CustomerInteractionID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CustomerInteraction_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CustomerInteraction_outRec.init();
return CustomerInteraction_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerInteraction_outRec = CustomerInteraction_outRec;

});
define("CON_GLOBE.model$eCodes16Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes16Rec = (function (_super) {
__extends(eCodes16Rec, _super);
function eCodes16Rec(defaults) {
_super.apply(this, arguments);
}
eCodes16Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes16Rec.init();
return eCodes16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes16Rec = eCodes16Rec;

});
define("CON_GLOBE.model$eNative12Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative12Rec = (function (_super) {
__extends(eNative12Rec, _super);
function eNative12Rec(defaults) {
_super.apply(this, arguments);
}
eNative12Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative12Rec.init();
return eNative12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative12Rec = eNative12Rec;

});
define("CON_GLOBE.model$PersonRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var PersonRec = (function (_super) {
__extends(PersonRec, _super);
function PersonRec(defaults) {
_super.apply(this, arguments);
}
PersonRec.attributesToDeclare = function () {
return [
this.attr("Birthdate", "birthdateAttr", "Birthdate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentNumber", "documentNumberAttr", "DocumentNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentType", "documentTypeAttr", "DocumentType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
PersonRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PersonRec.init();
return PersonRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.PersonRec = PersonRec;

});
define("CON_GLOBE.model$AgentRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AgentRec = (function (_super) {
__extends(AgentRec, _super);
function AgentRec(defaults) {
_super.apply(this, arguments);
}
AgentRec.attributesToDeclare = function () {
return [
this.attr("AgentID", "agentIDAttr", "AgentID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AgentRec.fromStructure = function (str) {
return new AgentRec(new AgentRec.RecordClass({
agentIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AgentRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AgentRec.init();
return AgentRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AgentRec = AgentRec;

});
define("CON_GLOBE.model$ResourceRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ResourceRec = (function (_super) {
__extends(ResourceRec, _super);
function ResourceRec(defaults) {
_super.apply(this, arguments);
}
ResourceRec.attributesToDeclare = function () {
return [
this.attr("IMEI", "iMEIAttr", "IMEI", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ResourceRec.fromStructure = function (str) {
return new ResourceRec(new ResourceRec.RecordClass({
iMEIAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ResourceRec.init();
return ResourceRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ResourceRec = ResourceRec;

});
define("CON_GLOBE.model$Header7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header7Record = (function (_super) {
__extends(Header7Record, _super);
function Header7Record(defaults) {
_super.apply(this, arguments);
}
Header7Record.attributesToDeclare = function () {
return [
this.attr("Header7", "header7Attr", "Header7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header7Rec());
}, CON_GLOBEModel.Header7Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header7Record.fromStructure = function (str) {
return new Header7Record(new Header7Record.RecordClass({
header7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header7Record.IsAnonymousRecord = true;
Header7Record.UniqueId = "b514c84b-101b-d386-96dc-e89d054f6c85";
Header7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header7Record.init();
return Header7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header7Record = Header7Record;

});
define("CON_GLOBE.model$outputMessage7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage7Rec = (function (_super) {
__extends(outputMessage7Rec, _super);
function outputMessage7Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage7Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header7Record());
}, CON_GLOBEModel.Header7Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
outputMessage7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage7Rec.init();
return outputMessage7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage7Rec = outputMessage7Rec;

});
define("CON_GLOBE.model$Contact_in5Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in5Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact_in5Record = (function (_super) {
__extends(Contact_in5Record, _super);
function Contact_in5Record(defaults) {
_super.apply(this, arguments);
}
Contact_in5Record.attributesToDeclare = function () {
return [
this.attr("Contact_in5", "contact_in5Attr", "Contact_in5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in5Rec());
}, CON_GLOBEModel.Contact_in5Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact_in5Record.fromStructure = function (str) {
return new Contact_in5Record(new Contact_in5Record.RecordClass({
contact_in5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact_in5Record.IsAnonymousRecord = true;
Contact_in5Record.UniqueId = "17ead084-fb85-eddb-18a0-410730f67de3";
Contact_in5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact_in5Record.init();
return Contact_in5Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact_in5Record = Contact_in5Record;

});
define("CON_GLOBE.model$Person_in10Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact_in5Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in10Rec = (function (_super) {
__extends(Person_in10Rec, _super);
function Person_in10Rec(defaults) {
_super.apply(this, arguments);
}
Person_in10Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact_in5Record());
}, CON_GLOBEModel.Contact_in5Record), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in10Rec.init();
return Person_in10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in10Rec = Person_in10Rec;

});
define("CON_GLOBE.model$Person_in10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in10Record = (function (_super) {
__extends(Person_in10Record, _super);
function Person_in10Record(defaults) {
_super.apply(this, arguments);
}
Person_in10Record.attributesToDeclare = function () {
return [
this.attr("Person_in10", "person_in10Attr", "Person_in10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in10Rec());
}, CON_GLOBEModel.Person_in10Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in10Record.fromStructure = function (str) {
return new Person_in10Record(new Person_in10Record.RecordClass({
person_in10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in10Record.IsAnonymousRecord = true;
Person_in10Record.UniqueId = "7040cc29-097b-0174-b356-051963f21277";
Person_in10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in10Record.init();
return Person_in10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in10Record = Person_in10Record;

});
define("CON_GLOBE.model$DataInput13Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in10Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput13Rec = (function (_super) {
__extends(DataInput13Rec, _super);
function DataInput13Rec(defaults) {
_super.apply(this, arguments);
}
DataInput13Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in10Record());
}, CON_GLOBEModel.Person_in10Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput13Rec.fromStructure = function (str) {
return new DataInput13Rec(new DataInput13Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput13Rec.init();
return DataInput13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput13Rec = DataInput13Rec;

});
define("CON_GLOBE.model$Parameter10Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter10Rec = (function (_super) {
__extends(Parameter10Rec, _super);
function Parameter10Rec(defaults) {
_super.apply(this, arguments);
}
Parameter10Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter10Rec.init();
return Parameter10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter10Rec = Parameter10Rec;

});
define("CON_GLOBE.model$Parameter10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter10Record = (function (_super) {
__extends(Parameter10Record, _super);
function Parameter10Record(defaults) {
_super.apply(this, arguments);
}
Parameter10Record.attributesToDeclare = function () {
return [
this.attr("Parameter10", "parameter10Attr", "Parameter10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter10Rec());
}, CON_GLOBEModel.Parameter10Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter10Record.fromStructure = function (str) {
return new Parameter10Record(new Parameter10Record.RecordClass({
parameter10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter10Record.IsAnonymousRecord = true;
Parameter10Record.UniqueId = "4e2d212a-b3c1-eed9-2da4-fcf703c64812";
Parameter10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter10Record.init();
return Parameter10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter10Record = Parameter10Record;

});
define("CON_GLOBE.model$Parameter10RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter10Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter10RecordList = (function (_super) {
__extends(Parameter10RecordList, _super);
function Parameter10RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter10RecordList.RecordType = CON_GLOBEModel.Parameter10Record;
return Parameter10RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter10RecordList = Parameter10RecordList;

});
define("CON_GLOBE.model$AccessData10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData10Record = (function (_super) {
__extends(AccessData10Record, _super);
function AccessData10Record(defaults) {
_super.apply(this, arguments);
}
AccessData10Record.attributesToDeclare = function () {
return [
this.attr("AccessData10", "accessData10Attr", "AccessData10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData10Rec());
}, CON_GLOBEModel.AccessData10Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData10Record.fromStructure = function (str) {
return new AccessData10Record(new AccessData10Record.RecordClass({
accessData10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData10Record.IsAnonymousRecord = true;
AccessData10Record.UniqueId = "e163a373-6700-dea3-2a12-8392479d17ad";
AccessData10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData10Record.init();
return AccessData10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData10Record = AccessData10Record;

});
define("CON_GLOBE.model$HistoryStep10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep10Record = (function (_super) {
__extends(HistoryStep10Record, _super);
function HistoryStep10Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep10Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep10", "historyStep10Attr", "HistoryStep10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep10Rec());
}, CON_GLOBEModel.HistoryStep10Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep10Record.fromStructure = function (str) {
return new HistoryStep10Record(new HistoryStep10Record.RecordClass({
historyStep10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep10Record.IsAnonymousRecord = true;
HistoryStep10Record.UniqueId = "a81d80a4-39d4-4ffd-462a-d7bd66b437bc";
HistoryStep10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep10Record.init();
return HistoryStep10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep10Record = HistoryStep10Record;

});
define("CON_GLOBE.model$HistoryStep10RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep10Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep10RecordList = (function (_super) {
__extends(HistoryStep10RecordList, _super);
function HistoryStep10RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep10RecordList.RecordType = CON_GLOBEModel.HistoryStep10Record;
return HistoryStep10RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep10RecordList = HistoryStep10RecordList;

});
define("CON_GLOBE.model$eCodes10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes10Record = (function (_super) {
__extends(eCodes10Record, _super);
function eCodes10Record(defaults) {
_super.apply(this, arguments);
}
eCodes10Record.attributesToDeclare = function () {
return [
this.attr("eCodes10", "eCodes10Attr", "eCodes10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes10Rec());
}, CON_GLOBEModel.eCodes10Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes10Record.fromStructure = function (str) {
return new eCodes10Record(new eCodes10Record.RecordClass({
eCodes10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes10Record.IsAnonymousRecord = true;
eCodes10Record.UniqueId = "59155c38-bf62-4ecd-9267-6b5fc8d91741";
eCodes10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes10Record.init();
return eCodes10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes10Record = eCodes10Record;

});
define("CON_GLOBE.model$eNative11Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative11Rec = (function (_super) {
__extends(eNative11Rec, _super);
function eNative11Rec(defaults) {
_super.apply(this, arguments);
}
eNative11Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eSystem", "eSystemAttr", "eSystem", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eNative11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eNative11Rec.init();
return eNative11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative11Rec = eNative11Rec;

});
define("CON_GLOBE.model$eNative11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative11Record = (function (_super) {
__extends(eNative11Record, _super);
function eNative11Record(defaults) {
_super.apply(this, arguments);
}
eNative11Record.attributesToDeclare = function () {
return [
this.attr("eNative11", "eNative11Attr", "eNative11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative11Rec());
}, CON_GLOBEModel.eNative11Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative11Record.fromStructure = function (str) {
return new eNative11Record(new eNative11Record.RecordClass({
eNative11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative11Record.IsAnonymousRecord = true;
eNative11Record.UniqueId = "c4ebfbbc-9fd2-f4d9-3564-e3c1fdd39a81";
eNative11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative11Record.init();
return eNative11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative11Record = eNative11Record;

});
define("CON_GLOBE.model$eNative11RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative11Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative11RecordList = (function (_super) {
__extends(eNative11RecordList, _super);
function eNative11RecordList(defaults) {
_super.apply(this, arguments);
}
eNative11RecordList.RecordType = CON_GLOBEModel.eNative11Record;
return eNative11RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative11RecordList = eNative11RecordList;

});
define("CON_GLOBE.model$Status10Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes10Record", "CON_GLOBE.model$eNative11RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status10Rec = (function (_super) {
__extends(Status10Rec, _super);
function Status10Rec(defaults) {
_super.apply(this, arguments);
}
Status10Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes10Record());
}, CON_GLOBEModel.eCodes10Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative11RecordList());
}, CON_GLOBEModel.eNative11RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status10Rec.init();
return Status10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status10Rec = Status10Rec;

});
define("CON_GLOBE.model$Status10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status10Record = (function (_super) {
__extends(Status10Record, _super);
function Status10Record(defaults) {
_super.apply(this, arguments);
}
Status10Record.attributesToDeclare = function () {
return [
this.attr("Status10", "status10Attr", "Status10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status10Rec());
}, CON_GLOBEModel.Status10Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status10Record.fromStructure = function (str) {
return new Status10Record(new Status10Record.RecordClass({
status10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status10Record.IsAnonymousRecord = true;
Status10Record.UniqueId = "601f5a22-16f2-8b89-60e4-f2d5420e924d";
Status10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status10Record.init();
return Status10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status10Record = Status10Record;

});
define("CON_GLOBE.model$Header10Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter10RecordList", "CON_GLOBE.model$AccessData10Record", "CON_GLOBE.model$HistoryStep10RecordList", "CON_GLOBE.model$Status10Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header10Rec = (function (_super) {
__extends(Header10Rec, _super);
function Header10Rec(defaults) {
_super.apply(this, arguments);
}
Header10Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter10RecordList());
}, CON_GLOBEModel.Parameter10RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData10Record());
}, CON_GLOBEModel.AccessData10Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep10RecordList());
}, CON_GLOBEModel.HistoryStep10RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status10Record());
}, CON_GLOBEModel.Status10Record)
].concat(_super.attributesToDeclare.call(this));
};
Header10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header10Rec.init();
return Header10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header10Rec = Header10Rec;

});
define("CON_GLOBE.model$Header10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header10Record = (function (_super) {
__extends(Header10Record, _super);
function Header10Record(defaults) {
_super.apply(this, arguments);
}
Header10Record.attributesToDeclare = function () {
return [
this.attr("Header10", "header10Attr", "Header10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header10Rec());
}, CON_GLOBEModel.Header10Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header10Record.fromStructure = function (str) {
return new Header10Record(new Header10Record.RecordClass({
header10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header10Record.IsAnonymousRecord = true;
Header10Record.UniqueId = "404d6ff6-8ba6-ed92-fbc3-675dd46b4eee";
Header10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header10Record.init();
return Header10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header10Record = Header10Record;

});
define("CON_GLOBE.model$DataInput11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput11Record = (function (_super) {
__extends(DataInput11Record, _super);
function DataInput11Record(defaults) {
_super.apply(this, arguments);
}
DataInput11Record.attributesToDeclare = function () {
return [
this.attr("DataInput11", "dataInput11Attr", "DataInput11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput11Rec());
}, CON_GLOBEModel.DataInput11Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput11Record.fromStructure = function (str) {
return new DataInput11Record(new DataInput11Record.RecordClass({
dataInput11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput11Record.IsAnonymousRecord = true;
DataInput11Record.UniqueId = "f389e85e-a9c3-4942-4e90-e8429c4e03f1";
DataInput11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput11Record.init();
return DataInput11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput11Record = DataInput11Record;

});
define("CON_GLOBE.model$inputMessage10Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header10Record", "CON_GLOBE.model$DataInput11Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage10Rec = (function (_super) {
__extends(inputMessage10Rec, _super);
function inputMessage10Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage10Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header10Record());
}, CON_GLOBEModel.Header10Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput11Record());
}, CON_GLOBEModel.DataInput11Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage10Rec.init();
return inputMessage10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage10Rec = inputMessage10Rec;

});
define("CON_GLOBE.model$Person_in7Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in7Rec = (function (_super) {
__extends(Person_in7Rec, _super);
function Person_in7Rec(defaults) {
_super.apply(this, arguments);
}
Person_in7Rec.attributesToDeclare = function () {
return [
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_in7Rec.fromStructure = function (str) {
return new Person_in7Rec(new Person_in7Rec.RecordClass({
personIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_in7Rec.init();
return Person_in7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in7Rec = Person_in7Rec;

});
define("CON_GLOBE.model$Person_in7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_in7Record = (function (_super) {
__extends(Person_in7Record, _super);
function Person_in7Record(defaults) {
_super.apply(this, arguments);
}
Person_in7Record.attributesToDeclare = function () {
return [
this.attr("Person_in7", "person_in7Attr", "Person_in7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in7Rec());
}, CON_GLOBEModel.Person_in7Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_in7Record.fromStructure = function (str) {
return new Person_in7Record(new Person_in7Record.RecordClass({
person_in7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_in7Record.IsAnonymousRecord = true;
Person_in7Record.UniqueId = "01c19668-28df-c6b5-80af-7c3ee319b834";
Person_in7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_in7Record.init();
return Person_in7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_in7Record = Person_in7Record;

});
define("CON_GLOBE.model$DataInput9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_in7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput9Rec = (function (_super) {
__extends(DataInput9Rec, _super);
function DataInput9Rec(defaults) {
_super.apply(this, arguments);
}
DataInput9Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_in7Record());
}, CON_GLOBEModel.Person_in7Record)
].concat(_super.attributesToDeclare.call(this));
};
DataInput9Rec.fromStructure = function (str) {
return new DataInput9Rec(new DataInput9Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput9Rec.init();
return DataInput9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput9Rec = DataInput9Rec;

});
define("CON_GLOBE.model$DefaultValueOptionRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DefaultValueOptionRec = (function (_super) {
__extends(DefaultValueOptionRec, _super);
function DefaultValueOptionRec(defaults) {
_super.apply(this, arguments);
}
DefaultValueOptionRec.attributesToDeclare = function () {
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
})
].concat(_super.attributesToDeclare.call(this));
};
DefaultValueOptionRec.generateFromLocalStorage = function () {
return false;
};
DefaultValueOptionRec.init();
return DefaultValueOptionRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DefaultValueOptionRec = DefaultValueOptionRec;

});
define("CON_GLOBE.model$eCodes13Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes13Rec = (function (_super) {
__extends(eCodes13Rec, _super);
function eCodes13Rec(defaults) {
_super.apply(this, arguments);
}
eCodes13Rec.attributesToDeclare = function () {
return [
this.attr("eCode", "eCodeAttr", "eCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eDescription", "eDescriptionAttr", "eDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
eCodes13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
eCodes13Rec.init();
return eCodes13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes13Rec = eCodes13Rec;

});
define("CON_GLOBE.model$eCodes13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes13Record = (function (_super) {
__extends(eCodes13Record, _super);
function eCodes13Record(defaults) {
_super.apply(this, arguments);
}
eCodes13Record.attributesToDeclare = function () {
return [
this.attr("eCodes13", "eCodes13Attr", "eCodes13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes13Rec());
}, CON_GLOBEModel.eCodes13Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes13Record.fromStructure = function (str) {
return new eCodes13Record(new eCodes13Record.RecordClass({
eCodes13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes13Record.IsAnonymousRecord = true;
eCodes13Record.UniqueId = "759cc452-e191-4408-f43b-0b3a089e2961";
eCodes13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes13Record.init();
return eCodes13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes13Record = eCodes13Record;

});
define("CON_GLOBE.model$eNative12Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative12Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative12Record = (function (_super) {
__extends(eNative12Record, _super);
function eNative12Record(defaults) {
_super.apply(this, arguments);
}
eNative12Record.attributesToDeclare = function () {
return [
this.attr("eNative12", "eNative12Attr", "eNative12", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative12Rec());
}, CON_GLOBEModel.eNative12Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative12Record.fromStructure = function (str) {
return new eNative12Record(new eNative12Record.RecordClass({
eNative12Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative12Record.IsAnonymousRecord = true;
eNative12Record.UniqueId = "876aa9c0-1801-4574-fa0d-82faaacc9ea8";
eNative12Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative12Record.init();
return eNative12Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative12Record = eNative12Record;

});
define("CON_GLOBE.model$eNative12RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative12Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative12RecordList = (function (_super) {
__extends(eNative12RecordList, _super);
function eNative12RecordList(defaults) {
_super.apply(this, arguments);
}
eNative12RecordList.RecordType = CON_GLOBEModel.eNative12Record;
return eNative12RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative12RecordList = eNative12RecordList;

});
define("CON_GLOBE.model$Status13Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes13Record", "CON_GLOBE.model$eNative12RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status13Rec = (function (_super) {
__extends(Status13Rec, _super);
function Status13Rec(defaults) {
_super.apply(this, arguments);
}
Status13Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes13Record());
}, CON_GLOBEModel.eCodes13Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative12RecordList());
}, CON_GLOBEModel.eNative12RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status13Rec.init();
return Status13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status13Rec = Status13Rec;

});
define("CON_GLOBE.model$eCodes16Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes16Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eCodes16Record = (function (_super) {
__extends(eCodes16Record, _super);
function eCodes16Record(defaults) {
_super.apply(this, arguments);
}
eCodes16Record.attributesToDeclare = function () {
return [
this.attr("eCodes16", "eCodes16Attr", "eCodes16", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes16Rec());
}, CON_GLOBEModel.eCodes16Rec)
].concat(_super.attributesToDeclare.call(this));
};
eCodes16Record.fromStructure = function (str) {
return new eCodes16Record(new eCodes16Record.RecordClass({
eCodes16Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eCodes16Record.IsAnonymousRecord = true;
eCodes16Record.UniqueId = "64ad0bde-33c4-5ed3-d30a-8cf797d4cc4d";
eCodes16Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eCodes16Record.init();
return eCodes16Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eCodes16Record = eCodes16Record;

});
define("CON_GLOBE.model$eNative15Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative15Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative15Record = (function (_super) {
__extends(eNative15Record, _super);
function eNative15Record(defaults) {
_super.apply(this, arguments);
}
eNative15Record.attributesToDeclare = function () {
return [
this.attr("eNative15", "eNative15Attr", "eNative15", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative15Rec());
}, CON_GLOBEModel.eNative15Rec)
].concat(_super.attributesToDeclare.call(this));
};
eNative15Record.fromStructure = function (str) {
return new eNative15Record(new eNative15Record.RecordClass({
eNative15Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
eNative15Record.IsAnonymousRecord = true;
eNative15Record.UniqueId = "b27e8ca7-038a-837f-6343-c0d583db65da";
eNative15Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
eNative15Record.init();
return eNative15Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.eNative15Record = eNative15Record;

});
define("CON_GLOBE.model$eNative15RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eNative15Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var eNative15RecordList = (function (_super) {
__extends(eNative15RecordList, _super);
function eNative15RecordList(defaults) {
_super.apply(this, arguments);
}
eNative15RecordList.RecordType = CON_GLOBEModel.eNative15Record;
return eNative15RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.eNative15RecordList = eNative15RecordList;

});
define("CON_GLOBE.model$Status16Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$eCodes16Record", "CON_GLOBE.model$eNative15RecordList"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status16Rec = (function (_super) {
__extends(Status16Rec, _super);
function Status16Rec(defaults) {
_super.apply(this, arguments);
}
Status16Rec.attributesToDeclare = function () {
return [
this.attr("eCodes", "eCodesAttr", "eCodes", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eCodes16Record());
}, CON_GLOBEModel.eCodes16Record), 
this.attr("eNative", "eNativeAttr", "eNative", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.eNative15RecordList());
}, CON_GLOBEModel.eNative15RecordList)
].concat(_super.attributesToDeclare.call(this));
};
Status16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Status16Rec.init();
return Status16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status16Rec = Status16Rec;

});
define("CON_GLOBE.model$CustomerInteraction_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CustomerInteraction_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerInteraction_outRecord = (function (_super) {
__extends(CustomerInteraction_outRecord, _super);
function CustomerInteraction_outRecord(defaults) {
_super.apply(this, arguments);
}
CustomerInteraction_outRecord.attributesToDeclare = function () {
return [
this.attr("CustomerInteraction_out", "customerInteraction_outAttr", "CustomerInteraction_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerInteraction_outRec());
}, CON_GLOBEModel.CustomerInteraction_outRec)
].concat(_super.attributesToDeclare.call(this));
};
CustomerInteraction_outRecord.fromStructure = function (str) {
return new CustomerInteraction_outRecord(new CustomerInteraction_outRecord.RecordClass({
customerInteraction_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CustomerInteraction_outRecord.IsAnonymousRecord = true;
CustomerInteraction_outRecord.UniqueId = "80d830d2-f2a6-cb79-d35b-ec4d3b29a3b9";
CustomerInteraction_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CustomerInteraction_outRecord.init();
return CustomerInteraction_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerInteraction_outRecord = CustomerInteraction_outRecord;

});
define("CON_GLOBE.model$Relation_outRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Relation_outRec = (function (_super) {
__extends(Relation_outRec, _super);
function Relation_outRec(defaults) {
_super.apply(this, arguments);
}
Relation_outRec.attributesToDeclare = function () {
return [
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Relation_outRec.fromStructure = function (str) {
return new Relation_outRec(new Relation_outRec.RecordClass({
createdDateAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Relation_outRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Relation_outRec.init();
return Relation_outRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Relation_outRec = Relation_outRec;

});
define("CON_GLOBE.model$Relation_outRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Relation_outRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Relation_outRecord = (function (_super) {
__extends(Relation_outRecord, _super);
function Relation_outRecord(defaults) {
_super.apply(this, arguments);
}
Relation_outRecord.attributesToDeclare = function () {
return [
this.attr("Relation_out", "relation_outAttr", "Relation_out", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Relation_outRec());
}, CON_GLOBEModel.Relation_outRec)
].concat(_super.attributesToDeclare.call(this));
};
Relation_outRecord.fromStructure = function (str) {
return new Relation_outRecord(new Relation_outRecord.RecordClass({
relation_outAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Relation_outRecord.IsAnonymousRecord = true;
Relation_outRecord.UniqueId = "49b58e1e-fc0b-42cf-ab41-c16ce1049122";
Relation_outRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Relation_outRecord.init();
return Relation_outRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Relation_outRecord = Relation_outRecord;

});
define("CON_GLOBE.model$DataOutput11Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CustomerInteraction_outRecord", "CON_GLOBE.model$Relation_outRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput11Rec = (function (_super) {
__extends(DataOutput11Rec, _super);
function DataOutput11Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput11Rec.attributesToDeclare = function () {
return [
this.attr("CustomerInteraction", "customerInteractionAttr", "CustomerInteraction", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerInteraction_outRecord());
}, CON_GLOBEModel.CustomerInteraction_outRecord), 
this.attr("Relation", "relationAttr", "Relation", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Relation_outRecord());
}, CON_GLOBEModel.Relation_outRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput11Rec.init();
return DataOutput11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput11Rec = DataOutput11Rec;

});
define("CON_GLOBE.model$AccessData16Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData16Rec = (function (_super) {
__extends(AccessData16Rec, _super);
function AccessData16Rec(defaults) {
_super.apply(this, arguments);
}
AccessData16Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData16Rec.init();
return AccessData16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData16Rec = AccessData16Rec;

});
define("CON_GLOBE.model$Payment3Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Payment3Rec = (function (_super) {
__extends(Payment3Rec, _super);
function Payment3Rec(defaults) {
_super.apply(this, arguments);
}
Payment3Rec.attributesToDeclare = function () {
return [
this.attr("IBAN", "iBANAttr", "IBAN", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Number", "numberAttr", "Number", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Payment3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Payment3Rec.init();
return Payment3Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Payment3Rec = Payment3Rec;

});
define("CON_GLOBE.model$AccessData13Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData13Rec = (function (_super) {
__extends(AccessData13Rec, _super);
function AccessData13Rec(defaults) {
_super.apply(this, arguments);
}
AccessData13Rec.attributesToDeclare = function () {
return [
this.attr("userOS", "userOSAttr", "userOS", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteHost", "remoteHostAttr", "remoteHost", false, OS.Types.Text, function () {
return "";
}), 
this.attr("remoteIP", "remoteIPAttr", "remoteIP", false, OS.Types.Text, function () {
return "";
}), 
this.attr("otherInfo", "otherInfoAttr", "otherInfo", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessData13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessData13Rec.init();
return AccessData13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData13Rec = AccessData13Rec;

});
define("CON_GLOBE.model$Parameter16Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter16Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter16Record = (function (_super) {
__extends(Parameter16Record, _super);
function Parameter16Record(defaults) {
_super.apply(this, arguments);
}
Parameter16Record.attributesToDeclare = function () {
return [
this.attr("Parameter16", "parameter16Attr", "Parameter16", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter16Rec());
}, CON_GLOBEModel.Parameter16Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter16Record.fromStructure = function (str) {
return new Parameter16Record(new Parameter16Record.RecordClass({
parameter16Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter16Record.IsAnonymousRecord = true;
Parameter16Record.UniqueId = "c1a3a636-2442-aafc-a269-353df41ba53b";
Parameter16Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter16Record.init();
return Parameter16Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter16Record = Parameter16Record;

});
define("CON_GLOBE.model$Parameter16RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter16Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter16RecordList = (function (_super) {
__extends(Parameter16RecordList, _super);
function Parameter16RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter16RecordList.RecordType = CON_GLOBEModel.Parameter16Record;
return Parameter16RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter16RecordList = Parameter16RecordList;

});
define("CON_GLOBE.model$AccessData16Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData16Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData16Record = (function (_super) {
__extends(AccessData16Record, _super);
function AccessData16Record(defaults) {
_super.apply(this, arguments);
}
AccessData16Record.attributesToDeclare = function () {
return [
this.attr("AccessData16", "accessData16Attr", "AccessData16", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData16Rec());
}, CON_GLOBEModel.AccessData16Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData16Record.fromStructure = function (str) {
return new AccessData16Record(new AccessData16Record.RecordClass({
accessData16Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData16Record.IsAnonymousRecord = true;
AccessData16Record.UniqueId = "0e749481-33bc-8c85-7a78-962d62770bd6";
AccessData16Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData16Record.init();
return AccessData16Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData16Record = AccessData16Record;

});
define("CON_GLOBE.model$HistoryStep16Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep16Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep16Record = (function (_super) {
__extends(HistoryStep16Record, _super);
function HistoryStep16Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep16Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep16", "historyStep16Attr", "HistoryStep16", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep16Rec());
}, CON_GLOBEModel.HistoryStep16Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep16Record.fromStructure = function (str) {
return new HistoryStep16Record(new HistoryStep16Record.RecordClass({
historyStep16Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep16Record.IsAnonymousRecord = true;
HistoryStep16Record.UniqueId = "065bf524-5f58-14cf-7ef9-572e828f5322";
HistoryStep16Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep16Record.init();
return HistoryStep16Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep16Record = HistoryStep16Record;

});
define("CON_GLOBE.model$HistoryStep16RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep16Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep16RecordList = (function (_super) {
__extends(HistoryStep16RecordList, _super);
function HistoryStep16RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep16RecordList.RecordType = CON_GLOBEModel.HistoryStep16Record;
return HistoryStep16RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep16RecordList = HistoryStep16RecordList;

});
define("CON_GLOBE.model$Status16Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status16Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status16Record = (function (_super) {
__extends(Status16Record, _super);
function Status16Record(defaults) {
_super.apply(this, arguments);
}
Status16Record.attributesToDeclare = function () {
return [
this.attr("Status16", "status16Attr", "Status16", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status16Rec());
}, CON_GLOBEModel.Status16Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status16Record.fromStructure = function (str) {
return new Status16Record(new Status16Record.RecordClass({
status16Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status16Record.IsAnonymousRecord = true;
Status16Record.UniqueId = "951dce7a-1742-60dd-1ebb-df02b95536c5";
Status16Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status16Record.init();
return Status16Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status16Record = Status16Record;

});
define("CON_GLOBE.model$Header16Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter16RecordList", "CON_GLOBE.model$AccessData16Record", "CON_GLOBE.model$HistoryStep16RecordList", "CON_GLOBE.model$Status16Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header16Rec = (function (_super) {
__extends(Header16Rec, _super);
function Header16Rec(defaults) {
_super.apply(this, arguments);
}
Header16Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter16RecordList());
}, CON_GLOBEModel.Parameter16RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData16Record());
}, CON_GLOBEModel.AccessData16Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep16RecordList());
}, CON_GLOBEModel.HistoryStep16RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status16Record());
}, CON_GLOBEModel.Status16Record)
].concat(_super.attributesToDeclare.call(this));
};
Header16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header16Rec.init();
return Header16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header16Rec = Header16Rec;

});
define("CON_GLOBE.model$Header16Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header16Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header16Record = (function (_super) {
__extends(Header16Record, _super);
function Header16Record(defaults) {
_super.apply(this, arguments);
}
Header16Record.attributesToDeclare = function () {
return [
this.attr("Header16", "header16Attr", "Header16", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header16Rec());
}, CON_GLOBEModel.Header16Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header16Record.fromStructure = function (str) {
return new Header16Record(new Header16Record.RecordClass({
header16Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header16Record.IsAnonymousRecord = true;
Header16Record.UniqueId = "ac50179a-6e8e-891a-f980-2a35f9555ff9";
Header16Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header16Record.init();
return Header16Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header16Record = Header16Record;

});
define("CON_GLOBE.model$DataOutput11Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput11Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput11Record = (function (_super) {
__extends(DataOutput11Record, _super);
function DataOutput11Record(defaults) {
_super.apply(this, arguments);
}
DataOutput11Record.attributesToDeclare = function () {
return [
this.attr("DataOutput11", "dataOutput11Attr", "DataOutput11", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput11Rec());
}, CON_GLOBEModel.DataOutput11Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput11Record.fromStructure = function (str) {
return new DataOutput11Record(new DataOutput11Record.RecordClass({
dataOutput11Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput11Record.IsAnonymousRecord = true;
DataOutput11Record.UniqueId = "d5b1f93c-61ef-015e-1bf4-a7c716fb51f0";
DataOutput11Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput11Record.init();
return DataOutput11Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput11Record = DataOutput11Record;

});
define("CON_GLOBE.model$outputMessage16Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header16Record", "CON_GLOBE.model$DataOutput11Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage16Rec = (function (_super) {
__extends(outputMessage16Rec, _super);
function outputMessage16Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage16Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header16Record());
}, CON_GLOBEModel.Header16Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput11Record());
}, CON_GLOBEModel.DataOutput11Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage16Rec.init();
return outputMessage16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage16Rec = outputMessage16Rec;

});
define("CON_GLOBE.model$ChannelRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ChannelRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ChannelRecord = (function (_super) {
__extends(ChannelRecord, _super);
function ChannelRecord(defaults) {
_super.apply(this, arguments);
}
ChannelRecord.attributesToDeclare = function () {
return [
this.attr("Channel", "channelAttr", "Channel", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ChannelRec());
}, CON_GLOBEModel.ChannelRec)
].concat(_super.attributesToDeclare.call(this));
};
ChannelRecord.fromStructure = function (str) {
return new ChannelRecord(new ChannelRecord.RecordClass({
channelAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ChannelRecord.IsAnonymousRecord = true;
ChannelRecord.UniqueId = "d63093a7-4352-77ff-37ed-c7e07e7875da";
ChannelRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ChannelRecord.init();
return ChannelRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ChannelRecord = ChannelRecord;

});
define("CON_GLOBE.model$StoreRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$StoreRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var StoreRecord = (function (_super) {
__extends(StoreRecord, _super);
function StoreRecord(defaults) {
_super.apply(this, arguments);
}
StoreRecord.attributesToDeclare = function () {
return [
this.attr("Store", "storeAttr", "Store", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.StoreRec());
}, CON_GLOBEModel.StoreRec)
].concat(_super.attributesToDeclare.call(this));
};
StoreRecord.fromStructure = function (str) {
return new StoreRecord(new StoreRecord.RecordClass({
storeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
StoreRecord.IsAnonymousRecord = true;
StoreRecord.UniqueId = "9aa0605c-cb46-f53c-3672-0dc690777a33";
StoreRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
StoreRecord.init();
return StoreRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.StoreRecord = StoreRecord;

});
define("CON_GLOBE.model$AgentRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AgentRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AgentRecord = (function (_super) {
__extends(AgentRecord, _super);
function AgentRecord(defaults) {
_super.apply(this, arguments);
}
AgentRecord.attributesToDeclare = function () {
return [
this.attr("Agent", "agentAttr", "Agent", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AgentRec());
}, CON_GLOBEModel.AgentRec)
].concat(_super.attributesToDeclare.call(this));
};
AgentRecord.fromStructure = function (str) {
return new AgentRecord(new AgentRecord.RecordClass({
agentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AgentRecord.IsAnonymousRecord = true;
AgentRecord.UniqueId = "3c196cd3-9c21-2c27-2904-12758f1dd72a";
AgentRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AgentRecord.init();
return AgentRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AgentRecord = AgentRecord;

});
define("CON_GLOBE.model$Person2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person2Record = (function (_super) {
__extends(Person2Record, _super);
function Person2Record(defaults) {
_super.apply(this, arguments);
}
Person2Record.attributesToDeclare = function () {
return [
this.attr("Person2", "person2Attr", "Person2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person2Rec());
}, CON_GLOBEModel.Person2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person2Record.fromStructure = function (str) {
return new Person2Record(new Person2Record.RecordClass({
person2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person2Record.IsAnonymousRecord = true;
Person2Record.UniqueId = "9187b66f-2905-e2e6-7061-4334437f77a9";
Person2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person2Record.init();
return Person2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person2Record = Person2Record;

});
define("CON_GLOBE.model$Contact2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact2Rec = (function (_super) {
__extends(Contact2Rec, _super);
function Contact2Rec(defaults) {
_super.apply(this, arguments);
}
Contact2Rec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Contact2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Contact2Rec.init();
return Contact2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact2Rec = Contact2Rec;

});
define("CON_GLOBE.model$Contact2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Contact2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Contact2Record = (function (_super) {
__extends(Contact2Record, _super);
function Contact2Record(defaults) {
_super.apply(this, arguments);
}
Contact2Record.attributesToDeclare = function () {
return [
this.attr("Contact2", "contact2Attr", "Contact2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact2Rec());
}, CON_GLOBEModel.Contact2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Contact2Record.fromStructure = function (str) {
return new Contact2Record(new Contact2Record.RecordClass({
contact2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Contact2Record.IsAnonymousRecord = true;
Contact2Record.UniqueId = "2f66a22d-1884-b51a-c05d-dbaf0d98d399";
Contact2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Contact2Record.init();
return Contact2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Contact2Record = Contact2Record;

});
define("CON_GLOBE.model$CampaignRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CampaignRec = (function (_super) {
__extends(CampaignRec, _super);
function CampaignRec(defaults) {
_super.apply(this, arguments);
}
CampaignRec.attributesToDeclare = function () {
return [
this.attr("CampaignName", "campaignNameAttr", "CampaignName", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CampaignRec.fromStructure = function (str) {
return new CampaignRec(new CampaignRec.RecordClass({
campaignNameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CampaignRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CampaignRec.init();
return CampaignRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CampaignRec = CampaignRec;

});
define("CON_GLOBE.model$CampaignRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CampaignRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CampaignRecord = (function (_super) {
__extends(CampaignRecord, _super);
function CampaignRecord(defaults) {
_super.apply(this, arguments);
}
CampaignRecord.attributesToDeclare = function () {
return [
this.attr("Campaign", "campaignAttr", "Campaign", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CampaignRec());
}, CON_GLOBEModel.CampaignRec)
].concat(_super.attributesToDeclare.call(this));
};
CampaignRecord.fromStructure = function (str) {
return new CampaignRecord(new CampaignRecord.RecordClass({
campaignAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CampaignRecord.IsAnonymousRecord = true;
CampaignRecord.UniqueId = "8c5a7518-da89-82ba-2e58-18b4599a4589";
CampaignRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CampaignRecord.init();
return CampaignRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CampaignRecord = CampaignRecord;

});
define("CON_GLOBE.model$TemplateRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var TemplateRec = (function (_super) {
__extends(TemplateRec, _super);
function TemplateRec(defaults) {
_super.apply(this, arguments);
}
TemplateRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TemplateID", "templateIDAttr", "TemplateID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
TemplateRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
TemplateRec.init();
return TemplateRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.TemplateRec = TemplateRec;

});
define("CON_GLOBE.model$TemplateRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$TemplateRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var TemplateRecord = (function (_super) {
__extends(TemplateRecord, _super);
function TemplateRecord(defaults) {
_super.apply(this, arguments);
}
TemplateRecord.attributesToDeclare = function () {
return [
this.attr("Template", "templateAttr", "Template", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.TemplateRec());
}, CON_GLOBEModel.TemplateRec)
].concat(_super.attributesToDeclare.call(this));
};
TemplateRecord.fromStructure = function (str) {
return new TemplateRecord(new TemplateRecord.RecordClass({
templateAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TemplateRecord.IsAnonymousRecord = true;
TemplateRecord.UniqueId = "cf4184b3-cdd9-8229-98a5-8d87dff703ae";
TemplateRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
TemplateRecord.init();
return TemplateRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.TemplateRecord = TemplateRecord;

});
define("CON_GLOBE.model$CommScheduleRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CommScheduleRec = (function (_super) {
__extends(CommScheduleRec, _super);
function CommScheduleRec(defaults) {
_super.apply(this, arguments);
}
CommScheduleRec.attributesToDeclare = function () {
return [
this.attr("CommScheduleID", "commScheduleIDAttr", "CommScheduleID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CommScheduleRec.fromStructure = function (str) {
return new CommScheduleRec(new CommScheduleRec.RecordClass({
commScheduleIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommScheduleRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CommScheduleRec.init();
return CommScheduleRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CommScheduleRec = CommScheduleRec;

});
define("CON_GLOBE.model$CommScheduleRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CommScheduleRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CommScheduleRecord = (function (_super) {
__extends(CommScheduleRecord, _super);
function CommScheduleRecord(defaults) {
_super.apply(this, arguments);
}
CommScheduleRecord.attributesToDeclare = function () {
return [
this.attr("CommSchedule", "commScheduleAttr", "CommSchedule", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CommScheduleRec());
}, CON_GLOBEModel.CommScheduleRec)
].concat(_super.attributesToDeclare.call(this));
};
CommScheduleRecord.fromStructure = function (str) {
return new CommScheduleRecord(new CommScheduleRecord.RecordClass({
commScheduleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CommScheduleRecord.IsAnonymousRecord = true;
CommScheduleRecord.UniqueId = "b86b162d-c59f-ce5b-154b-43b0229fec4d";
CommScheduleRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CommScheduleRecord.init();
return CommScheduleRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CommScheduleRecord = CommScheduleRecord;

});
define("CON_GLOBE.model$AccountRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccountRec = (function (_super) {
__extends(AccountRec, _super);
function AccountRec(defaults) {
_super.apply(this, arguments);
}
AccountRec.attributesToDeclare = function () {
return [
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccountRec.fromStructure = function (str) {
return new AccountRec(new AccountRec.RecordClass({
accountNumberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccountRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccountRec.init();
return AccountRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccountRec = AccountRec;

});
define("CON_GLOBE.model$AccountRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccountRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccountRecord = (function (_super) {
__extends(AccountRecord, _super);
function AccountRecord(defaults) {
_super.apply(this, arguments);
}
AccountRecord.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccountRec());
}, CON_GLOBEModel.AccountRec)
].concat(_super.attributesToDeclare.call(this));
};
AccountRecord.fromStructure = function (str) {
return new AccountRecord(new AccountRecord.RecordClass({
accountAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccountRecord.IsAnonymousRecord = true;
AccountRecord.UniqueId = "9b374ade-7f40-7443-d5f0-d0bfff7ac62e";
AccountRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccountRecord.init();
return AccountRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccountRecord = AccountRecord;

});
define("CON_GLOBE.model$CustomerInteraction_inRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ChannelRecord", "CON_GLOBE.model$StoreRecord", "CON_GLOBE.model$AgentRecord", "CON_GLOBE.model$Person2Record", "CON_GLOBE.model$Contact2Record", "CON_GLOBE.model$CampaignRecord", "CON_GLOBE.model$TemplateRecord", "CON_GLOBE.model$CommScheduleRecord", "CON_GLOBE.model$AccountRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerInteraction_inRec = (function (_super) {
__extends(CustomerInteraction_inRec, _super);
function CustomerInteraction_inRec(defaults) {
_super.apply(this, arguments);
}
CustomerInteraction_inRec.attributesToDeclare = function () {
return [
this.attr("Channel", "channelAttr", "Channel", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ChannelRecord());
}, CON_GLOBEModel.ChannelRecord), 
this.attr("Store", "storeAttr", "Store", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.StoreRecord());
}, CON_GLOBEModel.StoreRecord), 
this.attr("Agent", "agentAttr", "Agent", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AgentRecord());
}, CON_GLOBEModel.AgentRecord), 
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person2Record());
}, CON_GLOBEModel.Person2Record), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact2Record());
}, CON_GLOBEModel.Contact2Record), 
this.attr("Campaign", "campaignAttr", "Campaign", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CampaignRecord());
}, CON_GLOBEModel.CampaignRecord), 
this.attr("Template", "templateAttr", "Template", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.TemplateRecord());
}, CON_GLOBEModel.TemplateRecord), 
this.attr("CommSchedule", "commScheduleAttr", "CommSchedule", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CommScheduleRecord());
}, CON_GLOBEModel.CommScheduleRecord), 
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccountRecord());
}, CON_GLOBEModel.AccountRecord), 
this.attr("AuditCallID", "auditCallIDAttr", "AuditCallID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("AuditCallType", "auditCallTypeAttr", "AuditCallType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CallEndDate", "callEndDateAttr", "CallEndDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CallID", "callIDAttr", "CallID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CallbackDate", "callbackDateAttr", "CallbackDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryDescription", "categoryDescriptionAttr", "CategoryDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryLevel0", "categoryLevel0Attr", "CategoryLevel0", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryLevel1", "categoryLevel1Attr", "CategoryLevel1", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CategoryLevel2", "categoryLevel2Attr", "CategoryLevel2", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Click2CallDate", "click2CallDateAttr", "Click2CallDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Direction", "directionAttr", "Direction", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Duration", "durationAttr", "Duration", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EmailCC", "emailCCAttr", "EmailCC", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EmailFrom", "emailFromAttr", "EmailFrom", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EmailSubject", "emailSubjectAttr", "EmailSubject", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EmailTo", "emailToAttr", "EmailTo", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EndDate", "endDateAttr", "EndDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EntityID", "entityIDAttr", "EntityID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EntityType", "entityTypeAttr", "EntityType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HasEmailAttach", "hasEmailAttachAttr", "HasEmailAttach", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HasVoiceMail", "hasVoiceMailAttr", "HasVoiceMail", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HoldStartDate", "holdStartDateAttr", "HoldStartDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("HoldTime", "holdTimeAttr", "HoldTime", false, OS.Types.Text, function () {
return "";
}), 
this.attr("QueueTicket", "queueTicketAttr", "QueueTicket", false, OS.Types.Text, function () {
return "";
}), 
this.attr("QueueTicketAction", "queueTicketActionAttr", "QueueTicketAction", false, OS.Types.Text, function () {
return "";
}), 
this.attr("QueueTicketID", "queueTicketIDAttr", "QueueTicketID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("QueueTicketType", "queueTicketTypeAttr", "QueueTicketType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Result", "resultAttr", "Result", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResultDescription", "resultDescriptionAttr", "ResultDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SMSContent", "sMSContentAttr", "SMSContent", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SkillSet", "skillSetAttr", "SkillSet", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceUser", "sourceUserAttr", "SourceUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("StartDate", "startDateAttr", "StartDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TimesOnHold", "timesOnHoldAttr", "TimesOnHold", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
CustomerInteraction_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
CustomerInteraction_inRec.init();
return CustomerInteraction_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerInteraction_inRec = CustomerInteraction_inRec;

});
define("CON_GLOBE.model$CustomerInteraction_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CustomerInteraction_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerInteraction_inRecord = (function (_super) {
__extends(CustomerInteraction_inRecord, _super);
function CustomerInteraction_inRecord(defaults) {
_super.apply(this, arguments);
}
CustomerInteraction_inRecord.attributesToDeclare = function () {
return [
this.attr("CustomerInteraction_in", "customerInteraction_inAttr", "CustomerInteraction_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerInteraction_inRec());
}, CON_GLOBEModel.CustomerInteraction_inRec)
].concat(_super.attributesToDeclare.call(this));
};
CustomerInteraction_inRecord.fromStructure = function (str) {
return new CustomerInteraction_inRecord(new CustomerInteraction_inRecord.RecordClass({
customerInteraction_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CustomerInteraction_inRecord.IsAnonymousRecord = true;
CustomerInteraction_inRecord.UniqueId = "17a54765-2e56-4d9e-4fe6-75ef8a848054";
CustomerInteraction_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CustomerInteraction_inRecord.init();
return CustomerInteraction_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerInteraction_inRecord = CustomerInteraction_inRecord;

});
define("CON_GLOBE.model$FileRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$FileRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var FileRecord = (function (_super) {
__extends(FileRecord, _super);
function FileRecord(defaults) {
_super.apply(this, arguments);
}
FileRecord.attributesToDeclare = function () {
return [
this.attr("File", "fileAttr", "File", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.FileRec());
}, CON_GLOBEModel.FileRec)
].concat(_super.attributesToDeclare.call(this));
};
FileRecord.fromStructure = function (str) {
return new FileRecord(new FileRecord.RecordClass({
fileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileRecord.IsAnonymousRecord = true;
FileRecord.UniqueId = "d58fb8e1-b866-3002-31f6-996c0866ed44";
FileRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
FileRecord.init();
return FileRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.FileRecord = FileRecord;

});
define("CON_GLOBE.model$DocumentRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$FileRecord", "CON_GLOBE.model$Contact2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DocumentRec = (function (_super) {
__extends(DocumentRec, _super);
function DocumentRec(defaults) {
_super.apply(this, arguments);
}
DocumentRec.attributesToDeclare = function () {
return [
this.attr("File", "fileAttr", "File", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.FileRecord());
}, CON_GLOBEModel.FileRecord), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Contact2Record());
}, CON_GLOBEModel.Contact2Record), 
this.attr("Date", "dateAttr", "Date", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DeliveryTeam", "deliveryTeamAttr", "DeliveryTeam", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DeliveryUser", "deliveryUserAttr", "DeliveryUser", false, OS.Types.Text, function () {
return "";
}), 
this.attr("DocumentID", "documentIDAttr", "DocumentID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ExternID", "externIDAttr", "ExternID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ExternIDType", "externIDTypeAttr", "ExternIDType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ReferenceNumber", "referenceNumberAttr", "ReferenceNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResolutionCenter", "resolutionCenterAttr", "ResolutionCenter", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ScanDate", "scanDateAttr", "ScanDate", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Source", "sourceAttr", "Source", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SourceSystem", "sourceSystemAttr", "SourceSystem", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TypeDescription", "typeDescriptionAttr", "TypeDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DocumentRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DocumentRec.init();
return DocumentRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DocumentRec = DocumentRec;

});
define("CON_GLOBE.model$DocumentRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DocumentRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DocumentRecord = (function (_super) {
__extends(DocumentRecord, _super);
function DocumentRecord(defaults) {
_super.apply(this, arguments);
}
DocumentRecord.attributesToDeclare = function () {
return [
this.attr("Document", "documentAttr", "Document", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DocumentRec());
}, CON_GLOBEModel.DocumentRec)
].concat(_super.attributesToDeclare.call(this));
};
DocumentRecord.fromStructure = function (str) {
return new DocumentRecord(new DocumentRecord.RecordClass({
documentAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DocumentRecord.IsAnonymousRecord = true;
DocumentRecord.UniqueId = "5de33f50-241a-ff6b-e245-602630f3272f";
DocumentRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DocumentRecord.init();
return DocumentRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DocumentRecord = DocumentRecord;

});
define("CON_GLOBE.model$DocumentRecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DocumentRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DocumentRecordList = (function (_super) {
__extends(DocumentRecordList, _super);
function DocumentRecordList(defaults) {
_super.apply(this, arguments);
}
DocumentRecordList.RecordType = CON_GLOBEModel.DocumentRecord;
return DocumentRecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.DocumentRecordList = DocumentRecordList;

});
define("CON_GLOBE.model$CustomerInquiryRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CustomerInquiryRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var CustomerInquiryRecord = (function (_super) {
__extends(CustomerInquiryRecord, _super);
function CustomerInquiryRecord(defaults) {
_super.apply(this, arguments);
}
CustomerInquiryRecord.attributesToDeclare = function () {
return [
this.attr("CustomerInquiry", "customerInquiryAttr", "CustomerInquiry", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerInquiryRec());
}, CON_GLOBEModel.CustomerInquiryRec)
].concat(_super.attributesToDeclare.call(this));
};
CustomerInquiryRecord.fromStructure = function (str) {
return new CustomerInquiryRecord(new CustomerInquiryRecord.RecordClass({
customerInquiryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CustomerInquiryRecord.IsAnonymousRecord = true;
CustomerInquiryRecord.UniqueId = "6ac20335-e9a1-3fc4-6075-47b3b8ecd020";
CustomerInquiryRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
CustomerInquiryRecord.init();
return CustomerInquiryRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.CustomerInquiryRecord = CustomerInquiryRecord;

});
define("CON_GLOBE.model$Process2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Process2Rec = (function (_super) {
__extends(Process2Rec, _super);
function Process2Rec(defaults) {
_super.apply(this, arguments);
}
Process2Rec.attributesToDeclare = function () {
return [
this.attr("ProcessID", "processIDAttr", "ProcessID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Process2Rec.fromStructure = function (str) {
return new Process2Rec(new Process2Rec.RecordClass({
processIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Process2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Process2Rec.init();
return Process2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Process2Rec = Process2Rec;

});
define("CON_GLOBE.model$Process2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Process2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Process2Record = (function (_super) {
__extends(Process2Record, _super);
function Process2Record(defaults) {
_super.apply(this, arguments);
}
Process2Record.attributesToDeclare = function () {
return [
this.attr("Process2", "process2Attr", "Process2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Process2Rec());
}, CON_GLOBEModel.Process2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Process2Record.fromStructure = function (str) {
return new Process2Record(new Process2Record.RecordClass({
process2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Process2Record.IsAnonymousRecord = true;
Process2Record.UniqueId = "34ceb7dd-fa6b-2b46-77b8-78d6516687ca";
Process2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Process2Record.init();
return Process2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Process2Record = Process2Record;

});
define("CON_GLOBE.model$Relation_inRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DocumentRecordList", "CON_GLOBE.model$CustomerInquiryRecord", "CON_GLOBE.model$Process2Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Relation_inRec = (function (_super) {
__extends(Relation_inRec, _super);
function Relation_inRec(defaults) {
_super.apply(this, arguments);
}
Relation_inRec.attributesToDeclare = function () {
return [
this.attr("Document", "documentAttr", "Document", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DocumentRecordList());
}, CON_GLOBEModel.DocumentRecordList), 
this.attr("CustomerInquiry", "customerInquiryAttr", "CustomerInquiry", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerInquiryRecord());
}, CON_GLOBEModel.CustomerInquiryRecord), 
this.attr("Process", "processAttr", "Process", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Process2Record());
}, CON_GLOBEModel.Process2Record)
].concat(_super.attributesToDeclare.call(this));
};
Relation_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Relation_inRec.init();
return Relation_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Relation_inRec = Relation_inRec;

});
define("CON_GLOBE.model$Relation_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Relation_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Relation_inRecord = (function (_super) {
__extends(Relation_inRecord, _super);
function Relation_inRecord(defaults) {
_super.apply(this, arguments);
}
Relation_inRecord.attributesToDeclare = function () {
return [
this.attr("Relation_in", "relation_inAttr", "Relation_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Relation_inRec());
}, CON_GLOBEModel.Relation_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Relation_inRecord.fromStructure = function (str) {
return new Relation_inRecord(new Relation_inRecord.RecordClass({
relation_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Relation_inRecord.IsAnonymousRecord = true;
Relation_inRecord.UniqueId = "8b3c3dc0-88e3-3097-beda-ec118a391209";
Relation_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Relation_inRecord.init();
return Relation_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Relation_inRecord = Relation_inRecord;

});
define("CON_GLOBE.model$DataInput16Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$CustomerInteraction_inRecord", "CON_GLOBE.model$Relation_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput16Rec = (function (_super) {
__extends(DataInput16Rec, _super);
function DataInput16Rec(defaults) {
_super.apply(this, arguments);
}
DataInput16Rec.attributesToDeclare = function () {
return [
this.attr("CustomerInteraction", "customerInteractionAttr", "CustomerInteraction", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.CustomerInteraction_inRecord());
}, CON_GLOBEModel.CustomerInteraction_inRecord), 
this.attr("Relation", "relationAttr", "Relation", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Relation_inRecord());
}, CON_GLOBEModel.Relation_inRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataInput16Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput16Rec.init();
return DataInput16Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput16Rec = DataInput16Rec;

});
define("CON_GLOBE.model$Address2Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address2Rec = (function (_super) {
__extends(Address2Rec, _super);
function Address2Rec(defaults) {
_super.apply(this, arguments);
}
Address2Rec.attributesToDeclare = function () {
return [
this.attr("PostalCode", "postalCodeAttr", "PostalCode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Address2Rec.fromStructure = function (str) {
return new Address2Rec(new Address2Rec.RecordClass({
postalCodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Address2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Address2Rec.init();
return Address2Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address2Rec = Address2Rec;

});
define("CON_GLOBE.model$Account_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Account_inRecord = (function (_super) {
__extends(Account_inRecord, _super);
function Account_inRecord(defaults) {
_super.apply(this, arguments);
}
Account_inRecord.attributesToDeclare = function () {
return [
this.attr("Account_in", "account_inAttr", "Account_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_inRec());
}, CON_GLOBEModel.Account_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Account_inRecord.fromStructure = function (str) {
return new Account_inRecord(new Account_inRecord.RecordClass({
account_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Account_inRecord.IsAnonymousRecord = true;
Account_inRecord.UniqueId = "aa5a5c9d-5627-1d7b-bd06-d9e924a4dfd2";
Account_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Account_inRecord.init();
return Account_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Account_inRecord = Account_inRecord;

});
define("CON_GLOBE.model$Agent_inRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Agent_inRec = (function (_super) {
__extends(Agent_inRec, _super);
function Agent_inRec(defaults) {
_super.apply(this, arguments);
}
Agent_inRec.attributesToDeclare = function () {
return [
this.attr("CAV", "cAVAttr", "CAV", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SFID", "sFIDAttr", "SFID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Agent_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Agent_inRec.init();
return Agent_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Agent_inRec = Agent_inRec;

});
define("CON_GLOBE.model$Agent_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Agent_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Agent_inRecord = (function (_super) {
__extends(Agent_inRecord, _super);
function Agent_inRecord(defaults) {
_super.apply(this, arguments);
}
Agent_inRecord.attributesToDeclare = function () {
return [
this.attr("Agent_in", "agent_inAttr", "Agent_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Agent_inRec());
}, CON_GLOBEModel.Agent_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Agent_inRecord.fromStructure = function (str) {
return new Agent_inRecord(new Agent_inRecord.RecordClass({
agent_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Agent_inRecord.IsAnonymousRecord = true;
Agent_inRecord.UniqueId = "b92ea238-7168-caa0-3b3a-4da486e2f6ec";
Agent_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Agent_inRecord.init();
return Agent_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Agent_inRecord = Agent_inRecord;

});
define("CON_GLOBE.model$Person_inRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Account_inRecord", "CON_GLOBE.model$Agent_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_inRec = (function (_super) {
__extends(Person_inRec, _super);
function Person_inRec(defaults) {
_super.apply(this, arguments);
}
Person_inRec.attributesToDeclare = function () {
return [
this.attr("Account", "accountAttr", "Account", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Account_inRecord());
}, CON_GLOBEModel.Account_inRecord), 
this.attr("Agent", "agentAttr", "Agent", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Agent_inRecord());
}, CON_GLOBEModel.Agent_inRecord), 
this.attr("LegacyBSCSID", "legacyBSCSIDAttr", "LegacyBSCSID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("LegacySiebelID", "legacySiebelIDAttr", "LegacySiebelID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PersonID", "personIDAttr", "PersonID", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Person_inRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Person_inRec.init();
return Person_inRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_inRec = Person_inRec;

});
define("CON_GLOBE.model$Payment3Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Payment3Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Payment3Record = (function (_super) {
__extends(Payment3Record, _super);
function Payment3Record(defaults) {
_super.apply(this, arguments);
}
Payment3Record.attributesToDeclare = function () {
return [
this.attr("Payment3", "payment3Attr", "Payment3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Payment3Rec());
}, CON_GLOBEModel.Payment3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Payment3Record.fromStructure = function (str) {
return new Payment3Record(new Payment3Record.RecordClass({
payment3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Payment3Record.IsAnonymousRecord = true;
Payment3Record.UniqueId = "04c75545-86e9-5400-0ef1-8af1ee3802be";
Payment3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Payment3Record.init();
return Payment3Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Payment3Record = Payment3Record;

});
define("CON_GLOBE.model$Address2Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Address2Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Address2Record = (function (_super) {
__extends(Address2Record, _super);
function Address2Record(defaults) {
_super.apply(this, arguments);
}
Address2Record.attributesToDeclare = function () {
return [
this.attr("Address2", "address2Attr", "Address2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address2Rec());
}, CON_GLOBEModel.Address2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Address2Record.fromStructure = function (str) {
return new Address2Record(new Address2Record.RecordClass({
address2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Address2Record.IsAnonymousRecord = true;
Address2Record.UniqueId = "638a7199-5954-8f08-6087-3252f15bd5d8";
Address2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Address2Record.init();
return Address2Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Address2Record = Address2Record;

});
define("CON_GLOBE.model$ResourceRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ResourceRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ResourceRecord = (function (_super) {
__extends(ResourceRecord, _super);
function ResourceRecord(defaults) {
_super.apply(this, arguments);
}
ResourceRecord.attributesToDeclare = function () {
return [
this.attr("Resource", "resourceAttr", "Resource", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ResourceRec());
}, CON_GLOBEModel.ResourceRec)
].concat(_super.attributesToDeclare.call(this));
};
ResourceRecord.fromStructure = function (str) {
return new ResourceRecord(new ResourceRecord.RecordClass({
resourceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ResourceRecord.IsAnonymousRecord = true;
ResourceRecord.UniqueId = "81ccbf62-5895-5cad-1dd0-cd63ec6435df";
ResourceRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ResourceRecord.init();
return ResourceRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ResourceRecord = ResourceRecord;

});
define("CON_GLOBE.model$PersonRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$PersonRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var PersonRecord = (function (_super) {
__extends(PersonRecord, _super);
function PersonRecord(defaults) {
_super.apply(this, arguments);
}
PersonRecord.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.PersonRec());
}, CON_GLOBEModel.PersonRec)
].concat(_super.attributesToDeclare.call(this));
};
PersonRecord.fromStructure = function (str) {
return new PersonRecord(new PersonRecord.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PersonRecord.IsAnonymousRecord = true;
PersonRecord.UniqueId = "6e89e6c0-d004-5c27-6076-6e6e8f77e119";
PersonRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PersonRecord.init();
return PersonRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.PersonRecord = PersonRecord;

});
define("CON_GLOBE.model$ContactRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ContactRec = (function (_super) {
__extends(ContactRec, _super);
function ContactRec(defaults) {
_super.apply(this, arguments);
}
ContactRec.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Type", "typeAttr", "Type", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
ContactRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ContactRec.init();
return ContactRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ContactRec = ContactRec;

});
define("CON_GLOBE.model$ContactRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$ContactRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var ContactRecord = (function (_super) {
__extends(ContactRecord, _super);
function ContactRecord(defaults) {
_super.apply(this, arguments);
}
ContactRecord.attributesToDeclare = function () {
return [
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ContactRec());
}, CON_GLOBEModel.ContactRec)
].concat(_super.attributesToDeclare.call(this));
};
ContactRecord.fromStructure = function (str) {
return new ContactRecord(new ContactRecord.RecordClass({
contactAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ContactRecord.IsAnonymousRecord = true;
ContactRecord.UniqueId = "6bbace19-a15a-0d63-b281-fed9295b686e";
ContactRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ContactRecord.init();
return ContactRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.ContactRecord = ContactRecord;

});
define("CON_GLOBE.model$DataInput12Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Payment3Record", "CON_GLOBE.model$Address2Record", "CON_GLOBE.model$ResourceRecord", "CON_GLOBE.model$PersonRecord", "CON_GLOBE.model$ContactRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput12Rec = (function (_super) {
__extends(DataInput12Rec, _super);
function DataInput12Rec(defaults) {
_super.apply(this, arguments);
}
DataInput12Rec.attributesToDeclare = function () {
return [
this.attr("Payment", "paymentAttr", "Payment", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Payment3Record());
}, CON_GLOBEModel.Payment3Record), 
this.attr("Address", "addressAttr", "Address", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Address2Record());
}, CON_GLOBEModel.Address2Record), 
this.attr("Resource", "resourceAttr", "Resource", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ResourceRecord());
}, CON_GLOBEModel.ResourceRecord), 
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.PersonRecord());
}, CON_GLOBEModel.PersonRecord), 
this.attr("Contact", "contactAttr", "Contact", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.ContactRecord());
}, CON_GLOBEModel.ContactRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataInput12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput12Rec.init();
return DataInput12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput12Rec = DataInput12Rec;

});
define("CON_GLOBE.model$DataInput9Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput9Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput9Record = (function (_super) {
__extends(DataInput9Record, _super);
function DataInput9Record(defaults) {
_super.apply(this, arguments);
}
DataInput9Record.attributesToDeclare = function () {
return [
this.attr("DataInput9", "dataInput9Attr", "DataInput9", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput9Rec());
}, CON_GLOBEModel.DataInput9Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput9Record.fromStructure = function (str) {
return new DataInput9Record(new DataInput9Record.RecordClass({
dataInput9Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput9Record.IsAnonymousRecord = true;
DataInput9Record.UniqueId = "f528cb81-f116-17ed-75b7-9e8a4f6a2b31";
DataInput9Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput9Record.init();
return DataInput9Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput9Record = DataInput9Record;

});
define("CON_GLOBE.model$inputMessage9Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header9Record", "CON_GLOBE.model$DataInput9Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage9Rec = (function (_super) {
__extends(inputMessage9Rec, _super);
function inputMessage9Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage9Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header9Record());
}, CON_GLOBEModel.Header9Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput9Record());
}, CON_GLOBEModel.DataInput9Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage9Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage9Rec.init();
return inputMessage9Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage9Rec = inputMessage9Rec;

});
define("CON_GLOBE.model$Order_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Order_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Order_inRecord = (function (_super) {
__extends(Order_inRecord, _super);
function Order_inRecord(defaults) {
_super.apply(this, arguments);
}
Order_inRecord.attributesToDeclare = function () {
return [
this.attr("Order_in", "order_inAttr", "Order_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Order_inRec());
}, CON_GLOBEModel.Order_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Order_inRecord.fromStructure = function (str) {
return new Order_inRecord(new Order_inRecord.RecordClass({
order_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Order_inRecord.IsAnonymousRecord = true;
Order_inRecord.UniqueId = "4787c554-f186-eac7-49d0-cd5b8bf7f2c6";
Order_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Order_inRecord.init();
return Order_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Order_inRecord = Order_inRecord;

});
define("CON_GLOBE.model$DataInput14Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Order_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput14Rec = (function (_super) {
__extends(DataInput14Rec, _super);
function DataInput14Rec(defaults) {
_super.apply(this, arguments);
}
DataInput14Rec.attributesToDeclare = function () {
return [
this.attr("Order", "orderAttr", "Order", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Order_inRecord());
}, CON_GLOBEModel.Order_inRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataInput14Rec.fromStructure = function (str) {
return new DataInput14Rec(new DataInput14Rec.RecordClass({
orderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput14Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInput14Rec.init();
return DataInput14Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput14Rec = DataInput14Rec;

});
define("CON_GLOBE.model$Person_inRecord", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_inRec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_inRecord = (function (_super) {
__extends(Person_inRecord, _super);
function Person_inRecord(defaults) {
_super.apply(this, arguments);
}
Person_inRecord.attributesToDeclare = function () {
return [
this.attr("Person_in", "person_inAttr", "Person_in", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_inRec());
}, CON_GLOBEModel.Person_inRec)
].concat(_super.attributesToDeclare.call(this));
};
Person_inRecord.fromStructure = function (str) {
return new Person_inRecord(new Person_inRecord.RecordClass({
person_inAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_inRecord.IsAnonymousRecord = true;
Person_inRecord.UniqueId = "2d5868eb-888e-f3ec-19ea-7d6365bb84f0";
Person_inRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_inRecord.init();
return Person_inRecord;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_inRecord = Person_inRecord;

});
define("CON_GLOBE.model$DataInputRec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_inRecord"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInputRec = (function (_super) {
__extends(DataInputRec, _super);
function DataInputRec(defaults) {
_super.apply(this, arguments);
}
DataInputRec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_inRecord());
}, CON_GLOBEModel.Person_inRecord)
].concat(_super.attributesToDeclare.call(this));
};
DataInputRec.fromStructure = function (str) {
return new DataInputRec(new DataInputRec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataInputRec.init();
return DataInputRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInputRec = DataInputRec;

});
define("CON_GLOBE.model$DefaultValueRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DefaultValueRec = (function (_super) {
__extends(DefaultValueRec, _super);
function DefaultValueRec(defaults) {
_super.apply(this, arguments);
}
DefaultValueRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Label", "labelAttr", "Label", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DefaultValueRec.generateFromLocalStorage = function () {
return false;
};
DefaultValueRec.init();
return DefaultValueRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DefaultValueRec = DefaultValueRec;

});
define("CON_GLOBE.model$GetPersonValue_InPersonRec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var GetPersonValue_InPersonRec = (function (_super) {
__extends(GetPersonValue_InPersonRec, _super);
function GetPersonValue_InPersonRec(defaults) {
_super.apply(this, arguments);
}
GetPersonValue_InPersonRec.attributesToDeclare = function () {
return [
this.attr("AccountNumber", "accountNumberAttr", "AccountNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("NIF", "nIFAttr", "NIF", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
GetPersonValue_InPersonRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetPersonValue_InPersonRec.init();
return GetPersonValue_InPersonRec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.GetPersonValue_InPersonRec = GetPersonValue_InPersonRec;

});
define("CON_GLOBE.model$Parameter12Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter12Rec = (function (_super) {
__extends(Parameter12Rec, _super);
function Parameter12Rec(defaults) {
_super.apply(this, arguments);
}
Parameter12Rec.attributesToDeclare = function () {
return [
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("value", "valueAttr", "value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Parameter12Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Parameter12Rec.init();
return Parameter12Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter12Rec = Parameter12Rec;

});
define("CON_GLOBE.model$Parameter12Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter12Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter12Record = (function (_super) {
__extends(Parameter12Record, _super);
function Parameter12Record(defaults) {
_super.apply(this, arguments);
}
Parameter12Record.attributesToDeclare = function () {
return [
this.attr("Parameter12", "parameter12Attr", "Parameter12", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter12Rec());
}, CON_GLOBEModel.Parameter12Rec)
].concat(_super.attributesToDeclare.call(this));
};
Parameter12Record.fromStructure = function (str) {
return new Parameter12Record(new Parameter12Record.RecordClass({
parameter12Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Parameter12Record.IsAnonymousRecord = true;
Parameter12Record.UniqueId = "728e071f-1354-ec44-f0bf-3032da4988e1";
Parameter12Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Parameter12Record.init();
return Parameter12Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Parameter12Record = Parameter12Record;

});
define("CON_GLOBE.model$Parameter12RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter12Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Parameter12RecordList = (function (_super) {
__extends(Parameter12RecordList, _super);
function Parameter12RecordList(defaults) {
_super.apply(this, arguments);
}
Parameter12RecordList.RecordType = CON_GLOBEModel.Parameter12Record;
return Parameter12RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.Parameter12RecordList = Parameter12RecordList;

});
define("CON_GLOBE.model$AccessData13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$AccessData13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var AccessData13Record = (function (_super) {
__extends(AccessData13Record, _super);
function AccessData13Record(defaults) {
_super.apply(this, arguments);
}
AccessData13Record.attributesToDeclare = function () {
return [
this.attr("AccessData13", "accessData13Attr", "AccessData13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData13Rec());
}, CON_GLOBEModel.AccessData13Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessData13Record.fromStructure = function (str) {
return new AccessData13Record(new AccessData13Record.RecordClass({
accessData13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessData13Record.IsAnonymousRecord = true;
AccessData13Record.UniqueId = "14c737e4-9113-f04b-7919-7249dd87d67a";
AccessData13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessData13Record.init();
return AccessData13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.AccessData13Record = AccessData13Record;

});
define("CON_GLOBE.model$HistoryStep13Rec", ["exports", "OutSystems", "CON_GLOBE.model"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep13Rec = (function (_super) {
__extends(HistoryStep13Rec, _super);
function HistoryStep13Rec(defaults) {
_super.apply(this, arguments);
}
HistoryStep13Rec.attributesToDeclare = function () {
return [
this.attr("domainName", "domainNameAttr", "domainName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainType", "domainTypeAttr", "domainType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("domainInstance", "domainInstanceAttr", "domainInstance", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceName", "serviceNameAttr", "serviceName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("serviceType", "serviceTypeAttr", "serviceType", false, OS.Types.Text, function () {
return "";
}), 
this.attr("starterName", "starterNameAttr", "starterName", false, OS.Types.Text, function () {
return "";
}), 
this.attr("timestamp", "timestampAttr", "timestamp", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("step", "stepAttr", "step", false, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HistoryStep13Rec.init();
return HistoryStep13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep13Rec = HistoryStep13Rec;

});
define("CON_GLOBE.model$HistoryStep13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep13Record = (function (_super) {
__extends(HistoryStep13Record, _super);
function HistoryStep13Record(defaults) {
_super.apply(this, arguments);
}
HistoryStep13Record.attributesToDeclare = function () {
return [
this.attr("HistoryStep13", "historyStep13Attr", "HistoryStep13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep13Rec());
}, CON_GLOBEModel.HistoryStep13Rec)
].concat(_super.attributesToDeclare.call(this));
};
HistoryStep13Record.fromStructure = function (str) {
return new HistoryStep13Record(new HistoryStep13Record.RecordClass({
historyStep13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HistoryStep13Record.IsAnonymousRecord = true;
HistoryStep13Record.UniqueId = "98b1f3f6-4225-1aeb-9b5c-f3b9a40dc882";
HistoryStep13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HistoryStep13Record.init();
return HistoryStep13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.HistoryStep13Record = HistoryStep13Record;

});
define("CON_GLOBE.model$HistoryStep13RecordList", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$HistoryStep13Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var HistoryStep13RecordList = (function (_super) {
__extends(HistoryStep13RecordList, _super);
function HistoryStep13RecordList(defaults) {
_super.apply(this, arguments);
}
HistoryStep13RecordList.RecordType = CON_GLOBEModel.HistoryStep13Record;
return HistoryStep13RecordList;
})(OS.DataTypes.GenericRecordList);
CON_GLOBEModel.HistoryStep13RecordList = HistoryStep13RecordList;

});
define("CON_GLOBE.model$Status13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Status13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Status13Record = (function (_super) {
__extends(Status13Record, _super);
function Status13Record(defaults) {
_super.apply(this, arguments);
}
Status13Record.attributesToDeclare = function () {
return [
this.attr("Status13", "status13Attr", "Status13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status13Rec());
}, CON_GLOBEModel.Status13Rec)
].concat(_super.attributesToDeclare.call(this));
};
Status13Record.fromStructure = function (str) {
return new Status13Record(new Status13Record.RecordClass({
status13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Status13Record.IsAnonymousRecord = true;
Status13Record.UniqueId = "252a16bb-ad63-ae5b-db69-bec0f421dc4f";
Status13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Status13Record.init();
return Status13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Status13Record = Status13Record;

});
define("CON_GLOBE.model$Header13Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Parameter12RecordList", "CON_GLOBE.model$AccessData13Record", "CON_GLOBE.model$HistoryStep13RecordList", "CON_GLOBE.model$Status13Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header13Rec = (function (_super) {
__extends(Header13Rec, _super);
function Header13Rec(defaults) {
_super.apply(this, arguments);
}
Header13Rec.attributesToDeclare = function () {
return [
this.attr("timeout", "timeoutAttr", "timeout", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retries", "retriesAttr", "retries", false, OS.Types.Text, function () {
return "";
}), 
this.attr("retryInterval", "retryIntervalAttr", "retryInterval", false, OS.Types.Text, function () {
return "";
}), 
this.attr("creationTime", "creationTimeAttr", "creationTime", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("iTrackingID", "iTrackingIDAttr", "iTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("eTrackingID", "eTrackingIDAttr", "eTrackingID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("application", "applicationAttr", "application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("user", "userAttr", "user", false, OS.Types.Text, function () {
return "";
}), 
this.attr("process", "processAttr", "process", false, OS.Types.Text, function () {
return "";
}), 
this.attr("async", "asyncAttr", "async", false, OS.Types.Text, function () {
return "";
}), 
this.attr("expiryDate", "expiryDateAttr", "expiryDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("dueDate", "dueDateAttr", "dueDate", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("asyncReply", "asyncReplyAttr", "asyncReply", false, OS.Types.Text, function () {
return "";
}), 
this.attr("asyncReplyDestination", "asyncReplyDestinationAttr", "asyncReplyDestination", false, OS.Types.Text, function () {
return "";
}), 
this.attr("responseURL", "responseURLAttr", "responseURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("showDetails", "showDetailsAttr", "showDetails", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Parameter12RecordList());
}, CON_GLOBEModel.Parameter12RecordList), 
this.attr("AccessData", "accessDataAttr", "AccessData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.AccessData13Record());
}, CON_GLOBEModel.AccessData13Record), 
this.attr("History", "historyAttr", "History", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.HistoryStep13RecordList());
}, CON_GLOBEModel.HistoryStep13RecordList), 
this.attr("Status", "statusAttr", "Status", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Status13Record());
}, CON_GLOBEModel.Status13Record)
].concat(_super.attributesToDeclare.call(this));
};
Header13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Header13Rec.init();
return Header13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header13Rec = Header13Rec;

});
define("CON_GLOBE.model$Header13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header13Record = (function (_super) {
__extends(Header13Record, _super);
function Header13Record(defaults) {
_super.apply(this, arguments);
}
Header13Record.attributesToDeclare = function () {
return [
this.attr("Header13", "header13Attr", "Header13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header13Rec());
}, CON_GLOBEModel.Header13Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header13Record.fromStructure = function (str) {
return new Header13Record(new Header13Record.RecordClass({
header13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header13Record.IsAnonymousRecord = true;
Header13Record.UniqueId = "2621f3b6-c8a7-f8b1-bdeb-b93a05c6c96c";
Header13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header13Record.init();
return Header13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header13Record = Header13Record;

});
define("CON_GLOBE.model$DataInput13Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput13Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput13Record = (function (_super) {
__extends(DataInput13Record, _super);
function DataInput13Record(defaults) {
_super.apply(this, arguments);
}
DataInput13Record.attributesToDeclare = function () {
return [
this.attr("DataInput13", "dataInput13Attr", "DataInput13", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput13Rec());
}, CON_GLOBEModel.DataInput13Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput13Record.fromStructure = function (str) {
return new DataInput13Record(new DataInput13Record.RecordClass({
dataInput13Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput13Record.IsAnonymousRecord = true;
DataInput13Record.UniqueId = "4b88d13a-1250-0d7b-d811-94f936a0eb9c";
DataInput13Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput13Record.init();
return DataInput13Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput13Record = DataInput13Record;

});
define("CON_GLOBE.model$inputMessage13Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header13Record", "CON_GLOBE.model$DataInput13Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage13Rec = (function (_super) {
__extends(inputMessage13Rec, _super);
function inputMessage13Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage13Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header13Record());
}, CON_GLOBEModel.Header13Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput13Record());
}, CON_GLOBEModel.DataInput13Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage13Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage13Rec.init();
return inputMessage13Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage13Rec = inputMessage13Rec;

});
define("CON_GLOBE.model$Person_out7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Person_out7Record = (function (_super) {
__extends(Person_out7Record, _super);
function Person_out7Record(defaults) {
_super.apply(this, arguments);
}
Person_out7Record.attributesToDeclare = function () {
return [
this.attr("Person_out7", "person_out7Attr", "Person_out7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out7Rec());
}, CON_GLOBEModel.Person_out7Rec)
].concat(_super.attributesToDeclare.call(this));
};
Person_out7Record.fromStructure = function (str) {
return new Person_out7Record(new Person_out7Record.RecordClass({
person_out7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Person_out7Record.IsAnonymousRecord = true;
Person_out7Record.UniqueId = "7598c83b-ba54-943d-fcc4-8502dd822d43";
Person_out7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Person_out7Record.init();
return Person_out7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Person_out7Record = Person_out7Record;

});
define("CON_GLOBE.model$DataOutput8Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Person_out7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput8Rec = (function (_super) {
__extends(DataOutput8Rec, _super);
function DataOutput8Rec(defaults) {
_super.apply(this, arguments);
}
DataOutput8Rec.attributesToDeclare = function () {
return [
this.attr("Person", "personAttr", "Person", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Person_out7Record());
}, CON_GLOBEModel.Person_out7Record)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput8Rec.fromStructure = function (str) {
return new DataOutput8Rec(new DataOutput8Rec.RecordClass({
personAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput8Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DataOutput8Rec.init();
return DataOutput8Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput8Rec = DataOutput8Rec;

});
define("CON_GLOBE.model$DataInput7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataInput7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataInput7Record = (function (_super) {
__extends(DataInput7Record, _super);
function DataInput7Record(defaults) {
_super.apply(this, arguments);
}
DataInput7Record.attributesToDeclare = function () {
return [
this.attr("DataInput7", "dataInput7Attr", "DataInput7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput7Rec());
}, CON_GLOBEModel.DataInput7Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataInput7Record.fromStructure = function (str) {
return new DataInput7Record(new DataInput7Record.RecordClass({
dataInput7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataInput7Record.IsAnonymousRecord = true;
DataInput7Record.UniqueId = "b5a6d9f0-681b-6abb-1a13-43a7541b9162";
DataInput7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataInput7Record.init();
return DataInput7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataInput7Record = DataInput7Record;

});
define("CON_GLOBE.model$inputMessage7Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header7Record", "CON_GLOBE.model$DataInput7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var inputMessage7Rec = (function (_super) {
__extends(inputMessage7Rec, _super);
function inputMessage7Rec(defaults) {
_super.apply(this, arguments);
}
inputMessage7Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header7Record());
}, CON_GLOBEModel.Header7Record), 
this.attr("DataInput", "dataInputAttr", "DataInput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataInput7Record());
}, CON_GLOBEModel.DataInput7Record)
].concat(_super.attributesToDeclare.call(this));
};
inputMessage7Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
inputMessage7Rec.init();
return inputMessage7Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.inputMessage7Rec = inputMessage7Rec;

});
define("CON_GLOBE.model$Header15Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header15Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var Header15Record = (function (_super) {
__extends(Header15Record, _super);
function Header15Record(defaults) {
_super.apply(this, arguments);
}
Header15Record.attributesToDeclare = function () {
return [
this.attr("Header15", "header15Attr", "Header15", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header15Rec());
}, CON_GLOBEModel.Header15Rec)
].concat(_super.attributesToDeclare.call(this));
};
Header15Record.fromStructure = function (str) {
return new Header15Record(new Header15Record.RecordClass({
header15Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Header15Record.IsAnonymousRecord = true;
Header15Record.UniqueId = "3ac3af51-ced0-6a34-f134-222b698d9a9c";
Header15Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Header15Record.init();
return Header15Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.Header15Record = Header15Record;

});
define("CON_GLOBE.model$DataOutput10Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput10Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput10Record = (function (_super) {
__extends(DataOutput10Record, _super);
function DataOutput10Record(defaults) {
_super.apply(this, arguments);
}
DataOutput10Record.attributesToDeclare = function () {
return [
this.attr("DataOutput10", "dataOutput10Attr", "DataOutput10", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput10Rec());
}, CON_GLOBEModel.DataOutput10Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput10Record.fromStructure = function (str) {
return new DataOutput10Record(new DataOutput10Record.RecordClass({
dataOutput10Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput10Record.IsAnonymousRecord = true;
DataOutput10Record.UniqueId = "1f806482-b6c1-0477-20a0-c2d1676448b1";
DataOutput10Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput10Record.init();
return DataOutput10Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput10Record = DataOutput10Record;

});
define("CON_GLOBE.model$outputMessage15Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header15Record", "CON_GLOBE.model$DataOutput10Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage15Rec = (function (_super) {
__extends(outputMessage15Rec, _super);
function outputMessage15Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage15Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header15Record());
}, CON_GLOBEModel.Header15Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput10Record());
}, CON_GLOBEModel.DataOutput10Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage15Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage15Rec.init();
return outputMessage15Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage15Rec = outputMessage15Rec;

});
define("CON_GLOBE.model$DataOutput7Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput7Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput7Record = (function (_super) {
__extends(DataOutput7Record, _super);
function DataOutput7Record(defaults) {
_super.apply(this, arguments);
}
DataOutput7Record.attributesToDeclare = function () {
return [
this.attr("DataOutput7", "dataOutput7Attr", "DataOutput7", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput7Rec());
}, CON_GLOBEModel.DataOutput7Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput7Record.fromStructure = function (str) {
return new DataOutput7Record(new DataOutput7Record.RecordClass({
dataOutput7Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput7Record.IsAnonymousRecord = true;
DataOutput7Record.UniqueId = "a19c1aaf-3c8d-cbb7-679d-5dfa3f1b9d8f";
DataOutput7Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput7Record.init();
return DataOutput7Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput7Record = DataOutput7Record;

});
define("CON_GLOBE.model$outputMessage11Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header11Record", "CON_GLOBE.model$DataOutput7Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage11Rec = (function (_super) {
__extends(outputMessage11Rec, _super);
function outputMessage11Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage11Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header11Record());
}, CON_GLOBEModel.Header11Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput7Record());
}, CON_GLOBEModel.DataOutput7Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage11Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage11Rec.init();
return outputMessage11Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage11Rec = outputMessage11Rec;

});
define("CON_GLOBE.model$DataOutput8Record", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$DataOutput8Rec"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var DataOutput8Record = (function (_super) {
__extends(DataOutput8Record, _super);
function DataOutput8Record(defaults) {
_super.apply(this, arguments);
}
DataOutput8Record.attributesToDeclare = function () {
return [
this.attr("DataOutput8", "dataOutput8Attr", "DataOutput8", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput8Rec());
}, CON_GLOBEModel.DataOutput8Rec)
].concat(_super.attributesToDeclare.call(this));
};
DataOutput8Record.fromStructure = function (str) {
return new DataOutput8Record(new DataOutput8Record.RecordClass({
dataOutput8Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataOutput8Record.IsAnonymousRecord = true;
DataOutput8Record.UniqueId = "ef28443e-443b-e2b7-fab5-b9c7a461af2a";
DataOutput8Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DataOutput8Record.init();
return DataOutput8Record;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.DataOutput8Record = DataOutput8Record;

});
define("CON_GLOBE.model$outputMessage10Rec", ["exports", "OutSystems", "CON_GLOBE.model", "CON_GLOBE.model$Header10Record", "CON_GLOBE.model$DataOutput8Record"], function (exports, OutSystems, CON_GLOBEModel) {
var OS = OutSystems.Internal;
var outputMessage10Rec = (function (_super) {
__extends(outputMessage10Rec, _super);
function outputMessage10Rec(defaults) {
_super.apply(this, arguments);
}
outputMessage10Rec.attributesToDeclare = function () {
return [
this.attr("Header", "headerAttr", "Header", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.Header10Record());
}, CON_GLOBEModel.Header10Record), 
this.attr("DataOutput", "dataOutputAttr", "DataOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CON_GLOBEModel.DataOutput8Record());
}, CON_GLOBEModel.DataOutput8Record)
].concat(_super.attributesToDeclare.call(this));
};
outputMessage10Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
outputMessage10Rec.init();
return outputMessage10Rec;
})(OS.DataTypes.GenericRecord);
CON_GLOBEModel.outputMessage10Rec = outputMessage10Rec;

});
define("CON_GLOBE.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var CON_GLOBEModel = exports;
});
