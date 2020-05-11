define("ACCOUNTINFO_MBP.controller$Cache_DisableByService", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRecordList", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.cache_DisableByService$Action = function (cacheServiceIdIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_DisableByService$vars"))());
vars.value.cacheServiceIdInLocal = cacheServiceIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLocalCACHECONTROLSERVIcesByCacheServiceIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_DisableByService$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalCACHECONTROLSERVIcesByCacheServiceId
var getLocalCACHECONTROLSERVIcesByCacheServiceIdAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstCacheServiceId = vars.value.cacheServiceIdInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5";
} else {
selectSql += "\"ENLocal_CACHE_CONTROL_SERVI\".\"Id\" o0, \"ENLocal_CACHE_CONTROL_SERVI\".\"CacheServiceId\" o1, \"ENLocal_CACHE_CONTROL_SERVI\".\"CacheControlId\" o2, \"ENLocal_CACHE_CONTROL_SERVI\".\"LastUpdateAt\" o3, \"ENLocal_CACHE_CONTROL_SERVI\".\"ExpirationDate\" o4, \"ENLocal_CACHE_CONTROL_SERVI\".\"LastCacheCheck\" o5";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_CACHE_CONTROL_SERVICES\" \"ENLocal_CACHE_CONTROL_SERVI\"";
fromAndWhereSql += " WHERE (\"ENLocal_CACHE_CONTROL_SERVI\".\"CacheServiceId\" = :qpstCacheServiceId)";
argsList.add("qpstCacheServiceId", /*TEXT*/ 0, qpstCacheServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_CACHE_CONTROL_SERVICESAttr",
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
return getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value;
});
};
return getLocalCACHECONTROLSERVIcesByCacheServiceIdAggr().then(function () {
// Foreach GetLocalCACHECONTROLSERVIcesByCacheServiceId.List
callContext.iterationContext.registerIterationStart(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut);
}).then(function () {
return OS.Flow.tryFinally(function () {
var getLocalCACHECONTROLSERVIcesByCacheServiceIdIterator = callContext.iterationContext.getIterator(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut);
var getLocalCACHECONTROLSERVIcesByCacheServiceIdIndex = 0;
return OS.Flow.whileAsync(function () {
return ((getLocalCACHECONTROLSERVIcesByCacheServiceIdIndex < getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.length));
}, function () {
getLocalCACHECONTROLSERVIcesByCacheServiceIdIterator.currentRowNumber = getLocalCACHECONTROLSERVIcesByCacheServiceIdIndex;
// Execute Action: DeleteLocal_CACHE_CONTROL_SERVICES
return ACCOUNTINFO_MBPModel.entities.Local_CACHE_CONTROL_SERVICES.delete(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getItem(getLocalCACHECONTROLSERVIcesByCacheServiceIdIndex.valueOf()).local_CACHE_CONTROL_SERVICESAttr.idAttr, callContext).then(function () {
getLocalCACHECONTROLSERVIcesByCacheServiceIdIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut);
});
});
}).catch(function (ex) {
OS.Logger.trace("Cache.Cache_DisableByService", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// SetOutput
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_DisableByService$vars", [{
name: "CacheServiceId",
attrName: "cacheServiceIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_DisableByService$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.cache_DisableByService$Action = function (cacheServiceIdIn) {
cacheServiceIdIn = (cacheServiceIdIn === undefined) ? "" : cacheServiceIdIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.cache_DisableByService$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(cacheServiceIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$Cache_ValidationByService", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "Essentials_MOB.controller", "Essentials_MOB.controller$CheckNetworkStatus", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$Essentials_MOB", "ACCOUNTINFO_MBP.controller$Cache_DisableByService", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRecord", "ACCOUNTINFO_MBP.controller$ServerAction.Cache_GetCacheControlId", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRec", "ACCOUNTINFO_MBP.model$Local_CACHE_CONTROL_SERVICESRecordList", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController, Essentials_MOBController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.cache_ValidationByService$Action = function (cacheServiceNameIn, toRefreshIn, applicationIn, cacheValidationIntervalIn, refreshTokenIn, validateItemCacheExpirationDateIn, itemCacheExpirationDateIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_ValidationByService$vars"))());
vars.value.cacheServiceNameInLocal = cacheServiceNameIn;
vars.value.toRefreshInLocal = toRefreshIn;
vars.value.applicationInLocal = applicationIn;
vars.value.cacheValidationIntervalInLocal = cacheValidationIntervalIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
vars.value.validateItemCacheExpirationDateInLocal = validateItemCacheExpirationDateIn;
vars.value.itemCacheExpirationDateInLocal = itemCacheExpirationDateIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var cache_GetCacheControlIdVar = new OS.DataTypes.VariableHolder();
var checkNetworkStatusVar = new OS.DataTypes.VariableHolder();
var cache_DisableByServiceVar = new OS.DataTypes.VariableHolder();
var createOrUpdateLocal_CACHE_CONTROL_SERVICESVar = new OS.DataTypes.VariableHolder();
var getLocalCACHECONTROLSERVIcesByCacheServiceIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_ValidationByService$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((vars.value.refreshTokenInLocal === ""))) {
// Execute Action: LogMessage_NoRefreshToken
OS.SystemActions.logMessage(((((((((((((((((((((((((((((("Refresh token is empty" + "\r\n") + "INPUT") + "\r\n") + "CacheServiceId[") + vars.value.cacheServiceNameInLocal) + "]") + "\r\n") + "ToRefresh[") + (vars.value.toRefreshInLocal ? "True" : "False")) + "]") + "\r\n") + "ValidateItemCacheExpirationDate[") + (vars.value.validateItemCacheExpirationDateInLocal ? "True" : "False")) + "]") + "\r\n") + "ItemCacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(vars.value.itemCacheExpirationDateInLocal)) + "]") + "\r\n") + "OUTPUT") + "\r\n") + "useCache[") + (outVars.value.useCacheOut ? "True" : "False")) + "]") + "\r\n") + "CacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(outVars.value.cacheExpirationDateOut)) + "]") + "\r\n"), "CacheControl", callContext);
} else {
// Aggregate: GetLocalCACHECONTROLSERVIcesByCacheServiceId
var getLocalCACHECONTROLSERVIcesByCacheServiceIdAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstCacheServiceId = vars.value.cacheServiceNameInLocal;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5";
} else {
selectSql += "\"ENLocal_CACHE_CONTROL_SERVI\".\"Id\" o0, \"ENLocal_CACHE_CONTROL_SERVI\".\"CacheServiceId\" o1, \"ENLocal_CACHE_CONTROL_SERVI\".\"CacheControlId\" o2, \"ENLocal_CACHE_CONTROL_SERVI\".\"LastUpdateAt\" o3, \"ENLocal_CACHE_CONTROL_SERVI\".\"ExpirationDate\" o4, \"ENLocal_CACHE_CONTROL_SERVI\".\"LastCacheCheck\" o5";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_CACHE_CONTROL_SERVICES\" \"ENLocal_CACHE_CONTROL_SERVI\"";
fromAndWhereSql += " WHERE (\"ENLocal_CACHE_CONTROL_SERVI\".\"CacheServiceId\" = :qpstCacheServiceId)";
argsList.add("qpstCacheServiceId", /*TEXT*/ 0, qpstCacheServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_CACHE_CONTROL_SERVICESAttr",
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
return getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value;
});
};
return getLocalCACHECONTROLSERVIcesByCacheServiceIdAggr().then(function () {
// CacheExpirationDate = GetLocalCACHECONTROLSERVIcesByCacheServiceId.List.Current.Local_CACHE_CONTROL_SERVICES.ExpirationDate
outVars.value.cacheExpirationDateOut = getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.expirationDateAttr;
// Execute Action: CheckNetworkStatus
return Essentials_MOBController.default.checkNetworkStatus$Action(callContext).then(function (value) {
checkNetworkStatusVar.value = value;
});
}).then(function () {
// Invalid Cache?
return OS.Flow.executeSequence(function () {
if(((checkNetworkStatusVar.value.isOnlineOut && (((getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.expirationDateAttr.equals(OS.BuiltinFunctions.nullDate()) || OS.BuiltinFunctions.currDateTime().gte(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.expirationDateAttr)) || vars.value.toRefreshInLocal) || (((OS.BuiltinFunctions.diffMinutes(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.lastCacheCheckAttr, OS.BuiltinFunctions.currDateTime()) > vars.value.cacheValidationIntervalInLocal) && (vars.value.cacheValidationIntervalInLocal > 0)) || (vars.value.validateItemCacheExpirationDateInLocal && OS.BuiltinFunctions.currDateTime().gte(vars.value.itemCacheExpirationDateInLocal))))))) {
// useCache = False
outVars.value.useCacheOut = false;
// Execute Action: Cache_GetCacheControlId
return controller.cache_GetCacheControlId$ServerAction(vars.value.refreshTokenInLocal, vars.value.applicationInLocal, vars.value.cacheServiceNameInLocal, vars.value.toRefreshInLocal, callContext).then(function (value) {
cache_GetCacheControlIdVar.value = value;
}).then(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(((((((("CacheControlId:" + OS.BuiltinFunctions.longIntegerToText(cache_GetCacheControlIdVar.value.cacheControlIdOut)) + "Success:") + (cache_GetCacheControlIdVar.value.successOut ? "True" : "False")) + "MinutesToInvalidateCache:") + (cache_GetCacheControlIdVar.value.minutesToInvalidateCacheOut).toString()) + "isAtive:") + (cache_GetCacheControlIdVar.value.isActiveOut ? "True" : "False")), "CacheControl", callContext);
}).then(function () {
// Invalid Cache Id?
return OS.Flow.executeSequence(function () {
if((cache_GetCacheControlIdVar.value.cacheControlIdOut.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())))) {
// Execute Action: Cache_DisableByService
return ACCOUNTINFO_MBPController.default.cache_DisableByService$Action(vars.value.cacheServiceNameInLocal, callContext).then(function (value) {
cache_DisableByServiceVar.value = value;
}).then(function () {
// Execute Action: LogMessage_CacheNotConfigured
OS.SystemActions.logMessage(((((((((((((((((((((((((((((("Cache not configured" + "\r\n") + "INPUT") + "\r\n") + "CacheServiceId[") + vars.value.cacheServiceNameInLocal) + "]") + "\r\n") + "ToRefresh[") + (vars.value.toRefreshInLocal ? "True" : "False")) + "]") + "\r\n") + "ValidateItemCacheExpirationDate[") + (vars.value.validateItemCacheExpirationDateInLocal ? "True" : "False")) + "]") + "\r\n") + "ItemCacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(vars.value.itemCacheExpirationDateInLocal)) + "]") + "\r\n") + "OUTPUT") + "\r\n") + "useCache[") + (outVars.value.useCacheOut ? "True" : "False")) + "]") + "\r\n") + "CacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(outVars.value.cacheExpirationDateOut)) + "]") + "\r\n"), "CacheControl", callContext);
});
} else {
// CacheControl exists?
if((!(cache_GetCacheControlIdVar.value.cacheControlIdOut.equals(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.cacheControlIdAttr)))) {
// GetLocalCACHECONTROLSERVIcesByCacheServiceId.List.Current.Local_CACHE_CONTROL_SERVICES.CacheServiceId = CacheServiceName
getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.cacheServiceIdAttr = vars.value.cacheServiceNameInLocal;
// GetLocalCACHECONTROLSERVIcesByCacheServiceId.List.Current.Local_CACHE_CONTROL_SERVICES.CacheControlId = Cache_GetCacheControlId.CacheControlId
getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.cacheControlIdAttr = cache_GetCacheControlIdVar.value.cacheControlIdOut;
// GetLocalCACHECONTROLSERVIcesByCacheServiceId.List.Current.Local_CACHE_CONTROL_SERVICES.LastUpdateAt = CurrDateTime
getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.lastUpdateAtAttr = OS.BuiltinFunctions.currDateTime();
// GetLocalCACHECONTROLSERVIcesByCacheServiceId.List.Current.Local_CACHE_CONTROL_SERVICES.ExpirationDate = AddMinutes
getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.expirationDateAttr = OS.BuiltinFunctions.addMinutes(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.lastUpdateAtAttr, cache_GetCacheControlIdVar.value.minutesToInvalidateCacheOut);
// CacheExpirationDate = GetLocalCACHECONTROLSERVIcesByCacheServiceId.List.Current.Local_CACHE_CONTROL_SERVICES.ExpirationDate
outVars.value.cacheExpirationDateOut = getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.expirationDateAttr;
}

// LastCacheCheck
// GetLocalCACHECONTROLSERVIcesByCacheServiceId.List.Current.Local_CACHE_CONTROL_SERVICES.LastCacheCheck = CurrDateTime
getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr.lastCacheCheckAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: CreateOrUpdateLocal_CACHE_CONTROL_SERVICES
return ACCOUNTINFO_MBPModel.entities.Local_CACHE_CONTROL_SERVICES.createOrUpdate(ACCOUNTINFO_MBPModel.Local_CACHE_CONTROL_SERVICESRecord.fromStructure(getLocalCACHECONTROLSERVIcesByCacheServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CACHE_CONTROL_SERVICESAttr), callContext).then(function (value) {
createOrUpdateLocal_CACHE_CONTROL_SERVICESVar.value = value;
}).then(function () {
// Execute Action: LogMessage_CacheCreateOrUpdate
OS.SystemActions.logMessage(((((((((((((((((((((((((((((("Cache created or updated" + "\r\n") + "INPUT") + "\r\n") + "CacheServiceId[") + vars.value.cacheServiceNameInLocal) + "]") + "\r\n") + "ToRefresh[") + (vars.value.toRefreshInLocal ? "True" : "False")) + "]") + "\r\n") + "ValidateItemCacheExpirationDate[") + (vars.value.validateItemCacheExpirationDateInLocal ? "True" : "False")) + "]") + "\r\n") + "ItemCacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(vars.value.itemCacheExpirationDateInLocal)) + "]") + "\r\n") + "OUTPUT") + "\r\n") + "useCache[") + (outVars.value.useCacheOut ? "True" : "False")) + "]") + "\r\n") + "CacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(outVars.value.cacheExpirationDateOut)) + "]") + "\r\n"), "CacheControl", callContext);
});
}

});
});
} else {
// useCache = True
outVars.value.useCacheOut = true;
// Execute Action: LogMessage_CacheIsValid
OS.SystemActions.logMessage(((((((((((((((((((((((((((((("Cache is valid" + "\r\n") + "INPUT") + "\r\n") + "CacheServiceId[") + vars.value.cacheServiceNameInLocal) + "]") + "\r\n") + "ToRefresh[") + (vars.value.toRefreshInLocal ? "True" : "False")) + "]") + "\r\n") + "ValidateItemCacheExpirationDate[") + (vars.value.validateItemCacheExpirationDateInLocal ? "True" : "False")) + "]") + "\r\n") + "ItemCacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(vars.value.itemCacheExpirationDateInLocal)) + "]") + "\r\n") + "OUTPUT") + "\r\n") + "useCache[") + (outVars.value.useCacheOut ? "True" : "False")) + "]") + "\r\n") + "CacheExpirationDate[") + OS.BuiltinFunctions.dateTimeToText(outVars.value.cacheExpirationDateOut)) + "]") + "\r\n"), "CacheControl", callContext);
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("Cache.Cache_ValidationByService", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// useCache = False
outVars.value.useCacheOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_ValidationByService$vars", [{
name: "CacheServiceName",
attrName: "cacheServiceNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ToRefresh",
attrName: "toRefreshInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheValidationInterval",
attrName: "cacheValidationIntervalInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ValidateItemCacheExpirationDate",
attrName: "validateItemCacheExpirationDateInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ItemCacheExpirationDate",
attrName: "itemCacheExpirationDateInLocal",
mandatory: false,
dataType: OS.Types.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Cache.Cache_ValidationByService$outVars", [{
name: "useCache",
attrName: "useCacheOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "CacheExpirationDate",
attrName: "cacheExpirationDateOut",
mandatory: false,
dataType: OS.Types.DateTime,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.cache_ValidationByService$Action = function (cacheServiceNameIn, toRefreshIn, applicationIn, cacheValidationIntervalIn, refreshTokenIn, validateItemCacheExpirationDateIn, itemCacheExpirationDateIn) {
cacheServiceNameIn = (cacheServiceNameIn === undefined) ? "" : cacheServiceNameIn;
toRefreshIn = (toRefreshIn === undefined) ? false : toRefreshIn;
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
cacheValidationIntervalIn = (cacheValidationIntervalIn === undefined) ? 0 : cacheValidationIntervalIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
validateItemCacheExpirationDateIn = (validateItemCacheExpirationDateIn === undefined) ? false : validateItemCacheExpirationDateIn;
itemCacheExpirationDateIn = (itemCacheExpirationDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : itemCacheExpirationDateIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.cache_ValidationByService$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(cacheServiceNameIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(toRefreshIn, OS.Types.Boolean), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(cacheValidationIntervalIn, OS.Types.Integer), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(validateItemCacheExpirationDateIn, OS.Types.Boolean), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(itemCacheExpirationDateIn, OS.Types.DateTime)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
useCache: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.useCacheOut, OS.Types.Boolean, true),
CacheExpirationDate: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.cacheExpirationDateOut, OS.Types.DateTime, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$CheckNOSCard", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecordList", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.checkNOSCard$Action = function (userIdIn, numberDaysIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.CheckNOSCard$vars"))());
vars.value.userIdInLocal = userIdIn;
vars.value.numberDaysInLocal = numberDaysIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLocalCLIENTCARDSByUserIDVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.CheckNOSCard$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalCLIENTCARDSByUserID
var getLocalCLIENTCARDSByUserIDAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpdaCurrDate = OS.BuiltinFunctions.currDate();
var qpinNumberDays = vars.value.numberDaysInLocal;
var qpstUserID = vars.value.userIdInLocal;

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
selectSql += "\"ENLocal_CLIENT_CARD\".\"Id\" o0, \"ENLocal_CLIENT_CARD\".\"ClientName\" o1, \"ENLocal_CLIENT_CARD\".\"CardNumber\" o2, \"ENLocal_CLIENT_CARD\".\"UserID\" o3, \"ENLocal_CLIENT_CARD\".\"ClientNumber\" o4, \"ENLocal_CLIENT_CARD\".\"UpdateDateTime\" o5, \"ENLocal_CLIENT_CARD\".\"IsDelegated\" o6, \"ENLocal_CLIENT_CARD\".\"CanBeDelegated\" o7, \"ENLocal_CLIENT_CARD\".\"RegisterDateTime\" o8, \"ENLocal_CLIENT_CARD\".\"QRCardID\" o9, \"ENLocal_CLIENT_CARD\".\"AccountId\" o10, \"ENLocal_CLIENT_CARD\".\"StatusCode\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_CLIENT_CARD\" \"ENLocal_CLIENT_CARD\"";
fromAndWhereSql += " WHERE (\"ENLocal_CLIENT_CARD\".\"UserID\" = :qpstUserID) AND ((CAST((JulianDay(DateTime(:qpdaCurrDate)) - JulianDay(\"ENLocal_CLIENT_CARD\".\"RegisterDateTime\")) AS INTEGER)) <= :qpinNumberDays)";
orderBySql += " ORDER BY \"ENLocal_CLIENT_CARD\".\"ClientName\" ASC ";
argsList.add("qpstUserID", /*TEXT*/ 0, qpstUserID);
argsList.add("qpdaCurrDate", /*DATE*/ 7, qpdaCurrDate);
argsList.add("qpinNumberDays", /*INTEGER*/ 3, qpinNumberDays);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_CLIENT_CARDAttr",
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
return getLocalCLIENTCARDSByUserIDVar.value;
});
};
return getLocalCLIENTCARDSByUserIDAggr().then(function () {
// HasCards = notGetLocalCLIENTCARDSByUserID.List.Empty
outVars.value.hasCardsOut = !(getLocalCLIENTCARDSByUserIDVar.value.listOut.isEmpty);
});
}).catch(function (ex) {
OS.Logger.trace("Card.CheckNOSCard", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.CheckNOSCard$vars", [{
name: "UserId",
attrName: "userIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "NumberDays",
attrName: "numberDaysInLocal",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.CheckNOSCard$outVars", [{
name: "HasCards",
attrName: "hasCardsOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.checkNOSCard$Action = function (userIdIn, numberDaysIn) {
userIdIn = (userIdIn === undefined) ? "" : userIdIn;
numberDaysIn = (numberDaysIn === undefined) ? 0 : numberDaysIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.checkNOSCard$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(userIdIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(numberDaysIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
HasCards: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.hasCardsOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$ClearCache_LoyaltyPoints", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.clearCache_LoyaltyPoints$Action = function (callContext) {
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DeleteAllLocal_LOYALTY_POINTS
return ACCOUNTINFO_MBPModel.entities.Local_LOYALTY_POINTS.deleteAll(callContext);
}).then(function () {
return ;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.clientActionProxies.clearCache_LoyaltyPoints$Action = function () {
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.clearCache_LoyaltyPoints$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("ACCOUNTINFO_MBP.controller$CONST_GetCustAccountAndLoyaltyDetails_Parameter", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.cONST_GetCustAccountAndLoyaltyDetails_Parameter$Action = function (callContext) {
callContext = controller.callContext(callContext);
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_Selfcare.CONST_GetCustAccountAndLoyaltyDetails_Parameter$outVars"))());
// LMS_CUST_INLMS = "LMS_CUST_INLMS"
outVars.value.lMS_CUST_INLMSOut = "LMS_CUST_INLMS";
// LMS_CUST_NOT_EXIST = "LMS_CUST_NOT_EXIST"
outVars.value.lMS_CUST_NOT_EXISTOut = "LMS_CUST_NOT_EXIST";
// LMS_CUST_DEACT = "LMS_CUST_DEACT"
outVars.value.lMS_CUST_DEACTOut = "LMS_CUST_DEACT";
// LMS_CUST_NOT_PAY_RESP = "LMS_CUST_NOT_PAY_RESP"
outVars.value.lMS_CUST_NOT_PAY_RESPOut = "LMS_CUST_NOT_PAY_RESP";
// LMS_CUST_NO_PROG_POINTS = "LMS_CUST_NO_PROG_POINTS"
outVars.value.lMS_CUST_NO_PROG_POINTSOut = "LMS_CUST_NO_PROG_POINTS";
// LMS_CUST_NO_CRITERIA_POINTS = "LMS_CUST_NO_CRITERIA_POINTS"
outVars.value.lMS_CUST_NO_CRITERIA_POINTSOut = "LMS_CUST_NO_CRITERIA_POINTS";
// LMS_CUST_MM_INV_TAXNUM = "LMS_CUST_MM_INV_TAXNUM"
outVars.value.lMS_CUST_MM_INV_TAXNUMOut = "LMS_CUST_MM_INV_TAXNUM";
// LMS_CUST_NOTMM_NOT_IDENT = "LMS_CUST_NOTMM_NOT_IDENT"
outVars.value.lMS_CUST_NOTMM_NOT_IDENTOut = "LMS_CUST_NOTMM_NOT_IDENT";
// LMS_CUST_MM_NOT_IDENT = "LMS_CUST_MM_NOT_IDENT"
outVars.value.lMS_CUST_MM_NOT_IDENTOut = "LMS_CUST_MM_NOT_IDENT";
return outVars.value;
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_Selfcare.CONST_GetCustAccountAndLoyaltyDetails_Parameter$outVars", [{
name: "LMS_CUST_INLMS",
attrName: "lMS_CUST_INLMSOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_NOT_EXIST",
attrName: "lMS_CUST_NOT_EXISTOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_DEACT",
attrName: "lMS_CUST_DEACTOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_NOT_PAY_RESP",
attrName: "lMS_CUST_NOT_PAY_RESPOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_NO_PROG_POINTS",
attrName: "lMS_CUST_NO_PROG_POINTSOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_NO_CRITERIA_POINTS",
attrName: "lMS_CUST_NO_CRITERIA_POINTSOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_MM_INV_TAXNUM",
attrName: "lMS_CUST_MM_INV_TAXNUMOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_NOTMM_NOT_IDENT",
attrName: "lMS_CUST_NOTMM_NOT_IDENTOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LMS_CUST_MM_NOT_IDENT",
attrName: "lMS_CUST_MM_NOT_IDENTOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.cONST_GetCustAccountAndLoyaltyDetails_Parameter$Action = function () {
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.cONST_GetCustAccountAndLoyaltyDetails_Parameter$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LMS_CUST_INLMS: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_INLMSOut, OS.Types.Text, true),
LMS_CUST_NOT_EXIST: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_NOT_EXISTOut, OS.Types.Text, true),
LMS_CUST_DEACT: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_DEACTOut, OS.Types.Text, true),
LMS_CUST_NOT_PAY_RESP: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_NOT_PAY_RESPOut, OS.Types.Text, true),
LMS_CUST_NO_PROG_POINTS: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_NO_PROG_POINTSOut, OS.Types.Text, true),
LMS_CUST_NO_CRITERIA_POINTS: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_NO_CRITERIA_POINTSOut, OS.Types.Text, true),
LMS_CUST_MM_INV_TAXNUM: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_MM_INV_TAXNUMOut, OS.Types.Text, true),
LMS_CUST_NOTMM_NOT_IDENT: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_NOTMM_NOT_IDENTOut, OS.Types.Text, true),
LMS_CUST_MM_NOT_IDENT: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.lMS_CUST_MM_NOT_IDENTOut, OS.Types.Text, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$CreateOrUpdateLocal_CLIENT_CARD_Logic", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecord", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.createOrUpdateLocal_CLIENT_CARD_Logic$Action = function (sourceIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_CLIENT_CARD_Logic$vars"))());
vars.value.sourceInLocal = sourceIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createOrUpdateLocal_CLIENT_CARDVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_CLIENT_CARD_Logic$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CreateOrUpdateLocal_CLIENT_CARD
return ACCOUNTINFO_MBPModel.entities.Local_CLIENT_CARD.createOrUpdate(ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecord.fromStructure(vars.value.sourceInLocal), callContext).then(function (value) {
createOrUpdateLocal_CLIENT_CARDVar.value = value;
}).then(function () {
// Id = CreateOrUpdateLocal_CLIENT_CARD.Id
outVars.value.idOut = createOrUpdateLocal_CLIENT_CARDVar.value.idOut;
});
}).catch(function (ex) {
OS.Logger.trace("CRUD.CreateOrUpdateLocal_CLIENT_CARD_Logic", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_CLIENT_CARD_Logic$vars", [{
name: "Source",
attrName: "sourceInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec();
},
complexType: ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_CLIENT_CARD_Logic$outVars", [{
name: "Id",
attrName: "idOut",
mandatory: false,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.createOrUpdateLocal_CLIENT_CARD_Logic$Action = function (sourceIn) {
sourceIn = (sourceIn === undefined) ? new ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec() : sourceIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.createOrUpdateLocal_CLIENT_CARD_Logic$Action.bind(controller, sourceIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Id: actionResults.idOut,
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$CreateOrUpdateLocal_QR_CARD_Logic", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_QR_CARDRecord", "ACCOUNTINFO_MBP.model$Local_QR_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.createOrUpdateLocal_QR_CARD_Logic$Action = function (sourceIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_QR_CARD_Logic$vars"))());
vars.value.sourceInLocal = sourceIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createOrUpdateLocal_QR_CARDVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_QR_CARD_Logic$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CreateOrUpdateLocal_QR_CARD
return ACCOUNTINFO_MBPModel.entities.Local_QR_CARD.createOrUpdate(ACCOUNTINFO_MBPModel.Local_QR_CARDRecord.fromStructure(vars.value.sourceInLocal), callContext).then(function (value) {
createOrUpdateLocal_QR_CARDVar.value = value;
}).then(function () {
// Id = CreateOrUpdateLocal_QR_CARD.Id
outVars.value.idOut = createOrUpdateLocal_QR_CARDVar.value.idOut;
});
}).catch(function (ex) {
OS.Logger.trace("CRUD.CreateOrUpdateLocal_QR_CARD_Logic", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_QR_CARD_Logic$vars", [{
name: "Source",
attrName: "sourceInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.Local_QR_CARDRec();
},
complexType: ACCOUNTINFO_MBPModel.Local_QR_CARDRec
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_QR_CARD_Logic$outVars", [{
name: "Id",
attrName: "idOut",
mandatory: false,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.createOrUpdateLocal_QR_CARD_Logic$Action = function (sourceIn) {
sourceIn = (sourceIn === undefined) ? new ACCOUNTINFO_MBPModel.Local_QR_CARDRec() : sourceIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.createOrUpdateLocal_QR_CARD_Logic$Action.bind(controller, sourceIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Id: actionResults.idOut,
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$CreateOrUpdateLocal_SIM_INFO_Logic", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_SIM_INFORecord", "ACCOUNTINFO_MBP.model$Local_SIM_INFORecordList", "ACCOUNTINFO_MBP.model$Local_SIM_INFORec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.createOrUpdateLocal_SIM_INFO_Logic$Action = function (serviceIdIn, sIMNumberIn, pINIn, pUKIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_SIM_INFO_Logic$vars"))());
vars.value.serviceIdInLocal = serviceIdIn;
vars.value.sIMNumberInLocal = sIMNumberIn;
vars.value.pINInLocal = pINIn;
vars.value.pUKInLocal = pUKIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createOrUpdateLocal_SIM_INFOVar = new OS.DataTypes.VariableHolder();
var getLocalSIMINFOESByServiceIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_SIM_INFORecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_SIM_INFO_Logic$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((!((vars.value.serviceIdInLocal === "")))) {
// Aggregate: GetLocalSIMINFOESByServiceId
var getLocalSIMINFOESByServiceIdAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_SIM_INFORecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstServiceId = vars.value.serviceIdInLocal;

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
selectSql += "\"ENLocal_SIM_INFO\".\"Id\" o0, \"ENLocal_SIM_INFO\".\"ServiceId\" o1, \"ENLocal_SIM_INFO\".\"SIMNumber\" o2, \"ENLocal_SIM_INFO\".\"PIN\" o3, \"ENLocal_SIM_INFO\".\"PUK\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_SIM_INFO\" \"ENLocal_SIM_INFO\"";
fromAndWhereSql += " WHERE (\"ENLocal_SIM_INFO\".\"ServiceId\" = :qpstServiceId)";
orderBySql += " ORDER BY \"ENLocal_SIM_INFO\".\"ServiceId\" ASC ";
argsList.add("qpstServiceId", /*TEXT*/ 0, qpstServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_SIM_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SIM_INFOAttr",
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
return getLocalSIMINFOESByServiceIdVar.value;
});
};
return getLocalSIMINFOESByServiceIdAggr().then(function () {
// GetLocalSIMINFOESByServiceId.List.Current.Local_SIM_INFO.ServiceId = ServiceId
getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_SIM_INFOAttr.serviceIdAttr = vars.value.serviceIdInLocal;
// GetLocalSIMINFOESByServiceId.List.Current.Local_SIM_INFO.SIMNumber = SIMNumber
getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_SIM_INFOAttr.sIMNumberAttr = vars.value.sIMNumberInLocal;
// GetLocalSIMINFOESByServiceId.List.Current.Local_SIM_INFO.PIN = PIN
getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_SIM_INFOAttr.pINAttr = vars.value.pINInLocal;
// GetLocalSIMINFOESByServiceId.List.Current.Local_SIM_INFO.PUK = PUK
getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_SIM_INFOAttr.pUKAttr = vars.value.pUKInLocal;
// Execute Action: CreateOrUpdateLocal_SIM_INFO
return ACCOUNTINFO_MBPModel.entities.Local_SIM_INFO.createOrUpdate(getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext), callContext).then(function (value) {
createOrUpdateLocal_SIM_INFOVar.value = value;
});
}).then(function () {
// id = CreateOrUpdateLocal_SIM_INFO.Id
outVars.value.idOut = createOrUpdateLocal_SIM_INFOVar.value.idOut;
});
}

});
}).catch(function (ex) {
OS.Logger.trace("CRUD.CreateOrUpdateLocal_SIM_INFO_Logic", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_SIM_INFO_Logic$vars", [{
name: "ServiceId",
attrName: "serviceIdInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SIMNumber",
attrName: "sIMNumberInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PIN",
attrName: "pINInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PUK",
attrName: "pUKInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.CRUD.CreateOrUpdateLocal_SIM_INFO_Logic$outVars", [{
name: "id",
attrName: "idOut",
mandatory: false,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.createOrUpdateLocal_SIM_INFO_Logic$Action = function (serviceIdIn, sIMNumberIn, pINIn, pUKIn) {
serviceIdIn = (serviceIdIn === undefined) ? "" : serviceIdIn;
sIMNumberIn = (sIMNumberIn === undefined) ? "" : sIMNumberIn;
pINIn = (pINIn === undefined) ? "" : pINIn;
pUKIn = (pUKIn === undefined) ? "" : pUKIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.createOrUpdateLocal_SIM_INFO_Logic$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(serviceIdIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(sIMNumberIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(pINIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(pUKIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
id: actionResults.idOut,
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$CreateSR", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "App_Config_MBP.controller", "App_Config_MBP.controller$GetConfigValueAsText_MBP", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$App_Config_MBP", "ACCOUNTINFO_MBP.controller$ServerAction.SetSiebelRequest_BP"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController, App_Config_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.createSR$Action = function (applicationIn, endDateInIn, refreshTokenIn, associationIdIn, serviceAccountIdIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.CreateSR$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.endDateInInLocal = endDateInIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
vars.value.associationIdInLocal = associationIdIn;
vars.value.serviceAccountIdInLocal = serviceAccountIdIn;
var setSiebelRequest_BPVar = new OS.DataTypes.VariableHolder();
var getFPNumberOfMonthsVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetFPNumberOfMonths
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(vars.value.applicationInLocal, "FP_NUMBEROFMONTHS", callContext).then(function (value) {
getFPNumberOfMonthsVar.value = value;
}).then(function () {
// NumberOfMonths
// NumberOfMonths = TextToInteger
vars.value.numberOfMonthsVar = OS.BuiltinFunctions.textToInteger(getFPNumberOfMonthsVar.value.valueOut);
}).then(function () {
// Date is null? 
if((!(vars.value.endDateInInLocal.equals(OS.BuiltinFunctions.nullDate())))) {
// Date in past? 
if((!(vars.value.endDateInInLocal.lt(OS.BuiltinFunctions.currDate())))) {
// Date In Future
if((vars.value.endDateInInLocal.gt(OS.BuiltinFunctions.currDate()))) {
// <  Number of Months?
if((!(OS.BuiltinFunctions.round(OS.BuiltinFunctions.integerToDecimal(OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDate(), vars.value.endDateInInLocal)).div(OS.BuiltinFunctions.integerToDecimal(30)), 2).lt(OS.BuiltinFunctions.integerToDecimal(vars.value.numberOfMonthsVar))))) {
return OS.Flow.returnAsync();

}

} else {
return OS.Flow.returnAsync();

}

}

}

// Execute Action: SetSiebelRequest_BP
return controller.setSiebelRequest_BP$ServerAction(vars.value.applicationInLocal, vars.value.refreshTokenInLocal, vars.value.associationIdInLocal, "CreateSR", vars.value.serviceAccountIdInLocal, callContext).then(function (value) {
setSiebelRequest_BPVar.value = value;
});
});
}).then(function () {
return ;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.CreateSR$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "EndDateIn",
attrName: "endDateInInLocal",
mandatory: true,
dataType: OS.Types.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssociationId",
attrName: "associationIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ServiceAccountId",
attrName: "serviceAccountIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "NumberOfMonths",
attrName: "numberOfMonthsVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.createSR$Action = function (applicationIn, endDateInIn, refreshTokenIn, associationIdIn, serviceAccountIdIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
endDateInIn = (endDateInIn === undefined) ? OS.DataTypes.DateTime.defaultValue : endDateInIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
associationIdIn = (associationIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : associationIdIn;
serviceAccountIdIn = (serviceAccountIdIn === undefined) ? "" : serviceAccountIdIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.createSR$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(endDateInIn, OS.Types.Date), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(associationIdIn, OS.Types.LongInteger), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(serviceAccountIdIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("ACCOUNTINFO_MBP.controller$DeleteAllCards", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.model$Local_QR_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.deleteAllCards$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DeleteAllLocal_CLIENT_CARD
return ACCOUNTINFO_MBPModel.entities.Local_CLIENT_CARD.deleteAll(callContext).then(function () {
// Execute Action: DeleteAllLocal_QR_CARD
return ACCOUNTINFO_MBPModel.entities.Local_QR_CARD.deleteAll(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Card.DeleteAllCards", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function () {
return ;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.clientActionProxies.deleteAllCards$Action = function () {
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.deleteAllCards$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetCacheServiceID", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getCacheServiceID$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Cache.GetCacheServiceID$outVars"))());
try {// SetOutput
// CacheServices.AppConfig = "getAPPConfig"
outVars.value.cacheServicesOut.appConfigAttr = "getAPPConfig";
// CacheServices.NOSCard = "getNOSCard"
outVars.value.cacheServicesOut.nOSCardAttr = "getNOSCard";
// CacheServices.PINPUK = "getPINPUK"
outVars.value.cacheServicesOut.pINPUKAttr = "getPINPUK";
// CacheServices.BalanceConfig = "getBalanceConfig"
outVars.value.cacheServicesOut.balanceConfigAttr = "getBalanceConfig";
// CacheServices.BalanceInfo = "getBalanceInfo"
outVars.value.cacheServicesOut.balanceInfoAttr = "getBalanceInfo";
// CacheServices.HomepageBalanceInfo = "getHomepageBalanceInfo"
outVars.value.cacheServicesOut.homepageBalanceInfoAttr = "getHomepageBalanceInfo";
} catch (ex) {
(function () {
OS.Logger.trace("Cache.GetCacheServiceID", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Cache.GetCacheServiceID$outVars", [{
name: "CacheServices",
attrName: "cacheServicesOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERec();
},
complexType: ACCOUNTINFO_MBPModel.STR_CACHE_SERVICERec
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getCacheServiceID$Action = function () {
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getCacheServiceID$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CacheServices: actionResults.cacheServicesOut
};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetCustomerAccountAndLoyaltyDetails_MBP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.controller$CONST_GetCustAccountAndLoyaltyDetails_Parameter", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRecord", "ACCOUNTINFO_MBP.model$outputMessage24Record", "ACCOUNTINFO_MBP.controller$ServerAction.GetCustomerAccountAndLoyaltyDetails_BP", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRec", "ACCOUNTINFO_MBP.model$CustomerAccount_out6RecordList", "ACCOUNTINFO_MBP.model$Parameter30RecordList", "ACCOUNTINFO_MBP.model$Local_LOYALTY_POINTSRecordList", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getCustomerAccountAndLoyaltyDetails_MBP$Action = function (applicationIn, refreshTokenIn, custCodeIn, associationIdIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_Selfcare.GetCustomerAccountAndLoyaltyDetails_MBP$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
vars.value.custCodeInLocal = custCodeIn;
vars.value.associationIdInLocal = associationIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getCustomerAccountAndLoyaltyDetails_BPVar = new OS.DataTypes.VariableHolder();
var cONST_GetCustAccountAndLoyaltyDetails_ParameterVar = new OS.DataTypes.VariableHolder();
var createOrUpdateLocal_LOYALTY_POINTSVar = new OS.DataTypes.VariableHolder();
var createOrUpdateLocal_LOYALTY_POINTS2Var = new OS.DataTypes.VariableHolder();
var getLocalLoyaltyPointsByCustCodeClientNumber_EmptyVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecordList))());
var getLocalLoyaltyPointsByCustCodeClientNumberVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_Selfcare.GetCustomerAccountAndLoyaltyDetails_MBP$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CONST_GetCustAccountAndLoyaltyDetails_Parameter
cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value = ACCOUNTINFO_MBPController.default.cONST_GetCustAccountAndLoyaltyDetails_Parameter$Action(callContext);

// Execute Action: GetCustomerAccountAndLoyaltyDetails_BP
return controller.getCustomerAccountAndLoyaltyDetails_BP$ServerAction(OS.BuiltinFunctions.integerToLongInteger(vars.value.associationIdInLocal), vars.value.refreshTokenInLocal, "Pontos", true, vars.value.custCodeInLocal, vars.value.applicationInLocal, callContext).then(function (value) {
getCustomerAccountAndLoyaltyDetails_BPVar.value = value;
}).then(function () {
// is empty?
return OS.Flow.executeSequence(function () {
if((getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.isEmpty)) {
// Aggregate: GetLocalLoyaltyPointsByCustCodeClientNumber_Empty
var getLocalLoyaltyPointsByCustCodeClientNumber_EmptyAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstCustCode_ClientNumber = vars.value.custCodeInLocal;

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
selectSql += "\"ENLocal_LOYALTY_POINTS\".\"Id\" o0, \"ENLocal_LOYALTY_POINTS\".\"CustCode_ClientNumber\" o1, \"ENLocal_LOYALTY_POINTS\".\"IsError\" o2, \"ENLocal_LOYALTY_POINTS\".\"IsEligible\" o3, \"ENLocal_LOYALTY_POINTS\".\"IsMissingCustInfo\" o4, \"ENLocal_LOYALTY_POINTS\".\"ShowInfo\" o5, \"ENLocal_LOYALTY_POINTS\".\"Amount\" o6, \"ENLocal_LOYALTY_POINTS\".\"ExpirationDate\" o7, \"ENLocal_LOYALTY_POINTS\".\"ExpiringAmount\" o8";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_LOYALTY_POINTS\" \"ENLocal_LOYALTY_POINTS\"";
fromAndWhereSql += " WHERE (\"ENLocal_LOYALTY_POINTS\".\"CustCode_ClientNumber\" = :qpstCustCode_ClientNumber)";
argsList.add("qpstCustCode_ClientNumber", /*TEXT*/ 0, qpstCustCode_ClientNumber);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_LOYALTY_POINTSAttr",
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
return getLocalLoyaltyPointsByCustCodeClientNumber_EmptyVar.value;
});
};
return getLocalLoyaltyPointsByCustCodeClientNumber_EmptyAggr().then(function () {
// LoyaltyPointsRec
// GetLocalLoyaltyPointsByCustCodeClientNumber_Empty.List.Current.Local_LOYALTY_POINTS.CustCode_ClientNumber = CustCode
getLocalLoyaltyPointsByCustCodeClientNumber_EmptyVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.custCode_ClientNumberAttr = vars.value.custCodeInLocal;
// GetLocalLoyaltyPointsByCustCodeClientNumber_Empty.List.Current.Local_LOYALTY_POINTS.IsError = True
getLocalLoyaltyPointsByCustCodeClientNumber_EmptyVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.isErrorAttr = true;
// GetLocalLoyaltyPointsByCustCodeClientNumber_Empty.List.Current.Local_LOYALTY_POINTS.ShowInfo = False
getLocalLoyaltyPointsByCustCodeClientNumber_EmptyVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.showInfoAttr = false;
// Execute Action: CreateOrUpdateLocal_LOYALTY_POINTS2
return ACCOUNTINFO_MBPModel.entities.Local_LOYALTY_POINTS.createOrUpdate(ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecord.fromStructure(getLocalLoyaltyPointsByCustCodeClientNumber_EmptyVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr), callContext).then(function (value) {
createOrUpdateLocal_LOYALTY_POINTS2Var.value = value;
});
});
} else {
// Foreach GetCustomerAccountAndLoyaltyDetails_BP.outputMessage.outputMessage24.DataOutput
callContext.iterationContext.registerIterationStart(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr);
return OS.Flow.tryFinally(function () {
var dataOutputIterator = callContext.iterationContext.getIterator(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr);
var dataOutputIndex = 0;
return OS.Flow.whileAsync(function () {
return ((dataOutputIndex < getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.length));
}, function () {
dataOutputIterator.currentRowNumber = dataOutputIndex;
// reset flags
// IsError = False
vars.value.isErrorVar = false;
// IsEligible = False
vars.value.isEligibleVar = false;
// IsNotEligible = False
vars.value.isNotEligibleVar = false;
// IsMissingCustInfo = False
vars.value.isMissingCustInfoVar = false;
// ShowInfo = False
vars.value.showInfoVar = false;
// Loyalty.Parameter
// Foreach GetCustomerAccountAndLoyaltyDetails_BP.outputMessage.outputMessage24.DataOutput.Current.CustomerAccount_out6.Loyalty.Loyalty2.Parameter
callContext.iterationContext.registerIterationStart(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr);
try {var parameterIterator = callContext.iterationContext.getIterator(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr);
var parameterIndex = 0;
while (((parameterIndex < getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.length))) {
parameterIterator.currentRowNumber = parameterIndex;
// Parameter.Name
if(((getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getItem(parameterIndex.valueOf()).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_INLMSOut))) {
// IsEligible = True
vars.value.isEligibleVar = true;
} else {
if(((getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_NOT_EXISTOut) || (getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_DEACTOut))) {
// IsError = True
vars.value.isErrorVar = true;
} else {
if((((getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_NOT_PAY_RESPOut) || (getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_NO_PROG_POINTSOut)) || (getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_NO_CRITERIA_POINTSOut))) {
// IsNotEligible = True
vars.value.isNotEligibleVar = true;
} else {
if((((getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_MM_INV_TAXNUMOut) || (getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_NOTMM_NOT_IDENTOut)) || (getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getCurrent(callContext.iterationContext).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr.getCurrent(callContext.iterationContext).parameter30Attr.nameAttr === cONST_GetCustAccountAndLoyaltyDetails_ParameterVar.value.lMS_CUST_MM_NOT_IDENTOut))) {
// IsMissingCustInfo = True
vars.value.isMissingCustInfoVar = true;
}

}

}

}

parameterIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.parameterAttr);
}

// IsEligible, ShowInfo
// IsEligible = IsNotEligible = False and IsEligible = True
vars.value.isEligibleVar = ((vars.value.isNotEligibleVar === false) && (vars.value.isEligibleVar === true));
// ShowInfo = IsError = False and IsMissingCustInfo = False and IsEligible = True
vars.value.showInfoVar = (((vars.value.isErrorVar === false) && (vars.value.isMissingCustInfoVar === false)) && (vars.value.isEligibleVar === true));
// Aggregate: GetLocalLoyaltyPointsByCustCodeClientNumber
var getLocalLoyaltyPointsByCustCodeClientNumberAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstCustCode_ClientNumber = vars.value.custCodeInLocal;

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
selectSql += "\"ENLocal_LOYALTY_POINTS\".\"Id\" o0, \"ENLocal_LOYALTY_POINTS\".\"CustCode_ClientNumber\" o1, \"ENLocal_LOYALTY_POINTS\".\"IsError\" o2, \"ENLocal_LOYALTY_POINTS\".\"IsEligible\" o3, \"ENLocal_LOYALTY_POINTS\".\"IsMissingCustInfo\" o4, \"ENLocal_LOYALTY_POINTS\".\"ShowInfo\" o5, \"ENLocal_LOYALTY_POINTS\".\"Amount\" o6, \"ENLocal_LOYALTY_POINTS\".\"ExpirationDate\" o7, \"ENLocal_LOYALTY_POINTS\".\"ExpiringAmount\" o8";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_LOYALTY_POINTS\" \"ENLocal_LOYALTY_POINTS\"";
fromAndWhereSql += " WHERE (\"ENLocal_LOYALTY_POINTS\".\"CustCode_ClientNumber\" = :qpstCustCode_ClientNumber)";
argsList.add("qpstCustCode_ClientNumber", /*TEXT*/ 0, qpstCustCode_ClientNumber);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_LOYALTY_POINTSAttr",
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
return getLocalLoyaltyPointsByCustCodeClientNumberVar.value;
});
};
return getLocalLoyaltyPointsByCustCodeClientNumberAggr().then(function () {
// Length(ExpirationDate) = 10
if(((OS.BuiltinFunctions.length(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.expirationDateAttr) === 10))) {
// ExpirationDateText = Substr + "-" + Substr + "-" + Substr
vars.value.expirationDateTextVar = ((((OS.BuiltinFunctions.substr(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.expirationDateAttr, 6, 4) + "-") + OS.BuiltinFunctions.substr(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.expirationDateAttr, 3, 2)) + "-") + OS.BuiltinFunctions.substr(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.expirationDateAttr, 0, 2));
// ExpirationDate = If
vars.value.expirationDateVar = ((OS.BuiltinFunctions.textToDateValidate(vars.value.expirationDateTextVar)) ? (OS.BuiltinFunctions.textToDate(vars.value.expirationDateTextVar)) : (OS.BuiltinFunctions.nullDate()));
} else {
// ExpirationDate = NullDate
vars.value.expirationDateVar = OS.BuiltinFunctions.nullDate();
}

// LoyaltyPointsRec
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.CustCode_ClientNumber = CustCode
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.custCode_ClientNumberAttr = vars.value.custCodeInLocal;
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.IsError = IsError
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.isErrorAttr = vars.value.isErrorVar;
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.IsEligible = IsEligible
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.isEligibleAttr = vars.value.isEligibleVar;
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.IsMissingCustInfo = IsMissingCustInfo
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.isMissingCustInfoAttr = vars.value.isMissingCustInfoVar;
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.ShowInfo = ShowInfo
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.showInfoAttr = vars.value.showInfoVar;
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.Amount = If
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.amountAttr = ((OS.BuiltinFunctions.textToLongIntegerValidate(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.amountAttr)) ? (OS.BuiltinFunctions.textToLongInteger(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.amountAttr)) : (OS.BuiltinFunctions.integerToLongInteger(0)));
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.ExpirationDate = ExpirationDate
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.expirationDateAttr = vars.value.expirationDateVar;
// GetLocalLoyaltyPointsByCustCodeClientNumber.List.Current.Local_LOYALTY_POINTS.ExpiringAmount = If
getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr.expiringAmountAttr = ((OS.BuiltinFunctions.textToLongIntegerValidate(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.expiringAmountAttr)) ? (OS.BuiltinFunctions.textToLongInteger(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr.getItem(dataOutputIndex.valueOf()).customerAccount_out6Attr.loyaltyAttr.loyalty2Attr.loyaltyPointsAttr.loyaltyPointsAttr.expiringAmountAttr)) : (OS.BuiltinFunctions.integerToLongInteger(0)));
// Execute Action: CreateOrUpdateLocal_LOYALTY_POINTS
return ACCOUNTINFO_MBPModel.entities.Local_LOYALTY_POINTS.createOrUpdate(ACCOUNTINFO_MBPModel.Local_LOYALTY_POINTSRecord.fromStructure(getLocalLoyaltyPointsByCustCodeClientNumberVar.value.listOut.getCurrent(callContext.iterationContext).local_LOYALTY_POINTSAttr), callContext).then(function (value) {
createOrUpdateLocal_LOYALTY_POINTSVar.value = value;
});
}).then(function () {
dataOutputIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(getCustomerAccountAndLoyaltyDetails_BPVar.value.outputMessageOut.outputMessage24Attr.dataOutputAttr);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("API_Selfcare.GetCustomerAccountAndLoyaltyDetails_MBP", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
// Message = AllExceptions.ExceptionMessage
outVars.value.messageOut = allExceptionsVar.value.exceptionMessageAttr;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_Selfcare.GetCustomerAccountAndLoyaltyDetails_MBP$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CustCode",
attrName: "custCodeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssociationId",
attrName: "associationIdInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "IsError",
attrName: "isErrorVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsEligible",
attrName: "isEligibleVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsNotEligible",
attrName: "isNotEligibleVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsMissingCustInfo",
attrName: "isMissingCustInfoVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ShowInfo",
attrName: "showInfoVar",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ExpirationDate",
attrName: "expirationDateVar",
mandatory: false,
dataType: OS.Types.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}, {
name: "ExpirationDateText",
attrName: "expirationDateTextVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_Selfcare.GetCustomerAccountAndLoyaltyDetails_MBP$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getCustomerAccountAndLoyaltyDetails_MBP$Action = function (applicationIn, refreshTokenIn, custCodeIn, associationIdIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
custCodeIn = (custCodeIn === undefined) ? "" : custCodeIn;
associationIdIn = (associationIdIn === undefined) ? 0 : associationIdIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getCustomerAccountAndLoyaltyDetails_MBP$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(custCodeIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(associationIdIn, OS.Types.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true),
Message: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.messageOut, OS.Types.Text, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetDataInPrettyFormat", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$TextRecordList", "ACCOUNTINFO_MBP.controller$ServerAction.String_Split"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getDataInPrettyFormat$Action = function (dataInIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetDataInPrettyFormat$vars"))());
vars.value.dataInInLocal = dataInIn;
var string_SplitVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetDataInPrettyFormat$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: String_Split
return controller.string_Split$ServerAction(vars.value.dataInInLocal, "/", callContext).then(function (value) {
string_SplitVar.value = value;
}).then(function () {
// DateOutput
// DateOut = NewDate
outVars.value.dateOutOut = OS.BuiltinFunctions.newDate(OS.BuiltinFunctions.textToInteger(string_SplitVar.value.listOut.getItem(2).textAttr.valueAttr), OS.BuiltinFunctions.textToInteger(string_SplitVar.value.listOut.getItem(0).textAttr.valueAttr), OS.BuiltinFunctions.textToInteger(string_SplitVar.value.listOut.getItem(1).textAttr.valueAttr));
});
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetDataInPrettyFormat$vars", [{
name: "DataIn",
attrName: "dataInInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetDataInPrettyFormat$outVars", [{
name: "DateOut",
attrName: "dateOutOut",
mandatory: false,
dataType: OS.Types.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getDataInPrettyFormat$Action = function (dataInIn) {
dataInIn = (dataInIn === undefined) ? "" : dataInIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getDataInPrettyFormat$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(dataInIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DateOut: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.dateOutOut, OS.Types.Date, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetFedelizationPeriodConfigs", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "App_Config_MBP.controller", "App_Config_MBP.controller$GetConfigValueAsText_MBP", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$App_Config_MBP", "ACCOUNTINFO_MBP.model$STR_FPRec"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController, App_Config_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getFedelizationPeriodConfigs$Action = function (applicationIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetFedelizationPeriodConfigs$vars"))());
vars.value.applicationInLocal = applicationIn;
var getFPCardTitleVar = new OS.DataTypes.VariableHolder();
var getFPTitleValueVar = new OS.DataTypes.VariableHolder();
var getFPCardDescriptionVar = new OS.DataTypes.VariableHolder();
var getFPTitleDateVar = new OS.DataTypes.VariableHolder();
var getDisableCardVar = new OS.DataTypes.VariableHolder();
var getFPDescriptionPopUpVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetFedelizationPeriodConfigs$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetFPCardTitle
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(vars.value.applicationInLocal, "FP_CARDTITLE", callContext).then(function (value) {
getFPCardTitleVar.value = value;
}).then(function () {
// Execute Action: GetFPCardDescription
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(vars.value.applicationInLocal, "FP_CARDDESCRIPTION", callContext).then(function (value) {
getFPCardDescriptionVar.value = value;
});
}).then(function () {
// Execute Action: GetFPDescriptionPopUp
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(vars.value.applicationInLocal, "FP_DESCRIPTION_POP_UP", callContext).then(function (value) {
getFPDescriptionPopUpVar.value = value;
});
}).then(function () {
// Execute Action: GetFPTitleDate
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(vars.value.applicationInLocal, "FP_TITLE_DATE_POP_UP", callContext).then(function (value) {
getFPTitleDateVar.value = value;
});
}).then(function () {
// Execute Action: GetFPTitleValue
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(vars.value.applicationInLocal, "FP_TITLE_VALUE_POP_UP", callContext).then(function (value) {
getFPTitleValueVar.value = value;
});
}).then(function () {
// Execute Action: GetDisableCard
return App_Config_MBPController.default.getConfigValueAsText_MBP$Action(vars.value.applicationInLocal, "FP_DISABLECARD", callContext).then(function (value) {
getDisableCardVar.value = value;
});
}).then(function () {
// Set Ouput
// OutputData.FP_CARDTITLE = GetFPCardTitle.Value
outVars.value.outputDataOut.fP_CARDTITLEAttr = getFPCardTitleVar.value.valueOut;
// OutputData.FP_CARDDESCRIPTION = GetFPCardDescription.Value
outVars.value.outputDataOut.fP_CARDDESCRIPTIONAttr = getFPCardDescriptionVar.value.valueOut;
// OutputData.FP_DESCRIPTION_POP_UP = GetFPDescriptionPopUp.Value
outVars.value.outputDataOut.fP_DESCRIPTION_POP_UPAttr = getFPDescriptionPopUpVar.value.valueOut;
// OutputData.FP_TITLE_DATE_POP_UP = GetFPTitleDate.Value
outVars.value.outputDataOut.fP_TITLE_DATE_POP_UPAttr = getFPTitleDateVar.value.valueOut;
// OutputData.FP_TITLE_VALUE_POP_UP = GetFPTitleValue.Value
outVars.value.outputDataOut.fP_TITLE_VALUE_POP_UPAttr = getFPTitleValueVar.value.valueOut;
// OutputData.FP_DISABLECARD = GetDisableCard.Value
outVars.value.outputDataOut.fP_DISABLECARDAttr = getDisableCardVar.value.valueOut;
});
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetFedelizationPeriodConfigs$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.FidelizationPeriod.GetFedelizationPeriodConfigs$outVars", [{
name: "OutputData",
attrName: "outputDataOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.STR_FPRec();
},
complexType: ACCOUNTINFO_MBPModel.STR_FPRec
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getFedelizationPeriodConfigs$Action = function (applicationIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getFedelizationPeriodConfigs$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
OutputData: actionResults.outputDataOut
};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetNOSCardAccountId", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecordList", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getNOSCardAccountId$Action = function (cardIdIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardAccountId$vars"))());
vars.value.cardIdInLocal = cardIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLocalCLIENTCARDByIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardAccountId$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalCLIENTCARDById
var getLocalCLIENTCARDByIdAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qploId = vars.value.cardIdInLocal;

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
selectSql += "\"ENLocal_CLIENT_CARD\".\"Id\" o0, \"ENLocal_CLIENT_CARD\".\"ClientName\" o1, \"ENLocal_CLIENT_CARD\".\"CardNumber\" o2, \"ENLocal_CLIENT_CARD\".\"UserID\" o3, \"ENLocal_CLIENT_CARD\".\"ClientNumber\" o4, \"ENLocal_CLIENT_CARD\".\"UpdateDateTime\" o5, \"ENLocal_CLIENT_CARD\".\"IsDelegated\" o6, \"ENLocal_CLIENT_CARD\".\"CanBeDelegated\" o7, \"ENLocal_CLIENT_CARD\".\"RegisterDateTime\" o8, \"ENLocal_CLIENT_CARD\".\"QRCardID\" o9, \"ENLocal_CLIENT_CARD\".\"AccountId\" o10, \"ENLocal_CLIENT_CARD\".\"StatusCode\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_CLIENT_CARD\" \"ENLocal_CLIENT_CARD\"";
fromAndWhereSql += " WHERE ";
if (qploId != 0) {
fromAndWhereSql += "((\"ENLocal_CLIENT_CARD\".\"Id\" = :qploId) AND (\"ENLocal_CLIENT_CARD\".\"Id\" IS NOT NULL))";
argsList.add("qploId", /*LONGINTEGER*/ 4, qploId);
} else {
fromAndWhereSql += "(\"ENLocal_CLIENT_CARD\".\"Id\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_CLIENT_CARDAttr",
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
return getLocalCLIENTCARDByIdVar.value;
});
};
return getLocalCLIENTCARDByIdAggr().then(function () {
// AccountId
// AccountId = GetLocalCLIENTCARDById.List.Current.Local_CLIENT_CARD.AccountId
outVars.value.accountIdOut = getLocalCLIENTCARDByIdVar.value.listOut.getCurrent(callContext.iterationContext).local_CLIENT_CARDAttr.accountIdAttr;
});
}).catch(function (ex) {
OS.Logger.trace("Card.GetNOSCardAccountId", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardAccountId$vars", [{
name: "CardId",
attrName: "cardIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardAccountId$outVars", [{
name: "AccountId",
attrName: "accountIdOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getNOSCardAccountId$Action = function (cardIdIn) {
cardIdIn = (cardIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : cardIdIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getNOSCardAccountId$Action.bind(controller, cardIdIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AccountId: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.accountIdOut, OS.Types.Text, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetNOSCards", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$STR_CLIENT_CARDList", "ACCOUNTINFO_MBP.controller$ServerAction.SearchLoyaltyCard_BP", "ACCOUNTINFO_MBP.controller$Cache_ValidationByService", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.controller$SetClientCardInfo", "ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERec", "ACCOUNTINFO_MBP.controller$GetCacheServiceID", "ACCOUNTINFO_MBP.model$STR_NOS_CARDList", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecordList", "ACCOUNTINFO_MBP.model$Local_QR_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getNOSCards$Action = function (userIDIn, applicationIn, cacheValidationIntervalIn, refreshTokenIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCards$vars"))());
vars.value.userIDInLocal = userIDIn;
vars.value.applicationInLocal = applicationIn;
vars.value.cacheValidationIntervalInLocal = cacheValidationIntervalIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var searchLoyaltyCardVar = new OS.DataTypes.VariableHolder();
var cache_ValidationByServiceVar = new OS.DataTypes.VariableHolder();
var setClientCardInfoVar = new OS.DataTypes.VariableHolder();
var getLocalCardVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCards$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalCard
var getLocalCardAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstUserID = vars.value.userIDInLocal;

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
selectSql += "\"ENLocal_CLIENT_CARD\".\"Id\" o0, \"ENLocal_CLIENT_CARD\".\"ClientName\" o1, \"ENLocal_CLIENT_CARD\".\"CardNumber\" o2, \"ENLocal_CLIENT_CARD\".\"UserID\" o3, \"ENLocal_CLIENT_CARD\".\"ClientNumber\" o4, \"ENLocal_CLIENT_CARD\".\"UpdateDateTime\" o5, \"ENLocal_CLIENT_CARD\".\"IsDelegated\" o6, \"ENLocal_CLIENT_CARD\".\"CanBeDelegated\" o7, \"ENLocal_CLIENT_CARD\".\"RegisterDateTime\" o8, \"ENLocal_CLIENT_CARD\".\"QRCardID\" o9, \"ENLocal_CLIENT_CARD\".\"AccountId\" o10, \"ENLocal_CLIENT_CARD\".\"StatusCode\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_CLIENT_CARD\" \"ENLocal_CLIENT_CARD\"";
fromAndWhereSql += " WHERE (\"ENLocal_CLIENT_CARD\".\"UserID\" = :qpstUserID)";
argsList.add("qpstUserID", /*TEXT*/ 0, qpstUserID);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_CLIENT_CARDAttr",
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
return getLocalCardVar.value;
});
};
return getLocalCardAggr().then(function () {
// Execute Action: Cache_ValidationByService
return ACCOUNTINFO_MBPController.default.cache_ValidationByService$Action(ACCOUNTINFO_MBPController.default.getCacheServiceID$Action(callContext.withoutIterationContext()).cacheServicesOut.nOSCardAttr, false, vars.value.applicationInLocal, vars.value.cacheValidationIntervalInLocal, vars.value.refreshTokenInLocal, false, OS.DataTypes.DateTime.defaultValue, callContext).then(function (value) {
cache_ValidationByServiceVar.value = value;
});
}).then(function () {
// Empty or InvalidCache
return OS.Flow.executeSequence(function () {
if(((getLocalCardVar.value.listOut.isEmpty || !(cache_ValidationByServiceVar.value.useCacheOut)))) {
// Execute Action: SearchLoyaltyCard
return controller.searchLoyaltyCard_BP$ServerAction("SearchLoyaltyCard", vars.value.userIDInLocal, 300, 300, vars.value.applicationInLocal, vars.value.refreshTokenInLocal, callContext).then(function (value) {
searchLoyaltyCardVar.value = value;
}).then(function () {
// SearchCardsSuccess?
return OS.Flow.executeSequence(function () {
if((searchLoyaltyCardVar.value.successOut)) {
// Execute Action: DeleteAllLocal_CLIENT_CARD
return ACCOUNTINFO_MBPModel.entities.Local_CLIENT_CARD.deleteAll(callContext).then(function () {
// Execute Action: DeleteAllLocal_QR_CARD
return ACCOUNTINFO_MBPModel.entities.Local_QR_CARD.deleteAll(callContext);
}).then(function () {
// IsCardListEmpty?
return OS.Flow.executeSequence(function () {
if((searchLoyaltyCardVar.value.cardListOut.isEmpty)) {
return OS.Flow.returnAsync(outVars.value);

} else {
// SearchLoyaltyCard
// Foreach SearchLoyaltyCard.CardList
callContext.iterationContext.registerIterationStart(searchLoyaltyCardVar.value.cardListOut);
return OS.Flow.tryFinally(function () {
var cardListIterator = callContext.iterationContext.getIterator(searchLoyaltyCardVar.value.cardListOut);
var cardListIndexMax = searchLoyaltyCardVar.value.cardListOut.length;
var cardListIndex = 0;
return OS.Flow.whileAsync(function () {
return (((cardListIndex < searchLoyaltyCardVar.value.cardListOut.length)) && (cardListIndexMax > 0));
}, function () {
cardListIterator.currentRowNumber = cardListIndex;
// SetVariables
// CardNumber = SearchLoyaltyCard.CardList.Current.CardNumber
vars.value.cardNumberVar = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).cardNumberAttr;
// TempLocalCard.Id = NullIdentifier
vars.value.tempLocalCardVar.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// SetTempLocalCard
// TempLocalCard.ClientName = SearchLoyaltyCard.CardList.Current.CardName
vars.value.tempLocalCardVar.clientNameAttr = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).cardNameAttr;
// TempLocalCard.CardNumber = SearchLoyaltyCard.CardList.Current.CardNumber
vars.value.tempLocalCardVar.cardNumberAttr = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).cardNumberAttr;
// TempLocalCard.UserID = UserID
vars.value.tempLocalCardVar.userIDAttr = vars.value.userIDInLocal;
// TempLocalCard.ClientNumber = SearchLoyaltyCard.CardList.Current.ClientNumber
vars.value.tempLocalCardVar.clientNumberAttr = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).clientNumberAttr;
// TempLocalCard.UpdateDateTime = TextToDateTime
vars.value.tempLocalCardVar.updateDateTimeAttr = OS.BuiltinFunctions.textToDateTime(searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).updatedDateAttr);
// TempLocalCard.IsDelegated = SearchLoyaltyCard.CardList.Current.IsCardDelegated
vars.value.tempLocalCardVar.isDelegatedAttr = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).isCardDelegatedAttr;
// TempLocalCard.CanBeDelegated = SearchLoyaltyCard.CardList.Current.CanBeDelegated
vars.value.tempLocalCardVar.canBeDelegatedAttr = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).canBeDelegatedAttr;
// TempLocalCard.RegisterDateTime = CurrDateTime
vars.value.tempLocalCardVar.registerDateTimeAttr = OS.BuiltinFunctions.currDateTime();
// TempLocalCard.AccountId = SearchLoyaltyCard.CardList.Current.AccountId
vars.value.tempLocalCardVar.accountIdAttr = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).accountIdAttr;
// TempLocalCard.StatusCode = SearchLoyaltyCard.CardList.Current.StatusCode
vars.value.tempLocalCardVar.statusCodeAttr = searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).statusCodeAttr;
// Execute Action: SetClientCardInfo
return ACCOUNTINFO_MBPController.default.setClientCardInfo$Action(searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).cardBinaryAttr, searchLoyaltyCardVar.value.cardListOut.getItem(cardListIndex.valueOf()).filenameAttr, vars.value.tempLocalCardVar, callContext).then(function (value) {
setClientCardInfoVar.value = value;
}).then(function () {
// SetLocalCardID
// TempLocalCard.Id = SetClientCardInfo.LocalClientCardID
vars.value.tempLocalCardVar.idAttr = setClientCardInfoVar.value.localClientCardIDOut;
// Execute Action: ListAppendCard
OS.SystemActions.listAppend(outVars.value.cardListOut, OS.DataTypes.JSConversions.typeConvertRecord(vars.value.tempLocalCardVar, new ACCOUNTINFO_MBPModel.STR_NOS_CARDRec(), function (source, target) {
target.clientNumberAttr = source.clientNumberAttr;
target.cardNumberAttr = source.cardNumberAttr;
target.cardNameAttr = source.clientNameAttr;
target.updatedDateAttr = OS.BuiltinFunctions.dateTimeToText(source.updateDateTimeAttr);
target.isCardDelegatedAttr = source.isDelegatedAttr;
target.canBeDelegatedAttr = source.canBeDelegatedAttr;
target.localCardIDAttr = source.idAttr;
target.statusCodeAttr = source.statusCodeAttr;
return target;
}), callContext);
}).then(function () {
cardListIndexMax--;
cardListIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(searchLoyaltyCardVar.value.cardListOut);
});
}

});
});
} else {
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

}

});
});
} else {
// Execute Action: ListAppendAllCards
OS.SystemActions.listAppendAll(outVars.value.cardListOut, OS.DataTypes.JSConversions.typeConvertRecordList(getLocalCardVar.value.listOut, new ACCOUNTINFO_MBPModel.STR_NOS_CARDList(), function (source, target) {
target.clientNumberAttr = source.local_CLIENT_CARDAttr.clientNumberAttr;
target.cardNumberAttr = source.local_CLIENT_CARDAttr.cardNumberAttr;
target.cardNameAttr = source.local_CLIENT_CARDAttr.clientNameAttr;
target.updatedDateAttr = OS.BuiltinFunctions.dateTimeToText(source.local_CLIENT_CARDAttr.updateDateTimeAttr);
target.isCardDelegatedAttr = source.local_CLIENT_CARDAttr.isDelegatedAttr;
target.canBeDelegatedAttr = source.local_CLIENT_CARDAttr.canBeDelegatedAttr;
target.localCardIDAttr = source.local_CLIENT_CARDAttr.idAttr;
target.statusCodeAttr = source.local_CLIENT_CARDAttr.statusCodeAttr;
return target;
}), callContext);
}

});
}).then(function () {
// Execute Action: ListSort
OS.SystemActions.listSort(outVars.value.cardListOut, function (p) {
return (((p.isCardDelegatedAttr ? "True" : "False") + "|") + p.statusCodeAttr);
}, true, callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Card.GetNOSCards", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCards$vars", [{
name: "UserID",
attrName: "userIDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheValidationInterval",
attrName: "cacheValidationIntervalInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "TempLocalCard",
attrName: "tempLocalCardVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec();
},
complexType: ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec
}, {
name: "CardNumber",
attrName: "cardNumberVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCards$outVars", [{
name: "CardList",
attrName: "cardListOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.STR_NOS_CARDList();
},
complexType: ACCOUNTINFO_MBPModel.STR_NOS_CARDList
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getNOSCards$Action = function (userIDIn, applicationIn, cacheValidationIntervalIn, refreshTokenIn) {
userIDIn = (userIDIn === undefined) ? "" : userIDIn;
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
cacheValidationIntervalIn = (cacheValidationIntervalIn === undefined) ? 0 : cacheValidationIntervalIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getNOSCards$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(userIDIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(cacheValidationIntervalIn, OS.Types.Integer), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CardList: actionResults.cardListOut,
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetNOSCardsOffline", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$STR_NOS_CARDList", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRecordList", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getNOSCardsOffline$Action = function (userIDIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardsOffline$vars"))());
vars.value.userIDInLocal = userIDIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLocalCardVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardsOffline$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Aggregate: GetLocalCard
var getLocalCardAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstUserID = vars.value.userIDInLocal;

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
selectSql += "\"ENLocal_CLIENT_CARD\".\"Id\" o0, \"ENLocal_CLIENT_CARD\".\"ClientName\" o1, \"ENLocal_CLIENT_CARD\".\"CardNumber\" o2, \"ENLocal_CLIENT_CARD\".\"UserID\" o3, \"ENLocal_CLIENT_CARD\".\"ClientNumber\" o4, \"ENLocal_CLIENT_CARD\".\"UpdateDateTime\" o5, \"ENLocal_CLIENT_CARD\".\"IsDelegated\" o6, \"ENLocal_CLIENT_CARD\".\"CanBeDelegated\" o7, \"ENLocal_CLIENT_CARD\".\"RegisterDateTime\" o8, \"ENLocal_CLIENT_CARD\".\"QRCardID\" o9, \"ENLocal_CLIENT_CARD\".\"AccountId\" o10, \"ENLocal_CLIENT_CARD\".\"StatusCode\" o11";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_CLIENT_CARD\" \"ENLocal_CLIENT_CARD\"";
fromAndWhereSql += " WHERE (\"ENLocal_CLIENT_CARD\".\"UserID\" = :qpstUserID)";
argsList.add("qpstUserID", /*TEXT*/ 0, qpstUserID);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_CLIENT_CARDAttr",
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
return getLocalCardVar.value;
});
};
return getLocalCardAggr().then(function () {
// Empty
if((!(getLocalCardVar.value.listOut.isEmpty))) {
// Execute Action: ListAppendAllCards
OS.SystemActions.listAppendAll(outVars.value.cardListOut, OS.DataTypes.JSConversions.typeConvertRecordList(getLocalCardVar.value.listOut, new ACCOUNTINFO_MBPModel.STR_NOS_CARDList(), function (source, target) {
target.clientNumberAttr = source.local_CLIENT_CARDAttr.clientNumberAttr;
target.cardNumberAttr = source.local_CLIENT_CARDAttr.cardNumberAttr;
target.cardNameAttr = source.local_CLIENT_CARDAttr.clientNameAttr;
target.updatedDateAttr = OS.BuiltinFunctions.dateTimeToText(source.local_CLIENT_CARDAttr.updateDateTimeAttr);
target.isCardDelegatedAttr = source.local_CLIENT_CARDAttr.isDelegatedAttr;
target.canBeDelegatedAttr = source.local_CLIENT_CARDAttr.canBeDelegatedAttr;
target.localCardIDAttr = source.local_CLIENT_CARDAttr.idAttr;
target.statusCodeAttr = source.local_CLIENT_CARDAttr.statusCodeAttr;
return target;
}), callContext);
// Execute Action: ListSort
OS.SystemActions.listSort(outVars.value.cardListOut, function (p) {
return (p.isCardDelegatedAttr === false);
}, false, callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("Card.GetNOSCardsOffline", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardsOffline$vars", [{
name: "UserID",
attrName: "userIDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.GetNOSCardsOffline$outVars", [{
name: "CardList",
attrName: "cardListOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.STR_NOS_CARDList();
},
complexType: ACCOUNTINFO_MBPModel.STR_NOS_CARDList
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getNOSCardsOffline$Action = function (userIDIn) {
userIDIn = (userIDIn === undefined) ? "" : userIDIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getNOSCardsOffline$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(userIDIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CardList: actionResults.cardListOut,
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$GetPINPUKInfo", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.controller$CreateOrUpdateLocal_SIM_INFO_Logic", "ACCOUNTINFO_MBP.controller$ServerAction.GetContractAndSIMDetails_BP", "ACCOUNTINFO_MBP.controller$Cache_ValidationByService", "ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERec", "ACCOUNTINFO_MBP.controller$GetCacheServiceID", "ACCOUNTINFO_MBP.model$Local_SIM_INFORecordList", "ACCOUNTINFO_MBP.model$Local_SIM_INFORec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getPINPUKInfo$Action = function (associationIdIn, serviceIdIn, applicationIn, cacheValidationIntervalIn, refreshTokenIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.PinPuk.GetPINPUKInfo$vars"))());
vars.value.associationIdInLocal = associationIdIn;
vars.value.serviceIdInLocal = serviceIdIn;
vars.value.applicationInLocal = applicationIn;
vars.value.cacheValidationIntervalInLocal = cacheValidationIntervalIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getContractAndSIMDetails_BPVar = new OS.DataTypes.VariableHolder();
var createOrUpdateLocal_SIM_INFO_LogicVar = new OS.DataTypes.VariableHolder();
var cache_ValidationByServiceVar = new OS.DataTypes.VariableHolder();
var getLocalSIMINFOESByServiceIdVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(ACCOUNTINFO_MBPModel.Local_SIM_INFORecordList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.PinPuk.GetPINPUKInfo$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Cache_ValidationByService
return ACCOUNTINFO_MBPController.default.cache_ValidationByService$Action(ACCOUNTINFO_MBPController.default.getCacheServiceID$Action(callContext.withoutIterationContext()).cacheServicesOut.pINPUKAttr, false, vars.value.applicationInLocal, vars.value.cacheValidationIntervalInLocal, vars.value.refreshTokenInLocal, false, OS.DataTypes.DateTime.defaultValue, callContext).then(function (value) {
cache_ValidationByServiceVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((cache_ValidationByServiceVar.value.useCacheOut)) {
// Aggregate: GetLocalSIMINFOESByServiceId
var getLocalSIMINFOESByServiceIdAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = ACCOUNTINFO_MBPModel.Local_SIM_INFORecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 0;
}

var qpstServiceId = vars.value.serviceIdInLocal;

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
selectSql += "\"ENLocal_SIM_INFO\".\"Id\" o0, \"ENLocal_SIM_INFO\".\"ServiceId\" o1, \"ENLocal_SIM_INFO\".\"SIMNumber\" o2, \"ENLocal_SIM_INFO\".\"PIN\" o3, \"ENLocal_SIM_INFO\".\"PUK\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_hih_Local_SIM_INFO\" \"ENLocal_SIM_INFO\"";
fromAndWhereSql += " WHERE (\"ENLocal_SIM_INFO\".\"ServiceId\" = :qpstServiceId)";
orderBySql += " ORDER BY \"ENLocal_SIM_INFO\".\"ServiceId\" ASC ";
argsList.add("qpstServiceId", /*TEXT*/ 0, qpstServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, ACCOUNTINFO_MBPModel.Local_SIM_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SIM_INFOAttr",
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
return getLocalSIMINFOESByServiceIdVar.value;
});
};
return getLocalSIMINFOESByServiceIdAggr().then(function () {
// Empty
if((!(getLocalSIMINFOESByServiceIdVar.value.listOut.isEmpty))) {
// PIN = GetLocalSIMINFOESByServiceId.List.Current.Local_SIM_INFO.PIN
outVars.value.pINOut = getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_SIM_INFOAttr.pINAttr;
// PUK = GetLocalSIMINFOESByServiceId.List.Current.Local_SIM_INFO.PUK
outVars.value.pUKOut = getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_SIM_INFOAttr.pUKAttr;
// Success = True
outVars.value.successOut = true;
// SIMNumber = GetLocalSIMINFOESByServiceId.List.Current.Local_SIM_INFO.SIMNumber
outVars.value.sIMNumberOut = getLocalSIMINFOESByServiceIdVar.value.listOut.getCurrent(callContext.iterationContext).local_SIM_INFOAttr.sIMNumberAttr;
return OS.Flow.returnAsync(outVars.value);

}

});
}

});
}).then(function () {
// Execute Action: GetContractAndSIMDetails_BP
return controller.getContractAndSIMDetails_BP$ServerAction(vars.value.refreshTokenInLocal, vars.value.associationIdInLocal, vars.value.serviceIdInLocal, vars.value.applicationInLocal, callContext).then(function (value) {
getContractAndSIMDetails_BPVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getContractAndSIMDetails_BPVar.value.successOut)) {
// Execute Action: CreateOrUpdateLocal_SIM_INFO_Logic
return ACCOUNTINFO_MBPController.default.createOrUpdateLocal_SIM_INFO_Logic$Action(vars.value.serviceIdInLocal, getContractAndSIMDetails_BPVar.value.sIMNrOut, getContractAndSIMDetails_BPVar.value.pINOut, getContractAndSIMDetails_BPVar.value.pUKOut, callContext).then(function (value) {
createOrUpdateLocal_SIM_INFO_LogicVar.value = value;
}).then(function () {
// PIN = GetContractAndSIMDetails_BP.PIN
outVars.value.pINOut = getContractAndSIMDetails_BPVar.value.pINOut;
// PUK = GetContractAndSIMDetails_BP.PUK
outVars.value.pUKOut = getContractAndSIMDetails_BPVar.value.pUKOut;
// Success = True
outVars.value.successOut = true;
// SIMNumber = GetContractAndSIMDetails_BP.SIMNr
outVars.value.sIMNumberOut = getContractAndSIMDetails_BPVar.value.sIMNrOut;
});
} else {
// Success = False
outVars.value.successOut = false;
// Message = GetContractAndSIMDetails_BP.Message
outVars.value.messageOut = getContractAndSIMDetails_BPVar.value.messageOut;
}

});
});
}).catch(function (ex) {
OS.Logger.trace("PinPuk.GetPINPUKInfo", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
// Message = "Erro a obter informação"
outVars.value.messageOut = "Erro a obter informação";
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.PinPuk.GetPINPUKInfo$vars", [{
name: "AssociationId",
attrName: "associationIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ServiceId",
attrName: "serviceIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CacheValidationInterval",
attrName: "cacheValidationIntervalInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.PinPuk.GetPINPUKInfo$outVars", [{
name: "PIN",
attrName: "pINOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PUK",
attrName: "pUKOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SIMNumber",
attrName: "sIMNumberOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.getPINPUKInfo$Action = function (associationIdIn, serviceIdIn, applicationIn, cacheValidationIntervalIn, refreshTokenIn) {
associationIdIn = (associationIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : associationIdIn;
serviceIdIn = (serviceIdIn === undefined) ? "" : serviceIdIn;
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
cacheValidationIntervalIn = (cacheValidationIntervalIn === undefined) ? 0 : cacheValidationIntervalIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.getPINPUKInfo$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(associationIdIn, OS.Types.LongInteger), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(serviceIdIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(cacheValidationIntervalIn, OS.Types.Integer), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PIN: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.pINOut, OS.Types.Text, true),
PUK: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.pUKOut, OS.Types.Text, true),
SIMNumber: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.sIMNumberOut, OS.Types.Text, true),
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true),
Message: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.messageOut, OS.Types.Text, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$NOSCARD_ClearCache", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.controller$Cache_DisableByService", "ACCOUNTINFO_MBP.model$STR_CACHE_SERVICERec", "ACCOUNTINFO_MBP.controller$GetCacheServiceID", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.entities"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.nOSCARD_ClearCache$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var cache_DisableByServiceNOSCardVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Cache.NOSCARD_ClearCache$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DeleteAllLocal_CLIENT_CARD
return ACCOUNTINFO_MBPModel.entities.Local_CLIENT_CARD.deleteAll(callContext).then(function () {
// Execute Action: Cache_DisableByServiceNOSCard
return ACCOUNTINFO_MBPController.default.cache_DisableByService$Action(ACCOUNTINFO_MBPController.default.getCacheServiceID$Action(callContext.withoutIterationContext()).cacheServicesOut.nOSCardAttr, callContext).then(function (value) {
cache_DisableByServiceNOSCardVar.value = value;
});
});
}).catch(function (ex) {
OS.Logger.trace("Cache.NOSCARD_ClearCache", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// SetOutput
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Cache.NOSCARD_ClearCache$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.nOSCARD_ClearCache$Action = function () {
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.nOSCARD_ClearCache$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$SetClientCardInfo", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$Local_QR_CARDRec", "ACCOUNTINFO_MBP.controller$CreateOrUpdateLocal_QR_CARD_Logic", "ACCOUNTINFO_MBP.model$Local_CLIENT_CARDRec", "ACCOUNTINFO_MBP.controller$CreateOrUpdateLocal_CLIENT_CARD_Logic"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.setClientCardInfo$Action = function (qRCodeBinaryIn, qRCardFilenameIn, localClientCardIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.SetClientCardInfo$vars"))());
vars.value.qRCodeBinaryInLocal = qRCodeBinaryIn;
vars.value.qRCardFilenameInLocal = qRCardFilenameIn;
vars.value.localClientCardInLocal = localClientCardIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createLocalQRCardVar = new OS.DataTypes.VariableHolder();
var createLocalClientCardVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.SetClientCardInfo$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// SetTempQRCard
// TempQRCard.Filename = QRCardFilename
vars.value.tempQRCardVar.filenameAttr = vars.value.qRCardFilenameInLocal;
// TempQRCard.Binary = QRCodeBinary
vars.value.tempQRCardVar.binaryAttr = vars.value.qRCodeBinaryInLocal;
// Execute Action: CreateLocalQRCard
return ACCOUNTINFO_MBPController.default.createOrUpdateLocal_QR_CARD_Logic$Action(vars.value.tempQRCardVar, callContext).then(function (value) {
createLocalQRCardVar.value = value;
}).then(function () {
// SetLocalQRCardID
// LocalClientCard.QRCardID = CreateLocalQRCard.Id
vars.value.localClientCardInLocal.qRCardIDAttr = createLocalQRCardVar.value.idOut;
// Execute Action: CreateLocalClientCard
return ACCOUNTINFO_MBPController.default.createOrUpdateLocal_CLIENT_CARD_Logic$Action(vars.value.localClientCardInLocal, callContext).then(function (value) {
createLocalClientCardVar.value = value;
});
}).then(function () {
// SetLocalClientCardID
// LocalClientCardID = CreateLocalClientCard.Id
outVars.value.localClientCardIDOut = createLocalClientCardVar.value.idOut;
});
}).catch(function (ex) {
OS.Logger.trace("Card.SetClientCardInfo", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// SetOutput
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.SetClientCardInfo$vars", [{
name: "QRCodeBinary",
attrName: "qRCodeBinaryInLocal",
mandatory: true,
dataType: OS.Types.BinaryData,
defaultValue: function () {
return OS.DataTypes.BinaryData.defaultValue;
}
}, {
name: "QRCardFilename",
attrName: "qRCardFilenameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "LocalClientCard",
attrName: "localClientCardInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec();
},
complexType: ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec
}, {
name: "TempQRCard",
attrName: "tempQRCardVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.Local_QR_CARDRec();
},
complexType: ACCOUNTINFO_MBPModel.Local_QR_CARDRec
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.SetClientCardInfo$outVars", [{
name: "LocalClientCardID",
attrName: "localClientCardIDOut",
mandatory: false,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.setClientCardInfo$Action = function (qRCodeBinaryIn, qRCardFilenameIn, localClientCardIn) {
qRCodeBinaryIn = (qRCodeBinaryIn === undefined) ? OS.DataTypes.BinaryData.defaultValue : qRCodeBinaryIn;
qRCardFilenameIn = (qRCardFilenameIn === undefined) ? "" : qRCardFilenameIn;
localClientCardIn = (localClientCardIn === undefined) ? new ACCOUNTINFO_MBPModel.Local_CLIENT_CARDRec() : localClientCardIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.setClientCardInfo$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(qRCodeBinaryIn, OS.Types.BinaryData), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(qRCardFilenameIn, OS.Types.Text), localClientCardIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
LocalClientCardID: actionResults.localClientCardIDOut,
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$SetEligibilityForAssociation", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.controller$ServerAction.GetLoyaltyCardEligibility_BP"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.setEligibilityForAssociation$Action = function (applicationIn, associationIdIn, refreshTokenIn, accountNrIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_Globe.SetEligibilityForAssociation$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.associationIdInLocal = associationIdIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
vars.value.accountNrInLocal = accountNrIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getLoyaltyCardEligibility_BPVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_Globe.SetEligibilityForAssociation$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetLoyaltyCardEligibility_BP
return controller.getLoyaltyCardEligibility_BP$ServerAction(vars.value.accountNrInLocal, "", "", vars.value.refreshTokenInLocal, vars.value.associationIdInLocal, vars.value.applicationInLocal, callContext).then(function (value) {
getLoyaltyCardEligibility_BPVar.value = value;
}).then(function () {
if((getLoyaltyCardEligibility_BPVar.value.successOut)) {
// Success = True
outVars.value.successOut = true;
// IsNOSCardEligible = GetLoyaltyCardEligibility_BP.IsEligible
outVars.value.isNOSCardEligibleOut = getLoyaltyCardEligibility_BPVar.value.isEligibleOut;
} else {
// Success = False
outVars.value.successOut = false;
}

});
}).catch(function (ex) {
OS.Logger.trace("API_Globe.SetEligibilityForAssociation", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_Globe.SetEligibilityForAssociation$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssociationId",
attrName: "associationIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AccountNr",
attrName: "accountNrInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_Globe.SetEligibilityForAssociation$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "IsNOSCardEligible",
attrName: "isNOSCardEligibleOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.setEligibilityForAssociation$Action = function (applicationIn, associationIdIn, refreshTokenIn, accountNrIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
associationIdIn = (associationIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : associationIdIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
accountNrIn = (accountNrIn === undefined) ? "" : accountNrIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.setEligibilityForAssociation$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(associationIdIn, OS.Types.LongInteger), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(accountNrIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true),
IsNOSCardEligible: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.isNOSCardEligibleOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$SetExistingCustomerAccount", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "CON_BSCS.model", "CON_SIEBEL.model", "CON_BSCS.model$CPMRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BSCS", "ACCOUNTINFO_MBP.controller$ServerAction.SetExistingCustomerAccount_BP", "CON_SIEBEL.model$ContactRec", "ACCOUNTINFO_MBP.referencesHealth$CON_SIEBEL"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController, CON_BSCSModel, CON_SIEBELModel) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.setExistingCustomerAccount$Action = function (applicationIn, refreshTokenIn, associationIdIn, custCodeIn, emailIn, mSISDNIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_BSCS.SetExistingCustomerAccount$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
vars.value.associationIdInLocal = associationIdIn;
vars.value.custCodeInLocal = custCodeIn;
vars.value.emailInLocal = emailIn;
vars.value.mSISDNInLocal = mSISDNIn;
var setExistingCustomerAccount_BPVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_BSCS.SetExistingCustomerAccount$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Contact.EmailAddress = Email
vars.value.contactVar.emailAddressAttr = vars.value.emailInLocal;
// Contact.PhoneNumber = MSISDN
vars.value.contactVar.phoneNumberAttr = vars.value.mSISDNInLocal;
// Execute Action: SetExistingCustomerAccount_BP
return controller.setExistingCustomerAccount_BP$ServerAction(vars.value.refreshTokenInLocal, vars.value.associationIdInLocal, "SetExistingCustomerAccount", vars.value.custCodeInLocal, vars.value.emailInLocal, vars.value.mSISDNInLocal, vars.value.applicationInLocal, callContext).then(function (value) {
setExistingCustomerAccount_BPVar.value = value;
}).then(function () {
if((setExistingCustomerAccount_BPVar.value.successOut)) {
// Success = SetExistingCustomerAccount_BP.Success
outVars.value.successOut = setExistingCustomerAccount_BPVar.value.successOut;
} else {
// Success = False
outVars.value.successOut = false;
}

});
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_BSCS.SetExistingCustomerAccount$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssociationId",
attrName: "associationIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CustCode",
attrName: "custCodeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Email",
attrName: "emailInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MSISDN",
attrName: "mSISDNInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Contact",
attrName: "contactVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new CON_SIEBELModel.ContactRec();
},
complexType: CON_SIEBELModel.ContactRec
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_BSCS.SetExistingCustomerAccount$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.setExistingCustomerAccount$Action = function (applicationIn, refreshTokenIn, associationIdIn, custCodeIn, emailIn, mSISDNIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
associationIdIn = (associationIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : associationIdIn;
custCodeIn = (custCodeIn === undefined) ? "" : custCodeIn;
emailIn = (emailIn === undefined) ? "" : emailIn;
mSISDNIn = (mSISDNIn === undefined) ? "" : mSISDNIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.setExistingCustomerAccount$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(associationIdIn, OS.Types.LongInteger), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(custCodeIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(emailIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(mSISDNIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$SetSiebelContacts", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.controller$ServerAction.SetSiebelContacts_BP"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.setSiebelContacts$Action = function (applicationIn, refreshTokenIn, associationIdIn, custCodeIn, emailIn, mSISDNIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_Siebel.SetSiebelContacts$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
vars.value.associationIdInLocal = associationIdIn;
vars.value.custCodeInLocal = custCodeIn;
vars.value.emailInLocal = emailIn;
vars.value.mSISDNInLocal = mSISDNIn;
var setSiebelContacts_BPVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.API_Siebel.SetSiebelContacts$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: SetSiebelContacts_BP
return controller.setSiebelContacts_BP$ServerAction(vars.value.refreshTokenInLocal, vars.value.associationIdInLocal, "SetSiebelContacts", vars.value.custCodeInLocal, vars.value.emailInLocal, vars.value.mSISDNInLocal, vars.value.applicationInLocal, callContext).then(function (value) {
setSiebelContacts_BPVar.value = value;
}).then(function () {
if((setSiebelContacts_BPVar.value.successOut)) {
// Success = SetSiebelContacts_BP.Success
outVars.value.successOut = setSiebelContacts_BPVar.value.successOut;
} else {
// Success = False
outVars.value.successOut = false;
}

});
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_Siebel.SetSiebelContacts$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssociationId",
attrName: "associationIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "CustCode",
attrName: "custCodeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Email",
attrName: "emailInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MSISDN",
attrName: "mSISDNInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.API_Siebel.SetSiebelContacts$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.setSiebelContacts$Action = function (applicationIn, refreshTokenIn, associationIdIn, custCodeIn, emailIn, mSISDNIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
associationIdIn = (associationIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : associationIdIn;
custCodeIn = (custCodeIn === undefined) ? "" : custCodeIn;
emailIn = (emailIn === undefined) ? "" : emailIn;
mSISDNIn = (mSISDNIn === undefined) ? "" : mSISDNIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.setSiebelContacts$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(associationIdIn, OS.Types.LongInteger), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(custCodeIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(emailIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(mSISDNIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$ShareNOSCard", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.controller$ServerAction.ShareNOSCard_BP"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.shareNOSCard$Action = function (applicationIn, refreshTokenIn, nOSIDIn, associationIdIn, accountIdIn, nameIn, emailIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.ShareNOSCard$vars"))());
vars.value.applicationInLocal = applicationIn;
vars.value.refreshTokenInLocal = refreshTokenIn;
vars.value.nOSIDInLocal = nOSIDIn;
vars.value.associationIdInLocal = associationIdIn;
vars.value.accountIdInLocal = accountIdIn;
vars.value.nameInLocal = nameIn;
vars.value.emailInLocal = emailIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var shareNOSCard_BPVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP.Card.ShareNOSCard$outVars"))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((((vars.value.emailInLocal === "") || (vars.value.nameInLocal === "")))) {
// Message = "Nome e Email são obrigatórios."
outVars.value.messageOut = "Nome e Email são obrigatórios.";
// Success = False
outVars.value.successOut = false;
} else {
// Execute Action: ShareNOSCard_BP
return controller.shareNOSCard_BP$ServerAction(vars.value.refreshTokenInLocal, vars.value.associationIdInLocal, vars.value.accountIdInLocal, vars.value.nameInLocal, vars.value.emailInLocal, vars.value.nOSIDInLocal, vars.value.applicationInLocal, callContext).then(function (value) {
shareNOSCard_BPVar.value = value;
}).then(function () {
// Success = ShareNOSCard_BP.Success
outVars.value.successOut = shareNOSCard_BPVar.value.successOut;
// Message = ShareNOSCard_BP.Message
outVars.value.messageOut = shareNOSCard_BPVar.value.messageOut;
});
}

});
}).catch(function (ex) {
OS.Logger.trace("Card.ShareNOSCard", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// SetOutput
// Success = False
outVars.value.successOut = false;
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
});
};
var controller = ACCOUNTINFO_MBPController.default;
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.ShareNOSCard$vars", [{
name: "Application",
attrName: "applicationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "RefreshToken",
attrName: "refreshTokenInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "NOSID",
attrName: "nOSIDInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "AssociationId",
attrName: "associationIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "AccountId",
attrName: "accountIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Email",
attrName: "emailInLocal",
mandatory: true,
dataType: OS.Types.Email,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP.Card.ShareNOSCard$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
ACCOUNTINFO_MBPController.default.clientActionProxies.shareNOSCard$Action = function (applicationIn, refreshTokenIn, nOSIDIn, associationIdIn, accountIdIn, nameIn, emailIn) {
applicationIn = (applicationIn === undefined) ? "" : applicationIn;
refreshTokenIn = (refreshTokenIn === undefined) ? "" : refreshTokenIn;
nOSIDIn = (nOSIDIn === undefined) ? "" : nOSIDIn;
associationIdIn = (associationIdIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : associationIdIn;
accountIdIn = (accountIdIn === undefined) ? "" : accountIdIn;
nameIn = (nameIn === undefined) ? "" : nameIn;
emailIn = (emailIn === undefined) ? "" : emailIn;
return controller.executeActionInsideJSNode(ACCOUNTINFO_MBPController.default.shareNOSCard$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(applicationIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(refreshTokenIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(nOSIDIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(associationIdIn, OS.Types.LongInteger), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(accountIdIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(nameIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(emailIn, OS.Types.Email)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.successOut, OS.Types.Boolean, true),
Message: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.messageOut, OS.Types.Text, true)
};
});
};
});

define("ACCOUNTINFO_MBP.controller$ServerAction.Cache_GetCacheControlId", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.cache_GetCacheControlId$ServerAction = function (refreshTokenIn, applicationIn, cacheServiceNameIn, toRefreshIn, callContext) {
var controller = this.controller;
var inputs = {
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
CacheServiceName: OS.DataTypes.JSConversions.basicTypeToJS(cacheServiceNameIn, OS.Types.Text),
ToRefresh: OS.DataTypes.JSConversions.basicTypeToJS(toRefreshIn, OS.Types.Boolean)
};
return controller.callServerAction("Cache_GetCacheControlId", "screenservices/ACCOUNTINFO_MBP/ActionCache_GetCacheControlId", "rlurgdjOUaT4jS+gc9sfxQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionCache_GetCacheControlId"))();
executeServerActionResult.cacheControlIdOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.CacheControlId, OS.Types.LongInteger);
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.minutesToInvalidateCacheOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.MinutesToInvalidateCache, OS.Types.Integer);
executeServerActionResult.isActiveOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.isActive, OS.Types.Boolean);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionCache_GetCacheControlId", [{
name: "CacheControlId",
attrName: "cacheControlIdOut",
mandatory: false,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "MinutesToInvalidateCache",
attrName: "minutesToInvalidateCacheOut",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "isActive",
attrName: "isActiveOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.GetContractAndSIMDetails_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getContractAndSIMDetails_BP$ServerAction = function (refreshTokenIn, associationIdIn, serviceIdIn, applicationIn, callContext) {
var controller = this.controller;
var inputs = {
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
AssociationId: OS.DataTypes.JSConversions.basicTypeToJS(associationIdIn, OS.Types.LongInteger),
ServiceId: OS.DataTypes.JSConversions.basicTypeToJS(serviceIdIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("GetContractAndSIMDetails_BP", "screenservices/ACCOUNTINFO_MBP/ActionGetContractAndSIMDetails_BP", "ir6+sOP6E2l0g0WbIiI6VQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionGetContractAndSIMDetails_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.messageOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Message, OS.Types.Text);
executeServerActionResult.pINOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.PIN, OS.Types.Text);
executeServerActionResult.pUKOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.PUK, OS.Types.Text);
executeServerActionResult.sIMNrOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.SIMNr, OS.Types.Text);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionGetContractAndSIMDetails_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PIN",
attrName: "pINOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PUK",
attrName: "pUKOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "SIMNr",
attrName: "sIMNrOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.GetCustomerAccountAndLoyaltyDetails_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$outputMessage24Record"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getCustomerAccountAndLoyaltyDetails_BP$ServerAction = function (associationIDIn, refreshTokenIn, processIn, logRequestsIn, custCodeIn, applicationIn, callContext) {
var controller = this.controller;
var inputs = {
AssociationID: OS.DataTypes.JSConversions.basicTypeToJS(associationIDIn, OS.Types.LongInteger),
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
Process: OS.DataTypes.JSConversions.basicTypeToJS(processIn, OS.Types.Text),
LogRequests: OS.DataTypes.JSConversions.basicTypeToJS(logRequestsIn, OS.Types.Boolean),
CustCode: OS.DataTypes.JSConversions.basicTypeToJS(custCodeIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("GetCustomerAccountAndLoyaltyDetails_BP", "screenservices/ACCOUNTINFO_MBP/ActionGetCustomerAccountAndLoyaltyDetails_BP", "KaPMtsHQROIiVGmC18HTNQ", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionGetCustomerAccountAndLoyaltyDetails_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.messageOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Message, OS.Types.Text);
executeServerActionResult.outputMessageOut = ACCOUNTINFO_MBPModel.outputMessage24Record.fromJS(outputs.outputMessage);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionGetCustomerAccountAndLoyaltyDetails_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "outputMessage",
attrName: "outputMessageOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.outputMessage24Record();
},
complexType: ACCOUNTINFO_MBPModel.outputMessage24Record
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.GetLoyaltyCardEligibility_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.getLoyaltyCardEligibility_BP$ServerAction = function (accountNrIn, serviceAccountNrIn, loyaltyCardNrIn, refreshTokenIn, associationIdIn, applicationIn, callContext) {
var controller = this.controller;
var inputs = {
AccountNr: OS.DataTypes.JSConversions.basicTypeToJS(accountNrIn, OS.Types.Text),
ServiceAccountNr: OS.DataTypes.JSConversions.basicTypeToJS(serviceAccountNrIn, OS.Types.Text),
LoyaltyCardNr: OS.DataTypes.JSConversions.basicTypeToJS(loyaltyCardNrIn, OS.Types.Text),
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
AssociationId: OS.DataTypes.JSConversions.basicTypeToJS(associationIdIn, OS.Types.LongInteger),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("GetLoyaltyCardEligibility_BP", "screenservices/ACCOUNTINFO_MBP/ActionGetLoyaltyCardEligibility_BP", "hTjdS7_PPqKUlmTH4bg8Yw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionGetLoyaltyCardEligibility_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.isEligibleOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.IsEligible, OS.Types.Boolean);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionGetLoyaltyCardEligibility_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "IsEligible",
attrName: "isEligibleOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.SearchLoyaltyCard_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$STR_CLIENT_CARDList"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.searchLoyaltyCard_BP$ServerAction = function (processIn, userIdIn, widthIn, heightIn, applicationIn, refreshTokenIn, callContext) {
var controller = this.controller;
var inputs = {
Process: OS.DataTypes.JSConversions.basicTypeToJS(processIn, OS.Types.Text),
UserId: OS.DataTypes.JSConversions.basicTypeToJS(userIdIn, OS.Types.Text),
Width: OS.DataTypes.JSConversions.basicTypeToJS(widthIn, OS.Types.Integer),
Height: OS.DataTypes.JSConversions.basicTypeToJS(heightIn, OS.Types.Integer),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text)
};
return controller.callServerAction("SearchLoyaltyCard_BP", "screenservices/ACCOUNTINFO_MBP/ActionSearchLoyaltyCard_BP", "umXbRs0skw1IxZnkFaemfw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSearchLoyaltyCard_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.messageOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Message, OS.Types.Text);
executeServerActionResult.cardListOut = ACCOUNTINFO_MBPModel.STR_CLIENT_CARDList.fromJS(outputs.CardList);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSearchLoyaltyCard_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CardList",
attrName: "cardListOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.STR_CLIENT_CARDList();
},
complexType: ACCOUNTINFO_MBPModel.STR_CLIENT_CARDList
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.SetExistingCustomerAccount_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "CON_BSCS.model", "CON_BSCS.model$CPMRec", "ACCOUNTINFO_MBP.referencesHealth", "ACCOUNTINFO_MBP.referencesHealth$CON_BSCS"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController, CON_BSCSModel) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.setExistingCustomerAccount_BP$ServerAction = function (refreshTokenIn, associationIdIn, processIn, custCodeIn, emailIn, mSISDNIn, applicationIn, callContext) {
var controller = this.controller;
var inputs = {
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
AssociationId: OS.DataTypes.JSConversions.basicTypeToJS(associationIdIn, OS.Types.LongInteger),
Process: OS.DataTypes.JSConversions.basicTypeToJS(processIn, OS.Types.Text),
CustCode: OS.DataTypes.JSConversions.basicTypeToJS(custCodeIn, OS.Types.Text),
Email: OS.DataTypes.JSConversions.basicTypeToJS(emailIn, OS.Types.Email),
MSISDN: OS.DataTypes.JSConversions.basicTypeToJS(mSISDNIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("SetExistingCustomerAccount_BP", "screenservices/ACCOUNTINFO_MBP/ActionSetExistingCustomerAccount_BP", "dLRHybNmnMcdf2weQ+XQjw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSetExistingCustomerAccount_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.dataOutputOut = CON_BSCSModel.CPMRec.fromJS(outputs.DataOutput);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSetExistingCustomerAccount_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "DataOutput",
attrName: "dataOutputOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new CON_BSCSModel.CPMRec();
},
complexType: CON_BSCSModel.CPMRec
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.SetSiebelContacts_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.setSiebelContacts_BP$ServerAction = function (refreshTokenIn, associationIdIn, processIn, custCodeIn, emailIn, mSISDNIn, applicationIn, callContext) {
var controller = this.controller;
var inputs = {
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
AssociationId: OS.DataTypes.JSConversions.basicTypeToJS(associationIdIn, OS.Types.LongInteger),
Process: OS.DataTypes.JSConversions.basicTypeToJS(processIn, OS.Types.Text),
CustCode: OS.DataTypes.JSConversions.basicTypeToJS(custCodeIn, OS.Types.Text),
Email: OS.DataTypes.JSConversions.basicTypeToJS(emailIn, OS.Types.Text),
MSISDN: OS.DataTypes.JSConversions.basicTypeToJS(mSISDNIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("SetSiebelContacts_BP", "screenservices/ACCOUNTINFO_MBP/ActionSetSiebelContacts_BP", "5V3geZw4CEwPMw1DF9wnHw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSetSiebelContacts_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSetSiebelContacts_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.SetSiebelRequest_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.setSiebelRequest_BP$ServerAction = function (applicationIn, refreshTokenIn, associationIdIn, processIn, serviceAccountIdIn, callContext) {
var controller = this.controller;
var inputs = {
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text),
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
AssociationId: OS.DataTypes.JSConversions.basicTypeToJS(associationIdIn, OS.Types.LongInteger),
Process: OS.DataTypes.JSConversions.basicTypeToJS(processIn, OS.Types.Text),
ServiceAccountId: OS.DataTypes.JSConversions.basicTypeToJS(serviceAccountIdIn, OS.Types.Text)
};
return controller.callServerAction("SetSiebelRequest_BP", "screenservices/ACCOUNTINFO_MBP/ActionSetSiebelRequest_BP", "Qj_trsI+LK3IY8pctXZzZw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSetSiebelRequest_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.messageOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Message, OS.Types.Text);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionSetSiebelRequest_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.ShareNOSCard_BP", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.shareNOSCard_BP$ServerAction = function (refreshTokenIn, associationIdIn, accountIdIn, nameIn, emailIn, nOSIDIn, applicationIn, callContext) {
var controller = this.controller;
var inputs = {
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
AssociationId: OS.DataTypes.JSConversions.basicTypeToJS(associationIdIn, OS.Types.LongInteger),
AccountId: OS.DataTypes.JSConversions.basicTypeToJS(accountIdIn, OS.Types.Text),
Name: OS.DataTypes.JSConversions.basicTypeToJS(nameIn, OS.Types.Text),
Email: OS.DataTypes.JSConversions.basicTypeToJS(emailIn, OS.Types.Email),
NOSID: OS.DataTypes.JSConversions.basicTypeToJS(nOSIDIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("ShareNOSCard_BP", "screenservices/ACCOUNTINFO_MBP/ActionShareNOSCard_BP", "IoIkJbhXhDY7o2O54K1TVg", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionShareNOSCard_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.messageOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Message, OS.Types.Text);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssespaceaccountinfo_bp_ActionShareNOSCard_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
});
define("ACCOUNTINFO_MBP.controller$ServerAction.String_Split", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model", "ACCOUNTINFO_MBP.controller", "ACCOUNTINFO_MBP.model$TextRecordList"], function (exports, OutSystems, ACCOUNTINFO_MBPModel, ACCOUNTINFO_MBPController) {
var OS = OutSystems.Internal;
ACCOUNTINFO_MBPController.default.string_Split$ServerAction = function (textIn, delimitersIn, callContext) {
var controller = this.controller;
var inputs = {
Text: OS.DataTypes.JSConversions.basicTypeToJS(textIn, OS.Types.Text),
Delimiters: OS.DataTypes.JSConversions.basicTypeToJS(delimitersIn, OS.Types.Text)
};
return controller.callServerAction("String_Split", "screenservices/ACCOUNTINFO_MBP/ActionString_Split", "BlJjWdSOYZlaSQ1CBj_ang", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBP$rssextensiontext_ActionString_Split"))();
executeServerActionResult.listOut = ACCOUNTINFO_MBPModel.TextRecordList.fromJS(outputs.List);
return executeServerActionResult;
});
};
ACCOUNTINFO_MBPController.default.constructor.registerVariableGroupType("ACCOUNTINFO_MBP$rssextensiontext_ActionString_Split", [{
name: "List",
attrName: "listOut",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new ACCOUNTINFO_MBPModel.TextRecordList();
},
complexType: ACCOUNTINFO_MBPModel.TextRecordList
}]);
});
define("ACCOUNTINFO_MBP.controller", ["exports", "OutSystems", "ACCOUNTINFO_MBP.model"], function (exports, OutSystems, ACCOUNTINFO_MBPModel) {
var OS = OutSystems.Internal;
var ACCOUNTINFO_MBPController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 120;
Controller.prototype.getDefaultTimeout = function () {
return ACCOUNTINFO_MBPController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
ACCOUNTINFO_MBPController.default = new Controller();
});
