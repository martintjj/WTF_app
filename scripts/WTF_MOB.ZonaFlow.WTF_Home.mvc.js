define("WTF_MOB.ZonaFlow.WTF_Home.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "AppMinimizePlugin.controller", "BALANCE_MBP.model", "WTF_BP.model", "BALANCE_MBP.controller", "AppStoreLauncherPlugin.controller", "MobilePatterns.controller", "WTF_MBP.model$App_InfoCardsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$App_TmcodeChangeList", "WTF_MBP.controller$GetChangeRatePlanInfoAll_BP", "WTF_MOB.model$Local_TMCODE_TO_CHANGEList", "WTF_MBP.controller$CreateOrUpdateAllLocal_TMCODE_TO_CHANGE", "AppMinimizePlugin.controller$MinimizeApp", "WTF_MOB.referencesHealth$AppMinimizePlugin", "AppMinimizePlugin.controller$CheckPlugin", "WTF_MOB.model$Local_BALANCE_NEXT_CHARGE_DETAILRecordList", "BALANCE_MBP.model$Local_BALANCE_NEXT_CHARGE_DETAILRec", "WTF_MOB.referencesHealth$BALANCE_MBP", "BALANCE_MBP.entities", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$DeleteAllLocal_LOCALDYNAMICLINK", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_BP.model$App_SecretFriendRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$App_InfoCardsMBPList", "WTF_MBP.controller$VerifyWelcomePrizeAndSecretFriendAndInfoCards", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_BP.model$App_IdentifierRec", "WTF_MBP.controller$PushReview_GetStatus", "WTF_MBP.controller$setActivityLog_Homepage", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MBP.controller$DeleteAllLocal_LOCALTEMPDEEPLINK", "WTF_BP.model$App_PictureRec", "WTF_MOB.model$Local_TEMPDEEPLINKRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_TEMPDYNAMICLINKRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_TEMPDEEPLINKRec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_TEMPDYNAMICLINKRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MBP.controller$SetMonthlyRenewalByContractDN", "WTF_MBP.controller$setActivityLog_ANTICIPATE_PAYMENT", "WTF_MOB.model$PUSH_REVIEW_STATUSRecord", "WTF_MBP.controller$PushReview_UpdateStatus", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.controller$StopTraceGlobalAction", "AppStoreLauncherPlugin.controller$OpenMobileAppStore", "WTF_MOB.referencesHealth$AppStoreLauncherPlugin", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$SetInfoCardStatus", "WTF_MOB.controller$OpenExternalURL", "MobilePatterns.controller$CarouselPrevious", "WTF_MOB.referencesHealth$MobilePatterns", "MobilePatterns.controller$CarouselUpdate", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MBPModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, AppMinimizePluginController, BALANCE_MBPModel, WTF_BPModel, BALANCE_MBPController, AppStoreLauncherPluginController, MobilePatternsController) {
var OS = OutSystems.Internal;
var GetUserWTFAggrRec = (function (_super) {
__extends(GetUserWTFAggrRec, _super);
function GetUserWTFAggrRec(defaults) {
_super.apply(this, arguments);
}
GetUserWTFAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetUserWTFAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetUserWTFAggrRec.init();
return GetUserWTFAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ApplicationName", "applicationNameVar", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PageCode", "pageCodeVar", "PageCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNVar", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CacheValidationInterval", "cacheValidationIntervalVar", "CacheValidationInterval", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsReadyToRun", "isReadyToRunVar", "IsReadyToRun", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoadingFinished", "isLoadingFinishedVar", "IsLoadingFinished", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("BalanceValue", "balanceValueVar", "BalanceValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("BalanceMessage", "balanceMessageVar", "BalanceMessage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AssociationID", "associationIDVar", "AssociationID", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Tariff", "tariffVar", "Tariff", true, OS.Types.Text, function () {
return "";
}), 
this.attr("hasPushReview", "hasPushReviewVar", "hasPushReview", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("pushreview_feedback", "pushreview_feedbackVar", "pushreview_feedback", true, OS.Types.Text, function () {
return "";
}), 
this.attr("App_Identifier", "app_IdentifierVar", "App_Identifier", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_IdentifierRec());
}, WTF_BPModel.App_IdentifierRec), 
this.attr("pushreview_currentstatusid", "pushreview_currentstatusidVar", "pushreview_currentstatusid", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("FriendSecretActive", "friendSecretActiveVar", "FriendSecretActive", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_SecretFriendRec());
}, WTF_BPModel.App_SecretFriendRec), 
this.attr("FriendSecretActive_Default", "friendSecretActive_DefaultVar", "FriendSecretActive_Default", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_SecretFriendRec());
}, WTF_BPModel.App_SecretFriendRec), 
this.attr("ShowBalanceCard", "showBalanceCardVar", "ShowBalanceCard", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ForceRefresh_Balance", "forceRefresh_BalanceVar", "ForceRefresh_Balance", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ForceShowBalanceSkeleton", "forceShowBalanceSkeletonVar", "ForceShowBalanceSkeleton", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("BalanceIsSuccess", "balanceIsSuccessVar", "BalanceIsSuccess", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("BalanceExpiryDateVal", "balanceExpiryDateValVar", "BalanceExpiryDateVal", true, OS.Types.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("NextChargeAmountVal", "nextChargeAmountValVar", "NextChargeAmountVal", true, OS.Types.Currency, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("showPopupRenovarMensalidade", "showPopupRenovarMensalidadeVar", "showPopupRenovarMensalidade", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("showLoading", "showLoadingVar", "showLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Offer_Btn_Title", "offer_Btn_TitleVar", "Offer_Btn_Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Offer_Btn_Label", "offer_Btn_LabelVar", "Offer_Btn_Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Offer_Identifier", "offer_IdentifierVar", "Offer_Identifier", true, OS.Types.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(0);
}), 
this.attr("ChangeRatePlan_Btn_Disabled", "changeRatePlan_Btn_DisabledVar", "ChangeRatePlan_Btn_Disabled", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("InfoCardsList", "infoCardsListVar", "InfoCardsList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_InfoCardsMBPList());
}, WTF_MOBModel.App_InfoCardsMBPList), 
this.attr("FromWelcomePrize", "fromWelcomePrizeIn", "FromWelcomePrize", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_fromWelcomePrizeInDataFetchStatus", "_fromWelcomePrizeInDataFetchStatus", "_fromWelcomePrizeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetUserWTF", "getUserWTFAggr", "getUserWTFAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetUserWTFAggrRec());
}, GetUserWTFAggrRec)
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
TextArea_pushreview_feedback: OS.Model.ValidationWidgetRecord
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
if("FromWelcomePrize" in inputs) {
this.variables.fromWelcomePrizeIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.FromWelcomePrize, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.WTF_Home.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MBP.controller", "AppMinimizePlugin.controller", "BALANCE_MBP.model", "WTF_BP.model", "BALANCE_MBP.controller", "AppStoreLauncherPlugin.controller", "MobilePatterns.controller", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_Home.mvc$model", "WTF_MOB.ZonaFlow.WTF_Home.mvc$controller", "WTF_MOB.Common.Waiting.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "BALANCE_MBLOCKS.HomePageBlocks.HomePageBalanceOrchestrationV3.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonCard.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonTitle.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonGaugeChart.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonDesc.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsInteraction.Carousel_Ext.mvc$view", "WTF_MOB.ZonaFlow.InfoCardsSlider.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$view", "WTF_MBP.model$App_InfoCardsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$App_TmcodeChangeList", "WTF_MBP.controller$GetChangeRatePlanInfoAll_BP", "WTF_MOB.model$Local_TMCODE_TO_CHANGEList", "WTF_MBP.controller$CreateOrUpdateAllLocal_TMCODE_TO_CHANGE", "AppMinimizePlugin.controller$MinimizeApp", "WTF_MOB.referencesHealth$AppMinimizePlugin", "AppMinimizePlugin.controller$CheckPlugin", "WTF_MOB.model$Local_BALANCE_NEXT_CHARGE_DETAILRecordList", "BALANCE_MBP.model$Local_BALANCE_NEXT_CHARGE_DETAILRec", "WTF_MOB.referencesHealth$BALANCE_MBP", "BALANCE_MBP.entities", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$DeleteAllLocal_LOCALDYNAMICLINK", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_BP.model$App_SecretFriendRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$App_InfoCardsMBPList", "WTF_MBP.controller$VerifyWelcomePrizeAndSecretFriendAndInfoCards", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_BP.model$App_IdentifierRec", "WTF_MBP.controller$PushReview_GetStatus", "WTF_MBP.controller$setActivityLog_Homepage", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MBP.controller$DeleteAllLocal_LOCALTEMPDEEPLINK", "WTF_BP.model$App_PictureRec", "WTF_MOB.model$Local_TEMPDEEPLINKRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_TEMPDYNAMICLINKRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_TEMPDEEPLINKRec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_TEMPDYNAMICLINKRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MBP.controller$SetMonthlyRenewalByContractDN", "WTF_MBP.controller$setActivityLog_ANTICIPATE_PAYMENT", "WTF_MOB.model$PUSH_REVIEW_STATUSRecord", "WTF_MBP.controller$PushReview_UpdateStatus", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.controller$StopTraceGlobalAction", "AppStoreLauncherPlugin.controller$OpenMobileAppStore", "WTF_MOB.referencesHealth$AppStoreLauncherPlugin", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$SetInfoCardStatus", "WTF_MOB.controller$OpenExternalURL", "MobilePatterns.controller$CarouselPrevious", "WTF_MOB.referencesHealth$MobilePatterns", "MobilePatterns.controller$CarouselUpdate", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, MobileUIWidgetsController, WTF_MBPController, AppMinimizePluginController, BALANCE_MBPModel, WTF_BPModel, BALANCE_MBPController, AppStoreLauncherPluginController, MobilePatternsController, React, OSView, WTF_MOB_ZonaFlow_WTF_Home_mvc_model, WTF_MOB_ZonaFlow_WTF_Home_mvc_controller, WTF_MOB_Common_Waiting_mvc_view, OSWidgets, WTF_MOB_Common_Layout_Lvl1_mvc_view, BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_ZonaFlow_InfoCardsSlider_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_Home";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_Home.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/WTF_MOB.BackButtonNull.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_Common_Layout_Lvl1_mvc_view, BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_ZonaFlow_InfoCardsSlider_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Home_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Home_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
inputs: {
IsLoading: model.variables.showLoadingVar
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
_dependencies: []
}), React.createElement(WTF_MOB_Common_Layout_Lvl1_mvc_view, {
inputs: {
WithoutLogin: false,
UsePullToRefresh: true,
PageTitle: "Zona",
ContentClass: "b-transparent",
IsOfflineMode: false,
PageType: "Consulta",
HasBackgroundChristmas: true,
IsPageLevel1: true,
PageSection: "Zona",
ScreenName: "WTF_Home"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onPullToRefresh$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onPullToRefresh$Action(controller.callContext(eventHandlerContext));
});
;
},
homeAndroidBackButtonEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.homeAndroidBackButton$Action(controller.callContext(eventHandlerContext));

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
placeholders: {
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "2"
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
value: "Sabe a ",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-yellow",
value: "quantas andas",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16 pt-24",
visible: true,
_idProps: {
service: idService,
name: "BalancesWrapper"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BALANCE_MBLOCKS_HomePageBlocks_HomePageBalanceOrchestrationV3_mvc_view, {
inputs: {
MasterBalanceAvailableValueCustomStyleClass: "a-textRead -bold mt-2 c-yellow",
CellPhoneTariff: model.variables.tariffVar,
CellPhoneNumber: model.variables.mSISDNVar,
IconCustomStyleClass: "c-white",
BalanceMessageCustomStyleClass: "a-textRead -italic",
MasterBalanceSpentValueCustomStyleClass: "a-textRead mt-2 c-lightBlueGrey",
ChartBackgroundColor: "#fddc2e",
BalanceTitleCustomStyleClass: "h3 -medium mb-4",
PageCode: model.variables.pageCodeVar,
ChartBorderMarkerBackgroundColor: "#6f2a7f",
MasterBalanceSpentTitleCustomStyleClass: "a-textRead -bullet -medium c-lightBlueGrey",
IsReadyToRun: (model.variables.isReadyToRunVar && model.variables.showBalanceCardVar),
MasterBalanceCardShortLabelCustomStyleClass: "a-textRead -bold c-white -uppercase  -fowardSlash -ellipsis",
CacheValidationInterval: model.variables.cacheValidationIntervalVar,
TwoGraphAvailableValueCustomStyleClass: "a-textRead c-yellow -ellipsis",
IconArrowRight: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
BalanceCustomClass: "-communication",
AssociationID: model.variables.associationIDVar,
MasterBalanceCardTitleCustomStyleClass: "h3 c-white -bold -inline -ellipsis",
MasterBalanceAvailableTitleCustomStyleClass: "a-textRead -bullet -medium c-yellow",
TwoGraphCustomStyleClass: "-purpleGradient -fowardSlash",
RefreshToken: model.variables.refreshTokenVar,
TwoGraphAvailableTitleCustomStyleClass: "a-textRead -bold c-white -ellipsis -fowardSlash",
Application: model.variables.applicationNameVar,
ChartMarkerTriangleColor: "#6f2a7f",
BalanceValueCustomStyleClass: "a-textBigBold -black",
MasterBalanceCardStyleClass: "-purpleGradient -fowardSlash"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
cardChargeClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardChargeClickEvent$Action(controller.callContext(eventHandlerContext));
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
cardInternetClickBalanceEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.cardClickBalanceEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
twoGraphCardClickEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.twoGraphCardClickEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
loadingFinished$Action: function (balanceValueOutIn, balanceMessageOutIn, successIn, balancesLengthIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.loadingFinished$Action(balanceValueOutIn, balanceMessageOutIn, successIn, controller.callContext(eventHandlerContext));
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), $if(model.variables.showBalanceCardVar, false, this, function () {
return [$if((!(model.variables.balanceIsSuccessVar) && model.variables.isLoadingFinishedVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "BalancesSkeleton3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, {
inputs: {
StyleClass: "-paddingBottom24 mb-24 a-failMessageContainer"
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
uuid: "11",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-4 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: false
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
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPaddingRight text-right",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
StyleClass: "c-gray3",
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
uuid: "16",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-30 mb-16 text-center"
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
uuid: "18",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, {
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
uuid: "19",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingLeft text-center",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
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
uuid: "27",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingRight text-center",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
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
uuid: "34",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-failMessageContainer a-failMessage",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
RightStyleClass: "-vCenter",
LeftStyleClass: "-vCenter"
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
uuid: "36",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-white",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconInfoRounded,
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
uuid: "37",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white",
value: "Não foi possível carregar o teu saldo",
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Carrega ou desliza para tentar novamente",
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-white",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconRefresh
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
uuid: "40",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}))];
})
},
_dependencies: []
}))))];
}, function () {
return [];
})];
}, function () {
return [$if(model.variables.isLoadingFinishedVar, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onPullToRefresh$Action(controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16",
visible: true,
_idProps: {
service: idService,
name: "BalancesSkeleton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, {
inputs: {
StyleClass: "-paddingBottom24 mb-24 a-failMessageContainer"
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
uuid: "43",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-4 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: false
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
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPaddingRight text-right",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-gray3",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
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
uuid: "48",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-30 mb-16 text-center"
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
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, {
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
uuid: "51",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingLeft text-center",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
uuid: "56",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
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
uuid: "59",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingRight text-center",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
IsListItem: true
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
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
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
uuid: "66",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-failMessageContainer a-failMessage",
visible: true,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
RightStyleClass: "-vCenter",
LeftStyleClass: "-vCenter"
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
uuid: "68",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconInfoRounded,
StyleClass: "c-white",
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
uuid: "69",
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white",
value: "Não foi possível carregar o teu saldo",
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Carrega ou desliza para tentar novamente",
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconRefresh,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large,
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
uuid: "72",
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}))];
})
},
_dependencies: []
})))];
}, function () {
return [];
})];
}), $if(model.variables.isLoadingFinishedVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: model.getCachedValue(idService.getId("InfoCardsContainer.Style"), function () {
return ("m-infoCards ph-16 " + (((model.variables.infoCardsListVar.length === 1)) ? ("one_element") : ("")));
}, function () {
return model.variables.infoCardsListVar.length;
}),
visible: !(model.variables.infoCardsListVar.isEmpty),
_idProps: {
service: idService,
name: "InfoCardsContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, {
inputs: {
Padding: 30,
Margin: 24,
Navigation: false
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
name: "InfoCardsCarousel",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
carouselItems: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.infoCardsListVar,
style: "list list-group m-infoCards__list",
tag: "div",
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(WTF_MOB_ZonaFlow_InfoCardsSlider_mvc_view, {
inputs: {
Index: model.variables.infoCardsListVar.getCurrentRowNumber(callContext.iterationContext),
InfoCards: model.variables.infoCardsListVar.getCurrent(callContext.iterationContext)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClickEvt$Action: function (indexIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.infoCardsSliderOnCardClickEvt$Action(indexIn, controller.callContext(eventHandlerContext));
});
;
},
onCardClick_DeleteEvt$Action: function (currIdentifierIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.infoCardsSliderOnCardClick_DeleteEvt$Action(currIdentifierIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "76",
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.infoCardsListVar)]
})), $if(model.variables.friendSecretActiveVar.showRedeemGiftAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16",
visible: true,
_idProps: {
service: idService,
uuid: "77"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "secretfriend_container",
visible: true,
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToSecretFriend$Action(false, controller.callContext(eventHandlerContext));
});
;
}
},
style: "item-container",
visible: true,
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "item",
visible: true,
_idProps: {
service: idService,
uuid: "80"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "yPrSYcRTUUqqSTeeYbIpJA"
},
style: "title pa-6",
visible: true,
_idProps: {
service: idService,
uuid: "81"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-yellow -bold",
value: model.variables.friendSecretActiveVar.redeemGift_TitleAttr,
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "center-image",
visible: true,
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.friendSecretActiveVar.app_Picture_RedeemGiftAttr.contentAttr,
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "84"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title-promotions b-green",
visible: true,
_idProps: {
service: idService,
uuid: "85"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.friendSecretActiveVar.redeemGift_DescAttr,
_idProps: {
service: idService,
uuid: "86"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}, function () {
return [];
}), $if(model.variables.friendSecretActiveVar.showSendGiftAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16",
visible: true,
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "secretfriend_container",
visible: true,
_idProps: {
service: idService,
uuid: "88"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToSecretFriend$Action(true, controller.callContext(eventHandlerContext));
});
;
}
},
style: "item-container",
visible: true,
_idProps: {
service: idService,
uuid: "89"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "item",
visible: true,
_idProps: {
service: idService,
uuid: "90"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "YDnl3OIVPkiZuCpMFAdRyA"
},
style: "title pa-6",
visible: true,
_idProps: {
service: idService,
uuid: "91"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-yellow -bold",
value: model.variables.friendSecretActiveVar.sendGift_TitleAttr,
_idProps: {
service: idService,
uuid: "92"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "center-image",
visible: true,
_idProps: {
service: idService,
uuid: "93"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.friendSecretActiveVar.app_Picture_SendGiftAttr.contentAttr,
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "94"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title-promotions b-strongPink",
visible: true,
_idProps: {
service: idService,
uuid: "95"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.friendSecretActiveVar.sendGift_DescAttr,
_idProps: {
service: idService,
uuid: "96"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}, function () {
return [$if(model.variables.friendSecretActiveVar.isActiveAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16",
visible: true,
_idProps: {
service: idService,
uuid: "97"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "secretfriend_container",
visible: true,
_idProps: {
service: idService,
uuid: "98"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item-container",
visible: true,
_idProps: {
service: idService,
uuid: "99"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "item",
visible: true,
_idProps: {
service: idService,
uuid: "100"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "g6gfdu_X106hYhmh0HxyNQ"
},
style: "title pa-6",
visible: true,
_idProps: {
service: idService,
uuid: "101"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-yellow -bold",
value: "",
_idProps: {
service: idService,
uuid: "102"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "center-image",
visible: true,
_idProps: {
service: idService,
uuid: "103"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.visual_pede.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "104"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title-promotions b-blueDark",
visible: true,
_idProps: {
service: idService,
uuid: "105"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Este natal, já espalhaste a tua magia. Enjoy!",
_idProps: {
service: idService,
uuid: "106"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}, function () {
return [];
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "ma-16",
visible: model.variables.offer_IdentifierVar.gt(OS.BuiltinFunctions.integerToLongInteger(0)),
_idProps: {
service: idService,
name: "UnlistedWelcomePrize"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
StyleClass: "b-WarmPurpleGradient",
RightStyleClass: "text-right -vCenter",
HasRipple: true,
HasRightSide: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.offerGiftOnCardClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "OfferGift",
alias: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "109"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: model.variables.offer_Btn_TitleVar,
_idProps: {
service: idService,
uuid: "110"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white  -small",
value: model.variables.offer_Btn_LabelVar,
_idProps: {
service: idService,
uuid: "111"
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
uuid: "112",
alias: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.offer_Btn_LabelVar), asPrimitiveValue(model.variables.offer_Btn_TitleVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "ma-16",
visible: model.getCachedValue(idService.getId("X1QVqV0ajEWmKyOqkKgFEA.Visible"), function () {
return ((model.variables.nextChargeAmountValVar.gt(OS.BuiltinFunctions.integerToDecimal(0)) && OS.BuiltinFunctions.currDate().lte(model.variables.balanceExpiryDateValVar)) && model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.is_MonthlyRenewalAttr);
}, function () {
return model.variables.nextChargeAmountValVar;
}, function () {
return model.variables.balanceExpiryDateValVar;
}, function () {
return model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.is_MonthlyRenewalAttr;
}),
_idProps: {
service: idService,
uuid: "113"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getUserWTFAggr.dataFetchStatusAttr)
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
RightStyleClass: "text-right -vCenter",
HasRipple: true,
HasRightSide: true,
StyleClass: "b-warmPurple"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.renovarMensalidade_ToggleShow$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "AnteciparMensalidade2",
alias: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "115"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "ANTECIPAR MENSALIDADE",
_idProps: {
service: idService,
uuid: "116"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Recomeça a tua mensalidade WTF e renova todos os benefícios",
_idProps: {
service: idService,
uuid: "117"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall,
StyleClass: "c-white -inline"
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
uuid: "118",
alias: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "ma-16",
visible: !(model.variables.changeRatePlan_Btn_DisabledVar),
_idProps: {
service: idService,
uuid: "119"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRipple: true,
StyleClass: "b-warmPurple",
HasRightSide: true,
RightStyleClass: "text-right -vCenter"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.changeTarifarioOnCardClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "ChangeTarifario2",
alias: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "121"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "MUDAR TARIFÁRIO",
_idProps: {
service: idService,
uuid: "122"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Escolhe o melhor tarifário para ti",
_idProps: {
service: idService,
uuid: "123"
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
uuid: "124",
alias: "35"
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
style: "ma-16",
visible: true,
_idProps: {
service: idService,
uuid: "125"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRipple: true,
HasLeftSide: false,
StyleClass: "b-warmPurple",
RightStyleClass: "text-right -vCenter",
HasRightSide: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToPinPuk$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "PinPukCard2",
alias: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "127"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "CARTÃO SIM",
_idProps: {
service: idService,
uuid: "128"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Consulta o PIN, PUK e CVP do teu cartão SIM",
_idProps: {
service: idService,
uuid: "129"
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
uuid: "130",
alias: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24 ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "131"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, {
inputs: {
StyleClass: "-flexCard"
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
uuid: "132",
alias: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn -flexCardColumn-master",
visible: true,
_idProps: {
service: idService,
uuid: "133"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "mb-8 w-50"
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
uuid: "134",
alias: "39"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
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
uuid: "135",
alias: "40"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-flexCardColumn text-right -vCenter",
visible: true,
_idProps: {
service: idService,
uuid: "136"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "-inline",
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
uuid: "137",
alias: "41"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: []
}))];
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "h+ndBY3XE0qMMjOFt3Ap4Q"
},
showPopup: (!(model.variables.isLoadingVar) && model.variables.hasPushReviewVar),
style: "popup-dialog",
_idProps: {
service: idService,
name: "PushReview"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "sqjKAUmdVEmCn4R+lzxpYg"
},
visible: ((model.variables.pushreview_currentstatusidVar === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.initial) || (model.variables.pushreview_currentstatusidVar === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.delay)),
_idProps: {
service: idService,
uuid: "139"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "140"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Avalia esta app",
_idProps: {
service: idService,
uuid: "141"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-warmPurple -bold",
value: "Estás a curtir desta app?",
_idProps: {
service: idService,
uuid: "142"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "143"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "144"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pushReview_UpdateStatus$Action(WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.noReview, controller.callContext(eventHandlerContext));
});
;
}
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.PushReviewNOK.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "145"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "146"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pushReview_UpdateStatus$Action(WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.review, controller.callContext(eventHandlerContext));
});
;
}
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.PushReviewOK.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "147"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
style: "ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "148"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "A_Elq2729ka+plZroFO+KA"
},
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pushReview_UpdateStatus$Action(WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.delay, controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-warmPurple",
visible: true,
_idProps: {
service: idService,
name: "ReviewDelay2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Responder mais logo",
_idProps: {
service: idService,
name: "Link2"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "OLD3TPK46ECH+s6ABtdSwA"
},
visible: ((model.variables.pushreview_currentstatusidVar === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.review) || (model.variables.pushreview_currentstatusidVar === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.reviewDelay)),
_idProps: {
service: idService,
uuid: "151"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "152"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Obrigado!",
_idProps: {
service: idService,
uuid: "153"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-warmPurple -bold",
value: "Queres deixar uma classificação na Store?",
_idProps: {
service: idService,
uuid: "154"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "155"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "156"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.PushReviewOK.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "157"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
style: "ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "158"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
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
controller.pushReview_GoToStore$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "GoToStore"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Sim, classificar",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
style: "ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "162"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "NyTWMSQX7UGvjyuVlT9q0g"
},
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pushReview_UpdateStatus$Action(WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.reviewDelay, controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-warmPurple",
visible: true,
_idProps: {
service: idService,
name: "ReviewDelay"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Classificar mais logo",
_idProps: {
service: idService,
name: "Link4"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "WKxGUdC8nU6oRFV8UF1jtg"
},
visible: (model.variables.pushreview_currentstatusidVar === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.noReview),
_idProps: {
service: idService,
uuid: "165"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "166"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Ajuda-nos a melhorar",
_idProps: {
service: idService,
uuid: "167"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-warmPurple -bold",
value: "O que podemos melhorar nesta app?",
_idProps: {
service: idService,
uuid: "168"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.TextArea, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
maxLength: 1200,
style: "form-control push_review",
textLines: 7,
variable: model.createVariable(OS.Types.Text, model.variables.pushreview_feedbackVar, function (value) {
model.variables.pushreview_feedbackVar = value;
}),
_idProps: {
service: idService,
name: "TextArea_pushreview_feedback"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "170"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-32",
visible: true,
_idProps: {
service: idService,
uuid: "171"
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
uuid: "172"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "ib4Fc1U+10SdBhZUGPdddg"
},
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pushReview_UpdateStatus$Action(WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.noReviewCancel, controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary -big",
visible: true,
_idProps: {
service: idService,
name: "CancelButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
name: "ButtonTextSecondary"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
uuid: "175"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "m4udBu8nv0WlJ1b+yWuO+Q"
},
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pushReview_UpdateStatus$Action(WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.feedback, controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -big",
visible: true,
_idProps: {
service: idService,
name: "EnviarButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Enviar",
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "d-none",
visible: true,
_idProps: {
service: idService,
name: "PopableContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-popableText",
visible: true,
_idProps: {
service: idService,
name: "Popable"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Carregue novamente para sair",
_idProps: {
service: idService,
uuid: "180"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
DemoAppWithoutLogin: false,
IsOffline: false,
Page: "Selfcare"
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
uuid: "181",
alias: "42"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.pushreview_feedbackVar), asPrimitiveValue(model.variables.pushreview_currentstatusidVar), asPrimitiveValue(model.variables.hasPushReviewVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.changeRatePlan_Btn_DisabledVar), asPrimitiveValue(model.variables.getUserWTFAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.is_MonthlyRenewalAttr), asPrimitiveValue(model.variables.balanceExpiryDateValVar), asPrimitiveValue(model.variables.nextChargeAmountValVar), asPrimitiveValue(model.variables.offer_Btn_LabelVar), asPrimitiveValue(model.variables.offer_Btn_TitleVar), asPrimitiveValue(model.variables.offer_IdentifierVar), asPrimitiveValue(model.variables.friendSecretActiveVar.isActiveAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.sendGift_DescAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.app_Picture_SendGiftAttr.contentAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.sendGift_TitleAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.showSendGiftAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.redeemGift_DescAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.app_Picture_RedeemGiftAttr.contentAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.redeemGift_TitleAttr), asPrimitiveValue(model.variables.friendSecretActiveVar.showRedeemGiftAttr), asPrimitiveValue(model.variables.infoCardsListVar), asPrimitiveValue(model.variables.isLoadingFinishedVar), asPrimitiveValue(model.variables.balanceIsSuccessVar), asPrimitiveValue(model.variables.applicationNameVar), asPrimitiveValue(model.variables.refreshTokenVar), asPrimitiveValue(model.variables.associationIDVar), asPrimitiveValue(model.variables.cacheValidationIntervalVar), asPrimitiveValue(model.variables.showBalanceCardVar), asPrimitiveValue(model.variables.isReadyToRunVar), asPrimitiveValue(model.variables.pageCodeVar), asPrimitiveValue(model.variables.mSISDNVar), asPrimitiveValue(model.variables.tariffVar)]
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "M6MJ73s1TE6jTpfHwAipIg"
},
showPopup: model.variables.showPopupRenovarMensalidadeVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "MensalidadePopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "oT38SPYsPk+kb9clRzxa1w"
},
visible: true,
_idProps: {
service: idService,
uuid: "183"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "184"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-strongPink -bold",
value: "Antecipar mensalidade",
_idProps: {
service: idService,
uuid: "185"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "186"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.getCachedValue(idService.getId("bjMEvvrBU0i_pVbAUes9bA.Value"), function () {
return (("Ao antecipar a mensaliadde renovas já todos os benefícios do teu tarifário. Para isso, basta que tenhas " + OS.BuiltinFunctions.formatCurrency(model.variables.nextChargeAmountValVar, "€", 2, ",", ".")) + " de saldo disponíveis.");
}, function () {
return model.variables.nextChargeAmountValVar;
}),
_idProps: {
service: idService,
uuid: "187"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-8",
value: "Esta ação é imediata.",
_idProps: {
service: idService,
uuid: "188"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-8",
value: "Tens a certeza que queres renovar a tua mensalidade?",
_idProps: {
service: idService,
uuid: "189"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "190"
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
"data-style-key": "K049atD990W0BSWWDjPeyA"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.renovarMensalidade_ToggleShow$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary",
visible: true,
_idProps: {
service: idService,
uuid: "192"
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
name: "PrimaryButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.renovarMensalidade_Confirm$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "Copy"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Confirmar",
_idProps: {
service: idService,
name: "ButtonTextPrimary3"
},
_widgetRecordProvider: widgetsRecordProvider
})))))), React.createElement(NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onLoginSuccess$Action: function (urlIn, browserIn) {
var eventHandlerContext = callContext.clone();
controller.showWebViewListener$Action(controller.callContext(eventHandlerContext));

;
},
onError$Action: function (errorIn) {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnError$Action(controller.callContext(eventHandlerContext));

;
},
onSuccess$Action: function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnSuccess$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "197",
alias: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_Home.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MBP.controller", "AppMinimizePlugin.controller", "BALANCE_MBP.model", "WTF_BP.model", "BALANCE_MBP.controller", "AppStoreLauncherPlugin.controller", "MobilePatterns.controller", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.ZonaFlow.WTF_Home.mvc$controller.HomeAndroidBackButton.GetClicksTimeStampsJS", "WTF_MOB.ZonaFlow.WTF_Home.mvc$controller.InfoCardsSliderOnCardClickEvt.JavaScript1JS", "WTF_MBP.model$App_InfoCardsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$App_TmcodeChangeList", "WTF_MBP.controller$GetChangeRatePlanInfoAll_BP", "WTF_MOB.model$Local_TMCODE_TO_CHANGEList", "WTF_MBP.controller$CreateOrUpdateAllLocal_TMCODE_TO_CHANGE", "AppMinimizePlugin.controller$MinimizeApp", "WTF_MOB.referencesHealth$AppMinimizePlugin", "AppMinimizePlugin.controller$CheckPlugin", "WTF_MOB.model$Local_BALANCE_NEXT_CHARGE_DETAILRecordList", "BALANCE_MBP.model$Local_BALANCE_NEXT_CHARGE_DETAILRec", "WTF_MOB.referencesHealth$BALANCE_MBP", "BALANCE_MBP.entities", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MBP.controller$DeleteAllLocal_LOCALDYNAMICLINK", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_BP.model$App_SecretFriendRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.model$App_InfoCardsMBPList", "WTF_MBP.controller$VerifyWelcomePrizeAndSecretFriendAndInfoCards", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_BP.model$App_IdentifierRec", "WTF_MBP.controller$PushReview_GetStatus", "WTF_MBP.controller$setActivityLog_Homepage", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MBP.controller$DeleteAllLocal_LOCALTEMPDEEPLINK", "WTF_BP.model$App_PictureRec", "WTF_MOB.model$Local_TEMPDEEPLINKRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_TEMPDYNAMICLINKRecordList", "WTF_MOB.model$Local_SERVICERecordList", "WTF_MBP.model$Local_TEMPDEEPLINKRec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_TEMPDYNAMICLINKRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.entities", "WTF_MBP.controller$SetMonthlyRenewalByContractDN", "WTF_MBP.controller$setActivityLog_ANTICIPATE_PAYMENT", "WTF_MOB.model$PUSH_REVIEW_STATUSRecord", "WTF_MBP.controller$PushReview_UpdateStatus", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.controller$StopTraceGlobalAction", "AppStoreLauncherPlugin.controller$OpenMobileAppStore", "WTF_MOB.referencesHealth$AppStoreLauncherPlugin", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$SetInfoCardStatus", "WTF_MOB.controller$OpenExternalURL", "MobilePatterns.controller$CarouselPrevious", "WTF_MOB.referencesHealth$MobilePatterns", "MobilePatterns.controller$CarouselUpdate", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, MobileUIWidgetsController, WTF_MBPController, AppMinimizePluginController, BALANCE_MBPModel, WTF_BPModel, BALANCE_MBPController, AppStoreLauncherPluginController, MobilePatternsController, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController, WTF_MOB_ZonaFlow_WTF_Home_mvc_controller_HomeAndroidBackButton_GetClicksTimeStampsJS, WTF_MOB_ZonaFlow_WTF_Home_mvc_controller_InfoCardsSliderOnCardClickEvt_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.getPUSH_REVIEW_STATUS$ServerAction = function (idIn, callContext) {
var controller = this.controller;
var inputs = {
Id: OS.DataTypes.JSConversions.basicTypeToJS(idIn, OS.Types.Integer)
};
return controller.callServerAction("GetPUSH_REVIEW_STATUS", "screenservices/WTF_MOB/ZonaFlow/WTF_Home/ssGetPUSH_REVIEW_STATUS", "UA2_ZD7I0ZqDtwYIzvHkYQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home$ssGetPUSH_REVIEW_STATUS"))();
executeServerActionResult.recordOut = WTF_MOBModel.PUSH_REVIEW_STATUSRecord.fromJS(outputs.Record);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home$ssGetPUSH_REVIEW_STATUS", [{
name: "Record",
attrName: "recordOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MOBModel.PUSH_REVIEW_STATUSRecord();
},
complexType: WTF_MOBModel.PUSH_REVIEW_STATUSRecord
}]);

// Aggregates and Data Actions
Controller.prototype.getUserWTF$AggrRefresh = function (maxRecords) {
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
return model.variables.getUserWTFAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getUserWTF$AggrRefresh"];
// Client Actions
Controller.prototype._goToPinPuk$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToPinPuk");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Consultar Pin, Puk e Sim", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_PinPuk
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_PinPuk", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
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
OS.Logger.trace("WTF_Home.CardInternetNameClickEvent", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._changeTarifarioOnCardClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ChangeTarifarioOnCardClick");
callContext = controller.callContext(callContext);
var getChangeRatePlanInfoAll_BPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Consumos", "Mudar tarifario", 0, "", callContext).then(function () {
// Execute Action: GetChangeRatePlanInfoAll_BP
model.flush();
return WTF_MBPController.default.getChangeRatePlanInfoAll_BP$Action(model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refreshTokenVar, callContext).then(function (value) {
getChangeRatePlanInfoAll_BPVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getChangeRatePlanInfoAll_BPVar.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((getChangeRatePlanInfoAll_BPVar.value.app_TmcodeChangeOut.isEmpty)) {
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("Oops, não podes mudar o teu tarifário tenta mais tarde.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
// Execute Action: CreateOrUpdateAllLocal_TMCODE_TO_CHANGE
model.flush();
return WTF_MBPController.default.createOrUpdateAllLocal_TMCODE_TO_CHANGE$Action(OS.DataTypes.JSConversions.typeConvertRecordList(getChangeRatePlanInfoAll_BPVar.value.app_TmcodeChangeOut, new WTF_MOBModel.Local_TMCODE_TO_CHANGEList(), function (source, target) {
target.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
target.amountAttr = source.amountAttr;
target.tmcodeAttr = source.tmcodeAttr;
target.ratePlanCodeAttr = source.ratePlanCodeAttr;
target.nameAttr = source.nameAttr;
target.internetAttr = source.internetAttr;
target.minutesAttr = source.minutesAttr;
target.priceMonthlyAttr = source.priceMonthlyAttr;
target.priceWeeklyAttr = source.priceWeeklyAttr;
target.conditionsUrlAttr = source.conditionsUrlAttr;
target.isBestOfferAttr = source.isBestOfferAttr;
target.is_MonthlyRenewalAttr = source.is_MonthlyRenewalAttr;
return target;
}), callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/ChangeTarifario_Choose
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ChangeTarifario_Choose", {
BalanceValue: model.variables.balanceValueVar,
BalanceMessage: model.variables.balanceMessageVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
} else {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action(getChangeRatePlanInfoAll_BPVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
});
};
Controller.prototype._renovarMensalidade_ToggleShow$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RenovarMensalidade_ToggleShow");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Consumos", ((!(model.variables.showPopupRenovarMensalidadeVar)) ? ("Renovar mensalidade") : ("Voltar")), 0, "", callContext).then(function () {
// showPopupRenovarMensalidade = notshowPopupRenovarMensalidade
model.variables.showPopupRenovarMensalidadeVar = !(model.variables.showPopupRenovarMensalidadeVar);
});
});
};
Controller.prototype._homeAndroidBackButton$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("HomeAndroidBackButton");
callContext = controller.callContext(callContext);
var minimizeAppVar = new OS.DataTypes.VariableHolder();
var checkPluginVar = new OS.DataTypes.VariableHolder();
var getClicksTimeStampsJSResult = new OS.DataTypes.VariableHolder();
// Execute Action: CheckPlugin
checkPluginVar.value = AppMinimizePluginController.default.checkPlugin$Action(callContext);

if((checkPluginVar.value.isAvailableOut)) {
getClicksTimeStampsJSResult.value = controller.safeExecuteJSNode(WTF_MOB_ZonaFlow_WTF_Home_mvc_controller_HomeAndroidBackButton_GetClicksTimeStampsJS, "GetClicksTimeStamps", "HomeAndroidBackButton", {
timePeriodToExit: OS.DataTypes.JSConversions.basicTypeToJS(3000, OS.Types.Integer, true),
minimizeApp: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.HomeAndroidBackButton$getClicksTimeStampsJSResult"))();
jsNodeResult.minimizeAppOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.minimizeApp, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
// MinimizeApp?
if((getClicksTimeStampsJSResult.value.minimizeAppOut)) {
// Execute Action: MinimizeApp
minimizeAppVar.value = AppMinimizePluginController.default.minimizeApp$Action(callContext);

} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("   Carrega novamente para sair", 0, true, "", true, true, 3000, "", "-large", callContext);
}

}

};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.HomeAndroidBackButton$getClicksTimeStampsJSResult", [{
name: "minimizeApp",
attrName: "minimizeAppOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._loadingFinished$Action = function (balanceValueOutIn, balanceMessageOutIn, isSuccessIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LoadingFinished");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.LoadingFinished$vars"))());
vars.value.balanceValueOutInLocal = balanceValueOutIn;
vars.value.balanceMessageOutInLocal = balanceMessageOutIn;
vars.value.isSuccessInLocal = isSuccessIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLocalBALANCENEXTCHARGEDETAILSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_BALANCE_NEXT_CHARGE_DETAILRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalBALANCENEXTCHARGEDETAILS
var getLocalBALANCENEXTCHARGEDETAILSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_BALANCE_NEXT_CHARGE_DETAILRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2";
} else {
selectSql += "\"ENLocal_BALANCE_NEXT_CHARGE\".\"Id\" o0, \"ENLocal_BALANCE_NEXT_CHARGE\".\"Amount\" o1, \"ENLocal_BALANCE_NEXT_CHARGE\".\"Date\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_NEXT_CHARGE_DETAIL\" \"ENLocal_BALANCE_NEXT_CHARGE\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_BALANCE_NEXT_CHARGE_DETAILRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_NEXT_CHARGE_DETAILAttr",
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
return getLocalBALANCENEXTCHARGEDETAILSVar.value;
});
};
return getLocalBALANCENEXTCHARGEDETAILSAggr().then(function () {
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
// BalanceValue = BalanceValueOut
model.variables.balanceValueVar = vars.value.balanceValueOutInLocal;
// BalanceMessage = BalanceMessageOut
model.variables.balanceMessageVar = vars.value.balanceMessageOutInLocal;
// BalanceIsSuccess = IsSuccess
model.variables.balanceIsSuccessVar = vars.value.isSuccessInLocal;
// BalanceExpiryDateVal = GetLocalBALANCENEXTCHARGEDETAILS.List.Current.Local_BALANCE_NEXT_CHARGE_DETAIL.Date
model.variables.balanceExpiryDateValVar = getLocalBALANCENEXTCHARGEDETAILSVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_NEXT_CHARGE_DETAILAttr.dateAttr;
// NextChargeAmountVal = GetLocalBALANCENEXTCHARGEDETAILS.List.Current.Local_BALANCE_NEXT_CHARGE_DETAIL.Amount
model.variables.nextChargeAmountValVar = getLocalBALANCENEXTCHARGEDETAILSVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_NEXT_CHARGE_DETAILAttr.amountAttr;
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home.LoadingFinished", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.LoadingFinished$vars", [{
name: "BalanceValueOut",
attrName: "balanceValueOutInLocal",
mandatory: true,
dataType: OS.Types.Decimal,
defaultValue: function () {
return OS.DataTypes.Decimal.defaultValue;
}
}, {
name: "BalanceMessageOut",
attrName: "balanceMessageOutInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsSuccess",
attrName: "isSuccessInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._showWebViewListenerOnError$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnError");
callContext = controller.callContext(callContext);
};
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.AfterFetch$vars"))());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAndSyncLocalPictureById3Var = new OS.DataTypes.VariableHolder();
var getWTF_ZonaOfferBtn_TitleVar = new OS.DataTypes.VariableHolder();
var verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTFVar = new OS.DataTypes.VariableHolder();
var get_Selfcare_SHOW_BALANCEVar = new OS.DataTypes.VariableHolder();
var getApplicationName_MBPVar = new OS.DataTypes.VariableHolder();
var getWTF_ZonaOfferBtn_LabelVar = new OS.DataTypes.VariableHolder();
var getWTF_ChangeRatePlan_Btn_DisabledVar = new OS.DataTypes.VariableHolder();
var pushReview_GetStatusVar = new OS.DataTypes.VariableHolder();
var getBalanceConfigs_MBPVar = new OS.DataTypes.VariableHolder();
var getAndSyncLocalPictureById2Var = new OS.DataTypes.VariableHolder();
var getPageCodeVar = new OS.DataTypes.VariableHolder();
var getCacheValidationIntervalVar = new OS.DataTypes.VariableHolder();
var getLocalTEMPDEEPLINKSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_TEMPDEEPLINKRecordList))());
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
var getLocalTEMPDYNAMICLINKSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_TEMPDYNAMICLINKRecordList))());
var getLocalBALANCENEXTCHARGEDETAILSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_BALANCE_NEXT_CHARGE_DETAILRecordList))());
var getAccessTokenInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
var getServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_SERVICERecordList))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// IsLoadingFinished = False
model.variables.isLoadingFinishedVar = false;
// AnalyticsAuxVar.TraceName = "Zona"
model.variables.analyticsAuxVarVar.traceNameAttr = "Zona";
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
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
// Execute Action: VerifyWelcomePrizeAndSecretFriendAndInfoCardsAndFr
model.flush();
return WTF_MBPController.default.verifyWelcomePrizeAndSecretFriendAndInfoCards$Action(model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((((verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.successOut && (verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.hasPrizeOut === true)) && !(model.variables.fromWelcomePrizeIn)))) {
// Execute Action: StopTrace8
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/WelcomePrize
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WelcomePrize", {
Identifier: verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.appWelcomePrizeIdentifierOut
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: GetWTF_ZonaOfferBtn_Label
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_ZonaOfferBtn_Label", callContext).then(function (value) {
getWTF_ZonaOfferBtn_LabelVar.value = value;
}).then(function () {
// Execute Action: GetWTF_ZonaOfferBtn_Title
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_ZonaOfferBtn_Title", callContext).then(function (value) {
getWTF_ZonaOfferBtn_TitleVar.value = value;
});
}).then(function () {
// Offer_Btn_Title = GetWTF_ZonaOfferBtn_Title.Value
model.variables.offer_Btn_TitleVar = getWTF_ZonaOfferBtn_TitleVar.value.valueOut;
// Offer_Btn_Label = GetWTF_ZonaOfferBtn_Label.Value
model.variables.offer_Btn_LabelVar = getWTF_ZonaOfferBtn_LabelVar.value.valueOut;
// Offer_Identifier = VerifyWelcomePrizeAndSecretFriendAndInfoCardsAndFr.ZonaWelcomeOfferId
model.variables.offer_IdentifierVar = verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.zonaWelcomeOfferIdOut;
// Execute Action: GetWTF_ChangeRatePlan_Btn_Disabled
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_ChangeRatePlan_Btn_Disabled", callContext).then(function (value) {
getWTF_ChangeRatePlan_Btn_DisabledVar.value = value;
});
}).then(function () {
// ChangeRatePlan_Btn_Disabled = ToLower = "true"
model.variables.changeRatePlan_Btn_DisabledVar = (OS.BuiltinFunctions.toLower(getWTF_ChangeRatePlan_Btn_DisabledVar.value.valueOut) === "true");
// FriendSecretActive = VerifyWelcomePrizeAndSecretFriendAndInfoCardsAndFr.FriendSecretActive
model.variables.friendSecretActiveVar = verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.friendSecretActiveOut;
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.friendSecretActiveOut.showSendGiftAttr || verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.friendSecretActiveOut.showRedeemGiftAttr))) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("pageload", "Zona", (((verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.friendSecretActiveOut.showSendGiftAttr) ? (("AmigoSecreto_" + verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.friendSecretActiveOut.sendGift_TitleAttr)) : ("")) + ((verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.friendSecretActiveOut.showRedeemGiftAttr) ? (("AmigoSecreto_" + verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.friendSecretActiveOut.redeemGift_TitleAttr)) : (""))), 0, "", callContext);
}

});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.friendSecretActiveVar.showSendGiftAttr)) {
// Execute Action: GetAndSyncLocalPictureById2
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.friendSecretActiveVar.app_Picture_SendGiftAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureById2Var.value = value;
}).then(function () {
// FriendSecretActive.App_Picture_SendGift = GetAndSyncLocalPictureById2.Picture
model.variables.friendSecretActiveVar.app_Picture_SendGiftAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureById2Var.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
});
}

});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.friendSecretActiveVar.showRedeemGiftAttr)) {
// Execute Action: GetAndSyncLocalPictureById3
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.friendSecretActiveVar.app_Picture_RedeemGiftAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureById3Var.value = value;
}).then(function () {
// FriendSecretActive.App_Picture_RedeemGift = GetAndSyncLocalPictureById3.Picture
model.variables.friendSecretActiveVar.app_Picture_RedeemGiftAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureById3Var.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
});
}

});
}).then(function () {
// Execute Action: LogEventFacebookSDK_WTF
logEventFacebookSDK_WTFVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Check_balances", callContext);

// Execute Action: PushReview_GetStatus
model.flush();
return WTF_MBPController.default.pushReview_GetStatus$Action(callContext).then(function (value) {
pushReview_GetStatusVar.value = value;
}).then(function () {
// hasPushReview = PushReview_GetStatus.HasPushReview
model.variables.hasPushReviewVar = pushReview_GetStatusVar.value.hasPushReviewOut;
// App_Identifier = PushReview_GetStatus.App_Identifier
model.variables.app_IdentifierVar = pushReview_GetStatusVar.value.app_IdentifierOut;
// pushreview_currentstatusid = PushReview_GetStatus.CurrentPushReviewStatusId
model.variables.pushreview_currentstatusidVar = pushReview_GetStatusVar.value.currentPushReviewStatusIdOut;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.hasPushReviewVar)) {
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Push Review", "Show", 0, "", callContext);
}

});
}).then(function () {
// Execute Action: setActivityLog_Homepage
model.flush();
return WTF_MBPController.default.setActivityLog_Homepage$Action(callContext);
}).then(function () {
// GetUserWTF.Empty?
return OS.Flow.executeSequence(function () {
if((!(model.variables.getUserWTFAggr.listOut.isEmpty))) {
// SetMSISDN
// MSISDN = GetUserWTF.List.Current.Local_USER_WTF.Msisdn
model.variables.mSISDNVar = (model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr).toString();
// Aggregate: GetAccessTokenInfo
var getAccessTokenInfoAggr = function (maxRecords) {
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
return getAccessTokenInfoVar.value;
});
};
return getAccessTokenInfoAggr().then(function () {
// Access Token not Found?
return OS.Flow.executeSequence(function () {
if((!(getAccessTokenInfoVar.value.listOut.isEmpty))) {
// SetRefreshToken
// RefreshToken = GetAccessTokenInfo.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = getAccessTokenInfoVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
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

var qpstServiceId = model.variables.mSISDNVar;

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
// Service not Found?
return OS.Flow.executeSequence(function () {
if((!(getServiceVar.value.listOut.isEmpty))) {
// SetAssociationID
// AssociationID = GetService.List.Current.Local_SERVICE.AssociationID
model.variables.associationIDVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr;
// Tariff = GetService.List.Current.Local_SERVICE.Plan
model.variables.tariffVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.planAttr;
// Execute Action: GetApplicationName_MBP
model.flush();
return WTF_MBPController.default.getApplicationName_MBP$Action(callContext).then(function (value) {
getApplicationName_MBPVar.value = value;
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
// Aggregate: GetLocalTEMPDEEPLINKS
var getLocalTEMPDEEPLINKSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_TEMPDEEPLINKRecordList;
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
selectSql += "NULL o0, NULL o1";
} else {
selectSql += "\"ENLocal_TEMPDEEPLINK\".\"Id\" o0, \"ENLocal_TEMPDEEPLINK\".\"URL\" o1";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_TEMPDEEPLINK\" \"ENLocal_TEMPDEEPLINK\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_TEMPDEEPLINKRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_TEMPDEEPLINKAttr",
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
return getLocalTEMPDEEPLINKSVar.value;
});
};
return getLocalTEMPDEEPLINKSAggr();
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getLocalTEMPDEEPLINKSVar.value.listOut.isEmpty)) {
// Aggregate: GetLocalTEMPDYNAMICLINKS
var getLocalTEMPDYNAMICLINKSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_TEMPDYNAMICLINKRecordList;
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
selectSql += "NULL o0, NULL o1";
} else {
selectSql += "\"ENLocal_TEMPDYNAMICLINK\".\"Id\" o0, \"ENLocal_TEMPDYNAMICLINK\".\"URL\" o1";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_TEMPDYNAMICLINK\" \"ENLocal_TEMPDYNAMICLINK\"";
orderBySql += " ORDER BY \"ENLocal_TEMPDYNAMICLINK\".\"URL\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_TEMPDYNAMICLINKRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_TEMPDYNAMICLINKAttr",
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
return getLocalTEMPDYNAMICLINKSVar.value;
});
};
return getLocalTEMPDYNAMICLINKSAggr().then(function () {
return OS.Flow.executeSequence(function () {
if((getLocalTEMPDYNAMICLINKSVar.value.listOut.isEmpty)) {
// Execute Action: GetBalanceConfigs_MBP
model.flush();
return BALANCE_MBPController.default.getBalanceConfigs_MBP$Action(model.variables.applicationNameVar, model.variables.cacheValidationIntervalVar, model.variables.refreshTokenVar, callContext).then(function (value) {
getBalanceConfigs_MBPVar.value = value;
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
// Execute Action: Get_Selfcare_SHOW_BALANCE
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("Selfcare_SHOW_BALANCE", callContext).then(function (value) {
get_Selfcare_SHOW_BALANCEVar.value = value;
});
}).then(function () {
if((((OS.BuiltinFunctions.toLower(get_Selfcare_SHOW_BALANCEVar.value.valueOut) === "true") || model.variables.forceRefresh_BalanceVar))) {
// ShowBalanceCard = True
model.variables.showBalanceCardVar = true;
} else {
// ShowBalanceCard = False
model.variables.showBalanceCardVar = false;
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
}

// IsLoading = False
model.variables.isLoadingVar = false;
// IsReadyToRun = True
model.variables.isReadyToRunVar = true;
// Aggregate: GetLocalBALANCENEXTCHARGEDETAILS
var getLocalBALANCENEXTCHARGEDETAILSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_BALANCE_NEXT_CHARGE_DETAILRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2";
} else {
selectSql += "\"ENLocal_BALANCE_NEXT_CHARGE\".\"Id\" o0, \"ENLocal_BALANCE_NEXT_CHARGE\".\"Amount\" o1, \"ENLocal_BALANCE_NEXT_CHARGE\".\"Date\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_NEXT_CHARGE_DETAIL\" \"ENLocal_BALANCE_NEXT_CHARGE\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_BALANCE_NEXT_CHARGE_DETAILRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_NEXT_CHARGE_DETAILAttr",
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
return getLocalBALANCENEXTCHARGEDETAILSVar.value;
});
};
return getLocalBALANCENEXTCHARGEDETAILSAggr().then(function () {
// BalanceExpiryDateVal = GetLocalBALANCENEXTCHARGEDETAILS.List.Current.Local_BALANCE_NEXT_CHARGE_DETAIL.Date
model.variables.balanceExpiryDateValVar = getLocalBALANCENEXTCHARGEDETAILSVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_NEXT_CHARGE_DETAILAttr.dateAttr;
// NextChargeAmountVal = GetLocalBALANCENEXTCHARGEDETAILS.List.Current.Local_BALANCE_NEXT_CHARGE_DETAIL.Amount
model.variables.nextChargeAmountValVar = getLocalBALANCENEXTCHARGEDETAILSVar.value.listOut.getCurrent(callContext.iterationContext).local_BALANCE_NEXT_CHARGE_DETAILAttr.amountAttr;
// InfoCardsList = VerifyWelcomePrizeAndSecretFriendAndInfoCardsAndFr.InfoCardsList
model.variables.infoCardsListVar = verifyWelcomePrizeAndSecretFriendAndInfoCardsAndFrVar.value.infoCardsListOut;
// Execute Action: StopTrace7
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
} else {
// Execute Action: StopTrace6
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
return OS.Flow.returnAsync();

});
}

});
});
} else {
// TempDynamicLink
// TempDynamicLink = GetLocalTEMPDYNAMICLINKS.List.Current.Local_TEMPDYNAMICLINK.URL
vars.value.tempDynamicLinkVar = getLocalTEMPDYNAMICLINKSVar.value.listOut.getCurrent(callContext.iterationContext).local_TEMPDYNAMICLINKAttr.uRLAttr;
// Execute Action: DeleteAllLocal_LOCALDYNAMICLINK
model.flush();
return WTF_MBPController.default.deleteAllLocal_LOCALDYNAMICLINK$Action(callContext).then(function () {
// Execute Action: StopTrace10
return controller._stopTrace$Action(callContext);
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.tempDynamicLinkVar, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
} else {
// TempDeepLink
// TempDeepLink = GetLocalTEMPDEEPLINKS.List.Current.Local_TEMPDEEPLINK.URL
vars.value.tempDeepLinkVar = getLocalTEMPDEEPLINKSVar.value.listOut.getCurrent(callContext.iterationContext).local_TEMPDEEPLINKAttr.uRLAttr;
// Execute Action: DeleteAllLocal_LOCALTEMPDEEPLINK2
model.flush();
return WTF_MBPController.default.deleteAllLocal_LOCALTEMPDEEPLINK$Action(callContext).then(function () {
// Execute Action: StopTrace9
return controller._stopTrace$Action(callContext);
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.tempDeepLinkVar, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}

});
});
}

});
});
}

});
}).then(function () {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
});
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
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
// Execute Action: CustomFeedbackMessage
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
// IsLoading = False
model.variables.isLoadingVar = false;
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.AfterFetch$vars", [{
name: "TempDynamicLink",
attrName: "tempDynamicLinkVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TempDeepLink",
attrName: "tempDeepLinkVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
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
OS.Logger.trace("WTF_Home.CardClickBalanceEvent", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._showWebViewListener$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListener");
callContext = controller.callContext(callContext);
};
Controller.prototype._offerGiftOnCardClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OfferGiftOnCardClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Ver Oferta Zona", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WelcomePrize
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WelcomePrize", {
Identifier: model.variables.offer_IdentifierVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
};
Controller.prototype._renovarMensalidade_Confirm$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RenovarMensalidade_Confirm");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var setMonthlyRenewalByContractDNVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Consumos", "Renovar mensalidade confirmação", 0, "", callContext).then(function () {
// showPopupRenovarMensalidade = False
model.variables.showPopupRenovarMensalidadeVar = false;
// showLoading = True
model.variables.showLoadingVar = true;
// Execute Action: SetMonthlyRenewalByContractDN
model.flush();
return WTF_MBPController.default.setMonthlyRenewalByContractDN$Action(callContext).then(function (value) {
setMonthlyRenewalByContractDNVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((setMonthlyRenewalByContractDNVar.value.successOut)) {
// Execute Action: setActivityLog_ANTICIPATE_PAYMENT
model.flush();
return WTF_MBPController.default.setActivityLog_ANTICIPATE_PAYMENT$Action("", model.variables.tariffVar, model.variables.balanceExpiryDateValVar, callContext).then(function () {
// Destination: /WTF_MOB/RenovarMensalidade_Sucess
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RenovarMensalidade_Sucess", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
} else {
// Destination: /WTF_MOB/RenovarMensalidade_Error
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RenovarMensalidade_Error", {
BalanceValue: model.variables.balanceValueVar,
BalanceMessage: model.variables.balanceMessageVar,
Message: ((setMonthlyRenewalByContractDNVar.value.withoutAmountOut) ? ("O teu saldo não é suficiente para continuar esta operação. Por favor, carrega-o e tenta outra vez.") : ("Não foi possivel efectuar esta operação"))
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home.RenovarMensalidade_Confirm", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// showLoading = False
model.variables.showLoadingVar = false;
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// showLoading = False
model.variables.showLoadingVar = false;
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
Controller.prototype._pushReview_UpdateStatus$Action = function (newPushReviewStatusIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PushReview_UpdateStatus");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.PushReview_UpdateStatus$vars"))());
vars.value.newPushReviewStatusIdInLocal = newPushReviewStatusIdIn;
var getPUSH_REVIEW_STATUSVar = new OS.DataTypes.VariableHolder();
var pushReview_UpdateStatusMBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// pushreview_status
// pushreview_currentstatusid = NewPushReviewStatusId
model.variables.pushreview_currentstatusidVar = vars.value.newPushReviewStatusIdInLocal;
// Execute Action: GetPUSH_REVIEW_STATUS
model.flush();
return controller.getPUSH_REVIEW_STATUS$ServerAction(model.variables.pushreview_currentstatusidVar, callContext).then(function (value) {
getPUSH_REVIEW_STATUSVar.value = value;
}).then(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Push Review", getPUSH_REVIEW_STATUSVar.value.recordOut.pUSH_REVIEW_STATUSAttr.labelAttr, 0, "", callContext);
}).then(function () {
// Execute Action: PushReview_UpdateStatusMBP
model.flush();
return WTF_MBPController.default.pushReview_UpdateStatus$Action(vars.value.newPushReviewStatusIdInLocal, model.variables.pushreview_feedbackVar, callContext).then(function (value) {
pushReview_UpdateStatusMBPVar.value = value;
});
}).then(function () {
if((((getPUSH_REVIEW_STATUSVar.value.recordOut.pUSH_REVIEW_STATUSAttr.finalStateAttr || (model.variables.pushreview_currentstatusidVar === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.delay)) || (model.variables.pushreview_currentstatusidVar === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.reviewDelay)))) {
// hasPushReview = False
model.variables.hasPushReviewVar = false;
}

if(((vars.value.newPushReviewStatusIdInLocal === WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.feedback))) {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Obrigado! Vamos analisar o teu feedback.", 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.PushReview_UpdateStatus$vars", [{
name: "NewPushReviewStatusId",
attrName: "newPushReviewStatusIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onPullToRefresh$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnPullToRefresh");
callContext = controller.callContext(callContext);
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Balance_ClearCache
model.flush();
return BALANCE_MBPController.default.balance_ClearCache$Action(callContext).then(function (value) {
balance_ClearCacheVar.value = value;
}).then(function () {
// RefreshToken
// RefreshToken = NullTextIdentifier
model.variables.refreshTokenVar = OS.BuiltinFunctions.nullTextIdentifier();
// IsLoading = True
model.variables.isLoadingVar = true;
// ApplicationName = NullTextIdentifier
model.variables.applicationNameVar = OS.BuiltinFunctions.nullTextIdentifier();
// PageCode = NullTextIdentifier
model.variables.pageCodeVar = OS.BuiltinFunctions.nullTextIdentifier();
// MSISDN = NullTextIdentifier
model.variables.mSISDNVar = OS.BuiltinFunctions.nullTextIdentifier();
// CacheValidationInterval = NullIdentifier
model.variables.cacheValidationIntervalVar = OS.BuiltinFunctions.nullIdentifier();
// IsReadyToRun = False
model.variables.isReadyToRunVar = false;
// IsLoadingFinished = False
model.variables.isLoadingFinishedVar = false;
// BalanceValue = NullIdentifier
model.variables.balanceValueVar = OS.BuiltinFunctions.integerToDecimal(OS.BuiltinFunctions.nullIdentifier());
// BalanceMessage = NullTextIdentifier
model.variables.balanceMessageVar = OS.BuiltinFunctions.nullTextIdentifier();
// AssociationID = NullIdentifier
model.variables.associationIDVar = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// Tariff = NullTextIdentifier
model.variables.tariffVar = OS.BuiltinFunctions.nullTextIdentifier();
// hasPushReview = False
model.variables.hasPushReviewVar = false;
// pushreview_feedback = NullTextIdentifier
model.variables.pushreview_feedbackVar = OS.BuiltinFunctions.nullTextIdentifier();
// App_Identifier.Android = NullTextIdentifier
model.variables.app_IdentifierVar.androidAttr = OS.BuiltinFunctions.nullTextIdentifier();
// App_Identifier.Ios = NullTextIdentifier
model.variables.app_IdentifierVar.iosAttr = OS.BuiltinFunctions.nullTextIdentifier();
// pushreview_currentstatusid = NullIdentifier
model.variables.pushreview_currentstatusidVar = OS.BuiltinFunctions.nullIdentifier();
// FriendSecretActive = FriendSecretActive_Default
model.variables.friendSecretActiveVar = model.variables.friendSecretActive_DefaultVar;
// ForceShowBalanceSkeleton = False
model.variables.forceShowBalanceSkeletonVar = false;
// BalanceIsSuccess = False
model.variables.balanceIsSuccessVar = false;
// ShowBalanceCard = True
model.variables.showBalanceCardVar = true;
// ForceRefresh_Balance = True
model.variables.forceRefresh_BalanceVar = true;
// Refresh Query: GetUserWTF
var result = controller.getUserWTF$AggrRefresh(1);
model.flush();
return result;
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
Controller.prototype._goToSecretFriend$Action = function (sendOfferIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToSecretFriend");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.GoToSecretFriend$vars"))());
vars.value.sendOfferInLocal = sendOfferIn;
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((vars.value.sendOfferInLocal)) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", ("AmigoSecreto_" + model.variables.friendSecretActiveVar.sendGift_TitleAttr), 0, "", callContext).then(function () {
// Destination: /WTF_MOB/SecretFriend_Send_SelectMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SecretFriend_Send_SelectMsisdn", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", ("AmigoSecreto_" + model.variables.friendSecretActiveVar.redeemGift_TitleAttr), 0, "", callContext).then(function () {
if((model.variables.friendSecretActiveVar.alreadySendOfferAttr)) {
// Destination: /WTF_MOB/SecretFriend_MyOffers
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SecretFriend_MyOffers", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/SecretFriend_OfferRedeemError
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SecretFriend_OfferRedeemError", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.GoToSecretFriend$vars", [{
name: "SendOffer",
attrName: "sendOfferInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._pushReview_GoToStore$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PushReview_GoToStore");
callContext = controller.callContext(callContext);
var openMobileAppStoreVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("GoToStore"), false, callContext);
// Execute Action: OpenMobileAppStore
model.flush();
return AppStoreLauncherPluginController.default.openMobileAppStore$Action(model.variables.app_IdentifierVar.androidAttr, model.variables.app_IdentifierVar.iosAttr, "", callContext).then(function (value) {
openMobileAppStoreVar.value = value;
}).then(function () {
// Success
return OS.Flow.executeSequence(function () {
if((openMobileAppStoreVar.value.successOut)) {
// Execute Action: PushReview_UpdateStatus
return controller._pushReview_UpdateStatus$Action(WTF_MOBModel.staticEntities.pUSH_REVIEW_STATUS.reviewed, callContext);
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(openMobileAppStoreVar.value.errorMessageOut, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
// hasPushReview = False
model.variables.hasPushReviewVar = false;
}

});
}).then(function () {
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("GoToStore"), true, callContext);
});
});
};
Controller.prototype._showWebViewListenerOnSuccess$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnSuccess");
callContext = controller.callContext(callContext);
};
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
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Carregar saldo", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Charge
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Charge", {
BalanceValue: model.variables.balanceValueVar,
BalanceMessage: model.variables.balanceMessageVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home.CardChargeClickEvent", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._infoCardsSliderOnCardClickEvt$Action = function (indexIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InfoCardsSliderOnCardClickEvt");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.InfoCardsSliderOnCardClickEvt$vars"))());
vars.value.indexInLocal = indexIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var setInfoCardStatusVar = new OS.DataTypes.VariableHolder();
var javaScript1JSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
javaScript1JSResult.value = controller.safeExecuteJSNode(WTF_MOB_ZonaFlow_WTF_Home_mvc_controller_InfoCardsSliderOnCardClickEvt_JavaScript1JS, "JavaScript1", "InfoCardsSliderOnCardClickEvt", {
DeleteActionRunning: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.InfoCardsSliderOnCardClickEvt$javaScript1JSResult"))();
jsNodeResult.deleteActionRunningOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.DeleteActionRunning, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if((!(javaScript1JSResult.value.deleteActionRunningOut))) {
// Execute Action: SetInfoCardStatus
model.flush();
return WTF_MBPController.default.setInfoCardStatus$Action(model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).identifierAttr, false, callContext).then(function (value) {
setInfoCardStatusVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((setInfoCardStatusVar.value.successOut)) {
// InfoCardsList[Index].HasRead = True
model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).hasReadAttr = true;
return OS.Flow.executeSequence(function () {
if((model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).hasDetailAttr)) {
// Destination: /WTF_MOB/WTF_InfoCards
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_InfoCards", {
Identifier: model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).identifierAttr,
TitleHeaderPage: model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).titleHeaderPageAttr
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Abrir card de informação", 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).hasActionAttr)) {
return OS.Flow.executeSequence(function () {
if((model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).btnActionInAppAttr)) {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).btnActionUrlAttr, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: OpenExternalURL
model.flush();
return WTF_MOBController.default.openExternalURL$Action(model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).btnActionUrlAttr, model.variables.infoCardsListVar.getItem(vars.value.indexInLocal).btnActionExternalLinkAttr, "", WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, callContext);
}

});
}

});
});
}

});
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home.InfoCardsSliderOnCardClickEvt", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// showLoading = False
model.variables.showLoadingVar = false;
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// showLoading = False
model.variables.showLoadingVar = false;
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.InfoCardsSliderOnCardClickEvt$vars", [{
name: "Index",
attrName: "indexInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.InfoCardsSliderOnCardClickEvt$javaScript1JSResult", [{
name: "DeleteActionRunning",
attrName: "deleteActionRunningOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._infoCardsSliderOnCardClick_DeleteEvt$Action = function (currIdentifierIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InfoCardsSliderOnCardClick_DeleteEvt");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.InfoCardsSliderOnCardClick_DeleteEvt$vars"))());
vars.value.currIdentifierInLocal = currIdentifierIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var setInfoCardStatusVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: SetInfoCardStatus
model.flush();
return WTF_MBPController.default.setInfoCardStatus$Action(vars.value.currIdentifierInLocal, true, callContext).then(function (value) {
setInfoCardStatusVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((setInfoCardStatusVar.value.successOut)) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Apagar card de informação", 0, "", callContext).then(function () {
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.infoCardsListVar, function (p) {
return p.identifierAttr.equals(vars.value.currIdentifierInLocal);
}, callContext);

// Execute Action: ListRemove
OS.SystemActions.listRemove(model.variables.infoCardsListVar, listIndexOfVar.value.positionOut, callContext);
// Execute Action: CarouselPrevious
MobilePatternsController.default.carouselPrevious$Action(idService.getId("InfoCardsCarousel"), callContext);
// Execute Action: CarouselUpdate
MobilePatternsController.default.carouselUpdate$Action(idService.getId("InfoCardsCarousel"), callContext);
});
} else {
return OS.Flow.executeSequence(function () {
if((!(setInfoCardStatusVar.value.alreadyRunOut))) {
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Apagar card de informação", 0, "", callContext).then(function () {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(setInfoCardStatusVar.value.messageOut, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
});
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home.InfoCardsSliderOnCardClick_DeleteEvt", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// showLoading = False
model.variables.showLoadingVar = false;
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// showLoading = False
model.variables.showLoadingVar = false;
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Home.InfoCardsSliderOnCardClick_DeleteEvt$vars", [{
name: "CurrIdentifier",
attrName: "currIdentifierInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
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
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Home", "Consumos", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Consumptions
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Consumptions", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Home.TwoGraphCardClickEvent", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.goToPinPuk$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToPinPuk$Action, callContext);

};
Controller.prototype.cardInternetNameClickEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardInternetNameClickEvent$Action, callContext);

};
Controller.prototype.changeTarifarioOnCardClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._changeTarifarioOnCardClick$Action, callContext);

};
Controller.prototype.renovarMensalidade_ToggleShow$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._renovarMensalidade_ToggleShow$Action, callContext);

};
Controller.prototype.homeAndroidBackButton$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._homeAndroidBackButton$Action, callContext);

};
Controller.prototype.loadingFinished$Action = function (balanceValueOutIn, balanceMessageOutIn, isSuccessIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loadingFinished$Action, callContext, balanceValueOutIn, balanceMessageOutIn, isSuccessIn);

};
Controller.prototype.showWebViewListenerOnError$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnError$Action, callContext);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.cardClickBalanceEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardClickBalanceEvent$Action, callContext);

};
Controller.prototype.showWebViewListener$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListener$Action, callContext);

};
Controller.prototype.offerGiftOnCardClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._offerGiftOnCardClick$Action, callContext);

};
Controller.prototype.renovarMensalidade_Confirm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._renovarMensalidade_Confirm$Action, callContext);

};
Controller.prototype.pushReview_UpdateStatus$Action = function (newPushReviewStatusIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pushReview_UpdateStatus$Action, callContext, newPushReviewStatusIdIn);

};
Controller.prototype.onPullToRefresh$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onPullToRefresh$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.goToSecretFriend$Action = function (sendOfferIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToSecretFriend$Action, callContext, sendOfferIn);

};
Controller.prototype.pushReview_GoToStore$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pushReview_GoToStore$Action, callContext);

};
Controller.prototype.showWebViewListenerOnSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnSuccess$Action, callContext);

};
Controller.prototype.cardChargeClickEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._cardChargeClickEvent$Action, callContext);

};
Controller.prototype.infoCardsSliderOnCardClickEvt$Action = function (indexIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._infoCardsSliderOnCardClickEvt$Action, callContext, indexIn);

};
Controller.prototype.infoCardsSliderOnCardClick_DeleteEvt$Action = function (currIdentifierIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._infoCardsSliderOnCardClick_DeleteEvt$Action, callContext, currIdentifierIn);

};
Controller.prototype.twoGraphCardClickEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._twoGraphCardClickEvent$Action, callContext);

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
define("WTF_MOB.ZonaFlow.WTF_Home.mvc$controller.HomeAndroidBackButton.GetClicksTimeStampsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(new Date().getTime() - window.lastTimeBackPress < $parameters.timePeriodToExit){
        $parameters.minimizeApp = true;
    }else{
        $parameters.minimizeApp = false;
        window.lastTimeBackPress=new Date().getTime();
}
};
});
define("WTF_MOB.ZonaFlow.WTF_Home.mvc$controller.InfoCardsSliderOnCardClickEvt.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.DeleteActionRunning = false;
    
if(event.target.className == "a-icon icon-close -xSmall ")
    $parameters.DeleteActionRunning = true;
};
});

