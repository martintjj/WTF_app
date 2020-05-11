define("App_Config_MBP.entities", ["OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$Local_APP_CONFIGRecord", "App_Config_MBP.model$Local_SYNC_CONTROLRecord"], function (OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var infoLocal_APP_CONFIG = {
key: "a8b43002-9ce3-46a5-ac10-e854f93ce860",
name: "Local_APP_CONFIG",
tableName: "OSUSR_Q3O_LOCAL_APP_CONFIG",
attributes: [{
name: "Id",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "Application",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_Q3O_LOCAL_APP_CONFIG\" ADD \"Application\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Key",
type: /*TEXT*/ 0,
length: 50,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_Q3O_LOCAL_APP_CONFIG\" ADD \"Key\" TEXT(50) DEFAULT \'\'"
}
}, {
name: "Value",
type: /*TEXT*/ 0,
length: 2500,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_Q3O_LOCAL_APP_CONFIG\" ADD \"Value\" TEXT(2500) DEFAULT \'\'"
}
}],
idIsAutoNumber: /*YesIfEmpty*/ 2,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "f7b5f6ff-4455-dd25-fe0b-5153efefd085",
dbRecordToRecord: function (dbRecord) {
return new App_Config_MBPModel.Local_APP_CONFIGRecord(App_Config_MBPModel.Local_APP_CONFIGRecord.fromLocalStorage(dbRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_Q3O_LOCAL_APP_CONFIG\" (\"Id\" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \"Application\" TEXT(50) DEFAULT \'\', \"Key\" TEXT(50) DEFAULT \'\', \"Value\" TEXT(2500) DEFAULT \'\')"
},
select: {
sql: "SELECT \"Id\" o0, \"Application\" o1, \"Key\" o2, \"Value\" o3 FROM \"OSUSR_Q3O_LOCAL_APP_CONFIG\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_Q3O_LOCAL_APP_CONFIG\" (\"Id\", \"Application\", \"Key\", \"Value\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_APP_CONFIGAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("Application", /*TEXT*/ 0, obj.applicationAttr);
argsList.add("Key", /*TEXT*/ 0, obj.keyAttr);
argsList.add("Value", /*TEXT*/ 0, obj.valueAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_Q3O_LOCAL_APP_CONFIG\" (\"Id\", \"Application\", \"Key\", \"Value\") VALUES (?, ?, ?, ?)",
getArguments: function (record) {
var obj = record.local_APP_CONFIGAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue) ? null : obj.idAttr);
argsList.add("Application", /*TEXT*/ 0, obj.applicationAttr);
argsList.add("Key", /*TEXT*/ 0, obj.keyAttr);
argsList.add("Value", /*TEXT*/ 0, obj.valueAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?,?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_Q3O_LOCAL_APP_CONFIG\" SET \"Application\" = ?, \"Key\" = ?, \"Value\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.local_APP_CONFIGAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Application", /*TEXT*/ 0, obj.applicationAttr);
argsList.add("Key", /*TEXT*/ 0, obj.keyAttr);
argsList.add("Value", /*TEXT*/ 0, obj.valueAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_Q3O_LOCAL_APP_CONFIG\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_Q3O_LOCAL_APP_CONFIG\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.local_APP_CONFIGAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("Application", /*TEXT*/ 0, obj.applicationAttr);
argsList.add("Key", /*TEXT*/ 0, obj.keyAttr);
argsList.add("Value", /*TEXT*/ 0, obj.valueAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.local_APP_CONFIGAttr;
return obj.idAttr.equals(OS.DataTypes.LongInteger.defaultValue);

},
getIdFromRecord: function (record) {
var obj = record.local_APP_CONFIGAttr;
return obj.idAttr;

}
};
var infoLocal_SYNC_CONTROL = {
key: "d06403f2-6588-44f4-ba49-75bd2bfe9d04",
name: "Local_SYNC_CONTROL",
tableName: "OSUSR_Q3O_LOCAL_SYNC_CONTROL",
attributes: [{
name: "Id",
type: /*LONGINTEGER*/ 4,
isPrimaryKey: true
}, {
name: "IsSynchronizing",
type: /*BOOLEAN*/ 2,
addColumn: {
sql: "ALTER TABLE \"MAIN\".\"OSUSR_Q3O_LOCAL_SYNC_CONTROL\" ADD \"IsSynchronizing\" BOOLEAN DEFAULT 0"
}
}],
idIsAutoNumber: /*No*/ 0,
getIdAttribute: function () {
return this.attributes[0];
},
hash: "92b8e38a-3cd2-9ae7-ee24-c3a3dfd68a44",
dbRecordToRecord: function (dbRecord) {
return new App_Config_MBPModel.Local_SYNC_CONTROLRecord(App_Config_MBPModel.Local_SYNC_CONTROLRecord.fromLocalStorage(dbRecord, {
value: 0
}));
},
createTable: {
sql: "CREATE TABLE \"MAIN\".\"OSUSR_Q3O_LOCAL_SYNC_CONTROL\" (\"Id\" BIGINT PRIMARY KEY NOT NULL, \"IsSynchronizing\" BOOLEAN DEFAULT 0)"
},
select: {
sql: "SELECT \"Id\" o0, \"IsSynchronizing\" o1 FROM \"OSUSR_Q3O_LOCAL_SYNC_CONTROL\" WHERE \"Id\" = ?"
},
insert: {
sql: "INSERT INTO \"OSUSR_Q3O_LOCAL_SYNC_CONTROL\" (\"Id\", \"IsSynchronizing\") VALUES (?, ?)",
getArguments: function (record) {
var obj = record.local_SYNC_CONTROLAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("IsSynchronizing", /*BOOLEAN*/ 2, obj.isSynchronizingAttr);

return argsList;
}
},
upsert: {
sql: "INSERT OR REPLACE INTO \"OSUSR_Q3O_LOCAL_SYNC_CONTROL\" (\"Id\", \"IsSynchronizing\") VALUES (?, ?)",
getArguments: function (record) {
var obj = record.local_SYNC_CONTROLAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("IsSynchronizing", /*BOOLEAN*/ 2, obj.isSynchronizingAttr);

return argsList;
},
getBulkSql: function (recordCount) {
return OS.ObjectExtensions.concatenateMultipleTimes(this.sql, ",(?,?)", (recordCount - 1));
}
},
update: {
sql: "UPDATE \"OSUSR_Q3O_LOCAL_SYNC_CONTROL\" SET \"IsSynchronizing\" = ? WHERE \"Id\" = ?",
getArguments: function (record) {
var obj = record.local_SYNC_CONTROLAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("IsSynchronizing", /*BOOLEAN*/ 2, obj.isSynchronizingAttr);
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);

return argsList;
}
},
delete: {
sql: "DELETE FROM \"OSUSR_Q3O_LOCAL_SYNC_CONTROL\" WHERE \"Id\" = ?"
},
deleteAll: {
sql: "DELETE FROM \"OSUSR_Q3O_LOCAL_SYNC_CONTROL\""
},
getAllAttributesFromRecord: function (record) {
var obj = record.local_SYNC_CONTROLAttr;
var argsList = new OS.Entities.QueryArgumentsList();
argsList.add("Id", /*LONGINTEGER*/ 4, obj.idAttr);
argsList.add("IsSynchronizing", /*BOOLEAN*/ 2, obj.isSynchronizingAttr);

return argsList;
},
hasNullId: function (record) {
var obj = record.local_SYNC_CONTROLAttr;
return false;

},
getIdFromRecord: function (record) {
var obj = record.local_SYNC_CONTROLAttr;
return obj.idAttr;

}
};
var moduleKey = "6f4a0c94-4115-4bb8-b396-1a3c7431c654";
App_Config_MBPModel.entities = {
Local_APP_CONFIG: new OS.Entities.Entity(OS.Entities.webSQLStorageInstance, infoLocal_APP_CONFIG, moduleKey),
Local_SYNC_CONTROL: new OS.Entities.Entity(OS.Entities.webSQLStorageInstance, infoLocal_SYNC_CONTROL, moduleKey)
};
return {
init: function (runner) {
return OS.Entities.webSQLStorageInstance.initModule([infoLocal_APP_CONFIG, infoLocal_SYNC_CONTROL], runner, moduleKey);
},
switch: function (runner) {
return OS.Entities.webSQLStorageInstance.switchModule(runner, moduleKey);
}
};
});
