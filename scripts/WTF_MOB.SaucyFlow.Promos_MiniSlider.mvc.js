define("WTF_MOB.SaucyFlow.Promos_MiniSlider.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.model", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_PromotionsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MBPModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("promotions_list", "promotions_listIn", "promotions_list", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PromotionsMBPList());
}, WTF_MOBModel.App_PromotionsMBPList), 
this.attr("_promotions_listInDataFetchStatus", "_promotions_listInDataFetchStatus", "_promotions_listInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("promotions_list" in inputs) {
this.variables.promotions_listIn = inputs.promotions_list;
if("_promotions_listInDataFetchStatus" in inputs) {
this.variables._promotions_listInDataFetchStatus = inputs._promotions_listInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.Promos_MiniSlider.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.Promos_MiniSlider.mvc$model", "WTF_MOB.SaucyFlow.Promos_MiniSlider.mvc$controller", "OutSystemsReactWidgets", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_PromotionsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, React, OSView, WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_model, WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_controller, OSWidgets) {
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
        View.displayName = "SaucyFlow.Promos_MiniSlider";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Promos_MiniSlider_mvc_controller;
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
animate: true,
visible: !(model.variables.promotions_listIn.isEmpty),
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._promotions_listInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-textRead c-white -uppercase  -fowardSlash -ellipsis ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: " -bold",
value: "Promos",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: " pl-16 promotions wtf-app-slider",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"data-style-key": "nxiyyeqwaE+1uQM0X2ejAQ"
},
mode: /*Custom*/ 1,
source: model.variables.promotions_listIn,
style: "item-container",
tag: "div",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._promotions_listInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openDetail$Action(model.variables.promotions_listIn.getCurrent(callContext.iterationContext), "Promos", model.variables.promotions_listIn.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: [asPrimitiveValue(model.variables._promotions_listInDataFetchStatus), asPrimitiveValue(model.variables.promotions_listIn.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.promotions_listIn.getCurrent(callContext.iterationContext).pictureAttr.contentAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "item ",
visible: true,
_idProps: {
service: idService,
name: "Itemprize2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "center-image",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.promotions_listIn.getCurrent(callContext.iterationContext).pictureAttr.contentAttr,
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._promotions_listInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "title-promotions b-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.promotions_listIn.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._promotions_listInDataFetchStatus)
}))))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._promotions_listInDataFetchStatus)]
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.SaucyFlow.Promos_MiniSlider.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_PromotionsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._openDetail$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.Promos_MiniSlider.OpenDetail$vars"))());
vars.value.detailToOpenInLocal = detailToOpenIn.clone();
vars.value.categoryInLocal = categoryIn;
vars.value.currentRowNumberInLocal = currentRowNumberIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: EventOpenDetail
return controller.eventOpenDetail$Action(vars.value.categoryInLocal, vars.value.detailToOpenInLocal, vars.value.currentRowNumberInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.Promos_MiniSlider.OpenDetail$vars", [{
name: "detailToOpen",
attrName: "detailToOpenInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MBPModel.App_PromotionsMBPRec();
},
complexType: WTF_MBPModel.App_PromotionsMBPRec
}, {
name: "category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CurrentRowNumber",
attrName: "currentRowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);

Controller.prototype.openDetail$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openDetail$Action, callContext, detailToOpenIn, categoryIn, currentRowNumberIn);

};
Controller.prototype.eventOpenDetail$Action = function () {
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

