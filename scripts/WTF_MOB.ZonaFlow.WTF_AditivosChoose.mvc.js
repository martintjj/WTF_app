define("WTF_MOB.ZonaFlow.WTF_AditivosChoose.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.ZonaFlow.AditivosMiniSlider.mvc$model", "WTF_MOB.model$Local_ADDONS_REFILLSList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$SetAddOn", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$SetRefill", "WTF_MOB.controller$Analytics_TrackException", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "WTF_MBP.model$Local_ADDONS_REFILLSRec", "WTF_MOB.model$Local_ADDONS_REFILLSRecordList", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, WTF_MOB_Common_Waiting_mvcModel, WTF_MOB_ZonaFlow_AditivosMiniSlider_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalADDONSREFILLSByCategoryAggrRec = (function (_super) {
__extends(GetLocalADDONSREFILLSByCategoryAggrRec, _super);
function GetLocalADDONSREFILLSByCategoryAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalADDONSREFILLSByCategoryAggrRec.RecordListType = WTF_MOBModel.Local_ADDONS_REFILLSRecordList;
GetLocalADDONSREFILLSByCategoryAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalADDONSREFILLSByCategoryAggrRec.init();
return GetLocalADDONSREFILLSByCategoryAggrRec;
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
this.attr("AfterReady", "afterReadyVar", "AfterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AddonRefillSelected", "addonRefillSelectedVar", "AddonRefillSelected", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.Local_ADDONS_REFILLSRec());
}, WTF_MBPModel.Local_ADDONS_REFILLSRec), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("App_AddonsList", "app_AddonsListVar", "App_AddonsList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.Local_ADDONS_REFILLSList());
}, WTF_MOBModel.Local_ADDONS_REFILLSList), 
this.attr("App_RefillsList", "app_RefillsListVar", "App_RefillsList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.Local_ADDONS_REFILLSList());
}, WTF_MOBModel.Local_ADDONS_REFILLSList), 
this.attr("SubscribePopUpIsOpen", "subscribePopUpIsOpenVar", "SubscribePopUpIsOpen", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("UnsubscribePopUpIsOpen", "unsubscribePopUpIsOpenVar", "UnsubscribePopUpIsOpen", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Title", "titleIn", "Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
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
this.attr("Category", "categoryIn", "Category", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_categoryInDataFetchStatus", "_categoryInDataFetchStatus", "_categoryInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalADDONSREFILLSByCategory", "getLocalADDONSREFILLSByCategoryAggr", "getLocalADDONSREFILLSByCategoryAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalADDONSREFILLSByCategoryAggrRec());
}, GetLocalADDONSREFILLSByCategoryAggrRec)
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || WTF_MOB_ZonaFlow_AditivosMiniSlider_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Title" in inputs) {
this.variables.titleIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Title, OS.Types.Text);
}

if("BalanceValue" in inputs) {
this.variables.balanceValueIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.BalanceValue, OS.Types.Decimal);
}

if("BalanceMessage" in inputs) {
this.variables.balanceMessageIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.BalanceMessage, OS.Types.Text);
}

if("Category" in inputs) {
this.variables.categoryIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Category, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.WTF_AditivosChoose.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_AditivosChoose.mvc$model", "WTF_MOB.ZonaFlow.WTF_AditivosChoose.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.ZonaFlow.AditivosMiniSlider.mvc$view", "WTF_MOB.model$Local_ADDONS_REFILLSList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$SetAddOn", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$SetRefill", "WTF_MOB.controller$Analytics_TrackException", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "WTF_MBP.model$Local_ADDONS_REFILLSRec", "WTF_MOB.model$Local_ADDONS_REFILLSRecordList", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, MobileUIWidgetsController, WTF_MBPModel, React, OSView, WTF_MOB_ZonaFlow_WTF_AditivosChoose_mvc_model, WTF_MOB_ZonaFlow_WTF_AditivosChoose_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_AditivosChoose";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_AditivosChoose.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_AditivosChoose_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_AditivosChoose_mvc_controller;
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
PageTitle: ("Gerir aditivos - " + model.variables.titleIn),
ScreenName: "WTF_AditivosChoose",
PageType: "Operação",
HasBackgroundChristmas: false,
PageSection: "Zona",
ContentClass: "b-warmPurple"
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
Title: model.variables.titleIn,
AllowPrevious: true
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
animate: true,
visible: (model.variables.afterReadyVar && !(model.variables.app_AddonsListVar.isEmpty)),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20 ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h1 c-white -bold",
value: "Renovação mensal",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "PevPmykHxEmI40zA5rmBIg"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-white mt-8",
value: "Renovam automáticamente no dia da renovação do teu tarifário",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_view, {
inputs: {
AddonsRefillList: model.variables.app_AddonsListVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
eventOpenPopupConfirm$Action: function (idIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.popupConfirm_Open$Action(idIn, controller.callContext(eventHandlerContext));
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mh-16 mt-16 mb-24 separator",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (model.variables.afterReadyVar && !(model.variables.app_RefillsListVar.isEmpty)),
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20 ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h1 c-white -bold",
value: "Compra única",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "Ui1I7dYyIUWbflCOzSTeVA"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-white mt-8",
value: "Os aditivos de compra única são válidos durante o mês da compra",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_view, {
inputs: {
AddonsRefillList: model.variables.app_RefillsListVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
eventOpenPopupConfirm$Action: function (idIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.popupConfirm_Open$Action(idIn, controller.callContext(eventHandlerContext));
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mh-16 mt-16 mb-24 separator",
visible: model.variables.app_AddonsListVar.isEmpty,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "ph-16 text-center",
visible: (model.variables.afterReadyVar && (model.variables.app_AddonsListVar.isEmpty || model.variables.app_RefillsListVar.isEmpty)),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h1 c-white -bold",
value: model.getCachedValue(idService.getId("smnqDJ54f0mmuDtZb3f7GQ.Value"), function () {
return ((model.variables.app_RefillsListVar.isEmpty) ? ("Sem aditivos de compra única") : ("Sem aditivos de renovação mensal"));
}, function () {
return model.variables.app_RefillsListVar.isEmpty;
}),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "PRD0oJDKsU+ob2qNFvc0rA"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-white mt-8",
value: "O teu tarifário não é elegível para subscrever este tipo de aditivos",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.app_RefillsListVar), asPrimitiveValue(model.variables.app_AddonsListVar), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.titleIn)]
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "zg+F8dFUpkCAfJprRf08FA"
},
showPopup: model.variables.subscribePopUpIsOpenVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "SubscribePopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "r1+E2iODGUGT1VS7_OT3xw"
},
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 c-strongPink -bold",
value: "Adicionar aditivo",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
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
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "RiKE4DfTpE245k6HkJGZ3g"
},
style: "c-black",
value: model.getCachedValue(idService.getId("RiKE4DfTpE245k6HkJGZ3g.Value"), function () {
return ("Tens a certeza que queres " + ((model.variables.addonRefillSelectedVar.isAddOnAttr) ? ("subscrever o aditivo mensal ") : ("comprar o aditivo ")));
}, function () {
return model.variables.addonRefillSelectedVar.isAddOnAttr;
}),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "ouf7D30BUEGLVY4Ab+FtRw"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.variables.addonRefillSelectedVar.commercialDescriptionAttr,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "q1S5uUcNk0CbpvTdbyOAlg"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "desc_mgm c-warmPurple ",
value: "?",
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "FUigzUYuBkS_ZSx9W2QjUw"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-black",
value: model.getCachedValue(idService.getId("FUigzUYuBkS_ZSx9W2QjUw.Value"), function () {
return ((model.variables.addonRefillSelectedVar.isAddOnAttr) ? ("Este aditivo é de renovação mensal automática.") : ("Este aditivo termina no fim do mês da compra."));
}, function () {
return model.variables.addonRefillSelectedVar.isAddOnAttr;
}),
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "G7EJ_UJ4F0KfE1gFNESZDQ"
},
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "tcx5DebiYUefbxWLGtpHgw"
},
style: "c-black",
value: "Disponível a partir de: ",
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "EVvPrbfnL0yvR4+lxQolvQ"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.getCachedValue(idService.getId("EVvPrbfnL0yvR4+lxQolvQ.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.currDate(), "dd-MM-yyyy");
}),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "UKxK5bacAEiV0TnX_HzCOg"
},
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "YS57Sqv1M0mMpKykzA6MPg"
},
style: "c-black",
value: model.getCachedValue(idService.getId("YS57Sqv1M0mMpKykzA6MPg.Value"), function () {
return ((model.variables.addonRefillSelectedVar.isAddOnAttr) ? ("Renova no próximo dia: ") : ("Ativo até dia: "));
}, function () {
return model.variables.addonRefillSelectedVar.isAddOnAttr;
}),
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "kl1Cj3hcp0y+IwS+HFb6fw"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.getCachedValue(idService.getId("kl1Cj3hcp0y+IwS+HFb6fw.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.addDays(OS.BuiltinFunctions.addMonths(OS.BuiltinFunctions.newDate(OS.BuiltinFunctions.year(OS.BuiltinFunctions.currDate()), OS.BuiltinFunctions.month(OS.BuiltinFunctions.currDate()), 1), 1), -1), "dd-MM-yyyy");
}),
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.subscribeAddonRefillOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -large",
visible: true,
_idProps: {
service: idService,
name: "Subscribe"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("dQfAq5iVA02t7YInbcrq2g.Value"), function () {
return (("Ativar por " + OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.textToDecimal(model.variables.addonRefillSelectedVar.costAttr), "€", 2, ",", ".")) + "/mês");
}, function () {
return model.variables.addonRefillSelectedVar.costAttr;
}),
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "lBb38xIUlkicNQgcV0BHmA"
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
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "gO0m7S62C0edZDDV1AZvtA"
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
"data-style-key": "EdoTtNkRrUiXCvZv+7p6HA"
},
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "45"
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
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "R4nLU2FYbk+m7kD+RUPGJQ"
},
style: "c-black",
value: "Tens a certeza que queres desactivar a renovação automática do aditivo ",
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "7ne_yjPox0ukjD95M39EMA"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.variables.addonRefillSelectedVar.commercialDescriptionAttr,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "ygGNJrjwtEK7eOQtE_mbNA"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "desc_mgm c-warmPurple ",
value: "?",
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "HLh+y6hcO0WoMMs_t01PKA"
},
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "U5aUozu+8U+BFz_90mQ6dQ"
},
style: "c-black",
value: "Ativaste no dia: ",
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "rsUk_CHJlkKnr5y1WFcB9w"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.getCachedValue(idService.getId("rsUk_CHJlkKnr5y1WFcB9w.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.addonRefillSelectedVar.subscriptionStartAttr), "dd-MM-yyyy");
}, function () {
return model.variables.addonRefillSelectedVar.subscriptionStartAttr;
}),
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "iljCpQF20k693LrLoLM9jg"
},
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "k11L4TJjNky7xVmPpQZEMg"
},
style: "c-black",
value: "Ativo até dia: ",
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "xJsEStDx406psgfxWaOwAQ"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-black -bold",
value: model.getCachedValue(idService.getId("xJsEStDx406psgfxWaOwAQ.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.addonRefillSelectedVar.expiryDateAttr), "dd-MM-yyyy");
}, function () {
return model.variables.addonRefillSelectedVar.expiryDateAttr;
}),
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24",
visible: true,
_idProps: {
service: idService,
uuid: "58"
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
uuid: "61"
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
"data-style-key": "M7SHtVw3cU6GVV9LzUs5Eg"
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
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
})))))));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_AditivosChoose.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.model$Local_ADDONS_REFILLSList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$SetAddOn", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$SetRefill", "WTF_MOB.controller$Analytics_TrackException", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "WTF_MBP.model$Local_ADDONS_REFILLSRec", "WTF_MOB.model$Local_ADDONS_REFILLSRecordList", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, BALANCE_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
Controller.prototype.getLocalADDONSREFILLSByCategory$AggrRefresh = function (maxRecords) {
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

var qpstCategory = model.variables.categoryIn;

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
fromAndWhereSql += " WHERE (\"ENLocal_ADDONS_REFILLS\".\"Category\" = :qpstCategory) AND (\"ENLocal_ADDONS_REFILLS\".\"IsAvailable\" = 1)";
orderBySql += " ORDER BY \"ENLocal_ADDONS_REFILLS\".\"IsSubscribed\" DESC ";
argsList.add("qpstCategory", /*TEXT*/ 0, qpstCategory);
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
return model.variables.getLocalADDONSREFILLSByCategoryAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalADDONSREFILLSByCategory$AggrRefresh"];
// Client Actions
Controller.prototype._subscribeAddonRefillOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SubscribeAddonRefillOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_AditivosChoose.SubscribeAddonRefillOnClick$vars"))());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var setAddOnVar = new OS.DataTypes.VariableHolder();
var setRefillVar = new OS.DataTypes.VariableHolder();
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Ativar aditivo confirmação", 0, "", callContext).then(function () {
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
return OS.Flow.executeSequence(function () {
if((model.variables.addonRefillSelectedVar.isAddOnAttr)) {
// Execute Action: SetAddOn
model.flush();
return WTF_MBPController.default.setAddOn$Action(getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, model.variables.addonRefillSelectedVar.id_Addons_RefillsAttr, model.variables.addonRefillSelectedVar.packageGroupAttr, true, callContext).then(function (value) {
setAddOnVar.value = value;
}).then(function () {
// Success = SetAddOn.Success
vars.value.successVar = setAddOnVar.value.successOut;
// Response = SetAddOn.Response
vars.value.responseVar = setAddOnVar.value.responseOut;
});
} else {
// Execute Action: SetRefill
model.flush();
return WTF_MBPController.default.setRefill$Action(getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, model.variables.addonRefillSelectedVar.id_Addons_RefillsAttr, model.variables.addonRefillSelectedVar.packageGroupAttr, true, callContext).then(function (value) {
setRefillVar.value = value;
}).then(function () {
// Success = SetRefill.Success
vars.value.successVar = setRefillVar.value.successOut;
// Response = SetRefill.Response
vars.value.responseVar = setRefillVar.value.responseOut;
// ErrorCode = SetRefill.ErrorCode
vars.value.errorCodeVar = setRefillVar.value.errorCodeOut;
});
}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.executeSequence(function () {
if((vars.value.successVar)) {
return OS.Flow.executeSequence(function () {
if(((vars.value.errorCodeVar === "23"))) {
// ErrorSubTitle = "Não foi possível ativar o teu aditivo"
vars.value.errorSubTitleVar = "Não foi possível ativar o teu aditivo";
// ErrorDesc = "Para subscreveres o aditivo de " + AddonRefillSelected.CommercialDescription + " novamente, deverás esperar pelo menos 1 hora desde a última subscrição."
vars.value.errorDescVar = (("Para subscreveres o aditivo de " + model.variables.addonRefillSelectedVar.commercialDescriptionAttr) + " novamente, deverás esperar pelo menos 1 hora desde a última subscrição.");
// ErrorWithChargeBtn = False
vars.value.errorWithChargeBtnVar = false;
return OS.Flow.breakAsync();
} else {
return OS.Flow.executeSequence(function () {
if((!(((vars.value.errorCodeVar) !== ("0"))))) {
// Execute Action: Balance_ClearCache
model.flush();
return BALANCE_MBPController.default.balance_ClearCache$Action(callContext).then(function (value) {
balance_ClearCacheVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/WTF_AditivosChoose_Sucess
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_AditivosChoose_Sucess", {
forUnsubscribe: false,
name: model.variables.addonRefillSelectedVar.commercialDescriptionAttr,
isAddon: model.variables.addonRefillSelectedVar.isAddOnAttr
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
}

});
} else {
if((model.variables.addonRefillSelectedVar.isAddOnAttr)) {
// Erro
if(((OS.BuiltinFunctions.index(vars.value.responseVar, "Cliente sem mensalidade ativa", 0, false, false) > -1))) {
// ErrorSubTitle = "Sem mensalidade ativa"
vars.value.errorSubTitleVar = "Sem mensalidade ativa";
// ErrorDesc = "Não é possível concluir esta operação, não tens a mensalidade ativa. Para recuperares o acesso aos serviços, por favor carrega o teu saldo através da app WTF."
vars.value.errorDescVar = "Não é possível concluir esta operação, não tens a mensalidade ativa. Para recuperares o acesso aos serviços, por favor carrega o teu saldo através da app WTF.";
// ErrorWithChargeBtn = True
vars.value.errorWithChargeBtnVar = true;
return OS.Flow.breakAsync();
} else {
if((OS.BuiltinFunctions.index(vars.value.responseVar, "não é possível validar o saldo", 0, false, false) > -1)) {
// ErrorSubTitle = "Não é possível processar o teu saldo"
vars.value.errorSubTitleVar = "Não é possível processar o teu saldo";
// ErrorDesc = "Neste momento não é possível processar o teu saldo, tenta mais tarde."
vars.value.errorDescVar = "Neste momento não é possível processar o teu saldo, tenta mais tarde.";
// ErrorWithChargeBtn = False
vars.value.errorWithChargeBtnVar = false;
return OS.Flow.breakAsync();
} else {
if((OS.BuiltinFunctions.index(vars.value.responseVar, "Saldo insuficiente", 0, false, false) > -1)) {
// ErrorSubTitle = "Saldo insuficiente"
vars.value.errorSubTitleVar = "Saldo insuficiente";
// ErrorDesc = "Não foi possível ativar o teu aditivo por saldo insuficiente. Consulta o teu saldo e carrega na app para poderes ativar."
vars.value.errorDescVar = "Não foi possível ativar o teu aditivo por saldo insuficiente. Consulta o teu saldo e carrega na app para poderes ativar.";
// ErrorWithChargeBtn = True
vars.value.errorWithChargeBtnVar = true;
return OS.Flow.breakAsync();
}

}

}

}

}

});
}).then(function () {
// ErrorDesc = "Não foi possível ativar o teu aditivo, tenta mais tarde."
vars.value.errorDescVar = "Não foi possível ativar o teu aditivo, tenta mais tarde.";
// ErrorWithChargeBtn = False
vars.value.errorWithChargeBtnVar = false;
});
}).then(function () {
// Destination: /WTF_MOB/WTF_AditivosChoose_Error
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_AditivosChoose_Error", {
ErrorSubTitle: vars.value.errorSubTitleVar,
ErrorWithChargeBtn: vars.value.errorWithChargeBtnVar,
BalanceValue: model.variables.balanceValueIn,
BalanceMessage: model.variables.balanceMessageIn,
ErrorDesc: vars.value.errorDescVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("WTF_AditivosChoose.SubscribeAddonRefillOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_AditivosChoose.SubscribeAddonRefillOnClick$vars", [{
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
name: "ErrorCode",
attrName: "errorCodeVar",
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
Controller.prototype._unSubscribeAddonRefillOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("UnSubscribeAddonRefillOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_AditivosChoose.UnSubscribeAddonRefillOnClick$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var setAddOnVar = new OS.DataTypes.VariableHolder();
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
return WTF_MBPController.default.setAddOn$Action(getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, getLocalServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, model.variables.addonRefillSelectedVar.id_Addons_RefillsAttr, model.variables.addonRefillSelectedVar.packageGroupAttr, false, callContext).then(function (value) {
setAddOnVar.value = value;
});
}).then(function () {
// Success = SetAddOn.Success
vars.value.successVar = setAddOnVar.value.successOut;
// Response = SetAddOn.Response
vars.value.responseVar = setAddOnVar.value.responseOut;
// IsLoading = False
model.variables.isLoadingVar = false;
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
name: model.variables.addonRefillSelectedVar.commercialDescriptionAttr,
isAddon: model.variables.addonRefillSelectedVar.isAddOnAttr,
forUnsubscribe: true
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
ErrorSubTitle: vars.value.errorSubTitleVar,
BalanceMessage: model.variables.balanceMessageIn,
ErrorDesc: vars.value.errorDescVar,
BalanceValue: model.variables.balanceValueIn,
ErrorWithChargeBtn: vars.value.errorWithChargeBtnVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_AditivosChoose.UnSubscribeAddonRefillOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_AditivosChoose.UnSubscribeAddonRefillOnClick$vars", [{
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
Controller.prototype._popupConfirm_Open$Action = function (idIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PopupConfirm_Open");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_AditivosChoose.PopupConfirm_Open$vars"))());
vars.value.idInLocal = idIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var listFilterVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(model.variables.getLocalADDONSREFILLSByCategoryAggr.listOut, function (p) {
return p.local_ADDONS_REFILLSAttr.idAttr.equals(vars.value.idInLocal);
}, callContext);

// AddonRefillSelected = ListFilter.FilteredList.Current.Local_ADDONS_REFILLS
model.variables.addonRefillSelectedVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).local_ADDONS_REFILLSAttr;
return OS.Flow.executeSequence(function () {
if((!(((!(model.variables.addonRefillSelectedVar.canSubscribeAttr) && !(model.variables.addonRefillSelectedVar.canUnsubscribeAttr)) || model.variables.addonRefillSelectedVar.isPendingAttr)))) {
return OS.Flow.executeSequence(function () {
if((model.variables.addonRefillSelectedVar.canSubscribeAttr)) {
// SubscribePopUpIsOpen = True
model.variables.subscribePopUpIsOpenVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Desativar aditivo", 0, "", callContext);
} else {
return OS.Flow.executeSequence(function () {
if(((model.variables.addonRefillSelectedVar.canUnsubscribeAttr && model.variables.addonRefillSelectedVar.isAddOnAttr))) {
// UnsubscribePopUpIsOpen = True
model.variables.unsubscribePopUpIsOpenVar = true;
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Ativar aditivo", 0, "", callContext);
}

});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("WTF_AditivosChoose.PopupConfirm_Open", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_AditivosChoose.PopupConfirm_Open$vars", [{
name: "id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
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
var refillListFilterVar = new OS.DataTypes.VariableHolder();
var addonListFilterVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Gerir aditivos - " + Title
model.variables.analyticsAuxVarVar.traceNameAttr = ("Gerir aditivos - " + model.variables.titleIn);
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: AddonListFilter
addonListFilterVar.value = OS.SystemActions.listFilter(model.variables.getLocalADDONSREFILLSByCategoryAggr.listOut, function (p) {
return p.local_ADDONS_REFILLSAttr.isAddOnAttr;
}, callContext);

// Execute Action: AddonListAppendAll
OS.SystemActions.listAppendAll(model.variables.app_AddonsListVar, OS.DataTypes.JSConversions.typeConvertRecordList(addonListFilterVar.value.filteredListOut, new WTF_MOBModel.Local_ADDONS_REFILLSList(), function (source, target) {
target = source.local_ADDONS_REFILLSAttr;
return target;
}), callContext);
// Execute Action: RefillListFilter
refillListFilterVar.value = OS.SystemActions.listFilter(model.variables.getLocalADDONSREFILLSByCategoryAggr.listOut, function (p) {
return p.local_ADDONS_REFILLSAttr.isRefillAttr;
}, callContext);

// Execute Action: RefillListAppendAll
OS.SystemActions.listAppendAll(model.variables.app_RefillsListVar, OS.DataTypes.JSConversions.typeConvertRecordList(refillListFilterVar.value.filteredListOut, new WTF_MOBModel.Local_ADDONS_REFILLSList(), function (source, target) {
target = source.local_ADDONS_REFILLSAttr;
return target;
}), callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
// AfterReady = True
model.variables.afterReadyVar = true;
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("WTF_AditivosChoose.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
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
Controller.prototype._popupConfirm_Close$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PopupConfirm_Close");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, ((model.variables.addonRefillSelectedVar.isSubscribedAttr) ? ("Cancelar desativação de aditivo") : ("Cancelar ativação de aditivo")), 0, "", callContext).then(function () {
// SubscribePopUpIsOpen = False
model.variables.subscribePopUpIsOpenVar = false;
// UnsubscribePopUpIsOpen = False
model.variables.unsubscribePopUpIsOpenVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("WTF_AditivosChoose.PopupConfirm_Close", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.subscribeAddonRefillOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._subscribeAddonRefillOnClick$Action, callContext);

};
Controller.prototype.unSubscribeAddonRefillOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._unSubscribeAddonRefillOnClick$Action, callContext);

};
Controller.prototype.popupConfirm_Open$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._popupConfirm_Open$Action, callContext, idIn);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.popupConfirm_Close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._popupConfirm_Close$Action, callContext);

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

