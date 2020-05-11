define("WTF_MOB.WalletFlow.Wallet.mvc$model", ["OutSystems", "WTF_MOB.model", "Essentials_MOB.controller", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.WalletFlow.WalletList.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "MobileUIWidgets.WidgetsInteraction.CustomSwipeEvents.mvc$model", "MobilePatterns.Utilities.TouchEvents.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.model$App_WalletCardList", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$GetAllWalletItems", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_BP.model$App_PictureRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, Essentials_MOBController, WTF_MOBController, WTF_MBPModel, WTF_MBPController, MobileUIWidgetsController, WTF_BPModel, WTF_MOB_Common_Layout_Lvl1_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_WalletFlow_WalletList_mvcModel, WTF_MOB_Common_BottomBar_mvcModel, MobileUIWidgets_WidgetsInteraction_CustomSwipeEvents_mvcModel, MobilePatterns_Utilities_TouchEvents_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalUSERWTFSAggrRec = (function (_super) {
__extends(GetLocalUSERWTFSAggrRec, _super);
function GetLocalUSERWTFSAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalUSERWTFSAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetLocalUSERWTFSAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalUSERWTFSAggrRec.init();
return GetLocalUSERWTFSAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("WalletListIsOpen", "walletListIsOpenVar", "WalletListIsOpen", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("WalletListLabelOpen", "walletListLabelOpenVar", "WalletListLabelOpen", true, OS.Types.Text, function () {
return "";
}), 
this.attr("afterReady", "afterReadyVar", "afterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("List_Generic", "list_GenericVar", "List_Generic", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_Equipaments", "list_EquipamentsVar", "List_Equipaments", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_Comunications", "list_ComunicationsVar", "List_Comunications", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_FilmesVod", "list_FilmesVodVar", "List_FilmesVod", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_UberEats", "list_UberEatsVar", "List_UberEats", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_UberRiders", "list_UberRidersVar", "List_UberRiders", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_Cinemas", "list_CinemasVar", "List_Cinemas", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_Golden", "list_GoldenVar", "List_Golden", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_Revolut", "list_RevolutVar", "List_Revolut", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_RevolutEmpty", "list_RevolutEmptyVar", "List_RevolutEmpty", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_UberEatsEmpty", "list_UberEatsEmptyVar", "List_UberEatsEmpty", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_UberRidersEmpty", "list_UberRidersEmptyVar", "List_UberRidersEmpty", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("List_CinemasEmpty", "list_CinemasEmptyVar", "List_CinemasEmpty", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("labelCategories", "labelCategoriesVar", "labelCategories", true, OS.Types.Text, function () {
return "";
}), 
this.attr("WalletSizeToRemove", "walletSizeToRemoveVar", "WalletSizeToRemove", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("TouchOffsetX", "touchOffsetXVar", "TouchOffsetX", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("WtfCardGenericLabel", "wtfCardGenericLabelVar", "WtfCardGenericLabel", true, OS.Types.Text, function () {
return "";
}), 
this.attr("isLoading", "isLoadingVar", "isLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("HasConnection", "hasConnectionVar", "HasConnection", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsOfflineMode", "isOfflineModeIn", "IsOfflineMode", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isOfflineModeInDataFetchStatus", "_isOfflineModeInDataFetchStatus", "_isOfflineModeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalUSERWTFS", "getLocalUSERWTFSAggr", "getLocalUSERWTFSAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalUSERWTFSAggrRec());
}, GetLocalUSERWTFSAggrRec)
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
Model._hasValidationWidgetsValue = ((((((WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || WTF_MOB_WalletFlow_WalletList_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsInteraction_CustomSwipeEvents_mvcModel.hasValidationWidgets) || MobilePatterns_Utilities_TouchEvents_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsOfflineMode" in inputs) {
this.variables.isOfflineModeIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.IsOfflineMode, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.WalletFlow.Wallet.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Essentials_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.WalletFlow.Wallet.mvc$model", "WTF_MOB.WalletFlow.Wallet.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.WalletFlow.WalletList.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "MobileUIWidgets.WidgetsInteraction.CustomSwipeEvents.mvc$view", "MobilePatterns.Utilities.TouchEvents.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.model$App_WalletCardList", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$GetAllWalletItems", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_BP.model$App_PictureRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Essentials_MOBController, WTF_MBPModel, WTF_MBPController, MobileUIWidgetsController, WTF_BPModel, React, OSView, WTF_MOB_WalletFlow_Wallet_mvc_model, WTF_MOB_WalletFlow_Wallet_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_WalletList_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, MobileUIWidgets_WidgetsInteraction_CustomSwipeEvents_mvc_view, MobilePatterns_Utilities_TouchEvents_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "WalletFlow.Wallet";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.WalletFlow.Wallet.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/CustomTouchEvents.HammerJS.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_WalletList_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, MobileUIWidgets_WidgetsInteraction_CustomSwipeEvents_mvc_view, MobilePatterns_Utilities_TouchEvents_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_Wallet_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_Wallet_mvc_controller;
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
PageTitle: "Wallet",
PageSection: "Wallet",
ContentClass: "b-transparent containerWallet",
WithoutLogin: false,
HasOverflowHidden: true,
IsOfflineMode: model.variables.isOfflineModeIn,
ScreenName: "Wallet",
HasConnection: model.variables.hasConnectionVar,
IsPageLevel1: true,
PageType: "Operação"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
goToOnlineMode$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.noConnectionTryAgainEvent$Action(controller.callContext(eventHandlerContext));
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
placeholders: {
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.afterReadyVar, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.closeWalletListCards$Action(false, controller.callContext(eventHandlerContext));

;
},
style: "back-link",
visible: model.variables.walletListIsOpenVar,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "tTGmg7FANEWp8u9UgIDx4g"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-white",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onIconClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.closeWalletListCards$Action(false, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Text, {
extendedProperties: {
"data-style-key": "Ff8VtdGhtkCMsyCknfUtnA"
},
style: "h3 c-white pl-8",
text: ["Voltar"],
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: !(model.variables.walletListIsOpenVar),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "tKODm1GJ70meOwYBWELEtA"
},
gridProperties: {
marginTop: "20px"
},
visible: !(model.variables.isOfflineModeIn),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: !(model.variables.isOfflineModeIn),
extendedProperties: {
"data-style-key": "JlGETY0txEO2LBMhKfAoBg"
},
gridProperties: {
classes: "OSFillParent"
},
style: "a-link",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom),
url: OS.Navigation.generateScreenURL("/WTF_MOB/HistoryPrizes", {}),
visible: true,
_idProps: {
service: idService,
name: "history"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Histórico")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "a-flexCardTitle app-title text-center"
},
tag: "span",
_idProps: {
service: idService,
name: "CardTitle2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-yellow",
value: "Todas as",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-yellow",
value: "tuas cenas",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (("min-height: calc(100vh - " + (model.variables.walletSizeToRemoveVar).toString()) + "px);")
},
style: model.getCachedValue(idService.getId("HuhrJTsaS0GhXy3jCtk_Fw.Style"), function () {
return ("wallet " + ((model.variables.isOfflineModeIn) ? ("offline") : ("")));
}, function () {
return model.variables.isOfflineModeIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("WWhtZspBjUWZQ+GH_S8xhA.Style"), function () {
return ("contentSliders " + (((model.variables.walletListIsOpenVar === true)) ? ("focused") : ("")));
}, function () {
return model.variables.walletListIsOpenVar;
}),
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.list_GenericVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("generica", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider purple generica",
visible: true,
_idProps: {
service: idService,
name: "GenericContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "generica")),
headerWithImage: false,
IsOffline: model.variables.isOfflineModeIn,
gotobenefit: false,
list: model.variables.list_GenericVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(!(model.variables.list_EquipamentsVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("equipamentos", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider otherblue equipamentos",
visible: true,
_idProps: {
service: idService,
name: "EquipamentsContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
IsOffline: model.variables.isOfflineModeIn,
gotobenefit: false,
headerWithImage: false,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "equipamentos")),
list: model.variables.list_EquipamentsVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "18",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(!(model.variables.list_ComunicationsVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("comunicacoes", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider greenSoft comunicacoes",
visible: true,
_idProps: {
service: idService,
name: "ComunicacoesMoveisContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineModeIn,
headerWithImage: false,
list: model.variables.list_ComunicationsVar,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "comunicacoes")),
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
gotobenefit: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "20",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(!(model.variables.list_FilmesVodVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("filmes", controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("FilmesVodContent.Style"), function () {
return ("wtf-app-slider purple filmes " + ((model.variables.isOfflineModeIn) ? ("grayscale") : ("")));
}, function () {
return model.variables.isOfflineModeIn;
}),
visible: true,
_idProps: {
service: idService,
name: "FilmesVodContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
headerWithImage: false,
IsOffline: model.variables.isOfflineModeIn,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "filmes")),
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
gotobenefit: false,
list: model.variables.list_FilmesVodVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(!(model.variables.list_GoldenVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("golden", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider yellow golden",
visible: true,
_idProps: {
service: idService,
name: "GoldenContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
gotobenefit: false,
headerWithImage: false,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "golden")),
list: model.variables.list_GoldenVar,
IsOffline: model.variables.isOfflineModeIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
}), $if(!(model.variables.list_RevolutVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("revolut", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider blue revolut",
visible: true,
_idProps: {
service: idService,
name: "RevolutContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineModeIn,
headerWithImage: true,
gotobenefit: false,
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "revolut")),
list: model.variables.list_RevolutVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "26",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("revolut", "A WTF põe cash na tua conta Revolut", "blue", controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("RevolutContentEmpty.Style"), function () {
return ("wtf-app-slider blue revolut " + ((model.variables.isOfflineModeIn) ? ("grayscale") : ("")));
}, function () {
return model.variables.isOfflineModeIn;
}),
visible: true,
_idProps: {
service: idService,
name: "RevolutContentEmpty"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
showAll: false,
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
gotobenefit: true,
list: model.variables.list_RevolutEmptyVar,
headerWithImage: true,
IsOffline: model.variables.isOfflineModeIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "28",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}), $if(!(model.variables.list_UberEatsVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("uber-eats", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider green uber-eats",
visible: true,
_idProps: {
service: idService,
name: "UberEatsContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "uber-eats")),
list: model.variables.list_UberEatsVar,
headerWithImage: true,
gotobenefit: false,
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
IsOffline: model.variables.isOfflineModeIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "30",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("uber-eats", "WTF dá-te a taxa de entrega no Uber Eats", "green", controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("UberEatsContentEmpty.Style"), function () {
return ("wtf-app-slider green uber-eats " + ((model.variables.isOfflineModeIn) ? ("grayscale") : ("")));
}, function () {
return model.variables.isOfflineModeIn;
}),
visible: true,
_idProps: {
service: idService,
name: "UberEatsContentEmpty"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
gotobenefit: true,
list: model.variables.list_UberEatsEmptyVar,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "uber-eats")),
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
headerWithImage: true,
IsOffline: model.variables.isOfflineModeIn
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "32",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}), $if(!(model.variables.list_UberRidersVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("uber-riders", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider blue uber-riders",
visible: true,
_idProps: {
service: idService,
name: "UberRidersContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineModeIn,
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "uber-riders")),
headerWithImage: true,
gotobenefit: false,
list: model.variables.list_UberRidersVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "34",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("uber-riders", "WTF dá-te 50% desconto no Uber", "blue", controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("UberRidersContentEmpty.Style"), function () {
return ("wtf-app-slider blue uber-riders " + ((model.variables.isOfflineModeIn) ? ("grayscale") : ("")));
}, function () {
return model.variables.isOfflineModeIn;
}),
visible: true,
_idProps: {
service: idService,
name: "UberRidersContentEmpty"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineModeIn,
showAll: false,
headerWithImage: true,
list: model.variables.list_UberRidersEmptyVar,
gotobenefit: true,
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "36",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}), $if(!(model.variables.list_CinemasVar.isEmpty), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openWalletListCards$Action("cinemas", controller.callContext(eventHandlerContext));
});
;
}
},
style: "wtf-app-slider black cinemas",
visible: true,
_idProps: {
service: idService,
name: "CinemasContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineModeIn,
headerWithImage: true,
list: model.variables.list_CinemasVar,
showAll: (model.variables.walletListIsOpenVar && (model.variables.walletListLabelOpenVar === "cinemas")),
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
gotobenefit: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "38",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("cinemas", "É um lugar para ti e outro para as pipocas", "black", controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("CinemasContentEmpty.Style"), function () {
return ("wtf-app-slider black cinemas " + ((model.variables.isOfflineModeIn) ? ("grayscale") : ("")));
}, function () {
return model.variables.isOfflineModeIn;
}),
visible: true,
_idProps: {
service: idService,
name: "CinemasContentEmpty"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_WalletFlow_WalletList_mvc_view, {
inputs: {
list: model.variables.list_CinemasEmptyVar,
showAll: false,
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar,
gotobenefit: true,
IsOffline: model.variables.isOfflineModeIn,
headerWithImage: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
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
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (("min-height: calc(100vh - " + (model.variables.walletSizeToRemoveVar).toString()) + "px);")
},
style: "skeleton",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardTitle app-title text-center",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "subtitle b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "contentSliders",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-app-slider ",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-item-wtf",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-card b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-content text-center",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "h4",
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "circle"
},
tag: "span",
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-content",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-app-slider",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-item-wtf",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-card b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-content text-center",
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "h4",
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "circle"
},
tag: "span",
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-content",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-app-slider",
visible: true,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-item-wtf",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-card b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-content text-center",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header",
visible: true,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "h4",
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "circle"
},
tag: "span",
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-content",
visible: true,
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-app-slider",
visible: true,
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "list-item-wtf",
visible: true,
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-card b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-content text-center",
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-header",
visible: true,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "h4",
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "circle"
},
tag: "span",
_idProps: {
service: idService,
uuid: "77"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-content",
visible: true,
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))))];
}))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineModeIn,
DemoAppWithoutLogin: false,
Page: "Wallet"
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
uuid: "79",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.list_CinemasEmptyVar), asPrimitiveValue(model.variables.list_CinemasVar), asPrimitiveValue(model.variables.list_UberRidersEmptyVar), asPrimitiveValue(model.variables.list_UberRidersVar), asPrimitiveValue(model.variables.list_UberEatsEmptyVar), asPrimitiveValue(model.variables.list_UberEatsVar), asPrimitiveValue(model.variables.list_RevolutEmptyVar), asPrimitiveValue(model.variables.list_RevolutVar), asPrimitiveValue(model.variables.list_GoldenVar), asPrimitiveValue(model.variables.list_FilmesVodVar), asPrimitiveValue(model.variables.list_ComunicationsVar), asPrimitiveValue(model.variables.list_EquipamentsVar), asPrimitiveValue(model.variables.walletListLabelOpenVar), asPrimitiveValue(model.variables.wtfCardGenericLabelVar), asPrimitiveValue(model.variables.list_GenericVar), asPrimitiveValue(model.variables.walletSizeToRemoveVar), asPrimitiveValue(model.variables.isOfflineModeIn), asPrimitiveValue(model.variables.walletListIsOpenVar), asPrimitiveValue(model.variables.afterReadyVar)]
}), React.createElement(MobileUIWidgets_WidgetsInteraction_CustomSwipeEvents_mvc_view, {
inputs: {
WidgetId: idService.getId("Content")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
swipeDown$Action: function () {
var eventHandlerContext = callContext.clone();
controller.closeWalletListCards$Action(true, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "80",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobilePatterns_Utilities_TouchEvents_mvc_view, {
inputs: {
PreventDefaults: false,
WidgetId: idService.getId("Content")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
move$Action: function (xIn, yIn, offsetXIn, offsetYIn, evtIn) {
var eventHandlerContext = callContext.clone();
controller.touchEventsMove$Action(offsetXIn, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "81",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "82",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.WalletFlow.Wallet.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Essentials_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MOB.languageResources", "WTF_MOB.WalletFlow.controller", "WTF_MOB.WalletFlow.Wallet.mvc$controller.OpenWalletListCards.JavaScript1JS", "WTF_MOB.WalletFlow.Wallet.mvc$controller.GetLocalUSERWTFSOnAfterFetch.GetSizesJS", "WTF_MOB.WalletFlow.Wallet.mvc$controller.GetLocalUSERWTFSOnAfterFetch.SetCheckNetworkIntervalJS", "WTF_MOB.WalletFlow.Wallet.mvc$controller.OnDestroy.RemoveSetIntervalJS", "WTF_MOB.WalletFlow.Wallet.mvc$controller.CloseWalletListCards.JavaScriptJS", "WTF_MOB.model$App_WalletCardList", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$GetAllWalletItems", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_BP.model$App_PictureRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Essentials_MOBController, WTF_MBPModel, WTF_MBPController, MobileUIWidgetsController, WTF_BPModel, WTF_MOBLanguageResources, WTF_MOB_WalletFlowController, WTF_MOB_WalletFlow_Wallet_mvc_controller_OpenWalletListCards_JavaScript1JS, WTF_MOB_WalletFlow_Wallet_mvc_controller_GetLocalUSERWTFSOnAfterFetch_GetSizesJS, WTF_MOB_WalletFlow_Wallet_mvc_controller_GetLocalUSERWTFSOnAfterFetch_SetCheckNetworkIntervalJS, WTF_MOB_WalletFlow_Wallet_mvc_controller_OnDestroy_RemoveSetIntervalJS, WTF_MOB_WalletFlow_Wallet_mvc_controller_CloseWalletListCards_JavaScriptJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
checkNetwork$Action: function () {
return controller.executeActionInsideJSNode(controller._checkNetwork$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLocalUSERWTFS$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

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
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
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
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalUSERWTFSAggr;
}, function () {
return controller._getLocalUSERWTFSOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTFS$AggrRefresh"];
// Client Actions
Controller.prototype._checkNetwork$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CheckNetwork");
callContext = controller.callContext(callContext);
var checkNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CheckNetworkStatus
model.flush();
return Essentials_MOBController.default.checkNetworkStatus$Action(callContext).then(function (value) {
checkNetworkStatusVar.value = value;
}).then(function () {
// HasConnection = CheckNetworkStatus.isOnline
model.variables.hasConnectionVar = checkNetworkStatusVar.value.isOnlineOut;
});
});
};
Controller.prototype._openWalletListCards$Action = function (labelIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenWalletListCards");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.Wallet.OpenWalletListCards$vars"))());
vars.value.labelInLocal = labelIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!((model.variables.isOfflineModeIn && (vars.value.labelInLocal === "filmes"))))) {
return OS.Flow.executeSequence(function () {
if((model.variables.walletListIsOpenVar)) {
if((!((vars.value.labelInLocal === model.variables.walletListLabelOpenVar)))) {
// Execute Action: CloseWalletListCards
controller._closeWalletListCards$Action(false, callContext);
}

} else {
// WalletListIsOpen = True
model.variables.walletListIsOpenVar = true;
// WalletListLabelOpen = Label
model.variables.walletListLabelOpenVar = vars.value.labelInLocal;
controller.safeExecuteJSNode(WTF_MOB_WalletFlow_Wallet_mvc_controller_OpenWalletListCards_JavaScript1JS, "JavaScript1", "OpenWalletListCards", {
label: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.walletListLabelOpenVar, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet_cards", vars.value.labelInLocal, 0, "", callContext);
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("Wallet.OpenWalletListCards", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.Wallet.OpenWalletListCards$vars", [{
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._noConnectionTryAgainEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NoConnectionTryAgainEvent");
callContext = controller.callContext(callContext);
var checkNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// isLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet", "Modo Online", 0, "", callContext).then(function () {
// Execute Action: CheckNetworkStatus
model.flush();
return Essentials_MOBController.default.checkNetworkStatus$Action(callContext).then(function (value) {
checkNetworkStatusVar.value = value;
});
}).then(function () {
if((checkNetworkStatusVar.value.isOnlineOut)) {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// isLoading = False
model.variables.isLoadingVar = false;
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
Controller.prototype._removeCard$Action = function (positionIn, categoryIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RemoveCard");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.Wallet.RemoveCard$vars"))());
vars.value.positionInLocal = positionIn;
vars.value.categoryInLocal = categoryIn;
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet", ("Remove card - " + vars.value.categoryInLocal), 0, "", callContext).then(function () {
if(((vars.value.categoryInLocal === "Equipamentos"))) {
// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.list_EquipamentsVar, vars.value.positionInLocal, callContext);
// length
// length = List_Equipaments.Length
vars.value.lengthVar = model.variables.list_EquipamentsVar.length;
} else {
if((vars.value.categoryInLocal === "Comunicações")) {
// Execute Action: ListRemove2
OS.SystemActions.listRemove(model.variables.list_ComunicationsVar, vars.value.positionInLocal, callContext);
// length
// length = List_Comunications.Length
vars.value.lengthVar = model.variables.list_ComunicationsVar.length;
} else {
if((vars.value.categoryInLocal === "Filmes")) {
// Execute Action: ListRemove3
OS.SystemActions.listRemove(model.variables.list_FilmesVodVar, vars.value.positionInLocal, callContext);
// length
// length = List_FilmesVod.Length
vars.value.lengthVar = model.variables.list_FilmesVodVar.length;
} else {
if((vars.value.categoryInLocal === "Uber Eats")) {
// Execute Action: ListRemove4
OS.SystemActions.listRemove(model.variables.list_UberEatsVar, vars.value.positionInLocal, callContext);
// length
// length = List_UberEats.Length
vars.value.lengthVar = model.variables.list_UberEatsVar.length;
} else {
if((vars.value.categoryInLocal === "Uber Riders")) {
// Execute Action: ListRemove5
OS.SystemActions.listRemove(model.variables.list_UberRidersVar, vars.value.positionInLocal, callContext);
// length
// length = List_UberRiders.Length
vars.value.lengthVar = model.variables.list_UberRidersVar.length;
} else {
if((vars.value.categoryInLocal === "Cinemas")) {
// Execute Action: ListRemove6
OS.SystemActions.listRemove(model.variables.list_CinemasVar, vars.value.positionInLocal, callContext);
// length
// length = List_Cinemas.Length
vars.value.lengthVar = model.variables.list_CinemasVar.length;
} else {
if((vars.value.categoryInLocal === "Golden")) {
// Execute Action: ListRemove7
OS.SystemActions.listRemove(model.variables.list_GoldenVar, vars.value.positionInLocal, callContext);
// length
// length = List_Golden.Length
vars.value.lengthVar = model.variables.list_GoldenVar.length;
} else {
if((vars.value.categoryInLocal === model.variables.wtfCardGenericLabelVar)) {
// Execute Action: ListRemove8
OS.SystemActions.listRemove(model.variables.list_GenericVar, vars.value.positionInLocal, callContext);
// length
// length = List_Generic.Length
vars.value.lengthVar = model.variables.list_GenericVar.length;
} else {
if((vars.value.categoryInLocal === "Revolut")) {
// Execute Action: ListRemove9
OS.SystemActions.listRemove(model.variables.list_RevolutVar, vars.value.positionInLocal, callContext);
// length
// length = List_Revolut.Length
vars.value.lengthVar = model.variables.list_RevolutVar.length;
} else {
return OS.Flow.returnAsync();

}

}

}

}

}

}

}

}

}

if(((vars.value.lengthVar === 0))) {
// Execute Action: CloseWalletListCards
controller._closeWalletListCards$Action(false, callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.Wallet.RemoveCard$vars", [{
name: "position",
attrName: "positionInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "length",
attrName: "lengthVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._touchEventsMove$Action = function (offsetXIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TouchEventsMove");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.Wallet.TouchEventsMove$vars"))());
vars.value.offsetXInLocal = offsetXIn;
// TouchOffsetX = OffsetX
model.variables.touchOffsetXVar = vars.value.offsetXInLocal;
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.Wallet.TouchEventsMove$vars", [{
name: "OffsetX",
attrName: "offsetXInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}]);
Controller.prototype._getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFSOnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAndSyncLocalPictureById4Var = new OS.DataTypes.VariableHolder();
var getAllWalletItemsVar = new OS.DataTypes.VariableHolder();
var getAndSyncLocalPictureByIdVar = new OS.DataTypes.VariableHolder();
var getAndSyncLocalPictureById2Var = new OS.DataTypes.VariableHolder();
var getWTFGenericLabelCardVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getAndSyncLocalPictureById3Var = new OS.DataTypes.VariableHolder();
var getConfigValueAsText_MBPVar = new OS.DataTypes.VariableHolder();
var getSizesJSResult = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Wallet"
model.variables.analyticsAuxVarVar.traceNameAttr = "Wallet";
// AnalyticsAuxVar.Category = "Wallet"
model.variables.analyticsAuxVarVar.categoryAttr = "Wallet";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Aggregate: GetLocalACCESSTOKENINFO
var getLocalACCESSTOKENINFOAggr = function (maxRecords) {
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
return getLocalACCESSTOKENINFOVar.value;
});
};
return getLocalACCESSTOKENINFOAggr();
}).then(function () {
// Execute Action: GetAllWalletItems
model.flush();
return WTF_MBPController.default.getAllWalletItems$Action(model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, getLocalACCESSTOKENINFOVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, false, model.variables.isOfflineModeIn, callContext).then(function (value) {
getAllWalletItemsVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getAllWalletItemsVar.value.successOut)) {
// SetLists
// List_Equipaments = GetAllWalletItems.List_Equipments
model.variables.list_EquipamentsVar = getAllWalletItemsVar.value.list_EquipmentsOut;
// List_Comunications = GetAllWalletItems.List_Comunications
model.variables.list_ComunicationsVar = getAllWalletItemsVar.value.list_ComunicationsOut;
// List_FilmesVod = GetAllWalletItems.List_FilmesVod
model.variables.list_FilmesVodVar = getAllWalletItemsVar.value.list_FilmesVodOut;
// List_UberEats = GetAllWalletItems.List_UberEats
model.variables.list_UberEatsVar = getAllWalletItemsVar.value.list_UberEatsOut;
// List_UberRiders = GetAllWalletItems.List_UberRiders
model.variables.list_UberRidersVar = getAllWalletItemsVar.value.list_UberRidersOut;
// List_Cinemas = GetAllWalletItems.List_Cinemas
model.variables.list_CinemasVar = getAllWalletItemsVar.value.list_CinemasOut;
// List_Golden = GetAllWalletItems.List_Golden
model.variables.list_GoldenVar = getAllWalletItemsVar.value.list_GoldenOut;
// List_UberEatsEmpty = GetAllWalletItems.List_UberEatsEmpty
model.variables.list_UberEatsEmptyVar = getAllWalletItemsVar.value.list_UberEatsEmptyOut;
// List_UberRidersEmpty = GetAllWalletItems.List_UberRidersEmpty
model.variables.list_UberRidersEmptyVar = getAllWalletItemsVar.value.list_UberRidersEmptyOut;
// List_CinemasEmpty = GetAllWalletItems.List_CinemasEmpty
model.variables.list_CinemasEmptyVar = getAllWalletItemsVar.value.list_CinemasEmptyOut;
// List_Generic = GetAllWalletItems.List_Generic
model.variables.list_GenericVar = getAllWalletItemsVar.value.list_GenericOut;
// List_Revolut = GetAllWalletItems.List_Revolut
model.variables.list_RevolutVar = getAllWalletItemsVar.value.list_RevolutOut;
// List_RevolutEmpty = GetAllWalletItems.List_RevolutEmpty
model.variables.list_RevolutEmptyVar = getAllWalletItemsVar.value.list_RevolutEmptyOut;
// Foreach List_Equipaments
callContext.iterationContext.registerIterationStart(model.variables.list_EquipamentsVar);
return OS.Flow.tryFinally(function () {
var list_EquipamentsIterator = callContext.iterationContext.getIterator(model.variables.list_EquipamentsVar);
var list_EquipamentsIndex = 0;
return OS.Flow.whileAsync(function () {
return ((list_EquipamentsIndex < model.variables.list_EquipamentsVar.length));
}, function () {
list_EquipamentsIterator.currentRowNumber = list_EquipamentsIndex;
// Execute Action: GetAndSyncLocalPictureById
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.list_EquipamentsVar.getItem(list_EquipamentsIndex.valueOf()).app_PictureAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureByIdVar.value = value;
}).then(function () {
// List_Equipaments.Current.App_Picture = GetAndSyncLocalPictureById.Picture
model.variables.list_EquipamentsVar.getItem(list_EquipamentsIndex.valueOf()).app_PictureAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureByIdVar.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
}).then(function () {
list_EquipamentsIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.list_EquipamentsVar);
}).then(function () {
// Foreach List_Comunications
callContext.iterationContext.registerIterationStart(model.variables.list_ComunicationsVar);
return OS.Flow.tryFinally(function () {
var list_ComunicationsIterator = callContext.iterationContext.getIterator(model.variables.list_ComunicationsVar);
var list_ComunicationsIndex = 0;
return OS.Flow.whileAsync(function () {
return ((list_ComunicationsIndex < model.variables.list_ComunicationsVar.length));
}, function () {
list_ComunicationsIterator.currentRowNumber = list_ComunicationsIndex;
// Execute Action: GetAndSyncLocalPictureById2
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.list_ComunicationsVar.getItem(list_ComunicationsIndex.valueOf()).app_PictureAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureById2Var.value = value;
}).then(function () {
// List_Comunications.Current.App_Picture = GetAndSyncLocalPictureById2.Picture
model.variables.list_ComunicationsVar.getItem(list_ComunicationsIndex.valueOf()).app_PictureAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureById2Var.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
}).then(function () {
list_ComunicationsIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.list_ComunicationsVar);
});
}).then(function () {
// Foreach List_Golden
callContext.iterationContext.registerIterationStart(model.variables.list_GoldenVar);
return OS.Flow.tryFinally(function () {
var list_GoldenIterator = callContext.iterationContext.getIterator(model.variables.list_GoldenVar);
var list_GoldenIndex = 0;
return OS.Flow.whileAsync(function () {
return ((list_GoldenIndex < model.variables.list_GoldenVar.length));
}, function () {
list_GoldenIterator.currentRowNumber = list_GoldenIndex;
// Execute Action: GetAndSyncLocalPictureById3
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.list_GoldenVar.getItem(list_GoldenIndex.valueOf()).app_PictureAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureById3Var.value = value;
}).then(function () {
// List_Golden.Current.App_Picture = GetAndSyncLocalPictureById3.Picture
model.variables.list_GoldenVar.getItem(list_GoldenIndex.valueOf()).app_PictureAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureById3Var.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
}).then(function () {
list_GoldenIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.list_GoldenVar);
});
}).then(function () {
// Foreach List_Generic
callContext.iterationContext.registerIterationStart(model.variables.list_GenericVar);
return OS.Flow.tryFinally(function () {
var list_GenericIterator = callContext.iterationContext.getIterator(model.variables.list_GenericVar);
var list_GenericIndex = 0;
return OS.Flow.whileAsync(function () {
return ((list_GenericIndex < model.variables.list_GenericVar.length));
}, function () {
list_GenericIterator.currentRowNumber = list_GenericIndex;
// Execute Action: GetAndSyncLocalPictureById4
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.list_GenericVar.getItem(list_GenericIndex.valueOf()).app_PictureAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureById4Var.value = value;
}).then(function () {
// List_Generic.Current.App_Picture = GetAndSyncLocalPictureById4.Picture
model.variables.list_GenericVar.getItem(list_GenericIndex.valueOf()).app_PictureAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureById4Var.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
}).then(function () {
list_GenericIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.list_GenericVar);
});
}).then(function () {
// afterReady = True
model.variables.afterReadyVar = true;
getSizesJSResult.value = controller.safeExecuteJSNode(WTF_MOB_WalletFlow_Wallet_mvc_controller_GetLocalUSERWTFSOnAfterFetch_GetSizesJS, "GetSizes", "GetLocalUSERWTFSOnAfterFetch", {
WalletContainer: OS.DataTypes.JSConversions.basicTypeToJS(0, OS.Types.Integer, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.Wallet.GetLocalUSERWTFSOnAfterFetch$getSizesJSResult"))();
jsNodeResult.walletContainerOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.WalletContainer, OS.Types.Integer);
return jsNodeResult;
}, {}, {});
// SetWalletSizeToRemove
// WalletSizeToRemove = GetSizes.WalletContainer
model.variables.walletSizeToRemoveVar = getSizesJSResult.value.walletContainerOut;
// Execute Action: GetWTFGenericLabelCard
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTFGenericLabelCard", callContext).then(function (value) {
getWTFGenericLabelCardVar.value = value;
}).then(function () {
// Labels
// WtfCardGenericLabel = GetWTFGenericLabelCard.Value
model.variables.wtfCardGenericLabelVar = getWTFGenericLabelCardVar.value.valueOut;
// labelCategories = If + If + If + If + If + If + If + If
model.variables.labelCategoriesVar = (((((((((!(model.variables.list_EquipamentsVar.isEmpty)) ? (model.variables.list_EquipamentsVar.getCurrent(callContext.iterationContext).categoryLabelAttr) : ("")) + ((!(model.variables.list_ComunicationsVar.isEmpty)) ? ((", " + model.variables.list_ComunicationsVar.getCurrent(callContext.iterationContext).categoryLabelAttr)) : (""))) + ((!(model.variables.list_FilmesVodVar.isEmpty)) ? ((", " + model.variables.list_FilmesVodVar.getCurrent(callContext.iterationContext).categoryLabelAttr)) : (""))) + ((!(model.variables.list_UberEatsVar.isEmpty)) ? ((", " + model.variables.list_UberEatsVar.getCurrent(callContext.iterationContext).categoryLabelAttr)) : (""))) + ((!(model.variables.list_UberRidersVar.isEmpty)) ? ((", " + model.variables.list_UberRidersVar.getCurrent(callContext.iterationContext).categoryLabelAttr)) : (""))) + ((!(model.variables.list_CinemasVar.isEmpty)) ? ((", " + model.variables.list_CinemasVar.getCurrent(callContext.iterationContext).categoryLabelAttr)) : (""))) + ((!(model.variables.list_GoldenVar.isEmpty)) ? ((", " + model.variables.list_GoldenVar.getCurrent(callContext.iterationContext).categoryLabelAttr)) : (""))) + ((!(model.variables.list_GenericVar.isEmpty)) ? (model.variables.wtfCardGenericLabelVar) : ("")));
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("pageload", "Wallet_cards", model.variables.labelCategoriesVar, 0, "", callContext);
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.isOfflineModeIn)) {
// Execute Action: GetConfigValueAsText_MBP
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("OFFLINE_CHECKNETWORK_INTERVAL", callContext).then(function (value) {
getConfigValueAsText_MBPVar.value = value;
}).then(function () {
controller.safeExecuteJSNode(WTF_MOB_WalletFlow_Wallet_mvc_controller_GetLocalUSERWTFSOnAfterFetch_SetCheckNetworkIntervalJS, "SetCheckNetworkInterval", "GetLocalUSERWTFSOnAfterFetch", {
NetworkInterval: OS.DataTypes.JSConversions.basicTypeToJS(((((OS.BuiltinFunctions.textToInteger(getConfigValueAsText_MBPVar.value.valueOut) > 0)) ? (OS.BuiltinFunctions.textToInteger(getConfigValueAsText_MBPVar.value.valueOut)) : (1)) * 1000), OS.Types.Integer, true)
}, function ($parameters) {
}, {
CheckNetwork: controller.clientActionProxies.checkNetwork$Action
}, {});
// Execute Action: CheckNetwork
return controller._checkNetwork$Action(callContext);
});
}

});
}).then(function () {
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
});
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(getAllWalletItemsVar.value.messageOut, 3, true, "icon-message_insuccess", true, false, 3000, "", "-large", callContext);
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Wallet.GetLocalUSERWTFSOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
return OS.Flow.executeSequence(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
return OS.Flow.returnAsync();

} else {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
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
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.Wallet.GetLocalUSERWTFSOnAfterFetch$getSizesJSResult", [{
name: "WalletContainer",
attrName: "walletContainerOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
controller.safeExecuteJSNode(WTF_MOB_WalletFlow_Wallet_mvc_controller_OnDestroy_RemoveSetIntervalJS, "RemoveSetInterval", "OnDestroy", null, function ($parameters) {
}, {}, {});
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
};
Controller.prototype._closeWalletListCards$Action = function (isFromSwipeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CloseWalletListCards");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.Wallet.CloseWalletListCards$vars"))());
vars.value.isFromSwipeInLocal = isFromSwipeIn;
if((vars.value.isFromSwipeInLocal)) {
if((!((model.variables.touchOffsetXVar.gt(OS.BuiltinFunctions.integerToDecimal(-30)) && model.variables.touchOffsetXVar.lt(OS.BuiltinFunctions.integerToDecimal(30)))))) {
return ;

}

}

controller.safeExecuteJSNode(WTF_MOB_WalletFlow_Wallet_mvc_controller_CloseWalletListCards_JavaScriptJS, "JavaScript", "CloseWalletListCards", null, function ($parameters) {
}, {}, {});
// WalletListIsOpen = False
model.variables.walletListIsOpenVar = false;
// WalletListLabelOpen = ""
model.variables.walletListLabelOpenVar = "";
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.Wallet.CloseWalletListCards$vars", [{
name: "IsFromSwipe",
attrName: "isFromSwipeInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._goToBenefit$Action = function (categoryIn, subtitleIn, background_colorIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToBenefit");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.Wallet.GoToBenefit$vars"))());
vars.value.categoryInLocal = categoryIn;
vars.value.subtitleInLocal = subtitleIn;
vars.value.background_colorInLocal = background_colorIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isOfflineModeIn))) {
return OS.Flow.executeSequence(function () {
if((model.variables.walletListIsOpenVar)) {
// Execute Action: CloseWalletListCards
controller._closeWalletListCards$Action(false, callContext);
} else {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Saucy_beneficios", vars.value.categoryInLocal, 0, "", callContext).then(function () {
// Destination: /WTF_MOB/Benefits
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Benefits", {
Subtitle: vars.value.subtitleInLocal,
Origin: "Wallet",
Background_color: vars.value.background_colorInLocal,
Category: vars.value.categoryInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("Wallet.GoToBenefit", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.Wallet.GoToBenefit$vars", [{
name: "Category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Subtitle",
attrName: "subtitleInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Background_color",
attrName: "background_colorInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.checkNetwork$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._checkNetwork$Action, callContext);

};
Controller.prototype.openWalletListCards$Action = function (labelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openWalletListCards$Action, callContext, labelIn);

};
Controller.prototype.noConnectionTryAgainEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._noConnectionTryAgainEvent$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.removeCard$Action = function (positionIn, categoryIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._removeCard$Action, callContext, positionIn, categoryIn);

};
Controller.prototype.touchEventsMove$Action = function (offsetXIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._touchEventsMove$Action, callContext, offsetXIn);

};
Controller.prototype.getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFSOnAfterFetch$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.closeWalletListCards$Action = function (isFromSwipeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeWalletListCards$Action, callContext, isFromSwipeIn);

};
Controller.prototype.goToBenefit$Action = function (categoryIn, subtitleIn, background_colorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToBenefit$Action, callContext, categoryIn, subtitleIn, background_colorIn);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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
return WTF_MOB_WalletFlowController.default.handleError(ex, this.callContext());
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
define("WTF_MOB.WalletFlow.Wallet.mvc$controller.OpenWalletListCards.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.querySelectorAll(".wtf-app-slider." + $parameters.label)[0].classList.add("active");

document.getElementsByClassName( "containerWallet")[ 0].scrollTop = 0;
};
});
define("WTF_MOB.WalletFlow.Wallet.mvc$controller.GetLocalUSERWTFSOnAfterFetch.GetSizesJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var header = document.querySelector('.a-header');
var bottom = document.querySelector('.bottom');
var headerHeight = 56; //default
var bottomHeight = 50; //default

if(header) {
    headerHeight = header.getClientRects()[0].height;
}

if(bottom) {
    bottomHeight = bottom.getClientRects()[0].height;
}

$parameters.WalletContainer = headerHeight + bottomHeight;
};
});
define("WTF_MOB.WalletFlow.Wallet.mvc$controller.GetLocalUSERWTFSOnAfterFetch.SetCheckNetworkIntervalJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
clearInterval(window.Wallet_CheckNetwork_SetInterval);
window.Wallet_CheckNetwork_SetInterval = setInterval(function() {
    $actions.CheckNetwork();
}, $parameters.NetworkInterval);
};
});
define("WTF_MOB.WalletFlow.Wallet.mvc$controller.OnDestroy.RemoveSetIntervalJS", [], function () {
return function ($actions, $roles, $public) {
clearInterval(window.Wallet_CheckNetwork_SetInterval);
};
});
define("WTF_MOB.WalletFlow.Wallet.mvc$controller.CloseWalletListCards.JavaScriptJS", [], function () {
return function ($actions, $roles, $public) {
var r= document.querySelectorAll(".wtf-app-slider");

for(var i=0; i<r.length; i++)
    r[i].classList.remove("active");
};
});

