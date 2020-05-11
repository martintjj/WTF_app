define("WTF_MOB.LoginFlow.NOSID_Password.mvc$model", ["OutSystems", "WTF_MOB.model", "Mobile_LoginNOS.model", "WTF_MOB.controller", "WTF_MBP.controller", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Password_IOS.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Password.mvc$model", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$PreLoginParameters"], function (OutSystems, WTF_MOBModel, Mobile_LoginNOSModel, WTF_MOBController, WTF_MBPController, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Password_IOS_mvcModel, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Password_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("OperatingSystem", "operatingSystemVar", "OperatingSystem", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationIdentifier", "applicationIdentifierVar", "ApplicationIdentifier", true, OS.Types.Text, function () {
return "";
}), 
this.attr("WebViewParameters", "webViewParametersVar", "WebViewParameters", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.WebView_ParametersRec());
}, Mobile_LoginNOSModel.WebView_ParametersRec), 
this.attr("ApplicationName", "applicationNameVar", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ScreenName", "screenNameIn", "ScreenName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_screenNameInDataFetchStatus", "_screenNameInDataFetchStatus", "_screenNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("FromPage", "fromPageIn", "FromPage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_fromPageInDataFetchStatus", "_fromPageInDataFetchStatus", "_fromPageInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Password_IOS_mvcModel.hasValidationWidgets || Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Password_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ScreenName" in inputs) {
this.variables.screenNameIn = inputs.ScreenName;
if("_screenNameInDataFetchStatus" in inputs) {
this.variables._screenNameInDataFetchStatus = inputs._screenNameInDataFetchStatus;
}

}

if("FromPage" in inputs) {
this.variables.fromPageIn = inputs.FromPage;
if("_fromPageInDataFetchStatus" in inputs) {
this.variables._fromPageInDataFetchStatus = inputs._fromPageInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.LoginFlow.NOSID_Password.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.LoginFlow.NOSID_Password.mvc$model", "WTF_MOB.LoginFlow.NOSID_Password.mvc$controller", "OutSystemsReactWidgets", "Mobile_LoginNOS.OAuth_Flow_IOS.NOSID_Password_IOS.mvc$view", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Password.mvc$view", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$PreLoginParameters"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, React, OSView, WTF_MOB_LoginFlow_NOSID_Password_mvc_model, WTF_MOB_LoginFlow_NOSID_Password_mvc_controller, OSWidgets, Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Password_IOS_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Password_mvc_view) {
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
        View.displayName = "LoginFlow.NOSID_Password";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.LoginFlow.NOSID_Password.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Password_IOS_mvc_view, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Password_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Password_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_LoginFlow_NOSID_Password_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "password b-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.operatingSystemVar === WTF_MOBModel.staticEntities.mobile_OperatingSystem.iOS), false, this, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_IOS_NOSID_Password_IOS_mvc_view, {
inputs: {
ApplicationIdentifier: model.variables.applicationIdentifierVar,
Style_Class: "text-uppercase",
RightStyle_Class: "c-white text-right -vCenter",
ViewController_Parameters: model.variables.webViewParametersVar,
ApplicationName: model.variables.applicationNameVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
password_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Password_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
password_Close$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Password_Close$Action(controller.callContext(eventHandlerContext));
});
;
},
password_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Password_Start$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Password_mvc_view, {
inputs: {
Style_Class: "text-uppercase",
ApplicationIdentifier: model.variables.applicationIdentifierVar,
RightStyle_Class: "c-white text-right -vCenter",
ApplicationName: model.variables.applicationNameVar,
ViewController_Parameters: model.variables.webViewParametersVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
password_Error$Action: function (error_MessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Password_Error$Action(error_MessageIn, controller.callContext(eventHandlerContext));
});
;
},
password_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Password_Start$Action(controller.callContext(eventHandlerContext));
});
;
},
password_Close$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nOSID_Password_Close$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.LoginFlow.NOSID_Password.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "Mobile_LoginNOS.model", "WTF_MBP.controller", "WTF_MOB.languageResources", "Mobile_LoginNOS.model$WebView_ParametersRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$Mobile_LoginNOS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$PreLoginParameters"], function (OutSystems, WTF_MOBModel, WTF_MOBController, Mobile_LoginNOSModel, WTF_MBPController, WTF_MOBLanguageResources) {
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
Controller.prototype._nOSID_Password_Start$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Password_Start");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.fromPageIn === "Perfil"))) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Perfil", "Alterar palavra-passe", 0, "", callContext);
}

});
});
};
Controller.prototype._nOSID_Password_Close$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Password_Close");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Password_Close
return controller.password_Close$Action(callContext);
});
};
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var get_OperatingSystemVar = new OS.DataTypes.VariableHolder();
var preLoginParametersVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Get_OperatingSystem
get_OperatingSystemVar.value = WTF_MBPController.default.get_OperatingSystem$Action(callContext);

// Execute Action: PreLoginParameters
model.flush();
return WTF_MBPController.default.preLoginParameters$Action(model.variables.screenNameIn, callContext).then(function (value) {
preLoginParametersVar.value = value;
}).then(function () {
// Set vars
// ApplicationName = PreLoginParameters.ApplicationName
model.variables.applicationNameVar = preLoginParametersVar.value.applicationNameOut;
// OperatingSystem = Get_OperatingSystem.OperatingSystem
model.variables.operatingSystemVar = get_OperatingSystemVar.value.operatingSystemOut;
// ApplicationIdentifier = PreLoginParameters.ApplicationIdentifier
model.variables.applicationIdentifierVar = preLoginParametersVar.value.applicationIdentifierOut;
// WebViewParameters = PreLoginParameters.WebViewParameters
model.variables.webViewParametersVar = preLoginParametersVar.value.webViewParametersOut;
});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Password.OnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._nOSID_Password_Error$Action = function (error_MessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NOSID_Password_Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.LoginFlow.NOSID_Password.NOSID_Password_Error$vars"))());
vars.value.error_MessageInLocal = error_MessageIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Password_Error
return controller.password_Error$Action(vars.value.error_MessageInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.LoginFlow.NOSID_Password.NOSID_Password_Error$vars", [{
name: "Error_Message",
attrName: "error_MessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
};

Controller.prototype.nOSID_Password_Start$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Password_Start$Action, callContext);

};
Controller.prototype.nOSID_Password_Close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Password_Close$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.nOSID_Password_Error$Action = function (error_MessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nOSID_Password_Error$Action, callContext, error_MessageIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.password_Error$Action = function () {
return Promise.resolve();
};
Controller.prototype.password_Close$Action = function () {
return Promise.resolve();
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
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

};
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
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

