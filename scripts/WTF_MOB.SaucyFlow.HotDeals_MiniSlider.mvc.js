define("WTF_MOB.SaucyFlow.HotDeals_MiniSlider.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.model", "CountdownMobile.Countdown.CountdownUntilDate.mvc$model", "WTF_MBP.model$App_HotDealsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_HotDealsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MBPModel, CountdownMobile_Countdown_CountdownUntilDate_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("messageForEmpty", "messageForEmptyIn", "messageForEmpty", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_messageForEmptyInDataFetchStatus", "_messageForEmptyInDataFetchStatus", "_messageForEmptyInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("hotdeals_list", "hotdeals_listIn", "hotdeals_list", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_HotDealsMBPList());
}, WTF_MOBModel.App_HotDealsMBPList), 
this.attr("_hotdeals_listInDataFetchStatus", "_hotdeals_listInDataFetchStatus", "_hotdeals_listInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = CountdownMobile_Countdown_CountdownUntilDate_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("messageForEmpty" in inputs) {
this.variables.messageForEmptyIn = inputs.messageForEmpty;
if("_messageForEmptyInDataFetchStatus" in inputs) {
this.variables._messageForEmptyInDataFetchStatus = inputs._messageForEmptyInDataFetchStatus;
}

}

if("hotdeals_list" in inputs) {
this.variables.hotdeals_listIn = inputs.hotdeals_list;
if("_hotdeals_listInDataFetchStatus" in inputs) {
this.variables._hotdeals_listInDataFetchStatus = inputs._hotdeals_listInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.HotDeals_MiniSlider.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.HotDeals_MiniSlider.mvc$model", "WTF_MOB.SaucyFlow.HotDeals_MiniSlider.mvc$controller", "OutSystemsReactWidgets", "CountdownMobile.Countdown.CountdownUntilDate.mvc$view", "WTF_MBP.model$App_HotDealsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_HotDealsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, React, OSView, WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_model, WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_controller, OSWidgets, CountdownMobile_Countdown_CountdownUntilDate_mvc_view) {
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
        View.displayName = "SaucyFlow.HotDeals_MiniSlider";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.SaucyFlow.HotDeals_MiniSlider.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [CountdownMobile_Countdown_CountdownUntilDate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_HotDeals_MiniSlider_mvc_controller;
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
style: " pt-16",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "a-textRead c-white -uppercase  -fowardSlash -ellipsis ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: " -bold",
value: "Hot Deals",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if(model.variables.hotdeals_listIn.isEmpty, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pv-32 ph-16",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width4"
},
style: "saucy_img",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.saucy_hotdeals_bola_purple.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "ThemeGrid_Width8 ThemeGrid_MarginGutter"
},
style: "saucy_text",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "c-warmPurple -bold",
value: model.variables.messageForEmptyIn,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._messageForEmptyInDataFetchStatus)
})))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: " pl-16 hotdeals wtf-app-slider",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.List, {
animateItems: false,
extendedProperties: {
"data-style-key": "NvM1YEEB_UmOe4AXbynGCA"
},
mode: /*Custom*/ 1,
source: model.variables.hotdeals_listIn,
style: "item-container",
tag: "div",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
source_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.Link, {
enabled: !(((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr === 0) && (model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasStockAttr === true))),
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.openDetail$Action(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext), "Hot Deals", model.variables.hotdeals_listIn.getCurrentRowNumber(callContext.iterationContext), controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
_dependencies: [asPrimitiveValue(model.variables._hotdeals_listInDataFetchStatus), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).messageAlertStockAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasMessageAlertStockAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).numberAlertStockAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).priceHotDealAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasStockAttr), asPrimitiveValue(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr)]
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
gridProperties: {
classes: "OSInline"
},
style: model.getCachedValue(idService.getId("Itemprize.Style"), function () {
return ("item " + ((((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr === 0) && model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasStockAttr)) ? (" inactive") : ("")));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr;
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasStockAttr;
}),
visible: true,
_idProps: {
service: idService,
name: "Itemprize"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "item-content pa-16 pt-24",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime()), false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "soonRectangle",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "IqATq8V7ok6pwXK8DOZ9Zg"
},
value: "Brevemente",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "text-center title-hotdeal",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("JMuw_0eQOkWQDXBkbsfxYg.Style"), function () {
return ("alignV" + (((OS.BuiltinFunctions.length(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).nameAttr) > 25)) ? (" scaledown") : ("")));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).nameAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "c-warmPurple",
value: model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("93O_pgcaGUeCZfAzSmklaA.Style"), function () {
return ("bottom-container" + ((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr.gt(OS.BuiltinFunctions.currDateTime())) ? (" soon") : ("")));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
}, $if(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime()), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "price-hotdeal",
value: model.getCachedValue(idService.getId("bH+QJGAaqkqMzcYXhfIEjg.Value"), function () {
return ("€" + OS.BuiltinFunctions.formatDecimal(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).priceHotDealAttr, 2, ",", "."));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).priceHotDealAttr;
}),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
})];
}, function () {
return [];
})), $if((((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime()) && (model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasStockAttr === true)) && (model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr <= model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).numberAlertStockAttr)) && (model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr > 0)), false, this, function () {
return [$if(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasMessageAlertStockAttr, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock message c-white",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).messageAlertStockAttr,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock c-white",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.saucy_hotdeals_mini.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("FS3f2YLD8U+jDY5B4zDaAA.Value"), function () {
return ((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr).toString() + (((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr > 1)) ? (" restantes!") : (" restante!")));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr;
}),
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
}))];
})];
}, function () {
return [$if(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr.gt(OS.BuiltinFunctions.currDateTime()), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock message c-white",
visible: true,
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Começa em",
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("UjMfcvGKf0eu5BHFS4vd4A.Style"), function () {
return ("button-hotdeal" + ((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime())) ? (" b-strongPink") : (" b-green")));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
}, $if(model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime()), false, this, function () {
return [$if(((model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).stockAttr === 0) && model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).hasStockAttr), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
value: "Esgotado",
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "PDly9gIwKUGZ3t+EDKDQ5w"
},
visible: true,
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Left*/ 1,
animate: false,
extendedProperties: {
"data-style-key": "7mwiokryeU+SRD8O7vnROw"
},
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(CountdownMobile_Countdown_CountdownUntilDate_mvc_view, {
inputs: {
UseDays: model.getCachedValue(idService.getId("ttkPl2wTME6oWD15ZfCttQ.UseDays"), function () {
return (OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr) >= 1);
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr;
}),
_useDaysInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
TimeSeparator: model.getCachedValue(idService.getId("ttkPl2wTME6oWD15ZfCttQ.TimeSeparator"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr) >= 1)) ? ("d") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr) < 60)) ? ("m") : ("h"))));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr;
}),
_timeSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
UntilDate: model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr,
_untilDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
UseSeconds: model.getCachedValue(idService.getId("ttkPl2wTME6oWD15ZfCttQ.UseSeconds"), function () {
return (OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr) < 60);
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr;
}),
_useSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
countdownFinished$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.countdownUntilDateCountdownFinished$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "31",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "7xIGZcU5NkmGPGkvWy1VqA"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("7xIGZcU5NkmGPGkvWy1VqA.Value"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr) >= 1)) ? ("h") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr) < 60)) ? ("s") : ("m"))));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).expirationDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
})))];
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "c9gn3qN6oUS0_OqHQZ5ryw"
},
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Left*/ 1,
animate: false,
extendedProperties: {
"data-style-key": "p2+eVReWhkmZYl+aTPSuXg"
},
visible: true,
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(CountdownMobile_Countdown_CountdownUntilDate_mvc_view, {
inputs: {
UntilDate: model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr,
_untilDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
UseSeconds: model.getCachedValue(idService.getId("u0Cq_H_qBkea68BkT1v63Q.UseSeconds"), function () {
return (OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr) < 60);
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr;
}),
_useSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
TimeSeparator: model.getCachedValue(idService.getId("u0Cq_H_qBkea68BkT1v63Q.TimeSeparator"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr) >= 1)) ? ("d") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr) < 60)) ? ("m") : ("h"))));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr;
}),
_timeSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus),
UseDays: model.getCachedValue(idService.getId("u0Cq_H_qBkea68BkT1v63Q.UseDays"), function () {
return (OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr) >= 1);
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr;
}),
_useDaysInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
countdownFinished$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.countdownUntilDateCountdownFinished$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "35",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "FBFGu1TTU0C4A76xLAts0A"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("FBFGu1TTU0C4A76xLAts0A.Value"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr) >= 1)) ? ("h") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr) < 60)) ? ("s") : ("m"))));
}, function () {
return model.variables.hotdeals_listIn.getCurrent(callContext.iterationContext).startDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hotdeals_listInDataFetchStatus)
})))];
}))))];
}, callContext, idService, "1")
},
_dependencies: [asPrimitiveValue(model.variables._hotdeals_listInDataFetchStatus)]
}))];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.SaucyFlow.HotDeals_MiniSlider.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MBP.model$App_HotDealsMBPRec", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.model$App_HotDealsMBPList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._openDetail$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OpenDetail");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.HotDeals_MiniSlider.OpenDetail$vars"))());
vars.value.detailToOpenInLocal = detailToOpenIn.clone();
vars.value.categoryInLocal = categoryIn;
vars.value.currentRowNumberInLocal = currentRowNumberIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: EventOpenDetail
return controller.eventOpenDetail$Action(vars.value.categoryInLocal, vars.value.detailToOpenInLocal, vars.value.currentRowNumberInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.HotDeals_MiniSlider.OpenDetail$vars", [{
name: "detailToOpen",
attrName: "detailToOpenInLocal",
mandatory: true,
dataType: OS.Types.Record,
defaultValue: function () {
return new WTF_MBPModel.App_HotDealsMBPRec();
},
complexType: WTF_MBPModel.App_HotDealsMBPRec
}, {
name: "category",
attrName: "categoryInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "CurrentRowNumber",
attrName: "currentRowNumberInLocal",
mandatory: true,
dataType: OS.Types.Integer,
defaultValue: function () {
return 0;
}
}]);
Controller.prototype._countdownUntilDateCountdownFinished$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CountdownUntilDateCountdownFinished");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: EventCountdownUntilDateCountdownFinished
return controller.eventCountdownUntilDateCountdownFinished$Action(callContext);
});
};

Controller.prototype.openDetail$Action = function (detailToOpenIn, categoryIn, currentRowNumberIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._openDetail$Action, callContext, detailToOpenIn, categoryIn, currentRowNumberIn);

};
Controller.prototype.countdownUntilDateCountdownFinished$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._countdownUntilDateCountdownFinished$Action, callContext);

};
Controller.prototype.eventCountdownUntilDateCountdownFinished$Action = function () {
return Promise.resolve();
};
Controller.prototype.eventOpenDetail$Action = function () {
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
return WTF_MOBController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, WTF_MOBLanguageResources);
});

