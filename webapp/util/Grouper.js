// Jerry 2017-05-20 11:55AM - below comment works!
// /*eslint linebreak-style: ["error", "windows"]*/
jQuery.sap.declare("jerrylist.util.Grouper");

jerrylist.util.Grouper = {

	bundle : null, // somebody has to set this

	LifecycleStatus : function (oContext) {
		var status = oContext.getProperty("LifecycleStatus");
		var text = jerrylist.util.Grouper.bundle.getText("StatusText" + status, "?");
		return {
			key: status,
			text: text
		};
	},

	GrossAmount : function (oContext) {
		var price = oContext.getProperty("GrossAmount");
		var currency = oContext.getProperty("CurrencyCode");
		var key = null,
			text = null;
		if (price <= 5000) {
			key = "LE10";
			text = "< 5000 " + currency;
		} else if (price > 5000 && price <= 10000) {
			key = "LE100";
			text = "< 10.000  " + currency;
		} else if (price > 10000) {
			key = "GT100";
			text = "> 10.000 " + currency;
		}
		return {
			key: key,
			text: text
		};
	}
};