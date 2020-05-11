define("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.mvc$model", ["OutSystems", "WTF_MOB.model", "FilePlugin.controller", "MobileUIWidgets.controller", "CommonPlugin.model", "ContactsPlugin.controller", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_BP.model", "WTF_MBP.model", "FilePlugin.controller$CheckFilePlugin", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$FilePlugin", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "ContactsPlugin.controller$CheckContactsPlugin", "WTF_MOB.referencesHealth$ContactsPlugin", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$App_PhoneContactsList", "WTF_MBP.controller$FilterListContacts", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$ContactList", "ContactsPlugin.controller$FindContact", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$ContactFieldList", "WTF_BP.model$App_PhoneContactsRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$ValidateMsisdnIsWTF", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_PictureRec", "WTF_MBP.controller$SecretFriend_VerifyAlreadySendAllOffers", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, FilePluginController, MobileUIWidgetsController, CommonPluginModel, ContactsPluginController, WTF_MOBController, WTF_MBPController, WTF_BPModel, WTF_MBPModel) {
var OS = OutSystems.Internal;
var GetLocalUSERWTFAggrRec = (function (_super) {
__extends(GetLocalUSERWTFAggrRec, _super);
function GetLocalUSERWTFAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalUSERWTFAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetLocalUSERWTFAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalUSERWTFAggrRec.init();
return GetLocalUSERWTFAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SecretFriend_MSISDN", "secretFriend_MSISDNVar", "SecretFriend_MSISDN", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("SecretFriend_MSISDN_Phone", "secretFriend_MSISDN_PhoneVar", "SecretFriend_MSISDN_Phone", true, OS.Types.PhoneNumber, function () {
return "";
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("Conditions", "conditionsVar", "Conditions", true, OS.Types.Text, function () {
return "";
}), 
this.attr("AfterReady", "afterReadyVar", "AfterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("ContactsPluginAvailable", "contactsPluginAvailableVar", "ContactsPluginAvailable", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ContactList_PhoneContactsToValidate", "contactList_PhoneContactsToValidateVar", "ContactList_PhoneContactsToValidate", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PhoneContactsList());
}, WTF_MOBModel.App_PhoneContactsList), 
this.attr("ContactList_Search", "contactList_SearchVar", "ContactList_Search", true, OS.Types.Text, function () {
return "";
}), 
this.attr("ContactList_Show", "contactList_ShowVar", "ContactList_Show", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ContactList_Loading", "contactList_LoadingVar", "ContactList_Loading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ContactList_PhoneContactsWTF", "contactList_PhoneContactsWTFVar", "ContactList_PhoneContactsWTF", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PhoneContactsList());
}, WTF_MOBModel.App_PhoneContactsList), 
this.attr("ContactList_PhoneContactsOthers", "contactList_PhoneContactsOthersVar", "ContactList_PhoneContactsOthers", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PhoneContactsList());
}, WTF_MOBModel.App_PhoneContactsList), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Contact_PhoneContactsToValidate", "contact_PhoneContactsToValidateVar", "Contact_PhoneContactsToValidate", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_PhoneContactsRec());
}, WTF_BPModel.App_PhoneContactsRec), 
this.attr("App_picture", "app_pictureVar", "App_picture", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_PictureRec());
}, WTF_BPModel.App_PictureRec), 
this.attr("GetLocalUSERWTF", "getLocalUSERWTFAggr", "getLocalUSERWTFAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalUSERWTFAggrRec());
}, GetLocalUSERWTFAggrRec)
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
Input_MSISDN: OS.Model.ValidationWidgetRecord,
Input_MSISDN2: OS.Model.ValidationWidgetRecord
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
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "FilePlugin.controller", "MobileUIWidgets.controller", "CommonPlugin.model", "ContactsPlugin.controller", "WTF_MBP.controller", "WTF_BP.model", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.mvc$model", "WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.ZonaFlow.ContactPhoto.mvc$view", "FilePlugin.controller$CheckFilePlugin", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$FilePlugin", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "ContactsPlugin.controller$CheckContactsPlugin", "WTF_MOB.referencesHealth$ContactsPlugin", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$App_PhoneContactsList", "WTF_MBP.controller$FilterListContacts", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$ContactList", "ContactsPlugin.controller$FindContact", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$ContactFieldList", "WTF_BP.model$App_PhoneContactsRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$ValidateMsisdnIsWTF", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_PictureRec", "WTF_MBP.controller$SecretFriend_VerifyAlreadySendAllOffers", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, FilePluginController, MobileUIWidgetsController, CommonPluginModel, ContactsPluginController, WTF_MBPController, WTF_BPModel, WTF_MBPModel, React, OSView, WTF_MOB_ZonaFlow_SecretFriend_Send_SelectMsisdn_mvc_model, WTF_MOB_ZonaFlow_SecretFriend_Send_SelectMsisdn_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_ContactPhoto_mvc_view) {
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
        View.displayName = "ZonaFlow.SecretFriend_Send_SelectMsisdn";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_ContactPhoto_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_SecretFriend_Send_SelectMsisdn_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ZonaFlow_SecretFriend_Send_SelectMsisdn_mvc_controller;
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
ContentClass: "form b-warmPurple",
HasBackgroundChristmas: true,
PageSection: "Amigo Secreto",
PageTitle: "Escolher Amigo",
PageType: "Operação",
ScreenName: "SecretFriend_Send_SelectMsisdn"
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
Title: "Amigo Secreto",
PageControllsBack: true
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backEvent$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.headerLvl2BackEvent$Action(controller.callContext(eventHandlerContext));
});
;
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
style: "pa-8",
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.contactList_LoadingVar, false, this, function () {
return [];
}, function () {
return [$if(!(model.variables.contactList_ShowVar), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
imageContent: model.variables.app_pictureVar.contentAttr,
style: "mb-16",
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "Q5_h1Ue+lEyUPL9qq65nJg"
},
gridProperties: {
marginTop: "20px"
},
style: "c-white",
value: "Este Natal, o WTF ajuda-te a espalhar magia",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 b-white pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Chuta ai o número de telemóvel do teu amigo WTF a quem vais enviar este presente",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 pa-10",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Telemóvel",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Phone*/ 6,
mandatory: true,
maxLength: 9,
prompt: "Telemóvel",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.PhoneNumber, model.variables.secretFriend_MSISDN_PhoneVar, function (value) {
model.variables.secretFriend_MSISDN_PhoneVar = value;
}),
_idProps: {
service: idService,
name: "Input_MSISDN"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.contactList_Show$Action(controller.callContext(eventHandlerContext));
});
;
},
visible: model.variables.contactsPluginAvailableVar,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.contactos_detalhe.svg"),
style: "icon_input",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))))), $if(false, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "STNHg_RDTUaYN+LsbDyu7g"
},
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
style: "a-link c-white ma-24",
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom),
url: OS.Navigation.generateScreenURL("/WTF_MOB/ConditionsSecretFriend", {}),
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Como funciona?"))];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20",
visible: true,
_idProps: {
service: idService,
name: "ButtonContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("btn_nextStep.Enabled"), function () {
return (OS.BuiltinFunctions.length(model.variables.secretFriend_MSISDN_PhoneVar) === 9);
}, function () {
return model.variables.secretFriend_MSISDN_PhoneVar;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.selectMsisdn$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "btn_nextStep"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Escolher Amigo",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 b-white pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Procura o amigo WTF a quem queres enviar esta oferta",
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 pa-10",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Procurar",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Search*/ 8,
mandatory: true,
maxLength: 9,
prompt: "Procurar contactos",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.contactList_SearchVar, function (value) {
model.variables.contactList_SearchVar = value;
}),
_idProps: {
service: idService,
name: "Input_MSISDN2"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.contactList_Search$Action(false, controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.lupa.svg"),
style: "icon_input",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
})))))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mv-16 pa-16 b-white wtf_contact_list",
visible: !(model.variables.contactList_PhoneContactsWTFVar.isEmpty),
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-textRead c-strongPink -uppercase  -fowardSlash -ellipsis",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: " -bold",
value: "Contactos da app WTF",
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.contactList_PhoneContactsWTFVar,
style: "pv-8 list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.contactList_Select$Action(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).msisdnAttr, controller.callContext(eventHandlerContext));
});
;
},
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "contact_img left ",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(true, false, this, function () {
return [React.createElement(WTF_MOB_ZonaFlow_ContactPhoto_mvc_view, {
inputs: {
ContactPhotoURI: model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).photo_urlAttr
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
uuid: "45",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "contact_info ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "7kOEWtmE+EmkwYZ3BgUhyA"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-warmPurple",
value: model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-warmPurple",
value: model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).msisdnAttr,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "contact_img right",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.wtf_mini_logo.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).msisdnAttr), asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).photo_urlAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mv-16 pa-16 b-white other_contact_list",
visible: !(model.variables.contactList_PhoneContactsOthersVar.isEmpty),
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-textRead c-strongPink -uppercase  -fowardSlash -ellipsis",
visible: true,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: " -bold",
value: "Outros contactos",
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.List, {
animateItems: true,
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
source: model.variables.contactList_PhoneContactsOthersVar,
style: "pv-8 list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.contactList_Select$Action(model.variables.contactList_PhoneContactsOthersVar.getCurrent(callContext.iterationContext).msisdnAttr, controller.callContext(eventHandlerContext));
});
;
},
style: "list-item",
triggerActionOnFullSwipeLeft: true,
triggerActionOnFullSwipeRight: true,
_idProps: {
service: idService,
name: "ListItem3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "contact_img left ",
visible: true,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(true, false, this, function () {
return [React.createElement(WTF_MOB_ZonaFlow_ContactPhoto_mvc_view, {
inputs: {
ContactPhotoURI: model.variables.contactList_PhoneContactsOthersVar.getCurrent(callContext.iterationContext).photo_urlAttr
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
uuid: "58",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: "contact_info ph-8",
visible: true,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "02GW1rH0bEmygaT6d_pxNw"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-warmPurple",
value: model.variables.contactList_PhoneContactsOthersVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-warmPurple",
value: model.variables.contactList_PhoneContactsOthersVar.getCurrent(callContext.iterationContext).msisdnAttr,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.contactList_PhoneContactsOthersVar.getCurrent(callContext.iterationContext).msisdnAttr), asPrimitiveValue(model.variables.contactList_PhoneContactsOthersVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.contactList_PhoneContactsOthersVar.getCurrent(callContext.iterationContext).photo_urlAttr)]
})];
}, callContext, idService, "2")
},
_dependencies: []
}))];
})];
}))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.contactList_PhoneContactsOthersVar), asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar), asPrimitiveValue(model.variables.contactList_SearchVar), asPrimitiveValue(model.variables.contactsPluginAvailableVar), asPrimitiveValue(model.variables.secretFriend_MSISDN_PhoneVar), asPrimitiveValue(model.variables.app_pictureVar.contentAttr), asPrimitiveValue(model.variables.contactList_ShowVar), asPrimitiveValue(model.variables.contactList_LoadingVar), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "FilePlugin.controller", "MobileUIWidgets.controller", "CommonPlugin.model", "ContactsPlugin.controller", "WTF_MBP.controller", "WTF_BP.model", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ZonaFlow.controller", "WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.mvc$controller.SelectMsisdn.ValidateInputFormatJS", "FilePlugin.controller$CheckFilePlugin", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$FilePlugin", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "ContactsPlugin.controller$CheckContactsPlugin", "WTF_MOB.referencesHealth$ContactsPlugin", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.model$App_PhoneContactsList", "WTF_MBP.controller$FilterListContacts", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$ContactList", "ContactsPlugin.controller$FindContact", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$ContactFieldList", "WTF_BP.model$App_PhoneContactsRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_MBP.controller$ValidateMsisdnIsWTF", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MBP.model$Local_PICTURERec", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_BP.model$App_PictureRec", "WTF_MBP.controller$SecretFriend_VerifyAlreadySendAllOffers", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, FilePluginController, MobileUIWidgetsController, CommonPluginModel, ContactsPluginController, WTF_MBPController, WTF_BPModel, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ZonaFlowController, WTF_MOB_ZonaFlow_SecretFriend_Send_SelectMsisdn_mvc_controller_SelectMsisdn_ValidateInputFormatJS) {
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
Controller.prototype.getLocalUSERWTF$AggrRefresh = function (maxRecords) {
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
return model.variables.getLocalUSERWTFAggr;
}, function () {
return controller._getLocalUSERWTFOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTF$AggrRefresh"];
// Client Actions
Controller.prototype._contactList_Show$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ContactList_Show");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.ContactList_Show$vars"))());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var checkContactsPluginVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var filterListContactsVar = new OS.DataTypes.VariableHolder();
var findContactVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// ContactList_Loading = True
model.variables.contactList_LoadingVar = true;
// Execute Action: CheckFilePlugin
checkFilePluginVar.value = FilePluginController.default.checkFilePlugin$Action(callContext);

// Execute Action: CheckContactsPlugin
checkContactsPluginVar.value = ContactsPluginController.default.checkContactsPlugin$Action(callContext);

return OS.Flow.executeSequence(function () {
if(((checkContactsPluginVar.value.isAvailableOut && checkFilePluginVar.value.isAvailableOut))) {
// Execute Action: FindContact
model.flush();
return ContactsPluginController.default.findContact$Action("", true, callContext).then(function (value) {
findContactVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((findContactVar.value.successOut)) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Amigo Secreto", "Ver lista de contactos", 0, "", callContext).then(function () {
// Foreach FindContact.Contacts
callContext.iterationContext.registerIterationStart(findContactVar.value.contactsOut);
}).then(function () {
try {var contactsIterator = callContext.iterationContext.getIterator(findContactVar.value.contactsOut);
var contactsIndex = 0;
while (((contactsIndex < findContactVar.value.contactsOut.length))) {
contactsIterator.currentRowNumber = contactsIndex;
// Contact_PhoneContactsToValidate.Name = FindContact.Contacts.Current.Name.Formatted
model.variables.contact_PhoneContactsToValidateVar.nameAttr = findContactVar.value.contactsOut.getItem(contactsIndex.valueOf()).nameAttr.formattedAttr;
// Contact_PhoneContactsToValidate.Photo_url = FindContact.Contacts.Current.Photos.Current.Value
model.variables.contact_PhoneContactsToValidateVar.photo_urlAttr = findContactVar.value.contactsOut.getItem(contactsIndex.valueOf()).photosAttr.getCurrent(callContext.iterationContext).valueAttr;
// Contact_PhoneContactsToValidate.IsWtf = False
model.variables.contact_PhoneContactsToValidateVar.isWtfAttr = false;
// PhoneNumbers
// Foreach FindContact.Contacts.Current.PhoneNumbers
callContext.iterationContext.registerIterationStart(findContactVar.value.contactsOut.getItem(contactsIndex.valueOf()).phoneNumbersAttr);
try {var phoneNumbersIterator = callContext.iterationContext.getIterator(findContactVar.value.contactsOut.getItem(contactsIndex.valueOf()).phoneNumbersAttr);
var phoneNumbersIndex = 0;
while (((phoneNumbersIndex < findContactVar.value.contactsOut.getItem(contactsIndex.valueOf()).phoneNumbersAttr.length))) {
phoneNumbersIterator.currentRowNumber = phoneNumbersIndex;
// MsisdnAux = FindContact.Contacts.Current.PhoneNumbers.Current.Value
vars.value.msisdnAuxVar = findContactVar.value.contactsOut.getItem(contactsIndex.valueOf()).phoneNumbersAttr.getItem(phoneNumbersIndex.valueOf()).valueAttr;
if(((((vars.value.msisdnAuxVar) !== ("")) && ((OS.BuiltinFunctions.substr(vars.value.msisdnAuxVar, 0, 1) === "9") || (OS.BuiltinFunctions.substr(vars.value.msisdnAuxVar, 0, 4) === "+351"))))) {
// Contact_PhoneContactsToValidate.Msisdn = TextToInteger
model.variables.contact_PhoneContactsToValidateVar.msisdnAttr = (OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.replace(OS.BuiltinFunctions.replace(OS.BuiltinFunctions.replace(vars.value.msisdnAuxVar, "+351", ""), "-", ""), " ", ""))).toString();
if(((((model.variables.contact_PhoneContactsToValidateVar.msisdnAttr) !== ("0")) && (OS.BuiltinFunctions.substr(model.variables.contact_PhoneContactsToValidateVar.msisdnAttr, 0, 1) === "9")))) {
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.contactList_PhoneContactsToValidateVar, model.variables.contact_PhoneContactsToValidateVar, callContext);
}

}

phoneNumbersIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(findContactVar.value.contactsOut.getItem(contactsIndex.valueOf()).phoneNumbersAttr);
}

contactsIndex++;
}

} finally {
callContext.iterationContext.registerIterationEnd(findContactVar.value.contactsOut);
}

return OS.Flow.executeSequence(function () {
if((!(model.variables.contactList_PhoneContactsToValidateVar.isEmpty))) {
// Execute Action: FilterListContacts
model.flush();
return WTF_MBPController.default.filterListContacts$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refreshTokenVar, model.variables.contactList_PhoneContactsToValidateVar, callContext).then(function (value) {
filterListContactsVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((filterListContactsVar.value.successOut)) {
// ContactList_PhoneContactsToValidate = FilterListContacts.App_PhoneContactsFilter
model.variables.contactList_PhoneContactsToValidateVar = filterListContactsVar.value.app_PhoneContactsFilterOut;
// Execute Action: ContactList_SearchInit
return controller._contactList_Search$Action(true, callContext).then(function () {
// ContactList_Show = True
model.variables.contactList_ShowVar = true;
});
} else {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action(filterListContactsVar.value.messageOut, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
}

});
});
}

});
});
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Oops, não foi possivel aceder aos teus contactos.", 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
}

});
});
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(checkContactsPluginVar.value.errorOut.errorMessageAttr, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
}

}).then(function () {
// ContactList_Loading = False
model.variables.contactList_LoadingVar = false;
// IsLoading = False
model.variables.isLoadingVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("SecretFriend_Send_SelectMsisdn.ContactList_Show", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: CustomFeedbackMessage5
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.ContactList_Show$vars", [{
name: "MsisdnAux",
attrName: "msisdnAuxVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._selectMsisdn$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SelectMsisdn");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var secretFriend_ValidateMsisdnVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var validateInputFormatJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Amigo Secreto", "Escolher Amigo", 0, "", callContext).then(function () {
// SecretFriend_MSISDN = TextToInteger
model.variables.secretFriend_MSISDNVar = OS.BuiltinFunctions.textToInteger(model.variables.secretFriend_MSISDN_PhoneVar);
// IsLoading = True
model.variables.isLoadingVar = true;
validateInputFormatJSResult.value = controller.safeExecuteJSNode(WTF_MOB_ZonaFlow_SecretFriend_Send_SelectMsisdn_mvc_controller_SelectMsisdn_ValidateInputFormatJS, "ValidateInputFormat", "SelectMsisdn", {
Value: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.secretFriend_MSISDNVar, OS.Types.Integer, true),
IsValid: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.SelectMsisdn$validateInputFormatJSResult"))();
jsNodeResult.isValidOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.IsValid, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((validateInputFormatJSResult.value.isValidOut)) {
// Execute Action: SecretFriend_ValidateMsisdn
model.flush();
return WTF_MBPController.default.validateMsisdnIsWTF$Action(model.variables.secretFriend_MSISDNVar, callContext).then(function (value) {
secretFriend_ValidateMsisdnVar.value = value;
}).then(function () {
if((secretFriend_ValidateMsisdnVar.value.successOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
// IsWTF?
if((secretFriend_ValidateMsisdnVar.value.isWtfOut)) {
// Destination: /WTF_MOB/SecretFriend_Send_ChooseOffer
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SecretFriend_Send_ChooseOffer", {
SecretFriend_MSISDN: model.variables.secretFriend_MSISDNVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
} else {
// Destination: /WTF_MOB/SecretFriend_OfferSent_Error
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SecretFriend_OfferSent_Error", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

} else {
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), true, callContext);
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(secretFriend_ValidateMsisdnVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
}

});
} else {
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), true, callContext);
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Formato do nº de telemóvel inválido", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
}

});
});
}).catch(function (ex) {
OS.Logger.trace("SecretFriend_Send_SelectMsisdn.SelectMsisdn", OS.Exceptions.getMessage(ex), ex.name);
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
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), true, callContext);
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.SelectMsisdn$validateInputFormatJSResult", [{
name: "IsValid",
attrName: "isValidOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._headerLvl2BackEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("HeaderLvl2BackEvent");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((model.variables.contactList_ShowVar)) {
// Execute Action: ContactList_Hide
return controller._contactList_Hide$Action(callContext);
} else {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
};
Controller.prototype._contactList_Select$Action = function (msisdnIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ContactList_Select");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.ContactList_Select$vars"))());
vars.value.msisdnInLocal = msisdnIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// SecretFriend_MSISDN
// SecretFriend_MSISDN_Phone = Msisdn
model.variables.secretFriend_MSISDN_PhoneVar = vars.value.msisdnInLocal;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Amigo Secreto", "Selecionar contacto", 0, "", callContext).then(function () {
// Execute Action: ContactList_Hide
return controller._contactList_Hide$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("SecretFriend_Send_SelectMsisdn.ContactList_Select", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.ContactList_Select$vars", [{
name: "Msisdn",
attrName: "msisdnInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
// Execute Action: ListClear
OS.SystemActions.listClear(model.variables.contactList_PhoneContactsToValidateVar, callContext);
// Execute Action: ListClear2
OS.SystemActions.listClear(model.variables.contactList_PhoneContactsWTFVar, callContext);
// Execute Action: ListClear3
OS.SystemActions.listClear(model.variables.contactList_PhoneContactsOthersVar, callContext);
};
Controller.prototype._getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFOnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkContactsPluginVar = new OS.DataTypes.VariableHolder();
var getAndSyncLocalPictureByIdVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var secretFriend_VerifyAlreadySendAllOffersVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Escolher Amigo"
model.variables.analyticsAuxVarVar.traceNameAttr = "Escolher Amigo";
// AnalyticsAuxVar.Category = "Amigo Secreto"
model.variables.analyticsAuxVarVar.categoryAttr = "Amigo Secreto";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Aggregate: GetLocalACCESSTOKENINFO
var getLocalACCESSTOKENINFOAggr = function (maxRecords) {
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
orderBySql += " ORDER BY \"ENLocal_ACCESS_TOKEN_INFO\".\"Refresh_token\" ASC ";
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
return getLocalACCESSTOKENINFOVar.value;
});
};
return getLocalACCESSTOKENINFOAggr();
}).then(function () {
// RefreshToken = GetLocalACCESSTOKENINFO.List.Current.Local_ACCESS_TOKEN_INFO.Refresh_token
model.variables.refreshTokenVar = getLocalACCESSTOKENINFOVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr;
// Execute Action: SecretFriend_VerifyAlreadySendAllOffers
model.flush();
return WTF_MBPController.default.secretFriend_VerifyAlreadySendAllOffers$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refreshTokenVar, callContext).then(function (value) {
secretFriend_VerifyAlreadySendAllOffersVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((secretFriend_VerifyAlreadySendAllOffersVar.value.successOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
// AfterReady = True
model.variables.afterReadyVar = true;
// Execute Action: GetAndSyncLocalPictureById
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(OS.BuiltinFunctions.longIntegerToIdentifier(secretFriend_VerifyAlreadySendAllOffersVar.value.app_SendPictureOut.pictureIdAttr), callContext).then(function (value) {
getAndSyncLocalPictureByIdVar.value = value;
}).then(function () {
// App_picture = GetAndSyncLocalPictureById.Picture
model.variables.app_pictureVar = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureByIdVar.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
// Execute Action: CheckContactsPlugin
checkContactsPluginVar.value = ContactsPluginController.default.checkContactsPlugin$Action(callContext);

// ContactsPluginAvailable = CheckContactsPlugin.IsAvailable
model.variables.contactsPluginAvailableVar = checkContactsPluginVar.value.isAvailableOut;
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
});
} else {
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action(secretFriend_VerifyAlreadySendAllOffersVar.value.messageOut, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
}).catch(function (ex) {
OS.Logger.trace("SecretFriend_Send_SelectMsisdn.GetLocalUSERWTFOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Execute Action: StopTrace3
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
Controller.prototype._contactList_Search$Action = function (fromInitialIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ContactList_Search");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.ContactList_Search$vars"))());
vars.value.fromInitialInLocal = fromInitialIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var listFilterOthersVar = new OS.DataTypes.VariableHolder();
var listFilterWTF2Var = new OS.DataTypes.VariableHolder();
var listFilterWTFVar = new OS.DataTypes.VariableHolder();
var listFilterOthers2Var = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
return OS.Flow.executeSequence(function () {
if((!(vars.value.fromInitialInLocal))) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Amigo Secreto", "Procurar contacto", 0, "", callContext);
}

}).then(function () {
// Execute Action: ListFilterWTF
listFilterWTFVar.value = OS.SystemActions.listFilter(model.variables.contactList_PhoneContactsToValidateVar, function (p) {
return p.isWtfAttr;
}, callContext);

// Execute Action: ListFilterOthers
listFilterOthersVar.value = OS.SystemActions.listFilter(model.variables.contactList_PhoneContactsToValidateVar, function (p) {
return !(p.isWtfAttr);
}, callContext);

// ContactList_PhoneContactsWTF = ListFilterWTF.FilteredList
model.variables.contactList_PhoneContactsWTFVar = listFilterWTFVar.value.filteredListOut;
// ContactList_PhoneContactsOthers = ListFilterOthers.FilteredList
model.variables.contactList_PhoneContactsOthersVar = listFilterOthersVar.value.filteredListOut;
if((!((model.variables.contactList_SearchVar === "")))) {
// Execute Action: ListFilterWTF2
listFilterWTF2Var.value = OS.SystemActions.listFilter(model.variables.contactList_PhoneContactsWTFVar, function (p) {
return ((OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(p.msisdnAttr), OS.BuiltinFunctions.toLower(model.variables.contactList_SearchVar), 0, false, false) >= 0) || (OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(p.nameAttr), OS.BuiltinFunctions.toLower(model.variables.contactList_SearchVar), 0, false, false) >= 0));
}, callContext);

// Execute Action: ListFilterOthers2
listFilterOthers2Var.value = OS.SystemActions.listFilter(model.variables.contactList_PhoneContactsOthersVar, function (p) {
return ((OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(p.msisdnAttr), OS.BuiltinFunctions.toLower(model.variables.contactList_SearchVar), 0, false, false) >= 0) || (OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(p.nameAttr), OS.BuiltinFunctions.toLower(model.variables.contactList_SearchVar), 0, false, false) >= 0));
}, callContext);

// ContactList_PhoneContactsWTF = ListFilterWTF2.FilteredList
model.variables.contactList_PhoneContactsWTFVar = listFilterWTF2Var.value.filteredListOut;
// ContactList_PhoneContactsOthers = ListFilterOthers2.FilteredList
model.variables.contactList_PhoneContactsOthersVar = listFilterOthers2Var.value.filteredListOut;
}

// IsLoading = False
model.variables.isLoadingVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("SecretFriend_Send_SelectMsisdn.ContactList_Search", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.ContactList_Search$vars", [{
name: "FromInitial",
attrName: "fromInitialInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._contactList_Hide$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ContactList_Hide");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// ContactList_Show = False
model.variables.contactList_ShowVar = false;
// Execute Action: OnDestroy
controller._onDestroy$Action(callContext);
}).catch(function (ex) {
OS.Logger.trace("SecretFriend_Send_SelectMsisdn.ContactList_Hide", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: CustomFeedbackMessage4
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
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
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action("Ocorreu um erro. Por favor tenta novamente.", 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
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

Controller.prototype.contactList_Show$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._contactList_Show$Action, callContext);

};
Controller.prototype.selectMsisdn$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectMsisdn$Action, callContext);

};
Controller.prototype.headerLvl2BackEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._headerLvl2BackEvent$Action, callContext);

};
Controller.prototype.contactList_Select$Action = function (msisdnIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._contactList_Select$Action, callContext, msisdnIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFOnAfterFetch$Action, callContext);

};
Controller.prototype.contactList_Search$Action = function (fromInitialIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._contactList_Search$Action, callContext, fromInitialIn);

};
Controller.prototype.contactList_Hide$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._contactList_Hide$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

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
define("WTF_MOB.ZonaFlow.SecretFriend_Send_SelectMsisdn.mvc$controller.SelectMsisdn.ValidateInputFormatJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var regex = new RegExp('^[0-9]*$');

$parameters.IsValid = regex.test($parameters.Value);
};
});

