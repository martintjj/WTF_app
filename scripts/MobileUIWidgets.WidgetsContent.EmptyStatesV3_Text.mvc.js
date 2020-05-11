define("MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$model", ["OutSystems", "MobileUIWidgets.model"], function (OutSystems, MobileUIWidgetsModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("StyleClass", "styleClassIn", "StyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", "_styleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Title", "titleIn", "Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Subtitle", "subtitleIn", "Subtitle", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", "_subtitleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Text", "textIn", "Text", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsVerticalAligned", "isVerticalAlignedIn", "IsVerticalAligned", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isVerticalAlignedInDataFetchStatus", "_isVerticalAlignedInDataFetchStatus", "_isVerticalAlignedInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HasSpoke", "hasSpokeIn", "HasSpoke", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_hasSpokeInDataFetchStatus", "_hasSpokeInDataFetchStatus", "_hasSpokeInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("StyleClass" in inputs) {
this.variables.styleClassIn = inputs.StyleClass;
if("_styleClassInDataFetchStatus" in inputs) {
this.variables._styleClassInDataFetchStatus = inputs._styleClassInDataFetchStatus;
}

}

if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("Subtitle" in inputs) {
this.variables.subtitleIn = inputs.Subtitle;
if("_subtitleInDataFetchStatus" in inputs) {
this.variables._subtitleInDataFetchStatus = inputs._subtitleInDataFetchStatus;
}

}

if("Text" in inputs) {
this.variables.textIn = inputs.Text;
if("_textInDataFetchStatus" in inputs) {
this.variables._textInDataFetchStatus = inputs._textInDataFetchStatus;
}

}

if("IsVerticalAligned" in inputs) {
this.variables.isVerticalAlignedIn = inputs.IsVerticalAligned;
if("_isVerticalAlignedInDataFetchStatus" in inputs) {
this.variables._isVerticalAlignedInDataFetchStatus = inputs._isVerticalAlignedInDataFetchStatus;
}

}

if("HasSpoke" in inputs) {
this.variables.hasSpokeIn = inputs.HasSpoke;
if("_hasSpokeInDataFetchStatus" in inputs) {
this.variables._hasSpokeInDataFetchStatus = inputs._hasSpokeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$view", ["OutSystems", "MobileUIWidgets.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$model", "MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$controller", "OutSystemsReactWidgets"], function (OutSystems, MobileUIWidgetsModel, MobileUIWidgetsController, React, OSView, MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_model, MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_controller, OSWidgets) {
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
        View.displayName = "WidgetsContent.EmptyStatesV3_Text";
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
                return MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return MobileUIWidgets_WidgetsContent_EmptyStatesV3_Text_mvc_controller;
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
style: model.getCachedValue(idService.getId("jdnBVYNeNUi5MYJ+RG2pJw.Style"), function () {
return ((model.variables.isVerticalAlignedIn) ? ("m-emptyStateContainer -center") : (""));
}, function () {
return model.variables.isVerticalAlignedIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isVerticalAlignedInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("m-emptyState " + model.variables.styleClassIn),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._styleClassInDataFetchStatus)
}, $if(model.variables.hasSpokeIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_alert",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.spokeImage,
_idProps: {
service: idService,
name: "SpokeImage"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-emptyState_content",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "m-emptyState_contentTitle",
value: model.variables.titleIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "m-emptyState_contentTitle",
value: model.variables.subtitleIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subtitleInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "m-emptyState_contentDesc",
value: model.variables.textIn,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._textInDataFetchStatus)
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("MobileUIWidgets.WidgetsContent.EmptyStatesV3_Text.mvc$controller", ["OutSystems", "MobileUIWidgets.model", "MobileUIWidgets.controller", "MobileUIWidgets.languageResources"], function (OutSystems, MobileUIWidgetsModel, MobileUIWidgetsController, MobileUIWidgetsLanguageResources) {
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
return MobileUIWidgetsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, MobileUIWidgetsLanguageResources);
});

