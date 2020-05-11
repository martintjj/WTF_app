define("WTF_MOB.ZonaFlow.WTF_InfoCards.mvc$model", ["OutSystems", "WTF_MOB.model", "MobileUIWidgets.controller", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.ZonaFlow.ShowImage.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$model", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_INFOCARDSRecordList", "WTF_MBP.model$Local_INFOCARDSRec", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, MobileUIWidgetsController, WTF_MOBController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, WTF_MOB_Common_Waiting_mvcModel, WTF_MOB_ZonaFlow_ShowImage_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel) {
var OS = OutSystems.Internal;
var GetLocalInfoCardsByIdentifierAggrRec = (function (_super) {
__extends(GetLocalInfoCardsByIdentifierAggrRec, _super);
function GetLocalInfoCardsByIdentifierAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalInfoCardsByIdentifierAggrRec.RecordListType = WTF_MOBModel.Local_INFOCARDSRecordList;
GetLocalInfoCardsByIdentifierAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalInfoCardsByIdentifierAggrRec.init();
return GetLocalInfoCardsByIdentifierAggrRec;
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
this.attr("afterReady", "afterReadyVar", "afterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("Identifier", "identifierIn", "Identifier", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_identifierInDataFetchStatus", "_identifierInDataFetchStatus", "_identifierInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleHeaderPage", "titleHeaderPageIn", "TitleHeaderPage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleHeaderPageInDataFetchStatus", "_titleHeaderPageInDataFetchStatus", "_titleHeaderPageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalInfoCardsByIdentifier", "getLocalInfoCardsByIdentifierAggr", "getLocalInfoCardsByIdentifierAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalInfoCardsByIdentifierAggrRec());
}, GetLocalInfoCardsByIdentifierAggrRec)
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
Model._hasValidationWidgetsValue = (((((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || WTF_MOB_ZonaFlow_ShowImage_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets) || NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Identifier" in inputs) {
this.variables.identifierIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Identifier, OS.Types.LongInteger);
}

if("TitleHeaderPage" in inputs) {
this.variables.titleHeaderPageIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.TitleHeaderPage, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.WTF_InfoCards.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_InfoCards.mvc$model", "WTF_MOB.ZonaFlow.WTF_InfoCards.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.ZonaFlow.ShowImage.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "NOSCordovaPlugin.PluginFlow.ShowWebViewListener.mvc$view", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_INFOCARDSRecordList", "WTF_MBP.model$Local_INFOCARDSRec", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPModel, React, OSView, WTF_MOB_ZonaFlow_WTF_InfoCards_mvc_model, WTF_MOB_ZonaFlow_WTF_InfoCards_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_ShowImage_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_InfoCards";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_InfoCards.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_ShowImage_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_InfoCards_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_InfoCards_mvc_controller;
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
ContentClass: "b-warmPurple",
PageSection: "Zona",
PageTitle: "Card de informação detalhe",
PageType: "Consulta",
ScreenName: "WTF_InfoCards"
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
Title: model.variables.titleHeaderPageIn
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
animate: false,
style: model.getCachedValue(idService.getId("Pq6JWYpaPkKLTgycyAqqeA.Style"), function () {
return ((model.variables.afterReadyVar) ? ("afterReady") : ("no-afterReady"));
}, function () {
return model.variables.afterReadyVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16 pt-48",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mb-32 text-center",
visible: ((model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.content_TypeAttr) !== ("")),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr)
}, React.createElement(WTF_MOB_ZonaFlow_ShowImage_mvc_view, {
inputs: {
MimeType: model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.content_TypeAttr,
_mimeTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr),
BinaryData: model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.content_BinaryAttr,
_binaryDataInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr),
Classes: ""
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center pv-8 ",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 c-white -bold",
value: model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.titleDetailAttr,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "a-flexCardDesc c-white mt-8",
value: model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.subtitleDetailAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-24 pa-16 b-white",
visible: true,
_idProps: {
service: idService,
name: "Body"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "pa-16",
visible: model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.hasActionAttr,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr)
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "12",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.buttonActionOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative w-100",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.btnActionLabelAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.btnActionLabelAttr)]
})))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.btnActionLabelAttr), asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.hasActionAttr), asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.subtitleDetailAttr), asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.titleDetailAttr), asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.content_BinaryAttr), asPrimitiveValue(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.content_TypeAttr), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.titleHeaderPageIn)]
}), React.createElement(NOSCordovaPlugin_PluginFlow_ShowWebViewListener_mvc_view, {
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
onSuccess$Action: function () {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnSuccess$Action(controller.callContext(eventHandlerContext));

;
},
onError$Action: function (errorIn) {
var eventHandlerContext = callContext.clone();
controller.showWebViewListenerOnError$Action(controller.callContext(eventHandlerContext));

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
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_InfoCards.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.ZonaFlow.WTF_InfoCards.mvc$controller.GetLocalInfoCardsByIdentifierOnAfterFetch.BodyMessageJS", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_INFOCARDSRecordList", "WTF_MBP.model$Local_INFOCARDSRec", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController, WTF_MOB_ZonaFlow_WTF_InfoCards_mvc_controller_GetLocalInfoCardsByIdentifierOnAfterFetch_BodyMessageJS) {
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
Controller.prototype.getLocalInfoCardsByIdentifier$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_INFOCARDSRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qploIdentifier = model.variables.identifierIn;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_INFOCARDS\".\"Id\" o0, \"ENLocal_INFOCARDS\".\"Identifier\" o1, \"ENLocal_INFOCARDS\".\"HasRead\" o2, \"ENLocal_INFOCARDS\".\"TitleCard\" o3, \"ENLocal_INFOCARDS\".\"DescCard\" o4, \"ENLocal_INFOCARDS\".\"TitleHeaderPage\" o5, \"ENLocal_INFOCARDS\".\"Content_Type\" o6, \"ENLocal_INFOCARDS\".\"Content_Binary\" o7, \"ENLocal_INFOCARDS\".\"HasDetail\" o8, \"ENLocal_INFOCARDS\".\"TitleDetail\" o9, \"ENLocal_INFOCARDS\".\"SubtitleDetail\" o10, \"ENLocal_INFOCARDS\".\"BodyDetail\" o11, \"ENLocal_INFOCARDS\".\"HasAction\" o12, \"ENLocal_INFOCARDS\".\"BtnActionExternalLink\" o13, \"ENLocal_INFOCARDS\".\"BtnActionLabel\" o14, \"ENLocal_INFOCARDS\".\"BtnActionInApp\" o15, \"ENLocal_INFOCARDS\".\"BtnActionUrl\" o16, \"ENLocal_INFOCARDS\".\"HasDeleteAction\" o17, \"ENLocal_INFOCARDS\".\"HasDeleteActionAfterRead\" o18";
} else {
selectSql += "\"ENLocal_INFOCARDS\".\"Id\" o0, \"ENLocal_INFOCARDS\".\"Identifier\" o1, \"ENLocal_INFOCARDS\".\"HasRead\" o2, \"ENLocal_INFOCARDS\".\"TitleCard\" o3, \"ENLocal_INFOCARDS\".\"DescCard\" o4, \"ENLocal_INFOCARDS\".\"TitleHeaderPage\" o5, \"ENLocal_INFOCARDS\".\"Content_Type\" o6, \"ENLocal_INFOCARDS\".\"Content_Binary\" o7, \"ENLocal_INFOCARDS\".\"HasDetail\" o8, \"ENLocal_INFOCARDS\".\"TitleDetail\" o9, \"ENLocal_INFOCARDS\".\"SubtitleDetail\" o10, \"ENLocal_INFOCARDS\".\"BodyDetail\" o11, \"ENLocal_INFOCARDS\".\"HasAction\" o12, \"ENLocal_INFOCARDS\".\"BtnActionExternalLink\" o13, \"ENLocal_INFOCARDS\".\"BtnActionLabel\" o14, \"ENLocal_INFOCARDS\".\"BtnActionInApp\" o15, \"ENLocal_INFOCARDS\".\"BtnActionUrl\" o16, \"ENLocal_INFOCARDS\".\"HasDeleteAction\" o17, \"ENLocal_INFOCARDS\".\"HasDeleteActionAfterRead\" o18";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_INFOCARDS\" \"ENLocal_INFOCARDS\"";
fromAndWhereSql += " WHERE (\"ENLocal_INFOCARDS\".\"Identifier\" = CAST(:qploIdentifier AS INTEGER))";
argsList.add("qploIdentifier", /*LONGINTEGER*/ 4, qploIdentifier);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_INFOCARDSRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_INFOCARDSAttr",
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
return model.variables.getLocalInfoCardsByIdentifierAggr;
}, function () {
return controller._getLocalInfoCardsByIdentifierOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalInfoCardsByIdentifier$AggrRefresh"];
// Client Actions
Controller.prototype._showWebViewListenerOnSuccess$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnSuccess");
callContext = controller.callContext(callContext);
};
Controller.prototype._getLocalInfoCardsByIdentifierOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalInfoCardsByIdentifierOnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Card de informação detalhe"
model.variables.analyticsAuxVarVar.traceNameAttr = "Card de informação detalhe";
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
if((model.variables.getLocalInfoCardsByIdentifierAggr.listOut.isEmpty)) {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
controller.safeExecuteJSNode(WTF_MOB_ZonaFlow_WTF_InfoCards_mvc_controller_GetLocalInfoCardsByIdentifierOnAfterFetch_BodyMessageJS, "BodyMessage", "GetLocalInfoCardsByIdentifierOnAfterFetch", {
WidgetId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("Body"), OS.Types.Text, true),
HTML: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.bodyDetailAttr, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
}

// IsLoading = False
model.variables.isLoadingVar = false;
// afterReady = True
model.variables.afterReadyVar = true;
});
}).catch(function (ex) {
OS.Logger.trace("WTF_InfoCards.GetLocalInfoCardsByIdentifierOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage3
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
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
}).then(function () {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
Controller.prototype._buttonActionOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ButtonActionOnClick");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Zona", "Card de informação - Ação", 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.btnActionInAppAttr)) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.btnActionUrlAttr, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: OpenExternalURL
model.flush();
return WTF_MOBController.default.openExternalURL$Action(model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.btnActionUrlAttr, model.variables.getLocalInfoCardsByIdentifierAggr.listOut.getCurrent(callContext.iterationContext).local_INFOCARDSAttr.btnActionExternalLinkAttr, "", WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_InfoCards.ButtonActionOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._showWebViewListenerOnError$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListenerOnError");
callContext = controller.callContext(callContext);
};
Controller.prototype._showWebViewListener$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowWebViewListener");
callContext = controller.callContext(callContext);
};

Controller.prototype.showWebViewListenerOnSuccess$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnSuccess$Action, callContext);

};
Controller.prototype.getLocalInfoCardsByIdentifierOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalInfoCardsByIdentifierOnAfterFetch$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.buttonActionOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buttonActionOnClick$Action, callContext);

};
Controller.prototype.headerLvl2BackEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._headerLvl2BackEvent$Action, callContext);

};
Controller.prototype.showWebViewListenerOnError$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListenerOnError$Action, callContext);

};
Controller.prototype.showWebViewListener$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showWebViewListener$Action, callContext);

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
define("WTF_MOB.ZonaFlow.WTF_InfoCards.mvc$controller.GetLocalInfoCardsByIdentifierOnAfterFetch.BodyMessageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.WidgetId).innerHTML = $parameters.HTML

};
});

