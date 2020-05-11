define("MemberGM_MBLOCKS.controller$DisabledOrEnabledButton", ["exports", "OutSystems", "MemberGM_MBLOCKS.model", "MemberGM_MBLOCKS.controller", "MemberGM_MBLOCKS.controller$DisabledOrEnabledButton.JavaScript1JS"], function (exports, OutSystems, MemberGM_MBLOCKSModel, MemberGM_MBLOCKSController, MemberGM_MBLOCKS_controller_DisabledOrEnabledButton_JavaScript1JS) {
var OS = OutSystems.Internal;
MemberGM_MBLOCKSController.default.disabledOrEnabledButton$Action = function (buttonIdIn, hasEnabledIn, callContext) {
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("MemberGM_MBLOCKS.DisabledOrEnabledButton$vars"))());
vars.value.buttonIdInLocal = buttonIdIn;
vars.value.hasEnabledInLocal = hasEnabledIn;
controller.safeExecuteJSNode(MemberGM_MBLOCKS_controller_DisabledOrEnabledButton_JavaScript1JS, "JavaScript1", "DisabledOrEnabledButton", {
disabled_value: OS.DataTypes.JSConversions.basicTypeToJS((!(vars.value.hasEnabledInLocal) ? "True" : "False"), OS.Types.Text, true),
button_id: OS.DataTypes.JSConversions.basicTypeToJS(vars.value.buttonIdInLocal, OS.Types.Text, true)
}, function ($parameters) {
}, {}, {});
return ;
};
var controller = MemberGM_MBLOCKSController.default;
MemberGM_MBLOCKSController.default.constructor.registerVariableGroupType("MemberGM_MBLOCKS.DisabledOrEnabledButton$vars", [{
name: "ButtonId",
attrName: "buttonIdInLocal",
mandatory: true,
dataType: OS.Types.Text,
defaultValue: function () {
return "";
}
}, {
name: "hasEnabled",
attrName: "hasEnabledInLocal",
mandatory: true,
dataType: OS.Types.Boolean,
defaultValue: function () {
return false;
}
}]);
MemberGM_MBLOCKSController.default.clientActionProxies.disabledOrEnabledButton$Action = function (buttonIdIn, hasEnabledIn) {
buttonIdIn = (buttonIdIn === undefined) ? "" : buttonIdIn;
hasEnabledIn = (hasEnabledIn === undefined) ? false : hasEnabledIn;
return controller.executeActionInsideJSNode(MemberGM_MBLOCKSController.default.disabledOrEnabledButton$Action.bind(controller, OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(buttonIdIn, OS.Types.Text), OS.DataTypes.JSNodeConversions.jsNodeOutputToBasicType(hasEnabledIn, OS.Types.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("MemberGM_MBLOCKS.controller$DisabledOrEnabledButton.JavaScript1JS", [], function () {
return function ($parameters, $actions, $roles, $public) {
var button = document.getElementById($parameters.button_id);

if($parameters.disabled_value == "True")
    button.disabled = true;
else
    button.disabled = false;

};
});

define("MemberGM_MBLOCKS.controller", ["exports", "OutSystems", "MemberGM_MBLOCKS.model"], function (exports, OutSystems, MemberGM_MBLOCKSModel) {
var OS = OutSystems.Internal;
var MemberGM_MBLOCKSController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return MemberGM_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
MemberGM_MBLOCKSController.default = new Controller();
});
