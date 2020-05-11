define("WTF_MOB.Common.BottomBar.mvc$model", ["OutSystems", "WTF_MOB.model", "MobileUIWidgets.controller", "WTF_MOB.controller", "WTF_MBP.controller", "MobilePatterns.Navigation.BottomBarItem.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "MobileUIWidgets.WidgetsInteraction.DrawerV3.mvc$model", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$OpenExternalURL", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, MobileUIWidgetsController, WTF_MOBController, WTF_MBPController, MobilePatterns_Navigation_BottomBarItem_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel, MobileUIWidgets_WidgetsInteraction_DrawerV3_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ScreenSelected", "screenSelectedVar", "ScreenSelected", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("IsOpenPlusTab", "isOpenPlusTabVar", "IsOpenPlusTab", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("Page", "pageIn", "Page", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_pageInDataFetchStatus", "_pageInDataFetchStatus", "_pageInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("DemoAppWithoutLogin", "demoAppWithoutLoginIn", "DemoAppWithoutLogin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_demoAppWithoutLoginInDataFetchStatus", "_demoAppWithoutLoginInDataFetchStatus", "_demoAppWithoutLoginInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = ((MobilePatterns_Navigation_BottomBarItem_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets) || MobileUIWidgets_WidgetsInteraction_DrawerV3_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Page" in inputs) {
this.variables.pageIn = inputs.Page;
if("_pageInDataFetchStatus" in inputs) {
this.variables._pageInDataFetchStatus = inputs._pageInDataFetchStatus;
}

}

if("DemoAppWithoutLogin" in inputs) {
this.variables.demoAppWithoutLoginIn = inputs.DemoAppWithoutLogin;
if("_demoAppWithoutLoginInDataFetchStatus" in inputs) {
this.variables._demoAppWithoutLoginInDataFetchStatus = inputs._demoAppWithoutLoginInDataFetchStatus;
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
define("WTF_MOB.Common.BottomBar.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "react", "OutSystemsReactView", "WTF_MOB.Common.BottomBar.mvc$model", "WTF_MOB.Common.BottomBar.mvc$controller", "OutSystemsReactWidgets", "MobilePatterns.Navigation.BottomBarItem.mvc$view", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "MobileUIWidgets.WidgetsInteraction.DrawerV3.mvc$view", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$OpenExternalURL", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, React, OSView, WTF_MOB_Common_BottomBar_mvc_model, WTF_MOB_Common_BottomBar_mvc_controller, OSWidgets, MobilePatterns_Navigation_BottomBarItem_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsInteraction_DrawerV3_mvc_view) {
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
        View.displayName = "Common.BottomBar";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.Common.BottomBar.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobilePatterns_Navigation_BottomBarItem_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, MobileUIWidgets_WidgetsInteraction_DrawerV3_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_Common_BottomBar_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_Common_BottomBar_mvc_controller;
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
style: "bottom-bar-wrapper m-bottomBar",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar ph",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToScreen$Action("Zona", controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
var eventHandlerContext = callContext.clone();
controller.selected$Action(controller.callContext(eventHandlerContext));

;
}
},
style: model.getCachedValue(idService.getId("tkMUm7a7UkmvDoX86Kw8wA.Style"), function () {
return ("bottom-item m-bottomBarItem " + ((model.variables.isOfflineIn) ? ("opacity") : ("")));
}, function () {
return model.variables.isOfflineIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus)
}, React.createElement(MobilePatterns_Navigation_BottomBarItem_mvc_view, {
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
uuid: "4",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar-icon",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: model.getCachedValue(idService.getId("Selfcare.IconName"), function () {
return (((model.variables.pageIn === "Selfcare")) ? (WTF_MOBModel.staticEntities.iCON_CLASS.iconZonaFilled) : (WTF_MOBModel.staticEntities.iCON_CLASS.iconZona));
}, function () {
return model.variables.pageIn;
}),
_iconNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus),
StyleClass: model.getCachedValue(idService.getId("Selfcare.StyleClass"), function () {
return (((model.variables.pageIn === "Selfcare")) ? ("c-strongPink") : (""));
}, function () {
return model.variables.pageIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus),
HasRipple: false,
IconSize: model.getCachedValue(idService.getId("Selfcare.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
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
name: "Selfcare",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
text: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("RCyj470QJkmj72gqyp0Dgw.Style"), function () {
return ("bottom-bar-item-text " + (((model.variables.pageIn === "Selfcare")) ? ("-active") : ("")));
}, function () {
return model.variables.pageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus)
}, "Zona")];
})
},
_dependencies: [asPrimitiveValue(model.variables._pageInDataFetchStatus), asPrimitiveValue(model.variables.pageIn)]
}))), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToScreen$Action("Saucy", controller.callContext(eventHandlerContext));
});
;
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
style: model.getCachedValue(idService.getId("A+LTu9JVwEOE9A_Kr9g1_A.Style"), function () {
return ("bottom-item m-bottomBarItem " + (((model.variables.demoAppWithoutLoginIn || model.variables.isOfflineIn)) ? ("opacity") : ("")));
}, function () {
return model.variables.demoAppWithoutLoginIn;
}, function () {
return model.variables.isOfflineIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._demoAppWithoutLoginInDataFetchStatus, model.variables._isOfflineInDataFetchStatus)
}, React.createElement(MobilePatterns_Navigation_BottomBarItem_mvc_view, {
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
uuid: "10",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar-icon",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: model.getCachedValue(idService.getId("Saucy.StyleClass"), function () {
return (((model.variables.pageIn === "Saucy")) ? ("c-strongPink") : (""));
}, function () {
return model.variables.pageIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus),
IconName: model.getCachedValue(idService.getId("Saucy.IconName"), function () {
return (((model.variables.pageIn === "Saucy")) ? (WTF_MOBModel.staticEntities.iCON_CLASS.iconSaucyFilled) : (WTF_MOBModel.staticEntities.iCON_CLASS.iconSaucy));
}, function () {
return model.variables.pageIn;
}),
_iconNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus)
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
name: "Saucy",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
text: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("+f3CTIiRE0uYZgMlk5CbFA.Style"), function () {
return ("bottom-bar-item-text " + (((model.variables.pageIn === "Saucy")) ? ("-active") : ("")));
}, function () {
return model.variables.pageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus)
}, "Saucy")];
})
},
_dependencies: [asPrimitiveValue(model.variables._pageInDataFetchStatus), asPrimitiveValue(model.variables.pageIn)]
}))), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToScreen$Action("Scratch", controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("Y7G1KVpDmEWHeabg6y99Jg.Style"), function () {
return ("bottom-item m-bottomBarItem " + ((model.variables.isOfflineIn) ? ("opacity") : ("")));
}, function () {
return model.variables.isOfflineIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._isOfflineInDataFetchStatus)
}, React.createElement(MobilePatterns_Navigation_BottomBarItem_mvc_view, {
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
uuid: "16",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar-icon",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: model.getCachedValue(idService.getId("Scratch.IconName"), function () {
return (((model.variables.pageIn === "Scratch")) ? (WTF_MOBModel.staticEntities.iCON_CLASS.iconScratchFilled) : (WTF_MOBModel.staticEntities.iCON_CLASS.iconScratch));
}, function () {
return model.variables.pageIn;
}),
_iconNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus),
StyleClass: model.getCachedValue(idService.getId("Scratch.StyleClass"), function () {
return (((model.variables.pageIn === "Scratch")) ? ("c-strongPink") : (""));
}, function () {
return model.variables.pageIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus),
HasRipple: false,
IconSize: model.getCachedValue(idService.getId("Scratch.IconSize"), function () {
return OS.BuiltinFunctions.nullTextIdentifier();
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
name: "Scratch",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
text: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("nDg7jWPDRUudV53rbvWuWg.Style"), function () {
return ("bottom-bar-item-text " + (((model.variables.pageIn === "Scratch")) ? ("-active") : ("")));
}, function () {
return model.variables.pageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus)
}, "Scratch")];
})
},
_dependencies: [asPrimitiveValue(model.variables._pageInDataFetchStatus), asPrimitiveValue(model.variables.pageIn)]
}))), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToScreen$Action("Wallet", controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("Gx6CepjhG02DYtSSQm56Hg.Style"), function () {
return ("bottom-item m-bottomBarItem " + ((model.variables.demoAppWithoutLoginIn) ? ("opacity") : ("")));
}, function () {
return model.variables.demoAppWithoutLoginIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._demoAppWithoutLoginInDataFetchStatus)
}, React.createElement(MobilePatterns_Navigation_BottomBarItem_mvc_view, {
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
uuid: "22",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar-icon",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: model.getCachedValue(idService.getId("Wallet.StyleClass"), function () {
return (((model.variables.pageIn === "Wallet")) ? ("c-strongPink") : (""));
}, function () {
return model.variables.pageIn;
}),
_styleClassInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus),
IconName: model.getCachedValue(idService.getId("Wallet.IconName"), function () {
return (((model.variables.pageIn === "Wallet")) ? (WTF_MOBModel.staticEntities.iCON_CLASS.iconWalletFilled) : (WTF_MOBModel.staticEntities.iCON_CLASS.iconWallet));
}, function () {
return model.variables.pageIn;
}),
_iconNameInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus)
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
name: "Wallet",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
text: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("q0sc8lBAn0+zGHT_5ccVew.Style"), function () {
return ("bottom-bar-item-text " + (((model.variables.pageIn === "Wallet")) ? ("-active") : ("")));
}, function () {
return model.variables.pageIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._pageInDataFetchStatus)
}, "Wallet")];
})
},
_dependencies: [asPrimitiveValue(model.variables._pageInDataFetchStatus), asPrimitiveValue(model.variables.pageIn)]
}))), React.createElement(OSWidgets.Link, {
enabled: true,
gridProperties: {
marginLeft: "0"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.goToScreen$Action("Mais", controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("JXqenSl000iT5G1Dgu0A9g.Style"), function () {
return ("bottom-item m-bottomBarItem " + (((model.variables.demoAppWithoutLoginIn || model.variables.isOfflineIn)) ? ("opacity") : ("")));
}, function () {
return model.variables.demoAppWithoutLoginIn;
}, function () {
return model.variables.isOfflineIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._demoAppWithoutLoginInDataFetchStatus, model.variables._isOfflineInDataFetchStatus)
}, React.createElement(MobilePatterns_Navigation_BottomBarItem_mvc_view, {
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
uuid: "28",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
icon: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar-icon",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.small,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconMaisWTF
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
name: "Mais",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}),
text: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-bar-item-text",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "c-warmPurple",
text: ["Mais"],
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
})))), React.createElement(MobileUIWidgets_WidgetsInteraction_DrawerV3_mvc_view, {
inputs: {
HasStatusBarPlugin: false,
IsOpen: model.variables.isOpenPlusTabVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onBgdClick$Action: function () {
var eventHandlerContext = callContext.clone();
controller.toggleDrawer$Action(controller.callContext(eventHandlerContext));

;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "33",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
floatTop: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-upBarLine",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
header: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-plusTabContainer",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "gridRow a-plusTab",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.plusTab_GoTo$Action("Faq", controller.callContext(eventHandlerContext));
});
;
}
},
style: "col-4 a-plusTabItem",
visible: true,
_idProps: {
service: idService,
name: "faqBtn"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconFaq,
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xLarge,
StyleClass: "c-white"
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
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-white mt-8",
value: "Ajuda App",
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.plusTab_GoTo$Action("Site", controller.callContext(eventHandlerContext));
});
;
}
},
style: "col-4 a-plusTabItem",
visible: true,
_idProps: {
service: idService,
name: "SiteBtn"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xLarge,
StyleClass: "c-white",
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconInternet
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
uuid: "42",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-white mt-8",
value: "Site WTF",
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.plusTab_GoTo$Action("About", controller.callContext(eventHandlerContext));
});
;
}
},
style: "col-4 a-plusTabItem",
visible: true,
_idProps: {
service: idService,
name: "AboutBtn"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
StyleClass: "c-white",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.xLarge,
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconInfoRounded
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
uuid: "46",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
style: "a-textRead -small c-white mt-8",
value: "Sobre a App",
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "separator mb-8 mt-16",
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center",
visible: true,
_idProps: {
service: idService,
uuid: "50"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "col-3",
visible: true,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.logo.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
})
},
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.Common.BottomBar.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "MobileUIWidgets.controller", "WTF_MBP.controller", "WTF_MOB.languageResources", "WTF_MOB.Common.BottomBar.mvc$controller.GoToScreen.GetPageURLJS", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$OpenExternalURL", "WTF_MBP.controller$GetConfigValueAsText_MBP", "WTF_MOB.referencesHealth$WTF_MBP"], function (OutSystems, WTF_MOBModel, WTF_MOBController, MobileUIWidgetsController, WTF_MBPController, WTF_MOBLanguageResources, WTF_MOB_Common_BottomBar_mvc_controller_GoToScreen_GetPageURLJS) {
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
Controller.prototype._toggleDrawer$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ToggleDrawer");
callContext = controller.callContext(callContext);
// IsOpenPlusTab = notIsOpenPlusTab
model.variables.isOpenPlusTabVar = !(model.variables.isOpenPlusTabVar);
};
Controller.prototype._closePlusTab$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ClosePlusTab");
callContext = controller.callContext(callContext);
// IsOpenPlusTab = False
model.variables.isOpenPlusTabVar = false;
};
Controller.prototype._goToScreen$Action = function (screenNameIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GoToScreen");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.BottomBar.GoToScreen$vars"))());
vars.value.screenNameInLocal = screenNameIn;
var getPageURLJSResult = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Menu", vars.value.screenNameInLocal, 0, "", callContext).then(function () {
getPageURLJSResult.value = controller.safeExecuteJSNode(WTF_MOB_Common_BottomBar_mvc_controller_GoToScreen_GetPageURLJS, "GetPageURL", "GoToScreen", {
PageURL: OS.DataTypes.JSConversions.basicTypeToJS("", OS.Types.Text, true)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("WTF_MOB.Common.BottomBar.GoToScreen$getPageURLJSResult"))();
jsNodeResult.pageURLOut = OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType($parameters.PageURL, OS.Types.Text);
return jsNodeResult;
}, {}, {});
}).then(function () {
if((model.variables.isOfflineIn)) {
if(((vars.value.screenNameInLocal === "Wallet"))) {
// SetIndex
// PageIndex = Index
vars.value.pageIndexVar = OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/Wallet"), 0, false, false);
if((!(((vars.value.pageIndexVar) !== (-1))))) {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

} else {
if((model.variables.demoAppWithoutLoginIn)) {
if(((vars.value.screenNameInLocal === "Zona"))) {
// SetIndex
// PageIndex = Index
vars.value.pageIndexVar = OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/WTF_Home_WithoutLogin"), 0, false, false);
if((!(((vars.value.pageIndexVar) !== (-1))))) {
// Destination: /WTF_MOB/WTF_Home_WithoutLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home_WithoutLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

} else {
if((vars.value.screenNameInLocal === "Scratch")) {
// SetIndex
// PageIndex = Index
vars.value.pageIndexVar = OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/ScratchTutorial"), 0, false, false);
if((!(((vars.value.pageIndexVar) !== (-1))))) {
// Destination: /WTF_MOB/ScratchTutorial
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ScratchTutorial", {
nDiamondsBonus: 0,
HasAccept: true,
DemoAppWithoutLogin: true
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

}

} else {
if(((vars.value.screenNameInLocal === "Saucy"))) {
// SetIndex
// PageIndex = Index
vars.value.pageIndexVar = OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/Saucy"), 0, false, false);
if((!(((vars.value.pageIndexVar) !== (-1))))) {
// Destination: /WTF_MOB/Saucy
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Saucy", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

} else {
if((vars.value.screenNameInLocal === "Zona")) {
// SetIndex
// PageIndex = Index
vars.value.pageIndexVar = OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/WTF_Home"), 0, false, false);
// IsOnHome?
if((!(((vars.value.pageIndexVar) !== (-1))))) {
// Destination: /WTF_MOB/WTF_Home
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home", {
FromWelcomePrize: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

} else {
if((vars.value.screenNameInLocal === "Scratch")) {
// SetIndex
// PageIndex = Index
vars.value.pageIndexVar = OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/Scratch"), 0, false, false);
if((((vars.value.pageIndexVar) !== (-1)))) {
if((!(((OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/ScratchResult"), 0, false, false)) !== (-1))))) {
return OS.Flow.returnAsync();

}

}

// Destination: /WTF_MOB/Scratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((vars.value.screenNameInLocal === "Wallet")) {
// SetIndex
// PageIndex = Index
vars.value.pageIndexVar = OS.BuiltinFunctions.index(OS.BuiltinFunctions.toLower(getPageURLJSResult.value.pageURLOut), OS.BuiltinFunctions.toLower("/Wallet"), 0, false, false);
if((!(((vars.value.pageIndexVar) !== (-1))))) {
// Destination: /WTF_MOB/Wallet
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Wallet", {
IsOfflineMode: false
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

} else {
if((vars.value.screenNameInLocal === "Mais")) {
// Execute Action: ToggleDrawer
controller._toggleDrawer$Action(callContext);
} else {
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

}

}

}

}

}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.BottomBar.GoToScreen$vars", [{
name: "ScreenName",
attrName: "screenNameInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "PageIndex",
attrName: "pageIndexVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.registerVariableGroupType("WTF_MOB.Common.BottomBar.GoToScreen$getPageURLJSResult", [{
name: "PageURL",
attrName: "pageURLOut",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._plusTab_GoTo$Action = function (labelIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PlusTab_GoTo");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.Common.BottomBar.PlusTab_GoTo$vars"))());
vars.value.labelInLocal = labelIn;
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Mais", vars.value.labelInLocal, 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if(((vars.value.labelInLocal === "Site"))) {
// Execute Action: PlusTab_GoToSite
return controller._plusTab_GoToSite$Action(callContext);
} else {
if((vars.value.labelInLocal === "Faq")) {
// Destination: /WTF_MOB/FAQ
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/FAQ", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((vars.value.labelInLocal === "About")) {
// Destination: /WTF_MOB/AboutAPP
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/AboutAPP", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

}

});
});
});
};
Controller.registerVariableGroupType("WTF_MOB.Common.BottomBar.PlusTab_GoTo$vars", [{
name: "label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._plusTab_GoToSite$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PlusTab_GoToSite");
callContext = controller.callContext(callContext);
var getConfigValueAsText_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
if((model.variables.isOpenPlusTabVar)) {
// Execute Action: ClosePlusTab
controller._closePlusTab$Action(callContext);
}

// Execute Action: GetConfigValueAsText_MBP
model.flush();
return WTF_MBPController.default.getConfigValueAsText_MBP$Action("EXTERNAL_URL_SITEWTF", callContext).then(function (value) {
getConfigValueAsText_MBPVar.value = value;
}).then(function () {
// Execute Action: OpenExternalURL
model.flush();
return WTF_MOBController.default.openExternalURL$Action(getConfigValueAsText_MBPVar.value.valueOut, true, "", WTF_MOBModel.staticEntities.hEX_COLORS.strongPink_WTF, callContext);
});
});
};
Controller.prototype._selected$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Selected");
callContext = controller.callContext(callContext);
// ScreenSelected = notScreenSelected
model.variables.screenSelectedVar = !(model.variables.screenSelectedVar);
};

Controller.prototype.toggleDrawer$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggleDrawer$Action, callContext);

};
Controller.prototype.closePlusTab$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closePlusTab$Action, callContext);

};
Controller.prototype.goToScreen$Action = function (screenNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._goToScreen$Action, callContext, screenNameIn);

};
Controller.prototype.plusTab_GoTo$Action = function (labelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._plusTab_GoTo$Action, callContext, labelIn);

};
Controller.prototype.plusTab_GoToSite$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._plusTab_GoToSite$Action, callContext);

};
Controller.prototype.selected$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._selected$Action, callContext);

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
return WTF_MOBController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, WTF_MOBLanguageResources);
});
define("WTF_MOB.Common.BottomBar.mvc$controller.GoToScreen.GetPageURLJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.PageURL = window.location.href;
};
});

