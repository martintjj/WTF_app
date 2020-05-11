define("BALANCE_MBLOCKS.BalanceBlocks.AddOnBalanceInfoCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "Essentials_MOB.controller", "BALANCE_MBP.controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$model", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, Essentials_MOBController, BALANCE_MBPController, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsShowTitle", "isShowTitleIn", "IsShowTitle", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isShowTitleInDataFetchStatus", "_isShowTitleInDataFetchStatus", "_isShowTitleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Title", "titleIn", "Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SubTitle", "subTitleIn", "SubTitle", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_subTitleInDataFetchStatus", "_subTitleInDataFetchStatus", "_subTitleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("DescriptionCard", "descriptionCardIn", "DescriptionCard", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_descriptionCardInDataFetchStatus", "_descriptionCardInDataFetchStatus", "_descriptionCardInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableAmountFmt", "availableAmountFmtIn", "AvailableAmountFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_availableAmountFmtInDataFetchStatus", "_availableAmountFmtInDataFetchStatus", "_availableAmountFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableAmountUnitFmt", "availableAmountUnitFmtIn", "AvailableAmountUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableAmountUnitFmtInDataFetchStatus", "_availableAmountUnitFmtInDataFetchStatus", "_availableAmountUnitFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TotalAmountUnitFmt", "totalAmountUnitFmtIn", "TotalAmountUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_totalAmountUnitFmtInDataFetchStatus", "_totalAmountUnitFmtInDataFetchStatus", "_totalAmountUnitFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TotalAmountFmt", "totalAmountFmtIn", "TotalAmountFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_totalAmountFmtInDataFetchStatus", "_totalAmountFmtInDataFetchStatus", "_totalAmountFmtInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("IsShowTitle" in inputs) {
this.variables.isShowTitleIn = inputs.IsShowTitle;
if("_isShowTitleInDataFetchStatus" in inputs) {
this.variables._isShowTitleInDataFetchStatus = inputs._isShowTitleInDataFetchStatus;
}

}

if("Title" in inputs) {
this.variables.titleIn = inputs.Title;
if("_titleInDataFetchStatus" in inputs) {
this.variables._titleInDataFetchStatus = inputs._titleInDataFetchStatus;
}

}

if("SubTitle" in inputs) {
this.variables.subTitleIn = inputs.SubTitle;
if("_subTitleInDataFetchStatus" in inputs) {
this.variables._subTitleInDataFetchStatus = inputs._subTitleInDataFetchStatus;
}

}

if("DescriptionCard" in inputs) {
this.variables.descriptionCardIn = inputs.DescriptionCard;
if("_descriptionCardInDataFetchStatus" in inputs) {
this.variables._descriptionCardInDataFetchStatus = inputs._descriptionCardInDataFetchStatus;
}

}

if("AvailableAmountFmt" in inputs) {
this.variables.availableAmountFmtIn = inputs.AvailableAmountFmt;
if("_availableAmountFmtInDataFetchStatus" in inputs) {
this.variables._availableAmountFmtInDataFetchStatus = inputs._availableAmountFmtInDataFetchStatus;
}

}

if("AvailableAmountUnitFmt" in inputs) {
this.variables.availableAmountUnitFmtIn = inputs.AvailableAmountUnitFmt;
if("_availableAmountUnitFmtInDataFetchStatus" in inputs) {
this.variables._availableAmountUnitFmtInDataFetchStatus = inputs._availableAmountUnitFmtInDataFetchStatus;
}

}

if("TotalAmountUnitFmt" in inputs) {
this.variables.totalAmountUnitFmtIn = inputs.TotalAmountUnitFmt;
if("_totalAmountUnitFmtInDataFetchStatus" in inputs) {
this.variables._totalAmountUnitFmtInDataFetchStatus = inputs._totalAmountUnitFmtInDataFetchStatus;
}

}

if("TotalAmountFmt" in inputs) {
this.variables.totalAmountFmtIn = inputs.TotalAmountFmt;
if("_totalAmountFmtInDataFetchStatus" in inputs) {
this.variables._totalAmountFmtInDataFetchStatus = inputs._totalAmountFmtInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.AddOnBalanceInfoCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "Essentials_MOB.controller", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.AddOnBalanceInfoCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.AddOnBalanceInfoCard.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$view", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, Essentials_MOBController, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view) {
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
        View.displayName = "BalanceBlocks.AddOnBalanceInfoCard";
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
                return BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(!(model.variables.totalAmountFmtIn.equals(OS.BuiltinFunctions.integerToDecimal(0))), false, this, function () {
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
StyleClass: "-paddingEqual",
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
name: "Consumption13",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [$if(model.variables.isShowTitleIn, false, this, function () {
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
value: model.variables.titleIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
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
style: "a-textRead -small c-greenDark",
value: model.variables.subTitleIn,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._subTitleInDataFetchStatus)
})))];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-appsProgressContainer",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-appsProgressLabel",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-gray8",
value: model.variables.descriptionCardIn,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionCardInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "m-appsProgress",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Height: 5,
StyleClass: "-marker -greenDark",
AnimateInitialProgress: false,
Progress: model.getCachedValue(idService.getId("J+d1bfDQAU6SYr_6ftCxrQ.Progress"), function () {
return OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc((((model.variables.availableAmountFmtIn.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.totalAmountFmtIn.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (Essentials_MOBController.default.roundAwayFromZero$Action(model.variables.availableAmountFmtIn.div(model.variables.totalAmountFmtIn).times(OS.BuiltinFunctions.integerToDecimal(100)), 0, callContext.withoutIterationContext()).resultOut))));
}, function () {
return model.variables.availableAmountFmtIn;
}, function () {
return model.variables.totalAmountFmtIn;
}),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableAmountFmtInDataFetchStatus, model.variables._totalAmountFmtInDataFetchStatus)
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
uuid: "11",
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
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-greenDark",
value: model.getCachedValue(idService.getId("Ol3X+JukOkq1GImX7lorlQ.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.availableAmountFmtIn, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.availableAmountUnitFmtIn, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + model.variables.availableAmountUnitFmtIn);
}, function () {
return model.variables.availableAmountFmtIn;
}, function () {
return model.variables.availableAmountUnitFmtIn;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableAmountFmtInDataFetchStatus, model.variables._availableAmountUnitFmtInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small",
value: model.getCachedValue(idService.getId("nj1iX6gnJkO+xd4atXngsg.Value"), function () {
return (("de " + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.totalAmountFmtIn, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.totalAmountUnitFmtIn, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + model.variables.totalAmountUnitFmtIn);
}, function () {
return model.variables.totalAmountFmtIn;
}, function () {
return model.variables.totalAmountUnitFmtIn;
}),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._totalAmountFmtInDataFetchStatus, model.variables._totalAmountUnitFmtInDataFetchStatus)
})))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.totalAmountUnitFmtIn), asPrimitiveValue(model.variables.availableAmountUnitFmtIn), asPrimitiveValue(model.variables.totalAmountFmtIn), asPrimitiveValue(model.variables.availableAmountFmtIn), asPrimitiveValue(model.variables.descriptionCardIn), asPrimitiveValue(model.variables.subTitleIn), asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables._totalAmountUnitFmtInDataFetchStatus), asPrimitiveValue(model.variables._availableAmountUnitFmtInDataFetchStatus), asPrimitiveValue(model.variables._totalAmountFmtInDataFetchStatus), asPrimitiveValue(model.variables._availableAmountFmtInDataFetchStatus), asPrimitiveValue(model.variables._descriptionCardInDataFetchStatus), asPrimitiveValue(model.variables._subTitleInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables._isShowTitleInDataFetchStatus), asPrimitiveValue(model.variables.isShowTitleIn)]
}))];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.AddOnBalanceInfoCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "Essentials_MOB.controller", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, Essentials_MOBController, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
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

