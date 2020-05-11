define("WTF_MOB.WalletFlow.Wallet_RequiredAddressBlock.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("App_UserWtfPrizeAddress", "app_UserWtfPrizeAddressIn", "App_UserWtfPrizeAddress", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_UserWtfPrizeAddressRec());
}, WTF_BPModel.App_UserWtfPrizeAddressRec), 
this.attr("_app_UserWtfPrizeAddressInDataFetchStatus", "_app_UserWtfPrizeAddressInDataFetchStatus", "_app_UserWtfPrizeAddressInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ItemId", "itemIdIn", "ItemId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_itemIdInDataFetchStatus", "_itemIdInDataFetchStatus", "_itemIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CategoryLabel", "categoryLabelIn", "CategoryLabel", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_categoryLabelInDataFetchStatus", "_categoryLabelInDataFetchStatus", "_categoryLabelInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsOffline", "isOfflineIn", "IsOffline", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isOfflineInDataFetchStatus", "_isOfflineInDataFetchStatus", "_isOfflineInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("App_UserWtfPrizeAddress" in inputs) {
this.variables.app_UserWtfPrizeAddressIn = inputs.App_UserWtfPrizeAddress;
if("_app_UserWtfPrizeAddressInDataFetchStatus" in inputs) {
this.variables._app_UserWtfPrizeAddressInDataFetchStatus = inputs._app_UserWtfPrizeAddressInDataFetchStatus;
}

}

if("ItemId" in inputs) {
this.variables.itemIdIn = inputs.ItemId;
if("_itemIdInDataFetchStatus" in inputs) {
this.variables._itemIdInDataFetchStatus = inputs._itemIdInDataFetchStatus;
}

}

if("CategoryLabel" in inputs) {
this.variables.categoryLabelIn = inputs.CategoryLabel;
if("_categoryLabelInDataFetchStatus" in inputs) {
this.variables._categoryLabelInDataFetchStatus = inputs._categoryLabelInDataFetchStatus;
}

}

if("IsOffline" in inputs) {
this.variables.isOfflineIn = inputs.IsOffline;
if("_isOfflineInDataFetchStatus" in inputs) {
this.variables._isOfflineInDataFetchStatus = inputs._isOfflineInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.WalletFlow.Wallet_RequiredAddressBlock.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.WalletFlow.Wallet_RequiredAddressBlock.mvc$model", "WTF_MOB.WalletFlow.Wallet_RequiredAddressBlock.mvc$controller", "OutSystemsReactWidgets", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, React, OSView, WTF_MOB_WalletFlow_Wallet_RequiredAddressBlock_mvc_model, WTF_MOB_WalletFlow_Wallet_RequiredAddressBlock_mvc_controller, OSWidgets) {
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
        View.displayName = "WalletFlow.Wallet_RequiredAddressBlock";
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
                return WTF_MOB_WalletFlow_Wallet_RequiredAddressBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_Wallet_RequiredAddressBlock_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(((model.variables.app_UserWtfPrizeAddressIn.nameAttr) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "yUhqZW8Q8EK1v58xI7X5CA"
},
gridProperties: {
classes: "OSFillParent"
},
style: model.getCachedValue(idService.getId("yUhqZW8Q8EK1v58xI7X5CA.Style"), function () {
return ("mt-16 -bold " + (((model.variables.categoryLabelIn === "Golden")) ? ("c-warmPurple") : ("c-white")));
}, function () {
return model.variables.categoryLabelIn;
}),
value: "Morada de contacto:",
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._categoryLabelInDataFetchStatus)
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "NrwVxEC4e0KvNcraUercew"
},
gridProperties: {
classes: "OSFillParent"
},
style: model.getCachedValue(idService.getId("NrwVxEC4e0KvNcraUercew.Style"), function () {
return (((model.variables.categoryLabelIn === "Golden")) ? ("c-warmPurple") : ("c-white"));
}, function () {
return model.variables.categoryLabelIn;
}),
value: ((((((((model.variables.app_UserWtfPrizeAddressIn.nameAttr + ", ") + model.variables.app_UserWtfPrizeAddressIn.msisdnAttr) + ", ") + model.variables.app_UserWtfPrizeAddressIn.addressStreetAttr) + ", ") + model.variables.app_UserWtfPrizeAddressIn.addressPostalCodeAttr) + ", ") + model.variables.app_UserWtfPrizeAddressIn.addressPostalCityAttr),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._categoryLabelInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_UserWtfPrizeAddressInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isOfflineIn),
extendedProperties: {
"data-style-key": "yvexwCMud0uIDre+Efd3rw"
},
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.fillAdress$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("yvexwCMud0uIDre+Efd3rw.Style"), function () {
return ("btn btn-primary -primary mt-16" + ((((model.variables.categoryLabelIn) !== ("Golden"))) ? (" white") : ("")));
}, function () {
return model.variables.categoryLabelIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._categoryLabelInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "Formulário de envio",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "GoHseNsPW0Kb2CbfPX1j2Q"
},
style: "pt-16",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("Q4O_njDdsUucxECbZtAiJA.Style"), function () {
return ("text-center " + (((model.variables.categoryLabelIn === "Golden")) ? ("c-warmPurple") : ("c-white")));
}, function () {
return model.variables.categoryLabelIn;
}),
value: "Preenche o formulário de envio para poderes receber este prémio.",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._categoryLabelInDataFetchStatus)
})))];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.WalletFlow.Wallet_RequiredAddressBlock.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MOB.languageResources", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._fillAdress$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("FillAdress");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Wallet_cards_" + model.variables.categoryLabelIn), "btn_formulario", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/WalletFillAddressWithItem
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WalletFillAddressWithItem", {
ItemId: model.variables.itemIdIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("Wallet_RequiredAddressBlock.FillAdress", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
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
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
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
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};

Controller.prototype.fillAdress$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fillAdress$Action, callContext);

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

