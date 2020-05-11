define("Mobile_LoginNOS.model$Detail3Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail3Rec = (function (_super) {
__extends(Detail3Rec, _super);
function Detail3Rec(defaults) {
_super.apply(this, arguments);
}
Detail3Rec.attributesToDeclare = function () {
return [
this.attr("Errorcode", "errorcodeAttr", "errorcode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Detail3Rec.fromStructure = function (str) {
return new Detail3Rec(new Detail3Rec.RecordClass({
errorcodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Detail3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Detail3Rec.init();
return Detail3Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Detail3Rec = Detail3Rec;

});
define("Mobile_LoginNOS.model$Detail3List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail3List = (function (_super) {
__extends(Detail3List, _super);
function Detail3List(defaults) {
_super.apply(this, arguments);
}
Detail3List.RecordType = Mobile_LoginNOSModel.Detail3Rec;
return Detail3List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Detail3List = Detail3List;

});
define("Mobile_LoginNOS.model$Detail4Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail4Rec = (function (_super) {
__extends(Detail4Rec, _super);
function Detail4Rec(defaults) {
_super.apply(this, arguments);
}
Detail4Rec.attributesToDeclare = function () {
return [
this.attr("Errorcode", "errorcodeAttr", "errorcode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Detail4Rec.fromStructure = function (str) {
return new Detail4Rec(new Detail4Rec.RecordClass({
errorcodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Detail4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Detail4Rec.init();
return Detail4Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Detail4Rec = Detail4Rec;

});
define("Mobile_LoginNOS.model$DetailRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var DetailRec = (function (_super) {
__extends(DetailRec, _super);
function DetailRec(defaults) {
_super.apply(this, arguments);
}
DetailRec.attributesToDeclare = function () {
return [
this.attr("Errorcode", "errorcodeAttr", "errorcode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
DetailRec.fromStructure = function (str) {
return new DetailRec(new DetailRec.RecordClass({
errorcodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
DetailRec.init();
return DetailRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.DetailRec = DetailRec;

});
define("Mobile_LoginNOS.model$FaultRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$DetailRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var FaultRec = (function (_super) {
__extends(FaultRec, _super);
function FaultRec(defaults) {
_super.apply(this, arguments);
}
FaultRec.attributesToDeclare = function () {
return [
this.attr("Faultstring", "faultstringAttr", "faultstring", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "detail", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.DetailRec());
}, Mobile_LoginNOSModel.DetailRec)
].concat(_super.attributesToDeclare.call(this));
};
FaultRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
FaultRec.init();
return FaultRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.FaultRec = FaultRec;

});
define("Mobile_LoginNOS.model$FaultRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$FaultRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var FaultRecord = (function (_super) {
__extends(FaultRecord, _super);
function FaultRecord(defaults) {
_super.apply(this, arguments);
}
FaultRecord.attributesToDeclare = function () {
return [
this.attr("Fault", "faultAttr", "Fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.FaultRec());
}, Mobile_LoginNOSModel.FaultRec)
].concat(_super.attributesToDeclare.call(this));
};
FaultRecord.fromStructure = function (str) {
return new FaultRecord(new FaultRecord.RecordClass({
faultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FaultRecord.IsAnonymousRecord = true;
FaultRecord.UniqueId = "02571607-aef6-acf3-aef8-c3a78b7764a0";
FaultRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
FaultRecord.init();
return FaultRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.FaultRecord = FaultRecord;

});
define("Mobile_LoginNOS.model$Log_PostTokenRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_PostTokenRec = (function (_super) {
__extends(Log_PostTokenRec, _super);
function Log_PostTokenRec(defaults) {
_super.apply(this, arguments);
}
Log_PostTokenRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CallBackURL", "callBackURLAttr", "CallBackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_PostTokenRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_PostTokenRec.init();
return Log_PostTokenRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_PostTokenRec = Log_PostTokenRec;

});
define("Mobile_LoginNOS.model$Log_PostTokenList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_PostTokenRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_PostTokenList = (function (_super) {
__extends(Log_PostTokenList, _super);
function Log_PostTokenList(defaults) {
_super.apply(this, arguments);
}
Log_PostTokenList.RecordType = Mobile_LoginNOSModel.Log_PostTokenRec;
return Log_PostTokenList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_PostTokenList = Log_PostTokenList;

});
define("Mobile_LoginNOS.model$Detail2Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail2Rec = (function (_super) {
__extends(Detail2Rec, _super);
function Detail2Rec(defaults) {
_super.apply(this, arguments);
}
Detail2Rec.attributesToDeclare = function () {
return [
this.attr("Errorcode", "errorcodeAttr", "errorcode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Detail2Rec.fromStructure = function (str) {
return new Detail2Rec(new Detail2Rec.RecordClass({
errorcodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Detail2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Detail2Rec.init();
return Detail2Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Detail2Rec = Detail2Rec;

});
define("Mobile_LoginNOS.model$Fault2Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault2Rec = (function (_super) {
__extends(Fault2Rec, _super);
function Fault2Rec(defaults) {
_super.apply(this, arguments);
}
Fault2Rec.attributesToDeclare = function () {
return [
this.attr("Faultstring", "faultstringAttr", "faultstring", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "detail", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Detail2Rec());
}, Mobile_LoginNOSModel.Detail2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Fault2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Fault2Rec.init();
return Fault2Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Fault2Rec = Fault2Rec;

});
define("Mobile_LoginNOS.model$AccessTokenPasswordRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenPasswordRec = (function (_super) {
__extends(AccessTokenPasswordRec, _super);
function AccessTokenPasswordRec(defaults) {
_super.apply(this, arguments);
}
AccessTokenPasswordRec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Token_type", "token_typeAttr", "token_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Scope", "scopeAttr", "scope", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Issued_at", "issued_atAttr", "issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_expires_in", "refresh_token_expires_inAttr", "refresh_token_expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Refresh_token_issued_at", "refresh_token_issued_atAttr", "refresh_token_issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_status", "refresh_token_statusAttr", "refresh_token_status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_count", "refresh_countAttr", "refresh_count", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault2Rec());
}, Mobile_LoginNOSModel.Fault2Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenPasswordRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessTokenPasswordRec.init();
return AccessTokenPasswordRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenPasswordRec = AccessTokenPasswordRec;

});
define("Mobile_LoginNOS.model$HTTPHeader3Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader3Rec = (function (_super) {
__extends(HTTPHeader3Rec, _super);
function HTTPHeader3Rec(defaults) {
_super.apply(this, arguments);
}
HTTPHeader3Rec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPHeader3Rec.init();
return HTTPHeader3Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader3Rec = HTTPHeader3Rec;

});
define("Mobile_LoginNOS.model$HTTPHeader3Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader3Record = (function (_super) {
__extends(HTTPHeader3Record, _super);
function HTTPHeader3Record(defaults) {
_super.apply(this, arguments);
}
HTTPHeader3Record.attributesToDeclare = function () {
return [
this.attr("HTTPHeader3", "hTTPHeader3Attr", "HTTPHeader3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader3Rec());
}, Mobile_LoginNOSModel.HTTPHeader3Rec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader3Record.fromStructure = function (str) {
return new HTTPHeader3Record(new HTTPHeader3Record.RecordClass({
hTTPHeader3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPHeader3Record.IsAnonymousRecord = true;
HTTPHeader3Record.UniqueId = "69cbb7e9-2820-f8d0-92ba-8718e717401d";
HTTPHeader3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPHeader3Record.init();
return HTTPHeader3Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader3Record = HTTPHeader3Record;

});
define("Mobile_LoginNOS.model$HTTPHeader3RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader3Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader3RecordList = (function (_super) {
__extends(HTTPHeader3RecordList, _super);
function HTTPHeader3RecordList(defaults) {
_super.apply(this, arguments);
}
HTTPHeader3RecordList.RecordType = Mobile_LoginNOSModel.HTTPHeader3Record;
return HTTPHeader3RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader3RecordList = HTTPHeader3RecordList;

});
define("Mobile_LoginNOS.model$ICON_CLASSRecord", ["exports", "OutSystems", "MobileUIWidgets.model", "Mobile_LoginNOS.model", "MobileUIWidgets.model$ICON_CLASSRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, Mobile_LoginNOSModel) {
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
Mobile_LoginNOSModel.ICON_CLASSRecord = ICON_CLASSRecord;

});
define("Mobile_LoginNOS.model$ICON_CLASSRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ICON_CLASSRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ICON_CLASSRecordList = (function (_super) {
__extends(ICON_CLASSRecordList, _super);
function ICON_CLASSRecordList(defaults) {
_super.apply(this, arguments);
}
ICON_CLASSRecordList.RecordType = Mobile_LoginNOSModel.ICON_CLASSRecord;
return ICON_CLASSRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ICON_CLASSRecordList = ICON_CLASSRecordList;

});
define("Mobile_LoginNOS.model$UserInfoRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$FaultRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfoRec = (function (_super) {
__extends(UserInfoRec, _super);
function UserInfoRec(defaults) {
_super.apply(this, arguments);
}
UserInfoRec.attributesToDeclare = function () {
return [
this.attr("Uid", "uidAttr", "uid", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Username", "usernameAttr", "username", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_ca", "user_caAttr", "user_ca", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_sa", "user_saAttr", "user_sa", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_session_id", "user_session_idAttr", "user_session_id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_display_name", "user_display_nameAttr", "user_display_name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_picture_url", "user_picture_urlAttr", "user_picture_url", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_type", "user_typeAttr", "user_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_profile", "user_profileAttr", "user_profile", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_profile_id", "user_profile_idAttr", "user_profile_id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_app_features", "user_app_featuresAttr", "user_app_features", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_impersonated_by", "user_impersonated_byAttr", "user_impersonated_by", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_impersonated_at", "user_impersonated_atAttr", "user_impersonated_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_impersonated_attributes", "user_impersonated_attributesAttr", "user_impersonated_attributes", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Auto_login", "auto_loginAttr", "auto_login", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Home_gateway", "home_gatewayAttr", "home_gateway", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_ip", "client_ipAttr", "client_ip", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_cpes", "user_cpesAttr", "user_cpes", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_origin_platform", "user_origin_platformAttr", "user_origin_platform", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.FaultRec());
}, Mobile_LoginNOSModel.FaultRec)
].concat(_super.attributesToDeclare.call(this));
};
UserInfoRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
UserInfoRec.init();
return UserInfoRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserInfoRec = UserInfoRec;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutputRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutputRec = (function (_super) {
__extends(Log_UserInfoOutputRec, _super);
function Log_UserInfoOutputRec(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutputRec.attributesToDeclare = function () {
return [
this.attr("UserInfo", "userInfoAttr", "UserInfo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.UserInfoRec());
}, Mobile_LoginNOSModel.UserInfoRec), 
this.attr("Error", "errorAttr", "Error", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_UserInfoOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_UserInfoOutputRec.init();
return Log_UserInfoOutputRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_UserInfoOutputRec = Log_UserInfoOutputRec;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutputList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutputList = (function (_super) {
__extends(Log_UserInfoOutputList, _super);
function Log_UserInfoOutputList(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutputList.RecordType = Mobile_LoginNOSModel.Log_UserInfoOutputRec;
return Log_UserInfoOutputList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_UserInfoOutputList = Log_UserInfoOutputList;

});
define("Mobile_LoginNOS.model$Log_RegistrationOutputRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationOutputRec = (function (_super) {
__extends(Log_RegistrationOutputRec, _super);
function Log_RegistrationOutputRec(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationOutputRec.attributesToDeclare = function () {
return [
this.attr("URL", "uRLAttr", "URL", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_RegistrationOutputRec.fromStructure = function (str) {
return new Log_RegistrationOutputRec(new Log_RegistrationOutputRec.RecordClass({
uRLAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RegistrationOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_RegistrationOutputRec.init();
return Log_RegistrationOutputRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RegistrationOutputRec = Log_RegistrationOutputRec;

});
define("Mobile_LoginNOS.model$Log_RegistrationOutputList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RegistrationOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationOutputList = (function (_super) {
__extends(Log_RegistrationOutputList, _super);
function Log_RegistrationOutputList(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationOutputList.RecordType = Mobile_LoginNOSModel.Log_RegistrationOutputRec;
return Log_RegistrationOutputList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RegistrationOutputList = Log_RegistrationOutputList;

});
define("Mobile_LoginNOS.model$RefreshAccessTokenRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var RefreshAccessTokenRec = (function (_super) {
__extends(RefreshAccessTokenRec, _super);
function RefreshAccessTokenRec(defaults) {
_super.apply(this, arguments);
}
RefreshAccessTokenRec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Token_type", "token_typeAttr", "token_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Scope", "scopeAttr", "scope", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Issued_at", "issued_atAttr", "issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_expires_in", "refresh_token_expires_inAttr", "refresh_token_expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Refresh_token_issued_at", "refresh_token_issued_atAttr", "refresh_token_issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_status", "refresh_token_statusAttr", "refresh_token_status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_count", "refresh_countAttr", "refresh_count", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
RefreshAccessTokenRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
RefreshAccessTokenRec.init();
return RefreshAccessTokenRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.RefreshAccessTokenRec = RefreshAccessTokenRec;

});
define("Mobile_LoginNOS.model$RefreshAccessTokenRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$RefreshAccessTokenRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var RefreshAccessTokenRecord = (function (_super) {
__extends(RefreshAccessTokenRecord, _super);
function RefreshAccessTokenRecord(defaults) {
_super.apply(this, arguments);
}
RefreshAccessTokenRecord.attributesToDeclare = function () {
return [
this.attr("RefreshAccessToken", "refreshAccessTokenAttr", "RefreshAccessToken", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.RefreshAccessTokenRec());
}, Mobile_LoginNOSModel.RefreshAccessTokenRec)
].concat(_super.attributesToDeclare.call(this));
};
RefreshAccessTokenRecord.fromStructure = function (str) {
return new RefreshAccessTokenRecord(new RefreshAccessTokenRecord.RecordClass({
refreshAccessTokenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RefreshAccessTokenRecord.IsAnonymousRecord = true;
RefreshAccessTokenRecord.UniqueId = "81d27448-f39a-777c-b47b-f0e7da4fdb2e";
RefreshAccessTokenRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
RefreshAccessTokenRecord.init();
return RefreshAccessTokenRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.RefreshAccessTokenRecord = RefreshAccessTokenRecord;

});
define("Mobile_LoginNOS.model$RefreshAccessTokenRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$RefreshAccessTokenRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var RefreshAccessTokenRecordList = (function (_super) {
__extends(RefreshAccessTokenRecordList, _super);
function RefreshAccessTokenRecordList(defaults) {
_super.apply(this, arguments);
}
RefreshAccessTokenRecordList.RecordType = Mobile_LoginNOSModel.RefreshAccessTokenRecord;
return RefreshAccessTokenRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.RefreshAccessTokenRecordList = RefreshAccessTokenRecordList;

});
define("Mobile_LoginNOS.model$HTTPHeader3List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader3List = (function (_super) {
__extends(HTTPHeader3List, _super);
function HTTPHeader3List(defaults) {
_super.apply(this, arguments);
}
HTTPHeader3List.RecordType = Mobile_LoginNOSModel.HTTPHeader3Rec;
return HTTPHeader3List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader3List = HTTPHeader3List;

});
define("Mobile_LoginNOS.model$HTTPResponse2Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader3List"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse2Rec = (function (_super) {
__extends(HTTPResponse2Rec, _super);
function HTTPResponse2Rec(defaults) {
_super.apply(this, arguments);
}
HTTPResponse2Rec.attributesToDeclare = function () {
return [
this.attr("StatusCode", "statusCodeAttr", "StatusCode", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("StatusLine", "statusLineAttr", "StatusLine", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Headers", "headersAttr", "Headers", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader3List());
}, Mobile_LoginNOSModel.HTTPHeader3List), 
this.attr("ResponseText", "responseTextAttr", "ResponseText", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResponseBinary", "responseBinaryAttr", "ResponseBinary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponse2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPResponse2Rec.init();
return HTTPResponse2Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponse2Rec = HTTPResponse2Rec;

});
define("Mobile_LoginNOS.model$HTTPResponse2Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse2Record = (function (_super) {
__extends(HTTPResponse2Record, _super);
function HTTPResponse2Record(defaults) {
_super.apply(this, arguments);
}
HTTPResponse2Record.attributesToDeclare = function () {
return [
this.attr("HTTPResponse2", "hTTPResponse2Attr", "HTTPResponse2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPResponse2Rec());
}, Mobile_LoginNOSModel.HTTPResponse2Rec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponse2Record.fromStructure = function (str) {
return new HTTPResponse2Record(new HTTPResponse2Record.RecordClass({
hTTPResponse2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPResponse2Record.IsAnonymousRecord = true;
HTTPResponse2Record.UniqueId = "0910efe7-6855-5409-659b-60423d746592";
HTTPResponse2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPResponse2Record.init();
return HTTPResponse2Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponse2Record = HTTPResponse2Record;

});
define("Mobile_LoginNOS.model$HTTPHeader4Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader4Rec = (function (_super) {
__extends(HTTPHeader4Rec, _super);
function HTTPHeader4Rec(defaults) {
_super.apply(this, arguments);
}
HTTPHeader4Rec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPHeader4Rec.init();
return HTTPHeader4Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader4Rec = HTTPHeader4Rec;

});
define("Mobile_LoginNOS.model$HTTPHeader4List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader4List = (function (_super) {
__extends(HTTPHeader4List, _super);
function HTTPHeader4List(defaults) {
_super.apply(this, arguments);
}
HTTPHeader4List.RecordType = Mobile_LoginNOSModel.HTTPHeader4Rec;
return HTTPHeader4List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader4List = HTTPHeader4List;

});
define("Mobile_LoginNOS.model$HTTPResponse3Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader4List"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse3Rec = (function (_super) {
__extends(HTTPResponse3Rec, _super);
function HTTPResponse3Rec(defaults) {
_super.apply(this, arguments);
}
HTTPResponse3Rec.attributesToDeclare = function () {
return [
this.attr("StatusCode", "statusCodeAttr", "StatusCode", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("StatusLine", "statusLineAttr", "StatusLine", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Headers", "headersAttr", "Headers", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader4List());
}, Mobile_LoginNOSModel.HTTPHeader4List), 
this.attr("ResponseText", "responseTextAttr", "ResponseText", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResponseBinary", "responseBinaryAttr", "ResponseBinary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponse3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPResponse3Rec.init();
return HTTPResponse3Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponse3Rec = HTTPResponse3Rec;

});
define("Mobile_LoginNOS.model$Log_UserInfoRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoRec = (function (_super) {
__extends(Log_UserInfoRec, _super);
function Log_UserInfoRec(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoRec.attributesToDeclare = function () {
return [
this.attr("Access_Token", "access_TokenAttr", "Access_Token", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_UserInfoRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_UserInfoRec.init();
return Log_UserInfoRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_UserInfoRec = Log_UserInfoRec;

});
define("Mobile_LoginNOS.model$Log_UserInfoList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoList = (function (_super) {
__extends(Log_UserInfoList, _super);
function Log_UserInfoList(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoList.RecordType = Mobile_LoginNOSModel.Log_UserInfoRec;
return Log_UserInfoList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_UserInfoList = Log_UserInfoList;

});
define("Mobile_LoginNOS.model$STR_LogNameValueRecord", ["exports", "OutSystems", "CE_LOGGING.model", "Mobile_LoginNOS.model", "CE_LOGGING.model$STR_LogNameValueRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CE_LOGGING"], function (exports, OutSystems, CE_LOGGINGModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_LogNameValueRecord = (function (_super) {
__extends(STR_LogNameValueRecord, _super);
function STR_LogNameValueRecord(defaults) {
_super.apply(this, arguments);
}
STR_LogNameValueRecord.attributesToDeclare = function () {
return [
this.attr("STR_LogNameValue", "sTR_LogNameValueAttr", "STR_LogNameValue", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CE_LOGGINGModel.STR_LogNameValueRec());
}, CE_LOGGINGModel.STR_LogNameValueRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_LogNameValueRecord.fromStructure = function (str) {
return new STR_LogNameValueRecord(new STR_LogNameValueRecord.RecordClass({
sTR_LogNameValueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_LogNameValueRecord.IsAnonymousRecord = true;
STR_LogNameValueRecord.UniqueId = "e69fcbe6-803a-f5de-8abb-dae1f947e377";
STR_LogNameValueRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_LogNameValueRecord.init();
return STR_LogNameValueRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.STR_LogNameValueRecord = STR_LogNameValueRecord;

});
define("Mobile_LoginNOS.model$STR_LogNameValueRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$STR_LogNameValueRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_LogNameValueRecordList = (function (_super) {
__extends(STR_LogNameValueRecordList, _super);
function STR_LogNameValueRecordList(defaults) {
_super.apply(this, arguments);
}
STR_LogNameValueRecordList.RecordType = Mobile_LoginNOSModel.STR_LogNameValueRecord;
return STR_LogNameValueRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.STR_LogNameValueRecordList = STR_LogNameValueRecordList;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenOutputRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$RefreshAccessTokenRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenOutputRec = (function (_super) {
__extends(Log_RefreshAccessTokenOutputRec, _super);
function Log_RefreshAccessTokenOutputRec(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenOutputRec.attributesToDeclare = function () {
return [
this.attr("Error", "errorAttr", "Error", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("RefreshAccessToken", "refreshAccessTokenAttr", "RefreshAccessToken", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.RefreshAccessTokenRec());
}, Mobile_LoginNOSModel.RefreshAccessTokenRec), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_RefreshAccessTokenOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_RefreshAccessTokenOutputRec.init();
return Log_RefreshAccessTokenOutputRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputRec = Log_RefreshAccessTokenOutputRec;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenOutputRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RefreshAccessTokenOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenOutputRecord = (function (_super) {
__extends(Log_RefreshAccessTokenOutputRecord, _super);
function Log_RefreshAccessTokenOutputRecord(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenOutputRecord.attributesToDeclare = function () {
return [
this.attr("Log_RefreshAccessTokenOutput", "log_RefreshAccessTokenOutputAttr", "Log_RefreshAccessTokenOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputRec());
}, Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_RefreshAccessTokenOutputRecord.fromStructure = function (str) {
return new Log_RefreshAccessTokenOutputRecord(new Log_RefreshAccessTokenOutputRecord.RecordClass({
log_RefreshAccessTokenOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RefreshAccessTokenOutputRecord.IsAnonymousRecord = true;
Log_RefreshAccessTokenOutputRecord.UniqueId = "fdf19ae5-f965-e6a5-8074-44d52003b98f";
Log_RefreshAccessTokenOutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_RefreshAccessTokenOutputRecord.init();
return Log_RefreshAccessTokenOutputRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputRecord = Log_RefreshAccessTokenOutputRecord;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenOutputRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RefreshAccessTokenOutputRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenOutputRecordList = (function (_super) {
__extends(Log_RefreshAccessTokenOutputRecordList, _super);
function Log_RefreshAccessTokenOutputRecordList(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenOutputRecordList.RecordType = Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputRecord;
return Log_RefreshAccessTokenOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputRecordList = Log_RefreshAccessTokenOutputRecordList;

});
define("Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCode_OpenIDRec = (function (_super) {
__extends(AccessTokenCode_OpenIDRec, _super);
function AccessTokenCode_OpenIDRec(defaults) {
_super.apply(this, arguments);
}
AccessTokenCode_OpenIDRec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Token_type", "token_typeAttr", "token_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Scope", "scopeAttr", "scope", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Issued_at", "issued_atAttr", "issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_expires_in", "refresh_token_expires_inAttr", "refresh_token_expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Refresh_token_issued_at", "refresh_token_issued_atAttr", "refresh_token_issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_status", "refresh_token_statusAttr", "refresh_token_status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_count", "refresh_countAttr", "refresh_count", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Id_token", "id_tokenAttr", "id_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Faultstring", "faultstringAttr", "faultstring", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Errorcode", "errorcodeAttr", "errorcode", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenCode_OpenIDRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessTokenCode_OpenIDRec.init();
return AccessTokenCode_OpenIDRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec = AccessTokenCode_OpenIDRec;

});
define("Mobile_LoginNOS.model$AccessTokenCode_OpenIDList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCode_OpenIDList = (function (_super) {
__extends(AccessTokenCode_OpenIDList, _super);
function AccessTokenCode_OpenIDList(defaults) {
_super.apply(this, arguments);
}
AccessTokenCode_OpenIDList.RecordType = Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec;
return AccessTokenCode_OpenIDList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenCode_OpenIDList = AccessTokenCode_OpenIDList;

});
define("Mobile_LoginNOS.model$Fault3Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault3Rec = (function (_super) {
__extends(Fault3Rec, _super);
function Fault3Rec(defaults) {
_super.apply(this, arguments);
}
Fault3Rec.attributesToDeclare = function () {
return [
this.attr("Faultstring", "faultstringAttr", "faultstring", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "detail", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Detail3Rec());
}, Mobile_LoginNOSModel.Detail3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Fault3Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Fault3Rec.init();
return Fault3Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Fault3Rec = Fault3Rec;

});
define("Mobile_LoginNOS.model$Value2Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Value2Rec = (function (_super) {
__extends(Value2Rec, _super);
function Value2Rec(defaults) {
_super.apply(this, arguments);
}
Value2Rec.attributesToDeclare = function () {
return [
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault3Rec());
}, Mobile_LoginNOSModel.Fault3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Value2Rec.fromStructure = function (str) {
return new Value2Rec(new Value2Rec.RecordClass({
faultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Value2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Value2Rec.init();
return Value2Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Value2Rec = Value2Rec;

});
define("Mobile_LoginNOS.model$Token_Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Value2Rec", "Mobile_LoginNOS.model$Fault3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Token_Rec = (function (_super) {
__extends(Token_Rec, _super);
function Token_Rec(defaults) {
_super.apply(this, arguments);
}
Token_Rec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Token_type", "token_typeAttr", "token_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Scope", "scopeAttr", "scope", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Issued_at", "issued_atAttr", "issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_expires_in", "refresh_token_expires_inAttr", "refresh_token_expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Refresh_token_issued_at", "refresh_token_issued_atAttr", "refresh_token_issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_status", "refresh_token_statusAttr", "refresh_token_status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_count", "refresh_countAttr", "refresh_count", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Id_token", "id_tokenAttr", "id_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "value", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Value2Rec());
}, Mobile_LoginNOSModel.Value2Rec), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault3Rec());
}, Mobile_LoginNOSModel.Fault3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Token_Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Token_Rec.init();
return Token_Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Token_Rec = Token_Rec;

});
define("Mobile_LoginNOS.model$Token_List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Token_Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Token_List = (function (_super) {
__extends(Token_List, _super);
function Token_List(defaults) {
_super.apply(this, arguments);
}
Token_List.RecordType = Mobile_LoginNOSModel.Token_Rec;
return Token_List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Token_List = Token_List;

});
define("Mobile_LoginNOS.model$Log_LogoutOpenIdRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOpenIdRec = (function (_super) {
__extends(Log_LogoutOpenIdRec, _super);
function Log_LogoutOpenIdRec(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOpenIdRec.attributesToDeclare = function () {
return [
this.attr("CallBackURL", "callBackURLAttr", "CallBackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IdToken", "idTokenAttr", "IdToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_LogoutOpenIdRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_LogoutOpenIdRec.init();
return Log_LogoutOpenIdRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_LogoutOpenIdRec = Log_LogoutOpenIdRec;

});
define("Mobile_LoginNOS.model$Log_LogoutOpenIdList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutOpenIdRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOpenIdList = (function (_super) {
__extends(Log_LogoutOpenIdList, _super);
function Log_LogoutOpenIdList(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOpenIdList.RecordType = Mobile_LoginNOSModel.Log_LogoutOpenIdRec;
return Log_LogoutOpenIdList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_LogoutOpenIdList = Log_LogoutOpenIdList;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenRec = (function (_super) {
__extends(Log_RefreshAccessTokenRec, _super);
function Log_RefreshAccessTokenRec(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenRec.attributesToDeclare = function () {
return [
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_Token", "refresh_TokenAttr", "Refresh_Token", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_RefreshAccessTokenRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_RefreshAccessTokenRec.init();
return Log_RefreshAccessTokenRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RefreshAccessTokenRec = Log_RefreshAccessTokenRec;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RefreshAccessTokenRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenList = (function (_super) {
__extends(Log_RefreshAccessTokenList, _super);
function Log_RefreshAccessTokenList(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenList.RecordType = Mobile_LoginNOSModel.Log_RefreshAccessTokenRec;
return Log_RefreshAccessTokenList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RefreshAccessTokenList = Log_RefreshAccessTokenList;

});
define("Mobile_LoginNOS.model$Detail2List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail2List = (function (_super) {
__extends(Detail2List, _super);
function Detail2List(defaults) {
_super.apply(this, arguments);
}
Detail2List.RecordType = Mobile_LoginNOSModel.Detail2Rec;
return Detail2List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Detail2List = Detail2List;

});
define("Mobile_LoginNOS.model$HTTPHeader4Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader4Record = (function (_super) {
__extends(HTTPHeader4Record, _super);
function HTTPHeader4Record(defaults) {
_super.apply(this, arguments);
}
HTTPHeader4Record.attributesToDeclare = function () {
return [
this.attr("HTTPHeader4", "hTTPHeader4Attr", "HTTPHeader4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader4Rec());
}, Mobile_LoginNOSModel.HTTPHeader4Rec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader4Record.fromStructure = function (str) {
return new HTTPHeader4Record(new HTTPHeader4Record.RecordClass({
hTTPHeader4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPHeader4Record.IsAnonymousRecord = true;
HTTPHeader4Record.UniqueId = "2a4ebb8d-a19c-f6b1-3609-f188fb7974c7";
HTTPHeader4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPHeader4Record.init();
return HTTPHeader4Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader4Record = HTTPHeader4Record;

});
define("Mobile_LoginNOS.model$HTTPHeader4RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader4Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader4RecordList = (function (_super) {
__extends(HTTPHeader4RecordList, _super);
function HTTPHeader4RecordList(defaults) {
_super.apply(this, arguments);
}
HTTPHeader4RecordList.RecordType = Mobile_LoginNOSModel.HTTPHeader4Record;
return HTTPHeader4RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader4RecordList = HTTPHeader4RecordList;

});
define("Mobile_LoginNOS.model$UserInfo_ResponseRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfo_ResponseRec = (function (_super) {
__extends(UserInfo_ResponseRec, _super);
function UserInfo_ResponseRec(defaults) {
_super.apply(this, arguments);
}
UserInfo_ResponseRec.attributesToDeclare = function () {
return [
this.attr("Uid", "uidAttr", "uid", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Username", "usernameAttr", "username", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_ca", "user_caAttr", "user_ca", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_sa", "user_saAttr", "user_sa", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_session_id", "user_session_idAttr", "user_session_id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_display_name", "user_display_nameAttr", "user_display_name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_picture_url", "user_picture_urlAttr", "user_picture_url", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_type", "user_typeAttr", "user_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_profile", "user_profileAttr", "user_profile", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_profile_id", "user_profile_idAttr", "user_profile_id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_app_features", "user_app_featuresAttr", "user_app_features", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_impersonated_by", "user_impersonated_byAttr", "user_impersonated_by", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_impersonated_at", "user_impersonated_atAttr", "user_impersonated_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_impersonated_attributes", "user_impersonated_attributesAttr", "user_impersonated_attributes", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Auto_login", "auto_loginAttr", "auto_login", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Home_gateway", "home_gatewayAttr", "home_gateway", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_ip", "client_ipAttr", "client_ip", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_cpes", "user_cpesAttr", "user_cpes", false, OS.Types.Text, function () {
return "";
}), 
this.attr("User_origin_platform", "user_origin_platformAttr", "user_origin_platform", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault3Rec());
}, Mobile_LoginNOSModel.Fault3Rec)
].concat(_super.attributesToDeclare.call(this));
};
UserInfo_ResponseRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
UserInfo_ResponseRec.init();
return UserInfo_ResponseRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserInfo_ResponseRec = UserInfo_ResponseRec;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutput2Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfo_ResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutput2Rec = (function (_super) {
__extends(Log_UserInfoOutput2Rec, _super);
function Log_UserInfoOutput2Rec(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutput2Rec.attributesToDeclare = function () {
return [
this.attr("UserInfo", "userInfoAttr", "UserInfo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.UserInfo_ResponseRec());
}, Mobile_LoginNOSModel.UserInfo_ResponseRec), 
this.attr("Error", "errorAttr", "Error", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_UserInfoOutput2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_UserInfoOutput2Rec.init();
return Log_UserInfoOutput2Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_UserInfoOutput2Rec = Log_UserInfoOutput2Rec;

});
define("Mobile_LoginNOS.model$Detail3Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail3Record = (function (_super) {
__extends(Detail3Record, _super);
function Detail3Record(defaults) {
_super.apply(this, arguments);
}
Detail3Record.attributesToDeclare = function () {
return [
this.attr("Detail3", "detail3Attr", "Detail3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Detail3Rec());
}, Mobile_LoginNOSModel.Detail3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Detail3Record.fromStructure = function (str) {
return new Detail3Record(new Detail3Record.RecordClass({
detail3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Detail3Record.IsAnonymousRecord = true;
Detail3Record.UniqueId = "1316246d-28b3-f76b-1e67-0ce2af3ad631";
Detail3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Detail3Record.init();
return Detail3Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Detail3Record = Detail3Record;

});
define("Mobile_LoginNOS.model$STR_FixedIPRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_FixedIPRec = (function (_super) {
__extends(STR_FixedIPRec, _super);
function STR_FixedIPRec(defaults) {
_super.apply(this, arguments);
}
STR_FixedIPRec.attributesToDeclare = function () {
return [
this.attr("IP", "iPAttr", "IP", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_FixedIPRec.fromStructure = function (str) {
return new STR_FixedIPRec(new STR_FixedIPRec.RecordClass({
iPAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_FixedIPRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_FixedIPRec.init();
return STR_FixedIPRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.STR_FixedIPRec = STR_FixedIPRec;

});
define("Mobile_LoginNOS.model$STR_FixedIPList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$STR_FixedIPRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_FixedIPList = (function (_super) {
__extends(STR_FixedIPList, _super);
function STR_FixedIPList(defaults) {
_super.apply(this, arguments);
}
STR_FixedIPList.RecordType = Mobile_LoginNOSModel.STR_FixedIPRec;
return STR_FixedIPList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.STR_FixedIPList = STR_FixedIPList;

});
define("Mobile_LoginNOS.model$Detail4Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail4Record = (function (_super) {
__extends(Detail4Record, _super);
function Detail4Record(defaults) {
_super.apply(this, arguments);
}
Detail4Record.attributesToDeclare = function () {
return [
this.attr("Detail4", "detail4Attr", "Detail4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Detail4Rec());
}, Mobile_LoginNOSModel.Detail4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Detail4Record.fromStructure = function (str) {
return new Detail4Record(new Detail4Record.RecordClass({
detail4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Detail4Record.IsAnonymousRecord = true;
Detail4Record.UniqueId = "14a7f14a-8957-23b8-886b-722b22450ecc";
Detail4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Detail4Record.init();
return Detail4Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Detail4Record = Detail4Record;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutput2List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoOutput2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutput2List = (function (_super) {
__extends(Log_UserInfoOutput2List, _super);
function Log_UserInfoOutput2List(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutput2List.RecordType = Mobile_LoginNOSModel.Log_UserInfoOutput2Rec;
return Log_UserInfoOutput2List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_UserInfoOutput2List = Log_UserInfoOutput2List;

});
define("Mobile_LoginNOS.model$Token_Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Token_Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Token_Record = (function (_super) {
__extends(Token_Record, _super);
function Token_Record(defaults) {
_super.apply(this, arguments);
}
Token_Record.attributesToDeclare = function () {
return [
this.attr("Token_", "token_Attr", "Token_", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Token_Rec());
}, Mobile_LoginNOSModel.Token_Rec)
].concat(_super.attributesToDeclare.call(this));
};
Token_Record.fromStructure = function (str) {
return new Token_Record(new Token_Record.RecordClass({
token_Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Token_Record.IsAnonymousRecord = true;
Token_Record.UniqueId = "acb03677-973a-d3d2-dab6-7b0850d56eba";
Token_Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Token_Record.init();
return Token_Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Token_Record = Token_Record;

});
define("Mobile_LoginNOS.model$Token_RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Token_Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Token_RecordList = (function (_super) {
__extends(Token_RecordList, _super);
function Token_RecordList(defaults) {
_super.apply(this, arguments);
}
Token_RecordList.RecordType = Mobile_LoginNOSModel.Token_Record;
return Token_RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Token_RecordList = Token_RecordList;

});
define("Mobile_LoginNOS.model$Log_RegistrationRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationRec = (function (_super) {
__extends(Log_RegistrationRec, _super);
function Log_RegistrationRec(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationRec.attributesToDeclare = function () {
return [
this.attr("CallBackURL", "callBackURLAttr", "CallBackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_RegistrationRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_RegistrationRec.init();
return Log_RegistrationRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RegistrationRec = Log_RegistrationRec;

});
define("Mobile_LoginNOS.model$ValueRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ValueRec = (function (_super) {
__extends(ValueRec, _super);
function ValueRec(defaults) {
_super.apply(this, arguments);
}
ValueRec.attributesToDeclare = function () {
return [
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault2Rec());
}, Mobile_LoginNOSModel.Fault2Rec)
].concat(_super.attributesToDeclare.call(this));
};
ValueRec.fromStructure = function (str) {
return new ValueRec(new ValueRec.RecordClass({
faultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValueRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
ValueRec.init();
return ValueRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.ValueRec = ValueRec;

});
define("Mobile_LoginNOS.model$ValueList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ValueRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ValueList = (function (_super) {
__extends(ValueList, _super);
function ValueList(defaults) {
_super.apply(this, arguments);
}
ValueList.RecordType = Mobile_LoginNOSModel.ValueRec;
return ValueList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ValueList = ValueList;

});
define("Mobile_LoginNOS.model$HTTPHeader5Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader5Rec = (function (_super) {
__extends(HTTPHeader5Rec, _super);
function HTTPHeader5Rec(defaults) {
_super.apply(this, arguments);
}
HTTPHeader5Rec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader5Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPHeader5Rec.init();
return HTTPHeader5Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader5Rec = HTTPHeader5Rec;

});
define("Mobile_LoginNOS.model$HTTPHeader5List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader5Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader5List = (function (_super) {
__extends(HTTPHeader5List, _super);
function HTTPHeader5List(defaults) {
_super.apply(this, arguments);
}
HTTPHeader5List.RecordType = Mobile_LoginNOSModel.HTTPHeader5Rec;
return HTTPHeader5List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader5List = HTTPHeader5List;

});
define("Mobile_LoginNOS.model$HTTPResponse4Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader5List"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse4Rec = (function (_super) {
__extends(HTTPResponse4Rec, _super);
function HTTPResponse4Rec(defaults) {
_super.apply(this, arguments);
}
HTTPResponse4Rec.attributesToDeclare = function () {
return [
this.attr("StatusCode", "statusCodeAttr", "StatusCode", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("StatusLine", "statusLineAttr", "StatusLine", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Headers", "headersAttr", "Headers", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader5List());
}, Mobile_LoginNOSModel.HTTPHeader5List), 
this.attr("ResponseText", "responseTextAttr", "ResponseText", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResponseBinary", "responseBinaryAttr", "ResponseBinary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponse4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPResponse4Rec.init();
return HTTPResponse4Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponse4Rec = HTTPResponse4Rec;

});
define("Mobile_LoginNOS.model$HTTPResponse4Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse4Record = (function (_super) {
__extends(HTTPResponse4Record, _super);
function HTTPResponse4Record(defaults) {
_super.apply(this, arguments);
}
HTTPResponse4Record.attributesToDeclare = function () {
return [
this.attr("HTTPResponse4", "hTTPResponse4Attr", "HTTPResponse4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPResponse4Rec());
}, Mobile_LoginNOSModel.HTTPResponse4Rec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponse4Record.fromStructure = function (str) {
return new HTTPResponse4Record(new HTTPResponse4Record.RecordClass({
hTTPResponse4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPResponse4Record.IsAnonymousRecord = true;
HTTPResponse4Record.UniqueId = "1e74fb1d-0487-f698-4cf0-5acd184c413f";
HTTPResponse4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPResponse4Record.init();
return HTTPResponse4Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponse4Record = HTTPResponse4Record;

});
define("Mobile_LoginNOS.model$OutputList", ["exports", "OutSystems", "ActivityLogger.model", "Mobile_LoginNOS.model", "ActivityLogger.model$OutputRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ActivityLogger"], function (exports, OutSystems, ActivityLoggerModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var OutputList = (function (_super) {
__extends(OutputList, _super);
function OutputList(defaults) {
_super.apply(this, arguments);
}
OutputList.RecordType = ActivityLoggerModel.OutputRec;
return OutputList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.OutputList = OutputList;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointOutputRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointOutputRec = (function (_super) {
__extends(Log_AuthorizeEndPointOutputRec, _super);
function Log_AuthorizeEndPointOutputRec(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointOutputRec.attributesToDeclare = function () {
return [
this.attr("EndPoint", "endPointAttr", "EndPoint", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Parameters", "parametersAttr", "Parameters", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CodeVerifier", "codeVerifierAttr", "CodeVerifier", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_AuthorizeEndPointOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_AuthorizeEndPointOutputRec.init();
return Log_AuthorizeEndPointOutputRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputRec = Log_AuthorizeEndPointOutputRec;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointOutputList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AuthorizeEndPointOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointOutputList = (function (_super) {
__extends(Log_AuthorizeEndPointOutputList, _super);
function Log_AuthorizeEndPointOutputList(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointOutputList.RecordType = Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputRec;
return Log_AuthorizeEndPointOutputList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputList = Log_AuthorizeEndPointOutputList;

});
define("Mobile_LoginNOS.model$AccessTokenCodeRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$FaultRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCodeRec = (function (_super) {
__extends(AccessTokenCodeRec, _super);
function AccessTokenCodeRec(defaults) {
_super.apply(this, arguments);
}
AccessTokenCodeRec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Token_type", "token_typeAttr", "token_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Scope", "scopeAttr", "scope", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Issued_at", "issued_atAttr", "issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_expires_in", "refresh_token_expires_inAttr", "refresh_token_expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Refresh_token_issued_at", "refresh_token_issued_atAttr", "refresh_token_issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_status", "refresh_token_statusAttr", "refresh_token_status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_count", "refresh_countAttr", "refresh_count", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.FaultRec());
}, Mobile_LoginNOSModel.FaultRec)
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenCodeRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessTokenCodeRec.init();
return AccessTokenCodeRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenCodeRec = AccessTokenCodeRec;

});
define("Mobile_LoginNOS.model$HTTPHeader2Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader2Rec = (function (_super) {
__extends(HTTPHeader2Rec, _super);
function HTTPHeader2Rec(defaults) {
_super.apply(this, arguments);
}
HTTPHeader2Rec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Value", "valueAttr", "Value", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPHeader2Rec.init();
return HTTPHeader2Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader2Rec = HTTPHeader2Rec;

});
define("Mobile_LoginNOS.model$HTTPHeader2Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader2Record = (function (_super) {
__extends(HTTPHeader2Record, _super);
function HTTPHeader2Record(defaults) {
_super.apply(this, arguments);
}
HTTPHeader2Record.attributesToDeclare = function () {
return [
this.attr("HTTPHeader2", "hTTPHeader2Attr", "HTTPHeader2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader2Rec());
}, Mobile_LoginNOSModel.HTTPHeader2Rec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader2Record.fromStructure = function (str) {
return new HTTPHeader2Record(new HTTPHeader2Record.RecordClass({
hTTPHeader2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPHeader2Record.IsAnonymousRecord = true;
HTTPHeader2Record.UniqueId = "b6c22e0f-db42-2ddc-a4be-4c6c1206f60b";
HTTPHeader2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPHeader2Record.init();
return HTTPHeader2Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader2Record = HTTPHeader2Record;

});
define("Mobile_LoginNOS.model$HTTPHeader2RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader2Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader2RecordList = (function (_super) {
__extends(HTTPHeader2RecordList, _super);
function HTTPHeader2RecordList(defaults) {
_super.apply(this, arguments);
}
HTTPHeader2RecordList.RecordType = Mobile_LoginNOSModel.HTTPHeader2Record;
return HTTPHeader2RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader2RecordList = HTTPHeader2RecordList;

});
define("Mobile_LoginNOS.model$Fault4Rec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault4Rec = (function (_super) {
__extends(Fault4Rec, _super);
function Fault4Rec(defaults) {
_super.apply(this, arguments);
}
Fault4Rec.attributesToDeclare = function () {
return [
this.attr("Faultstring", "faultstringAttr", "faultstring", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Detail", "detailAttr", "detail", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Detail4Rec());
}, Mobile_LoginNOSModel.Detail4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Fault4Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Fault4Rec.init();
return Fault4Rec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Fault4Rec = Fault4Rec;

});
define("Mobile_LoginNOS.model$Fault4List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault4List = (function (_super) {
__extends(Fault4List, _super);
function Fault4List(defaults) {
_super.apply(this, arguments);
}
Fault4List.RecordType = Mobile_LoginNOSModel.Fault4Rec;
return Fault4List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Fault4List = Fault4List;

});
define("Mobile_LoginNOS.model$ClaimRecord", ["exports", "OutSystems", "JWT.model", "Mobile_LoginNOS.model", "JWT.model$ClaimRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$JWT"], function (exports, OutSystems, JWTModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ClaimRecord = (function (_super) {
__extends(ClaimRecord, _super);
function ClaimRecord(defaults) {
_super.apply(this, arguments);
}
ClaimRecord.attributesToDeclare = function () {
return [
this.attr("Claim", "claimAttr", "Claim", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new JWTModel.ClaimRec());
}, JWTModel.ClaimRec)
].concat(_super.attributesToDeclare.call(this));
};
ClaimRecord.fromStructure = function (str) {
return new ClaimRecord(new ClaimRecord.RecordClass({
claimAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ClaimRecord.IsAnonymousRecord = true;
ClaimRecord.UniqueId = "22bcab61-13ec-2fd1-800f-faebe406e5f5";
ClaimRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ClaimRecord.init();
return ClaimRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.ClaimRecord = ClaimRecord;

});
define("Mobile_LoginNOS.model$Log_RegistrationRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RegistrationRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationRecord = (function (_super) {
__extends(Log_RegistrationRecord, _super);
function Log_RegistrationRecord(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationRecord.attributesToDeclare = function () {
return [
this.attr("Log_Registration", "log_RegistrationAttr", "Log_Registration", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_RegistrationRec());
}, Mobile_LoginNOSModel.Log_RegistrationRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_RegistrationRecord.fromStructure = function (str) {
return new Log_RegistrationRecord(new Log_RegistrationRecord.RecordClass({
log_RegistrationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RegistrationRecord.IsAnonymousRecord = true;
Log_RegistrationRecord.UniqueId = "22ec3039-6cdd-d14d-a077-24ba8cf5fa34";
Log_RegistrationRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_RegistrationRecord.init();
return Log_RegistrationRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RegistrationRecord = Log_RegistrationRecord;

});
define("Mobile_LoginNOS.model$ParameterRecord", ["exports", "OutSystems", "ActivityLogger.model", "Mobile_LoginNOS.model", "ActivityLogger.model$ParameterRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ActivityLogger"], function (exports, OutSystems, ActivityLoggerModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ParameterRecord = (function (_super) {
__extends(ParameterRecord, _super);
function ParameterRecord(defaults) {
_super.apply(this, arguments);
}
ParameterRecord.attributesToDeclare = function () {
return [
this.attr("Parameter", "parameterAttr", "Parameter", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ActivityLoggerModel.ParameterRec());
}, ActivityLoggerModel.ParameterRec)
].concat(_super.attributesToDeclare.call(this));
};
ParameterRecord.fromStructure = function (str) {
return new ParameterRecord(new ParameterRecord.RecordClass({
parameterAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ParameterRecord.IsAnonymousRecord = true;
ParameterRecord.UniqueId = "239d949f-c4ff-b507-e69b-1002fbc56ff6";
ParameterRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ParameterRecord.init();
return ParameterRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.ParameterRecord = ParameterRecord;

});
define("Mobile_LoginNOS.model$Value2List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Value2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Value2List = (function (_super) {
__extends(Value2List, _super);
function Value2List(defaults) {
_super.apply(this, arguments);
}
Value2List.RecordType = Mobile_LoginNOSModel.Value2Rec;
return Value2List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Value2List = Value2List;

});
define("Mobile_LoginNOS.model$UserDataRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$FaultRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserDataRec = (function (_super) {
__extends(UserDataRec, _super);
function UserDataRec(defaults) {
_super.apply(this, arguments);
}
UserDataRec.attributesToDeclare = function () {
return [
this.attr("contact_phone", "contact_phoneAttr", "contact_phone", false, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("name", "nameAttr", "name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("birth_date", "birth_dateAttr", "birth_date", false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("gender", "genderAttr", "gender", false, OS.Types.Text, function () {
return "";
}), 
this.attr("username", "usernameAttr", "username", false, OS.Types.Text, function () {
return "";
}), 
this.attr("picture", "pictureAttr", "picture", false, OS.Types.Text, function () {
return "";
}), 
this.attr("UserAccessToken", "userAccessTokenAttr", "UserAccessToken", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.FaultRec());
}, Mobile_LoginNOSModel.FaultRec)
].concat(_super.attributesToDeclare.call(this));
};
UserDataRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
UserDataRec.init();
return UserDataRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserDataRec = UserDataRec;

});
define("Mobile_LoginNOS.model$UserDataRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserDataRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserDataRecord = (function (_super) {
__extends(UserDataRecord, _super);
function UserDataRecord(defaults) {
_super.apply(this, arguments);
}
UserDataRecord.attributesToDeclare = function () {
return [
this.attr("UserData", "userDataAttr", "UserData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.UserDataRec());
}, Mobile_LoginNOSModel.UserDataRec)
].concat(_super.attributesToDeclare.call(this));
};
UserDataRecord.fromStructure = function (str) {
return new UserDataRecord(new UserDataRecord.RecordClass({
userDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserDataRecord.IsAnonymousRecord = true;
UserDataRecord.UniqueId = "262781bd-6e15-8bb3-2384-45b581931397";
UserDataRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
UserDataRecord.init();
return UserDataRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserDataRecord = UserDataRecord;

});
define("Mobile_LoginNOS.model$Log_RevokeRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RevokeRec = (function (_super) {
__extends(Log_RevokeRec, _super);
function Log_RevokeRec(defaults) {
_super.apply(this, arguments);
}
Log_RevokeRec.attributesToDeclare = function () {
return [
this.attr("Authorization", "authorizationAttr", "Authorization", false, OS.Types.Text, function () {
return "";
}), 
this.attr("RefreshToken", "refreshTokenAttr", "RefreshToken", false, OS.Types.Text, function () {
return "";
}), 
this.attr("TokenHint", "tokenHintAttr", "TokenHint", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_RevokeRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_RevokeRec.init();
return Log_RevokeRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RevokeRec = Log_RevokeRec;

});
define("Mobile_LoginNOS.model$Detail2Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail2Record = (function (_super) {
__extends(Detail2Record, _super);
function Detail2Record(defaults) {
_super.apply(this, arguments);
}
Detail2Record.attributesToDeclare = function () {
return [
this.attr("Detail2", "detail2Attr", "Detail2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Detail2Rec());
}, Mobile_LoginNOSModel.Detail2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Detail2Record.fromStructure = function (str) {
return new Detail2Record(new Detail2Record.RecordClass({
detail2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Detail2Record.IsAnonymousRecord = true;
Detail2Record.UniqueId = "ddc6083a-9ae0-a61e-ee8d-877d7d9af2bf";
Detail2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Detail2Record.init();
return Detail2Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Detail2Record = Detail2Record;

});
define("Mobile_LoginNOS.model$Detail2RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail2Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail2RecordList = (function (_super) {
__extends(Detail2RecordList, _super);
function Detail2RecordList(defaults) {
_super.apply(this, arguments);
}
Detail2RecordList.RecordType = Mobile_LoginNOSModel.Detail2Record;
return Detail2RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Detail2RecordList = Detail2RecordList;

});
define("Mobile_LoginNOS.model$ICON_SIZEList", ["exports", "OutSystems", "MobileUIWidgets.model", "Mobile_LoginNOS.model", "MobileUIWidgets.model$ICON_SIZERec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ICON_SIZEList = (function (_super) {
__extends(ICON_SIZEList, _super);
function ICON_SIZEList(defaults) {
_super.apply(this, arguments);
}
ICON_SIZEList.RecordType = MobileUIWidgetsModel.ICON_SIZERec;
return ICON_SIZEList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ICON_SIZEList = ICON_SIZEList;

});
define("Mobile_LoginNOS.model$Fault3Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault3Record = (function (_super) {
__extends(Fault3Record, _super);
function Fault3Record(defaults) {
_super.apply(this, arguments);
}
Fault3Record.attributesToDeclare = function () {
return [
this.attr("Fault3", "fault3Attr", "Fault3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault3Rec());
}, Mobile_LoginNOSModel.Fault3Rec)
].concat(_super.attributesToDeclare.call(this));
};
Fault3Record.fromStructure = function (str) {
return new Fault3Record(new Fault3Record.RecordClass({
fault3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Fault3Record.IsAnonymousRecord = true;
Fault3Record.UniqueId = "2c58c84c-6068-0d66-763f-b87dfd606899";
Fault3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Fault3Record.init();
return Fault3Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Fault3Record = Fault3Record;

});
define("Mobile_LoginNOS.model$Fault4Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault4Record = (function (_super) {
__extends(Fault4Record, _super);
function Fault4Record(defaults) {
_super.apply(this, arguments);
}
Fault4Record.attributesToDeclare = function () {
return [
this.attr("Fault4", "fault4Attr", "Fault4", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault4Rec());
}, Mobile_LoginNOSModel.Fault4Rec)
].concat(_super.attributesToDeclare.call(this));
};
Fault4Record.fromStructure = function (str) {
return new Fault4Record(new Fault4Record.RecordClass({
fault4Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Fault4Record.IsAnonymousRecord = true;
Fault4Record.UniqueId = "2cfb3b8c-e8f5-ada8-f73f-f76f7c29cc3d";
Fault4Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Fault4Record.init();
return Fault4Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Fault4Record = Fault4Record;

});
define("Mobile_LoginNOS.model$Log_RegistrationOutputRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RegistrationOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationOutputRecord = (function (_super) {
__extends(Log_RegistrationOutputRecord, _super);
function Log_RegistrationOutputRecord(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationOutputRecord.attributesToDeclare = function () {
return [
this.attr("Log_RegistrationOutput", "log_RegistrationOutputAttr", "Log_RegistrationOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_RegistrationOutputRec());
}, Mobile_LoginNOSModel.Log_RegistrationOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_RegistrationOutputRecord.fromStructure = function (str) {
return new Log_RegistrationOutputRecord(new Log_RegistrationOutputRecord.RecordClass({
log_RegistrationOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RegistrationOutputRecord.IsAnonymousRecord = true;
Log_RegistrationOutputRecord.UniqueId = "2d87105c-2988-0a63-ad10-82adc2b87eea";
Log_RegistrationOutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_RegistrationOutputRecord.init();
return Log_RegistrationOutputRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RegistrationOutputRecord = Log_RegistrationOutputRecord;

});
define("Mobile_LoginNOS.model$AccessTokenInfoFERARec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenInfoFERARec = (function (_super) {
__extends(AccessTokenInfoFERARec, _super);
function AccessTokenInfoFERARec(defaults) {
_super.apply(this, arguments);
}
AccessTokenInfoFERARec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Token_type", "token_typeAttr", "token_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Scope", "scopeAttr", "scope", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Issued_at", "issued_atAttr", "issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token", "refresh_tokenAttr", "refresh_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_expires_in", "refresh_token_expires_inAttr", "refresh_token_expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Refresh_token_issued_at", "refresh_token_issued_atAttr", "refresh_token_issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_token_status", "refresh_token_statusAttr", "refresh_token_status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Refresh_count", "refresh_countAttr", "refresh_count", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Id_token", "id_tokenAttr", "id_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault4Rec());
}, Mobile_LoginNOSModel.Fault4Rec)
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenInfoFERARec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
AccessTokenInfoFERARec.init();
return AccessTokenInfoFERARec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenInfoFERARec = AccessTokenInfoFERARec;

});
define("Mobile_LoginNOS.model$AccessTokenInfoFERARecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenInfoFERARec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenInfoFERARecord = (function (_super) {
__extends(AccessTokenInfoFERARecord, _super);
function AccessTokenInfoFERARecord(defaults) {
_super.apply(this, arguments);
}
AccessTokenInfoFERARecord.attributesToDeclare = function () {
return [
this.attr("AccessTokenInfoFERA", "accessTokenInfoFERAAttr", "AccessTokenInfoFERA", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.AccessTokenInfoFERARec());
}, Mobile_LoginNOSModel.AccessTokenInfoFERARec)
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenInfoFERARecord.fromStructure = function (str) {
return new AccessTokenInfoFERARecord(new AccessTokenInfoFERARecord.RecordClass({
accessTokenInfoFERAAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessTokenInfoFERARecord.IsAnonymousRecord = true;
AccessTokenInfoFERARecord.UniqueId = "7f0fc847-d72b-1dde-22ec-131b9d82921f";
AccessTokenInfoFERARecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessTokenInfoFERARecord.init();
return AccessTokenInfoFERARecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenInfoFERARecord = AccessTokenInfoFERARecord;

});
define("Mobile_LoginNOS.model$AccessTokenInfoFERARecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenInfoFERARecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenInfoFERARecordList = (function (_super) {
__extends(AccessTokenInfoFERARecordList, _super);
function AccessTokenInfoFERARecordList(defaults) {
_super.apply(this, arguments);
}
AccessTokenInfoFERARecordList.RecordType = Mobile_LoginNOSModel.AccessTokenInfoFERARecord;
return AccessTokenInfoFERARecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenInfoFERARecordList = AccessTokenInfoFERARecordList;

});
define("Mobile_LoginNOS.model$Log_AccessTokenCodeRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenCodeRec = (function (_super) {
__extends(Log_AccessTokenCodeRec, _super);
function Log_AccessTokenCodeRec(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenCodeRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CallBackURL", "callBackURLAttr", "CallBackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Code_verifier", "code_verifierAttr", "Code_verifier", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_AccessTokenCodeRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_AccessTokenCodeRec.init();
return Log_AccessTokenCodeRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AccessTokenCodeRec = Log_AccessTokenCodeRec;

});
define("Mobile_LoginNOS.model$Log_AccessTokenCodeRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AccessTokenCodeRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenCodeRecord = (function (_super) {
__extends(Log_AccessTokenCodeRecord, _super);
function Log_AccessTokenCodeRecord(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenCodeRecord.attributesToDeclare = function () {
return [
this.attr("Log_AccessTokenCode", "log_AccessTokenCodeAttr", "Log_AccessTokenCode", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_AccessTokenCodeRec());
}, Mobile_LoginNOSModel.Log_AccessTokenCodeRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_AccessTokenCodeRecord.fromStructure = function (str) {
return new Log_AccessTokenCodeRecord(new Log_AccessTokenCodeRecord.RecordClass({
log_AccessTokenCodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_AccessTokenCodeRecord.IsAnonymousRecord = true;
Log_AccessTokenCodeRecord.UniqueId = "2e797071-6fef-deb1-57f2-390cbd917f55";
Log_AccessTokenCodeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_AccessTokenCodeRecord.init();
return Log_AccessTokenCodeRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AccessTokenCodeRecord = Log_AccessTokenCodeRecord;

});
define("Mobile_LoginNOS.model$UserDataRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserDataRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserDataRecordList = (function (_super) {
__extends(UserDataRecordList, _super);
function UserDataRecordList(defaults) {
_super.apply(this, arguments);
}
UserDataRecordList.RecordType = Mobile_LoginNOSModel.UserDataRecord;
return UserDataRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserDataRecordList = UserDataRecordList;

});
define("Mobile_LoginNOS.model$ICON_SIZERecord", ["exports", "OutSystems", "MobileUIWidgets.model", "Mobile_LoginNOS.model", "MobileUIWidgets.model$ICON_SIZERec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, Mobile_LoginNOSModel) {
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
Mobile_LoginNOSModel.ICON_SIZERecord = ICON_SIZERecord;

});
define("Mobile_LoginNOS.model$ICON_SIZERecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ICON_SIZERecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ICON_SIZERecordList = (function (_super) {
__extends(ICON_SIZERecordList, _super);
function ICON_SIZERecordList(defaults) {
_super.apply(this, arguments);
}
ICON_SIZERecordList.RecordType = Mobile_LoginNOSModel.ICON_SIZERecord;
return ICON_SIZERecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ICON_SIZERecordList = ICON_SIZERecordList;

});
define("Mobile_LoginNOS.model$HEX_COLORSRecord", ["exports", "OutSystems", "MobileUIWidgets.model", "Mobile_LoginNOS.model", "MobileUIWidgets.model$HEX_COLORSRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HEX_COLORSRecord = (function (_super) {
__extends(HEX_COLORSRecord, _super);
function HEX_COLORSRecord(defaults) {
_super.apply(this, arguments);
}
HEX_COLORSRecord.attributesToDeclare = function () {
return [
this.attr("HEX_COLORS", "hEX_COLORSAttr", "HEX_COLORS", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.HEX_COLORSRec());
}, MobileUIWidgetsModel.HEX_COLORSRec)
].concat(_super.attributesToDeclare.call(this));
};
HEX_COLORSRecord.fromStructure = function (str) {
return new HEX_COLORSRecord(new HEX_COLORSRecord.RecordClass({
hEX_COLORSAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HEX_COLORSRecord.IsAnonymousRecord = true;
HEX_COLORSRecord.UniqueId = "345d2d8d-db6b-b1fc-ece3-be3f310d3984";
HEX_COLORSRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HEX_COLORSRecord.init();
return HEX_COLORSRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HEX_COLORSRecord = HEX_COLORSRecord;

});
define("Mobile_LoginNOS.model$ErrorList", ["exports", "OutSystems", "CommonPlugin.model", "Mobile_LoginNOS.model", "CommonPlugin.model$ErrorRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ErrorList = (function (_super) {
__extends(ErrorList, _super);
function ErrorList(defaults) {
_super.apply(this, arguments);
}
ErrorList.RecordType = CommonPluginModel.ErrorRec;
return ErrorList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ErrorList = ErrorList;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointRec = (function (_super) {
__extends(Log_AuthorizeEndPointRec, _super);
function Log_AuthorizeEndPointRec(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointRec.attributesToDeclare = function () {
return [
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CallBackURL", "callBackURLAttr", "CallBackURL", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_AuthorizeEndPointRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_AuthorizeEndPointRec.init();
return Log_AuthorizeEndPointRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AuthorizeEndPointRec = Log_AuthorizeEndPointRec;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AuthorizeEndPointRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointRecord = (function (_super) {
__extends(Log_AuthorizeEndPointRecord, _super);
function Log_AuthorizeEndPointRecord(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointRecord.attributesToDeclare = function () {
return [
this.attr("Log_AuthorizeEndPoint", "log_AuthorizeEndPointAttr", "Log_AuthorizeEndPoint", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_AuthorizeEndPointRec());
}, Mobile_LoginNOSModel.Log_AuthorizeEndPointRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_AuthorizeEndPointRecord.fromStructure = function (str) {
return new Log_AuthorizeEndPointRecord(new Log_AuthorizeEndPointRecord.RecordClass({
log_AuthorizeEndPointAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_AuthorizeEndPointRecord.IsAnonymousRecord = true;
Log_AuthorizeEndPointRecord.UniqueId = "34dc2494-b8ba-db9b-abcf-b89adecad6a7";
Log_AuthorizeEndPointRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_AuthorizeEndPointRecord.init();
return Log_AuthorizeEndPointRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AuthorizeEndPointRecord = Log_AuthorizeEndPointRecord;

});
define("Mobile_LoginNOS.model$passwordlessSendRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessSendRec = (function (_super) {
__extends(passwordlessSendRec, _super);
function passwordlessSendRec(defaults) {
_super.apply(this, arguments);
}
passwordlessSendRec.attributesToDeclare = function () {
return [
this.attr("Connection", "connectionAttr", "connection", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Phone_number", "phone_numberAttr", "phone_number", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_id", "client_idAttr", "client_id", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
passwordlessSendRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
passwordlessSendRec.init();
return passwordlessSendRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.passwordlessSendRec = passwordlessSendRec;

});
define("Mobile_LoginNOS.model$passwordlessSendList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$passwordlessSendRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessSendList = (function (_super) {
__extends(passwordlessSendList, _super);
function passwordlessSendList(defaults) {
_super.apply(this, arguments);
}
passwordlessSendList.RecordType = Mobile_LoginNOSModel.passwordlessSendRec;
return passwordlessSendList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.passwordlessSendList = passwordlessSendList;

});
define("Mobile_LoginNOS.model$Log_RevokeList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RevokeRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RevokeList = (function (_super) {
__extends(Log_RevokeList, _super);
function Log_RevokeList(defaults) {
_super.apply(this, arguments);
}
Log_RevokeList.RecordType = Mobile_LoginNOSModel.Log_RevokeRec;
return Log_RevokeList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RevokeList = Log_RevokeList;

});
define("Mobile_LoginNOS.model$HTTPHeader2List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader2List = (function (_super) {
__extends(HTTPHeader2List, _super);
function HTTPHeader2List(defaults) {
_super.apply(this, arguments);
}
HTTPHeader2List.RecordType = Mobile_LoginNOSModel.HTTPHeader2Rec;
return HTTPHeader2List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader2List = HTTPHeader2List;

});
define("Mobile_LoginNOS.model$AccessTokenCode_OpenIDRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCode_OpenIDRecord = (function (_super) {
__extends(AccessTokenCode_OpenIDRecord, _super);
function AccessTokenCode_OpenIDRecord(defaults) {
_super.apply(this, arguments);
}
AccessTokenCode_OpenIDRecord.attributesToDeclare = function () {
return [
this.attr("AccessTokenCode_OpenID", "accessTokenCode_OpenIDAttr", "AccessTokenCode_OpenID", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec());
}, Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec)
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenCode_OpenIDRecord.fromStructure = function (str) {
return new AccessTokenCode_OpenIDRecord(new AccessTokenCode_OpenIDRecord.RecordClass({
accessTokenCode_OpenIDAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessTokenCode_OpenIDRecord.IsAnonymousRecord = true;
AccessTokenCode_OpenIDRecord.UniqueId = "7320fb1b-d391-4e14-cd88-2188dc6a9e2b";
AccessTokenCode_OpenIDRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessTokenCode_OpenIDRecord.init();
return AccessTokenCode_OpenIDRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenCode_OpenIDRecord = AccessTokenCode_OpenIDRecord;

});
define("Mobile_LoginNOS.model$AccessTokenCode_OpenIDRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCode_OpenIDRecordList = (function (_super) {
__extends(AccessTokenCode_OpenIDRecordList, _super);
function AccessTokenCode_OpenIDRecordList(defaults) {
_super.apply(this, arguments);
}
AccessTokenCode_OpenIDRecordList.RecordType = Mobile_LoginNOSModel.AccessTokenCode_OpenIDRecord;
return AccessTokenCode_OpenIDRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenCode_OpenIDRecordList = AccessTokenCode_OpenIDRecordList;

});
define("Mobile_LoginNOS.model$ICON_CLASSList", ["exports", "OutSystems", "MobileUIWidgets.model", "Mobile_LoginNOS.model", "MobileUIWidgets.model$ICON_CLASSRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ICON_CLASSList = (function (_super) {
__extends(ICON_CLASSList, _super);
function ICON_CLASSList(defaults) {
_super.apply(this, arguments);
}
ICON_CLASSList.RecordType = MobileUIWidgetsModel.ICON_CLASSRec;
return ICON_CLASSList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ICON_CLASSList = ICON_CLASSList;

});
define("Mobile_LoginNOS.model$HTTPResponse2RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse2Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse2RecordList = (function (_super) {
__extends(HTTPResponse2RecordList, _super);
function HTTPResponse2RecordList(defaults) {
_super.apply(this, arguments);
}
HTTPResponse2RecordList.RecordType = Mobile_LoginNOSModel.HTTPResponse2Record;
return HTTPResponse2RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponse2RecordList = HTTPResponse2RecordList;

});
define("Mobile_LoginNOS.model$Mobile_OperatingSystemRecord", ["exports", "OutSystems", "CommonPlugin.model", "Mobile_LoginNOS.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Mobile_LoginNOSModel) {
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
Mobile_LoginNOSModel.Mobile_OperatingSystemRecord = Mobile_OperatingSystemRecord;

});
define("Mobile_LoginNOS.model$Mobile_OperatingSystemRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Mobile_OperatingSystemRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemRecordList = (function (_super) {
__extends(Mobile_OperatingSystemRecordList, _super);
function Mobile_OperatingSystemRecordList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemRecordList.RecordType = Mobile_LoginNOSModel.Mobile_OperatingSystemRecord;
return Mobile_OperatingSystemRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Mobile_OperatingSystemRecordList = Mobile_OperatingSystemRecordList;

});
define("Mobile_LoginNOS.model$passwordlessLoginRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessLoginRec = (function (_super) {
__extends(passwordlessLoginRec, _super);
function passwordlessLoginRec(defaults) {
_super.apply(this, arguments);
}
passwordlessLoginRec.attributesToDeclare = function () {
return [
this.attr("Connection", "connectionAttr", "connection", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Phone_number", "phone_numberAttr", "phone_number", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_id", "client_idAttr", "client_id", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Verification_code", "verification_codeAttr", "verification_code", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
passwordlessLoginRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
passwordlessLoginRec.init();
return passwordlessLoginRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.passwordlessLoginRec = passwordlessLoginRec;

});
define("Mobile_LoginNOS.model$STR_LogNameValueList", ["exports", "OutSystems", "CE_LOGGING.model", "Mobile_LoginNOS.model", "CE_LOGGING.model$STR_LogNameValueRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CE_LOGGING"], function (exports, OutSystems, CE_LOGGINGModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_LogNameValueList = (function (_super) {
__extends(STR_LogNameValueList, _super);
function STR_LogNameValueList(defaults) {
_super.apply(this, arguments);
}
STR_LogNameValueList.RecordType = CE_LOGGINGModel.STR_LogNameValueRec;
return STR_LogNameValueList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.STR_LogNameValueList = STR_LogNameValueList;

});
define("Mobile_LoginNOS.model$Log_Openid_AuthorizeEndPointOutputRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_Openid_AuthorizeEndPointOutputRec = (function (_super) {
__extends(Log_Openid_AuthorizeEndPointOutputRec, _super);
function Log_Openid_AuthorizeEndPointOutputRec(defaults) {
_super.apply(this, arguments);
}
Log_Openid_AuthorizeEndPointOutputRec.attributesToDeclare = function () {
return [
this.attr("EndPoint", "endPointAttr", "EndPoint", false, OS.Types.Text, function () {
return "";
}), 
this.attr("CodeVerifier", "codeVerifierAttr", "CodeVerifier", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_Openid_AuthorizeEndPointOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_Openid_AuthorizeEndPointOutputRec.init();
return Log_Openid_AuthorizeEndPointOutputRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputRec = Log_Openid_AuthorizeEndPointOutputRec;

});
define("Mobile_LoginNOS.model$Log_Openid_AuthorizeEndPointOutputRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_Openid_AuthorizeEndPointOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_Openid_AuthorizeEndPointOutputRecord = (function (_super) {
__extends(Log_Openid_AuthorizeEndPointOutputRecord, _super);
function Log_Openid_AuthorizeEndPointOutputRecord(defaults) {
_super.apply(this, arguments);
}
Log_Openid_AuthorizeEndPointOutputRecord.attributesToDeclare = function () {
return [
this.attr("Log_Openid_AuthorizeEndPointOutput", "log_Openid_AuthorizeEndPointOutputAttr", "Log_Openid_AuthorizeEndPointOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputRec());
}, Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Openid_AuthorizeEndPointOutputRecord.fromStructure = function (str) {
return new Log_Openid_AuthorizeEndPointOutputRecord(new Log_Openid_AuthorizeEndPointOutputRecord.RecordClass({
log_Openid_AuthorizeEndPointOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Openid_AuthorizeEndPointOutputRecord.IsAnonymousRecord = true;
Log_Openid_AuthorizeEndPointOutputRecord.UniqueId = "49940873-d040-05c0-05a8-88e5a5b09f90";
Log_Openid_AuthorizeEndPointOutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_Openid_AuthorizeEndPointOutputRecord.init();
return Log_Openid_AuthorizeEndPointOutputRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputRecord = Log_Openid_AuthorizeEndPointOutputRecord;

});
define("Mobile_LoginNOS.model$Log_RegistrationList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RegistrationRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationList = (function (_super) {
__extends(Log_RegistrationList, _super);
function Log_RegistrationList(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationList.RecordType = Mobile_LoginNOSModel.Log_RegistrationRec;
return Log_RegistrationList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RegistrationList = Log_RegistrationList;

});
define("Mobile_LoginNOS.model$TokenInfoRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$FaultRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var TokenInfoRec = (function (_super) {
__extends(TokenInfoRec, _super);
function TokenInfoRec(defaults) {
_super.apply(this, arguments);
}
TokenInfoRec.attributesToDeclare = function () {
return [
this.attr("Access_token", "access_tokenAttr", "access_token", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Token_type", "token_typeAttr", "token_type", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Scope", "scopeAttr", "scope", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Expires_in", "expires_inAttr", "expires_in", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Issued_at", "issued_atAttr", "issued_at", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Status", "statusAttr", "status", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Client_id", "client_idAttr", "client_id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Developer_id", "developer_idAttr", "developer_id", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Developer_app_name", "developer_app_nameAttr", "developer_app_name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Uid", "uidAttr", "uid", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.FaultRec());
}, Mobile_LoginNOSModel.FaultRec)
].concat(_super.attributesToDeclare.call(this));
};
TokenInfoRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
TokenInfoRec.init();
return TokenInfoRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.TokenInfoRec = TokenInfoRec;

});
define("Mobile_LoginNOS.model$GetJwksResponseRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var GetJwksResponseRec = (function (_super) {
__extends(GetJwksResponseRec, _super);
function GetJwksResponseRec(defaults) {
_super.apply(this, arguments);
}
GetJwksResponseRec.attributesToDeclare = function () {
return [
this.attr("Kty", "ktyAttr", "kty", false, OS.Types.Text, function () {
return "";
}), 
this.attr("N", "nAttr", "n", false, OS.Types.Text, function () {
return "";
}), 
this.attr("E", "eAttr", "e", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Alg", "algAttr", "alg", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Kid", "kidAttr", "kid", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Use", "useAttr", "use", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
GetJwksResponseRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetJwksResponseRec.init();
return GetJwksResponseRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.GetJwksResponseRec = GetJwksResponseRec;

});
define("Mobile_LoginNOS.model$GetJwksResponseRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$GetJwksResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var GetJwksResponseRecord = (function (_super) {
__extends(GetJwksResponseRecord, _super);
function GetJwksResponseRecord(defaults) {
_super.apply(this, arguments);
}
GetJwksResponseRecord.attributesToDeclare = function () {
return [
this.attr("GetJwksResponse", "getJwksResponseAttr", "GetJwksResponse", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.GetJwksResponseRec());
}, Mobile_LoginNOSModel.GetJwksResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
GetJwksResponseRecord.fromStructure = function (str) {
return new GetJwksResponseRecord(new GetJwksResponseRecord.RecordClass({
getJwksResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetJwksResponseRecord.IsAnonymousRecord = true;
GetJwksResponseRecord.UniqueId = "ef32c02e-6b73-9345-540e-6044b1aeb321";
GetJwksResponseRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
GetJwksResponseRecord.init();
return GetJwksResponseRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.GetJwksResponseRecord = GetJwksResponseRecord;

});
define("Mobile_LoginNOS.model$GetJwksResponseRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$GetJwksResponseRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var GetJwksResponseRecordList = (function (_super) {
__extends(GetJwksResponseRecordList, _super);
function GetJwksResponseRecordList(defaults) {
_super.apply(this, arguments);
}
GetJwksResponseRecordList.RecordType = Mobile_LoginNOSModel.GetJwksResponseRecord;
return GetJwksResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.GetJwksResponseRecordList = GetJwksResponseRecordList;

});
define("Mobile_LoginNOS.model$ParameterList", ["exports", "OutSystems", "ActivityLogger.model", "Mobile_LoginNOS.model", "ActivityLogger.model$ParameterRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ActivityLogger"], function (exports, OutSystems, ActivityLoggerModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ParameterList = (function (_super) {
__extends(ParameterList, _super);
function ParameterList(defaults) {
_super.apply(this, arguments);
}
ParameterList.RecordType = ActivityLoggerModel.ParameterRec;
return ParameterList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ParameterList = ParameterList;

});
define("Mobile_LoginNOS.model$ParameterRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ParameterRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ParameterRecordList = (function (_super) {
__extends(ParameterRecordList, _super);
function ParameterRecordList(defaults) {
_super.apply(this, arguments);
}
ParameterRecordList.RecordType = Mobile_LoginNOSModel.ParameterRecord;
return ParameterRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ParameterRecordList = ParameterRecordList;

});
define("Mobile_LoginNOS.model$STR_FixedIPRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$STR_FixedIPRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_FixedIPRecord = (function (_super) {
__extends(STR_FixedIPRecord, _super);
function STR_FixedIPRecord(defaults) {
_super.apply(this, arguments);
}
STR_FixedIPRecord.attributesToDeclare = function () {
return [
this.attr("STR_FixedIP", "sTR_FixedIPAttr", "STR_FixedIP", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.STR_FixedIPRec());
}, Mobile_LoginNOSModel.STR_FixedIPRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_FixedIPRecord.fromStructure = function (str) {
return new STR_FixedIPRecord(new STR_FixedIPRecord.RecordClass({
sTR_FixedIPAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_FixedIPRecord.IsAnonymousRecord = true;
STR_FixedIPRecord.UniqueId = "651379b9-75a4-e154-4eca-5a3ddacecc74";
STR_FixedIPRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_FixedIPRecord.init();
return STR_FixedIPRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.STR_FixedIPRecord = STR_FixedIPRecord;

});
define("Mobile_LoginNOS.model$STR_FixedIPRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$STR_FixedIPRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_FixedIPRecordList = (function (_super) {
__extends(STR_FixedIPRecordList, _super);
function STR_FixedIPRecordList(defaults) {
_super.apply(this, arguments);
}
STR_FixedIPRecordList.RecordType = Mobile_LoginNOSModel.STR_FixedIPRecord;
return STR_FixedIPRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.STR_FixedIPRecordList = STR_FixedIPRecordList;

});
define("Mobile_LoginNOS.model$TokenInfoList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$TokenInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var TokenInfoList = (function (_super) {
__extends(TokenInfoList, _super);
function TokenInfoList(defaults) {
_super.apply(this, arguments);
}
TokenInfoList.RecordType = Mobile_LoginNOSModel.TokenInfoRec;
return TokenInfoList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.TokenInfoList = TokenInfoList;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RefreshAccessTokenRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenRecord = (function (_super) {
__extends(Log_RefreshAccessTokenRecord, _super);
function Log_RefreshAccessTokenRecord(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenRecord.attributesToDeclare = function () {
return [
this.attr("Log_RefreshAccessToken", "log_RefreshAccessTokenAttr", "Log_RefreshAccessToken", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_RefreshAccessTokenRec());
}, Mobile_LoginNOSModel.Log_RefreshAccessTokenRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_RefreshAccessTokenRecord.fromStructure = function (str) {
return new Log_RefreshAccessTokenRecord(new Log_RefreshAccessTokenRecord.RecordClass({
log_RefreshAccessTokenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RefreshAccessTokenRecord.IsAnonymousRecord = true;
Log_RefreshAccessTokenRecord.UniqueId = "5b44e654-4a20-3e5e-2e8d-3fe8f43d29f6";
Log_RefreshAccessTokenRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_RefreshAccessTokenRecord.init();
return Log_RefreshAccessTokenRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RefreshAccessTokenRecord = Log_RefreshAccessTokenRecord;

});
define("Mobile_LoginNOS.model$AccessTokenCodeRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenCodeRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCodeRecord = (function (_super) {
__extends(AccessTokenCodeRecord, _super);
function AccessTokenCodeRecord(defaults) {
_super.apply(this, arguments);
}
AccessTokenCodeRecord.attributesToDeclare = function () {
return [
this.attr("AccessTokenCode", "accessTokenCodeAttr", "AccessTokenCode", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.AccessTokenCodeRec());
}, Mobile_LoginNOSModel.AccessTokenCodeRec)
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenCodeRecord.fromStructure = function (str) {
return new AccessTokenCodeRecord(new AccessTokenCodeRecord.RecordClass({
accessTokenCodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessTokenCodeRecord.IsAnonymousRecord = true;
AccessTokenCodeRecord.UniqueId = "d8b8a47f-5fa0-022c-a65d-1f16c80906e9";
AccessTokenCodeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessTokenCodeRecord.init();
return AccessTokenCodeRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenCodeRecord = AccessTokenCodeRecord;

});
define("Mobile_LoginNOS.model$AccessTokenCodeRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenCodeRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCodeRecordList = (function (_super) {
__extends(AccessTokenCodeRecordList, _super);
function AccessTokenCodeRecordList(defaults) {
_super.apply(this, arguments);
}
AccessTokenCodeRecordList.RecordType = Mobile_LoginNOSModel.AccessTokenCodeRecord;
return AccessTokenCodeRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenCodeRecordList = AccessTokenCodeRecordList;

});
define("Mobile_LoginNOS.model$HTTPResponse3Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse3Record = (function (_super) {
__extends(HTTPResponse3Record, _super);
function HTTPResponse3Record(defaults) {
_super.apply(this, arguments);
}
HTTPResponse3Record.attributesToDeclare = function () {
return [
this.attr("HTTPResponse3", "hTTPResponse3Attr", "HTTPResponse3", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPResponse3Rec());
}, Mobile_LoginNOSModel.HTTPResponse3Rec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponse3Record.fromStructure = function (str) {
return new HTTPResponse3Record(new HTTPResponse3Record.RecordClass({
hTTPResponse3Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPResponse3Record.IsAnonymousRecord = true;
HTTPResponse3Record.UniqueId = "ed64522f-ec29-43e1-df3e-2de77b13d70d";
HTTPResponse3Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPResponse3Record.init();
return HTTPResponse3Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponse3Record = HTTPResponse3Record;

});
define("Mobile_LoginNOS.model$HTTPResponse3RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse3Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse3RecordList = (function (_super) {
__extends(HTTPResponse3RecordList, _super);
function HTTPResponse3RecordList(defaults) {
_super.apply(this, arguments);
}
HTTPResponse3RecordList.RecordType = Mobile_LoginNOSModel.HTTPResponse3Record;
return HTTPResponse3RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponse3RecordList = HTTPResponse3RecordList;

});
define("Mobile_LoginNOS.model$LogResponseExtendedDataRecord", ["exports", "OutSystems", "CE_LOGGING.model", "Mobile_LoginNOS.model", "CE_LOGGING.model$LogResponseExtendedDataRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CE_LOGGING"], function (exports, OutSystems, CE_LOGGINGModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var LogResponseExtendedDataRecord = (function (_super) {
__extends(LogResponseExtendedDataRecord, _super);
function LogResponseExtendedDataRecord(defaults) {
_super.apply(this, arguments);
}
LogResponseExtendedDataRecord.attributesToDeclare = function () {
return [
this.attr("LogResponseExtendedData", "logResponseExtendedDataAttr", "LogResponseExtendedData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new CE_LOGGINGModel.LogResponseExtendedDataRec());
}, CE_LOGGINGModel.LogResponseExtendedDataRec)
].concat(_super.attributesToDeclare.call(this));
};
LogResponseExtendedDataRecord.fromStructure = function (str) {
return new LogResponseExtendedDataRecord(new LogResponseExtendedDataRecord.RecordClass({
logResponseExtendedDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LogResponseExtendedDataRecord.IsAnonymousRecord = true;
LogResponseExtendedDataRecord.UniqueId = "5f90f83d-344f-7dab-cd5b-9291e3def527";
LogResponseExtendedDataRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
LogResponseExtendedDataRecord.init();
return LogResponseExtendedDataRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.LogResponseExtendedDataRecord = LogResponseExtendedDataRecord;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RefreshAccessTokenRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenRecordList = (function (_super) {
__extends(Log_RefreshAccessTokenRecordList, _super);
function Log_RefreshAccessTokenRecordList(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenRecordList.RecordType = Mobile_LoginNOSModel.Log_RefreshAccessTokenRecord;
return Log_RefreshAccessTokenRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RefreshAccessTokenRecordList = Log_RefreshAccessTokenRecordList;

});
define("Mobile_LoginNOS.model$Log_LogoutRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutRec = (function (_super) {
__extends(Log_LogoutRec, _super);
function Log_LogoutRec(defaults) {
_super.apply(this, arguments);
}
Log_LogoutRec.attributesToDeclare = function () {
return [
this.attr("CallBackURL", "callBackURLAttr", "CallBackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Access_Token", "access_TokenAttr", "Access_Token", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientId", "clientIdAttr", "ClientId", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_LogoutRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_LogoutRec.init();
return Log_LogoutRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_LogoutRec = Log_LogoutRec;

});
define("Mobile_LoginNOS.model$Log_LogoutRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutRecord = (function (_super) {
__extends(Log_LogoutRecord, _super);
function Log_LogoutRecord(defaults) {
_super.apply(this, arguments);
}
Log_LogoutRecord.attributesToDeclare = function () {
return [
this.attr("Log_Logout", "log_LogoutAttr", "Log_Logout", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_LogoutRec());
}, Mobile_LoginNOSModel.Log_LogoutRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_LogoutRecord.fromStructure = function (str) {
return new Log_LogoutRecord(new Log_LogoutRecord.RecordClass({
log_LogoutAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_LogoutRecord.IsAnonymousRecord = true;
Log_LogoutRecord.UniqueId = "60714d4f-f2a8-0bad-ef5a-0f881f1a9e99";
Log_LogoutRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_LogoutRecord.init();
return Log_LogoutRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_LogoutRecord = Log_LogoutRecord;

});
define("Mobile_LoginNOS.model$Fault2List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault2List = (function (_super) {
__extends(Fault2List, _super);
function Fault2List(defaults) {
_super.apply(this, arguments);
}
Fault2List.RecordType = Mobile_LoginNOSModel.Fault2Rec;
return Fault2List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Fault2List = Fault2List;

});
define("Mobile_LoginNOS.model$Log_Openid_AuthorizeEndPointOutputList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_Openid_AuthorizeEndPointOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_Openid_AuthorizeEndPointOutputList = (function (_super) {
__extends(Log_Openid_AuthorizeEndPointOutputList, _super);
function Log_Openid_AuthorizeEndPointOutputList(defaults) {
_super.apply(this, arguments);
}
Log_Openid_AuthorizeEndPointOutputList.RecordType = Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputRec;
return Log_Openid_AuthorizeEndPointOutputList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputList = Log_Openid_AuthorizeEndPointOutputList;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutputRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutputRecord = (function (_super) {
__extends(Log_UserInfoOutputRecord, _super);
function Log_UserInfoOutputRecord(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutputRecord.attributesToDeclare = function () {
return [
this.attr("Log_UserInfoOutput", "log_UserInfoOutputAttr", "Log_UserInfoOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_UserInfoOutputRec());
}, Mobile_LoginNOSModel.Log_UserInfoOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_UserInfoOutputRecord.fromStructure = function (str) {
return new Log_UserInfoOutputRecord(new Log_UserInfoOutputRecord.RecordClass({
log_UserInfoOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_UserInfoOutputRecord.IsAnonymousRecord = true;
Log_UserInfoOutputRecord.UniqueId = "894a4614-13a0-55c0-e52b-6cc32c27c84c";
Log_UserInfoOutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_UserInfoOutputRecord.init();
return Log_UserInfoOutputRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_UserInfoOutputRecord = Log_UserInfoOutputRecord;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutputRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoOutputRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutputRecordList = (function (_super) {
__extends(Log_UserInfoOutputRecordList, _super);
function Log_UserInfoOutputRecordList(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutputRecordList.RecordType = Mobile_LoginNOSModel.Log_UserInfoOutputRecord;
return Log_UserInfoOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_UserInfoOutputRecordList = Log_UserInfoOutputRecordList;

});
define("Mobile_LoginNOS.model$Fault3List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault3List = (function (_super) {
__extends(Fault3List, _super);
function Fault3List(defaults) {
_super.apply(this, arguments);
}
Fault3List.RecordType = Mobile_LoginNOSModel.Fault3Rec;
return Fault3List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Fault3List = Fault3List;

});
define("Mobile_LoginNOS.model$passwordlessLoginRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$passwordlessLoginRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessLoginRecord = (function (_super) {
__extends(passwordlessLoginRecord, _super);
function passwordlessLoginRecord(defaults) {
_super.apply(this, arguments);
}
passwordlessLoginRecord.attributesToDeclare = function () {
return [
this.attr("passwordlessLogin", "passwordlessLoginAttr", "passwordlessLogin", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.passwordlessLoginRec());
}, Mobile_LoginNOSModel.passwordlessLoginRec)
].concat(_super.attributesToDeclare.call(this));
};
passwordlessLoginRecord.fromStructure = function (str) {
return new passwordlessLoginRecord(new passwordlessLoginRecord.RecordClass({
passwordlessLoginAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
passwordlessLoginRecord.IsAnonymousRecord = true;
passwordlessLoginRecord.UniqueId = "661341e1-2840-786f-0eb1-62ec26662123";
passwordlessLoginRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
passwordlessLoginRecord.init();
return passwordlessLoginRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.passwordlessLoginRecord = passwordlessLoginRecord;

});
define("Mobile_LoginNOS.model$UserInfoList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfoList = (function (_super) {
__extends(UserInfoList, _super);
function UserInfoList(defaults) {
_super.apply(this, arguments);
}
UserInfoList.RecordType = Mobile_LoginNOSModel.UserInfoRec;
return UserInfoList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserInfoList = UserInfoList;

});
define("Mobile_LoginNOS.model$passwordlessLoginRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$passwordlessLoginRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessLoginRecordList = (function (_super) {
__extends(passwordlessLoginRecordList, _super);
function passwordlessLoginRecordList(defaults) {
_super.apply(this, arguments);
}
passwordlessLoginRecordList.RecordType = Mobile_LoginNOSModel.passwordlessLoginRecord;
return passwordlessLoginRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.passwordlessLoginRecordList = passwordlessLoginRecordList;

});
define("Mobile_LoginNOS.model$ErrorRecord", ["exports", "OutSystems", "CommonPlugin.model", "Mobile_LoginNOS.model", "CommonPlugin.model$ErrorRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Mobile_LoginNOSModel) {
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
Mobile_LoginNOSModel.ErrorRecord = ErrorRecord;

});
define("Mobile_LoginNOS.model$ErrorRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ErrorRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ErrorRecordList = (function (_super) {
__extends(ErrorRecordList, _super);
function ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
ErrorRecordList.RecordType = Mobile_LoginNOSModel.ErrorRecord;
return ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ErrorRecordList = ErrorRecordList;

});
define("Mobile_LoginNOS.model$Log_LogoutOutputRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOutputRec = (function (_super) {
__extends(Log_LogoutOutputRec, _super);
function Log_LogoutOutputRec(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOutputRec.attributesToDeclare = function () {
return [
this.attr("URL", "uRLAttr", "URL", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_LogoutOutputRec.fromStructure = function (str) {
return new Log_LogoutOutputRec(new Log_LogoutOutputRec.RecordClass({
uRLAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_LogoutOutputRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_LogoutOutputRec.init();
return Log_LogoutOutputRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_LogoutOutputRec = Log_LogoutOutputRec;

});
define("Mobile_LoginNOS.model$Log_LogoutOutputRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOutputRecord = (function (_super) {
__extends(Log_LogoutOutputRecord, _super);
function Log_LogoutOutputRecord(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOutputRecord.attributesToDeclare = function () {
return [
this.attr("Log_LogoutOutput", "log_LogoutOutputAttr", "Log_LogoutOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_LogoutOutputRec());
}, Mobile_LoginNOSModel.Log_LogoutOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_LogoutOutputRecord.fromStructure = function (str) {
return new Log_LogoutOutputRecord(new Log_LogoutOutputRecord.RecordClass({
log_LogoutOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_LogoutOutputRecord.IsAnonymousRecord = true;
Log_LogoutOutputRecord.UniqueId = "c11d0ec8-2fdc-c540-6357-e93a32dc355b";
Log_LogoutOutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_LogoutOutputRecord.init();
return Log_LogoutOutputRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_LogoutOutputRecord = Log_LogoutOutputRecord;

});
define("Mobile_LoginNOS.model$Log_LogoutOutputRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutOutputRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOutputRecordList = (function (_super) {
__extends(Log_LogoutOutputRecordList, _super);
function Log_LogoutOutputRecordList(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOutputRecordList.RecordType = Mobile_LoginNOSModel.Log_LogoutOutputRecord;
return Log_LogoutOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_LogoutOutputRecordList = Log_LogoutOutputRecordList;

});
define("Mobile_LoginNOS.model$Log_LogoutOutputList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOutputList = (function (_super) {
__extends(Log_LogoutOutputList, _super);
function Log_LogoutOutputList(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOutputList.RecordType = Mobile_LoginNOSModel.Log_LogoutOutputRec;
return Log_LogoutOutputList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_LogoutOutputList = Log_LogoutOutputList;

});
define("Mobile_LoginNOS.model$FaultList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$FaultRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var FaultList = (function (_super) {
__extends(FaultList, _super);
function FaultList(defaults) {
_super.apply(this, arguments);
}
FaultList.RecordType = Mobile_LoginNOSModel.FaultRec;
return FaultList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.FaultList = FaultList;

});
define("Mobile_LoginNOS.model$Detail3RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail3Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail3RecordList = (function (_super) {
__extends(Detail3RecordList, _super);
function Detail3RecordList(defaults) {
_super.apply(this, arguments);
}
Detail3RecordList.RecordType = Mobile_LoginNOSModel.Detail3Record;
return Detail3RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Detail3RecordList = Detail3RecordList;

});
define("Mobile_LoginNOS.model$ClaimList", ["exports", "OutSystems", "JWT.model", "Mobile_LoginNOS.model", "JWT.model$ClaimRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$JWT"], function (exports, OutSystems, JWTModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ClaimList = (function (_super) {
__extends(ClaimList, _super);
function ClaimList(defaults) {
_super.apply(this, arguments);
}
ClaimList.RecordType = JWTModel.ClaimRec;
return ClaimList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ClaimList = ClaimList;

});
define("Mobile_LoginNOS.model$ProxyDataRecord", ["exports", "OutSystems", "Extension.ardoHTTP.model", "Mobile_LoginNOS.model", "Extension.ardoHTTP.model$ProxyDataRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ardoHTTP"], function (exports, OutSystems, Extension_ardoHTTPModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ProxyDataRecord = (function (_super) {
__extends(ProxyDataRecord, _super);
function ProxyDataRecord(defaults) {
_super.apply(this, arguments);
}
ProxyDataRecord.attributesToDeclare = function () {
return [
this.attr("ProxyData", "proxyDataAttr", "ProxyData", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ardoHTTPModel.ProxyDataRec());
}, Extension_ardoHTTPModel.ProxyDataRec)
].concat(_super.attributesToDeclare.call(this));
};
ProxyDataRecord.fromStructure = function (str) {
return new ProxyDataRecord(new ProxyDataRecord.RecordClass({
proxyDataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProxyDataRecord.IsAnonymousRecord = true;
ProxyDataRecord.UniqueId = "6ef87e88-344d-11c0-e99f-59681b287875";
ProxyDataRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ProxyDataRecord.init();
return ProxyDataRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.ProxyDataRecord = ProxyDataRecord;

});
define("Mobile_LoginNOS.model$UserInfoRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfoRecord = (function (_super) {
__extends(UserInfoRecord, _super);
function UserInfoRecord(defaults) {
_super.apply(this, arguments);
}
UserInfoRecord.attributesToDeclare = function () {
return [
this.attr("UserInfo", "userInfoAttr", "UserInfo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.UserInfoRec());
}, Mobile_LoginNOSModel.UserInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
UserInfoRecord.fromStructure = function (str) {
return new UserInfoRecord(new UserInfoRecord.RecordClass({
userInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserInfoRecord.IsAnonymousRecord = true;
UserInfoRecord.UniqueId = "704546c2-2584-94d5-d216-bd789de96e6b";
UserInfoRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
UserInfoRecord.init();
return UserInfoRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserInfoRecord = UserInfoRecord;

});
define("Mobile_LoginNOS.model$AccessTokenPasswordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenPasswordRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenPasswordList = (function (_super) {
__extends(AccessTokenPasswordList, _super);
function AccessTokenPasswordList(defaults) {
_super.apply(this, arguments);
}
AccessTokenPasswordList.RecordType = Mobile_LoginNOSModel.AccessTokenPasswordRec;
return AccessTokenPasswordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenPasswordList = AccessTokenPasswordList;

});
define("Mobile_LoginNOS.model$Fault2Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault2Record = (function (_super) {
__extends(Fault2Record, _super);
function Fault2Record(defaults) {
_super.apply(this, arguments);
}
Fault2Record.attributesToDeclare = function () {
return [
this.attr("Fault2", "fault2Attr", "Fault2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault2Rec());
}, Mobile_LoginNOSModel.Fault2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Fault2Record.fromStructure = function (str) {
return new Fault2Record(new Fault2Record.RecordClass({
fault2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Fault2Record.IsAnonymousRecord = true;
Fault2Record.UniqueId = "71c8925e-82db-f22e-c4b6-d4f67bb3e90f";
Fault2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Fault2Record.init();
return Fault2Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Fault2Record = Fault2Record;

});
define("Mobile_LoginNOS.model$OutputRecord", ["exports", "OutSystems", "ActivityLogger.model", "Mobile_LoginNOS.model", "ActivityLogger.model$OutputRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ActivityLogger"], function (exports, OutSystems, ActivityLoggerModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var OutputRecord = (function (_super) {
__extends(OutputRecord, _super);
function OutputRecord(defaults) {
_super.apply(this, arguments);
}
OutputRecord.attributesToDeclare = function () {
return [
this.attr("Output", "outputAttr", "Output", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ActivityLoggerModel.OutputRec());
}, ActivityLoggerModel.OutputRec)
].concat(_super.attributesToDeclare.call(this));
};
OutputRecord.fromStructure = function (str) {
return new OutputRecord(new OutputRecord.RecordClass({
outputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OutputRecord.IsAnonymousRecord = true;
OutputRecord.UniqueId = "74c1e61f-992d-b4a2-5974-c8c675f4e327";
OutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
OutputRecord.init();
return OutputRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.OutputRecord = OutputRecord;

});
define("Mobile_LoginNOS.model$PostRevokeResponseRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostRevokeResponseRec = (function (_super) {
__extends(PostRevokeResponseRec, _super);
function PostRevokeResponseRec(defaults) {
_super.apply(this, arguments);
}
PostRevokeResponseRec.attributesToDeclare = function () {
return [
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault4Rec());
}, Mobile_LoginNOSModel.Fault4Rec)
].concat(_super.attributesToDeclare.call(this));
};
PostRevokeResponseRec.fromStructure = function (str) {
return new PostRevokeResponseRec(new PostRevokeResponseRec.RecordClass({
faultAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostRevokeResponseRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PostRevokeResponseRec.init();
return PostRevokeResponseRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.PostRevokeResponseRec = PostRevokeResponseRec;

});
define("Mobile_LoginNOS.model$PostRevokeResponseList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$PostRevokeResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostRevokeResponseList = (function (_super) {
__extends(PostRevokeResponseList, _super);
function PostRevokeResponseList(defaults) {
_super.apply(this, arguments);
}
PostRevokeResponseList.RecordType = Mobile_LoginNOSModel.PostRevokeResponseRec;
return PostRevokeResponseList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.PostRevokeResponseList = PostRevokeResponseList;

});
define("Mobile_LoginNOS.model$passwordlessSendRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$passwordlessSendRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessSendRecord = (function (_super) {
__extends(passwordlessSendRecord, _super);
function passwordlessSendRecord(defaults) {
_super.apply(this, arguments);
}
passwordlessSendRecord.attributesToDeclare = function () {
return [
this.attr("passwordlessSend", "passwordlessSendAttr", "passwordlessSend", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.passwordlessSendRec());
}, Mobile_LoginNOSModel.passwordlessSendRec)
].concat(_super.attributesToDeclare.call(this));
};
passwordlessSendRecord.fromStructure = function (str) {
return new passwordlessSendRecord(new passwordlessSendRecord.RecordClass({
passwordlessSendAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
passwordlessSendRecord.IsAnonymousRecord = true;
passwordlessSendRecord.UniqueId = "93064f0b-c7cc-5704-c3b6-e450fb66d943";
passwordlessSendRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
passwordlessSendRecord.init();
return passwordlessSendRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.passwordlessSendRecord = passwordlessSendRecord;

});
define("Mobile_LoginNOS.model$passwordlessSendRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$passwordlessSendRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessSendRecordList = (function (_super) {
__extends(passwordlessSendRecordList, _super);
function passwordlessSendRecordList(defaults) {
_super.apply(this, arguments);
}
passwordlessSendRecordList.RecordType = Mobile_LoginNOSModel.passwordlessSendRecord;
return passwordlessSendRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.passwordlessSendRecordList = passwordlessSendRecordList;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutput2Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoOutput2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutput2Record = (function (_super) {
__extends(Log_UserInfoOutput2Record, _super);
function Log_UserInfoOutput2Record(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutput2Record.attributesToDeclare = function () {
return [
this.attr("Log_UserInfoOutput2", "log_UserInfoOutput2Attr", "Log_UserInfoOutput2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_UserInfoOutput2Rec());
}, Mobile_LoginNOSModel.Log_UserInfoOutput2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Log_UserInfoOutput2Record.fromStructure = function (str) {
return new Log_UserInfoOutput2Record(new Log_UserInfoOutput2Record.RecordClass({
log_UserInfoOutput2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_UserInfoOutput2Record.IsAnonymousRecord = true;
Log_UserInfoOutput2Record.UniqueId = "ee8b1e93-d6a8-3337-7266-cf19d2f86cc4";
Log_UserInfoOutput2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_UserInfoOutput2Record.init();
return Log_UserInfoOutput2Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_UserInfoOutput2Record = Log_UserInfoOutput2Record;

});
define("Mobile_LoginNOS.model$Log_UserInfoOutput2RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoOutput2Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoOutput2RecordList = (function (_super) {
__extends(Log_UserInfoOutput2RecordList, _super);
function Log_UserInfoOutput2RecordList(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoOutput2RecordList.RecordType = Mobile_LoginNOSModel.Log_UserInfoOutput2Record;
return Log_UserInfoOutput2RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_UserInfoOutput2RecordList = Log_UserInfoOutput2RecordList;

});
define("Mobile_LoginNOS.model$Log_LogoutRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutRecordList = (function (_super) {
__extends(Log_LogoutRecordList, _super);
function Log_LogoutRecordList(defaults) {
_super.apply(this, arguments);
}
Log_LogoutRecordList.RecordType = Mobile_LoginNOSModel.Log_LogoutRecord;
return Log_LogoutRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_LogoutRecordList = Log_LogoutRecordList;

});
define("Mobile_LoginNOS.model$Value2Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Value2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Value2Record = (function (_super) {
__extends(Value2Record, _super);
function Value2Record(defaults) {
_super.apply(this, arguments);
}
Value2Record.attributesToDeclare = function () {
return [
this.attr("Value2", "value2Attr", "Value2", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Value2Rec());
}, Mobile_LoginNOSModel.Value2Rec)
].concat(_super.attributesToDeclare.call(this));
};
Value2Record.fromStructure = function (str) {
return new Value2Record(new Value2Record.RecordClass({
value2Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Value2Record.IsAnonymousRecord = true;
Value2Record.UniqueId = "d96a825e-dbe2-194a-d0eb-fedd87371462";
Value2Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Value2Record.init();
return Value2Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Value2Record = Value2Record;

});
define("Mobile_LoginNOS.model$Value2RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Value2Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Value2RecordList = (function (_super) {
__extends(Value2RecordList, _super);
function Value2RecordList(defaults) {
_super.apply(this, arguments);
}
Value2RecordList.RecordType = Mobile_LoginNOSModel.Value2Record;
return Value2RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Value2RecordList = Value2RecordList;

});
define("Mobile_LoginNOS.model$ClaimRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ClaimRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ClaimRecordList = (function (_super) {
__extends(ClaimRecordList, _super);
function ClaimRecordList(defaults) {
_super.apply(this, arguments);
}
ClaimRecordList.RecordType = Mobile_LoginNOSModel.ClaimRecord;
return ClaimRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ClaimRecordList = ClaimRecordList;

});
define("Mobile_LoginNOS.model$OutputRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$OutputRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var OutputRecordList = (function (_super) {
__extends(OutputRecordList, _super);
function OutputRecordList(defaults) {
_super.apply(this, arguments);
}
OutputRecordList.RecordType = Mobile_LoginNOSModel.OutputRecord;
return OutputRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.OutputRecordList = OutputRecordList;

});
define("Mobile_LoginNOS.model$UserProfileInfoRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserProfileInfoRec = (function (_super) {
__extends(UserProfileInfoRec, _super);
function UserProfileInfoRec(defaults) {
_super.apply(this, arguments);
}
UserProfileInfoRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ProfileID", "profileIDAttr", "ProfileID", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Contact_phone", "contact_phoneAttr", "Contact_phone", false, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("Name", "nameAttr", "Name", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Birth_date", "birth_dateAttr", "Birth_date", false, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("Gender", "genderAttr", "Gender", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Username", "usernameAttr", "Username", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Picture", "pictureAttr", "Picture", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
UserProfileInfoRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
UserProfileInfoRec.init();
return UserProfileInfoRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserProfileInfoRec = UserProfileInfoRec;

});
define("Mobile_LoginNOS.model$RefreshAccessTokenList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$RefreshAccessTokenRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var RefreshAccessTokenList = (function (_super) {
__extends(RefreshAccessTokenList, _super);
function RefreshAccessTokenList(defaults) {
_super.apply(this, arguments);
}
RefreshAccessTokenList.RecordType = Mobile_LoginNOSModel.RefreshAccessTokenRec;
return RefreshAccessTokenList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.RefreshAccessTokenList = RefreshAccessTokenList;

});
define("Mobile_LoginNOS.model$Log_AccessTokenCodeList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AccessTokenCodeRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenCodeList = (function (_super) {
__extends(Log_AccessTokenCodeList, _super);
function Log_AccessTokenCodeList(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenCodeList.RecordType = Mobile_LoginNOSModel.Log_AccessTokenCodeRec;
return Log_AccessTokenCodeList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AccessTokenCodeList = Log_AccessTokenCodeList;

});
define("Mobile_LoginNOS.model$HTTPHeaderRecord", ["exports", "OutSystems", "Extension.ardoHTTP.model", "Mobile_LoginNOS.model", "Extension.ardoHTTP.model$HTTPHeaderRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ardoHTTP"], function (exports, OutSystems, Extension_ardoHTTPModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeaderRecord = (function (_super) {
__extends(HTTPHeaderRecord, _super);
function HTTPHeaderRecord(defaults) {
_super.apply(this, arguments);
}
HTTPHeaderRecord.attributesToDeclare = function () {
return [
this.attr("HTTPHeader", "hTTPHeaderAttr", "HTTPHeader", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ardoHTTPModel.HTTPHeaderRec());
}, Extension_ardoHTTPModel.HTTPHeaderRec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeaderRecord.fromStructure = function (str) {
return new HTTPHeaderRecord(new HTTPHeaderRecord.RecordClass({
hTTPHeaderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPHeaderRecord.IsAnonymousRecord = true;
HTTPHeaderRecord.UniqueId = "81708db3-6bf1-1a98-ad98-b766822465af";
HTTPHeaderRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPHeaderRecord.init();
return HTTPHeaderRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeaderRecord = HTTPHeaderRecord;

});
define("Mobile_LoginNOS.model$ProxyDataRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ProxyDataRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ProxyDataRecordList = (function (_super) {
__extends(ProxyDataRecordList, _super);
function ProxyDataRecordList(defaults) {
_super.apply(this, arguments);
}
ProxyDataRecordList.RecordType = Mobile_LoginNOSModel.ProxyDataRecord;
return ProxyDataRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ProxyDataRecordList = ProxyDataRecordList;

});
define("Mobile_LoginNOS.model$Fault3RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault3Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault3RecordList = (function (_super) {
__extends(Fault3RecordList, _super);
function Fault3RecordList(defaults) {
_super.apply(this, arguments);
}
Fault3RecordList.RecordType = Mobile_LoginNOSModel.Fault3Record;
return Fault3RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Fault3RecordList = Fault3RecordList;

});
define("Mobile_LoginNOS.model$Log_UserInfoRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoRecord = (function (_super) {
__extends(Log_UserInfoRecord, _super);
function Log_UserInfoRecord(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoRecord.attributesToDeclare = function () {
return [
this.attr("Log_UserInfo", "log_UserInfoAttr", "Log_UserInfo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_UserInfoRec());
}, Mobile_LoginNOSModel.Log_UserInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_UserInfoRecord.fromStructure = function (str) {
return new Log_UserInfoRecord(new Log_UserInfoRecord.RecordClass({
log_UserInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_UserInfoRecord.IsAnonymousRecord = true;
Log_UserInfoRecord.UniqueId = "8a2e9b05-bd5b-7f00-de12-9329d90cd165";
Log_UserInfoRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_UserInfoRecord.init();
return Log_UserInfoRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_UserInfoRecord = Log_UserInfoRecord;

});
define("Mobile_LoginNOS.model$GetJwksResponseList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$GetJwksResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var GetJwksResponseList = (function (_super) {
__extends(GetJwksResponseList, _super);
function GetJwksResponseList(defaults) {
_super.apply(this, arguments);
}
GetJwksResponseList.RecordType = Mobile_LoginNOSModel.GetJwksResponseRec;
return GetJwksResponseList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.GetJwksResponseList = GetJwksResponseList;

});
define("Mobile_LoginNOS.model$Log_PostTokenRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_PostTokenRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_PostTokenRecord = (function (_super) {
__extends(Log_PostTokenRecord, _super);
function Log_PostTokenRecord(defaults) {
_super.apply(this, arguments);
}
Log_PostTokenRecord.attributesToDeclare = function () {
return [
this.attr("Log_PostToken", "log_PostTokenAttr", "Log_PostToken", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_PostTokenRec());
}, Mobile_LoginNOSModel.Log_PostTokenRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_PostTokenRecord.fromStructure = function (str) {
return new Log_PostTokenRecord(new Log_PostTokenRecord.RecordClass({
log_PostTokenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_PostTokenRecord.IsAnonymousRecord = true;
Log_PostTokenRecord.UniqueId = "8f788cec-796f-0a0a-d2f3-8d648502289f";
Log_PostTokenRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_PostTokenRecord.init();
return Log_PostTokenRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_PostTokenRecord = Log_PostTokenRecord;

});
define("Mobile_LoginNOS.model$AccessTokenInfoFERAList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenInfoFERARec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenInfoFERAList = (function (_super) {
__extends(AccessTokenInfoFERAList, _super);
function AccessTokenInfoFERAList(defaults) {
_super.apply(this, arguments);
}
AccessTokenInfoFERAList.RecordType = Mobile_LoginNOSModel.AccessTokenInfoFERARec;
return AccessTokenInfoFERAList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenInfoFERAList = AccessTokenInfoFERAList;

});
define("Mobile_LoginNOS.model$HTTPResponseRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader2List"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponseRec = (function (_super) {
__extends(HTTPResponseRec, _super);
function HTTPResponseRec(defaults) {
_super.apply(this, arguments);
}
HTTPResponseRec.attributesToDeclare = function () {
return [
this.attr("StatusCode", "statusCodeAttr", "StatusCode", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("StatusLine", "statusLineAttr", "StatusLine", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Headers", "headersAttr", "Headers", false, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader2List());
}, Mobile_LoginNOSModel.HTTPHeader2List), 
this.attr("ResponseText", "responseTextAttr", "ResponseText", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ResponseBinary", "responseBinaryAttr", "ResponseBinary", false, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponseRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
HTTPResponseRec.init();
return HTTPResponseRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponseRec = HTTPResponseRec;

});
define("Mobile_LoginNOS.model$UserInfo_ResponseRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfo_ResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfo_ResponseRecord = (function (_super) {
__extends(UserInfo_ResponseRecord, _super);
function UserInfo_ResponseRecord(defaults) {
_super.apply(this, arguments);
}
UserInfo_ResponseRecord.attributesToDeclare = function () {
return [
this.attr("UserInfo_Response", "userInfo_ResponseAttr", "UserInfo_Response", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.UserInfo_ResponseRec());
}, Mobile_LoginNOSModel.UserInfo_ResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
UserInfo_ResponseRecord.fromStructure = function (str) {
return new UserInfo_ResponseRecord(new UserInfo_ResponseRecord.RecordClass({
userInfo_ResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserInfo_ResponseRecord.IsAnonymousRecord = true;
UserInfo_ResponseRecord.UniqueId = "914a0f8a-93e7-e5b5-b543-060b80e9f8f3";
UserInfo_ResponseRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
UserInfo_ResponseRecord.init();
return UserInfo_ResponseRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserInfo_ResponseRecord = UserInfo_ResponseRecord;

});
define("Mobile_LoginNOS.model$Log_RefreshAccessTokenOutputList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RefreshAccessTokenOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RefreshAccessTokenOutputList = (function (_super) {
__extends(Log_RefreshAccessTokenOutputList, _super);
function Log_RefreshAccessTokenOutputList(defaults) {
_super.apply(this, arguments);
}
Log_RefreshAccessTokenOutputList.RecordType = Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputRec;
return Log_RefreshAccessTokenOutputList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RefreshAccessTokenOutputList = Log_RefreshAccessTokenOutputList;

});
define("Mobile_LoginNOS.model$WebView_ParametersRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var WebView_ParametersRec = (function (_super) {
__extends(WebView_ParametersRec, _super);
function WebView_ParametersRec(defaults) {
_super.apply(this, arguments);
}
WebView_ParametersRec.attributesToDeclare = function () {
return [
this.attr("URL_Callback", "uRL_CallbackAttr", "URL_Callback", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ReaderMode", "readerModeAttr", "ReaderMode", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Hidden", "hiddenAttr", "Hidden", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Animated", "animatedAttr", "Animated", false, OS.Types.Boolean, function () {
return true;
}), 
this.attr("TintColor", "tintColorAttr", "TintColor", false, OS.Types.Text, function () {
return "";
}), 
this.attr("BarColor", "barColorAttr", "BarColor", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ControlTintColor", "controlTintColorAttr", "ControlTintColor", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
WebView_ParametersRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
WebView_ParametersRec.init();
return WebView_ParametersRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.WebView_ParametersRec = WebView_ParametersRec;

});
define("Mobile_LoginNOS.model$WebView_ParametersList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var WebView_ParametersList = (function (_super) {
__extends(WebView_ParametersList, _super);
function WebView_ParametersList(defaults) {
_super.apply(this, arguments);
}
WebView_ParametersList.RecordType = Mobile_LoginNOSModel.WebView_ParametersRec;
return WebView_ParametersList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.WebView_ParametersList = WebView_ParametersList;

});
define("Mobile_LoginNOS.model$HTTPHeader5Record", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader5Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader5Record = (function (_super) {
__extends(HTTPHeader5Record, _super);
function HTTPHeader5Record(defaults) {
_super.apply(this, arguments);
}
HTTPHeader5Record.attributesToDeclare = function () {
return [
this.attr("HTTPHeader5", "hTTPHeader5Attr", "HTTPHeader5", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPHeader5Rec());
}, Mobile_LoginNOSModel.HTTPHeader5Rec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPHeader5Record.fromStructure = function (str) {
return new HTTPHeader5Record(new HTTPHeader5Record.RecordClass({
hTTPHeader5Attr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPHeader5Record.IsAnonymousRecord = true;
HTTPHeader5Record.UniqueId = "9891176a-8918-f904-341b-877c2986f5c2";
HTTPHeader5Record.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPHeader5Record.init();
return HTTPHeader5Record;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPHeader5Record = HTTPHeader5Record;

});
define("Mobile_LoginNOS.model$DetailList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$DetailRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var DetailList = (function (_super) {
__extends(DetailList, _super);
function DetailList(defaults) {
_super.apply(this, arguments);
}
DetailList.RecordType = Mobile_LoginNOSModel.DetailRec;
return DetailList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.DetailList = DetailList;

});
define("Mobile_LoginNOS.model$Log_UserInfoRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_UserInfoRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_UserInfoRecordList = (function (_super) {
__extends(Log_UserInfoRecordList, _super);
function Log_UserInfoRecordList(defaults) {
_super.apply(this, arguments);
}
Log_UserInfoRecordList.RecordType = Mobile_LoginNOSModel.Log_UserInfoRecord;
return Log_UserInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_UserInfoRecordList = Log_UserInfoRecordList;

});
define("Mobile_LoginNOS.model$PostRevokeResponseRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$PostRevokeResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostRevokeResponseRecord = (function (_super) {
__extends(PostRevokeResponseRecord, _super);
function PostRevokeResponseRecord(defaults) {
_super.apply(this, arguments);
}
PostRevokeResponseRecord.attributesToDeclare = function () {
return [
this.attr("PostRevokeResponse", "postRevokeResponseAttr", "PostRevokeResponse", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.PostRevokeResponseRec());
}, Mobile_LoginNOSModel.PostRevokeResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
PostRevokeResponseRecord.fromStructure = function (str) {
return new PostRevokeResponseRecord(new PostRevokeResponseRecord.RecordClass({
postRevokeResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostRevokeResponseRecord.IsAnonymousRecord = true;
PostRevokeResponseRecord.UniqueId = "e4def0ff-a9f3-cbb8-9be1-282cece0dfe5";
PostRevokeResponseRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PostRevokeResponseRecord.init();
return PostRevokeResponseRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.PostRevokeResponseRecord = PostRevokeResponseRecord;

});
define("Mobile_LoginNOS.model$PostRevokeResponseRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$PostRevokeResponseRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostRevokeResponseRecordList = (function (_super) {
__extends(PostRevokeResponseRecordList, _super);
function PostRevokeResponseRecordList(defaults) {
_super.apply(this, arguments);
}
PostRevokeResponseRecordList.RecordType = Mobile_LoginNOSModel.PostRevokeResponseRecord;
return PostRevokeResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.PostRevokeResponseRecordList = PostRevokeResponseRecordList;

});
define("Mobile_LoginNOS.model$AccessTokenCodeList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenCodeRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenCodeList = (function (_super) {
__extends(AccessTokenCodeList, _super);
function AccessTokenCodeList(defaults) {
_super.apply(this, arguments);
}
AccessTokenCodeList.RecordType = Mobile_LoginNOSModel.AccessTokenCodeRec;
return AccessTokenCodeList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenCodeList = AccessTokenCodeList;

});
define("Mobile_LoginNOS.model$STR_LoginMSISDNConfigsRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_LoginMSISDNConfigsRec = (function (_super) {
__extends(STR_LoginMSISDNConfigsRec, _super);
function STR_LoginMSISDNConfigsRec(defaults) {
_super.apply(this, arguments);
}
STR_LoginMSISDNConfigsRec.attributesToDeclare = function () {
return [
this.attr("TitleCard", "titleCardAttr", "TitleCard", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FirstParagraph", "firstParagraphAttr", "FirstParagraph", false, OS.Types.Text, function () {
return "";
}), 
this.attr("FirstIconDescription", "firstIconDescriptionAttr", "FirstIconDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("SecondIconDescription", "secondIconDescriptionAttr", "SecondIconDescription", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ThirdIconDescription", "thirdIconDescriptionAttr", "ThirdIconDescription", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
STR_LoginMSISDNConfigsRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
STR_LoginMSISDNConfigsRec.init();
return STR_LoginMSISDNConfigsRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.STR_LoginMSISDNConfigsRec = STR_LoginMSISDNConfigsRec;

});
define("Mobile_LoginNOS.model$STR_LoginMSISDNConfigsList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$STR_LoginMSISDNConfigsRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_LoginMSISDNConfigsList = (function (_super) {
__extends(STR_LoginMSISDNConfigsList, _super);
function STR_LoginMSISDNConfigsList(defaults) {
_super.apply(this, arguments);
}
STR_LoginMSISDNConfigsList.RecordType = Mobile_LoginNOSModel.STR_LoginMSISDNConfigsRec;
return STR_LoginMSISDNConfigsList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.STR_LoginMSISDNConfigsList = STR_LoginMSISDNConfigsList;

});
define("Mobile_LoginNOS.model$UserDataList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserDataRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserDataList = (function (_super) {
__extends(UserDataList, _super);
function UserDataList(defaults) {
_super.apply(this, arguments);
}
UserDataList.RecordType = Mobile_LoginNOSModel.UserDataRec;
return UserDataList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserDataList = UserDataList;

});
define("Mobile_LoginNOS.model$AccessTokenPasswordRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenPasswordRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenPasswordRecord = (function (_super) {
__extends(AccessTokenPasswordRecord, _super);
function AccessTokenPasswordRecord(defaults) {
_super.apply(this, arguments);
}
AccessTokenPasswordRecord.attributesToDeclare = function () {
return [
this.attr("AccessTokenPassword", "accessTokenPasswordAttr", "AccessTokenPassword", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.AccessTokenPasswordRec());
}, Mobile_LoginNOSModel.AccessTokenPasswordRec)
].concat(_super.attributesToDeclare.call(this));
};
AccessTokenPasswordRecord.fromStructure = function (str) {
return new AccessTokenPasswordRecord(new AccessTokenPasswordRecord.RecordClass({
accessTokenPasswordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AccessTokenPasswordRecord.IsAnonymousRecord = true;
AccessTokenPasswordRecord.UniqueId = "b163f724-2040-30cb-de61-0ec7fcf50dd6";
AccessTokenPasswordRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
AccessTokenPasswordRecord.init();
return AccessTokenPasswordRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.AccessTokenPasswordRecord = AccessTokenPasswordRecord;

});
define("Mobile_LoginNOS.model$AccessTokenPasswordRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$AccessTokenPasswordRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var AccessTokenPasswordRecordList = (function (_super) {
__extends(AccessTokenPasswordRecordList, _super);
function AccessTokenPasswordRecordList(defaults) {
_super.apply(this, arguments);
}
AccessTokenPasswordRecordList.RecordType = Mobile_LoginNOSModel.AccessTokenPasswordRecord;
return AccessTokenPasswordRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.AccessTokenPasswordRecordList = AccessTokenPasswordRecordList;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointOutputRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AuthorizeEndPointOutputRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointOutputRecord = (function (_super) {
__extends(Log_AuthorizeEndPointOutputRecord, _super);
function Log_AuthorizeEndPointOutputRecord(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointOutputRecord.attributesToDeclare = function () {
return [
this.attr("Log_AuthorizeEndPointOutput", "log_AuthorizeEndPointOutputAttr", "Log_AuthorizeEndPointOutput", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputRec());
}, Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_AuthorizeEndPointOutputRecord.fromStructure = function (str) {
return new Log_AuthorizeEndPointOutputRecord(new Log_AuthorizeEndPointOutputRecord.RecordClass({
log_AuthorizeEndPointOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_AuthorizeEndPointOutputRecord.IsAnonymousRecord = true;
Log_AuthorizeEndPointOutputRecord.UniqueId = "a67d4e98-caad-c59c-c831-b6bcf8a85e34";
Log_AuthorizeEndPointOutputRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_AuthorizeEndPointOutputRecord.init();
return Log_AuthorizeEndPointOutputRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputRecord = Log_AuthorizeEndPointOutputRecord;

});
define("Mobile_LoginNOS.model$Log_LogoutOpenIdRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutOpenIdRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOpenIdRecord = (function (_super) {
__extends(Log_LogoutOpenIdRecord, _super);
function Log_LogoutOpenIdRecord(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOpenIdRecord.attributesToDeclare = function () {
return [
this.attr("Log_LogoutOpenId", "log_LogoutOpenIdAttr", "Log_LogoutOpenId", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_LogoutOpenIdRec());
}, Mobile_LoginNOSModel.Log_LogoutOpenIdRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_LogoutOpenIdRecord.fromStructure = function (str) {
return new Log_LogoutOpenIdRecord(new Log_LogoutOpenIdRecord.RecordClass({
log_LogoutOpenIdAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_LogoutOpenIdRecord.IsAnonymousRecord = true;
Log_LogoutOpenIdRecord.UniqueId = "a8012227-c8eb-1d73-6b07-2cd5f06f146a";
Log_LogoutOpenIdRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_LogoutOpenIdRecord.init();
return Log_LogoutOpenIdRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_LogoutOpenIdRecord = Log_LogoutOpenIdRecord;

});
define("Mobile_LoginNOS.model$ProxyDataList", ["exports", "OutSystems", "Extension.ardoHTTP.model", "Mobile_LoginNOS.model", "Extension.ardoHTTP.model$ProxyDataRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ardoHTTP"], function (exports, OutSystems, Extension_ardoHTTPModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ProxyDataList = (function (_super) {
__extends(ProxyDataList, _super);
function ProxyDataList(defaults) {
_super.apply(this, arguments);
}
ProxyDataList.RecordType = Extension_ardoHTTPModel.ProxyDataRec;
return ProxyDataList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ProxyDataList = ProxyDataList;

});
define("Mobile_LoginNOS.model$ValueRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ValueRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ValueRecord = (function (_super) {
__extends(ValueRecord, _super);
function ValueRecord(defaults) {
_super.apply(this, arguments);
}
ValueRecord.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.ValueRec());
}, Mobile_LoginNOSModel.ValueRec)
].concat(_super.attributesToDeclare.call(this));
};
ValueRecord.fromStructure = function (str) {
return new ValueRecord(new ValueRecord.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValueRecord.IsAnonymousRecord = true;
ValueRecord.UniqueId = "aa163715-59a6-8657-0524-a37c9840f75b";
ValueRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
ValueRecord.init();
return ValueRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.ValueRecord = ValueRecord;

});
define("Mobile_LoginNOS.model$ValueRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$ValueRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var ValueRecordList = (function (_super) {
__extends(ValueRecordList, _super);
function ValueRecordList(defaults) {
_super.apply(this, arguments);
}
ValueRecordList.RecordType = Mobile_LoginNOSModel.ValueRecord;
return ValueRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.ValueRecordList = ValueRecordList;

});
define("Mobile_LoginNOS.model$DetailRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$DetailRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var DetailRecord = (function (_super) {
__extends(DetailRecord, _super);
function DetailRecord(defaults) {
_super.apply(this, arguments);
}
DetailRecord.attributesToDeclare = function () {
return [
this.attr("Detail", "detailAttr", "Detail", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.DetailRec());
}, Mobile_LoginNOSModel.DetailRec)
].concat(_super.attributesToDeclare.call(this));
};
DetailRecord.fromStructure = function (str) {
return new DetailRecord(new DetailRecord.RecordClass({
detailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DetailRecord.IsAnonymousRecord = true;
DetailRecord.UniqueId = "ba75c713-f0e7-a2ed-5eca-5f148eb411c4";
DetailRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
DetailRecord.init();
return DetailRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.DetailRecord = DetailRecord;

});
define("Mobile_LoginNOS.model$DetailRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$DetailRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var DetailRecordList = (function (_super) {
__extends(DetailRecordList, _super);
function DetailRecordList(defaults) {
_super.apply(this, arguments);
}
DetailRecordList.RecordType = Mobile_LoginNOSModel.DetailRecord;
return DetailRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.DetailRecordList = DetailRecordList;

});
define("Mobile_LoginNOS.model$Log_Openid_AuthorizeEndPointOutputRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_Openid_AuthorizeEndPointOutputRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_Openid_AuthorizeEndPointOutputRecordList = (function (_super) {
__extends(Log_Openid_AuthorizeEndPointOutputRecordList, _super);
function Log_Openid_AuthorizeEndPointOutputRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Openid_AuthorizeEndPointOutputRecordList.RecordType = Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputRecord;
return Log_Openid_AuthorizeEndPointOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_Openid_AuthorizeEndPointOutputRecordList = Log_Openid_AuthorizeEndPointOutputRecordList;

});
define("Mobile_LoginNOS.model$HTTPHeaderRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeaderRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeaderRecordList = (function (_super) {
__extends(HTTPHeaderRecordList, _super);
function HTTPHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
HTTPHeaderRecordList.RecordType = Mobile_LoginNOSModel.HTTPHeaderRecord;
return HTTPHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeaderRecordList = HTTPHeaderRecordList;

});
define("Mobile_LoginNOS.model$UserInfoRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfoRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfoRecordList = (function (_super) {
__extends(UserInfoRecordList, _super);
function UserInfoRecordList(defaults) {
_super.apply(this, arguments);
}
UserInfoRecordList.RecordType = Mobile_LoginNOSModel.UserInfoRecord;
return UserInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserInfoRecordList = UserInfoRecordList;

});
define("Mobile_LoginNOS.model$PostpasswordlessSendResponseRec", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostpasswordlessSendResponseRec = (function (_super) {
__extends(PostpasswordlessSendResponseRec, _super);
function PostpasswordlessSendResponseRec(defaults) {
_super.apply(this, arguments);
}
PostpasswordlessSendResponseRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Email", "emailAttr", "Email", false, OS.Types.Text, function () {
return "";
}), 
this.attr("EmailVerified", "emailVerifiedAttr", "EmailVerified", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, OS.Types.Text, function () {
return "";
}), 
this.attr("PhoneNumberVerified", "phoneNumberVerifiedAttr", "PhoneNumberVerified", false, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Fault", "faultAttr", "fault", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Fault3Rec());
}, Mobile_LoginNOSModel.Fault3Rec)
].concat(_super.attributesToDeclare.call(this));
};
PostpasswordlessSendResponseRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
PostpasswordlessSendResponseRec.init();
return PostpasswordlessSendResponseRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.PostpasswordlessSendResponseRec = PostpasswordlessSendResponseRec;

});
define("Mobile_LoginNOS.model$PostpasswordlessSendResponseRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostpasswordlessSendResponseRecord = (function (_super) {
__extends(PostpasswordlessSendResponseRecord, _super);
function PostpasswordlessSendResponseRecord(defaults) {
_super.apply(this, arguments);
}
PostpasswordlessSendResponseRecord.attributesToDeclare = function () {
return [
this.attr("PostpasswordlessSendResponse", "postpasswordlessSendResponseAttr", "PostpasswordlessSendResponse", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.PostpasswordlessSendResponseRec());
}, Mobile_LoginNOSModel.PostpasswordlessSendResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
PostpasswordlessSendResponseRecord.fromStructure = function (str) {
return new PostpasswordlessSendResponseRecord(new PostpasswordlessSendResponseRecord.RecordClass({
postpasswordlessSendResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PostpasswordlessSendResponseRecord.IsAnonymousRecord = true;
PostpasswordlessSendResponseRecord.UniqueId = "f7d73436-8248-d7d6-f47c-ce4be140ff91";
PostpasswordlessSendResponseRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
PostpasswordlessSendResponseRecord.init();
return PostpasswordlessSendResponseRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.PostpasswordlessSendResponseRecord = PostpasswordlessSendResponseRecord;

});
define("Mobile_LoginNOS.model$PostpasswordlessSendResponseRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostpasswordlessSendResponseRecordList = (function (_super) {
__extends(PostpasswordlessSendResponseRecordList, _super);
function PostpasswordlessSendResponseRecordList(defaults) {
_super.apply(this, arguments);
}
PostpasswordlessSendResponseRecordList.RecordType = Mobile_LoginNOSModel.PostpasswordlessSendResponseRecord;
return PostpasswordlessSendResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.PostpasswordlessSendResponseRecordList = PostpasswordlessSendResponseRecordList;

});
define("Mobile_LoginNOS.model$Log_LogoutOpenIdRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutOpenIdRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutOpenIdRecordList = (function (_super) {
__extends(Log_LogoutOpenIdRecordList, _super);
function Log_LogoutOpenIdRecordList(defaults) {
_super.apply(this, arguments);
}
Log_LogoutOpenIdRecordList.RecordType = Mobile_LoginNOSModel.Log_LogoutOpenIdRecord;
return Log_LogoutOpenIdRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_LogoutOpenIdRecordList = Log_LogoutOpenIdRecordList;

});
define("Mobile_LoginNOS.model$HEX_COLORSRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HEX_COLORSRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HEX_COLORSRecordList = (function (_super) {
__extends(HEX_COLORSRecordList, _super);
function HEX_COLORSRecordList(defaults) {
_super.apply(this, arguments);
}
HEX_COLORSRecordList.RecordType = Mobile_LoginNOSModel.HEX_COLORSRecord;
return HEX_COLORSRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HEX_COLORSRecordList = HEX_COLORSRecordList;

});
define("Mobile_LoginNOS.model$HTTPResponse4List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse4List = (function (_super) {
__extends(HTTPResponse4List, _super);
function HTTPResponse4List(defaults) {
_super.apply(this, arguments);
}
HTTPResponse4List.RecordType = Mobile_LoginNOSModel.HTTPResponse4Rec;
return HTTPResponse4List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponse4List = HTTPResponse4List;

});
define("Mobile_LoginNOS.model$TokenInfoRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$TokenInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var TokenInfoRecord = (function (_super) {
__extends(TokenInfoRecord, _super);
function TokenInfoRecord(defaults) {
_super.apply(this, arguments);
}
TokenInfoRecord.attributesToDeclare = function () {
return [
this.attr("TokenInfo", "tokenInfoAttr", "TokenInfo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.TokenInfoRec());
}, Mobile_LoginNOSModel.TokenInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
TokenInfoRecord.fromStructure = function (str) {
return new TokenInfoRecord(new TokenInfoRecord.RecordClass({
tokenInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TokenInfoRecord.IsAnonymousRecord = true;
TokenInfoRecord.UniqueId = "e2ee2aba-ae04-1274-b898-ab99f010913d";
TokenInfoRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
TokenInfoRecord.init();
return TokenInfoRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.TokenInfoRecord = TokenInfoRecord;

});
define("Mobile_LoginNOS.model$TokenInfoRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$TokenInfoRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var TokenInfoRecordList = (function (_super) {
__extends(TokenInfoRecordList, _super);
function TokenInfoRecordList(defaults) {
_super.apply(this, arguments);
}
TokenInfoRecordList.RecordType = Mobile_LoginNOSModel.TokenInfoRecord;
return TokenInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.TokenInfoRecordList = TokenInfoRecordList;

});
define("Mobile_LoginNOS.model$Log_RevokeRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RevokeRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RevokeRecord = (function (_super) {
__extends(Log_RevokeRecord, _super);
function Log_RevokeRecord(defaults) {
_super.apply(this, arguments);
}
Log_RevokeRecord.attributesToDeclare = function () {
return [
this.attr("Log_Revoke", "log_RevokeAttr", "Log_Revoke", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_RevokeRec());
}, Mobile_LoginNOSModel.Log_RevokeRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_RevokeRecord.fromStructure = function (str) {
return new Log_RevokeRecord(new Log_RevokeRecord.RecordClass({
log_RevokeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RevokeRecord.IsAnonymousRecord = true;
Log_RevokeRecord.UniqueId = "b979956d-c49c-8405-5c7f-8a315216fda7";
Log_RevokeRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_RevokeRecord.init();
return Log_RevokeRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_RevokeRecord = Log_RevokeRecord;

});
define("Mobile_LoginNOS.model$Log_RevokeRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RevokeRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RevokeRecordList = (function (_super) {
__extends(Log_RevokeRecordList, _super);
function Log_RevokeRecordList(defaults) {
_super.apply(this, arguments);
}
Log_RevokeRecordList.RecordType = Mobile_LoginNOSModel.Log_RevokeRecord;
return Log_RevokeRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RevokeRecordList = Log_RevokeRecordList;

});
define("Mobile_LoginNOS.model$UserInfo_ResponseList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfo_ResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfo_ResponseList = (function (_super) {
__extends(UserInfo_ResponseList, _super);
function UserInfo_ResponseList(defaults) {
_super.apply(this, arguments);
}
UserInfo_ResponseList.RecordType = Mobile_LoginNOSModel.UserInfo_ResponseRec;
return UserInfo_ResponseList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserInfo_ResponseList = UserInfo_ResponseList;

});
define("Mobile_LoginNOS.model$HTTPResponse3List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse3Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse3List = (function (_super) {
__extends(HTTPResponse3List, _super);
function HTTPResponse3List(defaults) {
_super.apply(this, arguments);
}
HTTPResponse3List.RecordType = Mobile_LoginNOSModel.HTTPResponse3Rec;
return HTTPResponse3List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponse3List = HTTPResponse3List;

});
define("Mobile_LoginNOS.model$UserProfileInfoRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserProfileInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserProfileInfoRecord = (function (_super) {
__extends(UserProfileInfoRecord, _super);
function UserProfileInfoRecord(defaults) {
_super.apply(this, arguments);
}
UserProfileInfoRecord.attributesToDeclare = function () {
return [
this.attr("UserProfileInfo", "userProfileInfoAttr", "UserProfileInfo", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.UserProfileInfoRec());
}, Mobile_LoginNOSModel.UserProfileInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
UserProfileInfoRecord.fromStructure = function (str) {
return new UserProfileInfoRecord(new UserProfileInfoRecord.RecordClass({
userProfileInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserProfileInfoRecord.IsAnonymousRecord = true;
UserProfileInfoRecord.UniqueId = "ecdab949-75c2-e404-9418-3571de80368d";
UserProfileInfoRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
UserProfileInfoRecord.init();
return UserProfileInfoRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.UserProfileInfoRecord = UserProfileInfoRecord;

});
define("Mobile_LoginNOS.model$UserProfileInfoRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserProfileInfoRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserProfileInfoRecordList = (function (_super) {
__extends(UserProfileInfoRecordList, _super);
function UserProfileInfoRecordList(defaults) {
_super.apply(this, arguments);
}
UserProfileInfoRecordList.RecordType = Mobile_LoginNOSModel.UserProfileInfoRecord;
return UserProfileInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserProfileInfoRecordList = UserProfileInfoRecordList;

});
define("Mobile_LoginNOS.model$LogResponseExtendedDataList", ["exports", "OutSystems", "CE_LOGGING.model", "Mobile_LoginNOS.model", "CE_LOGGING.model$LogResponseExtendedDataRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CE_LOGGING"], function (exports, OutSystems, CE_LOGGINGModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var LogResponseExtendedDataList = (function (_super) {
__extends(LogResponseExtendedDataList, _super);
function LogResponseExtendedDataList(defaults) {
_super.apply(this, arguments);
}
LogResponseExtendedDataList.RecordType = CE_LOGGINGModel.LogResponseExtendedDataRec;
return LogResponseExtendedDataList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.LogResponseExtendedDataList = LogResponseExtendedDataList;

});
define("Mobile_LoginNOS.model$Log_AccessTokenPasswordRec", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenPasswordRec = (function (_super) {
__extends(Log_AccessTokenPasswordRec, _super);
function Log_AccessTokenPasswordRec(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenPasswordRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Password", "passwordAttr", "Password", true, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
Log_AccessTokenPasswordRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
Log_AccessTokenPasswordRec.init();
return Log_AccessTokenPasswordRec;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AccessTokenPasswordRec = Log_AccessTokenPasswordRec;

});
define("Mobile_LoginNOS.model$Log_AccessTokenPasswordRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AccessTokenPasswordRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenPasswordRecord = (function (_super) {
__extends(Log_AccessTokenPasswordRecord, _super);
function Log_AccessTokenPasswordRecord(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenPasswordRecord.attributesToDeclare = function () {
return [
this.attr("Log_AccessTokenPassword", "log_AccessTokenPasswordAttr", "Log_AccessTokenPassword", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.Log_AccessTokenPasswordRec());
}, Mobile_LoginNOSModel.Log_AccessTokenPasswordRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_AccessTokenPasswordRecord.fromStructure = function (str) {
return new Log_AccessTokenPasswordRecord(new Log_AccessTokenPasswordRecord.RecordClass({
log_AccessTokenPasswordAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_AccessTokenPasswordRecord.IsAnonymousRecord = true;
Log_AccessTokenPasswordRecord.UniqueId = "bb93ae47-e42c-8cac-d54a-3000fac56f49";
Log_AccessTokenPasswordRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
Log_AccessTokenPasswordRecord.init();
return Log_AccessTokenPasswordRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.Log_AccessTokenPasswordRecord = Log_AccessTokenPasswordRecord;

});
define("Mobile_LoginNOS.model$HTTPResponseRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponseRecord = (function (_super) {
__extends(HTTPResponseRecord, _super);
function HTTPResponseRecord(defaults) {
_super.apply(this, arguments);
}
HTTPResponseRecord.attributesToDeclare = function () {
return [
this.attr("HTTPResponse", "hTTPResponseAttr", "HTTPResponse", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.HTTPResponseRec());
}, Mobile_LoginNOSModel.HTTPResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
HTTPResponseRecord.fromStructure = function (str) {
return new HTTPResponseRecord(new HTTPResponseRecord.RecordClass({
hTTPResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
HTTPResponseRecord.IsAnonymousRecord = true;
HTTPResponseRecord.UniqueId = "c2f8c1c9-a4ca-5b50-ac65-a8495dca8ba6";
HTTPResponseRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
HTTPResponseRecord.init();
return HTTPResponseRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.HTTPResponseRecord = HTTPResponseRecord;

});
define("Mobile_LoginNOS.model$HTTPResponseRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponseRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponseRecordList = (function (_super) {
__extends(HTTPResponseRecordList, _super);
function HTTPResponseRecordList(defaults) {
_super.apply(this, arguments);
}
HTTPResponseRecordList.RecordType = Mobile_LoginNOSModel.HTTPResponseRecord;
return HTTPResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponseRecordList = HTTPResponseRecordList;

});
define("Mobile_LoginNOS.model$Log_RegistrationOutputRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RegistrationOutputRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationOutputRecordList = (function (_super) {
__extends(Log_RegistrationOutputRecordList, _super);
function Log_RegistrationOutputRecordList(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationOutputRecordList.RecordType = Mobile_LoginNOSModel.Log_RegistrationOutputRecord;
return Log_RegistrationOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RegistrationOutputRecordList = Log_RegistrationOutputRecordList;

});
define("Mobile_LoginNOS.model$Log_LogoutList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_LogoutRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_LogoutList = (function (_super) {
__extends(Log_LogoutList, _super);
function Log_LogoutList(defaults) {
_super.apply(this, arguments);
}
Log_LogoutList.RecordType = Mobile_LoginNOSModel.Log_LogoutRec;
return Log_LogoutList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_LogoutList = Log_LogoutList;

});
define("Mobile_LoginNOS.model$passwordlessLoginList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$passwordlessLoginRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var passwordlessLoginList = (function (_super) {
__extends(passwordlessLoginList, _super);
function passwordlessLoginList(defaults) {
_super.apply(this, arguments);
}
passwordlessLoginList.RecordType = Mobile_LoginNOSModel.passwordlessLoginRec;
return passwordlessLoginList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.passwordlessLoginList = passwordlessLoginList;

});
define("Mobile_LoginNOS.model$UserInfo_ResponseRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserInfo_ResponseRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserInfo_ResponseRecordList = (function (_super) {
__extends(UserInfo_ResponseRecordList, _super);
function UserInfo_ResponseRecordList(defaults) {
_super.apply(this, arguments);
}
UserInfo_ResponseRecordList.RecordType = Mobile_LoginNOSModel.UserInfo_ResponseRecord;
return UserInfo_ResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserInfo_ResponseRecordList = UserInfo_ResponseRecordList;

});
define("Mobile_LoginNOS.model$HTTPResponse4RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse4Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse4RecordList = (function (_super) {
__extends(HTTPResponse4RecordList, _super);
function HTTPResponse4RecordList(defaults) {
_super.apply(this, arguments);
}
HTTPResponse4RecordList.RecordType = Mobile_LoginNOSModel.HTTPResponse4Record;
return HTTPResponse4RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponse4RecordList = HTTPResponse4RecordList;

});
define("Mobile_LoginNOS.model$WebView_ParametersRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var WebView_ParametersRecord = (function (_super) {
__extends(WebView_ParametersRecord, _super);
function WebView_ParametersRecord(defaults) {
_super.apply(this, arguments);
}
WebView_ParametersRecord.attributesToDeclare = function () {
return [
this.attr("WebView_Parameters", "webView_ParametersAttr", "WebView_Parameters", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.WebView_ParametersRec());
}, Mobile_LoginNOSModel.WebView_ParametersRec)
].concat(_super.attributesToDeclare.call(this));
};
WebView_ParametersRecord.fromStructure = function (str) {
return new WebView_ParametersRecord(new WebView_ParametersRecord.RecordClass({
webView_ParametersAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WebView_ParametersRecord.IsAnonymousRecord = true;
WebView_ParametersRecord.UniqueId = "f4e03e6f-781e-3763-0eb5-3a7e808f99dc";
WebView_ParametersRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
WebView_ParametersRecord.init();
return WebView_ParametersRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.WebView_ParametersRecord = WebView_ParametersRecord;

});
define("Mobile_LoginNOS.model$WebView_ParametersRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$WebView_ParametersRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var WebView_ParametersRecordList = (function (_super) {
__extends(WebView_ParametersRecordList, _super);
function WebView_ParametersRecordList(defaults) {
_super.apply(this, arguments);
}
WebView_ParametersRecordList.RecordType = Mobile_LoginNOSModel.WebView_ParametersRecord;
return WebView_ParametersRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.WebView_ParametersRecordList = WebView_ParametersRecordList;

});
define("Mobile_LoginNOS.model$Log_AccessTokenCodeRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AccessTokenCodeRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenCodeRecordList = (function (_super) {
__extends(Log_AccessTokenCodeRecordList, _super);
function Log_AccessTokenCodeRecordList(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenCodeRecordList.RecordType = Mobile_LoginNOSModel.Log_AccessTokenCodeRecord;
return Log_AccessTokenCodeRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AccessTokenCodeRecordList = Log_AccessTokenCodeRecordList;

});
define("Mobile_LoginNOS.model$STR_LoginMSISDNConfigsRecord", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$STR_LoginMSISDNConfigsRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_LoginMSISDNConfigsRecord = (function (_super) {
__extends(STR_LoginMSISDNConfigsRecord, _super);
function STR_LoginMSISDNConfigsRecord(defaults) {
_super.apply(this, arguments);
}
STR_LoginMSISDNConfigsRecord.attributesToDeclare = function () {
return [
this.attr("STR_LoginMSISDNConfigs", "sTR_LoginMSISDNConfigsAttr", "STR_LoginMSISDNConfigs", false, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.STR_LoginMSISDNConfigsRec());
}, Mobile_LoginNOSModel.STR_LoginMSISDNConfigsRec)
].concat(_super.attributesToDeclare.call(this));
};
STR_LoginMSISDNConfigsRecord.fromStructure = function (str) {
return new STR_LoginMSISDNConfigsRecord(new STR_LoginMSISDNConfigsRecord.RecordClass({
sTR_LoginMSISDNConfigsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
STR_LoginMSISDNConfigsRecord.IsAnonymousRecord = true;
STR_LoginMSISDNConfigsRecord.UniqueId = "c85dfd68-0ff8-6a51-41f0-6507b552e9ad";
STR_LoginMSISDNConfigsRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.namedAttributeReaderImplementation, attributeOrder);
};
STR_LoginMSISDNConfigsRecord.init();
return STR_LoginMSISDNConfigsRecord;
})(OS.DataTypes.GenericRecord);
Mobile_LoginNOSModel.STR_LoginMSISDNConfigsRecord = STR_LoginMSISDNConfigsRecord;

});
define("Mobile_LoginNOS.model$UserProfileInfoList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$UserProfileInfoRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var UserProfileInfoList = (function (_super) {
__extends(UserProfileInfoList, _super);
function UserProfileInfoList(defaults) {
_super.apply(this, arguments);
}
UserProfileInfoList.RecordType = Mobile_LoginNOSModel.UserProfileInfoRec;
return UserProfileInfoList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.UserProfileInfoList = UserProfileInfoList;

});
define("Mobile_LoginNOS.model$HTTPHeader5RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPHeader5Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeader5RecordList = (function (_super) {
__extends(HTTPHeader5RecordList, _super);
function HTTPHeader5RecordList(defaults) {
_super.apply(this, arguments);
}
HTTPHeader5RecordList.RecordType = Mobile_LoginNOSModel.HTTPHeader5Record;
return HTTPHeader5RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeader5RecordList = HTTPHeader5RecordList;

});
define("Mobile_LoginNOS.model$Detail4RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail4Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail4RecordList = (function (_super) {
__extends(Detail4RecordList, _super);
function Detail4RecordList(defaults) {
_super.apply(this, arguments);
}
Detail4RecordList.RecordType = Mobile_LoginNOSModel.Detail4Record;
return Detail4RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Detail4RecordList = Detail4RecordList;

});
define("Mobile_LoginNOS.model$PostpasswordlessSendResponseList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$PostpasswordlessSendResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var PostpasswordlessSendResponseList = (function (_super) {
__extends(PostpasswordlessSendResponseList, _super);
function PostpasswordlessSendResponseList(defaults) {
_super.apply(this, arguments);
}
PostpasswordlessSendResponseList.RecordType = Mobile_LoginNOSModel.PostpasswordlessSendResponseRec;
return PostpasswordlessSendResponseList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.PostpasswordlessSendResponseList = PostpasswordlessSendResponseList;

});
define("Mobile_LoginNOS.model$LogResponseExtendedDataRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$LogResponseExtendedDataRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var LogResponseExtendedDataRecordList = (function (_super) {
__extends(LogResponseExtendedDataRecordList, _super);
function LogResponseExtendedDataRecordList(defaults) {
_super.apply(this, arguments);
}
LogResponseExtendedDataRecordList.RecordType = Mobile_LoginNOSModel.LogResponseExtendedDataRecord;
return LogResponseExtendedDataRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.LogResponseExtendedDataRecordList = LogResponseExtendedDataRecordList;

});
define("Mobile_LoginNOS.model$HTTPResponseList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponseRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponseList = (function (_super) {
__extends(HTTPResponseList, _super);
function HTTPResponseList(defaults) {
_super.apply(this, arguments);
}
HTTPResponseList.RecordType = Mobile_LoginNOSModel.HTTPResponseRec;
return HTTPResponseList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponseList = HTTPResponseList;

});
define("Mobile_LoginNOS.model$HTTPHeaderList", ["exports", "OutSystems", "Extension.ardoHTTP.model", "Mobile_LoginNOS.model", "Extension.ardoHTTP.model$HTTPHeaderRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ardoHTTP"], function (exports, OutSystems, Extension_ardoHTTPModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPHeaderList = (function (_super) {
__extends(HTTPHeaderList, _super);
function HTTPHeaderList(defaults) {
_super.apply(this, arguments);
}
HTTPHeaderList.RecordType = Extension_ardoHTTPModel.HTTPHeaderRec;
return HTTPHeaderList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPHeaderList = HTTPHeaderList;

});
define("Mobile_LoginNOS.model$Detail4List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Detail4Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Detail4List = (function (_super) {
__extends(Detail4List, _super);
function Detail4List(defaults) {
_super.apply(this, arguments);
}
Detail4List.RecordType = Mobile_LoginNOSModel.Detail4Rec;
return Detail4List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Detail4List = Detail4List;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AuthorizeEndPointRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointList = (function (_super) {
__extends(Log_AuthorizeEndPointList, _super);
function Log_AuthorizeEndPointList(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointList.RecordType = Mobile_LoginNOSModel.Log_AuthorizeEndPointRec;
return Log_AuthorizeEndPointList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AuthorizeEndPointList = Log_AuthorizeEndPointList;

});
define("Mobile_LoginNOS.model$Log_PostTokenRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_PostTokenRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_PostTokenRecordList = (function (_super) {
__extends(Log_PostTokenRecordList, _super);
function Log_PostTokenRecordList(defaults) {
_super.apply(this, arguments);
}
Log_PostTokenRecordList.RecordType = Mobile_LoginNOSModel.Log_PostTokenRecord;
return Log_PostTokenRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_PostTokenRecordList = Log_PostTokenRecordList;

});
define("Mobile_LoginNOS.model$Log_AccessTokenPasswordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AccessTokenPasswordRec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenPasswordList = (function (_super) {
__extends(Log_AccessTokenPasswordList, _super);
function Log_AccessTokenPasswordList(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenPasswordList.RecordType = Mobile_LoginNOSModel.Log_AccessTokenPasswordRec;
return Log_AccessTokenPasswordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AccessTokenPasswordList = Log_AccessTokenPasswordList;

});
define("Mobile_LoginNOS.model$STR_LoginMSISDNConfigsRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$STR_LoginMSISDNConfigsRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var STR_LoginMSISDNConfigsRecordList = (function (_super) {
__extends(STR_LoginMSISDNConfigsRecordList, _super);
function STR_LoginMSISDNConfigsRecordList(defaults) {
_super.apply(this, arguments);
}
STR_LoginMSISDNConfigsRecordList.RecordType = Mobile_LoginNOSModel.STR_LoginMSISDNConfigsRecord;
return STR_LoginMSISDNConfigsRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.STR_LoginMSISDNConfigsRecordList = STR_LoginMSISDNConfigsRecordList;

});
define("Mobile_LoginNOS.model$Log_AccessTokenPasswordRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AccessTokenPasswordRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AccessTokenPasswordRecordList = (function (_super) {
__extends(Log_AccessTokenPasswordRecordList, _super);
function Log_AccessTokenPasswordRecordList(defaults) {
_super.apply(this, arguments);
}
Log_AccessTokenPasswordRecordList.RecordType = Mobile_LoginNOSModel.Log_AccessTokenPasswordRecord;
return Log_AccessTokenPasswordRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AccessTokenPasswordRecordList = Log_AccessTokenPasswordRecordList;

});
define("Mobile_LoginNOS.model$Fault4RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault4Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault4RecordList = (function (_super) {
__extends(Fault4RecordList, _super);
function Fault4RecordList(defaults) {
_super.apply(this, arguments);
}
Fault4RecordList.RecordType = Mobile_LoginNOSModel.Fault4Record;
return Fault4RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Fault4RecordList = Fault4RecordList;

});
define("Mobile_LoginNOS.model$Fault2RecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Fault2Record"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Fault2RecordList = (function (_super) {
__extends(Fault2RecordList, _super);
function Fault2RecordList(defaults) {
_super.apply(this, arguments);
}
Fault2RecordList.RecordType = Mobile_LoginNOSModel.Fault2Record;
return Fault2RecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Fault2RecordList = Fault2RecordList;

});
define("Mobile_LoginNOS.model$Log_RegistrationRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_RegistrationRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_RegistrationRecordList = (function (_super) {
__extends(Log_RegistrationRecordList, _super);
function Log_RegistrationRecordList(defaults) {
_super.apply(this, arguments);
}
Log_RegistrationRecordList.RecordType = Mobile_LoginNOSModel.Log_RegistrationRecord;
return Log_RegistrationRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_RegistrationRecordList = Log_RegistrationRecordList;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AuthorizeEndPointRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointRecordList = (function (_super) {
__extends(Log_AuthorizeEndPointRecordList, _super);
function Log_AuthorizeEndPointRecordList(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointRecordList.RecordType = Mobile_LoginNOSModel.Log_AuthorizeEndPointRecord;
return Log_AuthorizeEndPointRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AuthorizeEndPointRecordList = Log_AuthorizeEndPointRecordList;

});
define("Mobile_LoginNOS.model$FaultRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$FaultRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var FaultRecordList = (function (_super) {
__extends(FaultRecordList, _super);
function FaultRecordList(defaults) {
_super.apply(this, arguments);
}
FaultRecordList.RecordType = Mobile_LoginNOSModel.FaultRecord;
return FaultRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.FaultRecordList = FaultRecordList;

});
define("Mobile_LoginNOS.model$Mobile_OperatingSystemList", ["exports", "OutSystems", "CommonPlugin.model", "Mobile_LoginNOS.model", "CommonPlugin.model$Mobile_OperatingSystemRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin"], function (exports, OutSystems, CommonPluginModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Mobile_OperatingSystemList = (function (_super) {
__extends(Mobile_OperatingSystemList, _super);
function Mobile_OperatingSystemList(defaults) {
_super.apply(this, arguments);
}
Mobile_OperatingSystemList.RecordType = CommonPluginModel.Mobile_OperatingSystemRec;
return Mobile_OperatingSystemList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Mobile_OperatingSystemList = Mobile_OperatingSystemList;

});
define("Mobile_LoginNOS.model$HEX_COLORSList", ["exports", "OutSystems", "MobileUIWidgets.model", "Mobile_LoginNOS.model", "MobileUIWidgets.model$HEX_COLORSRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$MobileUIWidgets"], function (exports, OutSystems, MobileUIWidgetsModel, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HEX_COLORSList = (function (_super) {
__extends(HEX_COLORSList, _super);
function HEX_COLORSList(defaults) {
_super.apply(this, arguments);
}
HEX_COLORSList.RecordType = MobileUIWidgetsModel.HEX_COLORSRec;
return HEX_COLORSList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HEX_COLORSList = HEX_COLORSList;

});
define("Mobile_LoginNOS.model$HTTPResponse2List", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$HTTPResponse2Rec"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var HTTPResponse2List = (function (_super) {
__extends(HTTPResponse2List, _super);
function HTTPResponse2List(defaults) {
_super.apply(this, arguments);
}
HTTPResponse2List.RecordType = Mobile_LoginNOSModel.HTTPResponse2Rec;
return HTTPResponse2List;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.HTTPResponse2List = HTTPResponse2List;

});
define("Mobile_LoginNOS.model$Log_AuthorizeEndPointOutputRecordList", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.model$Log_AuthorizeEndPointOutputRecord"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Log_AuthorizeEndPointOutputRecordList = (function (_super) {
__extends(Log_AuthorizeEndPointOutputRecordList, _super);
function Log_AuthorizeEndPointOutputRecordList(defaults) {
_super.apply(this, arguments);
}
Log_AuthorizeEndPointOutputRecordList.RecordType = Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputRecord;
return Log_AuthorizeEndPointOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Mobile_LoginNOSModel.Log_AuthorizeEndPointOutputRecordList = Log_AuthorizeEndPointOutputRecordList;

});
define("Mobile_LoginNOS.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Mobile_LoginNOSModel = exports;
Object.defineProperty(Mobile_LoginNOSModel, "module", {
get: function () {
return OS.ApplicationInfo.getModules()["203f03c3-9b07-4857-aeed-7c07410cfec8"];
}
});

Mobile_LoginNOSModel.staticEntities = {};
Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem = {};
var getMobile_OperatingSystemRecord = function (record) {
return OS.ApplicationInfo.getModules()["5b6515d9-f417-41d9-9c45-5dfc1a7b019f"].staticEntities["c1eb5dfb-b8c1-47fc-bc7d-1cd017f67311"][record];
};
Object.defineProperty(Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem, "android", {
get: function () {
return getMobile_OperatingSystemRecord("01edb2f7-0e57-4dc0-9509-92d0d28ebfe3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem, "windows", {
get: function () {
return getMobile_OperatingSystemRecord("164b2bee-9204-44fd-99b7-4d8e15ea9c63");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem, "iOS", {
get: function () {
return getMobile_OperatingSystemRecord("91c837e3-89f4-4179-9b8c-c79a99090027");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem, "other", {
get: function () {
return getMobile_OperatingSystemRecord("e0264a53-735d-4dea-8647-b8bfe757d34b");
}
});

Mobile_LoginNOSModel.staticEntities.iCON_SIZE = {};
var getICON_SIZERecord = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["b60cb512-9fee-4638-ac38-ced6b6d81a86"][record];
};
Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_SIZE, "xSmall", {
get: function () {
return getICON_SIZERecord("22883d0d-95e6-4a32-8126-12f1839ac2d2");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_SIZE, "xLarge", {
get: function () {
return getICON_SIZERecord("3a1cde3c-a513-4514-b687-8ff0ada45a36");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_SIZE, "small", {
get: function () {
return getICON_SIZERecord("5f77c5ff-0d3d-4372-8b4e-614de51c3692");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_SIZE, "large", {
get: function () {
return getICON_SIZERecord("ca7f18e8-1f3b-4d8c-b3f5-40cc9898aaf4");
}
});

Mobile_LoginNOSModel.staticEntities.iCON_CLASS = {};
var getICON_CLASSRecord = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["d68ff46d-b9b2-4c6c-bd04-e5036faf1127"][record];
};
Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEditar", {
get: function () {
return getICON_CLASSRecord("01b8d616-ff1d-4e29-b940-20ba8465e363");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMagnifyingGlass", {
get: function () {
return getICON_CLASSRecord("032ae929-7f5d-4489-8b0a-55af8b12c3d9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconServicosFilled", {
get: function () {
return getICON_CLASSRecord("038452a6-2759-497b-a77f-20eb45826fdd");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconLeftArrow", {
get: function () {
return getICON_CLASSRecord("0409be96-f7ee-4d5c-a028-ac78484c3bbe");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconArrowRightWTF", {
get: function () {
return getICON_CLASSRecord("04bfe465-5af3-44e1-b82c-c46f4a3cf55d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTabAjudaFilled", {
get: function () {
return getICON_CLASSRecord("05ae3224-6bce-4456-92bc-482986a0a48b");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconWalletNatalFilled", {
get: function () {
return getICON_CLASSRecord("05d8fc66-bc9a-47d8-b8aa-bcad6a780bb8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconGear", {
get: function () {
return getICON_CLASSRecord("0640e0ba-34b8-4f18-8f00-1c9e8d50fa89");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconLojasNos", {
get: function () {
return getICON_CLASSRecord("08bbd6db-9ba1-4cc3-85d7-02c5d5aab166");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropRightCheia", {
get: function () {
return getICON_CLASSRecord("08d9b49d-3aeb-45e0-8566-21115fac7d1c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconRefresh", {
get: function () {
return getICON_CLASSRecord("0b6eabc3-eb2c-4cb7-ac02-2cfd3d3fd6b7");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSeat", {
get: function () {
return getICON_CLASSRecord("0c442ec8-f11d-4560-91bd-e35fe582f1d6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconDebitDirect", {
get: function () {
return getICON_CLASSRecord("0cb27d76-c1ee-473b-9d45-19c6ab7fca58");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconColapsar", {
get: function () {
return getICON_CLASSRecord("0f09179e-1f92-49b3-b9d5-b1aa8f4bd00a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconConsulta", {
get: function () {
return getICON_CLASSRecord("0f9bb09d-be4f-4606-8237-cf03fdcbaaf9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropUpCheia", {
get: function () {
return getICON_CLASSRecord("15b10abc-f76d-4653-aa25-9e51c9fb6909");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPopcornMenu", {
get: function () {
return getICON_CLASSRecord("16dd9fb6-02bc-47f2-bb05-c3646f537ab0");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconInicioFilled", {
get: function () {
return getICON_CLASSRecord("17af2fa8-31e0-46d1-9183-993328cfa197");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSoundcloud", {
get: function () {
return getICON_CLASSRecord("19f057d0-b1b3-4e52-97b2-06ab27b7924f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEye", {
get: function () {
return getICON_CLASSRecord("1a14d6e2-19dd-49f7-8e9b-a1d5a9d660e0");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTickets", {
get: function () {
return getICON_CLASSRecord("1ea79111-2bf7-48d0-bcfd-439b0be289e8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFavoriteFilled", {
get: function () {
return getICON_CLASSRecord("21c595f7-41b4-42b4-b92d-1feb327f77e9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconWallet", {
get: function () {
return getICON_CLASSRecord("21fbf0cb-5d18-41d1-bb06-badbdbb8d31d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTwitter", {
get: function () {
return getICON_CLASSRecord("227e5db3-1b86-473a-becf-461589681205");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAlertTriangle", {
get: function () {
return getICON_CLASSRecord("2994f6fa-43f1-429c-a6c7-e8dafcd8e7d7");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconServicos", {
get: function () {
return getICON_CLASSRecord("2bcb5e0a-e178-4919-8a21-5aa172de0f29");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSmsFilled", {
get: function () {
return getICON_CLASSRecord("2c35b671-4271-411f-bd19-b860652a2f94");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFiltros", {
get: function () {
return getICON_CLASSRecord("2ea87344-d9dc-4623-bf8e-a53742bfa968");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconLike", {
get: function () {
return getICON_CLASSRecord("2eb4d1f1-127b-4bff-ab3f-1b3d40b63a4f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconScratchFilled", {
get: function () {
return getICON_CLASSRecord("33ce4a85-b9c0-41cc-8cd7-c0f4f96b43d8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconBookmarked", {
get: function () {
return getICON_CLASSRecord("34c9bdb1-85ab-4e3e-aab8-6de2c51e88f9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconNetflix", {
get: function () {
return getICON_CLASSRecord("34fadac0-fe8c-45b8-b907-c0bf368b3825");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconBus", {
get: function () {
return getICON_CLASSRecord("358de172-7980-4357-ac8b-3e31184038b8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropDownCheia", {
get: function () {
return getICON_CLASSRecord("368fcad0-53ed-48e5-bac2-a31d905bc6cf");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconZonaNatal", {
get: function () {
return getICON_CLASSRecord("3824c108-7674-4276-b9dd-a1e79a28e2a2");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSaucyNatal", {
get: function () {
return getICON_CLASSRecord("384bf376-3bfc-4080-89b3-8171614b4266");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPencil", {
get: function () {
return getICON_CLASSRecord("3965762b-39d7-462d-ba0e-143a9ad07ddb");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconShareAndroid", {
get: function () {
return getICON_CLASSRecord("39e27a3d-2e63-4263-ab0b-a6cc7753f0ab");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCardSuccess0102", {
get: function () {
return getICON_CLASSRecord("3b7b8961-ed4c-4301-9562-411a84dda131");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconInfoRounded", {
get: function () {
return getICON_CLASSRecord("3bbfd8ac-5b41-4c64-bc0b-cc81ddc5c832");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCheckBoxOn", {
get: function () {
return getICON_CLASSRecord("3c4f6dbb-d6dc-472b-8355-42b876f3169d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconVerMais", {
get: function () {
return getICON_CLASSRecord("3dc47c2d-28d4-4f6c-86d5-202aa7355d4c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconLinkedIn", {
get: function () {
return getICON_CLASSRecord("3de989ad-406e-42b1-9c1d-ed6f8a89e392");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMessageInsuccessWTF", {
get: function () {
return getICON_CLASSRecord("3eed6eba-c22a-45a7-ae61-7d920223fd05");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconConta", {
get: function () {
return getICON_CLASSRecord("407a7026-c85d-4faf-8248-fa987edc6aea");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconInfoRoundedFilled", {
get: function () {
return getICON_CLASSRecord("41fb7aad-e455-4dc0-8a24-40b661eabdb7");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCartaoNosV2", {
get: function () {
return getICON_CLASSRecord("42781948-5e52-4d30-969f-ff8377ca2364");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconArrowRight", {
get: function () {
return getICON_CLASSRecord("434f85a5-2762-4d26-9f43-8329430c30ce");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPopcornMenuV2", {
get: function () {
return getICON_CLASSRecord("4385f301-fce4-4da3-bbb3-964b16571194");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconWirelessDisable", {
get: function () {
return getICON_CLASSRecord("44155b78-929d-411e-9920-82b8b25e7828");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPlus", {
get: function () {
return getICON_CLASSRecord("454b040a-1099-46da-b5d2-fbdd4f3f9bed");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAppsNosV2", {
get: function () {
return getICON_CLASSRecord("4766006c-dc30-4237-a099-00e9cb197b63");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSkype", {
get: function () {
return getICON_CLASSRecord("488d131e-fcc9-4de5-81fb-d38d5d6e2267");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconNotificacoesOn", {
get: function () {
return getICON_CLASSRecord("4c2671d9-65d7-468e-8105-0ce41d867eb3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFacebookLight", {
get: function () {
return getICON_CLASSRecord("4e49a907-6642-48ac-b7fb-ba6098616ba1");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPopCorn", {
get: function () {
return getICON_CLASSRecord("4ebdf68a-3a7a-4e79-af32-8d1e5223d02f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconVimeo", {
get: function () {
return getICON_CLASSRecord("4ee8f792-b0ee-4129-9063-bb3f32773fb6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconLess", {
get: function () {
return getICON_CLASSRecord("4f26250b-ef0d-438d-bb3c-99d0bd867bbb");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconHistory", {
get: function () {
return getICON_CLASSRecord("55e53638-fe04-4f40-afef-b80dd2de48ee");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconRecycleBinEmptyFilled", {
get: function () {
return getICON_CLASSRecord("5b71ccd7-2caa-4160-8b39-95c221b02853");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconsSeatxl", {
get: function () {
return getICON_CLASSRecord("5ceb2c1b-c693-41e4-98cf-342538744b20");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSnapchat", {
get: function () {
return getICON_CLASSRecord("5d5f49b9-44fe-4e36-a130-dbb9678a6559");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAppsNos", {
get: function () {
return getICON_CLASSRecord("5d8408e1-b496-41d2-8658-344129e8a3b9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEyeHide", {
get: function () {
return getICON_CLASSRecord("5fe83dd4-fa34-4f40-965f-ad5bec5d3215");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAtalhosFilled", {
get: function () {
return getICON_CLASSRecord("609ff505-1065-43fc-96f1-3720d145ea0d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTelefone", {
get: function () {
return getICON_CLASSRecord("60d626d3-433d-408f-b44a-1b8e694efdd9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTumblr", {
get: function () {
return getICON_CLASSRecord("611c7d6a-9a1c-4abf-91d1-f8dd0c14713d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconParking", {
get: function () {
return getICON_CLASSRecord("61b30cd0-6653-439b-8dd2-369fca293ad3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTvCellPhonePlus", {
get: function () {
return getICON_CLASSRecord("62bc61ca-d82c-42e4-8b67-473fd819dc8a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTopics", {
get: function () {
return getICON_CLASSRecord("63c445a9-e00b-439e-894a-f654a9e05e10");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSms", {
get: function () {
return getICON_CLASSRecord("645894eb-6a2a-4f3d-9f5a-d1d00890a56a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFaq", {
get: function () {
return getICON_CLASSRecord("64cf46ef-ea9f-4660-a177-f48f2a579d58");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEncomenda", {
get: function () {
return getICON_CLASSRecord("6589fd14-7c33-4a72-9064-20efefe6cbac");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconInstagram", {
get: function () {
return getICON_CLASSRecord("674b7527-e077-4ad3-8c2c-9b9342171cd8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMiscsetaDropLeftCheia", {
get: function () {
return getICON_CLASSRecord("694e5a50-3cb8-4ebc-af08-5af555c7b215");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMore", {
get: function () {
return getICON_CLASSRecord("6a520bf2-b475-4adf-ae64-9415882ff1d9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCurrentLocation", {
get: function () {
return getICON_CLASSRecord("6a5a33b0-0175-4b2d-804a-4db38c9db0d2");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconItunes", {
get: function () {
return getICON_CLASSRecord("6bae4222-38f7-49ff-8e78-5fd2596b4121");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCartaz", {
get: function () {
return getICON_CLASSRecord("6cdd0308-8940-4740-bcff-c48a34bb1ea9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFavorite", {
get: function () {
return getICON_CLASSRecord("6eb70ef0-4a5b-4687-b631-ab7eaa03f246");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPrime", {
get: function () {
return getICON_CLASSRecord("7132c09e-9e19-43dc-a715-65b4f4000cf6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMessenger", {
get: function () {
return getICON_CLASSRecord("714140ea-e4f1-46ac-931d-ce197005d7fa");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconUserPlus", {
get: function () {
return getICON_CLASSRecord("71a80589-7bf8-42dc-ba08-9e46b561029a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCheckCircleLine", {
get: function () {
return getICON_CLASSRecord("723da398-6895-4db2-bffe-981d3fffffe3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconHbo", {
get: function () {
return getICON_CLASSRecord("725dab7a-d101-4027-bd37-9f4d3eec70d6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconHome", {
get: function () {
return getICON_CLASSRecord("72c1ea44-44c8-4aa8-8731-55fe90fa8ca0");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconContacto", {
get: function () {
return getICON_CLASSRecord("73d73c7c-1d7c-4129-a999-1202918387b4");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTabAjuda", {
get: function () {
return getICON_CLASSRecord("79a52476-1ce5-4901-84d8-9d88cd81cab9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconClose", {
get: function () {
return getICON_CLASSRecord("7b8503c7-a296-4714-aaa5-54727448226f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMetro", {
get: function () {
return getICON_CLASSRecord("7b96765a-c5b2-4d6a-825a-d15504573de3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconScratchNatalFilled", {
get: function () {
return getICON_CLASSRecord("7c6f3a2d-00f0-478e-a3f0-167cd3227894");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconErrorRoundedV2", {
get: function () {
return getICON_CLASSRecord("7d4b0b9d-921d-475e-a367-ea09342d84c8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconWalletNatal", {
get: function () {
return getICON_CLASSRecord("7e077556-3472-468e-be3b-cecfd17fccf9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconGoogle", {
get: function () {
return getICON_CLASSRecord("7f74c380-9afe-4511-b05e-0bb4102416d4");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSearch", {
get: function () {
return getICON_CLASSRecord("7fa60abf-fd65-4c02-90f3-f13cb3e9e460");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconVip", {
get: function () {
return getICON_CLASSRecord("80b8643f-4ea9-4e56-b005-b8d3b8fc69e2");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCalendar", {
get: function () {
return getICON_CLASSRecord("811f7369-61f8-44fe-bf88-dfb1e863ea62");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMagnifyingGlassMin", {
get: function () {
return getICON_CLASSRecord("81f62088-b850-40a9-9d24-c4b912e38789");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSaucy", {
get: function () {
return getICON_CLASSRecord("8278feb3-bf45-4eba-9983-ae16cc6251fd");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconErrorNovo", {
get: function () {
return getICON_CLASSRecord("832b127c-7e55-4bb1-8ed5-bf207ae07a50");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconHeart", {
get: function () {
return getICON_CLASSRecord("8419ef28-e5f9-4a79-af67-2916b230164d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconExternalLink", {
get: function () {
return getICON_CLASSRecord("853d8d6a-35e8-4bcf-9c7c-9723234b539a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCartaoNos", {
get: function () {
return getICON_CLASSRecord("85799301-4686-4962-9dc6-48fd5ed86b8c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconZonaFilled", {
get: function () {
return getICON_CLASSRecord("85ba2fcb-3c07-4418-91c5-f106423e0541");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMovie", {
get: function () {
return getICON_CLASSRecord("867b3a21-d19a-4ffd-bb6d-b4562489b82c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconChat", {
get: function () {
return getICON_CLASSRecord("890f1121-90c8-4658-a79f-6bd652a5c992");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "icontTvPlus", {
get: function () {
return getICON_CLASSRecord("8a7394d7-fb7b-4bae-9850-360c288b79ab");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAjudaNos", {
get: function () {
return getICON_CLASSRecord("8a7dacd9-d79a-4bb5-b351-f2f9ea45f6ff");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCheckAll", {
get: function () {
return getICON_CLASSRecord("8ab6722f-0b42-49ce-a149-89befe5a4bb6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTabBarAtalhos", {
get: function () {
return getICON_CLASSRecord("8e45834b-ca5f-4045-984f-bbccada61826");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCardError01", {
get: function () {
return getICON_CLASSRecord("8f29ee51-b0b3-4626-b9e7-d9422168dd96");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPremium", {
get: function () {
return getICON_CLASSRecord("8f7497d3-400d-4bb6-9d01-340372cccd39");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconScratchNatal", {
get: function () {
return getICON_CLASSRecord("9071e854-ba1a-43cd-a665-dd2f5d56920c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconRadioButtonOff", {
get: function () {
return getICON_CLASSRecord("9157d001-7087-4463-b9f1-0314dca5f528");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconIMessage", {
get: function () {
return getICON_CLASSRecord("9400960f-16b2-4b1b-bb95-b5fe828dc3d1");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTeather", {
get: function () {
return getICON_CLASSRecord("95bea852-0c3e-48b1-86de-38b38c36303e");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconGesturesWipeHorizontal", {
get: function () {
return getICON_CLASSRecord("9656dca4-51a4-437f-ab5c-e283659834de");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconYoutube", {
get: function () {
return getICON_CLASSRecord("96c0d608-9194-4170-a8f0-03c6f7aceb37");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSlidersEqual", {
get: function () {
return getICON_CLASSRecord("9744a38b-e2d6-4edd-a0d5-566f4ceec129");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTwitch", {
get: function () {
return getICON_CLASSRecord("98031b00-d686-4694-b56f-2ea1b1ff45a1");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPinterest", {
get: function () {
return getICON_CLASSRecord("9b54ebaa-f706-4e53-8b3e-cc577eabb5d8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMuda", {
get: function () {
return getICON_CLASSRecord("9c68a1ef-6782-430e-bcf5-8e601310e53d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconArrowUp", {
get: function () {
return getICON_CLASSRecord("9d00a261-df34-4bbb-ac68-bd957888b3d9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCheck", {
get: function () {
return getICON_CLASSRecord("9f85dd1a-28d8-4a3e-a9b0-09f88ecb093e");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSeatsXl", {
get: function () {
return getICON_CLASSRecord("a074b85b-9a45-429e-9d5c-c940de46ce47");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPcSmartphone", {
get: function () {
return getICON_CLASSRecord("a2f0c7b1-d94c-423a-8dd3-561e1e3e3f77");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTicket", {
get: function () {
return getICON_CLASSRecord("a4bc95b7-ce62-4da5-afe8-4895ed545b73");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAlterarContexto", {
get: function () {
return getICON_CLASSRecord("a57ff59c-5608-4c3c-b300-413aa3b6fb47");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTv", {
get: function () {
return getICON_CLASSRecord("a5b64568-2c3b-4569-9452-8fb56f199718");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEletronicInvoice", {
get: function () {
return getICON_CLASSRecord("a77500a0-d6ef-4152-9ac3-5e3bd7b250fd");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSimCard", {
get: function () {
return getICON_CLASSRecord("a84626a8-2967-4578-953a-a8939787af79");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconZona", {
get: function () {
return getICON_CLASSRecord("a8f22183-52f4-4341-9bc4-3bc8cd0ff992");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconBookmark", {
get: function () {
return getICON_CLASSRecord("aa47b522-2816-4858-bf9d-c83880b2fe6e");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPlayCircle", {
get: function () {
return getICON_CLASSRecord("aa8d6c1c-b6e7-44bb-a116-f67b8c669cbe");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconLocation", {
get: function () {
return getICON_CLASSRecord("ab8e19b4-fa25-4fa4-bcbe-8ef79807cf0c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTicketsFilled", {
get: function () {
return getICON_CLASSRecord("acf32c21-52de-4e7d-91e8-f08fd460c192");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTvHD", {
get: function () {
return getICON_CLASSRecord("b0769287-51cb-47f3-9473-a6445af70fa3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTelemovel", {
get: function () {
return getICON_CLASSRecord("b1f13a43-5240-410f-a1c7-74aed8c2c0d3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconErrorRounded", {
get: function () {
return getICON_CLASSRecord("b33adfc1-7559-4bae-9170-5019ca3ce1df");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconBill", {
get: function () {
return getICON_CLASSRecord("b635c5d1-d875-4eb4-9140-b854d84506d6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconListInverted", {
get: function () {
return getICON_CLASSRecord("b6649ac2-4b33-4d07-85c3-9392355136ca");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPopCornNew", {
get: function () {
return getICON_CLASSRecord("b68cfa8f-1566-400a-88e2-169e166679c2");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCopiar", {
get: function () {
return getICON_CLASSRecord("b6bab7da-9419-40da-bb39-a42e83720f0a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSeatColor", {
get: function () {
return getICON_CLASSRecord("b7e797f4-b455-443a-8fb7-8c082dd9b67a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconScratch", {
get: function () {
return getICON_CLASSRecord("b7f71ed8-f49a-470e-aa4c-c3d1bb791b38");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMaisNatalWTF", {
get: function () {
return getICON_CLASSRecord("b8d6b224-7c36-4a09-8be5-ee29f47cd115");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFilterFilled", {
get: function () {
return getICON_CLASSRecord("b9aa8387-f155-4bb8-b920-fa5d3b08c947");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCheckBoxOff", {
get: function () {
return getICON_CLASSRecord("ba5e3751-896e-4615-8386-e08039f43e0f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconNotificacoes", {
get: function () {
return getICON_CLASSRecord("bb610fbf-72c5-49c0-9806-e9a630529824");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMessageSuccessWTF", {
get: function () {
return getICON_CLASSRecord("bbfd4eac-b4c8-424f-9522-f3c8256ccde1");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconPremiumSeatXL", {
get: function () {
return getICON_CLASSRecord("bdfeb64e-3109-4f84-808f-a09d59d8d5b7");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAppleMusic", {
get: function () {
return getICON_CLASSRecord("be911cac-a3df-4adf-a602-0bffaed86100");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconRouter", {
get: function () {
return getICON_CLASSRecord("bea8023a-f5ec-4cef-abab-c208537890eb");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEnvelopOpen", {
get: function () {
return getICON_CLASSRecord("bef95d1d-3e00-4187-a067-7900d1b5c95c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconInternet", {
get: function () {
return getICON_CLASSRecord("bfd476fc-ac45-4a38-bff1-524d65e24334");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconGoogleMusic", {
get: function () {
return getICON_CLASSRecord("c06618eb-7595-4a21-8d26-876bd7ff2a38");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMaisWTF", {
get: function () {
return getICON_CLASSRecord("c0c1b4d3-435f-49b1-af20-2bea36276a50");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAlertRounded", {
get: function () {
return getICON_CLASSRecord("c10f6c06-a595-4f1c-af4b-7a0a819878f8");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconTicketFilled", {
get: function () {
return getICON_CLASSRecord("c1cb057f-5ffd-437b-bb74-eecedd69667a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconUser", {
get: function () {
return getICON_CLASSRecord("c2921be5-b316-42e3-aa26-d7d590c127c4");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconZonaNatalFilled", {
get: function () {
return getICON_CLASSRecord("c49fa011-b4c1-4d3d-87e2-b7e624b821e3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconDotsHorizontal", {
get: function () {
return getICON_CLASSRecord("c588a0d6-c262-4f33-84f9-2b25aa343dd6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconBack", {
get: function () {
return getICON_CLASSRecord("c605ef4d-f8e5-4d9c-8d32-96de02fec138");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconArrowLeft", {
get: function () {
return getICON_CLASSRecord("c6839bc2-52e1-49f9-9a33-0f2c61befe82");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconDotsVertical", {
get: function () {
return getICON_CLASSRecord("cb7aa433-4cd2-4a59-a08c-d95c4bf1941d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconForumNos", {
get: function () {
return getICON_CLASSRecord("cd6557a8-a44d-417b-93c4-336b6df9e444");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEletronicInvoiceNew", {
get: function () {
return getICON_CLASSRecord("cf2cc7cb-eafa-453c-b310-352580360073");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconErrorRoundedFilledV2", {
get: function () {
return getICON_CLASSRecord("d0be93fe-114a-42ea-b172-38376cbc1b04");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconBellCheck", {
get: function () {
return getICON_CLASSRecord("d0d2579c-59fb-4e16-a871-1a71d193332a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconNetMovel", {
get: function () {
return getICON_CLASSRecord("d1f7d660-8a76-4250-9782-82f8e244c719");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSaucyNatalFilled", {
get: function () {
return getICON_CLASSRecord("d22d0b57-de00-4f93-8eb0-80c400ec90b0");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconArrowDown", {
get: function () {
return getICON_CLASSRecord("d2cd9ec7-9b69-468b-8b1c-2a34ba3b9da3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconGestureDoubleTap", {
get: function () {
return getICON_CLASSRecord("d4b4e0d3-94dc-4bf7-9cad-5eb9aa00e2ca");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconWindows", {
get: function () {
return getICON_CLASSRecord("d6455aba-7cef-4a48-8d1e-5799c53dbf1a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAlertTriangleFilled", {
get: function () {
return getICON_CLASSRecord("d8a3f9d2-0f15-4667-a6ae-91cf9ec34d99");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFacebook", {
get: function () {
return getICON_CLASSRecord("da91f8cd-c1a2-4e79-a3b2-6f358bfa43ba");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconDislike", {
get: function () {
return getICON_CLASSRecord("dba88543-c98a-434b-8ab7-b3bad26038b3");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconFaceTime", {
get: function () {
return getICON_CLASSRecord("df92fd71-9b56-41cb-85c2-665f9e5fc1fe");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSpotify", {
get: function () {
return getICON_CLASSRecord("e1d2fd99-388f-4312-82b2-07d85e0319b7");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconSaucyFilled", {
get: function () {
return getICON_CLASSRecord("e2d0c688-8770-4a9e-a3b9-0635dcee6b62");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconInternetData", {
get: function () {
return getICON_CLASSRecord("e5030fb0-23c7-4754-8a94-ba385f85988a");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconRadioButtonOn", {
get: function () {
return getICON_CLASSRecord("e63cf556-7f97-4a41-9f86-7d2498336765");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconCheckCircle", {
get: function () {
return getICON_CLASSRecord("e67bde37-6a83-4a29-8ccb-c3dcaa996eae");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconRecycleBinEmpty", {
get: function () {
return getICON_CLASSRecord("e722390d-6826-4c00-809b-421808b2edb0");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEnvelopeClosed", {
get: function () {
return getICON_CLASSRecord("e889b360-6d3d-4db6-913e-801ad74ad638");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconMobilidade", {
get: function () {
return getICON_CLASSRecord("ec3ba0bc-94ba-4c3e-a224-5b7ebae2bfd1");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconEdit", {
get: function () {
return getICON_CLASSRecord("ecf06917-d913-4a0b-95ef-dc1571fa875c");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAdmin", {
get: function () {
return getICON_CLASSRecord("f0614f61-661d-4c96-a384-42eb2363ab5f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconAmazon", {
get: function () {
return getICON_CLASSRecord("f1121331-7df3-44a2-926a-9b162df5fed9");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconWhatsapp", {
get: function () {
return getICON_CLASSRecord("f1b721a3-dfdb-47f4-9b3f-f9a60dfc5311");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconShare", {
get: function () {
return getICON_CLASSRecord("f576738a-b1f7-47f0-891d-5d2e97c1f525");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconWalletFilled", {
get: function () {
return getICON_CLASSRecord("fa0cf488-587a-4b71-a3ff-ff24002f169f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconViber", {
get: function () {
return getICON_CLASSRecord("fac3d751-fe8e-4590-a202-813145d1c877");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.iCON_CLASS, "iconHeartFilled", {
get: function () {
return getICON_CLASSRecord("fcc8dde8-3d2f-4589-9f97-9ee7a5e9b90c");
}
});

Mobile_LoginNOSModel.staticEntities.hEX_COLORS = {};
var getHEX_COLORSRecord = function (record) {
return OS.ApplicationInfo.getModules()["9bedb487-ca1c-4124-a989-9d7f5ac0dad1"].staticEntities["e1084c14-e3e9-4e06-a9e0-d048f01b9abf"][record];
};
Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "blueLight", {
get: function () {
return getHEX_COLORSRecord("19b8ee1a-f758-4da5-8915-28a65ed9ec86");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "gray4", {
get: function () {
return getHEX_COLORSRecord("1a09078f-ea91-4ff3-8c23-4a7236a9e056");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "grayDark", {
get: function () {
return getHEX_COLORSRecord("33bf8c9f-339e-4810-a10c-a67b4873c525");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "blackOverlay", {
get: function () {
return getHEX_COLORSRecord("68efbe84-55c6-4e53-885f-b8cf2a6f2f94");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "greenLight", {
get: function () {
return getHEX_COLORSRecord("69b8ae12-3587-42f3-b8f2-67b6455862bf");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "gray3", {
get: function () {
return getHEX_COLORSRecord("7bf5e40c-2267-4de3-a8b2-8764f2302acf");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "grayLight", {
get: function () {
return getHEX_COLORSRecord("80fdf149-394c-462f-9ce6-9e80631f3056");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "greenDark", {
get: function () {
return getHEX_COLORSRecord("90c1f091-efcc-4709-b96b-7561ae8fada2");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "red", {
get: function () {
return getHEX_COLORSRecord("bc8c522c-4a9d-48b7-ba75-8de4d9bf16d6");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "strongPink_WTF", {
get: function () {
return getHEX_COLORSRecord("ca9dba13-1caf-49c2-aa8c-c9bd78e4a825");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "black", {
get: function () {
return getHEX_COLORSRecord("cc6e9de2-b25c-43d0-a0ab-9c833b5a3121");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "yellow", {
get: function () {
return getHEX_COLORSRecord("cd7e3483-942b-48b9-9924-16707965bd7d");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "white", {
get: function () {
return getHEX_COLORSRecord("d58bfed0-3616-4217-a249-55d6b18b1635");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "pureWhite", {
get: function () {
return getHEX_COLORSRecord("dce2b52b-478d-427a-8a24-57f095a9ea3f");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "pink", {
get: function () {
return getHEX_COLORSRecord("e24feb3d-ab50-4e00-b479-f07d1601bf59");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "pureBlack", {
get: function () {
return getHEX_COLORSRecord("e51f004f-8561-4f82-a31a-bd1c7c31fbbb");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "gray8", {
get: function () {
return getHEX_COLORSRecord("e6a4395e-1cbb-4e50-beaf-869b478f26e5");
}
});

Object.defineProperty(Mobile_LoginNOSModel.staticEntities.hEX_COLORS, "blueDark", {
get: function () {
return getHEX_COLORSRecord("ebb9ee56-8dbe-4f8f-b169-d9ddf226b6db");
}
});

});
