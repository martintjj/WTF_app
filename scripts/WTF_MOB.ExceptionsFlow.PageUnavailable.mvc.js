define("WTF_MOB.ExceptionsFlow.PageUnavailable.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.controller", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MOB.Common.LayoutBlank.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MBP.controller$GetLastURL", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MOB.controller$ValidateUserSession", "WTF_MBP.controller$GetLayoutLevelsAppConfigs", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MOB.model$Local_LAYOUT_LEVELSRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.model$Local_LAYOUT_LEVELSRec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MBPController, WTF_MOBController, WTF_MBPModel, WTF_MOB_Common_LayoutBlank_mvcModel, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec)
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_LayoutBlank_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.ExceptionsFlow.PageUnavailable.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ExceptionsFlow.PageUnavailable.mvc$model", "WTF_MOB.ExceptionsFlow.PageUnavailable.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MBP.controller$GetLastURL", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MOB.controller$ValidateUserSession", "WTF_MBP.controller$GetLayoutLevelsAppConfigs", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MOB.model$Local_LAYOUT_LEVELSRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.model$Local_LAYOUT_LEVELSRec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_ExceptionsFlow_PageUnavailable_mvc_model, WTF_MOB_ExceptionsFlow_PageUnavailable_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "ExceptionsFlow.PageUnavailable";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ExceptionsFlow.PageUnavailable.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_PageUnavailable_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_PageUnavailable_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_LayoutBlank_mvc_view, {
inputs: {
PageType: "Operacao",
PageTitle: "Página indisponível",
ScreenName: "PageUnavailable",
PageSection: "Página indisponível"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
isConnectedEvent$Action: function (isConnectedIn) {
var eventHandlerContext = callContext.clone();
controller.layoutBlankIsConnectedEvent$Action(controller.callContext(eventHandlerContext));

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
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-pinkToBlue",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateHead",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.double_path.svg"),
style: "paths_double",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, {
inputs: {
Text: "Esta página não se encontra disponível neste momento, por favor, tenta novamente mais tarde.",
Title: "Página indisponível"
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
spokeImage: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.Warning.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-stateFooter",
visible: true,
_idProps: {
service: idService,
uuid: "6"
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
uuid: "7",
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
controller.tryAgain$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative -fullWidth -big mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Tentar novamente",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
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
uuid: "11",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeApp$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -secondary -negative -fullWidth -big mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Encerrar a app",
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
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_trampa",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.EmptyStateBackground.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
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
uuid: "17",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ExceptionsFlow.PageUnavailable.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ExceptionsFlow.controller", "WTF_MBP.controller$GetLastURL", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MOB.controller$ValidateUserSession", "WTF_MBP.controller$GetLayoutLevelsAppConfigs", "WTF_MOB.controller$Logout", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MOB.model$Local_LAYOUT_LEVELSRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.model$Local_LAYOUT_LEVELSRec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ExceptionsFlowController) {
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

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._tryAgain$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TryAgain");
callContext = controller.callContext(callContext);
var getLastURLVar = new OS.DataTypes.VariableHolder();
var getServicesVar = new OS.DataTypes.VariableHolder();
var validateUserSessionVar = new OS.DataTypes.VariableHolder();
var getLayoutLevelsAppConfigsVar = new OS.DataTypes.VariableHolder();
var logout2Var = new OS.DataTypes.VariableHolder();
var logoutVar = new OS.DataTypes.VariableHolder();
var getServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList))());
var getUserInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
var getLayoutLevel3Var = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_LAYOUT_LEVELSRecordList))());
var getTokenInfoVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
var getUserWTFVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Página indisponível", "Tentar novamente", 0, "", callContext).then(function () {
// Aggregate: GetTokenInfo
var getTokenInfoAggr = function (maxRecords) {
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
return getTokenInfoVar.value;
});
};
return getTokenInfoAggr();
}).then(function () {
// Aggregate: GetUserInfo
var getUserInfoAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_NOS_INFORecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6";
} else {
selectSql += "\"ENLocal_USER_NOS_INFO\".\"Uid\" o0, \"ENLocal_USER_NOS_INFO\".\"Name\" o1, \"ENLocal_USER_NOS_INFO\".\"Birth_date\" o2, \"ENLocal_USER_NOS_INFO\".\"Gender\" o3, \"ENLocal_USER_NOS_INFO\".\"Username\" o4, \"ENLocal_USER_NOS_INFO\".\"Picture\" o5, \"ENLocal_USER_NOS_INFO\".\"CreatedAt\" o6";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_NOS_INFO\" \"ENLocal_USER_NOS_INFO\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_NOS_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_NOS_INFOAttr",
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
return getUserInfoVar.value;
});
};
return getUserInfoAggr();
}).then(function () {
// EmptyUserInfo?
return OS.Flow.executeSequence(function () {
if((((getUserInfoVar.value.listOut.isEmpty || (OS.BuiltinFunctions.trim(getTokenInfoVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr) === "")) || (OS.BuiltinFunctions.trim(getTokenInfoVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.access_tokenAttr) === "")))) {
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: ValidateUserSession
model.flush();
return WTF_MOBController.default.validateUserSession$Action(false, callContext).then(function (value) {
validateUserSessionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((validateUserSessionVar.value.isValidOut)) {
// Aggregate: GetUserWTF
var getUserWTFAggr = function (maxRecords) {
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4";
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
return controller.executeClientAggregate(executeQuery, function () {
return getUserWTFVar.value;
});
};
return getUserWTFAggr().then(function () {
// Aggregate: GetService
var getServiceAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13, NULL o14, NULL o15, NULL o16, NULL o17, NULL o18, NULL o19, NULL o20, NULL o21, NULL o22, NULL o23, NULL o24";
} else {
selectSql += "\"ENLocal_ASSOCIATION\".\"Id\" o0, \"ENLocal_ASSOCIATION\".\"DisplayValue\" o1, \"ENLocal_ASSOCIATION\".\"FriendlyName\" o2, \"ENLocal_ASSOCIATION\".\"RoleName\" o3, \"ENLocal_ASSOCIATION\".\"Key\" o4, \"ENLocal_ASSOCIATION\".\"Value\" o5, \"ENLocal_ASSOCIATION\".\"Master\" o6, \"ENLocal_ASSOCIATION\".\"ContractDN\" o7, \"ENLocal_ASSOCIATION\".\"AccountOwner\" o8, \"ENLocal_ASSOCIATION\".\"AccountOwnerNIF\" o9, \"ENLocal_ASSOCIATION\".\"AccountOwnerEmail\" o10, \"ENLocal_ASSOCIATION\".\"AccountOwnerPhoneNr\" o11, \"ENLocal_ASSOCIATION\".\"CustCode_ClientNumber\" o12, \"ENLocal_ASSOCIATION\".\"PersonId\" o13, \"ENLocal_ASSOCIATION\".\"IsPending\" o14, \"ENLocal_ASSOCIATION\".\"UA\" o15, \"ENLocal_SERVICE\".\"Id\" o16, \"ENLocal_SERVICE\".\"ServiceId\" o17, \"ENLocal_SERVICE\".\"AssociationID\" o18, \"ENLocal_SERVICE\".\"Name\" o19, \"ENLocal_SERVICE\".\"ServiceAccount\" o20, \"ENLocal_SERVICE\".\"UiLabel\" o21, \"ENLocal_SERVICE\".\"Plan\" o22, \"ENLocal_SERVICE\".\"TMCodeID\" o23, \"ENLocal_SERVICE\".\"TMCodeDesc\" o24";
}
fromAndWhereSql += " FROM (\"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\" Inner JOIN \"MAIN\".\"OSUSR_p9g_Local_ASSOCIATION\" \"ENLocal_ASSOCIATION\" ON (\"ENLocal_SERVICE\".\"AssociationID\" = \"ENLocal_ASSOCIATION\".\"Id\")) ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ASSOCIATIONAttr",
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
return getServiceAggr();
}).then(function () {
// Empty Services?
return OS.Flow.executeSequence(function () {
if((getServiceVar.value.listOut.isEmpty)) {
// Execute Action: GetServices
model.flush();
return WTF_MBPController.default.getServices$Action(true, callContext).then(function (value) {
getServicesVar.value = value;
}).then(function () {
if((getServicesVar.value.successOut)) {
// Empty Services?
if((getServicesVar.value.app_UserAssociationsWithServicesOut.isEmpty)) {
// Destination: /WTF_MOB/Oops
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Oops", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

} else {
// IsLoading = False
model.variables.isLoadingVar = false;
return OS.Flow.returnAsync();

}

});
}

});
}).then(function () {
// Empty User WTF?
return OS.Flow.executeSequence(function () {
if(((getUserWTFVar.value.listOut.isEmpty || (getUserWTFVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr === 0)))) {
// Destination: /WTF_MOB/SelectMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SelectMsisdn", {
isAfterLogin: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: GetLayoutLevelsAppConfigs
model.flush();
return WTF_MBPController.default.getLayoutLevelsAppConfigs$Action(callContext).then(function (value) {
getLayoutLevelsAppConfigsVar.value = value;
}).then(function () {
// Aggregate: GetLayoutLevel3
var getLayoutLevel3Aggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_LAYOUT_LEVELSRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstLevel = getLayoutLevelsAppConfigsVar.value.lvl3Out;

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
selectSql += "\"ENLocal_LAYOUT_LEVELS\".\"Id\" o0, \"ENLocal_LAYOUT_LEVELS\".\"Label\" o1, \"ENLocal_LAYOUT_LEVELS\".\"Level\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_LAYOUT_LEVELS\" \"ENLocal_LAYOUT_LEVELS\"";
fromAndWhereSql += " WHERE (\"ENLocal_LAYOUT_LEVELS\".\"Level\" = :qpstLevel)";
argsList.add("qpstLevel", /*TEXT*/ 0, qpstLevel);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_LAYOUT_LEVELSRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_LAYOUT_LEVELSAttr",
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
return getLayoutLevel3Var.value;
});
};
return getLayoutLevel3Aggr();
}).then(function () {
// Execute Action: GetLastURL
model.flush();
return WTF_MBPController.default.getLastURL$Action(getLayoutLevel3Var.value.listOut.getCurrent(callContext.iterationContext).local_LAYOUT_LEVELSAttr.idAttr, callContext).then(function (value) {
getLastURLVar.value = value;
});
}).then(function () {
if(((getLastURLVar.value.uRLOut === ""))) {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((((getLastURLVar.value.uRLOut) !== ("")) && (OS.BuiltinFunctions.index(getLastURLVar.value.uRLOut, "PreLogin", 0, false, false) === -1))) {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getLastURLVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true));
} else {
if((OS.BuiltinFunctions.index(getLastURLVar.value.uRLOut, "PreLogin", 0, false, false) > -1)) {
// Destination: /WTF_MOB/LoadingSplash
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoadingSplash", {
FromRegister: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
}

}

}

});
}

});
});
} else {
// Execute Action: Logout2
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logout2Var.value = value;
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logout2Var.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}

});
});
});
};
Controller.prototype._closeApp$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CloseApp");
callContext = controller.callContext(callContext);
var logoutVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Página indisponível", "Encerrar a app", 0, "", callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Página indisponível"
model.variables.analyticsAuxVarVar.traceNameAttr = "Página indisponível";
// AnalyticsAuxVar.Category = "Página indisponível"
model.variables.analyticsAuxVarVar.categoryAttr = "Página indisponível";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("PageUnavailable.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
};

Controller.prototype.tryAgain$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._tryAgain$Action, callContext);

};
Controller.prototype.closeApp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeApp$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.layoutBlankIsConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutBlankIsConnectedEvent$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_ExceptionsFlowController.default.handleError(ex, this.callContext());
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

