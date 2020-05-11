define("MemberGM_MBLOCKS.model$ICON_CLASSRecord", ["exports", "OutSystems", "MobileUIWidgets.model", "MemberGM_MBLOCKS.model", "MobileUIWidgets.model$ICON_CLASSRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, MemberGM_MBLOCKSModel) {
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
MemberGM_MBLOCKSModel.ICON_CLASSRecord = ICON_CLASSRecord;

});
define("MemberGM_MBLOCKS.model$ICON_CLASSRecordList", ["exports", "OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.model$ICON_CLASSRecord"], function (exports, OutSystems, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASSRecordList = (function (_super) {
__extends(ICON_CLASSRecordList, _super);
function ICON_CLASSRecordList(defaults) {
_super.apply(this, arguments);
}
ICON_CLASSRecordList.RecordType = MemberGM_MBLOCKSModel.ICON_CLASSRecord;
return ICON_CLASSRecordList;
})(OS.DataTypes.GenericRecordList);
MemberGM_MBLOCKSModel.ICON_CLASSRecordList = ICON_CLASSRecordList;

});
define("MemberGM_MBLOCKS.model$ErrorList", ["exports", "OutSystems", "CommonPlugin.model", "MemberGM_MBLOCKS.model", "CommonPlugin.model$ErrorRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.RecordType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
MemberGM_MBLOCKSModel.ErrorList = ErrorList;

});
define("MemberGM_MBLOCKS.model$ICON_CLASSList", ["exports", "OutSystems", "MobileUIWidgets.model", "MemberGM_MBLOCKS.model", "MobileUIWidgets.model$ICON_CLASSRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ICON_CLASSList = (function (_super) {
__extends(ICON_CLASSList, _super);
function ICON_CLASSList(defaults) {
_super.apply(this, arguments);
}
ICON_CLASSList.RecordType = MobileUIWidgetsModel.ICON_CLASSRec;
return ICON_CLASSList;
})(OS.DataTypes.GenericRecordList);
MemberGM_MBLOCKSModel.ICON_CLASSList = ICON_CLASSList;

});
define("MemberGM_MBLOCKS.model$SocialTypeList", ["exports", "OutSystems", "SocialSharingPlugin.model", "MemberGM_MBLOCKS.model", "SocialSharingPlugin.model$SocialTypeRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$SocialSharingPlugin"], function (exports, OutSystems, SocialSharingPluginModel, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SocialTypeList = (function (_super) {
__extends(SocialTypeList, _super);
function SocialTypeList(defaults) {
_super.apply(this, arguments);
}
SocialTypeList.RecordType = SocialSharingPluginModel.SocialTypeRec;
return SocialTypeList;
})(OS.DataTypes.GenericRecordList);
MemberGM_MBLOCKSModel.SocialTypeList = SocialTypeList;

});
define("MemberGM_MBLOCKS.model$SocialTypeRecord", ["exports", "OutSystems", "SocialSharingPlugin.model", "MemberGM_MBLOCKS.model", "SocialSharingPlugin.model$SocialTypeRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$SocialSharingPlugin"], function (exports, OutSystems, SocialSharingPluginModel, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SocialTypeRecord = (function (_super) {
__extends(SocialTypeRecord, _super);
function SocialTypeRecord(defaults) {
_super.apply(this, arguments);
}
SocialTypeRecord.attributesToDeclare = function () {
return [
this.attr("SocialType", "socialTypeAttr", "SocialType", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new SocialSharingPluginModel.SocialTypeRec());
}, SocialSharingPluginModel.SocialTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
SocialTypeRecord.fromStructure = function (str) {
return new SocialTypeRecord(new SocialTypeRecord.RecordClass({
socialTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SocialTypeRecord.IsAnonymousRecord = true;
SocialTypeRecord.UniqueId = "af8f9e3e-3e83-1623-f01d-185c5189b64f";
SocialTypeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
SocialTypeRecord.init();
return SocialTypeRecord;
})(OS.DataTypes.GenericRecord);
MemberGM_MBLOCKSModel.SocialTypeRecord = SocialTypeRecord;

});
define("MemberGM_MBLOCKS.model$SocialTypeRecordList", ["exports", "OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.model$SocialTypeRecord"], function (exports, OutSystems, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var SocialTypeRecordList = (function (_super) {
__extends(SocialTypeRecordList, _super);
function SocialTypeRecordList(defaults) {
_super.apply(this, arguments);
}
SocialTypeRecordList.RecordType = MemberGM_MBLOCKSModel.SocialTypeRecord;
return SocialTypeRecordList;
})(OS.DataTypes.GenericRecordList);
MemberGM_MBLOCKSModel.SocialTypeRecordList = SocialTypeRecordList;

});
define("MemberGM_MBLOCKS.model$ErrorRecord", ["exports", "OutSystems", "CommonPlugin.model", "MemberGM_MBLOCKS.model", "CommonPlugin.model$ErrorRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, MemberGM_MBLOCKSModel) {
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
MemberGM_MBLOCKSModel.ErrorRecord = ErrorRecord;

});
define("MemberGM_MBLOCKS.model$ErrorRecordList", ["exports", "OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.model$ErrorRecord"], function (exports, OutSystems, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.RecordType = MemberGM_MBLOCKSModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
MemberGM_MBLOCKSModel.ErrorRecordList = ErrorRecordList;

});
define("MemberGM_MBLOCKS.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var MemberGM_MBLOCKSModel = exports;
Object.defineProperty(MemberGM_MBLOCKSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["acc45a5a-17d9-4ffa-aabe-3b71843176e8"];
}
});

MemberGM_MBLOCKSModel.staticEntities = {};
MemberGM_MBLOCKSModel.staticEntities.socialType = {};
var getSocialTypeRecord = function (record) {
return OS.ApplicationInfo.getModules()["4882e7e1-0f75-414d-aded-37a6a27afbf0"].staticEntities["c92de3f3-8bfa-4d27-bd3b-48789b455e53"][record];
};
Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.socialType, "twitter", {
get: function () {
return getSocialTypeRecord("148e6093-9de5-42b3-8cbd-769d5d3e1ecd");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.socialType, "all", {
get: function () {
return getSocialTypeRecord("7da121c0-800a-4105-b458-14ddd8259b09");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.socialType, "facebook", {
get: function () {
return getSocialTypeRecord("b4233c9c-e593-404d-94ed-edea885dd7b3");
}
});

MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS = {};
var getICON_CLASSRecord = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["d68ff46d-b9b2-4c6c-bd04-e5036faf1127"][record];
};
Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEditar", {
get: function () {
return getICON_CLASSRecord("01b8d616-ff1d-4e29-b940-20ba8465e363");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMagnifyingGlass", {
get: function () {
return getICON_CLASSRecord("032ae929-7f5d-4489-8b0a-55af8b12c3d9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconServicosFilled", {
get: function () {
return getICON_CLASSRecord("038452a6-2759-497b-a77f-20eb45826fdd");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLeftArrow", {
get: function () {
return getICON_CLASSRecord("0409be96-f7ee-4d5c-a028-ac78484c3bbe");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowRightWTF", {
get: function () {
return getICON_CLASSRecord("04bfe465-5af3-44e1-b82c-c46f4a3cf55d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTabAjudaFilled", {
get: function () {
return getICON_CLASSRecord("05ae3224-6bce-4456-92bc-482986a0a48b");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWalletNatalFilled", {
get: function () {
return getICON_CLASSRecord("05d8fc66-bc9a-47d8-b8aa-bcad6a780bb8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGear", {
get: function () {
return getICON_CLASSRecord("0640e0ba-34b8-4f18-8f00-1c9e8d50fa89");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLojasNos", {
get: function () {
return getICON_CLASSRecord("08bbd6db-9ba1-4cc3-85d7-02c5d5aab166");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropRightCheia", {
get: function () {
return getICON_CLASSRecord("08d9b49d-3aeb-45e0-8566-21115fac7d1c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRefresh", {
get: function () {
return getICON_CLASSRecord("0b6eabc3-eb2c-4cb7-ac02-2cfd3d3fd6b7");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSeat", {
get: function () {
return getICON_CLASSRecord("0c442ec8-f11d-4560-91bd-e35fe582f1d6");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDebitDirect", {
get: function () {
return getICON_CLASSRecord("0cb27d76-c1ee-473b-9d45-19c6ab7fca58");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconColapsar", {
get: function () {
return getICON_CLASSRecord("0f09179e-1f92-49b3-b9d5-b1aa8f4bd00a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconConsulta", {
get: function () {
return getICON_CLASSRecord("0f9bb09d-be4f-4606-8237-cf03fdcbaaf9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropUpCheia", {
get: function () {
return getICON_CLASSRecord("15b10abc-f76d-4653-aa25-9e51c9fb6909");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopcornMenu", {
get: function () {
return getICON_CLASSRecord("16dd9fb6-02bc-47f2-bb05-c3646f537ab0");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInicioFilled", {
get: function () {
return getICON_CLASSRecord("17af2fa8-31e0-46d1-9183-993328cfa197");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSoundcloud", {
get: function () {
return getICON_CLASSRecord("19f057d0-b1b3-4e52-97b2-06ab27b7924f");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEye", {
get: function () {
return getICON_CLASSRecord("1a14d6e2-19dd-49f7-8e9b-a1d5a9d660e0");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTickets", {
get: function () {
return getICON_CLASSRecord("1ea79111-2bf7-48d0-bcfd-439b0be289e8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFavoriteFilled", {
get: function () {
return getICON_CLASSRecord("21c595f7-41b4-42b4-b92d-1feb327f77e9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWallet", {
get: function () {
return getICON_CLASSRecord("21fbf0cb-5d18-41d1-bb06-badbdbb8d31d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTwitter", {
get: function () {
return getICON_CLASSRecord("227e5db3-1b86-473a-becf-461589681205");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlertTriangle", {
get: function () {
return getICON_CLASSRecord("2994f6fa-43f1-429c-a6c7-e8dafcd8e7d7");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconServicos", {
get: function () {
return getICON_CLASSRecord("2bcb5e0a-e178-4919-8a21-5aa172de0f29");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSmsFilled", {
get: function () {
return getICON_CLASSRecord("2c35b671-4271-411f-bd19-b860652a2f94");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFiltros", {
get: function () {
return getICON_CLASSRecord("2ea87344-d9dc-4623-bf8e-a53742bfa968");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLike", {
get: function () {
return getICON_CLASSRecord("2eb4d1f1-127b-4bff-ab3f-1b3d40b63a4f");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratchFilled", {
get: function () {
return getICON_CLASSRecord("33ce4a85-b9c0-41cc-8cd7-c0f4f96b43d8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBookmarked", {
get: function () {
return getICON_CLASSRecord("34c9bdb1-85ab-4e3e-aab8-6de2c51e88f9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNetflix", {
get: function () {
return getICON_CLASSRecord("34fadac0-fe8c-45b8-b907-c0bf368b3825");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBus", {
get: function () {
return getICON_CLASSRecord("358de172-7980-4357-ac8b-3e31184038b8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropDownCheia", {
get: function () {
return getICON_CLASSRecord("368fcad0-53ed-48e5-bac2-a31d905bc6cf");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZonaNatal", {
get: function () {
return getICON_CLASSRecord("3824c108-7674-4276-b9dd-a1e79a28e2a2");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucyNatal", {
get: function () {
return getICON_CLASSRecord("384bf376-3bfc-4080-89b3-8171614b4266");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPencil", {
get: function () {
return getICON_CLASSRecord("3965762b-39d7-462d-ba0e-143a9ad07ddb");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconShareAndroid", {
get: function () {
return getICON_CLASSRecord("39e27a3d-2e63-4263-ab0b-a6cc7753f0ab");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCardSuccess0102", {
get: function () {
return getICON_CLASSRecord("3b7b8961-ed4c-4301-9562-411a84dda131");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInfoRounded", {
get: function () {
return getICON_CLASSRecord("3bbfd8ac-5b41-4c64-bc0b-cc81ddc5c832");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckBoxOn", {
get: function () {
return getICON_CLASSRecord("3c4f6dbb-d6dc-472b-8355-42b876f3169d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconVerMais", {
get: function () {
return getICON_CLASSRecord("3dc47c2d-28d4-4f6c-86d5-202aa7355d4c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLinkedIn", {
get: function () {
return getICON_CLASSRecord("3de989ad-406e-42b1-9c1d-ed6f8a89e392");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMessageInsuccessWTF", {
get: function () {
return getICON_CLASSRecord("3eed6eba-c22a-45a7-ae61-7d920223fd05");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconConta", {
get: function () {
return getICON_CLASSRecord("407a7026-c85d-4faf-8248-fa987edc6aea");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInfoRoundedFilled", {
get: function () {
return getICON_CLASSRecord("41fb7aad-e455-4dc0-8a24-40b661eabdb7");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCartaoNosV2", {
get: function () {
return getICON_CLASSRecord("42781948-5e52-4d30-969f-ff8377ca2364");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowRight", {
get: function () {
return getICON_CLASSRecord("434f85a5-2762-4d26-9f43-8329430c30ce");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopcornMenuV2", {
get: function () {
return getICON_CLASSRecord("4385f301-fce4-4da3-bbb3-964b16571194");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWirelessDisable", {
get: function () {
return getICON_CLASSRecord("44155b78-929d-411e-9920-82b8b25e7828");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPlus", {
get: function () {
return getICON_CLASSRecord("454b040a-1099-46da-b5d2-fbdd4f3f9bed");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAppsNosV2", {
get: function () {
return getICON_CLASSRecord("4766006c-dc30-4237-a099-00e9cb197b63");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSkype", {
get: function () {
return getICON_CLASSRecord("488d131e-fcc9-4de5-81fb-d38d5d6e2267");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNotificacoesOn", {
get: function () {
return getICON_CLASSRecord("4c2671d9-65d7-468e-8105-0ce41d867eb3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFacebookLight", {
get: function () {
return getICON_CLASSRecord("4e49a907-6642-48ac-b7fb-ba6098616ba1");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopCorn", {
get: function () {
return getICON_CLASSRecord("4ebdf68a-3a7a-4e79-af32-8d1e5223d02f");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconVimeo", {
get: function () {
return getICON_CLASSRecord("4ee8f792-b0ee-4129-9063-bb3f32773fb6");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLess", {
get: function () {
return getICON_CLASSRecord("4f26250b-ef0d-438d-bb3c-99d0bd867bbb");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHistory", {
get: function () {
return getICON_CLASSRecord("55e53638-fe04-4f40-afef-b80dd2de48ee");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRecycleBinEmptyFilled", {
get: function () {
return getICON_CLASSRecord("5b71ccd7-2caa-4160-8b39-95c221b02853");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconsSeatxl", {
get: function () {
return getICON_CLASSRecord("5ceb2c1b-c693-41e4-98cf-342538744b20");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSnapchat", {
get: function () {
return getICON_CLASSRecord("5d5f49b9-44fe-4e36-a130-dbb9678a6559");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAppsNos", {
get: function () {
return getICON_CLASSRecord("5d8408e1-b496-41d2-8658-344129e8a3b9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEyeHide", {
get: function () {
return getICON_CLASSRecord("5fe83dd4-fa34-4f40-965f-ad5bec5d3215");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAtalhosFilled", {
get: function () {
return getICON_CLASSRecord("609ff505-1065-43fc-96f1-3720d145ea0d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTelefone", {
get: function () {
return getICON_CLASSRecord("60d626d3-433d-408f-b44a-1b8e694efdd9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTumblr", {
get: function () {
return getICON_CLASSRecord("611c7d6a-9a1c-4abf-91d1-f8dd0c14713d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconParking", {
get: function () {
return getICON_CLASSRecord("61b30cd0-6653-439b-8dd2-369fca293ad3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTvCellPhonePlus", {
get: function () {
return getICON_CLASSRecord("62bc61ca-d82c-42e4-8b67-473fd819dc8a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTopics", {
get: function () {
return getICON_CLASSRecord("63c445a9-e00b-439e-894a-f654a9e05e10");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSms", {
get: function () {
return getICON_CLASSRecord("645894eb-6a2a-4f3d-9f5a-d1d00890a56a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFaq", {
get: function () {
return getICON_CLASSRecord("64cf46ef-ea9f-4660-a177-f48f2a579d58");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEncomenda", {
get: function () {
return getICON_CLASSRecord("6589fd14-7c33-4a72-9064-20efefe6cbac");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInstagram", {
get: function () {
return getICON_CLASSRecord("674b7527-e077-4ad3-8c2c-9b9342171cd8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropLeftCheia", {
get: function () {
return getICON_CLASSRecord("694e5a50-3cb8-4ebc-af08-5af555c7b215");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMore", {
get: function () {
return getICON_CLASSRecord("6a520bf2-b475-4adf-ae64-9415882ff1d9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCurrentLocation", {
get: function () {
return getICON_CLASSRecord("6a5a33b0-0175-4b2d-804a-4db38c9db0d2");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconItunes", {
get: function () {
return getICON_CLASSRecord("6bae4222-38f7-49ff-8e78-5fd2596b4121");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCartaz", {
get: function () {
return getICON_CLASSRecord("6cdd0308-8940-4740-bcff-c48a34bb1ea9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFavorite", {
get: function () {
return getICON_CLASSRecord("6eb70ef0-4a5b-4687-b631-ab7eaa03f246");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPrime", {
get: function () {
return getICON_CLASSRecord("7132c09e-9e19-43dc-a715-65b4f4000cf6");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMessenger", {
get: function () {
return getICON_CLASSRecord("714140ea-e4f1-46ac-931d-ce197005d7fa");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconUserPlus", {
get: function () {
return getICON_CLASSRecord("71a80589-7bf8-42dc-ba08-9e46b561029a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckCircleLine", {
get: function () {
return getICON_CLASSRecord("723da398-6895-4db2-bffe-981d3fffffe3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHbo", {
get: function () {
return getICON_CLASSRecord("725dab7a-d101-4027-bd37-9f4d3eec70d6");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHome", {
get: function () {
return getICON_CLASSRecord("72c1ea44-44c8-4aa8-8731-55fe90fa8ca0");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconContacto", {
get: function () {
return getICON_CLASSRecord("73d73c7c-1d7c-4129-a999-1202918387b4");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTabAjuda", {
get: function () {
return getICON_CLASSRecord("79a52476-1ce5-4901-84d8-9d88cd81cab9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconClose", {
get: function () {
return getICON_CLASSRecord("7b8503c7-a296-4714-aaa5-54727448226f");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMetro", {
get: function () {
return getICON_CLASSRecord("7b96765a-c5b2-4d6a-825a-d15504573de3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratchNatalFilled", {
get: function () {
return getICON_CLASSRecord("7c6f3a2d-00f0-478e-a3f0-167cd3227894");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorRoundedV2", {
get: function () {
return getICON_CLASSRecord("7d4b0b9d-921d-475e-a367-ea09342d84c8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWalletNatal", {
get: function () {
return getICON_CLASSRecord("7e077556-3472-468e-be3b-cecfd17fccf9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGoogle", {
get: function () {
return getICON_CLASSRecord("7f74c380-9afe-4511-b05e-0bb4102416d4");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSearch", {
get: function () {
return getICON_CLASSRecord("7fa60abf-fd65-4c02-90f3-f13cb3e9e460");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconVip", {
get: function () {
return getICON_CLASSRecord("80b8643f-4ea9-4e56-b005-b8d3b8fc69e2");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCalendar", {
get: function () {
return getICON_CLASSRecord("811f7369-61f8-44fe-bf88-dfb1e863ea62");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMagnifyingGlassMin", {
get: function () {
return getICON_CLASSRecord("81f62088-b850-40a9-9d24-c4b912e38789");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucy", {
get: function () {
return getICON_CLASSRecord("8278feb3-bf45-4eba-9983-ae16cc6251fd");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorNovo", {
get: function () {
return getICON_CLASSRecord("832b127c-7e55-4bb1-8ed5-bf207ae07a50");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHeart", {
get: function () {
return getICON_CLASSRecord("8419ef28-e5f9-4a79-af67-2916b230164d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconExternalLink", {
get: function () {
return getICON_CLASSRecord("853d8d6a-35e8-4bcf-9c7c-9723234b539a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCartaoNos", {
get: function () {
return getICON_CLASSRecord("85799301-4686-4962-9dc6-48fd5ed86b8c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZonaFilled", {
get: function () {
return getICON_CLASSRecord("85ba2fcb-3c07-4418-91c5-f106423e0541");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMovie", {
get: function () {
return getICON_CLASSRecord("867b3a21-d19a-4ffd-bb6d-b4562489b82c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconChat", {
get: function () {
return getICON_CLASSRecord("890f1121-90c8-4658-a79f-6bd652a5c992");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "icontTvPlus", {
get: function () {
return getICON_CLASSRecord("8a7394d7-fb7b-4bae-9850-360c288b79ab");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAjudaNos", {
get: function () {
return getICON_CLASSRecord("8a7dacd9-d79a-4bb5-b351-f2f9ea45f6ff");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckAll", {
get: function () {
return getICON_CLASSRecord("8ab6722f-0b42-49ce-a149-89befe5a4bb6");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTabBarAtalhos", {
get: function () {
return getICON_CLASSRecord("8e45834b-ca5f-4045-984f-bbccada61826");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCardError01", {
get: function () {
return getICON_CLASSRecord("8f29ee51-b0b3-4626-b9e7-d9422168dd96");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPremium", {
get: function () {
return getICON_CLASSRecord("8f7497d3-400d-4bb6-9d01-340372cccd39");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratchNatal", {
get: function () {
return getICON_CLASSRecord("9071e854-ba1a-43cd-a665-dd2f5d56920c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRadioButtonOff", {
get: function () {
return getICON_CLASSRecord("9157d001-7087-4463-b9f1-0314dca5f528");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconIMessage", {
get: function () {
return getICON_CLASSRecord("9400960f-16b2-4b1b-bb95-b5fe828dc3d1");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTeather", {
get: function () {
return getICON_CLASSRecord("95bea852-0c3e-48b1-86de-38b38c36303e");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGesturesWipeHorizontal", {
get: function () {
return getICON_CLASSRecord("9656dca4-51a4-437f-ab5c-e283659834de");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconYoutube", {
get: function () {
return getICON_CLASSRecord("96c0d608-9194-4170-a8f0-03c6f7aceb37");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSlidersEqual", {
get: function () {
return getICON_CLASSRecord("9744a38b-e2d6-4edd-a0d5-566f4ceec129");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTwitch", {
get: function () {
return getICON_CLASSRecord("98031b00-d686-4694-b56f-2ea1b1ff45a1");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPinterest", {
get: function () {
return getICON_CLASSRecord("9b54ebaa-f706-4e53-8b3e-cc577eabb5d8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMuda", {
get: function () {
return getICON_CLASSRecord("9c68a1ef-6782-430e-bcf5-8e601310e53d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowUp", {
get: function () {
return getICON_CLASSRecord("9d00a261-df34-4bbb-ac68-bd957888b3d9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheck", {
get: function () {
return getICON_CLASSRecord("9f85dd1a-28d8-4a3e-a9b0-09f88ecb093e");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSeatsXl", {
get: function () {
return getICON_CLASSRecord("a074b85b-9a45-429e-9d5c-c940de46ce47");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPcSmartphone", {
get: function () {
return getICON_CLASSRecord("a2f0c7b1-d94c-423a-8dd3-561e1e3e3f77");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTicket", {
get: function () {
return getICON_CLASSRecord("a4bc95b7-ce62-4da5-afe8-4895ed545b73");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlterarContexto", {
get: function () {
return getICON_CLASSRecord("a57ff59c-5608-4c3c-b300-413aa3b6fb47");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTv", {
get: function () {
return getICON_CLASSRecord("a5b64568-2c3b-4569-9452-8fb56f199718");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEletronicInvoice", {
get: function () {
return getICON_CLASSRecord("a77500a0-d6ef-4152-9ac3-5e3bd7b250fd");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSimCard", {
get: function () {
return getICON_CLASSRecord("a84626a8-2967-4578-953a-a8939787af79");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZona", {
get: function () {
return getICON_CLASSRecord("a8f22183-52f4-4341-9bc4-3bc8cd0ff992");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBookmark", {
get: function () {
return getICON_CLASSRecord("aa47b522-2816-4858-bf9d-c83880b2fe6e");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPlayCircle", {
get: function () {
return getICON_CLASSRecord("aa8d6c1c-b6e7-44bb-a116-f67b8c669cbe");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconLocation", {
get: function () {
return getICON_CLASSRecord("ab8e19b4-fa25-4fa4-bcbe-8ef79807cf0c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTicketsFilled", {
get: function () {
return getICON_CLASSRecord("acf32c21-52de-4e7d-91e8-f08fd460c192");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTvHD", {
get: function () {
return getICON_CLASSRecord("b0769287-51cb-47f3-9473-a6445af70fa3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTelemovel", {
get: function () {
return getICON_CLASSRecord("b1f13a43-5240-410f-a1c7-74aed8c2c0d3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorRounded", {
get: function () {
return getICON_CLASSRecord("b33adfc1-7559-4bae-9170-5019ca3ce1df");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBill", {
get: function () {
return getICON_CLASSRecord("b635c5d1-d875-4eb4-9140-b854d84506d6");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconListInverted", {
get: function () {
return getICON_CLASSRecord("b6649ac2-4b33-4d07-85c3-9392355136ca");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPopCornNew", {
get: function () {
return getICON_CLASSRecord("b68cfa8f-1566-400a-88e2-169e166679c2");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCopiar", {
get: function () {
return getICON_CLASSRecord("b6bab7da-9419-40da-bb39-a42e83720f0a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSeatColor", {
get: function () {
return getICON_CLASSRecord("b7e797f4-b455-443a-8fb7-8c082dd9b67a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconScratch", {
get: function () {
return getICON_CLASSRecord("b7f71ed8-f49a-470e-aa4c-c3d1bb791b38");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMaisNatalWTF", {
get: function () {
return getICON_CLASSRecord("b8d6b224-7c36-4a09-8be5-ee29f47cd115");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFilterFilled", {
get: function () {
return getICON_CLASSRecord("b9aa8387-f155-4bb8-b920-fa5d3b08c947");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckBoxOff", {
get: function () {
return getICON_CLASSRecord("ba5e3751-896e-4615-8386-e08039f43e0f");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNotificacoes", {
get: function () {
return getICON_CLASSRecord("bb610fbf-72c5-49c0-9806-e9a630529824");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMessageSuccessWTF", {
get: function () {
return getICON_CLASSRecord("bbfd4eac-b4c8-424f-9522-f3c8256ccde1");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconPremiumSeatXL", {
get: function () {
return getICON_CLASSRecord("bdfeb64e-3109-4f84-808f-a09d59d8d5b7");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAppleMusic", {
get: function () {
return getICON_CLASSRecord("be911cac-a3df-4adf-a602-0bffaed86100");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRouter", {
get: function () {
return getICON_CLASSRecord("bea8023a-f5ec-4cef-abab-c208537890eb");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEnvelopOpen", {
get: function () {
return getICON_CLASSRecord("bef95d1d-3e00-4187-a067-7900d1b5c95c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInternet", {
get: function () {
return getICON_CLASSRecord("bfd476fc-ac45-4a38-bff1-524d65e24334");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGoogleMusic", {
get: function () {
return getICON_CLASSRecord("c06618eb-7595-4a21-8d26-876bd7ff2a38");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMaisWTF", {
get: function () {
return getICON_CLASSRecord("c0c1b4d3-435f-49b1-af20-2bea36276a50");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlertRounded", {
get: function () {
return getICON_CLASSRecord("c10f6c06-a595-4f1c-af4b-7a0a819878f8");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconTicketFilled", {
get: function () {
return getICON_CLASSRecord("c1cb057f-5ffd-437b-bb74-eecedd69667a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconUser", {
get: function () {
return getICON_CLASSRecord("c2921be5-b316-42e3-aa26-d7d590c127c4");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconZonaNatalFilled", {
get: function () {
return getICON_CLASSRecord("c49fa011-b4c1-4d3d-87e2-b7e624b821e3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDotsHorizontal", {
get: function () {
return getICON_CLASSRecord("c588a0d6-c262-4f33-84f9-2b25aa343dd6");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBack", {
get: function () {
return getICON_CLASSRecord("c605ef4d-f8e5-4d9c-8d32-96de02fec138");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowLeft", {
get: function () {
return getICON_CLASSRecord("c6839bc2-52e1-49f9-9a33-0f2c61befe82");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDotsVertical", {
get: function () {
return getICON_CLASSRecord("cb7aa433-4cd2-4a59-a08c-d95c4bf1941d");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconForumNos", {
get: function () {
return getICON_CLASSRecord("cd6557a8-a44d-417b-93c4-336b6df9e444");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEletronicInvoiceNew", {
get: function () {
return getICON_CLASSRecord("cf2cc7cb-eafa-453c-b310-352580360073");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconErrorRoundedFilledV2", {
get: function () {
return getICON_CLASSRecord("d0be93fe-114a-42ea-b172-38376cbc1b04");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconBellCheck", {
get: function () {
return getICON_CLASSRecord("d0d2579c-59fb-4e16-a871-1a71d193332a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconNetMovel", {
get: function () {
return getICON_CLASSRecord("d1f7d660-8a76-4250-9782-82f8e244c719");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucyNatalFilled", {
get: function () {
return getICON_CLASSRecord("d22d0b57-de00-4f93-8eb0-80c400ec90b0");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconArrowDown", {
get: function () {
return getICON_CLASSRecord("d2cd9ec7-9b69-468b-8b1c-2a34ba3b9da3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconGestureDoubleTap", {
get: function () {
return getICON_CLASSRecord("d4b4e0d3-94dc-4bf7-9cad-5eb9aa00e2ca");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWindows", {
get: function () {
return getICON_CLASSRecord("d6455aba-7cef-4a48-8d1e-5799c53dbf1a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAlertTriangleFilled", {
get: function () {
return getICON_CLASSRecord("d8a3f9d2-0f15-4667-a6ae-91cf9ec34d99");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFacebook", {
get: function () {
return getICON_CLASSRecord("da91f8cd-c1a2-4e79-a3b2-6f358bfa43ba");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconDislike", {
get: function () {
return getICON_CLASSRecord("dba88543-c98a-434b-8ab7-b3bad26038b3");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconFaceTime", {
get: function () {
return getICON_CLASSRecord("df92fd71-9b56-41cb-85c2-665f9e5fc1fe");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSpotify", {
get: function () {
return getICON_CLASSRecord("e1d2fd99-388f-4312-82b2-07d85e0319b7");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconSaucyFilled", {
get: function () {
return getICON_CLASSRecord("e2d0c688-8770-4a9e-a3b9-0635dcee6b62");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconInternetData", {
get: function () {
return getICON_CLASSRecord("e5030fb0-23c7-4754-8a94-ba385f85988a");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRadioButtonOn", {
get: function () {
return getICON_CLASSRecord("e63cf556-7f97-4a41-9f86-7d2498336765");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconCheckCircle", {
get: function () {
return getICON_CLASSRecord("e67bde37-6a83-4a29-8ccb-c3dcaa996eae");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconRecycleBinEmpty", {
get: function () {
return getICON_CLASSRecord("e722390d-6826-4c00-809b-421808b2edb0");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEnvelopeClosed", {
get: function () {
return getICON_CLASSRecord("e889b360-6d3d-4db6-913e-801ad74ad638");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconMobilidade", {
get: function () {
return getICON_CLASSRecord("ec3ba0bc-94ba-4c3e-a224-5b7ebae2bfd1");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconEdit", {
get: function () {
return getICON_CLASSRecord("ecf06917-d913-4a0b-95ef-dc1571fa875c");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAdmin", {
get: function () {
return getICON_CLASSRecord("f0614f61-661d-4c96-a384-42eb2363ab5f");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconAmazon", {
get: function () {
return getICON_CLASSRecord("f1121331-7df3-44a2-926a-9b162df5fed9");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWhatsapp", {
get: function () {
return getICON_CLASSRecord("f1b721a3-dfdb-47f4-9b3f-f9a60dfc5311");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconShare", {
get: function () {
return getICON_CLASSRecord("f576738a-b1f7-47f0-891d-5d2e97c1f525");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconWalletFilled", {
get: function () {
return getICON_CLASSRecord("fa0cf488-587a-4b71-a3ff-ff24002f169f");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconViber", {
get: function () {
return getICON_CLASSRecord("fac3d751-fe8e-4590-a202-813145d1c877");
}
});

Object.defineProperty(MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS, "iconHeartFilled", {
get: function () {
return getICON_CLASSRecord("fcc8dde8-3d2f-4589-9f97-9ee7a5e9b90c");
}
});

});
