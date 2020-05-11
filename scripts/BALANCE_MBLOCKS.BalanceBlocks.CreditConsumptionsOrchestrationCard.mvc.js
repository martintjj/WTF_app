define("BALANCE_MBLOCKS.BalanceBlocks.CreditConsumptionsOrchestrationCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsUnlimitedGraphCard.mvc$model"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLimited", "isLimitedIn", "IsLimited", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isLimitedInDataFetchStatus", "_isLimitedInDataFetchStatus", "_isLimitedInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableValue", "availableValueIn", "AvailableValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableUnit", "availableUnitIn", "AvailableUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableUnitInDataFetchStatus", "_availableUnitInDataFetchStatus", "_availableUnitInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SpentValue", "spentValueIn", "SpentValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_spentValueInDataFetchStatus", "_spentValueInDataFetchStatus", "_spentValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SpentUnit", "spentUnitIn", "SpentUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_spentUnitInDataFetchStatus", "_spentUnitInDataFetchStatus", "_spentUnitInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TotalValue", "totalValueIn", "TotalValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_totalValueInDataFetchStatus", "_totalValueInDataFetchStatus", "_totalValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TotalUnit", "totalUnitIn", "TotalUnit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_totalUnitInDataFetchStatus", "_totalUnitInDataFetchStatus", "_totalUnitInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowUnit", "showUnitIn", "ShowUnit", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showUnitInDataFetchStatus", "_showUnitInDataFetchStatus", "_showUnitInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CardTitle", "cardTitleIn", "CardTitle", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_cardTitleInDataFetchStatus", "_cardTitleInDataFetchStatus", "_cardTitleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RowNumber", "rowNumberIn", "RowNumber", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_rowNumberInDataFetchStatus", "_rowNumberInDataFetchStatus", "_rowNumberInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvcModel.hasValidationWidgets || BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsLimited" in inputs) {
this.variables.isLimitedIn = inputs.IsLimited;
if("_isLimitedInDataFetchStatus" in inputs) {
this.variables._isLimitedInDataFetchStatus = inputs._isLimitedInDataFetchStatus;
}

}

if("AvailableValue" in inputs) {
this.variables.availableValueIn = inputs.AvailableValue;
if("_availableValueInDataFetchStatus" in inputs) {
this.variables._availableValueInDataFetchStatus = inputs._availableValueInDataFetchStatus;
}

}

if("AvailableUnit" in inputs) {
this.variables.availableUnitIn = inputs.AvailableUnit;
if("_availableUnitInDataFetchStatus" in inputs) {
this.variables._availableUnitInDataFetchStatus = inputs._availableUnitInDataFetchStatus;
}

}

if("SpentValue" in inputs) {
this.variables.spentValueIn = inputs.SpentValue;
if("_spentValueInDataFetchStatus" in inputs) {
this.variables._spentValueInDataFetchStatus = inputs._spentValueInDataFetchStatus;
}

}

if("SpentUnit" in inputs) {
this.variables.spentUnitIn = inputs.SpentUnit;
if("_spentUnitInDataFetchStatus" in inputs) {
this.variables._spentUnitInDataFetchStatus = inputs._spentUnitInDataFetchStatus;
}

}

if("TotalValue" in inputs) {
this.variables.totalValueIn = inputs.TotalValue;
if("_totalValueInDataFetchStatus" in inputs) {
this.variables._totalValueInDataFetchStatus = inputs._totalValueInDataFetchStatus;
}

}

if("TotalUnit" in inputs) {
this.variables.totalUnitIn = inputs.TotalUnit;
if("_totalUnitInDataFetchStatus" in inputs) {
this.variables._totalUnitInDataFetchStatus = inputs._totalUnitInDataFetchStatus;
}

}

if("ShowUnit" in inputs) {
this.variables.showUnitIn = inputs.ShowUnit;
if("_showUnitInDataFetchStatus" in inputs) {
this.variables._showUnitInDataFetchStatus = inputs._showUnitInDataFetchStatus;
}

}

if("CardTitle" in inputs) {
this.variables.cardTitleIn = inputs.CardTitle;
if("_cardTitleInDataFetchStatus" in inputs) {
this.variables._cardTitleInDataFetchStatus = inputs._cardTitleInDataFetchStatus;
}

}

if("RowNumber" in inputs) {
this.variables.rowNumberIn = inputs.RowNumber;
if("_rowNumberInDataFetchStatus" in inputs) {
this.variables._rowNumberInDataFetchStatus = inputs._rowNumberInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.CreditConsumptionsOrchestrationCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.CreditConsumptionsOrchestrationCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.CreditConsumptionsOrchestrationCard.mvc$controller", "OutSystemsReactWidgets", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsUnlimitedGraphCard.mvc$view"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvc_controller, OSWidgets, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvc_view) {
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
        View.displayName = "BalanceBlocks.CreditConsumptionsOrchestrationCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_CreditConsumptionsOrchestrationCard_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(model.variables.isLimitedIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("iC1yKzBukEGU3LMM4LIRMg.Style"), function () {
return (((model.variables.rowNumberIn === 0)) ? ("") : ("mt-24"));
}, function () {
return model.variables.rowNumberIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rowNumberInDataFetchStatus)
}, React.createElement(BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_view, {
inputs: {
ShowUnit: model.variables.showUnitIn,
_showUnitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showUnitInDataFetchStatus),
ShowIcon: false,
AvailableValue: model.variables.availableValueIn,
_availableValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueInDataFetchStatus),
CardTitle: model.variables.cardTitleIn,
_cardTitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cardTitleInDataFetchStatus),
SpentValueFmt: model.variables.spentValueIn,
_spentValueFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentValueInDataFetchStatus),
TotalValueFmt: model.variables.totalValueIn,
_totalValueFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._totalValueInDataFetchStatus),
TotalValueUnitFmt: model.variables.totalUnitIn,
_totalValueUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._totalUnitInDataFetchStatus),
AvailableValueUnitFmt: model.variables.availableUnitIn,
_availableValueUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableUnitInDataFetchStatus),
TotalValue: model.variables.totalValueIn,
_totalValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._totalValueInDataFetchStatus),
SpentValueUnitFmt: model.variables.spentUnitIn,
_spentValueUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentUnitInDataFetchStatus),
AvailableValueFmt: model.variables.availableValueIn,
_availableValueFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueInDataFetchStatus)
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
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("QxSww5L_PECTuFjApaXxlg.Style"), function () {
return (((model.variables.rowNumberIn === 0)) ? ("") : ("mt-24"));
}, function () {
return model.variables.rowNumberIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rowNumberInDataFetchStatus)
}, React.createElement(BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsUnlimitedGraphCard_mvc_view, {
inputs: {
ShowUnit: model.variables.showUnitIn,
_showUnitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showUnitInDataFetchStatus),
Unit: model.variables.availableUnitIn,
_unitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableUnitInDataFetchStatus),
AvailableValue: model.variables.availableValueIn,
_availableValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueInDataFetchStatus),
Title: model.variables.cardTitleIn,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cardTitleInDataFetchStatus)
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
}))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.CreditConsumptionsOrchestrationCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBLOCKS.languageResources"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBLOCKSLanguageResources) {
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

