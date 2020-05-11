define("ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.mvc$model", ["OutSystems", "ACCOUNTINFO_MBLOCKS.model", "MobileUIWidgets.controller", "CopyToClipboard_Plugin.controller", "ACCOUNTINFO_MBLOCKS.GenericBlocks.IntroText.mvc$model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.controller$Info", "ACCOUNTINFO_MBLOCKS.referencesHealth", "ACCOUNTINFO_MBLOCKS.referencesHealth$MobileUIWidgets", "CopyToClipboard_Plugin.controller$CopyToClipboard", "ACCOUNTINFO_MBLOCKS.referencesHealth$CopyToClipboard_Plugin"], function (OutSystems, ACCOUNTINFO_MBLOCKSModel, MobileUIWidgetsController, CopyToClipboard_PluginController, ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvcModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IntroText", "introTextIn", "IntroText", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_introTextInDataFetchStatus", "_introTextInDataFetchStatus", "_introTextInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PIN", "pINIn", "PIN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pINInDataFetchStatus", "_pINInDataFetchStatus", "_pINInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PUK", "pUKIn", "PUK", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pUKInDataFetchStatus", "_pUKInDataFetchStatus", "_pUKInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("SIMNumber", "sIMNumberIn", "SIMNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_sIMNumberInDataFetchStatus", "_sIMNumberInDataFetchStatus", "_sIMNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CopyToClipboardTextPIN", "copyToClipboardTextPINIn", "CopyToClipboardTextPIN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_copyToClipboardTextPINInDataFetchStatus", "_copyToClipboardTextPINInDataFetchStatus", "_copyToClipboardTextPINInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CopyToClipboardTextPUK", "copyToClipboardTextPUKIn", "CopyToClipboardTextPUK", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_copyToClipboardTextPUKInDataFetchStatus", "_copyToClipboardTextPUKInDataFetchStatus", "_copyToClipboardTextPUKInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CopyToClipboardTextSIM", "copyToClipboardTextSIMIn", "CopyToClipboardTextSIM", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_copyToClipboardTextSIMInDataFetchStatus", "_copyToClipboardTextSIMInDataFetchStatus", "_copyToClipboardTextSIMInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CardTitleCustomStyleClass", "cardTitleCustomStyleClassIn", "CardTitleCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_cardTitleCustomStyleClassInDataFetchStatus", "_cardTitleCustomStyleClassInDataFetchStatus", "_cardTitleCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("ValueCustomStyleClass", "valueCustomStyleClassIn", "ValueCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_valueCustomStyleClassInDataFetchStatus", "_valueCustomStyleClassInDataFetchStatus", "_valueCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ArrowCustomStyleClass", "arrowCustomStyleClassIn", "ArrowCustomStyleClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_arrowCustomStyleClassInDataFetchStatus", "_arrowCustomStyleClassInDataFetchStatus", "_arrowCustomStyleClassInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IntroText" in inputs) {
this.variables.introTextIn = inputs.IntroText;
if("_introTextInDataFetchStatus" in inputs) {
this.variables._introTextInDataFetchStatus = inputs._introTextInDataFetchStatus;
}

}

if("PIN" in inputs) {
this.variables.pINIn = inputs.PIN;
if("_pINInDataFetchStatus" in inputs) {
this.variables._pINInDataFetchStatus = inputs._pINInDataFetchStatus;
}

}

if("PUK" in inputs) {
this.variables.pUKIn = inputs.PUK;
if("_pUKInDataFetchStatus" in inputs) {
this.variables._pUKInDataFetchStatus = inputs._pUKInDataFetchStatus;
}

}

if("SIMNumber" in inputs) {
this.variables.sIMNumberIn = inputs.SIMNumber;
if("_sIMNumberInDataFetchStatus" in inputs) {
this.variables._sIMNumberInDataFetchStatus = inputs._sIMNumberInDataFetchStatus;
}

}

if("CopyToClipboardTextPIN" in inputs) {
this.variables.copyToClipboardTextPINIn = inputs.CopyToClipboardTextPIN;
if("_copyToClipboardTextPINInDataFetchStatus" in inputs) {
this.variables._copyToClipboardTextPINInDataFetchStatus = inputs._copyToClipboardTextPINInDataFetchStatus;
}

}

if("CopyToClipboardTextPUK" in inputs) {
this.variables.copyToClipboardTextPUKIn = inputs.CopyToClipboardTextPUK;
if("_copyToClipboardTextPUKInDataFetchStatus" in inputs) {
this.variables._copyToClipboardTextPUKInDataFetchStatus = inputs._copyToClipboardTextPUKInDataFetchStatus;
}

}

if("CopyToClipboardTextSIM" in inputs) {
this.variables.copyToClipboardTextSIMIn = inputs.CopyToClipboardTextSIM;
if("_copyToClipboardTextSIMInDataFetchStatus" in inputs) {
this.variables._copyToClipboardTextSIMInDataFetchStatus = inputs._copyToClipboardTextSIMInDataFetchStatus;
}

}

if("CardTitleCustomStyleClass" in inputs) {
this.variables.cardTitleCustomStyleClassIn = inputs.CardTitleCustomStyleClass;
if("_cardTitleCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._cardTitleCustomStyleClassInDataFetchStatus = inputs._cardTitleCustomStyleClassInDataFetchStatus;
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

if("ValueCustomStyleClass" in inputs) {
this.variables.valueCustomStyleClassIn = inputs.ValueCustomStyleClass;
if("_valueCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._valueCustomStyleClassInDataFetchStatus = inputs._valueCustomStyleClassInDataFetchStatus;
}

}

if("ArrowCustomStyleClass" in inputs) {
this.variables.arrowCustomStyleClassIn = inputs.ArrowCustomStyleClass;
if("_arrowCustomStyleClassInDataFetchStatus" in inputs) {
this.variables._arrowCustomStyleClassInDataFetchStatus = inputs._arrowCustomStyleClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.mvc$view", ["OutSystems", "ACCOUNTINFO_MBLOCKS.model", "ACCOUNTINFO_MBLOCKS.controller", "MobileUIWidgets.controller", "CopyToClipboard_Plugin.controller", "react", "OutSystemsReactView", "ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.mvc$model", "ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.mvc$controller", "ACCOUNTINFO_MBLOCKS.GenericBlocks.IntroText.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.controller$Info", "ACCOUNTINFO_MBLOCKS.referencesHealth", "ACCOUNTINFO_MBLOCKS.referencesHealth$MobileUIWidgets", "CopyToClipboard_Plugin.controller$CopyToClipboard", "ACCOUNTINFO_MBLOCKS.referencesHealth$CopyToClipboard_Plugin"], function (OutSystems, ACCOUNTINFO_MBLOCKSModel, ACCOUNTINFO_MBLOCKSController, MobileUIWidgetsController, CopyToClipboard_PluginController, React, OSView, ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvc_model, ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvc_controller, ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view) {
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
        View.displayName = "PinPukBlocks.PinPukBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(ACCOUNTINFO_MBLOCKS_GenericBlocks_IntroText_mvc_view, {
inputs: {
StyleClass: model.variables.cardTitleCustomStyleClassIn,
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cardTitleCustomStyleClassInDataFetchStatus),
Text: model.variables.introTextIn,
_textInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._introTextInDataFetchStatus)
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
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16 mb-8",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasRipple: false,
HasLeftSide: false,
RightStyleClass: "-vCenter text-right",
StyleClass: ("-paddingEqual " + model.variables.customClassIn),
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
uuid: "2",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Text, {
style: model.getCachedValue(idService.getId("mW9o01HJiUShlcjAyds_pw.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("text -light -big c-gray5") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
text: ["PIN original"],
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("txtPin.Style"), function () {
return (((model.variables.valueCustomStyleClassIn === "")) ? ("text d-block c-gray7 -large") : (model.variables.valueCustomStyleClassIn));
}, function () {
return model.variables.valueCustomStyleClassIn;
}),
value: model.variables.pINIn,
_idProps: {
service: idService,
name: "txtPin"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pINInDataFetchStatus)
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClickCopyToClipboard$Action("pin", model.variables.pINIn, model.variables.copyToClipboardTextPINIn, controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
name: "lnkCopyPin"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
HasRipple: true,
IconName: ACCOUNTINFO_MBLOCKSModel.staticEntities.iCON_CLASS.iconCopiar,
IconSize: model.getCachedValue(idService.getId("qMzMo4SLd0Ou1_LqRoWO6g.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
}),
StyleClass: model.getCachedValue(idService.getId("qMzMo4SLd0Ou1_LqRoWO6g.StyleClass"), function () {
return (((model.variables.arrowCustomStyleClassIn === "")) ? ("c-gray8") : (model.variables.arrowCustomStyleClassIn));
}, function () {
return model.variables.arrowCustomStyleClassIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._arrowCustomStyleClassInDataFetchStatus)
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.arrowCustomStyleClassIn), asPrimitiveValue(model.variables.valueCustomStyleClassIn), asPrimitiveValue(model.variables.pINIn), asPrimitiveValue(model.variables._arrowCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._valueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._pINInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables.titleCustomStyleClassIn)]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-2",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
StyleClass: ("-paddingEqual " + model.variables.customClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus),
HasLeftSide: false,
RightStyleClass: "-vCenter text-right",
HasRipple: false
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Text, {
style: model.getCachedValue(idService.getId("LPaj3zf18kGMLQZ_rlBvAg.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("text -light -big c-gray5") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
text: ["PUK"],
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("txtPuk.Style"), function () {
return (((model.variables.valueCustomStyleClassIn === "")) ? ("text d-block c-gray7 -large") : (model.variables.valueCustomStyleClassIn));
}, function () {
return model.variables.valueCustomStyleClassIn;
}),
value: model.variables.pUKIn,
_idProps: {
service: idService,
name: "txtPuk"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pUKInDataFetchStatus)
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClickCopyToClipboard$Action("Puk", model.variables.pUKIn, model.variables.copyToClipboardTextPUKIn, controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
name: "lnkCopyPuk"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: model.getCachedValue(idService.getId("bl9FT76_AkKjy6f8gfVpOg.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
}),
StyleClass: model.getCachedValue(idService.getId("bl9FT76_AkKjy6f8gfVpOg.StyleClass"), function () {
return (((model.variables.arrowCustomStyleClassIn === "")) ? ("c-gray8") : (model.variables.arrowCustomStyleClassIn));
}, function () {
return model.variables.arrowCustomStyleClassIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._arrowCustomStyleClassInDataFetchStatus),
HasRipple: true,
IconName: ACCOUNTINFO_MBLOCKSModel.staticEntities.iCON_CLASS.iconCopiar
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
uuid: "12",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.arrowCustomStyleClassIn), asPrimitiveValue(model.variables.valueCustomStyleClassIn), asPrimitiveValue(model.variables.pUKIn), asPrimitiveValue(model.variables._arrowCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._valueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._pUKInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables.titleCustomStyleClassIn)]
})), React.createElement(OSWidgets.Container, {
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
HasLeftSide: false,
RightStyleClass: "-vCenter text-right",
StyleClass: ("-paddingEqual " + model.variables.customClassIn),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus),
HasRipple: false
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
uuid: "14",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Text, {
style: model.getCachedValue(idService.getId("mwoLCzsN+0eC5rkoI3_iRg.Style"), function () {
return (((model.variables.titleCustomStyleClassIn === "")) ? ("text -light -big c-gray5") : (model.variables.titleCustomStyleClassIn));
}, function () {
return model.variables.titleCustomStyleClassIn;
}),
text: ["Cartão SIM"],
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._titleCustomStyleClassInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: model.getCachedValue(idService.getId("txtSim.Style"), function () {
return (((model.variables.valueCustomStyleClassIn === "")) ? ("text d-block c-gray7 -large") : (model.variables.valueCustomStyleClassIn));
}, function () {
return model.variables.valueCustomStyleClassIn;
}),
value: model.getCachedValue(idService.getId("txtSim.Value"), function () {
return ((((((((OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 0, 4) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 4, 4)) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 8, 4)) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 12, 4)) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 16, 4));
}, function () {
return model.variables.sIMNumberIn;
}),
_idProps: {
service: idService,
name: "txtSim"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._valueCustomStyleClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._sIMNumberInDataFetchStatus)
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClickCopyToClipboard$Action("Sim", ((((((((OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 0, 4) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 4, 4)) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 8, 4)) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 12, 4)) + " ") + OS.BuiltinFunctions.substr(model.variables.sIMNumberIn, 16, 4)), model.variables.copyToClipboardTextSIMIn, controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
name: "lnkCopySim"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: ACCOUNTINFO_MBLOCKSModel.staticEntities.iCON_CLASS.iconCopiar,
IconSize: model.getCachedValue(idService.getId("7OW9rMYJCkadBZzxHz3SGw.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
}),
StyleClass: model.getCachedValue(idService.getId("7OW9rMYJCkadBZzxHz3SGw.StyleClass"), function () {
return (((model.variables.arrowCustomStyleClassIn === "")) ? ("c-gray8") : (model.variables.arrowCustomStyleClassIn));
}, function () {
return model.variables.arrowCustomStyleClassIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._arrowCustomStyleClassInDataFetchStatus),
HasRipple: true
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
uuid: "18",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.arrowCustomStyleClassIn), asPrimitiveValue(model.variables.valueCustomStyleClassIn), asPrimitiveValue(model.variables.sIMNumberIn), asPrimitiveValue(model.variables._arrowCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._valueCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables._sIMNumberInDataFetchStatus), asPrimitiveValue(model.variables._titleCustomStyleClassInDataFetchStatus), asPrimitiveValue(model.variables.titleCustomStyleClassIn)]
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.mvc$controller", ["OutSystems", "ACCOUNTINFO_MBLOCKS.model", "ACCOUNTINFO_MBLOCKS.controller", "MobileUIWidgets.controller", "CopyToClipboard_Plugin.controller", "ACCOUNTINFO_MBLOCKS.languageResources", "MobileUIWidgets.controller$Info", "ACCOUNTINFO_MBLOCKS.referencesHealth", "ACCOUNTINFO_MBLOCKS.referencesHealth$MobileUIWidgets", "CopyToClipboard_Plugin.controller$CopyToClipboard", "ACCOUNTINFO_MBLOCKS.referencesHealth$CopyToClipboard_Plugin"], function (OutSystems, ACCOUNTINFO_MBLOCKSModel, ACCOUNTINFO_MBLOCKSController, MobileUIWidgetsController, CopyToClipboard_PluginController, ACCOUNTINFO_MBLOCKSLanguageResources) {
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
Controller.prototype._onClickCopyToClipboard$Action = function (typeIn, variableSentIn, messageToDisplayIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnClickCopyToClipboard");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.OnClickCopyToClipboard$vars"))());
vars.value.typeInLocal = typeIn;
vars.value.variableSentInLocal = variableSentIn;
vars.value.messageToDisplayInLocal = messageToDisplayIn;
var copyToClipboardVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CopyToClipboard
model.flush();
return CopyToClipboard_PluginController.default.copyToClipboard$Action(vars.value.variableSentInLocal, callContext).then(function (value) {
copyToClipboardVar.value = value;
}).then(function () {
// Execute Action: Info2
MobileUIWidgetsController.default.info$Action(vars.value.messageToDisplayInLocal, callContext);
// Trigger Event: Event_CopyToClipboard
return controller.event_CopyToClipboard$Action(vars.value.typeInLocal, callContext);
});
});
};
Controller.registerVariableGroupType("ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.OnClickCopyToClipboard$vars", [{
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "VariableSent",
attrName: "variableSentInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "MessageToDisplay",
attrName: "messageToDisplayInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.onClickCopyToClipboard$Action = function (typeIn, variableSentIn, messageToDisplayIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClickCopyToClipboard$Action, callContext, typeIn, variableSentIn, messageToDisplayIn);

};
Controller.prototype.event_CopyToClipboard$Action = function () {
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
return ACCOUNTINFO_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, ACCOUNTINFO_MBLOCKSLanguageResources);
});

