define("WTF_MOB.SaucyFlow.Promos_DetailSlider.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.controller", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.WidgetsInteraction.Carousel_Ext.mvc$model", "WTF_MOB.SaucyFlow.Promos_Detail.mvc$model", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$App_PromotionsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MBPModel, MobileUIWidgetsController, WTF_MOBController, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvcModel, WTF_MOB_SaucyFlow_Promos_Detail_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("PromosList", "promosListIn", "PromosList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PromotionsMBPList());
}, WTF_MOBModel.App_PromotionsMBPList), 
this.attr("_promosListInDataFetchStatus", "_promosListInDataFetchStatus", "_promosListInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IndexToOpenOn", "indexToOpenOnIn", "IndexToOpenOn", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_indexToOpenOnInDataFetchStatus", "_indexToOpenOnInDataFetchStatus", "_indexToOpenOnInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvcModel.hasValidationWidgets) || WTF_MOB_SaucyFlow_Promos_Detail_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("PromosList" in inputs) {
this.variables.promosListIn = inputs.PromosList;
if("_promosListInDataFetchStatus" in inputs) {
this.variables._promosListInDataFetchStatus = inputs._promosListInDataFetchStatus;
}

}

if("IndexToOpenOn" in inputs) {
this.variables.indexToOpenOnIn = inputs.IndexToOpenOn;
if("_indexToOpenOnInDataFetchStatus" in inputs) {
this.variables._indexToOpenOnInDataFetchStatus = inputs._indexToOpenOnInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.Promos_DetailSlider.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.Promos_DetailSlider.mvc$model", "WTF_MOB.SaucyFlow.Promos_DetailSlider.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.WidgetsInteraction.Carousel_Ext.mvc$view", "WTF_MOB.SaucyFlow.Promos_Detail.mvc$view", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$App_PromotionsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, MobileUIWidgetsController, React, OSView, WTF_MOB_SaucyFlow_Promos_DetailSlider_mvc_model, WTF_MOB_SaucyFlow_Promos_DetailSlider_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_SaucyFlow_Promos_Detail_mvc_view) {
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
        View.displayName = "SaucyFlow.Promos_DetailSlider";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_SaucyFlow_Promos_Detail_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Promos_DetailSlider_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Promos_DetailSlider_mvc_controller;
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
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeDetailSlider$Action(controller.callContext(eventHandlerContext));
});
;
}
},
style: "saucy-back",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeDetailSlider$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "G1CQ7l2RJkKNZ0gJiBIsdw"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-white",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "zsDwtvpbeUaMlxW7ALNdyQ"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "pl-16 c-white",
value: "Promos",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, {
inputs: {
InitialPosition: model.variables.indexToOpenOnIn,
_initialPositionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._indexToOpenOnInDataFetchStatus),
Margin: -40,
Dots: false,
Loop: false,
Center: true,
Navigation: false
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
placeholders: {
carouselItems: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"disable-virtualization": "True"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.promosListIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._promosListInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_SaucyFlow_Promos_Detail_mvc_view, {
inputs: {
detail: model.variables.promosListIn.getCurrent(callContext.iterationContext),
_detailInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._promosListInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closeDetail$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeDetailSlider$Action(controller.callContext(eventHandlerContext));
});
;
},
countdownFinished$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.countdownUntilDateCountdownFinished$Action(controller.callContext(eventHandlerContext));
});
;
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
})];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._promosListInDataFetchStatus), asPrimitiveValue(model.variables.promosListIn.getCurrent(callContext.iterationContext))]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._promosListInDataFetchStatus)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._promosListInDataFetchStatus), asPrimitiveValue(model.variables.promosListIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.SaucyFlow.Promos_DetailSlider.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$App_PromotionsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOBLanguageResources) {
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
Controller.prototype._closeDetailSlider$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CloseDetailSlider");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Saucy_Promos", "Voltar", 0, "", callContext).then(function () {
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
// Trigger Event: CloseDetailSliderEvent
return controller.closeDetailSliderEvent$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Promos_DetailSlider.CloseDetailSlider", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._countdownUntilDateCountdownFinished$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CountdownUntilDateCountdownFinished");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: CountdownFinished
return controller.countdownFinished$Action(callContext);
}).catch(function (ex) {
OS.Logger.trace("Promos_DetailSlider.CountdownUntilDateCountdownFinished", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};

Controller.prototype.closeDetailSlider$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeDetailSlider$Action, callContext);

};
Controller.prototype.countdownUntilDateCountdownFinished$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._countdownUntilDateCountdownFinished$Action, callContext);

};
Controller.prototype.closeDetailSliderEvent$Action = function () {
return Promise.resolve();
};
Controller.prototype.countdownFinished$Action = function () {
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

