define("NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", ["exports", "OutSystems", "NOSCordovaPlugin.model", "NOSCordovaPlugin.controller", "CommonPlugin.controller", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin.PluginIsLoadedJS", "CommonPlugin.controller$IsCordovaDefined", "NOSCordovaPlugin.referencesHealth", "NOSCordovaPlugin.referencesHealth$CommonPlugin"], function (exports, OutSystems, NOSCordovaPluginModel, NOSCordovaPluginController, CommonPluginController, NOSCordovaPlugin_controller_CheckNOSCordovaPlugin_PluginIsLoadedJS) {
var OS = OutSystems.Internal;
NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action = function (callContext) {
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var pluginIsLoadedJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NOSCordovaPlugin.CheckNOSCordovaPlugin$outVars"))());
try {// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

if((isCordovaDefinedVar.value.isLoadedOut)) {
pluginIsLoadedJSResult.value = controller.safeExecuteJSNode(NOSCordovaPlugin_controller_CheckNOSCordovaPlugin_PluginIsLoadedJS, "PluginIsLoaded", "CheckNOSCordovaPlugin", {
IsAvailable: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("NOSCordovaPlugin.CheckNOSCordovaPlugin$pluginIsLoadedJSResult"))();
jsNodeResult.isAvailableOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.IsAvailable, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
// Set Result
// IsAvailable = PluginIsLoaded.IsAvailable
outVars.value.isAvailableOut = pluginIsLoadedJSResult.value.isAvailableOut;
} else {
// Not Available
// IsAvailable = False
outVars.value.isAvailableOut = false;
}

} catch (ex) {
(function () {
OS.Logger.trace("CheckNOSCordovaPlugin.CheckNOSCordovaPlugin", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
// Not Available
// IsAvailable = False
outVars.value.isAvailableOut = false;
return outVars.value;

}

throw ex;
})();
}

return outVars.value;
};
var controller = NOSCordovaPluginController.default;
NOSCordovaPluginController.default.constructor.registerVariableGroupType("NOSCordovaPlugin.CheckNOSCordovaPlugin$pluginIsLoadedJSResult", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
NOSCordovaPluginController.default.constructor.registerVariableGroupType("NOSCordovaPlugin.CheckNOSCordovaPlugin$outVars", [{
name: "IsAvailable",
attrName: "isAvailableOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
NOSCordovaPluginController.default.clientActionProxies.checkNOSCordovaPlugin$Action = function () {
return controller.executeActionInsideJSNode(NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAvailable: OS.DataTypes.JSConversions.basicTypeToJS(actionResults.isAvailableOut, OS.Types.Boolean, true)
};
});
};
});
define("NOSCordovaPlugin.controller$CheckNOSCordovaPlugin.PluginIsLoadedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if(typeof(cordova.plugins.NOSCordovaPlugin) === "undefined")
    $parameters.IsAvailable = false;
else
    $parameters.IsAvailable =  true;
};
});

define("NOSCordovaPlugin.controller$ShowExternalWebView", ["exports", "OutSystems", "NOSCordovaPlugin.model", "NOSCordovaPlugin.controller", "NOSCordovaPlugin.controller$ShowExternalWebView.NOSCordovaPluginJSActionJS", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "NOSCordovaPlugin.model$HeaderList"], function (exports, OutSystems, NOSCordovaPluginModel, NOSCordovaPluginController, NOSCordovaPlugin_controller_ShowExternalWebView_NOSCordovaPluginJSActionJS) {
var OS = OutSystems.Internal;
NOSCordovaPluginController.default.showExternalWebView$Action = function (urlIn, titleIn, headersIn, headerColorIn, isDebugModeIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NOSCordovaPlugin.ShowExternalWebView$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.titleInLocal = titleIn;
vars.value.headersInLocal = headersIn.clone();
vars.value.headerColorInLocal = headerColorIn;
vars.value.isDebugModeInLocal = isDebugModeIn;
var checkNOSCordovaPluginVar = new OS.DataTypes.VariableHolder();
// Execute Action: LogMessage2
OS.SystemActions.logMessage((((((((((((((((("Curr Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "URL: ") + vars.value.urlInLocal) + "\r\n") + "Title: ") + vars.value.titleInLocal) + "\r\n") + "Headers Length: ") + (vars.value.headersInLocal.length).toString()) + "\r\n") + "Header Color: ") + vars.value.headerColorInLocal) + "\r\n") + "IsDebugMode: ") + (vars.value.isDebugModeInLocal ? "True" : "False")), "NOSCordovaPlugin", callContext);
// Execute Action: CheckNOSCordovaPlugin
checkNOSCordovaPluginVar.value = NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action(callContext);

// IsAvailable?
if((checkNOSCordovaPluginVar.value.isAvailableOut)) {
// Foreach Headers
callContext.iterationContext.registerIterationStart(vars.value.headersInLocal);
try {var headersIterator = callContext.iterationContext.getIterator(vars.value.headersInLocal);
var headersIndex = 0;
while (((headersIndex < vars.value.headersInLocal.length))) {
headersIterator.currentRowNumber = headersIndex;
// HeadersVar
// HeadersVar = HeadersVar + If
vars.value.headersVarVar = (vars.value.headersVarVar + (((((vars.value.headersInLocal.getItem(headersIndex.valueOf()).nameAttr) !== ("")) && ((vars.value.headersInLocal.getItem(headersIndex.valueOf()).valueAttr) !== ("")))) ? ((((((((vars.value.headersVarVar) !== (""))) ? ("!!!") : ("")) + OS.BuiltinFunctions.trim(vars.value.headersInLocal.getItem(headersIndex.valueOf()).nameAttr)) + ";") + OS.BuiltinFunctions.trim(vars.value.headersInLocal.getItem(headersIndex.valueOf()).valueAttr))) : ("")));
headersIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.headersInLocal);
}

// Execute Action: LogMessage
OS.SystemActions.logMessage((((((((((("cordova.exec(callbackSuccess, callbackError, \'NOSCordovaPlugin\', \'showExternalWebView\', [" + (vars.value.isDebugModeInLocal ? "True" : "False")) + ",\'") + vars.value.urlInLocal) + "\', \'") + vars.value.titleInLocal) + "\', \'") + vars.value.headersVarVar) + "\', \'") + vars.value.headerColorInLocal) + "\', \'mobile-success\']);"), "NOSCordovaPlugin", callContext);
controller.safeExecuteJSNode(NOSCordovaPlugin_controller_ShowExternalWebView_NOSCordovaPluginJSActionJS, "NOSCordovaPluginJSAction", "ShowExternalWebView", {
Headers: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.headersVarVar, OS.Types.Text, true),
IsDebugMode: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.isDebugModeInLocal, OS.Types.Boolean, true),
Url: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.urlInLocal, OS.Types.Text, true),
Title: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.titleInLocal, OS.Types.Text, true),
HeaderColor: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.headerColorInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
} else {
// Execute Action: LogMessage3
OS.SystemActions.logMessage("The Cordova Plugin is not available...", "NOSCordovaPlugin", callContext);
}

return ;
};
var controller = NOSCordovaPluginController.default;
NOSCordovaPluginController.default.constructor.registerVariableGroupType("NOSCordovaPlugin.ShowExternalWebView$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Title",
attrName: "titleInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Headers",
attrName: "headersInLocal",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new NOSCordovaPluginModel.HeaderList();
},
complexType: NOSCordovaPluginModel.HeaderList
}, {
name: "HeaderColor",
attrName: "headerColorInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "#6ea514";
}
}, {
name: "IsDebugMode",
attrName: "isDebugModeInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "HeadersVar",
attrName: "headersVarVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
NOSCordovaPluginController.default.clientActionProxies.showExternalWebView$Action = function (urlIn, titleIn, headersIn, headerColorIn, isDebugModeIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
titleIn = (titleIn === undefined) ? "" : titleIn;
headersIn = (headersIn === undefined) ? new NOSCordovaPluginModel.HeaderList() : headersIn;
headerColorIn = (headerColorIn === undefined) ? "#6ea514" : headerColorIn;
isDebugModeIn = (isDebugModeIn === undefined) ? false : isDebugModeIn;
return controller.executeActionInsideJSNode(NOSCordovaPluginController.default.showExternalWebView$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(urlIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(titleIn, OS.Types.Text), headersIn, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(headerColorIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(isDebugModeIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NOSCordovaPlugin.controller$ShowExternalWebView.NOSCordovaPluginJSActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module)
{
    var scope = module.scope("Scope_NOSCordovaPlugin"); 
    cordova.exec(scope.showPluginCallback.callbackSuccess, scope.showPluginCallback.callbackError, 'NOSCordovaPlugin', 'showExternalWebView', [$parameters.IsDebugMode, $parameters.Url, $parameters.Title, $parameters.Headers, $parameters.HeaderColor, 'mobile-success']);
    
});

function callbackSuccess() {

    
}

function callbackError(error) {

    
}
};
});

define("NOSCordovaPlugin.controller$ShowExternalWebView_v2", ["exports", "OutSystems", "NOSCordovaPlugin.model", "NOSCordovaPlugin.controller", "NOSCordovaPlugin.controller$ShowExternalWebView_v2.NOSCordovaPluginJSActionJS", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "NOSCordovaPlugin.model$HeaderList"], function (exports, OutSystems, NOSCordovaPluginModel, NOSCordovaPluginController, NOSCordovaPlugin_controller_ShowExternalWebView_v2_NOSCordovaPluginJSActionJS) {
var OS = OutSystems.Internal;
NOSCordovaPluginController.default.showExternalWebView_v2$Action = function (urlIn, titleIn, headersIn, headerColorIn, isDebugModeIn, returnURLIn, showBottomBarIn, topBarAlignmentIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NOSCordovaPlugin.ShowExternalWebView_v2$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.titleInLocal = titleIn;
vars.value.headersInLocal = headersIn.clone();
vars.value.headerColorInLocal = headerColorIn;
vars.value.isDebugModeInLocal = isDebugModeIn;
vars.value.returnURLInLocal = returnURLIn;
vars.value.showBottomBarInLocal = showBottomBarIn;
vars.value.topBarAlignmentInLocal = topBarAlignmentIn;
var checkNOSCordovaPluginVar = new OS.DataTypes.VariableHolder();
// Execute Action: LogMessage2
OS.SystemActions.logMessage((((((((((((((((("Curr Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "URL: ") + vars.value.urlInLocal) + "\r\n") + "Title: ") + vars.value.titleInLocal) + "\r\n") + "Headers Length: ") + (vars.value.headersInLocal.length).toString()) + "\r\n") + "Header Color: ") + vars.value.headerColorInLocal) + "\r\n") + "IsDebugMode: ") + (vars.value.isDebugModeInLocal ? "True" : "False")), "NOSCordovaPlugin", callContext);
// Execute Action: CheckNOSCordovaPlugin
checkNOSCordovaPluginVar.value = NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action(callContext);

// IsAvailable?
if((checkNOSCordovaPluginVar.value.isAvailableOut)) {
// Foreach Headers
callContext.iterationContext.registerIterationStart(vars.value.headersInLocal);
try {var headersIterator = callContext.iterationContext.getIterator(vars.value.headersInLocal);
var headersIndex = 0;
while (((headersIndex < vars.value.headersInLocal.length))) {
headersIterator.currentRowNumber = headersIndex;
// HeadersVar
// HeadersVar = HeadersVar + If
vars.value.headersVarVar = (vars.value.headersVarVar + (((((vars.value.headersInLocal.getItem(headersIndex.valueOf()).nameAttr) !== ("")) && ((vars.value.headersInLocal.getItem(headersIndex.valueOf()).valueAttr) !== ("")))) ? ((((((((vars.value.headersVarVar) !== (""))) ? ("!!!") : ("")) + OS.BuiltinFunctions.trim(vars.value.headersInLocal.getItem(headersIndex.valueOf()).nameAttr)) + ";") + OS.BuiltinFunctions.trim(vars.value.headersInLocal.getItem(headersIndex.valueOf()).valueAttr))) : ("")));
headersIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(vars.value.headersInLocal);
}

// Execute Action: LogMessage
OS.SystemActions.logMessage((((((((((("cordova.exec(callbackSuccess, callbackError, \'NOSCordovaPlugin\', \'showExternalWebView\', [" + (vars.value.isDebugModeInLocal ? "True" : "False")) + ",\'") + vars.value.urlInLocal) + "\', \'") + vars.value.titleInLocal) + "\', \'") + vars.value.headersVarVar) + "\', \'") + vars.value.headerColorInLocal) + "\', \'mobile-success\']);"), "NOSCordovaPlugin", callContext);
controller.safeExecuteJSNode(NOSCordovaPlugin_controller_ShowExternalWebView_v2_NOSCordovaPluginJSActionJS, "NOSCordovaPluginJSAction", "ShowExternalWebView_v2", {
Url: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.urlInLocal, OS.Types.Text, true),
IsDebugMode: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.isDebugModeInLocal, OS.Types.Boolean, true),
TopBarAlignment: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.topBarAlignmentInLocal, OS.Types.Text, true),
ReturnURL: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.returnURLInLocal, OS.Types.Text, true),
ShowBottomBar: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.showBottomBarInLocal, OS.Types.Boolean, true),
Title: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.titleInLocal, OS.Types.Text, true),
Headers: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.headersVarVar, OS.Types.Text, true),
HeaderColor: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.headerColorInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
} else {
// Execute Action: LogMessage3
OS.SystemActions.logMessage("The Cordova Plugin is not available...", "NOSCordovaPlugin", callContext);
}

return ;
};
var controller = NOSCordovaPluginController.default;
NOSCordovaPluginController.default.constructor.registerVariableGroupType("NOSCordovaPlugin.ShowExternalWebView_v2$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Title",
attrName: "titleInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Headers",
attrName: "headersInLocal",
mandatory: false,
dataType: OS.Types.RecordList,
defaultValue: function () {
return new NOSCordovaPluginModel.HeaderList();
},
complexType: NOSCordovaPluginModel.HeaderList
}, {
name: "HeaderColor",
attrName: "headerColorInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "#6ea514";
}
}, {
name: "IsDebugMode",
attrName: "isDebugModeInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ReturnURL",
attrName: "returnURLInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShowBottomBar",
attrName: "showBottomBarInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "TopBarAlignment",
attrName: "topBarAlignmentInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "left";
}
}, {
name: "HeadersVar",
attrName: "headersVarVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
NOSCordovaPluginController.default.clientActionProxies.showExternalWebView_v2$Action = function (urlIn, titleIn, headersIn, headerColorIn, isDebugModeIn, returnURLIn, showBottomBarIn, topBarAlignmentIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
titleIn = (titleIn === undefined) ? "" : titleIn;
headersIn = (headersIn === undefined) ? new NOSCordovaPluginModel.HeaderList() : headersIn;
headerColorIn = (headerColorIn === undefined) ? "#6ea514" : headerColorIn;
isDebugModeIn = (isDebugModeIn === undefined) ? false : isDebugModeIn;
returnURLIn = (returnURLIn === undefined) ? "" : returnURLIn;
showBottomBarIn = (showBottomBarIn === undefined) ? false : showBottomBarIn;
topBarAlignmentIn = (topBarAlignmentIn === undefined) ? "left" : topBarAlignmentIn;
return controller.executeActionInsideJSNode(NOSCordovaPluginController.default.showExternalWebView_v2$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(urlIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(titleIn, OS.Types.Text), headersIn, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(headerColorIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(isDebugModeIn, OS.Types.Boolean), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(returnURLIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(showBottomBarIn, OS.Types.Boolean), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(topBarAlignmentIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NOSCordovaPlugin.controller$ShowExternalWebView_v2.NOSCordovaPluginJSActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module)
{
    var scope = module.scope("Scope_NOSCordovaPlugin"); 
    cordova.exec(scope.showPluginCallback.callbackSuccess, scope.showPluginCallback.callbackError, 'NOSCordovaPlugin', 'showExternalWebView', [$parameters.IsDebugMode, $parameters.Url, $parameters.Title, $parameters.Headers, $parameters.HeaderColor, $parameters.ReturnURL, $parameters.ShowBottomBar, $parameters.TopBarAlignment]);
    
});

function callbackSuccess() {

    
}

function callbackError(error) {

    
}
};
});

define("NOSCordovaPlugin.controller$ShowInternalBrowser", ["exports", "OutSystems", "NOSCordovaPlugin.model", "NOSCordovaPlugin.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NOSCordovaPlugin.controller$ShowInternalBrowser.NOSCordovaPluginJSActionJS", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "CommonPlugin.model$ErrorRec", "NOSCordovaPlugin.referencesHealth", "NOSCordovaPlugin.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "NOSCordovaPlugin.referencesHealth$BuildInfoPlugin"], function (exports, OutSystems, NOSCordovaPluginModel, NOSCordovaPluginController, CommonPluginModel, BuildInfoPluginController, NOSCordovaPlugin_controller_ShowInternalBrowser_NOSCordovaPluginJSActionJS) {
var OS = OutSystems.Internal;
NOSCordovaPluginController.default.showInternalBrowser$Action = function (urlIn, titleIn, headerColorIn, isDebugModeIn, methodIn, forceLoginIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NOSCordovaPlugin.ShowInternalBrowser$vars"))());
vars.value.urlInLocal = urlIn;
vars.value.titleInLocal = titleIn;
vars.value.headerColorInLocal = headerColorIn;
vars.value.isDebugModeInLocal = isDebugModeIn;
vars.value.methodInLocal = methodIn;
vars.value.forceLoginInLocal = forceLoginIn;
var checkNOSCordovaPluginVar = new OS.DataTypes.VariableHolder();
var getBuildInfoVar = new OS.DataTypes.VariableHolder();
// Execute Action: LogMessage2
OS.SystemActions.logMessage(((((((((((((((((((("Curr Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "URL: ") + vars.value.urlInLocal) + "\r\n") + "Title: ") + vars.value.titleInLocal) + "\r\n") + "Header Color: ") + vars.value.headerColorInLocal) + "\r\n") + "IsDebugMode: ") + (vars.value.isDebugModeInLocal ? "True" : "False")) + "\r\n") + "Method: ") + vars.value.methodInLocal) + "\r\n") + "Force Login: ") + (vars.value.forceLoginInLocal ? "True" : "False")), "NOSCordovaPlugin", callContext);
// Execute Action: CheckNOSCordovaPlugin
checkNOSCordovaPluginVar.value = NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action(callContext);

// IsAvailable?
if((checkNOSCordovaPluginVar.value.isAvailableOut)) {
// Execute Action: GetBuildInfo
getBuildInfoVar.value = BuildInfoPluginController.default.getBuildInfo$Action(callContext);

controller.safeExecuteJSNode(NOSCordovaPlugin_controller_ShowInternalBrowser_NOSCordovaPluginJSActionJS, "NOSCordovaPluginJSAction", "ShowInternalBrowser", {
PackageName: OS.DataTypes.JSConversions.basicTypeToJS(getBuildInfoVar.value.packageNameOut, OS.Types.Text, true),
IsDebugMode: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.isDebugModeInLocal, OS.Types.Boolean, true),
ForceLogin: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.forceLoginInLocal, OS.Types.Boolean, true),
HeaderColor: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.headerColorInLocal, OS.Types.Text, true),
Url: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.urlInLocal, OS.Types.Text, true),
Method: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.methodInLocal, OS.Types.Text, true),
Title: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.titleInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
// Execute Action: LogMessage
OS.SystemActions.logMessage((((((((((((((("cordova.exec(callbackSuccess, callbackError, \'NOSCordovaPlugin\', \'showInternalBrowser\', [" + (vars.value.isDebugModeInLocal ? "True" : "False")) + ", \'") + vars.value.urlInLocal) + "\', \'") + vars.value.titleInLocal) + "\', \'\', \'") + vars.value.headerColorInLocal) + "\', \'mobile-success\', ") + (vars.value.forceLoginInLocal ? "True" : "False")) + ", \'") + vars.value.methodInLocal) + "\', \'") + getBuildInfoVar.value.packageNameOut) + "\']);"), "NOSCordovaPlugin", callContext);
}

return ;
};
var controller = NOSCordovaPluginController.default;
NOSCordovaPluginController.default.constructor.registerVariableGroupType("NOSCordovaPlugin.ShowInternalBrowser$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Title",
attrName: "titleInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "HeaderColor",
attrName: "headerColorInLocal",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "#6ea514";
}
}, {
name: "IsDebugMode",
attrName: "isDebugModeInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Method",
attrName: "methodInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ForceLogin",
attrName: "forceLoginInLocal",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
NOSCordovaPluginController.default.clientActionProxies.showInternalBrowser$Action = function (urlIn, titleIn, headerColorIn, isDebugModeIn, methodIn, forceLoginIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
titleIn = (titleIn === undefined) ? "" : titleIn;
headerColorIn = (headerColorIn === undefined) ? "#6ea514" : headerColorIn;
isDebugModeIn = (isDebugModeIn === undefined) ? false : isDebugModeIn;
methodIn = (methodIn === undefined) ? "" : methodIn;
forceLoginIn = (forceLoginIn === undefined) ? false : forceLoginIn;
return controller.executeActionInsideJSNode(NOSCordovaPluginController.default.showInternalBrowser$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(urlIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(titleIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(headerColorIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(isDebugModeIn, OS.Types.Boolean), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(methodIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(forceLoginIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NOSCordovaPlugin.controller$ShowInternalBrowser.NOSCordovaPluginJSActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module)
{
    var scope = module.scope("Scope_NOSCordovaPlugin"); 

    /*alert("Com scope");*/
    cordova.exec(scope.showPluginCallback.callbackSuccess, scope.showPluginCallback.callbackError, 'NOSCordovaPlugin', 'showInternalBrowser', [$parameters.IsDebugMode, $parameters.Url, $parameters.Title, '', $parameters.HeaderColor, 'mobile-success', $parameters.ForceLogin, $parameters.Method, $parameters.PackageName]);
});

};
});

define("NOSCordovaPlugin.controller$showSafariViewController_IOS", ["exports", "OutSystems", "NOSCordovaPlugin.model", "NOSCordovaPlugin.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NOSCordovaPlugin.controller$showSafariViewController_IOS.NOSCordovaPluginJSActionJS", "NOSCordovaPlugin.controller$CheckNOSCordovaPlugin", "CommonPlugin.model$ErrorRec", "NOSCordovaPlugin.referencesHealth", "NOSCordovaPlugin.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "NOSCordovaPlugin.referencesHealth$BuildInfoPlugin"], function (exports, OutSystems, NOSCordovaPluginModel, NOSCordovaPluginController, CommonPluginModel, BuildInfoPluginController, NOSCordovaPlugin_controller_showSafariViewController_IOS_NOSCordovaPluginJSActionJS) {
var OS = OutSystems.Internal;
NOSCordovaPluginController.default.showSafariViewController_IOS$Action = function (urlIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("NOSCordovaPlugin.IOSTests.showSafariViewController_IOS$vars"))());
vars.value.urlInLocal = urlIn;
var checkNOSCordovaPluginVar = new OS.DataTypes.VariableHolder();
var getBuildInfoVar = new OS.DataTypes.VariableHolder();
// Execute Action: LogMessage2
OS.SystemActions.logMessage((("BEFORE cordova.exec(scope.showPluginCallback.callbackSuccess, scope.showPluginCallback.callbackError, \'NOSCordovaPlugin\', \'showSafariViewController\', [false, " + vars.value.urlInLocal) + ", \'NOS\',\'\',\'#FF0000\']);"), "PluginIOSTests", callContext);
// Execute Action: CheckNOSCordovaPlugin
checkNOSCordovaPluginVar.value = NOSCordovaPluginController.default.checkNOSCordovaPlugin$Action(callContext);

// IsAvailable?
if((checkNOSCordovaPluginVar.value.isAvailableOut)) {
// Execute Action: GetBuildInfo
getBuildInfoVar.value = BuildInfoPluginController.default.getBuildInfo$Action(callContext);

controller.safeExecuteJSNode(NOSCordovaPlugin_controller_showSafariViewController_IOS_NOSCordovaPluginJSActionJS, "NOSCordovaPluginJSAction", "showSafariViewController_IOS", {
URL: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.urlInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
// Execute Action: LogMessage
OS.SystemActions.logMessage((("AFTER cordova.exec(scope.showPluginCallback.callbackSuccess, scope.showPluginCallback.callbackError, \'NOSCordovaPlugin\', \'showSafariViewController\', [false, " + vars.value.urlInLocal) + ", \'NOS\',\'\',\'#FF0000\']);"), "PluginIOSTests", callContext);
}

return ;
};
var controller = NOSCordovaPluginController.default;
NOSCordovaPluginController.default.constructor.registerVariableGroupType("NOSCordovaPlugin.IOSTests.showSafariViewController_IOS$vars", [{
name: "Url",
attrName: "urlInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
NOSCordovaPluginController.default.clientActionProxies.showSafariViewController_IOS$Action = function (urlIn) {
urlIn = (urlIn === undefined) ? "" : urlIn;
return controller.executeActionInsideJSNode(NOSCordovaPluginController.default.showSafariViewController_IOS$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(urlIn, OS.Types.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("NOSCordovaPlugin.controller$showSafariViewController_IOS.NOSCordovaPluginJSActionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
require(["PluginManager"], function(module)
{
    var scope = module.scope("Scope_NOSCordovaPlugin"); 

    /*alert("Com scope");*/
    cordova.exec(scope.showPluginCallback.callbackSuccess, scope.showPluginCallback.callbackError, 'NOSCordovaPlugin', 'showSafariViewController', [false, $parameters.URL, 'NOS','','#FF0000']);
   
});



};
});

define("NOSCordovaPlugin.controller", ["exports", "OutSystems", "NOSCordovaPlugin.model"], function (exports, OutSystems, NOSCordovaPluginModel) {
var OS = OutSystems.Internal;
var NOSCordovaPluginController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return NOSCordovaPluginController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
NOSCordovaPluginController.default = new Controller();
});
