define("BALANCE_MBLOCKS.BalanceBlocks.AddOnsAppCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "Essentials_MOB.controller", "BALANCE_MBP.controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$model", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList"], function (OutSystems, BALANCE_MBLOCKSModel, Essentials_MOBController, BALANCE_MBPController, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("BalanceList", "balanceListIn", "BalanceList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructList), 
this.attr("_balanceListInDataFetchStatus", "_balanceListInDataFetchStatus", "_balanceListInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("BalanceList" in inputs) {
this.variables.balanceListIn = inputs.BalanceList;
if("_balanceListInDataFetchStatus" in inputs) {
this.variables._balanceListInDataFetchStatus = inputs._balanceListInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.AddOnsAppCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "Essentials_MOB.controller", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.AddOnsAppCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.AddOnsAppCard.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$view", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, Essentials_MOBController, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view) {
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
        View.displayName = "BalanceBlocks.AddOnsAppCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_AddOnsAppCard_mvc_controller;
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
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "-paddingEqual",
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
name: "Consumption13",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "gridRow mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: "Aditivos de Apps",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-4 text-right",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -small -masterColor",
value: "Disponíveis",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.balanceListIn,
style: "\"list list-group\"",
tag: "div",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(!(model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountFmtAttr.equals(OS.BuiltinFunctions.integerToDecimal(0))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-appsProgressContainer",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-appsProgressLabel",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-gray8",
value: model.variables.balanceListIn.getCurrent(callContext.iterationContext).titleAttr,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceListInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-appsProgress",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Progress: model.getCachedValue(idService.getId("xu7hvbRY+kGz3zETfGns8w.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountFmtAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountFmtAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (Essentials_MOBController.default.roundAwayFromZero$Action(model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountFmtAttr.div(model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountFmtAttr).times(OS.BuiltinFunctions.integerToDecimal(100)), 0, callContext.withoutIterationContext()).resultOut))));
}, function () {
return model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountFmtAttr;
}, function () {
return model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountFmtAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceListInDataFetchStatus),
Height: 5,
StyleClass: "-marker -greenDark",
AnimateInitialProgress: false
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
uuid: "13",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-appsProgressValue",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -masterColor",
value: model.getCachedValue(idService.getId("3EjL4TZlbkub35Pq0IVYQA.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountUnitFmtAttr);
}, function () {
return model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountFmtAttr;
}, function () {
return model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountUnitFmtAttr;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceListInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small",
value: model.getCachedValue(idService.getId("9Le7zTG8VEa8xpcekhKogw.Value"), function () {
return (("de " + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountUnitFmtAttr);
}, function () {
return model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountFmtAttr;
}, function () {
return model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountUnitFmtAttr;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceListInDataFetchStatus)
})))];
}, function () {
return [];
})];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._balanceListInDataFetchStatus), asPrimitiveValue(model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountUnitFmtAttr), asPrimitiveValue(model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.balanceListIn.getCurrent(callContext.iterationContext).availableAmountFmtAttr), asPrimitiveValue(model.variables.balanceListIn.getCurrent(callContext.iterationContext).titleAttr), asPrimitiveValue(model.variables.balanceListIn.getCurrent(callContext.iterationContext).totalAmountFmtAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._balanceListInDataFetchStatus)]
})];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._balanceListInDataFetchStatus), asPrimitiveValue(model.variables.balanceListIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.AddOnsAppCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "Essentials_MOB.controller", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructList"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, Essentials_MOBController, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
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

