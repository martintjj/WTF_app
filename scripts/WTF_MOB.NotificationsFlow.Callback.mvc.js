define("WTF_MOB.NotificationsFlow.Callback.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.controller", "WTF_MBP.model", "CustomerNotifications_MBLOCKS.Blocks.WB_CallBack.mvc$model", "WTF_MBP.controller$ClearCache", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$DeleteAllLocal_LOCALTEMPDEEPLINK", "WTF_MBP.model$Local_TEMPDEEPLINKRec", "WTF_MBP.controller$CreateOrUpdateLocal_TEMPDEEPLINK_Logic", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities"], function (OutSystems, WTF_MOBModel, WTF_MBPController, WTF_MBPModel, CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("NotificationId", "notificationIdIn", "NotificationId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_notificationIdInDataFetchStatus", "_notificationIdInDataFetchStatus", "_notificationIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
})
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
Model._hasValidationWidgetsValue = CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("NotificationId" in inputs) {
this.variables.notificationIdIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.NotificationId, OS.Types.LongInteger);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.NotificationsFlow.Callback.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.NotificationsFlow.Callback.mvc$model", "WTF_MOB.NotificationsFlow.Callback.mvc$controller", "CustomerNotifications_MBLOCKS.Blocks.WB_CallBack.mvc$view", "OutSystemsReactWidgets", "WTF_MBP.controller$ClearCache", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$DeleteAllLocal_LOCALTEMPDEEPLINK", "WTF_MBP.model$Local_TEMPDEEPLINKRec", "WTF_MBP.controller$CreateOrUpdateLocal_TEMPDEEPLINK_Logic", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_NotificationsFlow_Callback_mvc_model, WTF_MOB_NotificationsFlow_Callback_mvc_controller, CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvc_view, OSWidgets) {
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
        View.displayName = "NotificationsFlow.Callback";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_NotificationsFlow_Callback_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_NotificationsFlow_Callback_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvc_view, {
inputs: {
NotificationId: model.getCachedValue(idService.getId("FGVqpAtHAEKcXfOlEamXdA.NotificationId"), function () {
return OS.BuiltinFunctions.longIntegerToIdentifier(model.variables.notificationIdIn);
}, function () {
return model.variables.notificationIdIn;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onNotifyChangeStatus$Action: function (deepLinkIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.wB_CallBackOnNotifyChangeStatus$Action(deepLinkIn, controller.callContext(eventHandlerContext));
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
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.NotificationsFlow.Callback.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.NotificationsFlow.controller", "WTF_MBP.controller$ClearCache", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$DeleteAllLocal_LOCALTEMPDEEPLINK", "WTF_MBP.model$Local_TEMPDEEPLINKRec", "WTF_MBP.controller$CreateOrUpdateLocal_TEMPDEEPLINK_Logic", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.entities"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_NotificationsFlowController) {
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
Controller.prototype._wB_CallBackOnNotifyChangeStatus$Action = function (deepLinkIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("WB_CallBackOnNotifyChangeStatus");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.NotificationsFlow.Callback.WB_CallBackOnNotifyChangeStatus$vars"))());
vars.value.deepLinkInLocal = deepLinkIn;
var createOrUpdateLocal_TEMPDEEPLINK_Logic2Var = new OS.DataTypes.VariableHolder();
var createOrUpdateLocal_TEMPDEEPLINK_LogicVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
var getUserWTFVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFRecordList))());
return OS.Flow.executeAsyncFlow(function () {
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
return getLocalACCESSTOKENINFOESAggr().then(function () {
// Refresh_token<>""?
return OS.Flow.executeSequence(function () {
if((((OS.BuiltinFunctions.trim(getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr)) !== ("")))) {
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
// HasSelectedMSISDN
return OS.Flow.executeSequence(function () {
if((((getUserWTFVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr) !== (0)))) {
// Execute Action: DeleteAllLocal_LOCALTEMPDEEPLINK
model.flush();
return WTF_MBPController.default.deleteAllLocal_LOCALTEMPDEEPLINK$Action(callContext).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.deepLinkInLocal, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// DeeplinkRec.Id = NullIdentifier
vars.value.deeplinkRecVar.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// DeeplinkRec.URL = DeepLink
vars.value.deeplinkRecVar.uRLAttr = vars.value.deepLinkInLocal;
// Execute Action: CreateOrUpdateLocal_TEMPDEEPLINK_Logic2
model.flush();
return WTF_MBPController.default.createOrUpdateLocal_TEMPDEEPLINK_Logic$Action(vars.value.deeplinkRecVar, callContext).then(function (value) {
createOrUpdateLocal_TEMPDEEPLINK_Logic2Var.value = value;
}).then(function () {
// Destination: /WTF_MOB/SelectMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SelectMsisdn", {
isAfterLogin: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
} else {
// Execute Action: ClearCache
model.flush();
return WTF_MBPController.default.clearCache$Action(callContext).then(function () {
// DeeplinkRec.Id = NullIdentifier
vars.value.deeplinkRecVar.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// DeeplinkRec.URL = DeepLink
vars.value.deeplinkRecVar.uRLAttr = vars.value.deepLinkInLocal;
// Execute Action: CreateOrUpdateLocal_TEMPDEEPLINK_Logic
model.flush();
return WTF_MBPController.default.createOrUpdateLocal_TEMPDEEPLINK_Logic$Action(vars.value.deeplinkRecVar, callContext).then(function (value) {
createOrUpdateLocal_TEMPDEEPLINK_LogicVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
});
};
Controller.registerVariableGroupType("WTF_MOB.NotificationsFlow.Callback.WB_CallBackOnNotifyChangeStatus$vars", [{
name: "DeepLink",
attrName: "deepLinkInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "DeeplinkRec",
attrName: "deeplinkRecVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MBPModel.Local_TEMPDEEPLINKRec();
},
complexType: WTF_MBPModel.Local_TEMPDEEPLINKRec
}]);

Controller.prototype.wB_CallBackOnNotifyChangeStatus$Action = function (deepLinkIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._wB_CallBackOnNotifyChangeStatus$Action, callContext, deepLinkIn);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_NotificationsFlowController.default.handleError(ex, this.callContext());
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

