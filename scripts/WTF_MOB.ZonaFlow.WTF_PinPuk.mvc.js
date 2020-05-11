define("WTF_MOB.ZonaFlow.WTF_PinPuk.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "ACCOUNTINFO_MBP.controller", "WTF_MBP.model", "CopyToClipboard_Plugin.controller", "CommonPlugin.controller", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.mvc$model", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "ACCOUNTINFO_MBP.controller$GetPINPUKInfo", "WTF_MOB.referencesHealth$ACCOUNTINFO_MBP", "WTF_MBP.controller$setActivityLog_PINPUK", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$Analytics_SendEvent", "CopyToClipboard_Plugin.controller$CopyToClipboard", "WTF_MOB.referencesHealth$CopyToClipboard_Plugin", "CommonPlugin.controller$IsCordovaDefined", "WTF_MOB.referencesHealth$CommonPlugin", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, ACCOUNTINFO_MBPController, WTF_MBPModel, CopyToClipboard_PluginController, CommonPluginController, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, WTF_MOB_Common_Waiting_mvcModel, ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvcModel, MobileUIWidgets_WidgetsContent_CardFlex_mvcModel, WTF_MOB_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;
var GetUserWTFAggrRec = (function (_super) {
__extends(GetUserWTFAggrRec, _super);
function GetUserWTFAggrRec(defaults) {
_super.apply(this, arguments);
}
GetUserWTFAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetUserWTFAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetUserWTFAggrRec.init();
return GetUserWTFAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SIMNumber", "sIMNumberVar", "SIMNumber", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PIN", "pINVar", "PIN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("PUK", "pUKVar", "PUK", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ServiceId", "serviceIdVar", "ServiceId", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("ApplicationName", "applicationNameVar", "ApplicationName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("MSISDN", "mSISDNVar", "MSISDN", true, OS.Types.Text, function () {
return "";
}), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("CVP_Show", "cVP_ShowVar", "CVP_Show", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("CVP_Code", "cVP_CodeVar", "CVP_Code", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Association", "associationVar", "Association", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.Local_ASSOCIATIONRec());
}, WTF_MBPModel.Local_ASSOCIATIONRec), 
this.attr("afterReady", "afterReadyVar", "afterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("GetUserWTF", "getUserWTFAggr", "getUserWTFAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetUserWTFAggrRec());
}, GetUserWTFAggrRec)
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
Model._hasValidationWidgetsValue = (((((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsContent_CardFlex_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.WTF_PinPuk.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "ACCOUNTINFO_MBP.controller", "WTF_MBP.model", "CopyToClipboard_Plugin.controller", "CommonPlugin.controller", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.WTF_PinPuk.mvc$model", "WTF_MOB.ZonaFlow.WTF_PinPuk.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "ACCOUNTINFO_MBLOCKS.PinPukBlocks.PinPukBlock.mvc$view", "MobileUIWidgets.WidgetsContent.CardFlex.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "ACCOUNTINFO_MBP.controller$GetPINPUKInfo", "WTF_MOB.referencesHealth$ACCOUNTINFO_MBP", "WTF_MBP.controller$setActivityLog_PINPUK", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$Analytics_SendEvent", "CopyToClipboard_Plugin.controller$CopyToClipboard", "WTF_MOB.referencesHealth$CopyToClipboard_Plugin", "CommonPlugin.controller$IsCordovaDefined", "WTF_MOB.referencesHealth$CommonPlugin", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, ACCOUNTINFO_MBPController, WTF_MBPModel, CopyToClipboard_PluginController, CommonPluginController, React, OSView, WTF_MOB_ZonaFlow_WTF_PinPuk_mvc_model, WTF_MOB_ZonaFlow_WTF_PinPuk_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, WTF_MOB_Common_BottomBar_mvc_view) {
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
        View.displayName = "ZonaFlow.WTF_PinPuk";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.WTF_PinPuk.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvc_view, MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, WTF_MOB_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_PinPuk_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_WTF_PinPuk_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
PageType: "Consulta",
HasOverflowHidden: true,
PageTitle: "Pin Puk",
ScreenName: "WTF_PinPuk",
PageSection: "Pin Puk",
ContentClass: "b-transparent"
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
header: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_HeaderLvl2_mvc_view, {
inputs: {
Title: "Cartão SIM"
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
inputs: {
IsLoading: model.variables.isLoadingVar
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(model.variables.afterReadyVar, false, this, function () {
return [React.createElement(ACCOUNTINFO_MBLOCKS_PinPukBlocks_PinPukBlock_mvc_view, {
inputs: {
CopyToClipboardTextSIM: "Número do cartão SIM copiado. Podes colar noutra aplicação.",
TitleCustomStyleClass: "a-textRead -bold",
PUK: model.variables.pUKVar,
ArrowCustomStyleClass: "c-strongPink",
ValueCustomStyleClass: "a-textRead -bold c-black",
SIMNumber: model.variables.sIMNumberVar,
CopyToClipboardTextPIN: "PIN copiado. Podes colar noutra aplicação.",
IntroText: "Consulta os códigos de segurança do teu telemóvel",
CopyToClipboardTextPUK: "PUK copiado. Podes colar noutra aplicação.",
CustomClass: "-communication",
PIN: model.variables.pINVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
event_CopyToClipboard$Action: function (typeIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.pinPukBlockEvent_CopyToClipboard$Action(typeIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "ph-16",
visible: (model.variables.associationVar.roleNameAttr === "administrator"),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_CardFlex_mvc_view, {
inputs: {
HasLeftSide: false,
HasRipple: false,
RightStyleClass: "-vCenter text-right",
StyleClass: "-paddingEqual -communication"
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
uuid: "5",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftPlaceholder: PlaceholderContent.Empty,
contentPlaceHolder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Text, {
style: "a-textRead -bold",
text: ["CVP"],
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
rightPLaceholder: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "SecondaryButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-style-key": "g8yrp50Y6UKks0sWsQg9XQ"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.toggleShowCVP$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Ver",
_idProps: {
service: idService,
name: "ButtonTextSecondary"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: []
}))];
}, function () {
return [];
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
IsOffline: false,
DemoAppWithoutLogin: false,
Page: "Selfcare"
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
uuid: "10",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.associationVar.roleNameAttr), asPrimitiveValue(model.variables.pINVar), asPrimitiveValue(model.variables.sIMNumberVar), asPrimitiveValue(model.variables.pUKVar), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.isLoadingVar)]
}), React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "Y_v02U+kWEOBO_YV097FCA"
},
showPopup: (model.variables.cVP_ShowVar && !(model.variables.isLoadingVar)),
style: "popup-dialog",
_idProps: {
service: idService,
name: "CVPPopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "uAuClt52skOL2G+mY2TCvQ"
},
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 pt-8 c-strongPink -bold",
value: "CVP",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Código de validação de portabilidade",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "-bold",
value: model.variables.cVP_CodeVar,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "19"
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
"data-style-key": "f9Re4VQxW0CtDudR682r3w"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.toggleShowCVP$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Fechar",
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
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.copyCVP$Action(controller.callContext(eventHandlerContext));
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
value: "Copiar",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
})))))));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.WTF_PinPuk.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "ACCOUNTINFO_MBP.controller", "WTF_MBP.model", "CopyToClipboard_Plugin.controller", "CommonPlugin.controller", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetCacheValidationInterval", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$GetApplicationName_MBP", "ACCOUNTINFO_MBP.controller$GetPINPUKInfo", "WTF_MOB.referencesHealth$ACCOUNTINFO_MBP", "WTF_MBP.controller$setActivityLog_PINPUK", "WTF_MBP.model$Local_ASSOCIATIONRec", "WTF_MOB.model$Local_SERVICELocal_ASSOCIATIONRecordList", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_SERVICERec", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.controller$Analytics_SendEvent", "CopyToClipboard_Plugin.controller$CopyToClipboard", "WTF_MOB.referencesHealth$CopyToClipboard_Plugin", "CommonPlugin.controller$IsCordovaDefined", "WTF_MOB.referencesHealth$CommonPlugin", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, ACCOUNTINFO_MBPController, WTF_MBPModel, CopyToClipboard_PluginController, CommonPluginController, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.createPortabilityProductCode_BP$ServerAction = function (userWtfIdIn, refreshTokenIn, nIFIn, mSISDNIn, callContext) {
var controller = this.controller;
var inputs = {
UserWtfId: OS.DataTypes.JSConversions.basicTypeToJS(userWtfIdIn, OS.Types.LongInteger),
RefreshToken: OS.DataTypes.JSConversions.basicTypeToJS(refreshTokenIn, OS.Types.Text),
NIF: OS.DataTypes.JSConversions.basicTypeToJS(nIFIn, OS.Types.Text),
MSISDN: OS.DataTypes.JSConversions.basicTypeToJS(mSISDNIn, OS.Types.Text)
};
return controller.callServerAction("CreatePortabilityProductCode_BP", "screenservices/WTF_MOB/ZonaFlow/WTF_PinPuk/ActionCreatePortabilityProductCode_BP", "Nsk9xOjNTHslE930gT2j5A", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_PinPuk$rssespacewtf_bp_ActionCreatePortabilityProductCode_BP"))();
executeServerActionResult.cVPOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.CVP, OS.Types.Text);
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
executeServerActionResult.messageOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Message, OS.Types.Text);
executeServerActionResult.errorOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Error, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_PinPuk$rssespacewtf_bp_ActionCreatePortabilityProductCode_BP", [{
name: "CVP",
attrName: "cVPOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "Message",
attrName: "messageOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

// Aggregates and Data Actions
Controller.prototype.getUserWTF$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();

var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_WTFRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
} else {
selectSql += "\"ENLocal_USER_WTF\".\"Id\" o0, \"ENLocal_USER_WTF\".\"Msisdn\" o1, \"ENLocal_USER_WTF\".\"CodeMember\" o2, \"ENLocal_USER_WTF\".\"Tmcode_label\" o3, \"ENLocal_USER_WTF\".\"Is_MonthlyRenewal\" o4";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_WTF\" \"ENLocal_USER_WTF\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_WTFRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_WTFAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeScreenClientAggregate(executeQuery, function () {
return model.variables.getUserWTFAggr;
}, function () {
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getUserWTF$AggrRefresh"];
// Client Actions
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatus2Var = new OS.DataTypes.VariableHolder();
var getCacheValidationIntervalVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getApplicationName_MBPVar = new OS.DataTypes.VariableHolder();
var getPINPUKInfoVar = new OS.DataTypes.VariableHolder();
var getServiceVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList))());
var getAccessTokenVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.doWhileAsync(function () {
return false;
}, function () {
// AnalyticsAuxVar.TraceName = "Pin puk"
model.variables.analyticsAuxVarVar.traceNameAttr = "Pin puk";
// AnalyticsAuxVar.Category = "Zona"
model.variables.analyticsAuxVarVar.categoryAttr = "Zona";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.applicationNameVar === ""))) {
// Execute Action: GetApplicationName_MBP
model.flush();
return WTF_MBPController.default.getApplicationName_MBP$Action(callContext).then(function (value) {
getApplicationName_MBPVar.value = value;
}).then(function () {
// ApplicationName = GetApplicationName_MBP.Value
model.variables.applicationNameVar = getApplicationName_MBPVar.value.valueOut;
});
}

});
}).then(function () {
// Empty User WTF?
return OS.Flow.executeSequence(function () {
if((!(model.variables.getUserWTFAggr.listOut.isEmpty))) {
// SetMSISDN
// MSISDN = GetUserWTF.List.Current.Local_USER_WTF.Msisdn
model.variables.mSISDNVar = (model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr).toString();
// Aggregate: GetAccessToken
var getAccessTokenAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}


var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3";
} else {
selectSql += "\"ENLocal_ACCESS_TOKEN_INFO\".\"Id\" o0, \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" o1, \"ENLocal_ACCESS_TOKEN_INFO\".\"Access_token\" o2, \"ENLocal_ACCESS_TOKEN_INFO\".\"IsUserRegistered\" o3";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_ACCESS_TOKEN_INFO\" \"ENLocal_ACCESS_TOKEN_INFO\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ACCESS_TOKEN_INFOAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeClientAggregate(executeQuery, function () {
return getAccessTokenVar.value;
});
};
return getAccessTokenAggr().then(function () {
// Empty token?
return OS.Flow.executeSequence(function () {
if((!(getAccessTokenVar.value.listOut.isEmpty))) {
// RefreshToken = GetAccessToken.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = getAccessTokenVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
// Aggregate: GetService
var getServiceAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstLocal_SERVICE_ServiceId = model.variables.mSISDNVar;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6, NULL o7, NULL o8, NULL o9, NULL o10, NULL o11, NULL o12, NULL o13, NULL o14, NULL o15, NULL o16, NULL o17, NULL o18, NULL o19, NULL o20, NULL o21, NULL o22, NULL o23, NULL o24";
} else {
selectSql += "\"ENLocal_ASSOCIATION\".\"Id\" o0, \"ENLocal_ASSOCIATION\".\"DisplayValue\" o1, \"ENLocal_ASSOCIATION\".\"FriendlyName\" o2, \"ENLocal_ASSOCIATION\".\"RoleName\" o3, \"ENLocal_ASSOCIATION\".\"Key\" o4, \"ENLocal_ASSOCIATION\".\"Value\" o5, \"ENLocal_ASSOCIATION\".\"Master\" o6, \"ENLocal_ASSOCIATION\".\"ContractDN\" o7, \"ENLocal_ASSOCIATION\".\"AccountOwner\" o8, \"ENLocal_ASSOCIATION\".\"AccountOwnerNIF\" o9, \"ENLocal_ASSOCIATION\".\"AccountOwnerEmail\" o10, \"ENLocal_ASSOCIATION\".\"AccountOwnerPhoneNr\" o11, \"ENLocal_ASSOCIATION\".\"CustCode_ClientNumber\" o12, \"ENLocal_ASSOCIATION\".\"PersonId\" o13, \"ENLocal_ASSOCIATION\".\"IsPending\" o14, \"ENLocal_ASSOCIATION\".\"UA\" o15, \"ENLocal_SERVICE\".\"Id\" o16, \"ENLocal_SERVICE\".\"ServiceId\" o17, \"ENLocal_SERVICE\".\"AssociationID\" o18, \"ENLocal_SERVICE\".\"Name\" o19, \"ENLocal_SERVICE\".\"ServiceAccount\" o20, \"ENLocal_SERVICE\".\"UiLabel\" o21, \"ENLocal_SERVICE\".\"Plan\" o22, \"ENLocal_SERVICE\".\"TMCodeID\" o23, \"ENLocal_SERVICE\".\"TMCodeDesc\" o24";
}
fromAndWhereSql += " FROM (\"MAIN\".\"OSUSR_p9g_Local_SERVICE\" \"ENLocal_SERVICE\" Inner JOIN \"MAIN\".\"OSUSR_p9g_Local_ASSOCIATION\" \"ENLocal_ASSOCIATION\" ON (\"ENLocal_SERVICE\".\"AssociationID\" = \"ENLocal_ASSOCIATION\".\"Id\")) ";
fromAndWhereSql += " WHERE (\"ENLocal_SERVICE\".\"ServiceId\" = :qpstLocal_SERVICE_ServiceId)";
argsList.add("qpstLocal_SERVICE_ServiceId", /*TEXT*/ 0, qpstLocal_SERVICE_ServiceId);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_SERVICELocal_ASSOCIATIONRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_ASSOCIATIONAttr",
"local_SERVICEAttr",
];
return targetListType.RecordType.fromLocalStorage(r, indexRef, attrOrder);

}, argsList).then(function (resultList) {
result.list = resultList;
}).then(function () {
}).then(function () {
return result;
});
};
return controller.executeClientAggregate(executeQuery, function () {
return getServiceVar.value;
});
};
return getServiceAggr().then(function () {
// Service empty?
return OS.Flow.executeSequence(function () {
if((!(getServiceVar.value.listOut.isEmpty))) {
// SetService
// ServiceId = GetService.List.Current.Local_SERVICE.ServiceId
model.variables.serviceIdVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_SERVICEAttr.serviceIdAttr;
// Association = GetService.List.Current.Local_ASSOCIATION
model.variables.associationVar = getServiceVar.value.listOut.getCurrent(callContext.iterationContext).local_ASSOCIATIONAttr;
// Execute Action: GetCacheValidationInterval
model.flush();
return WTF_MBPController.default.getCacheValidationInterval$Action(callContext).then(function (value) {
getCacheValidationIntervalVar.value = value;
}).then(function () {
// Execute Action: GetPINPUKInfo
model.flush();
return ACCOUNTINFO_MBPController.default.getPINPUKInfo$Action(model.variables.associationVar.idAttr, model.variables.serviceIdVar, model.variables.applicationNameVar, getCacheValidationIntervalVar.value.valueOut, model.variables.refreshTokenVar, callContext).then(function (value) {
getPINPUKInfoVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((getPINPUKInfoVar.value.successOut)) {
// SIMNumber = GetPINPUKInfo.SIMNumber
model.variables.sIMNumberVar = getPINPUKInfoVar.value.sIMNumberOut;
// PIN = GetPINPUKInfo.PIN
model.variables.pINVar = getPINPUKInfoVar.value.pINOut;
// PUK = GetPINPUKInfo.PUK
model.variables.pUKVar = getPINPUKInfoVar.value.pUKOut;
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Check_pin_puk", callContext);

// Execute Action: setActivityLog_PINPUK
model.flush();
return WTF_MBPController.default.setActivityLog_PINPUK$Action(model.variables.serviceIdVar, callContext).then(function () {
return OS.Flow.breakAsync();
});
} else {
// Execute Action: VerifyNetworkStatus2
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatus2Var.value = value;
}).then(function () {
if((verifyNetworkStatus2Var.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage6
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Tenta novamente", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
return OS.Flow.breakAsync();
} else {
// Destination: /WTF_MOB/NoConnection
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/NoConnection", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
}

});
});
}

});
});
}

});
});
}

});
}).then(function () {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Não foi possível obter os dados pretendidos.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// afterReady = True
model.variables.afterReadyVar = true;
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("WTF_PinPuk.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
}).then(function () {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._toggleShowCVP$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ToggleShowCVP");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createPortabilityProductCode_BPVar = new OS.DataTypes.VariableHolder();
var getMasterBSCSConfig_BSCSVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getMasterBSCSConfig_SIEBELVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// not showed?
return OS.Flow.executeSequence(function () {
if((!(model.variables.cVP_ShowVar))) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Pin Puk", "Ver codigo portabilidade", 0, "", callContext).then(function () {
// Execute Action: GetMasterBSCSConfig_BSCS
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("MASTER_BSCS", callContext).then(function (value) {
getMasterBSCSConfig_BSCSVar.value = value;
});
}).then(function () {
// Execute Action: GetMasterBSCSConfig_SIEBEL
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("MASTER_SIEBEL", callContext).then(function (value) {
getMasterBSCSConfig_SIEBELVar.value = value;
});
}).then(function () {
// Execute Action: CreatePortabilityProductCode_BP
model.flush();
return controller.createPortabilityProductCode_BP$ServerAction(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.integerToIdentifier(OS.BuiltinFunctions.longIntegerToInteger(model.variables.getUserWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr))), model.variables.refreshTokenVar, model.variables.associationVar.accountOwnerNIFAttr, model.variables.mSISDNVar, callContext).then(function (value) {
createPortabilityProductCode_BPVar.value = value;
});
}).then(function () {
// CVP_Code = CreatePortabilityProductCode_BP.CVP
model.variables.cVP_CodeVar = createPortabilityProductCode_BPVar.value.cVPOut;
}).then(function () {
if((((createPortabilityProductCode_BPVar.value.errorOut === "-15") || (createPortabilityProductCode_BPVar.value.errorOut === "-11")))) {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("A combinação de NIF e número de telemóvel não coincidem.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
if((createPortabilityProductCode_BPVar.value.successOut)) {
// CVP_Show = True
model.variables.cVP_ShowVar = true;
} else {
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("Não foi possível gerar o CVP. Por favor, tenta mais tarde.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

}

});
} else {
// CVP_Show = False
model.variables.cVP_ShowVar = false;
}

}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("WTF_PinPuk.ToggleShowCVP", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException2
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tente novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._copyCVP$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CopyCVP");
callContext = controller.callContext(callContext);
var copyToClipboardVar = new OS.DataTypes.VariableHolder();
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

return OS.Flow.executeSequence(function () {
if((isCordovaDefinedVar.value.isLoadedOut)) {
// Execute Action: CopyToClipboard
model.flush();
return CopyToClipboard_PluginController.default.copyToClipboard$Action(model.variables.cVP_CodeVar, callContext).then(function (value) {
copyToClipboardVar.value = value;
}).then(function () {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Código copiado", 1, true, "icon-message_success level3", true, false, 10000, "", "-large", callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Pin Puk", "Copiar CVP", 0, "", callContext);
});
}

});
});
};
Controller.prototype._stopTrace$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("StopTrace");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: StopTraceGlobalAction
model.flush();
return WTF_MOBController.default.stopTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.analytics_PerformanceStopedAttr, model.variables.analyticsAuxVarVar.traceNameAttr, model.variables.analyticsAuxVarVar.trace_StartAtAttr, model.variables.analyticsAuxVarVar.categoryAttr, callContext).then(function () {
// Analytics_PerformanceStoped
// AnalyticsAuxVar.Analytics_PerformanceStoped = True
model.variables.analyticsAuxVarVar.analytics_PerformanceStopedAttr = true;
});
});
};
Controller.prototype._pinPukBlockEvent_CopyToClipboard$Action = function (typeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PinPukBlockEvent_CopyToClipboard");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.WTF_PinPuk.PinPukBlockEvent_CopyToClipboard$vars"))());
vars.value.typeInLocal = typeIn;
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Pin Puk", ("Copiar " + vars.value.typeInLocal), 0, "", callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.WTF_PinPuk.PinPukBlockEvent_CopyToClipboard$vars", [{
name: "Type",
attrName: "typeInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.toggleShowCVP$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleShowCVP$Action, callContext);

};
Controller.prototype.copyCVP$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._copyCVP$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.pinPukBlockEvent_CopyToClipboard$Action = function (typeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._pinPukBlockEvent_CopyToClipboard$Action, callContext, typeIn);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_ZonaFlowController.default.handleError(ex, this.callContext());
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

