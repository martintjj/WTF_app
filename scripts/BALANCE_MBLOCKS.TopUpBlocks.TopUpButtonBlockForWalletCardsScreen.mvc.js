define("BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "MobileUIWidgets.controller", "CON_GLOBE.model", "BALANCE_MBP.controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "MobileUIWidgets.controller$Error_V2", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "CON_GLOBE.model$ValidatePersonInfo_OutputRec", "BALANCE_MBLOCKS.referencesHealth$CON_GLOBE", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, MobileUIWidgetsController, CON_GLOBEModel, BALANCE_MBPController, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsDestroyed", "isDestroyedVar", "IsDestroyed", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsButtonEnabled", "isButtonEnabledIn", "IsButtonEnabled", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isButtonEnabledInDataFetchStatus", "_isButtonEnabledInDataFetchStatus", "_isButtonEnabledInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PaymentMethodMinValue", "paymentMethodMinValueIn", "PaymentMethodMinValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_paymentMethodMinValueInDataFetchStatus", "_paymentMethodMinValueInDataFetchStatus", "_paymentMethodMinValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PaymentMethodMaxValue", "paymentMethodMaxValueIn", "PaymentMethodMaxValue", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_paymentMethodMaxValueInDataFetchStatus", "_paymentMethodMaxValueInDataFetchStatus", "_paymentMethodMaxValueInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Amount", "amountIn", "Amount", true, OS.Types.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}), 
this.attr("_amountInDataFetchStatus", "_amountInDataFetchStatus", "_amountInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RefreshToken", "refreshTokenIn", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_refreshTokenInDataFetchStatus", "_refreshTokenInDataFetchStatus", "_refreshTokenInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AmountLowerThanMinErrorMessage", "amountLowerThanMinErrorMessageIn", "AmountLowerThanMinErrorMessage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_amountLowerThanMinErrorMessageInDataFetchStatus", "_amountLowerThanMinErrorMessageInDataFetchStatus", "_amountLowerThanMinErrorMessageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AmountGreaterThanMaxErrorMessage", "amountGreaterThanMaxErrorMessageIn", "AmountGreaterThanMaxErrorMessage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_amountGreaterThanMaxErrorMessageInDataFetchStatus", "_amountGreaterThanMaxErrorMessageInDataFetchStatus", "_amountGreaterThanMaxErrorMessageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AmountIsZeroErrorMessage", "amountIsZeroErrorMessageIn", "AmountIsZeroErrorMessage", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_amountIsZeroErrorMessageInDataFetchStatus", "_amountIsZeroErrorMessageInDataFetchStatus", "_amountIsZeroErrorMessageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Application", "applicationIn", "Application", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationInDataFetchStatus", "_applicationInDataFetchStatus", "_applicationInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("CustomClass", "customClassIn", "CustomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_customClassInDataFetchStatus", "_customClassInDataFetchStatus", "_customClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Step", "stepIn", "Step", true, OS.Types.Integer, function () {
return 1;
}), 
this.attr("_stepInDataFetchStatus", "_stepInDataFetchStatus", "_stepInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AssociationId", "associationIdIn", "AssociationId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_associationIdInDataFetchStatus", "_associationIdInDataFetchStatus", "_associationIdInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsButtonEnabled" in inputs) {
this.variables.isButtonEnabledIn = inputs.IsButtonEnabled;
if("_isButtonEnabledInDataFetchStatus" in inputs) {
this.variables._isButtonEnabledInDataFetchStatus = inputs._isButtonEnabledInDataFetchStatus;
}

}

if("PaymentMethodMinValue" in inputs) {
this.variables.paymentMethodMinValueIn = inputs.PaymentMethodMinValue;
if("_paymentMethodMinValueInDataFetchStatus" in inputs) {
this.variables._paymentMethodMinValueInDataFetchStatus = inputs._paymentMethodMinValueInDataFetchStatus;
}

}

if("PaymentMethodMaxValue" in inputs) {
this.variables.paymentMethodMaxValueIn = inputs.PaymentMethodMaxValue;
if("_paymentMethodMaxValueInDataFetchStatus" in inputs) {
this.variables._paymentMethodMaxValueInDataFetchStatus = inputs._paymentMethodMaxValueInDataFetchStatus;
}

}

if("Amount" in inputs) {
this.variables.amountIn = inputs.Amount;
if("_amountInDataFetchStatus" in inputs) {
this.variables._amountInDataFetchStatus = inputs._amountInDataFetchStatus;
}

}

if("RefreshToken" in inputs) {
this.variables.refreshTokenIn = inputs.RefreshToken;
if("_refreshTokenInDataFetchStatus" in inputs) {
this.variables._refreshTokenInDataFetchStatus = inputs._refreshTokenInDataFetchStatus;
}

}

if("AmountLowerThanMinErrorMessage" in inputs) {
this.variables.amountLowerThanMinErrorMessageIn = inputs.AmountLowerThanMinErrorMessage;
if("_amountLowerThanMinErrorMessageInDataFetchStatus" in inputs) {
this.variables._amountLowerThanMinErrorMessageInDataFetchStatus = inputs._amountLowerThanMinErrorMessageInDataFetchStatus;
}

}

if("AmountGreaterThanMaxErrorMessage" in inputs) {
this.variables.amountGreaterThanMaxErrorMessageIn = inputs.AmountGreaterThanMaxErrorMessage;
if("_amountGreaterThanMaxErrorMessageInDataFetchStatus" in inputs) {
this.variables._amountGreaterThanMaxErrorMessageInDataFetchStatus = inputs._amountGreaterThanMaxErrorMessageInDataFetchStatus;
}

}

if("AmountIsZeroErrorMessage" in inputs) {
this.variables.amountIsZeroErrorMessageIn = inputs.AmountIsZeroErrorMessage;
if("_amountIsZeroErrorMessageInDataFetchStatus" in inputs) {
this.variables._amountIsZeroErrorMessageInDataFetchStatus = inputs._amountIsZeroErrorMessageInDataFetchStatus;
}

}

if("Application" in inputs) {
this.variables.applicationIn = inputs.Application;
if("_applicationInDataFetchStatus" in inputs) {
this.variables._applicationInDataFetchStatus = inputs._applicationInDataFetchStatus;
}

}

if("CustomClass" in inputs) {
this.variables.customClassIn = inputs.CustomClass;
if("_customClassInDataFetchStatus" in inputs) {
this.variables._customClassInDataFetchStatus = inputs._customClassInDataFetchStatus;
}

}

if("Step" in inputs) {
this.variables.stepIn = inputs.Step;
if("_stepInDataFetchStatus" in inputs) {
this.variables._stepInDataFetchStatus = inputs._stepInDataFetchStatus;
}

}

if("AssociationId" in inputs) {
this.variables.associationIdIn = inputs.AssociationId;
if("_associationIdInDataFetchStatus" in inputs) {
this.variables._associationIdInDataFetchStatus = inputs._associationIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "MobileUIWidgets.controller", "CON_GLOBE.model", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen.mvc$model", "BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen.mvc$controller", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.controller$Error_V2", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "CON_GLOBE.model$ValidatePersonInfo_OutputRec", "BALANCE_MBLOCKS.referencesHealth$CON_GLOBE", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, MobileUIWidgetsController, CON_GLOBEModel, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvc_model, BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvc_controller, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, OSWidgets) {
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
        View.displayName = "TopUpBlocks.TopUpButtonBlockForWalletCardsScreen";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_TopUpBlocks_TopUpButtonBlockForWalletCardsScreen_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
inputs: {},
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
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.variables.isButtonEnabledIn,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onClick_TopUp$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("btnTopUp.Style"), function () {
return (((model.variables.customClassIn === "")) ? ("btn a-btn btn-primary -primary w-100") : (model.variables.customClassIn));
}, function () {
return model.variables.customClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "btnTopUp"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isButtonEnabledInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._customClassInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("TruozKTM+kuY1z2ZCsZ5DA.Value"), function () {
return (((model.variables.stepIn === 1)) ? ("Carregar") : ("Cancelar pagamento"));
}, function () {
return model.variables.stepIn;
}),
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._stepInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.stepIn), asPrimitiveValue(model.variables.customClassIn), asPrimitiveValue(model.variables._stepInDataFetchStatus), asPrimitiveValue(model.variables._customClassInDataFetchStatus), asPrimitiveValue(model.variables._isButtonEnabledInDataFetchStatus), asPrimitiveValue(model.variables.isButtonEnabledIn)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "MobileUIWidgets.controller", "CON_GLOBE.model", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "MobileUIWidgets.controller$Error_V2", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$MobileUIWidgets", "CON_GLOBE.model$ValidatePersonInfo_OutputRec", "BALANCE_MBLOCKS.referencesHealth$CON_GLOBE", "BALANCE_MBP.controller$FormatCurrency_MBP", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, MobileUIWidgetsController, CON_GLOBEModel, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.validatePersonInfo_BP$ServerAction = function (refreshTokenIn, associationIdIn, processIn, iBANIn, contactIn, contactTypeIn, postalCodeIn, iMEIIn, birthDateIn, documentNumberIn, nIFIn, timeoutIn, documentTypeIn, applicationIn, callContext) {
var controller = this.controller;
var inputs = {
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
AssociationId: OS.DataTypes.JSConversions.basicTypeToJS(associationIdIn, OS.Types.LongInteger),
Process: OS.DataTypes.JSConversions.basicTypeToJS(processIn, OS.Types.Text),
IBAN: OS.DataTypes.JSConversions.basicTypeToJS(iBANIn, OS.Types.Text),
Contact: OS.DataTypes.JSConversions.basicTypeToJS(contactIn, OS.Types.Text),
ContactType: OS.DataTypes.JSConversions.basicTypeToJS(contactTypeIn, OS.Types.Text),
PostalCode: OS.DataTypes.JSConversions.basicTypeToJS(postalCodeIn, OS.Types.Text),
IMEI: OS.DataTypes.JSConversions.basicTypeToJS(iMEIIn, OS.Types.Text),
BirthDate: OS.DataTypes.JSConversions.basicTypeToJS(birthDateIn, OS.Types.Text),
DocumentNumber: OS.DataTypes.JSConversions.basicTypeToJS(documentNumberIn, OS.Types.Text),
NIF: OS.DataTypes.JSConversions.basicTypeToJS(nIFIn, OS.Types.Text),
Timeout: OS.DataTypes.JSConversions.basicTypeToJS(timeoutIn, OS.Types.Integer),
DocumentType: OS.DataTypes.JSConversions.basicTypeToJS(documentTypeIn, OS.Types.Text),
Application: OS.DataTypes.JSConversions.basicTypeToJS(applicationIn, OS.Types.Text)
};
return controller.callServerAction("ValidatePersonInfo_BP", "screenservices/BALANCE_MBLOCKS/TopUpBlocks/TopUpButtonBlockForWalletCardsScreen/ActionValidatePersonInfo_BP", "OlyVE4lFdvBEmilB9U+0Ew", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen$rssespaceservices_bp_ActionValidatePersonInfo_BP"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.dataOutputOut = CON_GLOBEModel.ValidatePersonInfo_OutputRec.fromJS(outputs.DataOutput);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("BALANCE_MBLOCKS.TopUpBlocks.TopUpButtonBlockForWalletCardsScreen$rssespaceservices_bp_ActionValidatePersonInfo_BP", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "DataOutput",
attrName: "dataOutputOut",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new CON_GLOBEModel.ValidatePersonInfo_OutputRec();
},
complexType: CON_GLOBEModel.ValidatePersonInfo_OutputRec
}]);

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// IsDestroyed = True
model.variables.isDestroyedVar = true;
};
Controller.prototype._onClick_TopUp$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnClick_TopUp");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validatePersonInfo_BPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Step
return OS.Flow.executeSequence(function () {
if(((model.variables.stepIn === 2))) {
// Trigger Event: Event_ClickCarregarStep2
return controller.event_ClickCarregarStep2$Action(callContext);
} else {
return OS.Flow.executeSequence(function () {
if((model.variables.stepIn === 1)) {
// Trigger Event: Event_ClickCarregarStep1
return controller.event_ClickCarregarStep1$Action(callContext).then(function () {
// Execute Action: ValidatePersonInfo_BP
model.flush();
return controller.validatePersonInfo_BP$ServerAction(model.variables.refreshTokenIn, model.variables.associationIdIn, "ValidatePersonInfo", "", "", "", "", "", "", "", "", 0, "", model.variables.applicationIn, callContext).then(function (value) {
validatePersonInfo_BPVar.value = value;
});
}).then(function () {
// Amount < MinValue?
return OS.Flow.executeSequence(function () {
if((model.variables.amountIn.lt(model.variables.paymentMethodMinValueIn))) {
// Execute Action: Error_AmountLowerThanMin
MobileUIWidgetsController.default.error_V2$Action(OS.BuiltinFunctions.replace(model.variables.amountLowerThanMinErrorMessageIn, "[MinValue]", BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.paymentMethodMinValueIn, callContext.withoutIterationContext()).resultOut), true, callContext);
} else {
// Amount >= MaxValue?
return OS.Flow.executeSequence(function () {
if((model.variables.amountIn.gte(model.variables.paymentMethodMaxValueIn))) {
// Execute Action: Error_AmountGreaterThanMax
MobileUIWidgetsController.default.error_V2$Action(OS.BuiltinFunctions.replace(model.variables.amountGreaterThanMaxErrorMessageIn, "[MaxValue]", BALANCE_MBPController.default.formatCurrency_MBP$Action(model.variables.paymentMethodMaxValueIn, callContext.withoutIterationContext()).resultOut), true, callContext);
} else {
return OS.Flow.executeSequence(function () {
if((model.variables.amountIn.equals(OS.BuiltinFunctions.integerToDecimal(0)))) {
// Execute Action: Error_AmountIsZero
MobileUIWidgetsController.default.error_V2$Action(OS.BuiltinFunctions.replace(model.variables.amountIsZeroErrorMessageIn, "[MinValue]", BALANCE_MBPController.default.formatCurrency_MBP$Action(OS.BuiltinFunctions.integerToDecimal(0), callContext.withoutIterationContext()).resultOut), true, callContext);
} else {
// Trigger Event: Event_ClickCarregarStep1Success
return controller.event_ClickCarregarStep1Success$Action(callContext).then(function () {
return OS.Flow.returnAsync();

});
}

});
}

});
}

});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isDestroyedVar))) {
// Trigger Event: EndLoading
return controller.endLoading$Action(callContext);
}

});
});
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("TopUpButtonBlockForWalletCardsScreen.OnClick_TopUp", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.isDestroyedVar)) {
return OS.Flow.returnAsync();

} else {
// Trigger Event: EndLoading_Exceptoion
return controller.endLoading$Action(callContext).then(function () {
return OS.Flow.returnAsync();

});
}

});
});
}

throw ex;
});
};

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onClick_TopUp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onClick_TopUp$Action, callContext);

};
Controller.prototype.event_ClickCarregarStep1Success$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_ClickCarregarStep1$Action = function () {
return Promise.resolve();
};
Controller.prototype.endLoading$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_ClickCarregarStep2$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onDestroy$Action(callContext);

};
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return BALANCE_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, BALANCE_MBLOCKSLanguageResources);
});

