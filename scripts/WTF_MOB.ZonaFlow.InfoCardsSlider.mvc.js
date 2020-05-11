define("WTF_MOB.ZonaFlow.InfoCardsSlider.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.model$App_InfoCardsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("InfoCards", "infoCardsIn", "InfoCards", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_InfoCardsMBPRec());
}, WTF_MBPModel.App_InfoCardsMBPRec), 
this.attr("_infoCardsInDataFetchStatus", "_infoCardsInDataFetchStatus", "_infoCardsInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Index", "indexIn", "Index", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_indexInDataFetchStatus", "_indexInDataFetchStatus", "_indexInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("InfoCards" in inputs) {
this.variables.infoCardsIn = inputs.InfoCards;
if("_infoCardsInDataFetchStatus" in inputs) {
this.variables._infoCardsInDataFetchStatus = inputs._infoCardsInDataFetchStatus;
}

}

if("Index" in inputs) {
this.variables.indexIn = inputs.Index;
if("_indexInDataFetchStatus" in inputs) {
this.variables._indexInDataFetchStatus = inputs._indexInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.InfoCardsSlider.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.InfoCardsSlider.mvc$model", "WTF_MOB.ZonaFlow.InfoCardsSlider.mvc$controller", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.model$App_InfoCardsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, React, OSView, WTF_MOB_ZonaFlow_InfoCardsSlider_mvc_model, WTF_MOB_ZonaFlow_InfoCardsSlider_mvc_controller, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view) {
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
        View.displayName = "ZonaFlow.InfoCardsSlider";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.ZonaFlow.InfoCardsSlider.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_InfoCardsSlider_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_InfoCardsSlider_mvc_controller;
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
RightStyleClass: "text-right",
HasLeftSide: true,
StyleClass: "m-infoCards__card ",
HasRipple: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onCardClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onCardClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "cardFlex",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onCardClick_Delete$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "OSInline"
},
style: "icon_close_transform",
visible: (model.variables.infoCardsIn.hasDeleteActionAttr && ((model.variables.infoCardsIn.hasDeleteActionAfterReadAttr && model.variables.infoCardsIn.hasReadAttr) || !(model.variables.infoCardsIn.hasDeleteActionAfterReadAttr))),
_idProps: {
service: idService,
name: "delete"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._infoCardsInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconClose
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
_dependencies: []
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mb-4"
},
tag: "h3",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h3 -bold",
value: model.variables.infoCardsIn.titleCardAttr,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._infoCardsInDataFetchStatus)
})), React.createElement(OSWidgets.Expression, {
style: "a-text",
value: model.variables.infoCardsIn.descCardAttr,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._infoCardsInDataFetchStatus)
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [$if(model.variables.infoCardsIn.hasDetailAttr, false, this, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall
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
})];
}, function () {
return [$if(model.variables.infoCardsIn.hasActionAttr, false, this, function () {
return [$if(model.variables.infoCardsIn.btnActionExternalLinkAttr, false, this, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconExternalLink,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall
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
uuid: "7",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xSmall,
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
uuid: "8",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})];
}, function () {
return [];
})];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables._infoCardsInDataFetchStatus), asPrimitiveValue(model.variables.infoCardsIn.btnActionExternalLinkAttr), asPrimitiveValue(model.variables.infoCardsIn.hasActionAttr), asPrimitiveValue(model.variables.infoCardsIn.hasDetailAttr), asPrimitiveValue(model.variables.infoCardsIn.descCardAttr), asPrimitiveValue(model.variables.infoCardsIn.titleCardAttr), asPrimitiveValue(model.variables.infoCardsIn.hasReadAttr), asPrimitiveValue(model.variables.infoCardsIn.hasDeleteActionAfterReadAttr), asPrimitiveValue(model.variables.infoCardsIn.hasDeleteActionAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.ZonaFlow.InfoCardsSlider.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.model$App_InfoCardsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._onCardClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnCardClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("cardFlex"), false, callContext);
// Trigger Event: OnCardClickEvt
return controller.onCardClickEvt$Action(model.variables.indexIn, callContext).then(function () {
// Execute Action: DisabledOrEnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("cardFlex"), true, callContext);
});
});
};
Controller.prototype._onCardClick_Delete$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnCardClick_Delete");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("delete"), false, callContext);
// Execute Action: DisabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("cardFlex"), false, callContext);
// Trigger Event: OnCardClick_DeleteEvt
return controller.onCardClick_DeleteEvt$Action(model.variables.infoCardsIn.identifierAttr, callContext);
});
};

Controller.prototype.onCardClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onCardClick$Action, callContext);

};
Controller.prototype.onCardClick_Delete$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onCardClick_Delete$Action, callContext);

};
Controller.prototype.onCardClickEvt$Action = function () {
return Promise.resolve();
};
Controller.prototype.onCardClick_DeleteEvt$Action = function () {
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

