define("BALANCE_MBLOCKS.BalanceBlocks.MasterBalanceCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "ChartsMobile.model", "MobileUIWidgets.model", "BALANCE_MBP.controller", "Essentials_MOB.controller", "BALANCE_MBP.model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.WidgetsNumber.GaugeChartV3.mvc$model", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, ChartsMobileModel, MobileUIWidgetsModel, BALANCE_MBPController, Essentials_MOBController, BALANCE_MBPModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvcModel) {
var OS = OutSystems.Internal;
var GetGraphTypeByIDAggrRec = (function (_super) {
__extends(GetGraphTypeByIDAggrRec, _super);
function GetGraphTypeByIDAggrRec(defaults) {
_super.apply(this, arguments);
}
GetGraphTypeByIDAggrRec.RecordListType = BALANCE_MBLOCKSModel.Local_BALANCE_GRAPH_TYPERecordList;
GetGraphTypeByIDAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetGraphTypeByIDAggrRec.init();
return GetGraphTypeByIDAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ChartConfig", "chartConfigVar", "ChartConfig", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new MobileUIWidgetsModel.SolidGaugeEasyFormatRec());
}, MobileUIWidgetsModel.SolidGaugeEasyFormatRec), 
this.attr("DataPointChart", "dataPointChartVar", "DataPointChart", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ChartsMobileModel.DataPointRec());
}, ChartsMobileModel.DataPointRec), 
this.attr("IsLimitedGraph", "isLimitedGraphVar", "IsLimitedGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsUnlimitedGraph", "isUnlimitedGraphVar", "IsUnlimitedGraph", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CellPhoneNumber", "cellPhoneNumberIn", "CellPhoneNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_cellPhoneNumberInDataFetchStatus", "_cellPhoneNumberInDataFetchStatus", "_cellPhoneNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CellPhoneTariff", "cellPhoneTariffIn", "CellPhoneTariff", true, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("_cellPhoneTariffInDataFetchStatus", "_cellPhoneTariffInDataFetchStatus", "_cellPhoneTariffInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BalanceRecord", "balanceRecordIn", "BalanceRecord", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec());
}, BALANCE_MBLOCKSModel.STR_BalanceOrchestrationStructRec), 
this.attr("_balanceRecordInDataFetchStatus", "_balanceRecordInDataFetchStatus", "_balanceRecordInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("CustomStyleClass", "customStyleClassIn", "CustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_customStyleClassInDataFetchStatus", "_customStyleClassInDataFetchStatus", "_customStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IconArrowRight", "iconArrowRightIn", "IconArrowRight", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_iconArrowRightInDataFetchStatus", "_iconArrowRightInDataFetchStatus", "_iconArrowRightInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("TitleCustomStyleClass", "titleCustomStyleClassIn", "TitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", "_titleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShortLabelCustomStyleClass", "shortLabelCustomStyleClassIn", "ShortLabelCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_shortLabelCustomStyleClassInDataFetchStatus", "_shortLabelCustomStyleClassInDataFetchStatus", "_shortLabelCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IconCustomStyleClass", "iconCustomStyleClassIn", "IconCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_iconCustomStyleClassInDataFetchStatus", "_iconCustomStyleClassInDataFetchStatus", "_iconCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("GetGraphTypeByID", "getGraphTypeByIDAggr", "getGraphTypeByIDAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetGraphTypeByIDAggrRec());
}, GetGraphTypeByIDAggrRec)
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
if("CellPhoneNumber" in inputs) {
this.variables.cellPhoneNumberIn = inputs.CellPhoneNumber;
if("_cellPhoneNumberInDataFetchStatus" in inputs) {
this.variables._cellPhoneNumberInDataFetchStatus = inputs._cellPhoneNumberInDataFetchStatus;
}

}

if("CellPhoneTariff" in inputs) {
this.variables.cellPhoneTariffIn = inputs.CellPhoneTariff;
if("_cellPhoneTariffInDataFetchStatus" in inputs) {
this.variables._cellPhoneTariffInDataFetchStatus = inputs._cellPhoneTariffInDataFetchStatus;
}

}

if("BalanceRecord" in inputs) {
this.variables.balanceRecordIn = inputs.BalanceRecord;
if("_balanceRecordInDataFetchStatus" in inputs) {
this.variables._balanceRecordInDataFetchStatus = inputs._balanceRecordInDataFetchStatus;
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

if("CustomStyleClass" in inputs) {
this.variables.customStyleClassIn = inputs.CustomStyleClass;
if("_customStyleClassInDataFetchStatus" in inputs) {
this.variables._customStyleClassInDataFetchStatus = inputs._customStyleClassInDataFetchStatus;
}

}

if("IconArrowRight" in inputs) {
this.variables.iconArrowRightIn = inputs.IconArrowRight;
if("_iconArrowRightInDataFetchStatus" in inputs) {
this.variables._iconArrowRightInDataFetchStatus = inputs._iconArrowRightInDataFetchStatus;
}

}

if("TitleCustomStyleClass" in inputs) {
this.variables.titleCustomStyleClassIn = inputs.TitleCustomStyleClass;
if("_titleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._titleCustomStyleClassInDataFetchStatus = inputs._titleCustomStyleClassInDataFetchStatus;
}

}

if("ShortLabelCustomStyleClass" in inputs) {
this.variables.shortLabelCustomStyleClassIn = inputs.ShortLabelCustomStyleClass;
if("_shortLabelCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._shortLabelCustomStyleClassInDataFetchStatus = inputs._shortLabelCustomStyleClassInDataFetchStatus;
}

}

if("IconCustomStyleClass" in inputs) {
this.variables.iconCustomStyleClassIn = inputs.IconCustomStyleClass;
if("_iconCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._iconCustomStyleClassInDataFetchStatus = inputs._iconCustomStyleClassInDataFetchStatus;
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
define("BALANCE_MBLOCKS.BalanceBlocks.MasterBalanceCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "ChartsMobile.model", "MobileUIWidgets.model", "BALANCE_MBP.controller", "Essentials_MOB.controller", "BALANCE_MBP.model", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.MasterBalanceCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.MasterBalanceCard.mvc$controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.WidgetsNumber.GaugeChartV3.mvc$view", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, ChartsMobileModel, MobileUIWidgetsModel, BALANCE_MBPController, Essentials_MOBController, BALANCE_MBPModel, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvc_controller, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvc_view) {
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
        View.displayName = "BalanceBlocks.MasterBalanceCard";
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
                return BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_MasterBalanceCard_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(model.variables.isUnlimitedGraphVar, false, this, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
StyleClass: "-paddingTopMinor -ellipsis",
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
name: "MainCard12",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.internetNameClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
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
style: "col-10 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "-ellipsis"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-gray8 -bold -inline -ellipsis",
value: ((model.variables.cellPhoneNumberIn + " ") + model.variables.cellPhoneTariffIn),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cellPhoneNumberInDataFetchStatus, model.variables._cellPhoneTariffInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-2 text-right -noPaddingRight",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.small
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.internetBalanceClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "text-center mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-gray8 -ellipsis",
value: "Internet",
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-infiniteChartContainer",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-infiniteChart",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-infiniteChartGradient",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BALANCE_MBLOCKS.InfinityChartGradient.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-infiniteChartGradient -shadow",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BALANCE_MBLOCKS.InfinityChartGradientShadow.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
tag: "h2",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h2 c-greenDark -regular a-infiniteChartText",
value: "Ilimitado",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._cellPhoneTariffInDataFetchStatus), asPrimitiveValue(model.variables._cellPhoneNumberInDataFetchStatus), asPrimitiveValue(model.variables.cellPhoneTariffIn), asPrimitiveValue(model.variables.cellPhoneNumberIn)]
})];
}, function () {
return [$if(model.variables.isLimitedGraphVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: ("-paddingTopMinor -ellipsis " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus),
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
name: "MainCard",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.internetNameClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-10 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "-ellipsis"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("GHuLhDQz1EGW4_m0wMhJQw.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("h3 c-gray8 -bold -inline -ellipsis") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: ((model.variables.cellPhoneNumberIn + " ") + model.variables.cellPhoneTariffIn),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cellPhoneNumberInDataFetchStatus, model.variables._cellPhoneTariffInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-2 text-right -noPaddingRight",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: model.getCachedValue(idService.getId("PyMHRcx6MU+najfSlnLWPQ.IconName"), function () {
return (((model.variables.iconArrowRightIn === OS.BuiltinFunctions.nullTextIdentifier())) ? (BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconArrowRight) : (model.variables.iconArrowRightIn));
}, function () {
return model.variables.iconArrowRightIn;
}),
_iconNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconArrowRightInDataFetchStatus),
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.small,
StyleClass: model.getCachedValue(idService.getId("PyMHRcx6MU+najfSlnLWPQ.StyleClass"), function () {
return (((model.variables.iconCustomStyleClassIn === "")) ? ("") : (model.variables.iconCustomStyleClassIn));
}, function () {
return model.variables.iconCustomStyleClassIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconCustomStyleClassInDataFetchStatus)
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
uuid: "24",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.internetBalanceClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "text-center mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("5Z0aSXuG9U+Rnb9kfOXD2Q.Style"), function () {
return (((model.variables.shortLabelCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8") : (model.variables.shortLabelCustomStyleClassIn));
}, function () {
return model.variables.shortLabelCustomStyleClassIn;
}),
value: model.variables.balanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._shortLabelCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceRecordInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsNumber_GaugeChartV3_mvc_view, {
inputs: {
DataPoint: model.variables.dataPointChartVar,
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
uuid: "27",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20",
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
style: model.getCachedValue(idService.getId("bCAh9Vpgtk+INQ2YpN_l3g.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -bullet -medium c-greenDark") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: "Disponíveis",
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("5l3JfeH3rU+hEsvql4MgvA.Style"), function () {
return (((model.variables.availableValueCustomStyleClassIn === "")) ? ("a-textRead mt-2 c-gray5") : (model.variables.availableValueCustomStyleClassIn));
}, function () {
return model.variables.availableValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("5l3JfeH3rU+hEsvql4MgvA.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.balanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.balanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.balanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.balanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.balanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.balanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.balanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceRecordInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("dK2CsVNrc06CnpY9y9ekTw.Style"), function () {
return (((model.variables.spentTitleCustomStyleClassIn === "")) ? ("a-textRead -bullet -medium c-gray5") : (model.variables.spentTitleCustomStyleClassIn));
}, function () {
return model.variables.spentTitleCustomStyleClassIn;
}),
value: "Usados",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentTitleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("Im7SIcpYA0yzJHICB5UfFA.Style"), function () {
return (((model.variables.spentValueCustomStyleClassIn === "")) ? ("a-textRead mt-2 c-gray5") : (model.variables.spentValueCustomStyleClassIn));
}, function () {
return model.variables.spentValueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("Im7SIcpYA0yzJHICB5UfFA.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.balanceRecordIn.consumedAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.balanceRecordIn.consumedAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.balanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.balanceRecordIn.consumedAmountUnitFmtAttr))));
}, function () {
return model.variables.balanceRecordIn.consumedAmountFmtAttr;
}, function () {
return model.variables.balanceRecordIn.consumedAmountUnitFmtAttr;
}, function () {
return model.variables.balanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._spentValueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceRecordInDataFetchStatus)
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.spentValueCustomStyleClassIn), asPrimitiveValue(model.variables.spentTitleCustomStyleClassIn), asPrimitiveValue(model.variables.availableValueCustomStyleClassIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables.chartConfigVar), asPrimitiveValue(model.variables.dataPointChartVar), asPrimitiveValue(model.variables.shortLabelCustomStyleClassIn), asPrimitiveValue(model.variables.balanceRecordIn.consumedAmountUnitFmtAttr), asPrimitiveValue(model.variables.balanceRecordIn.consumedAmountFmtAttr), asPrimitiveValue(model.variables.balanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.balanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.balanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.balanceRecordIn.titleAttr), asPrimitiveValue(model.variables.iconCustomStyleClassIn), asPrimitiveValue(model.variables.iconArrowRightIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._spentValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._spentTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableValueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._shortLabelCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._balanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._iconCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._iconArrowRightInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._cellPhoneTariffInDataFetchStatus), asPrimitiveValue(model.variables._cellPhoneNumberInDataFetchStatus), asPrimitiveValue(model.variables.cellPhoneTariffIn), asPrimitiveValue(model.variables.cellPhoneNumberIn)]
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRightSide: false,
StyleClass: ("-paddingTopMinor -ellipsis " + model.variables.customStyleClassIn),
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
name: "MainCard4",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.internetNameClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-10 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "-ellipsis"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("idL5Ib6zVEC4Hgp+Tpwqgg.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("h3 c-gray8 -bold -inline -ellipsis") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: ((model.variables.cellPhoneNumberIn + " ") + model.variables.cellPhoneTariffIn),
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cellPhoneNumberInDataFetchStatus, model.variables._cellPhoneTariffInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-2 text-right -noPaddingRight",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: BALANCE_MBLOCKSModel.staticEntities.iCON_SIZE.small,
IconName: model.getCachedValue(idService.getId("SuU2R5iFokKORX_y5GMfhA.IconName"), function () {
return (((model.variables.iconArrowRightIn === OS.BuiltinFunctions.nullTextIdentifier())) ? (BALANCE_MBLOCKSModel.staticEntities.iCON_CLASS.iconArrowRight) : (model.variables.iconArrowRightIn));
}, function () {
return model.variables.iconArrowRightIn;
}),
_iconNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconArrowRightInDataFetchStatus),
StyleClass: model.getCachedValue(idService.getId("SuU2R5iFokKORX_y5GMfhA.StyleClass"), function () {
return (((model.variables.iconCustomStyleClassIn === "")) ? ("") : (model.variables.iconCustomStyleClassIn));
}, function () {
return model.variables.iconCustomStyleClassIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._iconCustomStyleClassInDataFetchStatus)
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
uuid: "43",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.internetBalanceClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "text-center mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("2wc1lYvj5E6CfaRk8nl3Bg.Style"), function () {
return (((model.variables.shortLabelCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8") : (model.variables.shortLabelCustomStyleClassIn));
}, function () {
return model.variables.shortLabelCustomStyleClassIn;
}),
value: model.variables.balanceRecordIn.titleAttr,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._shortLabelCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceRecordInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("sPcAqz16qkG59yG0HFRo7Q.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead c-greenDark -ellipsis") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: "Disponíveis",
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("bQzq5_bJy0yJyAnMdZ9uqw.Value"), function () {
return (BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.balanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.balanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((!(model.variables.balanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.balanceRecordIn.availableAmountUnitFmtAttr))));
}, function () {
return model.variables.balanceRecordIn.availableAmountFmtAttr;
}, function () {
return model.variables.balanceRecordIn.availableAmountUnitFmtAttr;
}, function () {
return model.variables.balanceRecordIn.showBalanceUnitAttr;
}),
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._balanceRecordInDataFetchStatus)
}))))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables.shortLabelCustomStyleClassIn), asPrimitiveValue(model.variables.balanceRecordIn.showBalanceUnitAttr), asPrimitiveValue(model.variables.balanceRecordIn.availableAmountUnitFmtAttr), asPrimitiveValue(model.variables.balanceRecordIn.availableAmountFmtAttr), asPrimitiveValue(model.variables.balanceRecordIn.titleAttr), asPrimitiveValue(model.variables.iconCustomStyleClassIn), asPrimitiveValue(model.variables.iconArrowRightIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._shortLabelCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._balanceRecordInDataFetchStatus), asPrimitiveValue(model.variables._iconCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._iconArrowRightInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._cellPhoneTariffInDataFetchStatus), asPrimitiveValue(model.variables._cellPhoneNumberInDataFetchStatus), asPrimitiveValue(model.variables.cellPhoneTariffIn), asPrimitiveValue(model.variables.cellPhoneNumberIn)]
}))];
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.MasterBalanceCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "ChartsMobile.model", "MobileUIWidgets.model", "BALANCE_MBP.controller", "Essentials_MOB.controller", "BALANCE_MBP.model", "BALANCE_MBLOCKS.languageResources", "ChartsMobile.model$DataPointRec", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$ChartsMobile", "MobileUIWidgets.model$SolidGaugeEasyFormatRec", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP", "Essentials_MOB.controller$RoundAwayFromZero", "BALANCE_MBLOCKS.referencesHealth$Essentials_MOB", "BALANCE_MBP.entities", "BALANCE_MBLOCKS.model$STR_BalanceOrchestrationStructRec", "BALANCE_MBLOCKS.model$Local_BALANCE_GRAPH_TYPERecordList", "BALANCE_MBP.model$Local_BALANCE_GRAPH_TYPERec"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, ChartsMobileModel, MobileUIWidgetsModel, BALANCE_MBPController, Essentials_MOBController, BALANCE_MBPModel, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype.getGraphTypeByID$AggrRefresh = function (maxRecords) {
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

var qploId = model.variables.balanceRecordIn.graphTypeIDAttr;

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
return model.variables.getGraphTypeByIDAggr;
}, function () {
controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getGraphTypeByID$AggrRefresh"];
// Client Actions
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
// SetChartInfo
// DataPointChart.Value = If
model.variables.dataPointChartVar.valueAttr = (((model.variables.balanceRecordIn.availableAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)) || model.variables.balanceRecordIn.totalAmountAttr.equals((OS.DataTypes.Decimal.defaultValue)))) ? ((OS.DataTypes.Decimal.defaultValue)) : (Essentials_MOBController.default.roundAwayFromZero$Action(model.variables.balanceRecordIn.availableAmountAttr.div(model.variables.balanceRecordIn.totalAmountAttr).times(OS.BuiltinFunctions.integerToDecimal(100)), 0, callContext.withoutIterationContext()).resultOut));
// ChartConfig.ChartHeight = 120
model.variables.chartConfigVar.chartHeightAttr = 120;
// ChartConfig.ChartWidth = 180
model.variables.chartConfigVar.chartWidthAttr = 180;
// ChartConfig.Format = "<div><span> " + FormatDecimal_MBP(BalanceRecord.AvailableAmountFmt, GetDecimalPlacesByUnit(BalanceRecord.AvailableAmountUnitFmt)) + If + " </span><span>de " + FormatDecimal_MBP(BalanceRecord.TotalAmountFmt, GetDecimalPlacesByUnit(BalanceRecord.TotalAmountUnitFmt)) + If + "</span><span></span></div>"
model.variables.chartConfigVar.formatAttr = (((((("<div><span> " + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.balanceRecordIn.availableAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.balanceRecordIn.availableAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.balanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.balanceRecordIn.availableAmountUnitFmtAttr)))) + " </span><span>de ") + BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.balanceRecordIn.totalAmountFmtAttr, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.balanceRecordIn.totalAmountUnitFmtAttr, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut) + ((!(model.variables.balanceRecordIn.showBalanceUnitAttr)) ? ("") : ((" " + model.variables.balanceRecordIn.totalAmountUnitFmtAttr)))) + "</span><span></span></div>");
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
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Refresh Query: GetGraphTypeByID
var result = controller.getGraphTypeByID$AggrRefresh(1);
model.flush();
return result;
});
};
Controller.prototype._internetNameClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InternetNameClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: InternetNameClickEvent
return controller.internetNameClickEvent$Action(callContext);
});
};
Controller.prototype._internetBalanceClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("InternetBalanceClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: InternetBalanceClickEvent
return controller.internetBalanceClickEvent$Action(callContext);
});
};
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
// GetGraphTypeByID.Empty?
if((model.variables.getGraphTypeByIDAggr.listOut.isEmpty)) {
// SetGraphTypes
// IsLimitedGraph = BalanceRecord.IsLimited
model.variables.isLimitedGraphVar = model.variables.balanceRecordIn.isLimitedAttr;
// IsUnlimitedGraph = BalanceRecord.IsUnlimited
model.variables.isUnlimitedGraphVar = model.variables.balanceRecordIn.isUnlimitedAttr;
} else {
// SetGraphTypes
// IsLimitedGraph = GetGraphTypeByID.List.Current.Local_BALANCE_GRAPH_TYPE.IsLimitedGraph
model.variables.isLimitedGraphVar = model.variables.getGraphTypeByIDAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_GRAPH_TYPEAttr.isLimitedGraphAttr;
// IsUnlimitedGraph = GetGraphTypeByID.List.Current.Local_BALANCE_GRAPH_TYPE.IsUnlimitedGraph
model.variables.isUnlimitedGraphVar = model.variables.getGraphTypeByIDAggr.listOut.getCurrent(callContext.iterationContext).local_BALANCE_GRAPH_TYPEAttr.isUnlimitedGraphAttr;
}

};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.internetNameClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._internetNameClick$Action, callContext);

};
Controller.prototype.internetBalanceClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._internetBalanceClick$Action, callContext);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.internetBalanceClickEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.internetNameClickEvent$Action = function () {
return Promise.resolve();
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

