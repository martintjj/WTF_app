define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Profile.mvc$model", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "ViewControllerPlugin.Main_ViewController.ViewController.mvc$model", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.controller$ViewControllerValidation", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, ViewControllerPlugin_Main_ViewController_ViewController_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("URL_EndPoint", "uRL_EndPointVar", "URL_EndPoint", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsVisible", "isVisibleVar", "IsVisible", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CallBackURL", "callBackURLVar", "CallBackURL", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ApplicationName", "applicationNameIn", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", "_applicationNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ApplicationIdentifier", "applicationIdentifierIn", "ApplicationIdentifier", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationIdentifierInDataFetchStatus", "_applicationIdentifierInDataFetchStatus", "_applicationIdentifierInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ViewController_Parameters", "viewController_ParametersIn", "ViewController_Parameters", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Mobile_LoginNOSModel.WebView_ParametersRec());
}, Mobile_LoginNOSModel.WebView_ParametersRec), 
this.attr("_viewController_ParametersInDataFetchStatus", "_viewController_ParametersInDataFetchStatus", "_viewController_ParametersInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Style_Class", "style_ClassIn", "Style_Class", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_style_ClassInDataFetchStatus", "_style_ClassInDataFetchStatus", "_style_ClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RightStyle_Class", "rightStyle_ClassIn", "RightStyle_Class", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_rightStyle_ClassInDataFetchStatus", "_rightStyle_ClassInDataFetchStatus", "_rightStyle_ClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || ViewControllerPlugin_Main_ViewController_ViewController_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ApplicationName" in inputs) {
this.variables.applicationNameIn = inputs.ApplicationName;
if("_applicationNameInDataFetchStatus" in inputs) {
this.variables._applicationNameInDataFetchStatus = inputs._applicationNameInDataFetchStatus;
}

}

if("ApplicationIdentifier" in inputs) {
this.variables.applicationIdentifierIn = inputs.ApplicationIdentifier;
if("_applicationIdentifierInDataFetchStatus" in inputs) {
this.variables._applicationIdentifierInDataFetchStatus = inputs._applicationIdentifierInDataFetchStatus;
}

}

if("ViewController_Parameters" in inputs) {
this.variables.viewController_ParametersIn = inputs.ViewController_Parameters;
if("_viewController_ParametersInDataFetchStatus" in inputs) {
this.variables._viewController_ParametersInDataFetchStatus = inputs._viewController_ParametersInDataFetchStatus;
}

}

if("Style_Class" in inputs) {
this.variables.style_ClassIn = inputs.Style_Class;
if("_style_ClassInDataFetchStatus" in inputs) {
this.variables._style_ClassInDataFetchStatus = inputs._style_ClassInDataFetchStatus;
}

}

if("RightStyle_Class" in inputs) {
this.variables.rightStyle_ClassIn = inputs.RightStyle_Class;
if("_rightStyle_ClassInDataFetchStatus" in inputs) {
this.variables._rightStyle_ClassInDataFetchStatus = inputs._rightStyle_ClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Profile.mvc$view", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "react", "OutSystemsReactView", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Profile.mvc$model", "Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Profile.mvc$controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "ViewControllerPlugin.Main_ViewController.ViewController.mvc$view", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.controller$ViewControllerValidation", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, React, OSView, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Profile_mvc_model, Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Profile_mvc_controller, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, ViewControllerPlugin_Main_ViewController_ViewController_mvc_view) {
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
        View.displayName = "OAuth_Flow_Android.NOSID_Profile";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, ViewControllerPlugin_Main_ViewController_ViewController_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Profile_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return Mobile_LoginNOS_OAuth_Flow_Android_NOSID_Profile_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRipple: false,
RightStyleClass: model.variables.rightStyle_ClassIn,
_rightStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightStyle_ClassInDataFetchStatus),
StyleClass: model.variables.style_ClassIn,
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._style_ClassInDataFetchStatus),
HasLeftSide: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.profileOnNOSID$Action(controller.callContext(eventHandlerContext));
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
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "a-flexCardTitle",
value: "Editar perfil",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-flexCardDesc",
value: "Edite os seus dados pessoais nas apps NOS",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: Mobile_LoginNOSModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: Mobile_LoginNOSModel.staticEntities.iCON_SIZE.xSmall
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
uuid: "3",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(ViewControllerPlugin_Main_ViewController_ViewController_mvc_view, {
inputs: {
Url: model.variables.uRL_EndPointVar,
TintColor: model.variables.viewController_ParametersIn.tintColorAttr,
_tintColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
ReaderMode: model.variables.viewController_ParametersIn.readerModeAttr,
_readerModeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
BarColor: model.variables.viewController_ParametersIn.barColorAttr,
_barColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
ControlTintColor: model.variables.viewController_ParametersIn.controlTintColorAttr,
_controlTintColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
IsVisible: model.variables.isVisibleVar,
Animated: model.variables.viewController_ParametersIn.animatedAttr,
_animatedInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus),
Hidden: model.variables.viewController_ParametersIn.hiddenAttr,
_hiddenInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._viewController_ParametersInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onLoaded$Action: function () {
var eventHandlerContext = callContext.clone();
controller.viewControllerOnLoaded$Action(controller.callContext(eventHandlerContext));

;
},
onClosed$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.viewControllerOnClosed$Action(controller.callContext(eventHandlerContext));
});
;
},
onOpened$Action: function () {
var eventHandlerContext = callContext.clone();
controller.viewControllerOnOpened$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Profile.mvc$controller", ["OutSystems", "Mobile_LoginNOS.model", "Mobile_LoginNOS.controller", "Mobile_LoginNOS.languageResources", "Mobile_LoginNOS.controller$BuildApplicationIdentifier", "Mobile_LoginNOS.controller$ViewControllerValidation", "Mobile_LoginNOS.controller$Audit", "Mobile_LoginNOS.model$WebView_ParametersRec"], function (OutSystems, Mobile_LoginNOSModel, Mobile_LoginNOSController, Mobile_LoginNOSLanguageResources) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.profile$ServerAction = function (callBackURLIn, callContext) {
var controller = this.controller;
var inputs = {
CallBackURL: OS.DataTypes.JSConversions.basicTypeToJS(callBackURLIn, OS.Types.Text)
};
return controller.callServerAction("Profile", "screenservices/Mobile_LoginNOS/OAuth_Flow_Android/NOSID_Profile/ActionProfile", "DGVSkQEspA+jhJ9NbcP8jw", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Profile$ActionProfile"))();
executeServerActionResult.uRLOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.URL, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("Mobile_LoginNOS.OAuth_Flow_Android.NOSID_Profile$ActionProfile", [{
name: "URL",
attrName: "uRLOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._profileOnNOSID$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ProfileOnNOSID");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var profileVar = new OS.DataTypes.VariableHolder();
var buildApplicationIdentifierVar = new OS.DataTypes.VariableHolder();
var viewControllerValidationVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// CallBackURL = ""
model.variables.callBackURLVar = "";
// Execute Action: ViewControllerValidation
viewControllerValidationVar.value = Mobile_LoginNOSController.default.viewControllerValidation$Action(callContext);

return OS.Flow.executeSequence(function () {
if((((viewControllerValidationVar.value.errorMessageOut) !== ("")))) {
// Trigger Event: LoginError
return controller.profile_Error$Action(viewControllerValidationVar.value.errorMessageOut, callContext);
} else {
// Execute Action: BuildApplicationIdentifier
buildApplicationIdentifierVar.value = Mobile_LoginNOSController.default.buildApplicationIdentifier$Action(model.variables.applicationNameIn, model.variables.applicationIdentifierIn, callContext);

return OS.Flow.executeSequence(function () {
if((buildApplicationIdentifierVar.value.errorOut)) {
// Trigger Event: Login_Error
return controller.profile_Error$Action(buildApplicationIdentifierVar.value.error_MessageOut, callContext);
} else {
// ApplicationIdentifier = BuildApplicationIdentifier.AppIdentifierRebuilded
model.variables.applicationIdentifierIn = buildApplicationIdentifierVar.value.appIdentifierRebuildedOut;
// Set CallBack URL
// CallBackURL = ApplicationIdentifier + ViewController_Parameters.URL_Callback
model.variables.callBackURLVar = (model.variables.applicationIdentifierIn + model.variables.viewController_ParametersIn.uRL_CallbackAttr);
// Execute Action: Profile
model.flush();
return controller.profile$ServerAction(model.variables.callBackURLVar, callContext).then(function (value) {
profileVar.value = value;
}).then(function () {
// Execute Action: Audit
Mobile_LoginNOSController.default.audit$Action(model.variables.applicationNameIn, ("NOSID_Profile | URL End Point: " + profileVar.value.uRLOut), callContext);
// URL_EndPoint = Profile.URL
model.variables.uRL_EndPointVar = profileVar.value.uRLOut;
// IsVisible = True
model.variables.isVisibleVar = true;
// Trigger Event: Profile_Start
return controller.profile_Start$Action(callContext);
});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("NOSID_Profile.ProfileOnNOSID", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync();

});
}

throw ex;
});
};
Controller.prototype._viewControllerOnOpened$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ViewControllerOnOpened");
callContext = controller.callContext(callContext);
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
};
Controller.prototype._viewControllerOnClosed$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ViewControllerOnClosed");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// IsVisible = False
model.variables.isVisibleVar = false;
// Trigger Event: Profile_Close
return controller.profile_Close$Action(callContext);
});
};
Controller.prototype._viewControllerOnLoaded$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ViewControllerOnLoaded");
callContext = controller.callContext(callContext);
};

Controller.prototype.profileOnNOSID$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._profileOnNOSID$Action, callContext);

};
Controller.prototype.viewControllerOnOpened$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._viewControllerOnOpened$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.viewControllerOnClosed$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._viewControllerOnClosed$Action, callContext);

};
Controller.prototype.viewControllerOnLoaded$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._viewControllerOnLoaded$Action, callContext);

};
Controller.prototype.profile_Start$Action = function () {
return Promise.resolve();
};
Controller.prototype.profile_Error$Action = function () {
return Promise.resolve();
};
Controller.prototype.profile_Close$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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
return Mobile_LoginNOSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, Mobile_LoginNOSLanguageResources);
});

