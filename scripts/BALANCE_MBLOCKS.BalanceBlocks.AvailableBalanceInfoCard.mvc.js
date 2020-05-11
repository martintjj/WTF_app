define("BALANCE_MBLOCKS.BalanceBlocks.AvailableBalanceInfoCard.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel) {
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
this.attr("AvailableValue", "availableValueIn", "AvailableValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", "_availableValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Unit", "unitIn", "Unit", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_unitInDataFetchStatus", "_unitInDataFetchStatus", "_unitInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Description", "descriptionIn", "Description", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowUnit", "showUnitIn", "ShowUnit", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showUnitInDataFetchStatus", "_showUnitInDataFetchStatus", "_showUnitInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("AvailableTitleCustomStyleClass", "availableTitleCustomStyleClassIn", "AvailableTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_availableTitleCustomStyleClassInDataFetchStatus", "_availableTitleCustomStyleClassInDataFetchStatus", "_availableTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets);
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

if("AvailableValue" in inputs) {
this.variables.availableValueIn = inputs.AvailableValue;
if("_availableValueInDataFetchStatus" in inputs) {
this.variables._availableValueInDataFetchStatus = inputs._availableValueInDataFetchStatus;
}

}

if("Unit" in inputs) {
this.variables.unitIn = inputs.Unit;
if("_unitInDataFetchStatus" in inputs) {
this.variables._unitInDataFetchStatus = inputs._unitInDataFetchStatus;
}

}

if("Description" in inputs) {
this.variables.descriptionIn = inputs.Description;
if("_descriptionInDataFetchStatus" in inputs) {
this.variables._descriptionInDataFetchStatus = inputs._descriptionInDataFetchStatus;
}

}

if("ShowUnit" in inputs) {
this.variables.showUnitIn = inputs.ShowUnit;
if("_showUnitInDataFetchStatus" in inputs) {
this.variables._showUnitInDataFetchStatus = inputs._showUnitInDataFetchStatus;
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

if("AvailableTitleCustomStyleClass" in inputs) {
this.variables.availableTitleCustomStyleClassIn = inputs.AvailableTitleCustomStyleClass;
if("_availableTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._availableTitleCustomStyleClassInDataFetchStatus = inputs._availableTitleCustomStyleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.BalanceBlocks.AvailableBalanceInfoCard.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.BalanceBlocks.AvailableBalanceInfoCard.mvc$model", "BALANCE_MBLOCKS.BalanceBlocks.AvailableBalanceInfoCard.mvc$controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvc_model, BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvc_controller, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view) {
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
        View.displayName = "BalanceBlocks.AvailableBalanceInfoCard";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_BalanceBlocks_AvailableBalanceInfoCard_mvc_controller;
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
HasLeftSide: false,
StyleClass: ("-paddingEqual " + model.variables.customStyleClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customStyleClassInDataFetchStatus)
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
style: "row mb-8",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("XHXjgpajo06yG5TNf4hOoA.Style"), function () {
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
style: model.getCachedValue(idService.getId("f+5uis5yQU+6UY+dBWzlAg.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("a-textRead -bold c-gray8") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
value: model.variables.titleIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleInDataFetchStatus)
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
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("U_UY36ptP0qCzqs8MJZExQ.Style"), function () {
return (((model.variables.availableTitleCustomStyleClassIn === "")) ? ("a-textRead -small -regular c-greenDark") : (model.variables.availableTitleCustomStyleClassIn));
}, function () {
return model.variables.availableTitleCustomStyleClassIn;
}),
value: "Disponíveis",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableTitleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "a-textBigLight",
value: model.getCachedValue(idService.getId("o5Sj0nUSw0WXsxuC4ttMow.Value"), function () {
return (((BALANCE_MBPController.default.formatDecimal_MBP$Action(model.variables.availableValueIn, BALANCE_MBPController.default.getDecimalPlacesByUnit$Action(model.variables.unitIn, callContext.withoutIterationContext()).decimalDigitsOut, callContext.withoutIterationContext()).resultOut + ((model.variables.showUnitIn) ? ((" " + model.variables.unitIn)) : (""))) + " ") + model.variables.descriptionIn);
}, function () {
return model.variables.availableValueIn;
}, function () {
return model.variables.unitIn;
}, function () {
return model.variables.showUnitIn;
}, function () {
return model.variables.descriptionIn;
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._availableValueInDataFetchStatus, model.variables._unitInDataFetchStatus, model.variables._showUnitInDataFetchStatus, model.variables._descriptionInDataFetchStatus)
})];
}),
rightPLaceholder: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.descriptionIn), asPrimitiveValue(model.variables.showUnitIn), asPrimitiveValue(model.variables.unitIn), asPrimitiveValue(model.variables.availableValueIn), asPrimitiveValue(model.variables.availableTitleCustomStyleClassIn), asPrimitiveValue(model.variables.titleCustomStyleClassIn), asPrimitiveValue(model.variables.titleIn), asPrimitiveValue(model.variables._descriptionInDataFetchStatus), asPrimitiveValue(model.variables._showUnitInDataFetchStatus), asPrimitiveValue(model.variables._unitInDataFetchStatus), asPrimitiveValue(model.variables._availableValueInDataFetchStatus), asPrimitiveValue(model.variables._availableTitleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._titleInDataFetchStatus), asPrimitiveValue(model.variables._showIconInDataFetchStatus), asPrimitiveValue(model.variables.showIconIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.BalanceBlocks.AvailableBalanceInfoCard.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBP.controller$GetDecimalPlacesByUnit", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBP.controller$FormatDecimal_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
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

