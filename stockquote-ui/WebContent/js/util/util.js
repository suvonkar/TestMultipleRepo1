/**
 * Get Ajax call
 * 
 * @param url
 * @param dataType
 * @param contentType
 * @returns
 */
function getAjaxCall(url, dataType, contentType){
	var resultObj;
	$.ajax({
		url: url,
		method: "GET",
		dataType: dataType,
		contentType: contentType,
		async: false,
		 success: function(result,status,jqXHR ){
			 resultObj = result;
    	 },
    	 error(jqXHR, textStatus, errorThrown) {
    		 console.log("Error : " + textStatus);
    		 resultObj = "";
    	 }
    }); 
	return resultObj;
}

/**
 * Remove the time from a date
 * 
 * @param dateTime
 * @returns
 */
function removeTime(dateTime){
	var d = new Date(dateTime);
	return new Date((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear());
}

/**
 * Get URL Parameter
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
