define("WhatsNewMobile.model$AnimationTypeRecord", ["exports", "OutSystems", "MobilePatterns.model", "WhatsNewMobile.model", "MobilePatterns.model$AnimationTypeRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecord = (function (_super) {
__extends(AnimationTypeRecord, _super);
function AnimationTypeRecord(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecord.attributesToDeclare = function () {
return [
this.attr("AnimationType", "animationTypeAttr", "AnimationType", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobilePatternsModel.AnimationTypeRec());
}, MobilePatternsModel.AnimationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
AnimationTypeRecord.fromStructure = function (str) {
return new AnimationTypeRecord(new AnimationTypeRecord.RecordClass({
animationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AnimationTypeRecord.IsAnonymousRecord = true;
AnimationTypeRecord.UniqueId = "78b6d6ed-7d52-800a-8a68-e7d796ec6850";
AnimationTypeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AnimationTypeRecord.init();
return AnimationTypeRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.AnimationTypeRecord = AnimationTypeRecord;

});
define("WhatsNewMobile.model$AnimationTypeRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$AnimationTypeRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var AnimationTypeRecordList = (function (_super) {
__extends(AnimationTypeRecordList, _super);
function AnimationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeRecordList.RecordType = WhatsNewMobileModel.AnimationTypeRecord;
return AnimationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.AnimationTypeRecordList = AnimationTypeRecordList;

});
define("WhatsNewMobile.model$MenuActionRecord", ["exports", "OutSystems", "MobilePatterns.model", "WhatsNewMobile.model", "MobilePatterns.model$MenuActionRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var MenuActionRecord = (function (_super) {
__extends(MenuActionRecord, _super);
function MenuActionRecord(defaults) {
_super.apply(this, arguments);
}
MenuActionRecord.attributesToDeclare = function () {
return [
this.attr("MenuAction", "menuActionAttr", "MenuAction", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobilePatternsModel.MenuActionRec());
}, MobilePatternsModel.MenuActionRec)
].concat(_super.attributesToDeclare.call(this));
};
MenuActionRecord.fromStructure = function (str) {
return new MenuActionRecord(new MenuActionRecord.RecordClass({
menuActionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
MenuActionRecord.IsAnonymousRecord = true;
MenuActionRecord.UniqueId = "954cd123-1210-e70f-33f1-84017bf580ac";
MenuActionRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
MenuActionRecord.init();
return MenuActionRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.MenuActionRecord = MenuActionRecord;

});
define("WhatsNewMobile.model$MenuActionRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$MenuActionRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.RecordType = WhatsNewMobileModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.MenuActionRecordList = MenuActionRecordList;

});
define("WhatsNewMobile.model$ErrorList", ["exports", "OutSystems", "CommonPlugin.model", "WhatsNewMobile.model", "CommonPlugin.model$ErrorRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.RecordType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.ErrorList = ErrorList;

});
define("WhatsNewMobile.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems", "CommonPlugin.model", "WhatsNewMobile.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecord = (function (_super) {
__extends(Mobile_OperatingSystemRecord, _super);
function Mobile_OperatingSystemRecord(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecord.attributesToDeclare = function () {
return [
this.attr("Mobile_OperatingSystem", "mobile_OperatingSystemAttr", "Mobile_OperatingSystem", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.Mobile_OperatingSystemRec());
}, CommonPluginModel.Mobile_OperatingSystemRec)
].concat(_super.attributesToDeclare.call(this));
};
Mobile_OperatingSystemRecord.fromStructure = function (str) {
return new Mobile_OperatingSystemRecord(new Mobile_OperatingSystemRecord.RecordClass({
mobile_OperatingSystemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Mobile_OperatingSystemRecord.IsAnonymousRecord = true;
Mobile_OperatingSystemRecord.UniqueId = "f56bdc75-0614-38d3-e901-3cdbe4073c38";
Mobile_OperatingSystemRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Mobile_OperatingSystemRecord.init();
return Mobile_OperatingSystemRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("WhatsNewMobile.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.RecordType = WhatsNewMobileModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("WhatsNewMobile.model$MenuActionList", ["exports", "OutSystems", "MobilePatterns.model", "WhatsNewMobile.model", "MobilePatterns.model$MenuActionRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.RecordType = MobilePatternsModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.MenuActionList = MenuActionList;

});
define("WhatsNewMobile.model$PluginLicenseRecord", ["exports", "OutSystems", "CommonPlugin.model", "WhatsNewMobile.model", "CommonPlugin.model$PluginLicenseRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecord = (function (_super) {
__extends(PluginLicenseRecord, _super);
function PluginLicenseRecord(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecord.attributesToDeclare = function () {
return [
this.attr("PluginLicense", "pluginLicenseAttr", "PluginLicense", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.PluginLicenseRec());
}, CommonPluginModel.PluginLicenseRec)
].concat(_super.attributesToDeclare.call(this));
};
PluginLicenseRecord.fromStructure = function (str) {
return new PluginLicenseRecord(new PluginLicenseRecord.RecordClass({
pluginLicenseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PluginLicenseRecord.IsAnonymousRecord = true;
PluginLicenseRecord.UniqueId = "4f3ba093-4c73-508e-cfa6-9aca510d9587";
PluginLicenseRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PluginLicenseRecord.init();
return PluginLicenseRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.PluginLicenseRecord = PluginLicenseRecord;

});
define("WhatsNewMobile.model$WhatsNewCardInfo_V2List", ["exports", "OutSystems", "WhatsNew.model", "WhatsNewMobile.model", "WhatsNew.model$WhatsNewCardInfo_V2Rec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$WhatsNew"], function (exports, OutSystems, WhatsNewModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfo_V2List = (function (_super) {
__extends(WhatsNewCardInfo_V2List, _super);
function WhatsNewCardInfo_V2List(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfo_V2List.RecordType = WhatsNewModel.WhatsNewCardInfo_V2Rec;
return WhatsNewCardInfo_V2List;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.WhatsNewCardInfo_V2List = WhatsNewCardInfo_V2List;

});
define("WhatsNewMobile.model$TYPEList", ["exports", "OutSystems", "WhatsNew.model", "WhatsNewMobile.model", "WhatsNew.model$TYPERec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$WhatsNew"], function (exports, OutSystems, WhatsNewModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var TYPEList = (function (_super) {
__extends(TYPEList, _super);
function TYPEList(defaults) {
_super.apply(this, arguments);
}
TYPEList.RecordType = WhatsNewModel.TYPERec;
return TYPEList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.TYPEList = TYPEList;

});
define("WhatsNewMobile.model$ErrorRecord", ["exports", "OutSystems", "CommonPlugin.model", "WhatsNewMobile.model", "CommonPlugin.model$ErrorRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var ErrorRecord = (function (_super) {
__extends(ErrorRecord, _super);
function ErrorRecord(defaults) {
_super.apply(this, arguments);
}
ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CommonPluginModel.ErrorRec());
}, CommonPluginModel.ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
ErrorRecord.fromStructure = function (str) {
return new ErrorRecord(new ErrorRecord.RecordClass({
errorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ErrorRecord.IsAnonymousRecord = true;
ErrorRecord.UniqueId = "cbbd7d57-66e1-86ff-28ab-3b75adf75b93";
ErrorRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ErrorRecord.init();
return ErrorRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.ErrorRecord = ErrorRecord;

});
define("WhatsNewMobile.model$ErrorRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$ErrorRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.RecordType = WhatsNewMobileModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.ErrorRecordList = ErrorRecordList;

});
define("WhatsNewMobile.model$UserRecord", ["exports", "OutSystems", "ServiceCenter.model", "WhatsNewMobile.model", "ServiceCenter.model$UserRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ServiceCenterModel.UserRec());
}, ServiceCenterModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord.IsAnonymousRecord = true;
UserRecord.UniqueId = "ced01335-8a82-a813-f1d9-a5108f17ce79";
UserRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.UserRecord = UserRecord;

});
define("WhatsNewMobile.model$UserRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$UserRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.RecordType = WhatsNewMobileModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.UserRecordList = UserRecordList;

});
define("WhatsNewMobile.model$WhatsNewCardInfoRecord", ["exports", "OutSystems", "WhatsNew.model", "WhatsNewMobile.model", "WhatsNew.model$WhatsNewCardInfoRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$WhatsNew"], function (exports, OutSystems, WhatsNewModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfoRecord = (function (_super) {
__extends(WhatsNewCardInfoRecord, _super);
function WhatsNewCardInfoRecord(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfoRecord.attributesToDeclare = function () {
return [
this.attr("WhatsNewCardInfo", "whatsNewCardInfoAttr", "WhatsNewCardInfo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WhatsNewModel.WhatsNewCardInfoRec());
}, WhatsNewModel.WhatsNewCardInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
WhatsNewCardInfoRecord.fromStructure = function (str) {
return new WhatsNewCardInfoRecord(new WhatsNewCardInfoRecord.RecordClass({
whatsNewCardInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WhatsNewCardInfoRecord.IsAnonymousRecord = true;
WhatsNewCardInfoRecord.UniqueId = "8dc26c85-74ae-f53e-d7c8-4cea18831d41";
WhatsNewCardInfoRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
WhatsNewCardInfoRecord.init();
return WhatsNewCardInfoRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.WhatsNewCardInfoRecord = WhatsNewCardInfoRecord;

});
define("WhatsNewMobile.model$WhatsNewCardInfoList", ["exports", "OutSystems", "WhatsNew.model", "WhatsNewMobile.model", "WhatsNew.model$WhatsNewCardInfoRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$WhatsNew"], function (exports, OutSystems, WhatsNewModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfoList = (function (_super) {
__extends(WhatsNewCardInfoList, _super);
function WhatsNewCardInfoList(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfoList.RecordType = WhatsNewModel.WhatsNewCardInfoRec;
return WhatsNewCardInfoList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.WhatsNewCardInfoList = WhatsNewCardInfoList;

});
define("WhatsNewMobile.model$AnimationTypeList", ["exports", "OutSystems", "MobilePatterns.model", "WhatsNewMobile.model", "MobilePatterns.model$AnimationTypeRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var AnimationTypeList = (function (_super) {
__extends(AnimationTypeList, _super);
function AnimationTypeList(defaults) {
_super.apply(this, arguments);
}
AnimationTypeList.RecordType = MobilePatternsModel.AnimationTypeRec;
return AnimationTypeList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.AnimationTypeList = AnimationTypeList;

});
define("WhatsNewMobile.model$WhatsNewCardInfo_V2Record", ["exports", "OutSystems", "WhatsNew.model", "WhatsNewMobile.model", "WhatsNew.model$WhatsNewCardInfo_V2Rec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$WhatsNew"], function (exports, OutSystems, WhatsNewModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfo_V2Record = (function (_super) {
__extends(WhatsNewCardInfo_V2Record, _super);
function WhatsNewCardInfo_V2Record(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfo_V2Record.attributesToDeclare = function () {
return [
this.attr("WhatsNewCardInfo_V2", "whatsNewCardInfo_V2Attr", "WhatsNewCardInfo_V2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WhatsNewModel.WhatsNewCardInfo_V2Rec());
}, WhatsNewModel.WhatsNewCardInfo_V2Rec)
].concat(_super.attributesToDeclare.call(this));
};
WhatsNewCardInfo_V2Record.fromStructure = function (str) {
return new WhatsNewCardInfo_V2Record(new WhatsNewCardInfo_V2Record.RecordClass({
whatsNewCardInfo_V2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WhatsNewCardInfo_V2Record.IsAnonymousRecord = true;
WhatsNewCardInfo_V2Record.UniqueId = "c4e881be-5830-312f-cc55-3927a868854d";
WhatsNewCardInfo_V2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
WhatsNewCardInfo_V2Record.init();
return WhatsNewCardInfo_V2Record;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.WhatsNewCardInfo_V2Record = WhatsNewCardInfo_V2Record;

});
define("WhatsNewMobile.model$WhatsNewCardInfo_V2RecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$WhatsNewCardInfo_V2Record"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfo_V2RecordList = (function (_super) {
__extends(WhatsNewCardInfo_V2RecordList, _super);
function WhatsNewCardInfo_V2RecordList(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfo_V2RecordList.RecordType = WhatsNewMobileModel.WhatsNewCardInfo_V2Record;
return WhatsNewCardInfo_V2RecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.WhatsNewCardInfo_V2RecordList = WhatsNewCardInfo_V2RecordList;

});
define("WhatsNewMobile.model$TYPERecord", ["exports", "OutSystems", "WhatsNew.model", "WhatsNewMobile.model", "WhatsNew.model$TYPERec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$WhatsNew"], function (exports, OutSystems, WhatsNewModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var TYPERecord = (function (_super) {
__extends(TYPERecord, _super);
function TYPERecord(defaults) {
_super.apply(this, arguments);
}
TYPERecord.attributesToDeclare = function () {
return [
this.attr("TYPE", "tYPEAttr", "TYPE", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WhatsNewModel.TYPERec());
}, WhatsNewModel.TYPERec)
].concat(_super.attributesToDeclare.call(this));
};
TYPERecord.fromStructure = function (str) {
return new TYPERecord(new TYPERecord.RecordClass({
tYPEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TYPERecord.IsAnonymousRecord = true;
TYPERecord.UniqueId = "bbaa8b92-bd9a-b01b-448e-c5b24c91f5e2";
TYPERecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
TYPERecord.init();
return TYPERecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.TYPERecord = TYPERecord;

});
define("WhatsNewMobile.model$PluginLicenseList", ["exports", "OutSystems", "CommonPlugin.model", "WhatsNewMobile.model", "CommonPlugin.model$PluginLicenseRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var PluginLicenseList = (function (_super) {
__extends(PluginLicenseList, _super);
function PluginLicenseList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseList.RecordType = CommonPluginModel.PluginLicenseRec;
return PluginLicenseList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.PluginLicenseList = PluginLicenseList;

});
define("WhatsNewMobile.model$SpeedRecord", ["exports", "OutSystems", "MobilePatterns.model", "WhatsNewMobile.model", "MobilePatterns.model$SpeedRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var SpeedRecord = (function (_super) {
__extends(SpeedRecord, _super);
function SpeedRecord(defaults) {
_super.apply(this, arguments);
}
SpeedRecord.attributesToDeclare = function () {
return [
this.attr("Speed", "speedAttr", "Speed", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobilePatternsModel.SpeedRec());
}, MobilePatternsModel.SpeedRec)
].concat(_super.attributesToDeclare.call(this));
};
SpeedRecord.fromStructure = function (str) {
return new SpeedRecord(new SpeedRecord.RecordClass({
speedAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SpeedRecord.IsAnonymousRecord = true;
SpeedRecord.UniqueId = "d15ba8cc-56cc-5ee5-8bd8-acaffd974239";
SpeedRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
SpeedRecord.init();
return SpeedRecord;
})(OS.DataTypes.GenericRecord);
WhatsNewMobileModel.SpeedRecord = SpeedRecord;

});
define("WhatsNewMobile.model$TYPERecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$TYPERecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var TYPERecordList = (function (_super) {
__extends(TYPERecordList, _super);
function TYPERecordList(defaults) {
_super.apply(this, arguments);
}
TYPERecordList.RecordType = WhatsNewMobileModel.TYPERecord;
return TYPERecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.TYPERecordList = TYPERecordList;

});
define("WhatsNewMobile.model$SpeedList", ["exports", "OutSystems", "MobilePatterns.model", "WhatsNewMobile.model", "MobilePatterns.model$SpeedRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var SpeedList = (function (_super) {
__extends(SpeedList, _super);
function SpeedList(defaults) {
_super.apply(this, arguments);
}
SpeedList.RecordType = MobilePatternsModel.SpeedRec;
return SpeedList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.SpeedList = SpeedList;

});
define("WhatsNewMobile.model$UserList", ["exports", "OutSystems", "ServiceCenter.model", "WhatsNewMobile.model", "ServiceCenter.model$UserRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.RecordType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.UserList = UserList;

});
define("WhatsNewMobile.model$SpeedRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$SpeedRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var SpeedRecordList = (function (_super) {
__extends(SpeedRecordList, _super);
function SpeedRecordList(defaults) {
_super.apply(this, arguments);
}
SpeedRecordList.RecordType = WhatsNewMobileModel.SpeedRecord;
return SpeedRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.SpeedRecordList = SpeedRecordList;

});
define("WhatsNewMobile.model$PluginLicenseRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$PluginLicenseRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var PluginLicenseRecordList = (function (_super) {
__extends(PluginLicenseRecordList, _super);
function PluginLicenseRecordList(defaults) {
_super.apply(this, arguments);
}
PluginLicenseRecordList.RecordType = WhatsNewMobileModel.PluginLicenseRecord;
return PluginLicenseRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.PluginLicenseRecordList = PluginLicenseRecordList;

});
define("WhatsNewMobile.model$WhatsNewCardInfoRecordList", ["exports", "OutSystems", "WhatsNewMobile.model", "WhatsNewMobile.model$WhatsNewCardInfoRecord"], function (exports, OutSystems, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfoRecordList = (function (_super) {
__extends(WhatsNewCardInfoRecordList, _super);
function WhatsNewCardInfoRecordList(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfoRecordList.RecordType = WhatsNewMobileModel.WhatsNewCardInfoRecord;
return WhatsNewCardInfoRecordList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.WhatsNewCardInfoRecordList = WhatsNewCardInfoRecordList;

});
define("WhatsNewMobile.model$Mobile_OperatingSystemList", ["exports", "OutSystems", "CommonPlugin.model", "WhatsNewMobile.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "WhatsNewMobile.referencesHealth", "WhatsNewMobile.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, WhatsNewMobileModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.RecordType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
WhatsNewMobileModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("WhatsNewMobile.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var WhatsNewMobileModel = exports;
Object.defineProperty(WhatsNewMobileModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["b89976de-02bc-414b-810e-06bab5a1253a"];
}
});

WhatsNewMobileModel.staticEntities = {};
WhatsNewMobileModel.staticEntities.tYPE = {};
var getTYPERecord = function (record) {
return OS.ApplicationInfo.getModules()["48d72da6-4ee1-4ef1-a8c9-9d2f16de5722"].staticEntities["7429f565-8afd-4cce-bf58-25408ddfa261"][record];
};
Object.defineProperty(WhatsNewMobileModel.staticEntities.tYPE, "whatsNew", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getTYPERecord("6568aa9d-73e1-48ad-b408-70b2ae7126f6"));
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.tYPE, "landingPage", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getTYPERecord("96fbfd17-3def-41e2-94bc-1fa44bff6292"));
}
});

WhatsNewMobileModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(WhatsNewMobileModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

WhatsNewMobileModel.staticEntities.animationType = {};
var getAnimationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0463d449-6834-40d5-817b-3d74d1a71bb2"][record];
};
Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "topToBottom", {
get: function () {
return getAnimationTypeRecord("2d5a98f9-381b-4ff8-9219-085bc35dfc44");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "bounce", {
get: function () {
return getAnimationTypeRecord("3c3ad352-52fc-43c5-ae3a-f8d651bfa094");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "fadeIn", {
get: function () {
return getAnimationTypeRecord("69814f09-c20b-4d55-b06a-7231a5515d2c");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "scaleDown", {
get: function () {
return getAnimationTypeRecord("7d8fd3a6-eac4-4ae8-b865-18f5711814cb");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "scale", {
get: function () {
return getAnimationTypeRecord("8a8e0e8b-0e5a-407c-9739-4942e1c708e8");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "spinner", {
get: function () {
return getAnimationTypeRecord("b1e2a22f-cd5a-49a8-83e2-a82471745aea");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "bottomToTop", {
get: function () {
return getAnimationTypeRecord("b71cef18-b0ee-4e9b-8b98-5700b6c6b9e4");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "rightToLeft", {
get: function () {
return getAnimationTypeRecord("b7a58aaa-e1f6-4bbb-9557-5fb4742ef542");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.animationType, "leftToRight", {
get: function () {
return getAnimationTypeRecord("f4c21a73-5f0c-4d9e-a9e6-7053b68c2cea");
}
});

WhatsNewMobileModel.staticEntities.speed = {};
var getSpeedRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["0a5cc4ae-b54f-4ea3-9ace-9f49c7724606"][record];
};
Object.defineProperty(WhatsNewMobileModel.staticEntities.speed, "fast", {
get: function () {
return getSpeedRecord("4fb2b6d9-70ff-415d-a09d-4ee05adda5c4");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.speed, "normal", {
get: function () {
return getSpeedRecord("93b9215f-8fb1-4f08-8555-9b0125b18f51");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.speed, "slow", {
get: function () {
return getSpeedRecord("b2c67d31-506d-42e7-890e-0e4f29234ae6");
}
});

WhatsNewMobileModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(WhatsNewMobileModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(WhatsNewMobileModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

});
