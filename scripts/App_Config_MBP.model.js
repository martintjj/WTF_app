define("App_Config_MBP.model$ConfigRecord", ["exports", "OutSystems", "App_Config.model", "App_Config_MBP.model", "App_Config.model$ConfigRec", "App_Config_MBP.referencesHealth", "App_Config_MBP.referencesHealth$App_Config"], function (exports, OutSystems, App_ConfigModel, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var ConfigRecord = (function (_super) {
__extends(ConfigRecord, _super);
function ConfigRecord(defaults) {
_super.apply(this, arguments);
}
ConfigRecord.attributesToDeclare = function () {
return [
this.attr("Config", "configAttr", "Config", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new App_ConfigModel.ConfigRec());
}, App_ConfigModel.ConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
ConfigRecord.fromStructure = function (str) {
return new ConfigRecord(new ConfigRecord.RecordClass({
configAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConfigRecord.IsAnonymousRecord = true;
ConfigRecord.UniqueId = "23156160-360c-6575-b79d-77fca5c2ac80";
ConfigRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ConfigRecord.init();
return ConfigRecord;
})(OS.DataTypes.GenericRecord);
App_Config_MBPModel.ConfigRecord = ConfigRecord;

});
define("App_Config_MBP.model$Local_SYNC_CONTROLRec", ["exports", "OutSystems", "App_Config_MBP.model"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_SYNC_CONTROLRec = (function (_super) {
__extends(Local_SYNC_CONTROLRec, _super);
function Local_SYNC_CONTROLRec(defaults) {
_super.apply(this, arguments);
}
Local_SYNC_CONTROLRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("IsSynchronizing", "isSynchronizingAttr", "IsSynchronizing", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
Local_SYNC_CONTROLRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Local_SYNC_CONTROLRec.init();
return Local_SYNC_CONTROLRec;
})(OS.DataTypes.GenericRecord);
App_Config_MBPModel.Local_SYNC_CONTROLRec = Local_SYNC_CONTROLRec;

});
define("App_Config_MBP.model$Local_SYNC_CONTROLRecord", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$Local_SYNC_CONTROLRec"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_SYNC_CONTROLRecord = (function (_super) {
__extends(Local_SYNC_CONTROLRecord, _super);
function Local_SYNC_CONTROLRecord(defaults) {
_super.apply(this, arguments);
}
Local_SYNC_CONTROLRecord.attributesToDeclare = function () {
return [
this.attr("Local_SYNC_CONTROL", "local_SYNC_CONTROLAttr", "Local_SYNC_CONTROL", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new App_Config_MBPModel.Local_SYNC_CONTROLRec());
}, App_Config_MBPModel.Local_SYNC_CONTROLRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_SYNC_CONTROLRecord.fromStructure = function (str) {
return new Local_SYNC_CONTROLRecord(new Local_SYNC_CONTROLRecord.RecordClass({
local_SYNC_CONTROLAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_SYNC_CONTROLRecord.IsAnonymousRecord = true;
Local_SYNC_CONTROLRecord.UniqueId = "6f866be9-133e-db6e-03b2-7f1b09a468fd";
Local_SYNC_CONTROLRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_SYNC_CONTROLRecord.init();
return Local_SYNC_CONTROLRecord;
})(OS.DataTypes.GenericRecord);
App_Config_MBPModel.Local_SYNC_CONTROLRecord = Local_SYNC_CONTROLRecord;

});
define("App_Config_MBP.model$Local_SYNC_CONTROLRecordList", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$Local_SYNC_CONTROLRecord"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_SYNC_CONTROLRecordList = (function (_super) {
__extends(Local_SYNC_CONTROLRecordList, _super);
function Local_SYNC_CONTROLRecordList(defaults) {
_super.apply(this, arguments);
}
Local_SYNC_CONTROLRecordList.RecordType = App_Config_MBPModel.Local_SYNC_CONTROLRecord;
return Local_SYNC_CONTROLRecordList;
})(OS.DataTypes.GenericRecordList);
App_Config_MBPModel.Local_SYNC_CONTROLRecordList = Local_SYNC_CONTROLRecordList;

});
define("App_Config_MBP.model$Local_APP_CONFIGRec", ["exports", "OutSystems", "App_Config_MBP.model"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_APP_CONFIGRec = (function (_super) {
__extends(Local_APP_CONFIGRec, _super);
function Local_APP_CONFIGRec(defaults) {
_super.apply(this, arguments);
}
Local_APP_CONFIGRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Application", "applicationAttr", "Application", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Key", "keyAttr", "Key", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Local_APP_CONFIGRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Local_APP_CONFIGRec.init();
return Local_APP_CONFIGRec;
})(OS.DataTypes.GenericRecord);
App_Config_MBPModel.Local_APP_CONFIGRec = Local_APP_CONFIGRec;

});
define("App_Config_MBP.model$Local_APP_CONFIGRecord", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$Local_APP_CONFIGRec"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_APP_CONFIGRecord = (function (_super) {
__extends(Local_APP_CONFIGRecord, _super);
function Local_APP_CONFIGRecord(defaults) {
_super.apply(this, arguments);
}
Local_APP_CONFIGRecord.attributesToDeclare = function () {
return [
this.attr("Local_APP_CONFIG", "local_APP_CONFIGAttr", "Local_APP_CONFIG", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new App_Config_MBPModel.Local_APP_CONFIGRec());
}, App_Config_MBPModel.Local_APP_CONFIGRec)
].concat(_super.attributesToDeclare.call(this));
};
Local_APP_CONFIGRecord.fromStructure = function (str) {
return new Local_APP_CONFIGRecord(new Local_APP_CONFIGRecord.RecordClass({
local_APP_CONFIGAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Local_APP_CONFIGRecord.IsAnonymousRecord = true;
Local_APP_CONFIGRecord.UniqueId = "78e6254b-e2fd-2f08-d7cb-37b4ff53d392";
Local_APP_CONFIGRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Local_APP_CONFIGRecord.init();
return Local_APP_CONFIGRecord;
})(OS.DataTypes.GenericRecord);
App_Config_MBPModel.Local_APP_CONFIGRecord = Local_APP_CONFIGRecord;

});
define("App_Config_MBP.model$Local_SYNC_CONTROLList", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$Local_SYNC_CONTROLRec"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_SYNC_CONTROLList = (function (_super) {
__extends(Local_SYNC_CONTROLList, _super);
function Local_SYNC_CONTROLList(defaults) {
_super.apply(this, arguments);
}
Local_SYNC_CONTROLList.RecordType = App_Config_MBPModel.Local_SYNC_CONTROLRec;
return Local_SYNC_CONTROLList;
})(OS.DataTypes.GenericRecordList);
App_Config_MBPModel.Local_SYNC_CONTROLList = Local_SYNC_CONTROLList;

});
define("App_Config_MBP.model$Local_APP_CONFIGRecordList", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$Local_APP_CONFIGRecord"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_APP_CONFIGRecordList = (function (_super) {
__extends(Local_APP_CONFIGRecordList, _super);
function Local_APP_CONFIGRecordList(defaults) {
_super.apply(this, arguments);
}
Local_APP_CONFIGRecordList.RecordType = App_Config_MBPModel.Local_APP_CONFIGRecord;
return Local_APP_CONFIGRecordList;
})(OS.DataTypes.GenericRecordList);
App_Config_MBPModel.Local_APP_CONFIGRecordList = Local_APP_CONFIGRecordList;

});
define("App_Config_MBP.model$ConfigRecordList", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$ConfigRecord"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var ConfigRecordList = (function (_super) {
__extends(ConfigRecordList, _super);
function ConfigRecordList(defaults) {
_super.apply(this, arguments);
}
ConfigRecordList.RecordType = App_Config_MBPModel.ConfigRecord;
return ConfigRecordList;
})(OS.DataTypes.GenericRecordList);
App_Config_MBPModel.ConfigRecordList = ConfigRecordList;

});
define("App_Config_MBP.model$Local_APP_CONFIGList", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.model$Local_APP_CONFIGRec"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var Local_APP_CONFIGList = (function (_super) {
__extends(Local_APP_CONFIGList, _super);
function Local_APP_CONFIGList(defaults) {
_super.apply(this, arguments);
}
Local_APP_CONFIGList.RecordType = App_Config_MBPModel.Local_APP_CONFIGRec;
return Local_APP_CONFIGList;
})(OS.DataTypes.GenericRecordList);
App_Config_MBPModel.Local_APP_CONFIGList = Local_APP_CONFIGList;

});
define("App_Config_MBP.model$ConfigList", ["exports", "OutSystems", "App_Config.model", "App_Config_MBP.model", "App_Config.model$ConfigRec", "App_Config_MBP.referencesHealth", "App_Config_MBP.referencesHealth$App_Config"], function (exports, OutSystems, App_ConfigModel, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var ConfigList = (function (_super) {
__extends(ConfigList, _super);
function ConfigList(defaults) {
_super.apply(this, arguments);
}
ConfigList.RecordType = App_ConfigModel.ConfigRec;
return ConfigList;
})(OS.DataTypes.GenericRecordList);
App_Config_MBPModel.ConfigList = ConfigList;

});
define("App_Config_MBP.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var App_Config_MBPModel = exports;
Object.defineProperty(App_Config_MBPModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["6f4a0c94-4115-4bb8-b396-1a3c7431c654"];
}
});

App_Config_MBPModel.staticEntities = {};
});
