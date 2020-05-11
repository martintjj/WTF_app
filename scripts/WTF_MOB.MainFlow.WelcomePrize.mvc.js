define("WTF_MOB.MainFlow.WelcomePrize.mvc$model", ["OutSystems", "WTF_MOB.model", "CommonPlugin.model", "SocialSharingPlugin.controller", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "BALANCE_MBP.controller", "WTF_MOB.Common.Layout_Lvl1.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "WTF_MOB.referencesHealth$SocialSharingPlugin", "WTF_MOB.controller$Analytics_SendEvent", "SocialSharingPlugin.controller$SocialSharing", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_WelcomePrizeRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$GetWelcomePrizeInfo", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$RequestWelcomePrize", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.controller$setActivityLog_ActivateDelight", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList"], function (OutSystems, WTF_MOBModel, CommonPluginModel, SocialSharingPluginController, WTF_MOBController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, BALANCE_MBPController, WTF_MOB_Common_Layout_Lvl1_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
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
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("UserWTFActiveNow", "userWTFActiveNowVar", "UserWTFActiveNow", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.Local_USER_WTFRec());
}, WTF_MBPModel.Local_USER_WTFRec), 
this.attr("App_WelcomePrize", "app_WelcomePrizeVar", "App_WelcomePrize", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_WelcomePrizeRec());
}, WTF_BPModel.App_WelcomePrizeRec), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("afterReady", "afterReadyVar", "afterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Identifier", "identifierIn", "Identifier", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_identifierInDataFetchStatus", "_identifierInDataFetchStatus", "_identifierInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((WTF_MOB_Common_Layout_Lvl1_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Identifier" in inputs) {
this.variables.identifierIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Identifier, OS.Types.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.MainFlow.WelcomePrize.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.MainFlow.WelcomePrize.mvc$model", "WTF_MOB.MainFlow.WelcomePrize.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "WTF_MOB.referencesHealth$SocialSharingPlugin", "WTF_MOB.controller$Analytics_SendEvent", "SocialSharingPlugin.controller$SocialSharing", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_WelcomePrizeRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$GetWelcomePrizeInfo", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$RequestWelcomePrize", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.controller$setActivityLog_ActivateDelight", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, CommonPluginModel, SocialSharingPluginController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, BALANCE_MBPController, React, OSView, WTF_MOB_MainFlow_WelcomePrize_mvc_model, WTF_MOB_MainFlow_WelcomePrize_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "MainFlow.WelcomePrize";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.MainFlow.WelcomePrize.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_MainFlow_WelcomePrize_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_MainFlow_WelcomePrize_mvc_controller;
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
PageSection: "Zona",
ScreenName: "WelcomePrize",
IsOfflineMode: false,
ContentClass: "welcome_prize b-transparent text-center",
PageTitle: "Prémio Boas-Vindas",
WithoutLogin: false,
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
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-container pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: " c-yellow mv-32 -bold h2",
value: model.variables.app_WelcomePrizeVar.text1Attr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: ("title c-yellow -bold " + model.variables.app_WelcomePrizeVar.classTypeAttr),
value: model.variables.app_WelcomePrizeVar.nameAttr,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white h1 -bold mb-16 mt-40",
value: model.variables.app_WelcomePrizeVar.text2Attr,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white",
value: model.variables.app_WelcomePrizeVar.text3Attr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-hashtag",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.sqp.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-hashtag-rect",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-footer",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
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
uuid: "11",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.shareOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary -fullWidth -big mb-8",
visible: model.variables.app_WelcomePrizeVar.shareIsActiveAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Partilha",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.app_WelcomePrizeVar.shareIsActiveAttr)]
}), React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "15",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.request$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -fullWidth",
visible: true,
_idProps: {
service: idService,
name: "Button"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.app_WelcomePrizeVar.btnActionLabelAttr,
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.app_WelcomePrizeVar.btnActionLabelAttr)]
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
uuid: "18",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.app_WelcomePrizeVar.btnActionLabelAttr), asPrimitiveValue(model.variables.app_WelcomePrizeVar.shareIsActiveAttr), asPrimitiveValue(model.variables.app_WelcomePrizeVar.text3Attr), asPrimitiveValue(model.variables.app_WelcomePrizeVar.text2Attr), asPrimitiveValue(model.variables.app_WelcomePrizeVar.classTypeAttr), asPrimitiveValue(model.variables.app_WelcomePrizeVar.nameAttr), asPrimitiveValue(model.variables.app_WelcomePrizeVar.text1Attr), asPrimitiveValue(model.variables.afterReadyVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.MainFlow.WelcomePrize.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "MobileUIWidgets.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "BALANCE_MBP.controller", "WTF_MOB.languageResources", "WTF_MOB.MainFlow.controller", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "WTF_MOB.referencesHealth$SocialSharingPlugin", "WTF_MOB.controller$Analytics_SendEvent", "SocialSharingPlugin.controller$SocialSharing", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StopTraceGlobalAction", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_WelcomePrizeRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$GetWelcomePrizeInfo", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$RequestWelcomePrize", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.controller$setActivityLog_ActivateDelight", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, CommonPluginModel, SocialSharingPluginController, MobileUIWidgetsController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, BALANCE_MBPController, WTF_MOBLanguageResources, WTF_MOB_MainFlowController) {
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
Controller.prototype._shareOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShareOnClick");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkSocialSharingPluginVar = new OS.DataTypes.VariableHolder();
var socialSharingVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Prémio Boas-Vindas", "Partilhar mensagem", 0, "", callContext).then(function () {
// Execute Action: CheckSocialSharingPlugin
checkSocialSharingPluginVar.value = SocialSharingPluginController.default.checkSocialSharingPlugin$Action(callContext);

}).then(function () {
return OS.Flow.executeSequence(function () {
if((checkSocialSharingPluginVar.value.isAvailableOut)) {
// Execute Action: SocialSharing
model.flush();
return SocialSharingPluginController.default.socialSharing$Action(model.variables.app_WelcomePrizeVar.shareMsgAttr, "", WTF_MOBModel.staticEntities.socialType.all, callContext).then(function (value) {
socialSharingVar.value = value;
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("WelcomePrize.ShareOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFOnAfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getWelcomePrizeInfoVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Prémio Boas-Vindas"
model.variables.analyticsAuxVarVar.traceNameAttr = "Prémio Boas-Vindas";
// AnalyticsAuxVar.Category = "Prémio Boas-Vindas"
model.variables.analyticsAuxVarVar.categoryAttr = "Prémio Boas-Vindas";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// UserWTFActiveNow = GetLocalUSERWTF.List.Current.Local_USER_WTF
model.variables.userWTFActiveNowVar = model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr;
// Execute Action: GetWelcomePrizeInfo
model.flush();
return WTF_MBPController.default.getWelcomePrizeInfo$Action(model.variables.identifierIn, callContext).then(function (value) {
getWelcomePrizeInfoVar.value = value;
});
}).then(function () {
if((getWelcomePrizeInfoVar.value.successOut)) {
// App_WelcomePrize = GetWelcomePrizeInfo.App_WelcomePrize
model.variables.app_WelcomePrizeVar = getWelcomePrizeInfoVar.value.app_WelcomePrizeOut;
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(getWelcomePrizeInfoVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, true, 3000, "", "-large", callContext);
}

// Execute Action: StopTrace
return controller._stopTrace$Action(callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// afterReady = True
model.variables.afterReadyVar = true;
});
});
}).catch(function (ex) {
OS.Logger.trace("WelcomePrize.GetLocalUSERWTFOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._request$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Request");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var requestWelcomePrizeVar = new OS.DataTypes.VariableHolder();
var wallet_ClearCacheVar = new OS.DataTypes.VariableHolder();
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Button"), false, callContext);
// Execute Action: RequestWelcomePrize
model.flush();
return WTF_MBPController.default.requestWelcomePrize$Action(OS.BuiltinFunctions.longIntegerToInteger(model.variables.userWTFActiveNowVar.idAttr), model.variables.identifierIn, callContext).then(function (value) {
requestWelcomePrizeVar.value = value;
}).then(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Prémio Boas-Vindas", "Confirmar prémio", 0, "", callContext);
}).then(function () {
// Execute Action: setActivityLog_ActivateDelight
model.flush();
return WTF_MBPController.default.setActivityLog_ActivateDelight$Action("", !(requestWelcomePrizeVar.value.successOut), (((requestWelcomePrizeVar.value.successOut) ? (0) : (1))).toString(), model.variables.identifierIn, model.variables.app_WelcomePrizeVar.nameAttr, callContext);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((requestWelcomePrizeVar.value.successOut)) {
// Execute Action: Balance_ClearCache
model.flush();
return BALANCE_MBPController.default.balance_ClearCache$Action(callContext).then(function (value) {
balance_ClearCacheVar.value = value;
}).then(function () {
// Execute Action: Wallet_ClearCache
model.flush();
return WTF_MBPController.default.wallet_ClearCache$Action(callContext).then(function (value) {
wallet_ClearCacheVar.value = value;
});
});
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(requestWelcomePrizeVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, true, 3000, "", "-large", callContext);
}

});
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(model.variables.app_WelcomePrizeVar.btnActionURLAttr, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("WelcomePrize.Request", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Button"), true, callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Button"), true, callContext);
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

Controller.prototype.shareOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._shareOnClick$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFOnAfterFetch$Action, callContext);

};
Controller.prototype.request$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._request$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_MainFlowController.default.handleError(ex, this.callContext());
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

