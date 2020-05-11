define("WTF_MOB.ScratchFlow.ScratchResult.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_BP.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.WalletFlow.WalletListItem.mvc$model", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$setActivityLog_ScratchLost", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$setActivityLog_ScratchFail", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$setActivityLog_ScratchWon", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MBP.controller$UserAnswerQuiz", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_BP.model$App_PictureRec", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_BPModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl2_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, WTF_MOB_WalletFlow_WalletListItem_mvcModel, WTF_MOB_Common_BottomBar_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("requiredAddress", "requiredAddressVar", "requiredAddress", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("afterAnswerQuiz", "afterAnswerQuizVar", "afterAnswerQuiz", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("walletCard", "walletCardVar", "walletCard", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_WalletCardRec());
}, WTF_BPModel.App_WalletCardRec), 
this.attr("openDetail", "openDetailVar", "openDetail", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Background_color", "background_colorVar", "Background_color", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("WtfCardGenericLabel", "wtfCardGenericLabelVar", "WtfCardGenericLabel", true, OS.Types.Text, function () {
return "";
}), 
this.attr("hasWinner", "hasWinnerIn", "hasWinner", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_hasWinnerInDataFetchStatus", "_hasWinnerInDataFetchStatus", "_hasWinnerInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("QuizAnswerIdInput", "quizAnswerIdInputIn", "QuizAnswerIdInput", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_quizAnswerIdInputInDataFetchStatus", "_quizAnswerIdInputInDataFetchStatus", "_quizAnswerIdInputInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("QuizIdInput", "quizIdInputIn", "QuizIdInput", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_quizIdInputInDataFetchStatus", "_quizIdInputInDataFetchStatus", "_quizIdInputInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UserPlaysQuizId", "userPlaysQuizIdIn", "UserPlaysQuizId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_userPlaysQuizIdInDataFetchStatus", "_userPlaysQuizIdInDataFetchStatus", "_userPlaysQuizIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PrizeName", "prizeNameIn", "PrizeName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_prizeNameInDataFetchStatus", "_prizeNameInDataFetchStatus", "_prizeNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("DiamondTypeName", "diamondTypeNameIn", "DiamondTypeName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_diamondTypeNameInDataFetchStatus", "_diamondTypeNameInDataFetchStatus", "_diamondTypeNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowLinkToWallet", "showLinkToWalletIn", "ShowLinkToWallet", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showLinkToWalletInDataFetchStatus", "_showLinkToWalletInDataFetchStatus", "_showLinkToWalletInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Copy1_Looser", "copy1_LooserIn", "Copy1_Looser", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_copy1_LooserInDataFetchStatus", "_copy1_LooserInDataFetchStatus", "_copy1_LooserInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Copy2_Looser", "copy2_LooserIn", "Copy2_Looser", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_copy2_LooserInDataFetchStatus", "_copy2_LooserInDataFetchStatus", "_copy2_LooserInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || WTF_MOB_WalletFlow_WalletListItem_mvcModel.hasValidationWidgets) || WTF_MOB_Common_BottomBar_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("hasWinner" in inputs) {
this.variables.hasWinnerIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.hasWinner, OS.Types.Boolean);
}

if("QuizAnswerIdInput" in inputs) {
this.variables.quizAnswerIdInputIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.QuizAnswerIdInput, OS.Types.Integer);
}

if("QuizIdInput" in inputs) {
this.variables.quizIdInputIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.QuizIdInput, OS.Types.Integer);
}

if("UserPlaysQuizId" in inputs) {
this.variables.userPlaysQuizIdIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.UserPlaysQuizId, OS.Types.Integer);
}

if("PrizeName" in inputs) {
this.variables.prizeNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.PrizeName, OS.Types.Text);
}

if("DiamondTypeName" in inputs) {
this.variables.diamondTypeNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.DiamondTypeName, OS.Types.Text);
}

if("ShowLinkToWallet" in inputs) {
this.variables.showLinkToWalletIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.ShowLinkToWallet, OS.Types.Boolean);
}

if("Copy1_Looser" in inputs) {
this.variables.copy1_LooserIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Copy1_Looser, OS.Types.Text);
}

if("Copy2_Looser" in inputs) {
this.variables.copy2_LooserIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.Copy2_Looser, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ScratchFlow.ScratchResult.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ScratchFlow.ScratchResult.mvc$model", "WTF_MOB.ScratchFlow.ScratchResult.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.WalletFlow.WalletListItem.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$setActivityLog_ScratchLost", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$setActivityLog_ScratchFail", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$setActivityLog_ScratchWon", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MBP.controller$UserAnswerQuiz", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_BP.model$App_PictureRec", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_ScratchFlow_ScratchResult_mvc_model, WTF_MOB_ScratchFlow_ScratchResult_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_WalletListItem_mvc_view, WTF_MOB_Common_BottomBar_mvc_view) {
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
        View.displayName = "ScratchFlow.ScratchResult";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchFlow.ScratchResult.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/WTF_MOB.BackButtonNull.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, WTF_MOB_WalletFlow_WalletListItem_mvc_view, WTF_MOB_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchResult_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchResult_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), $if(!(model.variables.openDetailVar), false, this, function () {
return [React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
Premio: model.variables.prizeNameIn,
PageTitle: model.getCachedValue(idService.getId("uct8lTYlV0iEmkCHtNQ40A.PageTitle"), function () {
return (((model.variables.afterAnswerQuizVar === true)) ? ((((model.variables.hasWinnerIn === true)) ? ("Scratch resultado com premio resposta certa") : ("Scratch resultado com premio resposta errada"))) : ("Scratch resultado sem premio"));
}, function () {
return model.variables.afterAnswerQuizVar;
}, function () {
return model.variables.hasWinnerIn;
}),
PageSection: "Scratch",
Diamante: model.variables.diamondTypeNameIn,
ScreenName: "ScratchResult",
ContentClass: "game-result pv-16 b-strongPink",
PageType: "Operação"
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
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [$if(model.variables.hasWinnerIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "ASKjmUxJEk2QPppr4GaEZA"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
style: "screen-centered",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.thumbsup.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "a-flexCardTitle app-title text-center bingo c-yellow",
value: "BINGO!",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "a-flexCardTitle app-title text-center",
value: model.getCachedValue(idService.getId("+dsF77l7cU+ZpKMAls5dfA.Value"), function () {
return ((model.variables.showLinkToWalletIn) ? ("O prize já está na tua wallet") : ("O prize já é teu"));
}, function () {
return model.variables.showLinkToWalletIn;
}),
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if((model.variables.requiredAddressVar === true), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "a-flexCardTitle app-title text-center",
value: "Adiciona a tua morada para te podermos enviar",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: (model.variables.requiredAddressVar === true),
_idProps: {
service: idService,
name: "PrimaryButtonNegative2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WalletFillAddressWithItem", {
ItemId: model.variables.walletCardVar.walletItemIdAttr
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn btn-primary -primary -negative -big",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Adicionar morada",
_idProps: {
service: idService,
name: "ButtonTextPrimary3"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
gridProperties: {
marginTop: "10px"
},
visible: model.variables.showLinkToWalletIn,
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
controller.goToMenu$Action("Wallet", "Scratch resultado com premio resposta certa", controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative -big",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Ir à wallet",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "10px"
},
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
controller.goToMenu$Action("Share with friend", "Scratch resultado com premio resposta certa", controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative -big",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Partilha com os teus friends",
_idProps: {
service: idService,
name: "ButtonTextPrimary4"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
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
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToMenu$Action("Scratch", "Scratch resultado com premio resposta certa", controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-secondary -secondary -negative",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Dá-lhe outro scratch",
_idProps: {
service: idService,
name: "ButtonTextSecondary"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "overlay active",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "fail-screen",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width8"
},
style: "screen-centered",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.thumbsdown.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if((model.variables.copy1_LooserIn === ""), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "app-title a-flexCardTitle c-yellow",
value: "Oops!",
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
}, React.createElement(OSWidgets.Expression, {
style: "app-title a-flexCardTitle c-yellow",
value: "Não foi desta",
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "app-title a-flexCardTitle c-yellow",
value: model.variables.copy1_LooserIn,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}), $if((model.variables.copy2_LooserIn === ""), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "ATg5sCuORE2gigR5B4ih2Q"
},
style: "app-title a-flexCardHighlightContent c-yellow",
value: "Só ganha quem scratcha.",
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "pWOzE5na3kaItixHUEFlHQ"
},
style: "app-title a-flexCardHighlightContent c-yellow",
value: "Dá-lhe mais",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-24",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "NNN2YaEOyE2cMaTr5CX4Jg"
},
style: "app-title a-flexCardHighlightContent c-yellow",
value: model.variables.copy2_LooserIn,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}), React.createElement(OSWidgets.Container, {
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
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToMenu$Action("Scratch", (((model.variables.afterAnswerQuizVar === true)) ? ("Scratch resultado com premio resposta errada") : ("Scratch resultado sem premio")), controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative -big",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Dá-lhe outro scratch",
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.copy2_LooserIn), asPrimitiveValue(model.variables.copy1_LooserIn), asPrimitiveValue(model.variables.requiredAddressVar), asPrimitiveValue(model.variables.showLinkToWalletIn), asPrimitiveValue(model.variables.hasWinnerIn)]
})];
}, function () {
return [React.createElement(WTF_MOB_Common_Layout_Lvl2_mvc_view, {
inputs: {
PageSection: "Scratch",
ContentClass: "b-transparent scratch",
PageType: "Operação",
IsPageLevel1: true,
ScreenName: "ScratchResult",
PageTitle: model.getCachedValue(idService.getId("KiYyyJqEaUCF11BaThAZTA.PageTitle"), function () {
return (((model.variables.afterAnswerQuizVar === true)) ? ((((model.variables.hasWinnerIn === true)) ? ("Scratch resultado com premio resposta certa") : ("Scratch resultado com premio resposta errada"))) : ("Scratch resultado sem premio"));
}, function () {
return model.variables.afterAnswerQuizVar;
}, function () {
return model.variables.hasWinnerIn;
}),
Premio: model.variables.prizeNameIn,
Diamante: model.variables.diamondTypeNameIn
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
uuid: "38",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("scratch-detail-item " + model.variables.background_colorVar),
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-24",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.voltarOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "0VfOzFsTpEyuwQIjIFqoYw"
},
gridProperties: {
classes: "OSInline"
},
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconArrowRight,
StyleClass: "c-white",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small
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
uuid: "43",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "xLcbTqbmjku5Ud02p9VCqQ"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "pl-8 c-white",
value: "Voltar",
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "XCB6bO2t3Eq8RI8qkb1FDg"
},
gridProperties: {
classes: "ThemeGrid_Width6 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(WTF_MOB_WalletFlow_WalletListItem_mvc_view, {
inputs: {
RemoveItemOn: false,
ListCurrentRowNumber: 0,
showAll: true,
ListLength: "1",
IsOffline: false,
gotobenefit: false,
headerWithImage: (((model.variables.walletCardVar.categoryLabelAttr) !== ("Golden")) && ((model.variables.walletCardVar.itemTypeIdAttr === WTF_MOBModel.staticEntities.iTEM_TYPES.cinema) || (model.variables.walletCardVar.itemTypeIdAttr === WTF_MOBModel.staticEntities.iTEM_TYPES.uber))),
App_WalletCard: model.variables.walletCardVar,
WtfCardGenericLabel: model.variables.wtfCardGenericLabelVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
removeCard$Action: function (positionIn, categoryIn) {
var eventHandlerContext = callContext.clone();
controller.walletListItemRemoveCard$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "46",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
Page: "Wallet",
DemoAppWithoutLogin: false,
IsOffline: false
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
uuid: "47",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.wtfCardGenericLabelVar), asPrimitiveValue(model.variables.walletCardVar), asPrimitiveValue(model.variables.background_colorVar)]
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ScratchFlow.ScratchResult.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_BP.model", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ScratchFlow.controller", "WTF_BP.model$App_WalletCardRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$setActivityLog_ScratchLost", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$setActivityLog_ScratchFail", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$setActivityLog_ScratchWon", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MBP.controller$Wallet_ClearCache", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_UserWtfPrizeAddressRec", "WTF_MBP.controller$UserAnswerQuiz", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_BP.model$App_PictureRec", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_BPModel, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ScratchFlowController) {
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
Controller.prototype._voltarOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("VoltarOnClick");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Wallet Card Scratch", "Voltar", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
});
};
Controller.prototype._answerQuizOnInitialize$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AnswerQuizOnInitialize");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTF3Var = new OS.DataTypes.VariableHolder();
var getWTFGenericLabelCardVar = new OS.DataTypes.VariableHolder();
var wallet_ClearCacheVar = new OS.DataTypes.VariableHolder();
var getActiveUserWTFVar = new OS.DataTypes.VariableHolder();
var userAnswerQuizVar = new OS.DataTypes.VariableHolder();
var logEventFacebookSDK_WTF2Var = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = If
model.variables.analyticsAuxVarVar.traceNameAttr = (((model.variables.afterAnswerQuizVar === false)) ? ("Scratch_resultado_sem_premio") : ("Scratch_resultado_com_premio"));
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.hasWinnerIn)) {
// afterAnswerQuiz = True
model.variables.afterAnswerQuizVar = true;
// Execute Action: UserAnswerQuiz
model.flush();
return WTF_MBPController.default.userAnswerQuiz$Action(model.variables.quizAnswerIdInputIn, model.variables.quizIdInputIn, model.variables.userPlaysQuizIdIn, callContext).then(function (value) {
userAnswerQuizVar.value = value;
}).then(function () {
// Execute Action: LogMessage
OS.SystemActions.logMessage(((("USERANSWERQUIZ!! ## HasWon: " + (userAnswerQuizVar.value.hasWonOut ? "True" : "False")) + " ##Success: ") + (userAnswerQuizVar.value.successOut ? "True" : "False")), "WTF_MOB", callContext);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((userAnswerQuizVar.value.successOut)) {
return OS.Flow.executeSequence(function () {
if((userAnswerQuizVar.value.hasWonOut)) {
// Execute Action: LogEventFacebookSDK_WTF3
logEventFacebookSDK_WTF3Var.value = WTF_MBPController.default.logEventFacebook_MBP$Action((((model.variables.diamondTypeNameIn === "Silver")) ? ("Scratch_silver_prize_won") : ("Scratch_golden_prize_won")), callContext);

// requiredAddress = UserAnswerQuiz.RequiredAddress
model.variables.requiredAddressVar = userAnswerQuizVar.value.requiredAddressOut;
// hasWinner = True
model.variables.hasWinnerIn = true;
// walletCard = UserAnswerQuiz.WalletCard
model.variables.walletCardVar = userAnswerQuizVar.value.walletCardOut;
// Execute Action: GetWTFGenericLabelCard
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTFGenericLabelCard", callContext).then(function (value) {
getWTFGenericLabelCardVar.value = value;
}).then(function () {
// WtfCardGenericLabel
// WtfCardGenericLabel = GetWTFGenericLabelCard.Value
model.variables.wtfCardGenericLabelVar = getWTFGenericLabelCardVar.value.valueOut;
// Execute Action: setActivityLog_ScratchWon
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchWon$Action(model.variables.diamondTypeNameIn, callContext);
}).then(function () {
if(((model.variables.walletCardVar.categoryLabelAttr === "Equipamentos"))) {
// Background_color = "equipamentos otherblue"
model.variables.background_colorVar = "equipamentos otherblue";
} else {
if((model.variables.walletCardVar.categoryLabelAttr === "Cinemas")) {
// Background_color = "cinemas black"
model.variables.background_colorVar = "cinemas black";
} else {
if((model.variables.walletCardVar.categoryLabelAttr === "Uber Riders")) {
// Background_color = "uber-riders blue"
model.variables.background_colorVar = "uber-riders blue";
} else {
if((model.variables.walletCardVar.categoryLabelAttr === "Uber Eats")) {
// Background_color = "uber-eats green"
model.variables.background_colorVar = "uber-eats green";
} else {
if((model.variables.walletCardVar.categoryLabelAttr === "Filmes")) {
// Background_color = "filmes purple"
model.variables.background_colorVar = "filmes purple";
} else {
if((model.variables.walletCardVar.categoryLabelAttr === "Comunicações")) {
// Background_color = "comunicacoes greenSoft"
model.variables.background_colorVar = "comunicacoes greenSoft";
} else {
if((model.variables.walletCardVar.categoryLabelAttr === "Golden")) {
// Background_color = "yellow golden"
model.variables.background_colorVar = "yellow golden";
} else {
if((model.variables.walletCardVar.categoryLabelAttr === model.variables.wtfCardGenericLabelVar)) {
// Background_color = "generica purple"
model.variables.background_colorVar = "generica purple";
} else {
// DUMMY
}

}

}

}

}

}

}

}

// DUMMY
// Execute Action: GetActiveUserWTF
model.flush();
return WTF_MBPController.default.getActiveUserWTF$Action(callContext).then(function (value) {
getActiveUserWTFVar.value = value;
}).then(function () {
// Execute Action: Wallet_ClearCache
model.flush();
return WTF_MBPController.default.wallet_ClearCache$Action(callContext).then(function (value) {
wallet_ClearCacheVar.value = value;
});
}).then(function () {
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
// Execute Action: DeviceFeedbackHaptic
model.flush();
return WTF_MOBController.default.deviceFeedbackHaptic$Action(50, callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

});
}

});
}).then(function () {
// hasWinner = False
model.variables.hasWinnerIn = false;
// Execute Action: LogEventFacebookSDK_WTF2
logEventFacebookSDK_WTF2Var.value = WTF_MBPController.default.logEventFacebook_MBP$Action((((model.variables.diamondTypeNameIn === "Silver")) ? ("Scratch_silver_prize_lost") : ("Scratch_golden_prize_lost")), callContext);

// Execute Action: setActivityLog_ScratchLost
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchLost$Action(model.variables.diamondTypeNameIn, callContext).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
});
} else {
// Execute Action: setActivityLog_ScratchFail
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchFail$Action(model.variables.diamondTypeNameIn, callContext).then(function () {
// Execute Action: LogMessage2
OS.SystemActions.logMessage("#USERANSWERQUIZ!! HasWinner: false ", "WTF_MOB", callContext);
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ScratchResult.AnswerQuizOnInitialize", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
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
// Execute Action: StopTrace5
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._walletListItemRemoveCard$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("WalletListItemRemoveCard");
callContext = controller.callContext(callContext);
// DUMMY
};
Controller.prototype._goToMenu$Action = function (labelIn, categoryIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToMenu");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.ScratchResult.GoToMenu$vars"))());
vars.value.labelInLocal = labelIn;
vars.value.categoryInLocal = categoryIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAndSyncLocalPictureByIdVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", vars.value.categoryInLocal, ("btn_" + vars.value.labelInLocal), 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if(((vars.value.labelInLocal === "Scratch"))) {
// Destination: /WTF_MOB/Scratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((vars.value.labelInLocal === "Wallet")) {
return OS.Flow.executeSequence(function () {
if((!(model.variables.walletCardVar.walletItemIdAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))))) {
// Execute Action: GetAndSyncLocalPictureById
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.walletCardVar.app_PictureAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureByIdVar.value = value;
}).then(function () {
// openDetail = True
model.variables.openDetailVar = true;
// walletCard.App_Picture = GetAndSyncLocalPictureById.Picture
model.variables.walletCardVar.app_PictureAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureByIdVar.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
});
} else {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
} else {
if((vars.value.labelInLocal === "Share with friend")) {
// Destination: /WTF_MOB/Scratch_SelectMsisdns
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch_SelectMsisdns", {
DiamondTypeName: model.variables.diamondTypeNameIn,
PrizeName: model.variables.prizeNameIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

}

});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("ScratchResult.GoToMenu", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.ScratchResult.GoToMenu$vars", [{
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
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

Controller.prototype.voltarOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._voltarOnClick$Action, callContext);

};
Controller.prototype.answerQuizOnInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._answerQuizOnInitialize$Action, callContext);

};
Controller.prototype.walletListItemRemoveCard$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._walletListItemRemoveCard$Action, callContext);

};
Controller.prototype.goToMenu$Action = function (labelIn, categoryIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToMenu$Action, callContext, labelIn, categoryIn);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.answerQuizOnInitialize$Action(callContext);

};
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_ScratchFlowController.default.handleError(ex, this.callContext());
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

