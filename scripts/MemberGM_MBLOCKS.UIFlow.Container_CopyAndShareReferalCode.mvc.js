define("MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.mvc$model", ["OutSystems", "MemberGM_MBLOCKS.model", "CommonPlugin.model", "SocialSharingPlugin.controller", "MemberGM_MBLOCKS.controller", "CommonPlugin.controller", "CopyToClipboard_Plugin.controller", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "CommonPlugin.model$ErrorRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$SocialSharing", "MemberGM_MBLOCKS.referencesHealth$SocialSharingPlugin", "MemberGM_MBLOCKS.controller$DisabledOrEnabledButton", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "CommonPlugin.controller$IsCordovaDefined", "CopyToClipboard_Plugin.controller$CopyToClipboard", "MemberGM_MBLOCKS.referencesHealth$CopyToClipboard_Plugin"], function (OutSystems, MemberGM_MBLOCKSModel, CommonPluginModel, SocialSharingPluginController, MemberGM_MBLOCKSController, CommonPluginController, CopyToClipboard_PluginController, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ClassReferalCode", "classReferalCodeIn", "ClassReferalCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_classReferalCodeInDataFetchStatus", "_classReferalCodeInDataFetchStatus", "_classReferalCodeInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Description", "descriptionIn", "Description", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", "_descriptionInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ClassDescription", "classDescriptionIn", "ClassDescription", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_classDescriptionInDataFetchStatus", "_classDescriptionInDataFetchStatus", "_classDescriptionInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShowShareBtn", "showShareBtnIn", "ShowShareBtn", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_showShareBtnInDataFetchStatus", "_showShareBtnInDataFetchStatus", "_showShareBtnInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ShareBtnText", "shareBtnTextIn", "ShareBtnText", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_shareBtnTextInDataFetchStatus", "_shareBtnTextInDataFetchStatus", "_shareBtnTextInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ClassShareBtn", "classShareBtnIn", "ClassShareBtn", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_classShareBtnInDataFetchStatus", "_classShareBtnInDataFetchStatus", "_classShareBtnInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("MessageToShare", "messageToShareIn", "MessageToShare", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_messageToShareInDataFetchStatus", "_messageToShareInDataFetchStatus", "_messageToShareInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("UrlToShare", "urlToShareIn", "UrlToShare", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_urlToShareInDataFetchStatus", "_urlToShareInDataFetchStatus", "_urlToShareInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("ReferalCode", "referalCodeIn", "ReferalCode", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_referalCodeInDataFetchStatus", "_referalCodeInDataFetchStatus", "_referalCodeInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ClassReferalCode" in inputs) {
this.variables.classReferalCodeIn = inputs.ClassReferalCode;
if("_classReferalCodeInDataFetchStatus" in inputs) {
this.variables._classReferalCodeInDataFetchStatus = inputs._classReferalCodeInDataFetchStatus;
}

}

if("Description" in inputs) {
this.variables.descriptionIn = inputs.Description;
if("_descriptionInDataFetchStatus" in inputs) {
this.variables._descriptionInDataFetchStatus = inputs._descriptionInDataFetchStatus;
}

}

if("ClassDescription" in inputs) {
this.variables.classDescriptionIn = inputs.ClassDescription;
if("_classDescriptionInDataFetchStatus" in inputs) {
this.variables._classDescriptionInDataFetchStatus = inputs._classDescriptionInDataFetchStatus;
}

}

if("ShowShareBtn" in inputs) {
this.variables.showShareBtnIn = inputs.ShowShareBtn;
if("_showShareBtnInDataFetchStatus" in inputs) {
this.variables._showShareBtnInDataFetchStatus = inputs._showShareBtnInDataFetchStatus;
}

}

if("ShareBtnText" in inputs) {
this.variables.shareBtnTextIn = inputs.ShareBtnText;
if("_shareBtnTextInDataFetchStatus" in inputs) {
this.variables._shareBtnTextInDataFetchStatus = inputs._shareBtnTextInDataFetchStatus;
}

}

if("ClassShareBtn" in inputs) {
this.variables.classShareBtnIn = inputs.ClassShareBtn;
if("_classShareBtnInDataFetchStatus" in inputs) {
this.variables._classShareBtnInDataFetchStatus = inputs._classShareBtnInDataFetchStatus;
}

}

if("MessageToShare" in inputs) {
this.variables.messageToShareIn = inputs.MessageToShare;
if("_messageToShareInDataFetchStatus" in inputs) {
this.variables._messageToShareInDataFetchStatus = inputs._messageToShareInDataFetchStatus;
}

}

if("UrlToShare" in inputs) {
this.variables.urlToShareIn = inputs.UrlToShare;
if("_urlToShareInDataFetchStatus" in inputs) {
this.variables._urlToShareInDataFetchStatus = inputs._urlToShareInDataFetchStatus;
}

}

if("ReferalCode" in inputs) {
this.variables.referalCodeIn = inputs.ReferalCode;
if("_referalCodeInDataFetchStatus" in inputs) {
this.variables._referalCodeInDataFetchStatus = inputs._referalCodeInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.mvc$view", ["OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "CommonPlugin.controller", "CopyToClipboard_Plugin.controller", "react", "OutSystemsReactView", "MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.mvc$model", "MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "CommonPlugin.model$ErrorRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$SocialSharing", "MemberGM_MBLOCKS.referencesHealth$SocialSharingPlugin", "MemberGM_MBLOCKS.controller$DisabledOrEnabledButton", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "CommonPlugin.controller$IsCordovaDefined", "CopyToClipboard_Plugin.controller$CopyToClipboard", "MemberGM_MBLOCKS.referencesHealth$CopyToClipboard_Plugin"], function (OutSystems, MemberGM_MBLOCKSModel, MemberGM_MBLOCKSController, CommonPluginModel, SocialSharingPluginController, CommonPluginController, CopyToClipboard_PluginController, React, OSView, MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvc_model, MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view) {
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
        View.displayName = "UIFlow.Container_CopyAndShareReferalCode";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvc_controller;
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
style: model.variables.classDescriptionIn,
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._classDescriptionInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "desc",
value: model.variables.descriptionIn,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._descriptionInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: ("pt-16 text-uppercase " + model.variables.classReferalCodeIn),
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._classReferalCodeInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "referal_code",
value: model.variables.referalCodeIn,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._referalCodeInDataFetchStatus)
}), React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: MemberGM_MBLOCKSModel.staticEntities.iCON_CLASS.iconCopiar,
HasRipple: true,
StyleClass: "c-strongPink d-inline-block mt-8",
IconSize: model.getCachedValue(idService.getId("CopyCode.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onIconClick$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.copyOnClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
name: "CopyCode",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mt-32",
visible: model.variables.showShareBtnIn,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._showShareBtnInDataFetchStatus)
}, React.createElement(OSWidgets.Button, {
enabled: true,
gridProperties: {
classes: "OSFillParent"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.shareOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: model.variables.classShareBtnIn,
visible: true,
_idProps: {
service: idService,
name: "ShareCode"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._classShareBtnInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
value: model.variables.shareBtnTextIn,
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._shareBtnTextInDataFetchStatus)
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.mvc$controller", ["OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.controller", "CommonPlugin.model", "SocialSharingPlugin.controller", "CommonPlugin.controller", "CopyToClipboard_Plugin.controller", "MemberGM_MBLOCKS.languageResources", "CommonPlugin.model$ErrorRec", "MemberGM_MBLOCKS.referencesHealth", "MemberGM_MBLOCKS.referencesHealth$CommonPlugin", "SocialSharingPlugin.controller$SocialSharing", "MemberGM_MBLOCKS.referencesHealth$SocialSharingPlugin", "MemberGM_MBLOCKS.controller$DisabledOrEnabledButton", "SocialSharingPlugin.controller$CheckSocialSharingPlugin", "CommonPlugin.controller$IsCordovaDefined", "CopyToClipboard_Plugin.controller$CopyToClipboard", "MemberGM_MBLOCKS.referencesHealth$CopyToClipboard_Plugin"], function (OutSystems, MemberGM_MBLOCKSModel, MemberGM_MBLOCKSController, CommonPluginModel, SocialSharingPluginController, CommonPluginController, CopyToClipboard_PluginController, MemberGM_MBLOCKSLanguageResources) {
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
Controller.prototype._shareOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShareOnClick");
callContext = controller.callContext(callContext);
var socialSharingVar = new OS.DataTypes.VariableHolder();
var checkSocialSharingPluginVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
MemberGM_MBLOCKSController.default.disabledOrEnabledButton$Action(idService.getId("ShareCode"), false, callContext);
// Trigger Event: ShareOnClick_Start
return controller.shareOnClick_Start$Action(callContext).then(function () {
// Execute Action: CheckSocialSharingPlugin
checkSocialSharingPluginVar.value = SocialSharingPluginController.default.checkSocialSharingPlugin$Action(callContext);

}).then(function () {
return OS.Flow.executeSequence(function () {
if((checkSocialSharingPluginVar.value.isAvailableOut)) {
// Execute Action: SocialSharing
model.flush();
return SocialSharingPluginController.default.socialSharing$Action(model.variables.messageToShareIn, model.variables.urlToShareIn, MemberGM_MBLOCKSModel.staticEntities.socialType.all, callContext).then(function (value) {
socialSharingVar.value = value;
}).then(function () {
// Trigger Event: ShareOnClick_Finish
return controller.shareOnClick_Finish$Action(callContext);
}).then(function () {
// Execute Action: EnabledButton4
MemberGM_MBLOCKSController.default.disabledOrEnabledButton$Action(idService.getId("ShareCode"), true, callContext);
});
} else {
// Execute Action: EnabledButton3
MemberGM_MBLOCKSController.default.disabledOrEnabledButton$Action(idService.getId("ShareCode"), true, callContext);
}

});
});
});
};
Controller.prototype._copyOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CopyOnClick");
callContext = controller.callContext(callContext);
var isCordovaDefinedVar = new OS.DataTypes.VariableHolder();
var copyToClipboardVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: IsCordovaDefined
isCordovaDefinedVar.value = CommonPluginController.default.isCordovaDefined$Action(callContext);

return OS.Flow.executeSequence(function () {
if((isCordovaDefinedVar.value.isLoadedOut)) {
// Trigger Event: CopyOnClick_Start
return controller.copyOnClick_Start$Action(callContext).then(function () {
// Execute Action: CopyToClipboard
model.flush();
return CopyToClipboard_PluginController.default.copyToClipboard$Action(model.variables.referalCodeIn, callContext).then(function (value) {
copyToClipboardVar.value = value;
});
}).then(function () {
// Trigger Event: CopyOnClick_Finish
return controller.copyOnClick_Finish$Action(callContext);
});
}

});
});
};

Controller.prototype.shareOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._shareOnClick$Action, callContext);

};
Controller.prototype.copyOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._copyOnClick$Action, callContext);

};
Controller.prototype.shareOnClick_Start$Action = function () {
return Promise.resolve();
};
Controller.prototype.copyOnClick_Start$Action = function () {
return Promise.resolve();
};
Controller.prototype.copyOnClick_Finish$Action = function () {
return Promise.resolve();
};
Controller.prototype.shareOnClick_Finish$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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
return MemberGM_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, MemberGM_MBLOCKSLanguageResources);
});

