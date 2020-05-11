define("WTF_MOB.MainFlow.TermsAndConditionsApp.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Logout", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$setActivityLog_RGPD_FIRST_TIME_REJECT", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$JS_OpenExternalURL", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MBP.controller$WhatsNew_CheckUser", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$setActivityLog_RGPD_FIRST_TIME_ACCEPT", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel) {
var OS = OutSystems.Internal;

var FetchTermsDataActRec = (function (_super) {
__extends(FetchTermsDataActRec, _super);
function FetchTermsDataActRec(defaults) {
_super.apply(this, arguments);
}
FetchTermsDataActRec.attributesToDeclare = function () {
return [
this.attr("BodyElementOut", "bodyElementOutOut", "BodyElementOut", true, OS.Types.Text, function () {
return "";
}), 
this.attr("TitleElementOut", "titleElementOutOut", "TitleElementOut", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Success", "successOut", "Success", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
FetchTermsDataActRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
FetchTermsDataActRec.init();
return FetchTermsDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("TitleElement", "titleElementVar", "TitleElement", true, OS.Types.Text, function () {
return "";
}), 
this.attr("BodyElement", "bodyElementVar", "BodyElement", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsRejected", "isRejectedVar", "IsRejected", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("TermsChecked", "termsCheckedVar", "TermsChecked", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsSummary", "isSummaryVar", "IsSummary", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("IsParentalAdvisory", "isParentalAdvisoryVar", "IsParentalAdvisory", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("hasTermsAfterReady", "hasTermsAfterReadyVar", "hasTermsAfterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("FromAboutApp", "fromAboutAppIn", "FromAboutApp", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_fromAboutAppInDataFetchStatus", "_fromAboutAppInDataFetchStatus", "_fromAboutAppInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("FetchTerms", "fetchTermsDataAct", "fetchTermsDataAct", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new FetchTermsDataActRec());
}, FetchTermsDataActRec)
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
return {
Checkbox2: OS.Model.ValidationWidgetRecord
};
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
return true;
}
});

Model.prototype.setInputs = function (inputs) {
if("FromAboutApp" in inputs) {
this.variables.fromAboutAppIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.FromAboutApp, OS.Types.Boolean);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.MainFlow.TermsAndConditionsApp.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.MainFlow.TermsAndConditionsApp.mvc$model", "WTF_MOB.MainFlow.TermsAndConditionsApp.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderTerms.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Logout", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$setActivityLog_RGPD_FIRST_TIME_REJECT", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$JS_OpenExternalURL", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MBP.controller$WhatsNew_CheckUser", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$setActivityLog_RGPD_FIRST_TIME_ACCEPT", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, React, OSView, WTF_MOB_MainFlow_TermsAndConditionsApp_mvc_model, WTF_MOB_MainFlow_TermsAndConditionsApp_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderTerms_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view) {
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
        View.displayName = "MainFlow.TermsAndConditionsApp";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.MainFlow.TermsAndConditionsApp.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderTerms_mvc_view, WTF_MOB_Common_Waiting_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_MainFlow_TermsAndConditionsApp_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_MainFlow_TermsAndConditionsApp_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl3_mvc_view, {
inputs: {
withoutLogin: false,
BottomClass: "b-warmPurple",
ContentClass: "b-warmPurple",
PageSection: "Mais",
PageTitle: "Termos e Condições",
ScreenName: "TermsAndConditionsApp",
PageType: "Consulta"
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
return [React.createElement(WTF_MOB_Common_HeaderTerms_mvc_view, {
inputs: {
Title: "Termos e condições"
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
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-warmPurple",
visible: !(model.variables.isLoadingVar),
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.fromAboutAppIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TextContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
name: "TitleContent4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.titleElementVar,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12 a-textRead.-small",
visible: true,
_idProps: {
service: idService,
name: "BodyContent4"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}, function () {
return [$if(model.variables.isSummaryVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
name: "TitleContentTerms"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Termos e Condições da APP WTF",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
name: "BodyContentTerms"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead.-small",
value: "Agora podes receber recomendações personalizadas através da App WTF, com base na utilização que fazes dos teus produtos e serviços WTF. Ao usares esta App, estás a autorizar a NOS a tratar os teus dados de identificação e os dados de utilização dos teus serviços.\r\n\r\nCaso sejas menor de 13 anos não atives esta App.",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(true, false, this, function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToParentalAdvisory$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-textRead  c-warmPurple -bold -inline",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Sabe mais aqui",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 relative-position",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Checkbox, {
_validationProps: {
validationService: validationService
},
enabled: true,
style: model.getCachedValue(idService.getId("Checkbox2.Style"), function () {
return ("checkbox a-checkBox va-middle " + ((model.variables.termsCheckedVar) ? (" icon-checkbox-on -checked -green") : (" icon-checkbox-off")));
}, function () {
return model.variables.termsCheckedVar;
}),
variable: model.createVariable(OS.Types.Boolean, model.variables.termsCheckedVar, function (value) {
model.variables.termsCheckedVar = value;
}),
_idProps: {
service: idService,
name: "Checkbox2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "a-textRead -inline  va-middle",
targetWidget: "Checkbox2",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead c-warmPurple d-inline",
value: "Li e aceito os",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToTermsDetail$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -bold -green",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Termos e Condições",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}, function () {
return [$if(model.variables.isParentalAdvisoryVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
name: "TitleContent5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Consentimento parental",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
name: "TextContainerParent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead.-small",
value: "Para te poderes registar e utilizar a App WTF, precisas de ter pelo menos 13 anos. Se fores menor de 13 anos vais precisar de consentimento dos teus pais/tutor legal para aceder à App WTF, nomeadamente para poderes jogar o Scratch. Para a gestão do processo de consentimento parental iremos solicitar apenas a informação estritamente necessária, nomeadamente documentos comprovativos da tua idade e da titularidade da responsabilidade parental. Para desbloqueares o acesso à App WTF acede a ",
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.openConsentimentoParental$Action(controller.callContext(eventHandlerContext));

;
},
style: "a-textRead  c-warmPurple -bold -inline",
visible: true,
_idProps: {
service: idService,
name: "consentimentoparental_wtf_pt"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "www.consentimentoparental.wtf",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}, function () {
return [$if(model.variables.isRejectedVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
name: "TitleContent2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Ao não aceitares os Termos e Condições não poderás usar a App WTF.",
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12",
visible: true,
_idProps: {
service: idService,
name: "TextContainerNot"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-textRead.-small",
value: "Para aceitares os Termos e Condições e usar a App volta ao ecrã anterior.",
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ma-16 b-white",
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "TextContainerSecond"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "c-warmPurple -bold",
visible: true,
_idProps: {
service: idService,
name: "TitleContent"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.titleElementVar,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-12 a-textRead.-small",
visible: true,
_idProps: {
service: idService,
name: "BodyContent"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})];
})];
})];
}))];
}),
bottom: new PlaceholderContent(function () {
return [$if(model.variables.fromAboutAppIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "48",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
OS.Navigation.navigateBack(null);
},
style: "btn -secondary -negative w-100 -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Voltar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-8",
visible: model.getCachedValue(idService.getId("pcWiTfZ_8UmANb4sD0RjyA.Visible"), function () {
return ((model.variables.isLoadingVar) ? (false) : (true));
}, function () {
return model.variables.isLoadingVar;
}),
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.isSummaryVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "53",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.unacceptTerms$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn -secondary -negative w-100 -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Não aceitar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "57",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.variables.termsCheckedVar,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.acceptTerms$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative w-100",
visible: true,
_idProps: {
service: idService,
name: "AcceptTerms"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Continuar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.termsCheckedVar)]
}))];
}, function () {
return [$if(model.variables.isParentalAdvisoryVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "61",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.back$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn -secondary -negative w-100 -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Voltar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "63"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))];
}, function () {
return [$if(model.variables.isRejectedVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "65",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.back$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn -secondary -negative w-100 -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Voltar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-6 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "69",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.closeApp$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -negative w-100",
visible: true,
_idProps: {
service: idService,
uuid: "70"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Sair", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-12 pv-16 ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, {
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
uuid: "73",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.back$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn -secondary -negative w-100 -noMargin",
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Voltar", React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "75"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))];
})];
})];
}))];
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isRejectedVar), asPrimitiveValue(model.variables.isParentalAdvisoryVar), asPrimitiveValue(model.variables.termsCheckedVar), asPrimitiveValue(model.variables.isSummaryVar), asPrimitiveValue(model.variables.titleElementVar), asPrimitiveValue(model.variables.fromAboutAppIn), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.MainFlow.TermsAndConditionsApp.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.MainFlow.controller", "WTF_MOB.MainFlow.TermsAndConditionsApp.mvc$controller.OnRender.RegulationsJS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Logout", "WTF_MOB.controller$OpenAllExternalLinksOnSystemBrowser", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$setActivityLog_RGPD_FIRST_TIME_REJECT", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$JS_OpenExternalURL", "WTF_MBP.controller$Get_OperatingSystem", "WTF_MBP.controller$WhatsNew_CheckUser", "WTF_MBP.controller$GetUserAssociationAndCreateUserWtfActive", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.model$App_UserAssociationsList", "WTF_MBP.controller$GetServices", "WTF_MBP.controller$setActivityLog_RGPD_FIRST_TIME_ACCEPT", "WTF_MBP.model$Local_USER_WTFRec", "WTF_MBP.controller$GetActiveUserWTF", "WTF_MOB.model$Local_USER_NOS_INFORecordList", "WTF_MBP.model$Local_USER_NOS_INFORec", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_MainFlowController, WTF_MOB_MainFlow_TermsAndConditionsApp_mvc_controller_OnRender_RegulationsJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.updateTermsAcceptance$ServerAction = function (userUIDIn, operativeSystemIn, callContext) {
var controller = this.controller;
var inputs = {
UserUID: OS.DataTypes.JSConversions.basicTypeToJS(userUIDIn, OS.Types.Text),
OperativeSystem: OS.DataTypes.JSConversions.basicTypeToJS(operativeSystemIn, OS.Types.Text)
};
return controller.callServerAction("UpdateTermsAcceptance", "screenservices/WTF_MOB/MainFlow/TermsAndConditionsApp/ActionUpdateTermsAcceptance", "+Rr3C6UE3vncXHvsQTcG0A", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("WTF_MOB.MainFlow.TermsAndConditionsApp$rssespacewtf_bp_ActionUpdateTermsAcceptance"))();
executeServerActionResult.successOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.Success, OS.Types.Boolean);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("WTF_MOB.MainFlow.TermsAndConditionsApp$rssespacewtf_bp_ActionUpdateTermsAcceptance", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.Types.Boolean,
defaultValue: function () {
return true;
}
}]);

// Aggregates and Data Actions
Controller.prototype.fetchTerms$DataActRefresh = function () {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();
return controller.callDataAction("DataActionFetchTerms", "screenservices/WTF_MOB/MainFlow/TermsAndConditionsApp/DataActionFetchTerms", "t1yFJIAtAnOsXYgvMiA5jA", function (b) {
model.variables.fetchTermsDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.fetchTermsDataAct.fromJS(json);
}, undefined).then(function () {
return controller._onAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["fetchTerms$DataActRefresh"];
// Client Actions
Controller.prototype._goToParentalAdvisory$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToParentalAdvisory");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Termos e Condições", "Consentimento parental", 0, "", callContext).then(function () {
// SetIsParentalAdvisory
// IsParentalAdvisory = True
model.variables.isParentalAdvisoryVar = true;
// IsSummary = False
model.variables.isSummaryVar = false;
});
});
};
Controller.prototype._closeApp$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CloseApp");
callContext = controller.callContext(callContext);
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var logoutVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Rgpd_first_time_reject", callContext);

// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Termos e Condições", "Sair", 0, "", callContext).then(function () {
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
});
}).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
};
Controller.prototype._goToTermsDetail$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToTermsDetail");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Termos e Condições", "Termos e Condições detalhe", 0, "", callContext).then(function () {
// SetIsSaummary
// IsSummary = False
model.variables.isSummaryVar = false;
});
});
};
Controller.prototype._onRender$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
if(((model.variables.hasTermsAfterReadyVar && ((model.variables.isSummaryVar === false) || model.variables.fromAboutAppIn)))) {
controller.safeExecuteJSNode(WTF_MOB_MainFlow_TermsAndConditionsApp_mvc_controller_OnRender_RegulationsJS, "Regulations", "OnRender", {
HTML: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.bodyElementVar, OS.Types.Text, true),
WidgetId: OS.DataTypes.JSConversions.basicTypeToJS(((model.variables.fromAboutAppIn) ? (idService.getId("BodyContent4")) : (idService.getId("BodyContent"))), OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
}

// Execute Action: OpenAllExternalLinksOnSystemBrowser
WTF_MOBController.default.openAllExternalLinksOnSystemBrowser$Action(idService.getId("apppopup"), callContext);
};
Controller.prototype._onAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnAfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Termos e Condições"
model.variables.analyticsAuxVarVar.traceNameAttr = "Termos e Condições";
// AnalyticsAuxVar.Category = "Mais"
model.variables.analyticsAuxVarVar.categoryAttr = "Mais";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
}).then(function () {
// GetTermsApp.Success?
if(((model.variables.fetchTermsDataAct.hasFetchErrorAttr || !(model.variables.fetchTermsDataAct.successOut)))) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action("Termos e Condições ainda não foram criadas no BO", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
} else {
// SetTermsText
// TitleElement = FetchTerms.TitleElementOut
model.variables.titleElementVar = model.variables.fetchTermsDataAct.titleElementOutOut;
// BodyElement = FetchTerms.BodyElementOut
model.variables.bodyElementVar = model.variables.fetchTermsDataAct.bodyElementOutOut;
// IsLoading = False
model.variables.isLoadingVar = false;
// hasTermsAfterReady = True
model.variables.hasTermsAfterReadyVar = true;
}

// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("TermsAndConditionsApp.OnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException3
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
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._unacceptTerms$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("UnacceptTerms");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// IsRejected = True
model.variables.isRejectedVar = true;
// IsSummary = False
model.variables.isSummaryVar = false;
// TermsChecked = False
model.variables.termsCheckedVar = false;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Termos e Condições", "Não aceita", 0, "", callContext).then(function () {
// Execute Action: setActivityLog_RGPD_FIRST_TIME_REJECT
model.flush();
return WTF_MBPController.default.setActivityLog_RGPD_FIRST_TIME_REJECT$Action("", callContext);
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
Controller.prototype._openConsentimentoParental$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenConsentimentoParental");
callContext = controller.callContext(callContext);
// Execute Action: JS_OpenExternalURL
WTF_MOBController.default.jS_OpenExternalURL$Action("https://www.nos.pt/particulares/telemovel/tarifarios/Paginas/consentimento-parental.aspx", callContext);
};
Controller.prototype._acceptTerms$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AcceptTerms");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var updateTermsAcceptanceVar = new OS.DataTypes.VariableHolder();
var get_OperatingSystemVar = new OS.DataTypes.VariableHolder();
var whatsNew_CheckUserVar = new OS.DataTypes.VariableHolder();
var createUserWtfActiveVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getServicesVar = new OS.DataTypes.VariableHolder();
var getActiveUserWTFVar = new OS.DataTypes.VariableHolder();
var getUserNOSVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_NOS_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("AcceptTerms"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Termos e Condições", "Continuar", 0, "", callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Aggregate: GetUserNOS
var getUserNOSAggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_USER_NOS_INFORecordList;
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4, NULL o5, NULL o6";
} else {
selectSql += "\"ENLocal_USER_NOS_INFO\".\"Uid\" o0, \"ENLocal_USER_NOS_INFO\".\"Name\" o1, \"ENLocal_USER_NOS_INFO\".\"Birth_date\" o2, \"ENLocal_USER_NOS_INFO\".\"Gender\" o3, \"ENLocal_USER_NOS_INFO\".\"Username\" o4, \"ENLocal_USER_NOS_INFO\".\"Picture\" o5, \"ENLocal_USER_NOS_INFO\".\"CreatedAt\" o6";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_USER_NOS_INFO\" \"ENLocal_USER_NOS_INFO\"";
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_USER_NOS_INFORecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_USER_NOS_INFOAttr",
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
return getUserNOSVar.value;
});
};
return getUserNOSAggr();
}).then(function () {
// Execute Action: Get_OperatingSystem
get_OperatingSystemVar.value = WTF_MBPController.default.get_OperatingSystem$Action(callContext);

// Execute Action: UpdateTermsAcceptance
model.flush();
return controller.updateTermsAcceptance$ServerAction(getUserNOSVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_NOS_INFOAttr.uidAttr, get_OperatingSystemVar.value.operatingSystemOut, callContext).then(function (value) {
updateTermsAcceptanceVar.value = value;
});
}).then(function () {
// Execute Action: setActivityLog_RGPD_FIRST_TIME_ACCEPT
model.flush();
return WTF_MBPController.default.setActivityLog_RGPD_FIRST_TIME_ACCEPT$Action("", callContext);
}).then(function () {
// Execute Action: GetServices
model.flush();
return WTF_MBPController.default.getServices$Action(false, callContext).then(function (value) {
getServicesVar.value = value;
});
}).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Rgpd_first_time_accept", callContext);

}).then(function () {
// Services.Length = 1?
return OS.Flow.executeSequence(function () {
if(((getServicesVar.value.app_UserAssociationsWithServicesOut.length === 1))) {
// Execute Action: CreateUserWtfActive
model.flush();
return WTF_MBPController.default.getUserAssociationAndCreateUserWtfActive$Action(getServicesVar.value.app_UserAssociationsWithServicesOut.getCurrent(callContext.iterationContext).associationIdAttr, callContext).then(function (value) {
createUserWtfActiveVar.value = value;
}).then(function () {
// AlreadyInUse?
return OS.Flow.executeSequence(function () {
if((createUserWtfActiveVar.value.alreadyInUseOut)) {
// Execute Action: GetActiveUserWTF
model.flush();
return WTF_MBPController.default.getActiveUserWTF$Action(callContext).then(function (value) {
getActiveUserWTFVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/RecoveryMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RecoveryMsisdn", {
Msisdn: (getActiveUserWTFVar.value.userWTFActiveNowOut.msisdnAttr).toString()
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Execute Action: WhatsNew_CheckUser
model.flush();
return WTF_MBPController.default.whatsNew_CheckUser$Action(callContext).then(function (value) {
whatsNew_CheckUserVar.value = value;
}).then(function () {
if((whatsNew_CheckUserVar.value.isSkipOut)) {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/WhatsNew
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WhatsNew", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
}

});
}

});
});
} else {
// Destination: /WTF_MOB/SelectMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SelectMsisdn", {
isAfterLogin: true,
NeedsToUpdateTerms: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("TermsAndConditionsApp.AcceptTerms", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: CommunicationException
if(OS.Exceptions.isInstanceOf(ex, OS.Exceptions.Exceptions.CommunicationException)) {
OS.Logger.error(null, ex);
communicationExceptionVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_TrackException3
model.flush();
return WTF_MOBController.default.analytics_TrackException$Action(communicationExceptionVar.value.exceptionMessageAttr, true, callContext).then(function () {
// Execute Action: VerifyNetworkStatus
model.flush();
return WTF_MOBController.default.verifyNetworkStatus$Action(callContext).then(function (value) {
verifyNetworkStatusVar.value = value;
});
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("AcceptTerms"), true, callContext);
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._back$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Back");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Termos e Condições", "Voltar", 0, "", callContext).then(function () {
// IsRejected = False
model.variables.isRejectedVar = false;
// IsSummary = True
model.variables.isSummaryVar = true;
// IsParentalAdvisory = False
model.variables.isParentalAdvisoryVar = false;
});
});
};

Controller.prototype.goToParentalAdvisory$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToParentalAdvisory$Action, callContext);

};
Controller.prototype.closeApp$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeApp$Action, callContext);

};
Controller.prototype.goToTermsDetail$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToTermsDetail$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.onAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onAfterFetch$Action, callContext);

};
Controller.prototype.unacceptTerms$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._unacceptTerms$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.openConsentimentoParental$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openConsentimentoParental$Action, callContext);

};
Controller.prototype.acceptTerms$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._acceptTerms$Action, callContext);

};
Controller.prototype.back$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._back$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onRender$Action(callContext);

};
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_MainFlowController.default.handleError(ex, this.callContext());
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
define("WTF_MOB.MainFlow.TermsAndConditionsApp.mvc$controller.OnRender.RegulationsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var body = document.getElementById($parameters.WidgetId)

if(body)
    body.innerHTML = $parameters.HTML

};
});

