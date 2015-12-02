<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Candle Stick Pattern</title>

<script type="text/javascript" src="../../js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="../../js/jquery.jqcandlestick.js"></script>
<script type="text/javascript" src="../../js/candlestick/candlestick.js"></script>
<script type="text/javascript" src="../../js/util/util.js"></script>

<link rel="stylesheet" type="text/css" href="../../css/jqcandlestick.css" />

<style type="text/css">
body {
	font-family: sans-serif;
}

.jqcandlestick-container {
	width: 640px;
	height: 480px;
}
</style>

</head>
<body>
	<input type="hidden" id="contextPath" value="<%=request.getContextPath()%>" />
	<div id="candlestick-canvas"></div>
</body>
</html>