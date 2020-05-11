define("WTF_MOB.ZonaFlow.ChangeTarifario_Choose.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_BP.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "MobileUIWidgets.WidgetsInteraction.Carousel_Ext.mvc$model", "WTF_MOB.ZonaFlow.Tarifario_Detail.mvc$model", "WTF_BP.model$App_TmcodeChangeRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$App_TmcodeChangeList", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_TMCODE_TO_CHANGERecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_TMCODE_TO_CHANGERec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$SetChangeRatePlanAndPreferentialInfoByContractDN", "WTF_MBP.controller$setActivityLog_CHANGE_MOBILE_TARIFF", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_BPModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPModel, WTF_MBPController, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, WTF_MOB_Common_Waiting_mvcModel, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvcModel, WTF_MOB_ZonaFlow_Tarifario_Detail_mvcModel) {
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
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("AfterReady", "afterReadyVar", "AfterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("showPopupChangeTmcode", "showPopupChangeTmcodeVar", "showPopupChangeTmcode", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("SelectedTmcode", "selectedTmcodeVar", "SelectedTmcode", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_TmcodeChangeRec());
}, WTF_BPModel.App_TmcodeChangeRec), 
this.attr("TmcodeList", "tmcodeListVar", "TmcodeList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_TmcodeChangeList());
}, WTF_MOBModel.App_TmcodeChangeList), 
this.attr("TmcodeWeeklyList", "tmcodeWeeklyListVar", "TmcodeWeeklyList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_TmcodeChangeList());
}, WTF_MOBModel.App_TmcodeChangeList), 
this.attr("TmcodeMonthlyList", "tmcodeMonthlyListVar", "TmcodeMonthlyList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_TmcodeChangeList());
}, WTF_MOBModel.App_TmcodeChangeList), 
this.attr("Mode", "modeVar", "Mode", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Step", "stepVar", "Step", true, OS.Types.Integer, function () {
return 1;
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
Model._hasValidationWidgetsValue = ((((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvcModel.hasValidationWidgets) || WTF_MOB_ZonaFlow_Tarifario_Detail_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.ZonaFlow.ChangeTarifario_Choose.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.ChangeTarifario_Choose.mvc$model", "WTF_MOB.ZonaFlow.ChangeTarifario_Choose.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "MobileUIWidgets.WidgetsInteraction.Carousel_Ext.mvc$view", "WTF_MOB.ZonaFlow.Tarifario_Detail.mvc$view", "WTF_BP.model$App_TmcodeChangeRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$App_TmcodeChangeList", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_TMCODE_TO_CHANGERecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_TMCODE_TO_CHANGERec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$SetChangeRatePlanAndPreferentialInfoByContractDN", "WTF_MBP.controller$setActivityLog_CHANGE_MOBILE_TARIFF", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, MobileUIWidgetsController, WTF_MBPModel, WTF_MBPController, React, OSView, WTF_MOB_ZonaFlow_ChangeTarifario_Choose_mvc_model, WTF_MOB_ZonaFlow_ChangeTarifario_Choose_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_ZonaFlow_Tarifario_Detail_mvc_view) {
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
        View.displayName = "ZonaFlow.ChangeTarifario_Choose";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.ChangeTarifario_Choose.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_ZonaFlow_Tarifario_Detail_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_ChangeTarifario_Choose_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_ChangeTarifario_Choose_mvc_controller;
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
PageType: "Operação",
ScreenName: "ChangeTarifario_Choose",
PageSection: "Mudar Tarifario",
PageTitle: "Escolha",
ContentClass: "form b-warmPurple",
HasBackgroundChristmas: true
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
Title: "Mudar tarifário",
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
style: "pa-16",
visible: (model.variables.afterReadyVar && (model.variables.stepVar === 1)),
_idProps: {
service: idService,
name: "Step1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "CGUKkKjULkeIXM_D+zgWBQ"
},
gridProperties: {
marginTop: "20px"
},
style: "c-white",
value: "Escolhe o modo como queres pagar o teu tarifário",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.changeModeOnClick$Action(1, controller.callContext(eventHandlerContext));
});
;
}
},
style: "mv-16 b-white pa-16 -bold",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("DkSQWD2ookOYGADrPsYzUw.Style"), function () {
return ("radio" + (((model.variables.modeVar === 1)) ? (" active") : ("")));
}, function () {
return model.variables.modeVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "main_circle",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: "semanalmente",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.changeModeOnClick$Action(2, controller.callContext(eventHandlerContext));
});
;
}
},
style: "mv-16 b-white pa-16 -bold",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("V+NfYhSsKkuFGA+nNIhLlg.Style"), function () {
return ("radio" + (((model.variables.modeVar === 2)) ? (" active") : ("")));
}, function () {
return model.variables.modeVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "main_circle",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: "mensalmente",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom b-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20",
visible: true,
_idProps: {
service: idService,
name: "ButtonContainer2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: ((model.variables.modeVar) !== (0)),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.selectMode$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "btn_nextStep2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Escolher modalidade",
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (model.variables.afterReadyVar && (model.variables.stepVar === 2)),
_idProps: {
service: idService,
name: "Step2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, {
inputs: {
Navigation: false,
Dots: false,
Loop: false,
Margin: -40,
Center: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onItemChange$Action: function (indexIn) {
var eventHandlerContext = callContext.clone();
controller.carousel_OnItemChange$Action(indexIn, controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "23",
alias: "4"
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
source: model.variables.tmcodeListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
style: model.getCachedValue(idService.getId("ListItem1.Style"), function () {
return ("list-item " + (((model.variables.tmcodeListVar.getCurrentRowNumber(callContext.iterationContext) === 0)) ? ("active") : ("")));
}, function () {
return model.variables.tmcodeListVar.getCurrentRowNumber(callContext.iterationContext);
}),
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_ZonaFlow_Tarifario_Detail_mvc_view, {
inputs: {
detail: model.variables.tmcodeListVar.getCurrent(callContext.iterationContext),
Mode: model.variables.modeVar
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.modeVar), asPrimitiveValue(model.variables.tmcodeListVar.getCurrent(callContext.iterationContext))]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.modeVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.modeVar), asPrimitiveValue(model.variables.tmcodeListVar)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom b-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
name: "ButtonContainer3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.headerLvl2BackEvent$Action(controller.callContext(eventHandlerContext));

;
},
style: "btn -secondary -negative w-100 -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Voltar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width8",
marginLeft: "0"
},
visible: true,
_idProps: {
service: idService,
name: "ButtonContainer4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.toggleSelectTmcode$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "btn_nextStep4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Escolher tarifário",
_idProps: {
service: idService,
name: "ButtonTextPrimary4"
},
_widgetRecordProvider: widgetsRecordProvider
})))))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.tmcodeListVar), asPrimitiveValue(model.variables.modeVar), asPrimitiveValue(model.variables.stepVar), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.isLoadingVar)]
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "MiGEDroS6kGsCeUTugFVVA"
},
showPopup: (model.variables.showPopupChangeTmcodeVar && !(model.variables.isLoadingVar)),
style: "popup-dialog",
_idProps: {
service: idService,
name: "ChangePopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "8YfhvmRIDk6l_gEJy3dMnA"
},
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-strongPink -bold",
value: "Mudar tarifário",
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: (("Tens a certeza que queres mudar para o tarifário " + model.variables.selectedTmcodeVar.nameAttr) + "?"),
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-8",
value: model.getCachedValue(idService.getId("q3_BG6_KQEe+TeymtSwhzw.Value"), function () {
return (((((("O tarifário " + model.variables.selectedTmcodeVar.nameAttr) + " é de renovação ") + (((model.variables.modeVar === 1)) ? ("semanal") : ("mensal"))) + ", garante que tens ") + OS.BuiltinFunctions.formatCurrency(model.variables.selectedTmcodeVar.amountAttr, "€", 2, ".", ",")) + " disponíveis no teu saldo.");
}, function () {
return model.variables.selectedTmcodeVar.nameAttr;
}, function () {
return model.variables.modeVar;
}, function () {
return model.variables.selectedTmcodeVar.amountAttr;
}),
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-8",
value: model.getCachedValue(idService.getId("2e2nTBcTnUiUdAsCj2Tw7w.Value"), function () {
return (("Este tarifário renovará " + (((model.variables.modeVar === 1)) ? ("semanalmente") : ("mensalmente"))) + ".");
}, function () {
return model.variables.modeVar;
}),
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "45"
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
"data-style-key": "izLs4qSOOk+OkNRq8ioeNA"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.toggleSelectTmcode$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary",
visible: true,
_idProps: {
service: idService,
uuid: "47"
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
controller.changeTarifario_Confirm$Action(controller.callContext(eventHandlerContext));
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
})))))));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.ChangeTarifario_Choose.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_BP.model$App_TmcodeChangeRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$App_TmcodeChangeList", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_TMCODE_TO_CHANGERecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_TMCODE_TO_CHANGERec", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$SetChangeRatePlanAndPreferentialInfoByContractDN", "WTF_MBP.controller$setActivityLog_CHANGE_MOBILE_TARIFF", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, MobileUIWidgetsController, WTF_MBPModel, WTF_MBPController, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
Controller.prototype._selectMode$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SelectMode");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Mudar Tarifario", ("Seleciona: " + (((model.variables.modeVar === 1)) ? ("semanalmente") : ("mensalmente"))), 0, "", callContext).then(function () {
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.tmcodeListVar, callContext);
// Step = 2
model.variables.stepVar = 2;
// TmcodeList = If
model.variables.tmcodeListVar = (((model.variables.modeVar === 1)) ? (model.variables.tmcodeWeeklyListVar) : (model.variables.tmcodeMonthlyListVar));
// Execute Action: Carousel_OnItemChange
controller._carousel_OnItemChange$Action(0, callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ChangeTarifario_Choose.SelectMode", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._carousel_OnItemChange$Action = function (in1In, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Carousel_OnItemChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.ChangeTarifario_Choose.Carousel_OnItemChange$vars"))());
vars.value.in1InLocal = in1In;
// SelectedTmcode = TmcodeList[In1]
model.variables.selectedTmcodeVar = model.variables.tmcodeListVar.getItem(vars.value.in1InLocal);
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.ChangeTarifario_Choose.Carousel_OnItemChange$vars", [{
name: "In1",
attrName: "in1InLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var listFilterMonthlyVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var listFilterWeeklyVar = new OS.DataTypes.VariableHolder();
var getLocalTMCODETOCHANGEVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_TMCODE_TO_CHANGERecordList))());
var getLocalACCESSTOKENINFOVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Escolha"
model.variables.analyticsAuxVarVar.traceNameAttr = "Escolha";
// AnalyticsAuxVar.Category = "Mudar Tarifario"
model.variables.analyticsAuxVarVar.categoryAttr = "Mudar Tarifario";
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
// RefreshToken = GetLocalACCESSTOKENINFO.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = getLocalACCESSTOKENINFOVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
// Aggregate: GetLocalTMCODETOCHANGE
var getLocalTMCODETOCHANGEAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_TMCODE_TO_CHANGERecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11";
} else {
selectSql += "\"ENLocal_TMCODE_TO_CHANGE\".\"Id\" o0, \"ENLocal_TMCODE_TO_CHANGE\".\"Amount\" o1, \"ENLocal_TMCODE_TO_CHANGE\".\"Tmcode\" o2, \"ENLocal_TMCODE_TO_CHANGE\".\"RatePlanCode\" o3, \"ENLocal_TMCODE_TO_CHANGE\".\"Name\" o4, \"ENLocal_TMCODE_TO_CHANGE\".\"Internet\" o5, \"ENLocal_TMCODE_TO_CHANGE\".\"Minutes\" o6, \"ENLocal_TMCODE_TO_CHANGE\".\"PriceMonthly\" o7, \"ENLocal_TMCODE_TO_CHANGE\".\"PriceWeekly\" o8, \"ENLocal_TMCODE_TO_CHANGE\".\"ConditionsUrl\" o9, \"ENLocal_TMCODE_TO_CHANGE\".\"isBestOffer\" o10, \"ENLocal_TMCODE_TO_CHANGE\".\"Is_MonthlyRenewal\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_TMCODE_TO_CHANGE\" \"ENLocal_TMCODE_TO_CHANGE\"";
orderBySql += " ORDER BY \"ENLocal_TMCODE_TO_CHANGE\".\"Id\" ASC ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_TMCODE_TO_CHANGERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_TMCODE_TO_CHANGEAttr",
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
return getLocalTMCODETOCHANGEVar.value;
});
};
return getLocalTMCODETOCHANGEAggr();
}).then(function () {
// Execute Action: ListFilterMonthly
listFilterMonthlyVar.value = OS.SystemActions.listFilter(getLocalTMCODETOCHANGEVar.value.listOut, function (p) {
return p.local_TMCODE_TO_CHANGEAttr.is_MonthlyRenewalAttr;
}, callContext);

// Execute Action: ListMonthlyAppendAll
OS.SystemActions.listAppendAll(model.variables.tmcodeMonthlyListVar, OS.DataTypes.JSConversions.typeConvertRecordList(listFilterMonthlyVar.value.filteredListOut, new WTF_MOBModel.App_TmcodeChangeList(), function (source, target) {
target.amountAttr = source.local_TMCODE_TO_CHANGEAttr.amountAttr;
target.tmcodeAttr = source.local_TMCODE_TO_CHANGEAttr.tmcodeAttr;
target.ratePlanCodeAttr = source.local_TMCODE_TO_CHANGEAttr.ratePlanCodeAttr;
target.nameAttr = source.local_TMCODE_TO_CHANGEAttr.nameAttr;
target.internetAttr = source.local_TMCODE_TO_CHANGEAttr.internetAttr;
target.minutesAttr = source.local_TMCODE_TO_CHANGEAttr.minutesAttr;
target.priceMonthlyAttr = source.local_TMCODE_TO_CHANGEAttr.priceMonthlyAttr;
target.priceWeeklyAttr = source.local_TMCODE_TO_CHANGEAttr.priceWeeklyAttr;
target.conditionsUrlAttr = source.local_TMCODE_TO_CHANGEAttr.conditionsUrlAttr;
target.isBestOfferAttr = source.local_TMCODE_TO_CHANGEAttr.isBestOfferAttr;
target.is_MonthlyRenewalAttr = source.local_TMCODE_TO_CHANGEAttr.is_MonthlyRenewalAttr;
return target;
}), callContext);
// Execute Action: ListFilterWeekly
listFilterWeeklyVar.value = OS.SystemActions.listFilter(getLocalTMCODETOCHANGEVar.value.listOut, function (p) {
return !(p.local_TMCODE_TO_CHANGEAttr.is_MonthlyRenewalAttr);
}, callContext);

// Execute Action: ListWeeklyAppendAll
OS.SystemActions.listAppendAll(model.variables.tmcodeWeeklyListVar, OS.DataTypes.JSConversions.typeConvertRecordList(listFilterWeeklyVar.value.filteredListOut, new WTF_MOBModel.App_TmcodeChangeList(), function (source, target) {
target.amountAttr = source.local_TMCODE_TO_CHANGEAttr.amountAttr;
target.tmcodeAttr = source.local_TMCODE_TO_CHANGEAttr.tmcodeAttr;
target.ratePlanCodeAttr = source.local_TMCODE_TO_CHANGEAttr.ratePlanCodeAttr;
target.nameAttr = source.local_TMCODE_TO_CHANGEAttr.nameAttr;
target.internetAttr = source.local_TMCODE_TO_CHANGEAttr.internetAttr;
target.minutesAttr = source.local_TMCODE_TO_CHANGEAttr.minutesAttr;
target.priceMonthlyAttr = source.local_TMCODE_TO_CHANGEAttr.priceMonthlyAttr;
target.priceWeeklyAttr = source.local_TMCODE_TO_CHANGEAttr.priceWeeklyAttr;
target.conditionsUrlAttr = source.local_TMCODE_TO_CHANGEAttr.conditionsUrlAttr;
target.isBestOfferAttr = source.local_TMCODE_TO_CHANGEAttr.isBestOfferAttr;
target.is_MonthlyRenewalAttr = source.local_TMCODE_TO_CHANGEAttr.is_MonthlyRenewalAttr;
return target;
}), callContext);
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.tmcodeWeeklyListVar.isEmpty || model.variables.tmcodeMonthlyListVar.isEmpty))) {
// Mode = If
model.variables.modeVar = ((model.variables.tmcodeMonthlyListVar.isEmpty) ? (1) : (2));
// Execute Action: SelectMode
return controller._selectMode$Action(callContext);
}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// AfterReady = True
model.variables.afterReadyVar = true;
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ChangeTarifario_Choose.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._changeModeOnClick$Action = function (newModeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ChangeModeOnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.ChangeTarifario_Choose.ChangeModeOnClick$vars"))());
vars.value.newModeInLocal = newModeIn;
return OS.Flow.executeAsyncFlow(function () {
// Mode = NewMode
model.variables.modeVar = vars.value.newModeInLocal;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, ("clica " + (((model.variables.modeVar === 1)) ? ("semanalmente") : ("mensalmente"))), 0, "", callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.ChangeTarifario_Choose.ChangeModeOnClick$vars", [{
name: "NewMode",
attrName: "newModeInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._toggleSelectTmcode$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ToggleSelectTmcode");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Mudar Tarifário", ((!(model.variables.showPopupChangeTmcodeVar)) ? ("Escolher Tarifario") : ("Voltar")), 0, "", callContext).then(function () {
// showPopupChangeTmcode = notshowPopupChangeTmcode
model.variables.showPopupChangeTmcodeVar = !(model.variables.showPopupChangeTmcodeVar);
});
});
};
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// Execute Action: ClearTmcodeList
OS.SystemActions.listClear(model.variables.tmcodeListVar, callContext);
// Execute Action: ClearTmcodeWeeklyList
OS.SystemActions.listClear(model.variables.tmcodeWeeklyListVar, callContext);
// Execute Action: ClearTmcodeMonthlyList
OS.SystemActions.listClear(model.variables.tmcodeMonthlyListVar, callContext);
};
Controller.prototype._changeTarifario_Confirm$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ChangeTarifario_Confirm");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var setChangeRatePlanAndPreferentialInfoByContractDNVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", model.variables.analyticsAuxVarVar.categoryAttr, "Confirmar", 0, "", callContext).then(function () {
// Execute Action: SetChangeRatePlanAndPreferentialInfoByContractDN
model.flush();
return WTF_MBPController.default.setChangeRatePlanAndPreferentialInfoByContractDN$Action(model.variables.selectedTmcodeVar.ratePlanCodeAttr, OS.BuiltinFunctions.decimalToText(model.variables.selectedTmcodeVar.amountAttr), callContext).then(function (value) {
setChangeRatePlanAndPreferentialInfoByContractDNVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((setChangeRatePlanAndPreferentialInfoByContractDNVar.value.successOut)) {
// Execute Action: setActivityLog_CHANGE_MOBILE_TARIFF
model.flush();
return WTF_MBPController.default.setActivityLog_CHANGE_MOBILE_TARIFF$Action("", model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.tmcode_labelAttr, model.variables.selectedTmcodeVar.nameAttr, callContext).then(function () {
// Destination: /WTF_MOB/ChangeTarifario_Sucess
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ChangeTarifario_Sucess", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
if((setChangeRatePlanAndPreferentialInfoByContractDNVar.value.withoutAmountOut)) {
// Destination: /WTF_MOB/ChangeTarifario_Error
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ChangeTarifario_Error", {
BalanceMessage: model.variables.balanceMessageIn,
BalanceValue: model.variables.balanceValueIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta mais tarde.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

}

});
});
}).catch(function (ex) {
OS.Logger.trace("ChangeTarifario_Choose.ChangeTarifario_Confirm", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._headerLvl2BackEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("HeaderLvl2BackEvent");
callContext = controller.callContext(callContext);
if(((((model.variables.stepVar === 1) || model.variables.tmcodeWeeklyListVar.isEmpty) || model.variables.tmcodeMonthlyListVar.isEmpty))) {
// Destination: /WTF_MOB/WTF_Home
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
} else {
// Step = 1
model.variables.stepVar = 1;
// Mode = 0
model.variables.modeVar = 0;
}

};

Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.selectMode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectMode$Action, callContext);

};
Controller.prototype.carousel_OnItemChange$Action = function (in1In, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._carousel_OnItemChange$Action, callContext, in1In);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.changeModeOnClick$Action = function (newModeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._changeModeOnClick$Action, callContext, newModeIn);

};
Controller.prototype.toggleSelectTmcode$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleSelectTmcode$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.changeTarifario_Confirm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._changeTarifario_Confirm$Action, callContext);

};
Controller.prototype.headerLvl2BackEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._headerLvl2BackEvent$Action, callContext);

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

