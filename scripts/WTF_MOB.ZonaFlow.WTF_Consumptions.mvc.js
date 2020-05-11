define("WTF_MOB.ZonaFlow.WTF_Consumptions.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MOB.controller", "BALANCE_MBP.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "MobileUIWidgets.SkeletonComponents.SkeletonCard.mvc$model", "MobileUIWidgets.SkeletonComponents.SkeletonTitle.mvc$model", "MobileUIWidgets.SkeletonComponents.SkeletonDesc.mvc$model", "MobileUIWidgets.SkeletonComponents.SkeletonGaugeChart.mvc$model", "BALANCE_MBLOCKS.ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance.mvc$model", "WTF_MOB.ZonaFlow.ConsumptionsManageRefills.mvc$model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MBP.controller$GetAddOnsAndRefills", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$CheckRefillInformation", "WTF_MBP.controller$setActivityLog_Balance", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$GetCacheValidationInterval", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$STR_Balance_RestrictedRec", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MBPController, MobileUIWidgetsController, WTF_MOBController, BALANCE_MBPController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, MobileUIWidgets_SkeletonComponents_SkeletonCard_mvcModel, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvcModel, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvcModel, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvcModel, BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvcModel, WTF_MOB_ZonaFlow_ConsumptionsManageRefills_mvcModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_Common_BottomBar_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalServiceAggrRec = (function (_super) {
__extends(GetLocalServiceAggrRec, _super);
function GetLocalServiceAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalServiceAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList;
GetLocalServiceAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalServiceAggrRec.init();
return GetLocalServiceAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AllConsumptionsListEmpty", "allConsumptionsListEmptyVar", "AllConsumptionsListEmpty", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
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
this.attr("ApplicationName", "applicationNameVar", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CacheValidationInterval", "cacheValidationIntervalVar", "CacheValidationInterval", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("MSISDN", "mSISDNVar", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PageCode", "pageCodeVar", "PageCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IntegrationSuccessful", "integrationSuccessfulVar", "IntegrationSuccessful", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("AssociationID", "associationIDVar", "AssociationID", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("IsLoadingOfferData", "isLoadingOfferDataVar", "IsLoadingOfferData", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsRefillEligible", "isRefillEligibleVar", "IsRefillEligible", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("RefillRestrictedMessage", "refillRestrictedMessageVar", "RefillRestrictedMessage", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.STR_Balance_RestrictedRec());
}, WTF_MOBModel.STR_Balance_RestrictedRec), 
this.attr("RefillCost", "refillCostVar", "RefillCost", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("RefillVolume", "refillVolumeVar", "RefillVolume", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CurrRefill", "currRefillVar", "CurrRefill", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("GestaoNDisabled", "gestaoNDisabledVar", "GestaoNDisabled", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("AditivosDisabled", "aditivosDisabledVar", "AditivosDisabled", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoadingAddonsRefills", "isLoadingAddonsRefillsVar", "IsLoadingAddonsRefills", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("GetLocalService", "getLocalServiceAggr", "getLocalServiceAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalServiceAggrRec());
}, GetLocalServiceAggrRec)
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
Model._hasValidationWidgetsValue = (((((((((((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || MobileUIWidgets_SkeletonComponents_SkeletonCard_mvcModel.hasValidationWidgets) || MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvcModel.hasValidationWidgets) || MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvcModel.hasValidationWidgets) || MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvcModel.hasValidationWidgets) || WTF_MOB_ZonaFlow_ConsumptionsManageRefills_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.ZonaFlow.WTF_Consumptions.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "BALANCE_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_Consumptions.mvc$model", "WTF_MOB.ZonaFlow.WTF_Consumptions.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonCard.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonTitle.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonDesc.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonGaugeChart.mvc$view", "BALANCE_MBLOCKS.ConsumptionsPageBlocks.ConsumptionsOrhcestrationBalance.mvc$view", "WTF_MOB.ZonaFlow.ConsumptionsManageRefills.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MBP.controller$GetAddOnsAndRefills", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$CheckRefillInformation", "WTF_MBP.controller$setActivityLog_Balance", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$GetCacheValidationInterval", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$STR_Balance_RestrictedRec", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, BALANCE_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_ZonaFlow_WTF_Consumptions_mvc_model, WTF_MOB_ZonaFlow_WTF_Consumptions_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvc_view, WTF_MOB_ZonaFlow_ConsumptionsManageRefills_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_Consumptions";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_Consumptions.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvc_view, WTF_MOB_ZonaFlow_ConsumptionsManageRefills_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_Common_BottomBar_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Consumptions_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_Consumptions_mvc_controller;
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
PageType: "Consulta",
PageSection: "Saldos",
ScreenName: "WTF_Consumptions",
PageTitle: "Consumos",
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
return [React.createElement(WTF_MOB_Common_HeaderLvl2_mvc_view, {
inputs: {
PageControllsBack: true,
Title: "Saldo e Consumos"
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
style: "ph-16 mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "relative-position mt-24",
visible: (model.variables.isLoadingVar || !(model.variables.isLoadingFinishedVar)),
_idProps: {
service: idService,
name: "Skeleton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, {
inputs: {
StyleClass: "-paddingBottom24 text-center mb-2"
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
name: "Saldo",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-25 mb-8"
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
uuid: "5",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "w-40 mb-40 -titleHeight"
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "w-75 mb-16 -titleHeight"
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
uuid: "7",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "-big"
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
uuid: "8",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, {
inputs: {
StyleClass: "-paddingEqual mb-24"
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
name: "SaldoPart2",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingLeft va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-40"
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
uuid: "12",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingRight va-middle text-right",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "text-right w-40 -titleHeight"
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
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))];
})
},
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, {
inputs: {
StyleClass: "-paddingBottom24 mb-24"
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
name: "Internet",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-25 mb-8"
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
uuid: "17",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "w-40 -titleHeight"
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
alias: "13"
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
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingLeft va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonGaugeChart_mvc_view, {
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
uuid: "21",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingRight va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-5 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
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
uuid: "26",
alias: "15"
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
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-9 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "28"
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
uuid: "29",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-5 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
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
uuid: "33",
alias: "17"
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
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-9 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "35"
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
uuid: "36",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))))];
})
},
_dependencies: []
})), $if(model.variables.integrationSuccessfulVar, false, this, function () {
return [React.createElement(BALANCE_MBLOCKS_ConsumptionsPageBlocks_ConsumptionsOrhcestrationBalance_mvc_view, {
inputs: {
ShowContent: true,
AvailableValueCustomStyleClass: "h3 c-yellow -regular mt-4",
GeneralBalanceCustomStyleClass: "b-strongPink",
AssociationID: model.variables.associationIDVar,
IsReadyToRun: model.variables.isReadyToRunVar,
TopCustomClass: "-communication",
PageCode: model.variables.pageCodeVar,
ChartMarkerTriangleColor: "#6f2a7f",
Application: model.variables.applicationNameVar,
GeneralBalanceTitleCustomStyleClass: "a-textRead -bold c-white -uppercase -fowardSlash",
CacheValidationInterval: model.variables.cacheValidationIntervalVar,
TopBalanceMessageCustomStyleClass: "a-textRead -italic mb-16",
ConsumptionsGraphCustomStyleClass: "-purpleGradient",
RefreshToken: model.variables.refreshTokenVar,
ChartBorderMarkerBackgroundColor: "#6f2a7f",
AvailableTitleCustomStyleClass: "a-textRead -bold c-yellow",
MSISDN: model.variables.mSISDNVar,
ListCustomClass: "-communication",
SpentValueCustomStyleClass: "h3 c-greyishWhite -regular mt-4",
TitleCustomStyleClass: "a-textRead -bold c-white -fowardSlash",
AvailableBalanceCustomStyleClass: "-blue c-white",
ChartBackgroundColor: "#fddc2e",
SpentTitleCustomStyleClass: "a-textRead -bold c-greyishWhite",
TopBalanceValueCustomStyleClass: "a-textBigBold -black mb-16",
TopTitleCustomStyleClass: "h3 -medium mb-4",
AvailableBalanceTitleCustomStyleClass: "a-textRead -bold c-white -uppercase -fowardSlash"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
chargePhoneEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.balanceChargePhoneEvent$Action(controller.callContext(eventHandlerContext));
});
;
},
loadingFinished$Action: function (balanceValueOutIn, balanceMessageOutIn, sucessIn, allBalancesEmptyIn, integrationSuccessfulOutIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.loadingFinished$Action(balanceValueOutIn, balanceMessageOutIn, allBalancesEmptyIn, integrationSuccessfulOutIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "37",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24 internet-anchor",
visible: (!(model.variables.gestaoNDisabledVar) && (!(model.variables.isLoadingOfferDataVar) || (((!(model.variables.isLoadingVar) && model.variables.integrationSuccessfulVar) && !(model.variables.allConsumptionsListEmptyVar)) && !(model.variables.isLoadingOfferDataVar)))),
_idProps: {
service: idService,
name: "ManageRefills"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_ZonaFlow_ConsumptionsManageRefills_mvc_view, {
inputs: {
CurrRefill: model.variables.currRefillVar,
IsEligible: model.variables.isRefillEligibleVar,
IsShow: true,
RefillCost: model.variables.refillCostVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
manageRefills$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.manageRefills$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "39",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mv-16",
visible: (!(model.variables.aditivosDisabledVar) && model.variables.isLoadingFinishedVar),
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
RightStyleClass: "text-right -vCenter",
HasRightSide: true,
HasLeftSide: false,
StyleClass: "b-warmPurple",
HasRipple: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToAditivos$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "AditivosCard",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-white -bold",
value: "DADOS E MINUTOS ADICIONAIS",
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-white -small",
value: "Consulta e ativa serviços adicionais para o teu tarifário",
_idProps: {
service: idService,
uuid: "44"
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
uuid: "45",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
})))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
Page: "Selfcare",
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
uuid: "46",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.aditivosDisabledVar), asPrimitiveValue(model.variables.refillCostVar), asPrimitiveValue(model.variables.isRefillEligibleVar), asPrimitiveValue(model.variables.currRefillVar), asPrimitiveValue(model.variables.allConsumptionsListEmptyVar), asPrimitiveValue(model.variables.isLoadingOfferDataVar), asPrimitiveValue(model.variables.gestaoNDisabledVar), asPrimitiveValue(model.variables.mSISDNVar), asPrimitiveValue(model.variables.refreshTokenVar), asPrimitiveValue(model.variables.cacheValidationIntervalVar), asPrimitiveValue(model.variables.applicationNameVar), asPrimitiveValue(model.variables.pageCodeVar), asPrimitiveValue(model.variables.isReadyToRunVar), asPrimitiveValue(model.variables.associationIDVar), asPrimitiveValue(model.variables.integrationSuccessfulVar), asPrimitiveValue(model.variables.isLoadingFinishedVar), asPrimitiveValue(model.variables.isLoadingVar)]
}), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
inputs: {
IsLoading: model.variables.isLoadingAddonsRefillsVar
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
uuid: "47",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_Consumptions.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "BALANCE_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MBP.controller$GetAddOnsAndRefills", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$CheckRefillInformation", "WTF_MBP.controller$setActivityLog_Balance", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$GetCacheValidationInterval", "BALANCE_MBP.controller$GetBalanceConfigs_MBP", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$STR_Balance_RestrictedRec", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, BALANCE_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
Controller.prototype.getLocalService$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

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
selectSql += "\"ENLocal_SERVICE\".\"Id\" o0, \"ENLocal_SERVICE\".\"ServiceId\" o1, \"ENLocal_SERVICE\".\"AssociationID\" o2, \"ENLocal_SERVICE\".\"Name\" o3, \"ENLocal_SERVICE\".\"ServiceAccount\" o4, \"ENLocal_SERVICE\".\"UiLabel\" o5, \"ENLocal_SERVICE\".\"Plan\" o6, \"ENLocal_SERVICE\".\"TMCodeID\" o7, \"ENLocal_SERVICE\".\"TMCodeDesc\" o8, \"ENLocal_USER_WTF\".\"Id\" o9, \"ENLocal_USER_WTF\".\"Msisdn\" o10, \"ENLocal_USER_WTF\".\"CodeMember\" o11, \"ENLocal_USER_WTF\".\"Tmcode_label\" o12, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o13";
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
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLocalServiceAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalService$AggrRefresh"];
// Client Actions
Controller.prototype._goToAditivos$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToAditivos");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAddOnsAndRefillsVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoadingAddonsRefills = True
model.variables.isLoadingAddonsRefillsVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.traceNameAttr, "Aditivos", 0, "", callContext).then(function () {
// Execute Action: GetAddOnsAndRefills
model.flush();
return WTF_MBPController.default.getAddOnsAndRefills$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, callContext).then(function (value) {
getAddOnsAndRefillsVar.value = value;
});
}).then(function () {
// IsLoadingAddonsRefills = False
model.variables.isLoadingAddonsRefillsVar = false;
}).then(function () {
if(((getAddOnsAndRefillsVar.value.successOut && (getAddOnsAndRefillsVar.value.addOnsRefillsListLengthOut > 0)))) {
// Destination: /WTF_MOB/WTF_Aditivos
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Aditivos", {
BalanceMessage: model.variables.balanceMessageVar,
BalanceValue: model.variables.balanceValueVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Oops, neste momento não é possível aceder a este serviço. Tenta mais tarde.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("WTF_Consumptions.GoToAditivos", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getRefillRestrictedTypeVar = new OS.DataTypes.VariableHolder();
var getRefillRestrictedSolutionVar = new OS.DataTypes.VariableHolder();
var checkRefillInformationVar = new OS.DataTypes.VariableHolder();
var getWTF_GestaoN_disabledVar = new OS.DataTypes.VariableHolder();
var getCacheValidationIntervalVar = new OS.DataTypes.VariableHolder();
var getBalanceConfigs_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getWTF_Aditivos_Btn_DisabledVar = new OS.DataTypes.VariableHolder();
var getApplicationName_MBPVar = new OS.DataTypes.VariableHolder();
var getBalancesPageCodeVar = new OS.DataTypes.VariableHolder();
var getAccessTokenInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Consumos"
model.variables.analyticsAuxVarVar.traceNameAttr = "Consumos";
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// IsLoadingFinished = False
model.variables.isLoadingFinishedVar = false;
// IsLoadingOfferData = True
model.variables.isLoadingOfferDataVar = true;
// ClearVariables
// IntegrationSuccessful = True
model.variables.integrationSuccessfulVar = true;
// IsReadyToRun = False
model.variables.isReadyToRunVar = false;
// AllConsumptionsListEmpty = False
model.variables.allConsumptionsListEmptyVar = false;
// IsRefillEligible = False
model.variables.isRefillEligibleVar = false;
// RefillRestrictedMessage.Type = ""
model.variables.refillRestrictedMessageVar.typeAttr = "";
// RefillRestrictedMessage.Solution = ""
model.variables.refillRestrictedMessageVar.solutionAttr = "";
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
return getAccessTokenInfoAggr();
}).then(function () {
// EmptyAccessToken?
return OS.Flow.executeSequence(function () {
if((!(getAccessTokenInfoVar.value.listOut.isEmpty))) {
// RefreshToken = GetAccessTokenInfo.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = getAccessTokenInfoVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
return OS.Flow.executeSequence(function () {
if((model.variables.getLocalServiceAggr.listOut.isEmpty)) {
// SetIsLoading
// IsLoadingOfferData = False
model.variables.isLoadingOfferDataVar = false;
} else {
// SetAssociationID
// AssociationID = GetLocalService.List.Current.Local_SERVICE.AssociationID
model.variables.associationIDVar = model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr;
// MSISDN = GetLocalService.List.Current.Local_USER_WTF.Msisdn
model.variables.mSISDNVar = (model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr).toString();
// Execute Action: CheckRefillInformation
model.flush();
return WTF_MBPController.default.checkRefillInformation$Action(getAccessTokenInfoVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, callContext).then(function (value) {
checkRefillInformationVar.value = value;
}).then(function () {
// SeRefillInformation
// IsRefillEligible = CheckRefillInformation.Eligible
model.variables.isRefillEligibleVar = checkRefillInformationVar.value.eligibleOut;
// RefillCost = 0
model.variables.refillCostVar = OS.BuiltinFunctions.integerToDecimal(0);
// RefillVolume = 0
model.variables.refillVolumeVar = 0;
// CurrRefill = CheckRefillInformation.CurrRefill
model.variables.currRefillVar = checkRefillInformationVar.value.currRefillOut;
}).then(function () {
// IsRefillEligible?
return OS.Flow.executeSequence(function () {
if((!(model.variables.isRefillEligibleVar))) {
// Execute Action: GetRefillRestrictedType
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("REFILL_RESTRICTED_MESSAGE", callContext).then(function (value) {
getRefillRestrictedTypeVar.value = value;
}).then(function () {
// RefillRestrictedMessage.Type = GetRefillRestrictedType.Value
model.variables.refillRestrictedMessageVar.typeAttr = getRefillRestrictedTypeVar.value.valueOut;
// Execute Action: GetRefillRestrictedSolution
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("REFILL_RESTRICTED_SOLUTION", callContext).then(function (value) {
getRefillRestrictedSolutionVar.value = value;
});
}).then(function () {
// RefillRestrictedMessage.Solution = GetRefillRestrictedSolution.Value
model.variables.refillRestrictedMessageVar.solutionAttr = getRefillRestrictedSolutionVar.value.valueOut;
});
}

});
}).then(function () {
// SetIsLoading
// IsLoadingOfferData = False
model.variables.isLoadingOfferDataVar = false;
// Execute Action: setActivityLog_Balance
model.flush();
return WTF_MBPController.default.setActivityLog_Balance$Action(OS.BuiltinFunctions.longIntegerToText(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.idAttr), callContext).then(function () {
// Execute Action: GetApplicationName_MBP
model.flush();
return WTF_MBPController.default.getApplicationName_MBP$Action(callContext).then(function (value) {
getApplicationName_MBPVar.value = value;
});
}).then(function () {
// Execute Action: GetWTF_GestaoN_disabled
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_GestaoN_disabled", callContext).then(function (value) {
getWTF_GestaoN_disabledVar.value = value;
});
}).then(function () {
// Execute Action: GetWTF_Aditivos_Btn_Disabled
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_Aditivos_Btn_Disabled", callContext).then(function (value) {
getWTF_Aditivos_Btn_DisabledVar.value = value;
});
}).then(function () {
// GestaoNDisabled = ToLower = "true"
model.variables.gestaoNDisabledVar = (OS.BuiltinFunctions.toLower(getWTF_GestaoN_disabledVar.value.valueOut) === "true");
// AditivosDisabled = ToLower = "true"
model.variables.aditivosDisabledVar = (OS.BuiltinFunctions.toLower(getWTF_Aditivos_Btn_DisabledVar.value.valueOut) === "true");
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
// Execute Action: GetBalanceConfigs_MBP
model.flush();
return BALANCE_MBPController.default.getBalanceConfigs_MBP$Action(getApplicationName_MBPVar.value.valueOut, model.variables.cacheValidationIntervalVar, model.variables.refreshTokenVar, callContext).then(function (value) {
getBalanceConfigs_MBPVar.value = value;
});
});
}).then(function () {
// Success obtaining Configs?
return OS.Flow.executeSequence(function () {
if((getBalanceConfigs_MBPVar.value.successOut)) {
// Execute Action: GetBalancesPageCode
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("BALANCE_PAGE_CODE", callContext).then(function (value) {
getBalancesPageCodeVar.value = value;
}).then(function () {
// SetPageCode
// PageCode = GetBalancesPageCode.Value
model.variables.pageCodeVar = getBalancesPageCodeVar.value.valueOut;
// IsReadyToRun = True
model.variables.isReadyToRunVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace7
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

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
}

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
}).catch(function (ex) {
OS.Logger.trace("WTF_Consumptions.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext).then(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext);
}).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._loadingFinished$Action = function (balanceValueOutIn, balanceMessageOutIn, allBalancesEmptyIn, integrationSuccessfulOutIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LoadingFinished");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_Consumptions.LoadingFinished$vars"))());
vars.value.balanceValueOutInLocal = balanceValueOutIn;
vars.value.balanceMessageOutInLocal = balanceMessageOutIn;
vars.value.allBalancesEmptyInLocal = allBalancesEmptyIn;
vars.value.integrationSuccessfulOutInLocal = integrationSuccessfulOutIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// SetLocalVariables
// IsLoadingFinished = True
model.variables.isLoadingFinishedVar = true;
// AllConsumptionsListEmpty = AllBalancesEmpty
model.variables.allConsumptionsListEmptyVar = vars.value.allBalancesEmptyInLocal;
// BalanceValue = BalanceValueOut
model.variables.balanceValueVar = vars.value.balanceValueOutInLocal;
// BalanceMessage = BalanceMessageOut
model.variables.balanceMessageVar = vars.value.balanceMessageOutInLocal;
// IntegrationSuccessful = IntegrationSuccessfulOut
model.variables.integrationSuccessfulVar = vars.value.integrationSuccessfulOutInLocal;
}).catch(function (ex) {
OS.Logger.trace("WTF_Consumptions.LoadingFinished", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_Consumptions.LoadingFinished$vars", [{
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
name: "AllBalancesEmpty",
attrName: "allBalancesEmptyInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IntegrationSuccessfulOut",
attrName: "integrationSuccessfulOutInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._headerLvl2BackEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("HeaderLvl2BackEvent");
callContext = controller.callContext(callContext);
// Destination: /WTF_MOB/WTF_Home
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
};
Controller.prototype._manageRefills$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ManageRefills");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Consumos", "Gerir_extras_internet", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_ConsumptionsManageRefills
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_ConsumptionsManageRefills", {
EnablePreviousScreenLink: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
};
Controller.prototype._balanceChargePhoneEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("BalanceChargePhoneEvent");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Consumos", "Carregar saldo", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WTF_Charge
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Charge", {
BalanceValue: model.variables.balanceValueVar,
BalanceMessage: model.variables.balanceMessageVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("WTF_Consumptions.BalanceChargePhoneEvent", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.goToAditivos$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToAditivos$Action, callContext);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.loadingFinished$Action = function (balanceValueOutIn, balanceMessageOutIn, allBalancesEmptyIn, integrationSuccessfulOutIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._loadingFinished$Action, callContext, balanceValueOutIn, balanceMessageOutIn, allBalancesEmptyIn, integrationSuccessfulOutIn);

};
Controller.prototype.headerLvl2BackEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._headerLvl2BackEvent$Action, callContext);

};
Controller.prototype.manageRefills$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._manageRefills$Action, callContext);

};
Controller.prototype.balanceChargePhoneEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._balanceChargePhoneEvent$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

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

