define("WTF_MOB.ZonaFlow.WTF_Home_WithoutLogin.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "WTF_MOB.Common.HeaderWithoutLoginOrOffline.mvc$model", "BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MBP.controller$GetUserMSISDN", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl1_mvcModel, WTF_MOB_Common_HeaderWithoutLoginOrOffline_mvcModel, BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvcModel, WTF_MOB_Common_BottomBar_mvcModel) {
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
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationName", "applicationNameVar", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PageCode", "pageCodeVar", "PageCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CacheValidationInterval", "cacheValidationIntervalVar", "CacheValidationInterval", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("AssociationID", "associationIDVar", "AssociationID", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Tariff", "tariffVar", "Tariff", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoadingFinished", "isLoadingFinishedVar", "IsLoadingFinished", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Msisdn", "msisdnVar", "Msisdn", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsUserNotRegistered", "isUserNotRegisteredVar", "IsUserNotRegistered", true, OS.Types.Boolean, function () {
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderWithoutLoginOrOffline_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.ZonaFlow.WTF_Home_WithoutLogin.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_Home_WithoutLogin.mvc$model", "WTF_MOB.ZonaFlow.WTF_Home_WithoutLogin.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderWithoutLoginOrOffline.mvc$view", "BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MBP.controller$GetUserMSISDN", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_ZonaFlow_WTF_Home_WithoutLogin_mvc_model, WTF_MOB_ZonaFlow_WTF_Home_WithoutLogin_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, WTF_MOB_Common_HeaderWithoutLoginOrOffline_mvc_view, BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_view, WTF_MOB_Common_BottomBar_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_Home_WithoutLogin";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_Home_WithoutLogin.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, WTF_MOB_Common_HeaderWithoutLoginOrOffline_mvc_view, BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_view, WTF_MOB_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Home_WithoutLogin_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Home_WithoutLogin_mvc_controller;
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
PageTitle: "Zona sem login",
ScreenName: "WTF_Home_WithoutLogin",
WithoutLogin: true,
PageSection: "Zona",
IsOfflineMode: false,
PageType: "Operação",
ContentClass: "b-transparent"
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
header: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_HeaderWithoutLoginOrOffline_mvc_view, {
inputs: {
IsOffline: false,
HasConnection: true
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
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_view, {
inputs: {
IconArrowRight: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
BalanceTitleCustomStyleClass: "h3 -medium mb-4",
MasterBalanceCardTitleCustomStyleClass: "h3 c-white -bold -inline -ellipsis",
ChartBackgroundColor: "#fddc2e",
TwoGraphCustomStyleClass: "-purpleGradient -fowardSlash",
BalanceCustomClass: "-communication",
ChartBorderMarkerBackgroundColor: "#6f2a7f",
MasterBalanceCardShortLabelCustomStyleClass: "a-textRead -bold c-white -uppercase  -fowardSlash -ellipsis",
ChartMarkerTriangleColor: "#6f2a7f",
BalanceValueCustomStyleClass: "a-textBigBold -black",
MasterBalanceSpentValueCustomStyleClass: "a-textRead mt-2 c-lightBlueGrey",
CellPhoneTariff: model.variables.tariffVar,
TwoGraphAvailableValueCustomStyleClass: "a-textRead c-yellow -ellipsis",
MasterBalanceCardStyleClass: "-purpleGradient -fowardSlash",
CacheValidationInterval: model.variables.cacheValidationIntervalVar,
CellPhoneNumber: model.variables.msisdnVar,
MasterBalanceAvailableValueCustomStyleClass: "a-textRead -bold mt-2 c-yellow",
PageCode: model.variables.pageCodeVar,
AssociationID: model.variables.associationIDVar,
TwoGraphAvailableTitleCustomStyleClass: "a-textRead -bold c-white -ellipsis -fowardSlash",
Application: model.variables.applicationNameVar,
IsReadyToRun: true,
BalanceMessageCustomStyleClass: "a-textRead -italic",
RefreshToken: model.variables.refreshTokenVar,
MasterBalanceAvailableTitleCustomStyleClass: "a-textRead -bullet -medium c-yellow",
IconCustomStyleClass: "c-white",
MasterBalanceSpentTitleCustomStyleClass: "a-textRead -bullet -medium c-lightBlueGrey"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
cardInternetClickBalanceEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardClickBalanceEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
cardInternetNameClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardInternetNameClickEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
cardChargeClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardChargeClickEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
loadingFinished$Action: function (balanceValueOutIn, balanceMessageOutIn, successIn, balancesLengthIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.loadingFinished$Action(controller.callContext(eventHandlerContext));
});
;
},
twoGraphCardClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.twoGraphCardClickEvent$Action(controller.callContext(eventHandlerContext));
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "register-div",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-yellow pa-16 mh-16 text-center",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "ipxKf7mrIUaVCZMvDuVKWg"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-strongPink -bold",
value: "Bem-vindo à tua Zona",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "tHxABexqBEikPbEFyE4BXQ"
},
gridProperties: {
classes: "OSFillParent"
},
style: "pb-8 h3 -bold c-blue",
value: "Aqui poderás consultar o teu saldo e os teus Gigas",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-warmPurple pa-16 mh-16 text-center",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: !(model.variables.isUserNotRegisteredVar),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "M0YD_dH5ZkuypUZhfy5F2g"
},
gridProperties: {
classes: "OSFillParent"
},
style: "h2 c-white",
value: "Ainda não és",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "s1oJQ_N2BkGyM_xVCpAfuQ"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.logo.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "cs99NQ2MjkueEe7jatfzaA"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "h1 c-white",
value: "?",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "3EnI0yiSAUKDNXhmVOZJ4A"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-yellow pt-16",
value: model.getCachedValue(idService.getId("3EnI0yiSAUKDNXhmVOZJ4A.Value"), function () {
return ((model.variables.isUserNotRegisteredVar) ? ("Regista-te com o teu e-mail para teres acesso a todos os benefícios da tua App WTF") : ("Com um tarifário destes podes ir longe"));
}, function () {
return model.variables.isUserNotRegisteredVar;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "m0nG6EFzK02avc0aCri1Ag"
},
style: "special mv-16",
visible: true,
_idProps: {
service: idService,
name: "PrimaryButtonNegative"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pedirCartaoOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -play -large -fullWidth -negative",
visible: true,
_idProps: {
service: idService,
name: "OrderCard"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("ButtonTextPrimary.Value"), function () {
return ((model.variables.isUserNotRegisteredVar) ? ("Registar-me") : ("Pedir cartão"));
}, function () {
return model.variables.isUserNotRegisteredVar;
}),
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "m33RVeiE+kWsBUnQfjFFKw"
},
style: "b-blue pt-16 pb-8 ph-8 mh-16 text-center",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.sqp.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "pCApe9IC_EqRPnoPpYRsVg"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.scratch_premios_group_yellow.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
Page: "Selfcare",
DemoAppWithoutLogin: true,
IsOffline: false
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
uuid: "20",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isUserNotRegisteredVar), asPrimitiveValue(model.variables.refreshTokenVar), asPrimitiveValue(model.variables.applicationNameVar), asPrimitiveValue(model.variables.associationIDVar), asPrimitiveValue(model.variables.pageCodeVar), asPrimitiveValue(model.variables.msisdnVar), asPrimitiveValue(model.variables.cacheValidationIntervalVar), asPrimitiveValue(model.variables.tariffVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_Home_WithoutLogin.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MBP.controller$GetUserMSISDN", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
Controller.prototype._cardChargeClickEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CardChargeClickEvent");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Carregar saldo", 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("WTF_Home_WithoutLogin.CardChargeClickEvent", OS.Exceptions.getMessage(ex), ex.name);
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
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var eXTERNAL_URL_SITEWTF_PEDIRCARTAOVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona sem login", ((model.variables.isUserNotRegisteredVar) ? ("Registar-me") : ("Pedir cartão")), 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.isUserNotRegisteredVar)) {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: EXTERNAL_URL_SITEWTF_PEDIRCARTAO
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_SITEWTF_PEDIRCARTAO", callContext).then(function (value) {
eXTERNAL_URL_SITEWTF_PEDIRCARTAOVar.value = value;
}).then(function () {
// Execute Action: OpenExternalURL
model.flush();
return WTF_MOBController.default.openExternalURL$Action(eXTERNAL_URL_SITEWTF_PEDIRCARTAOVar.value.valueOut, true, "", WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, callContext);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home_WithoutLogin.PedirCartaoOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._loadingFinished$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LoadingFinished");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
}).catch(function (ex) {
OS.Logger.trace("WTF_Home_WithoutLogin.LoadingFinished", OS.Exceptions.getMessage(ex), ex.name);
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
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getPageCodeVar = new OS.DataTypes.VariableHolder();
var getBalanceConfigs_MBPVar = new OS.DataTypes.VariableHolder();
var getApplicationName_MBPVar = new OS.DataTypes.VariableHolder();
var getCacheValidationIntervalVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatus2Var = new OS.DataTypes.VariableHolder();
var getUserMSISDNVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOES2Var = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Zona sem login"
model.variables.analyticsAuxVarVar.traceNameAttr = "Zona sem login";
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: VerifyNetworkStatus2
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatus2Var.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((verifyNetworkStatus2Var.value.isOnlineOut)) {
// Aggregate: GetLocalACCESSTOKENINFOES2
var getLocalACCESSTOKENINFOES2Aggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3";
} else {
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_ACCESS_TOKEN_INFO\" \"ENLocal_ACCESS_TOKEN_INFO\"";
orderBySql += " ORDER BY \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ACCESS_TOKEN_INFOAttr",
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
return getLocalACCESSTOKENINFOES2Var.value;
});
};
return getLocalACCESSTOKENINFOES2Aggr().then(function () {
// not IsUserRegistered?
return OS.Flow.executeSequence(function () {
if(((!(getLocalACCESSTOKENINFOES2Var.value.listOut.isEmpty) && !(getLocalACCESSTOKENINFOES2Var.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.isUserRegisteredAttr)))) {
// SetRefreshToken
// RefreshToken = GetLocalACCESSTOKENINFOES2.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = getLocalACCESSTOKENINFOES2Var.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
// IsUserNotRegistered = True
model.variables.isUserNotRegisteredVar = true;
// Execute Action: GetUserMSISDN
model.flush();
return WTF_MBPController.default.getUserMSISDN$Action(model.variables.refreshTokenVar, callContext).then(function (value) {
getUserMSISDNVar.value = value;
}).then(function () {
// SetMSISDN
// Msisdn = GetUserMSISDN.MSISDN
model.variables.msisdnVar = getUserMSISDNVar.value.mSISDNOut;
// Tariff = GetUserMSISDN.Tariff
model.variables.tariffVar = getUserMSISDNVar.value.tariffOut;
// IsUserNotRegistered = GetUserMSISDN.IsWtf
model.variables.isUserNotRegisteredVar = getUserMSISDNVar.value.isWtfOut;
// Execute Action: GetBalanceConfigs_MBP
model.flush();
return BALANCE_MBPController.default.getBalanceConfigs_MBP$Action(model.variables.applicationNameVar, model.variables.cacheValidationIntervalVar, model.variables.refreshTokenVar, callContext).then(function (value) {
getBalanceConfigs_MBPVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getBalanceConfigs_MBPVar.value.successOut)) {
// Execute Action: GetPageCode
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("LANDING_PAGE_CODE", callContext).then(function (value) {
getPageCodeVar.value = value;
}).then(function () {
// PageCode = GetPageCode.Value
model.variables.pageCodeVar = getPageCodeVar.value.valueOut;
// Execute Action: GetApplicationName_MBP
model.flush();
return WTF_MBPController.default.getApplicationName_MBP$Action(callContext).then(function (value) {
getApplicationName_MBPVar.value = value;
});
}).then(function () {
// SetApplicationName
// ApplicationName = GetApplicationName_MBP.Value
model.variables.applicationNameVar = getApplicationName_MBPVar.value.valueOut;
// Execute Action: GetCacheValidationInterval
model.flush();
return WTF_MBPController.default.getCacheValidationInterval$Action(callContext).then(function (value) {
getCacheValidationIntervalVar.value = value;
});
}).then(function () {
// SetCacheValidationInterval
// CacheValidationInterval = TextToInteger
model.variables.cacheValidationIntervalVar = OS.BuiltinFunctions.textToInteger((getCacheValidationIntervalVar.value.valueOut).toString());
});
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
}

});
});
}

});
}).then(function () {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
});
} else {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home_WithoutLogin.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
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
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._cardInternetNameClickEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CardInternetNameClickEvent");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Consumos", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Consumptions
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Consumptions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home_WithoutLogin.CardInternetNameClickEvent", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._twoGraphCardClickEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TwoGraphCardClickEvent");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Consumos", 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("WTF_Home_WithoutLogin.TwoGraphCardClickEvent", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._cardClickBalanceEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CardClickBalanceEvent");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Consumos", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Consumptions
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Consumptions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home_WithoutLogin.CardClickBalanceEvent", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.cardChargeClickEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardChargeClickEvent$Action, callContext);

};
Controller.prototype.pedirCartaoOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pedirCartaoOnClick$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.loadingFinished$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loadingFinished$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.cardInternetNameClickEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardInternetNameClickEvent$Action, callContext);

};
Controller.prototype.twoGraphCardClickEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._twoGraphCardClickEvent$Action, callContext);

};
Controller.prototype.cardClickBalanceEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardClickBalanceEvent$Action, callContext);

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
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_ZonaFlowController.default.handleError(ex, this.callContext());
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

