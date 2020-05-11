define("ACCOUNTINFO_MBLOCKS.controller", ["exports", "OutSystems", "ACCOUNTINFO_MBLOCKS.model"], function (exports, OutSystems, ACCOUNTINFO_MBLOCKSModel) {
var OS = OutSystems.Internal;
var ACCOUNTINFO_MBLOCKSController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return ACCOUNTINFO_MBLOCKSController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseModuleController);
ACCOUNTINFO_MBLOCKSController.default = new Controller();
});
