define("BALANCE_MBLOCKS.BalanceBlocks.BalanceHomeInfoCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("CashBalanceRecord", "cashBalanceRecordIn", "CashBalanceRecord", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceCashStructRec), 
this.attr("_cashBalanceRecordInDataFetchStatus", "_cashBalanceRecordInDataFetchStatus", "_cashBalanceRecordInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Description", "descriptionIn", "Description", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MinimumBalanceValueIn", "minimumBalanceValueInIn", "MinimumBalanceValueIn", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_minimumBalanceValueInInDataFetchStatus", "_minimumBalanceValueInInDataFetchStatus", "_minimumBalanceValueInInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CustomClass", "customClassIn", "CustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_customClassInDataFetchStatus", "_customClassInDataFetchStatus", "_customClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleCustomStyleClass", "titleCustomStyleClassIn", "TitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceValueCustomStyleClass", "balanceValueCustomStyleClassIn", "BalanceValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceValueCustomStyleClassInDataFetchStatus", "_balanceValueCustomStyleClassInDataFetchStatus", "_balanceValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceMessageCustomStyleClass", "balanceMessageCustomStyleClassIn", "BalanceMessageCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceMessageCustomStyleClassInDataFetchStatus", "_balanceMessageCustomStyleClassInDataFetchStatus", "_balanceMessageCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("CashBalanceRecord" in inputs) {
this.variables.cashBalanceRecordIn = inputs.CashBalanceRecord;
if("_cashBalanceRecordInDataFetchStatus" in inputs) {
this.variables._cashBalanceRecordInDataFetchStatus = inputs._cashBalanceRecordInDataFetchStatus;
}

}

if("Description" in inputs) {
this.variables.descriptionIn = inputs.Description;
if("_descriptionInDataFetchStatus" in inputs) {
this.variables._descriptionInDataFetchStatus = inputs._descriptionInDataFetchStatus;
}

}

if("MinimumBalanceValueIn" in inputs) {
this.variables.minimumBalanceValueInIn = inputs.MinimumBalanceValueIn;
if("_minimumBalanceValueInInDataFetchStatus" in inputs) {
this.variables._minimumBalanceValueInInDataFetchStatus = inputs._minimumBalanceValueInInDataFetchStatus;
}

}

if("CustomClass" in inputs) {
this.variables.customClassIn = inputs.CustomClass;
if("_customClassInDataFetchStatus" in inputs) {
this.variables._customClassInDataFetchStatus = inputs._customClassInDataFetchStatus;
}

}

if("TitleCustomStyleClass" in inputs) {
this.variables.titleCustomStyleClassIn = inputs.TitleCustomStyleClass;
if("_titleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._titleCustomStyleClassInDataFetchStatus = inputs._titleCustomStyleClassInDataFetchStatus;
}

}

if("BalanceValueCustomStyleClass" in inputs) {
this.variables.balanceValueCustomStyleClassIn = inputs.BalanceValueCustomStyleClass;
if("_balanceValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._balanceValueCustomStyleClassInDataFetchStatus = inputs._balanceValueCustomStyleClassInDataFetchStatus;
}

}

if("BalanceMessageCustomStyleClass" in inputs) {
this.variables.balanceMessageCustomStyleClassIn = inputs.BalanceMessageCustomStyleClass;
if("_balanceMessageCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._balanceMessageCustomStyleClassInDataFetchStatus = inputs._balanceMessageCustomStyleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.BalanceHomeInfoCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.BalanceHomeInfoCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.BalanceHomeInfoCard.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view) {
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
        View.displayName = "BalanceBlocks.BalanceHomeInfoCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_BalanceHomeInfoCard_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if((((OS.BuiltinFunctions.trim(model.variables.cashBalanceRecordIn.titleAttr) === "") && model.variables.cashBalanceRecordIn.valueAttr.equals((OS.DataTypes.Decimal.defaultValue))) && (model.variables.cashBalanceRecordIn.orderAttr === 0)), false, this, function () {
return [];
}, function () {
return [$if(model.variables.cashBalanceRecordIn.valueAttr.gt(model.variables.minimumBalanceValueInIn), false, this, function () {
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
HasRightSide: false,
StyleClass: ("-paddingEqual " + model.variables.customClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.clickBalance$Action(controller.callContext(eventHandlerContext));
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
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("tiXKkVDVOkOlEpMTA17P4A.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: model.variables.cashBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cashBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-4 mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("AlpGalhDKEmSVGKwB8KSTQ.Style"), function () {
return (((model.variables.balanceValueCustomStyleClassIn === "")) ? ("h2 c-greenDark -bold") : (model.variables.balanceValueCustomStyleClassIn));
}, function () {
return model.variables.balanceValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("AlpGalhDKEmSVGKwB8KSTQ.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.cashBalanceRecordIn.valueAttr, callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.cashBalanceRecordIn.valueAttr;
}),
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cashBalanceRecordInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("YZSSizOxBEumWxhdDCJ8gw.Visible"), function () {
return (((OS.BuiltinFunctions.length(model.variables.descriptionIn) > 1)) ? (true) : (false));
}, function () {
return model.variables.descriptionIn;
}),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("d++E8IeiRU2T6fvSeg7ERg.Style"), function () {
return (((model.variables.balanceMessageCustomStyleClassIn === "")) ? ("a-textRead c-gray6") : (model.variables.balanceMessageCustomStyleClassIn));
}, function () {
return model.variables.balanceMessageCustomStyleClassIn;
}),
value: model.variables.descriptionIn,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
})))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.balanceMessageCustomStyleClassIn), asPrimitiveValue(model.variables.descriptionIn), asPrimitiveValue(model.variables.balanceValueCustomStyleClassIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._balanceMessageCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._descriptionInDataFetchStatus), asPrimitiveValue(model.variables._balanceValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._cashBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.cashBalanceRecordIn.valueAttr), asPrimitiveValue(model.variables.cashBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [$if(model.variables.cashBalanceRecordIn.valueAttr.lt((OS.DataTypes.Decimal.defaultValue)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRightSide: false,
StyleClass: ("-paddingCol " + model.variables.customClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus)
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
name: "Saldo",
alias: "2"
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
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("gYuD1ne2j0OS4FSnuSwWCg.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: model.variables.cashBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cashBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("pKldm0GuB0yCSgN95DB1bg.Style"), function () {
return (((model.variables.balanceValueCustomStyleClassIn === "")) ? ("h2 -bold c-red mt-4") : (model.variables.balanceValueCustomStyleClassIn));
}, function () {
return model.variables.balanceValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("pKldm0GuB0yCSgN95DB1bg.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.cashBalanceRecordIn.valueAttr.times(OS.BuiltinFunctions.integerToDecimal(-1)), callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.cashBalanceRecordIn.valueAttr;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cashBalanceRecordInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 text-right va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
inputs: {},
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
uuid: "15",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.chargeCellPhone$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary w-100",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Carregar saldo", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("l7Q7WWtnh02ZDfb6aj7GXA.Style"), function () {
return (((model.variables.balanceMessageCustomStyleClassIn === "")) ? ("a-textRead c-gray6") : (model.variables.balanceMessageCustomStyleClassIn));
}, function () {
return model.variables.balanceMessageCustomStyleClassIn;
}),
value: "Carregue para regularizar",
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageCustomStyleClassInDataFetchStatus)
})))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.balanceMessageCustomStyleClassIn), asPrimitiveValue(model.variables.balanceValueCustomStyleClassIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._balanceMessageCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._balanceValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._cashBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.cashBalanceRecordIn.valueAttr), asPrimitiveValue(model.variables.cashBalanceRecordIn.titleAttr)]
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
HasLeftSide: false,
StyleClass: ("-paddingCol " + model.variables.customClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus)
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
name: "Saldo2",
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
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("qpVYHszOuEyjBIfHPucUbg.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 -ellipsis") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: model.variables.cashBalanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cashBalanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("HNki4A9i80O9MwcaVoTkvw.Style"), function () {
return (((model.variables.balanceValueCustomStyleClassIn === "")) ? ("h2 -bold c-greenDark mt-4") : (model.variables.balanceValueCustomStyleClassIn));
}, function () {
return model.variables.balanceValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("HNki4A9i80O9MwcaVoTkvw.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.cashBalanceRecordIn.valueAttr, callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.cashBalanceRecordIn.valueAttr;
}),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cashBalanceRecordInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 text-right va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
inputs: {},
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
uuid: "27",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.chargeCellPhone$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary w-100",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Carregar saldo", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mt-16",
visible: model.getCachedValue(idService.getId("NH4lz2JU50Sr1xKzhMLvHQ.Visible"), function () {
return (((OS.BuiltinFunctions.length(OS.BuiltinFunctions.trim(model.variables.descriptionIn)) > 1)) ? (true) : (false));
}, function () {
return model.variables.descriptionIn;
}),
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("Ewef5W6QQ0GZwERDEK3GlQ.Style"), function () {
return (((model.variables.balanceMessageCustomStyleClassIn === "")) ? ("a-textRead c-gray6") : (model.variables.balanceMessageCustomStyleClassIn));
}, function () {
return model.variables.balanceMessageCustomStyleClassIn;
}),
value: model.variables.descriptionIn,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
})))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.balanceMessageCustomStyleClassIn), asPrimitiveValue(model.variables.descriptionIn), asPrimitiveValue(model.variables.balanceValueCustomStyleClassIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._balanceMessageCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._descriptionInDataFetchStatus), asPrimitiveValue(model.variables._balanceValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._cashBalanceRecordInDataFetchStatus), asPrimitiveValue(model.variables.cashBalanceRecordIn.valueAttr), asPrimitiveValue(model.variables.cashBalanceRecordIn.titleAttr)]
}))];
})];
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.BalanceHomeInfoCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._chargeCellPhone$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ChargeCellPhone");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: ChargeOnClickEvent
return controller.chargeOnClickEvent$Action(callContext);
});
};
Controller.prototype._clickBalance$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ClickBalance");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: ClickBalanceEvent
return controller.clickBalanceEvent$Action(callContext);
});
};

Controller.prototype.chargeCellPhone$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._chargeCellPhone$Action, callContext);

};
Controller.prototype.clickBalance$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._clickBalance$Action, callContext);

};
Controller.prototype.chargeOnClickEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.clickBalanceEvent$Action = function () {
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

