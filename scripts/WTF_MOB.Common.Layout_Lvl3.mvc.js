define("WTF_MOB.Common.Layout_Lvl3.mvc$model", ["OutSystems", "WTF_MOB.model", "MobileUIWidgets.controller", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "Essentials_MOB.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NewFirebaseMobilePlugin_WTF.model", "MobilePatterns.controller", "MobileUIWidgets.WidgetsInteraction.PullToRefresh_v2_Ext.mvc$model", "WTF_MOB.Common.Header_Lvl1.mvc$model", "WTF_MOB.Common.OfflineDataSyncEvents.mvc$model", "WTF_MOB.Common.GoogleAnalyticsInitialization.mvc$model", "NewFirebaseMobilePlugin_WTF.Firebase.Firebase_Block.mvc$model", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$ValidateUserSession", "WTF_MBP.controller$SetURL", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetLayoutLevelsAppConfigs", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.controller$CheckCordovaIsDefinedAndLockOrientation", "WTF_MOB.controller$Logout", "WTF_MOB.model$Local_LAYOUT_LEVELSRecordList", "WTF_MBP.model$Local_LAYOUT_LEVELSRec", "WTF_MBP.entities", "WTF_MOB.model$Local_TEMPDYNAMICLINKRecord", "WTF_MBP.controller$CreateOrUpdateLocal_LOCALDYNAMICLINK", "WTF_MBP.controller$ClearCache", "WTF_MBP.controller$DeleteAllLocal_LOCALDYNAMICLINK", "WTF_MBP.model$Local_TEMPDYNAMICLINKRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "Essentials_MOB.controller$CurrentOS", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MBP.controller$GetConfigValueAsText_MBP", "MobileUIWidgets.controller$Info", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "WTF_MOB.referencesHealth$BuildInfoPlugin", "NewFirebaseMobilePlugin_WTF.model$NotificationDataRec", "WTF_MOB.referencesHealth$NewFirebaseMobilePlugin_WTF", "MobilePatterns.controller$LayoutReady", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.controller$CheckIsIOS10"], function (OutSystems, WTF_MOBModel, MobileUIWidgetsController, WTF_MOBController, WTF_MBPController, WTF_MBPModel, Essentials_MOBController, CommonPluginModel, BuildInfoPluginController, NewFirebaseMobilePlugin_WTFModel, MobilePatternsController, MobileUIWidgets_WidgetsInteraction_PullToRefresh_v2_Ext_mvcModel, WTF_MOB_Common_Header_Lvl1_mvcModel, WTF_MOB_Common_OfflineDataSyncEvents_mvcModel, WTF_MOB_Common_GoogleAnalyticsInitialization_mvcModel, NewFirebaseMobilePlugin_WTF_Firebase_Firebase_Block_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsIOS10", "isIOS10Var", "IsIOS10", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("HasConnection", "hasConnectionVar", "HasConnection", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("ScreenName", "screenNameIn", "ScreenName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_screenNameInDataFetchStatus", "_screenNameInDataFetchStatus", "_screenNameInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PageTitle", "pageTitleIn", "PageTitle", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", "_pageTitleInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PageSection", "pageSectionIn", "PageSection", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pageSectionInDataFetchStatus", "_pageSectionInDataFetchStatus", "_pageSectionInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("PageType", "pageTypeIn", "PageType", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pageTypeInDataFetchStatus", "_pageTypeInDataFetchStatus", "_pageTypeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UsePullToRefresh", "usePullToRefreshIn", "UsePullToRefresh", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", "_usePullToRefreshInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ContentClass", "contentClassIn", "ContentClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_contentClassInDataFetchStatus", "_contentClassInDataFetchStatus", "_contentClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("BottomClass", "bottomClassIn", "BottomClass", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_bottomClassInDataFetchStatus", "_bottomClassInDataFetchStatus", "_bottomClassInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("HasOverflowHidden", "hasOverflowHiddenIn", "HasOverflowHidden", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_hasOverflowHiddenInDataFetchStatus", "_hasOverflowHiddenInDataFetchStatus", "_hasOverflowHiddenInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsPreLogin", "isPreLoginIn", "IsPreLogin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isPreLoginInDataFetchStatus", "_isPreLoginInDataFetchStatus", "_isPreLoginInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Diamante", "diamanteIn", "Diamante", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_diamanteInDataFetchStatus", "_diamanteInDataFetchStatus", "_diamanteInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Premio", "premioIn", "Premio", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_premioInDataFetchStatus", "_premioInDataFetchStatus", "_premioInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Hotdeal", "hotdealIn", "Hotdeal", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_hotdealInDataFetchStatus", "_hotdealInDataFetchStatus", "_hotdealInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Promo", "promoIn", "Promo", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_promoInDataFetchStatus", "_promoInDataFetchStatus", "_promoInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("IsPageLevel1", "isPageLevel1In", "IsPageLevel1", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_isPageLevel1InDataFetchStatus", "_isPageLevel1InDataFetchStatus", "_isPageLevel1InDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("AllowPrevious", "allowPreviousIn", "AllowPrevious", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_allowPreviousInDataFetchStatus", "_allowPreviousInDataFetchStatus", "_allowPreviousInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("withoutLogin", "withoutLoginIn", "withoutLogin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_withoutLoginInDataFetchStatus", "_withoutLoginInDataFetchStatus", "_withoutLoginInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GoToScratch", "goToScratchIn", "GoToScratch", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_goToScratchInDataFetchStatus", "_goToScratchInDataFetchStatus", "_goToScratchInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((((MobileUIWidgets_WidgetsInteraction_PullToRefresh_v2_Ext_mvcModel.hasValidationWidgets || WTF_MOB_Common_Header_Lvl1_mvcModel.hasValidationWidgets) || WTF_MOB_Common_OfflineDataSyncEvents_mvcModel.hasValidationWidgets) || WTF_MOB_Common_GoogleAnalyticsInitialization_mvcModel.hasValidationWidgets) || NewFirebaseMobilePlugin_WTF_Firebase_Firebase_Block_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ScreenName" in inputs) {
this.variables.screenNameIn = inputs.ScreenName;
if("_screenNameInDataFetchStatus" in inputs) {
this.variables._screenNameInDataFetchStatus = inputs._screenNameInDataFetchStatus;
}

}

if("PageTitle" in inputs) {
this.variables.pageTitleIn = inputs.PageTitle;
if("_pageTitleInDataFetchStatus" in inputs) {
this.variables._pageTitleInDataFetchStatus = inputs._pageTitleInDataFetchStatus;
}

}

if("PageSection" in inputs) {
this.variables.pageSectionIn = inputs.PageSection;
if("_pageSectionInDataFetchStatus" in inputs) {
this.variables._pageSectionInDataFetchStatus = inputs._pageSectionInDataFetchStatus;
}

}

if("PageType" in inputs) {
this.variables.pageTypeIn = inputs.PageType;
if("_pageTypeInDataFetchStatus" in inputs) {
this.variables._pageTypeInDataFetchStatus = inputs._pageTypeInDataFetchStatus;
}

}

if("UsePullToRefresh" in inputs) {
this.variables.usePullToRefreshIn = inputs.UsePullToRefresh;
if("_usePullToRefreshInDataFetchStatus" in inputs) {
this.variables._usePullToRefreshInDataFetchStatus = inputs._usePullToRefreshInDataFetchStatus;
}

}

if("ContentClass" in inputs) {
this.variables.contentClassIn = inputs.ContentClass;
if("_contentClassInDataFetchStatus" in inputs) {
this.variables._contentClassInDataFetchStatus = inputs._contentClassInDataFetchStatus;
}

}

if("BottomClass" in inputs) {
this.variables.bottomClassIn = inputs.BottomClass;
if("_bottomClassInDataFetchStatus" in inputs) {
this.variables._bottomClassInDataFetchStatus = inputs._bottomClassInDataFetchStatus;
}

}

if("HasOverflowHidden" in inputs) {
this.variables.hasOverflowHiddenIn = inputs.HasOverflowHidden;
if("_hasOverflowHiddenInDataFetchStatus" in inputs) {
this.variables._hasOverflowHiddenInDataFetchStatus = inputs._hasOverflowHiddenInDataFetchStatus;
}

}

if("IsPreLogin" in inputs) {
this.variables.isPreLoginIn = inputs.IsPreLogin;
if("_isPreLoginInDataFetchStatus" in inputs) {
this.variables._isPreLoginInDataFetchStatus = inputs._isPreLoginInDataFetchStatus;
}

}

if("Diamante" in inputs) {
this.variables.diamanteIn = inputs.Diamante;
if("_diamanteInDataFetchStatus" in inputs) {
this.variables._diamanteInDataFetchStatus = inputs._diamanteInDataFetchStatus;
}

}

if("Premio" in inputs) {
this.variables.premioIn = inputs.Premio;
if("_premioInDataFetchStatus" in inputs) {
this.variables._premioInDataFetchStatus = inputs._premioInDataFetchStatus;
}

}

if("Hotdeal" in inputs) {
this.variables.hotdealIn = inputs.Hotdeal;
if("_hotdealInDataFetchStatus" in inputs) {
this.variables._hotdealInDataFetchStatus = inputs._hotdealInDataFetchStatus;
}

}

if("Promo" in inputs) {
this.variables.promoIn = inputs.Promo;
if("_promoInDataFetchStatus" in inputs) {
this.variables._promoInDataFetchStatus = inputs._promoInDataFetchStatus;
}

}

if("IsPageLevel1" in inputs) {
this.variables.isPageLevel1In = inputs.IsPageLevel1;
if("_isPageLevel1InDataFetchStatus" in inputs) {
this.variables._isPageLevel1InDataFetchStatus = inputs._isPageLevel1InDataFetchStatus;
}

}

if("AllowPrevious" in inputs) {
this.variables.allowPreviousIn = inputs.AllowPrevious;
if("_allowPreviousInDataFetchStatus" in inputs) {
this.variables._allowPreviousInDataFetchStatus = inputs._allowPreviousInDataFetchStatus;
}

}

if("withoutLogin" in inputs) {
this.variables.withoutLoginIn = inputs.withoutLogin;
if("_withoutLoginInDataFetchStatus" in inputs) {
this.variables._withoutLoginInDataFetchStatus = inputs._withoutLoginInDataFetchStatus;
}

}

if("GoToScratch" in inputs) {
this.variables.goToScratchIn = inputs.GoToScratch;
if("_goToScratchInDataFetchStatus" in inputs) {
this.variables._goToScratchInDataFetchStatus = inputs._goToScratchInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.Common.Layout_Lvl3.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "Essentials_MOB.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NewFirebaseMobilePlugin_WTF.model", "MobilePatterns.controller", "react", "OutSystemsReactView", "WTF_MOB.Common.Layout_Lvl3.mvc$model", "WTF_MOB.Common.Layout_Lvl3.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsInteraction.PullToRefresh_v2_Ext.mvc$view", "WTF_MOB.Common.Header_Lvl1.mvc$view", "WTF_MOB.Common.OfflineDataSyncEvents.mvc$view", "WTF_MOB.Common.GoogleAnalyticsInitialization.mvc$view", "NewFirebaseMobilePlugin_WTF.Firebase.Firebase_Block.mvc$view", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$ValidateUserSession", "WTF_MBP.controller$SetURL", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetLayoutLevelsAppConfigs", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.controller$CheckCordovaIsDefinedAndLockOrientation", "WTF_MOB.controller$Logout", "WTF_MOB.model$Local_LAYOUT_LEVELSRecordList", "WTF_MBP.model$Local_LAYOUT_LEVELSRec", "WTF_MBP.entities", "WTF_MOB.model$Local_TEMPDYNAMICLINKRecord", "WTF_MBP.controller$CreateOrUpdateLocal_LOCALDYNAMICLINK", "WTF_MBP.controller$ClearCache", "WTF_MBP.controller$DeleteAllLocal_LOCALDYNAMICLINK", "WTF_MBP.model$Local_TEMPDYNAMICLINKRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "Essentials_MOB.controller$CurrentOS", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MBP.controller$GetConfigValueAsText_MBP", "MobileUIWidgets.controller$Info", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "WTF_MOB.referencesHealth$BuildInfoPlugin", "NewFirebaseMobilePlugin_WTF.model$NotificationDataRec", "WTF_MOB.referencesHealth$NewFirebaseMobilePlugin_WTF", "MobilePatterns.controller$LayoutReady", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.controller$CheckIsIOS10"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, Essentials_MOBController, CommonPluginModel, BuildInfoPluginController, NewFirebaseMobilePlugin_WTFModel, MobilePatternsController, React, OSView, WTF_MOB_Common_Layout_Lvl3_mvc_model, WTF_MOB_Common_Layout_Lvl3_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsInteraction_PullToRefresh_v2_Ext_mvc_view, WTF_MOB_Common_Header_Lvl1_mvc_view, WTF_MOB_Common_OfflineDataSyncEvents_mvc_view, WTF_MOB_Common_GoogleAnalyticsInitialization_mvc_view, NewFirebaseMobilePlugin_WTF_Firebase_Firebase_Block_mvc_view) {
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
        View.displayName = "Common.Layout_Lvl3";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/MobilePatterns.SILKUI.js", "scripts/MobileUIWidgets.RippleJS.js"];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsInteraction_PullToRefresh_v2_Ext_mvc_view, WTF_MOB_Common_Header_Lvl1_mvc_view, WTF_MOB_Common_OfflineDataSyncEvents_mvc_view, WTF_MOB_Common_GoogleAnalyticsInitialization_mvc_view, NewFirebaseMobilePlugin_WTF_Firebase_Firebase_Block_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_Common_Layout_Lvl3_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_Common_Layout_Lvl3_mvc_controller;
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
style: model.getCachedValue(idService.getId("uF5sL6OKNUOSWIVTp+hgMA.Style"), function () {
return ("layout -mainGradient noselect " + ((!(model.variables.hasOverflowHiddenIn)) ? ("") : ("hasoverflowhidden")));
}, function () {
return model.variables.hasOverflowHiddenIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hasOverflowHiddenInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("IT2dp3Fuf0OuX8+lysiQeQ.Style"), function () {
return ("screen " + ((model.variables.isIOS10Var) ? ("ios10") : ("")));
}, function () {
return model.variables.isIOS10Var;
}),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(!(model.variables.usePullToRefreshIn), false, this, function () {
return [];
}, function () {
return [React.createElement(MobileUIWidgets_WidgetsInteraction_PullToRefresh_v2_Ext_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onContentPull$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.triggerOnPullToRefresh$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.header,
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("content " + model.variables.contentClassIn),
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._contentClassInDataFetchStatus)
}, $if(model.variables.isPageLevel1In, false, this, function () {
return [React.createElement(WTF_MOB_Common_Header_Lvl1_mvc_view, {
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
uuid: "5",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
headerContent: PlaceholderContent.Empty
},
_dependencies: []
})];
}, function () {
return [];
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "content-div",
_idProps: {
service: idService,
name: "content"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottom,
style: ("bottom " + model.variables.bottomClassIn),
_idProps: {
service: idService,
name: "Bottom"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._bottomClassInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "offline-data-sync",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_Common_OfflineDataSyncEvents_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onSyncError$Action: function (syncUnitIn, errorMessageIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.triggerOnSyncError$Action(syncUnitIn, errorMessageIn, controller.callContext(eventHandlerContext));
});
;
},
onSyncComplete$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.triggerOnSyncComplete$Action(syncUnitIn, controller.callContext(eventHandlerContext));
});
;
},
onSyncStart$Action: function (syncUnitIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.triggerOnSyncStart$Action(syncUnitIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "9",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(WTF_MOB_Common_GoogleAnalyticsInitialization_mvc_view, {
inputs: {
PageType: model.variables.pageTypeIn,
_pageTypeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageTypeInDataFetchStatus),
Promo: model.variables.promoIn,
_promoInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._promoInDataFetchStatus),
PageTitle: model.variables.pageTitleIn,
_pageTitleInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageTitleInDataFetchStatus),
PageSection: model.variables.pageSectionIn,
_pageSectionInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageSectionInDataFetchStatus),
Hotdeal: model.variables.hotdealIn,
_hotdealInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdealInDataFetchStatus),
Premio: model.variables.premioIn,
_premioInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._premioInDataFetchStatus),
Diamante: model.variables.diamanteIn,
_diamanteInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._diamanteInDataFetchStatus),
PageUrl: model.variables.screenNameIn,
_pageUrlInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._screenNameInDataFetchStatus)
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
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), $if(model.variables.hasConnectionVar, false, this, function () {
return [React.createElement(NewFirebaseMobilePlugin_WTF_Firebase_Firebase_Block_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
errorHandlerEvent$Action: function (dataIn) {
var eventHandlerContext = callContext.clone();
controller.firebase_BlockErrorHandlerEvent$Action(dataIn, controller.callContext(eventHandlerContext));

;
},
dynamicLinkEvent$Action: function (dataIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.firebase_BlockDynamicLinkEvent$Action(dataIn, controller.callContext(eventHandlerContext));
});
;
},
newNotificationEvent$Action: function (notificationDataIn, notificationIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.firebaseCloudMessagingNewNotification$Action(notificationDataIn, notificationIn, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "11",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.Common.Layout_Lvl3.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MBP.model", "Essentials_MOB.controller", "CommonPlugin.model", "BuildInfoPlugin.controller", "NewFirebaseMobilePlugin_WTF.model", "MobilePatterns.controller", "WTF_MOB.languageResources", "WTF_MOB.Common.Layout_Lvl3.mvc$controller.OnInitializeSessionStorage.SessionStorage_GetUrlJS", "WTF_MOB.Common.Layout_Lvl3.mvc$controller.OnInitializeSessionStorage.GetURLJS", "WTF_MOB.Common.Layout_Lvl3.mvc$controller.Firebase_BlockDynamicLinkEvent.GetLinkFromJSONJS", "WTF_MOB.Common.Layout_Lvl3.mvc$controller.FirebaseCloudMessagingNewNotification.AddListenerToFeedbackMessageJS", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$ValidateUserSession", "WTF_MBP.controller$SetURL", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetLayoutLevelsAppConfigs", "WTF_MBP.controller$ValidateIfUserAreBlocked", "WTF_MOB.controller$CheckCordovaIsDefinedAndLockOrientation", "WTF_MOB.controller$Logout", "WTF_MOB.model$Local_LAYOUT_LEVELSRecordList", "WTF_MBP.model$Local_LAYOUT_LEVELSRec", "WTF_MBP.entities", "WTF_MOB.model$Local_TEMPDYNAMICLINKRecord", "WTF_MBP.controller$CreateOrUpdateLocal_LOCALDYNAMICLINK", "WTF_MBP.controller$ClearCache", "WTF_MBP.controller$DeleteAllLocal_LOCALDYNAMICLINK", "WTF_MBP.model$Local_TEMPDYNAMICLINKRec", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.model$Local_USER_WTFRec", "Essentials_MOB.controller$CurrentOS", "WTF_MOB.referencesHealth$Essentials_MOB", "WTF_MBP.controller$GetConfigValueAsText_MBP", "MobileUIWidgets.controller$Info", "CommonPlugin.model$ErrorRec", "WTF_MOB.referencesHealth$CommonPlugin", "BuildInfoPlugin.controller$GetBuildInfo", "WTF_MOB.referencesHealth$BuildInfoPlugin", "NewFirebaseMobilePlugin_WTF.model$NotificationDataRec", "WTF_MOB.referencesHealth$NewFirebaseMobilePlugin_WTF", "MobilePatterns.controller$LayoutReady", "WTF_MOB.referencesHealth$MobilePatterns", "WTF_MOB.controller$CheckIsIOS10"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MBPModel, Essentials_MOBController, CommonPluginModel, BuildInfoPluginController, NewFirebaseMobilePlugin_WTFModel, MobilePatternsController, WTF_MOBLanguageResources, WTF_MOB_Common_Layout_Lvl3_mvc_controller_OnInitializeSessionStorage_SessionStorage_GetUrlJS, WTF_MOB_Common_Layout_Lvl3_mvc_controller_OnInitializeSessionStorage_GetURLJS, WTF_MOB_Common_Layout_Lvl3_mvc_controller_Firebase_BlockDynamicLinkEvent_GetLinkFromJSONJS, WTF_MOB_Common_Layout_Lvl3_mvc_controller_FirebaseCloudMessagingNewNotification_AddListenerToFeedbackMessageJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
deeplinkRedirect$Action: function (deeplinkIn) {
deeplinkIn = (deeplinkIn === undefined) ? "" : deeplinkIn;
return controller.executeActionInsideJSNode(controller._deeplinkRedirect$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(deeplinkIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._triggerOnSyncError$Action = function (syncUnitIn, errorMessageIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TriggerOnSyncError");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.TriggerOnSyncError$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
vars.value.errorMessageInLocal = errorMessageIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnSyncError
return controller.onSyncError$Action(vars.value.syncUnitInLocal, vars.value.errorMessageInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.TriggerOnSyncError$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._triggerOnSyncStart$Action = function (syncUnitIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TriggerOnSyncStart");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.TriggerOnSyncStart$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnSyncStart
return controller.onSyncStart$Action(vars.value.syncUnitInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.TriggerOnSyncStart$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
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
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
};
Controller.prototype._triggerOnPullToRefresh$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TriggerOnPullToRefresh");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnPullToRefresh
return controller.onPullToRefresh$Action(callContext);
});
};
Controller.prototype._triggerOnSyncComplete$Action = function (syncUnitIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("TriggerOnSyncComplete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.TriggerOnSyncComplete$vars"))());
vars.value.syncUnitInLocal = syncUnitIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: OnSyncComplete
return controller.onSyncComplete$Action(vars.value.syncUnitInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.TriggerOnSyncComplete$vars", [{
name: "SyncUnit",
attrName: "syncUnitInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._deeplinkRedirect$Action = function (deeplinkIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("DeeplinkRedirect");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.DeeplinkRedirect$vars"))());
vars.value.deeplinkInLocal = deeplinkIn;
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
// Empty Deeplink?
if((!((vars.value.deeplinkInLocal === "")))) {
// Destination: /WTF_MOB/
return OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(vars.value.deeplinkInLocal, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true);
}

};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.DeeplinkRedirect$vars", [{
name: "Deeplink",
attrName: "deeplinkInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onInitializeSessionStorage$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnInitializeSessionStorage");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var validateUserSessionVar = new OS.DataTypes.VariableHolder();
var setURLVar = new OS.DataTypes.VariableHolder();
var getLayoutLevelsAppConfigsVar = new OS.DataTypes.VariableHolder();
var validateIfUserAreBlockedVar = new OS.DataTypes.VariableHolder();
var logoutVar = new OS.DataTypes.VariableHolder();
var sessionStorage_GetUrlJSResult = new OS.DataTypes.VariableHolder();
var getURLJSResult = new OS.DataTypes.VariableHolder();
var getLayoutLevel3Var = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_LAYOUT_LEVELSRecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AllowPrevious or GoToScratch?
return OS.Flow.executeSequence(function () {
if((!((model.variables.allowPreviousIn || model.variables.goToScratchIn)))) {
sessionStorage_GetUrlJSResult.value = controller.safeExecuteJSNode(WTF_MOB_Common_Layout_Lvl3_mvc_controller_OnInitializeSessionStorage_SessionStorage_GetUrlJS, "SessionStorage_GetUrl", "OnInitializeSessionStorage", {
IsSessionStorageSupported: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.OnInitializeSessionStorage$sessionStorage_GetUrlJSResult"))();
jsNodeResult.isSessionStorageSupportedOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.IsSessionStorageSupported, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
// IsSessionStorageSupported?
return OS.Flow.executeSequence(function () {
if((!(sessionStorage_GetUrlJSResult.value.isSessionStorageSupportedOut))) {
getURLJSResult.value = controller.safeExecuteJSNode(WTF_MOB_Common_Layout_Lvl3_mvc_controller_OnInitializeSessionStorage_GetURLJS, "GetURL", "OnInitializeSessionStorage", {
ScreenName: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.OnInitializeSessionStorage$getURLJSResult"))();
jsNodeResult.screenNameOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.ScreenName, OS.Types.Text);
return jsNodeResult;
}, {}, {});
// Execute Action: GetLayoutLevelsAppConfigs
model.flush();
return WTF_MBPController.default.getLayoutLevelsAppConfigs$Action(callContext).then(function (value) {
getLayoutLevelsAppConfigsVar.value = value;
}).then(function () {
// Aggregate: GetLayoutLevel3
var getLayoutLevel3Aggr = function (maxRecords) {
var executeQuery = function () {
var targetListType = WTF_MOBModel.Local_LAYOUT_LEVELSRecordList;
var result = {
list: null,
count: OS.DataTypes.LongInteger.defaultValue
};
var countArgsList = new OS.Entities.QueryArgumentsList();
if(!(maxRecords)) {
maxRecords = 1;
}

var qpstLevel = getLayoutLevelsAppConfigsVar.value.lvl3Out;

var optimizeSelect = false;
var selectSql = "";
var fromAndWhereSql = "";
var groupByAndHavingSql = "";
var orderBySql = "";
var argsList = new OS.Entities.QueryArgumentsList();

selectSql += "SELECT ";
if (optimizeSelect) {
selectSql += "NULL o0, NULL o1, NULL o2";
} else {
selectSql += "\"ENLocal_LAYOUT_LEVELS\".\"Id\" o0, \"ENLocal_LAYOUT_LEVELS\".\"Label\" o1, \"ENLocal_LAYOUT_LEVELS\".\"Level\" o2";
}
fromAndWhereSql += " FROM \"MAIN\".\"OSUSR_p9g_Local_LAYOUT_LEVELS\" \"ENLocal_LAYOUT_LEVELS\"";
fromAndWhereSql += " WHERE (\"ENLocal_LAYOUT_LEVELS\".\"Level\" = :qpstLevel)";
argsList.add("qpstLevel", /*TEXT*/ 0, qpstLevel);
if (maxRecords > 0) {
orderBySql += " LIMIT ";
orderBySql += maxRecords;
}
var sql = selectSql + fromAndWhereSql + groupByAndHavingSql + orderBySql;

return OS.Entities.webSQLStorageInstance.executeQuery(sql, WTF_MOBModel.Local_LAYOUT_LEVELSRecordList, function (rec, r) {
var indexRef = {
value: 0
};
var attrOrder = [
"local_LAYOUT_LEVELSAttr",
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
return getLayoutLevel3Var.value;
});
};
return getLayoutLevel3Aggr();
}).then(function () {
// Execute Action: SetURL
model.flush();
return WTF_MBPController.default.setURL$Action(getURLJSResult.value.screenNameOut, getLayoutLevel3Var.value.listOut.getCurrent(callContext.iterationContext).local_LAYOUT_LEVELSAttr.idAttr, callContext).then(function (value) {
setURLVar.value = value;
});
});
}

});
}

}).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isPreLoginIn))) {
// Execute Action: CheckCordovaIsDefinedAndLockOrientation
model.flush();
return WTF_MOBController.default.checkCordovaIsDefinedAndLockOrientation$Action(false, callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.withoutLoginIn))) {
// Execute Action: ValidateIfUserAreBlocked
model.flush();
return WTF_MBPController.default.validateIfUserAreBlocked$Action(callContext).then(function (value) {
validateIfUserAreBlockedVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if(((validateIfUserAreBlockedVar.value.hasBockOut === true))) {
// Execute Action: LogMessage4
OS.SystemActions.logMessage(((("Date Time: " + OS.BuiltinFunctions.dateTimeToText(OS.BuiltinFunctions.currDateTime())) + "\r\n") + "The user is blocked..."), "WTF_MOB", callContext);
// Destination: /WTF_MOB/UserBlocked
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserBlocked", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
} else {
// Execute Action: ValidateUserSession
model.flush();
return WTF_MOBController.default.validateUserSession$Action(false, callContext).then(function (value) {
validateUserSessionVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((validateUserSessionVar.value.isValidOut)) {
// HasConnection = True
model.variables.hasConnectionVar = true;
} else {
// HasConnection = False
model.variables.hasConnectionVar = false;
// Execute Action: Logout
model.flush();
return WTF_MOBController.default.logout$Action(callContext).then(function (value) {
logoutVar.value = value;
}).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(logoutVar.value.uRLOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
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
});
}).catch(function (ex) {
OS.Logger.trace("Layout_Lvl3.OnInitializeSessionStorage", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync();

});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.OnInitializeSessionStorage$sessionStorage_GetUrlJSResult", [{
name: "IsSessionStorageSupported",
attrName: "isSessionStorageSupportedOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.OnInitializeSessionStorage$getURLJSResult", [{
name: "ScreenName",
attrName: "screenNameOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._firebase_BlockDynamicLinkEvent$Action = function (dataIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Firebase_BlockDynamicLinkEvent");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.Firebase_BlockDynamicLinkEvent$vars"))());
vars.value.dataInLocal = dataIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var createOrUpdateLocal_LOCALDYNAMICLINK2Var = new OS.DataTypes.VariableHolder();
var createOrUpdateLocal_LOCALDYNAMICLINKVar = new OS.DataTypes.VariableHolder();
var getLinkFromJSONJSResult = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
var getUserWTFVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_USER_WTFRecordList))());
return OS.Flow.executeAsyncFlow(function () {
getLinkFromJSONJSResult.value = controller.safeExecuteJSNode(WTF_MOB_Common_Layout_Lvl3_mvc_controller_Firebase_BlockDynamicLinkEvent_GetLinkFromJSONJS, "GetLinkFromJSON", "Firebase_BlockDynamicLinkEvent", {
inputJSON: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.dataInLocal, OS.Types.Text, true),
Link: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
Error: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true),
Sucess: OS.DataTypes.JSConversions.basicTypeToJS(false, OS.Types.Boolean, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.Firebase_BlockDynamicLinkEvent$getLinkFromJSONJSResult"))();
jsNodeResult.linkOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Link, OS.Types.Text);
jsNodeResult.errorOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Error, OS.Types.Text);
jsNodeResult.sucessOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.Sucess, OS.Types.Boolean);
return jsNodeResult;
}, {}, {});
return OS.Flow.executeSequence(function () {
if(((getLinkFromJSONJSResult.value.sucessOut && ((getLinkFromJSONJSResult.value.linkOut) !== (""))))) {
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
return getLocalACCESSTOKENINFOESVar.value;
});
};
return getLocalACCESSTOKENINFOESAggr().then(function () {
// HasRefreshToken?
return OS.Flow.executeSequence(function () {
if((((OS.BuiltinFunctions.trim(getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr)) !== ("")))) {
// Aggregate: GetUserWTF
var getUserWTFAggr = function (maxRecords) {
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
selectSql += "NULL o0, NULL o1, NULL o2, NULL o3, NULL o4";
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
return controller.executeClientAggregate(executeQuery, function () {
return getUserWTFVar.value;
});
};
return getUserWTFAggr().then(function () {
// HasSelectedMSISDN
return OS.Flow.executeSequence(function () {
if((((getUserWTFVar.value.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.msisdnAttr) !== (0)))) {
// Execute Action: DeleteAllLocal_LOCALDYNAMICLINK
model.flush();
return WTF_MBPController.default.deleteAllLocal_LOCALDYNAMICLINK$Action(callContext).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(getLinkFromJSONJSResult.value.linkOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
} else {
// Local_DynamicLinkRec.Id = NullIdentifier
vars.value.local_DynamicLinkRecVar.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// Local_DynamicLinkRec.URL = GetLinkFromJSON.Link
vars.value.local_DynamicLinkRecVar.uRLAttr = getLinkFromJSONJSResult.value.linkOut;
// Execute Action: CreateOrUpdateLocal_LOCALDYNAMICLINK2
model.flush();
return WTF_MBPController.default.createOrUpdateLocal_LOCALDYNAMICLINK$Action(WTF_MOBModel.Local_TEMPDYNAMICLINKRecord.fromStructure(vars.value.local_DynamicLinkRecVar), callContext).then(function (value) {
createOrUpdateLocal_LOCALDYNAMICLINK2Var.value = value;
}).then(function () {
// Destination: /WTF_MOB/SelectMsisdn
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/SelectMsisdn", {
isAfterLogin: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
} else {
// Execute Action: ClearCache
model.flush();
return WTF_MBPController.default.clearCache$Action(callContext).then(function () {
// Local_DynamicLinkRec.Id = NullIdentifier
vars.value.local_DynamicLinkRecVar.idAttr = OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier());
// Local_DynamicLinkRec.URL = GetLinkFromJSON.Link
vars.value.local_DynamicLinkRecVar.uRLAttr = getLinkFromJSONJSResult.value.linkOut;
// Execute Action: CreateOrUpdateLocal_LOCALDYNAMICLINK
model.flush();
return WTF_MBPController.default.createOrUpdateLocal_LOCALDYNAMICLINK$Action(WTF_MOBModel.Local_TEMPDYNAMICLINKRecord.fromStructure(vars.value.local_DynamicLinkRecVar), callContext).then(function (value) {
createOrUpdateLocal_LOCALDYNAMICLINKVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/PreLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PreLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
});
}

});
}).catch(function (ex) {
OS.Logger.trace("Layout_Lvl3.Firebase_BlockDynamicLinkEvent", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.returnAsync();

});
}

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.Firebase_BlockDynamicLinkEvent$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Local_DynamicLinkRec",
attrName: "local_DynamicLinkRecVar",
mandatory: false,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MBPModel.Local_TEMPDYNAMICLINKRec();
},
complexType: WTF_MBPModel.Local_TEMPDYNAMICLINKRec
}]);
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.Firebase_BlockDynamicLinkEvent$getLinkFromJSONJSResult", [{
name: "Link",
attrName: "linkOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Error",
attrName: "errorOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Sucess",
attrName: "sucessOut",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._firebase_BlockErrorHandlerEvent$Action = function (dataIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Firebase_BlockErrorHandlerEvent");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.Firebase_BlockErrorHandlerEvent$vars"))());
vars.value.dataInLocal = dataIn;
};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.Firebase_BlockErrorHandlerEvent$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._firebaseCloudMessagingNewNotification$Action = function (notificationDataIn, notificationIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("FirebaseCloudMessagingNewNotification");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.Layout_Lvl3.FirebaseCloudMessagingNewNotification$vars"))());
vars.value.notificationDataInLocal = notificationDataIn.clone();
vars.value.notificationInLocal = notificationIn;
var currentOSVar = new OS.DataTypes.VariableHolder();
var getMinVersionAndroidNotificationLogicVar = new OS.DataTypes.VariableHolder();
var getBuildInfoVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetMinVersionAndroidNotificationLogic
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("FIREBASENOTIFICATIONLOGIC_MIN_VERSION_ANDROID", callContext).then(function (value) {
getMinVersionAndroidNotificationLogicVar.value = value;
}).then(function () {
// Execute Action: GetBuildInfo
getBuildInfoVar.value = BuildInfoPluginController.default.getBuildInfo$Action(callContext);

}).then(function () {
return OS.Flow.executeSequence(function () {
if((!((OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.trim(getBuildInfoVar.value.buildOut)) >= OS.BuiltinFunctions.textToInteger(OS.BuiltinFunctions.trim(getMinVersionAndroidNotificationLogicVar.value.valueOut)))))) {
// Execute Action: CurrentOS
currentOSVar.value = Essentials_MOBController.default.currentOS$Action(callContext);

// App Open and Android?
if(((!(vars.value.notificationDataInLocal.appInBackgroundAttr) && (currentOSVar.value.operatingSystemOut === WTF_MOBModel.staticEntities.operativeSystem.android)))) {
// Execute Action: Info2
MobileUIWidgetsController.default.info$Action((vars.value.notificationDataInLocal.titleAttr + ((((vars.value.notificationInLocal) !== (""))) ? (("\r\n" + vars.value.notificationInLocal)) : (""))), callContext);
controller.safeExecuteJSNode(WTF_MOB_Common_Layout_Lvl3_mvc_controller_FirebaseCloudMessagingNewNotification_AddListenerToFeedbackMessageJS, "AddListenerToFeedbackMessage", "FirebaseCloudMessagingNewNotification", {
Deeplink: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.notificationDataInLocal.deeplinkAttr, OS.Types.Text, true)
}, function ($parameters) {
}, {
DeeplinkRedirect: controller.clientActionProxies.deeplinkRedirect$Action
}, {});
}

// Trigger Event: NewNotification
return controller.newNotification$Action(vars.value.notificationDataInLocal, callContext);
}

});
});
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.Layout_Lvl3.FirebaseCloudMessagingNewNotification$vars", [{
name: "NotificationData",
attrName: "notificationDataInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new NewFirebaseMobilePlugin_WTFModel.NotificationDataRec();
},
complexType: NewFirebaseMobilePlugin_WTFModel.NotificationDataRec
}, {
name: "Notification",
attrName: "notificationInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var checkIsIOS10Var = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: LayoutReady
MobilePatternsController.default.layoutReady$Action(false, callContext);
// Execute Action: CheckIsIOS10
model.flush();
return WTF_MOBController.default.checkIsIOS10$Action(callContext).then(function (value) {
checkIsIOS10Var.value = value;
}).then(function () {
// IsIOS10 = CheckIsIOS10.IsIOS10
model.variables.isIOS10Var = checkIsIOS10Var.value.isIOS10Out;
});
});
};

Controller.prototype.triggerOnSyncError$Action = function (syncUnitIn, errorMessageIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncError$Action, callContext, syncUnitIn, errorMessageIn);

};
Controller.prototype.triggerOnSyncStart$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncStart$Action, callContext, syncUnitIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.triggerOnPullToRefresh$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnPullToRefresh$Action, callContext);

};
Controller.prototype.triggerOnSyncComplete$Action = function (syncUnitIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnSyncComplete$Action, callContext, syncUnitIn);

};
Controller.prototype.deeplinkRedirect$Action = function (deeplinkIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._deeplinkRedirect$Action, callContext, deeplinkIn);

};
Controller.prototype.onInitializeSessionStorage$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitializeSessionStorage$Action, callContext);

};
Controller.prototype.firebase_BlockDynamicLinkEvent$Action = function (dataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._firebase_BlockDynamicLinkEvent$Action, callContext, dataIn);

};
Controller.prototype.firebase_BlockErrorHandlerEvent$Action = function (dataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._firebase_BlockErrorHandlerEvent$Action, callContext, dataIn);

};
Controller.prototype.firebaseCloudMessagingNewNotification$Action = function (notificationDataIn, notificationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._firebaseCloudMessagingNewNotification$Action, callContext, notificationDataIn, notificationIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onSyncComplete$Action = function () {
return Promise.resolve();
};
Controller.prototype.onPullToRefresh$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onSyncStart$Action = function () {
return Promise.resolve();
};
Controller.prototype.newNotification$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onInitializeSessionStorage$Action(callContext);

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onReady$Action(callContext);

};
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
return WTF_MOBController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, WTF_MOBLanguageResources);
});
define("WTF_MOB.Common.Layout_Lvl3.mvc$controller.OnInitializeSessionStorage.SessionStorage_GetUrlJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
if (typeof(Storage) !== "undefined") {
    sessionStorage.lvl3URL = location.pathname;
    $parameters.IsSessionStorageSupported = true;
} else {
    $parameters.IsSessionStorageSupported = false;
}
};
});
define("WTF_MOB.Common.Layout_Lvl3.mvc$controller.OnInitializeSessionStorage.GetURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.ScreenName = location.pathname;
};
});
define("WTF_MOB.Common.Layout_Lvl3.mvc$controller.Firebase_BlockDynamicLinkEvent.GetLinkFromJSONJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
try {
    $parameters.Link = JSON.parse($parameters.inputJSON).deepLink;
    $parameters.Sucess = true;
}
catch(err) {
    $parameters.Sucess = false;
    $parameters.Error = err.stringify();
}
};
});
define("WTF_MOB.Common.Layout_Lvl3.mvc$controller.FirebaseCloudMessagingNewNotification.AddListenerToFeedbackMessageJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var feedbackMsg = document.querySelector('.feedback-message');
    
feedbackMsg.onclick = function() {$actions.DeeplinkRedirect($parameters.Deeplink);};
};
});

