define("WTF_MOB.ExceptionsFlow.ProtectionScreen.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.Common.LayoutBlank.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Logout", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, WTF_MOB_Common_LayoutBlank_mvcModel, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
var OS = OutSystems.Internal;
var GetAccessTokenInfoAggrRec = (function (_super) {
__extends(GetAccessTokenInfoAggrRec, _super);
function GetAccessTokenInfoAggrRec(defaults) {
_super.apply(this, arguments);
}
GetAccessTokenInfoAggrRec.RecordListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
GetAccessTokenInfoAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetAccessTokenInfoAggrRec.init();
return GetAccessTokenInfoAggrRec;
})(OS.Model.AggregateRecord);


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
this.attr("CheckPeriod", "checkPeriodVar", "CheckPeriod", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CheckFrequency", "checkFrequencyVar", "CheckFrequency", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("EndDateTime", "endDateTimeVar", "EndDateTime", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("NextAPICall", "nextAPICallVar", "NextAPICall", true, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("FromRegister", "fromRegisterIn", "FromRegister", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_fromRegisterInDataFetchStatus", "_fromRegisterInDataFetchStatus", "_fromRegisterInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetAccessTokenInfo", "getAccessTokenInfoAggr", "getAccessTokenInfoAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetAccessTokenInfoAggrRec());
}, GetAccessTokenInfoAggrRec)
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
if("FromRegister" in inputs) {
this.variables.fromRegisterIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.FromRegister, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ExceptionsFlow.ProtectionScreen.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ExceptionsFlow.ProtectionScreen.mvc$model", "WTF_MOB.ExceptionsFlow.ProtectionScreen.mvc$controller", "WTF_MOB.Common.LayoutBlank.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.EmptyStatesV2_Text.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Logout", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_ExceptionsFlow_ProtectionScreen_mvc_model, WTF_MOB_ExceptionsFlow_ProtectionScreen_mvc_controller, WTF_MOB_Common_LayoutBlank_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "ExceptionsFlow.ProtectionScreen";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ExceptionsFlow.ProtectionScreen.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_LayoutBlank_mvc_view, MobileUIWidgets_WidgetsContent_EmptyStatesV2_Text_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_ProtectionScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ExceptionsFlow_ProtectionScreen_mvc_controller;
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
PageTitle: "Estamos a configurar a tua app WTF",
ScreenName: "ProtectionScreen",
PageSection: "Estamos a configurar a tua app WTF"
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
Text: "Pode demorar uns segundos, mas temos prémios que vão valer a pena.",
Title: "Isto está a aquecer"
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
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.Panela.png"),
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
name: "TryAgain"
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
define("WTF_MOB.ExceptionsFlow.ProtectionScreen.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ExceptionsFlow.controller", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Logout", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$CheckIfUserHasEverLoggedIn", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ExceptionsFlowController) {
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
Controller.prototype.getAccessTokenInfo$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

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
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
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
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getAccessTokenInfoAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getAccessTokenInfo$AggrRefresh"];
// Client Actions
Controller.prototype._tryAgain$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TryAgain");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getServicesVar = new OS.DataTypes.VariableHolder();
var createUserWtfActiveVar = new OS.DataTypes.VariableHolder();
var getActiveUserWTFVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("TryAgain"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Estamos a configurar a tua app WTF", "Tentar novamente", 0, "", callContext).then(function () {
// SetIsLoading
// IsLoading = True
model.variables.isLoadingVar = true;
}).then(function () {
// Fetch Error?
return OS.Flow.executeSequence(function () {
if((model.variables.getAccessTokenInfoAggr.hasFetchErrorAttr)) {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Empty Token?
return OS.Flow.executeSequence(function () {
if(((model.variables.getAccessTokenInfoAggr.listOut.isEmpty || (OS.BuiltinFunctions.trim(model.variables.getAccessTokenInfoAggr.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr) === "")))) {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: GetServices
model.flush();
return WTF_MBPController.default.getServices$Action(true, callContext).then(function (value) {
getServicesVar.value = value;
}).then(function () {
// GetServices.Success?
return OS.Flow.executeSequence(function () {
if((getServicesVar.value.successOut)) {
// Only one Association?
return OS.Flow.executeSequence(function () {
if(((getServicesVar.value.app_UserAssociationsWithServicesOut.length === 1))) {
// Execute Action: CreateUserWtfActive
model.flush();
return WTF_MBPController.default.getUserAssociationAndCreateUserWtfActive$Action(getServicesVar.value.app_UserAssociationsWithServicesOut.getCurrent(callContext.iterationContext).associationIdAttr, callContext).then(function (value) {
createUserWtfActiveVar.value = value;
}).then(function () {
// AlreadyInUse?
return OS.Flow.executeSequence(function () {
if((createUserWtfActiveVar.value.alreadyInUseOut)) {
// Execute Action: GetActiveUserWTF
model.flush();
return WTF_MBPController.default.getActiveUserWTF$Action(callContext).then(function (value) {
getActiveUserWTFVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/RecoveryMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RecoveryMsisdn", {
Msisdn: (getActiveUserWTFVar.value.userWTFActiveNowOut.msisdnAttr).toString()
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
} else {
// More than one Association?
if(((getServicesVar.value.app_UserAssociationsWithServicesOut.length > 1))) {
// Destination: /WTF_MOB/SelectMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SelectMsisdn", {
isAfterLogin: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// SetIsLoading
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("TryAgain"), true, callContext);
}

}

});
} else {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ProtectionScreen.TryAgain", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("TryAgain"), true, callContext);
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
// SetIsLoading
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.prototype._layoutBlankIsConnectedEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("LayoutBlankIsConnectedEvent");
callContext = controller.callContext(callContext);
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
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Estamos a configurar a tua app WTF", "Encerrar a app", 0, "", callContext).then(function () {
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
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getServicesVar = new OS.DataTypes.VariableHolder();
var getCheckPeriodVar = new OS.DataTypes.VariableHolder();
var checkIfUserHasEverLoggedInVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getCheckFrequencyVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Estamos a configurar a tua app WTF"
model.variables.analyticsAuxVarVar.traceNameAttr = "Estamos a configurar a tua app WTF";
// AnalyticsAuxVar.Category = "Estamos a configurar a tua app WTF"
model.variables.analyticsAuxVarVar.categoryAttr = "Estamos a configurar a tua app WTF";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Fetch Error?
return OS.Flow.executeSequence(function () {
if((!(model.variables.getAccessTokenInfoAggr.hasFetchErrorAttr))) {
// Empty Token?
return OS.Flow.executeSequence(function () {
if((!((model.variables.getAccessTokenInfoAggr.listOut.isEmpty || (OS.BuiltinFunctions.trim(model.variables.getAccessTokenInfoAggr.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr) === ""))))) {
// Execute Action: GetCheckPeriod
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("ASSOCIATION_CHECK_PERIOD", callContext).then(function (value) {
getCheckPeriodVar.value = value;
}).then(function () {
// SetCheckPeriod
// CheckPeriod = TextToInteger
model.variables.checkPeriodVar = OS.BuiltinFunctions.textToInteger(getCheckPeriodVar.value.valueOut);
// Execute Action: GetCheckFrequency
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("ASSOCIATION_CHECK_FREQUENCY", callContext).then(function (value) {
getCheckFrequencyVar.value = value;
});
}).then(function () {
// SetCheckFrequency
// CheckFrequency = TextToInteger
model.variables.checkFrequencyVar = OS.BuiltinFunctions.textToInteger(getCheckFrequencyVar.value.valueOut);
}).then(function () {
// Empty Period?
return OS.Flow.executeSequence(function () {
if((!(((model.variables.checkPeriodVar === 0) || (model.variables.checkFrequencyVar === 0))))) {
// Frequency > Period?
return OS.Flow.executeSequence(function () {
if((!((model.variables.checkFrequencyVar > model.variables.checkPeriodVar)))) {
// SetEndDateTime
// EndDateTime = AddSeconds
model.variables.endDateTimeVar = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.currDateTime(), model.variables.checkPeriodVar);
// Time to Finish?
return OS.Flow.whileAsync(function () {
return (!(OS.BuiltinFunctions.currDateTime().gte(model.variables.endDateTimeVar)));
}, function () {
// Time to Call API?
return OS.Flow.executeSequence(function () {
if(((OS.BuiltinFunctions.currDateTime().gte(model.variables.nextAPICallVar) || model.variables.nextAPICallVar.equals(OS.BuiltinFunctions.nullDate())))) {
// SetNextAPICall
// NextAPICall = AddSeconds
model.variables.nextAPICallVar = OS.BuiltinFunctions.addSeconds(OS.BuiltinFunctions.currDateTime(), model.variables.checkFrequencyVar);
// Execute Action: GetServices
model.flush();
return WTF_MBPController.default.getServices$Action(true, callContext).then(function (value) {
getServicesVar.value = value;
}).then(function () {
// GetServices.Success?
return OS.Flow.executeSequence(function () {
if((getServicesVar.value.successOut)) {
// Empty Services?
return OS.Flow.executeSequence(function () {
if((!((getServicesVar.value.app_UserAssociationsWithServicesOut.length === 0)))) {
// Execute Action: CheckIfUserHasEverLoggedIn
model.flush();
return WTF_MOBController.default.checkIfUserHasEverLoggedIn$Action(false, callContext).then(function (value) {
checkIfUserHasEverLoggedInVar.value = value;
}).then(function () {
// Has Logged In?
return OS.Flow.executeSequence(function () {
if((checkIfUserHasEverLoggedInVar.value.hasLoggedInOut)) {
// Execute Action: StopTrace8
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/LoadingSplash
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoadingSplash", {
FromRegister: model.variables.fromRegisterIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: StopTrace6
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/OnBoarding
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/OnBoarding", {
FromRegister: model.variables.fromRegisterIn,
DemoAppWithoutLogin: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}

});
} else {
// Execute Action: StopTrace5
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}

});
}).then(function () {
// Execute Action: StopTrace7
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/Oops
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Oops", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

});
}

});
}).then(function () {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

});
}

});
}).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}).catch(function (ex) {
OS.Logger.trace("ProtectionScreen.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// SetIsLoading
// IsLoading = False
model.variables.isLoadingVar = false;
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
// SetIsLoading
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: StopTrace
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

Controller.prototype.tryAgain$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._tryAgain$Action, callContext);

};
Controller.prototype.layoutBlankIsConnectedEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutBlankIsConnectedEvent$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.closeApp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeApp$Action, callContext);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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

