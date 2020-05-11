define("WhatsNew.model$WHATSNEWRec", ["exports", "OutSystems", "WhatsNew.model"], function (exports, OutSystems, WhatsNewModel) {
var OS = OutSystems.Internal;
var WHATSNEWRec = (function (_super) {
__extends(WHATSNEWRec, _super);
function WHATSNEWRec(defaults) {
_super.apply(this, arguments);
}
WHATSNEWRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("Application", "applicationAttr", "Application", true, OS.Types.Text, function () {
return "";
}), 
this.attr("TypeId", "typeIdAttr", "TypeId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Name", "nameAttr", "Name", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", false, OS.Types.Text, function () {
return "";
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
}), 
this.attr("StateId", "stateIdAttr", "StateId", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CardsTotal", "cardsTotalAttr", "CardsTotal", false, OS.Types.LongInteger, function () {
return OS.BuiltinFunctions.integerToLongInteger(1);
}), 
this.attr("ScreenId", "screenIdAttr", "ScreenId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("ExternalURL", "externalURLAttr", "ExternalURL", false, OS.Types.Text, function () {
return "";
}), 
this.attr("ActivedOn", "activedOnAttr", "ActivedOn", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
WHATSNEWRec.generateFromLocalStorage = function () {
return false;
};
WHATSNEWRec.init();
return WHATSNEWRec;
})(OS.DataTypes.GenericRecord);
WhatsNewModel.WHATSNEWRec = WHATSNEWRec;

});
define("WhatsNew.model$TYPERec", ["exports", "OutSystems", "WhatsNew.model"], function (exports, OutSystems, WhatsNewModel) {
var OS = OutSystems.Internal;
var TYPERec = (function (_super) {
__extends(TYPERec, _super);
function TYPERec(defaults) {
_super.apply(this, arguments);
}
TYPERec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Label", "labelAttr", "Label", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Limit", "limitAttr", "Limit", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, OS.Types.Boolean, function () {
return false;
})
].concat(_super.attributesToDeclare.call(this));
};
TYPERec.generateFromLocalStorage = function () {
return false;
};
TYPERec.init();
return TYPERec;
})(OS.DataTypes.GenericRecord);
WhatsNewModel.TYPERec = TYPERec;

});
define("WhatsNew.model$WhatsNewCardInfo_V2Rec", ["exports", "OutSystems", "WhatsNew.model"], function (exports, OutSystems, WhatsNewModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfo_V2Rec = (function (_super) {
__extends(WhatsNewCardInfo_V2Rec, _super);
function WhatsNewCardInfo_V2Rec(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfo_V2Rec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Binary", "binaryAttr", "Binary", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("MimeType", "mimeTypeAttr", "MimeType", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
}), 
this.attr("Tag", "tagAttr", "Tag", false, OS.Types.Text, function () {
return "";
})
].concat(_super.attributesToDeclare.call(this));
};
WhatsNewCardInfo_V2Rec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
WhatsNewCardInfo_V2Rec.init();
return WhatsNewCardInfo_V2Rec;
})(OS.DataTypes.GenericRecord);
WhatsNewModel.WhatsNewCardInfo_V2Rec = WhatsNewCardInfo_V2Rec;

});
define("WhatsNew.model$WhatsNewActiveRec", ["exports", "OutSystems", "WhatsNew.model"], function (exports, OutSystems, WhatsNewModel) {
var OS = OutSystems.Internal;
var WhatsNewActiveRec = (function (_super) {
__extends(WhatsNewActiveRec, _super);
function WhatsNewActiveRec(defaults) {
_super.apply(this, arguments);
}
WhatsNewActiveRec.attributesToDeclare = function () {
return [
this.attr("WhatsNewId", "whatsNewIdAttr", "WhatsNewId", false, OS.Types.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}), 
this.attr("TypeId", "typeIdAttr", "TypeId", false, OS.Types.Integer, function () {
return 0;
}), 
this.attr("ActivedOn", "activedOnAttr", "ActivedOn", false, OS.Types.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
})
].concat(_super.attributesToDeclare.call(this));
};
WhatsNewActiveRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
WhatsNewActiveRec.init();
return WhatsNewActiveRec;
})(OS.DataTypes.GenericRecord);
WhatsNewModel.WhatsNewActiveRec = WhatsNewActiveRec;

});
define("WhatsNew.model$WhatsNewCardInfoRec", ["exports", "OutSystems", "WhatsNew.model"], function (exports, OutSystems, WhatsNewModel) {
var OS = OutSystems.Internal;
var WhatsNewCardInfoRec = (function (_super) {
__extends(WhatsNewCardInfoRec, _super);
function WhatsNewCardInfoRec(defaults) {
_super.apply(this, arguments);
}
WhatsNewCardInfoRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Description", "descriptionAttr", "Description", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Binary", "binaryAttr", "Binary", true, OS.Types.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}), 
this.attr("MimeType", "mimeTypeAttr", "MimeType", true, OS.Types.Text, function () {
return "";
}), 
this.attr("Order", "orderAttr", "Order", true, OS.Types.Integer, function () {
return 0;
})
].concat(_super.attributesToDeclare.call(this));
};
WhatsNewCardInfoRec.fromLocalStorage = function (row, indexRef, attributeOrder) {
return this.fromLocalStorageImplementation(row, indexRef, OS.Entities.attributeReaderImplementation, attributeOrder);
};
WhatsNewCardInfoRec.init();
return WhatsNewCardInfoRec;
})(OS.DataTypes.GenericRecord);
WhatsNewModel.WhatsNewCardInfoRec = WhatsNewCardInfoRec;

});
define("WhatsNew.model", ["exports", "OutSystems"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var WhatsNewModel = exports;
});
