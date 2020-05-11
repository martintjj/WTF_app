define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$model", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NOSCordovaPlugin.controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$model", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$AccessTokenCodeRec", "CommonPlugin.model$ErrorRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "Mobile_LoginNOS.referencesHealth$BuildInfoPlugin", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "NOSCordovaPlugin.controller$ShowInternalBrowser", "Mobile_LoginNOS.referencesHealth$NOSCordovaPlugin"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, CommonPluginModel, BuildInfoPluginController, NOSCordovaPluginController, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("URL_EndPoint", "uRL_EndPointVar", "URL_EndPoint", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Code_Verifier", "code_VerifierVar", "Code_Verifier", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CallBackURL", "callBackURLVar", "CallBackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationName", "applicationNameIn", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ClientId", "clientIdIn", "ClientId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", "_clientIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CSS_Content", "cSS_ContentIn", "CSS_Content", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_cSS_ContentInDataFetchStatus", "_cSS_ContentInDataFetchStatus", "_cSS_ContentInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HeaderColor", "headerColorIn", "HeaderColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_headerColorInDataFetchStatus", "_headerColorInDataFetchStatus", "_headerColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsDebugMode", "isDebugModeIn", "IsDebugMode", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isDebugModeInDataFetchStatus", "_isDebugModeInDataFetchStatus", "_isDebugModeInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets || NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ApplicationName" in inputs) {
this.variables.applicationNameIn = inputs.ApplicationName;
if("_applicationNameInDataFetchStatus" in inputs) {
this.variables._applicationNameInDataFetchStatus = inputs._applicationNameInDataFetchStatus;
}

}

if("ClientId" in inputs) {
this.variables.clientIdIn = inputs.ClientId;
if("_clientIdInDataFetchStatus" in inputs) {
this.variables._clientIdInDataFetchStatus = inputs._clientIdInDataFetchStatus;
}

}

if("CSS_Content" in inputs) {
this.variables.cSS_ContentIn = inputs.CSS_Content;
if("_cSS_ContentInDataFetchStatus" in inputs) {
this.variables._cSS_ContentInDataFetchStatus = inputs._cSS_ContentInDataFetchStatus;
}

}

if("HeaderColor" in inputs) {
this.variables.headerColorIn = inputs.HeaderColor;
if("_headerColorInDataFetchStatus" in inputs) {
this.variables._headerColorInDataFetchStatus = inputs._headerColorInDataFetchStatus;
}

}

if("IsDebugMode" in inputs) {
this.variables.isDebugModeIn = inputs.IsDebugMode;
if("_isDebugModeInDataFetchStatus" in inputs) {
this.variables._isDebugModeInDataFetchStatus = inputs._isDebugModeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$view", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NOSCordovaPlugin.controller", "react", "OutSystemsReactView", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "OutSystemsReactWidgets", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$view", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$AccessTokenCodeRec", "CommonPlugin.model$ErrorRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "Mobile_LoginNOS.referencesHealth$BuildInfoPlugin", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "NOSCordovaPlugin.controller$ShowInternalBrowser", "Mobile_LoginNOS.referencesHealth$NOSCordovaPlugin"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, CommonPluginModel, BuildInfoPluginController, NOSCordovaPluginController, React, OSView, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_model, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_controller, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, OSWidgets, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view) {
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
        View.displayName = "OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
inputs: {},
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.loginOnNOSID$Action(controller.callContext(eventHandlerContext));
});
;
},
style: ("btn a-btn -fullWidth " + model.variables.cSS_ContentIn),
visible: true,
_idProps: {
service: idService,
name: "btn_Login"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cSS_ContentInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "Iniciar sessão com e-mail",
_idProps: {
service: idService,
name: "Login"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._cSS_ContentInDataFetchStatus), asPrimitiveValue(model.variables.cSS_ContentIn)]
}), React.createElement(NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSuccess$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnSuccess$Action(controller.callContext(eventHandlerContext));
});
;
},
onLoginSuccess$Action: function (urlIn, browserIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnLoginSuccess$Action(urlIn, browserIn, controller.callContext(eventHandlerContext));
});
;
},
onError$Action: function (errorIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnError$Action(errorIn, controller.callContext(eventHandlerContext));
});
;
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
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$controller", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NOSCordovaPlugin.controller", "Mobile_LoginNOS.languageResources", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$controller.ShowWebViewListenerOnLoginSuccess.GetUrlParametersJS", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.model$AccessTokenCodeRec", "CommonPlugin.model$ErrorRec", "Mobile_LoginNOS.referencesHealth", "Mobile_LoginNOS.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "Mobile_LoginNOS.referencesHealth$BuildInfoPlugin", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "NOSCordovaPlugin.controller$ShowInternalBrowser", "Mobile_LoginNOS.referencesHealth$NOSCordovaPlugin"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, CommonPluginModel, BuildInfoPluginController, NOSCordovaPluginController, Mobile_LoginNOSLanguageResources, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_controller_ShowWebViewListenerOnLoginSuccess_GetUrlParametersJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.accessTokenCode$ServerAction = function (applicationIn, doLoggingIn, correlationIdIn, codeIn, callBackURLIn, code_verifierIn, clientIdIn, log_ExtendedParameterListIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
CorrelationId: OS.DataTypes.JSConversions.basicTypeToJS(correlationIdIn, OS.Types.Text),
Code: OS.DataTypes.JSConversions.basicTypeToJS(codeIn, OS.Types.Text),
CallBackURL: OS.DataTypes.JSConversions.basicTypeToJS(callBackURLIn, OS.Types.Text),
Code_verifier: OS.DataTypes.JSConversions.basicTypeToJS(code_verifierIn, OS.Types.Text),
ClientId: OS.DataTypes.JSConversions.basicTypeToJS(clientIdIn, OS.Types.Text),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS()
};
return controller.callServerAction("AccessTokenCode", "screenservices/Mobile_LoginNOS/OAuth_Flow_Android/NOSID_Login_NOSCordovaPlugin/ActionAccessTokenCode", "W4TH0NcwyvJznDkgZkvDrw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin$ActionAccessTokenCode"))();
executeServerActionResult.accessTokenInfoOut = Mobile_LoginNOSModel.AccessTokenCodeRec.fromJS(outputs.AccessTokenInfo);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin$ActionAccessTokenCode", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCodeRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCodeRec
}]);
Controller.prototype.authorize_EndPoint_Param$ServerAction = function (applicationIn, doLoggingIn, correlationIdIn, clientIdIn, callBackURLIn, log_ExtendedParameterListIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
CorrelationId: OS.DataTypes.JSConversions.basicTypeToJS(correlationIdIn, OS.Types.Text),
ClientId: OS.DataTypes.JSConversions.basicTypeToJS(clientIdIn, OS.Types.Text),
CallBackURL: OS.DataTypes.JSConversions.basicTypeToJS(callBackURLIn, OS.Types.Text),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS()
};
return controller.callServerAction("Authorize_EndPoint_Param", "screenservices/Mobile_LoginNOS/OAuth_Flow_Android/NOSID_Login_NOSCordovaPlugin/ActionAuthorize_EndPoint_Param", "69w3qWL+p0fx3UswgRgNbg", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin$ActionAuthorize_EndPoint_Param"))();
executeServerActionResult.endPointOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.EndPoint, OS.Types.Text);
executeServerActionResult.parametersOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Parameters, OS.Types.Text);
executeServerActionResult.codeVerifierOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.CodeVerifier, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin$ActionAuthorize_EndPoint_Param", [{
name: "EndPoint",
attrName: "endPointOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Parameters",
attrName: "parametersOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CodeVerifier",
attrName: "codeVerifierOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._showWebViewListenerOnError$Action = function (errorIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.ShowWebViewListenerOnError$vars"))());
vars.value.errorInLocal = errorIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Event_CallBackError
return controller.login_Error$Action(vars.value.errorInLocal, callContext);
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.ShowWebViewListenerOnError$vars", [{
name: "Error",
attrName: "errorInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._showWebViewListenerOnLoginSuccess$Action = function (urlIn, browserIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnLoginSuccess");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.ShowWebViewListenerOnLoginSuccess$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.browserInLocal = browserIn;
var accessTokenCodeVar = new OS.DataTypes.VariableHolder();
var getUrlParametersJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
getUrlParametersJSResult.value = controller.safeExecuteJSNode(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_controller_ShowWebViewListenerOnLoginSuccess_GetUrlParametersJS, "GetUrlParameters", "ShowWebViewListenerOnLoginSuccess", {
Url: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.urlInLocal, OS.Types.Text, true),
code: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
scope: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
state: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.ShowWebViewListenerOnLoginSuccess$getUrlParametersJSResult"))();
jsNodeResult.codeOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.code, OS.Types.Text);
jsNodeResult.scopeOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.scope, OS.Types.Text);
jsNodeResult.stateOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.state, OS.Types.Text);
return jsNodeResult;
}, {}, {});
// Execute Action: Audit3
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, (((((((((("[NOSID_Login ShowWebViewListenerOnLoginSuccess] - url [" + vars.value.urlInLocal) + "]  Browser [") + vars.value.browserInLocal) + "] code [") + getUrlParametersJSResult.value.codeOut) + "] scope [") + getUrlParametersJSResult.value.scopeOut) + "] state [") + getUrlParametersJSResult.value.stateOut) + "]"), callContext);
// Execute Action: AccessTokenCode
model.flush();
return controller.accessTokenCode$ServerAction(model.variables.applicationNameIn, true, "", getUrlParametersJSResult.value.codeOut, model.variables.callBackURLVar, model.variables.code_VerifierVar, model.variables.clientIdIn, new Mobile_LoginNOSModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
accessTokenCodeVar.value = value;
}).then(function () {
// Execute Action: Audit2
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, (((((((((((((("[NOSID_Login AccessTokenCode] - Code: [" + getUrlParametersJSResult.value.codeOut) + "], Scope: [") + getUrlParametersJSResult.value.scopeOut) + "], State: [") + getUrlParametersJSResult.value.stateOut) + "], CallBackURL: [") + model.variables.callBackURLVar) + "], ClientId: [") + model.variables.clientIdIn) + "] Faultstring: [") + accessTokenCodeVar.value.accessTokenInfoOut.faultAttr.faultstringAttr) + "] Errorcode: [") + accessTokenCodeVar.value.accessTokenInfoOut.faultAttr.detailAttr.errorcodeAttr) + "]"), callContext);
}).then(function () {
// AccessTokenCode Error?
return OS.Flow.executeSequence(function () {
if((((accessTokenCodeVar.value.accessTokenInfoOut.faultAttr.faultstringAttr) !== ("")))) {
// ErrorMessage = "Erro na ação 'AccessTokenCode', ErrorCode: [" + AccessTokenCode.AccessTokenInfo.Fault.Detail.Errorcode + "], FaultString: [" + AccessTokenCode.AccessTokenInfo.Fault.Faultstring + "]"
vars.value.errorMessageVar = (((("Erro na ação \'AccessTokenCode\', ErrorCode: [" + accessTokenCodeVar.value.accessTokenInfoOut.faultAttr.detailAttr.errorcodeAttr) + "], FaultString: [") + accessTokenCodeVar.value.accessTokenInfoOut.faultAttr.faultstringAttr) + "]");
// Execute Action: Audit
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, vars.value.errorMessageVar, callContext);
// Trigger Event: Login_Error
return controller.login_Error$Action(vars.value.errorMessageVar, callContext);
} else {
// Trigger Event: Login_Closed
return controller.login_Closed$Action(accessTokenCodeVar.value.accessTokenInfoOut, false, vars.value.browserInLocal, callContext);
}

});
});
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.ShowWebViewListenerOnLoginSuccess$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Browser",
attrName: "browserInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.ShowWebViewListenerOnLoginSuccess$getUrlParametersJSResult", [{
name: "code",
attrName: "codeOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "scope",
attrName: "scopeOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "state",
attrName: "stateOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._loginOnNOSID$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LoginOnNOSID");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var authorize_EndPoint_ParamVar = new OS.DataTypes.VariableHolder();
var getBuildInfoVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: setActivityLog_ClickEvents
model.flush();
return Mobile_LoginNOSController.default.setActivityLog_ClickEvents$Action(false, model.variables.applicationNameIn, callContext).then(function () {
// Execute Action: GetBuildInfo
getBuildInfoVar.value = BuildInfoPluginController.default.getBuildInfo$Action(callContext);

// CallBackURL = GetBuildInfo.PackageName + "://PreLogin"
model.variables.callBackURLVar = (getBuildInfoVar.value.packageNameOut + "://PreLogin");
// Execute Action: Authorize_EndPoint_Param
model.flush();
return controller.authorize_EndPoint_Param$ServerAction(model.variables.applicationNameIn, true, "", model.variables.clientIdIn, model.variables.callBackURLVar, new Mobile_LoginNOSModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
authorize_EndPoint_ParamVar.value = value;
});
}).then(function () {
// Execute Action: Audit
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, ((((("NOSID_Login_NOSCordovaPlugin | URL End Point: " + authorize_EndPoint_ParamVar.value.endPointOut) + " Parameters: ") + authorize_EndPoint_ParamVar.value.parametersOut) + "  CodeVerifier: ") + authorize_EndPoint_ParamVar.value.codeVerifierOut), callContext);
// URL_EndPoint = Authorize_EndPoint_Param.EndPoint + "?" + Authorize_EndPoint_Param.Parameters
model.variables.uRL_EndPointVar = ((authorize_EndPoint_ParamVar.value.endPointOut + "?") + authorize_EndPoint_ParamVar.value.parametersOut);
// Code_Verifier
// Code_Verifier = Authorize_EndPoint_Param.CodeVerifier
model.variables.code_VerifierVar = authorize_EndPoint_ParamVar.value.codeVerifierOut;
// Execute Action: ShowInternalBrowser
NOSCordovaPluginController.default.showInternalBrowser$Action(model.variables.uRL_EndPointVar, "Iniciar sessão", model.variables.headerColorIn, model.variables.isDebugModeIn, "login", false, callContext);
});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Login_NOSCordovaPlugin.LoginOnNOSID", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync();

});
}

throw ex;
});
};
Controller.prototype._showWebViewListenerOnSuccess$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnSuccess");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Login_WebViewOpened
return controller.login_WebViewOpened$Action(callContext);
});
};

Controller.prototype.showWebViewListenerOnError$Action = function (errorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnError$Action, callContext, errorIn);

};
Controller.prototype.showWebViewListenerOnLoginSuccess$Action = function (urlIn, browserIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnLoginSuccess$Action, callContext, urlIn, browserIn);

};
Controller.prototype.loginOnNOSID$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loginOnNOSID$Action, callContext);

};
Controller.prototype.showWebViewListenerOnSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnSuccess$Action, callContext);

};
Controller.prototype.login_Closed$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Error$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_WebViewOpened$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return Mobile_LoginNOSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Mobile_LoginNOSLanguageResources);
});
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$controller.ShowWebViewListenerOnLoginSuccess.GetUrlParametersJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function getUrlVars(url) 
{
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(url, parameter, defaultvalue)
{
    var urlparameter = defaultvalue;
    if(url.indexOf(parameter) > -1)
    {
        urlparameter = getUrlVars(url)[parameter];
    }
    return urlparameter;
}

$parameters.code  = getUrlParam($parameters.Url,'code', '');
$parameters.scope = getUrlParam($parameters.Url,'scope','');
$parameters.state = getUrlParam($parameters.Url,'state','');
};
});

