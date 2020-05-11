define("MobileUIWidgets.WidgetsContent.PopUp_v4.mvc$model", ["OutSystems", "MobileUIWidgets.model", "MobileUIWidgets.controller", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.WidgetsContent.ClickOutsidePopupHandle.mvc$model", "MobileUIWidgets.controller$StatusBar_ChangeColor"], function (OutSystems, MobileUIWidgetsModel, MobileUIWidgetsController, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, MobileUIWidgets_WidgetsContent_ClickOutsidePopupHandle_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ShowPopUp", "showPopUpIn", "ShowPopUp", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showPopUpInDataFetchStatus", "_showPopUpInDataFetchStatus", "_showPopUpInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("StyleClass", "styleClassIn", "StyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HasHeader", "hasHeaderIn", "HasHeader", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_hasHeaderInDataFetchStatus", "_hasHeaderInDataFetchStatus", "_hasHeaderInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HeaderText", "headerTextIn", "HeaderText", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_headerTextInDataFetchStatus", "_headerTextInDataFetchStatus", "_headerTextInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HasCloseIcon", "hasCloseIconIn", "HasCloseIcon", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", "_hasCloseIconInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HasStatusBarPlugin", "hasStatusBarPluginIn", "HasStatusBarPlugin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_hasStatusBarPluginInDataFetchStatus", "_hasStatusBarPluginInDataFetchStatus", "_hasStatusBarPluginInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("InitialStatusBarColor", "initialStatusBarColorIn", "InitialStatusBarColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_initialStatusBarColorInDataFetchStatus", "_initialStatusBarColorInDataFetchStatus", "_initialStatusBarColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MasterColorId", "masterColorIdIn", "MasterColorId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_masterColorIdInDataFetchStatus", "_masterColorIdInDataFetchStatus", "_masterColorIdInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_ClickOutsidePopupHandle_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ShowPopUp" in inputs) {
this.variables.showPopUpIn = inputs.ShowPopUp;
if("_showPopUpInDataFetchStatus" in inputs) {
this.variables._showPopUpInDataFetchStatus = inputs._showPopUpInDataFetchStatus;
}

}

if("StyleClass" in inputs) {
this.variables.styleClassIn = inputs.StyleClass;
if("_styleClassInDataFetchStatus" in inputs) {
this.variables._styleClassInDataFetchStatus = inputs._styleClassInDataFetchStatus;
}

}

if("HasHeader" in inputs) {
this.variables.hasHeaderIn = inputs.HasHeader;
if("_hasHeaderInDataFetchStatus" in inputs) {
this.variables._hasHeaderInDataFetchStatus = inputs._hasHeaderInDataFetchStatus;
}

}

if("HeaderText" in inputs) {
this.variables.headerTextIn = inputs.HeaderText;
if("_headerTextInDataFetchStatus" in inputs) {
this.variables._headerTextInDataFetchStatus = inputs._headerTextInDataFetchStatus;
}

}

if("HasCloseIcon" in inputs) {
this.variables.hasCloseIconIn = inputs.HasCloseIcon;
if("_hasCloseIconInDataFetchStatus" in inputs) {
this.variables._hasCloseIconInDataFetchStatus = inputs._hasCloseIconInDataFetchStatus;
}

}

if("HasStatusBarPlugin" in inputs) {
this.variables.hasStatusBarPluginIn = inputs.HasStatusBarPlugin;
if("_hasStatusBarPluginInDataFetchStatus" in inputs) {
this.variables._hasStatusBarPluginInDataFetchStatus = inputs._hasStatusBarPluginInDataFetchStatus;
}

}

if("InitialStatusBarColor" in inputs) {
this.variables.initialStatusBarColorIn = inputs.InitialStatusBarColor;
if("_initialStatusBarColorInDataFetchStatus" in inputs) {
this.variables._initialStatusBarColorInDataFetchStatus = inputs._initialStatusBarColorInDataFetchStatus;
}

}

if("MasterColorId" in inputs) {
this.variables.masterColorIdIn = inputs.MasterColorId;
if("_masterColorIdInDataFetchStatus" in inputs) {
this.variables._masterColorIdInDataFetchStatus = inputs._masterColorIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("MobileUIWidgets.WidgetsContent.PopUp_v4.mvc$view", ["OutSystems", "MobileUIWidgets.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "MobileUIWidgets.WidgetsContent.PopUp_v4.mvc$model", "MobileUIWidgets.WidgetsContent.PopUp_v4.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.WidgetsContent.ClickOutsidePopupHandle.mvc$view", "MobileUIWidgets.controller$StatusBar_ChangeColor"], function (OutSystems, MobileUIWidgetsModel, MobileUIWidgetsController, React, OSView, MobileUIWidgets_WidgetsContent_PopUp_v4_mvc_model, MobileUIWidgets_WidgetsContent_PopUp_v4_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsContent_ClickOutsidePopupHandle_mvc_view) {
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
        View.displayName = "WidgetsContent.PopUp_v4";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsContent_ClickOutsidePopupHandle_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return MobileUIWidgets_WidgetsContent_PopUp_v4_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return MobileUIWidgets_WidgetsContent_PopUp_v4_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(OSWidgets.Popup, {
showPopup: model.variables.showPopUpIn,
style: model.getCachedValue(idService.getId("I7+2rxlGAE2+34l1Z3ylJw.Style"), function () {
return ((((("popup-dialog " + ((model.variables.hasHeaderIn) ? ("-header") : (""))) + " ") + model.variables.styleClassIn) + " ") + model.variables.masterColorIdIn);
}, function () {
return model.variables.hasHeaderIn;
}, function () {
return model.variables.styleClassIn;
}, function () {
return model.variables.masterColorIdIn;
}),
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
showPopup_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showPopUpInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasHeaderInDataFetchStatus, model.variables._styleClassInDataFetchStatus, model.variables._masterColorIdInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-popUp",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "o-popUpHeader",
visible: model.variables.hasHeaderIn,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasHeaderInDataFetchStatus)
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.popUpHeader,
style: "d-inline-block va-middle",
_idProps: {
service: idService,
name: "PopUpHeader"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "o-popUpTitle",
value: model.variables.headerTextIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._headerTextInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closePopupAction$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "o-popUpIcon",
visible: model.variables.hasCloseIconIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasCloseIconInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: MobileUIWidgetsModel.staticEntities.iCON_CLASS.iconClose,
IconSize: MobileUIWidgetsModel.staticEntities.iCON_SIZE.small
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.popUpContent,
style: "o-popUpContent",
_idProps: {
service: idService,
name: "PopUpContent"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(MobileUIWidgets_WidgetsContent_ClickOutsidePopupHandle_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
clickedOutside$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closePopupAction$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "8",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("MobileUIWidgets.WidgetsContent.PopUp_v4.mvc$controller", ["OutSystems", "MobileUIWidgets.model", "MobileUIWidgets.controller", "MobileUIWidgets.languageResources", "MobileUIWidgets.controller$StatusBar_ChangeColor"], function (OutSystems, MobileUIWidgetsModel, MobileUIWidgetsController, MobileUIWidgetsLanguageResources) {
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
Controller.prototype._closePopupAction$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ClosePopupAction");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: ClosePopUp
return controller.closePopUp$Action(callContext).then(function () {
if((model.variables.hasStatusBarPluginIn)) {
// Execute Action: StatusBar_ChangeColor
MobileUIWidgetsController.default.statusBar_ChangeColor$Action(model.variables.initialStatusBarColorIn, callContext);
}

});
});
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
if((model.variables.hasStatusBarPluginIn)) {
if((model.variables.showPopUpIn)) {
// Execute Action: StatusBar_ChangeColor
MobileUIWidgetsController.default.statusBar_ChangeColor$Action(MobileUIWidgetsModel.staticEntities.hEX_COLORS.black, callContext);
} else {
// Execute Action: StatusBar_ChangeColor2
MobileUIWidgetsController.default.statusBar_ChangeColor$Action(model.variables.initialStatusBarColorIn, callContext);
}

}

};

Controller.prototype.closePopupAction$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closePopupAction$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.closePopUp$Action = function () {
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
return MobileUIWidgetsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, MobileUIWidgetsLanguageResources);
});

