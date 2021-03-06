﻿define("WTF_MOB.UserFlow.UserAddresses_TEST.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MBP.controller", "WTF_MOB.controller", "WTF_MBP.model", "WTF_MOB.Common.Layout_Lvl3.mvc$model", "WTF_MOB.Common.HeaderLvl3.mvc$model", "WTF_MOB.Common.Waiting.mvc$model", "WTF_MOB.model$App_UserWtfAddressList", "WTF_MBP.controller$UserWtfAdress_GetInInterval", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$UserWtfAddress_GetAll", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$UserWtfAddress_Delete", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MBPController, WTF_MOBController, WTF_MBPModel, WTF_MOB_Common_Layout_Lvl3_mvcModel, WTF_MOB_Common_HeaderLvl3_mvcModel, WTF_MOB_Common_Waiting_mvcModel) {
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
this.attr("App_UserWtfAddressList", "app_UserWtfAddressListVar", "App_UserWtfAddressList", true, OS.Types.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.App_UserWtfAddressList());
}, WTF_MOBModel.App_UserWtfAddressList), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("AnalyticsAuxVar", "analyticsAuxVarVar", "AnalyticsAuxVar", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MOBModel.AnalyticsAuxVarRec());
}, WTF_MOBModel.AnalyticsAuxVarRec), 
this.attr("MaxRecords", "maxRecordsVar", "MaxRecords", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("IsFetchingData", "isFetchingDataVar", "IsFetchingData", true, OS.Types.Boolean, function () {
return false;
}), 
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
Model._hasValidationWidgetsValue = ((WTF_MOB_Common_Layout_Lvl3_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl3_mvcModel.hasValidationWidgets) || WTF_MOB_Common_Waiting_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("WTF_MOB.UserFlow.UserAddresses_TEST.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "react", "OutSystemsReactView", "WTF_MOB.UserFlow.UserAddresses_TEST.mvc$model", "WTF_MOB.UserFlow.UserAddresses_TEST.mvc$controller", "WTF_MOB.Common.Layout_Lvl3.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl3.mvc$view", "WTF_MOB.Common.Waiting.mvc$view", "WTF_MOB.model$App_UserWtfAddressList", "WTF_MBP.controller$UserWtfAdress_GetInInterval", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$UserWtfAddress_GetAll", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$UserWtfAddress_Delete", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, React, OSView, WTF_MOB_UserFlow_UserAddresses_TEST_mvc_model, WTF_MOB_UserFlow_UserAddresses_TEST_mvc_controller, WTF_MOB_Common_Layout_Lvl3_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view) {
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
        View.displayName = "UserFlow.UserAddresses_TEST";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.UserFlow.UserAddresses_TEST.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl3_mvc_view, WTF_MOB_Common_HeaderLvl3_mvc_view, WTF_MOB_Common_Waiting_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_UserFlow_UserAddresses_TEST_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_UserFlow_UserAddresses_TEST_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties(), React.createElement(WTF_MOB_Common_Layout_Lvl3_mvc_view, {
inputs: {
ScreenName: "UserAddresses",
withoutLogin: false,
PageSection: "Perfil",
PageTitle: "Moradas de envio",
ContentClass: "-mainGradient  pv-16",
PageType: "Operação"
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
return [React.createElement(WTF_MOB_Common_HeaderLvl3_mvc_view, {
inputs: {
Title: "Moradas de envio"
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
content: new PlaceholderContent(function () {
return [$if(model.variables.isLoadingVar, false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "5aLubmxCl0ebtQ+CJY68BQ"
},
visible: true,
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
className: "ma-16"
},
tag: "p",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "kgJxIBUF5UqcanoqW6L9tg"
},
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "1w7aw3mYiUSWjSgGohwJ4A"
},
style: "a-flexCardHighlightContent c-yellow",
value: "Moradas guardadas para envio de prémios",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(model.variables.app_UserWtfAddressListVar.isEmpty, false, this, function () {
return [React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
style: "c-white pa-16",
value: "Ainda não guardaste nenhuma morada.",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.List, {
animateItems: true,
extendedProperties: {
"data-style-key": "X5cTNYUDD0SfzAyB5Y451w"
},
gridProperties: {
classes: "OSFillParent"
},
mode: /*Default*/ 0,
onScrollEnding: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.onScrollEnding$Action(controller.callContext(eventHandlerContext));
});
;
},
source: model.variables.app_UserWtfAddressListVar,
style: "list list-group",
tag: "div",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new IteratorPlaceholderContent(function (idService, callContext) {
return [React.createElement(OSWidgets.ListItem, {
extendedProperties: {
"data-style-key": "so2JlXLdP0K_Fs+zD5G69Q"
},
style: "list-item",
triggerActionOnFullSwipeLeft: false,
triggerActionOnFullSwipeRight: false,
_idProps: {
service: idService,
name: "ListItem1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
leftActions: PlaceholderContent.Empty,
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "P7b_z02z+0CncqVLFEpH9A"
},
style: "b-white pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "rDUb7cRcWEOppPStqDJpnA"
},
gridProperties: {
classes: "ThemeGrid_Width8"
},
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "QLxdwdxvpk+L17MKUoIdDw"
},
style: "-ellipsis a-flexCardHighlightContent",
value: model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameOfAddressAttr,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "qggHUiOKGkCQgw3XnBjutA"
},
gridProperties: {
classes: "ThemeGrid_Width4 ThemeGrid_MarginGutter"
},
style: "c-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.fillAddressEdit$Action(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).userWtfAddressIdAttr, controller.callContext(eventHandlerContext));
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Icon, {
extendedProperties: {
"data-style-key": "155_dE01_0651hqpRY0okQ"
},
gridProperties: {
marginLeft: "0"
},
icon: "pencil",
iconSize: /*Twotimes*/ 1,
style: "icon c-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "BUFlPQdQxE2oqxuXoK1yag"
},
gridProperties: {
classes: "ThemeGrid_Width12 ThemeGrid_MarginGutter"
},
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameAttr,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressStreetAttr,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: ((((model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeLeftSideAttr + "-") + model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeRightSideAttr) + " ") + model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressPostalCityAttr),
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
gridProperties: {
classes: "OSFillParent"
},
value: OS.BuiltinFunctions.longIntegerToText(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).msisdnAttr),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "C4GR2NQvBkiDQQERzqRO3g"
},
gridProperties: {
marginTop: "20px"
},
visible: true,
_idProps: {
service: idService,
name: "UnderlinedLink"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
tag: "span",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "9FyT_s1LtEWAwP5vE4bbqg"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.delete$Action(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).userWtfAddressIdAttr, controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "remover",
_idProps: {
service: idService,
name: "Link"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}),
rightActions: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).msisdnAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressPostalCityAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeRightSideAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).postalCodeLeftSideAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).addressStreetAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameAttr), asPrimitiveValue(model.variables.app_UserWtfAddressListVar.getCurrent(callContext.iterationContext).nameOfAddressAttr)]
})];
}, callContext, idService, "1")
},
_dependencies: []
}), $if(model.variables.isFetchingDataVar, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "c0rxqubQAkmp6mH7dHzI1A"
},
style: "align-center",
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "25",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
})];
}), React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
"data-style-key": "H2eQY+2710eK2MQY1QvHHw"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter",
marginTop: "20px"
},
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.fillAddressEdit$Action(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()), controller.callContext(eventHandlerContext));
});
;
},
style: "a-link -purple c-warmPurple my-32",
visible: true,
_idProps: {
service: idService,
uuid: "26"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "Adicionar nova morada",
_idProps: {
service: idService,
name: "Link2"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
}), React.createElement(WTF_MOB_Common_Waiting_mvc_view, {
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
uuid: "28",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isFetchingDataVar), asPrimitiveValue(model.variables.app_UserWtfAddressListVar), asPrimitiveValue(model.variables.isLoadingVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.UserFlow.UserAddresses_TEST.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "WTF_MOB.languageResources", "WTF_MOB.UserFlow.controller", "WTF_MOB.model$App_UserWtfAddressList", "WTF_MBP.controller$UserWtfAdress_GetInInterval", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$UserWtfAddress_GetAll", "WTF_MOB.model$Local_ACCESS_TOKEN_INFORecordList", "WTF_MBP.model$Local_ACCESS_TOKEN_INFORec", "WTF_MBP.entities", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MBP.controller$UserWtfAddress_Delete", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList", "WTF_MBP.model$Local_USER_WTFRec"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, WTF_MOBLanguageResources, WTF_MOB_UserFlowController) {
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
return controller._afterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTFS$AggrRefresh"];
// Client Actions
Controller.prototype._onScrollEnding$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnScrollEnding");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.UserFlow.UserAddresses_TEST.OnScrollEnding$vars"))());
var userWtfAdress_GetInIntervalVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// IsFetchingData = True
model.variables.isFetchingDataVar = true;
return OS.Flow.executeSequence(function () {
if(((model.variables.app_UserWtfAddressListVar.length === model.variables.maxRecordsVar))) {
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
} else {
// Execute Action: UserWtfAdress_GetInInterval
model.flush();
return WTF_MBPController.default.userWtfAdress_GetInInterval$Action((model.variables.app_UserWtfAddressListVar.length + 1), ((model.variables.app_UserWtfAddressListVar.length + 1) + vars.value.incrementRecordsVar), callContext).then(function (value) {
userWtfAdress_GetInIntervalVar.value = value;
}).then(function () {
// Execute Action: ListAppendAll
OS.SystemActions.listAppendAll(model.variables.app_UserWtfAddressListVar, userWtfAdress_GetInIntervalVar.value.app_UserWtfAddressListOut, callContext);
// IsFetchingData = False
model.variables.isFetchingDataVar = false;
});
}

});
});
};
Controller.registerVariableGroupType("WTF_MOB.UserFlow.UserAddresses_TEST.OnScrollEnding$vars", [{
name: "IncrementRecords",
attrName: "incrementRecordsVar",
mandatory: false,
dataType: OS.Types.Integer,
defaultValue: function () {
return 10;
}
}]);
Controller.prototype._fillAddressEdit$Action = function (userWtfAddressIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("FillAddressEdit");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.UserFlow.UserAddresses_TEST.FillAddressEdit$vars"))());
vars.value.userWtfAddressIdInLocal = userWtfAddressIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Moradas de envio", ((vars.value.userWtfAddressIdInLocal.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier()))) ? ("Adicionar") : ("Editar")), 0, "", callContext).then(function () {
// Destination: /WTF_MOB/UserFillAddress
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserFillAddress", {
UserWtfAddressId: vars.value.userWtfAddressIdInLocal
}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.SlideFromBottom), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("UserAddresses_TEST.FillAddressEdit", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.UserFlow.UserAddresses_TEST.FillAddressEdit$vars", [{
name: "UserWtfAddressId",
attrName: "userWtfAddressIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);
Controller.prototype._afterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("AfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var userWtfAddress_GetAllVar = new OS.DataTypes.VariableHolder();
var getLocalACCESSTOKENINFOESVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getAggregateOutputType(WTF_MOBModel.Local_ACCESS_TOKEN_INFORecordList))());
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Moradas de envio"
model.variables.analyticsAuxVarVar.traceNameAttr = "Moradas de envio";
// AnalyticsAuxVar.Category = "Perfil"
model.variables.analyticsAuxVarVar.categoryAttr = "Perfil";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
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
// IsLoading = True
model.variables.isLoadingVar = true;
// Execute Action: UserWtfAddress_GetAll
model.flush();
return WTF_MBPController.default.userWtfAddress_GetAll$Action(OS.BuiltinFunctions.longIntegerToInteger(model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.idAttr), getLocalACCESSTOKENINFOESVar.value.listOut.getCurrent(callContext.iterationContext).local_ACCESS_TOKEN_INFOAttr.refresh_tokenAttr, callContext).then(function (value) {
userWtfAddress_GetAllVar.value = value;
});
}).then(function () {
return OS.Flow.executeSequence(function () {
if((userWtfAddress_GetAllVar.value.successOut)) {
// App_UserWtfAddressList = UserWtfAddress_GetAll.App_UserWtfAddressList
model.variables.app_UserWtfAddressListVar = userWtfAddress_GetAllVar.value.app_UserWtfAddressListOut;
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace4
return controller._stopTrace$Action(callContext);
} else {
// IsLoading = False
model.variables.isLoadingVar = false;
// Execute Action: StopTrace3
return controller._stopTrace$Action(callContext);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("UserAddresses_TEST.AfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// IsLoading = False
model.variables.isLoadingVar = false;
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
Controller.prototype._delete$Action = function (app_UserWtfAddressIdIn, callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("Delete");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("WTF_MOB.UserFlow.UserAddresses_TEST.Delete$vars"))());
vars.value.app_UserWtfAddressIdInLocal = app_UserWtfAddressIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var userWtfAddress_DeleteVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Moradas de envio", "Remover", 0, "", callContext).then(function () {
// Execute Action: UserWtfAddress_Delete
model.flush();
return WTF_MBPController.default.userWtfAddress_Delete$Action(vars.value.app_UserWtfAddressIdInLocal, callContext).then(function (value) {
userWtfAddress_DeleteVar.value = value;
});
}).then(function () {
// Destination: /WTF_MOB/UserAddresses_TEST
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/UserAddresses_TEST", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.None), callContext, true));
});
}).catch(function (ex) {
OS.Logger.trace("UserAddresses_TEST.Delete", OS.Exceptions.getMessage(ex), ex.name);
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
Controller.registerVariableGroupType("WTF_MOB.UserFlow.UserAddresses_TEST.Delete$vars", [{
name: "App_UserWtfAddressId",
attrName: "app_UserWtfAddressIdInLocal",
mandatory: true,
dataType: OS.Types.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}]);

Controller.prototype.onScrollEnding$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onScrollEnding$Action, callContext);

};
Controller.prototype.fillAddressEdit$Action = function (userWtfAddressIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._fillAddressEdit$Action, callContext, userWtfAddressIdIn);

};
Controller.prototype.afterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._afterFetch$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.delete$Action = function (app_UserWtfAddressIdIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._delete$Action, callContext, app_UserWtfAddressIdIn);

};

// Event Handler Actions
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return WTF_MOB_UserFlowController.default.handleError(ex, this.callContext());
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

