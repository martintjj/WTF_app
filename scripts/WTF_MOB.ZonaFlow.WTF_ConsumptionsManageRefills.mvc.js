define("WTF_MOB.ZonaFlow.WTF_ConsumptionsManageRefills.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "Essentials_MOB.controller", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$STR_TextValueList", "WTF_MBP.controller$setActivityLog_ExtraBalanceLimit", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$Error", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$STR_REFILLSList", "WTF_MBP.model$STR_EXTRA_INTERNETRec", "WTF_MBP.controller$GetProductMaximumAutoRefill", "WTF_MOB.controller$Analytics_TrackException", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.model$STR_TextValueRec", "WTF_MBP.controller$UpdateProductMaximumAutoRefill", "WTF_MBP.controller$setActivityLog_ChangeExtraBalanceLimit", "WTF_MBP.entities", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, Essentials_MOBController) {
var OS = OutSystems.Internal;
var GetLocalServiceAggrRec = (function (_super) {
__extends(GetLocalServiceAggrRec, _super);
function GetLocalServiceAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalServiceAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList;
GetLocalServiceAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalServiceAggrRec.init();
return GetLocalServiceAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("PackageRefillList", "packageRefillListVar", "PackageRefillList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.STR_REFILLSList());
}, WTF_MOBModel.STR_REFILLSList), 
this.attr("DropDownList", "dropDownListVar", "DropDownList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.STR_TextValueList());
}, WTF_MOBModel.STR_TextValueList), 
this.attr("DropDownLabel", "dropDownLabelVar", "DropDownLabel", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.STR_TextValueRec());
}, WTF_MOBModel.STR_TextValueRec), 
this.attr("SelectedItem", "selectedItemVar", "SelectedItem", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RefillCost", "refillCostVar", "RefillCost", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RefillVolume", "refillVolumeVar", "RefillVolume", true, OS.Types.Text, function () {
return "";
}), 
this.attr("MaxRefill", "maxRefillVar", "MaxRefill", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsPackageRefillListEmpty", "isPackageRefillListEmptyVar", "IsPackageRefillListEmpty", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("CurrentValue", "currentValueVar", "CurrentValue", true, OS.Types.Text, function () {
return "";
}), 
this.attr("MaximumAllowed", "maximumAllowedVar", "MaximumAllowed", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("ValueRefill", "valueRefillVar", "ValueRefill", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsEnabled", "isEnabledVar", "IsEnabled", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CurrentRefill", "currentRefillVar", "CurrentRefill", true, OS.Types.Text, function () {
return "";
}), 
this.attr("CurrRefillCard", "currRefillCardVar", "CurrRefillCard", true, OS.Types.Text, function () {
return "";
}), 
this.attr("EnablePreviousScreenLink", "enablePreviousScreenLinkIn", "EnablePreviousScreenLink", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_enablePreviousScreenLinkInDataFetchStatus", "_enablePreviousScreenLinkInDataFetchStatus", "_enablePreviousScreenLinkInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetLocalService", "getLocalServiceAggr", "getLocalServiceAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalServiceAggrRec());
}, GetLocalServiceAggrRec)
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
return {
Dropdown1: OS.Model.ValidationWidgetRecord
};
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("EnablePreviousScreenLink" in inputs) {
this.variables.enablePreviousScreenLinkIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.EnablePreviousScreenLink, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.WTF_ConsumptionsManageRefills.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "Essentials_MOB.controller", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_ConsumptionsManageRefills.mvc$model", "WTF_MOB.ZonaFlow.WTF_ConsumptionsManageRefills.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonTitle.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonCard.mvc$view", "MobileUIWidgets.SkeletonComponents.SkeletonDesc.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$STR_TextValueList", "WTF_MBP.controller$setActivityLog_ExtraBalanceLimit", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$Error", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$STR_REFILLSList", "WTF_MBP.model$STR_EXTRA_INTERNETRec", "WTF_MBP.controller$GetProductMaximumAutoRefill", "WTF_MOB.controller$Analytics_TrackException", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.model$STR_TextValueRec", "WTF_MBP.controller$UpdateProductMaximumAutoRefill", "WTF_MBP.controller$setActivityLog_ChangeExtraBalanceLimit", "WTF_MBP.entities", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, Essentials_MOBController, React, OSView, WTF_MOB_ZonaFlow_WTF_ConsumptionsManageRefills_mvc_model, WTF_MOB_ZonaFlow_WTF_ConsumptionsManageRefills_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_BottomBar_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_ConsumptionsManageRefills";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, WTF_MOB_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_ConsumptionsManageRefills_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_ConsumptionsManageRefills_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Controlo Consumos";
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
ScreenName: "ManageInternet",
PageType: "Consulta",
PageSection: "Controlo",
ContentClass: "b-transparent",
PageTitle: "Controlo Consumos"
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
header: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_HeaderLvl2_mvc_view, {
inputs: {
AllowPrevious: model.variables.enablePreviousScreenLinkIn,
PageControllsBack: model.variables.enablePreviousScreenLinkIn,
Title: "Gerir Extra Internet"
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16 mt-16 mb-24",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isLoadingVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "relative-position",
visible: model.variables.isLoadingVar,
_idProps: {
service: idService,
name: "Skeleton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
name: "Title"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-5 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonCard_mvc_view, {
inputs: {
StyleClass: "-paddingBottom24 text-center mb-8"
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
inputs: {
StyleClass: "w-25 mb-8"
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
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "w-40 mb-40 -titleHeight"
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
uuid: "9",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "w-75 mb-16 -titleHeight"
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
uuid: "10",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
inputs: {
StyleClass: "-big"
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
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "InvoicesSkeleton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-skeletonCard mb-2",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row mb-16",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-4 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
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
uuid: "16",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-8 -noPaddingRight text-right",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingLeft",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-10 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
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
uuid: "22",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-7 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
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
uuid: "25",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 -noPaddingRight text-right",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-4 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonTitle_mvc_view, {
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
uuid: "29",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "row",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-5 -noPadding",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_SkeletonComponents_SkeletonDesc_mvc_view, {
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
uuid: "32",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))))))))];
}, function () {
return [$if(model.variables.isPackageRefillListEmptyVar, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: !(model.variables.isLoadingVar),
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mb-12",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textIntro",
value: (("Podes estabelecer um limite de extra de internet entre 0 e " + model.variables.maximumAllowedVar) + " por mês."),
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead -bold c-yellow",
value: (((("Cada " + model.variables.refillVolumeVar) + " MB tem um custo associado de €") + model.variables.refillCostVar) + "."),
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(false, false, this, function () {
return [];
}, function () {
return [];
}))), React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "-paddingEqual mb-8 b-white",
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
uuid: "38",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mb-16"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 c-gray8 -bold",
value: "Definir um limite de internet extra mensal",
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-white",
value: "Escolhe o limite que pretendes",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Dropdown, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
list: model.variables.dropDownListVar,
mandatory: true,
onChange: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.dropdown1OnChange$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "dropdown a-dropdown",
values: function (elem) {
return elem.textAttr;
},
variable: model.createVariable(OS.Types.Text, model.variables.selectedItemVar, function (value) {
model.variables.selectedItemVar = value;
}),
_idProps: {
service: idService,
name: "Dropdown1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Expression, {
value: model.variables.dropDownListVar.getCurrent(callContext.iterationContext).textAttr,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small mt-16",
value: ((("Cada " + model.variables.refillVolumeVar) + " MB tem um custo associado de €") + model.variables.refillCostVar),
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "45",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.variables.isEnabledVar,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick$Action(model.variables.valueRefillVar, controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -fullWidth mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Definir limite", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.isEnabledVar)]
})];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isEnabledVar), asPrimitiveValue(model.variables.refillCostVar), asPrimitiveValue(model.variables.refillVolumeVar), asPrimitiveValue(model.variables.dropDownListVar), asPrimitiveValue(model.variables.selectedItemVar)]
}), $if(((model.variables.currRefillCardVar === "0") || (model.variables.currRefillCardVar === "")), false, this, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: "-paddingEqual b-white",
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
uuid: "48",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mb-16"
},
tag: "h2",
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h2 -masterColor",
value: "Consumo de extra internet",
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-gray8",
value: "Ainda não usaste nenhum extra",
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: []
})];
}, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRightSide: false,
StyleClass: "-paddingEqual b-white"
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
uuid: "53",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mb-16"
},
tag: "h2",
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h2 -masterColor",
value: (((("Já usaste " + model.variables.currRefillCardVar) + " extra de ") + model.variables.refillVolumeVar) + "MB"),
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-gray8 -bold -absolute",
value: "Atenção: ",
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead c-gray8 -indent",
value: "Os extra internet utilizados no corrente mês irão ser cobrados pelo valor correspondente.",
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.refillVolumeVar), asPrimitiveValue(model.variables.currRefillCardVar)]
})];
}))];
})];
}))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
DemoAppWithoutLogin: false,
IsOffline: false,
Page: "ManageInternet"
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
uuid: "59",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.currRefillCardVar), asPrimitiveValue(model.variables.isEnabledVar), asPrimitiveValue(model.variables.dropDownListVar), asPrimitiveValue(model.variables.selectedItemVar), asPrimitiveValue(model.variables.refillCostVar), asPrimitiveValue(model.variables.refillVolumeVar), asPrimitiveValue(model.variables.maximumAllowedVar), asPrimitiveValue(model.variables.isPackageRefillListEmptyVar), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.enablePreviousScreenLinkIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_ConsumptionsManageRefills.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "Essentials_MOB.controller", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$STR_TextValueList", "WTF_MBP.controller$setActivityLog_ExtraBalanceLimit", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$Error", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.model$STR_REFILLSList", "WTF_MBP.model$STR_EXTRA_INTERNETRec", "WTF_MBP.controller$GetProductMaximumAutoRefill", "WTF_MOB.controller$Analytics_TrackException", "Essentials_MOB.controller$CheckNetworkStatus", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MOB.model$STR_TextValueRec", "WTF_MBP.controller$UpdateProductMaximumAutoRefill", "WTF_MBP.controller$setActivityLog_ChangeExtraBalanceLimit", "WTF_MBP.entities", "WTF_MOB.model$Local_USER_WTFLocal_SERVICERecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, Essentials_MOBController, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
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
Controller.prototype.getLocalService$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_SERVICE\".\"Id\" o0, \"ENLocal_SERVICE\".\"ServiceId\" o1, \"ENLocal_SERVICE\".\"AssociationID\" o2, \"ENLocal_SERVICE\".\"Name\" o3, \"ENLocal_SERVICE\".\"ServiceAccount\" o4, \"ENLocal_SERVICE\".\"UiLabel\" o5, \"ENLocal_SERVICE\".\"Plan\" o6, \"ENLocal_SERVICE\".\"TMCodeID\" o7, \"ENLocal_SERVICE\".\"TMCodeDesc\" o8, \"ENLocal_USER_WTF\".\"Id\" o9, \"ENLocal_USER_WTF\".\"Msisdn\" o10, \"ENLocal_USER_WTF\".\"CodeMember\" o11, \"ENLocal_USER_WTF\".\"Tmcode_label\" o12, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o13";
} else {
selectSql += "\"ENLocal_SERVICE\".\"Id\" o0, \"ENLocal_SERVICE\".\"ServiceId\" o1, \"ENLocal_SERVICE\".\"AssociationID\" o2, \"ENLocal_SERVICE\".\"Name\" o3, \"ENLocal_SERVICE\".\"ServiceAccount\" o4, \"ENLocal_SERVICE\".\"UiLabel\" o5, \"ENLocal_SERVICE\".\"Plan\" o6, \"ENLocal_SERVICE\".\"TMCodeID\" o7, \"ENLocal_SERVICE\".\"TMCodeDesc\" o8, \"ENLocal_USER_WTF\".\"Id\" o9, \"ENLocal_USER_WTF\".\"Msisdn\" o10, \"ENLocal_USER_WTF\".\"CodeMember\" o11, \"ENLocal_USER_WTF\".\"Tmcode_label\" o12, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o13";
}
fromAndWhereSql += " FROM (\"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\" Inner JOIN \"MAIN\".\"OSUSR_p9g_Local_USER_WTF\" \"ENLocal_USER_WTF\" ON (\"ENLocal_SERVICE\".\"ServiceId\" = CAST(\"ENLocal_USER_WTF\".\"Msisdn\" AS TEXT))) ";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_WTFLocal_SERVICERecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_SERVICEAttr",
"local_USER_WTFAttr",
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
return model.variables.getLocalServiceAggr;
}, function () {
return controller._getServiceOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalService$AggrRefresh"];
// Client Actions
Controller.prototype._termoseCondicoesOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TermoseCondicoesOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Gerir Refills", "Termos e condições", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/TermsAndConditionsApp
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/TermsAndConditionsApp", {
FromAboutApp: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
};
Controller.prototype._dropdown1OnChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Dropdown1OnChange");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.selectedItemVar === model.variables.currentRefillVar))) {
// IsEnabled = False
model.variables.isEnabledVar = false;
} else {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Gerir Extra Internet", "Escolha_limite_extra", 0, "", callContext).then(function () {
// Foreach DropDownList
callContext.iterationContext.registerIterationStart(model.variables.dropDownListVar);
}).then(function () {
try {var dropDownListIterator = callContext.iterationContext.getIterator(model.variables.dropDownListVar);
var dropDownListIndex = 0;
while (((dropDownListIndex < model.variables.dropDownListVar.length))) {
dropDownListIterator.currentRowNumber = dropDownListIndex;
if(((model.variables.selectedItemVar === model.variables.dropDownListVar.getItem(dropDownListIndex.valueOf()).textAttr))) {
// ValueRefill = DropDownList.Current.Value
model.variables.valueRefillVar = model.variables.dropDownListVar.getItem(dropDownListIndex.valueOf()).valueAttr;
}

dropDownListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.dropDownListVar);
}

// IsEnabled = True
model.variables.isEnabledVar = true;
});
}

});
});
};
Controller.prototype._getServiceOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetServiceOnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getProductMaximumAutoRefillVar = new OS.DataTypes.VariableHolder();
var checkNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: GetProductMaximumAutoRefill
model.flush();
return WTF_MBPController.default.getProductMaximumAutoRefill$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, callContext).then(function (value) {
getProductMaximumAutoRefillVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getProductMaximumAutoRefillVar.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((!(getProductMaximumAutoRefillVar.value.refillPackageListOut.isEmpty))) {
// PackageRefillList
// PackageRefillList = GetProductMaximumAutoRefill.RefillPackageList
model.variables.packageRefillListVar = getProductMaximumAutoRefillVar.value.refillPackageListOut;
// RefillCost = GetProductMaximumAutoRefill.OutputRefill.RefillCost
model.variables.refillCostVar = getProductMaximumAutoRefillVar.value.outputRefillOut.refillCostAttr;
// RefillVolume = GetProductMaximumAutoRefill.OutputRefill.RefillVolume
model.variables.refillVolumeVar = getProductMaximumAutoRefillVar.value.outputRefillOut.refillVolumeAttr;
// MaxRefill = GetProductMaximumAutoRefill.OutputRefill.MaxRefill
model.variables.maxRefillVar = getProductMaximumAutoRefillVar.value.outputRefillOut.maxRefillAttr;
// CurrentValue = GetProductMaximumAutoRefill.OutputRefill.CurrentValueRefill
model.variables.currentValueVar = getProductMaximumAutoRefillVar.value.outputRefillOut.currentValueRefillAttr;
// MaximumAllowed = GetProductMaximumAutoRefill.OutputRefill.MaximumAllowed
model.variables.maximumAllowedVar = getProductMaximumAutoRefillVar.value.outputRefillOut.maximumAllowedAttr;
// CurrRefillCard = GetProductMaximumAutoRefill.OutputRefill.CurrRefill
model.variables.currRefillCardVar = getProductMaximumAutoRefillVar.value.outputRefillOut.currRefillAttr;
// Execute Action: setActivityLog_ExtraBalanceLimit
model.flush();
return WTF_MBPController.default.setActivityLog_ExtraBalanceLimit$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, false, callContext).then(function () {
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.dropDownListVar, callContext);
// Foreach PackageRefillList
callContext.iterationContext.registerIterationStart(model.variables.packageRefillListVar);
}).then(function () {
try {var packageRefillListIterator = callContext.iterationContext.getIterator(model.variables.packageRefillListVar);
var packageRefillListIndex = 0;
while (((packageRefillListIndex < model.variables.packageRefillListVar.length))) {
packageRefillListIterator.currentRowNumber = packageRefillListIndex;
// Value = 0?
if(((model.variables.packageRefillListVar.getItem(packageRefillListIndex.valueOf()).valueAttr === "0"))) {
// Value = 0
// DropDownLabel.Text = "Não quero usar extra de internet"
model.variables.dropDownLabelVar.textAttr = "Não quero usar extra de internet";
// DropDownLabel.Value = PackageRefillList.Current.Value
model.variables.dropDownLabelVar.valueAttr = model.variables.packageRefillListVar.getItem(packageRefillListIndex.valueOf()).valueAttr;
} else {
// DropDownLabel.Text = PackageRefillList.Current.Value + " Extra | " + PackageRefillList.Current.Volume + " MB"
model.variables.dropDownLabelVar.textAttr = (((model.variables.packageRefillListVar.getItem(packageRefillListIndex.valueOf()).valueAttr + " Extra | ") + (model.variables.packageRefillListVar.getItem(packageRefillListIndex.valueOf()).volumeAttr).toString()) + " MB");
// DropDownLabel.Value = PackageRefillList.Current.Value
model.variables.dropDownLabelVar.valueAttr = model.variables.packageRefillListVar.getItem(packageRefillListIndex.valueOf()).valueAttr;
}

if(((model.variables.currentValueVar === model.variables.packageRefillListVar.getItem(packageRefillListIndex.valueOf()).valueAttr))) {
// CurrentRefill = DropDownLabel.Text
model.variables.currentRefillVar = model.variables.dropDownLabelVar.textAttr;
}

// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.dropDownListVar, model.variables.dropDownLabelVar, callContext);
packageRefillListIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(model.variables.packageRefillListVar);
}

// IsLoading = False
model.variables.isLoadingVar = false;
// SelectedItem = CurrentRefill
model.variables.selectedItemVar = model.variables.currentRefillVar;
// IsPackageRefillListEmpty = False
model.variables.isPackageRefillListEmptyVar = false;
return OS.Flow.returnAsync();

});
}

});
}

});
}).then(function () {
// Execute Action: setActivityLog_ExtraBalanceLimit2
model.flush();
return WTF_MBPController.default.setActivityLog_ExtraBalanceLimit$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, true, callContext).then(function () {
// IsPackageRefillListEmpty = True
model.variables.isPackageRefillListEmptyVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/GenericError
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/GenericError", {
Text: "O teu tarifário não permite definir um limite extra de internet",
Title: "Funcionalidade indisponível",
ButtonText: "Cancelar"
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}).catch(function (ex) {
OS.Logger.trace("WTF_ConsumptionsManageRefills.GetServiceOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GoogleAnalyticsWeb_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: setActivityLog_ExtraBalanceLimit4
model.flush();
return WTF_MBPController.default.setActivityLog_ExtraBalanceLimit$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, true, callContext);
}).then(function () {
// Execute Action: CheckNetworkStatus
model.flush();
return Essentials_MOBController.default.checkNetworkStatus$Action(callContext).then(function (value) {
checkNetworkStatusVar.value = value;
});
}).then(function () {
if((checkNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: Error22
MobileUIWidgetsController.default.error$Action("Ocorreu um erro. Por favor tente novamente.", callContext);
return OS.Flow.returnAsync();

} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}

// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GoogleAnalyticsWeb_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: setActivityLog_ExtraBalanceLimit3
model.flush();
return WTF_MBPController.default.setActivityLog_ExtraBalanceLimit$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, true, callContext);
}).then(function () {
// Execute Action: Error2
MobileUIWidgetsController.default.error$Action("Ocorreu um erro. Por favor tente novamente.", callContext);
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._onClick$Action = function (valueIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnClick");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_ConsumptionsManageRefills.OnClick$vars"))());
vars.value.valueInLocal = valueIn;
var updateProductMaximumAutoRefillVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Gerir Extra Internet", "Definir_limite_extra", 0, "", callContext).then(function () {
// Execute Action: UpdateProductMaximumAutoRefill
model.flush();
return WTF_MBPController.default.updateProductMaximumAutoRefill$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.associationIDAttr, model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, vars.value.valueInLocal, callContext).then(function (value) {
updateProductMaximumAutoRefillVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((updateProductMaximumAutoRefillVar.value.successOut)) {
// Execute Action: setActivityLog_ChangeExtraBalanceLimit
model.flush();
return WTF_MBPController.default.setActivityLog_ChangeExtraBalanceLimit$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, false, callContext).then(function () {
// IsEnabled = False
model.variables.isEnabledVar = false;
OS.FeedbackMessageService.showFeedbackMessage("O limite de extra internet foi atualizado com sucesso", /*Success*/ 1);
});
} else {
OS.FeedbackMessageService.showFeedbackMessage("Não foi possível definir o limite extra de internet. Por favor tenta mais tarde.", /*Error*/ 3);
// Execute Action: setActivityLog_ChangeExtraBalanceLimit2
model.flush();
return WTF_MBPController.default.setActivityLog_ChangeExtraBalanceLimit$Action(model.variables.getLocalServiceAggr.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr, true, callContext);
}

});
});
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_ConsumptionsManageRefills.OnClick$vars", [{
name: "Value",
attrName: "valueInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.termoseCondicoesOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._termoseCondicoesOnClick$Action, callContext);

};
Controller.prototype.dropdown1OnChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._dropdown1OnChange$Action, callContext);

};
Controller.prototype.getServiceOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getServiceOnAfterFetch$Action, callContext);

};
Controller.prototype.onClick$Action = function (valueIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick$Action, callContext, valueIn);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_ZonaFlowController.default.handleError(ex, this.callContext());
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return WTF_MOBController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, WTF_MOBLanguageResources);
});

