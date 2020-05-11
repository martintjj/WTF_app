define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsBalance.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.AvailableBalanceInfoCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.GeneralBalanceInfoCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.AddOnBalanceInfoCard.mvc$model", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPModel, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvcModel, BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvcModel) {
var OS = OutSystems.Internal;
var GetGraphTypeAggrRec = (function (_super) {
__extends(GetGraphTypeAggrRec, _super);
function GetGraphTypeAggrRec(defaults) {
_super.apply(this, arguments);
}
GetGraphTypeAggrRec.RecordListType = BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList;
GetGraphTypeAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetGraphTypeAggrRec.init();
return GetGraphTypeAggrRec;
})(OS.Model.AggregateRecord);
var GetCardTypeAggrRec = (function (_super) {
__extends(GetCardTypeAggrRec, _super);
function GetCardTypeAggrRec(defaults) {
_super.apply(this, arguments);
}
GetCardTypeAggrRec.RecordListType = BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList;
GetCardTypeAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetCardTypeAggrRec.init();
return GetCardTypeAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("CardTypeCode", "cardTypeCodeVar", "CardTypeCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLimitedGraph", "isLimitedGraphVar", "IsLimitedGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("BalanceOrchestrationStruct", "balanceOrchestrationStructIn", "BalanceOrchestrationStruct", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec), 
this.attr("_balanceOrchestrationStructInDataFetchStatus", "_balanceOrchestrationStructInDataFetchStatus", "_balanceOrchestrationStructInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("InternetCardCode", "internetCardCodeIn", "InternetCardCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_internetCardCodeInDataFetchStatus", "_internetCardCodeInDataFetchStatus", "_internetCardCodeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MinutesCardCode", "minutesCardCodeIn", "MinutesCardCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_minutesCardCodeInDataFetchStatus", "_minutesCardCodeInDataFetchStatus", "_minutesCardCodeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GeneralCardCode", "generalCardCodeIn", "GeneralCardCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_generalCardCodeInDataFetchStatus", "_generalCardCodeInDataFetchStatus", "_generalCardCodeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AddOnsCardCode", "addOnsCardCodeIn", "AddOnsCardCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_addOnsCardCodeInDataFetchStatus", "_addOnsCardCodeInDataFetchStatus", "_addOnsCardCodeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RowNumber", "rowNumberIn", "RowNumber", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_rowNumberInDataFetchStatus", "_rowNumberInDataFetchStatus", "_rowNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ChartBackgroundColor", "chartBackgroundColorIn", "ChartBackgroundColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_chartBackgroundColorInDataFetchStatus", "_chartBackgroundColorInDataFetchStatus", "_chartBackgroundColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ChartBorderMarkerBackgroundColor", "chartBorderMarkerBackgroundColorIn", "ChartBorderMarkerBackgroundColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_chartBorderMarkerBackgroundColorInDataFetchStatus", "_chartBorderMarkerBackgroundColorInDataFetchStatus", "_chartBorderMarkerBackgroundColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ChartMarkerTriangleColor", "chartMarkerTriangleColorIn", "ChartMarkerTriangleColor", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_chartMarkerTriangleColorInDataFetchStatus", "_chartMarkerTriangleColorInDataFetchStatus", "_chartMarkerTriangleColorInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleCustomStyleClass", "titleCustomStyleClassIn", "TitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ConsumptionsGraphCustomStyleClass", "consumptionsGraphCustomStyleClassIn", "ConsumptionsGraphCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_consumptionsGraphCustomStyleClassInDataFetchStatus", "_consumptionsGraphCustomStyleClassInDataFetchStatus", "_consumptionsGraphCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("SpentTitleCustomStyleClass", "spentTitleCustomStyleClassIn", "SpentTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_spentTitleCustomStyleClassInDataFetchStatus", "_spentTitleCustomStyleClassInDataFetchStatus", "_spentTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SpentValueCustomStyleClass", "spentValueCustomStyleClassIn", "SpentValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_spentValueCustomStyleClassInDataFetchStatus", "_spentValueCustomStyleClassInDataFetchStatus", "_spentValueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableBalanceCustomStyleClass", "availableBalanceCustomStyleClassIn", "AvailableBalanceCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableBalanceCustomStyleClassInDataFetchStatus", "_availableBalanceCustomStyleClassInDataFetchStatus", "_availableBalanceCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableBalanceTitleCustomStyleClass", "availableBalanceTitleCustomStyleClassIn", "AvailableBalanceTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableBalanceTitleCustomStyleClassInDataFetchStatus", "_availableBalanceTitleCustomStyleClassInDataFetchStatus", "_availableBalanceTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GeneralBalanceCustomStyleClass", "generalBalanceCustomStyleClassIn", "GeneralBalanceCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_generalBalanceCustomStyleClassInDataFetchStatus", "_generalBalanceCustomStyleClassInDataFetchStatus", "_generalBalanceCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GeneralBalanceTitleCustomStyleClass", "generalBalanceTitleCustomStyleClassIn", "GeneralBalanceTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_generalBalanceTitleCustomStyleClassInDataFetchStatus", "_generalBalanceTitleCustomStyleClassInDataFetchStatus", "_generalBalanceTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsShowAddOns", "isShowAddOnsIn", "IsShowAddOns", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isShowAddOnsInDataFetchStatus", "_isShowAddOnsInDataFetchStatus", "_isShowAddOnsInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsShowTitleAddOns", "isShowTitleAddOnsIn", "IsShowTitleAddOns", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isShowTitleAddOnsInDataFetchStatus", "_isShowTitleAddOnsInDataFetchStatus", "_isShowTitleAddOnsInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetGraphType", "getGraphTypeAggr", "getGraphTypeAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetGraphTypeAggrRec());
}, GetGraphTypeAggrRec), 
this.attr("GetCardType", "getCardTypeAggr", "getCardTypeAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetCardTypeAggrRec());
}, GetCardTypeAggrRec)
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
Model._hasValidationWidgetsValue = (((BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvcModel.hasValidationWidgets || BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvcModel.hasValidationWidgets) || BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("BalanceOrchestrationStruct" in inputs) {
this.variables.balanceOrchestrationStructIn = inputs.BalanceOrchestrationStruct;
if("_balanceOrchestrationStructInDataFetchStatus" in inputs) {
this.variables._balanceOrchestrationStructInDataFetchStatus = inputs._balanceOrchestrationStructInDataFetchStatus;
}

}

if("InternetCardCode" in inputs) {
this.variables.internetCardCodeIn = inputs.InternetCardCode;
if("_internetCardCodeInDataFetchStatus" in inputs) {
this.variables._internetCardCodeInDataFetchStatus = inputs._internetCardCodeInDataFetchStatus;
}

}

if("MinutesCardCode" in inputs) {
this.variables.minutesCardCodeIn = inputs.MinutesCardCode;
if("_minutesCardCodeInDataFetchStatus" in inputs) {
this.variables._minutesCardCodeInDataFetchStatus = inputs._minutesCardCodeInDataFetchStatus;
}

}

if("GeneralCardCode" in inputs) {
this.variables.generalCardCodeIn = inputs.GeneralCardCode;
if("_generalCardCodeInDataFetchStatus" in inputs) {
this.variables._generalCardCodeInDataFetchStatus = inputs._generalCardCodeInDataFetchStatus;
}

}

if("AddOnsCardCode" in inputs) {
this.variables.addOnsCardCodeIn = inputs.AddOnsCardCode;
if("_addOnsCardCodeInDataFetchStatus" in inputs) {
this.variables._addOnsCardCodeInDataFetchStatus = inputs._addOnsCardCodeInDataFetchStatus;
}

}

if("RowNumber" in inputs) {
this.variables.rowNumberIn = inputs.RowNumber;
if("_rowNumberInDataFetchStatus" in inputs) {
this.variables._rowNumberInDataFetchStatus = inputs._rowNumberInDataFetchStatus;
}

}

if("ChartBackgroundColor" in inputs) {
this.variables.chartBackgroundColorIn = inputs.ChartBackgroundColor;
if("_chartBackgroundColorInDataFetchStatus" in inputs) {
this.variables._chartBackgroundColorInDataFetchStatus = inputs._chartBackgroundColorInDataFetchStatus;
}

}

if("ChartBorderMarkerBackgroundColor" in inputs) {
this.variables.chartBorderMarkerBackgroundColorIn = inputs.ChartBorderMarkerBackgroundColor;
if("_chartBorderMarkerBackgroundColorInDataFetchStatus" in inputs) {
this.variables._chartBorderMarkerBackgroundColorInDataFetchStatus = inputs._chartBorderMarkerBackgroundColorInDataFetchStatus;
}

}

if("ChartMarkerTriangleColor" in inputs) {
this.variables.chartMarkerTriangleColorIn = inputs.ChartMarkerTriangleColor;
if("_chartMarkerTriangleColorInDataFetchStatus" in inputs) {
this.variables._chartMarkerTriangleColorInDataFetchStatus = inputs._chartMarkerTriangleColorInDataFetchStatus;
}

}

if("TitleCustomStyleClass" in inputs) {
this.variables.titleCustomStyleClassIn = inputs.TitleCustomStyleClass;
if("_titleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._titleCustomStyleClassInDataFetchStatus = inputs._titleCustomStyleClassInDataFetchStatus;
}

}

if("ConsumptionsGraphCustomStyleClass" in inputs) {
this.variables.consumptionsGraphCustomStyleClassIn = inputs.ConsumptionsGraphCustomStyleClass;
if("_consumptionsGraphCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._consumptionsGraphCustomStyleClassInDataFetchStatus = inputs._consumptionsGraphCustomStyleClassInDataFetchStatus;
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

if("SpentTitleCustomStyleClass" in inputs) {
this.variables.spentTitleCustomStyleClassIn = inputs.SpentTitleCustomStyleClass;
if("_spentTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._spentTitleCustomStyleClassInDataFetchStatus = inputs._spentTitleCustomStyleClassInDataFetchStatus;
}

}

if("SpentValueCustomStyleClass" in inputs) {
this.variables.spentValueCustomStyleClassIn = inputs.SpentValueCustomStyleClass;
if("_spentValueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._spentValueCustomStyleClassInDataFetchStatus = inputs._spentValueCustomStyleClassInDataFetchStatus;
}

}

if("AvailableBalanceCustomStyleClass" in inputs) {
this.variables.availableBalanceCustomStyleClassIn = inputs.AvailableBalanceCustomStyleClass;
if("_availableBalanceCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableBalanceCustomStyleClassInDataFetchStatus = inputs._availableBalanceCustomStyleClassInDataFetchStatus;
}

}

if("AvailableBalanceTitleCustomStyleClass" in inputs) {
this.variables.availableBalanceTitleCustomStyleClassIn = inputs.AvailableBalanceTitleCustomStyleClass;
if("_availableBalanceTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableBalanceTitleCustomStyleClassInDataFetchStatus = inputs._availableBalanceTitleCustomStyleClassInDataFetchStatus;
}

}

if("GeneralBalanceCustomStyleClass" in inputs) {
this.variables.generalBalanceCustomStyleClassIn = inputs.GeneralBalanceCustomStyleClass;
if("_generalBalanceCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._generalBalanceCustomStyleClassInDataFetchStatus = inputs._generalBalanceCustomStyleClassInDataFetchStatus;
}

}

if("GeneralBalanceTitleCustomStyleClass" in inputs) {
this.variables.generalBalanceTitleCustomStyleClassIn = inputs.GeneralBalanceTitleCustomStyleClass;
if("_generalBalanceTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._generalBalanceTitleCustomStyleClassInDataFetchStatus = inputs._generalBalanceTitleCustomStyleClassInDataFetchStatus;
}

}

if("IsShowAddOns" in inputs) {
this.variables.isShowAddOnsIn = inputs.IsShowAddOns;
if("_isShowAddOnsInDataFetchStatus" in inputs) {
this.variables._isShowAddOnsInDataFetchStatus = inputs._isShowAddOnsInDataFetchStatus;
}

}

if("IsShowTitleAddOns" in inputs) {
this.variables.isShowTitleAddOnsIn = inputs.IsShowTitleAddOns;
if("_isShowTitleAddOnsInDataFetchStatus" in inputs) {
this.variables._isShowTitleAddOnsInDataFetchStatus = inputs._isShowTitleAddOnsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsBalance.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.model", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsBalance.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsBalance.mvc$controller", "OutSystemsReactWidgets", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.AvailableBalanceInfoCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.GeneralBalanceInfoCard.mvc$view", "BALANCE_MBLOCKS.BalanceBlocks.AddOnBalanceInfoCard.mvc$view", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPModel, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvc_controller, OSWidgets, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvc_view) {
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
        View.displayName = "BalanceBlocks.ConsumptionsBalance";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvc_view, BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsBalance_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(((model.variables.cardTypeCodeVar === model.variables.internetCardCodeIn) || (model.variables.cardTypeCodeVar === model.variables.minutesCardCodeIn)), false, this, function () {
return [$if(model.variables.isLimitedGraphVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("ipyv1lYmwk6qgrirkb4BZg.Style"), function () {
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
TotalValueFmt: model.variables.balanceOrchestrationStructIn.totalAmountFmtAttr,
_totalValueFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
TotalValueUnitFmt: model.variables.balanceOrchestrationStructIn.totalAmountUnitFmtAttr,
_totalValueUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
TitleCustomStyleClass: model.variables.titleCustomStyleClassIn,
_titleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
ShowIcon: false,
AvailableValueUnitFmt: model.variables.balanceOrchestrationStructIn.availableAmountUnitFmtAttr,
_availableValueUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
ShowUnit: model.variables.balanceOrchestrationStructIn.showBalanceUnitAttr,
_showUnitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
SpentValueFmt: model.variables.balanceOrchestrationStructIn.consumedAmountFmtAttr,
_spentValueFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
SpentTitleCustomStyleClass: model.variables.spentTitleCustomStyleClassIn,
_spentTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentTitleCustomStyleClassInDataFetchStatus),
AvailableTitleCustomStyleClass: model.variables.availableTitleCustomStyleClassIn,
_availableTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus),
SpentValueCustomStyleClass: model.variables.spentValueCustomStyleClassIn,
_spentValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentValueCustomStyleClassInDataFetchStatus),
AvailableValue: model.variables.balanceOrchestrationStructIn.availableAmountAttr,
_availableValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
ChartMarkerTriangleColor: model.variables.chartMarkerTriangleColorIn,
_chartMarkerTriangleColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartMarkerTriangleColorInDataFetchStatus),
AvailableValueCustomStyleClass: model.variables.availableValueCustomStyleClassIn,
_availableValueCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
SpentValueUnitFmt: model.variables.balanceOrchestrationStructIn.consumedAmountUnitFmtAttr,
_spentValueUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
AvailableValueFmt: model.variables.balanceOrchestrationStructIn.availableAmountFmtAttr,
_availableValueFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
CardTitle: model.variables.balanceOrchestrationStructIn.titleAttr,
_cardTitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
CardDescription: model.variables.balanceOrchestrationStructIn.descriptionAttr,
_cardDescriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
ChartBackgroundColor: model.variables.chartBackgroundColorIn,
_chartBackgroundColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartBackgroundColorInDataFetchStatus),
TotalValue: model.variables.balanceOrchestrationStructIn.totalAmountAttr,
_totalValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
CustomStyleClass: model.variables.consumptionsGraphCustomStyleClassIn,
_customStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._consumptionsGraphCustomStyleClassInDataFetchStatus),
ChartBorderMarkerBackgroundColor: model.variables.chartBorderMarkerBackgroundColorIn,
_chartBorderMarkerBackgroundColorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._chartBorderMarkerBackgroundColorInDataFetchStatus)
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
name: "ConsumptionsGraphCard",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("jh0YFrRrO0mGgaOHjjlq+Q.Style"), function () {
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
}, React.createElement(BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvc_view, {
inputs: {
ShowIcon: false,
Title: model.variables.balanceOrchestrationStructIn.titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
Description: model.variables.balanceOrchestrationStructIn.descriptionAttr,
_descriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
CustomStyleClass: model.variables.availableBalanceCustomStyleClassIn,
_customStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableBalanceCustomStyleClassInDataFetchStatus),
AvailableTitleCustomStyleClass: model.variables.availableBalanceTitleCustomStyleClassIn,
_availableTitleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableBalanceTitleCustomStyleClassInDataFetchStatus),
AvailableValue: model.variables.balanceOrchestrationStructIn.availableAmountFmtAttr,
_availableValueInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
Unit: model.variables.balanceOrchestrationStructIn.availableAmountUnitFmtAttr,
_unitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
TitleCustomStyleClass: model.variables.availableBalanceCustomStyleClassIn,
_titleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableBalanceCustomStyleClassInDataFetchStatus),
ShowUnit: model.variables.balanceOrchestrationStructIn.showBalanceUnitAttr,
_showUnitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus)
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
})];
}, function () {
return [$if((model.variables.cardTypeCodeVar === model.variables.generalCardCodeIn), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("cqgre1HZzUWD515HOqncKQ.Style"), function () {
return (((model.variables.rowNumberIn === 0)) ? ("") : ("mt-24"));
}, function () {
return model.variables.rowNumberIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._rowNumberInDataFetchStatus)
}, React.createElement(BALANCE_MBLOCKS_BalanceBlocks_GeneralBalanceInfoCard_mvc_view, {
inputs: {
Title: model.variables.balanceOrchestrationStructIn.titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
TitleCustomStyleClass: model.variables.generalBalanceTitleCustomStyleClassIn,
_titleCustomStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._generalBalanceTitleCustomStyleClassInDataFetchStatus),
BalanceInfo: model.variables.balanceOrchestrationStructIn.descriptionAttr,
_balanceInfoInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
CustomStyleClass: model.variables.generalBalanceCustomStyleClassIn,
_customStyleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._generalBalanceCustomStyleClassInDataFetchStatus)
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [$if(model.variables.isShowAddOnsIn, false, this, function () {
return [$if((model.variables.cardTypeCodeVar === model.variables.addOnsCardCodeIn), false, this, function () {
return [React.createElement(BALANCE_MBLOCKS_BalanceBlocks_AddOnBalanceInfoCard_mvc_view, {
inputs: {
AvailableAmountUnitFmt: model.variables.balanceOrchestrationStructIn.availableAmountUnitFmtAttr,
_availableAmountUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
IsShowTitle: model.variables.isShowTitleAddOnsIn,
_isShowTitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isShowTitleAddOnsInDataFetchStatus),
DescriptionCard: model.variables.balanceOrchestrationStructIn.titleAttr,
_descriptionCardInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
TotalAmountUnitFmt: model.variables.balanceOrchestrationStructIn.totalAmountUnitFmtAttr,
_totalAmountUnitFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
SubTitle: "Disponível",
AvailableAmountFmt: model.variables.balanceOrchestrationStructIn.availableAmountFmtAttr,
_availableAmountFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
TotalAmountFmt: model.variables.balanceOrchestrationStructIn.totalAmountFmtAttr,
_totalAmountFmtInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceOrchestrationStructInDataFetchStatus),
Title: "Aditivos de Apps"
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
uuid: "6",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
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
define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsBalance.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.model", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBLOCKS.model$Local_BALANCE_CARD_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.model$Local_BALANCE_CARD_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPModel, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype.getGraphType$AggrRefresh = function (maxRecords) {
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

var qploId = model.variables.balanceOrchestrationStructIn.graphTypeIDAttr;

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
return model.variables.getGraphTypeAggr;
}, function () {
controller._getGraphTypeOnAfterFetch$Action(controller.callContext(callContext));
});
};
Controller.prototype.getCardType$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qploId = model.variables.balanceOrchestrationStructIn.cardTypeIDAttr;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" o0, \"ENLocal_BALANCE_CARD_TYPE\".\"Label\" o1, \"ENLocal_BALANCE_CARD_TYPE\".\"Code\" o2, \"ENLocal_BALANCE_CARD_TYPE\".\"DateTime\" o3";
} else {
selectSql += "\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" o0, \"ENLocal_BALANCE_CARD_TYPE\".\"Label\" o1, \"ENLocal_BALANCE_CARD_TYPE\".\"Code\" o2, \"ENLocal_BALANCE_CARD_TYPE\".\"DateTime\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_qsx_Local_BALANCE_CARD_TYPE\" \"ENLocal_BALANCE_CARD_TYPE\"";
fromAndWhereSql += " WHERE ";
if (qploId != 0) {
fromAndWhereSql += "((\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" = :qploId) AND (\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" IS NOT NULL))";
argsList.add("qploId", /*LONGINTEGER*/ 4, qploId);
} else {
fromAndWhereSql += "(\"ENLocal_BALANCE_CARD_TYPE\".\"Id\" IS NULL)";
}
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, BALANCE_MBLOCKSModel.Local_BALANCE_CARD_TYPERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_BALANCE_CARD_TYPEAttr",
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
return model.variables.getCardTypeAggr;
}, function () {
controller._getCardTypeOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getGraphType$AggrRefresh", "getCardType$AggrRefresh"];
// Client Actions
Controller.prototype._getCardTypeOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetCardTypeOnAfterFetch");
callContext = controller.callContext(callContext);
// CardTypeCode = GetCardType.List.Current.Local_BALANCE_CARD_TYPE.Code
model.variables.cardTypeCodeVar = model.variables.getCardTypeAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_CARD_TYPEAttr.codeAttr;
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Refresh Query: GetCardType
var result = controller.getCardType$AggrRefresh(1);
model.flush();
return result.then(function () {
// Refresh Query: GetGraphType
var result = controller.getGraphType$AggrRefresh(1);
model.flush();
return result;
});
});
};
Controller.prototype._getGraphTypeOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetGraphTypeOnAfterFetch");
callContext = controller.callContext(callContext);
// IsLimitedGraph = GetGraphType.List.Current.Local_BALANCE_GRAPH_TYPE.IsLimitedGraph
model.variables.isLimitedGraphVar = model.variables.getGraphTypeAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_GRAPH_TYPEAttr.isLimitedGraphAttr;
};

Controller.prototype.getCardTypeOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getCardTypeOnAfterFetch$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.getGraphTypeOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getGraphTypeOnAfterFetch$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
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

