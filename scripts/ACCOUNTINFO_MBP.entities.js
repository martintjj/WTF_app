define("ACCOUNTINFO_MBP.entities", ["OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.model$Local_SIM_INFORecord", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRecord", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRecord", "ACCOUNTINFO_MBP.model$Local_QR_CARDRecord", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecord"], function (OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var infoLocal_SIM_INFO = {
key: "08dee44c-d270-4a01-a30b-215b0d36aef4",
name: "Local_SIM_INFO",
tableName: "OSUSR_HIH_LOCAL_SIM_INFO",
attributes: [{
name: "Id",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "ServiceId",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_SIM_INFO\" ADD \"ServiceId\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "SIMNumber",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_SIM_INFO\" ADD \"SIMNumber\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "PIN",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_SIM_INFO\" ADD \"PIN\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "PUK",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_SIM_INFO\" ADD \"PUK\" TEXT(50) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "4f0face8-7627-0be8-4f7a-375e0129e0de",
dbRecordToRecord: function (dbRecord) {
return new ACCOUNTINFO_MBPModel.Local_SIM_INFORecord(ACCOUNTINFO_MBPModel.Local_SIM_INFORecord.fromLocalStorage(dbRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_SIM_INFO\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"ServiceId\" TEXT(50) DEFAULT \'\', \"SIMNumber\" TEXT(50) DEFAULT \'\', \"PIN\" TEXT(50) DEFAULT \'\', \"PUK\" TEXT(50) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"ServiceId\" o1, \"SIMNumber\" o2, \"PIN\" o3, \"PUK\" o4 FROM \"OSUSR_HIH_LOCAL_SIM_INFO\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HIH_LOCAL_SIM_INFO\" (\"Id\", \"ServiceId\", \"SIMNumber\", \"PIN\", \"PUK\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_SIM_INFOAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("ServiceId", /*TEXT*/ 0, obj.serviceIdAttr);
argsList.add("SIMNumber", /*TEXT*/ 0, obj.sIMNumberAttr);
argsList.add("PIN", /*TEXT*/ 0, obj.pINAttr);
argsList.add("PUK", /*TEXT*/ 0, obj.pUKAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HIH_LOCAL_SIM_INFO\" (\"Id\", \"ServiceId\", \"SIMNumber\", \"PIN\", \"PUK\") VALUES (?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_SIM_INFOAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("ServiceId", /*TEXT*/ 0, obj.serviceIdAttr);
argsList.add("SIMNumber", /*TEXT*/ 0, obj.sIMNumberAttr);
argsList.add("PIN", /*TEXT*/ 0, obj.pINAttr);
argsList.add("PUK", /*TEXT*/ 0, obj.pUKAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HIH_LOCAL_SIM_INFO\" SET \"ServiceId\" = ?, \"SIMNumber\" = ?, \"PIN\" = ?, \"PUK\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.local_SIM_INFOAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("ServiceId", /*TEXT*/ 0, obj.serviceIdAttr);
argsList.add("SIMNumber", /*TEXT*/ 0, obj.sIMNumberAttr);
argsList.add("PIN", /*TEXT*/ 0, obj.pINAttr);
argsList.add("PUK", /*TEXT*/ 0, obj.pUKAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_SIM_INFO\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_SIM_INFO\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.local_SIM_INFOAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("ServiceId", /*TEXT*/ 0, obj.serviceIdAttr);
argsList.add("SIMNumber", /*TEXT*/ 0, obj.sIMNumberAttr);
argsList.add("PIN", /*TEXT*/ 0, obj.pINAttr);
argsList.add("PUK", /*TEXT*/ 0, obj.pUKAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.local_SIM_INFOAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.local_SIM_INFOAttr;
return obj.idAttr;

}
};
var infoLocal_LOYALTY_POINTS = {
key: "16485493-a1de-4297-afd7-e68564597ace",
name: "Local_LOYALTY_POINTS",
tableName: "OSUSR_HIH_LOCAL_LOYALTY_POINTS",
attributes: [{
name: "Id",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "CustCode_ClientNumber",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"CustCode_ClientNumber\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "IsError",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"IsError\" BOOLEAN DEFAULT 0"
}
}, {
name: "IsEligible",
type: /*BOOLEAN*/ 2,
default: false,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"IsEligible\" BOOLEAN DEFAULT 0"
}
}, {
name: "IsMissingCustInfo",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"IsMissingCustInfo\" BOOLEAN DEFAULT 0"
}
}, {
name: "ShowInfo",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"ShowInfo\" BOOLEAN DEFAULT 0"
}
}, {
name: "Amount",
type: /*LONGINTEGER*/ 4,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"Amount\" BIGINT DEFAULT 0"
}
}, {
name: "ExpirationDate",
type: /*DATE*/ 7,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"ExpirationDate\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "ExpiringAmount",
type: /*LONGINTEGER*/ 4,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" ADD \"ExpiringAmount\" BIGINT DEFAULT 0"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "8d46095d-2fb3-69b6-f36a-ac620926c06a",
dbRecordToRecord: function (dbRecord) {
return new ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecord(ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecord.fromLocalStorage(dbRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"CustCode_ClientNumber\" TEXT(50) DEFAULT \'\', \"IsError\" BOOLEAN DEFAULT 0, \"IsEligible\" BOOLEAN DEFAULT 0, \"IsMissingCustInfo\" BOOLEAN DEFAULT 0, \"ShowInfo\" BOOLEAN DEFAULT 0, \"Amount\" BIGINT DEFAULT 0, \"ExpirationDate\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"ExpiringAmount\" BIGINT DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"CustCode_ClientNumber\" o1, \"IsError\" o2, \"IsEligible\" o3, \"IsMissingCustInfo\" o4, \"ShowInfo\" o5, \"Amount\" o6, \"ExpirationDate\" o7, \"ExpiringAmount\" o8 FROM \"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" (\"Id\", \"CustCode_ClientNumber\", \"IsError\", \"IsEligible\", \"IsMissingCustInfo\", \"ShowInfo\", \"Amount\", \"ExpirationDate\", \"ExpiringAmount\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_LOYALTY_POINTSAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("CustCode_ClientNumber", /*TEXT*/ 0, obj.custCode_ClientNumberAttr);
argsList.add("IsError", /*BOOLEAN*/ 2, obj.isErrorAttr);
argsList.add("IsEligible", /*BOOLEAN*/ 2, obj.isEligibleAttr);
argsList.add("IsMissingCustInfo", /*BOOLEAN*/ 2, obj.isMissingCustInfoAttr);
argsList.add("ShowInfo", /*BOOLEAN*/ 2, obj.showInfoAttr);
argsList.add("Amount", /*LONGINTEGER*/ 4, obj.amountAttr);
argsList.add("ExpirationDate", /*DATE*/ 7, obj.expirationDateAttr);
argsList.add("ExpiringAmount", /*LONGINTEGER*/ 4, obj.expiringAmountAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" (\"Id\", \"CustCode_ClientNumber\", \"IsError\", \"IsEligible\", \"IsMissingCustInfo\", \"ShowInfo\", \"Amount\", \"ExpirationDate\", \"ExpiringAmount\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_LOYALTY_POINTSAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("CustCode_ClientNumber", /*TEXT*/ 0, obj.custCode_ClientNumberAttr);
argsList.add("IsError", /*BOOLEAN*/ 2, obj.isErrorAttr);
argsList.add("IsEligible", /*BOOLEAN*/ 2, obj.isEligibleAttr);
argsList.add("IsMissingCustInfo", /*BOOLEAN*/ 2, obj.isMissingCustInfoAttr);
argsList.add("ShowInfo", /*BOOLEAN*/ 2, obj.showInfoAttr);
argsList.add("Amount", /*LONGINTEGER*/ 4, obj.amountAttr);
argsList.add("ExpirationDate", /*DATE*/ 7, obj.expirationDateAttr);
argsList.add("ExpiringAmount", /*LONGINTEGER*/ 4, obj.expiringAmountAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" SET \"CustCode_ClientNumber\" = ?, \"IsError\" = ?, \"IsEligible\" = ?, \"IsMissingCustInfo\" = ?, \"ShowInfo\" = ?, \"Amount\" = ?, \"ExpirationDate\" = ?, \"ExpiringAmount\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.local_LOYALTY_POINTSAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("CustCode_ClientNumber", /*TEXT*/ 0, obj.custCode_ClientNumberAttr);
argsList.add("IsError", /*BOOLEAN*/ 2, obj.isErrorAttr);
argsList.add("IsEligible", /*BOOLEAN*/ 2, obj.isEligibleAttr);
argsList.add("IsMissingCustInfo", /*BOOLEAN*/ 2, obj.isMissingCustInfoAttr);
argsList.add("ShowInfo", /*BOOLEAN*/ 2, obj.showInfoAttr);
argsList.add("Amount", /*LONGINTEGER*/ 4, obj.amountAttr);
argsList.add("ExpirationDate", /*DATE*/ 7, obj.expirationDateAttr);
argsList.add("ExpiringAmount", /*LONGINTEGER*/ 4, obj.expiringAmountAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_LOYALTY_POINTS\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_LOYALTY_POINTS\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.local_LOYALTY_POINTSAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("CustCode_ClientNumber", /*TEXT*/ 0, obj.custCode_ClientNumberAttr);
argsList.add("IsError", /*BOOLEAN*/ 2, obj.isErrorAttr);
argsList.add("IsEligible", /*BOOLEAN*/ 2, obj.isEligibleAttr);
argsList.add("IsMissingCustInfo", /*BOOLEAN*/ 2, obj.isMissingCustInfoAttr);
argsList.add("ShowInfo", /*BOOLEAN*/ 2, obj.showInfoAttr);
argsList.add("Amount", /*LONGINTEGER*/ 4, obj.amountAttr);
argsList.add("ExpirationDate", /*DATE*/ 7, obj.expirationDateAttr);
argsList.add("ExpiringAmount", /*LONGINTEGER*/ 4, obj.expiringAmountAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.local_LOYALTY_POINTSAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.local_LOYALTY_POINTSAttr;
return obj.idAttr;

}
};
var infoLocal_CACHE_CONTROL_SERVICES = {
key: "5c292db7-bd43-4a5a-abc8-0acf4ea7e139",
name: "Local_CACHE_CONTROL_SERVICES",
tableName: "OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES",
attributes: [{
name: "Id",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "CacheServiceId",
type: /*TEXT*/ 0,
length: 250,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" ADD \"CacheServiceId\" TEXT(250) DEFAULT \'\'"
}
}, {
name: "CacheControlId",
type: /*LONGINTEGER*/ 4,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" ADD \"CacheControlId\" BIGINT DEFAULT 0"
}
}, {
name: "LastUpdateAt",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" ADD \"LastUpdateAt\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "ExpirationDate",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" ADD \"ExpirationDate\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "LastCacheCheck",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" ADD \"LastCacheCheck\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "7dca2a03-44bc-7efd-f762-4b0d80ead4ad",
dbRecordToRecord: function (dbRecord) {
return new ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecord(ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecord.fromLocalStorage(dbRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"CacheServiceId\" TEXT(250) DEFAULT \'\', \"CacheControlId\" BIGINT DEFAULT 0, \"LastUpdateAt\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"ExpirationDate\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"LastCacheCheck\" DATETIME DEFAULT \'1900-01-01 00:00:00\')"
},
select: {
sql: "SELECT \"Id\" o0, \"CacheServiceId\" o1, \"CacheControlId\" o2, \"LastUpdateAt\" o3, \"ExpirationDate\" o4, \"LastCacheCheck\" o5 FROM \"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" (\"Id\", \"CacheServiceId\", \"CacheControlId\", \"LastUpdateAt\", \"ExpirationDate\", \"LastCacheCheck\") VALUES (?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_CACHE_CONTROL_SERVICESAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("CacheServiceId", /*TEXT*/ 0, obj.cacheServiceIdAttr);
argsList.add("CacheControlId", /*LONGINTEGER*/ 4, obj.cacheControlIdAttr);
argsList.add("LastUpdateAt", /*DATE_TIME*/ 6, obj.lastUpdateAtAttr);
argsList.add("ExpirationDate", /*DATE_TIME*/ 6, obj.expirationDateAttr);
argsList.add("LastCacheCheck", /*DATE_TIME*/ 6, obj.lastCacheCheckAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" (\"Id\", \"CacheServiceId\", \"CacheControlId\", \"LastUpdateAt\", \"ExpirationDate\", \"LastCacheCheck\") VALUES (?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_CACHE_CONTROL_SERVICESAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("CacheServiceId", /*TEXT*/ 0, obj.cacheServiceIdAttr);
argsList.add("CacheControlId", /*LONGINTEGER*/ 4, obj.cacheControlIdAttr);
argsList.add("LastUpdateAt", /*DATE_TIME*/ 6, obj.lastUpdateAtAttr);
argsList.add("ExpirationDate", /*DATE_TIME*/ 6, obj.expirationDateAttr);
argsList.add("LastCacheCheck", /*DATE_TIME*/ 6, obj.lastCacheCheckAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" SET \"CacheServiceId\" = ?, \"CacheControlId\" = ?, \"LastUpdateAt\" = ?, \"ExpirationDate\" = ?, \"LastCacheCheck\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.local_CACHE_CONTROL_SERVICESAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("CacheServiceId", /*TEXT*/ 0, obj.cacheServiceIdAttr);
argsList.add("CacheControlId", /*LONGINTEGER*/ 4, obj.cacheControlIdAttr);
argsList.add("LastUpdateAt", /*DATE_TIME*/ 6, obj.lastUpdateAtAttr);
argsList.add("ExpirationDate", /*DATE_TIME*/ 6, obj.expirationDateAttr);
argsList.add("LastCacheCheck", /*DATE_TIME*/ 6, obj.lastCacheCheckAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_CACHE_CONTROL_SERVICES\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.local_CACHE_CONTROL_SERVICESAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("CacheServiceId", /*TEXT*/ 0, obj.cacheServiceIdAttr);
argsList.add("CacheControlId", /*LONGINTEGER*/ 4, obj.cacheControlIdAttr);
argsList.add("LastUpdateAt", /*DATE_TIME*/ 6, obj.lastUpdateAtAttr);
argsList.add("ExpirationDate", /*DATE_TIME*/ 6, obj.expirationDateAttr);
argsList.add("LastCacheCheck", /*DATE_TIME*/ 6, obj.lastCacheCheckAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.local_CACHE_CONTROL_SERVICESAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.local_CACHE_CONTROL_SERVICESAttr;
return obj.idAttr;

}
};
var infoLocal_QR_CARD = {
key: "94d797a1-1b64-4b7d-bf7b-d6ec0c09070a",
name: "Local_QR_CARD",
tableName: "OSUSR_HIH_LOCAL_QR_CARD",
attributes: [{
name: "Id",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "Filename",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_QR_CARD\" ADD \"Filename\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Binary",
type: /*BINARY_DATA*/ 1,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_QR_CARD\" ADD \"Binary\" BLOB DEFAULT NULL"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "6744631c-7a95-9768-cdfd-3a200c6a208f",
dbRecordToRecord: function (dbRecord) {
return new ACCOUNTINFO_MBPModel.Local_QR_CARDRecord(ACCOUNTINFO_MBPModel.Local_QR_CARDRecord.fromLocalStorage(dbRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_QR_CARD\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Filename\" TEXT(50) DEFAULT \'\', \"Binary\" BLOB DEFAULT NULL)"
},
select: {
sql: "SELECT \"Id\" o0, \"Filename\" o1, \"Binary\" o2 FROM \"OSUSR_HIH_LOCAL_QR_CARD\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HIH_LOCAL_QR_CARD\" (\"Id\", \"Filename\", \"Binary\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.local_QR_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("Filename", /*TEXT*/ 0, obj.filenameAttr);
argsList.add("Binary", /*BINARY_DATA*/ 1, obj.binaryAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HIH_LOCAL_QR_CARD\" (\"Id\", \"Filename\", \"Binary\") VALUES (?, ?, ?)",
getArguments: function (record) {
var obj = record.local_QR_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("Filename", /*TEXT*/ 0, obj.filenameAttr);
argsList.add("Binary", /*BINARY_DATA*/ 1, obj.binaryAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HIH_LOCAL_QR_CARD\" SET \"Filename\" = ?, \"Binary\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.local_QR_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Filename", /*TEXT*/ 0, obj.filenameAttr);
argsList.add("Binary", /*BINARY_DATA*/ 1, obj.binaryAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_QR_CARD\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_QR_CARD\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.local_QR_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("Filename", /*TEXT*/ 0, obj.filenameAttr);
argsList.add("Binary", /*BINARY_DATA*/ 1, obj.binaryAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.local_QR_CARDAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.local_QR_CARDAttr;
return obj.idAttr;

}
};
var infoLocal_CLIENT_CARD = {
key: "eef7a654-cc92-4602-866f-961a63f4795b",
name: "Local_CLIENT_CARD",
tableName: "OSUSR_HIH_LOCAL_CLIENT_CARD",
attributes: [{
name: "Id",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "ClientName",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"ClientName\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "CardNumber",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"CardNumber\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "UserID",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"UserID\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "ClientNumber",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"ClientNumber\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "UpdateDateTime",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"UpdateDateTime\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "IsDelegated",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"IsDelegated\" BOOLEAN DEFAULT 0"
}
}, {
name: "CanBeDelegated",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"CanBeDelegated\" BOOLEAN DEFAULT 0"
}
}, {
name: "RegisterDateTime",
type: /*DATE_TIME*/ 6,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"RegisterDateTime\" DATETIME DEFAULT \'1900-01-01 00:00:00\'"
}
}, {
name: "QRCardID",
type: /*LONGINTEGER*/ 4,
isEntityReference: true,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"QRCardID\" BIGINT DEFAULT NULL"
}
}, {
name: "AccountId",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"AccountId\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "StatusCode",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" ADD \"StatusCode\" TEXT(50) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "b53093b6-4654-33be-9293-99021b123a6e",
dbRecordToRecord: function (dbRecord) {
return new ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecord(ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecord.fromLocalStorage(dbRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_HIH_LOCAL_CLIENT_CARD\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"ClientName\" TEXT(50) DEFAULT \'\', \"CardNumber\" TEXT(50) DEFAULT \'\', \"UserID\" TEXT(50) DEFAULT \'\', \"ClientNumber\" TEXT(50) DEFAULT \'\', \"UpdateDateTime\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"IsDelegated\" BOOLEAN DEFAULT 0, \"CanBeDelegated\" BOOLEAN DEFAULT 0, \"RegisterDateTime\" DATETIME DEFAULT \'1900-01-01 00:00:00\', \"QRCardID\" BIGINT DEFAULT NULL, \"AccountId\" TEXT(50) DEFAULT \'\', \"StatusCode\" TEXT(50) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"ClientName\" o1, \"CardNumber\" o2, \"UserID\" o3, \"ClientNumber\" o4, \"UpdateDateTime\" o5, \"IsDelegated\" o6, \"CanBeDelegated\" o7, \"RegisterDateTime\" o8, \"QRCardID\" o9, \"AccountId\" o10, \"StatusCode\" o11 FROM \"OSUSR_HIH_LOCAL_CLIENT_CARD\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_HIH_LOCAL_CLIENT_CARD\" (\"Id\", \"ClientName\", \"CardNumber\", \"UserID\", \"ClientNumber\", \"UpdateDateTime\", \"IsDelegated\", \"CanBeDelegated\", \"RegisterDateTime\", \"QRCardID\", \"AccountId\", \"StatusCode\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_CLIENT_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("ClientName", /*TEXT*/ 0, obj.clientNameAttr);
argsList.add("CardNumber", /*TEXT*/ 0, obj.cardNumberAttr);
argsList.add("UserID", /*TEXT*/ 0, obj.userIDAttr);
argsList.add("ClientNumber", /*TEXT*/ 0, obj.clientNumberAttr);
argsList.add("UpdateDateTime", /*DATE_TIME*/ 6, obj.updateDateTimeAttr);
argsList.add("IsDelegated", /*BOOLEAN*/ 2, obj.isDelegatedAttr);
argsList.add("CanBeDelegated", /*BOOLEAN*/ 2, obj.canBeDelegatedAttr);
argsList.add("RegisterDateTime", /*DATE_TIME*/ 6, obj.registerDateTimeAttr);
argsList.add("QRCardID", /*LONGINTEGER*/ 4, obj.qRCardIDAttr, null, null, true);
argsList.add("AccountId", /*TEXT*/ 0, obj.accountIdAttr);
argsList.add("StatusCode", /*TEXT*/ 0, obj.statusCodeAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_HIH_LOCAL_CLIENT_CARD\" (\"Id\", \"ClientName\", \"CardNumber\", \"UserID\", \"ClientNumber\", \"UpdateDateTime\", \"IsDelegated\", \"CanBeDelegated\", \"RegisterDateTime\", \"QRCardID\", \"AccountId\", \"StatusCode\") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_CLIENT_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("ClientName", /*TEXT*/ 0, obj.clientNameAttr);
argsList.add("CardNumber", /*TEXT*/ 0, obj.cardNumberAttr);
argsList.add("UserID", /*TEXT*/ 0, obj.userIDAttr);
argsList.add("ClientNumber", /*TEXT*/ 0, obj.clientNumberAttr);
argsList.add("UpdateDateTime", /*DATE_TIME*/ 6, obj.updateDateTimeAttr);
argsList.add("IsDelegated", /*BOOLEAN*/ 2, obj.isDelegatedAttr);
argsList.add("CanBeDelegated", /*BOOLEAN*/ 2, obj.canBeDelegatedAttr);
argsList.add("RegisterDateTime", /*DATE_TIME*/ 6, obj.registerDateTimeAttr);
argsList.add("QRCardID", /*LONGINTEGER*/ 4, obj.qRCardIDAttr, null, null, true);
argsList.add("AccountId", /*TEXT*/ 0, obj.accountIdAttr);
argsList.add("StatusCode", /*TEXT*/ 0, obj.statusCodeAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?,?,?,?,?,?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_HIH_LOCAL_CLIENT_CARD\" SET \"ClientName\" = ?, \"CardNumber\" = ?, \"UserID\" = ?, \"ClientNumber\" = ?, \"UpdateDateTime\" = ?, \"IsDelegated\" = ?, \"CanBeDelegated\" = ?, \"RegisterDateTime\" = ?, \"QRCardID\" = ?, \"AccountId\" = ?, \"StatusCode\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.local_CLIENT_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("ClientName", /*TEXT*/ 0, obj.clientNameAttr);
argsList.add("CardNumber", /*TEXT*/ 0, obj.cardNumberAttr);
argsList.add("UserID", /*TEXT*/ 0, obj.userIDAttr);
argsList.add("ClientNumber", /*TEXT*/ 0, obj.clientNumberAttr);
argsList.add("UpdateDateTime", /*DATE_TIME*/ 6, obj.updateDateTimeAttr);
argsList.add("IsDelegated", /*BOOLEAN*/ 2, obj.isDelegatedAttr);
argsList.add("CanBeDelegated", /*BOOLEAN*/ 2, obj.canBeDelegatedAttr);
argsList.add("RegisterDateTime", /*DATE_TIME*/ 6, obj.registerDateTimeAttr);
argsList.add("QRCardID", /*LONGINTEGER*/ 4, obj.qRCardIDAttr, null, null, true);
argsList.add("AccountId", /*TEXT*/ 0, obj.accountIdAttr);
argsList.add("StatusCode", /*TEXT*/ 0, obj.statusCodeAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_CLIENT_CARD\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_HIH_LOCAL_CLIENT_CARD\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.local_CLIENT_CARDAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("ClientName", /*TEXT*/ 0, obj.clientNameAttr);
argsList.add("CardNumber", /*TEXT*/ 0, obj.cardNumberAttr);
argsList.add("UserID", /*TEXT*/ 0, obj.userIDAttr);
argsList.add("ClientNumber", /*TEXT*/ 0, obj.clientNumberAttr);
argsList.add("UpdateDateTime", /*DATE_TIME*/ 6, obj.updateDateTimeAttr);
argsList.add("IsDelegated", /*BOOLEAN*/ 2, obj.isDelegatedAttr);
argsList.add("CanBeDelegated", /*BOOLEAN*/ 2, obj.canBeDelegatedAttr);
argsList.add("RegisterDateTime", /*DATE_TIME*/ 6, obj.registerDateTimeAttr);
argsList.add("QRCardID", /*LONGINTEGER*/ 4, obj.qRCardIDAttr, null, null, true);
argsList.add("AccountId", /*TEXT*/ 0, obj.accountIdAttr);
argsList.add("StatusCode", /*TEXT*/ 0, obj.statusCodeAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.local_CLIENT_CARDAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.local_CLIENT_CARDAttr;
return obj.idAttr;

}
};
var moduleKey = "65709236-bbe3-4bca-a979-ced213c6601c";
ACCOUNTINFO_MBPModel.entities = {
Local_SIM_INFO: new OS.Entities.Entity(OS.Entities.webSQLStorageInstance, infoLocal_SIM_INFO, moduleKey),
Local_LOYALTY_POINTS: new OS.Entities.Entity(OS.Entities.webSQLStorageInstance, infoLocal_LOYALTY_POINTS, moduleKey),
Local_CACHE_CONTROL_SERVICES: new OS.Entities.Entity(OS.Entities.webSQLStorageInstance, infoLocal_CACHE_CONTROL_SERVICES, moduleKey),
Local_QR_CARD: new OS.Entities.Entity(OS.Entities.webSQLStorageInstance, infoLocal_QR_CARD, moduleKey),
Local_CLIENT_CARD: new OS.Entities.Entity(OS.Entities.webSQLStorageInstance, infoLocal_CLIENT_CARD, moduleKey)
};
return {
init: function (runner) {
return OS.Entities.webSQLStorageInstance.initModule([infoLocal_SIM_INFO, infoLocal_LOYALTY_POINTS, infoLocal_CACHE_CONTROL_SERVICES, infoLocal_QR_CARD, infoLocal_CLIENT_CARD], runner, moduleKey);
},
switch: function (runner) {
return OS.Entities.webSQLStorageInstance.switchModule(runner, moduleKey);
}
};
});
