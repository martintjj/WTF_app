define("WTF_MOB.ScratchFlow.ScratchTable.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$model", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MOB_Common_Layout_Lvl2_mvcModel, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("finishScratch", "finishScratchVar", "finishScratch", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("hasPlay", "hasPlayVar", "hasPlay", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("destroyFromCloseAction", "destroyFromCloseActionVar", "destroyFromCloseAction", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("DiamondTypeName", "diamondTypeNameIn", "DiamondTypeName", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_diamondTypeNameInDataFetchStatus", "_diamondTypeNameInDataFetchStatus", "_diamondTypeNameInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = (WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("DiamondTypeName" in inputs) {
this.variables.diamondTypeNameIn = OS.DataTypes.JSConversions.jsToBasicType(inputs.DiamondTypeName, OS.Types.Text);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.ScratchFlow.ScratchTable.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "react", "OutSystemsReactView", "WTF_MOB.ScratchFlow.ScratchTable.mvc$model", "WTF_MOB.ScratchFlow.ScratchTable.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsContent.NOSAppsIcons.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, React, OSView, WTF_MOB_ScratchFlow_ScratchTable_mvc_model, WTF_MOB_ScratchFlow_ScratchTable_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view) {
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
        View.displayName = "ScratchFlow.ScratchTable";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchFlow.ScratchTable.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/WTF_MOB.soundjs_min.js", "scripts/CustomTouchEvents.HammerJS.js", "scripts/WTF_MOB.BackButtonNull.js"];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchTable_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchFlow_ScratchTable_mvc_controller;
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
ContentClass: "b-warmPurple hasoverflowhidden",
HasOverflowHidden: true,
PageSection: "Scratch",
ScreenName: "ScratchTable",
Diamante: model.variables.diamondTypeNameIn,
PageTitle: "Scratch jogar"
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "RCHWGSnZxUuo3Cn7Y8gHMw"
},
style: "text-center b-warmPurple pa-16 pt-48",
visible: true,
_idProps: {
service: idService,
name: "StyleguideTitleStrongPink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "game-header",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "d-inline-block action-icon -ripple",
visible: true,
_idProps: {
service: idService,
name: "close_screen"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobileUIWidgets_WidgetsContent_NOSAppsIcons_mvc_view, {
inputs: {
IconName: WTF_MOBModel.staticEntities.iCON_CLASS.iconClose,
StyleClass: "c-white",
IconSize: WTF_MOBModel.staticEntities.iCON_SIZE.large
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
uuid: "4",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "d-inline-block",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
extendedProperties: {
"data-style-key": "GLEeY96NGU2pypwmqBt50g"
},
style: "h3 c-white",
text: ["Sair"],
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}))))];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.playScratchClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.disco_sem_logo.svg"),
style: "prize",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "game_screen hasoverflowhidden",
visible: true,
_idProps: {
service: idService,
name: "game_screen"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.finishScratchVar === false), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "container game-screen-first-row",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "slider-container",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "slider",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Text, {
style: "slider-text",
text: ["WTF – SÓ QUE SIM ft. Think Music | #sabesquepodes"],
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "container game-screen-second-row",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "a-flexCardTitle app-title"
},
tag: "span",
_idProps: {
service: idService,
name: "CopyContainer"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "É touch",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: "faz scratch",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "container game-screen-fourth-row",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "game-meter",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "right",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-row",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-row",
visible: true,
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "38"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "indicator-step",
visible: true,
_idProps: {
service: idService,
uuid: "40"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "left",
visible: true,
_idProps: {
service: idService,
name: "svg_meter_id"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.group_pink.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "svg_meter_id_img"
},
_widgetRecordProvider: widgetsRecordProvider
})))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "container game-screen-third-row",
visible: true,
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "turn-table",
visible: true,
_idProps: {
service: idService,
uuid: "44"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "elements-container",
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.disco_base.svg"),
style: "disc-base",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "46"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.WTF_vinylFERGE01.svg"),
style: "spinning",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "game_screen_image"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.playScratchClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.disco_sem_logo.svg"),
style: "prize inner",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "48"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.disco_centro.svg"),
style: "center",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.wtf_scratchagulha.svg"),
style: "spinning",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "game_screen_image_needle"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.playScratchClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.group_white.svg"),
style: "prize-icon",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
extendedEvents: {
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.playScratchClick$Action(controller.callContext(eventHandlerContext));
});
;
}
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.hinttouch.svg"),
style: "touch-icon",
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "52"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "controls-container",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "frame",
visible: true,
_idProps: {
service: idService,
uuid: "54"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
extendedProperties: {
"data-style-key": "Q2p6smvV+0qpqtb+5wS2hQ"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.slider_socket.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.slider_thingy.svg"),
style: "knob",
type: /*Static*/ 0,
_idProps: {
service: idService,
name: "sound_knob"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}, function () {
return [];
}))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.finishScratchVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ScratchFlow.ScratchTable.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MOB.languageResources", "WTF_MOB.ScratchFlow.controller", "WTF_MOB.ScratchFlow.ScratchTable.mvc$controller.PlayScratchClick.JavaScript1JS", "WTF_MOB.ScratchFlow.ScratchTable.mvc$controller.OnReady.JavaScript1JS", "WTF_MOB.ScratchFlow.ScratchTable.mvc$controller.OnDestroy.JavaScript1JS", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$DeviceFeedbackHaptic", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.model$AnalyticsAuxVarRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MOBLanguageResources, WTF_MOB_ScratchFlowController, WTF_MOB_ScratchFlow_ScratchTable_mvc_controller_PlayScratchClick_JavaScript1JS, WTF_MOB_ScratchFlow_ScratchTable_mvc_controller_OnReady_JavaScript1JS, WTF_MOB_ScratchFlow_ScratchTable_mvc_controller_OnDestroy_JavaScript1JS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
analytics_SendEventAction$Action: function (categoryIn, labelIn) {
categoryIn = (categoryIn === undefined) ? "" : categoryIn;
labelIn = (labelIn === undefined) ? "" : labelIn;
return controller.executeActionInsideJSNode(controller._analytics_SendEventAction$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(categoryIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(labelIn, OS.Types.Text)), controller.callContext(), function (actionResults) {
return {};
});
},
closeOnClick$Action: function () {
return controller.executeActionInsideJSNode(controller._closeOnClick$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
});
}
};
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions
Controller.prototype._playScratchClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("PlayScratchClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if(((model.variables.hasPlayVar === false))) {
// hasPlay = True
model.variables.hasPlayVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_mesa", "Jogar", 0, "", callContext).then(function () {
// Execute Action: Analytics_SendEventAction
return controller._analytics_SendEventAction$Action("Scratch jogar premio", "Jogar", callContext);
}).then(function () {
// finishScratch = True
model.variables.finishScratchVar = true;
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_ScratchTable_mvc_controller_PlayScratchClick_JavaScript1JS, "JavaScript1", "PlayScratchClick", null, function ($parameters) {
}, {}, {});
// Destination: /WTF_MOB/ScratchPrize
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/ScratchPrize", {
DiamondTypeName: model.variables.diamondTypeNameIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}

});
}).catch(function (ex) {
OS.Logger.trace("ScratchTable.PlayScratchClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._onReady$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Scratch jogar"
model.variables.analyticsAuxVarVar.traceNameAttr = "Scratch jogar";
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_ScratchTable_mvc_controller_OnReady_JavaScript1JS, "JavaScript1", "OnReady", {
svg_green: OS.DataTypes.JSConversions.basicTypeToJS(OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.group_green.svg"), OS.Types.Text, true),
svg_yellow: OS.DataTypes.JSConversions.basicTypeToJS(OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.group_yellow.svg"), OS.Types.Text, true),
copy_container: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("CopyContainer"), OS.Types.Text, true),
container_svg: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("svg_meter_id_img"), OS.Types.Text, true),
DiamondTypeName: OS.DataTypes.JSConversions.basicTypeToJS(model.variables.diamondTypeNameIn, OS.Types.Text, true),
svg_pink: OS.DataTypes.JSConversions.basicTypeToJS(OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.group_pink.svg"), OS.Types.Text, true),
close_screenId: OS.DataTypes.JSConversions.basicTypeToJS(idService.getId("close_screen"), OS.Types.Text, true)
}, function ($parameters) {
}, {
DeviceFeedbackHaptic: WTF_MOBController.default.clientActionProxies.deviceFeedbackHaptic$Action,
Analytics_SendEventAction: controller.clientActionProxies.analytics_SendEventAction$Action,
CloseOnClick: controller.clientActionProxies.closeOnClick$Action
}, {});
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("ScratchTable.OnReady", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
}).then(function () {
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};
Controller.prototype._onDestroy$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
if((model.variables.destroyFromCloseActionVar)) {
controller.safeExecuteJSNode(WTF_MOB_ScratchFlow_ScratchTable_mvc_controller_OnDestroy_JavaScript1JS, "JavaScript1", "OnDestroy", null, function ($parameters) {
}, {}, {});
}

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
Controller.prototype._closeOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CloseOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// destroyFromCloseAction = True
model.variables.destroyFromCloseActionVar = true;
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_mesa", "Sair", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/Scratch
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/Scratch", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("ScratchTable.CloseOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._analytics_SendEventAction$Action = function (categoryIn, labelIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Analytics_SendEventAction");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.ScratchFlow.ScratchTable.Analytics_SendEventAction$vars"))());
vars.value.categoryInLocal = categoryIn;
vars.value.labelInLocal = labelIn;
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", vars.value.categoryInLocal, vars.value.labelInLocal, 0, "", callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.ScratchFlow.ScratchTable.Analytics_SendEventAction$vars", [{
name: "Category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "Label",
attrName: "labelInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.playScratchClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._playScratchClick$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.closeOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._closeOnClick$Action, callContext);

};
Controller.prototype.analytics_SendEventAction$Action = function (categoryIn, labelIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._analytics_SendEventAction$Action, callContext, categoryIn, labelIn);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
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
define("WTF_MOB.ScratchFlow.ScratchTable.mvc$controller.PlayScratchClick.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
document.getElementById( "b1-Header").style.display = "none";

var prize = document.getElementsByClassName( "prize")[ 0];

prize.style.width="200vh";
};
});
define("WTF_MOB.ScratchFlow.ScratchTable.mvc$controller.OnReady.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var primary = null;
var preload;
var lastValue_changed = 0;
var lastMaxValue = 0;
var afterCloseFirstTime = false;

function init() {
    /*
    setInterval(function(){
        var prize = document.getElementsByClassName( "prize")[ 0];
        var prize_inner = document.getElementsByClassName( "prize")[ 1];
        var prize_icon = document.getElementsByClassName( "prize-icon")[ 0];
        var touch_icon = document.getElementsByClassName( "touch-icon")[ 0];
        
        if(prize)prize.style.display = "block";
        if(prize_icon) prize_icon.style.display = "block";
        if(touch_icon) touch_icon.style.display = "block";
        if(prize_inner) prize_inner.style.display ="block";
        
    }, 2500);
    */
    var prize = document.getElementsByClassName( "prize")[ 0];
    var prize_inner = document.getElementsByClassName( "prize")[ 1];
    var prize_icon = document.getElementsByClassName( "prize-icon")[ 0];
    var touch_icon = document.getElementsByClassName( "touch-icon")[ 0];
    
    if(prize)prize.style.display = "block";
    if(prize_icon) prize_icon.style.display = "block";
    if(touch_icon) touch_icon.style.display = "block";
    if(prize_inner) prize_inner.style.display ="block";
    
    
    if (!createjs.Sound.initializeDefaultPlugins()) {
        console.error("nao inicializa");
        document.getElementById("error").style.display = "block";
        document.getElementById("content").style.display = "none";
        return;
    }
    
    // remove before adding new
    createjs.Sound.removeAllEventListeners();
    createjs.Sound.removeAllSounds();
    

    var loop_files= [
            "WTF_LOOP1_128.mp3",
            "WTF_LOOP2_128.mp3",
            "WTF_LOOP3_128.mp3"
        ];
        
    var loop_file = loop_files[Math.floor(Math.random() * loop_files.length)];

    var assetsPath = "/WTF_MOB/";
    var sounds = [
        {src: loop_file, id: 3},
        {src: "sound_scratch_cw.mp3", id: 1},
        {src: "sound_scratch_ccw.mp3", id: 2},
        {src: "WTF_SFX_WIN.mp3", id: "win"},
        {src: "WTF_SFX_LOOSE.mp3", id: "loose"}
    ];

    createjs.Sound.alternateExtensions = ["mp3"];   // add other extensions to try loading if the src file extension is not supported
    createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
    createjs.Sound.registerSounds(sounds, assetsPath);
}

var soundLoaded = function( event)
{
    if ( event.id == 3)
    {
        var props = new createjs.PlayPropsConfig().set({loop: -1});
        primary = createjs.Sound.play(3, props);
        disk_spinning = true;
    }
};

var debug = false;
var disc = document.getElementById( 'game_screen_image');
var sound_knob = document.getElementById( 'sound_knob');
var disc_events = new Hammer( disc);
var sound_knob_events = new Hammer( sound_knob);
var disk_degrees = 0;
var deltaX_ref = 0;
var deltaY_ref = 0;
var centerX = disc.width / 2;
var centerY = disc.height / 2;
var scratch_direction = 0;
var scratch_previous_direction = 0;
var speed = 0;
var disk_spinning = false;
var lastTime=0;
var sound_init = false;
var energy = 0;
var boost = 1;
var game_ended = false;

var CW_ROTATION= 1;
var CCW_ROTATION=-1;

var distance = 0;
var totalRotation = 0;
var rotation_initial = 0;
var rotation_delta = 0;

var turns = 0;
var previous_angle = 0;
var degrees_to_seconds = 1;

var good_provision = [
    ['Isso,', 'dá-lhe DJ'],
    ['Ui,', 'que bela malha']
];

var bad_provision = [
    ['Então?', 'Nem se ouviu…'],
    ['Tu', 'sabes fazer melhor'],
    ['É tudo', 'o que tens?']
];


disc_events.get( 'swipe').set({ direction: Hammer.DIRECTION_ALL });
disc_events.get( 'pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 20 });
sound_knob_events.get( 'pan').set({ direction: Hammer.DIRECTION_VERTICAL, threshold: 20});


var win_animation = function()
{
    disk_spinning = false;
    primary.stop();
    
    var prize = document.getElementsByClassName( "prize")[ 0];
    var prize_inner = document.getElementsByClassName( "prize")[ 1];
    var prize_icon = document.getElementsByClassName( "prize-icon")[ 0];
    var touch_icon = document.getElementsByClassName( "touch-icon")[ 0];
    
    if(prize)prize.style.display = "block";
    if(prize_icon) prize_icon.style.display = "block";
    if(touch_icon) touch_icon.style.display = "block";
    if(prize_inner) prize_inner.style.display ="block";

    
    document.getElementById($parameters.copy_container).innerHTML = "<p>Vê se é desta</p><p>que levas prémio!</p>";
    
    var container = document.getElementsByClassName( "elements-container")[ 0];
    var needle = document.getElementById( "game_screen_image_needle");
    var controls = document.getElementsByClassName( "controls-container")[ 0];
    var center = document.getElementsByClassName( "center")[ 0];
    var indicators = document.getElementsByClassName( "game-screen-fourth-row")[ 0];
    var slider_music = document.getElementsByClassName( "game-screen-first-row")[ 0];
    var header = document.getElementsByClassName( "game-header")[ 0];
    
    needle.style.transition = 
        controls.style.transition = 
            center.style.transition = "opacity 1s";

    needle.style.opacity = 
        controls.style.opacity = 
            center.style.opacity = 
                indicators.style.opacity = 
                   slider_music.style.opacity =  "0";


    prize.style.maxWidth = "200vh";
    prize.style.opacity = "1"; 
    prize.style.pointerEvents = "initial";
    
    prize_inner.style.maxWidth = "170px";
    prize_inner.style.opacity = "1"; 
    prize_inner.style.pointerEvents = "initial";
    
    /* caantunes */
    header.style.opacity = "0";
    
    prize_icon.style.opacity = touch_icon.style.opacity = "1";
    prize_icon.style.maxWidth = "100px";

    container.style.left = "50%";
};

var t = 0;

var fillIndicatorsInterval = setInterval(function(){
    t++;
    energy = Math.max(0, energy-boost);
    fillIndicators(energy, false);
    
   // if(game_ended)
   //  primary.volume -= 0.25;
}, 1000);


var degrees_ref = 0;
var ref_counter=0;
var ref_pos =0;
var game_won = false;


sound_knob.style.top = "-25%";
var ticker_on = true;

//------------------------------------------------------------------------------
var game_ticker = function()
{
    /*
    |
    | tudo o que dependa de tempo, deve ser colocado aqui
    |
    */
    if( disk_spinning)
    {
        ++disk_degrees;
        
        disc.style.transform = "rotate("+ disk_degrees +"deg)";
    }

   
    if( primary!==null && primary.position > 0 && degrees_to_seconds === 1) {
        ref_counter++;
        if(degrees_ref === 0){
            //console.error(primary.position, disk_degrees, degrees_ref);
            degrees_ref = disk_degrees;
            ref_pos = primary.position;
        }
        else if(ref_counter == 100)
            degrees_to_seconds = (primary.position -ref_pos)/ (disk_degrees-degrees_ref);
    }

    if( energy == 9)
        terminate_game();

     if( ticker_on)
        requestAnimationFrame( game_ticker);
};
//------------------------------------------------------------------------------
var activate_game = function()
{
    var game_screen = document.getElementById( "game_screen");
    game_screen.classList.add( "active");

    disk_spinning = true;
    if( !sound_init) 
    {
        init();
        sound_init = true;
        requestAnimationFrame( game_ticker);
        
    }
    else
    {
        primary.play();
        disk_spinning = true;
    }
};

var deactivate_game = function()
{
    disk_spinning = false;
    primary.stop();
    sound_init=false;
    window.stop();

};
//------------------------------------------------------------------------------
function scratch(){
    if(game_ended) return;
    
    game_started = true;
    energy = Math.min( 9, energy+boost);
    fillIndicators( energy, true);

    var props;
    if( scratch_direction == CW_ROTATION) 
    {
        props = new createjs.PlayPropsConfig().set({volume: primary.volume});
        var cw = createjs.Sound.play( 1, props);
    }
    else
    {
        props = new createjs.PlayPropsConfig().set({volume: primary.volume});
        var ccw = createjs.Sound.play( 2, props);
    }
}
function calc_rotation_degrees( event)
{ 
    
    var discBox = disc.getBoundingClientRect(),
      centerX = (discBox.left + discBox.right) / 2,
      centerY = (discBox.top + discBox.bottom) / 2,


    radians = Math.atan2(event.pageX - centerX, event.pageY - centerY);
   return -(radians * 180)/Math.PI; 

}
//------------------------------------------------------------------------------
disc_events.on("panleft panright panup pandown", function( event){

    if(game_ended) return;
    
    var disk_degrees_ref = disk_degrees;
    
    
    var r = calc_rotation_degrees( event.srcEvent);
    var newDiscPos = rotation_initial - r;
    var deltaRotation = r- rotation_initial;

    if( Math.abs( previous_angle - r) > 300 )
        turns += previous_angle-r>0?1:-1;

    //console.log( r, newDiscPos, disk_degrees);
    //console.log( newDiscPos, r);

    disk_degrees -= newDiscPos;

    if( Math.abs( previous_angle - r) < 300 && rotation_initial < r)
    {
        scratch_direction = CW_ROTATION;
    }
    else if( Math.abs( previous_angle - r) < 300 && rotation_initial > r)
    {
        scratch_direction = CCW_ROTATION;
    }
    else
    {
        scratch_direction = scratch_previous_direction;
    }


    previous_angle = r;
    rotation_initial=r;
    disc.style.transform = "rotate("+ disk_degrees +"deg)";


    deltaX_ref = event.deltaX;
    deltaY_ref = event.deltaY;
    //var rt = Math.min(2,Math.max(0.5,Math.round(Math.abs(event.velocity))-0.2));
    speed = event.velocity;

    var now = new Date().getTime();
    var delta = now-lastTime;
    distance += newDiscPos;

    totalRotation +=deltaRotation;

    if(delta < 200 || scratch_previous_direction == scratch_direction || Math.abs( event.velocity) < 0.1) {
        return;
    }

    scratch_previous_direction = scratch_direction;
    lastTime = now;
    requestAnimationFrame( scratch);

    //console.log( "Antes: ",primary.position, scratch_direction,"d", distance);
    applyDiscRotation( totalRotation, scratch_direction);
    //console.log( "Depois: ", primary.position, scratch_direction);


    $actions.DeviceFeedbackHaptic(20);
});

//------------------------------------------------------------------------------
var distance_knob = 9;

sound_knob_events.on("pan", function( event){
    var top = +sound_knob.style.top.split("%")[ 0];
    

    if(event.direction == 8 && top > -25)
    {
        if (top - distance_knob * (-event.velocityY) > -25){
            top -= distance_knob * (-event.velocityY);
        }
        else{
            top = -25;
        }
    }
    if(event.direction == 16 && top < 25)
    {
        
        if (top + distance_knob * event.velocityY < 25){
            top += distance_knob * event.velocityY;
        }
        else{
            top = 25;
        }
    }
    setVolume( 1-((top + 25)/50));
    sound_knob.style.top = top + "%";
});

sound_knob_events.on("panstart", function( event){
    $actions.Analytics_SendEventAction("Scratch volume", "Alterar");
});

//------------------------------------------------------------------------------
disc.addEventListener("touchstart", function( event){
    rotation_initial = calc_rotation_degrees( event.touches[ 0]);
    disk_spinning = false;
    primary.paused = true;
    turns = 0;
});

//------------------------------------------------------------------------------
disc.addEventListener("touchend", function( event){
    disk_spinning = true;
    scratch_previous_direction = 0;
    //console.log( "TURNS: " + turns);

    rotation_initial =calc_rotation_degrees( event.changedTouches[ 0]);
    if( totalRotation){
        applyDiscRotation( totalRotation, scratch_direction);
    }
    
    
    if(!game_ended) primary.play();
});
//------------------------------------------------------------------------------
var applyDiscRotation  = function( theta, direction)
{
    theta += 360 * turns;
    //console.error(-direction, "THETA: ", theta, theta * degrees_to_seconds);
    primary.position += theta * degrees_to_seconds;
    totalRotation = 0;
};
//------------------------------------------------------------------------------
var fillIndicators = function(value, hasRising)
{
    value = Math.round( value) % 10;
    
    var leds = document.querySelectorAll(".game-meter .indicator-step");

    for( var i=0; i<leds.length; i++)
        leds[ i].classList.remove( "on");

    for( i=0; i<value; i++)
    {
        leds[ i].classList.add( "on");
        leds[ i+9].classList.add( "on");
    }
    
    if( value<=4)
    {
        document.getElementById($parameters.container_svg).src = $parameters.svg_pink;
    }
    else
    {
        if( value <= 7)
        {
            document.getElementById($parameters.container_svg).src= $parameters.svg_yellow;
        }
        else
        {
            document.getElementById($parameters.container_svg).src= $parameters.svg_green;
        }
    }
    
    if(value > lastMaxValue)
        lastMaxValue = value;
    else if(value === 0)
        lastMaxValue = -1;
        
    if(lastValue_changed !== value){
        if(hasRising === true)
            checknumberGood(value);
        else if(checknumberBad(value))   
            checknumberBad(value);
    }
    
    if(hasRising === true)
        $actions.Analytics_SendEventAction("Scratch rodar disco", $parameters.DiamondTypeName);
};

var checknumberGood = function(number){
    if([3, 6].indexOf(number) >= 0){
        phrase = good_provision[Math.floor(Math.random() * good_provision.length)];
        changeCopy(phrase, number);
    }
};

var checknumberBad = function(number){
    if(number === 1 && lastMaxValue === 3)     
        changeCopy(bad_provision[0], number);
    
    if(number > 2 && lastMaxValue - number >= 4)       
        changeCopy(bad_provision[1], number);
    
    if(number === 6 && lastMaxValue === 8){        
        changeCopy(bad_provision[2], number);
        lastMaxValue=number;
    }
};

var changeCopy = function(phrase, value){
    lastvalue_changed = value;
    document.getElementById($parameters.copy_container).innerHTML = "<p>" + phrase[0] + "</p><p>" + phrase[1] + "</p>";
    
    $actions.Analytics_SendEventAction("Scratch mensagem", phrase[0] + " " + phrase[1]);
};

//------------------------------------------------------------------------------

var setVolume = function( volume)
{
    primary.volume = volume;
};

var terminate_game = function()
{
    game_ended = true;
    ticker_on = false;
    stopSounds();
    win_animation();

};

onDeviceReady();

function onDeviceReady() {
    // device APIs are available
    document.addEventListener("pause", onPause, false);
    activate_game();
    
    var close_screen = document.getElementById($parameters.close_screenId);
    close_screen.onclick = closeScreen;
}

function onPause() {
    deactivate_game();
}

function onResume() {
    //activate_game();
}


function stopSounds(){
    primary.stop();
    clearInterval(fillIndicatorsInterval);
    deactivate_game();
}

function closeScreen(){
    
    if(afterCloseFirstTime === false){
        document.removeEventListener("pause", onPause);
        afterCloseFirstTime=true;
        $actions.CloseOnClick();
        stopSounds();
    }
}
};
});
define("WTF_MOB.ScratchFlow.ScratchTable.mvc$controller.OnDestroy.JavaScript1JS", [], function () {
return function ($actions, $roles, $public) {
createjs.Sound.stop();
};
});

