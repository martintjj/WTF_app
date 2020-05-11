define("WTF_MOB.ZonaFlow.WTF_Aditivos.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ADDONS_REFILLSRecordList", "WTF_MOB.model$Local_ADDONS_REFILLSList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$SetAddOn", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$Local_ADDONS_REFILLSRec", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_Common_Waiting_mvcModel, WTF_MOB_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalADDONSREFILLSAggrRec = (function (_super) {
__extends(GetLocalADDONSREFILLSAggrRec, _super);
function GetLocalADDONSREFILLSAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalADDONSREFILLSAggrRec.RecordListType = WTF_MOBModel.Local_ADDONS_REFILLSRecordList;
GetLocalADDONSREFILLSAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalADDONSREFILLSAggrRec.init();
return GetLocalADDONSREFILLSAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("ShowInternet", "showInternetVar", "ShowInternet", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ShowVoz", "showVozVar", "ShowVoz", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CategoryInternet", "categoryInternetVar", "CategoryInternet", true, OS.Types.Text, function () {
return "Internet";
}), 
this.attr("CategoryVozSMS", "categoryVozSMSVar", "CategoryVozSMS", true, OS.Types.Text, function () {
return "Voz";
}), 
this.attr("Internet_AddonsRefillsActiveList", "internet_AddonsRefillsActiveListVar", "Internet_AddonsRefillsActiveList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.Local_ADDONS_REFILLSList());
}, WTF_MOBModel.Local_ADDONS_REFILLSList), 
this.attr("Voz_AddonsRefillsActiveList", "voz_AddonsRefillsActiveListVar", "Voz_AddonsRefillsActiveList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.Local_ADDONS_REFILLSList());
}, WTF_MOBModel.Local_ADDONS_REFILLSList), 
this.attr("UnsubscribePopUpIsOpen", "unsubscribePopUpIsOpenVar", "UnsubscribePopUpIsOpen", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("LocalAddonActive", "localAddonActiveVar", "LocalAddonActive", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.Local_ADDONS_REFILLSRec());
}, WTF_MBPModel.Local_ADDONS_REFILLSRec), 
this.attr("BalanceValue", "balanceValueIn", "BalanceValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_balanceValueInDataFetchStatus", "_balanceValueInDataFetchStatus", "_balanceValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceMessage", "balanceMessageIn", "BalanceMessage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceMessageInDataFetchStatus", "_balanceMessageInDataFetchStatus", "_balanceMessageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalADDONSREFILLS", "getLocalADDONSREFILLSAggr", "getLocalADDONSREFILLSAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalADDONSREFILLSAggrRec());
}, GetLocalADDONSREFILLSAggrRec)
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
Model._hasValidationWidgetsValue = (((((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("BalanceValue" in inputs) {
this.variables.balanceValueIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.BalanceValue, OS.Types.Decimal);
}

if("BalanceMessage" in inputs) {
this.variables.balanceMessageIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.BalanceMessage, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.WTF_Aditivos.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_Aditivos.mvc$model", "WTF_MOB.ZonaFlow.WTF_Aditivos.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ADDONS_REFILLSRecordList", "WTF_MOB.model$Local_ADDONS_REFILLSList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$SetAddOn", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$Local_ADDONS_REFILLSRec", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_ZonaFlow_WTF_Aditivos_mvc_model, WTF_MOB_ZonaFlow_WTF_Aditivos_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_Common_BottomBar_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_Aditivos";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_Aditivos.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Aditivos_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Aditivos_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
PageSection: "Zona",
ContentClass: "b-transparent",
PageTitle: "Aditivos",
ScreenName: "WTF_Aditivos",
PageType: "Operação"
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
return [React.createElement(WTF_MOB_Common_HeaderLvl2_mvc_view, {
inputs: {
Title: "Aditivos",
PageControllsBack: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.headerLvl2BackEvent$Action(controller.callContext(eventHandlerContext));

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
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16 m-24",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mv-16",
visible: model.variables.showInternetVar,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: true,
StyleClass: "b-warmPurple",
HasRipple: true,
RightStyleClass: "text-right -vCenter",
HasRightSide: true,
LeftStyleClass: "pt-8"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToAditivos$Action("Não fiques sem net", model.variables.categoryInternetVar, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "InternetCard",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.aditivos_internet.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "NÃO FIQUES SEM NET",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Ativa um aditivo para teres mais GB para as tuas cenas",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
StyleClass: "c-white -inline",
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
uuid: "9",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
mode: /*Default*/ 0,
source: model.variables.internet_AddonsRefillsActiveListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
RightStyleClass: "text-right -vCenter",
LeftStyleClass: "pt-8",
HasRightSide: true,
StyleClass: "b-warmPurple border-left",
HasLeftSide: true,
ContentClass: "pl-8",
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
name: "InternetCardActive",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.aditivos_internet.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).commercialDescriptionAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: model.getCachedValue(idService.getId("2_d__E4riEWbjMTv166Iww.Value"), function () {
return (((model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).isAddOnAttr) ? ("Renova a ") : ("Termina a ")) + OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).expiryDateAttr), "dd-MM-yyyy"));
}, function () {
return model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).isAddOnAttr;
}, function () {
return model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).expiryDateAttr;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.popupConfirm_Open$Action(model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-link c-white",
value: "Desativar",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).canUnsubscribeAttr, false, this, function () {
return [];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).canUnsubscribeAttr), asPrimitiveValue(model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).expiryDateAttr), asPrimitiveValue(model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).isAddOnAttr), asPrimitiveValue(model.variables.internet_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).commercialDescriptionAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mv-16",
visible: model.variables.showVozVar,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: true,
HasLeftSide: true,
HasRipple: true,
RightStyleClass: "text-right -vCenter",
LeftStyleClass: "pt-8",
StyleClass: "b-warmPurple"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToAditivos$Action("Minutos, SMS, MMS", model.variables.categoryVozSMSVar, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "VozCard",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.aditivos_voice.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "MINUTOS, SMS, MMS",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Ativa um aditivo para teres mais minutos de chamadas",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall,
StyleClass: "c-white -inline",
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
uuid: "24",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
mode: /*Default*/ 0,
source: model.variables.voz_AddonsRefillsActiveListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
LeftStyleClass: "pt-8",
HasRightSide: true,
StyleClass: "b-warmPurple border-left",
RightStyleClass: "text-right -vCenter",
HasRipple: false,
HasLeftSide: true,
ContentClass: "pl-8"
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
name: "VozCardActive",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.aditivos_voice.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).commercialDescriptionAttr,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: model.getCachedValue(idService.getId("dhmvLXKk902+kHEW8EQHUA.Value"), function () {
return (((model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).isAddOnAttr) ? ("Renova a ") : ("Termina a ")) + OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).expiryDateAttr), "dd-MM-yyyy"));
}, function () {
return model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).isAddOnAttr;
}, function () {
return model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).expiryDateAttr;
}),
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.popupConfirm_Open$Action(model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext), controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-link c-white",
value: "Desativar",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).canUnsubscribeAttr, false, this, function () {
return [];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).canUnsubscribeAttr), asPrimitiveValue(model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).expiryDateAttr), asPrimitiveValue(model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).isAddOnAttr), asPrimitiveValue(model.variables.voz_AddonsRefillsActiveListVar.getCurrent(callContext.iterationContext).commercialDescriptionAttr)]
})];
}, callContext, idService, "2")
},
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
uuid: "33",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
Page: "Selfcare",
IsOffline: false,
DemoAppWithoutLogin: false
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
uuid: "34",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.voz_AddonsRefillsActiveListVar), asPrimitiveValue(model.variables.categoryVozSMSVar), asPrimitiveValue(model.variables.showVozVar), asPrimitiveValue(model.variables.internet_AddonsRefillsActiveListVar), asPrimitiveValue(model.variables.categoryInternetVar), asPrimitiveValue(model.variables.showInternetVar)]
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "I18XQQVvskienhdhtWyUYg"
},
showPopup: model.variables.unsubscribePopUpIsOpenVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "UnsubscribePopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "G+sYGMv89EiIjoNbQkHV5w"
},
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 c-strongPink -bold",
value: "Desativar aditivo",
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "61HrjNdl+kWByz4cdbe0kQ"
},
style: "c-black",
value: "Tens a certeza que queres desactivar a renovação automática do aditivo ",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "hDN7d9cDuUaWj1hx1Fum8Q"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.variables.localAddonActiveVar.commercialDescriptionAttr,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "9J84OgqCZUOKxvX1ATsAzw"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "desc_mgm c-warmPurple ",
value: "?",
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "IDf0ZbGzUEG1Zk3G5kGQWQ"
},
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "XU74KFdzXUGC26dm7+EYLw"
},
style: "c-black",
value: "Ativaste no dia: ",
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "la9XZb0tv0ShbXZHUWD3SA"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.getCachedValue(idService.getId("la9XZb0tv0ShbXZHUWD3SA.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.localAddonActiveVar.subscriptionStartAttr), "dd-MM-yyyy");
}, function () {
return model.variables.localAddonActiveVar.subscriptionStartAttr;
}),
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "lCQ9Jhqav0yccE8D1QD7ZQ"
},
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "nYvff2MLgUOGOMuSXtPN4Q"
},
style: "c-black",
value: "Ativo até dia: ",
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "9824kq5hXU6e_hk5_EpUkA"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.getCachedValue(idService.getId("9824kq5hXU6e_hk5_EpUkA.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.localAddonActiveVar.expiryDateAttr), "dd-MM-yyyy");
}, function () {
return model.variables.localAddonActiveVar.expiryDateAttr;
}),
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.unSubscribeAddonRefillOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -large",
visible: true,
_idProps: {
service: idService,
name: "Unsubscribe"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Desativar",
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "NhQHFd2Vo06yxpKve2EbFQ"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.popupConfirm_Close$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative -large",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
})))))));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_Aditivos.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "BALANCE_MBP.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ADDONS_REFILLSRecordList", "WTF_MOB.model$Local_ADDONS_REFILLSList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$SetAddOn", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$Local_ADDONS_REFILLSRec", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, BALANCE_MBPController, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
Controller.prototype.getLocalADDONSREFILLS$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_ADDONS_REFILLSRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 50;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_ADDONS_REFILLS\".\"Id\" o0, \"ENLocal_ADDONS_REFILLS\".\"Id_Addons_Refills\" o1, \"ENLocal_ADDONS_REFILLS\".\"Icon\" o2, \"ENLocal_ADDONS_REFILLS\".\"Cost\" o3, \"ENLocal_ADDONS_REFILLS\".\"IsSubscribed\" o4, \"ENLocal_ADDONS_REFILLS\".\"StatusLabel\" o5, \"ENLocal_ADDONS_REFILLS\".\"CanSubscribe\" o6, \"ENLocal_ADDONS_REFILLS\".\"IsPending\" o7, \"ENLocal_ADDONS_REFILLS\".\"CanUnsubscribe\" o8, \"ENLocal_ADDONS_REFILLS\".\"ExpiryDate\" o9, \"ENLocal_ADDONS_REFILLS\".\"Description\" o10, \"ENLocal_ADDONS_REFILLS\".\"IsAvailable\" o11, \"ENLocal_ADDONS_REFILLS\".\"Msisdn\" o12, \"ENLocal_ADDONS_REFILLS\".\"CommercialDescription\" o13, \"ENLocal_ADDONS_REFILLS\".\"PackageGroup\" o14, \"ENLocal_ADDONS_REFILLS\".\"Type\" o15, \"ENLocal_ADDONS_REFILLS\".\"Category\" o16, \"ENLocal_ADDONS_REFILLS\".\"CategoryLabel\" o17, \"ENLocal_ADDONS_REFILLS\".\"CategoryDescription\" o18, \"ENLocal_ADDONS_REFILLS\".\"IsAddOn\" o19, \"ENLocal_ADDONS_REFILLS\".\"IsRefill\" o20, \"ENLocal_ADDONS_REFILLS\".\"SubscriptionStart\" o21, \"ENLocal_ADDONS_REFILLS\".\"Icons\" o22, \"ENLocal_ADDONS_REFILLS\".\"CacheExpirationDate\" o23";
} else {
selectSql += "\"ENLocal_ADDONS_REFILLS\".\"Id\" o0, \"ENLocal_ADDONS_REFILLS\".\"Id_Addons_Refills\" o1, \"ENLocal_ADDONS_REFILLS\".\"Icon\" o2, \"ENLocal_ADDONS_REFILLS\".\"Cost\" o3, \"ENLocal_ADDONS_REFILLS\".\"IsSubscribed\" o4, \"ENLocal_ADDONS_REFILLS\".\"StatusLabel\" o5, \"ENLocal_ADDONS_REFILLS\".\"CanSubscribe\" o6, \"ENLocal_ADDONS_REFILLS\".\"IsPending\" o7, \"ENLocal_ADDONS_REFILLS\".\"CanUnsubscribe\" o8, \"ENLocal_ADDONS_REFILLS\".\"ExpiryDate\" o9, \"ENLocal_ADDONS_REFILLS\".\"Description\" o10, \"ENLocal_ADDONS_REFILLS\".\"IsAvailable\" o11, \"ENLocal_ADDONS_REFILLS\".\"Msisdn\" o12, \"ENLocal_ADDONS_REFILLS\".\"CommercialDescription\" o13, \"ENLocal_ADDONS_REFILLS\".\"PackageGroup\" o14, \"ENLocal_ADDONS_REFILLS\".\"Type\" o15, \"ENLocal_ADDONS_REFILLS\".\"Category\" o16, \"ENLocal_ADDONS_REFILLS\".\"CategoryLabel\" o17, \"ENLocal_ADDONS_REFILLS\".\"CategoryDescription\" o18, \"ENLocal_ADDONS_REFILLS\".\"IsAddOn\" o19, \"ENLocal_ADDONS_REFILLS\".\"IsRefill\" o20, \"ENLocal_ADDONS_REFILLS\".\"SubscriptionStart\" o21, \"ENLocal_ADDONS_REFILLS\".\"Icons\" o22, \"ENLocal_ADDONS_REFILLS\".\"CacheExpirationDate\" o23";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_ADDONS_REFILLS\" \"ENLocal_ADDONS_REFILLS\"";
fromAndWhereSql += " WHERE (\"ENLocal_ADDONS_REFILLS\".\"IsAvailable\" = 1)";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_ADDONS_REFILLSRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ADDONS_REFILLSAttr",
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
return model.variables.getLocalADDONSREFILLSAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalADDONSREFILLS$AggrRefresh"];
// Client Actions
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var vozSMSListFilterVar = new OS.DataTypes.VariableHolder();
var internetListFilterActiveVar = new OS.DataTypes.VariableHolder();
var internetListFilterVar = new OS.DataTypes.VariableHolder();
var vozSMSListFilterActiveVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Aditivos"
model.variables.analyticsAuxVarVar.traceNameAttr = "Aditivos";
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: InternetListFilter
internetListFilterVar.value = OS.SystemActions.listFilter(model.variables.getLocalADDONSREFILLSAggr.listOut, function (p) {
return (p.local_ADDONS_REFILLSAttr.categoryAttr === model.variables.categoryInternetVar);
}, callContext);

// Execute Action: VozSMSListFilter
vozSMSListFilterVar.value = OS.SystemActions.listFilter(model.variables.getLocalADDONSREFILLSAggr.listOut, function (p) {
return (p.local_ADDONS_REFILLSAttr.categoryAttr === model.variables.categoryVozSMSVar);
}, callContext);

// ShowInternet = notInternetListFilter.FilteredList.Empty
model.variables.showInternetVar = !(internetListFilterVar.value.filteredListOut.isEmpty);
// ShowVoz = notVozSMSListFilter.FilteredList.Empty
model.variables.showVozVar = !(vozSMSListFilterVar.value.filteredListOut.isEmpty);
// Execute Action: InternetListFilterActive
internetListFilterActiveVar.value = OS.SystemActions.listFilter(internetListFilterVar.value.filteredListOut, function (p) {
return p.local_ADDONS_REFILLSAttr.isSubscribedAttr;
}, callContext);

// Execute Action: VozSMSListFilterActive
vozSMSListFilterActiveVar.value = OS.SystemActions.listFilter(vozSMSListFilterVar.value.filteredListOut, function (p) {
return p.local_ADDONS_REFILLSAttr.isSubscribedAttr;
}, callContext);

// Internet_AddonsRefillsActiveList = InternetListFilterActive.FilteredList
model.variables.internet_AddonsRefillsActiveListVar = OS.DataTypes.JSConversions.typeConvertRecordList(internetListFilterActiveVar.value.filteredListOut, new WTF_MOBModel.Local_ADDONS_REFILLSList(), function (source, target) {
target = source.local_ADDONS_REFILLSAttr;
return target;
});
// Voz_AddonsRefillsActiveList = VozSMSListFilterActive.FilteredList
model.variables.voz_AddonsRefillsActiveListVar = OS.DataTypes.JSConversions.typeConvertRecordList(vozSMSListFilterActiveVar.value.filteredListOut, new WTF_MOBModel.Local_ADDONS_REFILLSList(), function (source, target) {
target = source.local_ADDONS_REFILLSAttr;
return target;
});
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
});
};
Controller.prototype._goToAditivos$Action = function (titleIn, categoryIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToAditivos");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Aditivos.GoToAditivos$vars"))());
vars.value.titleInLocal = titleIn;
vars.value.categoryInLocal = categoryIn;
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, ("Aditivos: " + vars.value.titleInLocal), 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_AditivosChoose
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_AditivosChoose", {
Title: vars.value.titleInLocal,
BalanceMessage: model.variables.balanceMessageIn,
BalanceValue: model.variables.balanceValueIn,
Category: vars.value.categoryInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Aditivos.GoToAditivos$vars", [{
name: "Title",
attrName: "titleInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._popupConfirm_Close$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PopupConfirm_Close");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Cancelar desativação de aditivo", 0, "", callContext).then(function () {
// UnsubscribePopUpIsOpen = False
model.variables.unsubscribePopUpIsOpenVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Aditivos.PopupConfirm_Close", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._unSubscribeAddonRefillOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("UnSubscribeAddonRefillOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Aditivos.UnSubscribeAddonRefillOnClick$vars"))());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
var setAddOnVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Desativar aditivo confirmação", 0, "", callContext).then(function () {
// Execute Action: PopupConfirm_Close
return controller._popupConfirm_Close$Action(callContext);
}).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Aggregate: GetLocalService
var getLocalServiceAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13";
} else {
selectSql += "\"ENLocal_SERVICE\".\"Id\" o0, \"ENLocal_SERVICE\".\"ServiceId\" o1, \"ENLocal_SERVICE\".\"AssociationID\" o2, \"ENLocal_SERVICE\".\"Name\" o3, \"ENLocal_SERVICE\".\"ServiceAccount\" o4, \"ENLocal_SERVICE\".\"UiLabel\" o5, \"ENLocal_SERVICE\".\"Plan\" o6, \"ENLocal_SERVICE\".\"TMCodeID\" o7, \"ENLocal_SERVICE\".\"TMCodeDesc\" o8, \"ENLocal_USER_WTF\".\"Id\" o9, \"ENLocal_USER_WTF\".\"Msisdn\" o10, \"ENLocal_USER_WTF\".\"CodeMember\" o11, \"ENLocal_USER_WTF\".\"Tmcode_label\" o12, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o13";
}
fromAndWhereSql += " FROM (\"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\" Inner JOIN \"MAIN\".\"OSUSR_p9g_Local_USER_WTF\" \"ENLocal_USER_WTF\" ON (\"ENLocal_SERVICE\".\"ServiceId\" = CAST(\"ENLocal_USER_WTF\".\"Msisdn\" AS TEXT))) ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SERVICEAttr",
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
return getLocalServiceVar.value;
});
};
return getLocalServiceAggr();
}).then(function () {
// Execute Action: SetAddOn
model.flush();
return WTF_MBPController.default.setAddOn$Action(getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, model.variables.localAddonActiveVar.id_Addons_RefillsAttr, model.variables.localAddonActiveVar.packageGroupAttr, false, callContext).then(function (value) {
setAddOnVar.value = value;
});
}).then(function () {
// Success = SetAddOn.Success
vars.value.successVar = setAddOnVar.value.successOut;
// Response = SetAddOn.Response
vars.value.responseVar = setAddOnVar.value.responseOut;
// IsLoading = True
model.variables.isLoadingVar = true;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((vars.value.successVar)) {
// Execute Action: Balance_ClearCache
model.flush();
return BALANCE_MBPController.default.balance_ClearCache$Action(callContext).then(function (value) {
balance_ClearCacheVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/WTF_AditivosChoose_Sucess
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_AditivosChoose_Sucess", {
forUnsubscribe: true,
name: model.variables.localAddonActiveVar.commercialDescriptionAttr,
isAddon: model.variables.localAddonActiveVar.isAddOnAttr
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Erro
if(((OS.BuiltinFunctions.index(vars.value.responseVar, "pedido de remoção pendente", 0, false, false) > -1))) {
// ErrorSubTitle = "Pedido de desativação pendente"
vars.value.errorSubTitleVar = "Pedido de desativação pendente";
// ErrorDesc = "Não foi possível desactivar o teu aditivo. Já existe um pedido de desativação pendente."
vars.value.errorDescVar = "Não foi possível desactivar o teu aditivo. Já existe um pedido de desativação pendente.";
// ErrorWithChargeBtn = True
vars.value.errorWithChargeBtnVar = true;
} else {
if((OS.BuiltinFunctions.index(vars.value.responseVar, "Serviço não está ativo", 0, false, false) > -1)) {
// ErrorSubTitle = "Serviço não está ativo"
vars.value.errorSubTitleVar = "Serviço não está ativo";
// ErrorDesc = "Não foi possível desactivar o teu aditivo, tenta mais tarde."
vars.value.errorDescVar = "Não foi possível desactivar o teu aditivo, tenta mais tarde.";
// ErrorWithChargeBtn = False
vars.value.errorWithChargeBtnVar = false;
} else {
if((OS.BuiltinFunctions.index(vars.value.responseVar, "pedido de ativação pendente", 0, false, false) > -1)) {
// ErrorSubTitle = "Pedido de ativação pendente"
vars.value.errorSubTitleVar = "Pedido de ativação pendente";
// ErrorDesc = "Não foi possível desactivar o teu aditivo, tenta mais tarde."
vars.value.errorDescVar = "Não foi possível desactivar o teu aditivo, tenta mais tarde.";
// ErrorWithChargeBtn = False
vars.value.errorWithChargeBtnVar = false;
} else {
// ErrorDesc = "Não foi possível desactivar o teu aditivo, tenta mais tarde."
vars.value.errorDescVar = "Não foi possível desactivar o teu aditivo, tenta mais tarde.";
// ErrorWithChargeBtn = False
vars.value.errorWithChargeBtnVar = false;
}

}

}

// Destination: /WTF_MOB/WTF_AditivosChoose_Error
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_AditivosChoose_Error", {
ErrorDesc: vars.value.errorDescVar,
BalanceMessage: model.variables.balanceMessageIn,
ErrorSubTitle: vars.value.errorSubTitleVar,
ErrorWithChargeBtn: vars.value.errorWithChargeBtnVar,
BalanceValue: model.variables.balanceValueIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Aditivos.UnSubscribeAddonRefillOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Aditivos.UnSubscribeAddonRefillOnClick$vars", [{
name: "Success",
attrName: "successVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Response",
attrName: "responseVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorSubTitle",
attrName: "errorSubTitleVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorDesc",
attrName: "errorDescVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorWithChargeBtn",
attrName: "errorWithChargeBtnVar",
mandatory: false,
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
Controller.prototype._headerLvl2BackEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("HeaderLvl2BackEvent");
callContext = controller.callContext(callContext);
// Destination: /WTF_MOB/WTF_Consumptions
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Consumptions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
};
Controller.prototype._popupConfirm_Open$Action = function (localAddonIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PopupConfirm_Open");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Aditivos.PopupConfirm_Open$vars"))());
vars.value.localAddonInLocal = localAddonIn.clone();
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Desativar aditivo", 0, "", callContext).then(function () {
// UnsubscribePopUpIsOpen = True
model.variables.unsubscribePopUpIsOpenVar = true;
// LocalAddonActive = LocalAddon
model.variables.localAddonActiveVar = vars.value.localAddonInLocal;
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Aditivos.PopupConfirm_Open", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Aditivos.PopupConfirm_Open$vars", [{
name: "LocalAddon",
attrName: "localAddonInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MBPModel.Local_ADDONS_REFILLSRec();
},
complexType: WTF_MBPModel.Local_ADDONS_REFILLSRec
}]);

Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.goToAditivos$Action = function (titleIn, categoryIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToAditivos$Action, callContext, titleIn, categoryIn);

};
Controller.prototype.popupConfirm_Close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._popupConfirm_Close$Action, callContext);

};
Controller.prototype.unSubscribeAddonRefillOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._unSubscribeAddonRefillOnClick$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.headerLvl2BackEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._headerLvl2BackEvent$Action, callContext);

};
Controller.prototype.popupConfirm_Open$Action = function (localAddonIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._popupConfirm_Open$Action, callContext, localAddonIn);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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

