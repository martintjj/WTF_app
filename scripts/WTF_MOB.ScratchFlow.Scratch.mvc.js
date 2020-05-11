define("WTF_MOB.ScratchFlow.Scratch.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$setActivityLog_ScratchSilverPlay", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$setActivityLog_ScratchGoldenPlay", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$SendMGMCode", "WTF_MBP.controller$Cache_DisableByService", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond", "WTF_MBP.model$STR_CACHE_SERVICERec", "WTF_MBP.controller$GetCacheServiceID", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$ScratchDiamondsInfoRec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel) {
var OS = OutSystems.Internal;
var GetLocalUSERWTFSAggrRec = (function (_super) {
__extends(GetLocalUSERWTFSAggrRec, _super);
function GetLocalUSERWTFSAggrRec(defaults) {
_super.apply(this, arguments);
}
GetLocalUSERWTFSAggrRec.RecordListType = WTF_MOBModel.Local_USER_WTFRecordList;
GetLocalUSERWTFSAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetLocalUSERWTFSAggrRec.init();
return GetLocalUSERWTFSAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ScratchDiamondsInfo", "scratchDiamondsInfoVar", "ScratchDiamondsInfo", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.ScratchDiamondsInfoRec());
}, WTF_MOBModel.ScratchDiamondsInfoRec), 
this.attr("diamond_selected", "diamond_selectedVar", "diamond_selected", true, OS.Types.Text, function () {
return "";
}), 
this.attr("mgm_code", "mgm_codeVar", "mgm_code", true, OS.Types.Text, function () {
return "";
}), 
this.attr("mgm_isfirsttime", "mgm_isfirsttimeVar", "mgm_isfirsttime", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("rules_ndiamondsbonus", "rules_ndiamondsbonusVar", "rules_ndiamondsbonus", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("afterReady", "afterReadyVar", "afterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("GetLocalUSERWTFS", "getLocalUSERWTFSAggr", "getLocalUSERWTFSAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLocalUSERWTFSAggrRec());
}, GetLocalUSERWTFSAggrRec)
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
Input_TextVar: OS.Model.ValidationWidgetRecord
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
define("WTF_MOB.ScratchFlow.Scratch.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.ScratchFlow.Scratch.mvc$model", "WTF_MOB.ScratchFlow.Scratch.mvc$controller", "WTF_MOB.Common.Layout_Lvl1.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.ClosePopup.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "CustomTouchEvents.CustomTouchEventHandlers.Swipe_Handler.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.Common.BottomBar.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$setActivityLog_ScratchSilverPlay", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$setActivityLog_ScratchGoldenPlay", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$SendMGMCode", "WTF_MBP.controller$Cache_DisableByService", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond", "WTF_MBP.model$STR_CACHE_SERVICERec", "WTF_MBP.controller$GetCacheServiceID", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$ScratchDiamondsInfoRec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, React, OSView, WTF_MOB_ScratchFlow_Scratch_mvc_model, WTF_MOB_ScratchFlow_Scratch_mvc_controller, WTF_MOB_Common_Layout_Lvl1_mvc_view, OSWidgets, WTF_MOB_Common_ClosePopup_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, CustomTouchEvents_CustomTouchEventHandlers_Swipe_Handler_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_Common_BottomBar_mvc_view) {
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
        View.displayName = "ScratchFlow.Scratch";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchFlow.Scratch.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/CustomTouchEvents.HammerJS.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl1_mvc_view, WTF_MOB_Common_ClosePopup_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, CustomTouchEvents_CustomTouchEventHandlers_Swipe_Handler_mvc_view, WTF_MOB_Common_Waiting_mvc_view, WTF_MOB_Common_BottomBar_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_Scratch_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_Scratch_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl1_mvc_view, {
inputs: {
WithoutLogin: false,
HasOverflowHidden: true,
ScreenName: "Scratch",
PageSection: "Scratch",
IsPageLevel1: true,
PageType: "Operação",
IsOfflineMode: false,
PageTitle: "Scratch",
ContentClass: model.getCachedValue(idService.getId("YsFXHKYiAEi6qAmOSqyRMQ.ContentClass"), function () {
return ("b-transparent game-menu hasoverflowhidden" + (((model.variables.afterReadyVar === false)) ? (" skeleton") : ("")));
}, function () {
return model.variables.afterReadyVar;
})
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "3pn9+k3ceEuRtmmba2lzHg"
},
style: "pa-16",
visible: true,
_idProps: {
service: idService,
name: "Links"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_Width3"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToMenu$Action("Prémios", controller.callContext(eventHandlerContext));
});
;
},
style: "a-link c-white",
visible: true,
_idProps: {
service: idService,
name: "PrizesLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Prémios"), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_Width3 ThemeGrid_Margin1"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToMenu$Action("Amigos", controller.callContext(eventHandlerContext));
});
;
},
style: "a-link c-white",
visible: true,
_idProps: {
service: idService,
name: "FriendsLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Amigos"), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
classes: "ThemeGrid_Width3 ThemeGrid_Margin1"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToMenu$Action("Rules", controller.callContext(eventHandlerContext));
});
;
},
style: "a-link c-white",
visible: true,
_idProps: {
service: idService,
name: "RulesLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Regras")), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "game",
visible: true,
_idProps: {
service: idService,
name: "background_image"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Popup, {
extendedProperties: {
"data-style-key": "o8J2las+yEy392tEESdl+Q"
},
showPopup: (model.variables.mgm_isfirsttimeVar && model.variables.afterReadyVar),
style: "popup-dialog",
_idProps: {
service: idService,
name: "mgm"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_Common_ClosePopup_mvc_view, {
inputs: {
Class: "blue"
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
closeAction$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.mGM_OnClickClose$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "7",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "tq6fqvDR+0SaDoymOGfj2A"
},
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pb-16",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h1 c-warmPurple -bold",
value: "Quem te",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h1 c-warmPurple -bold",
value: "trouxe aqui?",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
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
extendedProperties: {
"data-style-key": "YDp07v46KUiotUCam2gxbA"
},
gridProperties: {
classes: "ThemeGrid_Width6"
},
style: "form",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-text",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Código",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "animated-label-input",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "input-text"
},
tag: "span",
_idProps: {
service: idService,
uuid: "18"
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
inputType: /*Text*/ 0,
mandatory: false,
maxLength: 5,
prompt: "Código",
style: "form-control a-input OSFillParent",
variable: model.createVariable(OS.Types.Text, model.variables.mgm_codeVar, function (value) {
model.variables.mgm_codeVar = value;
}),
_idProps: {
service: idService,
name: "Input_TextVar"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
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
uuid: "21",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("SendCode.Enabled"), function () {
return (OS.BuiltinFunctions.length(model.variables.mgm_codeVar) === 5);
}, function () {
return model.variables.mgm_codeVar;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.responseForMGM$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary -large",
visible: true,
_idProps: {
service: idService,
name: "SendCode"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "t66ne5lXukCu5NTB00H7Ww"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.group_yellow.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.mgm_codeVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
marginTop: "20px"
},
style: "ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "mv-24",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "desc_mgm c-warmPurple",
value: "Cola aqui o código e tu e o teu amigo saem a ganhar",
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "XLjQgRBGCkmy32IvQHkzTw"
},
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToMenu$Action("Amigos", controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Como convidar amigos",
_idProps: {
service: idService,
name: "Link2"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Popup, {
showPopup: (!(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.hasPartDiaryTodayAttr) && model.variables.afterReadyVar),
style: "popup-dialog diary-content",
_idProps: {
service: idService,
name: "diamond_diary"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "Q7MXl67PekWhOWieSwTM3A"
},
style: "b-white pv-16",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "text-center mb-16"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h1 c-blue -shadow -bold",
value: model.getCachedValue(idService.getId("7B84UF6_ykiJ8RQhCIwZQg.Value"), function () {
return ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? ("Dá-lhe mais um dia") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(2))) ? ("Brilhantes diamantes?") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(3))) ? ("Estás lá quase") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(4))) ? ("Dá-lhe mais um dia") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(5))) ? ("Este Bling Bling é teu!") : (""))))))))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr;
}),
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "diamonds",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("lRJejZOsKUyvKYZsuNe5BQ.Style"), function () {
return ("day text-center " + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? ("active") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(1))) ? ("blue") : ("")))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr;
}),
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
value: "Dia 1",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.bligblingsnormal.svg"),
style: "diamond",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(1)), false, this, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.blocked.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.check.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("ZEZLAlOAs0yIh8XLJbolaQ.Style"), function () {
return ("day text-center " + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(2))) ? ("active") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(2))) ? ("blue") : ("")))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Dia 2",
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.bligblingsnormal.svg"),
style: "diamond",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "42"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(2)), false, this, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.blocked.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.check.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("dzn23j_Zt06F7KeHVWEmyQ.Style"), function () {
return ("day text-center " + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(3))) ? ("active") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(3))) ? ("blue") : ("")))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Dia 3",
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.bligblingsnormal.svg"),
style: "diamond",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(3)), false, this, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.blocked.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.check.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("YEErk3MToEu_SwK91QxByw.Style"), function () {
return ("day text-center " + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(4))) ? ("active") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(4))) ? ("blue") : ("")))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Dia 4",
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.bligblingsnormal.svg"),
style: "diamond",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(4)), false, this, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.blocked.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.check.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("8GpOGLzcekKVE0R0TsVR9g.Style"), function () {
return ("day text-center " + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(5))) ? ("active") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(5))) ? ("blue") : ("")))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "Dia 5",
_idProps: {
service: idService,
uuid: "56"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.bligblingsnormal.svg"),
style: "diamond",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "57"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.lt(OS.BuiltinFunctions.integerToLongInteger(5)), false, this, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.blocked.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "58"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.check.svg"),
style: "status",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "59"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-white pb-16 ph-16 pt-72",
visible: true,
_idProps: {
service: idService,
uuid: "60"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center c-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "61"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "I8QuLSHs50urFinm9bpABA"
},
value: model.getCachedValue(idService.getId("I8QuLSHs50urFinm9bpABA.Value"), function () {
return ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? ("Visita esta página mais 4 dias e completa o teu Bling Bling!") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(2))) ? ("Visita esta página mais 3 dias e saca 1 bling bling") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(3))) ? ("Já estiveste mais longe de ganhar 1 bling bling") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(4))) ? ("Volta amanhã e levas 1 bling bling para jogar e ganhar") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(5))) ? ("Congrats! Ganhaste um Bling Bling Silver, faz Scratch") : (""))))))))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr;
}),
_idProps: {
service: idService,
uuid: "62"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pt-16",
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
controller.diamondDiary_ContinueOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary",
visible: true,
_idProps: {
service: idService,
uuid: "64"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Dá-lhe no scratch",
_idProps: {
service: idService,
name: "ButtonTextPrimary3"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-hashtag",
visible: true,
_idProps: {
service: idService,
uuid: "66"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.sqp.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "67"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content-hashtag-rect",
visible: true,
_idProps: {
service: idService,
uuid: "68"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center game-title",
visible: true,
_idProps: {
service: idService,
uuid: "69"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "a-flexCardTitle app-title text-center"
},
tag: "span",
_idProps: {
service: idService,
name: "CardTitle2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-yellow",
value: "Faz Scratch",
_idProps: {
service: idService,
uuid: "71"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-yellow",
value: "e ganha prémios",
_idProps: {
service: idService,
uuid: "72"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "game-content",
visible: true,
_idProps: {
service: idService,
uuid: "73"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "game-actions",
visible: true,
_idProps: {
service: idService,
uuid: "74"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("menu.Style"), function () {
return ("bling-menu" + (((model.variables.diamond_selectedVar === "Silver")) ? (" right") : ("")));
}, function () {
return model.variables.diamond_selectedVar;
}),
visible: true,
_idProps: {
service: idService,
name: "menu"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
gridProperties: {
classes: "ThemeGrid_Width4"
},
style: "text-center",
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "76"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.changeDiamondSelected$Action("Silver", controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("mM+GP_0nz0yqEBAaodHtgg.Style"), function () {
return ("icon" + (((model.variables.diamond_selectedVar === "Silver")) ? (" active") : ("")));
}, function () {
return model.variables.diamond_selectedVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "77"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardTitle title",
value: "Silver",
_idProps: {
service: idService,
uuid: "78"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
tag: "p",
_idProps: {
service: idService,
uuid: "79"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardTitle score",
value: OS.BuiltinFunctions.longIntegerToText(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr),
_idProps: {
service: idService,
uuid: "80"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-box",
visible: true,
_idProps: {
service: idService,
name: "silver_diamond"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator normal",
visible: true,
_idProps: {
service: idService,
uuid: "82"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "description text-center",
visible: true,
_idProps: {
service: idService,
uuid: "83"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "p",
_idProps: {
service: idService,
uuid: "84"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardDesc",
value: model.getCachedValue(idService.getId("I6yUdSSBHEqRfB2V+F5G1Q.Value"), function () {
return ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0))) ? ("Não há diamantes aqui. Carrega Saldo para ganhares.") : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTodayAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (((("Tens " + OS.BuiltinFunctions.longIntegerToText(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTodayAttr)) + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTodayAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" diamante") : (" diamantes"))) + " a expirar hoje.")) : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTomorrowAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (((("Tens " + OS.BuiltinFunctions.longIntegerToText(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTomorrowAttr)) + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTomorrowAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" diamante") : (" diamantes"))) + " para usares até amanhã.")) : (((("Tens " + OS.BuiltinFunctions.longIntegerToText(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr)) + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" diamante") : (" diamantes"))) + " para usares nos próximos dias.")))))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTodayAttr;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTomorrowAttr;
}),
_idProps: {
service: idService,
uuid: "85"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
gridProperties: {
classes: "ThemeGrid_Width4 ThemeGrid_MarginGutter"
},
style: "text-center",
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "86"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.changeDiamondSelected$Action("Golden", controller.callContext(eventHandlerContext));
});
;
}
},
style: model.getCachedValue(idService.getId("Ef48Op_xjEGgQelp65gCkw.Style"), function () {
return ("icon" + (((model.variables.diamond_selectedVar === "Golden")) ? (" active") : ("")));
}, function () {
return model.variables.diamond_selectedVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "87"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardTitle title",
value: "Golden",
_idProps: {
service: idService,
uuid: "88"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.AdvancedHtml, {
tag: "p",
_idProps: {
service: idService,
uuid: "89"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardTitle score",
value: OS.BuiltinFunctions.longIntegerToText(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr),
_idProps: {
service: idService,
uuid: "90"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-box",
visible: true,
_idProps: {
service: idService,
uuid: "91"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("golden_diamond.style"), function () {
return ("height:  " + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? ("100%") : ((OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.partsAttr).div(OS.BuiltinFunctions.integerToDecimal(8)).times(OS.BuiltinFunctions.integerToDecimal(100))) + "%"))));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.partsAttr;
})
},
style: "indicator golden",
visible: true,
_idProps: {
service: idService,
name: "golden_diamond"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "description text-center",
visible: true,
_idProps: {
service: idService,
uuid: "93"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "p",
_idProps: {
service: idService,
uuid: "94"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardDesc",
value: model.getCachedValue(idService.getId("1Ao0ipOjgUen3VVfiVwKSg.Value"), function () {
return ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalExpireTodayAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (((("Tens " + OS.BuiltinFunctions.longIntegerToText(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalExpireTodayAttr)) + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalExpireTodayAttr.equals(OS.BuiltinFunctions.integerToLongInteger(1))) ? (" diamante") : (" diamantes"))) + " a expirar hoje.")) : ((((("Junta " + OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.integerToLongInteger(8).sub(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.partsAttr))) + " Silver para teres") + ((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(0))) ? (" ") : (" mais "))) + "1 Golden.")));
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalExpireTodayAttr;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.partsAttr;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr;
}),
_idProps: {
service: idService,
uuid: "95"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4 ThemeGrid_MarginGutter"
},
style: "text-center",
visible: false,
_idProps: {
service: idService,
uuid: "96"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "icon",
visible: true,
_idProps: {
service: idService,
uuid: "97"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardTitle title",
value: "Special",
_idProps: {
service: idService,
uuid: "98"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-box",
visible: true,
_idProps: {
service: idService,
uuid: "99"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: (("height:  " + OS.BuiltinFunctions.decimalToText(OS.BuiltinFunctions.longIntegerToDecimal(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr).div(OS.BuiltinFunctions.integerToDecimal(5)).times(OS.BuiltinFunctions.integerToDecimal(100)))) + "%")
},
style: "indicator special",
visible: true,
_idProps: {
service: idService,
uuid: "100"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "description text-center",
visible: true,
_idProps: {
service: idService,
uuid: "101"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "p",
_idProps: {
service: idService,
uuid: "102"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "a-flexCardDesc",
value: (("Ainda te faltam " + OS.BuiltinFunctions.longIntegerToText(OS.BuiltinFunctions.integerToLongInteger(5).sub(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr))) + " partes para teres 1 Normal!"),
_idProps: {
service: idService,
uuid: "103"
},
_widgetRecordProvider: widgetsRecordProvider
})))), $if(model.variables.afterReadyVar, false, this, function () {
return [React.createElement(CustomTouchEvents_CustomTouchEventHandlers_Swipe_Handler_mvc_view, {
inputs: {
ElementId: idService.getId("menu")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
swipeLeft$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.changeDiamondSelected$Action("Golden", controller.callContext(eventHandlerContext));
});
;
},
swipeRight$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.changeDiamondSelected$Action("Silver", controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "104",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
extendedProperties: {
"data-style-key": "mACQkzVHC0qMm5mNJIT3PQ"
},
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "105"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "YxO0UaD1YkakJOmwZVvOTQ"
},
gridProperties: {
classes: "ThemeGrid_Width4"
},
style: "special",
visible: true,
_idProps: {
service: idService,
name: "PrimaryButtonNegative"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: model.getCachedValue(idService.getId("UbiAbQZJ0Uuc1E347Zuyzg.Enabled"), function () {
return (((model.variables.diamond_selectedVar === "Silver")) ? (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (true) : (false))) : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? (true) : (false))));
}, function () {
return model.variables.diamond_selectedVar;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr;
}),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.playScratchOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.getCachedValue(idService.getId("UbiAbQZJ0Uuc1E347Zuyzg.Style"), function () {
return ("btn btn-primary -primary -play -large -fullWidth " + (((model.variables.diamond_selectedVar === "Silver")) ? (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? ("") : ("-inactive"))) : (((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr.gt(OS.BuiltinFunctions.integerToLongInteger(0))) ? ("") : ("-inactive")))));
}, function () {
return model.variables.diamond_selectedVar;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr;
}, function () {
return model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "107"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Jogar",
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "game-trama",
visible: true,
_idProps: {
service: idService,
uuid: "109"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.trama.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "110"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.wtf_scratchdiscosection.svg"),
style: "game-img",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "111"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "112",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(WTF_MOB_Common_BottomBar_mvc_view, {
inputs: {
DemoAppWithoutLogin: false,
Page: "Scratch",
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
uuid: "113",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.diamond_selectedVar), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalExpireTodayAttr), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.partsAttr), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTomorrowAttr), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTodayAttr), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr), asPrimitiveValue(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.hasPartDiaryTodayAttr), asPrimitiveValue(model.variables.mgm_codeVar), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.mgm_isfirsttimeVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ScratchFlow.Scratch.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.ScratchFlow.controller", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$setActivityLog_ScratchSilverPlay", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MBP.controller$setActivityLog_ScratchGoldenPlay", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$DisabledOrEnabledButton", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$SendMGMCode", "WTF_MBP.controller$Cache_DisableByService", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.controller$IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond", "WTF_MBP.model$STR_CACHE_SERVICERec", "WTF_MBP.controller$GetCacheServiceID", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$ScratchDiamondsInfoRec", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_ScratchFlowController) {
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
Controller.prototype.getLocalUSERWTFS$AggrRefresh = function (maxRecords) {
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
return model.variables.getLocalUSERWTFSAggr;
}, function () {
return controller._getLocalUSERWTF_OnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTFS$AggrRefresh"];
// Client Actions
Controller.prototype._diamondDiary_ContinueOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DiamondDiary_ContinueOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// ScratchDiamondsInfo.ScratchDiamondsInfo_Diary.HasPartDiaryToday = True
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.hasPartDiaryTodayAttr = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Diamante diario", "Continua", 0, "", callContext);
}).catch(function (ex) {
OS.Logger.trace("Scratch.DiamondDiary_ContinueOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._playScratchOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PlayScratchOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getSilverDiamondTypeVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBP2Var = new OS.DataTypes.VariableHolder();
var getGoldenDiamondTypeVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_jogar", model.variables.diamond_selectedVar, 0, "", callContext).then(function () {
// Execute Action: GetSilverDiamondType
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("SILVER_DIAMOND_TYPE", callContext).then(function (value) {
getSilverDiamondTypeVar.value = value;
});
}).then(function () {
// Execute Action: GetGoldenDiamondType
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("GOLDEN_DIAMOND_TYPE", callContext).then(function (value) {
getGoldenDiamondTypeVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.diamond_selectedVar === getSilverDiamondTypeVar.value.valueOut))) {
// Execute Action: SilverPlayActivity
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchSilverPlay$Action("", callContext).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Scratch_play_silver", callContext);

});
} else {
return OS.Flow.executeSequence(function () {
if((model.variables.diamond_selectedVar === getGoldenDiamondTypeVar.value.valueOut)) {
// Execute Action: GoldenPlayActivity
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchGoldenPlay$Action("", callContext).then(function () {
// Execute Action: LogEventFacebook_MBP2
logEventFacebook_MBP2Var.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Scratch_play_golden", callContext);

});
}

});
}

});
}).then(function () {
// Destination: /WTF_MOB/ScratchTable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ScratchTable", {
DiamondTypeName: model.variables.diamond_selectedVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("Scratch.PlayScratchOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._responseForMGM$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ResponseForMGM");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var sendMGMCodeVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("SendCode"), false, callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_MGM", "Insere código", 0, "", callContext).then(function () {
// IsLoading = True
model.variables.isLoadingVar = true;
// mgm_isfirsttime = False
model.variables.mgm_isfirsttimeVar = false;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((((model.variables.mgm_codeVar) !== ("")))) {
// Execute Action: SendMGMCode
model.flush();
return WTF_MBPController.default.sendMGMCode$Action(model.variables.mgm_codeVar, callContext).then(function (value) {
sendMGMCodeVar.value = value;
}).then(function () {
if((sendMGMCodeVar.value.successOut)) {
// IsLoading = False
model.variables.isLoadingVar = false;
// Destination: /WTF_MOB/MessageSuccess_WonDiamond
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/MessageSuccess_WonDiamond", {
diamond_default: OS.BuiltinFunctions.integerToLongInteger(sendMGMCodeVar.value.nDiamondsBonusOut),
Section: "Scratch",
Title: "Parabéns, acabaste de ganhar diamantes por teres chegado pela mão de um amigo"
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action(sendMGMCodeVar.value.messageOut, 3, true, "icon-message_insuccess level3", true, false, 10000, "", "-large", callContext);
}

});
}

});
}).then(function () {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: EnabledButton4
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("SendCode"), true, callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Scratch.ResponseForMGM", OS.Exceptions.getMessage(ex), ex.name);
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
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("SendCode"), true, callContext);
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
// Execute Action: EnabledButton3
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("SendCode"), true, callContext);
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};
Controller.prototype._getLocalUSERWTF_OnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTF_OnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var cache_DisableByServiceVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Scratch home"
model.variables.analyticsAuxVarVar.traceNameAttr = "Scratch home";
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// Aggregate: GetLocalACCESSTOKENINFOES
var getLocalACCESSTOKENINFOESAggr = function (maxRecords) {
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
return getLocalACCESSTOKENINFOESVar.value;
});
};
return getLocalACCESSTOKENINFOESAggr();
}).then(function () {
// Execute Action: IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond
model.flush();
return WTF_MBPController.default.isFirstTimeForRegulamentAndPlayDiaryGetUserDiamond$Action(model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr, getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value = value;
});
}).then(function () {
// rules_ndiamondsbonus = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.nDiamondsBonus
model.variables.rules_ndiamondsbonusVar = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.nDiamondsBonusOut;
// ScratchDiamondsInfo.ScratchDiamondsInfo_Diary.HasPartDiaryToday = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.hasPlayDiaryToday
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.hasPartDiaryTodayAttr = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.hasPlayDiaryTodayOut;
// ScratchDiamondsInfo.ScratchDiamondsInfo_Diary.Total = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.DiaryParts
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.diaryPartsOut;
// ScratchDiamondsInfo.ScratchDiamondsInfo_Silver.Total = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.DefaultTotal
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalAttr = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.defaultTotalOut;
// ScratchDiamondsInfo.ScratchDiamondsInfo_Golden.Total = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.GoldenTotal
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalAttr = OS.BuiltinFunctions.decimalToLongInteger(OS.BuiltinFunctions.trunc(isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.goldenTotalOut));
// ScratchDiamondsInfo.ScratchDiamondsInfo_Silver.TotalExpireToday = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.DefaultExpiresToday
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTodayAttr = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.defaultExpiresTodayOut;
// ScratchDiamondsInfo.ScratchDiamondsInfo_Golden.TotalExpireToday = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.GoldenExpiresToday
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.totalExpireTodayAttr = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.goldenExpiresTodayOut;
// ScratchDiamondsInfo.ScratchDiamondsInfo_Golden.Parts = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.GoldenParts
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_GoldenAttr.partsAttr = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.goldenPartsOut;
// ScratchDiamondsInfo.ScratchDiamondsInfo_Silver.TotalExpireTomorrow = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.DefaultExpiresTomorrow
model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_SilverAttr.totalExpireTomorrowAttr = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.defaultExpiresTomorrowOut;
// mgm_isfirsttime = IsFirstTimeForRegulamentAndPlayDiaryGetUserDiamond.IsFirstTimeForMGM
model.variables.mgm_isfirsttimeVar = isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.isFirstTimeForMGMOut;
// Execute Action: ChangeDiamondSelected
return controller._changeDiamondSelected$Action("Silver", callContext);
}).then(function () {
return OS.Flow.executeSequence(function () {
if((isFirstTimeForRegulamentAndPlayDiaryGetUserDiamondVar.value.hasAcceptedOut)) {
return OS.Flow.executeSequence(function () {
if(((model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr.equals(OS.BuiltinFunctions.integerToLongInteger(5)) && !(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.hasPartDiaryTodayAttr)))) {
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext).then(function () {
// Destination: /WTF_MOB/MessageSuccess_WonDiamond
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/MessageSuccess_WonDiamond", {
Section: "Scratch",
diamond_default: OS.BuiltinFunctions.integerToLongInteger(1),
Title: (("Preencheste " + OS.BuiltinFunctions.longIntegerToText(model.variables.scratchDiamondsInfoVar.scratchDiamondsInfo_DiaryAttr.totalAttr)) + " diamantes diários!")
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
});
} else {
// afterReady = True
model.variables.afterReadyVar = true;
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace5
return controller._stopTrace$Action(callContext);
}

});
} else {
// Execute Action: Cache_DisableByService
model.flush();
return WTF_MBPController.default.cache_DisableByService$Action(WTF_MBPController.default.getCacheServiceID$Action(callContext.withoutIterationContext()).cacheServicesOut.scratchRulesAttr, callContext).then(function (value) {
cache_DisableByServiceVar.value = value;
}).then(function () {
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}).then(function () {
// Destination: /WTF_MOB/ScratchTutorial
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ScratchTutorial", {
DemoAppWithoutLogin: false,
HasAccept: false,
nDiamondsBonus: model.variables.rules_ndiamondsbonusVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Fade), callContext, true));
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Scratch.GetLocalUSERWTF_OnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._changeDiamondSelected$Action = function (nameIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ChangeDiamondSelected");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.Scratch.ChangeDiamondSelected$vars"))());
vars.value.nameInLocal = nameIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((((vars.value.nameInLocal) !== (model.variables.diamond_selectedVar)))) {
// diamond_selected
// diamond_selected = name
model.variables.diamond_selectedVar = vars.value.nameInLocal;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_diamante", vars.value.nameInLocal, 0, "", callContext);
}

});
}).catch(function (ex) {
OS.Logger.trace("Scratch.ChangeDiamondSelected", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.Scratch.ChangeDiamondSelected$vars", [{
name: "name",
attrName: "nameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._goToMenu$Action = function (labelIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToMenu");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.Scratch.GoToMenu$vars"))());
vars.value.labelInLocal = labelIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_menu", vars.value.labelInLocal, 0, "", callContext).then(function () {
if(((vars.value.labelInLocal === "Rules"))) {
// Destination: /WTF_MOB/RulesScratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/RulesScratch", {
HasAccept: true,
nDiamondsBonus: model.variables.rules_ndiamondsbonusVar
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
if((vars.value.labelInLocal === "Amigos")) {
// Destination: /WTF_MOB/Amigos
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Amigos", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
if((vars.value.labelInLocal === "Prémios")) {
// Destination: /WTF_MOB/MontraPremios
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/MontraPremios", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
}

}

}

});
}).catch(function (ex) {
OS.Logger.trace("Scratch.GoToMenu", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.Scratch.GoToMenu$vars", [{
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._mGM_OnClickClose$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("MGM_OnClickClose");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_MGM", "Close", 0, "", callContext).then(function () {
// mgm_isfirsttime = False
model.variables.mgm_isfirsttimeVar = false;
});
}).catch(function (ex) {
OS.Logger.trace("Scratch.MGM_OnClickClose", OS.Exceptions.getMessage(ex), ex.name);
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

Controller.prototype.diamondDiary_ContinueOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._diamondDiary_ContinueOnClick$Action, callContext);

};
Controller.prototype.playScratchOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._playScratchOnClick$Action, callContext);

};
Controller.prototype.responseForMGM$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._responseForMGM$Action, callContext);

};
Controller.prototype.getLocalUSERWTF_OnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTF_OnAfterFetch$Action, callContext);

};
Controller.prototype.changeDiamondSelected$Action = function (nameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._changeDiamondSelected$Action, callContext, nameIn);

};
Controller.prototype.goToMenu$Action = function (labelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToMenu$Action, callContext, labelIn);

};
Controller.prototype.mGM_OnClickClose$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._mGM_OnClickClose$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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

