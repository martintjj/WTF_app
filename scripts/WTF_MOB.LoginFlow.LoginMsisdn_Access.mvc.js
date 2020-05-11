define("WTF_MOB.LoginFlow.LoginMsisdn_Access.mvc$model", ["OutSystems", "WTF_MOB.model", "Mobile_LoginNOS.model", "WTF_MOB.controller", "WTF_MBP.controller", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.Common.LayoutBlank.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$model", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MOB.controller$TriggerOfflineDataSync", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$STR_LogNameValueRecordList", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, Mobile_LoginNOSModel, WTF_MOBController, WTF_MBPController, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOB_Common_LayoutBlank_mvcModel, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("ClientId", "clientIdIn", "ClientId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ClientSecret", "clientSecretIn", "ClientSecret", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_clientSecretInDataFetchStatus", "_clientSecretInDataFetchStatus", "_clientSecretInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ApplicationName", "applicationNameIn", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
})
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = (WTF_MOB_Common_LayoutBlank_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ClientId" in inputs) {
this.variables.clientIdIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ClientId, OS.Types.Text);
}

if("ClientSecret" in inputs) {
this.variables.clientSecretIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ClientSecret, OS.Types.Text);
}

if("ApplicationName" in inputs) {
this.variables.applicationNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ApplicationName, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.LoginMsisdn_Access.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.LoginMsisdn_Access.mvc$model", "WTF_MOB.LoginFlow.LoginMsisdn_Access.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$view", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MOB.controller$TriggerOfflineDataSync", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$STR_LogNameValueRecordList", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, MobileUIWidgetsController, React, OSView, WTF_MOB_LoginFlow_LoginMsisdn_Access_mvc_model, WTF_MOB_LoginFlow_LoginMsisdn_Access_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "LoginFlow.LoginMsisdn_Access";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.LoginFlow.LoginMsisdn_Access.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_Access_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_LoginMsisdn_Access_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var _this = this;

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_LayoutBlank_mvc_view, {
inputs: {
PageTitle: "A aceder com o teu número",
PageSection: "Login",
PageType: "Consulta",
ScreenName: "LoginMsisdn_Access"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
isConnectedEvent$Action: function (isConnectedIn) {
var eventHandlerContext = callContext.clone();
controller.layoutBlankIsConnectedEvent$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "bauKsJ813UOaEcUsS1zfUQ"
},
style: "b-pinkToBlue",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateHead",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.double_path.svg"),
style: "paths_double",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, {
inputs: {
Text: "Aguarda uns instantes. Estamos a validar a ligação à rede e a configurar a tua App WTF.",
Title: "A aceder com o teu número"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
spokeImage: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.protection_img.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_trampa",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.EmptyStateBackground.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.LoginFlow.LoginMsisdn_Access.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.LoginFlow.controller", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$setActivityLog_LOGIN_MSISDN_VISIT", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MOB.controller$TriggerOfflineDataSync", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$STR_LogNameValueRecordList", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_LoginFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.validateRegisteredUser$ServerAction = function (subIn, callContext) {
var controller = this.controller;
var inputs = {
Sub: OS.DataTypes.JSConversions.basicTypeToJS(subIn, OS.Types.Text)
};
return controller.callServerAction("ValidateRegisteredUser", "screenservices/WTF_MOB/LoginFlow/LoginMsisdn_Access/ActionValidateRegisteredUser", "iy+K4ZbV67ZL2pHV4lEKAg", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_Access$rssespacemobile_loginnos_ActionValidateRegisteredUser"))();
executeServerActionResult.isRegisteredUserOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.IsRegisteredUser, OS.Types.Boolean);
executeServerActionResult.hasErrorOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.HasError, OS.Types.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_Access$rssespacemobile_loginnos_ActionValidateRegisteredUser", [{
name: "IsRegisteredUser",
attrName: "isRegisteredUserOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HasError",
attrName: "hasErrorOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype.getTokenMobileNetwork$ServerAction = function (clientIDIn, clientSecretIn, applicationIn, doLoggingIn, correlationIdIn, log_ExtendedParameterListIn, useDefaultIPIn, callContext) {
var controller = this.controller;
var inputs = {
ClientID: OS.DataTypes.JSConversions.basicTypeToJS(clientIDIn, OS.Types.Text),
ClientSecret: OS.DataTypes.JSConversions.basicTypeToJS(clientSecretIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
CorrelationId: OS.DataTypes.JSConversions.basicTypeToJS(correlationIdIn, OS.Types.Text),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS(),
UseDefaultIP: OS.DataTypes.JSConversions.basicTypeToJS(useDefaultIPIn, OS.Types.Boolean)
};
return controller.callServerAction("GetTokenMobileNetwork", "screenservices/WTF_MOB/LoginFlow/LoginMsisdn_Access/ActionGetTokenMobileNetwork", "TLG5qvIk5RYAMiPDhfqkgw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_Access$rssespacemobile_loginnos_ActionGetTokenMobileNetwork"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.subOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Sub, OS.Types.Text);
executeServerActionResult.clientIpOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.ClientIp, OS.Types.Text);
executeServerActionResult.isMobileNetworkOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.IsMobileNetwork, OS.Types.Boolean);
executeServerActionResult.mobilePhoneOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.MobilePhone, OS.Types.Text);
executeServerActionResult.responseOut = Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec.fromJS(outputs.Response);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_Access$rssespacemobile_loginnos_ActionGetTokenMobileNetwork", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Sub",
attrName: "subOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ClientIp",
attrName: "clientIpOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsMobileNetwork",
attrName: "isMobileNetworkOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "MobilePhone",
attrName: "mobilePhoneOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, fromRegisterInputIn, isRegisteredUserIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_RegisterOrLogin_Closed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_Access.NOSID_RegisterOrLogin_Closed$vars"))());
vars.value.accessTokenInfoInLocal = accessTokenInfoIn.clone();
vars.value.fromRegisterInputInLocal = fromRegisterInputIn;
vars.value.isRegisteredUserInLocal = isRegisteredUserIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var loginActionVar = new OS.DataTypes.VariableHolder();
var checkIfUserHasEverLoggedInVar = new OS.DataTypes.VariableHolder();
var registerDeviceInfoVar = new OS.DataTypes.VariableHolder();
var validateIfUserAreBlockedVar = new OS.DataTypes.VariableHolder();
var getUserInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogMessage3
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "Entering Register or login closed..."), "WTF_MOB", callContext);
// Execute Action: LoginAction
model.flush();
return WTF_MOBController.default.loginAction$Action(vars.value.accessTokenInfoInLocal, true, vars.value.isRegisteredUserInLocal, callContext).then(function (value) {
loginActionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((loginActionVar.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((vars.value.isRegisteredUserInLocal)) {
// Execute Action: setActivityLog_LOGIN_MSISDN_VISITsetActivityLog_L2
model.flush();
return WTF_MBPController.default.setActivityLog_LOGIN_MSISDN_VISIT$Action("", "MOBILE_REGISTER", callContext).then(function () {
// Execute Action: LogMessage2
OS.SystemActions.logMessage("[Login] Start TriggerOfflineDataSync", "AssociationSync", callContext);
// Aggregate: GetUserInfo
var getUserInfoAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_NOS_INFORecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6";
} else {
selectSql += "\"ENLocal_USER_NOS_INFO\".\"Uid\" o0, \"ENLocal_USER_NOS_INFO\".\"Name\" o1, \"ENLocal_USER_NOS_INFO\".\"Birth_date\" o2, \"ENLocal_USER_NOS_INFO\".\"Gender\" o3, \"ENLocal_USER_NOS_INFO\".\"Username\" o4, \"ENLocal_USER_NOS_INFO\".\"Picture\" o5, \"ENLocal_USER_NOS_INFO\".\"CreatedAt\" o6";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_NOS_INFO\" \"ENLocal_USER_NOS_INFO\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_NOS_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_NOS_INFOAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeClientAggregate(executeQuery, function () {
return getUserInfoVar.value;
});
};
return getUserInfoAggr();
}).then(function () {
// Execute Action: RegisterDeviceInfo
model.flush();
return CustomerNotifications_MBPController.default.registerDeviceInfo_v3$Action(getUserInfoVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_NOS_INFOAttr.uidAttr, "WTF", callContext).then(function (value) {
registerDeviceInfoVar.value = value;
});
}).then(function () {
// Execute Action: SyncBalanceConfig
WTF_MOBController.default.triggerOfflineDataSync$Action(WTF_MOBModel.staticEntities.sYNC_UNIT.balanceConfig, false, callContext);
// Execute Action: TriggerOfflineDataSync
WTF_MOBController.default.triggerOfflineDataSync$Action(WTF_MOBModel.staticEntities.sYNC_UNIT.aggregates, false, callContext);
// Execute Action: ValidateIfUserAreBlocked
model.flush();
return WTF_MBPController.default.validateIfUserAreBlocked$Action(callContext).then(function (value) {
validateIfUserAreBlockedVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((validateIfUserAreBlockedVar.value.hasBockOut === true))) {
// Execute Action: LogMessage4
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "The user is blocked..."), "WTF_MOB", callContext);
// Destination: /WTF_MOB/UserBlocked
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserBlocked", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
// Execute Action: LogMessage5
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "The user is NOT blocked..."), "WTF_MOB", callContext);
return OS.Flow.executeSequence(function () {
if(((loginActionVar.value.app_UserAssociations_LengthOut >= 1))) {
// Execute Action: LogMessage6
OS.SystemActions.logMessage((((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "After associations, the length: ") + (loginActionVar.value.app_UserAssociations_LengthOut).toString()), "WTF_MOB", callContext);
// Execute Action: CheckIfUserHasEverLoggedIn
model.flush();
return WTF_MOBController.default.checkIfUserHasEverLoggedIn$Action(false, callContext).then(function (value) {
checkIfUserHasEverLoggedInVar.value = value;
}).then(function () {
if((!(vars.value.fromRegisterInputInLocal))) {
// HasLoggedIn?
if((checkIfUserHasEverLoggedInVar.value.hasLoggedInOut)) {
// Destination: /WTF_MOB/LoadingSplash
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoadingSplash", {
FromRegister: vars.value.fromRegisterInputInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

// Destination: /WTF_MOB/OnBoarding
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/OnBoarding", {
DemoAppWithoutLogin: false,
FromRegister: vars.value.fromRegisterInputInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: LogMessage7
OS.SystemActions.logMessage((((((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "After associations, the length: ") + (loginActionVar.value.app_UserAssociations_LengthOut).toString()) + "\r\n") + "Going to the protection screen..."), "WTF_MOB", callContext);
// Destination: /WTF_MOB/ProtectionScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ProtectionScreen", {
FromRegister: vars.value.fromRegisterInputInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
}

});
});
} else {
// Execute Action: setActivityLog_LOGIN_MSISDN_VISITsetActivityLog_LO
model.flush();
return WTF_MBPController.default.setActivityLog_LOGIN_MSISDN_VISIT$Action("", "MOBILE_NOREGISTER", callContext).then(function () {
// Execute Action: StopTrace5
return controller._stopTrace$Action(callContext);
}).then(function () {
// Destination: /WTF_MOB/WTF_Home_WithoutLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home_WithoutLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
} else {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_Access.NOSID_RegisterOrLogin_Closed", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.LoginMsisdn_Access.NOSID_RegisterOrLogin_Closed$vars", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec
}, {
name: "FromRegisterInput",
attrName: "fromRegisterInputInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsRegisteredUser",
attrName: "isRegisteredUserInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
Controller.prototype._stopTrace$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("StopTrace");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: StopTraceGlobalAction
model.flush();
return WTF_MOBController.default.stopTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.analytics_PerformanceStopedAttr, model.variables.analyticsAuxVarVar.traceNameAttr, model.variables.analyticsAuxVarVar.trace_StartAtAttr, model.variables.analyticsAuxVarVar.categoryAttr, callContext).then(function () {
// Analytics_PerformanceStoped
// AnalyticsAuxVar.Analytics_PerformanceStoped = True
model.variables.analyticsAuxVarVar.analytics_PerformanceStopedAttr = true;
});
});
};
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
};
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "A aceder com o teu número"
model.variables.analyticsAuxVarVar.traceNameAttr = "A aceder com o teu número";
// AnalyticsAuxVar.Category = "Login"
model.variables.analyticsAuxVarVar.categoryAttr = "Login";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext);
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_Access.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
return OS.Flow.returnAsync();

} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validateRegisteredUserVar = new OS.DataTypes.VariableHolder();
var getTokenMobileNetworkVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getUseDefaultIP_GetTokenMobileNetworkVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetUseDefaultIP_GetTokenMobileNetwork
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("UseDefaultIP_GetTokenMobileNetwork", callContext).then(function (value) {
getUseDefaultIP_GetTokenMobileNetworkVar.value = value;
}).then(function () {
// Execute Action: GetTokenMobileNetwork
model.flush();
return controller.getTokenMobileNetwork$ServerAction(model.variables.clientIdIn, model.variables.clientSecretIn, model.variables.applicationNameIn, true, "", new WTF_MOBModel.STR_LogNameValueRecordList(), (OS.BuiltinFunctions.toLower(getUseDefaultIP_GetTokenMobileNetworkVar.value.valueOut) === "true"), callContext).then(function (value) {
getTokenMobileNetworkVar.value = value;
});
}).then(function () {
// IsMobileNetwork?
return OS.Flow.executeSequence(function () {
if((getTokenMobileNetworkVar.value.isMobileNetworkOut)) {
// Execute Action: ValidateRegisteredUser
model.flush();
return controller.validateRegisteredUser$ServerAction(getTokenMobileNetworkVar.value.subOut, callContext).then(function (value) {
validateRegisteredUserVar.value = value;
}).then(function () {
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
// Execute Action: NOSID_RegisterOrLogin_Closed
return controller._nOSID_RegisterOrLogin_Closed$Action(getTokenMobileNetworkVar.value.responseOut, false, validateRegisteredUserVar.value.isRegisteredUserOut, callContext);
});
} else {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/LoginMsisdn_AccessError
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoginMsisdn_AccessError", {
ClientSecret: model.variables.clientSecretIn,
ApplicationName: model.variables.applicationNameIn,
ClientId: model.variables.clientIdIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("LoginMsisdn_Access.OnReady", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
return OS.Flow.returnAsync();

} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};

Controller.prototype.nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, fromRegisterInputIn, isRegisteredUserIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_RegisterOrLogin_Closed$Action, callContext, accessTokenInfoIn, fromRegisterInputIn, isRegisteredUserIn);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.layoutBlankIsConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutBlankIsConnectedEvent$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_LoginFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return WTF_MOBController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, WTF_MOBLanguageResources);
});

