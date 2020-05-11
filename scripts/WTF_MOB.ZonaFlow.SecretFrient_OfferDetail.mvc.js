define("WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.mvc$model", ["OutSystems", "WTF_MOB.model", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MOB.controller", "BALANCE_MBP.controller", "WTF_BP.model", "CountdownMobile.Countdown.CountdownUntilDate.mvc$model", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$SecretFriend_RedeemOffer", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_REDEEM_ADOPTION_CAMPAIGN_NATAL", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_SecretFriendMyOffersRec", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, MobileUIWidgetsController, WTF_MBPController, WTF_MOBController, BALANCE_MBPController, WTF_BPModel, CountdownMobile_Countdown_CountdownUntilDate_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("detail", "detailIn", "detail", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_SecretFriendMyOffersRec());
}, WTF_BPModel.App_SecretFriendMyOffersRec), 
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
define("WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.mvc$model", "WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.mvc$controller", "OutSystemsReactWidgets", "CountdownMobile.Countdown.CountdownUntilDate.mvc$view", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$SecretFriend_RedeemOffer", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_REDEEM_ADOPTION_CAMPAIGN_NATAL", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_SecretFriendMyOffersRec", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, BALANCE_MBPController, WTF_BPModel, React, OSView, WTF_MOB_ZonaFlow_SecretFrient_OfferDetail_mvc_model, WTF_MOB_ZonaFlow_SecretFrient_OfferDetail_mvc_controller, OSWidgets, CountdownMobile_Countdown_CountdownUntilDate_mvc_view) {
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
        View.displayName = "ZonaFlow.SecretFrient_OfferDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [CountdownMobile_Countdown_CountdownUntilDate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_SecretFrient_OfferDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_SecretFrient_OfferDetail_mvc_controller;
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
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.visual_pede.png"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
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
animate: false,
style: "footer",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "container-button ph-16 mt-8 mb-16",
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.redeemOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "RedeemButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Receber",
_idProps: {
service: idService,
name: "RedeemButton"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "countdown-container",
visible: true,
_idProps: {
service: idService,
name: "TempoRestante2"
},
_widgetRecordProvider: widgetsRecordProvider
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
UseDays: model.getCachedValue(idService.getId("9Sf3b4M5T0KWfXJVtZEmWA.UseDays"), function () {
return (OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expireRedeemAtAttr) >= 1);
}, function () {
return model.variables.detailIn.expireRedeemAtAttr;
}),
_useDaysInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
TimeSeparator: model.getCachedValue(idService.getId("9Sf3b4M5T0KWfXJVtZEmWA.TimeSeparator"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expireRedeemAtAttr) >= 1)) ? ("d") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expireRedeemAtAttr) < 60)) ? ("m") : ("h"))));
}, function () {
return model.variables.detailIn.expireRedeemAtAttr;
}),
_timeSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UntilDate: model.variables.detailIn.expireRedeemAtAttr,
_untilDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UseSeconds: model.getCachedValue(idService.getId("9Sf3b4M5T0KWfXJVtZEmWA.UseSeconds"), function () {
return (OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expireRedeemAtAttr) < 60);
}, function () {
return model.variables.detailIn.expireRedeemAtAttr;
}),
_useSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
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
value: model.getCachedValue(idService.getId("vUV_2FOIIUict87WMX2goQ.Value"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expireRedeemAtAttr) >= 1)) ? ("h") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expireRedeemAtAttr) < 60)) ? ("s") : ("m"))));
}, function () {
return model.variables.detailIn.expireRedeemAtAttr;
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
define("WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "BALANCE_MBP.controller", "WTF_BP.model", "WTF_MOB.languageResources", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$SecretFriend_RedeemOffer", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "BALANCE_MBP.controller$Balance_ClearCache", "WTF_MOB.referencesHealth$BALANCE_MBP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_REDEEM_ADOPTION_CAMPAIGN_NATAL", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.controller$Analytics_TrackException", "WTF_BP.model$App_SecretFriendMyOffersRec", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, BALANCE_MBPController, WTF_BPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._redeemOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RedeemOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var secretFriend_RedeemOfferVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var balance_ClearCacheVar = new OS.DataTypes.VariableHolder();
var wallet_ClearCacheVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("RedeemButton"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Amigo Secreto", "Resgatar oferta", 0, "", callContext).then(function () {
// Execute Action: ShowLoadingBlock
return controller._showLoadingBlock$Action(true, callContext);
}).then(function () {
// Execute Action: SecretFriend_RedeemOffer
model.flush();
return WTF_MBPController.default.secretFriend_RedeemOffer$Action(OS.BuiltinFunctions.longIntegerToInteger(model.variables.detailIn.identifierAttr), callContext).then(function (value) {
secretFriend_RedeemOfferVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((secretFriend_RedeemOfferVar.value.successOut)) {
return OS.Flow.executeSequence(function () {
if(((model.variables.detailIn.itemTypeIdAttr === WTF_MOBModel.staticEntities.iTEM_TYPES.comunicacoesMoveis))) {
// Execute Action: Balance_ClearCache
model.flush();
return BALANCE_MBPController.default.balance_ClearCache$Action(callContext).then(function (value) {
balance_ClearCacheVar.value = value;
});
}

}).then(function () {
// Execute Action: setActivityLog_REDEEM_ADOPTION_CAMPAIGN_NATAL
model.flush();
return WTF_MBPController.default.setActivityLog_REDEEM_ADOPTION_CAMPAIGN_NATAL$Action("", callContext).then(function () {
// Execute Action: Wallet_ClearCache
model.flush();
return WTF_MBPController.default.wallet_ClearCache$Action(callContext).then(function (value) {
wallet_ClearCacheVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(secretFriend_RedeemOfferVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Execute Action: ShowLoadingBlock2
return controller._showLoadingBlock$Action(false, callContext).then(function () {
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("RedeemButton"), true, callContext);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("SecretFrient_OfferDetail.RedeemOnClick", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException3
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("RedeemButton"), true, callContext);
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
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
// Execute Action: Analytics_TrackException
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(allExceptionsVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("RedeemButton"), true, callContext);
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._showLoadingBlock$Action = function (showIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowLoadingBlock");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.ShowLoadingBlock$vars"))());
vars.value.showInLocal = showIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: ShowLoading
return controller.showLoading$Action(vars.value.showInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.SecretFrient_OfferDetail.ShowLoadingBlock$vars", [{
name: "Show",
attrName: "showInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
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
OS.Logger.trace("SecretFrient_OfferDetail.CountdownUntilDateCountdownFinished", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.redeemOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._redeemOnClick$Action, callContext);

};
Controller.prototype.showLoadingBlock$Action = function (showIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showLoadingBlock$Action, callContext, showIn);

};
Controller.prototype.countdownUntilDateCountdownFinished$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._countdownUntilDateCountdownFinished$Action, callContext);

};
Controller.prototype.showLoading$Action = function () {
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

