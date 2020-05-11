define("WTF_MOB.LoginFlow.NOSID_Register.mvc$model", ["OutSystems", "WTF_MOB.model", "Mobile_LoginNOS.model", "WTF_MOB.controller", "WTF_MBP.controller", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Register_IOS.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Register.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Register_NOSCordovaPlugin.mvc$model", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Registration", "WTF_MBP.controller$PreLoginParameters", "Mobile_LoginNOS.model$AccessTokenCodeRec", "WTF_MOB.controller$OpenExternalURL", "WTF_MBP.controller$setActivityLog_ClickLoginPage"], function (OutSystems, WTF_MOBModel, Mobile_LoginNOSModel, WTF_MOBController, WTF_MBPController, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Register_IOS_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_NOSCordovaPlugin_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("OperatingSystem", "operatingSystemVar", "OperatingSystem", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationName", "applicationNameVar", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationIdentifier", "applicationIdentifierVar", "ApplicationIdentifier", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ClientId", "clientIdVar", "ClientId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("WebViewParameters", "webViewParametersVar", "WebViewParameters", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.WebView_ParametersRec());
}, Mobile_LoginNOSModel.WebView_ParametersRec), 
this.attr("Registration_EndPoint", "registration_EndPointVar", "Registration_EndPoint", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsDestroyed", "isDestroyedVar", "IsDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ScreenName", "screenNameIn", "ScreenName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_screenNameInDataFetchStatus", "_screenNameInDataFetchStatus", "_screenNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("LoginMode", "loginModeIn", "LoginMode", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_loginModeInDataFetchStatus", "_loginModeInDataFetchStatus", "_loginModeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UseOpenId", "useOpenIdIn", "UseOpenId", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_useOpenIdInDataFetchStatus", "_useOpenIdInDataFetchStatus", "_useOpenIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UseMSISDN", "useMSISDNIn", "UseMSISDN", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_useMSISDNInDataFetchStatus", "_useMSISDNInDataFetchStatus", "_useMSISDNInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UseMSISDNWithoutRegister", "useMSISDNWithoutRegisterIn", "UseMSISDNWithoutRegister", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_useMSISDNWithoutRegisterInDataFetchStatus", "_useMSISDNWithoutRegisterInDataFetchStatus", "_useMSISDNWithoutRegisterInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (((Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Register_IOS_mvcModel.hasValidationWidgets || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets) || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_NOSCordovaPlugin_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ScreenName" in inputs) {
this.variables.screenNameIn = inputs.ScreenName;
if("_screenNameInDataFetchStatus" in inputs) {
this.variables._screenNameInDataFetchStatus = inputs._screenNameInDataFetchStatus;
}

}

if("LoginMode" in inputs) {
this.variables.loginModeIn = inputs.LoginMode;
if("_loginModeInDataFetchStatus" in inputs) {
this.variables._loginModeInDataFetchStatus = inputs._loginModeInDataFetchStatus;
}

}

if("UseOpenId" in inputs) {
this.variables.useOpenIdIn = inputs.UseOpenId;
if("_useOpenIdInDataFetchStatus" in inputs) {
this.variables._useOpenIdInDataFetchStatus = inputs._useOpenIdInDataFetchStatus;
}

}

if("UseMSISDN" in inputs) {
this.variables.useMSISDNIn = inputs.UseMSISDN;
if("_useMSISDNInDataFetchStatus" in inputs) {
this.variables._useMSISDNInDataFetchStatus = inputs._useMSISDNInDataFetchStatus;
}

}

if("UseMSISDNWithoutRegister" in inputs) {
this.variables.useMSISDNWithoutRegisterIn = inputs.UseMSISDNWithoutRegister;
if("_useMSISDNWithoutRegisterInDataFetchStatus" in inputs) {
this.variables._useMSISDNWithoutRegisterInDataFetchStatus = inputs._useMSISDNWithoutRegisterInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.NOSID_Register.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.NOSID_Register.mvc$model", "WTF_MOB.LoginFlow.NOSID_Register.mvc$controller", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Register_IOS.mvc$view", "OutSystemsReactWidgets", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Register.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Register_NOSCordovaPlugin.mvc$view", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Registration", "WTF_MBP.controller$PreLoginParameters", "Mobile_LoginNOS.model$AccessTokenCodeRec", "WTF_MOB.controller$OpenExternalURL", "WTF_MBP.controller$setActivityLog_ClickLoginPage"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, React, OSView, WTF_MOB_LoginFlow_NOSID_Register_mvc_model, WTF_MOB_LoginFlow_NOSID_Register_mvc_controller, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Register_IOS_mvc_view, OSWidgets, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_NOSCordovaPlugin_mvc_view) {
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
        View.displayName = "LoginFlow.NOSID_Register";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.LoginFlow.NOSID_Register.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Register_IOS_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_NOSCordovaPlugin_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Register_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Register_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if((model.variables.loginModeIn === -1), false, this, function () {
return [];
}, function () {
return [$if((model.variables.loginModeIn === 0), false, this, function () {
return [$if((model.variables.operatingSystemVar === WTF_MOBModel.staticEntities.mobile_OperatingSystem.iOS), false, this, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Register_IOS_mvc_view, {
inputs: {
ApplicationName: model.variables.applicationNameVar,
ViewController_Parameters: model.variables.webViewParametersVar,
CSS_Content: model.getCachedValue(idService.getId("0Tv3XXgSZkW2TndRTAfuZw.CSS_Content"), function () {
return ((model.variables.useMSISDNWithoutRegisterIn) ? ("btn btn-primary -big -primary -negative a-btn -fullWidth -big") : (((model.variables.useMSISDNIn) ? ("a-link c-white -bold") : ("btn a-btn -fullWidth btn-secondary -secondary"))));
}, function () {
return model.variables.useMSISDNWithoutRegisterIn;
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNWithoutRegisterInDataFetchStatus, model.variables._useMSISDNInDataFetchStatus),
ClientId: model.variables.clientIdVar,
ApplicationIdentifier: model.variables.applicationIdentifierVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
register_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Start$Action(controller.callContext(eventHandlerContext));
});
;
},
register_Close$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Closed$Action(accessTokenInfoIn, manuallyCloseIn, controller.callContext(eventHandlerContext));
});
;
},
register_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
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
_dependencies: []
})];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_mvc_view, {
inputs: {
ClientId: model.variables.clientIdVar,
CSS_Content: model.getCachedValue(idService.getId("UTbgg08tqEyL1Pqo3m6Zcw.CSS_Content"), function () {
return ((model.variables.useMSISDNWithoutRegisterIn) ? ("btn btn-primary -big -primary -negative a-btn -fullWidth -big") : (((model.variables.useMSISDNIn) ? ("a-link c-white -bold") : ("btn a-btn -fullWidth btn-secondary -secondary"))));
}, function () {
return model.variables.useMSISDNWithoutRegisterIn;
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNWithoutRegisterInDataFetchStatus, model.variables._useMSISDNInDataFetchStatus),
ApplicationName: model.variables.applicationNameVar,
ApplicationIdentifier: model.variables.applicationIdentifierVar,
ViewController_Parameters: model.variables.webViewParametersVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
register_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
register_Close$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Closed$Action(accessTokenInfoIn, manuallyCloseIn, controller.callContext(eventHandlerContext));
});
;
},
register_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Start$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [$if((model.variables.loginModeIn === 2), false, this, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openRegisterInBrowser$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("btn_Register.Style"), function () {
return ((model.variables.useMSISDNWithoutRegisterIn) ? ("btn btn-primary -big -primary -negative a-btn -fullWidth -big") : (((model.variables.useMSISDNIn) ? ("btn a-link c-white -bold") : ("btn a-btn -fullWidth btn-secondary -secondary"))));
}, function () {
return model.variables.useMSISDNWithoutRegisterIn;
}, function () {
return model.variables.useMSISDNIn;
}),
visible: true,
_idProps: {
service: idService,
name: "btn_Register"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNWithoutRegisterInDataFetchStatus, model.variables._useMSISDNInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "Registar-me",
_idProps: {
service: idService,
name: "Registar"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables._useMSISDNInDataFetchStatus), asPrimitiveValue(model.variables._useMSISDNWithoutRegisterInDataFetchStatus), asPrimitiveValue(model.variables.useMSISDNIn), asPrimitiveValue(model.variables.useMSISDNWithoutRegisterIn)]
})];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Register_NOSCordovaPlugin_mvc_view, {
inputs: {
HeaderColor: WTF_MOBModel.staticEntities.hEX_COLORS.blueDark,
ClientId: model.variables.clientIdVar,
ApplicationName: model.variables.applicationNameVar,
CSS_Content: model.getCachedValue(idService.getId("JJhw4M8d0EyWI8CE7tdlPg.CSS_Content"), function () {
return ((model.variables.useMSISDNWithoutRegisterIn) ? ("btn btn-primary -big -primary -negative a-btn -fullWidth -big") : (((model.variables.useMSISDNIn) ? ("a-link c-white -bold") : ("btn a-btn -fullWidth btn-secondary -secondary"))));
}, function () {
return model.variables.useMSISDNWithoutRegisterIn;
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNWithoutRegisterInDataFetchStatus, model.variables._useMSISDNInDataFetchStatus),
IsDebugMode: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
register_Closed$Action: function (accessTokenInfoIn, manuallyCloseIn, browserIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Closed$Action(accessTokenInfoIn, manuallyCloseIn, controller.callContext(eventHandlerContext));
});
;
},
register_WebViewOpened$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Start$Action(controller.callContext(eventHandlerContext));
});
;
},
register_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Register_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "6",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.LoginFlow.NOSID_Register.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "WTF_MOB.languageResources", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Registration", "WTF_MBP.controller$PreLoginParameters", "Mobile_LoginNOS.model$AccessTokenCodeRec", "WTF_MOB.controller$OpenExternalURL", "WTF_MBP.controller$setActivityLog_ClickLoginPage"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, WTF_MOBLanguageResources) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// IsDestroyed = True
model.variables.isDestroyedVar = true;
};
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var get_OperatingSystemVar = new OS.DataTypes.VariableHolder();
var registrationVar = new OS.DataTypes.VariableHolder();
var preLoginParametersVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Get_OperatingSystem
get_OperatingSystemVar.value = WTF_MBPController.default.get_OperatingSystem$Action(callContext);

// Execute Action: PreLoginParameters
model.flush();
return WTF_MBPController.default.preLoginParameters$Action(model.variables.screenNameIn, callContext).then(function (value) {
preLoginParametersVar.value = value;
}).then(function () {
// Set vars
// OperatingSystem = Get_OperatingSystem.OperatingSystem
model.variables.operatingSystemVar = get_OperatingSystemVar.value.operatingSystemOut;
// ApplicationName = PreLoginParameters.ApplicationName
model.variables.applicationNameVar = preLoginParametersVar.value.applicationNameOut;
// ApplicationIdentifier = PreLoginParameters.ApplicationIdentifier
model.variables.applicationIdentifierVar = preLoginParametersVar.value.applicationIdentifierOut;
// ClientId = PreLoginParameters.ClientId
model.variables.clientIdVar = preLoginParametersVar.value.clientIdOut;
// WebViewParameters = PreLoginParameters.WebViewParameters
model.variables.webViewParametersVar = preLoginParametersVar.value.webViewParametersOut;
// Execute Action: Registration
model.flush();
return WTF_MOBController.default.registration$Action(model.variables.useOpenIdIn, callContext).then(function (value) {
registrationVar.value = value;
});
}).then(function () {
// Registration_EndPoint = Registration.URL
model.variables.registration_EndPointVar = registrationVar.value.uRLOut;
});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Register.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._nOSID_Register_Start$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Register_Start");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: Register_Start
return controller.register_Start$Action("Registar", callContext);
}

});
});
};
Controller.prototype._nOSID_Register_Closed$Action = function (accessTokenInfoIn, manuallyCloseIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Register_Closed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.NOSID_Register.NOSID_Register_Closed$vars"))());
vars.value.accessTokenInfoInLocal = accessTokenInfoIn.clone();
vars.value.manuallyCloseInLocal = manuallyCloseIn;
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: Register_Close
return controller.register_Close$Action(vars.value.accessTokenInfoInLocal, vars.value.manuallyCloseInLocal, callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.NOSID_Register.NOSID_Register_Closed$vars", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCodeRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCodeRec
}, {
name: "ManuallyClose",
attrName: "manuallyCloseInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._nOSID_Register_Error$Action = function (error_MessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Register_Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.NOSID_Register.NOSID_Register_Error$vars"))());
vars.value.error_MessageInLocal = error_MessageIn;
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: Register_Error
return controller.register_Error$Action(vars.value.error_MessageInLocal, callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.NOSID_Register.NOSID_Register_Error$vars", [{
name: "Error_Message",
attrName: "error_MessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._openRegisterInBrowser$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenRegisterInBrowser");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: setActivityLog_ClickLoginPage2
model.flush();
return WTF_MBPController.default.setActivityLog_ClickLoginPage$Action(true, callContext).then(function () {
// Execute Action: OpenExternalURL
model.flush();
return WTF_MOBController.default.openExternalURL$Action(model.variables.registration_EndPointVar, true, "", WTF_MOBModel.staticEntities.hEX_COLORS.blueDark, callContext);
});
});
};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.nOSID_Register_Start$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Register_Start$Action, callContext);

};
Controller.prototype.nOSID_Register_Closed$Action = function (accessTokenInfoIn, manuallyCloseIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Register_Closed$Action, callContext, accessTokenInfoIn, manuallyCloseIn);

};
Controller.prototype.nOSID_Register_Error$Action = function (error_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Register_Error$Action, callContext, error_MessageIn);

};
Controller.prototype.openRegisterInBrowser$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openRegisterInBrowser$Action, callContext);

};
Controller.prototype.register_Start$Action = function () {
return Promise.resolve();
};
Controller.prototype.register_Close$Action = function () {
return Promise.resolve();
};
Controller.prototype.register_Error$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
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

