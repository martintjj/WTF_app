define("WTF_MOB.UserFlow.TourContent.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_BP.model", "MobilePatterns.Interaction.Animate.mvc$model", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$model", "MobilePatterns.Utilities.SwipeEvents.mvc$model", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.model$Local_PICTURERec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$STR_TOUR_CONTENT_HTMLList", "WTF_BP.model$STR_TOUR_CONTENT_HTMLRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_PictureRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, WTF_BPModel, MobilePatterns_Interaction_Animate_mvcModel, MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel, MobilePatterns_Utilities_SwipeEvents_mvcModel) {
var OS = OutSystems.Internal;

var GetHtmlContentDataActRec = (function (_super) {
__extends(GetHtmlContentDataActRec, _super);
function GetHtmlContentDataActRec(defaults) {
_super.apply(this, arguments);
}
GetHtmlContentDataActRec.attributesToDeclare = function () {
return [
this.attr("HTML", "hTMLOut", "HTML", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.STR_TOUR_CONTENT_HTMLList());
}, WTF_MOBModel.STR_TOUR_CONTENT_HTMLList)
].concat(_super.attributesToDeclare.call(this));
};
GetHtmlContentDataActRec.fromStructure = function (str) {
return new GetHtmlContentDataActRec(new GetHtmlContentDataActRec.RecordClass({
hTMLOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetHtmlContentDataActRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetHtmlContentDataActRec.init();
return GetHtmlContentDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("StepIndex", "stepIndexVar", "StepIndex", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Aux", "auxVar", "Aux", true, OS.Types.Boolean, function () {
return true;
}), 
this.attr("AnimationInUse", "animationInUseVar", "AnimationInUse", true, OS.Types.Text, function () {
return WTF_MOBModel.staticEntities.animationType.rightToLeft;
}), 
this.attr("AnimationSpeedInUse", "animationSpeedInUseVar", "AnimationSpeedInUse", true, OS.Types.Text, function () {
return "";
}), 
this.attr("IsNavigatingAway", "isNavigatingAwayVar", "IsNavigatingAway", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("HTML_Content", "hTML_ContentVar", "HTML_Content", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.STR_TOUR_CONTENT_HTMLList());
}, WTF_MOBModel.STR_TOUR_CONTENT_HTMLList), 
this.attr("HTML_ContentElement", "hTML_ContentElementVar", "HTML_ContentElement", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.STR_TOUR_CONTENT_HTMLRec());
}, WTF_BPModel.STR_TOUR_CONTENT_HTMLRec), 
this.attr("AnimationNotInUse", "animationNotInUseVar", "AnimationNotInUse", true, OS.Types.Text, function () {
return "";
}), 
this.attr("HTML_ContentElementEmpty", "hTML_ContentElementEmptyVar", "HTML_ContentElementEmpty", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_BPModel.STR_TOUR_CONTENT_HTMLRec());
}, WTF_BPModel.STR_TOUR_CONTENT_HTMLRec), 
this.attr("TourContentTypeId", "tourContentTypeIdIn", "TourContentTypeId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_tourContentTypeIdInDataFetchStatus", "_tourContentTypeIdInDataFetchStatus", "_tourContentTypeIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("FromRegister", "fromRegisterIn", "FromRegister", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_fromRegisterInDataFetchStatus", "_fromRegisterInDataFetchStatus", "_fromRegisterInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("DemoAppWithoutLogin", "demoAppWithoutLoginIn", "DemoAppWithoutLogin", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("_demoAppWithoutLoginInDataFetchStatus", "_demoAppWithoutLoginInDataFetchStatus", "_demoAppWithoutLoginInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetHtmlContent", "getHtmlContentDataAct", "getHtmlContentDataAct", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetHtmlContentDataActRec());
}, GetHtmlContentDataActRec)
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
Model._hasValidationWidgetsValue = ((MobilePatterns_Interaction_Animate_mvcModel.hasValidationWidgets || MobileUIWidgets_WidgetsContent_ButtonRipple_mvcModel.hasValidationWidgets) || MobilePatterns_Utilities_SwipeEvents_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("TourContentTypeId" in inputs) {
this.variables.tourContentTypeIdIn = inputs.TourContentTypeId;
if("_tourContentTypeIdInDataFetchStatus" in inputs) {
this.variables._tourContentTypeIdInDataFetchStatus = inputs._tourContentTypeIdInDataFetchStatus;
}

}

if("FromRegister" in inputs) {
this.variables.fromRegisterIn = inputs.FromRegister;
if("_fromRegisterInDataFetchStatus" in inputs) {
this.variables._fromRegisterInDataFetchStatus = inputs._fromRegisterInDataFetchStatus;
}

}

if("DemoAppWithoutLogin" in inputs) {
this.variables.demoAppWithoutLoginIn = inputs.DemoAppWithoutLogin;
if("_demoAppWithoutLoginInDataFetchStatus" in inputs) {
this.variables._demoAppWithoutLoginInDataFetchStatus = inputs._demoAppWithoutLoginInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.UserFlow.TourContent.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_BP.model", "react", "OutSystemsReactView", "WTF_MOB.UserFlow.TourContent.mvc$model", "WTF_MOB.UserFlow.TourContent.mvc$controller", "OutSystemsReactWidgets", "MobilePatterns.Interaction.Animate.mvc$view", "MobileUIWidgets.WidgetsContent.ButtonRipple.mvc$view", "MobilePatterns.Utilities.SwipeEvents.mvc$view", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.model$Local_PICTURERec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$STR_TOUR_CONTENT_HTMLList", "WTF_BP.model$STR_TOUR_CONTENT_HTMLRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_PictureRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, WTF_BPModel, React, OSView, WTF_MOB_UserFlow_TourContent_mvc_model, WTF_MOB_UserFlow_TourContent_mvc_controller, OSWidgets, MobilePatterns_Interaction_Animate_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, MobilePatterns_Utilities_SwipeEvents_mvc_view) {
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
        View.displayName = "UserFlow.TourContent";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.UserFlow.TourContent.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobilePatterns_Interaction_Animate_mvc_view, MobileUIWidgets_WidgetsContent_ButtonRipple_mvc_view, MobilePatterns_Utilities_SwipeEvents_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_UserFlow_TourContent_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_UserFlow_TourContent_mvc_controller;
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
style: "onBoarding",
visible: true,
_idProps: {
service: idService,
name: "onBoarding"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-onBoardingContent",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("u+xV96ls8k6rRMEkjC2NBQ.style"), function () {
return ((!(model.variables.auxVar)) ? ("height:0px;") : (""));
}, function () {
return model.variables.auxVar;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobilePatterns_Interaction_Animate_mvc_view, {
inputs: {
Speed: model.variables.animationSpeedInUseVar,
AnimationType: model.getCachedValue(idService.getId("fjgSb7uZF0CHIZCPsCnxqA.AnimationType"), function () {
return ((model.variables.auxVar) ? (model.variables.animationInUseVar) : (model.variables.animationNotInUseVar));
}, function () {
return model.variables.auxVar;
}, function () {
return model.variables.animationInUseVar;
}, function () {
return model.variables.animationNotInUseVar;
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
uuid: "3",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Container_HtmlContent"
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-onBoardingImage -movies",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
imageContent: model.variables.hTML_ContentElementVar.app_pictureAttr.contentAttr,
style: "img-tutorial",
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-onBoardingContent",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "h1"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.hTML_ContentElementVar.labelAttr,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mt-24 ph-32 d-block c-warmPurple -bold"
},
tag: "p",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.hTML_ContentElementVar.descriptionAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.hTML_ContentElementVar.descriptionAttr), asPrimitiveValue(model.variables.hTML_ContentElementVar.labelAttr), asPrimitiveValue(model.variables.hTML_ContentElementVar.app_pictureAttr.contentAttr)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
style: model.getCachedValue(idService.getId("_vWGhb3gR0WMJmsJMzWvGA.style"), function () {
return ((model.variables.auxVar) ? ("height:0px;") : (""));
}, function () {
return model.variables.auxVar;
})
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MobilePatterns_Interaction_Animate_mvc_view, {
inputs: {
AnimationType: model.getCachedValue(idService.getId("dorP8JUOW0aEFcKKo+aKyQ.AnimationType"), function () {
return ((!(model.variables.auxVar)) ? (model.variables.animationInUseVar) : (model.variables.animationNotInUseVar));
}, function () {
return model.variables.auxVar;
}, function () {
return model.variables.animationInUseVar;
}, function () {
return model.variables.animationNotInUseVar;
}),
Speed: model.variables.animationSpeedInUseVar
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
uuid: "14",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
name: "Container_HtmlContent2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-onBoardingImage -movies",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
gridProperties: {
classes: "OSFillParent"
},
imageContent: model.variables.hTML_ContentElementVar.app_pictureAttr.contentAttr,
style: "img-tutorial",
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "o-onBoardingContent",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "h1"
},
tag: "h1",
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.hTML_ContentElementVar.labelAttr,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "mt-24 ph-32 d-block c-warmPurple -bold"
},
tag: "p",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.hTML_ContentElementVar.descriptionAttr,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
})
},
_dependencies: [asPrimitiveValue(model.variables.hTML_ContentElementVar.descriptionAttr), asPrimitiveValue(model.variables.hTML_ContentElementVar.labelAttr), asPrimitiveValue(model.variables.hTML_ContentElementVar.app_pictureAttr.contentAttr)]
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("DRg+nWU_hEi6gJDQ_bvmoA.Style"), function () {
return ("m-carousel -onlyDots " + ((((model.variables.getHtmlContentDataAct.hTMLOut.length > 0) && (model.variables.stepIndexVar >= (model.variables.getHtmlContentDataAct.hTMLOut.length - 1)))) ? ("-button") : ("")));
}, function () {
return model.variables.getHtmlContentDataAct.hTMLOut.length;
}, function () {
return model.variables.stepIndexVar;
}),
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHtmlContentDataAct.dataFetchStatusAttr)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "OSBlockWidget",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "carousel",
visible: (model.variables.getHtmlContentDataAct.hTMLOut.length > 1),
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHtmlContentDataAct.dataFetchStatusAttr)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "carousel-dots-container",
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: true,
mode: /*Default*/ 0,
source: model.variables.hTML_ContentVar,
style: "ma-auto",
tag: "div",
_idProps: {
service: idService,
name: "ListDots2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
className: model.getCachedValue(idService.getId("xjz9hgDbmEe+HLQC_if6OA.class"), function () {
return ("carousel-dot" + (((model.variables.hTML_ContentVar.getCurrentRowNumber(callContext.iterationContext) === model.variables.stepIndexVar)) ? (" active") : ("")));
}, function () {
return model.variables.hTML_ContentVar.getCurrentRowNumber(callContext.iterationContext);
}, function () {
return model.variables.stepIndexVar;
})
},
style: "carousel-dot",
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables.stepIndexVar)]
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "ph-24  pb-16",
visible: ((model.variables.getHtmlContentDataAct.hTMLOut.length > 0) && (model.variables.stepIndexVar >= (model.variables.getHtmlContentDataAct.hTMLOut.length - 1))),
_idProps: {
service: idService,
name: "Button"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHtmlContentDataAct.dataFetchStatusAttr)
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
uuid: "31",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.jumpAway$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn a-btn btn-primary -primary w-90",
visible: true,
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Entrar",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "rippleJS",
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})
},
_dependencies: []
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "o-onBoardingSkip",
visible: (((model.variables.stepIndexVar < (model.variables.getHtmlContentDataAct.hTMLOut.length - 1)) && (model.variables.stepIndexVar < model.variables.getHtmlContentDataAct.hTMLOut.length)) && (model.variables.tourContentTypeIdIn === WTF_MOBModel.staticEntities.tOUR_CONTENT_TYPE_WTF.onBoarding)),
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getHtmlContentDataAct.dataFetchStatusAttr, model.variables._tourContentTypeIdInDataFetchStatus)
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.jumpAway$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "a-link mt-40",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Saltar"))), React.createElement(MobilePatterns_Utilities_SwipeEvents_mvc_view, {
inputs: {
WidgetId: idService.getId("onBoarding")
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
swipeRight$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nextPage$Action(false, controller.callContext(eventHandlerContext));
});
;
},
swipeLeft$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.nextPage$Action(true, controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "37",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.UserFlow.TourContent.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MBP.controller", "WTF_BP.model", "WTF_MOB.languageResources", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.model$Local_PICTURERec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MBP.controller$GetAndSyncLocalPictureById", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MOB.model$STR_TOUR_CONTENT_HTMLList", "WTF_BP.model$STR_TOUR_CONTENT_HTMLRec", "WTF_MOB.referencesHealth$WTF_BP", "WTF_BP.model$App_PictureRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MBPController, WTF_BPModel, WTF_MOBLanguageResources) {
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
Controller.prototype.getHtmlContent$DataActRefresh = function () {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();
return controller.callDataAction("DataActionGetHtmlContent", "screenservices/WTF_MOB/UserFlow/TourContent/DataActionGetHtmlContent", "4nAbmf8ZPSd6QmdJJ1H6oA", function (b) {
model.variables.getHtmlContentDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getHtmlContentDataAct.fromJS(json);
}, undefined).then(function () {
return controller._getHtmlContentOnAfterFetch$Action(true, true, controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getHtmlContent$DataActRefresh"];
// Client Actions
Controller.prototype._nextPage$Action = function (isForwardIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("NextPage");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.UserFlow.TourContent.NextPage$vars"))());
vars.value.isForwardInLocal = isForwardIn;
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", (((model.variables.tourContentTypeIdIn === WTF_MOBModel.staticEntities.tOUR_CONTENT_TYPE_WTF.onBoarding)) ? (("OnBoarding " + ((model.variables.getHtmlContentDataAct.hTMLOut.isEmpty) ? ("Sem Passos configurados") : (model.variables.getHtmlContentDataAct.hTMLOut.getItem(model.variables.stepIndexVar).labelAttr)))) : ("novidade_fe")), "Swipe", 0, "", callContext).then(function () {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isNavigatingAwayVar))) {
// Going back and already at zero?
return OS.Flow.executeSequence(function () {
if((!((!(vars.value.isForwardInLocal) && (model.variables.stepIndexVar === 0))))) {
// Last?
return OS.Flow.executeSequence(function () {
if(((model.variables.stepIndexVar === (model.variables.getHtmlContentDataAct.hTMLOut.length - 1)))) {
// IsForward
return OS.Flow.executeSequence(function () {
if((vars.value.isForwardInLocal)) {
// AnimationInUse = RightToLeft
model.variables.animationInUseVar = WTF_MOBModel.staticEntities.animationType.rightToLeft;
} else {
// AnimationInUse = LeftToRight
model.variables.animationInUseVar = WTF_MOBModel.staticEntities.animationType.leftToRight;
// StepIndex = StepIndex - 1
model.variables.stepIndexVar = (model.variables.stepIndexVar - 1);
// Execute Action: GetHtmlContentOnAfterFetch3
return controller._getHtmlContentOnAfterFetch$Action(vars.value.isForwardInLocal, false, callContext);
}

});
} else {
return OS.Flow.executeSequence(function () {
if((!(model.variables.isNavigatingAwayVar))) {
// StepIndex = If
model.variables.stepIndexVar = ((vars.value.isForwardInLocal) ? ((model.variables.stepIndexVar + 1)) : ((model.variables.stepIndexVar - 1)));
// Execute Action: GetHtmlContentOnAfterFetch2
return controller._getHtmlContentOnAfterFetch$Action(vars.value.isForwardInLocal, false, callContext);
}

});
}

});
}

});
}

});
});
});
};
Controller.registerVariableGroupType("WTF_MOB.UserFlow.TourContent.NextPage$vars", [{
name: "IsForward",
attrName: "isForwardInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._jumpAway$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("JumpAway");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", (((model.variables.tourContentTypeIdIn === WTF_MOBModel.staticEntities.tOUR_CONTENT_TYPE_WTF.onBoarding)) ? (("OnBoarding " + ((model.variables.getHtmlContentDataAct.hTMLOut.isEmpty) ? ("Sem Passos configurados") : (model.variables.getHtmlContentDataAct.hTMLOut.getItem(model.variables.stepIndexVar).labelAttr)))) : ("novidade_fe")), (((model.variables.tourContentTypeIdIn === WTF_MOBModel.staticEntities.tOUR_CONTENT_TYPE_WTF.onBoarding)) ? ("Fechar") : ("Avançar")), 0, "", callContext).then(function () {
if((!(model.variables.isNavigatingAwayVar))) {
// IsNavigatingAway = True
model.variables.isNavigatingAwayVar = true;
if((model.variables.demoAppWithoutLoginIn)) {
// Destination: /WTF_MOB/WTF_Home_WithoutLogin
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/WTF_Home_WithoutLogin", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Destination: /WTF_MOB/LoadingSplash
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/LoadingSplash", {
FromRegister: model.variables.fromRegisterIn
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

});
});
};
Controller.prototype._getHtmlContentOnAfterFetch$Action = function (advancingIn, firstTimeIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetHtmlContentOnAfterFetch");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.UserFlow.TourContent.GetHtmlContentOnAfterFetch$vars"))());
vars.value.advancingInLocal = advancingIn;
vars.value.firstTimeInLocal = firstTimeIn;
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAndSyncLocalPictureByIdVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// No TourContent To Show
return OS.Flow.executeSequence(function () {
if((model.variables.getHtmlContentDataAct.hTMLOut.isEmpty)) {
// Execute Action: JumpAway
return controller._jumpAway$Action(callContext);
} else {
// HTML_Content = GetHtmlContent.HTML
model.variables.hTML_ContentVar = model.variables.getHtmlContentDataAct.hTMLOut;
// Foreach HTML_Content
callContext.iterationContext.registerIterationStart(model.variables.hTML_ContentVar);
return OS.Flow.tryFinally(function () {
var hTML_ContentIterator = callContext.iterationContext.getIterator(model.variables.hTML_ContentVar);
var hTML_ContentIndex = 0;
return OS.Flow.whileAsync(function () {
return ((hTML_ContentIndex < model.variables.hTML_ContentVar.length));
}, function () {
hTML_ContentIterator.currentRowNumber = hTML_ContentIndex;
// Execute Action: GetAndSyncLocalPictureById
model.flush();
return WTF_MBPController.default.getAndSyncLocalPictureById$Action(model.variables.hTML_ContentVar.getItem(hTML_ContentIndex.valueOf()).app_pictureAttr.pictureIdAttr, callContext).then(function (value) {
getAndSyncLocalPictureByIdVar.value = value;
}).then(function () {
// HTML_Content.Current.App_picture = GetAndSyncLocalPictureById.Picture
model.variables.hTML_ContentVar.getItem(hTML_ContentIndex.valueOf()).app_pictureAttr = OS.DataTypes.JSConversions.typeConvertRecord(getAndSyncLocalPictureByIdVar.value.pictureOut, new WTF_BPModel.App_PictureRec(), function (source, target) {
target.pictureIdAttr = source.idAttr;
target.filenameAttr = source.filenameAttr;
target.contentAttr = source.contentAttr;
return target;
});
}).then(function () {
hTML_ContentIndex++;
});
});
}, function () {
callContext.iterationContext.registerIterationEnd(model.variables.hTML_ContentVar);
}).then(function () {
if((vars.value.firstTimeInLocal)) {
// HTML_ContentElement = If
model.variables.hTML_ContentElementVar = ((!(model.variables.hTML_ContentVar.isEmpty)) ? (model.variables.hTML_ContentVar.getItem(model.variables.stepIndexVar)) : (model.variables.hTML_ContentElementEmptyVar));
} else {
// Aux = notAux
model.variables.auxVar = !(model.variables.auxVar);
// AnimationInUse = If
model.variables.animationInUseVar = ((vars.value.advancingInLocal) ? (WTF_MOBModel.staticEntities.animationType.rightToLeft) : (WTF_MOBModel.staticEntities.animationType.leftToRight));
// AnimationSpeedInUse = Fast
model.variables.animationSpeedInUseVar = WTF_MOBModel.staticEntities.speed.fast;
// HTML_ContentElement = If
model.variables.hTML_ContentElementVar = ((((model.variables.stepIndexVar + 1) <= model.variables.hTML_ContentVar.length)) ? (model.variables.hTML_ContentVar.getItem(model.variables.stepIndexVar)) : (model.variables.hTML_ContentElementEmptyVar));
}

});
}

});
}).catch(function (ex) {
OS.Logger.trace("TourContent.GetHtmlContentOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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

throw ex;
});
};
Controller.registerVariableGroupType("WTF_MOB.UserFlow.TourContent.GetHtmlContentOnAfterFetch$vars", [{
name: "Advancing",
attrName: "advancingInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "FirstTime",
attrName: "firstTimeInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Refresh Query: GetHtmlContent
var result = controller.getHtmlContent$DataActRefresh();
model.flush();
return result;
}).catch(function (ex) {
OS.Logger.trace("TourContent.OnParametersChanged", OS.Exceptions.getMessage(ex), ex.name);
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

throw ex;
});
};

Controller.prototype.nextPage$Action = function (isForwardIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._nextPage$Action, callContext, isForwardIn);

};
Controller.prototype.jumpAway$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._jumpAway$Action, callContext);

};
Controller.prototype.getHtmlContentOnAfterFetch$Action = function (advancingIn, firstTimeIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getHtmlContentOnAfterFetch$Action, callContext, advancingIn, firstTimeIn);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return controller.onParametersChanged$Action(callContext);

};
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

