define("CustomerNotifications_MBLOCKS.model$NotificationMessageListList", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$NotificationMessageListRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationMessageListList = (function (_super) {
__extends(NotificationMessageListList, _super);
function NotificationMessageListList(defaults) {
_super.apply(this, arguments);
}
NotificationMessageListList.RecordType = CustomerNotifications_BPModel.NotificationMessageListRec;
return NotificationMessageListList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.NotificationMessageListList = NotificationMessageListList;

});
define("CustomerNotifications_MBLOCKS.model$ICON_CLASS2Record", ["exports", "OutSystems", "MobileUIWidgets.model", "CustomerNotifications_MBLOCKS.model", "MobileUIWidgets.model$ICON_CLASSRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASS2Record = (function (_super) {
__extends(ICON_CLASS2Record, _super);
function ICON_CLASS2Record(defaults) {
_super.apply(this, arguments);
}
ICON_CLASS2Record.attributesToDeclare = function () {
return [
this.attr("ICON_CLASS2", "iCON_CLASSAttr", "ICON_CLASS2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.ICON_CLASSRec());
}, MobileUIWidgetsModel.ICON_CLASSRec)
].concat(_super.attributesToDeclare.call(this));
};
ICON_CLASS2Record.fromStructure = function (str) {
return new ICON_CLASS2Record(new ICON_CLASS2Record.RecordClass({
iCON_CLASSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ICON_CLASS2Record.IsAnonymousRecord = true;
ICON_CLASS2Record.UniqueId = "23a73a44-82ba-068c-0bd7-39ce6861e6e4";
ICON_CLASS2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ICON_CLASS2Record.init();
return ICON_CLASS2Record;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.ICON_CLASS2Record = ICON_CLASS2Record;

});
define("CustomerNotifications_MBLOCKS.model$ICON_CLASS2RecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$ICON_CLASS2Record"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASS2RecordList = (function (_super) {
__extends(ICON_CLASS2RecordList, _super);
function ICON_CLASS2RecordList(defaults) {
_super.apply(this, arguments);
}
ICON_CLASS2RecordList.RecordType = CustomerNotifications_MBLOCKSModel.ICON_CLASS2Record;
return ICON_CLASS2RecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.ICON_CLASS2RecordList = ICON_CLASS2RecordList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationTypeRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationTypeRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationTypeRecord = (function (_super) {
__extends(InboxNotificationTypeRecord, _super);
function InboxNotificationTypeRecord(defaults) {
_super.apply(this, arguments);
}
InboxNotificationTypeRecord.attributesToDeclare = function () {
return [
this.attr("InboxNotificationType", "inboxNotificationTypeAttr", "InboxNotificationType", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.InboxNotificationTypeRec());
}, CustomerNotifications_BPModel.InboxNotificationTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
InboxNotificationTypeRecord.fromStructure = function (str) {
return new InboxNotificationTypeRecord(new InboxNotificationTypeRecord.RecordClass({
inboxNotificationTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InboxNotificationTypeRecord.IsAnonymousRecord = true;
InboxNotificationTypeRecord.UniqueId = "bfa43d57-8b16-0182-d006-629157cf80ab";
InboxNotificationTypeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
InboxNotificationTypeRecord.init();
return InboxNotificationTypeRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.InboxNotificationTypeRecord = InboxNotificationTypeRecord;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationTypeRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$InboxNotificationTypeRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationTypeRecordList = (function (_super) {
__extends(InboxNotificationTypeRecordList, _super);
function InboxNotificationTypeRecordList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationTypeRecordList.RecordType = CustomerNotifications_MBLOCKSModel.InboxNotificationTypeRecord;
return InboxNotificationTypeRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationTypeRecordList = InboxNotificationTypeRecordList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationInfoStatusNotificationRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationInfoStatusRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP", "CustomerNotifications_BP.model$NotificationRec"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationInfoStatusNotificationRecord = (function (_super) {
__extends(InboxNotificationInfoStatusNotificationRecord, _super);
function InboxNotificationInfoStatusNotificationRecord(defaults) {
_super.apply(this, arguments);
}
InboxNotificationInfoStatusNotificationRecord.attributesToDeclare = function () {
return [
this.attr("InboxNotificationInfoStatus", "inboxNotificationInfoStatusAttr", "InboxNotificationInfoStatus", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.InboxNotificationInfoStatusRec());
}, CustomerNotifications_BPModel.InboxNotificationInfoStatusRec), 
this.attr("Notification", "notificationAttr", "Notification", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.NotificationRec());
}, CustomerNotifications_BPModel.NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
InboxNotificationInfoStatusNotificationRecord.IsAnonymousRecord = true;
InboxNotificationInfoStatusNotificationRecord.UniqueId = "ae7a93b6-f8b4-6825-e332-414c32d91604";
InboxNotificationInfoStatusNotificationRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
InboxNotificationInfoStatusNotificationRecord.init();
return InboxNotificationInfoStatusNotificationRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.InboxNotificationInfoStatusNotificationRecord = InboxNotificationInfoStatusNotificationRecord;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationInfoStatusNotificationRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$InboxNotificationInfoStatusNotificationRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationInfoStatusNotificationRecordList = (function (_super) {
__extends(InboxNotificationInfoStatusNotificationRecordList, _super);
function InboxNotificationInfoStatusNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationInfoStatusNotificationRecordList.RecordType = CustomerNotifications_MBLOCKSModel.InboxNotificationInfoStatusNotificationRecord;
return InboxNotificationInfoStatusNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationInfoStatusNotificationRecordList = InboxNotificationInfoStatusNotificationRecordList;

});
define("CustomerNotifications_MBLOCKS.model$ICON_SIZE2List", ["exports", "OutSystems", "MobileUIWidgets.model", "CustomerNotifications_MBLOCKS.model", "MobileUIWidgets.model$ICON_SIZERec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_SIZE2List = (function (_super) {
__extends(ICON_SIZE2List, _super);
function ICON_SIZE2List(defaults) {
_super.apply(this, arguments);
}
ICON_SIZE2List.RecordType = MobileUIWidgetsModel.ICON_SIZERec;
return ICON_SIZE2List;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.ICON_SIZE2List = ICON_SIZE2List;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationInfoStatusRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationInfoStatusRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationInfoStatusRecord = (function (_super) {
__extends(InboxNotificationInfoStatusRecord, _super);
function InboxNotificationInfoStatusRecord(defaults) {
_super.apply(this, arguments);
}
InboxNotificationInfoStatusRecord.attributesToDeclare = function () {
return [
this.attr("InboxNotificationInfoStatus", "inboxNotificationInfoStatusAttr", "InboxNotificationInfoStatus", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.InboxNotificationInfoStatusRec());
}, CustomerNotifications_BPModel.InboxNotificationInfoStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
InboxNotificationInfoStatusRecord.fromStructure = function (str) {
return new InboxNotificationInfoStatusRecord(new InboxNotificationInfoStatusRecord.RecordClass({
inboxNotificationInfoStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InboxNotificationInfoStatusRecord.IsAnonymousRecord = true;
InboxNotificationInfoStatusRecord.UniqueId = "2afe14fd-b448-1e5d-0c7f-a642ea442583";
InboxNotificationInfoStatusRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
InboxNotificationInfoStatusRecord.init();
return InboxNotificationInfoStatusRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.InboxNotificationInfoStatusRecord = InboxNotificationInfoStatusRecord;

});
define("CustomerNotifications_MBLOCKS.model$MenuActionRecord", ["exports", "OutSystems", "MobilePatterns.model", "CustomerNotifications_MBLOCKS.model", "MobilePatterns.model$MenuActionRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, CustomerNotifications_MBLOCKSModel) {
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
CustomerNotifications_MBLOCKSModel.MenuActionRecord = MenuActionRecord;

});
define("CustomerNotifications_MBLOCKS.model$MenuActionRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$MenuActionRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var MenuActionRecordList = (function (_super) {
__extends(MenuActionRecordList, _super);
function MenuActionRecordList(defaults) {
_super.apply(this, arguments);
}
MenuActionRecordList.RecordType = CustomerNotifications_MBLOCKSModel.MenuActionRecord;
return MenuActionRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.MenuActionRecordList = MenuActionRecordList;

});
define("CustomerNotifications_MBLOCKS.model$NotificationRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$NotificationRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationRecord = (function (_super) {
__extends(NotificationRecord, _super);
function NotificationRecord(defaults) {
_super.apply(this, arguments);
}
NotificationRecord.attributesToDeclare = function () {
return [
this.attr("Notification", "notificationAttr", "Notification", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.NotificationRec());
}, CustomerNotifications_BPModel.NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationRecord.fromStructure = function (str) {
return new NotificationRecord(new NotificationRecord.RecordClass({
notificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationRecord.IsAnonymousRecord = true;
NotificationRecord.UniqueId = "8456aa23-f15f-2333-057b-aee6dddca6ee";
NotificationRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
NotificationRecord.init();
return NotificationRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.NotificationRecord = NotificationRecord;

});
define("CustomerNotifications_MBLOCKS.model$NotificationRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$NotificationRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationRecordList = (function (_super) {
__extends(NotificationRecordList, _super);
function NotificationRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationRecordList.RecordType = CustomerNotifications_MBLOCKSModel.NotificationRecord;
return NotificationRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.NotificationRecordList = NotificationRecordList;

});
define("CustomerNotifications_MBLOCKS.model$ICON_SIZE2Record", ["exports", "OutSystems", "MobileUIWidgets.model", "CustomerNotifications_MBLOCKS.model", "MobileUIWidgets.model$ICON_SIZERec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_SIZE2Record = (function (_super) {
__extends(ICON_SIZE2Record, _super);
function ICON_SIZE2Record(defaults) {
_super.apply(this, arguments);
}
ICON_SIZE2Record.attributesToDeclare = function () {
return [
this.attr("ICON_SIZE2", "iCON_SIZEAttr", "ICON_SIZE2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.ICON_SIZERec());
}, MobileUIWidgetsModel.ICON_SIZERec)
].concat(_super.attributesToDeclare.call(this));
};
ICON_SIZE2Record.fromStructure = function (str) {
return new ICON_SIZE2Record(new ICON_SIZE2Record.RecordClass({
iCON_SIZEAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ICON_SIZE2Record.IsAnonymousRecord = true;
ICON_SIZE2Record.UniqueId = "96e2dead-976a-b4a9-57f5-f6d2f7ab94d5";
ICON_SIZE2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ICON_SIZE2Record.init();
return ICON_SIZE2Record;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.ICON_SIZE2Record = ICON_SIZE2Record;

});
define("CustomerNotifications_MBLOCKS.model$ICON_SIZE2RecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$ICON_SIZE2Record"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_SIZE2RecordList = (function (_super) {
__extends(ICON_SIZE2RecordList, _super);
function ICON_SIZE2RecordList(defaults) {
_super.apply(this, arguments);
}
ICON_SIZE2RecordList.RecordType = CustomerNotifications_MBLOCKSModel.ICON_SIZE2Record;
return ICON_SIZE2RecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.ICON_SIZE2RecordList = ICON_SIZE2RecordList;

});
define("CustomerNotifications_MBLOCKS.model$ColorList", ["exports", "OutSystems", "MobilePatterns.model", "CustomerNotifications_MBLOCKS.model", "MobilePatterns.model$ColorRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ColorList = (function (_super) {
__extends(ColorList, _super);
function ColorList(defaults) {
_super.apply(this, arguments);
}
ColorList.RecordType = MobilePatternsModel.ColorRec;
return ColorList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.ColorList = ColorList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationRecord = (function (_super) {
__extends(InboxNotificationRecord, _super);
function InboxNotificationRecord(defaults) {
_super.apply(this, arguments);
}
InboxNotificationRecord.attributesToDeclare = function () {
return [
this.attr("InboxNotification", "inboxNotificationAttr", "InboxNotification", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.InboxNotificationRec());
}, CustomerNotifications_BPModel.InboxNotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
InboxNotificationRecord.fromStructure = function (str) {
return new InboxNotificationRecord(new InboxNotificationRecord.RecordClass({
inboxNotificationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
InboxNotificationRecord.IsAnonymousRecord = true;
InboxNotificationRecord.UniqueId = "3c4e80f9-c227-5b58-d921-6eb8f0abf1dd";
InboxNotificationRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
InboxNotificationRecord.init();
return InboxNotificationRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.InboxNotificationRecord = InboxNotificationRecord;

});
define("CustomerNotifications_MBLOCKS.model$ICON_CLASS2List", ["exports", "OutSystems", "MobileUIWidgets.model", "CustomerNotifications_MBLOCKS.model", "MobileUIWidgets.model$ICON_CLASSRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASS2List = (function (_super) {
__extends(ICON_CLASS2List, _super);
function ICON_CLASS2List(defaults) {
_super.apply(this, arguments);
}
ICON_CLASS2List.RecordType = MobileUIWidgetsModel.ICON_CLASSRec;
return ICON_CLASS2List;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.ICON_CLASS2List = ICON_CLASS2List;

});
define("CustomerNotifications_MBLOCKS.model$NotificationMessageListRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$NotificationMessageListRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationMessageListRecord = (function (_super) {
__extends(NotificationMessageListRecord, _super);
function NotificationMessageListRecord(defaults) {
_super.apply(this, arguments);
}
NotificationMessageListRecord.attributesToDeclare = function () {
return [
this.attr("NotificationMessageList", "notificationMessageListAttr", "NotificationMessageList", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.NotificationMessageListRec());
}, CustomerNotifications_BPModel.NotificationMessageListRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationMessageListRecord.fromStructure = function (str) {
return new NotificationMessageListRecord(new NotificationMessageListRecord.RecordClass({
notificationMessageListAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationMessageListRecord.IsAnonymousRecord = true;
NotificationMessageListRecord.UniqueId = "fd4004d2-c985-469a-d9c9-c1ddc4b9cba9";
NotificationMessageListRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
NotificationMessageListRecord.init();
return NotificationMessageListRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.NotificationMessageListRecord = NotificationMessageListRecord;

});
define("CustomerNotifications_MBLOCKS.model$NotificationMessageListRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$NotificationMessageListRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationMessageListRecordList = (function (_super) {
__extends(NotificationMessageListRecordList, _super);
function NotificationMessageListRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationMessageListRecordList.RecordType = CustomerNotifications_MBLOCKSModel.NotificationMessageListRecord;
return NotificationMessageListRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.NotificationMessageListRecordList = NotificationMessageListRecordList;

});
define("CustomerNotifications_MBLOCKS.model$MenuActionList", ["exports", "OutSystems", "MobilePatterns.model", "CustomerNotifications_MBLOCKS.model", "MobilePatterns.model$MenuActionRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var MenuActionList = (function (_super) {
__extends(MenuActionList, _super);
function MenuActionList(defaults) {
_super.apply(this, arguments);
}
MenuActionList.RecordType = MobilePatternsModel.MenuActionRec;
return MenuActionList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.MenuActionList = MenuActionList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationTypeList", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationTypeRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationTypeList = (function (_super) {
__extends(InboxNotificationTypeList, _super);
function InboxNotificationTypeList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationTypeList.RecordType = CustomerNotifications_BPModel.InboxNotificationTypeRec;
return InboxNotificationTypeList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationTypeList = InboxNotificationTypeList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationTypeNotificationRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationTypeRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP", "CustomerNotifications_BP.model$NotificationRec"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationTypeNotificationRecord = (function (_super) {
__extends(InboxNotificationTypeNotificationRecord, _super);
function InboxNotificationTypeNotificationRecord(defaults) {
_super.apply(this, arguments);
}
InboxNotificationTypeNotificationRecord.attributesToDeclare = function () {
return [
this.attr("InboxNotificationType", "inboxNotificationTypeAttr", "InboxNotificationType", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.InboxNotificationTypeRec());
}, CustomerNotifications_BPModel.InboxNotificationTypeRec), 
this.attr("Notification", "notificationAttr", "Notification", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.NotificationRec());
}, CustomerNotifications_BPModel.NotificationRec)
].concat(_super.attributesToDeclare.call(this));
};
InboxNotificationTypeNotificationRecord.IsAnonymousRecord = true;
InboxNotificationTypeNotificationRecord.UniqueId = "62390ba4-37f8-4a42-50ac-cd16e285b3b3";
InboxNotificationTypeNotificationRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
InboxNotificationTypeNotificationRecord.init();
return InboxNotificationTypeNotificationRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.InboxNotificationTypeNotificationRecord = InboxNotificationTypeNotificationRecord;

});
define("CustomerNotifications_MBLOCKS.model$NotificationStatusRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$NotificationStatusRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationStatusRecord = (function (_super) {
__extends(NotificationStatusRecord, _super);
function NotificationStatusRecord(defaults) {
_super.apply(this, arguments);
}
NotificationStatusRecord.attributesToDeclare = function () {
return [
this.attr("NotificationStatus", "notificationStatusAttr", "NotificationStatus", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.NotificationStatusRec());
}, CustomerNotifications_BPModel.NotificationStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
NotificationStatusRecord.fromStructure = function (str) {
return new NotificationStatusRecord(new NotificationStatusRecord.RecordClass({
notificationStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NotificationStatusRecord.IsAnonymousRecord = true;
NotificationStatusRecord.UniqueId = "b97497e4-df23-6f7c-d0b0-bf8a8c9c9ff2";
NotificationStatusRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
NotificationStatusRecord.init();
return NotificationStatusRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.NotificationStatusRecord = NotificationStatusRecord;

});
define("CustomerNotifications_MBLOCKS.model$NotificationStatusRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$NotificationStatusRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationStatusRecordList = (function (_super) {
__extends(NotificationStatusRecordList, _super);
function NotificationStatusRecordList(defaults) {
_super.apply(this, arguments);
}
NotificationStatusRecordList.RecordType = CustomerNotifications_MBLOCKSModel.NotificationStatusRecord;
return NotificationStatusRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.NotificationStatusRecordList = NotificationStatusRecordList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationInfoStatusList", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationInfoStatusRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationInfoStatusList = (function (_super) {
__extends(InboxNotificationInfoStatusList, _super);
function InboxNotificationInfoStatusList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationInfoStatusList.RecordType = CustomerNotifications_BPModel.InboxNotificationInfoStatusRec;
return InboxNotificationInfoStatusList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationInfoStatusList = InboxNotificationInfoStatusList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationBooleanRecord", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationBooleanRecord = (function (_super) {
__extends(InboxNotificationBooleanRecord, _super);
function InboxNotificationBooleanRecord(defaults) {
_super.apply(this, arguments);
}
InboxNotificationBooleanRecord.attributesToDeclare = function () {
return [
this.attr("InboxNotification", "inboxNotificationAttr", "InboxNotification", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CustomerNotifications_BPModel.InboxNotificationRec());
}, CustomerNotifications_BPModel.InboxNotificationRec), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
InboxNotificationBooleanRecord.IsAnonymousRecord = true;
InboxNotificationBooleanRecord.UniqueId = "7d070ee4-3c65-f8f6-67a3-ca54ba56624c";
InboxNotificationBooleanRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
InboxNotificationBooleanRecord.init();
return InboxNotificationBooleanRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.InboxNotificationBooleanRecord = InboxNotificationBooleanRecord;

});
define("CustomerNotifications_MBLOCKS.model$UserRecord", ["exports", "OutSystems", "ServiceCenter.model", "CustomerNotifications_MBLOCKS.model", "ServiceCenter.model$UserRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, CustomerNotifications_MBLOCKSModel) {
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
CustomerNotifications_MBLOCKSModel.UserRecord = UserRecord;

});
define("CustomerNotifications_MBLOCKS.model$UserRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$UserRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.RecordType = CustomerNotifications_MBLOCKSModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.UserRecordList = UserRecordList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationBooleanRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$InboxNotificationBooleanRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationBooleanRecordList = (function (_super) {
__extends(InboxNotificationBooleanRecordList, _super);
function InboxNotificationBooleanRecordList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationBooleanRecordList.RecordType = CustomerNotifications_MBLOCKSModel.InboxNotificationBooleanRecord;
return InboxNotificationBooleanRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationBooleanRecordList = InboxNotificationBooleanRecordList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$InboxNotificationRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationRecordList = (function (_super) {
__extends(InboxNotificationRecordList, _super);
function InboxNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationRecordList.RecordType = CustomerNotifications_MBLOCKSModel.InboxNotificationRecord;
return InboxNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationRecordList = InboxNotificationRecordList;

});
define("CustomerNotifications_MBLOCKS.model$NotificationStatusList", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$NotificationStatusRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationStatusList = (function (_super) {
__extends(NotificationStatusList, _super);
function NotificationStatusList(defaults) {
_super.apply(this, arguments);
}
NotificationStatusList.RecordType = CustomerNotifications_BPModel.NotificationStatusRec;
return NotificationStatusList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.NotificationStatusList = NotificationStatusList;

});
define("CustomerNotifications_MBLOCKS.model$ColorRecord", ["exports", "OutSystems", "MobilePatterns.model", "CustomerNotifications_MBLOCKS.model", "MobilePatterns.model$ColorRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$MobilePatterns"], function (exports, OutSystems, MobilePatternsModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobilePatternsModel.ColorRec());
}, MobilePatternsModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord.IsAnonymousRecord = true;
ColorRecord.UniqueId = "c47826b7-e423-2fbf-8907-84243715f5a8";
ColorRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
CustomerNotifications_MBLOCKSModel.ColorRecord = ColorRecord;

});
define("CustomerNotifications_MBLOCKS.model$ColorRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$ColorRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.RecordType = CustomerNotifications_MBLOCKSModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.ColorRecordList = ColorRecordList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationList", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$InboxNotificationRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationList = (function (_super) {
__extends(InboxNotificationList, _super);
function InboxNotificationList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationList.RecordType = CustomerNotifications_BPModel.InboxNotificationRec;
return InboxNotificationList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationList = InboxNotificationList;

});
define("CustomerNotifications_MBLOCKS.model$NotificationList", ["exports", "OutSystems", "CustomerNotifications_BP.model", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_BP.model$NotificationRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CustomerNotifications_BP"], function (exports, OutSystems, CustomerNotifications_BPModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var NotificationList = (function (_super) {
__extends(NotificationList, _super);
function NotificationList(defaults) {
_super.apply(this, arguments);
}
NotificationList.RecordType = CustomerNotifications_BPModel.NotificationRec;
return NotificationList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.NotificationList = NotificationList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationInfoStatusRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$InboxNotificationInfoStatusRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationInfoStatusRecordList = (function (_super) {
__extends(InboxNotificationInfoStatusRecordList, _super);
function InboxNotificationInfoStatusRecordList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationInfoStatusRecordList.RecordType = CustomerNotifications_MBLOCKSModel.InboxNotificationInfoStatusRecord;
return InboxNotificationInfoStatusRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationInfoStatusRecordList = InboxNotificationInfoStatusRecordList;

});
define("CustomerNotifications_MBLOCKS.model$InboxNotificationTypeNotificationRecordList", ["exports", "OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.model$InboxNotificationTypeNotificationRecord"], function (exports, OutSystems, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var InboxNotificationTypeNotificationRecordList = (function (_super) {
__extends(InboxNotificationTypeNotificationRecordList, _super);
function InboxNotificationTypeNotificationRecordList(defaults) {
_super.apply(this, arguments);
}
InboxNotificationTypeNotificationRecordList.RecordType = CustomerNotifications_MBLOCKSModel.InboxNotificationTypeNotificationRecord;
return InboxNotificationTypeNotificationRecordList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.InboxNotificationTypeNotificationRecordList = InboxNotificationTypeNotificationRecordList;

});
define("CustomerNotifications_MBLOCKS.model$UserList", ["exports", "OutSystems", "ServiceCenter.model", "CustomerNotifications_MBLOCKS.model", "ServiceCenter.model$UserRec", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$ServiceCenter"], function (exports, OutSystems, ServiceCenterModel, CustomerNotifications_MBLOCKSModel) {
var OS = OutSystems.Internal;
var UserList = (function (_super) {
__extends(UserList, _super);
function UserList(defaults) {
_super.apply(this, arguments);
}
UserList.RecordType = ServiceCenterModel.UserRec;
return UserList;
})(OS.DataTypes.GenericRecordList);
CustomerNotifications_MBLOCKSModel.UserList = UserList;

});
define("CustomerNotifications_MBLOCKS.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var CustomerNotifications_MBLOCKSModel = exports;
Object.defineProperty(CustomerNotifications_MBLOCKSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["c32196c3-d22c-44fc-94d5-99751fd4ef15"];
}
});

CustomerNotifications_MBLOCKSModel.staticEntities = {};
CustomerNotifications_MBLOCKSModel.staticEntities.notificationStatus = {};
var getNotificationStatusRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b484f23-c9bd-444b-8c5a-ad318c53a291"].staticEntities["03f019de-6c7b-4832-8746-4695b47ee451"][record];
};
Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.notificationStatus, "criada", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getNotificationStatusRecord("59facca9-376d-44a9-becc-f2a6afa7529a"));
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.notificationStatus, "lida", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getNotificationStatusRecord("958eabc6-58c8-4081-8f46-9231dd491ade"));
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.notificationStatus, "enviada", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getNotificationStatusRecord("97a23cd5-1cb1-4751-b918-1fad7cf0ac10"));
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.notificationStatus, "removida", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getNotificationStatusRecord("98cd810b-3616-4fad-b8dd-7cc9906eca64"));
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.notificationStatus, "arquivada", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getNotificationStatusRecord("efec31f6-3760-4642-b4e6-86694ffa503d"));
}
});

CustomerNotifications_MBLOCKSModel.staticEntities.inboxNotificationType = {};
var getInboxNotificationTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b484f23-c9bd-444b-8c5a-ad318c53a291"].staticEntities["16cc3670-4941-4f59-8a72-0f8eac26fc97"][record];
};
Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.inboxNotificationType, "message", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getInboxNotificationTypeRecord("c40f23a0-b725-459c-8890-bfbd46fe2a09"));
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.inboxNotificationType, "communication", {
get: function () {
return OS.BuiltinFunctions.textToInteger(getInboxNotificationTypeRecord("f7306b96-5a51-46c4-9b58-ead2c4464c35"));
}
});

CustomerNotifications_MBLOCKSModel.staticEntities.color = {};
var getColorRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["4a5b3b8d-44e7-4c03-9b89-453fa2feee20"][record];
};
Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "white", {
get: function () {
return getColorRecord("05505a13-1fe9-4adf-9845-11368c74e98b");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "blue", {
get: function () {
return getColorRecord("0772a1e6-baf6-4f8d-9b63-aef9b16bec31");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "black", {
get: function () {
return getColorRecord("26ba2ced-6bce-452f-b33a-7874dc80d8d1");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "violet", {
get: function () {
return getColorRecord("3269784e-d6b0-46db-a0b5-5a9a64ee0e41");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "none", {
get: function () {
return getColorRecord("342260d0-74a4-44fd-9e9d-f0505a330244");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "orange", {
get: function () {
return getColorRecord("833f5f9b-2325-4b92-9285-e14aa1a17c25");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "red", {
get: function () {
return getColorRecord("94682198-3a70-458e-9889-3eef131d1b00");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "primaryColor", {
get: function () {
return getColorRecord("9bd951e1-c94c-434b-85cb-a4cde3ffe638");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "green", {
get: function () {
return getColorRecord("ad00278a-a271-46de-ac30-9f99c87f97a4");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.color, "grey", {
get: function () {
return getColorRecord("f986e894-0745-46fd-aa63-7680b5fd9234");
}
});

CustomerNotifications_MBLOCKSModel.staticEntities.menuAction = {};
var getMenuActionRecord = function (record) {
return OS.ApplicationInfo.getModules()["8be17f2a-431c-4958-b894-c77b988a7271"].staticEntities["9cc12883-06ab-4cf0-9997-ede7c6c02d67"][record];
};
Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.menuAction, "menu", {
get: function () {
return getMenuActionRecord("55ba18a9-cd6b-45dd-99ce-9081ee1387ea");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.menuAction, "auto", {
get: function () {
return getMenuActionRecord("6c0c753a-86f4-4e76-9781-6e821c850c72");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.menuAction, "hidden", {
get: function () {
return getMenuActionRecord("86c9d356-be64-46a1-b027-843ab93b4aea");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.menuAction, "back", {
get: function () {
return getMenuActionRecord("f2db3c50-4c38-4ee7-a770-aa9476cb0d68");
}
});

CustomerNotifications_MBLOCKSModel.staticEntities.iCON_SIZE2 = {};
var getICON_SIZE2Record = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["b60cb512-9fee-4638-ac38-ced6b6d81a86"][record];
};
Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_SIZE2, "xSmall", {
get: function () {
return getICON_SIZE2Record("22883d0d-95e6-4a32-8126-12f1839ac2d2");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_SIZE2, "xLarge", {
get: function () {
return getICON_SIZE2Record("3a1cde3c-a513-4514-b687-8ff0ada45a36");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_SIZE2, "small", {
get: function () {
return getICON_SIZE2Record("5f77c5ff-0d3d-4372-8b4e-614de51c3692");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_SIZE2, "large", {
get: function () {
return getICON_SIZE2Record("ca7f18e8-1f3b-4d8c-b3f5-40cc9898aaf4");
}
});

CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2 = {};
var getICON_CLASS2Record = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["d68ff46d-b9b2-4c6c-bd04-e5036faf1127"][record];
};
Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEditar", {
get: function () {
return getICON_CLASS2Record("01b8d616-ff1d-4e29-b940-20ba8465e363");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMagnifyingGlass", {
get: function () {
return getICON_CLASS2Record("032ae929-7f5d-4489-8b0a-55af8b12c3d9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconServicosFilled", {
get: function () {
return getICON_CLASS2Record("038452a6-2759-497b-a77f-20eb45826fdd");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconLeftArrow", {
get: function () {
return getICON_CLASS2Record("0409be96-f7ee-4d5c-a028-ac78484c3bbe");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconArrowRightWTF", {
get: function () {
return getICON_CLASS2Record("04bfe465-5af3-44e1-b82c-c46f4a3cf55d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTabAjudaFilled", {
get: function () {
return getICON_CLASS2Record("05ae3224-6bce-4456-92bc-482986a0a48b");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconWalletNatalFilled", {
get: function () {
return getICON_CLASS2Record("05d8fc66-bc9a-47d8-b8aa-bcad6a780bb8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconGear", {
get: function () {
return getICON_CLASS2Record("0640e0ba-34b8-4f18-8f00-1c9e8d50fa89");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconLojasNos", {
get: function () {
return getICON_CLASS2Record("08bbd6db-9ba1-4cc3-85d7-02c5d5aab166");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMiscsetaDropRightCheia", {
get: function () {
return getICON_CLASS2Record("08d9b49d-3aeb-45e0-8566-21115fac7d1c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconRefresh", {
get: function () {
return getICON_CLASS2Record("0b6eabc3-eb2c-4cb7-ac02-2cfd3d3fd6b7");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSeat", {
get: function () {
return getICON_CLASS2Record("0c442ec8-f11d-4560-91bd-e35fe582f1d6");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconDebitDirect", {
get: function () {
return getICON_CLASS2Record("0cb27d76-c1ee-473b-9d45-19c6ab7fca58");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconColapsar", {
get: function () {
return getICON_CLASS2Record("0f09179e-1f92-49b3-b9d5-b1aa8f4bd00a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconConsulta", {
get: function () {
return getICON_CLASS2Record("0f9bb09d-be4f-4606-8237-cf03fdcbaaf9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMiscsetaDropUpCheia", {
get: function () {
return getICON_CLASS2Record("15b10abc-f76d-4653-aa25-9e51c9fb6909");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPopcornMenu", {
get: function () {
return getICON_CLASS2Record("16dd9fb6-02bc-47f2-bb05-c3646f537ab0");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconInicioFilled", {
get: function () {
return getICON_CLASS2Record("17af2fa8-31e0-46d1-9183-993328cfa197");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSoundcloud", {
get: function () {
return getICON_CLASS2Record("19f057d0-b1b3-4e52-97b2-06ab27b7924f");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEye", {
get: function () {
return getICON_CLASS2Record("1a14d6e2-19dd-49f7-8e9b-a1d5a9d660e0");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTickets", {
get: function () {
return getICON_CLASS2Record("1ea79111-2bf7-48d0-bcfd-439b0be289e8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFavoriteFilled", {
get: function () {
return getICON_CLASS2Record("21c595f7-41b4-42b4-b92d-1feb327f77e9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconWallet", {
get: function () {
return getICON_CLASS2Record("21fbf0cb-5d18-41d1-bb06-badbdbb8d31d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTwitter", {
get: function () {
return getICON_CLASS2Record("227e5db3-1b86-473a-becf-461589681205");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAlertTriangle", {
get: function () {
return getICON_CLASS2Record("2994f6fa-43f1-429c-a6c7-e8dafcd8e7d7");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconServicos", {
get: function () {
return getICON_CLASS2Record("2bcb5e0a-e178-4919-8a21-5aa172de0f29");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSmsFilled", {
get: function () {
return getICON_CLASS2Record("2c35b671-4271-411f-bd19-b860652a2f94");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFiltros", {
get: function () {
return getICON_CLASS2Record("2ea87344-d9dc-4623-bf8e-a53742bfa968");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconLike", {
get: function () {
return getICON_CLASS2Record("2eb4d1f1-127b-4bff-ab3f-1b3d40b63a4f");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconScratchFilled", {
get: function () {
return getICON_CLASS2Record("33ce4a85-b9c0-41cc-8cd7-c0f4f96b43d8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconBookmarked", {
get: function () {
return getICON_CLASS2Record("34c9bdb1-85ab-4e3e-aab8-6de2c51e88f9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconNetflix", {
get: function () {
return getICON_CLASS2Record("34fadac0-fe8c-45b8-b907-c0bf368b3825");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconBus", {
get: function () {
return getICON_CLASS2Record("358de172-7980-4357-ac8b-3e31184038b8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMiscsetaDropDownCheia", {
get: function () {
return getICON_CLASS2Record("368fcad0-53ed-48e5-bac2-a31d905bc6cf");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconZonaNatal", {
get: function () {
return getICON_CLASS2Record("3824c108-7674-4276-b9dd-a1e79a28e2a2");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSaucyNatal", {
get: function () {
return getICON_CLASS2Record("384bf376-3bfc-4080-89b3-8171614b4266");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPencil", {
get: function () {
return getICON_CLASS2Record("3965762b-39d7-462d-ba0e-143a9ad07ddb");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconShareAndroid", {
get: function () {
return getICON_CLASS2Record("39e27a3d-2e63-4263-ab0b-a6cc7753f0ab");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCardSuccess0102", {
get: function () {
return getICON_CLASS2Record("3b7b8961-ed4c-4301-9562-411a84dda131");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconInfoRounded", {
get: function () {
return getICON_CLASS2Record("3bbfd8ac-5b41-4c64-bc0b-cc81ddc5c832");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCheckBoxOn", {
get: function () {
return getICON_CLASS2Record("3c4f6dbb-d6dc-472b-8355-42b876f3169d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconVerMais", {
get: function () {
return getICON_CLASS2Record("3dc47c2d-28d4-4f6c-86d5-202aa7355d4c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconLinkedIn", {
get: function () {
return getICON_CLASS2Record("3de989ad-406e-42b1-9c1d-ed6f8a89e392");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMessageInsuccessWTF", {
get: function () {
return getICON_CLASS2Record("3eed6eba-c22a-45a7-ae61-7d920223fd05");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconConta", {
get: function () {
return getICON_CLASS2Record("407a7026-c85d-4faf-8248-fa987edc6aea");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconInfoRoundedFilled", {
get: function () {
return getICON_CLASS2Record("41fb7aad-e455-4dc0-8a24-40b661eabdb7");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCartaoNosV2", {
get: function () {
return getICON_CLASS2Record("42781948-5e52-4d30-969f-ff8377ca2364");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconArrowRight", {
get: function () {
return getICON_CLASS2Record("434f85a5-2762-4d26-9f43-8329430c30ce");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPopcornMenuV2", {
get: function () {
return getICON_CLASS2Record("4385f301-fce4-4da3-bbb3-964b16571194");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconWirelessDisable", {
get: function () {
return getICON_CLASS2Record("44155b78-929d-411e-9920-82b8b25e7828");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPlus", {
get: function () {
return getICON_CLASS2Record("454b040a-1099-46da-b5d2-fbdd4f3f9bed");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAppsNosV2", {
get: function () {
return getICON_CLASS2Record("4766006c-dc30-4237-a099-00e9cb197b63");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSkype", {
get: function () {
return getICON_CLASS2Record("488d131e-fcc9-4de5-81fb-d38d5d6e2267");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconNotificacoesOn", {
get: function () {
return getICON_CLASS2Record("4c2671d9-65d7-468e-8105-0ce41d867eb3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFacebookLight", {
get: function () {
return getICON_CLASS2Record("4e49a907-6642-48ac-b7fb-ba6098616ba1");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPopCorn", {
get: function () {
return getICON_CLASS2Record("4ebdf68a-3a7a-4e79-af32-8d1e5223d02f");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconVimeo", {
get: function () {
return getICON_CLASS2Record("4ee8f792-b0ee-4129-9063-bb3f32773fb6");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconLess", {
get: function () {
return getICON_CLASS2Record("4f26250b-ef0d-438d-bb3c-99d0bd867bbb");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconHistory", {
get: function () {
return getICON_CLASS2Record("55e53638-fe04-4f40-afef-b80dd2de48ee");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconRecycleBinEmptyFilled", {
get: function () {
return getICON_CLASS2Record("5b71ccd7-2caa-4160-8b39-95c221b02853");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconsSeatxl", {
get: function () {
return getICON_CLASS2Record("5ceb2c1b-c693-41e4-98cf-342538744b20");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSnapchat", {
get: function () {
return getICON_CLASS2Record("5d5f49b9-44fe-4e36-a130-dbb9678a6559");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAppsNos", {
get: function () {
return getICON_CLASS2Record("5d8408e1-b496-41d2-8658-344129e8a3b9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEyeHide", {
get: function () {
return getICON_CLASS2Record("5fe83dd4-fa34-4f40-965f-ad5bec5d3215");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAtalhosFilled", {
get: function () {
return getICON_CLASS2Record("609ff505-1065-43fc-96f1-3720d145ea0d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTelefone", {
get: function () {
return getICON_CLASS2Record("60d626d3-433d-408f-b44a-1b8e694efdd9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTumblr", {
get: function () {
return getICON_CLASS2Record("611c7d6a-9a1c-4abf-91d1-f8dd0c14713d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconParking", {
get: function () {
return getICON_CLASS2Record("61b30cd0-6653-439b-8dd2-369fca293ad3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTvCellPhonePlus", {
get: function () {
return getICON_CLASS2Record("62bc61ca-d82c-42e4-8b67-473fd819dc8a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTopics", {
get: function () {
return getICON_CLASS2Record("63c445a9-e00b-439e-894a-f654a9e05e10");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSms", {
get: function () {
return getICON_CLASS2Record("645894eb-6a2a-4f3d-9f5a-d1d00890a56a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFaq", {
get: function () {
return getICON_CLASS2Record("64cf46ef-ea9f-4660-a177-f48f2a579d58");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEncomenda", {
get: function () {
return getICON_CLASS2Record("6589fd14-7c33-4a72-9064-20efefe6cbac");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconInstagram", {
get: function () {
return getICON_CLASS2Record("674b7527-e077-4ad3-8c2c-9b9342171cd8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMiscsetaDropLeftCheia", {
get: function () {
return getICON_CLASS2Record("694e5a50-3cb8-4ebc-af08-5af555c7b215");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMore", {
get: function () {
return getICON_CLASS2Record("6a520bf2-b475-4adf-ae64-9415882ff1d9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCurrentLocation", {
get: function () {
return getICON_CLASS2Record("6a5a33b0-0175-4b2d-804a-4db38c9db0d2");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconItunes", {
get: function () {
return getICON_CLASS2Record("6bae4222-38f7-49ff-8e78-5fd2596b4121");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCartaz", {
get: function () {
return getICON_CLASS2Record("6cdd0308-8940-4740-bcff-c48a34bb1ea9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFavorite", {
get: function () {
return getICON_CLASS2Record("6eb70ef0-4a5b-4687-b631-ab7eaa03f246");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPrime", {
get: function () {
return getICON_CLASS2Record("7132c09e-9e19-43dc-a715-65b4f4000cf6");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMessenger", {
get: function () {
return getICON_CLASS2Record("714140ea-e4f1-46ac-931d-ce197005d7fa");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconUserPlus", {
get: function () {
return getICON_CLASS2Record("71a80589-7bf8-42dc-ba08-9e46b561029a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCheckCircleLine", {
get: function () {
return getICON_CLASS2Record("723da398-6895-4db2-bffe-981d3fffffe3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconHbo", {
get: function () {
return getICON_CLASS2Record("725dab7a-d101-4027-bd37-9f4d3eec70d6");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconHome", {
get: function () {
return getICON_CLASS2Record("72c1ea44-44c8-4aa8-8731-55fe90fa8ca0");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconContacto", {
get: function () {
return getICON_CLASS2Record("73d73c7c-1d7c-4129-a999-1202918387b4");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTabAjuda", {
get: function () {
return getICON_CLASS2Record("79a52476-1ce5-4901-84d8-9d88cd81cab9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconClose", {
get: function () {
return getICON_CLASS2Record("7b8503c7-a296-4714-aaa5-54727448226f");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMetro", {
get: function () {
return getICON_CLASS2Record("7b96765a-c5b2-4d6a-825a-d15504573de3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconScratchNatalFilled", {
get: function () {
return getICON_CLASS2Record("7c6f3a2d-00f0-478e-a3f0-167cd3227894");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconErrorRoundedV2", {
get: function () {
return getICON_CLASS2Record("7d4b0b9d-921d-475e-a367-ea09342d84c8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconWalletNatal", {
get: function () {
return getICON_CLASS2Record("7e077556-3472-468e-be3b-cecfd17fccf9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconGoogle", {
get: function () {
return getICON_CLASS2Record("7f74c380-9afe-4511-b05e-0bb4102416d4");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSearch", {
get: function () {
return getICON_CLASS2Record("7fa60abf-fd65-4c02-90f3-f13cb3e9e460");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconVip", {
get: function () {
return getICON_CLASS2Record("80b8643f-4ea9-4e56-b005-b8d3b8fc69e2");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCalendar", {
get: function () {
return getICON_CLASS2Record("811f7369-61f8-44fe-bf88-dfb1e863ea62");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMagnifyingGlassMin", {
get: function () {
return getICON_CLASS2Record("81f62088-b850-40a9-9d24-c4b912e38789");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSaucy", {
get: function () {
return getICON_CLASS2Record("8278feb3-bf45-4eba-9983-ae16cc6251fd");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconErrorNovo", {
get: function () {
return getICON_CLASS2Record("832b127c-7e55-4bb1-8ed5-bf207ae07a50");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconHeart", {
get: function () {
return getICON_CLASS2Record("8419ef28-e5f9-4a79-af67-2916b230164d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconExternalLink", {
get: function () {
return getICON_CLASS2Record("853d8d6a-35e8-4bcf-9c7c-9723234b539a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCartaoNos", {
get: function () {
return getICON_CLASS2Record("85799301-4686-4962-9dc6-48fd5ed86b8c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconZonaFilled", {
get: function () {
return getICON_CLASS2Record("85ba2fcb-3c07-4418-91c5-f106423e0541");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMovie", {
get: function () {
return getICON_CLASS2Record("867b3a21-d19a-4ffd-bb6d-b4562489b82c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconChat", {
get: function () {
return getICON_CLASS2Record("890f1121-90c8-4658-a79f-6bd652a5c992");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "icontTvPlus", {
get: function () {
return getICON_CLASS2Record("8a7394d7-fb7b-4bae-9850-360c288b79ab");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAjudaNos", {
get: function () {
return getICON_CLASS2Record("8a7dacd9-d79a-4bb5-b351-f2f9ea45f6ff");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCheckAll", {
get: function () {
return getICON_CLASS2Record("8ab6722f-0b42-49ce-a149-89befe5a4bb6");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTabBarAtalhos", {
get: function () {
return getICON_CLASS2Record("8e45834b-ca5f-4045-984f-bbccada61826");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCardError01", {
get: function () {
return getICON_CLASS2Record("8f29ee51-b0b3-4626-b9e7-d9422168dd96");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPremium", {
get: function () {
return getICON_CLASS2Record("8f7497d3-400d-4bb6-9d01-340372cccd39");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconScratchNatal", {
get: function () {
return getICON_CLASS2Record("9071e854-ba1a-43cd-a665-dd2f5d56920c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconRadioButtonOff", {
get: function () {
return getICON_CLASS2Record("9157d001-7087-4463-b9f1-0314dca5f528");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconIMessage", {
get: function () {
return getICON_CLASS2Record("9400960f-16b2-4b1b-bb95-b5fe828dc3d1");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTeather", {
get: function () {
return getICON_CLASS2Record("95bea852-0c3e-48b1-86de-38b38c36303e");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconGesturesWipeHorizontal", {
get: function () {
return getICON_CLASS2Record("9656dca4-51a4-437f-ab5c-e283659834de");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconYoutube", {
get: function () {
return getICON_CLASS2Record("96c0d608-9194-4170-a8f0-03c6f7aceb37");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSlidersEqual", {
get: function () {
return getICON_CLASS2Record("9744a38b-e2d6-4edd-a0d5-566f4ceec129");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTwitch", {
get: function () {
return getICON_CLASS2Record("98031b00-d686-4694-b56f-2ea1b1ff45a1");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPinterest", {
get: function () {
return getICON_CLASS2Record("9b54ebaa-f706-4e53-8b3e-cc577eabb5d8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMuda", {
get: function () {
return getICON_CLASS2Record("9c68a1ef-6782-430e-bcf5-8e601310e53d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconArrowUp", {
get: function () {
return getICON_CLASS2Record("9d00a261-df34-4bbb-ac68-bd957888b3d9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCheck", {
get: function () {
return getICON_CLASS2Record("9f85dd1a-28d8-4a3e-a9b0-09f88ecb093e");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSeatsXl", {
get: function () {
return getICON_CLASS2Record("a074b85b-9a45-429e-9d5c-c940de46ce47");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPcSmartphone", {
get: function () {
return getICON_CLASS2Record("a2f0c7b1-d94c-423a-8dd3-561e1e3e3f77");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTicket", {
get: function () {
return getICON_CLASS2Record("a4bc95b7-ce62-4da5-afe8-4895ed545b73");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAlterarContexto", {
get: function () {
return getICON_CLASS2Record("a57ff59c-5608-4c3c-b300-413aa3b6fb47");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTv", {
get: function () {
return getICON_CLASS2Record("a5b64568-2c3b-4569-9452-8fb56f199718");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEletronicInvoice", {
get: function () {
return getICON_CLASS2Record("a77500a0-d6ef-4152-9ac3-5e3bd7b250fd");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSimCard", {
get: function () {
return getICON_CLASS2Record("a84626a8-2967-4578-953a-a8939787af79");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconZona", {
get: function () {
return getICON_CLASS2Record("a8f22183-52f4-4341-9bc4-3bc8cd0ff992");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconBookmark", {
get: function () {
return getICON_CLASS2Record("aa47b522-2816-4858-bf9d-c83880b2fe6e");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPlayCircle", {
get: function () {
return getICON_CLASS2Record("aa8d6c1c-b6e7-44bb-a116-f67b8c669cbe");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconLocation", {
get: function () {
return getICON_CLASS2Record("ab8e19b4-fa25-4fa4-bcbe-8ef79807cf0c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTicketsFilled", {
get: function () {
return getICON_CLASS2Record("acf32c21-52de-4e7d-91e8-f08fd460c192");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTvHD", {
get: function () {
return getICON_CLASS2Record("b0769287-51cb-47f3-9473-a6445af70fa3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTelemovel", {
get: function () {
return getICON_CLASS2Record("b1f13a43-5240-410f-a1c7-74aed8c2c0d3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconErrorRounded", {
get: function () {
return getICON_CLASS2Record("b33adfc1-7559-4bae-9170-5019ca3ce1df");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconBill", {
get: function () {
return getICON_CLASS2Record("b635c5d1-d875-4eb4-9140-b854d84506d6");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconListInverted", {
get: function () {
return getICON_CLASS2Record("b6649ac2-4b33-4d07-85c3-9392355136ca");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPopCornNew", {
get: function () {
return getICON_CLASS2Record("b68cfa8f-1566-400a-88e2-169e166679c2");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCopiar", {
get: function () {
return getICON_CLASS2Record("b6bab7da-9419-40da-bb39-a42e83720f0a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSeatColor", {
get: function () {
return getICON_CLASS2Record("b7e797f4-b455-443a-8fb7-8c082dd9b67a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconScratch", {
get: function () {
return getICON_CLASS2Record("b7f71ed8-f49a-470e-aa4c-c3d1bb791b38");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMaisNatalWTF", {
get: function () {
return getICON_CLASS2Record("b8d6b224-7c36-4a09-8be5-ee29f47cd115");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFilterFilled", {
get: function () {
return getICON_CLASS2Record("b9aa8387-f155-4bb8-b920-fa5d3b08c947");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCheckBoxOff", {
get: function () {
return getICON_CLASS2Record("ba5e3751-896e-4615-8386-e08039f43e0f");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconNotificacoes", {
get: function () {
return getICON_CLASS2Record("bb610fbf-72c5-49c0-9806-e9a630529824");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMessageSuccessWTF", {
get: function () {
return getICON_CLASS2Record("bbfd4eac-b4c8-424f-9522-f3c8256ccde1");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconPremiumSeatXL", {
get: function () {
return getICON_CLASS2Record("bdfeb64e-3109-4f84-808f-a09d59d8d5b7");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAppleMusic", {
get: function () {
return getICON_CLASS2Record("be911cac-a3df-4adf-a602-0bffaed86100");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconRouter", {
get: function () {
return getICON_CLASS2Record("bea8023a-f5ec-4cef-abab-c208537890eb");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEnvelopOpen", {
get: function () {
return getICON_CLASS2Record("bef95d1d-3e00-4187-a067-7900d1b5c95c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconInternet", {
get: function () {
return getICON_CLASS2Record("bfd476fc-ac45-4a38-bff1-524d65e24334");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconGoogleMusic", {
get: function () {
return getICON_CLASS2Record("c06618eb-7595-4a21-8d26-876bd7ff2a38");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMaisWTF", {
get: function () {
return getICON_CLASS2Record("c0c1b4d3-435f-49b1-af20-2bea36276a50");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAlertRounded", {
get: function () {
return getICON_CLASS2Record("c10f6c06-a595-4f1c-af4b-7a0a819878f8");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconTicketFilled", {
get: function () {
return getICON_CLASS2Record("c1cb057f-5ffd-437b-bb74-eecedd69667a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconUser", {
get: function () {
return getICON_CLASS2Record("c2921be5-b316-42e3-aa26-d7d590c127c4");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconZonaNatalFilled", {
get: function () {
return getICON_CLASS2Record("c49fa011-b4c1-4d3d-87e2-b7e624b821e3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconDotsHorizontal", {
get: function () {
return getICON_CLASS2Record("c588a0d6-c262-4f33-84f9-2b25aa343dd6");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconBack", {
get: function () {
return getICON_CLASS2Record("c605ef4d-f8e5-4d9c-8d32-96de02fec138");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconArrowLeft", {
get: function () {
return getICON_CLASS2Record("c6839bc2-52e1-49f9-9a33-0f2c61befe82");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconDotsVertical", {
get: function () {
return getICON_CLASS2Record("cb7aa433-4cd2-4a59-a08c-d95c4bf1941d");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconForumNos", {
get: function () {
return getICON_CLASS2Record("cd6557a8-a44d-417b-93c4-336b6df9e444");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEletronicInvoiceNew", {
get: function () {
return getICON_CLASS2Record("cf2cc7cb-eafa-453c-b310-352580360073");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconErrorRoundedFilledV2", {
get: function () {
return getICON_CLASS2Record("d0be93fe-114a-42ea-b172-38376cbc1b04");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconBellCheck", {
get: function () {
return getICON_CLASS2Record("d0d2579c-59fb-4e16-a871-1a71d193332a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconNetMovel", {
get: function () {
return getICON_CLASS2Record("d1f7d660-8a76-4250-9782-82f8e244c719");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSaucyNatalFilled", {
get: function () {
return getICON_CLASS2Record("d22d0b57-de00-4f93-8eb0-80c400ec90b0");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconArrowDown", {
get: function () {
return getICON_CLASS2Record("d2cd9ec7-9b69-468b-8b1c-2a34ba3b9da3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconGestureDoubleTap", {
get: function () {
return getICON_CLASS2Record("d4b4e0d3-94dc-4bf7-9cad-5eb9aa00e2ca");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconWindows", {
get: function () {
return getICON_CLASS2Record("d6455aba-7cef-4a48-8d1e-5799c53dbf1a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAlertTriangleFilled", {
get: function () {
return getICON_CLASS2Record("d8a3f9d2-0f15-4667-a6ae-91cf9ec34d99");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFacebook", {
get: function () {
return getICON_CLASS2Record("da91f8cd-c1a2-4e79-a3b2-6f358bfa43ba");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconDislike", {
get: function () {
return getICON_CLASS2Record("dba88543-c98a-434b-8ab7-b3bad26038b3");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconFaceTime", {
get: function () {
return getICON_CLASS2Record("df92fd71-9b56-41cb-85c2-665f9e5fc1fe");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSpotify", {
get: function () {
return getICON_CLASS2Record("e1d2fd99-388f-4312-82b2-07d85e0319b7");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconSaucyFilled", {
get: function () {
return getICON_CLASS2Record("e2d0c688-8770-4a9e-a3b9-0635dcee6b62");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconInternetData", {
get: function () {
return getICON_CLASS2Record("e5030fb0-23c7-4754-8a94-ba385f85988a");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconRadioButtonOn", {
get: function () {
return getICON_CLASS2Record("e63cf556-7f97-4a41-9f86-7d2498336765");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconCheckCircle", {
get: function () {
return getICON_CLASS2Record("e67bde37-6a83-4a29-8ccb-c3dcaa996eae");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconRecycleBinEmpty", {
get: function () {
return getICON_CLASS2Record("e722390d-6826-4c00-809b-421808b2edb0");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEnvelopeClosed", {
get: function () {
return getICON_CLASS2Record("e889b360-6d3d-4db6-913e-801ad74ad638");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconMobilidade", {
get: function () {
return getICON_CLASS2Record("ec3ba0bc-94ba-4c3e-a224-5b7ebae2bfd1");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconEdit", {
get: function () {
return getICON_CLASS2Record("ecf06917-d913-4a0b-95ef-dc1571fa875c");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAdmin", {
get: function () {
return getICON_CLASS2Record("f0614f61-661d-4c96-a384-42eb2363ab5f");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconAmazon", {
get: function () {
return getICON_CLASS2Record("f1121331-7df3-44a2-926a-9b162df5fed9");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconWhatsapp", {
get: function () {
return getICON_CLASS2Record("f1b721a3-dfdb-47f4-9b3f-f9a60dfc5311");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconShare", {
get: function () {
return getICON_CLASS2Record("f576738a-b1f7-47f0-891d-5d2e97c1f525");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconWalletFilled", {
get: function () {
return getICON_CLASS2Record("fa0cf488-587a-4b71-a3ff-ff24002f169f");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconViber", {
get: function () {
return getICON_CLASS2Record("fac3d751-fe8e-4590-a202-813145d1c877");
}
});

Object.defineProperty(CustomerNotifications_MBLOCKSModel.staticEntities.iCON_CLASS2, "iconHeartFilled", {
get: function () {
return getICON_CLASS2Record("fcc8dde8-3d2f-4589-9f97-9ee7a5e9b90c");
}
});

});
