define("BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.mvc$model", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$model", "BALANCE_MBP.controller$CreateWalletCardsProcessV2", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_WalletCardsList", "BALANCE_MBP.controller$GetAllCards", "BALANCE_MBP.controller$DeleteCard"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBPController, BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("WalletCards", "walletCardsVar", "WalletCards", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new BALANCE_MBLOCKSModel.STR_WalletCardsList());
}, BALANCE_MBLOCKSModel.STR_WalletCardsList), 
this.attr("IdentifierSelected", "identifierSelectedVar", "IdentifierSelected", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("ShowPopup", "showPopupVar", "ShowPopup", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Application", "applicationIn", "Application", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_applicationInDataFetchStatus", "_applicationInDataFetchStatus", "_applicationInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RefreshToken", "refreshTokenIn", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_refreshTokenInDataFetchStatus", "_refreshTokenInDataFetchStatus", "_refreshTokenInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PhoneNumber", "phoneNumberIn", "PhoneNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", "_phoneNumberInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AssociationID", "associationIDIn", "AssociationID", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_associationIDInDataFetchStatus", "_associationIDInDataFetchStatus", "_associationIDInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowAddNewCardBtn", "showAddNewCardBtnIn", "ShowAddNewCardBtn", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showAddNewCardBtnInDataFetchStatus", "_showAddNewCardBtnInDataFetchStatus", "_showAddNewCardBtnInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("RemoveLink_Class", "removeLink_ClassIn", "RemoveLink_Class", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_removeLink_ClassInDataFetchStatus", "_removeLink_ClassInDataFetchStatus", "_removeLink_ClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("EmptyCardsLabel_Class", "emptyCardsLabel_ClassIn", "EmptyCardsLabel_Class", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_emptyCardsLabel_ClassInDataFetchStatus", "_emptyCardsLabel_ClassInDataFetchStatus", "_emptyCardsLabel_ClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("EmptyCardsLabel", "emptyCardsLabelIn", "EmptyCardsLabel", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_emptyCardsLabelInDataFetchStatus", "_emptyCardsLabelInDataFetchStatus", "_emptyCardsLabelInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PersonName", "personNameIn", "PersonName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_personNameInDataFetchStatus", "_personNameInDataFetchStatus", "_personNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ContactEmail", "contactEmailIn", "ContactEmail", true, OS.Types.Email, function () {
return "";
}), 
this.attr("_contactEmailInDataFetchStatus", "_contactEmailInDataFetchStatus", "_contactEmailInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Application" in inputs) {
this.variables.applicationIn = inputs.Application;
if("_applicationInDataFetchStatus" in inputs) {
this.variables._applicationInDataFetchStatus = inputs._applicationInDataFetchStatus;
}

}

if("RefreshToken" in inputs) {
this.variables.refreshTokenIn = inputs.RefreshToken;
if("_refreshTokenInDataFetchStatus" in inputs) {
this.variables._refreshTokenInDataFetchStatus = inputs._refreshTokenInDataFetchStatus;
}

}

if("PhoneNumber" in inputs) {
this.variables.phoneNumberIn = inputs.PhoneNumber;
if("_phoneNumberInDataFetchStatus" in inputs) {
this.variables._phoneNumberInDataFetchStatus = inputs._phoneNumberInDataFetchStatus;
}

}

if("AssociationID" in inputs) {
this.variables.associationIDIn = inputs.AssociationID;
if("_associationIDInDataFetchStatus" in inputs) {
this.variables._associationIDInDataFetchStatus = inputs._associationIDInDataFetchStatus;
}

}

if("ShowAddNewCardBtn" in inputs) {
this.variables.showAddNewCardBtnIn = inputs.ShowAddNewCardBtn;
if("_showAddNewCardBtnInDataFetchStatus" in inputs) {
this.variables._showAddNewCardBtnInDataFetchStatus = inputs._showAddNewCardBtnInDataFetchStatus;
}

}

if("RemoveLink_Class" in inputs) {
this.variables.removeLink_ClassIn = inputs.RemoveLink_Class;
if("_removeLink_ClassInDataFetchStatus" in inputs) {
this.variables._removeLink_ClassInDataFetchStatus = inputs._removeLink_ClassInDataFetchStatus;
}

}

if("EmptyCardsLabel_Class" in inputs) {
this.variables.emptyCardsLabel_ClassIn = inputs.EmptyCardsLabel_Class;
if("_emptyCardsLabel_ClassInDataFetchStatus" in inputs) {
this.variables._emptyCardsLabel_ClassInDataFetchStatus = inputs._emptyCardsLabel_ClassInDataFetchStatus;
}

}

if("EmptyCardsLabel" in inputs) {
this.variables.emptyCardsLabelIn = inputs.EmptyCardsLabel;
if("_emptyCardsLabelInDataFetchStatus" in inputs) {
this.variables._emptyCardsLabelInDataFetchStatus = inputs._emptyCardsLabelInDataFetchStatus;
}

}

if("PersonName" in inputs) {
this.variables.personNameIn = inputs.PersonName;
if("_personNameInDataFetchStatus" in inputs) {
this.variables._personNameInDataFetchStatus = inputs._personNameInDataFetchStatus;
}

}

if("ContactEmail" in inputs) {
this.variables.contactEmailIn = inputs.ContactEmail;
if("_contactEmailInDataFetchStatus" in inputs) {
this.variables._contactEmailInDataFetchStatus = inputs._contactEmailInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.mvc$view", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "react", "OutSystemsReactView", "BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.mvc$model", "BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.mvc$controller", "OutSystemsReactWidgets", "BALANCE_MBLOCKS.WalleCardsBlock.ShowImage.mvc$view", "BALANCE_MBP.controller$CreateWalletCardsProcessV2", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_WalletCardsList", "BALANCE_MBP.controller$GetAllCards", "BALANCE_MBP.controller$DeleteCard"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, React, OSView, BALANCE_MBLOCKS_WalleCardsBlock_ManageCardsV2_mvc_model, BALANCE_MBLOCKS_WalleCardsBlock_ManageCardsV2_mvc_controller, OSWidgets, BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_view) {
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
        View.displayName = "WalleCardsBlock.ManageCardsV2";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return BALANCE_MBLOCKS_WalleCardsBlock_ManageCardsV2_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return BALANCE_MBLOCKS_WalleCardsBlock_ManageCardsV2_mvc_controller;
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
extendedProperties: {
"data-style-key": "98BJCua6zkW0+Xc6ohxzDw"
},
style: "main",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.walletCardsVar.isEmpty, false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: (model.variables.emptyCardsLabel_ClassIn + " pa-16"),
value: model.variables.emptyCardsLabelIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emptyCardsLabel_ClassInDataFetchStatus),
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._emptyCardsLabelInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"data-style-key": "qZ6BrTe+A0WPYsW5qAIJRQ"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.walletCardsVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
"data-style-key": "UA6xgJZPnE2onYzUM2hACw"
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-white text-left pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "a_oG06USbkyP0Wn5yejFHg"
},
gridProperties: {
classes: "ThemeGrid_Width2"
},
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).hasBankAttr, false, this, function () {
return [React.createElement(BALANCE_MBLOCKS_WalleCardsBlock_ShowImage_mvc_view, {
inputs: {
MimeType: model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_TypeAttr,
Classes: "",
BinaryData: model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_BinaryAttr
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [$if((model.variables.walletCardsVar.getCurrent(callContext.iterationContext).paymentTypeIdAttr === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.mASTECARD), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BALANCE_MBLOCKS.mastercard.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), $if((model.variables.walletCardsVar.getCurrent(callContext.iterationContext).paymentTypeIdAttr === BALANCE_MBLOCKSModel.staticEntities.pAYMENT_TYPE.vISA), false, this, function () {
return [React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/BALANCE_MBLOCKS.visa.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "1LuxW66NiE+QFZAdTOpr7g"
},
gridProperties: {
classes: "ThemeGrid_Width10 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "t9M0CSLq4UGZfqn+SyNSQw"
},
style: "-ellipsis a-flexCardHighlightContent -medium",
value: model.variables.walletCardsVar.getCurrent(callContext.iterationContext).codeNumberAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "J7HD8bmceEmRdI+GFZRLGw"
},
style: "mt-8 text-right",
visible: true,
_idProps: {
service: idService,
name: "UnderlinedLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "span",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "dgBV1hI8QE+w9+mPYPNTxA"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard_ShowPopup$Action(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).identifierAttr, controller.callContext(eventHandlerContext));
});
;
},
style: model.variables.removeLink_ClassIn,
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._removeLink_ClassInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: "remover",
_idProps: {
service: idService,
name: "Link"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._removeLink_ClassInDataFetchStatus), asPrimitiveValue(model.variables.removeLink_ClassIn), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).codeNumberAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).paymentTypeIdAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_BinaryAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).content_TypeAttr), asPrimitiveValue(model.variables.walletCardsVar.getCurrent(callContext.iterationContext).hasBankAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._removeLink_ClassInDataFetchStatus), asPrimitiveValue(model.variables.removeLink_ClassIn)]
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "r8k+JZeAdk2QD_KcrMwA6g"
},
gridProperties: {
classes: "ThemeGrid_Width8 ThemeGrid_MarginGutter"
},
style: "pa-16",
visible: model.variables.showAddNewCardBtnIn,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showAddNewCardBtnInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "l5XXRllk+EazPONYCIRVAw"
},
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.createWalletCard$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "NewWallet"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Adicionar novo",
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "CVDm7a3+vUq9oHJDtMCOrA"
},
showPopup: model.variables.showPopupVar,
style: "popup-dialog",
_idProps: {
service: idService,
name: "RemoveCard_Popup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "Le8V3ngg4UiXfPGt1fIaCg"
},
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-strongPink -bold",
value: "Remover método \r\nde pagamento",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Tens a certeza que queres remover este cartão? Esta ação é imediata e não poderás voltar atrás.",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
name: "SecondaryButton2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "75o6bNhO8U+GGF4VLuVZOw"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard_ShowPopup$Action(OS.BuiltinFunctions.integerToLongInteger(0), controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Cancelar",
_idProps: {
service: idService,
name: "ButtonTextSecondary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "odLdkoN7zU6BCBCj7YTtsQ"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.removeCard_Confirm$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "Copy"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Remover",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
})))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.mvc$controller", ["OutSystems", "BALANCE_MBLOCKS.model", "BALANCE_MBLOCKS.controller", "BALANCE_MBP.controller", "BALANCE_MBLOCKS.languageResources", "BALANCE_MBP.controller$CreateWalletCardsProcessV2", "BALANCE_MBLOCKS.referencesHealth", "BALANCE_MBLOCKS.referencesHealth$BALANCE_MBP", "BALANCE_MBLOCKS.model$STR_WalletCardsList", "BALANCE_MBP.controller$GetAllCards", "BALANCE_MBP.controller$DeleteCard"], function (OutSystems, BALANCE_MBLOCKSModel, BALANCE_MBLOCKSController, BALANCE_MBPController, BALANCE_MBLOCKSLanguageResources) {
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
Controller.prototype._removeCard_ShowPopup$Action = function (identifierIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RemoveCard_ShowPopup");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.RemoveCard_ShowPopup$vars"))());
vars.value.identifierInLocal = identifierIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Event_RemoveCard_ShowPopup
return controller.event_RemoveCard_ShowPopup$Action(callContext).then(function () {
// IdentifierSelected = Identifier
model.variables.identifierSelectedVar = vars.value.identifierInLocal;
// ShowPopup = notShowPopup
model.variables.showPopupVar = !(model.variables.showPopupVar);
});
});
};
Controller.registerVariableGroupType("BALANCE_MBLOCKS.WalleCardsBlock.ManageCardsV2.RemoveCard_ShowPopup$vars", [{
name: "Identifier",
attrName: "identifierInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._createWalletCard$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CreateWalletCard");
callContext = controller.callContext(callContext);
var createWalletCardsProcessV2Var = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: Event_CreateWalletCard_Start
return controller.event_CreateWalletCard_Start$Action(callContext).then(function () {
// Execute Action: CreateWalletCardsProcessV2
model.flush();
return BALANCE_MBPController.default.createWalletCardsProcessV2$Action(model.variables.refreshTokenIn, model.variables.associationIDIn, model.variables.phoneNumberIn, model.variables.personNameIn, model.variables.applicationIn, model.variables.contactEmailIn, callContext).then(function (value) {
createWalletCardsProcessV2Var.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((createWalletCardsProcessV2Var.value.successOut)) {
// Trigger Event: Event_CreateWalletCard_End_Success
return controller.event_CreateWalletCard_End_Success$Action(callContext).then(function () {
// Destination: /BALANCE_MBLOCKS/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(createWalletCardsProcessV2Var.value.paymentUrlOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
} else {
// Trigger Event: Event_CreateWalletCard_End_Error
return controller.event_CreateWalletCard_End_Error$Action(createWalletCardsProcessV2Var.value.messageOut, callContext);
}

});
});
});
};
Controller.prototype._onInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var getAllCardsVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetAllCards
model.flush();
return BALANCE_MBPController.default.getAllCards$Action(model.variables.refreshTokenIn, model.variables.applicationIn, model.variables.phoneNumberIn, model.variables.associationIDIn, callContext).then(function (value) {
getAllCardsVar.value = value;
}).then(function () {
// WalletCards = GetAllCards.WalletCards
model.variables.walletCardsVar = getAllCardsVar.value.walletCardsOut;
});
});
};
Controller.prototype._removeCard_Confirm$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("RemoveCard_Confirm");
callContext = controller.callContext(callContext);
var deleteCardVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// ShowPopup = False
model.variables.showPopupVar = false;
// Trigger Event: Event_RemoveCard_Confirm
return controller.event_RemoveCard_Confirm$Action(callContext).then(function () {
// Execute Action: DeleteCard
model.flush();
return BALANCE_MBPController.default.deleteCard$Action(model.variables.refreshTokenIn, model.variables.identifierSelectedVar, model.variables.applicationIn, model.variables.phoneNumberIn, model.variables.associationIDIn, callContext).then(function (value) {
deleteCardVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((deleteCardVar.value.successOut)) {
// Trigger Event: Event_RemoveCard_End_Success
return controller.event_RemoveCard_End_Success$Action(callContext).then(function () {
// Execute Action: OnInitialize
return controller._onInitialize$Action(callContext);
});
} else {
// Trigger Event: Event_RemoveCard_End_Error
return controller.event_RemoveCard_End_Error$Action(callContext);
}

});
});
});
};

Controller.prototype.removeCard_ShowPopup$Action = function (identifierIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._removeCard_ShowPopup$Action, callContext, identifierIn);

};
Controller.prototype.createWalletCard$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._createWalletCard$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.removeCard_Confirm$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._removeCard_Confirm$Action, callContext);

};
Controller.prototype.event_CreateWalletCard_End_Error$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_CreateWalletCard_End_Success$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_RemoveCard_ShowPopup$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_RemoveCard_End_Success$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_RemoveCard_Confirm$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_RemoveCard_End_Error$Action = function () {
return Promise.resolve();
};
Controller.prototype.event_CreateWalletCard_Start$Action = function () {
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
return BALANCE_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, BALANCE_MBLOCKSLanguageResources);
});

