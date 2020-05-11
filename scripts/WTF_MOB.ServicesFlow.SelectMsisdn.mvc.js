define("WTF_MOB.ServicesFlow.SelectMsisdn.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "NOSCordovaPlugin.controller", "BALANCE_MBP.controller", "WTF_BP.model", "WTF_MOB.Common.Layout_Lvl3.mvc$model", "WTF_MOB.Common.HeaderLvl3.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.LoginFlow.NOSID_Logout.mvc$model", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$model", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$setActivityLog_ClickAddServices", "WTF_MOB.controller$Logout", "WTF_MOB.controller$OpenNOSPlugin", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$ValidateUserSession", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_ServiceChanged", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "WTF_MOB.referencesHealth$NOSCordovaPlugin", "WTF_MOB.model$STR_ASSOCIATION_TERMSList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.entities", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$DeleteAll_BALANCENEXTCHARGEDETAIL_Logic", "WTF_MBP.controller$WhatsNew_CheckUser", "WTF_BP.model$STR_ASSOCIATION_TERMSRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ASSOCIATIONRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, NOSCordovaPluginController, BALANCE_MBPController, WTF_BPModel, WTF_MOB_Common_Layout_Lvl3_mvcModel, WTF_MOB_Common_HeaderLvl3_mvcModel, WTF_MOB_Common_Waiting_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_LoginFlow_NOSID_Logout_mvcModel, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel) {
var OS = OutSystems.Internal;
var GetAccessTokenInfoAggrRec = (function (_super) {
__extends(GetAccessTokenInfoAggrRec, _super);
function GetAccessTokenInfoAggrRec(defaults) {
_super.apply(this, arguments);
}
GetAccessTokenInfoAggrRec.RecordListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
GetAccessTokenInfoAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetAccessTokenInfoAggrRec.init();
return GetAccessTokenInfoAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("App_UserAssociations", "app_UserAssociationsVar", "App_UserAssociations", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_UserAssociationsList());
}, WTF_MOBModel.App_UserAssociationsList), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("IsNOSPluginAvailable", "isNOSPluginAvailableVar", "IsNOSPluginAvailable", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("SelectedMSISDN", "selectedMSISDNVar", "SelectedMSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("SelectedTariff", "selectedTariffVar", "SelectedTariff", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ShowSelectedMSISDN", "showSelectedMSISDNVar", "ShowSelectedMSISDN", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ListAssociationTerms", "listAssociationTermsVar", "ListAssociationTerms", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.STR_ASSOCIATION_TERMSList());
}, WTF_MOBModel.STR_ASSOCIATION_TERMSList), 
this.attr("TempAssociationTerms", "tempAssociationTermsVar", "TempAssociationTerms", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.STR_ASSOCIATION_TERMSRec());
}, WTF_BPModel.STR_ASSOCIATION_TERMSRec), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("afterSelected", "afterSelectedVar", "afterSelected", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("isAfterLogin", "isAfterLoginIn", "isAfterLogin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isAfterLoginInDataFetchStatus", "_isAfterLoginInDataFetchStatus", "_isAfterLoginInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("NeedsToUpdateTerms", "needsToUpdateTermsIn", "NeedsToUpdateTerms", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_needsToUpdateTermsInDataFetchStatus", "_needsToUpdateTermsInDataFetchStatus", "_needsToUpdateTermsInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetAccessTokenInfo", "getAccessTokenInfoAggr", "getAccessTokenInfoAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetAccessTokenInfoAggrRec());
}, GetAccessTokenInfoAggrRec)
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
Model._hasValidationWidgetsValue = (((((WTF_MOB_Common_Layout_Lvl3_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl3_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || WTF_MOB_LoginFlow_NOSID_Logout_mvcModel.hasValidationWidgets) || NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("isAfterLogin" in inputs) {
this.variables.isAfterLoginIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.isAfterLogin, OS.Types.Boolean);
}

if("NeedsToUpdateTerms" in inputs) {
this.variables.needsToUpdateTermsIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.NeedsToUpdateTerms, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ServicesFlow.SelectMsisdn.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "NOSCordovaPlugin.controller", "BALANCE_MBP.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.ServicesFlow.SelectMsisdn.mvc$model", "WTF_MOB.ServicesFlow.SelectMsisdn.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.LoginFlow.NOSID_Logout.mvc$view", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$view", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$setActivityLog_ClickAddServices", "WTF_MOB.controller$Logout", "WTF_MOB.controller$OpenNOSPlugin", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$ValidateUserSession", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_ServiceChanged", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "WTF_MOB.referencesHealth$NOSCordovaPlugin", "WTF_MOB.model$STR_ASSOCIATION_TERMSList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.entities", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$DeleteAll_BALANCENEXTCHARGEDETAIL_Logic", "WTF_MBP.controller$WhatsNew_CheckUser", "WTF_BP.model$STR_ASSOCIATION_TERMSRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ASSOCIATIONRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, NOSCordovaPluginController, BALANCE_MBPController, WTF_BPModel, React, OSView, WTF_MOB_ServicesFlow_SelectMsisdn_mvc_model, WTF_MOB_ServicesFlow_SelectMsisdn_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_LoginFlow_NOSID_Logout_mvc_view, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view) {
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
        View.displayName = "ServicesFlow.SelectMsisdn";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ServicesFlow.SelectMsisdn.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/WTF_MOB.BackButtonNull.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_LoginFlow_NOSID_Logout_mvc_view, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ServicesFlow_SelectMsisdn_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ServicesFlow_SelectMsisdn_mvc_controller;
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
PageSection: "Perfil",
PageType: "Operação",
ScreenName: "SelectMsisdn",
withoutLogin: false,
PageTitle: "Mudar serviço",
ContentClass: "b-warmpurple"
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
Title: model.getCachedValue(idService.getId("RwlhZfkCbU2FFbK_SgKjmg.Title"), function () {
return ((model.variables.isAfterLoginIn) ? ("Seleciona um serviço WTF") : ("Muda o serviço WTF"));
}, function () {
return model.variables.isAfterLoginIn;
}),
ShowBack: model.getCachedValue(idService.getId("RwlhZfkCbU2FFbK_SgKjmg.ShowBack"), function () {
return ((model.variables.isAfterLoginIn) ? (false) : (true));
}, function () {
return model.variables.isAfterLoginIn;
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
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
uuid: "2",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pv-16  ph-16",
visible: true,
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: !(model.variables.isLoadingVar),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-16",
visible: model.variables.showSelectedMSISDNVar,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-yellow -bold",
value: "WTF selecionado",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCard -communication b-white",
visible: model.variables.showSelectedMSISDNVar,
_idProps: {
service: idService,
name: "MSISDNSelected"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master text-center",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "OqY968oYbk2tGrvqHgkOZg"
},
visible: true,
_idProps: {
service: idService,
name: "CenterContent2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h2 -bold c-strongPink",
value: model.variables.selectedMSISDNVar,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "z0x0Hfazmk2lyNVAvjXtWw"
},
visible: true,
_idProps: {
service: idService,
name: "Description3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardDesc c-strongPink",
value: model.variables.selectedTariffVar,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-right",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "a-icon c-strongPink",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconCheck,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small
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
uuid: "15",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: !(model.variables.isAfterLoginIn),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-yellow -bold",
value: "Podes selecionar outro WTF",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"data-style-key": "TU6+WxNfyEaJUg4CCwwkOg"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.app_UserAssociationsVar,
style: "list list-group -noBgd",
tag: "div",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.getAssociation$Action(model.variables.app_UserAssociationsVar.getCurrent(callContext.iterationContext).associationIdAttr, model.variables.app_UserAssociationsVar.getCurrent(callContext.iterationContext).msisdnAttr, controller.callContext(eventHandlerContext));
});
;
}
},
style: "a-flexCard -communication b-white mb-8",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables.app_UserAssociationsVar.getCurrent(callContext.iterationContext).app_TmcodeAttr.descAttr), asPrimitiveValue(model.variables.app_UserAssociationsVar.getCurrent(callContext.iterationContext).msisdnAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master text-center",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "UDN656Rs0kKLDPPR_nrzaA"
},
visible: true,
_idProps: {
service: idService,
name: "CenterContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h2 -bold c-gray7",
value: model.variables.app_UserAssociationsVar.getCurrent(callContext.iterationContext).msisdnAttr,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "2hMnRJqbY0OpeqCU1Errow"
},
visible: true,
_idProps: {
service: idService,
name: "Description"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardDesc c-gray6",
value: model.variables.app_UserAssociationsVar.getCurrent(callContext.iterationContext).app_TmcodeAttr.descAttr,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-right",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
StyleClass: "a-icon c-warmPurple",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small
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
uuid: "28",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
}, callContext, idService, "1")
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.associarServicosOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "a-flexCard -communication b-strongPink",
visible: true,
_idProps: {
service: idService,
name: "AssociarServicos"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master text-center",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "+DFOoCq2706+9oztRQFjYQ"
},
visible: true,
_idProps: {
service: idService,
name: "RegistarCartao"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "Registar cartão WTF",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "4xhOF+5HTk2+_WlZ86iJmw"
},
visible: true,
_idProps: {
service: idService,
name: "Description2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "fmC9BbbhHUyOnXY7qjqKwg"
},
style: "a-flexCardDesc c-white",
value: "Tens um cartão WTF que não está a aparecer? Experimenta registá-lo aqui (escolhe a opção Telemóvel) ",
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-right",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "a-icon c-white",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
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
uuid: "37",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "bukCAqXhxkytNf9JsR6QAQ"
},
style: " pa-16",
visible: true,
_idProps: {
service: idService,
name: "UnderlinedLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isAfterLoginIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_LoginFlow_NOSID_Logout_mvc_view, {
inputs: {
StyleClass: "a-link -purple -bold"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
setLoading$Action: function (evt_IsLoadingIn) {
var eventHandlerContext = callContext.clone();
controller.nOSID_LogoutSetLoading$Action(evt_IsLoadingIn, controller.callContext(eventHandlerContext));

;
},
logout_Close$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Logout_Close$Action(controller.callContext(eventHandlerContext));
});
;
},
logoutError$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_LogoutError$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "40",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
})))), $if(model.variables.isNOSPluginAvailableVar, false, this, function () {
return [React.createElement(NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onLoginSuccess$Action: function (urlIn, browserIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.doNothing$Action(controller.callContext(eventHandlerContext));
});
;
},
onSuccess$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnSuccess$Action(controller.callContext(eventHandlerContext));
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
uuid: "41",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isNOSPluginAvailableVar), asPrimitiveValue(model.variables.app_UserAssociationsVar), asPrimitiveValue(model.variables.selectedTariffVar), asPrimitiveValue(model.variables.selectedMSISDNVar), asPrimitiveValue(model.variables.showSelectedMSISDNVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.isAfterLoginIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ServicesFlow.SelectMsisdn.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "NOSCordovaPlugin.controller", "BALANCE_MBP.controller", "WTF_BP.model", "WTF_MOB.languageResources", "WTF_MOB.ServicesFlow.controller", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$setActivityLog_ClickAddServices", "WTF_MOB.controller$Logout", "WTF_MOB.controller$OpenNOSPlugin", "WTF_MOB.controller$Analytics_SendEvent", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$ValidateUserSession", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$setActivityLog_ServiceChanged", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "WTF_MOB.referencesHealth$NOSCordovaPlugin", "WTF_MOB.model$STR_ASSOCIATION_TERMSList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.entities", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$DeleteAll_BALANCENEXTCHARGEDETAIL_Logic", "WTF_MBP.controller$WhatsNew_CheckUser", "WTF_BP.model$STR_ASSOCIATION_TERMSRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ASSOCIATIONRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, NOSCordovaPluginController, BALANCE_MBPController, WTF_BPModel, WTF_MOBLanguageResources, WTF_MOB_ServicesFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.setTermsAndConditions$ServerAction = function (associationTermsListIn, refreshTokenIn, callContext) {
var controller = this.controller;
var inputs = {
AssociationTermsList: associationTermsListIn.toJS(),
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text)
};
return controller.callServerAction("SetTermsAndConditions", "screenservices/WTF_MOB/ServicesFlow/SelectMsisdn/ActionSetTermsAndConditions", "ba30MKzkStsvi6QjEMWQ+Q", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn$rssespacewtf_bp_ActionSetTermsAndConditions"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.messageOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Message, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn$rssespacewtf_bp_ActionSetTermsAndConditions", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

// Aggregates and Data Actions
Controller.prototype.getAccessTokenInfo$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

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
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
} else {
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_ACCESS_TOKEN_INFO\" \"ENLocal_ACCESS_TOKEN_INFO\"";
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
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getAccessTokenInfoAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getAccessTokenInfo$AggrRefresh"];
// Client Actions
Controller.prototype._doNothing$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DoNothing");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.DoNothing", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._associarServicosOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AssociarServicosOnClick");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTFVar = new OS.DataTypes.VariableHolder();
var getAssociarServicosURLVar = new OS.DataTypes.VariableHolder();
var getAssociarServicosTitleVar = new OS.DataTypes.VariableHolder();
var getServices_Register_Native_IsActiveVar = new OS.DataTypes.VariableHolder();
var getAssociarServicosIsDebugVar = new OS.DataTypes.VariableHolder();
var logoutVar = new OS.DataTypes.VariableHolder();
var openNOSPluginVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Mudar serviço", "Associar serviço", 0, "", callContext).then(function () {
// Execute Action: LogEventFacebookSDK_WTF
logEventFacebookSDK_WTFVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("click_add_services", callContext);

// Execute Action: setActivityLog_ClickAddServices
model.flush();
return WTF_MBPController.default.setActivityLog_ClickAddServices$Action("", callContext);
}).then(function () {
// Execute Action: GetServices_Register_Native_IsActive
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("Services_Register_Native_IsActive", callContext).then(function (value) {
getServices_Register_Native_IsActiveVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.toLower(getServices_Register_Native_IsActiveVar.value.valueOut) === "true"))) {
// Destination: /WTF_MOB/Services_RegisterPhone
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Services_RegisterPhone", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((model.variables.isNOSPluginAvailableVar)) {
// Execute Action: GetAssociarServicosURL
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_AssociarServicos", callContext).then(function (value) {
getAssociarServicosURLVar.value = value;
}).then(function () {
// Execute Action: GetAssociarServicosTitle
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_AssociarServicos_Title", callContext).then(function (value) {
getAssociarServicosTitleVar.value = value;
});
}).then(function () {
// Execute Action: GetAssociarServicosIsDebug
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_AssociarServicos_IsDebug", callContext).then(function (value) {
getAssociarServicosIsDebugVar.value = value;
});
}).then(function () {
// Execute Action: OpenNOSPlugin
model.flush();
return WTF_MOBController.default.openNOSPlugin$Action(getAssociarServicosTitleVar.value.valueOut, getAssociarServicosURLVar.value.valueOut, (((OS.BuiltinFunctions.toLower(getAssociarServicosIsDebugVar.value.valueOut) === "true")) ? (true) : (false)), true, WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, false, callContext).then(function (value) {
openNOSPluginVar.value = value;
});
}).then(function () {
// SessionExpired?
return OS.Flow.executeSequence(function () {
if((openNOSPluginVar.value.sessionExpiredOut)) {
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
} else {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Serviço não disponível", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.AssociarServicosOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
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
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
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
Controller.prototype._showWebViewListenerOnSuccess$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnSuccess");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getServicesVar = new OS.DataTypes.VariableHolder();
var createUserWtfActiveVar = new OS.DataTypes.VariableHolder();
var getActiveUserWTFVar = new OS.DataTypes.VariableHolder();
var listIndexOfVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: ListClearUserAssociations
OS.SystemActions.listClear(model.variables.app_UserAssociationsVar, callContext);
// Execute Action: GetServices
model.flush();
return WTF_MBPController.default.getServices$Action(true, callContext).then(function (value) {
getServicesVar.value = value;
}).then(function () {
// GetServices.Success?
return OS.Flow.executeSequence(function () {
if((getServicesVar.value.successOut)) {
// EmptyAssociations?
return OS.Flow.executeSequence(function () {
if(((getServicesVar.value.app_UserAssociationsWithServicesOut.length > 0))) {
// OnlyOneAssociation
return OS.Flow.executeSequence(function () {
if(((getServicesVar.value.app_UserAssociationsWithServicesOut.length === 1))) {
// Execute Action: CreateUserWtfActive
model.flush();
return WTF_MBPController.default.getUserAssociationAndCreateUserWtfActive$Action(getServicesVar.value.app_UserAssociationsWithServicesOut.getCurrent(callContext.iterationContext).associationIdAttr, callContext).then(function (value) {
createUserWtfActiveVar.value = value;
}).then(function () {
// AlreadyInUse?
return OS.Flow.executeSequence(function () {
if((createUserWtfActiveVar.value.alreadyInUseOut)) {
// Execute Action: GetActiveUserWTF
model.flush();
return WTF_MBPController.default.getActiveUserWTF$Action(callContext).then(function (value) {
getActiveUserWTFVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/RecoveryMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RecoveryMsisdn", {
Msisdn: (getActiveUserWTFVar.value.userWTFActiveNowOut.msisdnAttr).toString()
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
} else {
// Execute Action: ListAppendAllUserAssociations
OS.SystemActions.listAppendAll(model.variables.app_UserAssociationsVar, getServicesVar.value.app_UserAssociationsWithServicesOut, callContext);
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.app_UserAssociationsVar, function (p) {
return (p.msisdnAttr === model.variables.selectedMSISDNVar);
}, callContext);

// SelectedMSISDN Found?
if(((listIndexOfVar.value.positionOut >= 0))) {
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.app_UserAssociationsVar, listIndexOfVar.value.positionOut, callContext);
}

// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Serviço associado com sucesso!", 1, true, "icon-message_success level3", true, false, 10000, "", "-large", callContext);
}

});
} else {
// Destination: /WTF_MOB/ProtectionScreen
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ProtectionScreen", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
} else {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.ShowWebViewListenerOnSuccess", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
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
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
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
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._nOSID_Logout_Close$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Logout_Close");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var logoutVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.NOSID_Logout_Close", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
// afterSelected = False
model.variables.afterSelectedVar = false;
};
Controller.prototype._nOSID_LogoutError$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_LogoutError");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.NOSID_LogoutError", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._nOSID_LogoutSetLoading$Action = function (evt_IsLoadingIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_LogoutSetLoading");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn.NOSID_LogoutSetLoading$vars"))());
vars.value.evt_IsLoadingInLocal = evt_IsLoadingIn;
// IsLoading = Evt_IsLoading
model.variables.isLoadingVar = vars.value.evt_IsLoadingInLocal;
};
Controller.registerVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn.NOSID_LogoutSetLoading$vars", [{
name: "Evt_IsLoading",
attrName: "evt_IsLoadingInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
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
Controller.prototype._showWebViewListenerOnError$Action = function (errorIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn.ShowWebViewListenerOnError$vars"))());
vars.value.errorInLocal = errorIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validateUserSessionVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(("Error:" + vars.value.errorInLocal), "PluginHandler", callContext);
return OS.Flow.executeSequence(function () {
if((((vars.value.errorInLocal === "0") || (vars.value.errorInLocal === "")))) {
// IsLoading = False
model.variables.isLoadingVar = false;
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.errorInLocal === "401")) {
// Execute Action: ValidateUserSession
model.flush();
return WTF_MOBController.default.validateUserSession$Action(false, callContext).then(function (value) {
validateUserSessionVar.value = value;
}).then(function () {
if((!(validateUserSessionVar.value.isValidOut))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("A sessão expirou. Faça novo login por favor", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

}).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}

});
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.ShowWebViewListenerOnError", OS.Exceptions.getMessage(ex), ex.name);
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
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn.ShowWebViewListenerOnError$vars", [{
name: "Error",
attrName: "errorInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getServicesVar = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTFVar = new OS.DataTypes.VariableHolder();
var checkNOSCordovaPluginVar = new OS.DataTypes.VariableHolder();
var listIndexOfMSISDNVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getUserWTFVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Mudar servico"
model.variables.analyticsAuxVarVar.traceNameAttr = "Mudar servico";
// AnalyticsAuxVar.Category = "Perfil"
model.variables.analyticsAuxVarVar.categoryAttr = "Perfil";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: CheckNOSCordovaPlugin
checkNOSCordovaPluginVar.value = NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action(callContext);

// IsNOSPluginAvailable = CheckNOSCordovaPlugin.IsAvailable
model.variables.isNOSPluginAvailableVar = checkNOSCordovaPluginVar.value.isAvailableOut;
// IsLoading
// IsLoading = True
model.variables.isLoadingVar = true;
// ClearVariables
// SelectedMSISDN = ""
model.variables.selectedMSISDNVar = "";
// ShowSelectedMSISDN = False
model.variables.showSelectedMSISDNVar = false;
// SelectedTariff = ""
model.variables.selectedTariffVar = "";
// Execute Action: ListClearAssociations
OS.SystemActions.listClear(model.variables.app_UserAssociationsVar, callContext);
// Execute Action: ListClearAssociationTerms
OS.SystemActions.listClear(model.variables.listAssociationTermsVar, callContext);
// Execute Action: LogEventFacebookSDK_WTF
logEventFacebookSDK_WTFVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("WTF_service_exchanged", callContext);

// Execute Action: GetServices
model.flush();
return WTF_MBPController.default.getServices$Action(false, callContext).then(function (value) {
getServicesVar.value = value;
});
}).then(function () {
// GetServices.Success?
return OS.Flow.executeSequence(function () {
if((getServicesVar.value.successOut)) {
// EmptyAssociations?
return OS.Flow.executeSequence(function () {
if(((getServicesVar.value.app_UserAssociationsWithServicesOut.length === 0))) {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/Oops
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Oops", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isAfterLoginIn))) {
// Execute Action: setActivityLog_ServiceChanged
model.flush();
return WTF_MBPController.default.setActivityLog_ServiceChanged$Action("", callContext);
}

}).then(function () {
// Aggregate: GetUserWTF
var getUserWTFAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_WTFRecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4";
} else {
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_WTF\" \"ENLocal_USER_WTF\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_WTFRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_WTFAttr",
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
return getUserWTFVar.value;
});
};
return getUserWTFAggr();
}).then(function () {
// GetUserWTF.Empty?
if((!((getUserWTFVar.value.listOut.isEmpty || model.variables.needsToUpdateTermsIn)))) {
// Execute Action: ListIndexOfMSISDN
listIndexOfMSISDNVar.value = OS.SystemActions.listIndexOf(getServicesVar.value.app_UserAssociationsWithServicesOut, function (p) {
return (p.msisdnAttr === (getUserWTFVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr).toString());
}, callContext);

// MSISDN not found?
if((!((listIndexOfMSISDNVar.value.positionOut === -1)))) {
// SetMSISDN
// SelectedTariff = GetServices.App_UserAssociationsWithServices[ListIndexOfMSISDN.Position].App_Tmcode.Desc
model.variables.selectedTariffVar = getServicesVar.value.app_UserAssociationsWithServicesOut.getItem(listIndexOfMSISDNVar.value.positionOut).app_TmcodeAttr.descAttr;
// SelectedMSISDN = GetUserWTF.List.Current.Local_USER_WTF.Msisdn
model.variables.selectedMSISDNVar = (getUserWTFVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr).toString();
// ShowSelectedMSISDN = True
model.variables.showSelectedMSISDNVar = true;
// Execute Action: ListRemove
OS.SystemActions.listRemove(getServicesVar.value.app_UserAssociationsWithServicesOut, listIndexOfMSISDNVar.value.positionOut, callContext);
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.app_UserAssociationsVar, getServicesVar.value.app_UserAssociationsWithServicesOut, callContext);
return OS.Flow.breakAsync();
}

}

// Execute Action: ListAppendAllUserAssociations
OS.SystemActions.listAppendAll(model.variables.app_UserAssociationsVar, getServicesVar.value.app_UserAssociationsWithServicesOut, callContext);
});
}).then(function () {
// IsLoading
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace5
return controller._stopTrace$Action(callContext);
});
}

});
} else {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
// Execute Action: StopTrace
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._getAssociation$Action = function (user_AssociationIdIn, msisdnIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetAssociation");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn.GetAssociation$vars"))());
vars.value.user_AssociationIdInLocal = user_AssociationIdIn;
vars.value.msisdnInLocal = msisdnIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var setTermsAndConditionsVar = new OS.DataTypes.VariableHolder();
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
var createUserWtfActiveVar = new OS.DataTypes.VariableHolder();
var deleteAll_BALANCENEXTCHARGEDETAIL_LogicVar = new OS.DataTypes.VariableHolder();
var whatsNew_CheckUserVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getAssociationsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ASSOCIATIONRecordList))());
var getServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_SERVICERecordList))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.afterSelectedVar))) {
// afterSelected = True
model.variables.afterSelectedVar = true;
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Mudar serviço", "Selecionar", 0, "", callContext).then(function () {
// Execute Action: CreateUserWtfActive
model.flush();
return WTF_MBPController.default.getUserAssociationAndCreateUserWtfActive$Action(vars.value.user_AssociationIdInLocal, callContext).then(function (value) {
createUserWtfActiveVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((createUserWtfActiveVar.value.successOut)) {
// Execute Action: Balance_ClearCache
model.flush();
return BALANCE_MBPController.default.balance_ClearCache$Action(callContext).then(function (value) {
balance_ClearCacheVar.value = value;
}).then(function () {
// Execute Action: DeleteAll_BALANCENEXTCHARGEDETAIL_Logic
model.flush();
return BALANCE_MBPController.default.deleteAll_BALANCENEXTCHARGEDETAIL_Logic$Action(callContext).then(function (value) {
deleteAll_BALANCENEXTCHARGEDETAIL_LogicVar.value = value;
});
}).then(function () {
// AlreadyInUse?
return OS.Flow.executeSequence(function () {
if((createUserWtfActiveVar.value.alreadyInUseOut)) {
// afterSelected = False
model.variables.afterSelectedVar = false;
// Destination: /WTF_MOB/RecoveryMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RecoveryMsisdn", {
Msisdn: vars.value.msisdnInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((model.variables.showSelectedMSISDNVar)) {
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("WTF alterado com sucesso", 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
}

return OS.Flow.executeSequence(function () {
if((model.variables.needsToUpdateTermsIn)) {
// UserAssociations
// Foreach App_UserAssociations
callContext.iterationContext.registerIterationStart(model.variables.app_UserAssociationsVar);
return OS.Flow.tryFinally(function () {
var app_UserAssociationsIterator = callContext.iterationContext.getIterator(model.variables.app_UserAssociationsVar);
var app_UserAssociationsIndexMax = model.variables.app_UserAssociationsVar.length;
var app_UserAssociationsIndex = 0;
return OS.Flow.whileAsync(function () {
return (((app_UserAssociationsIndex < model.variables.app_UserAssociationsVar.length)) && (app_UserAssociationsIndexMax > 0));
}, function () {
app_UserAssociationsIterator.currentRowNumber = app_UserAssociationsIndex;
// Aggregate: GetService
var getServiceAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_SERVICERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstServiceId = model.variables.app_UserAssociationsVar.getItem(app_UserAssociationsIndex.valueOf()).msisdnAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8";
} else {
selectSql += "\"ENLocal_SERVICE\".\"Id\" o0, \"ENLocal_SERVICE\".\"ServiceId\" o1, \"ENLocal_SERVICE\".\"AssociationID\" o2, \"ENLocal_SERVICE\".\"Name\" o3, \"ENLocal_SERVICE\".\"ServiceAccount\" o4, \"ENLocal_SERVICE\".\"UiLabel\" o5, \"ENLocal_SERVICE\".\"Plan\" o6, \"ENLocal_SERVICE\".\"TMCodeID\" o7, \"ENLocal_SERVICE\".\"TMCodeDesc\" o8";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\"";
fromAndWhereSql += " WHERE (\"ENLocal_SERVICE\".\"ServiceId\" = :qpstServiceId)";
argsList.add("qpstServiceId", /*TEXT*/ 0, qpstServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_SERVICERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SERVICEAttr",
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
return getServiceVar.value;
});
};
return getServiceAggr().then(function () {
// GetService.Empty?
return OS.Flow.executeSequence(function () {
if((!(getServiceVar.value.listOut.isEmpty))) {
// Aggregate: GetAssociations
var getAssociationsAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_ASSOCIATIONRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qploId = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13, NULL o14, NULL o15";
} else {
selectSql += "\"ENLocal_ASSOCIATION\".\"Id\" o0, \"ENLocal_ASSOCIATION\".\"DisplayValue\" o1, \"ENLocal_ASSOCIATION\".\"FriendlyName\" o2, \"ENLocal_ASSOCIATION\".\"RoleName\" o3, \"ENLocal_ASSOCIATION\".\"Key\" o4, \"ENLocal_ASSOCIATION\".\"Value\" o5, \"ENLocal_ASSOCIATION\".\"Master\" o6, \"ENLocal_ASSOCIATION\".\"ContractDN\" o7, \"ENLocal_ASSOCIATION\".\"AccountOwner\" o8, \"ENLocal_ASSOCIATION\".\"AccountOwnerNIF\" o9, \"ENLocal_ASSOCIATION\".\"AccountOwnerEmail\" o10, \"ENLocal_ASSOCIATION\".\"AccountOwnerPhoneNr\" o11, \"ENLocal_ASSOCIATION\".\"CustCode_ClientNumber\" o12, \"ENLocal_ASSOCIATION\".\"PersonId\" o13, \"ENLocal_ASSOCIATION\".\"IsPending\" o14, \"ENLocal_ASSOCIATION\".\"UA\" o15";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_ASSOCIATION\" \"ENLocal_ASSOCIATION\"";
fromAndWhereSql += " WHERE ";
if (qploId != 0) {
fromAndWhereSql += "((\"ENLocal_ASSOCIATION\".\"Id\" = :qploId) AND (\"ENLocal_ASSOCIATION\".\"Id\" IS NOT NULL))";
argsList.add("qploId", /*LONGINTEGER*/ 4, qploId);
} else {
fromAndWhereSql += "(\"ENLocal_ASSOCIATION\".\"Id\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_ASSOCIATIONRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ASSOCIATIONAttr",
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
return getAssociationsVar.value;
});
};
return getAssociationsAggr().then(function () {
// GetAssociations.Empty?
if((!(getAssociationsVar.value.listOut.isEmpty))) {
// SetTempAssociationTerms
// TempAssociationTerms.AssociationID = GetAssociations.List.Current.Local_ASSOCIATION.Id
model.variables.tempAssociationTermsVar.associationIDAttr = getAssociationsVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.idAttr;
// TempAssociationTerms.CustCode = If
model.variables.tempAssociationTermsVar.custCodeAttr = (((getAssociationsVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.custCode_ClientNumberAttr === "")) ? (getAssociationsVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.valueAttr) : (getAssociationsVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr.custCode_ClientNumberAttr));
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.listAssociationTermsVar, model.variables.tempAssociationTermsVar, callContext);
}

});
}

});
}).then(function () {
app_UserAssociationsIndexMax--;
app_UserAssociationsIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.app_UserAssociationsVar);
}).then(function () {
// Execute Action: SetTermsAndConditions
model.flush();
return controller.setTermsAndConditions$ServerAction(model.variables.listAssociationTermsVar, model.variables.getAccessTokenInfoAggr.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
setTermsAndConditionsVar.value = value;
});
});
}

}).then(function () {
// Execute Action: WhatsNew_CheckUser
model.flush();
return WTF_MBPController.default.whatsNew_CheckUser$Action(callContext).then(function (value) {
whatsNew_CheckUserVar.value = value;
});
}).then(function () {
if((whatsNew_CheckUserVar.value.isSkipOut)) {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/WhatsNew
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WhatsNew", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
}

});
}

});
});
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
// afterSelected = False
model.variables.afterSelectedVar = false;
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action(createUserWtfActiveVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("SelectMsisdn.GetAssociation", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
// afterSelected = False
model.variables.afterSelectedVar = false;
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
return OS.Flow.returnAsync();

} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
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
// afterSelected = False
model.variables.afterSelectedVar = false;
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ServicesFlow.SelectMsisdn.GetAssociation$vars", [{
name: "User_AssociationId",
attrName: "user_AssociationIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Msisdn",
attrName: "msisdnInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.doNothing$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._doNothing$Action, callContext);

};
Controller.prototype.associarServicosOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._associarServicosOnClick$Action, callContext);

};
Controller.prototype.showWebViewListenerOnSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnSuccess$Action, callContext);

};
Controller.prototype.nOSID_Logout_Close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Logout_Close$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.nOSID_LogoutError$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_LogoutError$Action, callContext);

};
Controller.prototype.nOSID_LogoutSetLoading$Action = function (evt_IsLoadingIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_LogoutSetLoading$Action, callContext, evt_IsLoadingIn);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.showWebViewListenerOnError$Action = function (errorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnError$Action, callContext, errorIn);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.getAssociation$Action = function (user_AssociationIdIn, msisdnIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getAssociation$Action, callContext, user_AssociationIdIn, msisdnIn);

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
return WTF_MOB_ServicesFlowController.default.handleError(ex, this.callContext());
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

