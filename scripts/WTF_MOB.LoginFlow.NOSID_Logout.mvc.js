define("WTF_MOB.LoginFlow.NOSID_Logout.mvc$model", ["OutSystems", "WTF_MOB.model", "Mobile_LoginNOS.model", "WTF_MOB.controller", "WTF_MBP.controller", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Logout_IOS_OpenId.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Logout.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Logout_NOSCordovaPlugin_OpenId.mvc$model", "MobileUIWidgets.WidgetsContent.PopUp_v4.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$GetLoginMode", "WTF_MBP.controller$LogoutParameters", "WTF_MBP.controller$setActivityLog_Visit", "WTF_MBP.controller$ClearCache"], function (OutSystems, WTF_MOBModel, Mobile_LoginNOSModel, WTF_MOBController, WTF_MBPController, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Logout_IOS_OpenId_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_NOSCordovaPlugin_OpenId_mvcModel, MobileUIWidgets_WidgetsContent_PopUp_v4_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel) {
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
this.attr("IdToken", "idTokenVar", "IdToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("LoginMode", "loginModeVar", "LoginMode", true, OS.Types.Integer, function () {
return -1;
}), 
this.attr("IsDestroyed", "isDestroyedVar", "IsDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsPopUpOpen", "isPopUpOpenVar", "IsPopUpOpen", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsOpenId", "isOpenIdVar", "IsOpenId", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("StatusBarHexCode", "statusBarHexCodeIn", "StatusBarHexCode", true, OS.Types.Text, function () {
return WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF;
}), 
this.attr("_statusBarHexCodeInDataFetchStatus", "_statusBarHexCodeInDataFetchStatus", "_statusBarHexCodeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("StyleClass", "styleClassIn", "StyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Logout_IOS_OpenId_mvcModel.hasValidationWidgets || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_mvcModel.hasValidationWidgets) || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_NOSCordovaPlugin_OpenId_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_PopUp_v4_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("StatusBarHexCode" in inputs) {
this.variables.statusBarHexCodeIn = inputs.StatusBarHexCode;
if("_statusBarHexCodeInDataFetchStatus" in inputs) {
this.variables._statusBarHexCodeInDataFetchStatus = inputs._statusBarHexCodeInDataFetchStatus;
}

}

if("StyleClass" in inputs) {
this.variables.styleClassIn = inputs.StyleClass;
if("_styleClassInDataFetchStatus" in inputs) {
this.variables._styleClassInDataFetchStatus = inputs._styleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.NOSID_Logout.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.NOSID_Logout.mvc$model", "WTF_MOB.LoginFlow.NOSID_Logout.mvc$controller", "OutSystemsReactWidgets", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Logout_IOS_OpenId.mvc$view", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Logout.mvc$view", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Logout_NOSCordovaPlugin_OpenId.mvc$view", "MobileUIWidgets.WidgetsContent.PopUp_v4.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$GetLoginMode", "WTF_MBP.controller$LogoutParameters", "WTF_MBP.controller$setActivityLog_Visit", "WTF_MBP.controller$ClearCache"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, React, OSView, WTF_MOB_LoginFlow_NOSID_Logout_mvc_model, WTF_MOB_LoginFlow_NOSID_Logout_mvc_controller, OSWidgets, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Logout_IOS_OpenId_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_NOSCordovaPlugin_OpenId_mvc_view, MobileUIWidgets_WidgetsContent_PopUp_v4_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view) {
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
        View.displayName = "LoginFlow.NOSID_Logout";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Logout_IOS_OpenId_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_NOSCordovaPlugin_OpenId_mvc_view, MobileUIWidgets_WidgetsContent_PopUp_v4_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Logout_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Logout_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.loginModeVar === 0), false, this, function () {
return [$if((model.variables.operatingSystemVar === WTF_MOBModel.staticEntities.mobile_OperatingSystem.iOS), false, this, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Logout_IOS_OpenId_mvc_view, {
inputs: {
ClientId: model.variables.clientIdVar,
ApplicationName: model.variables.applicationNameVar,
CSS_Content: model.variables.styleClassIn,
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._styleClassInDataFetchStatus),
Access_Token: model.variables.idTokenVar,
ViewController_Parameters: model.variables.webViewParametersVar,
ApplicationIdentifier: model.variables.applicationIdentifierVar,
UseOpenId: model.variables.isOpenIdVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
logout_Close$Action: function (cookiesIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Close$Action(controller.callContext(eventHandlerContext));
});
;
},
logout_Start$Action: function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Start$Action(controller.callContext(eventHandlerContext));

;
},
logout_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_mvc_view, {
inputs: {
ApplicationName: model.variables.applicationNameVar,
CSS_Content: model.variables.styleClassIn,
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._styleClassInDataFetchStatus),
Access_Token: model.variables.idTokenVar,
ClientId: model.variables.clientIdVar,
ApplicationIdentifier: model.variables.applicationIdentifierVar,
ViewController_Parameters: model.variables.webViewParametersVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
logout_Start$Action: function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Start$Action(controller.callContext(eventHandlerContext));

;
},
logout_Close$Action: function (cookiesIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Close$Action(controller.callContext(eventHandlerContext));
});
;
},
logout_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [$if((model.variables.loginModeVar === 2), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.togglePopUp$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.variables.styleClassIn,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._styleClassInDataFetchStatus)
}, "Terminar sessão")];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Logout_NOSCordovaPlugin_OpenId_mvc_view, {
inputs: {
ApplicationName: model.variables.applicationNameVar,
IsDebugMode: false,
Access_Token: model.variables.idTokenVar,
ClientId: model.variables.clientIdVar,
HeaderColor: model.variables.statusBarHexCodeIn,
_headerColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._statusBarHexCodeInDataFetchStatus),
CSS_Content: model.variables.styleClassIn,
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._styleClassInDataFetchStatus),
UseOpenId: model.variables.isOpenIdVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
logout_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
logout_Start$Action: function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Start$Action(controller.callContext(eventHandlerContext));

;
},
logout_Closed$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Close$Action(controller.callContext(eventHandlerContext));
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})), React.createElement(MobileUIWidgets_WidgetsContent_PopUp_v4_mvc_view, {
inputs: {
InitialStatusBarColor: model.variables.statusBarHexCodeIn,
_initialStatusBarColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._statusBarHexCodeInDataFetchStatus),
HeaderText: "Terminar sessão",
ShowPopUp: model.variables.isPopUpOpenVar,
HasHeader: true,
HasStatusBarPlugin: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closePopUp$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.togglePopUp$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
popUpHeader: PlaceholderContent.Empty,
popUpContent: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-black",
value: "Tens a certeza que desejas terminar a sessão nesta app?",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24 gridRow",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "10",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.togglePopUp$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn w-100 -secondary -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Cancelar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "14",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.logOutOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn -primary btn-primary w-100",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Terminar sessão", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))))];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.LoginFlow.NOSID_Logout.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "WTF_MOB.languageResources", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$GetLoginMode", "WTF_MBP.controller$LogoutParameters", "WTF_MBP.controller$setActivityLog_Visit", "WTF_MBP.controller$ClearCache"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, WTF_MOBLanguageResources) {
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
Controller.prototype._nOSID_Logout_Error$Action = function (error_MessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Logout_Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.NOSID_Logout.NOSID_Logout_Error$vars"))());
vars.value.error_MessageInLocal = error_MessageIn;
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: LogoutError
return controller.logoutError$Action(vars.value.error_MessageInLocal, callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.NOSID_Logout.NOSID_Logout_Error$vars", [{
name: "Error_Message",
attrName: "error_MessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._togglePopUp$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TogglePopUp");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// IsPopUpOpen = notIsPopUpOpen
model.variables.isPopUpOpenVar = !(model.variables.isPopUpOpenVar);
return OS.Flow.executeSequence(function () {
if((!(model.variables.isPopUpOpenVar))) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Terminar_sessao", "Cancelar", 0, "", callContext);
}

});
});
};
Controller.prototype._logOutOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LogOutOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var logoutVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: TogglePopUp
return controller._togglePopUp$Action(callContext).then(function () {
// Trigger Event: SetLoading2
return controller.setLoading$Action(true, callContext);
}).then(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Perfil", "Log_out", 0, "", callContext);
}).then(function () {
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Logout.LogOutOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: SetLoading
return controller.setLoading$Action(false, callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var get_OperatingSystemVar = new OS.DataTypes.VariableHolder();
var getLoginModeVar = new OS.DataTypes.VariableHolder();
var logoutParametersVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Get_OperatingSystem
get_OperatingSystemVar.value = WTF_MBPController.default.get_OperatingSystem$Action(callContext);

// Execute Action: LogoutParameters
model.flush();
return WTF_MBPController.default.logoutParameters$Action(callContext).then(function (value) {
logoutParametersVar.value = value;
}).then(function () {
// Set vars
// OperatingSystem = Get_OperatingSystem.OperatingSystem
model.variables.operatingSystemVar = get_OperatingSystemVar.value.operatingSystemOut;
// ApplicationName = LogoutParameters.ApplicationName
model.variables.applicationNameVar = logoutParametersVar.value.applicationNameOut;
// ApplicationIdentifier = LogoutParameters.ApplicationIdentifier
model.variables.applicationIdentifierVar = logoutParametersVar.value.applicationIdentifierOut;
// ClientId = LogoutParameters.ClientId
model.variables.clientIdVar = logoutParametersVar.value.clientIdOut;
// IdToken = LogoutParameters.IdToken
model.variables.idTokenVar = logoutParametersVar.value.idTokenOut;
// WebViewParameters = LogoutParameters.WebViewParameters
model.variables.webViewParametersVar = logoutParametersVar.value.webViewParametersOut;
// IsOpenId = LogoutParameters.IsOpenId
model.variables.isOpenIdVar = logoutParametersVar.value.isOpenIdOut;
// Execute Action: GetLoginMode
model.flush();
return WTF_MOBController.default.getLoginMode$Action(callContext).then(function (value) {
getLoginModeVar.value = value;
});
}).then(function () {
// LoginMode = GetLoginMode.LoginMode
model.variables.loginModeVar = getLoginModeVar.value.loginModeOut;
});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Logout.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// IsDestroyed = True
model.variables.isDestroyedVar = true;
};
Controller.prototype._nOSID_Logout_Close$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Logout_Close");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: Logout_Close
return controller.logout_Close$Action(callContext).then(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Perfil", "Log_out", 0, "", callContext);
}).then(function () {
// Execute Action: setActivityLog_Visit
model.flush();
return WTF_MBPController.default.setActivityLog_Visit$Action(false, false, true, true, false, callContext);
}).then(function () {
// Execute Action: ClearCache
model.flush();
return WTF_MBPController.default.clearCache$Action(callContext);
}).then(function () {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
};
Controller.prototype._nOSID_Logout_Start$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Logout_Start");
callContext = controller.callContext(callContext);
};

Controller.prototype.nOSID_Logout_Error$Action = function (error_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Logout_Error$Action, callContext, error_MessageIn);

};
Controller.prototype.togglePopUp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._togglePopUp$Action, callContext);

};
Controller.prototype.logOutOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._logOutOnClick$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.nOSID_Logout_Close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Logout_Close$Action, callContext);

};
Controller.prototype.nOSID_Logout_Start$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Logout_Start$Action, callContext);

};
Controller.prototype.logout_Close$Action = function () {
return Promise.resolve();
};
Controller.prototype.logoutError$Action = function () {
return Promise.resolve();
};
Controller.prototype.setLoading$Action = function () {
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

