define("WTF_MOB.ZonaFlow.AditivosMiniSlider.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.model$Local_ADDONS_REFILLSList"], function (OutSystems, WTF_MOBModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("AddonsRefillList", "addonsRefillListIn", "AddonsRefillList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.Local_ADDONS_REFILLSList());
}, WTF_MOBModel.Local_ADDONS_REFILLSList), 
this.attr("_addonsRefillListInDataFetchStatus", "_addonsRefillListInDataFetchStatus", "_addonsRefillListInDataFetchStatus", true, OS.Types.Integer, function () {
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("AddonsRefillList" in inputs) {
this.variables.addonsRefillListIn = inputs.AddonsRefillList;
if("_addonsRefillListInDataFetchStatus" in inputs) {
this.variables._addonsRefillListInDataFetchStatus = inputs._addonsRefillListInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.AditivosMiniSlider.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.AditivosMiniSlider.mvc$model", "WTF_MOB.ZonaFlow.AditivosMiniSlider.mvc$controller", "OutSystemsReactWidgets", "WTF_MOB.model$Local_ADDONS_REFILLSList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, React, OSView, WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_model, WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_controller, OSWidgets) {
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
        View.displayName = "ZonaFlow.AditivosMiniSlider";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.ZonaFlow.AditivosMiniSlider.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_AditivosMiniSlider_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pl-16 pt-16",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "hotdeals wtf-app-slider",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"data-style-key": "kmKCbsR5UE+_3jJlEv2mXA"
},
mode: /*Custom*/ 1,
source: model.variables.addonsRefillListIn,
style: "item-container",
tag: "div",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openPopupConfirm$Action(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).idAttr, controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._addonsRefillListInDataFetchStatus), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).costAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).expiryDateAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isAddOnAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isSubscribedAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).categoryAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).commercialDescriptionAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isPendingAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).canUnsubscribeAttr), asPrimitiveValue(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).canSubscribeAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("Itemprize.Style"), function () {
return ("item" + ((((model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).canSubscribeAttr || model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).canUnsubscribeAttr) || model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isPendingAttr)) ? ("") : (" inactive")));
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).canSubscribeAttr;
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).canUnsubscribeAttr;
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isPendingAttr;
}),
visible: true,
_idProps: {
service: idService,
name: "Itemprize"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item-content pa-8 pt-16",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center title-hotdeal",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("qdsYv2tSfkuvtL6NNEBKng.Style"), function () {
return ("alignV" + (((OS.BuiltinFunctions.length(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).commercialDescriptionAttr) > 15)) ? (" scaledown") : ("")));
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).commercialDescriptionAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
}, $if((OS.BuiltinFunctions.toLower(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).categoryAttr) === "internet"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.aditivos_internet.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.aditivos_voice.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-8",
value: model.getCachedValue(idService.getId("4yaMxfpKWkCEB1avq5XdbQ.Value"), function () {
return OS.BuiltinFunctions.replace(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).commercialDescriptionAttr, "minutos", "Min");
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).commercialDescriptionAttr;
}),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-container",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "alignV",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isPendingAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock c-white",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.getCachedValue(idService.getId("04GIDVW7x0WBz6GX8kVjfQ.Value"), function () {
return ((!(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isSubscribedAttr)) ? ("Em desativação") : ("Em ativação"));
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isSubscribedAttr;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
}))];
}, function () {
return [$if(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isAddOnAttr, false, this, function () {
return [$if(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isSubscribedAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock c-white",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Renova a",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-8 -bold",
value: model.getCachedValue(idService.getId("sjysVQNZkkSVBLFqneF_jA.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).expiryDateAttr), "dd-mm-yyyy");
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).expiryDateAttr;
}),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Expression, {
style: " price-hotdeal",
value: model.getCachedValue(idService.getId("Xs3nyzDca0i29slY6NRzlQ.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.textToDecimal(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).costAttr), "€", 2, ",", ".");
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).costAttr;
}),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock c-white",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "por mês",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}, function () {
return [$if(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).isSubscribedAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock c-white",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Ativo até",
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "mt-8 -bold",
value: model.getCachedValue(idService.getId("pjvxcmEEbkm1lYP20xzQRg.Value"), function () {
return OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).expiryDateAttr), "dd-mm-yyyy");
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).expiryDateAttr;
}),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Expression, {
style: " price-hotdeal",
value: model.getCachedValue(idService.getId("0hhdkST9eECK0BX9lCBbuQ.Value"), function () {
return OS.BuiltinFunctions.formatCurrency(OS.BuiltinFunctions.textToDecimal(model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).costAttr), "€", 2, ",", ".");
}, function () {
return model.variables.addonsRefillListIn.getCurrent(callContext.iterationContext).costAttr;
}),
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._addonsRefillListInDataFetchStatus)
})];
})];
})];
}))))))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._addonsRefillListInDataFetchStatus)]
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.ZonaFlow.AditivosMiniSlider.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MOB.languageResources", "WTF_MOB.model$Local_ADDONS_REFILLSList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MOBLanguageResources) {
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
Controller.prototype._openPopupConfirm$Action = function (idIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenPopupConfirm");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.AditivosMiniSlider.OpenPopupConfirm$vars"))());
vars.value.idInLocal = idIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: EventOpenPopupConfirm
return controller.eventOpenPopupConfirm$Action(vars.value.idInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.AditivosMiniSlider.OpenPopupConfirm$vars", [{
name: "id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

Controller.prototype.openPopupConfirm$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openPopupConfirm$Action, callContext, idIn);

};
Controller.prototype.eventOpenPopupConfirm$Action = function () {
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
return WTF_MOBController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, WTF_MOBLanguageResources);
});

