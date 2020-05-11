define("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$model", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "SFAuthenticationPlugin.Main_SFAuthentication.SF_Authentication.mvc$model", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.controller$SFAuthenticationValidation", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "Mobile_LoginNOS.model$AccessTokenCodeRec", "Mobile_LoginNOS.model$FaultRec", "Mobile_LoginNOS.model$Fault2Rec", "Mobile_LoginNOS.model$ValueRec", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, SFAuthenticationPlugin_Main_SFAuthentication_SF_Authentication_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsVisible", "isVisibleVar", "IsVisible", true, OS.Types.Boolean, function () {
return false;
}), 
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
this.attr("ApplicationIdentifier", "applicationIdentifierIn", "ApplicationIdentifier", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationIdentifierInDataFetchStatus", "_applicationIdentifierInDataFetchStatus", "_applicationIdentifierInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
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
this.attr("CSS_Content", "cSS_ContentIn", "CSS_Content", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_cSS_ContentInDataFetchStatus", "_cSS_ContentInDataFetchStatus", "_cSS_ContentInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ViewController_Parameters", "viewController_ParametersIn", "ViewController_Parameters", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.WebView_ParametersRec());
}, Mobile_LoginNOSModel.WebView_ParametersRec), 
this.attr("_viewController_ParametersInDataFetchStatus", "_viewController_ParametersInDataFetchStatus", "_viewController_ParametersInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UseOpenId", "useOpenIdIn", "UseOpenId", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_useOpenIdInDataFetchStatus", "_useOpenIdInDataFetchStatus", "_useOpenIdInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets || SFAuthenticationPlugin_Main_SFAuthentication_SF_Authentication_mvcModel.hasValidationWidgets);
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

if("ApplicationIdentifier" in inputs) {
this.variables.applicationIdentifierIn = inputs.ApplicationIdentifier;
if("_applicationIdentifierInDataFetchStatus" in inputs) {
this.variables._applicationIdentifierInDataFetchStatus = inputs._applicationIdentifierInDataFetchStatus;
}

}

if("ClientId" in inputs) {
this.variables.clientIdIn = inputs.ClientId;
if("_clientIdInDataFetchStatus" in inputs) {
this.variables._clientIdInDataFetchStatus = inputs._clientIdInDataFetchStatus;
}

}

if("ClientSecret" in inputs) {
this.variables.clientSecretIn = inputs.ClientSecret;
if("_clientSecretInDataFetchStatus" in inputs) {
this.variables._clientSecretInDataFetchStatus = inputs._clientSecretInDataFetchStatus;
}

}

if("CSS_Content" in inputs) {
this.variables.cSS_ContentIn = inputs.CSS_Content;
if("_cSS_ContentInDataFetchStatus" in inputs) {
this.variables._cSS_ContentInDataFetchStatus = inputs._cSS_ContentInDataFetchStatus;
}

}

if("ViewController_Parameters" in inputs) {
this.variables.viewController_ParametersIn = inputs.ViewController_Parameters;
if("_viewController_ParametersInDataFetchStatus" in inputs) {
this.variables._viewController_ParametersInDataFetchStatus = inputs._viewController_ParametersInDataFetchStatus;
}

}

if("UseOpenId" in inputs) {
this.variables.useOpenIdIn = inputs.UseOpenId;
if("_useOpenIdInDataFetchStatus" in inputs) {
this.variables._useOpenIdInDataFetchStatus = inputs._useOpenIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$view", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "react", "OutSystemsReactView", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$model", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "OutSystemsReactWidgets", "SFAuthenticationPlugin.Main_SFAuthentication.SF_Authentication.mvc$view", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.controller$SFAuthenticationValidation", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "Mobile_LoginNOS.model$AccessTokenCodeRec", "Mobile_LoginNOS.model$FaultRec", "Mobile_LoginNOS.model$Fault2Rec", "Mobile_LoginNOS.model$ValueRec", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, React, OSView, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_model, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_controller, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, OSWidgets, SFAuthenticationPlugin_Main_SFAuthentication_SF_Authentication_mvc_view) {
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
        View.displayName = "OAuth_Flow_IOS.NOSID_Login_IOS_OpenId";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, SFAuthenticationPlugin_Main_SFAuthentication_SF_Authentication_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_controller;
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
}), React.createElement(SFAuthenticationPlugin_Main_SFAuthentication_SF_Authentication_mvc_view, {
inputs: {
URL: model.variables.uRL_EndPointVar,
IsVisible: model.variables.isVisibleVar,
ApplicationIdentifier: model.variables.applicationIdentifierIn,
_applicationIdentifierInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._applicationIdentifierInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
load$Action: function (outputDataIn) {
var eventHandlerContext = callContext.clone();
controller.sF_AuthenticationOnLoaded$Action(outputDataIn, controller.callContext(eventHandlerContext));

;
},
error$Action: function (messageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.sF_AuthenticationError$Action(messageIn, controller.callContext(eventHandlerContext));
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
define("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$controller", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "Mobile_LoginNOS.languageResources", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$controller.SF_AuthenticationOnLoaded.HandleOpenURL_iOSJS", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.controller$SFAuthenticationValidation", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "Mobile_LoginNOS.model$AccessTokenCodeRec", "Mobile_LoginNOS.model$FaultRec", "Mobile_LoginNOS.model$Fault2Rec", "Mobile_LoginNOS.model$ValueRec", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, Mobile_LoginNOSLanguageResources, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_controller_SF_AuthenticationOnLoaded_HandleOpenURL_iOSJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
sF_AuthenticationOnExit$Action: function (codeIn, scopeIn, stateIn, manuallyCloseIn) {
codeIn = (codeIn === undefined) ? "" : codeIn;
scopeIn = (scopeIn === undefined) ? "" : scopeIn;
stateIn = (stateIn === undefined) ? "" : stateIn;
manuallyCloseIn = (manuallyCloseIn === undefined) ? false : manuallyCloseIn;
return controller.executeActionInsideJSNode(controller._sF_AuthenticationOnExit$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(codeIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(scopeIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(stateIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(manuallyCloseIn, OS.Types.Boolean)), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions
Controller.prototype.openID_Authorize_EndPoint$ServerAction = function (applicationIn, doLoggingIn, correlationIdIn, clientIdIn, callBackURLIn, log_ExtendedParameterListIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
CorrelationId: OS.DataTypes.JSConversions.basicTypeToJS(correlationIdIn, OS.Types.Text),
ClientId: OS.DataTypes.JSConversions.basicTypeToJS(clientIdIn, OS.Types.Text),
CallBackURL: OS.DataTypes.JSConversions.basicTypeToJS(callBackURLIn, OS.Types.Text),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS()
};
return controller.callServerAction("OpenID_Authorize_EndPoint", "screenservices/Mobile_LoginNOS/OAuth_Flow_IOS/NOSID_Login_IOS_OpenId/ActionOpenID_Authorize_EndPoint", "MoXn8o+PXaswut9YxGIbjA", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionOpenID_Authorize_EndPoint"))();
executeServerActionResult.endPointOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.EndPoint, OS.Types.Text);
executeServerActionResult.codeVerifierOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.CodeVerifier, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionOpenID_Authorize_EndPoint", [{
name: "EndPoint",
attrName: "endPointOut",
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
return controller.callServerAction("Authorize_EndPoint_Param", "screenservices/Mobile_LoginNOS/OAuth_Flow_IOS/NOSID_Login_IOS_OpenId/ActionAuthorize_EndPoint_Param", "69w3qWL+p0fx3UswgRgNbg", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionAuthorize_EndPoint_Param"))();
executeServerActionResult.endPointOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.EndPoint, OS.Types.Text);
executeServerActionResult.parametersOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Parameters, OS.Types.Text);
executeServerActionResult.codeVerifierOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.CodeVerifier, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionAuthorize_EndPoint_Param", [{
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
Controller.prototype.postToken$ServerAction = function (applicationIn, doLoggingIn, correlationIdIn, codeIn, callBackURLIn, clientIdIn, clientSecretIn, log_ExtendedParameterListIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
DoLogging: OS.DataTypes.JSConversions.basicTypeToJS(doLoggingIn, OS.Types.Boolean),
CorrelationId: OS.DataTypes.JSConversions.basicTypeToJS(correlationIdIn, OS.Types.Text),
Code: OS.DataTypes.JSConversions.basicTypeToJS(codeIn, OS.Types.Text),
CallBackURL: OS.DataTypes.JSConversions.basicTypeToJS(callBackURLIn, OS.Types.Text),
ClientId: OS.DataTypes.JSConversions.basicTypeToJS(clientIdIn, OS.Types.Text),
ClientSecret: OS.DataTypes.JSConversions.basicTypeToJS(clientSecretIn, OS.Types.Text),
Log_ExtendedParameterList: log_ExtendedParameterListIn.toJS()
};
return controller.callServerAction("PostToken", "screenservices/Mobile_LoginNOS/OAuth_Flow_IOS/NOSID_Login_IOS_OpenId/ActionPostToken", "Ht6HLw92YVLEE5p_fGyVnw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionPostToken"))();
executeServerActionResult.responseOut = Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec.fromJS(outputs.Response);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionPostToken", [{
name: "Response",
attrName: "responseOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec
}]);
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
return controller.callServerAction("AccessTokenCode", "screenservices/Mobile_LoginNOS/OAuth_Flow_IOS/NOSID_Login_IOS_OpenId/ActionAccessTokenCode", "W4TH0NcwyvJznDkgZkvDrw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionAccessTokenCode"))();
executeServerActionResult.accessTokenInfoOut = Mobile_LoginNOSModel.AccessTokenCodeRec.fromJS(outputs.AccessTokenInfo);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId$ActionAccessTokenCode", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCodeRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCodeRec
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._sF_AuthenticationOnLoaded$Action = function (outputDataIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SF_AuthenticationOnLoaded");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.SF_AuthenticationOnLoaded$vars"))());
vars.value.outputDataInLocal = outputDataIn;
// IsVisible = False
model.variables.isVisibleVar = false;
controller.safeExecuteJSNode(Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_controller_SF_AuthenticationOnLoaded_HandleOpenURL_iOSJS, "HandleOpenURL_iOS", "SF_AuthenticationOnLoaded", {
OutputData: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.outputDataInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {
SF_AuthenticationOnExit: controller.clientActionProxies.sF_AuthenticationOnExit$Action
}, {});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.SF_AuthenticationOnLoaded$vars", [{
name: "OutputData",
attrName: "outputDataInLocal",
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
var openID_Authorize_EndPointVar = new OS.DataTypes.VariableHolder();
var authorize_EndPoint_ParamVar = new OS.DataTypes.VariableHolder();
var buildApplicationIdentifierVar = new OS.DataTypes.VariableHolder();
var sFAuthenticationValidationVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// CallBackURL = ""
model.variables.callBackURLVar = "";
// Execute Action: SFAuthenticationValidation
sFAuthenticationValidationVar.value = Mobile_LoginNOSController.default.sFAuthenticationValidation$Action(callContext);

return OS.Flow.executeSequence(function () {
if((((sFAuthenticationValidationVar.value.errorMessageOut) !== ("")))) {
// Trigger Event: Login_Error2
return controller.login_Error$Action(sFAuthenticationValidationVar.value.errorMessageOut, callContext);
} else {
// Execute Action: BuildApplicationIdentifier
buildApplicationIdentifierVar.value = Mobile_LoginNOSController.default.buildApplicationIdentifier$Action(model.variables.applicationNameIn, model.variables.applicationIdentifierIn, callContext);

return OS.Flow.executeSequence(function () {
if((buildApplicationIdentifierVar.value.errorOut)) {
// Trigger Event: Login_Error
return controller.login_Error$Action(buildApplicationIdentifierVar.value.error_MessageOut, callContext);
} else {
// Execute Action: setActivityLog_ClickEvents
model.flush();
return Mobile_LoginNOSController.default.setActivityLog_ClickEvents$Action(false, model.variables.applicationNameIn, callContext).then(function () {
// ApplicationIdentifier = BuildApplicationIdentifier.AppIdentifierRebuilded
model.variables.applicationIdentifierIn = buildApplicationIdentifierVar.value.appIdentifierRebuildedOut;
// Set CallBack URL
// CallBackURL = ApplicationIdentifier + ViewController_Parameters.URL_Callback
model.variables.callBackURLVar = (model.variables.applicationIdentifierIn + model.variables.viewController_ParametersIn.uRL_CallbackAttr);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.useOpenIdIn)) {
// Execute Action: OpenID_Authorize_EndPoint
model.flush();
return controller.openID_Authorize_EndPoint$ServerAction(model.variables.applicationNameIn, true, "", model.variables.clientIdIn, model.variables.callBackURLVar, new Mobile_LoginNOSModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
openID_Authorize_EndPointVar.value = value;
}).then(function () {
// Execute Action: Audit2
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, ((("NOSID_Login | URL End Point: " + openID_Authorize_EndPointVar.value.endPointOut) + " CodeVerifier: ") + openID_Authorize_EndPointVar.value.codeVerifierOut), callContext);
// URL_EndPoint = OpenID_Authorize_EndPoint.EndPoint
model.variables.uRL_EndPointVar = openID_Authorize_EndPointVar.value.endPointOut;
// Code_Verifier
// Code_Verifier = OpenID_Authorize_EndPoint.CodeVerifier
model.variables.code_VerifierVar = openID_Authorize_EndPointVar.value.codeVerifierOut;
});
} else {
// Execute Action: Authorize_EndPoint_Param
model.flush();
return controller.authorize_EndPoint_Param$ServerAction(model.variables.applicationNameIn, true, "", model.variables.clientIdIn, model.variables.callBackURLVar, new Mobile_LoginNOSModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
authorize_EndPoint_ParamVar.value = value;
}).then(function () {
// Execute Action: Audit
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, ((((("NOSID_Login_IOS | URL End Point: " + authorize_EndPoint_ParamVar.value.endPointOut) + " Parameters: ") + authorize_EndPoint_ParamVar.value.parametersOut) + "  CodeVerifier: ") + authorize_EndPoint_ParamVar.value.codeVerifierOut), callContext);
// URL_EndPoint = Authorize_EndPoint_Param.EndPoint + "?" + Authorize_EndPoint_Param.Parameters
model.variables.uRL_EndPointVar = ((authorize_EndPoint_ParamVar.value.endPointOut + "?") + authorize_EndPoint_ParamVar.value.parametersOut);
// Code_Verifier
// Code_Verifier = Authorize_EndPoint_Param.CodeVerifier
model.variables.code_VerifierVar = authorize_EndPoint_ParamVar.value.codeVerifierOut;
});
}

});
}).then(function () {
// IsVisible = True
model.variables.isVisibleVar = true;
// Trigger Event: Login_Start
return controller.login_Start$Action(callContext);
});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Login_IOS_OpenId.LoginOnNOSID", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._sF_AuthenticationError$Action = function (dataIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SF_AuthenticationError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.SF_AuthenticationError$vars"))());
vars.value.dataInLocal = dataIn;
return OS.Flow.executeAsyncFlow(function () {
// IsVisible = False
model.variables.isVisibleVar = false;
// Trigger Event: Login_Error
return controller.login_Error$Action(vars.value.dataInLocal, callContext);
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.SF_AuthenticationError$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
try {} catch (ex) {
(function () {
OS.Logger.trace("NOSID_Login_IOS_OpenId.OnParametersChanged", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return ;

}

throw ex;
})();
}

};
Controller.prototype._sF_AuthenticationOnExit$Action = function (codeIn, scopeIn, stateIn, manuallyCloseIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SF_AuthenticationOnExit");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.SF_AuthenticationOnExit$vars"))());
vars.value.codeInLocal = codeIn;
vars.value.scopeInLocal = scopeIn;
vars.value.stateInLocal = stateIn;
vars.value.manuallyCloseInLocal = manuallyCloseIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var postTokenVar = new OS.DataTypes.VariableHolder();
var accessTokenCodeVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((vars.value.manuallyCloseInLocal)) {
// Trigger Event: Login_Closed2
return controller.login_Closed$Action(new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), vars.value.manuallyCloseInLocal, callContext);
} else {
return OS.Flow.executeSequence(function () {
if((model.variables.useOpenIdIn)) {
// Execute Action: PostToken
model.flush();
return controller.postToken$ServerAction(model.variables.applicationNameIn, true, "", vars.value.codeInLocal, model.variables.callBackURLVar, model.variables.clientIdIn, model.variables.clientSecretIn, new Mobile_LoginNOSModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
postTokenVar.value = value;
}).then(function () {
// Execute Action: Audit3
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, (((((((((("PostToken --> Code: [" + vars.value.codeInLocal) + "], Scope: [") + vars.value.scopeInLocal) + "], State: [") + vars.value.stateInLocal) + "], URLCallBack: [") + model.variables.callBackURLVar) + "], ClientId: [") + model.variables.clientIdIn) + "] "), callContext);
}).then(function () {
// AccessTokenCode Error?
return OS.Flow.executeSequence(function () {
if((((postTokenVar.value.responseOut.faultstringAttr) !== ("")))) {
// ErrorMessage = "Erro na ação 'PostToken', ErrorCode: [" + PostToken.Response.Errorcode + "], FaultString: [" + PostToken.Response.Faultstring + "]"
vars.value.errorMessageVar = (((("Erro na ação \'PostToken\', ErrorCode: [" + postTokenVar.value.responseOut.errorcodeAttr) + "], FaultString: [") + postTokenVar.value.responseOut.faultstringAttr) + "]");
// Execute Action: Audit4
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, vars.value.errorMessageVar, callContext);
// Trigger Event: Login_Error2
return controller.login_Error$Action(vars.value.errorMessageVar, callContext);
} else {
// IsVisible = False
model.variables.isVisibleVar = false;
// Trigger Event: Login_Closed3
return controller.login_Closed$Action(postTokenVar.value.responseOut, vars.value.manuallyCloseInLocal, callContext);
}

});
});
} else {
// Execute Action: AccessTokenCode
model.flush();
return controller.accessTokenCode$ServerAction(model.variables.applicationNameIn, true, "", vars.value.codeInLocal, model.variables.callBackURLVar, model.variables.code_VerifierVar, model.variables.clientIdIn, new Mobile_LoginNOSModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
accessTokenCodeVar.value = value;
}).then(function () {
// Execute Action: Audit2
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, (((((((((("AccessTokenCode --> Code: [" + vars.value.codeInLocal) + "], Scope: [") + vars.value.scopeInLocal) + "], State: [") + vars.value.stateInLocal) + "], URLCallBack: [") + model.variables.callBackURLVar) + "], ClientId: [") + model.variables.clientIdIn) + "]"), callContext);
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
// IsVisible = False
model.variables.isVisibleVar = false;
// Value.Fault = AccessTokenCode.AccessTokenInfo.Fault
vars.value.valueVar.faultAttr = OS.DataTypes.JSConversions.typeConvertRecord(accessTokenCodeVar.value.accessTokenInfoOut.faultAttr, new Mobile_LoginNOSModel.Fault2Rec(), function (source, target) {
target.faultstringAttr = source.faultstringAttr;
target.detailAttr.errorcodeAttr = source.detailAttr.errorcodeAttr;
return target;
});
// Trigger Event: Login_Closed
return controller.login_Closed$Action(OS.DataTypes.JSConversions.typeConvertRecord(accessTokenCodeVar.value.accessTokenInfoOut, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
target.access_tokenAttr = source.access_tokenAttr;
target.token_typeAttr = source.token_typeAttr;
target.scopeAttr = source.scopeAttr;
target.expires_inAttr = source.expires_inAttr;
target.issued_atAttr = source.issued_atAttr;
target.statusAttr = source.statusAttr;
target.refresh_tokenAttr = source.refresh_tokenAttr;
target.refresh_token_expires_inAttr = source.refresh_token_expires_inAttr;
target.refresh_token_issued_atAttr = source.refresh_token_issued_atAttr;
target.refresh_token_statusAttr = source.refresh_token_statusAttr;
target.refresh_countAttr = source.refresh_countAttr;
target.faultstringAttr = source.faultAttr.faultstringAttr;
return target;
}), vars.value.manuallyCloseInLocal, callContext);
}

});
});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Login_IOS_OpenId.SF_AuthenticationOnExit", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.SF_AuthenticationOnExit$vars", [{
name: "Code",
attrName: "codeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Scope",
attrName: "scopeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "State",
attrName: "stateInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ManuallyClose",
attrName: "manuallyCloseInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Value",
attrName: "valueVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.ValueRec();
},
complexType: Mobile_LoginNOSModel.ValueRec
}]);

Controller.prototype.sF_AuthenticationOnLoaded$Action = function (outputDataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sF_AuthenticationOnLoaded$Action, callContext, outputDataIn);

};
Controller.prototype.loginOnNOSID$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loginOnNOSID$Action, callContext);

};
Controller.prototype.sF_AuthenticationError$Action = function (dataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sF_AuthenticationError$Action, callContext, dataIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.sF_AuthenticationOnExit$Action = function (codeIn, scopeIn, stateIn, manuallyCloseIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sF_AuthenticationOnExit$Action, callContext, codeIn, scopeIn, stateIn, manuallyCloseIn);

};
Controller.prototype.login_Closed$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Start$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Error$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

};
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
define("Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$controller.SF_AuthenticationOnLoaded.HandleOpenURL_iOSJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
setTimeout(function() {
    
    var data = decodeURIComponent($parameters.OutputData.substr($parameters.OutputData.indexOf('code')));
    var parameters = data.split('&');

	var code = parameters[0].replace("code=", "");
	var scope = parameters[1].replace("scope=", "");
    var state = parameters[2].replace("state=", "");
    
    var manuallyclose = false;
    
    if(code === ""){
        manuallyclose = true;
    }
    
    $actions.SF_AuthenticationOnExit(code, scope, state, manuallyclose);
    
  }, 0);

};
});

