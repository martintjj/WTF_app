define("ACCOUNTINFO_MBLOCKS.GenericBlocks.IntroText.mvc$model", ["OutSystems", "ACCOUNTINFO_MBLOCKS.model"], function (OutSystems, ACCOUNTINFO_MBLOCKSModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Text", "textIn", "Text", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("StyleClass", "styleClassIn", "StyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("Text" in inputs) {
this.variables.textIn = inputs.Text;
if("_textInDataFetchStatus" in inputs) {
this.variables._textInDataFetchStatus = inputs._textInDataFetchStatus;
}

}

if("StyleClass" in inputs) {
this.variables.styleClassIn = inputs.StyleClass;
if("_styleClassInDataFetchStatus" in inputs) {
this.variables._styleClassInDataFetchStatus = inputs._styleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("ACCOUNTINFO_MBLOCKS.GenericBlocks.IntroText.mvc$view", ["OutSystems", "ACCOUNTINFO_MBLOCKS.model", "ACCOUNTINFO_MBLOCKS.controller", "react", "OutSystemsReactView", "ACCOUNTINFO_MBLOCKS.GenericBlocks.IntroText.mvc$model", "ACCOUNTINFO_MBLOCKS.GenericBlocks.IntroText.mvc$controller", "OutSystemsReactWidgets"], function (OutSystems, ACCOUNTINFO_MBLOCKSModel, ACCOUNTINFO_MBLOCKSController, React, OSView, ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvc_model, ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvc_controller, OSWidgets) {
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
        View.displayName = "GenericBlocks.IntroText";
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
                return ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvc_controller;
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
style: "pa-16 ",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: ("a-textIntro " + model.variables.styleClassIn),
value: model.variables.textIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._styleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textInDataFetchStatus)
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ACCOUNTINFO_MBLOCKS.GenericBlocks.IntroText.mvc$controller", ["OutSystems", "ACCOUNTINFO_MBLOCKS.model", "ACCOUNTINFO_MBLOCKS.controller", "ACCOUNTINFO_MBLOCKS.languageResources"], function (OutSystems, ACCOUNTINFO_MBLOCKSModel, ACCOUNTINFO_MBLOCKSController, ACCOUNTINFO_MBLOCKSLanguageResources) {
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
return ACCOUNTINFO_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, ACCOUNTINFO_MBLOCKSLanguageResources);
});

