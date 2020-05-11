define("CustomerNotifications_MBLOCKS.Blocks.WB_CallBack.mvc$model", ["OutSystems", "CustomerNotifications_MBLOCKS.model", "CommonPlugin.controller", "CommonPlugin.controller$GetDeviceID", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CommonPlugin", "CustomerNotifications_MBLOCKS.model$InboxNotificationTypeNotificationRecordList"], function (OutSystems, CustomerNotifications_MBLOCKSModel, CommonPluginController) {
var OS = OutSystems.Internal;
var GetNotificationsByIdAggrRec = (function (_super) {
__extends(GetNotificationsByIdAggrRec, _super);
function GetNotificationsByIdAggrRec(defaults) {
_super.apply(this, arguments);
}
GetNotificationsByIdAggrRec.RecordListType = CustomerNotifications_MBLOCKSModel.InboxNotificationTypeNotificationRecordList;
GetNotificationsByIdAggrRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
GetNotificationsByIdAggrRec.init();
return GetNotificationsByIdAggrRec;
})(OS.Model.AggregateRecord);


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("NotificationId", "notificationIdIn", "NotificationId", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("_notificationIdInDataFetchStatus", "_notificationIdInDataFetchStatus", "_notificationIdInDataFetchStatus", true, OS.Types.Integer, function () {
return /*Fetched*/ 1;
}), 
this.attr("GetNotificationsById", "getNotificationsByIdAggr", "getNotificationsByIdAggr", true, OS.Types.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetNotificationsByIdAggrRec());
}, GetNotificationsByIdAggrRec)
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
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("NotificationId" in inputs) {
this.variables.notificationIdIn = inputs.NotificationId;
if("_notificationIdInDataFetchStatus" in inputs) {
this.variables._notificationIdInDataFetchStatus = inputs._notificationIdInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model);
});
define("CustomerNotifications_MBLOCKS.Blocks.WB_CallBack.mvc$view", ["OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.controller", "CommonPlugin.controller", "react", "OutSystemsReactView", "CustomerNotifications_MBLOCKS.Blocks.WB_CallBack.mvc$model", "CustomerNotifications_MBLOCKS.Blocks.WB_CallBack.mvc$controller", "CommonPlugin.controller$GetDeviceID", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CommonPlugin", "CustomerNotifications_MBLOCKS.model$InboxNotificationTypeNotificationRecordList"], function (OutSystems, CustomerNotifications_MBLOCKSModel, CustomerNotifications_MBLOCKSController, CommonPluginController, React, OSView, CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvc_model, CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvc_controller) {
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
        View.displayName = "Blocks.WB_CallBack";
        View.getCssDependencies = function() {
            return [];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return CustomerNotifications_MBLOCKS_Blocks_WB_CallBack_mvc_controller;
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

            return React.DOM.div(this.getRootNodeProperties());
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("CustomerNotifications_MBLOCKS.Blocks.WB_CallBack.mvc$controller", ["OutSystems", "CustomerNotifications_MBLOCKS.model", "CustomerNotifications_MBLOCKS.controller", "CommonPlugin.controller", "CustomerNotifications_MBLOCKS.languageResources", "CommonPlugin.controller$GetDeviceID", "CustomerNotifications_MBLOCKS.referencesHealth", "CustomerNotifications_MBLOCKS.referencesHealth$CommonPlugin", "CustomerNotifications_MBLOCKS.model$InboxNotificationTypeNotificationRecordList"], function (OutSystems, CustomerNotifications_MBLOCKSModel, CustomerNotifications_MBLOCKSController, CommonPluginController, CustomerNotifications_MBLOCKSLanguageResources) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
}
// Server Actions
Controller.prototype.getRegistrationTokenByDeviceId$ServerAction = function (notificationChannelIdIn, deviceHardwareIdIn, callContext) {
var controller = this.controller;
var inputs = {
NotificationChannelId: OS.DataTypes.JSConversions.basicTypeToJS(notificationChannelIdIn, OS.Types.LongInteger),
DeviceHardwareId: OS.DataTypes.JSConversions.basicTypeToJS(deviceHardwareIdIn, OS.Types.Text)
};
return controller.callServerAction("GetRegistrationTokenByDeviceId", "screenservices/CustomerNotifications_MBLOCKS/Blocks/WB_CallBack/ActionGetRegistrationTokenByDeviceId", "hO1VqPz7wTUZ+AevLdLGJA", inputs, controller.callContext(callContext)).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("CustomerNotifications_MBLOCKS.Blocks.WB_CallBack$rssespacecustomernotifications_bp_ActionGetRegistrationTokenByDeviceId"))();
executeServerActionResult.registrationTokenOut = OS.DataTypes.JSConversions.jsToBasicType(outputs.RegistrationToken, OS.Types.Text);
return executeServerActionResult;
});
};
Controller.registerVariableGroupType("CustomerNotifications_MBLOCKS.Blocks.WB_CallBack$rssespacecustomernotifications_bp_ActionGetRegistrationTokenByDeviceId", [{
name: "RegistrationToken",
attrName: "registrationTokenOut",
mandatory: false,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype.pushChangeStatusNotificationByNotificationId$ServerAction = function (notificationIdIn, registrationTokenIn, notificationStatusIdIn, callContext) {
var controller = this.controller;
var inputs = {
NotificationId: OS.DataTypes.JSConversions.basicTypeToJS(notificationIdIn, OS.Types.LongInteger),
RegistrationToken: OS.DataTypes.JSConversions.basicTypeToJS(registrationTokenIn, OS.Types.Text),
NotificationStatusId: OS.DataTypes.JSConversions.basicTypeToJS(notificationStatusIdIn, OS.Types.Integer)
};
return controller.callServerAction("PushChangeStatusNotificationByNotificationId", "screenservices/CustomerNotifications_MBLOCKS/Blocks/WB_CallBack/ActionPushChangeStatusNotificationByNotificationId", "AvUCu87xX0L3M7YDiqIU1A", inputs, controller.callContext(callContext)).then(function (outputs) {
});
};

// Aggregates and Data Actions
Controller.prototype.getNotificationsById$AggrRefresh = function (maxRecords) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext();
return controller.callAggregate("ScreenDataSetGetNotificationsById", "screenservices/CustomerNotifications_MBLOCKS/Blocks/WB_CallBack/ScreenDataSetGetNotificationsById", "wVwdAqScuV05Aj8dGc+DUg", maxRecords, function (b) {
model.variables.getNotificationsByIdAggr.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getNotificationsByIdAggr.fromJS(json);
}, undefined).then(function () {
return controller._getNotificationByIdOnAfterFetch$Action(controller.callContext(callContext));
});
};

Controller.prototype.dataFetchActionNames = ["getNotificationsById$AggrRefresh"];
// Client Actions
Controller.prototype._getNotificationByIdOnAfterFetch$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("GetNotificationByIdOnAfterFetch");
callContext = controller.callContext(callContext);
var getRegistrationTokenByDeviceIdVar = new OS.DataTypes.VariableHolder();
var getDeviceIDVar = new OS.DataTypes.VariableHolder();
return OS.Flow.executeAsyncFlow(function () {
// Execute Action: GetDeviceID
getDeviceIDVar.value = CommonPluginController.default.getDeviceID$Action(callContext);

// Execute Action: GetRegistrationTokenByDeviceId
model.flush();
return controller.getRegistrationTokenByDeviceId$ServerAction(model.variables.getNotificationsByIdAggr.listOut.getCurrent(callContext.iterationContext).notificationAttr.notificationChannelIdAttr, getDeviceIDVar.value.deviceHwIdOut, callContext).then(function (value) {
getRegistrationTokenByDeviceIdVar.value = value;
}).then(function () {
// Is empty ?
return OS.Flow.executeSequence(function () {
if(((getRegistrationTokenByDeviceIdVar.value.registrationTokenOut === ""))) {
// Trigger Event: OnNotifyChangeStatus2
return controller.onNotifyChangeStatus$Action(model.variables.getNotificationsByIdAggr.listOut.getCurrent(callContext.iterationContext).notificationAttr.deepLink_PushAttr, callContext);
} else {
// Execute Action: PushChangeStatusNotificationByNotificationId
model.flush();
return controller.pushChangeStatusNotificationByNotificationId$ServerAction(model.variables.notificationIdIn, getRegistrationTokenByDeviceIdVar.value.registrationTokenOut, CustomerNotifications_MBLOCKSModel.staticEntities.notificationStatus.lida, callContext).then(function () {
// Trigger Event: OnNotifyChangeStatus
return controller.onNotifyChangeStatus$Action(model.variables.getNotificationsByIdAggr.listOut.getCurrent(callContext.iterationContext).notificationAttr.deepLink_PushAttr, callContext);
});
}

});
});
});
};
Controller.prototype._onParametersChanged$Action = function (callContext) {
var model = this.model;
var controller = this.controller;
var idService = this.idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
return OS.Flow.executeAsyncFlow(function () {
// Refresh Query: GetNotificationsById
var result = controller.getNotificationsById$AggrRefresh(1);
model.flush();
return result;
});
};

Controller.prototype.getNotificationByIdOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getNotificationByIdOnAfterFetch$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onNotifyChangeStatus$Action = function () {
return Promise.resolve();
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
return CustomerNotifications_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, CustomerNotifications_MBLOCKSLanguageResources);
});

