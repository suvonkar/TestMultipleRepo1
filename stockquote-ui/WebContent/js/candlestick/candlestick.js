$(document).ready(function(){
	var startDate = "09/21/2015";
	var endDate = "09/24/2015";
	var companyName = "ACC Ltd.";
	
	//var url = $('#contextPath').val() + "/rest/retrieve/dailystocks?startDate="+startDate+"&endDate="+endDate+"&companyName="+companyName;
	var url = $('#contextPath').val() + "/rest/retrieve/dailystocks?startDate=" + getUrlParameter('startDate') + "&endDate=" + getUrlParameter('endDate') + "&companyName=" + getUrlParameter('companyName');
	 
	var dataType = "json";
	var contentType = "application/json";
	drawJQCandlestick(getAjaxCall(url, dataType, contentType));
});

function drawJQCandlestick(result){
	 var currentStock;
	 
	 var data = [];
	 
	 $.each( result.data, function( intValue, currentStock ) {
		 data.push([removeTime(currentStock.date), currentStock.open, currentStock.high, currentStock.low, currentStock.close, currentStock.volume]);
	 });
	 
	$('#candlestick-canvas').jqCandlestick({
		  custom: true,
	      data: data,
	      theme: 'light',
		   plot: {
			  padding: {
				top: 30,
				left: 30,
				bottom: 30,
				right: 30,
			  },
			},
		  xAxis: {
			maxTicks:  data.length 
		  },
	      yAxis: [{
	        height: 7, 
			numTicks: 7
	      }, {
	        height: 3, 
			numTicks: 3
	      }],
	      series: [{
	        type: 'candlestick',
	        upStroke: '#0C0',
	        downStroke: '#C00',
	        downColor: '#C00',
	      }, {
	        type: 'column',
	        name: 'VOLUME',
	        yAxis: 1,
	        stroke: '#00C',
	        color: 'rgba(0, 0, 255, 0.5)',
	      }],
	    });
}
