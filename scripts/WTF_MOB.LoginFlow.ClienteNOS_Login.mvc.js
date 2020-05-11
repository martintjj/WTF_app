define("WTF_MOB.LoginFlow.ClienteNOS_Login.mvc$model", ["OutSystems", "WTF_MOB.model", "MobilePatterns.controller", "WTF_MOB.controller", "WTF_MBP.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "MobilePatterns.controller$ShowPassword", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$GetAndUpdateUserProfile", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "Mobile_LoginNOS.model$AccessTokenCodeRec", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Cordova_GetPlatform", "WTF_MBP.controller$AccessTokenPassword", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, MobilePatternsController, WTF_MOBController, WTF_MBPController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Username", "usernameVar", "Username", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Password", "passwordVar", "Password", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsErrorVisible", "isErrorVisibleVar", "IsErrorVisible", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsKeyboardVisible", "isKeyboardVisibleVar", "IsKeyboardVisible", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("isDestroyed", "isDestroyedVar", "isDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsPasswordVisible", "isPasswordVisibleVar", "IsPasswordVisible", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec)
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
return {
Input_TextVar: OS.Model.ValidationWidgetRecord,
Input_TextVar2: OS.Model.ValidationWidgetRecord
};
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return true;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.ClienteNOS_Login.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobilePatterns.controller", "WTF_MBP.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.ClienteNOS_Login.mvc$model", "WTF_MOB.LoginFlow.ClienteNOS_Login.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.Waiting.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "MobilePatterns.controller$ShowPassword", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$GetAndUpdateUserProfile", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "Mobile_LoginNOS.model$AccessTokenCodeRec", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Cordova_GetPlatform", "WTF_MBP.controller$AccessTokenPassword", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobilePatternsController, WTF_MBPController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_LoginFlow_ClienteNOS_Login_mvc_model, WTF_MOB_LoginFlow_ClienteNOS_Login_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view) {
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
        View.displayName = "LoginFlow.ClienteNOS_Login";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.LoginFlow.ClienteNOS_Login.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_ClienteNOS_Login_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_ClienteNOS_Login_mvc_controller;
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
ScreenName: "ClienteNOS_Login",
ContentClass: "-noPadding form -mainGradient",
IsOfflineMode: false,
PageSection: "Login",
WithoutLogin: false,
PageType: "Operação",
PageTitle: "Login",
IsPreLogin: true,
HasOverflowHidden: true
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
return [React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
style: "o-login w-100",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
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
style: "header a-header a-header-lvl1  spoke_lvl1 o-loginHeader",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.onBackClick$Action(controller.callContext(eventHandlerContext));

;
}
},
style: "d-inline-block action-icon",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: model.getCachedValue(idService.getId("7sOhiJaxL0ijsd42GAIHlw.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
}),
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconLeftArrow,
HasRipple: false
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
uuid: "6",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-loginContent pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "c8MU4wNB_U2t1TSL+btPhQ"
},
style: "relative-position a-preLoginLogo",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.logo.svg"),
style: "a-preLoginLogoImg",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("QnfLpYBCuEaIYWSiVXQVBg.Style"), function () {
return ((model.variables.isKeyboardVisibleVar) ? ("mb-16 a-preLoginForm -visible") : ("a-preLoginForm"));
}, function () {
return model.variables.isKeyboardVisibleVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Email / telemóvel",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
controller.toggleKeyboardVar$Action(controller.callContext(eventHandlerContext));

;
},
onBlur: function () {
var eventHandlerContext = callContext.clone();
controller.toggleKeyboardVar$Action(controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: true,
maxLength: 50,
prompt: "Email / telemóvel",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.usernameVar, function (value) {
model.variables.usernameVar = value;
}),
_idProps: {
service: idService,
name: "Input_TextVar"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-right mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.forgotUsername$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -xSmall c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "(esqueci-me)")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Palavra-passe",
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
onFocus: function () {
var eventHandlerContext = callContext.clone();
controller.toggleKeyboardVar$Action(controller.callContext(eventHandlerContext));

;
},
onBlur: function () {
var eventHandlerContext = callContext.clone();
controller.toggleKeyboardVar$Action(controller.callContext(eventHandlerContext));

;
}
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Password*/ 1,
mandatory: true,
maxLength: 50,
prompt: "Palavra-passe",
style: "form-control a-input OSFillParent login-password",
variable: model.createVariable(OS.Types.Text, model.variables.passwordVar, function (value) {
model.variables.passwordVar = value;
}),
_idProps: {
service: idService,
name: "Input_TextVar2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.togglePassword$Action(controller.callContext(eventHandlerContext));

;
},
style: "a-loginPasswordIcon c-gray8",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: model.getCachedValue(idService.getId("2I3mByr__E29G7ILJXaUXA.IconName"), function () {
return ((model.variables.isPasswordVisibleVar) ? (WTF_MOBModel.staticEntities.iCON_CLASS.iconEye) : (WTF_MOBModel.staticEntities.iCON_CLASS.iconEyeHide));
}, function () {
return model.variables.isPasswordVisibleVar;
})
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
uuid: "31",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-right mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.forgotPassword$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -xSmall c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, "(esqueci-me)")))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mb-16 text-left",
visible: model.variables.isErrorVisibleVar,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-red",
value: "Dados de login inválidos. Tenta novamente ou crie um novo registo NOS ID.",
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "36",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: ((((model.variables.usernameVar) !== ("")) && ((model.variables.passwordVar) !== (""))) || true),
onClick: function () {
_this.validateWidget("");
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.doLogin$Action(controller.callContext(eventHandlerContext));
});

;
},
style: "btn a-btn -primary btn-primary w-100 mb-32",
visible: true,
_idProps: {
service: idService,
name: "btn_entrar"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Entrar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.usernameVar)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: false,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-warmPurple mb-16",
value: "Ou faz login através de uma rede social",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-loginSocial",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-loginSocialItem",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large,
HasRipple: true,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconTwitter,
StyleClass: "c-warmPurple va-middle"
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
uuid: "44",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-loginSocialItem",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconFacebook,
StyleClass: "c-warmPurpleva-middle",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large,
HasRipple: true
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
uuid: "46",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-loginSocialItem",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
HasRipple: false,
StyleClass: "c-warmPurple va-middle",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconWindows,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large
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
uuid: "48",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-loginSocialItem",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconGoogle,
HasRipple: false,
StyleClass: "c-warmPurple va-middle"
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
uuid: "50",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isErrorVisibleVar), asPrimitiveValue(model.variables.isPasswordVisibleVar), asPrimitiveValue(model.variables.passwordVar), asPrimitiveValue(model.variables.usernameVar), asPrimitiveValue(model.variables.isKeyboardVisibleVar), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.LoginFlow.ClienteNOS_Login.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobilePatterns.controller", "WTF_MBP.controller", "Mobile_LoginNOS.model", "CustomerNotifications_MBP.model", "CustomerNotifications_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.LoginFlow.controller", "WTF_MOB.LoginFlow.ClienteNOS_Login.mvc$controller.DoLogin.GetDeviceInformationJS", "MobilePatterns.controller$ShowPassword", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$GetAndUpdateUserProfile", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$TriggerOfflineDataSync", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "Mobile_LoginNOS.model$AccessTokenCode_OpenIDRec", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$LoginAction", "CustomerNotifications_MBP.model$RegisterDevice_ResponseRec", "WTF_MOB.referencesHealth$CustomerNotifications_MBP", "CustomerNotifications_MBP.controller$RegisterDeviceInfo_v3", "Mobile_LoginNOS.model$AccessTokenCodeRec", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Cordova_GetPlatform", "WTF_MBP.controller$AccessTokenPassword", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobilePatternsController, WTF_MBPController, Mobile_LoginNOSModel, CustomerNotifications_MBPModel, CustomerNotifications_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_LoginFlowController, WTF_MOB_LoginFlow_ClienteNOS_Login_mvc_controller_DoLogin_GetDeviceInformationJS) {
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
Controller.prototype._onBackClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnBackClick");
callContext = controller.callContext(callContext);
// Destination: /WTF_MOB/PreLogin
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true);
};
Controller.prototype._togglePassword$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TogglePassword");
callContext = controller.callContext(callContext);
// Execute Action: ShowPassword
MobilePatternsController.default.showPassword$Action(callContext);
// IsPasswordVisible = notIsPasswordVisible
model.variables.isPasswordVisibleVar = !(model.variables.isPasswordVisibleVar);
};
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// isDestroyed = True
model.variables.isDestroyedVar = true;
}).catch(function (ex) {
OS.Logger.trace("ClienteNOS_Login.OnDestroy", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAndUpdateUserProfileVar = new OS.DataTypes.VariableHolder();
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
// Execute Action: GetAndUpdateUserProfile
model.flush();
return WTF_MOBController.default.getAndUpdateUserProfile$Action(callContext).then(function (value) {
getAndUpdateUserProfileVar.value = value;
});
}).then(function () {
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ClienteNOS_Login.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_RegisterOrLogin_Closed");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.NOSID_RegisterOrLogin_Closed$vars"))());
vars.value.accessTokenInfoInLocal = accessTokenInfoIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validateIfUserAreBlocked2Var = new OS.DataTypes.VariableHolder();
var checkIfUserHasEverLoggedInVar = new OS.DataTypes.VariableHolder();
var validateIfUserAreBlockedVar = new OS.DataTypes.VariableHolder();
var loginActionVar = new OS.DataTypes.VariableHolder();
var registerDeviceInfoVar = new OS.DataTypes.VariableHolder();
var getUserInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
// Execute Action: LogMessage
OS.SystemActions.logMessage("PreLogin.oAuth_LoginReceiveAuthToken -> IsDestroyed ", "OnDestroy", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
} else {
// Execute Action: LoginAction
model.flush();
return WTF_MOBController.default.loginAction$Action(OS.DataTypes.JSConversions.typeConvertRecord(vars.value.accessTokenInfoInLocal, new Mobile_LoginNOSModel.AccessTokenCode_OpenIDRec(), function (source, target) {
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
}), false, true, callContext).then(function (value) {
loginActionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((loginActionVar.value.successOut)) {
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
// Execute Action: LogMessage2
OS.SystemActions.logMessage("[Login] Start TriggerOfflineDataSync", "AssociationSync", callContext);
// Execute Action: SyncBalanceConfig
WTF_MOBController.default.triggerOfflineDataSync$Action(WTF_MOBModel.staticEntities.sYNC_UNIT.balanceConfig, false, callContext);
// Execute Action: TriggerOfflineDataSync
WTF_MOBController.default.triggerOfflineDataSync$Action(WTF_MOBModel.staticEntities.sYNC_UNIT.aggregates, false, callContext);
// Execute Action: ValidateIfUserAreBlocked2
model.flush();
return WTF_MBPController.default.validateIfUserAreBlocked$Action(callContext).then(function (value) {
validateIfUserAreBlocked2Var.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((validateIfUserAreBlocked2Var.value.hasBockOut === true))) {
// Destination: /WTF_MOB/UserBlocked
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserBlocked", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromTop), callContext, true));
} else {
// One or more Associations?
return OS.Flow.executeSequence(function () {
if(((loginActionVar.value.app_UserAssociations_LengthOut >= 1))) {
// Execute Action: CheckIfUserHasEverLoggedIn
model.flush();
return WTF_MOBController.default.checkIfUserHasEverLoggedIn$Action(false, callContext).then(function (value) {
checkIfUserHasEverLoggedInVar.value = value;
}).then(function () {
// HasLoggedIn?
if((checkIfUserHasEverLoggedInVar.value.hasLoggedInOut)) {
// Destination: /WTF_MOB/LoadingSplash
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoadingSplash", {
FromRegister: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/OnBoarding
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/OnBoarding", {
DemoAppWithoutLogin: false,
FromRegister: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
} else {
// Destination: /WTF_MOB/ProtectionScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ProtectionScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromTop), callContext, true));
}

});
}

});
});
} else {
// Execute Action: ValidateIfUserAreBlocked
model.flush();
return WTF_MBPController.default.validateIfUserAreBlocked$Action(callContext).then(function (value) {
validateIfUserAreBlockedVar.value = value;
}).then(function () {
if(((validateIfUserAreBlockedVar.value.hasBockOut === true))) {
// Destination: /WTF_MOB/UserBlocked
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserBlocked", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromTop), callContext, true));
} else {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromTop), callContext, true));
}

});
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("ClienteNOS_Login.NOSID_RegisterOrLogin_Closed", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.NOSID_RegisterOrLogin_Closed$vars", [{
name: "AccessTokenInfo",
attrName: "accessTokenInfoInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new Mobile_LoginNOSModel.AccessTokenCodeRec();
},
complexType: Mobile_LoginNOSModel.AccessTokenCodeRec
}]);
Controller.prototype._forgotUsername$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ForgotUsername");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.ForgotUsername$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getForgotUsernameURLVar = new OS.DataTypes.VariableHolder();
var getConfigValueAsText_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetConfigValueAsText_MBP
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("CALLBACK_URL_PRELOGIN", callContext).then(function (value) {
getConfigValueAsText_MBPVar.value = value;
}).then(function () {
// Execute Action: GetForgotUsernameURL
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_RecoverNome", callContext).then(function (value) {
getForgotUsernameURLVar.value = value;
});
}).then(function () {
// URL = GetForgotUsernameURL.Value + "?CallbackURL=" + EncodeUrl
vars.value.uRLVar = ((getForgotUsernameURLVar.value.valueOut + "?CallbackURL=") + OS.BuiltinFunctions.encodeUrl(getConfigValueAsText_MBPVar.value.valueOut));
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.uRLVar, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ClienteNOS_Login.ForgotUsername", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.ForgotUsername$vars", [{
name: "URL",
attrName: "uRLVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._toggleKeyboardVar$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ToggleKeyboardVar");
callContext = controller.callContext(callContext);
// IsKeyboardVisible = notIsKeyboardVisible
model.variables.isKeyboardVisibleVar = !(model.variables.isKeyboardVisibleVar);
};
Controller.prototype._forgotPassword$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ForgotPassword");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.ForgotPassword$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getForgotPasswordURLVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetForgotPasswordURL
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_RecoverPassword", callContext).then(function (value) {
getForgotPasswordURLVar.value = value;
}).then(function () {
// URL = GetForgotPasswordURL.Value
vars.value.uRLVar = getForgotPasswordURLVar.value.valueOut;
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.uRLVar, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ClienteNOS_Login.ForgotPassword", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.ForgotPassword$vars", [{
name: "URL",
attrName: "uRLVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._doLogin$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DoLogin");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var cordova_GetPlatformVar = new OS.DataTypes.VariableHolder();
var accessTokenPasswordVar = new OS.DataTypes.VariableHolder();
var getDeviceInformationJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(((model.variables.usernameVar === OS.BuiltinFunctions.nullTextIdentifier()) || (model.variables.passwordVar === OS.BuiltinFunctions.nullTextIdentifier()))))) {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Login", "Login", 0, "", callContext).then(function () {
// Execute Action: Cordova_GetPlatform
cordova_GetPlatformVar.value = WTF_MBPController.default.cordova_GetPlatform$Action(callContext);

getDeviceInformationJSResult.value = controller.safeExecuteJSNode(WTF_MOB_LoginFlow_ClienteNOS_Login_mvc_controller_DoLogin_GetDeviceInformationJS, "GetDeviceInformation", "DoLogin", {
CordovaVersion: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
Model: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
Platform: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
UUID: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
Version: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
Manufacturer: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
IsVirtual: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true),
Serial: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.DoLogin$getDeviceInformationJSResult"))();
jsNodeResult.cordovaVersionOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.CordovaVersion, OS.Types.Text);
jsNodeResult.modelOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Model, OS.Types.Text);
jsNodeResult.platformOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Platform, OS.Types.Text);
jsNodeResult.uUIDOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.UUID, OS.Types.Text);
jsNodeResult.versionOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Version, OS.Types.Text);
jsNodeResult.manufacturerOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Manufacturer, OS.Types.Text);
jsNodeResult.isVirtualOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.IsVirtual, OS.Types.Boolean);
jsNodeResult.serialOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Serial, OS.Types.Text);
return jsNodeResult;
}, {}, {});
// Execute Action: AccessTokenPassword
model.flush();
return WTF_MBPController.default.accessTokenPassword$Action(model.variables.usernameVar, model.variables.passwordVar, cordova_GetPlatformVar.value.platformOut, getDeviceInformationJSResult.value.uUIDOut, callContext).then(function (value) {
accessTokenPasswordVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((accessTokenPasswordVar.value.successOut)) {
// SetIsErrorVisible
// IsErrorVisible = False
model.variables.isErrorVisibleVar = false;
// Execute Action: NOSID_RegisterOrLogin_Closed
return controller._nOSID_RegisterOrLogin_Closed$Action(accessTokenPasswordVar.value.accessTokenInfoOut, callContext).then(function () {
// IsLoading
// IsLoading = False
model.variables.isLoadingVar = false;
});
} else {
// SetIsErrorVisible
// IsErrorVisible = True
model.variables.isErrorVisibleVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("ClienteNOS_Login.DoLogin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// SetIsErrorVisible
// IsErrorVisible = True
model.variables.isErrorVisibleVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.ClienteNOS_Login.DoLogin$getDeviceInformationJSResult", [{
name: "CordovaVersion",
attrName: "cordovaVersionOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Model",
attrName: "modelOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Platform",
attrName: "platformOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "UUID",
attrName: "uUIDOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Version",
attrName: "versionOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Manufacturer",
attrName: "manufacturerOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsVirtual",
attrName: "isVirtualOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Serial",
attrName: "serialOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
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

Controller.prototype.onBackClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onBackClick$Action, callContext);

};
Controller.prototype.togglePassword$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._togglePassword$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.nOSID_RegisterOrLogin_Closed$Action = function (accessTokenInfoIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_RegisterOrLogin_Closed$Action, callContext, accessTokenInfoIn);

};
Controller.prototype.forgotUsername$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._forgotUsername$Action, callContext);

};
Controller.prototype.toggleKeyboardVar$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleKeyboardVar$Action, callContext);

};
Controller.prototype.forgotPassword$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._forgotPassword$Action, callContext);

};
Controller.prototype.doLogin$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._doLogin$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

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
define("WTF_MOB.LoginFlow.ClienteNOS_Login.mvc$controller.DoLogin.GetDeviceInformationJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
//Verify If is available
document.addEventListener("deviceready", onDeviceReady, false);

// Function to Get Device Information
function onDeviceReady() {
   
    $parameters.CordovaVersion = device.cordova;
    $parameters.Model = device.model;
    $parameters.Platform = device.platform;
    $parameters.UUID = device.uuid;
    $parameters.Version = device.version;
    $parameters.Manufacturer = device.manufacturer;
    $parameters.IsVirtual = device.isVirtual;
    $parameters.Serial =  device.serial;

}
};
});

