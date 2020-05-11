define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "ChartsMobile.model", "MobileUIWidgets.model", "BALANCE_MBP.controller", "Essentials_MOB.controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.WidgetsNumber.GaugeChartV3.mvc$model", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB"], function (OutSystems, BALANCE_MBLOCKSModel, ChartsMobileModel, MobileUIWidgetsModel, BALANCE_MBPController, Essentials_MOBController, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("DataPointChart1", "dataPointChart1Var", "DataPointChart1", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataPointRec());
}, ChartsMobileModel.DataPointRec), 
this.attr("ChartConfig", "chartConfigVar", "ChartConfig", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.SolidGaugeEasyFormatRec());
}, MobileUIWidgetsModel.SolidGaugeEasyFormatRec), 
this.attr("AvailableValue", "availableValueIn", "AvailableValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TotalValue", "totalValueIn", "TotalValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_totalValueInDataFetchStatus", "_totalValueInDataFetchStatus", "_totalValueInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("CardDescription", "cardDescriptionIn", "CardDescription", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_cardDescriptionInDataFetchStatus", "_cardDescriptionInDataFetchStatus", "_cardDescriptionInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableValueFmt", "availableValueFmtIn", "AvailableValueFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_availableValueFmtInDataFetchStatus", "_availableValueFmtInDataFetchStatus", "_availableValueFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AvailableValueUnitFmt", "availableValueUnitFmtIn", "AvailableValueUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableValueUnitFmtInDataFetchStatus", "_availableValueUnitFmtInDataFetchStatus", "_availableValueUnitFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SpentValueFmt", "spentValueFmtIn", "SpentValueFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_spentValueFmtInDataFetchStatus", "_spentValueFmtInDataFetchStatus", "_spentValueFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SpentValueUnitFmt", "spentValueUnitFmtIn", "SpentValueUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_spentValueUnitFmtInDataFetchStatus", "_spentValueUnitFmtInDataFetchStatus", "_spentValueUnitFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TotalValueFmt", "totalValueFmtIn", "TotalValueFmt", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_totalValueFmtInDataFetchStatus", "_totalValueFmtInDataFetchStatus", "_totalValueFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TotalValueUnitFmt", "totalValueUnitFmtIn", "TotalValueUnitFmt", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_totalValueUnitFmtInDataFetchStatus", "_totalValueUnitFmtInDataFetchStatus", "_totalValueUnitFmtInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowIcon", "showIconIn", "ShowIcon", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showIconInDataFetchStatus", "_showIconInDataFetchStatus", "_showIconInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("AvailableValue" in inputs) {
this.variables.availableValueIn = inputs.AvailableValue;
if("_availableValueInDataFetchStatus" in inputs) {
this.variables._availableValueInDataFetchStatus = inputs._availableValueInDataFetchStatus;
}

}

if("TotalValue" in inputs) {
this.variables.totalValueIn = inputs.TotalValue;
if("_totalValueInDataFetchStatus" in inputs) {
this.variables._totalValueInDataFetchStatus = inputs._totalValueInDataFetchStatus;
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

if("CardDescription" in inputs) {
this.variables.cardDescriptionIn = inputs.CardDescription;
if("_cardDescriptionInDataFetchStatus" in inputs) {
this.variables._cardDescriptionInDataFetchStatus = inputs._cardDescriptionInDataFetchStatus;
}

}

if("AvailableValueFmt" in inputs) {
this.variables.availableValueFmtIn = inputs.AvailableValueFmt;
if("_availableValueFmtInDataFetchStatus" in inputs) {
this.variables._availableValueFmtInDataFetchStatus = inputs._availableValueFmtInDataFetchStatus;
}

}

if("AvailableValueUnitFmt" in inputs) {
this.variables.availableValueUnitFmtIn = inputs.AvailableValueUnitFmt;
if("_availableValueUnitFmtInDataFetchStatus" in inputs) {
this.variables._availableValueUnitFmtInDataFetchStatus = inputs._availableValueUnitFmtInDataFetchStatus;
}

}

if("SpentValueFmt" in inputs) {
this.variables.spentValueFmtIn = inputs.SpentValueFmt;
if("_spentValueFmtInDataFetchStatus" in inputs) {
this.variables._spentValueFmtInDataFetchStatus = inputs._spentValueFmtInDataFetchStatus;
}

}

if("SpentValueUnitFmt" in inputs) {
this.variables.spentValueUnitFmtIn = inputs.SpentValueUnitFmt;
if("_spentValueUnitFmtInDataFetchStatus" in inputs) {
this.variables._spentValueUnitFmtInDataFetchStatus = inputs._spentValueUnitFmtInDataFetchStatus;
}

}

if("TotalValueFmt" in inputs) {
this.variables.totalValueFmtIn = inputs.TotalValueFmt;
if("_totalValueFmtInDataFetchStatus" in inputs) {
this.variables._totalValueFmtInDataFetchStatus = inputs._totalValueFmtInDataFetchStatus;
}

}

if("TotalValueUnitFmt" in inputs) {
this.variables.totalValueUnitFmtIn = inputs.TotalValueUnitFmt;
if("_totalValueUnitFmtInDataFetchStatus" in inputs) {
this.variables._totalValueUnitFmtInDataFetchStatus = inputs._totalValueUnitFmtInDataFetchStatus;
}

}

if("ShowIcon" in inputs) {
this.variables.showIconIn = inputs.ShowIcon;
if("_showIconInDataFetchStatus" in inputs) {
this.variables._showIconInDataFetchStatus = inputs._showIconInDataFetchStatus;
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

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "ChartsMobile.model", "MobileUIWidgets.model", "BALANCE_MBP.controller", "Essentials_MOB.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.WidgetsNumber.GaugeChartV3.mvc$view", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, ChartsMobileModel, MobileUIWidgetsModel, BALANCE_MBPController, Essentials_MOBController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_controller, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvc_view) {
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
        View.displayName = "BalanceBlocks.ConsumptionsGraphCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_ConsumptionsGraphCard_mvc_controller;
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
HasRightSide: false,
StyleClass: ("-paddingEqual " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
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
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("yMa3op+D_0uE3k67vgOzwA.Style"), function () {
return ((model.variables.showIconIn) ? ("col-10 -noPaddingLeft") : ("col-12 -noPaddingLeft"));
}, function () {
return model.variables.showIconIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showIconInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("Gi_2cDo7NUmFObn2A4JuGA.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: model.variables.cardTitleIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cardTitleInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "col-2 text-right -noPaddingRight",
visible: model.variables.showIconIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showIconInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.small,
IconName: BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconArrowRight
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "gridRow mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvc_view, {
inputs: {
StyleClass: "-left",
DataPoint: model.variables.dataPointChart1Var,
SolidGaugeEasyFormat: model.variables.chartConfigVar
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
uuid: "8",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 va-middle",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("AfB5urCXrkaooSVckdflYw.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -regular c-greenDark") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: "Disponíveis",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.AdvancedHtml, {
tag: "h3",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("zT+yBBE6_kavRfUkjm4_5g.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("h3 c-greenDark -regular mt-4") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("zT+yBBE6_kavRfUkjm4_5g.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.availableValueFmtIn, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.availableValueUnitFmtIn, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((model.variables.showUnitIn) ? ((" " + model.variables.availableValueUnitFmtIn)) : ("")));
}, function () {
return model.variables.availableValueFmtIn;
}, function () {
return model.variables.availableValueUnitFmtIn;
}, function () {
return model.variables.showUnitIn;
}),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueFmtInDataFetchStatus, model.variables._availableValueUnitFmtInDataFetchStatus, model.variables._showUnitInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("6FghOqpHx0q0EcmZj4k+Bw.Style"), function () {
return (((model.variables.spentTitleCustomStyleClassIn === "")) ? ("a-textRead c-gray5") : (model.variables.spentTitleCustomStyleClassIn));
}, function () {
return model.variables.spentTitleCustomStyleClassIn;
}),
value: "Usados",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentTitleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("SBBodLT2u0C4ER_XutuzVA.Style"), function () {
return (((model.variables.spentValueCustomStyleClassIn === "")) ? ("a-textRead c-gray5 mt-4") : (model.variables.spentValueCustomStyleClassIn));
}, function () {
return model.variables.spentValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("SBBodLT2u0C4ER_XutuzVA.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.spentValueFmtIn, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.spentValueUnitFmtIn, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((model.variables.showUnitIn) ? ((" " + model.variables.spentValueUnitFmtIn)) : ("")));
}, function () {
return model.variables.spentValueFmtIn;
}, function () {
return model.variables.spentValueUnitFmtIn;
}, function () {
return model.variables.showUnitIn;
}),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentValueFmtInDataFetchStatus, model.variables._spentValueUnitFmtInDataFetchStatus, model.variables._showUnitInDataFetchStatus)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "separator mt-16 mb-12",
visible: model.getCachedValue(idService.getId("gsUrc88nj0WszI6AFb5baQ.Visible"), function () {
return ((((OS.BuiltinFunctions.trim(model.variables.cardDescriptionIn)) !== (""))) ? (true) : (false));
}, function () {
return model.variables.cardDescriptionIn;
}),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cardDescriptionInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.getCachedValue(idService.getId("fpYWuOri5UGiY4WXH37NZQ.Visible"), function () {
return ((((OS.BuiltinFunctions.trim(model.variables.cardDescriptionIn)) !== (""))) ? (true) : (false));
}, function () {
return model.variables.cardDescriptionIn;
}),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cardDescriptionInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead",
value: model.variables.cardDescriptionIn,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cardDescriptionInDataFetchStatus)
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.cardDescriptionIn), asPrimitiveValue(model.variables.spentValueCustomStyleClassIn), asPrimitiveValue(model.variables.spentValueUnitFmtIn), asPrimitiveValue(model.variables.spentValueFmtIn), asPrimitiveValue(model.variables.spentTitleCustomStyleClassIn), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.showUnitIn), asPrimitiveValue(model.variables.availableValueUnitFmtIn), asPrimitiveValue(model.variables.availableValueFmtIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables.chartConfigVar), asPrimitiveValue(model.variables.dataPointChart1Var), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables.cardTitleIn), asPrimitiveValue(model.variables._cardDescriptionInDataFetchStatus), asPrimitiveValue(model.variables._spentValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._spentValueUnitFmtInDataFetchStatus), asPrimitiveValue(model.variables._spentValueFmtInDataFetchStatus), asPrimitiveValue(model.variables._spentTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._showUnitInDataFetchStatus), asPrimitiveValue(model.variables._availableValueUnitFmtInDataFetchStatus), asPrimitiveValue(model.variables._availableValueFmtInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._cardTitleInDataFetchStatus), asPrimitiveValue(model.variables._showIconInDataFetchStatus), asPrimitiveValue(model.variables.showIconIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.ConsumptionsGraphCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "ChartsMobile.model", "MobileUIWidgets.model", "BALANCE_MBP.controller", "Essentials_MOB.controller", "BALANCE_MBLOCKS.languageResources", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, ChartsMobileModel, MobileUIWidgetsModel, BALANCE_MBPController, Essentials_MOBController, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
// DataPointChart1
// DataPointChart1.Value = If
model.variables.dataPointChart1Var.valueAttr = (((model.variables.availableValueIn.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.totalValueIn.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (Essentials_MOBController.default.roundAwayFromZero$Action(model.variables.availableValueIn.div(model.variables.totalValueIn).times(OS.BuiltinFunctions.integerToDecimal(100)), 0, callContext.withoutIterationContext()).resultOut));
// ChartConfig
// ChartConfig.ChartHeight = 120
model.variables.chartConfigVar.chartHeightAttr = 120;
// ChartConfig.ChartWidth = 160
model.variables.chartConfigVar.chartWidthAttr = 160;
// ChartConfig.Format = "<div><span> " + FormatDecimal_MBP(AvailableValueFmt, GetDecimalPlacesByUnit(AvailableValueUnitFmt)) + If + " </span><span>de " + FormatDecimal_MBP(TotalValueFmt, GetDecimalPlacesByUnit(TotalValueUnitFmt)) + If + "</span><span></span></div>"
model.variables.chartConfigVar.formatAttr = (((((("<div><span> " + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.availableValueFmtIn, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.availableValueUnitFmtIn, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((model.variables.showUnitIn) ? ((" " + model.variables.availableValueUnitFmtIn)) : (""))) + " </span><span>de ") + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.totalValueFmtIn, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.totalValueUnitFmtIn, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((model.variables.showUnitIn) ? ((" " + model.variables.totalValueUnitFmtIn)) : (""))) + "</span><span></span></div>");
// ChartConfig.MinValue = 0
model.variables.chartConfigVar.minValueAttr = 0;
// ChartConfig.MaxValue = 100
model.variables.chartConfigVar.maxValueAttr = 100;
// ChartConfig.BackgroundColorPane = If
model.variables.chartConfigVar.backgroundColorPaneAttr = (((model.variables.chartBackgroundColorIn === "")) ? ("#6ea514") : (model.variables.chartBackgroundColorIn));
// ChartConfig.BorderMarkerBackgroundColor = If
model.variables.chartConfigVar.borderMarkerBackgroundColorAttr = (((model.variables.chartBorderMarkerBackgroundColorIn === "")) ? ("#efeff1") : (model.variables.chartBorderMarkerBackgroundColorIn));
// ChartConfig.MarkerTriangleColor = If
model.variables.chartConfigVar.markerTriangleColorAttr = (((model.variables.chartMarkerTriangleColorIn === "")) ? ("#efeff1") : (model.variables.chartMarkerTriangleColorIn));
};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
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

