define("BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "BALANCE_MBP.model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$model", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, BALANCE_MBPModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvcModel) {
var OS = OutSystems.Internal;
var GetLeftGraphTypeAggrRec = (function (_super) {
__extends(GetLeftGraphTypeAggrRec, _super);
function GetLeftGraphTypeAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLeftGraphTypeAggrRec.RecordListType = BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList;
GetLeftGraphTypeAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLeftGraphTypeAggrRec.init();
return GetLeftGraphTypeAggrRec;
})(OS.Model.AggregateRecord);
var GetRightGraphTypeAggrRec = (function (_super) {
__extends(GetRightGraphTypeAggrRec, _super);
function GetRightGraphTypeAggrRec(defaults) {
_super.apply(this, arguments);
}
GetRightGraphTypeAggrRec.RecordListType = BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList;
GetRightGraphTypeAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetRightGraphTypeAggrRec.init();
return GetRightGraphTypeAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsLeftLimitedGraph", "isLeftLimitedGraphVar", "IsLeftLimitedGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsRightLimitedGraph", "isRightLimitedGraphVar", "IsRightLimitedGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLeftUnlimitedGraph", "isLeftUnlimitedGraphVar", "IsLeftUnlimitedGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsRightUnlimitedGraph", "isRightUnlimitedGraphVar", "IsRightUnlimitedGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("DeviceWidth", "deviceWidthVar", "DeviceWidth", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ShowLeftGraph", "showLeftGraphIn", "ShowLeftGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showLeftGraphInDataFetchStatus", "_showLeftGraphInDataFetchStatus", "_showLeftGraphInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowRightGraph", "showRightGraphIn", "ShowRightGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showRightGraphInDataFetchStatus", "_showRightGraphInDataFetchStatus", "_showRightGraphInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("LeftBalanceRecord", "leftBalanceRecordIn", "LeftBalanceRecord", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec), 
this.attr("_leftBalanceRecordInDataFetchStatus", "_leftBalanceRecordInDataFetchStatus", "_leftBalanceRecordInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RightBalanceRecord", "rightBalanceRecordIn", "RightBalanceRecord", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec), 
this.attr("_rightBalanceRecordInDataFetchStatus", "_rightBalanceRecordInDataFetchStatus", "_rightBalanceRecordInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CustomStyleClass", "customStyleClassIn", "CustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_customStyleClassInDataFetchStatus", "_customStyleClassInDataFetchStatus", "_customStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableTitleCustomStyleClass", "availableTitleCustomStyleClassIn", "AvailableTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableTitleCustomStyleClassInDataFetchStatus", "_availableTitleCustomStyleClassInDataFetchStatus", "_availableTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableValueCustomStyleClass", "availableValueCustomStyleClassIn", "AvailableValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableValueCustomStyleClassInDataFetchStatus", "_availableValueCustomStyleClassInDataFetchStatus", "_availableValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLeftGraphType", "getLeftGraphTypeAggr", "getLeftGraphTypeAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLeftGraphTypeAggrRec());
}, GetLeftGraphTypeAggrRec), 
this.attr("GetRightGraphType", "getRightGraphTypeAggr", "getRightGraphTypeAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetRightGraphTypeAggrRec());
}, GetRightGraphTypeAggrRec)
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
if("ShowLeftGraph" in inputs) {
this.variables.showLeftGraphIn = inputs.ShowLeftGraph;
if("_showLeftGraphInDataFetchStatus" in inputs) {
this.variables._showLeftGraphInDataFetchStatus = inputs._showLeftGraphInDataFetchStatus;
}

}

if("ShowRightGraph" in inputs) {
this.variables.showRightGraphIn = inputs.ShowRightGraph;
if("_showRightGraphInDataFetchStatus" in inputs) {
this.variables._showRightGraphInDataFetchStatus = inputs._showRightGraphInDataFetchStatus;
}

}

if("LeftBalanceRecord" in inputs) {
this.variables.leftBalanceRecordIn = inputs.LeftBalanceRecord;
if("_leftBalanceRecordInDataFetchStatus" in inputs) {
this.variables._leftBalanceRecordInDataFetchStatus = inputs._leftBalanceRecordInDataFetchStatus;
}

}

if("RightBalanceRecord" in inputs) {
this.variables.rightBalanceRecordIn = inputs.RightBalanceRecord;
if("_rightBalanceRecordInDataFetchStatus" in inputs) {
this.variables._rightBalanceRecordInDataFetchStatus = inputs._rightBalanceRecordInDataFetchStatus;
}

}

if("CustomStyleClass" in inputs) {
this.variables.customStyleClassIn = inputs.CustomStyleClass;
if("_customStyleClassInDataFetchStatus" in inputs) {
this.variables._customStyleClassInDataFetchStatus = inputs._customStyleClassInDataFetchStatus;
}

}

if("AvailableTitleCustomStyleClass" in inputs) {
this.variables.availableTitleCustomStyleClassIn = inputs.AvailableTitleCustomStyleClass;
if("_availableTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableTitleCustomStyleClassInDataFetchStatus = inputs._availableTitleCustomStyleClassInDataFetchStatus;
}

}

if("AvailableValueCustomStyleClass" in inputs) {
this.variables.availableValueCustomStyleClassIn = inputs.AvailableValueCustomStyleClass;
if("_availableValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableValueCustomStyleClassInDataFetchStatus = inputs._availableValueCustomStyleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$view", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view) {
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
        View.displayName = "BalanceBlocks.TwoGraphCard";
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
                return BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if((model.variables.showLeftGraphIn && model.variables.showRightGraphIn), false, this, function () {
return [$if(((model.variables.isLeftLimitedGraphVar && !(model.variables.isLeftUnlimitedGraphVar)) && (!(model.variables.isRightLimitedGraphVar) && !(model.variables.isRightUnlimitedGraphVar))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
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
HasLeftSide: false,
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
HasRightSide: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption5",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("jx_1sWLYwEqPcWdU9G9cmg.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("UY4FxfiGa0itYa12U+B50A.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("UY4FxfiGa0itYa12U+B50A.Value"), function () {
return (((((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis ") : ("Disp. ")) + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.deviceWidthVar;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Height: 5,
Progress: model.getCachedValue(idService.getId("mATa9FsrikKOla80y1iTKQ.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.leftBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.leftBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? (OS.BuiltinFunctions.integerToDecimal(0)) : (model.variables.leftBalanceRecordIn.availableAmountAttr.div(model.variables.leftBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.leftBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus),
AnimateInitialProgress: true,
StyleClass: "mt-8 -marker"
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
uuid: "7",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("wl8BPxJSOUuv42_Um8cwMw.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("d9HGGqvImkemmhOd6h6wng.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("d9HGGqvImkemmhOd6h6wng.Value"), function () {
return (((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis") : ("Disp."));
}, function () {
return model.variables.deviceWidthVar;
}),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("qd+PrXPqAEujTxYigZUSUw.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if(((!(model.variables.isLeftLimitedGraphVar) && !(model.variables.isRightLimitedGraphVar)) && (!(model.variables.isLeftUnlimitedGraphVar) && !(model.variables.isRightUnlimitedGraphVar))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
HasLeftSide: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption3",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("C0vfx8rVuU2P37fXFZfQmA.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("YD5nb2dNY025on6CMXtJDQ.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("YD5nb2dNY025on6CMXtJDQ.Value"), function () {
return (((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis") : ("Disp."));
}, function () {
return model.variables.deviceWidthVar;
}),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("suacMN2Wz0mftoTQNcUJpQ.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("SOp3eY8gkUGxnZcbPYkr2w.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("pQnzGNzDfECFHocbW6svrw.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("pQnzGNzDfECFHocbW6svrw.Value"), function () {
return (((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis") : ("Disp."));
}, function () {
return model.variables.deviceWidthVar;
}),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("wZ4DRUta30G+yuhyVHTRIQ.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if((model.variables.isLeftUnlimitedGraphVar && (!(model.variables.isRightLimitedGraphVar) && !(model.variables.isRightUnlimitedGraphVar))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "-paddingMedium",
HasRightSide: false,
HasLeftSide: false
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
name: "Consumption14",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
StyleClass: "mt-8 -infinite",
Height: 5,
Progress: 100,
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
uuid: "33",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("hFykgDjzS0OyWn7ZYDUwDg.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("0J0etjWNC0mOnMEPR_R9LQ.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("0J0etjWNC0mOnMEPR_R9LQ.Value"), function () {
return (((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis") : ("Disp."));
}, function () {
return model.variables.deviceWidthVar;
}),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("TjLlNKqMLEmb4+HMXvS3LQ.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if((model.variables.isRightUnlimitedGraphVar && !((!(model.variables.isLeftLimitedGraphVar) && !(model.variables.isLeftUnlimitedGraphVar)))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "-paddingMedium",
HasRightSide: false,
HasLeftSide: false
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
name: "Consumption15",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("0BVgWGDJGkqXNh1T6ZvssQ.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("yK6CcX5Ra0q6Y2bTR3pWDw.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("yK6CcX5Ra0q6Y2bTR3pWDw.Value"), function () {
return (((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis") : ("Disp."));
}, function () {
return model.variables.deviceWidthVar;
}),
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("0unnIsufNk6EcImYbRUcWw.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
StyleClass: "mt-8 -infinite",
Progress: 100,
AnimateInitialProgress: false,
Height: 5
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
uuid: "51",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if(((model.variables.isRightLimitedGraphVar && !(model.variables.isRightUnlimitedGraphVar)) && (!(model.variables.isLeftLimitedGraphVar) && !(model.variables.isLeftUnlimitedGraphVar))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
StyleClass: "-paddingMedium",
HasLeftSide: false
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
name: "Consumption17",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("ldApq3szdEKZcaWSHIo6qA.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("gIQRGzwuA0SZ4axgo6YHcw.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("gIQRGzwuA0SZ4axgo6YHcw.Value"), function () {
return (((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis") : ("Disp."));
}, function () {
return model.variables.deviceWidthVar;
}),
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("i3p2Jy2IDUKRj777nySm_A.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("jpmGGm6ZSkmrnbSfXLrGtA.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("DHj4SGi3q0W0tcvtixrNFg.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("DHj4SGi3q0W0tcvtixrNFg.Value"), function () {
return (((((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis ") : ("Disp. ")) + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.deviceWidthVar;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Height: 5,
StyleClass: "mt-8 -marker",
Progress: model.getCachedValue(idService.getId("Sb8EG0lXc0ymBNdKUFtMQA.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.rightBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.rightBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.rightBalanceRecordIn.availableAmountAttr.div(model.variables.rightBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.rightBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus),
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
uuid: "64",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.rightBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if((model.variables.isLeftLimitedGraphVar && model.variables.isRightUnlimitedGraphVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "65"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRightSide: false,
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption8",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("bJSUqQBZ3EyQu3fEBoDAsw.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("BmegKU0XxkGQIx1xPHmvNA.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("BmegKU0XxkGQIx1xPHmvNA.Value"), function () {
return (((((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis ") : ("Disp. ")) + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.deviceWidthVar;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Progress: model.getCachedValue(idService.getId("_sJ+f0ThgUidO114R2iEKg.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.leftBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.leftBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? (OS.BuiltinFunctions.integerToDecimal(0)) : (model.variables.leftBalanceRecordIn.availableAmountAttr.div(model.variables.leftBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.leftBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus),
AnimateInitialProgress: true,
Height: 5,
StyleClass: "mt-8 -marker"
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
uuid: "72",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
AnimateInitialProgress: false,
StyleClass: "mt-8 -infinite",
Height: 5,
Progress: 100
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
uuid: "77",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if((model.variables.isLeftUnlimitedGraphVar && model.variables.isRightLimitedGraphVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
HasLeftSide: false,
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption9",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "80"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "81"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "84"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Progress: 100,
Height: 5,
AnimateInitialProgress: false,
StyleClass: "mt-8 -infinite"
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
uuid: "85",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "86"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("w09rJW4BWU+25LSVsqGWYQ.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "88"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("JkWzltN11kWJfRDfNTu+jw.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("JkWzltN11kWJfRDfNTu+jw.Value"), function () {
return (((((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis ") : ("Disp. ")) + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.deviceWidthVar;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "89"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
StyleClass: "mt-8 -marker",
Progress: model.getCachedValue(idService.getId("09Hgdi+YN0OxOnsMKDWOsA.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.rightBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.rightBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.rightBalanceRecordIn.availableAmountAttr.div(model.variables.rightBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.rightBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus),
AnimateInitialProgress: false,
Height: 5
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
uuid: "90",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables.rightBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if(((model.variables.isLeftLimitedGraphVar && model.variables.isRightLimitedGraphVar) && (!(model.variables.isLeftUnlimitedGraphVar) && !(model.variables.isRightUnlimitedGraphVar))), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "91"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
HasLeftSide: false,
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "93"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "94"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("4LZK81KRCUqfSZuwqzjUrw.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "95"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "96"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("bsiOvhBS30yJXXsuZCL5bw.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("bsiOvhBS30yJXXsuZCL5bw.Value"), function () {
return (((((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis ") : ("Disp. ")) + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.deviceWidthVar;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "97"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Height: 5,
AnimateInitialProgress: false,
Progress: model.getCachedValue(idService.getId("WLh+uS0OSUiufbmmipQt1g.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.leftBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.leftBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.leftBalanceRecordIn.availableAmountAttr.div(model.variables.leftBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.leftBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus),
StyleClass: "mt-8 -marker"
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
uuid: "98",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "99"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("fPstlR9Gsk+4SCzdyqNSHw.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "100"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "101"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("ttLPhinSnEOyF+JacplDfQ.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("ttLPhinSnEOyF+JacplDfQ.Value"), function () {
return (((((model.variables.deviceWidthVar >= 360)) ? ("Disponíveis ") : ("Disp. ")) + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.deviceWidthVar;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "102"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Height: 5,
Progress: model.getCachedValue(idService.getId("H2OPq4UKyUuO6YwQ6bfI3w.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.rightBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.rightBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.rightBalanceRecordIn.availableAmountAttr.div(model.variables.rightBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.rightBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus),
AnimateInitialProgress: false,
StyleClass: "mt-8 -marker"
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
uuid: "103",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.rightBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.deviceWidthVar), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if((model.variables.isLeftUnlimitedGraphVar && model.variables.isRightUnlimitedGraphVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "104"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "-paddingMedium",
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
name: "Consumption16",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "106"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "107"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "108"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "109"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "110"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Progress: 100,
Height: 5,
StyleClass: "mt-8 -infinite",
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
uuid: "111",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "112"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "113"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "114"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "115"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Height: 5,
Progress: 100,
StyleClass: "mt-8 -infinite",
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
uuid: "116",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [];
})];
})];
})];
})];
})];
})];
})];
})];
})];
}, function () {
return [$if((!(model.variables.showLeftGraphIn) && model.variables.showRightGraphIn), false, this, function () {
return [$if((!(model.variables.isRightLimitedGraphVar) && !(model.variables.isRightUnlimitedGraphVar)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "117"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
HasRightSide: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption6",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "119"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12",
visible: true,
_idProps: {
service: idService,
uuid: "120"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("IG4f0VI_K0+i1lvJfMEHcQ.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "121"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "122"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("W+smF4mDH0mSRZLdIUC+OQ.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: "Disponíveis",
_idProps: {
service: idService,
uuid: "123"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("PgF+oxJkL0+sBB6G5XEn4w.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "124"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if(model.variables.isRightUnlimitedGraphVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "125"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
StyleClass: "-paddingMedium",
HasLeftSide: false
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
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "127"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12",
visible: true,
_idProps: {
service: idService,
uuid: "128"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "129"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "130"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "131"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
AnimateInitialProgress: false,
StyleClass: "mt-8 -infinite",
Progress: 100,
Height: 5
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
uuid: "132",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "133"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRightSide: false,
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption2",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "135"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12",
visible: true,
_idProps: {
service: idService,
uuid: "136"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("BYXNbi+NWUaG4maNSq2RzQ.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.rightBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "137"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "138"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("fKQx3r1nPUGRWaZ4RV+Kzg.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("fKQx3r1nPUGRWaZ4RV+Kzg.Value"), function () {
return (("Disponíveis " + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.rightBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.rightBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.rightBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "139"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
AnimateInitialProgress: true,
Progress: model.getCachedValue(idService.getId("CzNulNRX+kqvQ2Hx1mFYLw.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.rightBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.rightBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.rightBalanceRecordIn.availableAmountAttr.div(model.variables.rightBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.rightBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.rightBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rightBalanceRecordInDataFetchStatus),
Height: 5,
StyleClass: "mt-8 -marker"
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
uuid: "140",
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._rightBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.rightBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.rightBalanceRecordIn.titleAttr)]
}))];
})];
})];
}, function () {
return [$if((model.variables.showLeftGraphIn && !(model.variables.showRightGraphIn)), false, this, function () {
return [$if((!(model.variables.isLeftLimitedGraphVar) && !(model.variables.isLeftUnlimitedGraphVar)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "141"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
HasRightSide: false,
HasLeftSide: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption7",
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "143"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12",
visible: true,
_idProps: {
service: idService,
uuid: "144"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("+5+8_meeEkW0tfIB2lYcHw.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "145"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "146"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("YVFJYSloJUOhtNxBNLr9YA.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: "Disponíveis",
_idProps: {
service: idService,
uuid: "147"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("H5C+NVjq80SuKriODxqqsg.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "148"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if(model.variables.isLeftUnlimitedGraphVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "149"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRightSide: false,
StyleClass: "-paddingMedium"
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
name: "Consumption12",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "151"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12",
visible: true,
_idProps: {
service: idService,
uuid: "152"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "153"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "154"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark -ellipsis",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "155"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
AnimateInitialProgress: false,
StyleClass: "mt-8 -infinite",
Progress: 100,
Height: 5
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
uuid: "156",
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "157"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: ("-paddingMedium -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
HasLeftSide: false,
HasRightSide: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.minutesInternetAdditionalClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "Consumption4",
alias: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "159"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12",
visible: true,
_idProps: {
service: idService,
uuid: "160"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("Xe9vI+1Y9k+ExjTrqbGxuA.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: model.variables.leftBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "161"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
uuid: "162"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("uviXY9L1n0a1Ohs2fMHNbA.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("uviXY9L1n0a1Ohs2fMHNbA.Value"), function () {
return (("Disponíveis " + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.leftBalanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.leftBalanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.leftBalanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "163"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
AnimateInitialProgress: true,
Height: 5,
StyleClass: "mt-8 -marker",
Progress: model.getCachedValue(idService.getId("eviHcgwnE0ORzTolWIXwAA.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.leftBalanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.leftBalanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (model.variables.leftBalanceRecordIn.availableAmountAttr.div(model.variables.leftBalanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100))))));
}, function () {
return model.variables.leftBalanceRecordIn.availableAmountAttr;
}, function () {
return model.variables.leftBalanceRecordIn.totalAmountAttr;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._leftBalanceRecordInDataFetchStatus)
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
uuid: "164",
alias: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._leftBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.leftBalanceRecordIn.totalAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.leftBalanceRecordIn.titleAttr)]
}))];
})];
})];
}, function () {
return [];
})];
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBP.model", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$controller.OnReady.GetDeviceWitdhJS", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBPModel, BALANCE_MBLOCKSLanguageResources, BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_controller_OnReady_GetDeviceWitdhJS) {
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
Controller.prototype.getLeftGraphType$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qploId = model.variables.leftBalanceRecordIn.graphTypeIDAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" o0, \"ENLocal_BALANCE_GRAPH_TYPE\".\"Label\" o1, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsLimitedGraph\" o2, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsUnlimitedGraph\" o3, \"ENLocal_BALANCE_GRAPH_TYPE\".\"DateTime\" o4";
} else {
selectSql += "\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" o0, \"ENLocal_BALANCE_GRAPH_TYPE\".\"Label\" o1, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsLimitedGraph\" o2, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsUnlimitedGraph\" o3, \"ENLocal_BALANCE_GRAPH_TYPE\".\"DateTime\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_GRAPH_TYPE\" \"ENLocal_BALANCE_GRAPH_TYPE\"";
fromAndWhereSql += " WHERE ";
if (qploId != 0) {
fromAndWhereSql += "((\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" = :qploId) AND (\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" IS NOT NULL))";
argsList.add("qploId", /*LONGINTEGER*/ 4, qploId);
} else {
fromAndWhereSql += "(\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_GRAPH_TYPEAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getLeftGraphTypeAggr;
}, function () {
controller._getLeftGraphTypeOnAfterFetch$Action(controller.callContext(callContext));
});
};
Controller.prototype.getRightGraphType$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qploId = model.variables.rightBalanceRecordIn.graphTypeIDAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" o0, \"ENLocal_BALANCE_GRAPH_TYPE\".\"Label\" o1, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsLimitedGraph\" o2, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsUnlimitedGraph\" o3, \"ENLocal_BALANCE_GRAPH_TYPE\".\"DateTime\" o4";
} else {
selectSql += "\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" o0, \"ENLocal_BALANCE_GRAPH_TYPE\".\"Label\" o1, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsLimitedGraph\" o2, \"ENLocal_BALANCE_GRAPH_TYPE\".\"IsUnlimitedGraph\" o3, \"ENLocal_BALANCE_GRAPH_TYPE\".\"DateTime\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_GRAPH_TYPE\" \"ENLocal_BALANCE_GRAPH_TYPE\"";
fromAndWhereSql += " WHERE ";
if (qploId != 0) {
fromAndWhereSql += "((\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" = :qploId) AND (\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" IS NOT NULL))";
argsList.add("qploId", /*LONGINTEGER*/ 4, qploId);
} else {
fromAndWhereSql += "(\"ENLocal_BALANCE_GRAPH_TYPE\".\"Id\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_GRAPH_TYPEAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getRightGraphTypeAggr;
}, function () {
controller._getRightGraphTypeOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLeftGraphType$AggrRefresh", "getRightGraphType$AggrRefresh"];
// Client Actions
Controller.prototype._getRightGraphTypeOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetRightGraphTypeOnAfterFetch");
callContext = controller.callContext(callContext);
if((model.variables.getRightGraphTypeAggr.listOut.isEmpty)) {
// SetGraphTypes
// IsRightLimitedGraph = RightBalanceRecord.IsLimited
model.variables.isRightLimitedGraphVar = model.variables.rightBalanceRecordIn.isLimitedAttr;
// IsRightUnlimitedGraph = RightBalanceRecord.IsUnlimited
model.variables.isRightUnlimitedGraphVar = model.variables.rightBalanceRecordIn.isUnlimitedAttr;
} else {
// SetGraphTypes
// IsRightLimitedGraph = GetRightGraphType.List.Current.Local_BALANCE_GRAPH_TYPE.IsLimitedGraph
model.variables.isRightLimitedGraphVar = model.variables.getRightGraphTypeAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_GRAPH_TYPEAttr.isLimitedGraphAttr;
// IsRightUnlimitedGraph = GetRightGraphType.List.Current.Local_BALANCE_GRAPH_TYPE.IsUnlimitedGraph
model.variables.isRightUnlimitedGraphVar = model.variables.getRightGraphTypeAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_GRAPH_TYPEAttr.isUnlimitedGraphAttr;
}

};
Controller.prototype._minutesInternetAdditionalClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("MinutesInternetAdditionalClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: MinutesInternetAdditionalClickEvent
return controller.minutesInternetAdditionalClickEvent$Action(callContext);
});
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Refresh Query: GetLeftGraphType
var result = controller.getLeftGraphType$AggrRefresh(1);
model.flush();
return result.then(function () {
// Refresh Query: GetRightGraphType
var result = controller.getRightGraphType$AggrRefresh(1);
model.flush();
return result;
});
});
};
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var getDeviceWitdhJSResult = new OS.DataTypes.VariableHolder();
getDeviceWitdhJSResult.value = controller.safeExecuteJSNode(BALANCE_MBLOCKS_BalanceBlocks_TwoGraphCard_mvc_controller_OnReady_GetDeviceWitdhJS, "GetDeviceWitdh", "OnReady", {
ScreenWidth: OS.DataTypes.JSConversions.basicTypeToJS(0, OS.Types.Integer, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.OnReady$getDeviceWitdhJSResult"))();
jsNodeResult.screenWidthOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.ScreenWidth, OS.Types.Integer);
return jsNodeResult;
}, {}, {});
// DeviceWidth = GetDeviceWitdh.ScreenWidth
model.variables.deviceWidthVar = getDeviceWitdhJSResult.value.screenWidthOut;
};
Controller.registerVariableGroupType("BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.OnReady$getDeviceWitdhJSResult", [{
name: "ScreenWidth",
attrName: "screenWidthOut",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._getLeftGraphTypeOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLeftGraphTypeOnAfterFetch");
callContext = controller.callContext(callContext);
// GetLeftGraphType.Empty?
if((model.variables.getLeftGraphTypeAggr.listOut.isEmpty)) {
// SetGraphTypes
// IsLeftLimitedGraph = LeftBalanceRecord.IsLimited
model.variables.isLeftLimitedGraphVar = model.variables.leftBalanceRecordIn.isLimitedAttr;
// IsLeftUnlimitedGraph = LeftBalanceRecord.IsUnlimited
model.variables.isLeftUnlimitedGraphVar = model.variables.leftBalanceRecordIn.isUnlimitedAttr;
} else {
// SetGraphTypes
// IsLeftLimitedGraph = GetLeftGraphType.List.Current.Local_BALANCE_GRAPH_TYPE.IsLimitedGraph
model.variables.isLeftLimitedGraphVar = model.variables.getLeftGraphTypeAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_GRAPH_TYPEAttr.isLimitedGraphAttr;
// IsLeftUnlimitedGraph = GetLeftGraphType.List.Current.Local_BALANCE_GRAPH_TYPE.IsUnlimitedGraph
model.variables.isLeftUnlimitedGraphVar = model.variables.getLeftGraphTypeAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_GRAPH_TYPEAttr.isUnlimitedGraphAttr;
}

};

Controller.prototype.getRightGraphTypeOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getRightGraphTypeOnAfterFetch$Action, callContext);

};
Controller.prototype.minutesInternetAdditionalClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._minutesInternetAdditionalClick$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.getLeftGraphTypeOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLeftGraphTypeOnAfterFetch$Action, callContext);

};
Controller.prototype.minutesInternetAdditionalClickEvent$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
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
return BALANCE_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, BALANCE_MBLOCKSLanguageResources);
});
define("BALANCE_MBLOCKS.BalanceBlocks.TwoGraphCard.mvc$controller.OnReady.GetDeviceWitdhJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


var screenWidth = getWidth();

//valida se a variável está definida e previne que haja erros.
screenWidth ? 
$parameters.ScreenWidth = screenWidth : 
$parameters.ScreenWidth = 359
};
});

