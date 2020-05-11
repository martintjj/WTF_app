define("WTF_MOB.ScratchOtherPagesFlow.ItemPrize.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MOB.Common.ClosePopup.mvc$model", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_PrizeListRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MOB_Common_ClosePopup_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("openPrizeDetail", "openPrizeDetailVar", "openPrizeDetail", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Prize", "prizeIn", "Prize", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_PrizeListRec());
}, WTF_BPModel.App_PrizeListRec), 
this.attr("_prizeInDataFetchStatus", "_prizeInDataFetchStatus", "_prizeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Category", "categoryIn", "Category", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_categoryInDataFetchStatus", "_categoryInDataFetchStatus", "_categoryInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("whiteIcon", "whiteIconIn", "whiteIcon", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_whiteIconInDataFetchStatus", "_whiteIconInDataFetchStatus", "_whiteIconInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = WTF_MOB_Common_ClosePopup_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Prize" in inputs) {
this.variables.prizeIn = inputs.Prize;
if("_prizeInDataFetchStatus" in inputs) {
this.variables._prizeInDataFetchStatus = inputs._prizeInDataFetchStatus;
}

}

if("Category" in inputs) {
this.variables.categoryIn = inputs.Category;
if("_categoryInDataFetchStatus" in inputs) {
this.variables._categoryInDataFetchStatus = inputs._categoryInDataFetchStatus;
}

}

if("whiteIcon" in inputs) {
this.variables.whiteIconIn = inputs.whiteIcon;
if("_whiteIconInDataFetchStatus" in inputs) {
this.variables._whiteIconInDataFetchStatus = inputs._whiteIconInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ScratchOtherPagesFlow.ItemPrize.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.ScratchOtherPagesFlow.ItemPrize.mvc$model", "WTF_MOB.ScratchOtherPagesFlow.ItemPrize.mvc$controller", "OutSystemsReactWidgets", "WTF_MOB.Common.ClosePopup.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_PrizeListRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, React, OSView, WTF_MOB_ScratchOtherPagesFlow_ItemPrize_mvc_model, WTF_MOB_ScratchOtherPagesFlow_ItemPrize_mvc_controller, OSWidgets, WTF_MOB_Common_ClosePopup_mvc_view) {
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
        View.displayName = "ScratchOtherPagesFlow.ItemPrize";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.ScratchOtherPagesFlow.ItemPrize.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_ClosePopup_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchOtherPagesFlow_ItemPrize_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchOtherPagesFlow_ItemPrize_mvc_controller;
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
controller.openPrizeDetail$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "OSInline"
},
style: ("item " + model.variables.prizeIn.montra_ClassAttr),
visible: true,
_idProps: {
service: idService,
name: "Itemprize"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("open-prize " + model.variables.prizeIn.openClose_ClassAttr),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "+",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("Hqta0PyOxUebOe_QIot8kg.Style"), function () {
return ((((model.variables.categoryIn === "Cinemas")) ? ("center-image") : ((((model.variables.categoryIn === "Filmes")) ? ("full") : ("foto")))) + ((((model.variables.categoryIn === "Uber Eats") || (model.variables.categoryIn === "Uber Riders"))) ? (" uber") : ("")));
}, function () {
return model.variables.categoryIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._categoryInDataFetchStatus)
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.prizeIn.app_PictureAttr.contentAttr,
style: model.getCachedValue(idService.getId("H13ZxgZl4UWgKQits6k3Yg.Style"), function () {
return (((model.variables.categoryIn === "Uber")) ? ("logo") : (""));
}, function () {
return model.variables.categoryIn;
}),
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._categoryInDataFetchStatus)
}), $if((model.variables.categoryIn === "Uber"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.uber_riders_car.svg"),
style: "other",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "text",
visible: ((model.variables.prizeIn.montra_ClassAttr) !== ("full-transparent")),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.prizeIn.nameAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
})), React.createElement(OSWidgets.Popup, {
showPopup: model.variables.openPrizeDetailVar,
style: model.getCachedValue(idService.getId("Mxaro0ML2USNwfUq4EtxPg.Style"), function () {
return (("popup-dialog " + model.variables.prizeIn.montra_ClassAttr) + (((model.variables.whiteIconIn === true)) ? (" whiteicon") : ("")));
}, function () {
return model.variables.prizeIn.montra_ClassAttr;
}, function () {
return model.variables.whiteIconIn;
}),
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus, model.variables._whiteIconInDataFetchStatus)
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.cubo.svg"),
style: "prize-decoration-left",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
imageContent: model.variables.prizeIn.app_PictureAttr.contentAttr,
style: "prize-image",
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.scratch_premios_group8.svg"),
style: "prize-decoration-right",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "QEvRiw7NxE6B25ap0v866w"
},
style: "prize-screen",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "text-center"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "tsOo1636G0yzpZ2p7SJnvA"
},
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.prizeIn.nameAttr,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "text-center desc-prize"
},
tag: "p",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "hNaJbDqD6kuCyCslLELekg"
},
gridProperties: {
classes: "OSFillParent",
marginTop: "20px"
},
value: model.variables.prizeIn.descriptionAttr,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "text-center"
},
tag: "p",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "DLbUQl_UOki7vkOGtgukfA"
},
gridProperties: {
classes: "OSFillParent",
marginTop: "50px"
},
value: "Queres levá-lo?",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "V7Pe18ntAkKcrVvzg9JMww"
},
gridProperties: {
classes: "ThemeGrid_Width10 ThemeGrid_MarginGutter",
marginTop: "10px"
},
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToScratch$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Dá-lhe um scratch",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(WTF_MOB_Common_ClosePopup_mvc_view, {
inputs: {
Class: model.variables.prizeIn.openClose_ClassAttr,
_classInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._prizeInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closeAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closePrizeDetail$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "22",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.ScratchOtherPagesFlow.ItemPrize.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MOB.languageResources", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_PrizeListRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._openPrizeDetail$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenPrizeDetail");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// openPrizeDetail = True
model.variables.openPrizeDetailVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Scratch_premios_" + model.variables.categoryIn), model.variables.prizeIn.nameAttr, 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("ItemPrize.OpenPrizeDetail", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._closePrizeDetail$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ClosePrizeDetail");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Scratch_premios_detalhe_" + model.variables.prizeIn.nameAttr), "Fechar", 0, "", callContext).then(function () {
// openPrizeDetail = False
model.variables.openPrizeDetailVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("ItemPrize.ClosePrizeDetail", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._goToScratch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToScratch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Scratch_premios_detalhe_" + model.variables.prizeIn.nameAttr), "Jogar", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/Scratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ItemPrize.GoToScratch", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.openPrizeDetail$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openPrizeDetail$Action, callContext);

};
Controller.prototype.closePrizeDetail$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closePrizeDetail$Action, callContext);

};
Controller.prototype.goToScratch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToScratch$Action, callContext);

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

