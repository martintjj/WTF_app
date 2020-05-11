define("WTF_MOB.SaucyFlow.Saucy.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "WTF_MOB.SaucyFlow.HotDeals_MiniSlider.mvc$model", "WTF_MOB.SaucyFlow.Promos_MiniSlider.mvc$model", "WTF_MOB.SaucyFlow.Promos_DetailSlider.mvc$model", "WTF_MOB.SaucyFlow.HotDeal_DetailSlider.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.model$App_HotDealsMBPList", "WTF_MOB.model$App_PromotionsMBPList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$App_HotDealsMBPRec", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$GetPromotionsAndHotDealsActive", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, WTF_MOB_Common_Layout_Lvl1_mvcModel, WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvcModel, WTF_MOB_SaucyFlow_Promos_MiniSlider_mvcModel, WTF_MOB_SaucyFlow_Promos_DetailSlider_mvcModel, WTF_MOB_SaucyFlow_HotDeal_DetailSlider_mvcModel, WTF_MOB_Common_BottomBar_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalUSERWTFAggrRec = (function (_super) {
__extends(GetLocalUSERWTFAggrRec, _super);
function GetLocalUSERWTFAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalUSERWTFAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetLocalUSERWTFAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalUSERWTFAggrRec.init();
return GetLocalUSERWTFAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("afterReady", "afterReadyVar", "afterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("hotdeals_list", "hotdeals_listVar", "hotdeals_list", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_HotDealsMBPList());
}, WTF_MOBModel.App_HotDealsMBPList), 
this.attr("promotions_list", "promotions_listVar", "promotions_list", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PromotionsMBPList());
}, WTF_MOBModel.App_PromotionsMBPList), 
this.attr("HotDealdetail", "hotDealdetailVar", "HotDealdetail", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_HotDealsMBPRec());
}, WTF_MBPModel.App_HotDealsMBPRec), 
this.attr("HotDealdetail_empty", "hotDealdetail_emptyVar", "HotDealdetail_empty", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_HotDealsMBPRec());
}, WTF_MBPModel.App_HotDealsMBPRec), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("messageForEmptyHotDeals", "messageForEmptyHotDealsVar", "messageForEmptyHotDeals", true, OS.Types.Text, function () {
return "";
}), 
this.attr("saucy_range", "saucy_rangeVar", "saucy_range", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("Promosdetail", "promosdetailVar", "Promosdetail", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_PromotionsMBPRec());
}, WTF_MBPModel.App_PromotionsMBPRec), 
this.attr("Promosdetail_empty", "promosdetail_emptyVar", "Promosdetail_empty", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_PromotionsMBPRec());
}, WTF_MBPModel.App_PromotionsMBPRec), 
this.attr("IndexToOpen", "indexToOpenVar", "IndexToOpen", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("openDetail", "openDetailIn", "openDetail", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_openDetailInDataFetchStatus", "_openDetailInDataFetchStatus", "_openDetailInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("categoryToOpenDetail", "categoryToOpenDetailIn", "categoryToOpenDetail", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_categoryToOpenDetailInDataFetchStatus", "_categoryToOpenDetailInDataFetchStatus", "_categoryToOpenDetailInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalUSERWTF", "getLocalUSERWTFAggr", "getLocalUSERWTFAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalUSERWTFAggrRec());
}, GetLocalUSERWTFAggrRec)
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
Model._hasValidationWidgetsValue = ((((((WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets || WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvcModel.hasValidationWidgets) || WTF_MOB_SaucyFlow_Promos_MiniSlider_mvcModel.hasValidationWidgets) || WTF_MOB_SaucyFlow_Promos_DetailSlider_mvcModel.hasValidationWidgets) || WTF_MOB_SaucyFlow_HotDeal_DetailSlider_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("openDetail" in inputs) {
this.variables.openDetailIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.openDetail, OS.Types.Boolean);
}

if("categoryToOpenDetail" in inputs) {
this.variables.categoryToOpenDetailIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.categoryToOpenDetail, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.Saucy.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.Saucy.mvc$model", "WTF_MOB.SaucyFlow.Saucy.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.SaucyFlow.HotDeals_MiniSlider.mvc$view", "WTF_MOB.SaucyFlow.Promos_MiniSlider.mvc$view", "WTF_MOB.SaucyFlow.Promos_DetailSlider.mvc$view", "WTF_MOB.SaucyFlow.HotDeal_DetailSlider.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.model$App_HotDealsMBPList", "WTF_MOB.model$App_PromotionsMBPList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$App_HotDealsMBPRec", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$GetPromotionsAndHotDealsActive", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, React, OSView, WTF_MOB_SaucyFlow_Saucy_mvc_model, WTF_MOB_SaucyFlow_Saucy_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_view, WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_view, WTF_MOB_SaucyFlow_Promos_DetailSlider_mvc_view, WTF_MOB_SaucyFlow_HotDeal_DetailSlider_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "SaucyFlow.Saucy";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.SaucyFlow.Saucy.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_view, WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_view, WTF_MOB_SaucyFlow_Promos_DetailSlider_mvc_view, WTF_MOB_SaucyFlow_HotDeal_DetailSlider_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Saucy_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Saucy_mvc_controller;
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
ScreenName: "Saucy",
IsPageLevel1: true,
ContentClass: "b-transparent saucy",
WithoutLogin: false,
PageTitle: "Saucy",
PageType: "Operação",
IsOfflineMode: false,
PageSection: "Saucy"
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
return [$if(model.variables.afterReadyVar, false, this, function () {
return [$if((model.variables.openDetailIn === false), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "1"
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
value: "Tão quente",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-yellow",
value: "que até ferve",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: " ml-16 a-textRead c-white -uppercase  -fowardSlash -ellipsis",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: " -bold",
value: "Sempre que precises",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "options pv-16",
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
"data-style-key": "byJwoz86cES4bDFlfigIWQ"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("revolut", "A WTF põe cash na tua conta Revolut", "blue", controller.callContext(eventHandlerContext));
});
;
},
style: "opt blue_r ml-16",
visible: true,
_idProps: {
service: idService,
name: "RevolutBenefit"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "logo_brand",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.revolutlogo.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.plus.svg"),
style: "plus",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
style: "icon_brand",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("cinemas", "É um lugar para ti e outro para as pipocas", "black", controller.callContext(eventHandlerContext));
});
;
},
style: "opt black",
visible: true,
_idProps: {
service: idService,
name: "CinemasBenefit"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "logo_brand",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.cinemas_logo.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.plus.svg"),
style: "plus",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
style: "icon_brand",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("uber-eats", "WTF dá-te a taxa de entrega no Uber Eats", "green", controller.callContext(eventHandlerContext));
});
;
},
style: "opt green",
visible: true,
_idProps: {
service: idService,
name: "UberEatsBenefit"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "logo_brand",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.ubereats_vertical.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.plus.svg"),
style: "plus",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
style: "icon_brand",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToBenefit$Action("uber-riders", "WTF dá-te 50% desconto no Uber", "blue", controller.callContext(eventHandlerContext));
});
;
},
style: "opt blue mr-16",
visible: true,
_idProps: {
service: idService,
name: "UberBenefit"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "logo_brand",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.uber.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.plus.svg"),
style: "plus",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline ThemeGrid_MarginGutter"
},
style: "icon_brand",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), $if((model.variables.saucy_rangeVar === 1), false, this, function () {
return [React.createElement(WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_view, {
inputs: {
messageForEmpty: model.variables.messageForEmptyHotDealsVar,
hotdeals_list: model.variables.hotdeals_listVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
eventCountdownUntilDateCountdownFinished$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.countdownUntilDateCountdownFinished$Action(controller.callContext(eventHandlerContext));
});
;
},
eventOpenDetail$Action: function (categoryIn, detailToOpenIn, currentRowNumberIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openDetailHotDeals$Action(detailToOpenIn, categoryIn, currentRowNumberIn, controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_view, {
inputs: {
promotions_list: model.variables.promotions_listVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
eventOpenDetail$Action: function (categoryIn, detailToOpenIn, currentRowNumberIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openDetailPromos$Action(detailToOpenIn, categoryIn, currentRowNumberIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "31",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_view, {
inputs: {
promotions_list: model.variables.promotions_listVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
eventOpenDetail$Action: function (categoryIn, detailToOpenIn, currentRowNumberIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openDetailPromos$Action(detailToOpenIn, categoryIn, currentRowNumberIn, controller.callContext(eventHandlerContext));
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_view, {
inputs: {
messageForEmpty: model.variables.messageForEmptyHotDealsVar,
hotdeals_list: model.variables.hotdeals_listVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
eventCountdownUntilDateCountdownFinished$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.countdownUntilDateCountdownFinished$Action(controller.callContext(eventHandlerContext));
});
;
},
eventOpenDetail$Action: function (categoryIn, detailToOpenIn, currentRowNumberIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openDetailHotDeals$Action(detailToOpenIn, categoryIn, currentRowNumberIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "33",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [$if((model.variables.categoryToOpenDetailIn === "Promos"), false, this, function () {
return [React.createElement(WTF_MOB_SaucyFlow_Promos_DetailSlider_mvc_view, {
inputs: {
PromosList: model.variables.promotions_listVar,
IndexToOpenOn: model.variables.indexToOpenVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
countdownFinished$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.countdownUntilDateCountdownFinished$Action(controller.callContext(eventHandlerContext));
});
;
},
closeDetailSliderEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeDetail$Action(controller.callContext(eventHandlerContext));
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
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(WTF_MOB_SaucyFlow_HotDeal_DetailSlider_mvc_view, {
inputs: {
DetailList: model.variables.hotdeals_listVar,
IndexToOpenOn: model.variables.indexToOpenVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closeDetailSliderEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeDetail$Action(controller.callContext(eventHandlerContext));
});
;
},
countdownFinished$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.countdownUntilDateCountdownFinished$Action(controller.callContext(eventHandlerContext));
});
;
},
showLoading$Action: function (showIn) {
var eventHandlerContext = callContext.clone();
controller.showLoading$Action(showIn, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "35",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "skeleton pt-24",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "subtitle b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-left  pv-32",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-skeletonCard_title w-30 ml-16",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "options pv-16",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "V7psYGT7IESQ8pKk7bYFCw"
},
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "opt  b-warmPurple_strong  ml-16",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "opt  b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "opt  b-warmPurple_strong",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-left",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-skeletonCard_title w-30 ml-16",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-app-slider pv-16",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item-container",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft ml-16",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-left   pt-32",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-skeletonCard_title w-30 ml-16",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-app-slider pv-16",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item-container",
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft ml-16",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item  b-warmPurple_soft",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
Page: "Saucy",
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
uuid: "63",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.indexToOpenVar), asPrimitiveValue(model.variables.categoryToOpenDetailIn), asPrimitiveValue(model.variables.promotions_listVar), asPrimitiveValue(model.variables.hotdeals_listVar), asPrimitiveValue(model.variables.messageForEmptyHotDealsVar), asPrimitiveValue(model.variables.saucy_rangeVar), asPrimitiveValue(model.variables.openDetailIn), asPrimitiveValue(model.variables.afterReadyVar)]
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
uuid: "64",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.SaucyFlow.Saucy.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_MOB.languageResources", "WTF_MOB.SaucyFlow.controller", "WTF_MOB.model$App_HotDealsMBPList", "WTF_MOB.model$App_PromotionsMBPList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$App_HotDealsMBPRec", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$GetPromotionsAndHotDealsActive", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, WTF_MOBLanguageResources, WTF_MOB_SaucyFlowController) {
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
Controller.prototype.getLocalUSERWTF$AggrRefresh = function (maxRecords) {
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
return model.variables.getLocalUSERWTFAggr;
}, function () {
return controller._getLocalUSERWTFOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTF$AggrRefresh"];
// Client Actions
Controller.prototype._showLoading$Action = function (showIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowLoading");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.Saucy.ShowLoading$vars"))());
vars.value.showInLocal = showIn;
// IsLoading = Show
model.variables.isLoadingVar = vars.value.showInLocal;
};
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.Saucy.ShowLoading$vars", [{
name: "Show",
attrName: "showInLocal",
mandatory: true,
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.Saucy.GoToBenefit$vars"))());
vars.value.categoryInLocal = categoryIn;
vars.value.subtitleInLocal = subtitleIn;
vars.value.background_colorInLocal = background_colorIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Saucy_beneficios", vars.value.categoryInLocal, 0, "", callContext).then(function () {
// Destination: /WTF_MOB/Benefits
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Benefits", {
Origin: "Saucy",
Subtitle: vars.value.subtitleInLocal,
Category: vars.value.categoryInLocal,
Background_color: vars.value.background_colorInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("Saucy.GoToBenefit", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.Saucy.GoToBenefit$vars", [{
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
Controller.prototype._openDetailPromos$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenDetailPromos");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.Saucy.OpenDetailPromos$vars"))());
vars.value.detailToOpenInLocal = detailToOpenIn.clone();
vars.value.categoryInLocal = categoryIn;
vars.value.currentRowNumberInLocal = currentRowNumberIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Saucy_" + vars.value.categoryInLocal), vars.value.detailToOpenInLocal.nameAttr, 0, "", callContext).then(function () {
// openDetail = True
model.variables.openDetailIn = true;
// categoryToOpenDetail = category
model.variables.categoryToOpenDetailIn = vars.value.categoryInLocal;
// Promosdetail = detailToOpen
model.variables.promosdetailVar = vars.value.detailToOpenInLocal;
// IndexToOpen = CurrentRowNumber
model.variables.indexToOpenVar = vars.value.currentRowNumberInLocal;
});
}).catch(function (ex) {
OS.Logger.trace("Saucy.OpenDetailPromos", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.Saucy.OpenDetailPromos$vars", [{
name: "detailToOpen",
attrName: "detailToOpenInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MBPModel.App_PromotionsMBPRec();
},
complexType: WTF_MBPModel.App_PromotionsMBPRec
}, {
name: "category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CurrentRowNumber",
attrName: "currentRowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._closeDetail$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CloseDetail");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Saucy_" + model.variables.categoryToOpenDetailIn), "Close", 0, "", callContext).then(function () {
// openDetail = False
model.variables.openDetailIn = false;
// HotDealdetail = HotDealdetail_empty
model.variables.hotDealdetailVar = model.variables.hotDealdetail_emptyVar;
// Promosdetail = Promosdetail_empty
model.variables.promosdetailVar = model.variables.promosdetail_emptyVar;
});
}).catch(function (ex) {
OS.Logger.trace("Saucy.CloseDetail", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._openDetailHotDeals$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenDetailHotDeals");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.Saucy.OpenDetailHotDeals$vars"))());
vars.value.detailToOpenInLocal = detailToOpenIn.clone();
vars.value.categoryInLocal = categoryIn;
vars.value.currentRowNumberInLocal = currentRowNumberIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Saucy_" + vars.value.categoryInLocal), vars.value.detailToOpenInLocal.nameAttr, 0, "", callContext).then(function () {
// openDetail = True
model.variables.openDetailIn = true;
// categoryToOpenDetail = category
model.variables.categoryToOpenDetailIn = vars.value.categoryInLocal;
// HotDealdetail = detailToOpen
model.variables.hotDealdetailVar = vars.value.detailToOpenInLocal;
// IndexToOpen = CurrentRowNumber
model.variables.indexToOpenVar = vars.value.currentRowNumberInLocal;
});
}).catch(function (ex) {
OS.Logger.trace("Saucy.OpenDetailHotDeals", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.Saucy.OpenDetailHotDeals$vars", [{
name: "detailToOpen",
attrName: "detailToOpenInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MBPModel.App_HotDealsMBPRec();
},
complexType: WTF_MBPModel.App_HotDealsMBPRec
}, {
name: "category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CurrentRowNumber",
attrName: "currentRowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._countdownUntilDateCountdownFinished$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CountdownUntilDateCountdownFinished");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// afterReady = False
model.variables.afterReadyVar = false;
// Destination: /WTF_MOB/Saucy
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Saucy", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}).catch(function (ex) {
OS.Logger.trace("Saucy.CountdownUntilDateCountdownFinished", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFOnAfterFetch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.Saucy.GetLocalUSERWTFOnAfterFetch$vars"))());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var wTF_MessageForEmptyHotDealsVar = new OS.DataTypes.VariableHolder();
var getAndSyncLocalPictureById2Var = new OS.DataTypes.VariableHolder();
var getAndSyncLocalPictureByIdVar = new OS.DataTypes.VariableHolder();
var getPromotionsAndHotDealsActiveVar = new OS.DataTypes.VariableHolder();
var wTFSaucyRange_PromosAndHotDealsVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
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
return getLocalACCESSTOKENINFOAggr().then(function () {
// AnalyticsAuxVar.TraceName = "Saucy"
model.variables.analyticsAuxVarVar.traceNameAttr = "Saucy";
// AnalyticsAuxVar.Category = "Saucy"
model.variables.analyticsAuxVarVar.categoryAttr = "Saucy";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext);
}).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Saucy_check_page", callContext);

// Execute Action: GetPromotionsAndHotDealsActive
model.flush();
return WTF_MBPController.default.getPromotionsAndHotDealsActive$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, getLocalACCESSTOKENINFOVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
getPromotionsAndHotDealsActiveVar.value = value;
});
}).then(function () {
// hotdeals_list = GetPromotionsAndHotDealsActive.HotDeals
model.variables.hotdeals_listVar = getPromotionsAndHotDealsActiveVar.value.hotDealsOut;
// promotions_list = GetPromotionsAndHotDealsActive.Promotions
model.variables.promotions_listVar = getPromotionsAndHotDealsActiveVar.value.promotionsOut;
// Execute Action: WTF_MessageForEmptyHotDeals
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_MessageForEmptyHotDeals", callContext).then(function (value) {
wTF_MessageForEmptyHotDealsVar.value = value;
});
}).then(function () {
// messageForEmptyHotDeals = WTF_MessageForEmptyHotDeals.Value
model.variables.messageForEmptyHotDealsVar = wTF_MessageForEmptyHotDealsVar.value.valueOut;
// Execute Action: WTFSaucyRange_PromosAndHotDeals
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTFSaucyRange_PromosAndHotDeals", callContext).then(function (value) {
wTFSaucyRange_PromosAndHotDealsVar.value = value;
});
}).then(function () {
// saucy_range
// saucy_range = TextToInteger
model.variables.saucy_rangeVar = OS.BuiltinFunctions.textToInteger(wTFSaucyRange_PromosAndHotDealsVar.value.valueOut);
// Foreach hotdeals_list
callContext.iterationContext.registerIterationStart(model.variables.hotdeals_listVar);
}).then(function () {
return OS.Flow.tryFinally(function () {
var hotdeals_listIterator = callContext.iterationContext.getIterator(model.variables.hotdeals_listVar);
var hotdeals_listIndex = 0;
return OS.Flow.whileAsync(function () {
return ((hotdeals_listIndex < model.variables.hotdeals_listVar.length));
}, function () {
hotdeals_listIterator.currentRowNumber = hotdeals_listIndex;
// Execute Action: GetAndSyncLocalPictureById2
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.hotdeals_listVar.getItem(hotdeals_listIndex.valueOf()).pictureAttr.idAttr, callContext).then(function (value) {
getAndSyncLocalPictureById2Var.value = value;
}).then(function () {
// hotdeals_list.Current.Picture = GetAndSyncLocalPictureById2.Picture
model.variables.hotdeals_listVar.getItem(hotdeals_listIndex.valueOf()).pictureAttr = getAndSyncLocalPictureById2Var.value.pictureOut;
// labelHDPR = labelHDPR + "HD_" + hotdeals_list.Current.Name + ", "
vars.value.labelHDPRVar = (((vars.value.labelHDPRVar + "HD_") + model.variables.hotdeals_listVar.getItem(hotdeals_listIndex.valueOf()).nameAttr) + ", ");
}).then(function () {
hotdeals_listIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.hotdeals_listVar);
});
}).then(function () {
// Foreach promotions_list
callContext.iterationContext.registerIterationStart(model.variables.promotions_listVar);
return OS.Flow.tryFinally(function () {
var promotions_listIterator = callContext.iterationContext.getIterator(model.variables.promotions_listVar);
var promotions_listIndex = 0;
return OS.Flow.whileAsync(function () {
return ((promotions_listIndex < model.variables.promotions_listVar.length));
}, function () {
promotions_listIterator.currentRowNumber = promotions_listIndex;
// Execute Action: GetAndSyncLocalPictureById
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.promotions_listVar.getItem(promotions_listIndex.valueOf()).pictureAttr.idAttr, callContext).then(function (value) {
getAndSyncLocalPictureByIdVar.value = value;
}).then(function () {
// promotions_list.Current.Picture = GetAndSyncLocalPictureById.Picture
model.variables.promotions_listVar.getItem(promotions_listIndex.valueOf()).pictureAttr = getAndSyncLocalPictureByIdVar.value.pictureOut;
// labelHDPR = labelHDPR + "PR_" + promotions_list.Current.Name + If
vars.value.labelHDPRVar = (((vars.value.labelHDPRVar + "PR_") + model.variables.promotions_listVar.getItem(promotions_listIndex.valueOf()).nameAttr) + ((((model.variables.promotions_listVar.getCurrentRowNumber(callContext.iterationContext)) !== ((model.variables.promotions_listVar.length - 1)))) ? (", ") : ("")));
}).then(function () {
promotions_listIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.promotions_listVar);
});
}).then(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("pageload", "Saucy", vars.value.labelHDPRVar, 0, "", callContext).then(function () {
// afterReady = True
model.variables.afterReadyVar = true;
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
});
}).catch(function (ex) {
OS.Logger.trace("Saucy.GetLocalUSERWTFOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.Saucy.GetLocalUSERWTFOnAfterFetch$vars", [{
name: "labelHDPR",
attrName: "labelHDPRVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.showLoading$Action = function (showIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showLoading$Action, callContext, showIn);

};
Controller.prototype.goToBenefit$Action = function (categoryIn, subtitleIn, background_colorIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToBenefit$Action, callContext, categoryIn, subtitleIn, background_colorIn);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.openDetailPromos$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openDetailPromos$Action, callContext, detailToOpenIn, categoryIn, currentRowNumberIn);

};
Controller.prototype.closeDetail$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeDetail$Action, callContext);

};
Controller.prototype.openDetailHotDeals$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openDetailHotDeals$Action, callContext, detailToOpenIn, categoryIn, currentRowNumberIn);

};
Controller.prototype.countdownUntilDateCountdownFinished$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._countdownUntilDateCountdownFinished$Action, callContext);

};
Controller.prototype.getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFOnAfterFetch$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_SaucyFlowController.default.handleError(ex, this.callContext());
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

