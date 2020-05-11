define("MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.mvc$model", ["OutSystems", "MemberGM_MBLOCKS.model", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$model"], function (OutSystems, MemberGM_MBLOCKSModel, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("NumberFriendsInvited", "numberFriendsInvitedIn", "NumberFriendsInvited", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_numberFriendsInvitedInDataFetchStatus", "_numberFriendsInvitedInDataFetchStatus", "_numberFriendsInvitedInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("NumberMaxOfFriends", "numberMaxOfFriendsIn", "NumberMaxOfFriends", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("_numberMaxOfFriendsInDataFetchStatus", "_numberMaxOfFriendsInDataFetchStatus", "_numberMaxOfFriendsInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("Class", "classIn", "Class", true, OS.Types.Text, function () {
return "";
}), 
this.attr("_classInDataFetchStatus", "_classInDataFetchStatus", "_classInDataFetchStatus", true, OS.Types.Integer, function () {
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
Model._hasValidationWidgetsValue = MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("NumberFriendsInvited" in inputs) {
this.variables.numberFriendsInvitedIn = inputs.NumberFriendsInvited;
if("_numberFriendsInvitedInDataFetchStatus" in inputs) {
this.variables._numberFriendsInvitedInDataFetchStatus = inputs._numberFriendsInvitedInDataFetchStatus;
}

}

if("NumberMaxOfFriends" in inputs) {
this.variables.numberMaxOfFriendsIn = inputs.NumberMaxOfFriends;
if("_numberMaxOfFriendsInDataFetchStatus" in inputs) {
this.variables._numberMaxOfFriendsInDataFetchStatus = inputs._numberMaxOfFriendsInDataFetchStatus;
}

}

if("Class" in inputs) {
this.variables.classIn = inputs.Class;
if("_classInDataFetchStatus" in inputs) {
this.variables._classInDataFetchStatus = inputs._classInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.mvc$view", ["OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.controller", "react", "OutSystemsReactView", "MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.mvc$model", "MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.mvc$controller", "OutSystemsReactWidgets", "MobileUIWidgets.WidgetsNumber.ProgressBar_Ext.mvc$view"], function (OutSystems, MemberGM_MBLOCKSModel, MemberGM_MBLOCKSController, React, OSView, MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvc_model, MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvc_controller, OSWidgets, MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view) {
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
        View.displayName = "UIFlow.Container_StatisticsReferalCode";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return MemberGM_MBLOCKS_UIFlow_Container_StatisticsReferalCode_mvc_controller;
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
style: model.variables.classIn,
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._classInDataFetchStatus)
}, React.createElement(MobileUIWidgets_WidgetsNumber_ProgressBar_Ext_mvc_view, {
inputs: {
Progress: OS.BuiltinFunctions.decimalToInteger(OS.BuiltinFunctions.trunc(OS.BuiltinFunctions.integerToDecimal(100).minus(OS.BuiltinFunctions.integerToDecimal(1).minus(OS.BuiltinFunctions.integerToDecimal(model.variables.numberFriendsInvitedIn).div(OS.BuiltinFunctions.integerToDecimal(model.variables.numberMaxOfFriendsIn))).times(OS.BuiltinFunctions.integerToDecimal(100))))),
_progressInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._numberFriendsInvitedInDataFetchStatus, model.variables._numberMaxOfFriendsInDataFetchStatus),
AnimateInitialProgress: false,
Height: 16
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("MemberGM_MBLOCKS.UIFlow.Container_StatisticsReferalCode.mvc$controller", ["OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.controller", "MemberGM_MBLOCKS.languageResources"], function (OutSystems, MemberGM_MBLOCKSModel, MemberGM_MBLOCKSController, MemberGM_MBLOCKSLanguageResources) {
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

