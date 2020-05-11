define("BALANCE_MBLOCKS.GenericBlocks.PreFilledInput.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model"], function (OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("FilledText", "filledTextIn", "FilledText", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_filledTextInDataFetchStatus", "_filledTextInDataFetchStatus", "_filledTextInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("StyleClasses", "styleClassesIn", "StyleClasses", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_styleClassesInDataFetchStatus", "_styleClassesInDataFetchStatus", "_styleClassesInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowFilledText", "showFilledTextIn", "ShowFilledText", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showFilledTextInDataFetchStatus", "_showFilledTextInDataFetchStatus", "_showFilledTextInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("FilledText" in inputs) {
this.variables.filledTextIn = inputs.FilledText;
if("_filledTextInDataFetchStatus" in inputs) {
this.variables._filledTextInDataFetchStatus = inputs._filledTextInDataFetchStatus;
}

}

if("StyleClasses" in inputs) {
this.variables.styleClassesIn = inputs.StyleClasses;
if("_styleClassesInDataFetchStatus" in inputs) {
this.variables._styleClassesInDataFetchStatus = inputs._styleClassesInDataFetchStatus;
}

}

if("ShowFilledText" in inputs) {
this.variables.showFilledTextIn = inputs.ShowFilledText;
if("_showFilledTextInDataFetchStatus" in inputs) {
this.variables._showFilledTextInDataFetchStatus = inputs._showFilledTextInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.GenericBlocks.PreFilledInput.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.GenericBlocks.PreFilledInput.mvc$model", "BALANCE_MBLOCKS.GenericBlocks.PreFilledInput.mvc$controller", "OutSystemsReactWidgets"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, React, OSView, BALANCE_MBLOCKS_GenericBlocks_PreFilledInput_mvc_model, BALANCE_MBLOCKS_GenericBlocks_PreFilledInput_mvc_controller, OSWidgets) {
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
        View.displayName = "GenericBlocks.PreFilledInput";
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
                return BALANCE_MBLOCKS_GenericBlocks_PreFilledInput_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_GenericBlocks_PreFilledInput_mvc_controller;
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
style: ("mt-8 m-preFilledContainer " + model.variables.styleClassesIn),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._styleClassesInDataFetchStatus)
}, $if(model.variables.showFilledTextIn, false, this, function () {
return [React.createElement(OSWidgets.Expression, {
style: "m-preFilledText",
value: model.variables.filledTextIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._filledTextInDataFetchStatus)
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.input,
style: "m-preFilledInput",
_idProps: {
service: idService,
name: "Input"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.GenericBlocks.PreFilledInput.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBLOCKS.languageResources"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBLOCKSLanguageResources) {
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

