define("BALANCE_MBLOCKS.TopUpBlocks.TopUpValueButton.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model"], function (OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Value", "valueIn", "Value", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_valueInDataFetchStatus", "_valueInDataFetchStatus", "_valueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsSelected", "isSelectedIn", "IsSelected", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PresetId", "presetIdIn", "PresetId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_presetIdInDataFetchStatus", "_presetIdInDataFetchStatus", "_presetIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsLast", "isLastIn", "IsLast", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isLastInDataFetchStatus", "_isLastInDataFetchStatus", "_isLastInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ValueCustomStyleClass", "valueCustomStyleClassIn", "ValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_valueCustomStyleClassInDataFetchStatus", "_valueCustomStyleClassInDataFetchStatus", "_valueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("Value" in inputs) {
this.variables.valueIn = inputs.Value;
if("_valueInDataFetchStatus" in inputs) {
this.variables._valueInDataFetchStatus = inputs._valueInDataFetchStatus;
}

}

if("IsSelected" in inputs) {
this.variables.isSelectedIn = inputs.IsSelected;
if("_isSelectedInDataFetchStatus" in inputs) {
this.variables._isSelectedInDataFetchStatus = inputs._isSelectedInDataFetchStatus;
}

}

if("PresetId" in inputs) {
this.variables.presetIdIn = inputs.PresetId;
if("_presetIdInDataFetchStatus" in inputs) {
this.variables._presetIdInDataFetchStatus = inputs._presetIdInDataFetchStatus;
}

}

if("IsLast" in inputs) {
this.variables.isLastIn = inputs.IsLast;
if("_isLastInDataFetchStatus" in inputs) {
this.variables._isLastInDataFetchStatus = inputs._isLastInDataFetchStatus;
}

}

if("ValueCustomStyleClass" in inputs) {
this.variables.valueCustomStyleClassIn = inputs.ValueCustomStyleClass;
if("_valueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._valueCustomStyleClassInDataFetchStatus = inputs._valueCustomStyleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.TopUpBlocks.TopUpValueButton.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.TopUpBlocks.TopUpValueButton.mvc$model", "BALANCE_MBLOCKS.TopUpBlocks.TopUpValueButton.mvc$controller", "OutSystemsReactWidgets"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, React, OSView, BALANCE_MBLOCKS_TopUpBlocks_TopUpValueButton_mvc_model, BALANCE_MBLOCKS_TopUpBlocks_TopUpValueButton_mvc_controller, OSWidgets) {
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
        View.displayName = "TopUpBlocks.TopUpValueButton";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_TopUpBlocks_TopUpValueButton_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_TopUpBlocks_TopUpValueButton_mvc_controller;
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
extendedProperties: {
style: model.getCachedValue(idService.getId("dF0Hmg3pYkeKLSTQe_N3zA.style"), function () {
return ((model.variables.isLastIn) ? ("margin-right: 0px") : (""));
}, function () {
return model.variables.isLastIn;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("btnPresetValue.Style"), function () {
return ("button-group-item " + ((model.variables.isSelectedIn) ? (" button-group-selected-item") : ("")));
}, function () {
return model.variables.isSelectedIn;
}),
visible: true,
_idProps: {
service: idService,
name: "btnPresetValue"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isSelectedInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: model.variables.valueCustomStyleClassIn,
value: model.variables.valueIn,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueInDataFetchStatus)
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.TopUpBlocks.TopUpValueButton.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBLOCKS.languageResources"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._onClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnClickEvent
return controller.onClickEvent$Action(model.variables.presetIdIn, callContext);
});
};

Controller.prototype.onClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext);

};
Controller.prototype.onClickEvent$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return BALANCE_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, BALANCE_MBLOCKSLanguageResources);
});

