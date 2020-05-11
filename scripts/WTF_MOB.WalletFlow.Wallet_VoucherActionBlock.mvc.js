define("WTF_MOB.WalletFlow.Wallet_VoucherActionBlock.mvc$model", ["OutSystems", "WTF_MOB.model", "MobileUIWidgets.controller", "CopyToClipboard_Plugin.controller", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_BP.model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "CopyToClipboard_Plugin.controller$CopyToClipboard", "WTF_MOB.referencesHealth$CopyToClipboard_Plugin", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$SendVoucheForSms", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_VoucherRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$SendVoucherUberSms"], function (OutSystems, WTF_MOBModel, MobileUIWidgetsController, CopyToClipboard_PluginController, WTF_MOBController, WTF_MBPController, WTF_BPModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("App_Voucher", "app_VoucherIn", "App_Voucher", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_VoucherRec());
}, WTF_BPModel.App_VoucherRec), 
this.attr("_app_VoucherInDataFetchStatus", "_app_VoucherInDataFetchStatus", "_app_VoucherInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("categoryLabel", "categoryLabelIn", "categoryLabel", true, OS.Types.Text, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("App_Voucher" in inputs) {
this.variables.app_VoucherIn = inputs.App_Voucher;
if("_app_VoucherInDataFetchStatus" in inputs) {
this.variables._app_VoucherInDataFetchStatus = inputs._app_VoucherInDataFetchStatus;
}

}

if("categoryLabel" in inputs) {
this.variables.categoryLabelIn = inputs.categoryLabel;
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
define("WTF_MOB.WalletFlow.Wallet_VoucherActionBlock.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "CopyToClipboard_Plugin.controller", "WTF_MBP.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.WalletFlow.Wallet_VoucherActionBlock.mvc$model", "WTF_MOB.WalletFlow.Wallet_VoucherActionBlock.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "CopyToClipboard_Plugin.controller$CopyToClipboard", "WTF_MOB.referencesHealth$CopyToClipboard_Plugin", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$SendVoucheForSms", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_VoucherRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$SendVoucherUberSms"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, CopyToClipboard_PluginController, WTF_MBPController, WTF_BPModel, React, OSView, WTF_MOB_WalletFlow_Wallet_VoucherActionBlock_mvc_model, WTF_MOB_WalletFlow_Wallet_VoucherActionBlock_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view) {
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
        View.displayName = "WalletFlow.Wallet_VoucherActionBlock";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.WalletFlow.Wallet_VoucherActionBlock.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_Wallet_VoucherActionBlock_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_Wallet_VoucherActionBlock_mvc_controller;
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
style: "description pt-16",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "VnO7jKB4a0OIKlJtGW3Afw"
},
value: model.getCachedValue(idService.getId("VnO7jKB4a0OIKlJtGW3Afw.Value"), function () {
return (((model.variables.categoryLabelIn === "Cinemas")) ? ((((model.variables.app_VoucherIn.voucherTypeIdAttr === WTF_MOBModel.staticEntities.vOUCHERS_TYPE.bilheteCinema)) ? ("Token") : ("Vale"))) : ("Código"));
}, function () {
return model.variables.categoryLabelIn;
}, function () {
return model.variables.app_VoucherIn.voucherTypeIdAttr;
}),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._categoryLabelInDataFetchStatus, model.variables._app_VoucherInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "MU68a34kukCxuCLwnP3KNA"
},
style: "mt-8 code text-uppercase",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "mzyPpQ8nJEuJu490lY0DuA"
},
value: model.variables.app_VoucherIn.codeAttr,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_VoucherInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: model.getCachedValue(idService.getId("_BKOlD7FT0mPzCY2ioypSg.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
}),
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconCopiar,
StyleClass: "c-pureWhite ml-8",
HasRipple: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onIconClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.copyOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "4",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 actions-buttons mb-2",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: !(model.variables.isOfflineIn),
extendedProperties: {
"data-style-key": "1qQhZ2w_GEGEStMxkLLG3w"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.sendVoucherSms$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary white w-100",
visible: true,
_idProps: {
service: idService,
name: "ButtonSMS"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "Receber SMS",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.WalletFlow.Wallet_VoucherActionBlock.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "CopyToClipboard_Plugin.controller", "WTF_MBP.controller", "WTF_BP.model", "WTF_MOB.languageResources", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "CopyToClipboard_Plugin.controller$CopyToClipboard", "WTF_MOB.referencesHealth$CopyToClipboard_Plugin", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.controller$SendVoucheForSms", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_BP.model$App_VoucherRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$SendVoucherUberSms"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, CopyToClipboard_PluginController, WTF_MBPController, WTF_BPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._copyOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CopyOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var copyToClipboardVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Wallet_cards_" + model.variables.categoryLabelIn), "btn_copiar", 0, "", callContext).then(function () {
// Execute Action: CopyToClipboard
model.flush();
return CopyToClipboard_PluginController.default.copyToClipboard$Action(model.variables.app_VoucherIn.codeAttr, callContext).then(function (value) {
copyToClipboardVar.value = value;
});
}).then(function () {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Código copiado", 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Wallet_VoucherActionBlock.CopyOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._sendVoucherSms$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SendVoucherSms");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var sendVoucheForSmsVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var sendVoucherUberSmsVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("ButtonSMS"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", ("Wallet_cards_" + model.variables.categoryLabelIn), "btn_send_sms", 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((((((model.variables.app_VoucherIn.voucherTypeIdAttr === WTF_MOBModel.staticEntities.vOUCHERS_TYPE.eatsClienteAtual) || (model.variables.app_VoucherIn.voucherTypeIdAttr === WTF_MOBModel.staticEntities.vOUCHERS_TYPE.eatsNovoCliente)) || (model.variables.app_VoucherIn.voucherTypeIdAttr === WTF_MOBModel.staticEntities.vOUCHERS_TYPE.ridersClienteAtual)) || (model.variables.app_VoucherIn.voucherTypeIdAttr === WTF_MOBModel.staticEntities.vOUCHERS_TYPE.ridersNovoCliente)))) {
// Execute Action: SendVoucherUberSms
model.flush();
return WTF_MBPController.default.sendVoucherUberSms$Action(model.variables.app_VoucherIn, callContext).then(function (value) {
sendVoucherUberSmsVar.value = value;
}).then(function () {
if((sendVoucherUberSmsVar.value.successOut)) {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Enviado por SMS", 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
} else {
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action(sendVoucherUberSmsVar.value.messageOut, 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
}

});
} else {
// Execute Action: SendVoucheForSms
model.flush();
return WTF_MBPController.default.sendVoucheForSms$Action(model.variables.app_VoucherIn.codeAttr, model.variables.app_VoucherIn.voucherTypeIdAttr, callContext).then(function (value) {
sendVoucheForSmsVar.value = value;
}).then(function () {
if((sendVoucheForSmsVar.value.successOut)) {
// Execute Action: CustomFeedbackMessage7
MobileUIWidgetsController.default.customFeedbackMessage$Action("Enviado por SMS", 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
} else {
// Execute Action: CustomFeedbackMessage6
MobileUIWidgetsController.default.customFeedbackMessage$Action(sendVoucheForSmsVar.value.messageOut, 1, true, "icon-message_success", true, false, 10000, "", "-large", callContext);
}

});
}

});
}).then(function () {
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("ButtonSMS"), true, callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Wallet_VoucherActionBlock.SendVoucherSms", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("ButtonSMS"), true, callContext);
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};

Controller.prototype.copyOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._copyOnClick$Action, callContext);

};
Controller.prototype.sendVoucherSms$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._sendVoucherSms$Action, callContext);

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

