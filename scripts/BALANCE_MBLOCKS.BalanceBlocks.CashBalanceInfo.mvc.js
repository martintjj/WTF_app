define("BALANCE_MBLOCKS.BalanceBlocks.CashBalanceInfo.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel) {
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
this.attr("Description", "descriptionIn", "Description", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Balance", "balanceIn", "Balance", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_balanceInDataFetchStatus", "_balanceInDataFetchStatus", "_balanceInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("FormatDecimals", "formatDecimalsIn", "FormatDecimals", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("_formatDecimalsInDataFetchStatus", "_formatDecimalsInDataFetchStatus", "_formatDecimalsInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleCustomStyleClass", "titleCustomStyleClassIn", "TitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CustomClass", "customClassIn", "CustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_customClassInDataFetchStatus", "_customClassInDataFetchStatus", "_customClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("Description" in inputs) {
this.variables.descriptionIn = inputs.Description;
if("_descriptionInDataFetchStatus" in inputs) {
this.variables._descriptionInDataFetchStatus = inputs._descriptionInDataFetchStatus;
}

}

if("Balance" in inputs) {
this.variables.balanceIn = inputs.Balance;
if("_balanceInDataFetchStatus" in inputs) {
this.variables._balanceInDataFetchStatus = inputs._balanceInDataFetchStatus;
}

}

if("FormatDecimals" in inputs) {
this.variables.formatDecimalsIn = inputs.FormatDecimals;
if("_formatDecimalsInDataFetchStatus" in inputs) {
this.variables._formatDecimalsInDataFetchStatus = inputs._formatDecimalsInDataFetchStatus;
}

}

if("TitleCustomStyleClass" in inputs) {
this.variables.titleCustomStyleClassIn = inputs.TitleCustomStyleClass;
if("_titleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._titleCustomStyleClassInDataFetchStatus = inputs._titleCustomStyleClassInDataFetchStatus;
}

}

if("CustomClass" in inputs) {
this.variables.customClassIn = inputs.CustomClass;
if("_customClassInDataFetchStatus" in inputs) {
this.variables._customClassInDataFetchStatus = inputs._customClassInDataFetchStatus;
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
define("BALANCE_MBLOCKS.BalanceBlocks.CashBalanceInfo.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.CashBalanceInfo.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.CashBalanceInfo.mvc$controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvc_controller, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view) {
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
        View.displayName = "BalanceBlocks.CashBalanceInfo";
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
                return BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvc_controller;
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
StyleClass: ("-paddingEqual mb-2 " + model.variables.customClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus),
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
uuid: "0",
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
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("ay+4YRcDv0uTuz_8TvBSAQ.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8 mb-4") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: model.variables.titleIn,
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
style: model.getCachedValue(idService.getId("fA7bszpw50aauKRT1ZdDlw.Style"), function () {
return (((model.variables.balanceValueCustomStyleClassIn === "")) ? (((model.variables.balanceIn.gt((OS.DataTypes.Decimal.defaultValue))) ? ("a-textBigLight mb-16") : (((model.variables.balanceIn.equals((OS.DataTypes.Decimal.defaultValue))) ? ("a-textBigLight mb-16 c-pureBlack") : ("a-textBigLight mb-16 c-red"))))) : (model.variables.balanceValueCustomStyleClassIn));
}, function () {
return model.variables.balanceValueCustomStyleClassIn;
}, function () {
return model.variables.balanceIn;
}),
value: model.getCachedValue(idService.getId("fA7bszpw50aauKRT1ZdDlw.Value"), function () {
return ((model.variables.formatDecimalsIn) ? (BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.balanceIn, callContext.withoutIterationContext()).resultOut) : (OS.BuiltinFunctions.decimalToText(model.variables.balanceIn)));
}, function () {
return model.variables.formatDecimalsIn;
}, function () {
return model.variables.balanceIn;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceValueCustomStyleClassInDataFetchStatus, model.variables._balanceInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._formatDecimalsInDataFetchStatus, model.variables._balanceInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("SLBaV1ThV0Omhjg3NBQtxw.Visible"), function () {
return ((((OS.BuiltinFunctions.trim(model.variables.descriptionIn)) !== (""))) ? (true) : (false));
}, function () {
return model.variables.descriptionIn;
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("+StZh1SfwUaRKtxByKDX7Q.Style"), function () {
return (((model.variables.balanceMessageCustomStyleClassIn === "")) ? ("a-textRead -italic mb-16") : (model.variables.balanceMessageCustomStyleClassIn));
}, function () {
return model.variables.balanceMessageCustomStyleClassIn;
}),
value: model.variables.descriptionIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceMessageCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
})), React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "6",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.chargeBalance$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -fullWidth",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Carregar saldo", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.balanceMessageCustomStyleClassIn), asPrimitiveValue(model.variables.descriptionIn), asPrimitiveValue(model.variables.balanceValueCustomStyleClassIn), asPrimitiveValue(model.variables.balanceIn), asPrimitiveValue(model.variables.formatDecimalsIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._balanceMessageCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._descriptionInDataFetchStatus), asPrimitiveValue(model.variables._balanceValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._balanceInDataFetchStatus), asPrimitiveValue(model.variables._formatDecimalsInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables.titleIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.CashBalanceInfo.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._chargeBalance$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ChargeBalance");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: ChargeBalanceEvent
return controller.chargeBalanceEvent$Action(callContext);
});
};

Controller.prototype.chargeBalance$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._chargeBalance$Action, callContext);

};
Controller.prototype.chargeBalanceEvent$Action = function () {
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

