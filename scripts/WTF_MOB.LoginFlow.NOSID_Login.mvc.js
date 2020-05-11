define("WTF_MOB.LoginFlow.NOSID_Login.mvc$model", ["OutSystems", "WTF_MOB.model", "Mobile_LoginNOS.model", "WTF_MBP.controller", "WTF_MOB.controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$model", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin_OpenId.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$model", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$PreLoginParameters", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus"], function (OutSystems, WTF_MOBModel, Mobile_LoginNOSModel, WTF_MBPController, WTF_MOBController, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvcModel, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_OpenId_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvcModel) {
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
this.attr("IsDestroyed", "isDestroyedVar", "IsDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ClientSecret", "clientSecretVar", "ClientSecret", true, OS.Types.Text, function () {
return "";
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
Model._hasValidationWidgetsValue = (((((MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets || Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvcModel.hasValidationWidgets) || Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_mvcModel.hasValidationWidgets) || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvcModel.hasValidationWidgets) || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_OpenId_mvcModel.hasValidationWidgets) || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvcModel.hasValidationWidgets);
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

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.NOSID_Login.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.NOSID_Login.mvc$model", "WTF_MOB.LoginFlow.NOSID_Login.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS_OpenId.mvc$view", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Login_IOS.mvc$view", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login.mvc$view", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin_OpenId.mvc$view", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Login_NOSCordovaPlugin.mvc$view", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$PreLoginParameters", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, React, OSView, WTF_MOB_LoginFlow_NOSID_Login_mvc_model, WTF_MOB_LoginFlow_NOSID_Login_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_view, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_OpenId_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_view) {
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
        View.displayName = "LoginFlow.NOSID_Login";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_view, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_OpenId_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Login_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Login_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(model.variables.useMSISDNIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "0"
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
uuid: "1",
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
controller.nOSID_Login_MSISDN$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn -fullWidth btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "btn_Login5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Iniciar sessão com número",
_idProps: {
service: idService,
name: "Login5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "mt-8 a-preLoginFooterText",
value: "ou",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}), $if((model.variables.loginModeIn === 0), false, this, function () {
return [$if((model.variables.operatingSystemVar === WTF_MOBModel.staticEntities.mobile_OperatingSystem.iOS), false, this, function () {
return [$if(model.variables.useOpenIdIn, false, this, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_OpenId_mvc_view, {
inputs: {
ViewController_Parameters: model.variables.webViewParametersVar,
ClientId: model.variables.clientIdVar,
ApplicationName: model.variables.applicationNameVar,
ClientSecret: model.variables.clientSecretVar,
ApplicationIdentifier: model.variables.applicationIdentifierVar,
CSS_Content: model.getCachedValue(idService.getId("Klw3569uOEePfmhkKydxqA.CSS_Content"), function () {
return ((model.variables.useMSISDNIn) ? ("btn a-btn -fullWidth btn-secondary -secondary") : ("btn a-btn -fullWidth btn-primary -primary"));
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNInDataFetchStatus),
UseOpenId: model.variables.useOpenIdIn,
_useOpenIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useOpenIdInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
login_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
login_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_LoginStart$Action(controller.callContext(eventHandlerContext));
});
;
},
login_Closed$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Closed$Action(accessTokenInfoIn, manuallyCloseIn, "", controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Login_IOS_mvc_view, {
inputs: {
ViewController_Parameters: model.variables.webViewParametersVar,
ApplicationName: model.variables.applicationNameVar,
ClientId: model.variables.clientIdVar,
ApplicationIdentifier: model.variables.applicationIdentifierVar,
CSS_Content: model.getCachedValue(idService.getId("oJJ80QGRxUy+fouClnLu1w.CSS_Content"), function () {
return ((model.variables.useMSISDNIn) ? ("btn a-btn -fullWidth btn-secondary -secondary") : ("btn a-btn -fullWidth btn-primary -primary"));
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
login_Closed$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Closed$Action(OS.DataTypes.JSConversions.typeConvertRecord(accessTokenInfoIn, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
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
target.errorcodeAttr = source.faultAttr.detailAttr.errorcodeAttr;
return target;
}), manuallyCloseIn, "", controller.callContext(eventHandlerContext));
});
;
},
login_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
login_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_LoginStart$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_mvc_view, {
inputs: {
ApplicationIdentifier: model.variables.applicationIdentifierVar,
ViewController_Parameters: model.variables.webViewParametersVar,
ClientId: model.variables.clientIdVar,
CSS_Content: model.getCachedValue(idService.getId("wB3TYGFME02yXtZ_2DYmRw.CSS_Content"), function () {
return ((model.variables.useMSISDNIn) ? ("btn a-btn -fullWidth btn-secondary -secondary") : ("btn a-btn -fullWidth btn-primary -primary"));
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNInDataFetchStatus),
ApplicationName: model.variables.applicationNameVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
login_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_LoginStart$Action(controller.callContext(eventHandlerContext));
});
;
},
login_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
login_Closed$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Closed$Action(OS.DataTypes.JSConversions.typeConvertRecord(accessTokenInfoIn, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
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
target.errorcodeAttr = source.faultAttr.detailAttr.errorcodeAttr;
return target;
}), manuallyCloseIn, "", controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "8",
alias: "4"
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
uuid: "9",
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
controller.nativeLogin$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("btn_Login4.Style"), function () {
return ((model.variables.useMSISDNIn) ? ("btn a-btn -fullWidth btn-secondary -secondary") : ("btn a-btn -fullWidth btn-primary -primary"));
}, function () {
return model.variables.useMSISDNIn;
}),
visible: true,
_idProps: {
service: idService,
name: "btn_Login4"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "Iniciar sessão",
_idProps: {
service: idService,
name: "Login4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
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
_dependencies: [asPrimitiveValue(model.variables._useMSISDNInDataFetchStatus), asPrimitiveValue(model.variables.useMSISDNIn)]
})];
}, function () {
return [$if(model.variables.useOpenIdIn, false, this, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_OpenId_mvc_view, {
inputs: {
HeaderColor: WTF_MOBModel.staticEntities.hEX_COLORS.blueDark,
UseOpenId: model.variables.useOpenIdIn,
_useOpenIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useOpenIdInDataFetchStatus),
ClientId: model.variables.clientIdVar,
ApplicationName: model.variables.applicationNameVar,
CSS_Content: model.getCachedValue(idService.getId("EA7FV+MYp0+RE3nH90nzVg.CSS_Content"), function () {
return ((model.variables.useMSISDNIn) ? ("btn a-btn -fullWidth btn-secondary -secondary") : ("btn a-btn -fullWidth btn-primary -primary"));
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNInDataFetchStatus),
IsDebugMode: false,
ClientSecret: model.variables.clientSecretVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
login_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
login_WebViewOpened$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_LoginStart$Action(controller.callContext(eventHandlerContext));
});
;
},
login_Success$Action: function (accessTokenInfoIn, manuallyCloseIn, browserIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Closed$Action(accessTokenInfoIn, manuallyCloseIn, browserIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "13",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Login_NOSCordovaPlugin_mvc_view, {
inputs: {
HeaderColor: WTF_MOBModel.staticEntities.hEX_COLORS.blueDark,
ApplicationName: model.variables.applicationNameVar,
CSS_Content: model.getCachedValue(idService.getId("2SBiiCrukkmQvkv8vjPpJA.CSS_Content"), function () {
return ((model.variables.useMSISDNIn) ? ("btn a-btn -fullWidth btn-secondary -secondary") : ("btn a-btn -fullWidth btn-primary -primary"));
}, function () {
return model.variables.useMSISDNIn;
}),
_cSS_ContentInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._useMSISDNInDataFetchStatus),
ClientId: model.variables.clientIdVar,
IsDebugMode: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
login_Closed$Action: function (accessTokenInfoIn, manuallyCloseIn, browserIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Closed$Action(OS.DataTypes.JSConversions.typeConvertRecord(accessTokenInfoIn, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
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
target.errorcodeAttr = source.faultAttr.detailAttr.errorcodeAttr;
return target;
}), manuallyCloseIn, browserIn, controller.callContext(eventHandlerContext));
});
;
},
login_WebViewOpened$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_LoginStart$Action(controller.callContext(eventHandlerContext));
});
;
},
login_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Login_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "14",
alias: "7"
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
define("WTF_MOB.LoginFlow.NOSID_Login.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "WTF_MOB.languageResources", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$PreLoginParameters", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, WTF_MOBLanguageResources) {
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
Controller.prototype._nOSID_Login_Error$Action = function (error_MessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Login_Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.NOSID_Login.NOSID_Login_Error$vars"))());
vars.value.error_MessageInLocal = error_MessageIn;
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Execute Action: LogMessage
OS.SystemActions.logMessage((("Event NOSID_Login_Error [" + vars.value.error_MessageInLocal) + "]"), "NOSID_Login", callContext);
// Trigger Event: Login_Error
return controller.login_Error$Action(vars.value.error_MessageInLocal, callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.NOSID_Login.NOSID_Login_Error$vars", [{
name: "Error_Message",
attrName: "error_MessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._nOSID_Login_Closed$Action = function (accessTokenInfoIn, manuallyCloseIn, browserIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Login_Closed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.NOSID_Login.NOSID_Login_Closed$vars"))());
vars.value.accessTokenInfoInLocal = accessTokenInfoIn.clone();
vars.value.manuallyCloseInLocal = manuallyCloseIn;
vars.value.browserInLocal = browserIn;
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Execute Action: LogMessage
OS.SystemActions.logMessage((((((("Event NOSID_Login_Closed - ManuallyClose [" + (vars.value.manuallyCloseInLocal ? "True" : "False")) + "] ManuallyClose [") + (vars.value.manuallyCloseInLocal ? "True" : "False")) + "] Browser [") + vars.value.browserInLocal) + "]"), "NOSID_Login", callContext);
// Trigger Event: Login_Close
return controller.login_Close$Action(vars.value.accessTokenInfoInLocal, vars.value.manuallyCloseInLocal, callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.NOSID_Login.NOSID_Login_Closed$vars", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec
}, {
name: "ManuallyClose",
attrName: "manuallyCloseInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Browser",
attrName: "browserInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var get_OperatingSystemVar = new OS.DataTypes.VariableHolder();
var preLoginParametersVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
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
// ClientSecret = PreLoginParameters.ClientSecret
model.variables.clientSecretVar = preLoginParametersVar.value.clientSecretOut;
});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Login.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException3
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
return OS.Flow.returnAsync();

} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._nativeLogin$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NativeLogin");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: NativeLoginEvent
return controller.nativeLoginEvent$Action(callContext);
}

});
});
};
Controller.prototype._nOSID_Login_LoginStart$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Login_LoginStart");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Execute Action: LogMessage
OS.SystemActions.logMessage("Event NOSID_Login_LoginStart", "NOSID_Login", callContext);
// Trigger Event: Login_Start
return controller.login_Start$Action("Login", callContext);
}

});
});
};
Controller.prototype._nOSID_Login_MSISDN$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Login_MSISDN");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Login_StartLoginByMSISDN
return controller.login_StartLoginByMSISDN$Action(model.variables.clientIdVar, model.variables.clientSecretVar, callContext);
});
};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.nOSID_Login_Error$Action = function (error_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Login_Error$Action, callContext, error_MessageIn);

};
Controller.prototype.nOSID_Login_Closed$Action = function (accessTokenInfoIn, manuallyCloseIn, browserIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Login_Closed$Action, callContext, accessTokenInfoIn, manuallyCloseIn, browserIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.nativeLogin$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nativeLogin$Action, callContext);

};
Controller.prototype.nOSID_Login_LoginStart$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Login_LoginStart$Action, callContext);

};
Controller.prototype.nOSID_Login_MSISDN$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Login_MSISDN$Action, callContext);

};
Controller.prototype.nativeLoginEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Start$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Close$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_Error$Action = function () {
return Promise.resolve();
};
Controller.prototype.login_StartLoginByMSISDN$Action = function () {
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

