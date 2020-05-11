define("WTF_MOB.WalletFlow.WalletListItem.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_BP.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.WalletFlow.Wallet_FilmeLayout.mvc$model", "WTF_MOB.WalletFlow.Wallet_ComunicacoesLayout.mvc$model", "WTF_MOB.WalletFlow.Wallet_VoucherLayout.mvc$model", "WTF_MOB.WalletFlow.Wallet_PremioLayout.mvc$model", "WTF_BP.model$App_PictureRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_VoucherRec", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.controller$VerifyNetworkStatus", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$MarkUsedCard", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_BP.model$App_WalletCardRec"], function (OutSystems, WTF_MOBModel, WTF_BPModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_WalletFlow_Wallet_FilmeLayout_mvcModel, WTF_MOB_WalletFlow_Wallet_ComunicacoesLayout_mvcModel, WTF_MOB_WalletFlow_Wallet_VoucherLayout_mvcModel, WTF_MOB_WalletFlow_Wallet_PremioLayout_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("showPopupToConfirmMarkUsedCard", "showPopupToConfirmMarkUsedCardVar", "showPopupToConfirmMarkUsedCard", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("WalletItemToMark", "walletItemToMarkVar", "WalletItemToMark", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("positionMarked", "positionMarkedVar", "positionMarked", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("categoryLabel", "categoryLabelVar", "categoryLabel", true, OS.Types.Text, function () {
return "";
}), 
this.attr("LayoutNatalIsActive", "layoutNatalIsActiveVar", "LayoutNatalIsActive", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("App_WalletCard", "app_WalletCardIn", "App_WalletCard", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_WalletCardRec());
}, WTF_BPModel.App_WalletCardRec), 
this.attr("_app_WalletCardInDataFetchStatus", "_app_WalletCardInDataFetchStatus", "_app_WalletCardInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ListLength", "listLengthIn", "ListLength", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_listLengthInDataFetchStatus", "_listLengthInDataFetchStatus", "_listLengthInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ListCurrentRowNumber", "listCurrentRowNumberIn", "ListCurrentRowNumber", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_listCurrentRowNumberInDataFetchStatus", "_listCurrentRowNumberInDataFetchStatus", "_listCurrentRowNumberInDataFetchStatus", true, OS.Types.Integer, function () {
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
this.attr("RemoveItemOn", "removeItemOnIn", "RemoveItemOn", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_removeItemOnInDataFetchStatus", "_removeItemOnInDataFetchStatus", "_removeItemOnInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets || WTF_MOB_WalletFlow_Wallet_FilmeLayout_mvcModel.hasValidationWidgets) || WTF_MOB_WalletFlow_Wallet_ComunicacoesLayout_mvcModel.hasValidationWidgets) || WTF_MOB_WalletFlow_Wallet_VoucherLayout_mvcModel.hasValidationWidgets) || WTF_MOB_WalletFlow_Wallet_PremioLayout_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("App_WalletCard" in inputs) {
this.variables.app_WalletCardIn = inputs.App_WalletCard;
if("_app_WalletCardInDataFetchStatus" in inputs) {
this.variables._app_WalletCardInDataFetchStatus = inputs._app_WalletCardInDataFetchStatus;
}

}

if("ListLength" in inputs) {
this.variables.listLengthIn = inputs.ListLength;
if("_listLengthInDataFetchStatus" in inputs) {
this.variables._listLengthInDataFetchStatus = inputs._listLengthInDataFetchStatus;
}

}

if("ListCurrentRowNumber" in inputs) {
this.variables.listCurrentRowNumberIn = inputs.ListCurrentRowNumber;
if("_listCurrentRowNumberInDataFetchStatus" in inputs) {
this.variables._listCurrentRowNumberInDataFetchStatus = inputs._listCurrentRowNumberInDataFetchStatus;
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

if("RemoveItemOn" in inputs) {
this.variables.removeItemOnIn = inputs.RemoveItemOn;
if("_removeItemOnInDataFetchStatus" in inputs) {
this.variables._removeItemOnInDataFetchStatus = inputs._removeItemOnInDataFetchStatus;
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
define("WTF_MOB.WalletFlow.WalletListItem.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "MobileUIWidgets.controller", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.WalletFlow.WalletListItem.mvc$model", "WTF_MOB.WalletFlow.WalletListItem.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.WalletFlow.Wallet_FilmeLayout.mvc$view", "WTF_MOB.WalletFlow.Wallet_ComunicacoesLayout.mvc$view", "WTF_MOB.WalletFlow.Wallet_VoucherLayout.mvc$view", "WTF_MOB.WalletFlow.Wallet_PremioLayout.mvc$view", "WTF_BP.model$App_PictureRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_VoucherRec", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.controller$VerifyNetworkStatus", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$MarkUsedCard", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_BP.model$App_WalletCardRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, MobileUIWidgetsController, WTF_MBPController, React, OSView, WTF_MOB_WalletFlow_WalletListItem_mvc_model, WTF_MOB_WalletFlow_WalletListItem_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_Wallet_FilmeLayout_mvc_view, WTF_MOB_WalletFlow_Wallet_ComunicacoesLayout_mvc_view, WTF_MOB_WalletFlow_Wallet_VoucherLayout_mvc_view, WTF_MOB_WalletFlow_Wallet_PremioLayout_mvc_view) {
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
        View.displayName = "WalletFlow.WalletListItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.WalletFlow.WalletListItem.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_Wallet_FilmeLayout_mvc_view, WTF_MOB_WalletFlow_Wallet_ComunicacoesLayout_mvc_view, WTF_MOB_WalletFlow_Wallet_VoucherLayout_mvc_view, WTF_MOB_WalletFlow_Wallet_PremioLayout_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_WalletListItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_WalletFlow_WalletListItem_mvc_controller;
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
style: "list-item-wtf",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("ML0TW7xDxEKmIAgPO32AOg.Style"), function () {
return ("wallet-card " + ((((model.variables.app_WalletCardIn.walletItemOriginIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.amigoSecreto) && model.variables.layoutNatalIsActiveVar)) ? ("christmas_background") : ("")));
}, function () {
return model.variables.app_WalletCardIn.walletItemOriginIdAttr;
}, function () {
return model.variables.layoutNatalIsActiveVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
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
style: model.getCachedValue(idService.getId("RVfvnyrg20KH+Kom12YaaQ.Style"), function () {
return ("wallet-header " + ((((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn)) ? ("-used") : ("")));
}, function () {
return model.variables.app_WalletCardIn.walletItemStatusIdAttr;
}, function () {
return model.variables.showAllIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus, model.variables._showAllInDataFetchStatus)
}, $if((model.variables.headerWithImageIn === true), false, this, function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h4",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.app_WalletCardIn.categoryLabelAttr === "Revolut"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "NhAqNUJQOUaMPMccEl1vJA"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.revolutlogo.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.app_WalletCardIn.categoryLabelAttr === "Uber Riders"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "Kx9ZltABGUuGKXSr1AW8kQ"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.uber.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.app_WalletCardIn.categoryLabelAttr === "Uber Eats"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "_giHRRNIKUa6lOw2j4LnAw"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.wallet_ubereats.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.app_WalletCardIn.categoryLabelAttr === "Cinemas"), false, this, function () {
return [React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "REvtaOlPfUipkM1YT0eRbQ"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.wallet_cinemas.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if(model.variables.removeItemOnIn, false, this, function () {
return [$if((model.variables.gotobenefitIn === true), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showPopupToConfirmRemoveCard$Action(((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn), model.variables.app_WalletCardIn.walletItemIdAttr, model.variables.listCurrentRowNumberIn, controller.callContext(eventHandlerContext));
});
;
}
},
style: "circle -big",
value: "+",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn), false, this, function () {
return [$if(((model.variables.app_WalletCardIn.categoryLabelAttr) !== ("Revolut")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showPopupToConfirmRemoveCard$Action(((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn), model.variables.app_WalletCardIn.walletItemIdAttr, model.variables.listCurrentRowNumberIn, controller.callContext(eventHandlerContext));
});
;
}
},
style: "circle delete_action",
visible: !(model.variables.isOfflineIn),
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-pureWhite va-middle",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconRecycleBinEmpty
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
uuid: "11",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
}, function () {
return [React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showPopupToConfirmRemoveCard$Action(((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn), model.variables.app_WalletCardIn.walletItemIdAttr, model.variables.listCurrentRowNumberIn, controller.callContext(eventHandlerContext));
});
;
}
},
style: "circle",
value: model.variables.listLengthIn,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._listLengthInDataFetchStatus)
})];
})];
})];
}, function () {
return [];
}))];
}, function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "h4",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("1mva_rlwqUuHN5pzNS8yew.Value"), function () {
return (((model.variables.showAllIn && ((((model.variables.app_WalletCardIn.categoryLabelAttr === model.variables.wtfCardGenericLabelIn) || (model.variables.app_WalletCardIn.categoryLabelAttr === "Equipamentos")) || (model.variables.app_WalletCardIn.categoryLabelAttr === "Filmes")) || (model.variables.app_WalletCardIn.categoryLabelAttr === "Golden")))) ? (model.variables.app_WalletCardIn.titleAttr) : (model.variables.app_WalletCardIn.categoryLabelAttr));
}, function () {
return model.variables.showAllIn;
}, function () {
return model.variables.app_WalletCardIn.categoryLabelAttr;
}, function () {
return model.variables.wtfCardGenericLabelIn;
}, function () {
return model.variables.app_WalletCardIn.titleAttr;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showAllInDataFetchStatus, model.variables._app_WalletCardInDataFetchStatus, model.variables._wtfCardGenericLabelInDataFetchStatus)
}), $if(model.variables.removeItemOnIn, false, this, function () {
return [$if((((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn) && model.variables.removeItemOnIn), false, this, function () {
return [$if(((model.variables.app_WalletCardIn.categoryLabelAttr) !== ("Revolut")), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showPopupToConfirmRemoveCard$Action(((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn), model.variables.app_WalletCardIn.walletItemIdAttr, model.variables.listCurrentRowNumberIn, controller.callContext(eventHandlerContext));
});
;
}
},
style: "circle delete_action",
visible: !(model.variables.isOfflineIn),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-pureWhite  va-middle",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconRecycleBinEmpty
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
uuid: "17",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
}, function () {
return [$if(model.variables.showAllIn, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Expression, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.showPopupToConfirmRemoveCard$Action(((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn), model.variables.app_WalletCardIn.walletItemIdAttr, model.variables.listCurrentRowNumberIn, controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("6S27vv+W10eon7lFwVxcsw.Style"), function () {
return ("circle " + ((model.variables.showAllIn) ? ("delete_action ") : (" ")));
}, function () {
return model.variables.showAllIn;
}),
value: model.getCachedValue(idService.getId("6S27vv+W10eon7lFwVxcsw.Value"), function () {
return ((((((model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)) || (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.entregue)) && model.variables.showAllIn)) ? ("Já usei") : (model.variables.listLengthIn));
}, function () {
return model.variables.app_WalletCardIn.walletItemStatusIdAttr;
}, function () {
return model.variables.showAllIn;
}, function () {
return model.variables.listLengthIn;
}),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showAllInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus, model.variables._showAllInDataFetchStatus, model.variables._listLengthInDataFetchStatus)
})];
})];
})];
}, function () {
return [];
}))];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-content",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("ucIqKnPflE6qrvgA4ieC3w.Style"), function () {
return (((model.variables.headerWithImageIn === true)) ? ("mt-16") : (""));
}, function () {
return model.variables.headerWithImageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._headerWithImageInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: model.getCachedValue(idService.getId("H7vYVyQJq02ojdHqWevu_Q.Style"), function () {
return ("label-type " + (((((model.variables.app_WalletCardIn.walletItemOriginIdAttr) !== (WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.beneficio)) && ((model.variables.app_WalletCardIn.walletItemOriginIdAttr) !== (WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.backOffice)))) ? ("prize") : ("")));
}, function () {
return model.variables.app_WalletCardIn.walletItemOriginIdAttr;
}),
value: model.getCachedValue(idService.getId("H7vYVyQJq02ojdHqWevu_Q.Value"), function () {
return (((model.variables.app_WalletCardIn.walletItemOriginIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.prizes)) ? ("Prémio do Scratch") : ((((model.variables.app_WalletCardIn.walletItemOriginIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.beneficio)) ? ("Benefício WTF") : ((((model.variables.app_WalletCardIn.walletItemOriginIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.welcomePrize)) ? ("Oferta WTF") : ((((model.variables.app_WalletCardIn.walletItemOriginIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.backOffice)) ? ("Benefício WTF") : ((((model.variables.app_WalletCardIn.walletItemOriginIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_ORIGIN.amigoSecreto)) ? ("Amigo Secreto") : ("Hot Deal"))))))))));
}, function () {
return model.variables.app_WalletCardIn.walletItemOriginIdAttr;
}),
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
})), $if(((model.variables.app_WalletCardIn.walletItemStatusIdAttr) !== (WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.erro)), false, this, function () {
return [$if((model.variables.app_WalletCardIn.categoryLabelAttr === "Filmes"), false, this, function () {
return [React.createElement(WTF_MOB_WalletFlow_Wallet_FilmeLayout_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineIn,
_isOfflineInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus),
description: model.variables.app_WalletCardIn.descriptionAttr,
_descriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
AssetId: model.variables.app_WalletCardIn.assetIdAttr,
_assetIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
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
uuid: "23",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((model.variables.app_WalletCardIn.categoryLabelAttr === "Comunicações"), false, this, function () {
return [React.createElement(WTF_MOB_WalletFlow_Wallet_ComunicacoesLayout_mvc_view, {
inputs: {
Picture: model.variables.app_WalletCardIn.app_PictureAttr,
_pictureInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
title: model.variables.app_WalletCardIn.titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
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
uuid: "24",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if(((((model.variables.app_WalletCardIn.categoryLabelAttr === "Uber Eats") || (model.variables.app_WalletCardIn.categoryLabelAttr === "Uber Riders")) || (model.variables.app_WalletCardIn.categoryLabelAttr === "Cinemas")) || (model.variables.app_WalletCardIn.categoryLabelAttr === "Revolut")), true, this, function () {
return [React.createElement(WTF_MOB_WalletFlow_Wallet_VoucherLayout_mvc_view, {
inputs: {
IsOffline: model.variables.isOfflineIn,
_isOfflineInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus),
CategoryLabel: model.variables.app_WalletCardIn.categoryLabelAttr,
_categoryLabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
title: model.variables.app_WalletCardIn.titleAttr,
_titleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
description: model.variables.app_WalletCardIn.descriptionAttr,
_descriptionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
App_Voucher: model.variables.app_WalletCardIn.app_VoucherAttr,
_app_VoucherInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
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
uuid: "25",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}), $if((((model.variables.app_WalletCardIn.categoryLabelAttr === "Equipamentos") || (model.variables.app_WalletCardIn.categoryLabelAttr === "Golden")) || (model.variables.app_WalletCardIn.categoryLabelAttr === model.variables.wtfCardGenericLabelIn)), false, this, function () {
return [React.createElement(WTF_MOB_WalletFlow_Wallet_PremioLayout_mvc_view, {
inputs: {
CategoryLabel: model.variables.app_WalletCardIn.categoryLabelAttr,
_categoryLabelInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
IsOffline: model.variables.isOfflineIn,
_isOfflineInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus),
Picture: model.variables.app_WalletCardIn.app_PictureAttr,
_pictureInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
App_Voucher: model.variables.app_WalletCardIn.app_VoucherAttr,
_app_VoucherInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
App_UserWtfPrizeAddress: model.variables.app_WalletCardIn.app_UserWtfPrizeAddressAttr,
_app_UserWtfPrizeAddressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus),
ItemId: model.variables.app_WalletCardIn.walletItemIdAttr,
_itemIdInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
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
uuid: "26",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "HKP6PpLyOkmmcK28nO2g4A"
},
style: "image pt-32",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.Warning.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "title h2 -bold pt-32 c-white",
value: "Oops, algo correu mal... Estamos a resolver",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wallet-footer",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((!(model.variables.app_WalletCardIn.expireDateTimeAttr.equals(OS.BuiltinFunctions.nullDate())) && (model.variables.app_WalletCardIn.walletItemStatusIdAttr === WTF_MOBModel.staticEntities.wALLET_ITEM_STATUS.atribuido)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("WLsqDBFcfE6uFa0ih4_L6g.Value"), function () {
return ("Disponível até " + OS.BuiltinFunctions.formatDateTime(model.variables.app_WalletCardIn.expireDateTimeAttr, "dd-MM-yyyy"));
}, function () {
return model.variables.app_WalletCardIn.expireDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Expression, {
value: ("Estado: " + model.variables.app_WalletCardIn.statusLabelAttr),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._app_WalletCardInDataFetchStatus)
})];
}))))), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "JTigk1gFqESkb5M8g34l1A"
},
showPopup: model.variables.showPopupToConfirmMarkUsedCardVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "popupMarkUsedCard"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "zJ0bCNYz30yp9cmSJNfjAA"
},
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 c-strongPink -bold",
value: "Remover",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-24",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "desc_mgm c-black mt-16",
value: "Queres mesmo dar delete? Pensa bem, é irreversível.",
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "XtKi9vrbuEO3NwOgersaXQ"
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
style: "pr-8",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "PrimaryButtonNegative"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "zbCZUna_tUCrNxc0zZfe4w"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard_Action$Action(false, controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
name: "ButtonTextPrimary3"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "GAS68C8ssUiGlTVnNISX6A"
},
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
style: "pl-8",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "KJ+liK1eC02x+9IHhb02Aw"
},
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard_Action$Action(true, controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "Remove"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Remover",
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
})))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.WalletFlow.WalletListItem.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MOB.languageResources", "WTF_BP.model$App_PictureRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_VoucherRec", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MOB.controller$VerifyNetworkStatus", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$MarkUsedCard", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_BP.model$App_WalletCardRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, MobileUIWidgetsController, WTF_MBPController, WTF_MOBLanguageResources) {
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
Controller.prototype._removeCard_Action$Action = function (confirmActionIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RemoveCard_Action");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.WalletListItem.RemoveCard_Action$vars"))());
vars.value.confirmActionInLocal = confirmActionIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var wallet_ClearCacheVar = new OS.DataTypes.VariableHolder();
var markUsedCardVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Remove"), false, callContext);
return OS.Flow.executeSequence(function () {
if(((vars.value.confirmActionInLocal === true))) {
// Execute Action: MarkUsedCard
model.flush();
return WTF_MBPController.default.markUsedCard$Action(model.variables.walletItemToMarkVar, callContext).then(function (value) {
markUsedCardVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((markUsedCardVar.value.successOut)) {
// showPopupToConfirmMarkUsedCard = False
model.variables.showPopupToConfirmMarkUsedCardVar = false;
// Trigger Event: RemoveCard
return controller.removeCard$Action(model.variables.positionMarkedVar, model.variables.categoryLabelVar, callContext).then(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet_cards_remove", model.variables.categoryLabelVar, 0, "", callContext);
}).then(function () {
// Execute Action: Wallet_ClearCache
model.flush();
return WTF_MBPController.default.wallet_ClearCache$Action(callContext).then(function (value) {
wallet_ClearCacheVar.value = value;
});
}).then(function () {
// Execute Action: EnabledButton5
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Remove"), true, callContext);
});
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(markUsedCardVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Execute Action: EnabledButton4
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Remove"), true, callContext);
}

});
});
} else {
// showPopupToConfirmMarkUsedCard = False
model.variables.showPopupToConfirmMarkUsedCardVar = false;
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Remove"), true, callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("WalletListItem.RemoveCard_Action", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Remove"), true, callContext);
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
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("Remove"), true, callContext);
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.WalletListItem.RemoveCard_Action$vars", [{
name: "confirmAction",
attrName: "confirmActionInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._showPopupToConfirmRemoveCard$Action = function (showpopupIn, walletItemIdIn, positionIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowPopupToConfirmRemoveCard");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.WalletFlow.WalletListItem.ShowPopupToConfirmRemoveCard$vars"))());
vars.value.showpopupInLocal = showpopupIn;
vars.value.walletItemIdInLocal = walletItemIdIn;
vars.value.positionInLocal = positionIn;
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.showAllIn && vars.value.showpopupInLocal))) {
// showPopupToConfirmMarkUsedCard = True
model.variables.showPopupToConfirmMarkUsedCardVar = true;
// WalletItemToMark = WalletItemId
model.variables.walletItemToMarkVar = vars.value.walletItemIdInLocal;
// positionMarked = position
model.variables.positionMarkedVar = vars.value.positionInLocal;
// categoryLabel = App_WalletCard.CategoryLabel
model.variables.categoryLabelVar = model.variables.app_WalletCardIn.categoryLabelAttr;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet_cards_pop_remove", model.variables.categoryLabelVar, 0, "", callContext);
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.WalletFlow.WalletListItem.ShowPopupToConfirmRemoveCard$vars", [{
name: "showpopup",
attrName: "showpopupInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "WalletItemId",
attrName: "walletItemIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "position",
attrName: "positionInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var wTFLayoutNatalStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: WTFLayoutNatalStatus
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTFLayoutNatalStatus", callContext).then(function (value) {
wTFLayoutNatalStatusVar.value = value;
}).then(function () {
// LayoutNatalIsActive = If
model.variables.layoutNatalIsActiveVar = (((wTFLayoutNatalStatusVar.value.valueOut === "true")) ? (true) : (false));
});
});
};

Controller.prototype.removeCard_Action$Action = function (confirmActionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._removeCard_Action$Action, callContext, confirmActionIn);

};
Controller.prototype.showPopupToConfirmRemoveCard$Action = function (showpopupIn, walletItemIdIn, positionIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showPopupToConfirmRemoveCard$Action, callContext, showpopupIn, walletItemIdIn, positionIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.removeCard$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitialize$Action(callContext);

};
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

