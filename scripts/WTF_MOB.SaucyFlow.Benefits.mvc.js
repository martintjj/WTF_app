define("WTF_MOB.SaucyFlow.Benefits.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_BP.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.WalletFlow.WalletListItem.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$UberIsFirstTime", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$RevolutIsFirstTime", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.controller$GetUberVoucher", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$GetBenefitRevolutNewUser", "WTF_MBP.controller$GetRevolutVoucher", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MBP.controller$GetTokenCinema", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_BPModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_Waiting_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_WalletFlow_WalletListItem_mvcModel, WTF_MOB_Common_BottomBar_mvcModel) {
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
this.attr("refresh_token", "refresh_tokenVar", "refresh_token", true, OS.Types.Text, function () {
return "";
}), 
this.attr("isFirstTime", "isFirstTimeVar", "isFirstTime", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ShowEmptyMessage", "showEmptyMessageVar", "ShowEmptyMessage", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("MessageEmptyRule", "messageEmptyRuleVar", "MessageEmptyRule", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("openDetail", "openDetailVar", "openDetail", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("walletCard", "walletCardVar", "walletCard", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_WalletCardRec());
}, WTF_BPModel.App_WalletCardRec), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("showPopupRevolutNonConsumer", "showPopupRevolutNonConsumerVar", "showPopupRevolutNonConsumer", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("actualClientBtnSubtitle", "actualClientBtnSubtitleVar", "actualClientBtnSubtitle", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Category", "categoryIn", "Category", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_categoryInDataFetchStatus", "_categoryInDataFetchStatus", "_categoryInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Subtitle", "subtitleIn", "Subtitle", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Background_color", "background_colorIn", "Background_color", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_background_colorInDataFetchStatus", "_background_colorInDataFetchStatus", "_background_colorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Origin", "originIn", "Origin", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_originInDataFetchStatus", "_originInDataFetchStatus", "_originInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || WTF_MOB_WalletFlow_WalletListItem_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Category" in inputs) {
this.variables.categoryIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Category, OS.Types.Text);
}

if("Subtitle" in inputs) {
this.variables.subtitleIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Subtitle, OS.Types.Text);
}

if("Background_color" in inputs) {
this.variables.background_colorIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Background_color, OS.Types.Text);
}

if("Origin" in inputs) {
this.variables.originIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Origin, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.Benefits.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.Benefits.mvc$model", "WTF_MOB.SaucyFlow.Benefits.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.Waiting.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.WalletFlow.WalletListItem.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$UberIsFirstTime", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$RevolutIsFirstTime", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.controller$GetUberVoucher", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$GetBenefitRevolutNewUser", "WTF_MBP.controller$GetRevolutVoucher", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MBP.controller$GetTokenCinema", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, React, OSView, WTF_MOB_SaucyFlow_Benefits_mvc_model, WTF_MOB_SaucyFlow_Benefits_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_WalletListItem_mvc_view, WTF_MOB_Common_BottomBar_mvc_view) {
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
        View.displayName = "SaucyFlow.Benefits";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.SaucyFlow.Benefits.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_WalletListItem_mvc_view, WTF_MOB_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Benefits_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Benefits_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(!(model.variables.openDetailVar), false, this, function () {
return [React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
PageTitle: (("Saucy " + model.variables.categoryIn) + " detalhe"),
ContentClass: model.variables.background_colorIn,
PageType: "Operação",
ScreenName: "Benefits",
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
style: (model.variables.background_colorIn + " text-center pv-48 ph-16 o-benefits"),
visible: true,
_idProps: {
service: idService,
name: "Benefits"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeCard$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "d-inline-block action-icon -ripple",
visible: true,
_idProps: {
service: idService,
name: "close"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconClose,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large,
HasRipple: false,
StyleClass: "c-white"
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
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-benefitsImg",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.categoryIn === "cinemas"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.benefit_cinemas.svg"),
style: "pv-40",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.categoryIn === "uber-eats"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.benefit_uber_eats.svg"),
style: "pv-40",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.categoryIn === "uber-riders"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.benefit_uber_rider.svg"),
style: "pv-40",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.categoryIn === "revolut"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.revolut_card.svg"),
style: "pv-40",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-32 pb-16 pt-8",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "h1",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("Xg1vpbZ4SUylJU2mfL7BjA.Style"), function () {
return ("h1 c-white  -bold -shadow -sideLines " + (((model.variables.categoryIn === "cinemas")) ? ("-green -shadowPurple") : ((((model.variables.categoryIn === "uber-eats")) ? ("-pink") : ("")))));
}, function () {
return model.variables.categoryIn;
}),
value: model.variables.subtitleIn,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-benefitsContent",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pv-24",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("kvfY5bgOx0OmIreuJnCpew.Style"), function () {
return ("h3 -medium " + (((model.variables.categoryIn === "uber-eats")) ? ("c-warmPurple") : ("c-white")));
}, function () {
return model.variables.categoryIn;
}),
value: model.getCachedValue(idService.getId("kvfY5bgOx0OmIreuJnCpew.Value"), function () {
return (((model.variables.categoryIn === "uber-riders")) ? ("Onde queres ir?") : ((((model.variables.categoryIn === "uber-eats")) ? ("O que queres comer?") : ((((model.variables.categoryIn === "cinemas")) ? ("O que queres ver?") : ((((model.variables.categoryIn === "revolut")) ? ("Quanto é que queres?") : (""))))))));
}, function () {
return model.variables.categoryIn;
}),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "lKNVpd55lEiDPo7yQHf_5Q"
},
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.categoryIn === "cinemas"), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.getCode$Action(OS.BuiltinFunctions.nullIdentifier(), "Desconto Cinemas NOS", idService.getId("GetCinemas"), controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
name: "GetCinemas"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCard -blue mt-16 -paddingEqual",
visible: true,
_idProps: {
service: idService,
name: "ActionCard"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Title2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold mb-4 c-yellow",
value: "2 bilhetes por 1",
_idProps: {
service: idService,
name: "CardTitle2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-yellow",
value: "Nos Cinemas NOS",
_idProps: {
service: idService,
name: "CardTitle5"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn text-right -vCenter",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
StyleClass: "c-yellow"
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
uuid: "26",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}, function () {
return [];
}), $if(((model.variables.categoryIn === "uber-riders") || (model.variables.categoryIn === "uber-eats")), false, this, function () {
return [$if(model.variables.isFirstTimeVar, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.getCode$Action((((model.variables.categoryIn === "uber-eats")) ? (WTF_MOBModel.staticEntities.vOUCHERS_TYPE.eatsNovoCliente) : (WTF_MOBModel.staticEntities.vOUCHERS_TYPE.ridersNovoCliente)), ("Ainda não sou cliente " + (((model.variables.categoryIn === "uber-riders")) ? ("Uber Riders") : ("Uber Eats"))), idService.getId("GetNew"), controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
name: "GetNew"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCard -warmPurple mt-16 -paddingEqual",
visible: true,
_idProps: {
service: idService,
name: "ActionCard2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Title3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold mb-4 c-yellow",
value: model.getCachedValue(idService.getId("CardTitle3.Value"), function () {
return ("Ainda não sou cliente " + (((model.variables.categoryIn === "uber-riders")) ? ("Uber") : ("Uber Eats")));
}, function () {
return model.variables.categoryIn;
}),
_idProps: {
service: idService,
name: "CardTitle3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-yellow",
value: "Desconto até 8€",
_idProps: {
service: idService,
name: "CardTitle6"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn text-right -vCenter",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
StyleClass: "c-yellow",
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
uuid: "34",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}, function () {
return [];
}), React.createElement(OSWidgets.Link, {
enabled: (model.variables.isFirstTimeVar || (!(model.variables.showEmptyMessageVar) && !(model.variables.isFirstTimeVar))),
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.getCode$Action((((model.variables.categoryIn === "uber-eats")) ? (WTF_MOBModel.staticEntities.vOUCHERS_TYPE.eatsClienteAtual) : (WTF_MOBModel.staticEntities.vOUCHERS_TYPE.ridersClienteAtual)), ("Já sou cliente " + (((model.variables.categoryIn === "uber-riders")) ? ("Uber Riders") : ("Uber Eats"))), idService.getId("GetAlready"), controller.callContext(eventHandlerContext));
});
;
},
style: "getCodeLink",
visible: true,
_idProps: {
service: idService,
name: "GetAlready"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("ActionCard3.Style"), function () {
return ("a-flexCard mt-16 -paddingEqual " + (((model.variables.categoryIn === "uber-riders")) ? ("-green") : ("-blue")));
}, function () {
return model.variables.categoryIn;
}),
visible: true,
_idProps: {
service: idService,
name: "ActionCard3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Title4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("CardTitle4.Style"), function () {
return ("a-textRead -bold mb-4 " + (((model.variables.categoryIn === "uber-riders")) ? ("c-warmPurple") : ("c-yellow")));
}, function () {
return model.variables.categoryIn;
}),
value: model.getCachedValue(idService.getId("CardTitle4.Value"), function () {
return ("Já sou cliente " + (((model.variables.categoryIn === "uber-riders")) ? ("Uber") : ("Uber Eats")));
}, function () {
return model.variables.categoryIn;
}),
_idProps: {
service: idService,
name: "CardTitle4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("CardTitle7.Style"), function () {
return ("a-textRead -small " + (((model.variables.categoryIn === "uber-riders")) ? ("c-warmPurple") : ("c-yellow")));
}, function () {
return model.variables.categoryIn;
}),
value: model.getCachedValue(idService.getId("CardTitle7.Value"), function () {
return (((model.variables.categoryIn === "uber-riders")) ? ("Desconto €2,5") : ("Taxa de entrega Grátis"));
}, function () {
return model.variables.categoryIn;
}),
_idProps: {
service: idService,
name: "CardTitle7"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn text-right -vCenter",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
StyleClass: model.getCachedValue(idService.getId("TvfD6+Uplk+AOQr1UWKwyw.StyleClass"), function () {
return (((model.variables.categoryIn === "uber-riders")) ? ("c-warmPurple") : ("c-yellow"));
}, function () {
return model.variables.categoryIn;
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
uuid: "42",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}, function () {
return [];
}), $if((model.variables.categoryIn === "revolut"), false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.revolutTogglePopupNonConsumer$Action(controller.callContext(eventHandlerContext));

;
},
visible: model.variables.isFirstTimeVar,
_idProps: {
service: idService,
name: "Get_NewCustomerRevolut"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCard -warmPurple mt-16 -paddingEqual",
visible: true,
_idProps: {
service: idService,
name: "ActionCard4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Title5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold mb-4 c-yellow",
value: "Ainda não sou cliente Revolut",
_idProps: {
service: idService,
name: "CardTitle8"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-yellow",
value: "10€ na tua conta Revolut",
_idProps: {
service: idService,
name: "CardTitle9"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn text-right -vCenter",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
StyleClass: "c-yellow"
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
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.getCode$Action(WTF_MOBModel.staticEntities.vOUCHERS_TYPE.revolut, "Já sou cliente Revolut", idService.getId("Get_AlreadyCUstomerRevolut"), controller.callContext(eventHandlerContext));
});
;
},
style: "getCodeLink",
visible: true,
_idProps: {
service: idService,
name: "Get_AlreadyCUstomerRevolut"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCard mt-16 -paddingEqual -green",
visible: true,
_idProps: {
service: idService,
name: "ActionCard5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Title6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold mb-4 c-warmPurple",
value: "Já sou cliente Revolut",
_idProps: {
service: idService,
name: "CardTitle10"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(((OS.BuiltinFunctions.trim(model.variables.actualClientBtnSubtitleVar)) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-warmPurple",
value: model.variables.actualClientBtnSubtitleVar,
_idProps: {
service: idService,
name: "CardTitle11"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn text-right -vCenter",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
StyleClass: "c-warmPurple"
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
uuid: "58",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}, function () {
return [];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.showEmptyMessageVar && !(model.variables.isFirstTimeVar)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white",
value: model.variables.messageEmptyRuleVar,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "cjER0RyzREqaJ55YubDP3A"
},
gridProperties: {
marginLeft: "0",
marginTop: "20px"
},
style: "a-link c-white ma-24",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom),
url: OS.Navigation.generateScreenURL("/WTF_MOB/RegulamentBenefits", {
Category: model.variables.categoryIn
}),
visible: true,
_idProps: {
service: idService,
name: "ComoFunciona"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Como funciona?")))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.messageEmptyRuleVar), asPrimitiveValue(model.variables.actualClientBtnSubtitleVar), asPrimitiveValue(model.variables.showEmptyMessageVar), asPrimitiveValue(model.variables.isFirstTimeVar), asPrimitiveValue(model.variables.subtitleIn), asPrimitiveValue(model.variables.categoryIn), asPrimitiveValue(model.variables.background_colorIn), asPrimitiveValue(model.variables.isLoadingVar)]
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "U7thFTZml0+x_g0wVkpmPg"
},
showPopup: (model.variables.showPopupRevolutNonConsumerVar && !(model.variables.isLoadingVar)),
style: "popup-dialog",
_idProps: {
service: idService,
name: "RevolutPopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "GXuxXDG0g0+HyHuCY5uWTA"
},
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-strongPink -bold",
value: "Campanha Revolut",
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Confirmo que quero enviar o meu número WTF para a Revolut, para esta campanha, para validarem que sou novo cliente e para receber €10 de bónus.",
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Ainda tens dúvidas?",
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Consulta o ecrã anterior",
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "ohMPJWu3ukCvfiVd+tJl6Q"
},
gridProperties: {
classes: "OSFillParent"
},
value: "A Revolut Ltd (nº 08804411) é uma empresa autorizada pela Autoridade de Conduta Financeira, nos termos dos Regulamentos relativos à Moeda Eletrónica de 2011 (registada sob o nº 900562).",
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
name: "SecondaryButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "8UlO1TSGq0qSMmw2CICSWg"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.revolutTogglePopupNonConsumer$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn btn-secondary -secondary",
visible: true,
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
name: "ButtonTextSecondary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.revolutConfirmNonConsumer$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "Confirm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Confirmar",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}, function () {
return [React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
PageSection: "Saucy",
ScreenName: "Benefits",
PageTitle: (("Saucy " + model.variables.categoryIn) + " detalhe"),
IsPageLevel1: true,
PageType: "Operação",
ContentClass: "b-transparent saucy"
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
uuid: "81",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("saucy-detail-benefit " + model.variables.background_colorIn),
visible: true,
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-24",
visible: true,
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeCard$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
uuid: "84"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "SnBO_6ejgE2ZSj1Hu5AgGg"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "85"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
StyleClass: "c-white"
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
uuid: "86",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "QzSGHz0Xd0Cz8mBia8ZYgQ"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "pl-8 c-white",
value: "Voltar",
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "cYfeNtcc_kWn7Rw7moAajg"
},
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "88"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(WTF_MOB_WalletFlow_WalletListItem_mvc_view, {
inputs: {
ListCurrentRowNumber: 0,
WtfCardGenericLabel: "",
showAll: true,
gotobenefit: false,
ListLength: "1",
IsOffline: false,
RemoveItemOn: false,
headerWithImage: true,
App_WalletCard: model.variables.walletCardVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
var eventHandlerContext = callContext.clone();
controller.walletListItemRemoveCard$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "89",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
Page: model.variables.originIn,
DemoAppWithoutLogin: false,
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
uuid: "90",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.originIn), asPrimitiveValue(model.variables.walletCardVar), asPrimitiveValue(model.variables.background_colorIn)]
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.SaucyFlow.Benefits.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.SaucyFlow.controller", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$UberIsFirstTime", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$RevolutIsFirstTime", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.controller$GetUberVoucher", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$GetBenefitRevolutNewUser", "WTF_MBP.controller$GetRevolutVoucher", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MBP.controller$GetTokenCinema", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_SaucyFlowController) {
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
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// isFirstTime = False
model.variables.isFirstTimeVar = false;
// isFirstTime = False
model.variables.isFirstTimeVar = false;
// MessageEmptyRule = ""
model.variables.messageEmptyRuleVar = "";
// ShowEmptyMessage = False
model.variables.showEmptyMessageVar = false;
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
Controller.prototype._closeCard$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CloseCard");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", (("Saucy " + model.variables.categoryIn) + " detalhe"), "Close", 0, "", callContext).then(function () {
if(((model.variables.originIn === "Saucy"))) {
// Destination: /WTF_MOB/Saucy
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Saucy", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
}).catch(function (ex) {
OS.Logger.trace("Benefits.CloseCard", OS.Exceptions.getMessage(ex), ex.name);
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
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var uberIsFirstTimeVar = new OS.DataTypes.VariableHolder();
var revolutIsFirstTimeVar = new OS.DataTypes.VariableHolder();
var getConfigValueAsText_MBPVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Saucy " + Category + " detalhe"
model.variables.analyticsAuxVarVar.traceNameAttr = (("Saucy " + model.variables.categoryIn) + " detalhe");
// AnalyticsAuxVar.Category = "Saucy"
model.variables.analyticsAuxVarVar.categoryAttr = "Saucy";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Aggregate: GetLocalACCESSTOKENINFOES
var getLocalACCESSTOKENINFOESAggr = function (maxRecords) {
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
return getLocalACCESSTOKENINFOESVar.value;
});
};
return getLocalACCESSTOKENINFOESAggr();
}).then(function () {
// refresh_token = GetLocalACCESSTOKENINFOES.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refresh_tokenVar = getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((!((model.variables.categoryIn === "cinemas")))) {
return OS.Flow.executeSequence(function () {
if((model.variables.categoryIn === "revolut")) {
// Execute Action: GetConfigValueAsText_MBP
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_revolut_actual_client_btn_subtitle", callContext).then(function (value) {
getConfigValueAsText_MBPVar.value = value;
}).then(function () {
// actualClientBtnSubtitle = GetConfigValueAsText_MBP.Value
model.variables.actualClientBtnSubtitleVar = getConfigValueAsText_MBPVar.value.valueOut;
// Execute Action: RevolutIsFirstTime
model.flush();
return WTF_MBPController.default.revolutIsFirstTime$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refresh_tokenVar, callContext).then(function (value) {
revolutIsFirstTimeVar.value = value;
});
}).then(function () {
// isFirstTime = RevolutIsFirstTime.IsFirstTime
model.variables.isFirstTimeVar = revolutIsFirstTimeVar.value.isFirstTimeOut;
});
} else {
// Execute Action: UberIsFirstTime
model.flush();
return WTF_MBPController.default.uberIsFirstTime$Action(OS.BuiltinFunctions.longIntegerToInteger(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr), model.variables.refresh_tokenVar, (((model.variables.categoryIn === "uber-eats")) ? ("eats") : ("riders")), callContext).then(function (value) {
uberIsFirstTimeVar.value = value;
}).then(function () {
// isFirstTime = UberIsFirstTime.Response
model.variables.isFirstTimeVar = uberIsFirstTimeVar.value.responseOut;
// MessageEmptyRule = UberIsFirstTime.MessageEmptyRule
model.variables.messageEmptyRuleVar = uberIsFirstTimeVar.value.messageEmptyRuleOut;
// ShowEmptyMessage = UberIsFirstTime.ShowEmptyMessage
model.variables.showEmptyMessageVar = uberIsFirstTimeVar.value.showEmptyMessageOut;
});
}

});
}

});
}).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Benefits.GetLocalUSERWTFOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._getCode$Action = function (voucherTypeIdIn, labelClickIn, buttonIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetCode");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.Benefits.GetCode$vars"))());
vars.value.voucherTypeIdInLocal = voucherTypeIdIn;
vars.value.labelClickInLocal = labelClickIn;
vars.value.buttonIdInLocal = buttonIdIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var wallet_ClearCacheVar = new OS.DataTypes.VariableHolder();
var getUberVoucherVar = new OS.DataTypes.VariableHolder();
var getBenefitRevolutNewUserVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getRevolutVoucherVar = new OS.DataTypes.VariableHolder();
var getTokenCinemaVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(vars.value.buttonIdInLocal, false, callContext);
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", (("Saucy " + model.variables.categoryIn) + " detalhe"), vars.value.labelClickInLocal, 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.categoryIn === "cinemas"))) {
// Execute Action: GetTokenCinema
model.flush();
return WTF_MBPController.default.getTokenCinema$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refresh_tokenVar, callContext).then(function (value) {
getTokenCinemaVar.value = value;
}).then(function () {
if(((getTokenCinemaVar.value.successOut === true))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// walletCard = GetTokenCinema.WalletCard
model.variables.walletCardVar = getTokenCinemaVar.value.walletCardOut;
// openDetail = True
model.variables.openDetailVar = true;
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(getTokenCinemaVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 3000, "", "-large", callContext);
return OS.Flow.breakAsync();
}

});
} else {
return OS.Flow.executeSequence(function () {
if((model.variables.categoryIn === "revolut")) {
return OS.Flow.executeSequence(function () {
if(((vars.value.voucherTypeIdInLocal === OS.BuiltinFunctions.nullIdentifier()))) {
// Execute Action: GetBenefitRevolutNewUser
model.flush();
return WTF_MBPController.default.getBenefitRevolutNewUser$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refresh_tokenVar, callContext).then(function (value) {
getBenefitRevolutNewUserVar.value = value;
}).then(function () {
if((getBenefitRevolutNewUserVar.value.successOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
// walletCard = GetBenefitRevolutNewUser.WalletCard
model.variables.walletCardVar = getBenefitRevolutNewUserVar.value.walletCardOut;
// openDetail = True
model.variables.openDetailVar = true;
} else {
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action(getBenefitRevolutNewUserVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 3000, "", "-large", callContext);
return OS.Flow.breakAsync();
}

});
} else {
// Execute Action: GetRevolutVoucher
model.flush();
return WTF_MBPController.default.getRevolutVoucher$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refresh_tokenVar, callContext).then(function (value) {
getRevolutVoucherVar.value = value;
}).then(function () {
if((getRevolutVoucherVar.value.successOut)) {
if((getRevolutVoucherVar.value.userWithoutBenefitOut)) {
// Destination: /WTF_MOB/GenericError
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/GenericError", {
ButtonText: "Voltar ao início",
Title: "OOPS!",
Text: getRevolutVoucherVar.value.messageForUserWithoutBenefitOut
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
// walletCard = GetRevolutVoucher.WalletCard
model.variables.walletCardVar = getRevolutVoucherVar.value.walletCardOut;
// openDetail = True
model.variables.openDetailVar = true;
}

} else {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action(getRevolutVoucherVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 3000, "", "-large", callContext);
return OS.Flow.breakAsync();
}

});
}

});
} else {
// Execute Action: GetUberVoucher
model.flush();
return WTF_MBPController.default.getUberVoucher$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refresh_tokenVar, vars.value.voucherTypeIdInLocal, callContext).then(function (value) {
getUberVoucherVar.value = value;
}).then(function () {
if(((getUberVoucherVar.value.successOut === true))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// walletCard = GetUberVoucher.WalletCard
model.variables.walletCardVar = getUberVoucherVar.value.walletCardOut;
// openDetail = True
model.variables.openDetailVar = true;
// WillChangeFlag = GetUberVoucher.WillChangeFlag
vars.value.willChangeFlagVar = getUberVoucherVar.value.willChangeFlagOut;
// WillChangeMessage = GetUberVoucher.WillChangeMessage
vars.value.willChangeMessageVar = getUberVoucherVar.value.willChangeMessageOut;
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(getUberVoucherVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 3000, "", "-large", callContext);
return OS.Flow.breakAsync();
}

});
}

});
}

});
}).then(function () {
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(vars.value.buttonIdInLocal, true, callContext);
// Execute Action: Wallet_ClearCache
model.flush();
return WTF_MBPController.default.wallet_ClearCache$Action(callContext).then(function (value) {
wallet_ClearCacheVar.value = value;
}).then(function () {
// Execute Action: DeviceFeedbackHaptic
model.flush();
return WTF_MOBController.default.deviceFeedbackHaptic$Action(50, callContext);
});
}).then(function () {
// WillChangeFlag?
if((vars.value.willChangeFlagVar)) {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action(vars.value.willChangeMessageVar, 1, true, "icon-message_success level3", true, false, 3000, "", "-large", callContext);
return OS.Flow.returnAsync();

} else {
return OS.Flow.returnAsync();

}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(vars.value.buttonIdInLocal, true, callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Benefits.GetCode", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage6
MobileUIWidgetsController.default.customFeedbackMessage$Action("Oops, tenta mais tarde", 3, true, "icon-message_insuccess level3", true, false, 3000, "", "-large", callContext);
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
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(vars.value.buttonIdInLocal, true, callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.Benefits.GetCode$vars", [{
name: "VoucherTypeId",
attrName: "voucherTypeIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "LabelClick",
attrName: "labelClickInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ButtonId",
attrName: "buttonIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "WillChangeFlag",
attrName: "willChangeFlagVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "WillChangeMessage",
attrName: "willChangeMessageVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._walletListItemRemoveCard$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("WalletListItemRemoveCard");
callContext = controller.callContext(callContext);
// DUMMY
};
Controller.prototype._revolutTogglePopupNonConsumer$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RevolutTogglePopupNonConsumer");
callContext = controller.callContext(callContext);
// showPopupRevolutNonConsumer = notshowPopupRevolutNonConsumer
model.variables.showPopupRevolutNonConsumerVar = !(model.variables.showPopupRevolutNonConsumerVar);
};
Controller.prototype._revolutConfirmNonConsumer$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RevolutConfirmNonConsumer");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// showPopupRevolutNonConsumer = False
model.variables.showPopupRevolutNonConsumerVar = false;
// Execute Action: GetCode
return controller._getCode$Action(OS.BuiltinFunctions.nullIdentifier(), "Ainda não sou cliente Revolut", idService.getId("Get_NewCustomerRevolut"), callContext);
});
};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.closeCard$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeCard$Action, callContext);

};
Controller.prototype.getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFOnAfterFetch$Action, callContext);

};
Controller.prototype.getCode$Action = function (voucherTypeIdIn, labelClickIn, buttonIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getCode$Action, callContext, voucherTypeIdIn, labelClickIn, buttonIdIn);

};
Controller.prototype.walletListItemRemoveCard$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._walletListItemRemoveCard$Action, callContext);

};
Controller.prototype.revolutTogglePopupNonConsumer$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._revolutTogglePopupNonConsumer$Action, callContext);

};
Controller.prototype.revolutConfirmNonConsumer$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._revolutConfirmNonConsumer$Action, callContext);

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

