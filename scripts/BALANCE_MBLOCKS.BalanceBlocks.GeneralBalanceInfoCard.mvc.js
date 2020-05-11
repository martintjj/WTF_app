define("BALANCE_MBLOCKS.BalanceBlocks.GeneralBalanceInfoCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model"], function (OutSystems, BALANCE_MBLOCKSModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Title", "titleIn", "Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceInfo", "balanceInfoIn", "BalanceInfo", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceInfoInDataFetchStatus", "_balanceInfoInDataFetchStatus", "_balanceInfoInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CustomStyleClass", "customStyleClassIn", "CustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_customStyleClassInDataFetchStatus", "_customStyleClassInDataFetchStatus", "_customStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleCustomStyleClass", "titleCustomStyleClassIn", "TitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("BalanceInfo" in inputs) {
this.variables.balanceInfoIn = inputs.BalanceInfo;
if("_balanceInfoInDataFetchStatus" in inputs) {
this.variables._balanceInfoInDataFetchStatus = inputs._balanceInfoInDataFetchStatus;
}

}

if("CustomStyleClass" in inputs) {
this.variables.customStyleClassIn = inputs.CustomStyleClass;
if("_customStyleClassInDataFetchStatus" in inputs) {
this.variables._customStyleClassInDataFetchStatus = inputs._customStyleClassInDataFetchStatus;
}

}

if("TitleCustomStyleClass" in inputs) {
this.variables.titleCustomStyleClassIn = inputs.TitleCustomStyleClass;
if("_titleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._titleCustomStyleClassInDataFetchStatus = inputs._titleCustomStyleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.GeneralBalanceInfoCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.GeneralBalanceInfoCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.GeneralBalanceInfoCard.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view) {
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
        View.displayName = "BalanceBlocks.GeneralBalanceInfoCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvc_controller;
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
name: "SMS"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: ("-paddingEqual " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
HasLeftSide: false,
HasRightSide: false
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("JYjNCVQ410y8Rft2rCMLpA.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("JYjNCVQ410y8Rft2rCMLpA.Value"), function () {
return (((OS.BuiltinFunctions.length(model.variables.titleIn) > 150)) ? ((OS.BuiltinFunctions.substr(model.variables.titleIn, 0, 147) + "...")) : (model.variables.titleIn));
}, function () {
return model.variables.titleIn;
}),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "a-textBigLight mt-8",
value: model.variables.balanceInfoIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceInfoInDataFetchStatus)
})];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.balanceInfoIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._balanceInfoInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.GeneralBalanceInfoCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBLOCKS.languageResources"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBLOCKSLanguageResources) {
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

