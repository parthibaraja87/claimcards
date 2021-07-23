sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.com.nhg.eclaimcardform.controller.Overview", {
			onInit: function () {

            },
            onActionLog: function (oEvent) {
            
  var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation"); // get a handle on the global XAppNav service
  var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
  target: {
  semanticObject: "claim",
  action: "Display"
  }  
  })) || ""; // generate the Hash to display a Supplier
  oCrossAppNavigator.toExternal({
  target: {
  shellHash: hash
  }
  }); // navigate to Supplier application
           }
		});
	});
