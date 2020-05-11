define("BALANCE_MBLOCKS.BalanceBlocks.CashOrchestrationCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.BalanceBlocks.CashBalanceInfo.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsInfoCard.mvc$model", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsInfoCard_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsFirstRegister", "isFirstRegisterIn", "IsFirstRegister", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isFirstRegisterInDataFetchStatus", "_isFirstRegisterInDataFetchStatus", "_isFirstRegisterInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceCash", "balanceCashIn", "BalanceCash", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceCashStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceCashStructRec), 
this.attr("_balanceCashInDataFetchStatus", "_balanceCashInDataFetchStatus", "_balanceCashInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceCashDescriptionIN", "balanceCashDescriptionINIn", "BalanceCashDescriptionIN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_balanceCashDescriptionINInDataFetchStatus", "_balanceCashDescriptionINInDataFetchStatus", "_balanceCashDescriptionINInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopTitleCustomStyleClass", "topTitleCustomStyleClassIn", "TopTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topTitleCustomStyleClassInDataFetchStatus", "_topTitleCustomStyleClassInDataFetchStatus", "_topTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopCustomClass", "topCustomClassIn", "TopCustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topCustomClassInDataFetchStatus", "_topCustomClassInDataFetchStatus", "_topCustomClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopBalanceValueCustomStyleClass", "topBalanceValueCustomStyleClassIn", "TopBalanceValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topBalanceValueCustomStyleClassInDataFetchStatus", "_topBalanceValueCustomStyleClassInDataFetchStatus", "_topBalanceValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TopBalanceMessageCustomStyleClass", "topBalanceMessageCustomStyleClassIn", "TopBalanceMessageCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_topBalanceMessageCustomStyleClassInDataFetchStatus", "_topBalanceMessageCustomStyleClassInDataFetchStatus", "_topBalanceMessageCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ListCustomClass", "listCustomClassIn", "ListCustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_listCustomClassInDataFetchStatus", "_listCustomClassInDataFetchStatus", "_listCustomClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvcModel.hasValidationWidgets || BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsInfoCard_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsFirstRegister" in inputs) {
this.variables.isFirstRegisterIn = inputs.IsFirstRegister;
if("_isFirstRegisterInDataFetchStatus" in inputs) {
this.variables._isFirstRegisterInDataFetchStatus = inputs._isFirstRegisterInDataFetchStatus;
}

}

if("BalanceCash" in inputs) {
this.variables.balanceCashIn = inputs.BalanceCash;
if("_balanceCashInDataFetchStatus" in inputs) {
this.variables._balanceCashInDataFetchStatus = inputs._balanceCashInDataFetchStatus;
}

}

if("BalanceCashDescriptionIN" in inputs) {
this.variables.balanceCashDescriptionINIn = inputs.BalanceCashDescriptionIN;
if("_balanceCashDescriptionINInDataFetchStatus" in inputs) {
this.variables._balanceCashDescriptionINInDataFetchStatus = inputs._balanceCashDescriptionINInDataFetchStatus;
}

}

if("TopTitleCustomStyleClass" in inputs) {
this.variables.topTitleCustomStyleClassIn = inputs.TopTitleCustomStyleClass;
if("_topTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._topTitleCustomStyleClassInDataFetchStatus = inputs._topTitleCustomStyleClassInDataFetchStatus;
}

}

if("TopCustomClass" in inputs) {
this.variables.topCustomClassIn = inputs.TopCustomClass;
if("_topCustomClassInDataFetchStatus" in inputs) {
this.variables._topCustomClassInDataFetchStatus = inputs._topCustomClassInDataFetchStatus;
}

}

if("TopBalanceValueCustomStyleClass" in inputs) {
this.variables.topBalanceValueCustomStyleClassIn = inputs.TopBalanceValueCustomStyleClass;
if("_topBalanceValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._topBalanceValueCustomStyleClassInDataFetchStatus = inputs._topBalanceValueCustomStyleClassInDataFetchStatus;
}

}

if("TopBalanceMessageCustomStyleClass" in inputs) {
this.variables.topBalanceMessageCustomStyleClassIn = inputs.TopBalanceMessageCustomStyleClass;
if("_topBalanceMessageCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._topBalanceMessageCustomStyleClassInDataFetchStatus = inputs._topBalanceMessageCustomStyleClassInDataFetchStatus;
}

}

if("ListCustomClass" in inputs) {
this.variables.listCustomClassIn = inputs.ListCustomClass;
if("_listCustomClassInDataFetchStatus" in inputs) {
this.variables._listCustomClassInDataFetchStatus = inputs._listCustomClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.CashOrchestrationCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.CashOrchestrationCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.CashOrchestrationCard.mvc$controller", "OutSystemsReactWidgets", "BALANCE_MBLOCKS.BalanceBlocks.CashBalanceInfo.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsInfoCard.mvc$view", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvc_controller, OSWidgets, BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsInfoCard_mvc_view) {
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
        View.displayName = "BalanceBlocks.CashOrchestrationCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsInfoCard_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_CashOrchestrationCard_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(model.variables.isFirstRegisterIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-24",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(BALANCE_MBLOCKS_BalanceBlocks_CashBalanceInfo_mvc_view, {
inputs: {
FormatDecimals: true,
Balance: model.variables.balanceCashIn.valueAttr,
_balanceInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceCashInDataFetchStatus),
Title: model.variables.balanceCashIn.titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceCashInDataFetchStatus),
BalanceMessageCustomStyleClass: model.variables.topBalanceMessageCustomStyleClassIn,
_balanceMessageCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topBalanceMessageCustomStyleClassInDataFetchStatus),
Description: model.variables.balanceCashDescriptionINIn,
_descriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceCashDescriptionINInDataFetchStatus),
TitleCustomStyleClass: model.variables.topTitleCustomStyleClassIn,
_titleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topTitleCustomStyleClassInDataFetchStatus),
BalanceValueCustomStyleClass: model.variables.topBalanceValueCustomStyleClassIn,
_balanceValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topBalanceValueCustomStyleClassInDataFetchStatus),
CustomClass: model.variables.topCustomClassIn,
_customClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._topCustomClassInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
chargeBalanceEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.chargeBalance$Action(controller.callContext(eventHandlerContext));
});
;
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
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsInfoCard_mvc_view, {
inputs: {
CustomClass: model.variables.listCustomClassIn,
_customClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listCustomClassInDataFetchStatus),
IsGreenColor: model.getCachedValue(idService.getId("YsLV91SvREGFFF30_WJwPA.IsGreenColor"), function () {
return ((model.variables.balanceCashIn.valueAttr.gt((OS.DataTypes.Decimal.defaultValue))) ? (true) : (false));
}, function () {
return model.variables.balanceCashIn.valueAttr;
}),
_isGreenColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceCashInDataFetchStatus),
Value: model.getCachedValue(idService.getId("YsLV91SvREGFFF30_WJwPA.Value"), function () {
return BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.balanceCashIn.valueAttr, callContext.withoutIterationContext()).resultOut;
}, function () {
return model.variables.balanceCashIn.valueAttr;
}),
_valueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceCashInDataFetchStatus),
Title: model.variables.balanceCashIn.titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceCashInDataFetchStatus)
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.CashOrchestrationCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_BalanceCashStructRec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
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

