define("App_Config_MBP.controller$ClearAppConfigCache", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.controller", "App_Config_MBP.model$Local_APP_CONFIGRec", "App_Config_MBP.entities"], function (exports, OutSystems, App_Config_MBPModel, App_Config_MBPController) {
var OS = OutSystems.Internal;
App_Config_MBPController.default.clearAppConfigCache$Action = function (callContext) {
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DeleteAllLocal_APP_CONFIG
return App_Config_MBPModel.entities.Local_APP_CONFIG.deleteAll(callContext);
}).then(function () {
return ;
});
};
var controller = App_Config_MBPController.default;
App_Config_MBPController.default.clientActionProxies.clearAppConfigCache$Action = function () {
return controller.executeActionInsideJSNode(App_Config_MBPController.default.clearAppConfigCache$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("App_Config_MBP.controller$GetAllMobileConfigs_MBP", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.controller", "Essentials_MOB.controller", "Essentials_MOB.controller$CheckNetworkStatus", "App_Config_MBP.referencesHealth", "App_Config_MBP.referencesHealth$Essentials_MOB", "App_Config_MBP.model$Local_APP_CONFIGRecordList", "App_Config_MBP.model$ConfigRecordList", "App_Config_MBP.controller$ServerAction.GetAllMobileConfigValues", "App_Config_MBP.model$Local_APP_CONFIGRecord", "App_Config_MBP.model$Local_SYNC_CONTROLRecord", "Essentials_MOB.controller$Text_IsEqual", "App_Config_MBP.model$Local_APP_CONFIGRec", "App_Config_MBP.model$Local_SYNC_CONTROLRec", "App_Config_MBP.entities"], function (exports, OutSystems, App_Config_MBPModel, App_Config_MBPController, Essentials_MOBController) {
var OS = OutSystems.Internal;
App_Config_MBPController.default.getAllMobileConfigs_MBP$Action = function (applicationIn, forceRefreshIn, useCacheIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("App_Config_MBP.GetAllMobileConfigs_MBP$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.forceRefreshInLocal = forceRefreshIn;
vars.value.useCacheInLocal = useCacheIn;
var getAllMobileConfigValuesVar = new OS.DataTypes.VariableHolder();
var checkNetworkStatusVar = new OS.DataTypes.VariableHolder();
var listFilterVar = new OS.DataTypes.VariableHolder();
var createOrUpdateLocal_SYNC_CONTROLVar = new OS.DataTypes.VariableHolder();
var createLocal_APP_CONFIGVar = new OS.DataTypes.VariableHolder();
var getLocalAPPCONFIGSByApplicationVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(App_Config_MBPModel.Local_APP_CONFIGRecordList))());
var getLocalAPPCONFIGSByApplication2Var = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(App_Config_MBPModel.Local_APP_CONFIGRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CheckNetworkStatus
return Essentials_MOBController.default.checkNetworkStatus$Action(callContext).then(function (value) {
checkNetworkStatusVar.value = value;
}).then(function () {
// isOnline?
return OS.Flow.executeSequence(function () {
if((checkNetworkStatusVar.value.isOnlineOut)) {
return OS.Flow.executeSequence(function () {
if((!(vars.value.forceRefreshInLocal))) {
// UseCache?
return OS.Flow.executeSequence(function () {
if((vars.value.useCacheInLocal)) {
// Aggregate: GetLocalAPPCONFIGSByApplication
var getLocalAPPCONFIGSByApplicationAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = App_Config_MBPModel.Local_APP_CONFIGRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstApplication = vars.value.applicationInLocal;

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
selectSql += "\"ENLocal_APP_CONFIG\".\"Id\" o0, \"ENLocal_APP_CONFIG\".\"Application\" o1, \"ENLocal_APP_CONFIG\".\"Key\" o2, \"ENLocal_APP_CONFIG\".\"Value\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_q3o_Local_APP_CONFIG\" \"ENLocal_APP_CONFIG\"";
fromAndWhereSql += " WHERE (\"ENLocal_APP_CONFIG\".\"Application\" = :qpstApplication)";
argsList.add("qpstApplication", /*TEXT*/ 0, qpstApplication);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, App_Config_MBPModel.Local_APP_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_APP_CONFIGAttr",
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
return getLocalAPPCONFIGSByApplicationVar.value;
});
};
return getLocalAPPCONFIGSByApplicationAggr().then(function () {
// No records
if((!(getLocalAPPCONFIGSByApplicationVar.value.listOut.isEmpty))) {
return OS.Flow.returnAsync();

}

});
}

});
}

}).then(function () {
// LocalSyncControl
// LocalSyncControl.Id = LongIntegerToIdentifier
vars.value.localSyncControlVar.idAttr = OS.BuiltinFunctions.longIntegerToIdentifier(OS.BuiltinFunctions.integerToLongInteger(1));
// LocalSyncControl.IsSynchronizing = True
vars.value.localSyncControlVar.isSynchronizingAttr = true;
// Execute Action: CreateOrUpdateLocal_SYNC_CONTROL
return App_Config_MBPModel.entities.Local_SYNC_CONTROL.createOrUpdate(App_Config_MBPModel.Local_SYNC_CONTROLRecord.fromStructure(vars.value.localSyncControlVar), callContext).then(function (value) {
createOrUpdateLocal_SYNC_CONTROLVar.value = value;
}).then(function () {
// Execute Action: GetAllMobileConfigValues
return controller.getAllMobileConfigValues$ServerAction(vars.value.applicationInLocal, callContext).then(function (value) {
getAllMobileConfigValuesVar.value = value;
});
});
}).then(function () {
// Empty?
return OS.Flow.executeSequence(function () {
if((!(getAllMobileConfigValuesVar.value.returnValuesOut.isEmpty))) {
// Aggregate: GetLocalAPPCONFIGSByApplication2
var getLocalAPPCONFIGSByApplication2Aggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = App_Config_MBPModel.Local_APP_CONFIGRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstApplication = vars.value.applicationInLocal;

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
selectSql += "\"ENLocal_APP_CONFIG\".\"Id\" o0, \"ENLocal_APP_CONFIG\".\"Application\" o1, \"ENLocal_APP_CONFIG\".\"Key\" o2, \"ENLocal_APP_CONFIG\".\"Value\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_q3o_Local_APP_CONFIG\" \"ENLocal_APP_CONFIG\"";
fromAndWhereSql += " WHERE (\"ENLocal_APP_CONFIG\".\"Application\" = :qpstApplication)";
argsList.add("qpstApplication", /*TEXT*/ 0, qpstApplication);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, App_Config_MBPModel.Local_APP_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_APP_CONFIGAttr",
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
return getLocalAPPCONFIGSByApplication2Var.value;
});
};
return getLocalAPPCONFIGSByApplication2Aggr().then(function () {
// No configs for APP?
return OS.Flow.executeSequence(function () {
if((getLocalAPPCONFIGSByApplication2Var.value.listOut.isEmpty)) {
// Execute Action: CreateOrUpdateAllLocal_APP_CONFIG
return App_Config_MBPModel.entities.Local_APP_CONFIG.createOrUpdateAll(OS.DataTypes.JSConversions.typeConvertRecordList(getAllMobileConfigValuesVar.value.returnValuesOut, new App_Config_MBPModel.Local_APP_CONFIGRecordList(), function (source, target) {
target.local_APP_CONFIGAttr.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
target.local_APP_CONFIGAttr.applicationAttr = vars.value.applicationInLocal;
target.local_APP_CONFIGAttr.keyAttr = source.configAttr.keyAttr;
target.local_APP_CONFIGAttr.valueAttr = source.configAttr.valueAttr;
return target;
}), callContext);
} else {
// Server Configs
// Foreach GetAllMobileConfigValues.ReturnValues
callContext.iterationContext.registerIterationStart(getAllMobileConfigValuesVar.value.returnValuesOut);
return OS.Flow.tryFinally(function () {
var returnValuesIterator = callContext.iterationContext.getIterator(getAllMobileConfigValuesVar.value.returnValuesOut);
var returnValuesIndex = 0;
return OS.Flow.whileAsync(function () {
return ((returnValuesIndex < getAllMobileConfigValuesVar.value.returnValuesOut.length));
}, function () {
returnValuesIterator.currentRowNumber = returnValuesIndex;
// Execute Action: ListFilter
listFilterVar.value = OS.SystemActions.listFilter(getLocalAPPCONFIGSByApplication2Var.value.listOut, function (p) {
return Essentials_MOBController.default.text_IsEqual$Action(p.local_APP_CONFIGAttr.keyAttr, getAllMobileConfigValuesVar.value.returnValuesOut.getItem(returnValuesIndex.valueOf()).configAttr.keyAttr, false, callContext.withoutIterationContext()).isEqualOut;
}, callContext);

return OS.Flow.executeSequence(function () {
if((listFilterVar.value.filteredListOut.isEmpty)) {
// LocalAppConfig
// LocalAppConfig.Application = Application
vars.value.localAppConfigVar.applicationAttr = vars.value.applicationInLocal;
// LocalAppConfig.Key = GetAllMobileConfigValues.ReturnValues.Current.Config.Key
vars.value.localAppConfigVar.keyAttr = getAllMobileConfigValuesVar.value.returnValuesOut.getItem(returnValuesIndex.valueOf()).configAttr.keyAttr;
// LocalAppConfig.Value = GetAllMobileConfigValues.ReturnValues.Current.Config.Value
vars.value.localAppConfigVar.valueAttr = getAllMobileConfigValuesVar.value.returnValuesOut.getItem(returnValuesIndex.valueOf()).configAttr.valueAttr;
// Execute Action: CreateLocal_APP_CONFIG
return App_Config_MBPModel.entities.Local_APP_CONFIG.create(App_Config_MBPModel.Local_APP_CONFIGRecord.fromStructure(vars.value.localAppConfigVar), callContext).then(function (value) {
createLocal_APP_CONFIGVar.value = value;
});
} else {
return OS.Flow.executeSequence(function () {
if((!(listFilterVar.value.filteredListOut.isEmpty) && !(Essentials_MOBController.default.text_IsEqual$Action(getAllMobileConfigValuesVar.value.returnValuesOut.getItem(returnValuesIndex.valueOf()).configAttr.valueAttr, listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).local_APP_CONFIGAttr.valueAttr, false, callContext.withoutIterationContext()).isEqualOut))) {
// LocalAppConfig = ListFilter.FilteredList.Current
vars.value.localAppConfigVar = listFilterVar.value.filteredListOut.getCurrent(callContext.iterationContext).local_APP_CONFIGAttr;
// LocalAppConfig.Value = GetAllMobileConfigValues.ReturnValues.Current.Config.Value
vars.value.localAppConfigVar.valueAttr = getAllMobileConfigValuesVar.value.returnValuesOut.getItem(returnValuesIndex.valueOf()).configAttr.valueAttr;
// Execute Action: UpdateLocal_APP_CONFIG
return App_Config_MBPModel.entities.Local_APP_CONFIG.update(App_Config_MBPModel.Local_APP_CONFIGRecord.fromStructure(vars.value.localAppConfigVar), callContext);
}

});
}

}).then(function () {
returnValuesIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(getAllMobileConfigValuesVar.value.returnValuesOut);
});
}

});
});
}

});
}).then(function () {
// LocalSyncControl.IsSynchronizing = False
vars.value.localSyncControlVar.isSynchronizingAttr = false;
// Execute Action: UpdateLocal_SYNC_CONTROL
return App_Config_MBPModel.entities.Local_SYNC_CONTROL.update(App_Config_MBPModel.Local_SYNC_CONTROLRecord.fromStructure(vars.value.localSyncControlVar), callContext);
});
}

});
});
}).then(function () {
return ;
});
};
var controller = App_Config_MBPController.default;
App_Config_MBPController.default.constructor.registerVariableGroupType("App_Config_MBP.GetAllMobileConfigs_MBP$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ForceRefresh",
attrName: "forceRefreshInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "UseCache",
attrName: "useCacheInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "LocalAppConfig",
attrName: "localAppConfigVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new App_Config_MBPModel.Local_APP_CONFIGRec();
},
complexType: App_Config_MBPModel.Local_APP_CONFIGRec
}, {
name: "LocalSyncControl",
attrName: "localSyncControlVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new App_Config_MBPModel.Local_SYNC_CONTROLRec();
},
complexType: App_Config_MBPModel.Local_SYNC_CONTROLRec
}]);
App_Config_MBPController.default.clientActionProxies.getAllMobileConfigs_MBP$Action = function (applicationIn, forceRefreshIn, useCacheIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
forceRefreshIn = (forceRefreshIn === undefined) ? false : forceRefreshIn;
useCacheIn = (useCacheIn === undefined) ? false : useCacheIn;
return controller.executeActionInsideJSNode(App_Config_MBPController.default.getAllMobileConfigs_MBP$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(forceRefreshIn, OS.Types.Boolean), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(useCacheIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("App_Config_MBP.controller$GetConfigValueAsText_MBP", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.controller", "App_Config_MBP.model$Local_APP_CONFIGRecord", "App_Config_MBP.controller$GetAllMobileConfigs_MBP", "App_Config_MBP.controller$ServerAction.GetConfigValueAsTextNoCache", "App_Config_MBP.model$Local_APP_CONFIGRec", "App_Config_MBP.model$Local_SYNC_CONTROLRecordList", "App_Config_MBP.model$Local_APP_CONFIGRecordList", "App_Config_MBP.model$Local_SYNC_CONTROLRec", "App_Config_MBP.entities"], function (exports, OutSystems, App_Config_MBPModel, App_Config_MBPController) {
var OS = OutSystems.Internal;
App_Config_MBPController.default.getConfigValueAsText_MBP$Action = function (applicationIn, keyIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("App_Config_MBP.GetConfigValueAsText_MBP$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.keyInLocal = keyIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getConfigValueAsTextNoCacheVar = new OS.DataTypes.VariableHolder();
var createLocal_APP_CONFIGVar = new OS.DataTypes.VariableHolder();
var getLocalSYNCCONTROLSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(App_Config_MBPModel.Local_SYNC_CONTROLRecordList))());
var getAnyLocalAPPCONFIGByKeyVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(App_Config_MBPModel.Local_APP_CONFIGRecordList))());
var getLocalAPPCONFIGByKeyVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(App_Config_MBPModel.Local_APP_CONFIGRecordList))());
var getLocalAPPCONFIGByKeyAfterUpdateVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(App_Config_MBPModel.Local_APP_CONFIGRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("App_Config_MBP.GetConfigValueAsText_MBP$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalAPPCONFIGByKey
var getLocalAPPCONFIGByKeyAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = App_Config_MBPModel.Local_APP_CONFIGRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstApplication = vars.value.applicationInLocal;
var qpstKey = vars.value.keyInLocal;

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
selectSql += "\"ENLocal_APP_CONFIG\".\"Id\" o0, \"ENLocal_APP_CONFIG\".\"Application\" o1, \"ENLocal_APP_CONFIG\".\"Key\" o2, \"ENLocal_APP_CONFIG\".\"Value\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_q3o_Local_APP_CONFIG\" \"ENLocal_APP_CONFIG\"";
fromAndWhereSql += " WHERE (\"ENLocal_APP_CONFIG\".\"Key\" = :qpstKey) AND (\"ENLocal_APP_CONFIG\".\"Application\" = :qpstApplication)";
argsList.add("qpstKey", /*TEXT*/ 0, qpstKey);
argsList.add("qpstApplication", /*TEXT*/ 0, qpstApplication);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, App_Config_MBPModel.Local_APP_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_APP_CONFIGAttr",
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
return getLocalAPPCONFIGByKeyVar.value;
});
};
return getLocalAPPCONFIGByKeyAggr().then(function () {
// Key Not Found
return OS.Flow.executeSequence(function () {
if((getLocalAPPCONFIGByKeyVar.value.listOut.isEmpty)) {
// Aggregate: GetAnyLocalAPPCONFIGByKey
var getAnyLocalAPPCONFIGByKeyAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = App_Config_MBPModel.Local_APP_CONFIGRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstApplication = vars.value.applicationInLocal;

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
selectSql += "\"ENLocal_APP_CONFIG\".\"Id\" o0, \"ENLocal_APP_CONFIG\".\"Application\" o1, \"ENLocal_APP_CONFIG\".\"Key\" o2, \"ENLocal_APP_CONFIG\".\"Value\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_q3o_Local_APP_CONFIG\" \"ENLocal_APP_CONFIG\"";
fromAndWhereSql += " WHERE (\"ENLocal_APP_CONFIG\".\"Application\" = :qpstApplication)";
argsList.add("qpstApplication", /*TEXT*/ 0, qpstApplication);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, App_Config_MBPModel.Local_APP_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_APP_CONFIGAttr",
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
return getAnyLocalAPPCONFIGByKeyVar.value;
});
};
return getAnyLocalAPPCONFIGByKeyAggr().then(function () {
// Aggregate: GetLocalSYNCCONTROLS
var getLocalSYNCCONTROLSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = App_Config_MBPModel.Local_SYNC_CONTROLRecordList;
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
selectSql += "\"ENLocal_SYNC_CONTROL\".\"Id\" o0, \"ENLocal_SYNC_CONTROL\".\"IsSynchronizing\" o1";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_q3o_Local_SYNC_CONTROL\" \"ENLocal_SYNC_CONTROL\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, App_Config_MBPModel.Local_SYNC_CONTROLRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SYNC_CONTROLAttr",
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
return getLocalSYNCCONTROLSVar.value;
});
};
return getLocalSYNCCONTROLSAggr();
}).then(function () {
// Any Config for App?
return OS.Flow.executeSequence(function () {
if((!(!(getAnyLocalAPPCONFIGByKeyVar.value.listOut.isEmpty)))) {
// IsSynchronizing?
return OS.Flow.executeSequence(function () {
if((!(getLocalSYNCCONTROLSVar.value.listOut.getCurrent(callContext.iterationContext).local_SYNC_CONTROLAttr.isSynchronizingAttr))) {
// Execute Action: GetAllMobileConfigs_MBP
return App_Config_MBPController.default.getAllMobileConfigs_MBP$Action(vars.value.applicationInLocal, true, false, callContext).then(function () {
// Aggregate: GetLocalAPPCONFIGByKeyAfterUpdate
var getLocalAPPCONFIGByKeyAfterUpdateAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = App_Config_MBPModel.Local_APP_CONFIGRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstApplication = vars.value.applicationInLocal;
var qpstKey = vars.value.keyInLocal;

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
selectSql += "\"ENLocal_APP_CONFIG\".\"Id\" o0, \"ENLocal_APP_CONFIG\".\"Application\" o1, \"ENLocal_APP_CONFIG\".\"Key\" o2, \"ENLocal_APP_CONFIG\".\"Value\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_q3o_Local_APP_CONFIG\" \"ENLocal_APP_CONFIG\"";
fromAndWhereSql += " WHERE (\"ENLocal_APP_CONFIG\".\"Key\" = :qpstKey) AND (\"ENLocal_APP_CONFIG\".\"Application\" = :qpstApplication)";
argsList.add("qpstKey", /*TEXT*/ 0, qpstKey);
argsList.add("qpstApplication", /*TEXT*/ 0, qpstApplication);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, App_Config_MBPModel.Local_APP_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_APP_CONFIGAttr",
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
return getLocalAPPCONFIGByKeyAfterUpdateVar.value;
});
};
return getLocalAPPCONFIGByKeyAfterUpdateAggr();
}).then(function () {
// Value = GetLocalAPPCONFIGByKeyAfterUpdate.List.Current.Local_APP_CONFIG.Value
outVars.value.valueOut = getLocalAPPCONFIGByKeyAfterUpdateVar.value.listOut.getCurrent(callContext.iterationContext).local_APP_CONFIGAttr.valueAttr;
}).then(function () {
if((!(getLocalAPPCONFIGByKeyAfterUpdateVar.value.listOut.isEmpty))) {
return OS.Flow.returnAsync(outVars.value);

} else {
// Execute Action: LogMessage3
OS.SystemActions.logMessage((((("Missing Mobile App Config Application [" + vars.value.applicationInLocal) + "] Key [") + vars.value.keyInLocal) + "]"), "MissingConfig", callContext);
return OS.Flow.returnAsync(outVars.value);

}

});
}

});
}

});
}).then(function () {
// Execute Action: GetConfigValueAsTextNoCache
return controller.getConfigValueAsTextNoCache$ServerAction(vars.value.applicationInLocal, vars.value.keyInLocal, false, callContext).then(function (value) {
getConfigValueAsTextNoCacheVar.value = value;
});
}).then(function () {
// Found?
return OS.Flow.executeSequence(function () {
if((((getConfigValueAsTextNoCacheVar.value.returnValueOut) !== ("")))) {
// Value = GetConfigValueAsTextNoCache.ReturnValue
outVars.value.valueOut = getConfigValueAsTextNoCacheVar.value.returnValueOut;
// IsSynchronizing?
return OS.Flow.executeSequence(function () {
if((!(getLocalSYNCCONTROLSVar.value.listOut.getCurrent(callContext.iterationContext).local_SYNC_CONTROLAttr.isSynchronizingAttr))) {
// LocalAppConfig
// LocalAppConfig.Application = Application
vars.value.localAppConfigVar.applicationAttr = vars.value.applicationInLocal;
// LocalAppConfig.Key = Key
vars.value.localAppConfigVar.keyAttr = vars.value.keyInLocal;
// LocalAppConfig.Value = GetConfigValueAsTextNoCache.ReturnValue
vars.value.localAppConfigVar.valueAttr = getConfigValueAsTextNoCacheVar.value.returnValueOut;
// Execute Action: CreateLocal_APP_CONFIG
return App_Config_MBPModel.entities.Local_APP_CONFIG.create(App_Config_MBPModel.Local_APP_CONFIGRecord.fromStructure(vars.value.localAppConfigVar), callContext).then(function (value) {
createLocal_APP_CONFIGVar.value = value;
});
}

});
} else {
// Execute Action: LogMessage2
OS.SystemActions.logMessage((((("Missing new Mobile App Config Application [" + vars.value.applicationInLocal) + "] Key [") + vars.value.keyInLocal) + "]"), "MissingConfig", callContext);
}

});
});
} else {
// Value = GetLocalAPPCONFIGByKey.List.Current.Local_APP_CONFIG.Value
outVars.value.valueOut = getLocalAPPCONFIGByKeyVar.value.listOut.getCurrent(callContext.iterationContext).local_APP_CONFIGAttr.valueAttr;
}

});
});
}).catch(function (ex) {
OS.Logger.trace("GetConfigValueAsText_MBP.GetConfigValueAsText_MBP", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage((((("Key: " + vars.value.keyInLocal) + "\r\n") + " Message: ") + outVars.value.valueOut), "APP_CONFIG", callContext);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = App_Config_MBPController.default;
App_Config_MBPController.default.constructor.registerVariableGroupType("App_Config_MBP.GetConfigValueAsText_MBP$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Key",
attrName: "keyInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalAppConfig",
attrName: "localAppConfigVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new App_Config_MBPModel.Local_APP_CONFIGRec();
},
complexType: App_Config_MBPModel.Local_APP_CONFIGRec
}]);
App_Config_MBPController.default.constructor.registerVariableGroupType("App_Config_MBP.GetConfigValueAsText_MBP$outVars", [{
name: "Value",
attrName: "valueOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
App_Config_MBPController.default.clientActionProxies.getConfigValueAsText_MBP$Action = function (applicationIn, keyIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
keyIn = (keyIn === undefined) ? "" : keyIn;
return controller.executeActionInsideJSNode(App_Config_MBPController.default.getConfigValueAsText_MBP$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(keyIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Value: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.valueOut, OS.Types.Text, true)
};
});
};
});

define("App_Config_MBP.controller$GetConfigValuesByPrefixKey_MBP", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.controller", "App_Config_MBP.model$Local_APP_CONFIGRecordList", "App_Config_MBP.model$ConfigList", "App_Config_MBP.model$Local_APP_CONFIGRec", "App_Config_MBP.entities"], function (exports, OutSystems, App_Config_MBPModel, App_Config_MBPController) {
var OS = OutSystems.Internal;
App_Config_MBPController.default.getConfigValuesByPrefixKey_MBP$Action = function (applicationIn, prefixIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("App_Config_MBP.GetConfigValuesByPrefixKey_MBP$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.prefixInLocal = prefixIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLocalAPPCONFIGByKeyVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(App_Config_MBPModel.Local_APP_CONFIGRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("App_Config_MBP.GetConfigValuesByPrefixKey_MBP$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalAPPCONFIGByKey
var getLocalAPPCONFIGByKeyAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = App_Config_MBPModel.Local_APP_CONFIGRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstApplication = vars.value.applicationInLocal;
var qpstPrefix = vars.value.prefixInLocal;

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
selectSql += "\"ENLocal_APP_CONFIG\".\"Id\" o0, \"ENLocal_APP_CONFIG\".\"Application\" o1, \"ENLocal_APP_CONFIG\".\"Key\" o2, \"ENLocal_APP_CONFIG\".\"Value\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_q3o_Local_APP_CONFIG\" \"ENLocal_APP_CONFIG\"";
fromAndWhereSql += " WHERE (\"ENLocal_APP_CONFIG\".\"Key\" LIKE (:qpstPrefix || '%')) AND (\"ENLocal_APP_CONFIG\".\"Application\" = :qpstApplication)";
orderBySql += " ORDER BY \"ENLocal_APP_CONFIG\".\"Value\" ASC ";
argsList.add("qpstPrefix", /*TEXT*/ 0, qpstPrefix);
argsList.add("qpstApplication", /*TEXT*/ 0, qpstApplication);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, App_Config_MBPModel.Local_APP_CONFIGRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_APP_CONFIGAttr",
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
return getLocalAPPCONFIGByKeyVar.value;
});
};
return getLocalAPPCONFIGByKeyAggr().then(function () {
// AppConfigs = GetLocalAPPCONFIGByKey.List
outVars.value.appConfigsOut = OS.DataTypes.JSConversions.typeConvertRecordList(getLocalAPPCONFIGByKeyVar.value.listOut, new App_Config_MBPModel.ConfigList(), function (source, target) {
target.keyAttr = source.local_APP_CONFIGAttr.keyAttr;
target.valueAttr = source.local_APP_CONFIGAttr.valueAttr;
return target;
});
});
}).catch(function (ex) {
OS.Logger.trace("GetConfigValuesByPrefixKey_MBP.GetConfigValuesByPrefixKey_MBP", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(("KePrefixy: " + vars.value.prefixInLocal), "APP_CONFIG", callContext);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = App_Config_MBPController.default;
App_Config_MBPController.default.constructor.registerVariableGroupType("App_Config_MBP.GetConfigValuesByPrefixKey_MBP$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Prefix",
attrName: "prefixInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
App_Config_MBPController.default.constructor.registerVariableGroupType("App_Config_MBP.GetConfigValuesByPrefixKey_MBP$outVars", [{
name: "AppConfigs",
attrName: "appConfigsOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new App_Config_MBPModel.ConfigList();
},
complexType: App_Config_MBPModel.ConfigList
}]);
App_Config_MBPController.default.clientActionProxies.getConfigValuesByPrefixKey_MBP$Action = function (applicationIn, prefixIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
prefixIn = (prefixIn === undefined) ? "" : prefixIn;
return controller.executeActionInsideJSNode(App_Config_MBPController.default.getConfigValuesByPrefixKey_MBP$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(prefixIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AppConfigs: actionResults.appConfigsOut
};
});
};
});

define("App_Config_MBP.controller$ServerAction.GetAllMobileConfigValues", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.controller", "App_Config_MBP.model$ConfigRecordList"], function (exports, OutSystems, App_Config_MBPModel, App_Config_MBPController) {
var OS = OutSystems.Internal;
App_Config_MBPController.default.getAllMobileConfigValues$ServerAction = function (applicationIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("GetAllMobileConfigValues", "screenservices/App_Config_MBP/ActionGetAllMobileConfigValues", "689UmJzbGeFGFxqmGRUeOA", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("App_Config_MBP$ActionGetAllMobileConfigValues"))();
executeServerActionResult.returnValuesOut = App_Config_MBPModel.ConfigRecordList.fromJS(outputs.ReturnValues);
return executeServerActionResult;
});
};
App_Config_MBPController.default.constructor.registerVariableGroupType("App_Config_MBP$ActionGetAllMobileConfigValues", [{
name: "ReturnValues",
attrName: "returnValuesOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new App_Config_MBPModel.ConfigRecordList();
},
complexType: App_Config_MBPModel.ConfigRecordList
}]);
});
define("App_Config_MBP.controller$ServerAction.GetConfigValueAsTextNoCache", ["exports", "OutSystems", "App_Config_MBP.model", "App_Config_MBP.controller"], function (exports, OutSystems, App_Config_MBPModel, App_Config_MBPController) {
var OS = OutSystems.Internal;
App_Config_MBPController.default.getConfigValueAsTextNoCache$ServerAction = function (applicationIn, keyIn, mandatoryIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
Key: OS.DataTypes.JSConversions.basicTypeToJS(keyIn, OS.Types.Text),
Mandatory: OS.DataTypes.JSConversions.basicTypeToJS(mandatoryIn, OS.Types.Boolean)
};
return controller.callServerAction("GetConfigValueAsTextNoCache", "screenservices/App_Config_MBP/ActionGetConfigValueAsTextNoCache", "heE11LOgrSReD8qv1Vh+4A", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("App_Config_MBP$rssespaceapp_config_ActionGetConfigValueAsTextNoCache"))();
executeServerActionResult.returnValueOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.ReturnValue, OS.Types.Text);
return executeServerActionResult;
});
};
App_Config_MBPController.default.constructor.registerVariableGroupType("App_Config_MBP$rssespaceapp_config_ActionGetConfigValueAsTextNoCache", [{
name: "ReturnValue",
attrName: "returnValueOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("App_Config_MBP.controller", ["exports", "OutSystems", "App_Config_MBP.model"], function (exports, OutSystems, App_Config_MBPModel) {
var OS = OutSystems.Internal;
var App_Config_MBPController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return App_Config_MBPController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
App_Config_MBPController.default = new Controller();
});
