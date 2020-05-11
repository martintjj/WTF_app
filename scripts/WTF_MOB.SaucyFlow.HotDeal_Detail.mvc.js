define("WTF_MOB.SaucyFlow.HotDeal_Detail.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "CountdownMobile.Countdown.CountdownUntilDate.mvc$model", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$HotDeal_Buy", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.model$App_HotDealsMBPRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, CountdownMobile_Countdown_CountdownUntilDate_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("detail", "detailIn", "detail", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.App_HotDealsMBPRec());
}, WTF_MBPModel.App_HotDealsMBPRec), 
this.attr("_detailInDataFetchStatus", "_detailInDataFetchStatus", "_detailInDataFetchStatus", true, OS.Types.Integer, function () {
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
if("detail" in inputs) {
this.variables.detailIn = inputs.detail;
if("_detailInDataFetchStatus" in inputs) {
this.variables._detailInDataFetchStatus = inputs._detailInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.SaucyFlow.HotDeal_Detail.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.SaucyFlow.HotDeal_Detail.mvc$model", "WTF_MOB.SaucyFlow.HotDeal_Detail.mvc$controller", "OutSystemsReactWidgets", "CountdownMobile.Countdown.CountdownUntilDate.mvc$view", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$HotDeal_Buy", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.model$App_HotDealsMBPRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, React, OSView, WTF_MOB_SaucyFlow_HotDeal_Detail_mvc_model, WTF_MOB_SaucyFlow_HotDeal_Detail_mvc_controller, OSWidgets, CountdownMobile_Countdown_CountdownUntilDate_mvc_view) {
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
        View.displayName = "SaucyFlow.HotDeal_Detail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/WTF_MOB.SaucyFlow.HotDeal_Detail.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [CountdownMobile_Countdown_CountdownUntilDate_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_HotDeal_Detail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_SaucyFlow_HotDeal_Detail_mvc_controller;
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
style: "saucy-detail",
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("wxEkfHdOIU2W631TI7JW6g.Style"), function () {
return ("card" + (((model.variables.detailIn.hasStockAttr && (model.variables.detailIn.stockAttr === 0))) ? (" inactive") : ("")));
}, function () {
return model.variables.detailIn.hasStockAttr;
}, function () {
return model.variables.detailIn.stockAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "wtf-content text-center",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "card-header",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((((model.variables.detailIn.startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime()) && (model.variables.detailIn.hasStockAttr === true)) && (model.variables.detailIn.stockAttr <= model.variables.detailIn.numberAlertStockAttr)) && (model.variables.detailIn.stockAttr > 0)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_stock c-white",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.saucy_hotdeals_mini.svg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if(model.variables.detailIn.hasMessageAlertStockAttr, false, this, function () {
return [React.createElement(OSWidgets.Expression, {
style: "ml-8",
value: model.variables.detailIn.messageAlertStockAttr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Expression, {
style: "ml-8",
value: model.getCachedValue(idService.getId("K0e7H7NmRU2Y4rTyJDvuFQ.Value"), function () {
return ((model.variables.detailIn.stockAttr).toString() + (((model.variables.detailIn.stockAttr > 1)) ? (" restantes!") : (" restante!")));
}, function () {
return model.variables.detailIn.stockAttr;
}),
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})];
}))];
}, function () {
return [];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("NmBNNsGj10igo4DyDt705A.Style"), function () {
return ("card-content" + ((model.variables.detailIn.startDateTimeAttr.gt(OS.BuiltinFunctions.currDateTime())) ? (" soon") : ("")));
}, function () {
return model.variables.detailIn.startDateTimeAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "img-saucy",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
imageContent: model.variables.detailIn.pictureAttr.contentAttr,
type: /*Binary*/ 2,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
imageContent_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "ph-16 othercontent",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "h2 c-white -bold",
value: model.variables.detailIn.nameAttr,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "pv-8",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.detailIn.startDateTimeAttr.gt(OS.BuiltinFunctions.currDateTime()), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white mt-",
value: "Brevemente disponível",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(!(model.variables.detailIn.priceMarketAttr.equals(model.variables.detailIn.priceHotDealAttr)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white  mt-8 mb-16",
value: model.variables.detailIn.descriptionAttr,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.detailIn.priceMarketAttr.gt(OS.BuiltinFunctions.integerToDecimal(0)),
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "c-white",
value: "Preço normal: ",
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "SeBmeHF6H0ufUoflPvIH0w"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-white",
value: model.getCachedValue(idService.getId("SeBmeHF6H0ufUoflPvIH0w.Value"), function () {
return ("€" + OS.BuiltinFunctions.formatDecimal(model.variables.detailIn.priceMarketAttr, 2, ",", "."));
}, function () {
return model.variables.detailIn.priceMarketAttr;
}),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
style: "h2 c-white -bold",
value: model.getCachedValue(idService.getId("0lxmki5k8EeXtcaqsR0gNg.Value"), function () {
return ("Hot deal: €" + OS.BuiltinFunctions.formatDecimal(model.variables.detailIn.priceHotDealAttr, 2, ",", "."));
}, function () {
return model.variables.detailIn.priceHotDealAttr;
}),
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}))];
}, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white",
value: model.variables.detailIn.descriptionAttr,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})];
})];
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "footer",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.detailIn.hasStockAttr && (model.variables.detailIn.stockAttr === 0)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "label_soldout container-button b-strongPink ph-16 mt-8 mb-16 c-white pv-8",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Esgotado",
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "container-button ph-16 mt-8 mb-16",
visible: model.getCachedValue(idService.getId("PrimaryButton.Visible"), function () {
return model.variables.detailIn.startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime());
}, function () {
return model.variables.detailIn.startDateTimeAttr;
}),
_idProps: {
service: idService,
name: "PrimaryButton"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Button, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.buyOnClick$Action(controller.callContext(eventHandlerContext));
});
;
},
style: "btn btn-primary -primary -negative",
visible: true,
_idProps: {
service: idService,
name: "BuyButton"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.getCachedValue(idService.getId("ButtonTextPrimary.Value"), function () {
return ((!(model.variables.detailIn.priceMarketAttr.equals(model.variables.detailIn.priceHotDealAttr))) ? ("Comprar") : (("Comprar por €" + OS.BuiltinFunctions.formatDecimal(model.variables.detailIn.priceHotDealAttr, 2, ",", "."))));
}, function () {
return model.variables.detailIn.priceMarketAttr;
}, function () {
return model.variables.detailIn.priceHotDealAttr;
}),
_idProps: {
service: idService,
name: "ButtonTextPrimary"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})))];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "countdown-container",
visible: true,
_idProps: {
service: idService,
name: "TempoRestante"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(model.variables.detailIn.startDateTimeAttr.lte(OS.BuiltinFunctions.currDateTime()), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
style: "label",
value: "Tempo restante:",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(CountdownMobile_Countdown_CountdownUntilDate_mvc_view, {
inputs: {
UseDays: model.getCachedValue(idService.getId("59YILPw150aH6+H928dXrw.UseDays"), function () {
return (OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) >= 1);
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_useDaysInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UntilDate: model.variables.detailIn.expirationDateTimeAttr,
_untilDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
TimeSeparator: model.getCachedValue(idService.getId("59YILPw150aH6+H928dXrw.TimeSeparator"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) >= 1)) ? ("d") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) < 60)) ? ("m") : ("h"))));
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_timeSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UseSeconds: model.getCachedValue(idService.getId("59YILPw150aH6+H928dXrw.UseSeconds"), function () {
return (OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) < 60);
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_useSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
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
uuid: "30",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("M2cThOFSiUSClfAa66hASA.Value"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) >= 1)) ? ("h") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.expirationDateTimeAttr) < 60)) ? ("s") : ("m"))));
}, function () {
return model.variables.detailIn.expirationDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})];
}, function () {
return [React.createElement(OSWidgets.Expression, {
style: "label",
value: "Começa em:",
_idProps: {
service: idService,
uuid: "32"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(CountdownMobile_Countdown_CountdownUntilDate_mvc_view, {
inputs: {
UntilDate: model.variables.detailIn.startDateTimeAttr,
_untilDateInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UseDays: model.getCachedValue(idService.getId("y_dd+RpjQkSX+44jXsWuXw.UseDays"), function () {
return (OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.startDateTimeAttr) >= 1);
}, function () {
return model.variables.detailIn.startDateTimeAttr;
}),
_useDaysInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
UseSeconds: model.getCachedValue(idService.getId("y_dd+RpjQkSX+44jXsWuXw.UseSeconds"), function () {
return (OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.startDateTimeAttr) < 60);
}, function () {
return model.variables.detailIn.startDateTimeAttr;
}),
_useSecondsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus),
TimeSeparator: model.getCachedValue(idService.getId("y_dd+RpjQkSX+44jXsWuXw.TimeSeparator"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.startDateTimeAttr) >= 1)) ? ("d") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.startDateTimeAttr) < 60)) ? ("m") : ("h"))));
}, function () {
return model.variables.detailIn.startDateTimeAttr;
}),
_timeSeparatorInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
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
uuid: "33",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("zC6bGkksGkqZro07m62c6w.Value"), function () {
return (((OS.BuiltinFunctions.diffDays(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.startDateTimeAttr) >= 1)) ? ("h") : ((((OS.BuiltinFunctions.diffMinutes(OS.BuiltinFunctions.currDateTime(), model.variables.detailIn.startDateTimeAttr) < 60)) ? ("s") : ("m"))));
}, function () {
return model.variables.detailIn.startDateTimeAttr;
}),
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
visible: model.variables.detailIn.hasStockAttr,
_idProps: {
service: idService,
name: "LimitStock"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._detailInDataFetchStatus)
}, React.createElement(OSWidgets.Expression, {
style: "label-stock c-white",
value: "Limitado ao stock existente",
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}))))))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("WTF_MOB.SaucyFlow.HotDeal_Detail.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "MobileUIWidgets.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.controller$Analytics_TrackException", "WTF_MBP.controller$HotDeal_Buy", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$DisabledOrEnabledButton", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.model$App_HotDealsMBPRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, MobileUIWidgetsController, WTF_MBPModel, WTF_MOBLanguageResources) {
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
Controller.prototype._countdownUntilDateCountdownFinished$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CountdownUntilDateCountdownFinished");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: CountdownFinished
return controller.countdownFinished$Action(callContext);
}).catch(function (ex) {
OS.Logger.trace("HotDeal_Detail.CountdownUntilDateCountdownFinished", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.prototype._showLoadingBlock$Action = function (showIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShowLoadingBlock");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.SaucyFlow.HotDeal_Detail.ShowLoadingBlock$vars"))());
vars.value.showInLocal = showIn;
return OS.Flow.executeAsyncFlow(function () {
// Trigger Event: ShowLoading
return controller.showLoading$Action(vars.value.showInLocal, callContext);
});
};
Controller.registerVariableGroupType("WTF_MOB.SaucyFlow.HotDeal_Detail.ShowLoadingBlock$vars", [{
name: "Show",
attrName: "showInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._buyOnClick$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("BuyOnClick");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var hotDeal_BuyVar = new OS.DataTypes.VariableHolder();
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: DisabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("BuyButton"), false, callContext);
// Execute Action: ShowLoadingBlock
return controller._showLoadingBlock$Action(true, callContext).then(function () {
// Execute Action: HotDeal_Buy
model.flush();
return WTF_MBPController.default.hotDeal_Buy$Action(model.variables.detailIn.identifierAttr, model.variables.detailIn.priceHotDealAttr, callContext).then(function (value) {
hotDeal_BuyVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((hotDeal_BuyVar.value.successOut)) {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Saucy_HotDeals", "Comprar", 0, "", callContext).then(function () {
// Destination: /WTF_MOB/
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL(hotDeal_BuyVar.value.paymentUrlOut, {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
} else {
// Execute Action: CustomFeedbackMessage
MobileUIWidgetsController.default.customFeedbackMessage$Action(hotDeal_BuyVar.value.messageOut, 3, true, "icon-message_insuccess", true, false, 10000, "", "-large", callContext);
// Execute Action: ShowLoadingBlock2
return controller._showLoadingBlock$Action(false, callContext).then(function () {
// Execute Action: EnabledButton2
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("BuyButton"), true, callContext);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("HotDeal_Detail.BuyOnClick", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: EnabledButton
WTF_MOBController.default.disabledOrEnabledButton$Action(idService.getId("BuyButton"), true, callContext);
return OS.Flow.returnAsync();

});
});
}

throw ex;
});
};

Controller.prototype.countdownUntilDateCountdownFinished$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._countdownUntilDateCountdownFinished$Action, callContext);

};
Controller.prototype.showLoadingBlock$Action = function (showIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._showLoadingBlock$Action, callContext, showIn);

};
Controller.prototype.buyOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._buyOnClick$Action, callContext);

};
Controller.prototype.countdownFinished$Action = function () {
return Promise.resolve();
};
Controller.prototype.showLoading$Action = function () {
return Promise.resolve();
};
Controller.prototype.closeDetail$Action = function () {
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

