define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsUnlimitedGraphCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model"], function (OutSystems, BALANCE_MBLOCKSModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel) {
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
this.attr("AvailableValue", "availableValueIn", "AvailableValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Unit", "unitIn", "Unit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_unitInDataFetchStatus", "_unitInDataFetchStatus", "_unitInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowUnit", "showUnitIn", "ShowUnit", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showUnitInDataFetchStatus", "_showUnitInDataFetchStatus", "_showUnitInDataFetchStatus", true, OS.Types.Integer, function () {
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

if("AvailableValue" in inputs) {
this.variables.availableValueIn = inputs.AvailableValue;
if("_availableValueInDataFetchStatus" in inputs) {
this.variables._availableValueInDataFetchStatus = inputs._availableValueInDataFetchStatus;
}

}

if("Unit" in inputs) {
this.variables.unitIn = inputs.Unit;
if("_unitInDataFetchStatus" in inputs) {
this.variables._unitInDataFetchStatus = inputs._unitInDataFetchStatus;
}

}

if("ShowUnit" in inputs) {
this.variables.showUnitIn = inputs.ShowUnit;
if("_showUnitInDataFetchStatus" in inputs) {
this.variables._showUnitInDataFetchStatus = inputs._showUnitInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsUnlimitedGraphCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsUnlimitedGraphCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsUnlimitedGraphCard.mvc$controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "OutSystemsReactWidgets"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvc_controller, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, OSWidgets) {
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
        View.displayName = "BalanceBlocks.ConsumptionsUnlimitedGraphCard";
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
                return BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvc_controller;
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
HasLeftSide: false,
StyleClass: "-paddingEqual",
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8",
value: model.variables.titleIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "gridRow mt-16 text-center",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-greenDark",
value: "Disponível",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("ewaN1anjq02skzYuJelqnA.Value"), function () {
return (OS.BuiltinFunctions.decimalToText(model.variables.availableValueIn) + ((model.variables.showUnitIn) ? (model.variables.unitIn) : ("")));
}, function () {
return model.variables.availableValueIn;
}, function () {
return model.variables.showUnitIn;
}, function () {
return model.variables.unitIn;
}),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueInDataFetchStatus, model.variables._showUnitInDataFetchStatus, model.variables._unitInDataFetchStatus)
})))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.unitIn), asPrimitiveValue(model.variables.showUnitIn), asPrimitiveValue(model.variables.availableValueIn), asPrimitiveValue(model.variables._unitInDataFetchStatus), asPrimitiveValue(model.variables._showUnitInDataFetchStatus), asPrimitiveValue(model.variables._availableValueInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsUnlimitedGraphCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBLOCKS.languageResources"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBLOCKSLanguageResources) {
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

