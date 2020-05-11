define("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$model", ["OutSystems", "WTF_MOB.model", "MobileUIWidgets.controller", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "CommonPlugin.model", "ContactsPlugin.controller", "FilePlugin.controller", "WTF_BP.model", "SocialSharingPlugin.controller", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.ZonaFlow.ContactPhoto.mvc$model", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$App_PhoneContactsList", "WTF_MOB.model$App_PhoneContactsMOBList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$App_PhoneContactsMOBRec", "WTF_MBP.controller$SharePrizeWithMsisdns", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$FilterListContacts", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "ContactsPlugin.controller$CheckContactsPlugin", "WTF_MOB.referencesHealth$ContactsPlugin", "WTF_MOB.model$ContactList", "ContactsPlugin.controller$FindContact", "FilePlugin.controller$CheckFilePlugin", "WTF_MOB.referencesHealth$FilePlugin", "WTF_MOB.model$ContactFieldList", "WTF_BP.model$App_PhoneContactsRec", "WTF_MOB.referencesHealth$WTF_BP", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "WTF_MOB.referencesHealth$SocialSharingPlugin", "WTF_MBP.controller$GetConfigValueAsText_MBP", "SocialSharingPlugin.controller$SocialSharing", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, MobileUIWidgetsController, WTF_MOBController, WTF_MBPController, WTF_MBPModel, CommonPluginModel, ContactsPluginController, FilePluginController, WTF_BPModel, SocialSharingPluginController, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, WTF_MOB_Common_Waiting_mvcModel, WTF_MOB_ZonaFlow_ContactPhoto_mvcModel) {
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
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("AfterReady", "afterReadyVar", "AfterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("ContactList_PhoneContactsToValidate", "contactList_PhoneContactsToValidateVar", "ContactList_PhoneContactsToValidate", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PhoneContactsList());
}, WTF_MOBModel.App_PhoneContactsList), 
this.attr("ContactList_PhoneContactsWTF", "contactList_PhoneContactsWTFVar", "ContactList_PhoneContactsWTF", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PhoneContactsMOBList());
}, WTF_MOBModel.App_PhoneContactsMOBList), 
this.attr("RefreshToken", "refreshTokenVar", "RefreshToken", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Contact_PhoneContactsToValidate", "contact_PhoneContactsToValidateVar", "Contact_PhoneContactsToValidate", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.App_PhoneContactsRec());
}, WTF_BPModel.App_PhoneContactsRec), 
this.attr("ContactList_PhoneContactsToSend", "contactList_PhoneContactsToSendVar", "ContactList_PhoneContactsToSend", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_PhoneContactsList());
}, WTF_MOBModel.App_PhoneContactsList), 
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets) || WTF_MOB_ZonaFlow_ContactPhoto_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("PrizeName" in inputs) {
this.variables.prizeNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.PrizeName, OS.Types.Text);
}

if("DiamondTypeName" in inputs) {
this.variables.diamondTypeNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.DiamondTypeName, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "CommonPlugin.model", "ContactsPlugin.controller", "FilePlugin.controller", "WTF_BP.model", "SocialSharingPlugin.controller", "react", "OutSystemsReactView", "WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$model", "WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.ZonaFlow.ContactPhoto.mvc$view", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$App_PhoneContactsList", "WTF_MOB.model$App_PhoneContactsMOBList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$App_PhoneContactsMOBRec", "WTF_MBP.controller$SharePrizeWithMsisdns", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$FilterListContacts", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "ContactsPlugin.controller$CheckContactsPlugin", "WTF_MOB.referencesHealth$ContactsPlugin", "WTF_MOB.model$ContactList", "ContactsPlugin.controller$FindContact", "FilePlugin.controller$CheckFilePlugin", "WTF_MOB.referencesHealth$FilePlugin", "WTF_MOB.model$ContactFieldList", "WTF_BP.model$App_PhoneContactsRec", "WTF_MOB.referencesHealth$WTF_BP", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "WTF_MOB.referencesHealth$SocialSharingPlugin", "WTF_MBP.controller$GetConfigValueAsText_MBP", "SocialSharingPlugin.controller$SocialSharing", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, CommonPluginModel, ContactsPluginController, FilePluginController, WTF_BPModel, SocialSharingPluginController, React, OSView, WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_model, WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_ContactPhoto_mvc_view) {
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
        View.displayName = "ScratchFlow.Scratch_SelectMsisdns";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_ZonaFlow_ContactPhoto_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_controller;
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
PageType: "Operação",
Diamante: model.variables.diamondTypeNameIn,
ContentClass: "form b-warmPurple",
PageTitle: "Partilha com Amigo",
HasBackgroundChristmas: false,
Premio: model.variables.prizeNameIn,
ScreenName: "Scratch_SelectMsisdns",
PageSection: "Scratch"
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
PageControllsBack: true,
Title: "Partilha"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
backEvent$Action: function () {
var eventHandlerContext = callContext.clone();
controller.headerLvl2BackEvent$Action(controller.callContext(eventHandlerContext));

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
animate: true,
style: "pa-8",
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-16 b-white pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: (("Tens amigos sem app? Divulga que ganhaste um prémio (" + model.variables.prizeNameIn) + "). Ou avisa os teus amigos que já têm a app."),
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-8 pa-10",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mt-20",
visible: true,
_idProps: {
service: idService,
name: "ButtonContainer2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.shareOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
name: "share"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Convida para a app WTF",
_idProps: {
service: idService,
name: "ButtonTextPrimary2"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mv-16 pa-16 b-white wtf_contact_list",
visible: !(model.variables.contactList_PhoneContactsWTFVar.isEmpty),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-textRead c-strongPink -uppercase  -fowardSlash -ellipsis",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: " -bold",
value: "Contactos da app WTF",
_idProps: {
service: idService,
uuid: "15"
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
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.contactList_Select$Action(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext), model.variables.contactList_PhoneContactsWTFVar.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
});
;
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
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
style: model.getCachedValue(idService.getId("CK_hUnTAUE6K51LKky9cjQ.Style"), function () {
return ((model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).selectedAttr) ? ("selected") : (""));
}, function () {
return model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).selectedAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "contact_img left ",
visible: true,
_idProps: {
service: idService,
uuid: "19"
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
uuid: "20",
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
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "xpFYi5B4hUa4JyDvn7Pcyw"
},
gridProperties: {
classes: "OSFillParent"
},
style: "c-warmPurple",
value: model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "22"
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
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "contact_img right",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.wtf_mini_logo.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).msisdnAttr), asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).photo_urlAttr), asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar.getCurrent(callContext.iterationContext).selectedAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mt-20",
visible: !(model.variables.contactList_PhoneContactsWTFVar.isEmpty),
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
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: !(model.variables.contactList_PhoneContactsToSendVar.isEmpty),
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
value: "Escolher Amigos",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.contactList_PhoneContactsToSendVar.isEmpty), asPrimitiveValue(model.variables.contactList_PhoneContactsWTFVar), asPrimitiveValue(model.variables.prizeNameIn), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "CommonPlugin.model", "ContactsPlugin.controller", "FilePlugin.controller", "WTF_BP.model", "SocialSharingPlugin.controller", "WTF_MOB.languageResources", "WTF_MOB.ScratchFlow.controller", "WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$controller.ContactList_Select.JavaScript1JS", "WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$controller.ContactList_Select.JavaScript2JS", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$App_PhoneContactsList", "WTF_MOB.model$App_PhoneContactsMOBList", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.model$App_PhoneContactsMOBRec", "WTF_MBP.controller$SharePrizeWithMsisdns", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$FilterListContacts", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "ContactsPlugin.controller$CheckContactsPlugin", "WTF_MOB.referencesHealth$ContactsPlugin", "WTF_MOB.model$ContactList", "ContactsPlugin.controller$FindContact", "FilePlugin.controller$CheckFilePlugin", "WTF_MOB.referencesHealth$FilePlugin", "WTF_MOB.model$ContactFieldList", "WTF_BP.model$App_PhoneContactsRec", "WTF_MOB.referencesHealth$WTF_BP", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "WTF_MOB.referencesHealth$SocialSharingPlugin", "WTF_MBP.controller$GetConfigValueAsText_MBP", "SocialSharingPlugin.controller$SocialSharing", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, CommonPluginModel, ContactsPluginController, FilePluginController, WTF_BPModel, SocialSharingPluginController, WTF_MOBLanguageResources, WTF_MOB_ScratchFlowController, WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_controller_ContactList_Select_JavaScript1JS, WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_controller_ContactList_Select_JavaScript2JS) {
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
Controller.prototype._contactList_Search$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ContactList_Search");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var listFilterWTFVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: ListFilterWTF
listFilterWTFVar.value = OS.SystemActions.listFilter(model.variables.contactList_PhoneContactsToValidateVar, function (p) {
return p.isWtfAttr;
}, callContext);

// ContactList_PhoneContactsWTF = ListFilterWTF.FilteredList
model.variables.contactList_PhoneContactsWTFVar = OS.DataTypes.JSConversions.typeConvertRecordList(listFilterWTFVar.value.filteredListOut, new WTF_MOBModel.App_PhoneContactsMOBList(), function (source, target) {
target.nameAttr = source.nameAttr;
target.msisdnAttr = source.msisdnAttr;
target.photo_urlAttr = source.photo_urlAttr;
target.selectedAttr = false;
return target;
});
// IsLoading = False
model.variables.isLoadingVar = false;
}).catch(function (ex) {
OS.Logger.trace("Scratch_SelectMsisdns.ContactList_Search", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._contactList_Select$Action = function (contactList_PhoneContactsWTF_SelectedIn, currentRowNumberIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ContactList_Select");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.ContactList_Select$vars"))());
vars.value.contactList_PhoneContactsWTF_SelectedInLocal = contactList_PhoneContactsWTF_SelectedIn.clone();
vars.value.currentRowNumberInLocal = currentRowNumberIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var listIndexOfVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: ListIndexOf
listIndexOfVar.value = OS.SystemActions.listIndexOf(model.variables.contactList_PhoneContactsToSendVar, function (p) {
return (p.msisdnAttr === vars.value.contactList_PhoneContactsWTF_SelectedInLocal.msisdnAttr);
}, callContext);

return OS.Flow.executeSequence(function () {
if(((listIndexOfVar.value.positionOut >= 0))) {
// Execute Action: ListRemove2
OS.SystemActions.listRemove(model.variables.contactList_PhoneContactsToSendVar, listIndexOfVar.value.positionOut, callContext);
// ContactList_PhoneContactsWTF
// ContactList_PhoneContactsWTF[CurrentRowNumber].Selected = False
model.variables.contactList_PhoneContactsWTFVar.getItem(vars.value.currentRowNumberInLocal).selectedAttr = false;
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_controller_ContactList_Select_JavaScript2JS, "JavaScript2", "ContactList_Select", null, function ($parameters) {
}, {}, {});
// Execute Action: Analytics_SendEvent2
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch prémio ganho", "Remove amigo", 0, "", callContext);
} else {
// Execute Action: ListAppend
OS.SystemActions.listAppend(model.variables.contactList_PhoneContactsToSendVar, OS.DataTypes.JSConversions.typeConvertRecord(vars.value.contactList_PhoneContactsWTF_SelectedInLocal, new WTF_BPModel.App_PhoneContactsRec(), function (source, target) {
target.nameAttr = source.nameAttr;
target.msisdnAttr = source.msisdnAttr;
target.photo_urlAttr = source.photo_urlAttr;
target.isWtfAttr = true;
return target;
}), callContext);
// ContactList_PhoneContactsWTF
// ContactList_PhoneContactsWTF[CurrentRowNumber].Selected = True
model.variables.contactList_PhoneContactsWTFVar.getItem(vars.value.currentRowNumberInLocal).selectedAttr = true;
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_Scratch_SelectMsisdns_mvc_controller_ContactList_Select_JavaScript1JS, "JavaScript1", "ContactList_Select", null, function ($parameters) {
}, {}, {});
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch prémio ganho", "Seleciona amigo", 0, "", callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("Scratch_SelectMsisdns.ContactList_Select", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.ContactList_Select$vars", [{
name: "ContactList_PhoneContactsWTF_Selected",
attrName: "contactList_PhoneContactsWTF_SelectedInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MOBModel.App_PhoneContactsMOBRec();
},
complexType: WTF_MOBModel.App_PhoneContactsMOBRec
}, {
name: "CurrentRowNumber",
attrName: "currentRowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._selectMsisdn$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("SelectMsisdn");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var sharePrizeWithMsisdnsVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch prémio ganho", "Escolher Amigo(s)", 0, "", callContext).then(function () {
// Execute Action: SharePrizeWithMsisdns
model.flush();
return WTF_MBPController.default.sharePrizeWithMsisdns$Action(model.variables.getLocalUSERWTFAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, model.variables.refreshTokenVar, model.variables.contactList_PhoneContactsToSendVar, callContext).then(function (value) {
sharePrizeWithMsisdnsVar.value = value;
});
}).then(function () {
if((sharePrizeWithMsisdnsVar.value.successOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/Scratch_ShareSuccess
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch_ShareSuccess", {
DiamondTypeName: model.variables.diamondTypeNameIn,
PrizeName: model.variables.prizeNameIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(sharePrizeWithMsisdnsVar.value.messageOut, 1, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), true, callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("Scratch_SelectMsisdns.SelectMsisdn", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), true, callContext);
// IsLoading = False
model.variables.isLoadingVar = false;
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
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("btn_nextStep"), true, callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFOnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Partilha com Amigo"
model.variables.analyticsAuxVarVar.traceNameAttr = "Partilha com Amigo";
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
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
// Execute Action: ContactList_Show
return controller._contactList_Show$Action(callContext);
}).then(function () {
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Scratch_SelectMsisdns.GetLocalUSERWTFOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
};
Controller.prototype._contactList_Show$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ContactList_Show");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.ContactList_Show$vars"))());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var filterListContactsVar = new OS.DataTypes.VariableHolder();
var checkContactsPluginVar = new OS.DataTypes.VariableHolder();
var findContactVar = new OS.DataTypes.VariableHolder();
var checkFilePluginVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
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
// Foreach FindContact.Contacts
callContext.iterationContext.registerIterationStart(findContactVar.value.contactsOut);
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
return controller._contactList_Search$Action(callContext);
} else {
// Execute Action: CustomFeedbackMessage3
MobileUIWidgetsController.default.customFeedbackMessage$Action(filterListContactsVar.value.messageOut, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
}

});
});
}

});
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Oops, não foi possivel aceder aos teus contactos.", 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
}

});
});
}

}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// AfterReady = True
model.variables.afterReadyVar = true;
});
}).catch(function (ex) {
OS.Logger.trace("Scratch_SelectMsisdns.ContactList_Show", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.ContactList_Show$vars", [{
name: "MsisdnAux",
attrName: "msisdnAuxVar",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._shareOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShareOnClick");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var checkSocialSharingPluginVar = new OS.DataTypes.VariableHolder();
var wTF_ScratchPrizeMessageToShareVar = new OS.DataTypes.VariableHolder();
var socialSharingVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("share"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch prémio ganho", "Partilhar mensagem", 0, "", callContext).then(function () {
// Execute Action: CheckSocialSharingPlugin
checkSocialSharingPluginVar.value = SocialSharingPluginController.default.checkSocialSharingPlugin$Action(callContext);

}).then(function () {
return OS.Flow.executeSequence(function () {
if((checkSocialSharingPluginVar.value.isAvailableOut)) {
// Execute Action: WTF_ScratchPrizeMessageToShare
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("WTF_ScratchPrizeMessageToShare", callContext).then(function (value) {
wTF_ScratchPrizeMessageToShareVar.value = value;
}).then(function () {
// Execute Action: SocialSharing
model.flush();
return SocialSharingPluginController.default.socialSharing$Action(wTF_ScratchPrizeMessageToShareVar.value.valueOut, "https://app.wtf.pt", WTF_MOBModel.staticEntities.socialType.all, callContext).then(function (value) {
socialSharingVar.value = value;
});
}).then(function () {
// Execute Action: EnabledButton4
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("share"), true, callContext);
});
} else {
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("share"), true, callContext);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Scratch_SelectMsisdns.ShareOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("share"), true, callContext);
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
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("share"), true, callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._headerLvl2BackEvent$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("HeaderLvl2BackEvent");
callContext = controller.callContext(callContext);
// Destination: /WTF_MOB/Scratch
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
};

Controller.prototype.contactList_Search$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._contactList_Search$Action, callContext);

};
Controller.prototype.contactList_Select$Action = function (contactList_PhoneContactsWTF_SelectedIn, currentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._contactList_Select$Action, callContext, contactList_PhoneContactsWTF_SelectedIn, currentRowNumberIn);

};
Controller.prototype.selectMsisdn$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selectMsisdn$Action, callContext);

};
Controller.prototype.getLocalUSERWTFOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFOnAfterFetch$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.contactList_Show$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._contactList_Show$Action, callContext);

};
Controller.prototype.shareOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._shareOnClick$Action, callContext);

};
Controller.prototype.headerLvl2BackEvent$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._headerLvl2BackEvent$Action, callContext);

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
define("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$controller.ContactList_Select.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
console.error("adiciona")
};
});
define("WTF_MOB.ScratchFlow.Scratch_SelectMsisdns.mvc$controller.ContactList_Select.JavaScript2JS", [], function () {
return function ($actions, $roles, $public) {
console.error("remove")
};
});

