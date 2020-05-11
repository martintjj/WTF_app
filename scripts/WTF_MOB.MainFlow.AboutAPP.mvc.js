define("WTF_MOB.MainFlow.AboutAPP.mvc$model", ["OutSystems", "WTF_MOB.model", "CommonPlugin.model", "BuildInfoPlugin.controller", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.controller", "AppStoreLauncherPlugin.controller", "MobileUIWidgets.controller", "WTF_MOB.Common.Layout_Lvl3.mvc$model", "WTF_MOB.Common.HeaderLvl3.mvc$model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "WTF_MOB.referencesHealth$BuildInfoPlugin", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_IdentifierRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$GetAppIdentifiers", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "AppStoreLauncherPlugin.controller$OpenMobileAppStore", "WTF_MOB.referencesHealth$AppStoreLauncherPlugin", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, CommonPluginModel, BuildInfoPluginController, WTF_MOBController, WTF_BPModel, WTF_MBPController, AppStoreLauncherPluginController, MobileUIWidgetsController, WTF_MOB_Common_Layout_Lvl3_mvcModel, WTF_MOB_Common_HeaderLvl3_mvcModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Version", "versionVar", "Version", true, OS.Types.Text, function () {
return "";
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_Layout_Lvl3_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl3_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.MainFlow.AboutAPP.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "WTF_BP.model", "WTF_MBP.controller", "AppStoreLauncherPlugin.controller", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.MainFlow.AboutAPP.mvc$model", "WTF_MOB.MainFlow.AboutAPP.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "WTF_MOB.referencesHealth$BuildInfoPlugin", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_IdentifierRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$GetAppIdentifiers", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "AppStoreLauncherPlugin.controller$OpenMobileAppStore", "WTF_MOB.referencesHealth$AppStoreLauncherPlugin", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, CommonPluginModel, BuildInfoPluginController, WTF_BPModel, WTF_MBPController, AppStoreLauncherPluginController, MobileUIWidgetsController, React, OSView, WTF_MOB_MainFlow_AboutAPP_mvc_model, WTF_MOB_MainFlow_AboutAPP_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view) {
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
        View.displayName = "MainFlow.AboutAPP";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.MainFlow.AboutAPP.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_MainFlow_AboutAPP_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_MainFlow_AboutAPP_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl3_mvc_view, {
inputs: {
PageSection: "Mais",
ContentClass: "b-transparent",
withoutLogin: false,
PageType: "Consulta",
PageTitle: "Mais sobre a app",
ScreenName: "AboutAPP"
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
return [React.createElement(WTF_MOB_Common_HeaderLvl3_mvc_view, {
inputs: {
Title: "Sobre esta App"
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24 ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "mb-2 -paddingBig text-center b-white",
HasLeftSide: false,
HasRightSide: false
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
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Center*/ 2,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.wtf_logo.png"),
style: "mt-8 mb-16 a-aboutAppImgNew",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-warmPurple mb-16",
value: ("V." + model.variables.versionVar),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-strongPink -small",
value: "Copyright © NOS 2019",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.versionVar)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRipple: true,
HasLeftSide: false,
RightStyleClass: "text-right -vCenter",
StyleClass: "b-warmPurple",
HasRightSide: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goTo$Action("store", controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "10",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "CLASSIFICAR ESTA APP",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Avalia esta app na Store",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-white -inline",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall
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
uuid: "14",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "b-warmPurple",
RightStyleClass: "text-right -vCenter",
HasRipple: true,
HasRightSide: true,
HasLeftSide: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goTo$Action("terms", controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "16",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "TERMOS E CONDIÇÕES",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Consulta os termos e condições",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-white -inline",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.versionVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.MainFlow.AboutAPP.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "WTF_BP.model", "WTF_MBP.controller", "AppStoreLauncherPlugin.controller", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.MainFlow.controller", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "WTF_MOB.referencesHealth$BuildInfoPlugin", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_IdentifierRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$GetAppIdentifiers", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "AppStoreLauncherPlugin.controller$OpenMobileAppStore", "WTF_MOB.referencesHealth$AppStoreLauncherPlugin", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, CommonPluginModel, BuildInfoPluginController, WTF_BPModel, WTF_MBPController, AppStoreLauncherPluginController, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_MainFlowController) {
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
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getBuildInfoVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Sobre esta App"
model.variables.analyticsAuxVarVar.traceNameAttr = "Sobre esta App";
// AnalyticsAuxVar.Category = "Mais"
model.variables.analyticsAuxVarVar.categoryAttr = "Mais";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: GetBuildInfo
getBuildInfoVar.value = BuildInfoPluginController.default.getBuildInfo$Action(callContext);

// Version = GetBuildInfo.Version
model.variables.versionVar = getBuildInfoVar.value.versionOut;
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("AboutAPP.OnReady", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace3
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
Controller.prototype._goTo$Action = function (labelIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoTo");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.MainFlow.AboutAPP.GoTo$vars"))());
vars.value.labelInLocal = labelIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAppIdentifiersVar = new OS.DataTypes.VariableHolder();
var openMobileAppStoreVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((vars.value.labelInLocal === "terms"))) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Sobre esta App", "Termos e Condições", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/TermsAndConditionsApp
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/TermsAndConditionsApp", {
FromAboutApp: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
} else {
// Execute Action: GetAppIdentifiers
model.flush();
return WTF_MBPController.default.getAppIdentifiers$Action(callContext).then(function (value) {
getAppIdentifiersVar.value = value;
}).then(function () {
// App_Identifier = GetAppIdentifiers.App_Identifier
vars.value.app_IdentifierVar = getAppIdentifiersVar.value.app_IdentifierOut;
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Sobre esta App", "Classificar esta App", 0, "", callContext);
}).then(function () {
// Execute Action: OpenMobileAppStore
model.flush();
return AppStoreLauncherPluginController.default.openMobileAppStore$Action(vars.value.app_IdentifierVar.androidAttr, vars.value.app_IdentifierVar.iosAttr, "", callContext).then(function (value) {
openMobileAppStoreVar.value = value;
});
}).then(function () {
// Success
if((!(openMobileAppStoreVar.value.successOut))) {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(openMobileAppStoreVar.value.errorMessageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("AboutAPP.GoTo", OS.Exceptions.getMessage(ex), ex.name);
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.MainFlow.AboutAPP.GoTo$vars", [{
name: "label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "App_Identifier",
attrName: "app_IdentifierVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_BPModel.App_IdentifierRec();
},
complexType: WTF_BPModel.App_IdentifierRec
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

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.goTo$Action = function (labelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goTo$Action, callContext, labelIn);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_MainFlowController.default.handleError(ex, this.callContext());
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

