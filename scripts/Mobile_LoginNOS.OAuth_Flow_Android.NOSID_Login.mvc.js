define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$model", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "ViewControllerPlugin.Main_ViewController.ViewController.mvc$model", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "Mobile_LoginNOS.controller$ViewControllerValidation", "Mobile_LoginNOS.model$AccessTokenCodeRec", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, ViewControllerPlugin_Main_ViewController_ViewController_mvcModel) {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets || ViewControllerPlugin_Main_ViewController_ViewController_mvcModel.hasValidationWidgets);
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

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$view", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "react", "OutSystemsReactView", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "OutSystemsReactWidgets", "ViewControllerPlugin.Main_ViewController.ViewController.mvc$view", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "Mobile_LoginNOS.controller$ViewControllerValidation", "Mobile_LoginNOS.model$AccessTokenCodeRec", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, React, OSView, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_model, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_controller, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, OSWidgets, ViewControllerPlugin_Main_ViewController_ViewController_mvc_view) {
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
        View.displayName = "OAuth_Flow_Android.NOSID_Login";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, ViewControllerPlugin_Main_ViewController_ViewController_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_controller;
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
}), React.createElement(ViewControllerPlugin_Main_ViewController_ViewController_mvc_view, {
inputs: {
ControlTintColor: model.variables.viewController_ParametersIn.controlTintColorAttr,
_controlTintColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
Url: model.variables.uRL_EndPointVar,
Animated: model.variables.viewController_ParametersIn.animatedAttr,
_animatedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
TintColor: model.variables.viewController_ParametersIn.tintColorAttr,
_tintColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
BarColor: model.variables.viewController_ParametersIn.barColorAttr,
_barColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
ReaderMode: model.variables.viewController_ParametersIn.readerModeAttr,
_readerModeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
IsVisible: model.variables.isVisibleVar,
Hidden: model.variables.viewController_ParametersIn.hiddenAttr,
_hiddenInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onOpened$Action: function () {
var eventHandlerContext = callContext.clone();
controller.viewControllerOnOpened$Action(controller.callContext(eventHandlerContext));

;
},
onLoaded$Action: function () {
var eventHandlerContext = callContext.clone();
controller.viewControllerOnLoaded$Action(controller.callContext(eventHandlerContext));

;
},
onClosed$Action: function () {
var eventHandlerContext = callContext.clone();
controller.viewControllerOnClosed$Action(controller.callContext(eventHandlerContext));

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
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$controller", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "Mobile_LoginNOS.languageResources", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$controller.ViewControllerOnClosed.handleOpenURLJS", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.model$STR_LogNameValueRecordList", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.controller$setActivityLog_ClickEvents", "Mobile_LoginNOS.controller$ViewControllerValidation", "Mobile_LoginNOS.model$AccessTokenCodeRec", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, Mobile_LoginNOSLanguageResources, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_controller_ViewControllerOnClosed_handleOpenURLJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
viewControllerOnExit$Action: function (codeIn, scopeIn, stateIn, manuallyCloseIn) {
codeIn = (codeIn === undefined) ? "" : codeIn;
scopeIn = (scopeIn === undefined) ? "" : scopeIn;
stateIn = (stateIn === undefined) ? "" : stateIn;
manuallyCloseIn = (manuallyCloseIn === undefined) ? false : manuallyCloseIn;
return controller.executeActionInsideJSNode(controller._viewControllerOnExit$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(codeIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(scopeIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(stateIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(manuallyCloseIn, OS.Types.Boolean)), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions
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
return controller.callServerAction("Authorize_EndPoint_Param", "screenservices/Mobile_LoginNOS/OAuth_Flow_Android/NOSID_Login/ActionAuthorize_EndPoint_Param", "69w3qWL+p0fx3UswgRgNbg", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login$ActionAuthorize_EndPoint_Param"))();
executeServerActionResult.endPointOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.EndPoint, OS.Types.Text);
executeServerActionResult.parametersOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Parameters, OS.Types.Text);
executeServerActionResult.codeVerifierOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.CodeVerifier, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login$ActionAuthorize_EndPoint_Param", [{
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
return controller.callServerAction("AccessTokenCode", "screenservices/Mobile_LoginNOS/OAuth_Flow_Android/NOSID_Login/ActionAccessTokenCode", "W4TH0NcwyvJznDkgZkvDrw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login$ActionAccessTokenCode"))();
executeServerActionResult.accessTokenInfoOut = Mobile_LoginNOSModel.AccessTokenCodeRec.fromJS(outputs.AccessTokenInfo);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login$ActionAccessTokenCode", [{
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
Controller.prototype._viewControllerOnClosed$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ViewControllerOnClosed");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
try {controller.safeExecuteJSNode(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_controller_ViewControllerOnClosed_handleOpenURLJS, "handleOpenURL", "ViewControllerOnClosed", null, function ($parameters) {
}, {
ViewControllerOnExit: controller.clientActionProxies.viewControllerOnExit$Action
}, {});
} catch (ex) {
(function () {
OS.Logger.trace("NOSID_Login.ViewControllerOnClosed", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
try {} catch (ex) {
(function () {
OS.Logger.trace("NOSID_Login.OnParametersChanged", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._loginOnNOSID$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LoginOnNOSID");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var authorize_EndPoint_ParamVar = new OS.DataTypes.VariableHolder();
var buildApplicationIdentifierVar = new OS.DataTypes.VariableHolder();
var viewControllerValidationVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// CallBackURL = ""
model.variables.callBackURLVar = "";
// Execute Action: ViewControllerValidation
viewControllerValidationVar.value = Mobile_LoginNOSController.default.viewControllerValidation$Action(callContext);

return OS.Flow.executeSequence(function () {
if((((viewControllerValidationVar.value.errorMessageOut) !== ("")))) {
// Trigger Event: Login_Error2
return controller.login_Error$Action(viewControllerValidationVar.value.errorMessageOut, callContext);
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
// Execute Action: Authorize_EndPoint_Param
model.flush();
return controller.authorize_EndPoint_Param$ServerAction(model.variables.applicationNameIn, true, "", model.variables.clientIdIn, model.variables.callBackURLVar, new Mobile_LoginNOSModel.STR_LogNameValueRecordList(), callContext).then(function (value) {
authorize_EndPoint_ParamVar.value = value;
});
}).then(function () {
// Execute Action: Audit
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, ((((("NOSID_Login | URL End Point: " + authorize_EndPoint_ParamVar.value.endPointOut) + " Parameters: ") + authorize_EndPoint_ParamVar.value.parametersOut) + "  CodeVerifier: ") + authorize_EndPoint_ParamVar.value.codeVerifierOut), callContext);
// URL_EndPoint = Authorize_EndPoint_Param.EndPoint + "?" + Authorize_EndPoint_Param.Parameters
model.variables.uRL_EndPointVar = ((authorize_EndPoint_ParamVar.value.endPointOut + "?") + authorize_EndPoint_ParamVar.value.parametersOut);
// Code_Verifier
// Code_Verifier = Authorize_EndPoint_Param.CodeVerifier
model.variables.code_VerifierVar = authorize_EndPoint_ParamVar.value.codeVerifierOut;
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
OS.Logger.trace("NOSID_Login.LoginOnNOSID", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._viewControllerOnLoaded$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ViewControllerOnLoaded");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
try {} catch (ex) {
(function () {
OS.Logger.trace("NOSID_Login.ViewControllerOnLoaded", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._viewControllerOnOpened$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ViewControllerOnOpened");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
try {} catch (ex) {
(function () {
OS.Logger.trace("NOSID_Login.ViewControllerOnOpened", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._viewControllerOnExit$Action = function (codeIn, scopeIn, stateIn, manuallyCloseIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ViewControllerOnExit");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.ViewControllerOnExit$vars"))());
vars.value.codeInLocal = codeIn;
vars.value.scopeInLocal = scopeIn;
vars.value.stateInLocal = stateIn;
vars.value.manuallyCloseInLocal = manuallyCloseIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var accessTokenCodeVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Audit3
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, (((((((((("AccessTokenCode --> Code: [" + vars.value.codeInLocal) + "], Scope: [") + vars.value.scopeInLocal) + "], State: [") + vars.value.stateInLocal) + "], URLCallBack: [") + model.variables.viewController_ParametersIn.uRL_CallbackAttr) + "], ClientId: [") + model.variables.clientIdIn) + "]"), callContext);
return OS.Flow.executeSequence(function () {
if((vars.value.manuallyCloseInLocal)) {
// Trigger Event: Login_Closed2
return controller.login_Closed$Action(new Mobile_LoginNOSModel.AccessTokenCodeRec(), vars.value.manuallyCloseInLocal, callContext);
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
// Trigger Event: Login_Closed
return controller.login_Closed$Action(accessTokenCodeVar.value.accessTokenInfoOut, vars.value.manuallyCloseInLocal, callContext);
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Login.ViewControllerOnExit", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.ViewControllerOnExit$vars", [{
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
}]);

Controller.prototype.viewControllerOnClosed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._viewControllerOnClosed$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.loginOnNOSID$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loginOnNOSID$Action, callContext);

};
Controller.prototype.viewControllerOnLoaded$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._viewControllerOnLoaded$Action, callContext);

};
Controller.prototype.viewControllerOnOpened$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._viewControllerOnOpened$Action, callContext);

};
Controller.prototype.viewControllerOnExit$Action = function (codeIn, scopeIn, stateIn, manuallyCloseIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._viewControllerOnExit$Action, callContext, codeIn, scopeIn, stateIn, manuallyCloseIn);

};
Controller.prototype.login_Closed$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Error$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Start$Action = function () {
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
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$controller.ViewControllerOnClosed.handleOpenURLJS", [], function () {
return function ($actions, $roles, $public) {
window.handleOpenURL = function (url) {
	setTimeout(function() {
	
	var code = "";
	var scope = "";
	var state = "";
		
   
	var manuallyclose = false;
	

	if(url.indexOf('code') != -1){
	
		var data = decodeURIComponent(url.substr(url.indexOf('code')));
		
		var parameters = data.split('&');
	
		code = parameters[0].replace("code=", "");
		scope = parameters[1].replace("scope=", "");
		state = parameters[2].replace("state=", "");
		
		manuallyclose = false;
		
	
		
	}else{
		manuallyclose = true;
	   
	}
 
	$actions.ViewControllerOnExit(code, scope, state, manuallyclose);
	
  }, 0);
};
};
});

