define("WTF_MOB.ScratchOtherPagesFlow.Amigos.mvc$model", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.Common.Layout_Lvl2.mvc$model", "WTF_MOB.Common.HeaderLvl2.mvc$model", "MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.mvc$model", "MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.mvc$model", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetInfoMGM", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_USER_WTFRec", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_ScratchShareFriends", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_ScratchCopyFriends", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOB_Common_Layout_Lvl2_mvcModel, WTF_MOB_Common_HeaderLvl2_mvcModel, MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvcModel, MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvcModel) {
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
this.attr("UserWTFActiveNow", "userWTFActiveNowVar", "UserWTFActiveNow", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new WTF_MBPModel.Local_USER_WTFRec());
}, WTF_MBPModel.Local_USER_WTFRec), 
this.attr("NumberFriendsInvited", "numberFriendsInvitedVar", "NumberFriendsInvited", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("NumberMaxOfFriends", "numberMaxOfFriendsVar", "NumberMaxOfFriends", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("AfterReady", "afterReadyVar", "AfterReady", true, OS.Types.Boolean, function () {
return false;
}), 
this.attr("NumberDiamondsHost", "numberDiamondsHostVar", "NumberDiamondsHost", true, OS.Types.Integer, function () {
return 0;
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
Model._hasValidationWidgetsValue = (((WTF_MOB_Common_Layout_Lvl2_mvcModel.hasValidationWidgets || WTF_MOB_Common_HeaderLvl2_mvcModel.hasValidationWidgets) || MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvcModel.hasValidationWidgets) || MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvcModel.hasValidationWidgets);
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
define("WTF_MOB.ScratchOtherPagesFlow.Amigos.mvc$view", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "react", "OutSystemsReactView", "WTF_MOB.ScratchOtherPagesFlow.Amigos.mvc$model", "WTF_MOB.ScratchOtherPagesFlow.Amigos.mvc$controller", "WTF_MOB.Common.Layout_Lvl2.mvc$view", "OutSystemsReactWidgets", "WTF_MOB.Common.HeaderLvl2.mvc$view", "MemberGM_MBLOCKS.UIFlow.Container_CopyAndShareReferalCode.mvc$view", "MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.mvc$view", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetInfoMGM", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_USER_WTFRec", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_ScratchShareFriends", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_ScratchCopyFriends", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, React, OSView, WTF_MOB_ScratchOtherPagesFlow_Amigos_mvc_model, WTF_MOB_ScratchOtherPagesFlow_Amigos_mvc_controller, WTF_MOB_Common_Layout_Lvl2_mvc_view, OSWidgets, WTF_MOB_Common_HeaderLvl2_mvc_view, MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvc_view, MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvc_view) {
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
        View.displayName = "ScratchOtherPagesFlow.Amigos";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MobilePatterns.BaseTheme.css", "css/MobileThemes_WTF.WTF_BaseTheme.css", "css/WTF_MOB.WTF_MOB.css", "css/WTF_MOB.ScratchOtherPagesFlow.Amigos.css", "css/MobilePatterns.BaseTheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [WTF_MOB_Common_Layout_Lvl2_mvc_view, WTF_MOB_Common_HeaderLvl2_mvc_view, MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvc_view, MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return WTF_MOB_ScratchOtherPagesFlow_Amigos_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return WTF_MOB_ScratchOtherPagesFlow_Amigos_mvc_controller;
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
ContentClass: "b-warmPurple",
PageSection: "Scratch",
PageTitle: "Scratch Amigos",
PageType: "Consulta",
ScreenName: "Amigos"
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
Title: "Amigos"
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
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-warmPurple",
visible: true,
_idProps: {
service: idService,
name: "apppopup"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "pa-16",
visible: model.getCachedValue(idService.getId("qhUFlm5RV0en9CPMfUwyVg.Visible"), function () {
return !(model.variables.userWTFActiveNowVar.idAttr.equals(OS.BuiltinFunctions.integerToLongInteger(OS.BuiltinFunctions.nullIdentifier())));
}, function () {
return model.variables.userWTFActiveNowVar.idAttr;
}),
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Image, {
image: OS.Navigation.VersionedURL.getVersionedUrl("img/WTF_MOB.scratchtutorial_05.jpg"),
type: /*Static*/ 0,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "b-white pa-16",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "YUM3RdTAiUO+t9qte_OA3A"
},
style: "c-warmPurple",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, "Convida os amigos a entrar na app com o teu código e ganha Bling Blings"), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-style-key": "GQK__VuuckWBZAMoKnBkNQ"
},
style: "c-strongPink pt-16 text-uppercase",
visible: true,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MemberGM_MBLOCKS_UIFlow_Container_CopyAndShareReferalCode_mvc_view, {
inputs: {
ShareBtnText: "Partilhar código",
Description: "O teu código",
ClassDescription: "c-strongPink",
ClassReferalCode: "c-strongPink pt-16 text-uppercase",
ShowShareBtn: true,
UrlToShare: "https://app.wtf.pt",
ClassShareBtn: "btn btn-primary -primary -big",
MessageToShare: (("Usas o meu código " + model.variables.userWTFActiveNowVar.codeMemberAttr) + " e saímos os dois a ganhar. Vais perceber: Mais diamantes = Mais Prémios.\r\n📲"),
ReferalCode: model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.codeMemberAttr,
_referalCodeInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getLocalUSERWTFSAggr.dataFetchStatusAttr)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
shareOnClick_Finish$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.shareOnClick_Finish$Action(controller.callContext(eventHandlerContext));
});
;
},
copyOnClick_Finish$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.copyOnClick_Finish$Action(controller.callContext(eventHandlerContext));
});
;
},
shareOnClick_Start$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
controller.shareOnClick_Start$Action(controller.callContext(eventHandlerContext));
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "8",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "mh-16 mt-48 mb-32",
visible: model.variables.afterReadyVar,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvc_view, {
inputs: {
NumberFriendsInvited: model.variables.numberFriendsInvitedVar,
NumberMaxOfFriends: model.variables.numberMaxOfFriendsVar,
Class: ""
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
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "c-white text-center",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: " mv-24",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if((model.variables.numberFriendsInvitedVar > 0), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "l_xhhDyzQ0+h6qoiw+DUTQ"
},
value: "Já convidaste ",
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "u0sdNDrRrEOFEtc+1aKLEg"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "c-yellow",
value: (model.variables.numberFriendsInvitedVar).toString(),
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "P0yyC8XHHkKxISGADLTSdg"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
value: model.getCachedValue(idService.getId("P0yyC8XHHkKxISGADLTSdg.Value"), function () {
return (((model.variables.numberFriendsInvitedVar > 1)) ? (" amigos") : (" amigo"));
}, function () {
return model.variables.numberFriendsInvitedVar;
}),
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "60o8aOwBmEq7eSUc5S1zvQ"
},
value: "Ainda não convidaste amigos",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-style-key": "WgErvhN3bUO2jOnFX7jYZA"
},
value: model.getCachedValue(idService.getId("WgErvhN3bUO2jOnFX7jYZA.Value"), function () {
return ((((model.variables.numberFriendsInvitedVar) !== (model.variables.numberMaxOfFriendsVar))) ? ((((("Por cada amigo que convidas, até " + (model.variables.numberMaxOfFriendsVar).toString()) + " amigos, ganhas ") + (model.variables.numberDiamondsHostVar).toString()) + " Bling Blings Silver.")) : ((("Já atingiste o máximo de Bling Blings (" + (model.variables.numberMaxOfFriendsVar).toString()) + ") que podes ganhar convidando amigos, obrigado")));
}, function () {
return model.variables.numberFriendsInvitedVar;
}, function () {
return model.variables.numberMaxOfFriendsVar;
}, function () {
return model.variables.numberDiamondsHostVar;
}),
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
})))))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.numberDiamondsHostVar), asPrimitiveValue(model.variables.numberMaxOfFriendsVar), asPrimitiveValue(model.variables.numberFriendsInvitedVar), asPrimitiveValue(model.variables.afterReadyVar), asPrimitiveValue(model.variables.getLocalUSERWTFSAggr.dataFetchStatusAttr), asPrimitiveValue(model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr.codeMemberAttr), asPrimitiveValue(model.variables.userWTFActiveNowVar.codeMemberAttr), asPrimitiveValue(model.variables.userWTFActiveNowVar.idAttr)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("WTF_MOB.ScratchOtherPagesFlow.Amigos.mvc$controller", ["OutSystems", "WTF_MOB.model", "WTF_MOB.controller", "WTF_MBP.controller", "WTF_MBP.model", "MobileUIWidgets.controller", "WTF_MOB.languageResources", "WTF_MOB.ScratchOtherPagesFlow.controller", "WTF_MOB.controller$Analytics_TrackException", "WTF_MOB.controller$VerifyNetworkStatus", "WTF_MBP.controller$GetInfoMGM", "WTF_MOB.referencesHealth", "WTF_MOB.referencesHealth$WTF_MBP", "WTF_MOB.controller$StartTraceGlobalAction", "WTF_MBP.model$Local_USER_WTFRec", "MobileUIWidgets.controller$CloseFeedbackMessage", "WTF_MOB.referencesHealth$MobileUIWidgets", "WTF_MBP.controller$setActivityLog_ScratchShareFriends", "WTF_MBP.controller$LogEventFacebook_MBP", "WTF_MOB.controller$StopTraceGlobalAction", "WTF_MOB.controller$Analytics_SendEvent", "WTF_MBP.controller$setActivityLog_ScratchCopyFriends", "MobileUIWidgets.controller$CustomFeedbackMessage", "WTF_MBP.entities", "WTF_MOB.model$AnalyticsAuxVarRec", "WTF_MOB.model$Local_USER_WTFRecordList"], function (OutSystems, WTF_MOBModel, WTF_MOBController, WTF_MBPController, WTF_MBPModel, MobileUIWidgetsController, WTF_MOBLanguageResources, WTF_MOB_ScratchOtherPagesFlowController) {
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
return controller._getLocalUSERWTFSOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getLocalUSERWTFS$AggrRefresh"];
// Client Actions
Controller.prototype._getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetLocalUSERWTFSOnAfterFetch");
callContext = controller.callContext(callContext);
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var getInfoMGMVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// AnalyticsAuxVar.TraceName = "Scratch_amigos"
model.variables.analyticsAuxVarVar.traceNameAttr = "Scratch_amigos";
// AnalyticsAuxVar.Category = "Scratch"
model.variables.analyticsAuxVarVar.categoryAttr = "Scratch";
// AnalyticsAuxVar.Trace_StartAt = CurrDateTime
model.variables.analyticsAuxVarVar.trace_StartAtAttr = OS.BuiltinFunctions.currDateTime();
// Execute Action: StartTraceGlobalAction
model.flush();
return WTF_MOBController.default.startTraceGlobalAction$Action(model.variables.analyticsAuxVarVar.traceNameAttr, callContext).then(function () {
// UserWTFActiveNow = GetLocalUSERWTFS.List.Current.Local_USER_WTF
model.variables.userWTFActiveNowVar = model.variables.getLocalUSERWTFSAggr.listOut.getCurrent(callContext.iterationContext).local_USER_WTFAttr;
// Execute Action: GetInfoMGM
model.flush();
return WTF_MBPController.default.getInfoMGM$Action(callContext).then(function (value) {
getInfoMGMVar.value = value;
});
}).then(function () {
if((getInfoMGMVar.value.successOut)) {
// AfterReady = True
model.variables.afterReadyVar = true;
// NumberFriendsInvited = GetInfoMGM.NumberFriendsInvited
model.variables.numberFriendsInvitedVar = getInfoMGMVar.value.numberFriendsInvitedOut;
// NumberMaxOfFriends = GetInfoMGM.NumberMaxOfFriends
model.variables.numberMaxOfFriendsVar = getInfoMGMVar.value.numberMaxOfFriendsOut;
// NumberDiamondsHost = GetInfoMGM.NumberDiamondsHost
model.variables.numberDiamondsHostVar = getInfoMGMVar.value.numberDiamondsHostOut;
}

// Execute Action: StopTrace
return controller._stopTrace$Action(callContext);
});
}).catch(function (ex) {
OS.Logger.trace("Amigos.GetLocalUSERWTFSOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
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
// Execute Action: StopTrace2
return controller._stopTrace$Action(callContext);
}).then(function () {
if((verifyNetworkStatusVar.value.isOnlineOut)) {
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
// Execute Action: StopTrace3
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
// Execute Action: CloseFeedbackMessage
MobileUIWidgetsController.default.closeFeedbackMessage$Action(callContext);
};
Controller.prototype._shareOnClick_Finish$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShareOnClick_Finish");
callContext = controller.callContext(callContext);
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: setActivityLog_ScratchShareFriends
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchShareFriends$Action("", callContext).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Scratch_share_friends", callContext);

});
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
Controller.prototype._shareOnClick_Start$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("ShareOnClick_Start");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_amigos", "Partilhar código", 0, "", callContext);
});
};
Controller.prototype._copyOnClick_Finish$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("CopyOnClick_Finish");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var communicationExceptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var verifyNetworkStatusVar = new OS.DataTypes.VariableHolder();
var logEventFacebook_MBPVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: CustomFeedbackMessage2
MobileUIWidgetsController.default.customFeedbackMessage$Action("Código copiado, envia a um amigo", 1, true, "icon-message_success level3", true, false, 10000, "", "-large", callContext);
// Execute Action: Analytics_SendEvent
model.flush();
return WTF_MOBController.default.analytics_SendEvent$Action("click", "Scratch_amigos", "Copiar código", 0, "", callContext).then(function () {
// Execute Action: setActivityLog_ScratchCopyFriends
model.flush();
return WTF_MBPController.default.setActivityLog_ScratchCopyFriends$Action("", callContext);
}).then(function () {
// Execute Action: LogEventFacebook_MBP
logEventFacebook_MBPVar.value = WTF_MBPController.default.logEventFacebook_MBP$Action("Scratch_copy_friends", callContext);

});
}).catch(function (ex) {
OS.Logger.trace("Amigos.CopyOnClick_Finish", OS.Exceptions.getMessage(ex), ex.name);
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
// Destination: /WTF_MOB/PageUnavailable
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("/WTF_MOB/PageUnavailable", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
});
});
}

throw ex;
});
};

Controller.prototype.getLocalUSERWTFSOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getLocalUSERWTFSOnAfterFetch$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.shareOnClick_Finish$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._shareOnClick_Finish$Action, callContext);

};
Controller.prototype.stopTrace$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._stopTrace$Action, callContext);

};
Controller.prototype.shareOnClick_Start$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._shareOnClick_Start$Action, callContext);

};
Controller.prototype.copyOnClick_Finish$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._copyOnClick_Finish$Action, callContext);

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
return WTF_MOB_ScratchOtherPagesFlowController.default.handleError(ex, this.callContext());
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

