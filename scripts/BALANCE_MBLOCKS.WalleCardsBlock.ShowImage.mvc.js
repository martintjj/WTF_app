define("BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model"], function (OutSystems, BALANCE_MBLOCKSModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("BinaryData", "binaryDataIn", "BinaryData", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("_binaryDataInDataFetchStatus", "_binaryDataInDataFetchStatus", "_binaryDataInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MimeType", "mimeTypeIn", "MimeType", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_mimeTypeInDataFetchStatus", "_mimeTypeInDataFetchStatus", "_mimeTypeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Classes", "classesIn", "Classes", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_classesInDataFetchStatus", "_classesInDataFetchStatus", "_classesInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("BinaryData" in inputs) {
this.variables.binaryDataIn = inputs.BinaryData;
if("_binaryDataInDataFetchStatus" in inputs) {
this.variables._binaryDataInDataFetchStatus = inputs._binaryDataInDataFetchStatus;
}

}

if("MimeType" in inputs) {
this.variables.mimeTypeIn = inputs.MimeType;
if("_mimeTypeInDataFetchStatus" in inputs) {
this.variables._mimeTypeInDataFetchStatus = inputs._mimeTypeInDataFetchStatus;
}

}

if("Classes" in inputs) {
this.variables.classesIn = inputs.Classes;
if("_classesInDataFetchStatus" in inputs) {
this.variables._classesInDataFetchStatus = inputs._classesInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$model", "BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$controller", "OutSystemsReactWidgets"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, React, OSView, BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_model, BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_controller, OSWidgets) {
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
        View.displayName = "WalleCardsBlock.ShowImage";
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
                return BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_controller;
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
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
style: "max-height: 20px;\r\ntransform: none;"
},
style: model.variables.classesIn,
type: /*External*/ 1,
url: "",
_idProps: {
service: idService,
name: "ImageSVG"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._classesInDataFetchStatus)
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$controller.OnRender.SetImageJS"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBLOCKSLanguageResources, BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_controller_OnRender_SetImageJS) {
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
Controller.prototype._onRender$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
controller.safeExecuteJSNode(BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_controller_OnRender_SetImageJS, "SetImage", "OnRender", {
ImageId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("ImageSVG"), OS.Types.Text, true),
BinaryData: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.binaryDataIn, OS.Types.BinaryData, true),
MimeType: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.mimeTypeIn, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
};

Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onRender$Action(callContext);

};
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
define("BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$controller.OnRender.SetImageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
document.getElementById($parameters.ImageId).setAttribute("src",  "data:" + $parameters.MimeType + ";base64," + $parameters.BinaryData);
};
});

