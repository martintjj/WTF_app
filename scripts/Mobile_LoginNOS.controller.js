define("Mobile_LoginNOS.controller$Audit", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.audit$Action = function (applicationNameIn, messageIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.Audit.Audit$vars"))());
vars.value.applicationNameInLocal = applicationNameIn;
vars.value.messageInLocal = messageIn;
// Execute Action: LogMessage
OS.SystemActions.logMessage(vars.value.messageInLocal, (("[LoginNOS] - [" + vars.value.applicationNameInLocal) + "]"), callContext);
return ;
};
var controller = Mobile_LoginNOSController.default;
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.Audit.Audit$vars", [{
name: "ApplicationName",
attrName: "applicationNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Message",
attrName: "messageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Mobile_LoginNOSController.default.clientActionProxies.audit$Action = function (applicationNameIn, messageIn) {
applicationNameIn = (applicationNameIn === undefined) ? "" : applicationNameIn;
messageIn = (messageIn === undefined) ? "" : messageIn;
return controller.executeActionInsideJSNode(Mobile_LoginNOSController.default.audit$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationNameIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(messageIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Mobile_LoginNOS.controller$BuildApplicationIdentifier", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "CommonPlugin.controller", "CommonPlugin.controller$GetOperatingSystem", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin", "Mobile_LoginNOS.controller$Audit"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, CommonPluginController) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.buildApplicationIdentifier$Action = function (applicationNameIn, applicationIdentifierIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OperatingSystem.BuildApplicationIdentifier$vars"))());
vars.value.applicationNameInLocal = applicationNameIn;
vars.value.applicationIdentifierInLocal = applicationIdentifierIn;
var getOperatingSystemVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OperatingSystem.BuildApplicationIdentifier$outVars"))());
// Execute Action: GetOperatingSystem
getOperatingSystemVar.value = CommonPluginController.default.getOperatingSystem$Action(callContext);

// Prepare App Identifier
// ApplicationIdentifier = Replace
vars.value.applicationIdentifierInLocal = OS.BuiltinFunctions.replace(vars.value.applicationIdentifierInLocal, ":", "");
// ApplicationIdentifier = Replace
vars.value.applicationIdentifierInLocal = OS.BuiltinFunctions.replace(vars.value.applicationIdentifierInLocal, "/", "");
// Android or iOS?
if((((getOperatingSystemVar.value.operatingSystemsIdOut === Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem.android) || (getOperatingSystemVar.value.operatingSystemsIdOut === Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem.iOS)))) {
// AppIdentifierRebuilded = ApplicationIdentifier + "://"
outVars.value.appIdentifierRebuildedOut = (vars.value.applicationIdentifierInLocal + "://");
} else {
// Set Error
// Error = True
outVars.value.errorOut = true;
// Error_Message = "O dispostivo que está a tentar efetuar Login não é uma plataforma iOS ou Android!"
outVars.value.error_MessageOut = "O dispostivo que está a tentar efetuar Login não é uma plataforma iOS ou Android!";
// Execute Action: Audit
Mobile_LoginNOSController.default.audit$Action(vars.value.applicationNameInLocal, outVars.value.error_MessageOut, callContext);
}

return outVars.value;
};
var controller = Mobile_LoginNOSController.default;
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.OperatingSystem.BuildApplicationIdentifier$vars", [{
name: "ApplicationName",
attrName: "applicationNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ApplicationIdentifier",
attrName: "applicationIdentifierInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.OperatingSystem.BuildApplicationIdentifier$outVars", [{
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Error_Message",
attrName: "error_MessageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AppIdentifierRebuilded",
attrName: "appIdentifierRebuildedOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Mobile_LoginNOSController.default.clientActionProxies.buildApplicationIdentifier$Action = function (applicationNameIn, applicationIdentifierIn) {
applicationNameIn = (applicationNameIn === undefined) ? "" : applicationNameIn;
applicationIdentifierIn = (applicationIdentifierIn === undefined) ? "" : applicationIdentifierIn;
return controller.executeActionInsideJSNode(Mobile_LoginNOSController.default.buildApplicationIdentifier$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationNameIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIdentifierIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Error: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.errorOut, OS.Types.Boolean, true),
Error_Message: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.error_MessageOut, OS.Types.Text, true),
AppIdentifierRebuilded: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.appIdentifierRebuildedOut, OS.Types.Text, true)
};
});
};
});

define("Mobile_LoginNOS.controller$Cordova_GetOperatingSystem", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "CommonPlugin.controller", "CommonPlugin.controller$GetOperatingSystem", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin", "CommonPlugin.controller$IsCordovaDefined"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, CommonPluginController) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.cordova_GetOperatingSystem$Action = function (callContext) {
callContext = controller.callContext(callContext);
var getOperatingSystemVar = new OS.DataTypes.VariableHolder();
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.ActivityLogger.Cordova_GetOperatingSystem$outVars"))());
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((isCordovaDefinedVar.value.isLoadedOut)) {
// Execute Action: GetOperatingSystem
getOperatingSystemVar.value = CommonPluginController.default.getOperatingSystem$Action(callContext);

// OperatingSystemsId = GetOperatingSystem.OperatingSystemsId
outVars.value.operatingSystemsIdOut = getOperatingSystemVar.value.operatingSystemsIdOut;
}

return outVars.value;
};
var controller = Mobile_LoginNOSController.default;
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.ActivityLogger.Cordova_GetOperatingSystem$outVars", [{
name: "OperatingSystemsId",
attrName: "operatingSystemsIdOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Mobile_LoginNOSController.default.clientActionProxies.cordova_GetOperatingSystem$Action = function () {
return controller.executeActionInsideJSNode(Mobile_LoginNOSController.default.cordova_GetOperatingSystem$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OperatingSystemsId: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.operatingSystemsIdOut, OS.Types.Text, true)
};
});
};
});

define("Mobile_LoginNOS.controller$OutdatedSoftware", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.outdatedSoftware$Action = function (callContext) {
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.ErrorMessage.OutdatedSoftware$outVars"))());
// Message = "Já está disponível uma nova versão da App Cinemas NOS. Por favor, faça a atualização na sua Store."
outVars.value.messageOut = "Já está disponível uma nova versão da App Cinemas NOS. Por favor, faça a atualização na sua Store.";
return outVars.value;
};
var controller = Mobile_LoginNOSController.default;
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.ErrorMessage.OutdatedSoftware$outVars", [{
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Mobile_LoginNOSController.default.clientActionProxies.outdatedSoftware$Action = function () {
return controller.executeActionInsideJSNode(Mobile_LoginNOSController.default.outdatedSoftware$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Message: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.messageOut, OS.Types.Text, true)
};
});
};
});

define("Mobile_LoginNOS.controller$setActivityLog_ClickEvents", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "ActivityLogger.model", "CommonPlugin.controller", "Mobile_LoginNOS.controller$Cordova_GetOperatingSystem", "Mobile_LoginNOS.model$ParameterList", "ActivityLogger.model$OutputRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ActivityLogger", "Mobile_LoginNOS.controller$ServerAction.ActivityLog_Insert", "CommonPlugin.controller$GetDeviceID", "Mobile_LoginNOS.referencesHealth$CommonPlugin", "ActivityLogger.model$ParameterRec"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, ActivityLoggerModel, CommonPluginController) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.setActivityLog_ClickEvents$Action = function (isRegisterIn, applicationIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.ActivityLogger.setActivityLog_ClickEvents$vars"))());
vars.value.isRegisterInLocal = isRegisterIn;
vars.value.applicationInLocal = applicationIn;
var activityLog_InsertVar = new OS.DataTypes.VariableHolder();
var cordova_GetOperatingSystemVar = new OS.DataTypes.VariableHolder();
var getDeviceIDVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Cordova_GetOperatingSystem
cordova_GetOperatingSystemVar.value = Mobile_LoginNOSController.default.cordova_GetOperatingSystem$Action(callContext);

if((((cordova_GetOperatingSystemVar.value.operatingSystemsIdOut === Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem.android) || (cordova_GetOperatingSystemVar.value.operatingSystemsIdOut === Mobile_LoginNOSModel.staticEntities.mobile_OperatingSystem.iOS)))) {
// OSMOBILE
// ParameterRecord.Name = "OS_MOBILE"
vars.value.parameterRecordVar.nameAttr = "OS_MOBILE";
// ParameterRecord.Value = ToUpper
vars.value.parameterRecordVar.valueAttr = OS.BuiltinFunctions.toUpper(cordova_GetOperatingSystemVar.value.operatingSystemsIdOut);
// Execute Action: OSMOBILE_ListAppend
OS.SystemActions.listAppend(vars.value.parameterListVar, vars.value.parameterRecordVar, callContext);
// Execute Action: GetDeviceID
getDeviceIDVar.value = CommonPluginController.default.getDeviceID$Action(callContext);

// SessionID = GetDeviceID.DeviceHwId
vars.value.sessionIDVar = getDeviceIDVar.value.deviceHwIdOut;
}

// Execute Action: ActivityLog_Insert
return controller.activityLog_Insert$ServerAction(vars.value.applicationInLocal, ((vars.value.isRegisterInLocal) ? ("CLICK_REGISTER") : ("CLICK_LOGIN")), "ANONYMOUS", "", "", vars.value.sessionIDVar, "", "", "", OS.BuiltinFunctions.currDateTime(), "", vars.value.parameterListVar, "", "SUCCESS", "0", "", "", "", "", "", "", OS.DataTypes.DateTime.defaultValue, "", "", "", "", OS.DataTypes.Decimal.defaultValue, callContext).then(function (value) {
activityLog_InsertVar.value = value;
});
}).then(function () {
return ;
});
};
var controller = Mobile_LoginNOSController.default;
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.ActivityLogger.setActivityLog_ClickEvents$vars", [{
name: "isRegister",
attrName: "isRegisterInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ParameterList",
attrName: "parameterListVar",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new Mobile_LoginNOSModel.ParameterList();
},
complexType: Mobile_LoginNOSModel.ParameterList
}, {
name: "ParameterRecord",
attrName: "parameterRecordVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new ActivityLoggerModel.ParameterRec();
},
complexType: ActivityLoggerModel.ParameterRec
}, {
name: "SessionID",
attrName: "sessionIDVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Mobile_LoginNOSController.default.clientActionProxies.setActivityLog_ClickEvents$Action = function (isRegisterIn, applicationIn) {
isRegisterIn = (isRegisterIn === undefined) ? false : isRegisterIn;
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
return controller.executeActionInsideJSNode(Mobile_LoginNOSController.default.setActivityLog_ClickEvents$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(isRegisterIn, OS.Types.Boolean), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Mobile_LoginNOS.controller$SFAuthenticationValidation", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "SFAuthenticationPlugin.controller", "SFAuthenticationPlugin.controller$SFAuthenticationIsAvailable", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$SFAuthenticationPlugin", "Mobile_LoginNOS.controller$OutdatedSoftware"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, SFAuthenticationPluginController) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.sFAuthenticationValidation$Action = function (callContext) {
callContext = controller.callContext(callContext);
var sFAuthenticationIsAvailableVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.PluginValidation.SFAuthenticationValidation$outVars"))());
// Execute Action: SFAuthenticationIsAvailable
sFAuthenticationIsAvailableVar.value = SFAuthenticationPluginController.default.sFAuthenticationIsAvailable$Action(callContext);

// SFAuthentication is Available?
if((!(sFAuthenticationIsAvailableVar.value.isAvailableOut))) {
// ErrorMessage = OutdatedSoftware()
outVars.value.errorMessageOut = Mobile_LoginNOSController.default.outdatedSoftware$Action(callContext.withoutIterationContext()).messageOut;
}

return outVars.value;
};
var controller = Mobile_LoginNOSController.default;
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.PluginValidation.SFAuthenticationValidation$outVars", [{
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Mobile_LoginNOSController.default.clientActionProxies.sFAuthenticationValidation$Action = function () {
return controller.executeActionInsideJSNode(Mobile_LoginNOSController.default.sFAuthenticationValidation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ErrorMessage: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.errorMessageOut, OS.Types.Text, true)
};
});
};
});

define("Mobile_LoginNOS.controller$ViewControllerValidation", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "ViewControllerPlugin.controller", "ViewControllerPlugin.controller$ViewCotnrollerIsAvailable", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ViewControllerPlugin", "Mobile_LoginNOS.controller$OutdatedSoftware"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, ViewControllerPluginController) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.viewControllerValidation$Action = function (callContext) {
callContext = controller.callContext(callContext);
var viewCotnrollerIsAvailableVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.PluginValidation.ViewControllerValidation$outVars"))());
// Execute Action: ViewCotnrollerIsAvailable
viewCotnrollerIsAvailableVar.value = ViewControllerPluginController.default.viewCotnrollerIsAvailable$Action(callContext);

// Available = ViewCotnrollerIsAvailable.IsAvailable
outVars.value.availableOut = viewCotnrollerIsAvailableVar.value.isAvailableOut;
// ViewController is Available?
if((!(viewCotnrollerIsAvailableVar.value.isAvailableOut))) {
// ErrorMessage = OutdatedSoftware()
outVars.value.errorMessageOut = Mobile_LoginNOSController.default.outdatedSoftware$Action(callContext.withoutIterationContext()).messageOut;
}

return outVars.value;
};
var controller = Mobile_LoginNOSController.default;
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS.PluginValidation.ViewControllerValidation$outVars", [{
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Available",
attrName: "availableOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Mobile_LoginNOSController.default.clientActionProxies.viewControllerValidation$Action = function () {
return controller.executeActionInsideJSNode(Mobile_LoginNOSController.default.viewControllerValidation$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
ErrorMessage: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.errorMessageOut, OS.Types.Text, true),
Available: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.availableOut, OS.Types.Boolean, true)
};
});
};
});

define("Mobile_LoginNOS.controller$ServerAction.ActivityLog_Insert", ["exports", "OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "ActivityLogger.model", "ActivityLogger.model$OutputRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$ActivityLogger"], function (exports, OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, ActivityLoggerModel) {
var OS = OutSystems.Internal;
Mobile_LoginNOSController.default.activityLog_Insert$ServerAction = function (applicationIn, actionIn, subActionIn, correlationIdIn, impersonatingUserIn, sessionIdentifierIn, nOSIDIn, userIDIn, userIDSystemIn, eventDateIn, requestPathIn, parametersListIn, referrerURLIn, resultIn, errorCodeIn, customerIDIn, serviceAccountIDIn, custCodeIn, mSISDNIn, customerContactIn, directoryNumberIn, birthDateIn, taxNumberIn, invoiceNumberIn, mACAddressIn, sourceIPIn, amountIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
Action: OS.DataTypes.JSConversions.basicTypeToJS(actionIn, OS.Types.Text),
SubAction: OS.DataTypes.JSConversions.basicTypeToJS(subActionIn, OS.Types.Text),
CorrelationId: OS.DataTypes.JSConversions.basicTypeToJS(correlationIdIn, OS.Types.Text),
ImpersonatingUser: OS.DataTypes.JSConversions.basicTypeToJS(impersonatingUserIn, OS.Types.Text),
SessionIdentifier: OS.DataTypes.JSConversions.basicTypeToJS(sessionIdentifierIn, OS.Types.Text),
NOSID: OS.DataTypes.JSConversions.basicTypeToJS(nOSIDIn, OS.Types.Text),
UserID: OS.DataTypes.JSConversions.basicTypeToJS(userIDIn, OS.Types.Text),
UserIDSystem: OS.DataTypes.JSConversions.basicTypeToJS(userIDSystemIn, OS.Types.Text),
EventDate: OS.DataTypes.JSConversions.basicTypeToJS(eventDateIn, OS.Types.DateTime),
RequestPath: OS.DataTypes.JSConversions.basicTypeToJS(requestPathIn, OS.Types.Text),
ParametersList: parametersListIn.toJS(),
ReferrerURL: OS.DataTypes.JSConversions.basicTypeToJS(referrerURLIn, OS.Types.Text),
Result: OS.DataTypes.JSConversions.basicTypeToJS(resultIn, OS.Types.Text),
ErrorCode: OS.DataTypes.JSConversions.basicTypeToJS(errorCodeIn, OS.Types.Text),
CustomerID: OS.DataTypes.JSConversions.basicTypeToJS(customerIDIn, OS.Types.Text),
ServiceAccountID: OS.DataTypes.JSConversions.basicTypeToJS(serviceAccountIDIn, OS.Types.Text),
CustCode: OS.DataTypes.JSConversions.basicTypeToJS(custCodeIn, OS.Types.Text),
MSISDN: OS.DataTypes.JSConversions.basicTypeToJS(mSISDNIn, OS.Types.Text),
CustomerContact: OS.DataTypes.JSConversions.basicTypeToJS(customerContactIn, OS.Types.Text),
DirectoryNumber: OS.DataTypes.JSConversions.basicTypeToJS(directoryNumberIn, OS.Types.Text),
BirthDate: OS.DataTypes.JSConversions.basicTypeToJS(birthDateIn, OS.Types.Date),
TaxNumber: OS.DataTypes.JSConversions.basicTypeToJS(taxNumberIn, OS.Types.Text),
InvoiceNumber: OS.DataTypes.JSConversions.basicTypeToJS(invoiceNumberIn, OS.Types.Text),
MACAddress: OS.DataTypes.JSConversions.basicTypeToJS(mACAddressIn, OS.Types.Text),
SourceIP: OS.DataTypes.JSConversions.basicTypeToJS(sourceIPIn, OS.Types.Text),
Amount: OS.DataTypes.JSConversions.basicTypeToJS(amountIn, OS.Types.Decimal)
};
return controller.callServerAction("ActivityLog_Insert", "screenservices/Mobile_LoginNOS/ActionActivityLog_Insert", "woGw4BkswWvquEceUNQrZw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS$rssespaceactivitylogger_ActionActivityLog_Insert"))();
executeServerActionResult.outputOut = ActivityLoggerModel.OutputRec.fromJS(outputs.Output);
return executeServerActionResult;
});
};
Mobile_LoginNOSController.default.constructor.registerVariableGroupType("Mobile_LoginNOS$rssespaceactivitylogger_ActionActivityLog_Insert", [{
name: "Output",
attrName: "outputOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new ActivityLoggerModel.OutputRec();
},
complexType: ActivityLoggerModel.OutputRec
}]);
});
define("Mobile_LoginNOS.controller", ["exports", "OutSystems", "Mobile_LoginNOS.model"], function (exports, OutSystems, Mobile_LoginNOSModel) {
var OS = OutSystems.Internal;
var Mobile_LoginNOSController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return Mobile_LoginNOSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
Mobile_LoginNOSController.default = new Controller();
});
