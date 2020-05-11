define("WTF_MOB.LoginFlow.PreLogin.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "WTF_MOB.LoginFlow.NOSID_Login.mvc$model", "WTF_MOB.LoginFlow.NOSID_Register.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_ClickLoginPage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MBP.controller$ValidateIfUserAreBlocked", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.controller$Registration", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$GetLoginMode", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_Visit", "WTF_MOB.controller$GetAndUpdateUserProfile", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$ShowWithoutLogin", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl1_mvcModel, WTF_MOB_LoginFlow_NOSID_Login_mvcModel, WTF_MOB_LoginFlow_NOSID_Register_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Registration_EndPoint", "registration_EndPointVar", "Registration_EndPoint", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CallbackURL", "callbackURLVar", "CallbackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("isDestroyed", "isDestroyedVar", "isDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LoginMode", "loginModeVar", "LoginMode", true, OS.Types.Integer, function () {
return -1;
}), 
this.attr("DemoAppWithoutLogin", "demoAppWithoutLoginVar", "DemoAppWithoutLogin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("UseOpenId", "useOpenIdVar", "UseOpenId", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LoginMsisdnDisabled", "loginMsisdnDisabledVar", "LoginMsisdnDisabled", true, OS.Types.Boolean, function () {
return false;
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets || WTF_MOB_LoginFlow_NOSID_Login_mvcModel.hasValidationWidgets) || WTF_MOB_LoginFlow_NOSID_Register_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.PreLogin.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.PreLogin.mvc$model", "WTF_MOB.LoginFlow.PreLogin.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.LoginFlow.NOSID_Login.mvc$view", "WTF_MOB.LoginFlow.NOSID_Register.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_ClickLoginPage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MBP.controller$ValidateIfUserAreBlocked", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.controller$Registration", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$GetLoginMode", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_Visit", "WTF_MOB.controller$GetAndUpdateUserProfile", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$ShowWithoutLogin", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_LoginFlow_PreLogin_mvc_model, WTF_MOB_LoginFlow_PreLogin_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, WTF_MOB_LoginFlow_NOSID_Login_mvc_view, WTF_MOB_LoginFlow_NOSID_Register_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "LoginFlow.PreLogin";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.LoginFlow.PreLogin.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/WTF_MOB.BackButtonNull.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, WTF_MOB_LoginFlow_NOSID_Login_mvc_view, WTF_MOB_LoginFlow_NOSID_Register_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_PreLogin_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_PreLogin_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl1_mvc_view, {
inputs: {
PageTitle: "Login",
PageType: "Operação",
PageSection: "Login",
ContentClass: "a-preLogin pv-16  -mainGradient hasoverflowhidden",
IsOfflineMode: false,
ScreenName: "PreLogin",
WithoutLogin: false,
IsPreLogin: true
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.paralax_cube.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "cube"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-preLogin",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "gvILlMyai0Gkc9pAEJxv0A"
},
style: "a-preLoginLogo",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.logo.svg"),
style: "a-preLoginLogoImg",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-preLoginFooter pv-24",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
style: "a-preLoginBtn",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_LoginFlow_NOSID_Login_mvc_view, {
inputs: {
UseMSISDN: !(model.variables.loginMsisdnDisabledVar),
ScreenName: "PreLogin",
UseOpenId: model.variables.useOpenIdVar,
LoginMode: model.variables.loginModeVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
nativeLoginEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_LoginNativeLoginEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
login_Start$Action: function (analytics_LabelIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Start$Action("Login", false, controller.callContext(eventHandlerContext));
});
;
},
login_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Error$Action("PreLogin.oAuth_LoginUserCanceledAuthorization -> IsDestroyed ", error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
login_StartLoginByMSISDN$Action: function (clientIdIn, clientSecretIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.loginLogin_StartLoginByMSISDN$Action(clientIdIn, clientSecretIn, controller.callContext(eventHandlerContext));
});
;
},
login_Close$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Closed$Action(accessTokenInfoIn, "PreLogin.oAuth_LoginReceiveAuthToken -> IsDestroyed ", false, controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), $if(model.variables.loginMsisdnDisabledVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "J2b6lpB1g0KzxIaXHSLScw"
},
style: "c-warmPurple mt-24",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "a-preLoginFooterText",
value: "Ainda não estás registado?",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_LoginFlow_NOSID_Register_mvc_view, {
inputs: {
UseOpenId: model.variables.useOpenIdVar,
UseMSISDNWithoutRegister: false,
ScreenName: "PreLogin",
UseMSISDN: !(model.variables.loginMsisdnDisabledVar),
LoginMode: model.variables.loginModeVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
register_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Error$Action("PreLogin.NOSID_RegisterRegister_Error -> IsDestroyed ", error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
register_Close$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Closed$Action(OS.DataTypes.JSConversions.typeConvertRecord(accessTokenInfoIn, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
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
}), "PreLogin.NOSID_RegisterRegister_Close -> IsDestroyed ", true, controller.callContext(eventHandlerContext));
});
;
},
register_Start$Action: function (analytics_LabelIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Start$Action("Registar", true, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "12",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "iQtWQkr0FUefhzeFZJJwjA"
},
style: "mt-24",
visible: model.variables.demoAppWithoutLoginVar,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "nNynPzv0TkuhFx3AG3v7KA"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.demoAppWithoutLogin$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link c-warmPurple",
visible: true,
_idProps: {
service: idService,
name: "DemoApp"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Conhecer a app",
_idProps: {
service: idService,
name: "Link"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "xcnCLZfcF0CEAStVa6RdwA"
},
style: "c-warmPurple  mt-24",
visible: model.variables.demoAppWithoutLoginVar,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "a-preLoginFooterText",
value: "Ainda não és WTF?",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "bmhDpfnC90GUAwVwbkO8AQ"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pedirCartaoOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link c-warmPurple -purple",
visible: true,
_idProps: {
service: idService,
name: "GetCard"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Pede já o teu cartão",
_idProps: {
service: idService,
name: "Link2"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}), React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
extendedProperties: {
"data-style-key": "CkGIi6Q+WkqU0Tng1cqxaQ"
},
gridProperties: {
marginTop: "40px"
},
style: "bottom c-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "p0M5LEZOtEyKN5f66SFWVA"
},
gridProperties: {
classes: "OSFillParent"
},
style: "a-preLoginFooterText",
value: "NOS©2019",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "M9sIJBds9U6i7A4U5M2gYQ"
},
gridProperties: {
classes: "OSFillParent"
},
style: "a-preLoginFooterText",
value: "Todos os direitos reservados",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "K606YgV7Xk+HWjpRYN+ZiA"
},
gridProperties: {
classes: "OSInline"
},
style: "text-right pa-16",
visible: !(model.variables.loginMsisdnDisabledVar),
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_LoginFlow_NOSID_Register_mvc_view, {
inputs: {
UseMSISDN: !(model.variables.loginMsisdnDisabledVar),
UseMSISDNWithoutRegister: false,
ScreenName: "PreLogin",
UseOpenId: model.variables.useOpenIdVar,
LoginMode: model.variables.loginModeVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
register_Close$Action: function (accessTokenInfoIn, manuallyCloseIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Closed$Action(OS.DataTypes.JSConversions.typeConvertRecord(accessTokenInfoIn, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
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
}), "PreLogin.NOSID_RegisterRegister_Close -> IsDestroyed ", true, controller.callContext(eventHandlerContext));
});
;
},
register_Start$Action: function (analytics_LabelIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Start$Action("Registar", true, controller.callContext(eventHandlerContext));
});
;
},
register_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_RegisterOrLogin_Error$Action("PreLogin.NOSID_RegisterRegister_Error -> IsDestroyed ", error_MessageIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "24",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
inputs: {
IsLoading: model.variables.isLoadingVar
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
uuid: "25",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.demoAppWithoutLoginVar), asPrimitiveValue(model.variables.loginModeVar), asPrimitiveValue(model.variables.useOpenIdVar), asPrimitiveValue(model.variables.loginMsisdnDisabledVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.LoginFlow.PreLogin.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.LoginFlow.controller", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_ClickLoginPage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "WTF_MBP.controller$ValidateIfUserAreBlocked", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.controller$Registration", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$GetLoginMode", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_Visit", "WTF_MOB.controller$GetAndUpdateUserProfile", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$ShowWithoutLogin", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_LoginFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.checkIfUserAcceptedTerms$ServerAction = function (userUIDIn, callContext) {
var controller = this.controller;
var inputs = {
UserUID: OS.DataTypes.JSConversions.basicTypeToJS(userUIDIn, OS.Types.Text)
};
return controller.callServerAction("CheckIfUserAcceptedTerms", "screenservices/WTF_MOB/LoginFlow/PreLogin/ActionCheckIfUserAcceptedTerms", "e4MRiTqbXF_CHAya_63gnQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.PreLogin$rssespacewtf_bp_ActionCheckIfUserAcceptedTerms"))();
executeServerActionResult.hasAcceptedOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.HasAccepted, OS.Types.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.PreLogin$rssespacewtf_bp_ActionCheckIfUserAcceptedTerms", [{
name: "HasAccepted",
attrName: "hasAcceptedOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._nOSID_RegisterOrLogin_Error$Action = function (logMessageInputIn, error_MessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_RegisterOrLogin_Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.PreLogin.NOSID_RegisterOrLogin_Error$vars"))());
vars.value.logMessageInputInLocal = logMessageInputIn;
vars.value.error_MessageInLocal = error_MessageIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: LogMessage3
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "Entering Register or login ERROR..."), "WTF_MOB", callContext);
if((model.variables.isDestroyedVar)) {
// Execute Action: LogMessage
OS.SystemActions.logMessage(vars.value.logMessageInputInLocal, "OnDestroy", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
} else {
// Error_Message = "Error Message"
vars.value.error_MessageInLocal = "Error Message";
// IsLoading = False
model.variables.isLoadingVar = false;
}

}).catch(function (ex) {
OS.Logger.trace("PreLogin.NOSID_RegisterOrLogin_Error", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.PreLogin.NOSID_RegisterOrLogin_Error$vars", [{
name: "LogMessageInput",
attrName: "logMessageInputInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Error_Message",
attrName: "error_MessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._nOSID_LoginNativeLoginEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_LoginNativeLoginEvent");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Login", "Login", 0, "", callContext).then(function () {
// Execute Action: setActivityLog_ClickLoginPage
model.flush();
return WTF_MBPController.default.setActivityLog_ClickLoginPage$Action(false, callContext);
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/ClienteNOS_Login
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ClienteNOS_Login", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("PreLogin.NOSID_LoginNativeLoginEvent", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.prototype._nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, logMessageInputIn, fromRegisterInputIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_RegisterOrLogin_Closed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.PreLogin.NOSID_RegisterOrLogin_Closed$vars"))());
vars.value.accessTokenInfoInLocal = accessTokenInfoIn.clone();
vars.value.logMessageInputInLocal = logMessageInputIn;
vars.value.fromRegisterInputInLocal = fromRegisterInputIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkIfUserHasEverLoggedInVar = new OS.DataTypes.VariableHolder();
var loginActionVar = new OS.DataTypes.VariableHolder();
var validateIfUserAreBlockedVar = new OS.DataTypes.VariableHolder();
var registerDeviceInfoVar = new OS.DataTypes.VariableHolder();
var getUserInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: LogMessage3
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "Entering Register or login closed..."), "WTF_MOB", callContext);
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
// Execute Action: LogMessage
OS.SystemActions.logMessage(vars.value.logMessageInputInLocal, "OnDestroy", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
} else {
// Execute Action: LoginAction
model.flush();
return WTF_MOBController.default.loginAction$Action(vars.value.accessTokenInfoInLocal, false, true, callContext).then(function (value) {
loginActionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((loginActionVar.value.successOut)) {
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
return getUserInfoAggr().then(function () {
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("PreLogin.NOSID_RegisterOrLogin_Closed", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.PreLogin.NOSID_RegisterOrLogin_Closed$vars", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec
}, {
name: "LogMessageInput",
attrName: "logMessageInputInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "FromRegisterInput",
attrName: "fromRegisterInputInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._loginLogin_StartLoginByMSISDN$Action = function (clientIdIn, clientSecretIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LoginLogin_StartLoginByMSISDN");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.PreLogin.LoginLogin_StartLoginByMSISDN$vars"))());
vars.value.clientIdInLocal = clientIdIn;
vars.value.clientSecretInLocal = clientSecretIn;
var getApplicationName_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Login", "Login com número", 0, "", callContext).then(function () {
// Execute Action: GetApplicationName_MBP
model.flush();
return WTF_MBPController.default.getApplicationName_MBP$Action(callContext).then(function (value) {
getApplicationName_MBPVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/LoginMsisdn_Access
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoginMsisdn_Access", {
ClientSecret: vars.value.clientSecretInLocal,
ApplicationName: getApplicationName_MBPVar.value.valueOut,
ClientId: vars.value.clientIdInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.PreLogin.LoginLogin_StartLoginByMSISDN$vars", [{
name: "ClientId",
attrName: "clientIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ClientSecret",
attrName: "clientSecretInLocal",
mandatory: true,
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
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkIfUserAcceptedTermsVar = new OS.DataTypes.VariableHolder();
var registrationVar = new OS.DataTypes.VariableHolder();
var getWTF_LoginMsisdn_disabledVar = new OS.DataTypes.VariableHolder();
var getOpenIdConfigVar = new OS.DataTypes.VariableHolder();
var getLoginModeVar = new OS.DataTypes.VariableHolder();
var getCallbackURLVar = new OS.DataTypes.VariableHolder();
var getAndUpdateUserProfileVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var showWithoutLoginVar = new OS.DataTypes.VariableHolder();
var getUserNOSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Login"
model.variables.analyticsAuxVarVar.traceNameAttr = "Login";
// AnalyticsAuxVar.Category = "Login"
model.variables.analyticsAuxVarVar.categoryAttr = "Login";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: ShowWithoutLogin
model.flush();
return WTF_MBPController.default.showWithoutLogin$Action(callContext).then(function (value) {
showWithoutLoginVar.value = value;
});
}).then(function () {
// DemoAppWithoutLogin = ShowWithoutLogin.Show
model.variables.demoAppWithoutLoginVar = showWithoutLoginVar.value.showOut;
// Execute Action: GetCallbackURL
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("CALLBACK_URL_PRELOGIN", callContext).then(function (value) {
getCallbackURLVar.value = value;
});
}).then(function () {
// CallbackURL = GetCallbackURL.Value
model.variables.callbackURLVar = getCallbackURLVar.value.valueOut;
// Execute Action: GetOpenIdConfig
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("USE_OPEN_ID", callContext).then(function (value) {
getOpenIdConfigVar.value = value;
});
}).then(function () {
// UseOpenId = ToLower = "true"
model.variables.useOpenIdVar = (OS.BuiltinFunctions.toLower(getOpenIdConfigVar.value.valueOut) === "true");
// Execute Action: GetWTF_LoginMsisdn_disabled
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_LoginMsisdn_disabled", callContext).then(function (value) {
getWTF_LoginMsisdn_disabledVar.value = value;
});
}).then(function () {
// LoginMsisdnDisabled = ToLower = "true"
model.variables.loginMsisdnDisabledVar = (OS.BuiltinFunctions.toLower(getWTF_LoginMsisdn_disabledVar.value.valueOut) === "true");
// Execute Action: Registration
model.flush();
return WTF_MOBController.default.registration$Action(model.variables.useOpenIdVar, callContext).then(function (value) {
registrationVar.value = value;
});
}).then(function () {
// Registration_EndPoint
// Registration_EndPoint = Registration.URL
model.variables.registration_EndPointVar = registrationVar.value.uRLOut;
// Execute Action: GetLoginMode
model.flush();
return WTF_MOBController.default.getLoginMode$Action(callContext).then(function (value) {
getLoginModeVar.value = value;
});
}).then(function () {
// SerLoginMode
// LoginMode = GetLoginMode.LoginMode
model.variables.loginModeVar = getLoginModeVar.value.loginModeOut;
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: GetAndUpdateUserProfile
model.flush();
return WTF_MOBController.default.getAndUpdateUserProfile$Action(callContext).then(function (value) {
getAndUpdateUserProfileVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getAndUpdateUserProfileVar.value.sessionExpiredOut)) {
// Execute Action: setActivityLog_VisitWithoutLogin
model.flush();
return WTF_MBPController.default.setActivityLog_Visit$Action(true, false, false, false, true, callContext);
} else {
// Aggregate: GetUserNOS
var getUserNOSAggr = function (maxRecords) {
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
return getUserNOSVar.value;
});
};
return getUserNOSAggr().then(function () {
// EmptyUserInfo?
return OS.Flow.executeSequence(function () {
if((getUserNOSVar.value.listOut.isEmpty)) {
// Execute Action: setActivityLog_VisitWithoutLogin2
model.flush();
return WTF_MBPController.default.setActivityLog_Visit$Action(true, false, false, false, true, callContext);
} else {
// Execute Action: setActivityLog_VisitWithLogin
model.flush();
return WTF_MBPController.default.setActivityLog_Visit$Action(true, false, true, false, false, callContext).then(function () {
// Execute Action: CheckIfUserAcceptedTerms
model.flush();
return controller.checkIfUserAcceptedTerms$ServerAction(getUserNOSVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_NOS_INFOAttr.uidAttr, callContext).then(function (value) {
checkIfUserAcceptedTermsVar.value = value;
});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}).then(function () {
// AcceptedTerms?
if((checkIfUserAcceptedTermsVar.value.hasAcceptedOut)) {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/TermsAndConditionsApp
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/TermsAndConditionsApp", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
}

});
});
}

});
}).then(function () {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("PreLogin.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: StopTrace
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
Controller.prototype._nOSID_RegisterOrLogin_Start$Action = function (analytics_LabelIn, isRegisterIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_RegisterOrLogin_Start");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.PreLogin.NOSID_RegisterOrLogin_Start$vars"))());
vars.value.analytics_LabelInLocal = analytics_LabelIn;
vars.value.isRegisterInLocal = isRegisterIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTFVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Login", vars.value.analytics_LabelInLocal, 0, "", callContext).then(function () {
// Execute Action: LogEventFacebookSDK_WTF
logEventFacebookSDK_WTFVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action(((vars.value.isRegisterInLocal) ? ("Click_register") : ("Click_login")), callContext);

// Execute Action: setActivityLog_ClickLoginPage
model.flush();
return WTF_MBPController.default.setActivityLog_ClickLoginPage$Action(vars.value.isRegisterInLocal, callContext);
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("PreLogin.NOSID_RegisterOrLogin_Start", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.PreLogin.NOSID_RegisterOrLogin_Start$vars", [{
name: "Analytics_Label",
attrName: "analytics_LabelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsRegister",
attrName: "isRegisterInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._demoAppWithoutLogin$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DemoAppWithoutLogin");
callContext = controller.callContext(callContext);
var checkIfUserHasEverLoggedInVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: setActivityLog_Visit
model.flush();
return WTF_MBPController.default.setActivityLog_Visit$Action(true, false, false, false, true, callContext).then(function () {
// Execute Action: CheckIfUserHasEverLoggedIn
model.flush();
return WTF_MOBController.default.checkIfUserHasEverLoggedIn$Action(true, callContext).then(function (value) {
checkIfUserHasEverLoggedInVar.value = value;
});
}).then(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Login", "Conhecer a app", 0, "", callContext);
}).then(function () {
if((checkIfUserHasEverLoggedInVar.value.hasLoggedInOut)) {
// Destination: /WTF_MOB/WTF_Home_WithoutLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home_WithoutLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
// Destination: /WTF_MOB/OnBoarding
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/OnBoarding", {
FromRegister: false,
DemoAppWithoutLogin: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
};
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
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// SetIsDestroyed
// isDestroyed = True
model.variables.isDestroyedVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
}).catch(function (ex) {
OS.Logger.trace("PreLogin.OnDestroy", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._pedirCartaoOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PedirCartaoOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var eXTERNAL_URL_SITEWTF_PEDIRCARTAOVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona sem login", "Pedir cartão", 0, "", callContext).then(function () {
// Execute Action: EXTERNAL_URL_SITEWTF_PEDIRCARTAO
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_SITEWTF_PEDIRCARTAO", callContext).then(function (value) {
eXTERNAL_URL_SITEWTF_PEDIRCARTAOVar.value = value;
});
}).then(function () {
// Execute Action: OpenExternalURL
model.flush();
return WTF_MOBController.default.openExternalURL$Action(eXTERNAL_URL_SITEWTF_PEDIRCARTAOVar.value.valueOut, true, "", WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, callContext);
});
}).catch(function (ex) {
OS.Logger.trace("PreLogin.PedirCartaoOnClick", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.nOSID_RegisterOrLogin_Error$Action = function (logMessageInputIn, error_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_RegisterOrLogin_Error$Action, callContext, logMessageInputIn, error_MessageIn);

};
Controller.prototype.nOSID_LoginNativeLoginEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_LoginNativeLoginEvent$Action, callContext);

};
Controller.prototype.nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, logMessageInputIn, fromRegisterInputIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_RegisterOrLogin_Closed$Action, callContext, accessTokenInfoIn, logMessageInputIn, fromRegisterInputIn);

};
Controller.prototype.loginLogin_StartLoginByMSISDN$Action = function (clientIdIn, clientSecretIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loginLogin_StartLoginByMSISDN$Action, callContext, clientIdIn, clientSecretIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.nOSID_RegisterOrLogin_Start$Action = function (analytics_LabelIn, isRegisterIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_RegisterOrLogin_Start$Action, callContext, analytics_LabelIn, isRegisterIn);

};
Controller.prototype.demoAppWithoutLogin$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._demoAppWithoutLogin$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.pedirCartaoOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pedirCartaoOnClick$Action, callContext);

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

