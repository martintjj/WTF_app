define("WTF_MOB.SaucyFlow.Promos_Detail.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "CountdownMobile.Countdown.CountdownUntilDate.mvc$model", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, CountdownMobile_Countdown_CountdownUntilDate_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("detail", "detailIn", "detail", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_PromotionsMBPRec());
}, WTF_MBPModel.App_PromotionsMBPRec), 
this.attr("_detailInDataFetchStatus", "_detailInDataFetchStatus", "_detailInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = CountdownMobile_Countdown_CountdownUntilDate_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("detail" in inputs) {
this.variables.detailIn = inputs.detail;
if("_detailInDataFetchStatus" in inputs) {
this.variables._detailInDataFetchStatus = inputs._detailInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.Promos_Detail.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.Promos_Detail.mvc$model", "WTF_MOB.SaucyFlow.Promos_Detail.mvc$controller", "OutSystemsReactWidgets", "CountdownMobile.Countdown.CountdownUntilDate.mvc$view", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, React, OSView, WTF_MOB_SaucyFlow_Promos_Detail_mvc_model, WTF_MOB_SaucyFlow_Promos_Detail_mvc_controller, OSWidgets, CountdownMobile_Countdown_CountdownUntilDate_mvc_view) {
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
        View.displayName = "SaucyFlow.Promos_Detail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.SaucyFlow.Promos_Detail.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [CountdownMobile_Countdown_CountdownUntilDate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Promos_Detail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_Promos_Detail_mvc_controller;
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
style: "saucy-detail-promos",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "card",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-content text-center",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "card-content",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "img-saucy",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.detailIn.pictureAttr.contentAttr,
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "othercontent",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "alignV ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 c-white -bold",
value: model.variables.detailIn.nameAttr,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pv-16",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white",
value: model.variables.detailIn.descriptionAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "footer",
visible: (model.variables.detailIn.hasCountdownAttr || model.variables.detailIn.callToAction_ActiveAttr),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "container-button ph-16 mt-8 mb-16",
visible: model.variables.detailIn.callToAction_ActiveAttr,
_idProps: {
service: idService,
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.clickToActionOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "BuyButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.detailIn.callToActionLabelAttr,
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "countdown-container",
visible: model.variables.detailIn.hasCountdownAttr,
_idProps: {
service: idService,
name: "TempoRestante"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "label",
value: "Tempo restante:",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(CountdownMobile_Countdown_CountdownUntilDate_mvc_view, {
inputs: {
TimeSeparator: model.getCachedValue(idService.getId("YGzvfFM7EEGYhHm4XxAPwA.TimeSeparator"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) >= 1)) ? ("d") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) < 60)) ? ("m") : ("h"))));
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_timeSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UseSeconds: model.getCachedValue(idService.getId("YGzvfFM7EEGYhHm4XxAPwA.UseSeconds"), function () {
return (OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) < 60);
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_useSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UntilDate: model.variables.detailIn.expirationDateTimeAttr,
_untilDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UseDays: model.getCachedValue(idService.getId("YGzvfFM7EEGYhHm4XxAPwA.UseDays"), function () {
return (OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) >= 1);
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_useDaysInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
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
uuid: "17",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("a4LnYwsMzkinZWC39SxTKw.Value"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) >= 1)) ? ("h") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) < 60)) ? ("s") : ("m"))));
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}))))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.SaucyFlow.Promos_Detail.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.controller$OpenExternalURL", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.model$App_PromotionsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._clickToActionOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ClickToActionOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Saucy_Promos", model.variables.detailIn.callToActionLabelAttr, 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.detailIn.callToActionInAppAttr)) {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(model.variables.detailIn.callToActionUrlAttr, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: OpenExternalURL
model.flush();
return WTF_MOBController.default.openExternalURL$Action(model.variables.detailIn.callToActionUrlAttr, true, "", WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, callContext);
}

});
});
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
OS.Logger.trace("Promos_Detail.CountdownUntilDateCountdownFinished", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.clickToActionOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._clickToActionOnClick$Action, callContext);

};
Controller.prototype.countdownUntilDateCountdownFinished$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._countdownUntilDateCountdownFinished$Action, callContext);

};
Controller.prototype.closeDetail$Action = function () {
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

