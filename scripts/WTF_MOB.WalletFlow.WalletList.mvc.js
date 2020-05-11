define("WTF_MOB.WalletFlow.WalletList.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_BP.model", "WTF_MOB.controller", "MobilePatterns.controller", "MobileUIWidgets.WidgetsInteraction.Carousel_Ext.mvc$model", "WTF_MOB.WalletFlow.WalletListItem.mvc$model", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "MobilePatterns.controller$CarouselPrevious", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.model$App_WalletCardList"], function (OutSystems, WTF_MOBModel, WTF_BPModel, WTF_MOBController, MobilePatternsController, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvcModel, WTF_MOB_WalletFlow_WalletListItem_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("list", "listIn", "list", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_WalletCardList());
}, WTF_MOBModel.App_WalletCardList), 
this.attr("_listInDataFetchStatus", "_listInDataFetchStatus", "_listInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("headerWithImage", "headerWithImageIn", "headerWithImage", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_headerWithImageInDataFetchStatus", "_headerWithImageInDataFetchStatus", "_headerWithImageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("showAll", "showAllIn", "showAll", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showAllInDataFetchStatus", "_showAllInDataFetchStatus", "_showAllInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("gotobenefit", "gotobenefitIn", "gotobenefit", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_gotobenefitInDataFetchStatus", "_gotobenefitInDataFetchStatus", "_gotobenefitInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("WtfCardGenericLabel", "wtfCardGenericLabelIn", "WtfCardGenericLabel", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_wtfCardGenericLabelInDataFetchStatus", "_wtfCardGenericLabelInDataFetchStatus", "_wtfCardGenericLabelInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvcModel.hasValidationWidgets || WTF_MOB_WalletFlow_WalletListItem_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("list" in inputs) {
this.variables.listIn = inputs.list;
if("_listInDataFetchStatus" in inputs) {
this.variables._listInDataFetchStatus = inputs._listInDataFetchStatus;
}

}

if("headerWithImage" in inputs) {
this.variables.headerWithImageIn = inputs.headerWithImage;
if("_headerWithImageInDataFetchStatus" in inputs) {
this.variables._headerWithImageInDataFetchStatus = inputs._headerWithImageInDataFetchStatus;
}

}

if("showAll" in inputs) {
this.variables.showAllIn = inputs.showAll;
if("_showAllInDataFetchStatus" in inputs) {
this.variables._showAllInDataFetchStatus = inputs._showAllInDataFetchStatus;
}

}

if("gotobenefit" in inputs) {
this.variables.gotobenefitIn = inputs.gotobenefit;
if("_gotobenefitInDataFetchStatus" in inputs) {
this.variables._gotobenefitInDataFetchStatus = inputs._gotobenefitInDataFetchStatus;
}

}

if("WtfCardGenericLabel" in inputs) {
this.variables.wtfCardGenericLabelIn = inputs.WtfCardGenericLabel;
if("_wtfCardGenericLabelInDataFetchStatus" in inputs) {
this.variables._wtfCardGenericLabelInDataFetchStatus = inputs._wtfCardGenericLabelInDataFetchStatus;
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
define("WTF_MOB.WalletFlow.WalletList.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "MobilePatterns.controller", "react", "OutSystemsReactView", "WTF_MOB.WalletFlow.WalletList.mvc$model", "WTF_MOB.WalletFlow.WalletList.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsInteraction.Carousel_Ext.mvc$view", "WTF_MOB.WalletFlow.WalletListItem.mvc$view", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "MobilePatterns.controller$CarouselPrevious", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.model$App_WalletCardList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, MobilePatternsController, React, OSView, WTF_MOB_WalletFlow_WalletList_mvc_model, WTF_MOB_WalletFlow_WalletList_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_WalletFlow_WalletListItem_mvc_view) {
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
        View.displayName = "WalletFlow.WalletList";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, WTF_MOB_WalletFlow_WalletListItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_WalletList_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_WalletList_mvc_controller;
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
visible: true,
_idProps: {
service: idService,
name: "ConfirmMarkUsedCard"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsInteraction_Carousel_Ext_mvc_view, {
inputs: {
Dots: false,
Loop: false,
Padding: 32,
StyleClasses: "no-swipe",
Center: true,
Navigation: false
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onItemChange$Action: function (indexIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.carousel_ItemChange$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "WalletCarousel",
alias: "1"
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
source: model.variables.listIn,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
"data-style-key": "b3lPIxl5ikaesCMEeSo7mw"
},
style: model.getCachedValue(idService.getId("ListItem1.Style"), function () {
return ("list-item " + (((model.variables.listIn.getCurrentRowNumber(callContext.iterationContext) === 0)) ? ("active") : ("")));
}, function () {
return model.variables.listIn.getCurrentRowNumber(callContext.iterationContext);
}),
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listInDataFetchStatus),
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_WalletFlow_WalletListItem_mvc_view, {
inputs: {
ListLength: (model.variables.listIn.length).toString(),
_listLengthInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listInDataFetchStatus),
IsOffline: model.variables.isOfflineIn,
_isOfflineInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus),
gotobenefit: model.variables.gotobenefitIn,
_gotobenefitInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._gotobenefitInDataFetchStatus),
App_WalletCard: model.variables.listIn.getCurrent(callContext.iterationContext),
_app_WalletCardInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listInDataFetchStatus),
showAll: model.variables.showAllIn,
_showAllInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showAllInDataFetchStatus),
ListCurrentRowNumber: model.variables.listIn.getCurrentRowNumber(callContext.iterationContext),
_listCurrentRowNumberInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listInDataFetchStatus),
RemoveItemOn: true,
headerWithImage: model.variables.headerWithImageIn,
_headerWithImageInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._headerWithImageInDataFetchStatus),
WtfCardGenericLabel: model.variables.wtfCardGenericLabelIn,
_wtfCardGenericLabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._wtfCardGenericLabelInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard_Action$Action(positionIn, categoryIn, controller.callContext(eventHandlerContext));
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.wtfCardGenericLabelIn), asPrimitiveValue(model.variables.headerWithImageIn), asPrimitiveValue(model.variables.showAllIn), asPrimitiveValue(model.variables.gotobenefitIn), asPrimitiveValue(model.variables.isOfflineIn), asPrimitiveValue(model.variables._wtfCardGenericLabelInDataFetchStatus), asPrimitiveValue(model.variables._headerWithImageInDataFetchStatus), asPrimitiveValue(model.variables._showAllInDataFetchStatus), asPrimitiveValue(model.variables._gotobenefitInDataFetchStatus), asPrimitiveValue(model.variables._isOfflineInDataFetchStatus), asPrimitiveValue(model.variables._listInDataFetchStatus), asPrimitiveValue(model.variables.listIn.getCurrentRowNumber(callContext.iterationContext)), asPrimitiveValue(model.variables.listIn.getCurrent(callContext.iterationContext)), asPrimitiveValue(model.variables.listIn.length)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.wtfCardGenericLabelIn), asPrimitiveValue(model.variables.headerWithImageIn), asPrimitiveValue(model.variables.showAllIn), asPrimitiveValue(model.variables.gotobenefitIn), asPrimitiveValue(model.variables.isOfflineIn), asPrimitiveValue(model.variables._wtfCardGenericLabelInDataFetchStatus), asPrimitiveValue(model.variables._headerWithImageInDataFetchStatus), asPrimitiveValue(model.variables._showAllInDataFetchStatus), asPrimitiveValue(model.variables._gotobenefitInDataFetchStatus), asPrimitiveValue(model.variables._isOfflineInDataFetchStatus), asPrimitiveValue(model.variables._listInDataFetchStatus)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.wtfCardGenericLabelIn), asPrimitiveValue(model.variables.headerWithImageIn), asPrimitiveValue(model.variables.showAllIn), asPrimitiveValue(model.variables.gotobenefitIn), asPrimitiveValue(model.variables.isOfflineIn), asPrimitiveValue(model.variables._wtfCardGenericLabelInDataFetchStatus), asPrimitiveValue(model.variables._headerWithImageInDataFetchStatus), asPrimitiveValue(model.variables._showAllInDataFetchStatus), asPrimitiveValue(model.variables._gotobenefitInDataFetchStatus), asPrimitiveValue(model.variables._isOfflineInDataFetchStatus), asPrimitiveValue(model.variables._listInDataFetchStatus), asPrimitiveValue(model.variables.listIn)]
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.WalletFlow.WalletList.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "MobilePatterns.controller", "WTF_MOB.languageResources", "WTF_MOB.WalletFlow.WalletList.mvc$controller.OnParametersChanged.EnableSwipeJS", "WTF_MOB.WalletFlow.WalletList.mvc$controller.OnParametersChanged.DisableSwipeJS", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "MobilePatterns.controller$CarouselPrevious", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.model$App_WalletCardList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, MobilePatternsController, WTF_MOBLanguageResources, WTF_MOB_WalletFlow_WalletList_mvc_controller_OnParametersChanged_EnableSwipeJS, WTF_MOB_WalletFlow_WalletList_mvc_controller_OnParametersChanged_DisableSwipeJS) {
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
Controller.prototype._carousel_ItemChange$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Carousel_ItemChange");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet_cards_swipe", model.variables.listIn.getCurrent(callContext.iterationContext).categoryLabelAttr, 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("WalletList.Carousel_ItemChange", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._removeCard_Action$Action = function (positionIn, categoryIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RemoveCard_Action");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.WalletList.RemoveCard_Action$vars"))());
vars.value.positionInLocal = positionIn;
vars.value.categoryInLocal = categoryIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: RemoveCard
return controller.removeCard$Action(vars.value.positionInLocal, vars.value.categoryInLocal, callContext).then(function () {
if((!(model.variables.listIn.isEmpty))) {
// Execute Action: CarouselUpdate
MobilePatternsController.default.carouselPrevious$Action(idService.getId("WalletCarousel"), callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.WalletList.RemoveCard_Action$vars", [{
name: "position",
attrName: "positionInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
if((model.variables.showAllIn)) {
if(((model.variables.listIn.length > 1))) {
controller.safeExecuteJSNode(WTF_MOB_WalletFlow_WalletList_mvc_controller_OnParametersChanged_EnableSwipeJS, "EnableSwipe", "OnParametersChanged", {
carousselId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("ConfirmMarkUsedCard"), OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
return OS.Flow.returnAsync();

}

}

controller.safeExecuteJSNode(WTF_MOB_WalletFlow_WalletList_mvc_controller_OnParametersChanged_DisableSwipeJS, "DisableSwipe", "OnParametersChanged", {
carousselId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("ConfirmMarkUsedCard"), OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
}).catch(function (ex) {
OS.Logger.trace("WalletList.OnParametersChanged", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.carousel_ItemChange$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._carousel_ItemChange$Action, callContext);

};
Controller.prototype.removeCard_Action$Action = function (positionIn, categoryIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._removeCard_Action$Action, callContext, positionIn, categoryIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.removeCard$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

};
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
define("WTF_MOB.WalletFlow.WalletList.mvc$controller.OnParametersChanged.EnableSwipeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.carousselId).querySelector('.carousel');

if(elem) 
    elem.classList.remove('no-swipe');
};
});
define("WTF_MOB.WalletFlow.WalletList.mvc$controller.OnParametersChanged.DisableSwipeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var elem = document.getElementById($parameters.carousselId).querySelector('.carousel');

if(elem) {
    elem.classList.add('no-swipe');
}
};
});

