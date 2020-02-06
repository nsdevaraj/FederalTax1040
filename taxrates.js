//<!--

//Revised 2003 Tax Rate Schedules
//SCHEDULE X - Single 
//SCHEDULE Y-1 - Married Filing  Jointly or   Qualifying   Widow(er)
//SCHEDULE Y-2 - Married Filing  Separately
//SCHEDULE Z - Head of  Household

var t_2000_S = new Array(
  26250, 15,
  63550, 28,
  132600, 31,
  288350, 36,
  -1, 39.6);

var t_2000_MJ = new Array(
  43850, 15,
  105950, 28,
  161450, 31,
  288350, 36,
  -1, 39.6);

var t_2000_MS = new Array(
  21925, 15,
  52975, 28,
  80725, 31,
  144175, 36,
  -1, 39.6);

var t_2000_HH = new Array(
  35150, 15,
  90800, 28,
  147050, 31,
  288350, 36,
  -1, 39.6);

// -----------------------------------------------------------

var t_2001_S = new Array(
  27050, 15,
  65550, 27.5,
  136750, 30.5,
  297350, 35.5,
  -1, 39.1);

var t_2001_MJ = new Array(
  45200, 15,
  109250, 27.5,
  166500, 30.5,
  297350, 35.5,
  -1, 39.1);

var t_2001_MS = new Array(
  22600, 15,
  54625, 27.5,
  83250, 30.5,
  148675, 35.5,
  -1, 39.1);

var t_2001_HH = new Array(
  36250, 15,
  93650, 27.5,
  151650, 30.5,
  297350, 35.5,
  -1, 39.1);

// -----------------------------------------------------------


var t_2002_S = new Array(
  6000, 10,
  27950, 15,
  67700, 27,
  141250, 30,
  307050, 35,
  -1, 38.6);

var t_2002_MJ = new Array(
  12000, 10,
  46700, 15,
  112850, 27,
  171950, 30,
  307050, 35,
  -1, 38.6);

var t_2002_MS = new Array(
  6000, 10,
  23350, 15,
  56425, 27,
  85975, 30,
  153525, 35,
  -1, 38.6);

var t_2002_HH = new Array(
  10000, 10,
  37450, 15,
  96700, 27,
  156600, 30,
  307050, 35,
  -1, 38.6);

// -----------------------------------------------------------

var t_2003_S = new Array(
  7000, 10,
  28400, 15,
  68800, 25,
  143500, 28,
  311950, 33,
  -1, 35);

var t_2003_MJ = new Array(
  14000, 10,
  56800, 15,
  114650, 25,
  174700, 28,
  311950, 33,
  -1, 35);

var t_2003_MS = new Array(
  7000, 10,
  28400, 15,
  57325, 25,
  87350, 28,
  155975, 33,
  -1, 35);

var t_2003_HH = new Array(
  10000, 10,
  38050, 15,
  98250, 25,
  159100, 28,
  311950, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2004_S = new Array(
  7150, 10,
  29050, 15,
  70350, 25,
  146750, 28,
  319100, 33,
  -1, 35);

var t_2004_MJ = new Array(
  14300, 10,
  58100, 15,
  117250, 25,
  178650, 28,
  319100, 33,
  -1, 35);

var t_2004_MS = new Array(
  7150, 10,
  29050, 15,
  58625, 25,
  89325, 28,
  159550, 33,
  -1, 35);

var t_2004_HH = new Array(
  10200, 10,
  38900, 15,
  100500, 25,
  162700, 28,
  319100, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2005_S = new Array(
  7300, 10,
  29700, 15,
  71950, 25,
  150150, 28,
  326450, 33,
  -1, 35);

var t_2005_MJ = new Array(
  14600, 10,
  59400, 15,
  119950, 25,
  182800, 28,
  326450, 33,
  -1, 35);

var t_2005_MS = new Array(
  7300, 10,
  29700, 15,
  59975, 25,
  91400, 28,
  163225, 33,
  -1, 35);

var t_2005_HH = new Array(
  10450, 10,
  39800, 15,
  102800, 25,
  166450, 28,
  326450, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2006_S = new Array(
  7550, 10,
  30650, 15,
  74200, 25,
  154800, 28,
  336550, 33,
  -1, 35);

var t_2006_MJ = new Array(
  15100, 10,
  61300, 15,
  123700, 25,
  188450, 28,
  336550, 33,
  -1, 35);

var t_2006_MS = new Array(
  7550, 10,
  30650, 15,
  61850, 25,
  94225, 28,
  168275, 33,
  -1, 35);

var t_2006_HH = new Array(
  10750, 10,
  41050, 15,
  106000, 25,
  171650, 28,
  336550, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2007_S = new Array(
  7825, 10,
  31850, 15,
  77100, 25,
  160850, 28,
  349700, 33,
  -1, 35);

var t_2007_MJ = new Array(
  15650, 10,
  63700, 15,
  128500, 25,
  195850, 28,
  349700, 33,
  -1, 35);

var t_2007_MS = new Array(
  7825, 10,
  31850, 15,
  64250, 25,
  97925, 28,
  174850, 33,
  -1, 35);

var t_2007_HH = new Array(
  11200, 10,
  42650, 15,
  110100, 25,
  178350, 28,
  349700, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2008_S = new Array(
  8025, 10,
  32550, 15,
  78850, 25,
  164550, 28,
  357700, 33,
  -1, 35);

var t_2008_MJ = new Array(
  16050, 10,
  65100, 15,
  131450, 25,
  200300, 28,
  357700, 33,
  -1, 35);

var t_2008_MS = new Array(
  8025, 10,
  32550, 15,
  65725, 25,
  100150, 28,
  178850, 33,
  -1, 35);

var t_2008_HH = new Array(
  11450, 10,
  43650, 15,
  112650, 25,
  182400, 28,
  357700, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2009_S = new Array(
  8350, 10,
  33950, 15,
  82250, 25,
  171550, 28,
  372950, 33,
  -1, 35);

var t_2009_MJ = new Array(
  16700, 10,
  67900, 15,
  137050, 25,
  208850, 28,
  372950, 33,
  -1, 35);

var t_2009_MS = new Array(
  8350, 10,
  33950, 15,
  68525, 25,
  104425, 28,
  186475, 33,
  -1, 35);

var t_2009_HH = new Array(
  11950, 10,
  45500, 15,
  117450, 25,
  190200, 28,
  372950, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2010_S = new Array(
  8375, 10,
  34000, 15,
  82400, 25,
  171850, 28,
  373650, 33,
  -1, 35);

var t_2010_MJ = new Array(
  16750, 10,
  68000, 15,
  137300, 25,
  209250, 28,
  373650, 33,
  -1, 35);

var t_2010_MS = new Array(
  8375, 10,
  34000, 15,
  68650, 25,
  104625, 28,
  186825, 33,
  -1, 35);

var t_2010_HH = new Array(
  11950, 10,
  45550, 15,
  117650, 25,
  190550, 28,
  373650, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2011_S = new Array(
  8500, 10,
  34500, 15,
  83600, 25,
  174400, 28,
  379150, 33,
  -1, 35);

var t_2011_MJ = new Array(
  17000, 10,
  69000, 15,
  139350, 25,
  212300, 28,
  379150, 33,
  -1, 35);

var t_2011_MS = new Array(
  8500, 10,
  34500, 15,
  69675, 25,
  106150, 28,
  189575, 33,
  -1, 35);

var t_2011_HH = new Array(
  12150, 10,
  46250, 15,
  119400, 25,
  193350, 28,
  379150, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2012_S = new Array(
  8700, 10,
  35350, 15,
  85650, 25,
  178650, 28,
  388350, 33,
  -1, 35);

var t_2012_MJ = new Array(
  17400, 10,
  70700, 15,
  142700, 25,
  217450, 28,
  388350, 33,
  -1, 35);

var t_2012_MS = new Array(
  8700, 10,
  35350, 15,
  71350, 25,
  108725, 28,
  194175, 33,
  -1, 35);

var t_2012_HH = new Array(
  12400, 10,
  47350, 15,
  122300, 25,
  198050, 28,
  388350, 33,
  -1, 35);

// -----------------------------------------------------------

var t_2013_S = new Array(
  8925, 10,
  36250, 15,
  87850, 25,
  183250, 28,
  398350, 33,
  400000, 35,
  -1, 39.6);

var t_2013_MJ = new Array(
  17850, 10,
  72500, 15,
  146400, 25,
  223050, 28,
  398350, 33,
  450000, 35,
  -1, 39.6);

var t_2013_MS = new Array(
  8925, 10,
  36250, 15,
  73200, 25,
  111525, 28,
  199175, 33,
  225000, 35,
  -1, 39.6);

var t_2013_HH = new Array(
  12750, 10,
  48600, 15,
  125450, 25,
  203150, 28,
  398350, 33,
  425000, 35,
  -1, 39.6);

// -----------------------------------------------------------

var t_2014_S = new Array(
  9075, 10,
  36900, 15,
  89350, 25,
  186350, 28,
  405100, 33,
  406750, 35,
  -1, 39.6);

var t_2014_MJ = new Array(
  18150, 10,
  73800, 15,
  148850, 25,
  226850, 28,
  405100, 33,
  457600, 35,
  -1, 39.6);

var t_2014_MS = new Array(
  9075, 10,
  36900, 15,
  74425, 25,
  113425, 28,
  202550, 33,
  228800, 35,
  -1, 39.6);

var t_2014_HH = new Array(
  12950, 10,
  49400, 15,
  127550, 25,
  206600, 28,
  405100, 33,
  432200, 35,
  -1, 39.6);

// -----------------------------------------------------------

var t_2015_S = new Array(
  9225, 10,
  37450, 15,
  90750, 25,
  189300, 28,
  411500, 33,
  413200, 35,
  -1, 39.6);

var t_2015_MJ = new Array(
  18450, 10,
  74900, 15,
  151200, 25,
  230450, 28,
  411500, 33,
  464850, 35,
  -1, 39.6);

var t_2015_MS = new Array(
  9225, 10,
  37450, 15,
  75600, 25,
  115225, 28,
  205750, 33,
  232425, 35,
  -1, 39.6);

var t_2015_HH = new Array(
  13150, 10,
  50200, 15,
  129600, 25,
  209850, 28,
  411500, 33,
  439000, 35,
  -1, 39.6);

// -----------------------------------------------------------

var t_2016_S = new Array(
  9275, 10,
  37650, 15,
  91150, 25,
  190150, 28,
  413350, 33,
  415050, 35,
  -1, 39.6);

var t_2016_MJ = new Array(
  18550, 10,
  75300, 15,
  151900, 25,
  231450, 28,
  413350, 33,
  466950, 35,
  -1, 39.6);

var t_2016_MS = new Array(
  9275, 10,
  37650, 15,
  75950, 25,
  115725, 28,
  206675, 33,
  233475, 35,
  -1, 39.6);

var t_2016_HH = new Array(
  13250, 10,
  50400, 15,
  130150, 25,
  210800, 28,
  413350, 33,
  441000, 35,
  -1, 39.6);

// -----------------------------------------------------------

var t_2017_S = new Array(
  9325, 10,
  37950, 15,
  91900, 25,
  191650, 28,
  416700, 33,
  418400, 35,
  -1, 39.6);

var t_2017_MJ = new Array(
  18650, 10,
  75900, 15,
  153100, 25,
  233350, 28,
  416700, 33,
  470700, 35,
  -1, 39.6);

var t_2017_MS = new Array(
  9325, 10,
  37950, 15,
  76550, 25,
  116675, 28,
  208350, 33,
  235350, 35,
  -1, 39.6);

var t_2017_HH = new Array(
  13350, 10,
  50800, 15,
  131200, 25,
  212500, 28,
  416700, 33,
  444550, 35,
  -1, 39.6);

// -----------------------------------------------------------
/* pre Dec 20 2017
var t_2018_S = new Array(
	  9525, 10, 
	 38700, 15, 
	 93700, 25, 
	195450, 28, 
	424950, 33, 
	426700, 35, 
	    -1, 39.6); 

var t_2018_MJ = new Array(
	 19050, 10, 
	 77400, 15, 
	156150, 25, 
	237950, 28, 
	424950, 33, 
	480050, 35,
	    -1, 39.6); 

var t_2018_MS = new Array(
	  9525, 10, 
	 38700, 15, 
	 78075, 25, 
	118975, 28, 
	212475, 33, 
	240025, 35, 
	    -1, 39.6); 

var t_2018_HH = new Array(
	 13600, 10, 
	 51850, 15, 
	133850, 25, 
	216700, 28, 
	424950, 33, 
	453350, 35, 
	    -1, 39.6); 
*/
// -----------------------------------------------------------

// http://money.cnn.com/2017/12/15/news/economy/gop-tax-plan-details/index.html
// http://money.cnn.com/interactive/news/new-2018-tax-brackets/index.html
// https://taxfoundation.org/conference-report-tax-cuts-and-jobs-act/

var t_2018_S = new Array(
  9525, 10,
  38700, 12,
  82500, 22,
  157500, 24,
  200000, 32,
  500000, 35,
  -1, 37);

var t_2018_MJ = new Array(
  19050, 10,
  77400, 12,
  165000, 22,
  315000, 24,
  400000, 32,
  600000, 35,
  -1, 37);

var t_2018_MS = new Array(
  9525, 10,
  38700, 12,
  82500, 22,
  157500, 24,
  200000, 32,
  300000, 35,
  -1, 37);

var t_2018_HH = new Array(
  13600, 10,
  51800, 12,
  82500, 22,
  157500, 24,
  200000, 32,
  500000, 35,
  -1, 37);

// -----------------------------------------------------------

var t_2019_S = new Array(
  9700, 10,
  39475, 12,
  84200, 22,
  160725, 24,
  204100, 32,
  510300, 35,
  -1, 37);

var t_2019_MJ = new Array(
  19400, 10,
  78950, 12,
  168400, 22,
  321450, 24,
  408200, 32,
  612350, 35,
  -1, 37);

var t_2019_MS = new Array(
  9700, 10,
  39475, 12,
  84200, 22,
  160725, 24,
  204100, 32,
  306175, 35,
  -1, 37);

var t_2019_HH = new Array(
  13850, 10,
  52850, 12,
  84200, 22,
  160700, 24,
  204100, 32,
  510300, 35,
  -1, 37);

// -----------------------------------------------------------

var t_2020_S = new Array(
  9875, 10,
  40125, 12,
  85525, 22,
  163300, 24,
  207350, 32,
  518400, 35,
  -1, 37);

var t_2020_MJ = new Array(
  19750, 10,
  80250, 12,
  171050, 22,
  326600, 24,
  414700, 32,
  622050, 35,
  -1, 37);

var t_2020_MS = new Array(
  9875, 10,
  40125, 12,
  85525, 22,
  163300, 24,
  207350, 32,
  311025, 35,
  -1, 37);

var t_2020_HH = new Array(
  14100, 10,
  53700, 12,
  85500, 22,
  163300, 24,
  207350, 32,
  518400, 35,
  -1, 37);

// -----------------------------------------------------------


var y0Taxes = 2000;
var yMaxTaxes = 2020;
var yDisplayTaxes = 2019;

function getTax(yyyy, status, income) {
  var tax = 0;

  var ary = eval("t_" + yyyy + "_" + status);
  var i, b_L, b_U;
  for (i = 0; i < ary.length / 2; i++) {
    amt_L = (i == 0 ? 0 : ary[(i - 1) * 2]);
    if (income <= amt_L) break;

    amt_U = ary[i * 2];
    if (amt_U == -1 || amt_U > income) amt_U = income;

    tax += ((amt_U - amt_L) * ary[i * 2 + 1] / 100);
  }
  return tax;
}


//-->

function getCtrlVal(ctrl) {
  if (ctrl.value != null) {
    return ctrl.value;
  } else if (ctrl.selectedIndex != null) {
    if (ctrl.selectedIndex >= 0)
      return ctrl.options[ctrl.selectedIndex].value;
  } else if (ctrl.length != null) {
    var i;
    for (i = 0; i < ctrl.length; i++) {
      if (ctrl[i].checked) return ctrl[i].value;
    }
  }
  return null;
}

function getHrefParam(paramName) {
  var i = location.href.indexOf("?" + paramName + "=");
  if (i < 0) i = location.href.indexOf("&" + paramName + "=");
  if (i < 0) return null;

  var j = location.href.indexOf("&", i + 1);
  if (j < 0) j = location.href.length;
  return unescape(location.href.substring(i + 2 + paramName.length, j));
}


function zeroBlanks(formname) {
  var i, ctrl;
  for (i = 0; i < formname.elements.length; i++) {
    ctrl = formname.elements[i];
    if (ctrl.type == "text") {
      if (makeNumeric(ctrl.value) == "")
        ctrl.value = "0";
    }
  }
}

function filterChars(s, charList) {
  var s1 = "" + s; // force s1 to be a string data type
  var i;
  for (i = 0; i < s1.length;) {
    if (charList.indexOf(s1.charAt(i)) < 0)
      s1 = s1.substring(0, i) + s1.substring(i + 1, s1.length);
    else
      i++;
  }
  return s1;
}

function makeNumeric(s) {
  return filterChars(s, "1234567890.-");
}

function numval(val, digits, minval, maxval) {
  val = makeNumeric(val);
  if (val == "" || isNaN(val)) val = 0;
  val = parseFloat(val);
  if (digits != null) {
    var dec = Math.pow(10, digits);
    val = (Math.round(val * dec)) / dec;
  }
  if (minval != null && val < minval) val = minval;
  if (maxval != null && val > maxval) val = maxval;
  return parseFloat(val);
}

function formatNumber(val, digits, minval, maxval) {
  var sval = "" + numval(val, digits, minval, maxval);
  var i;
  var iDecpt = sval.indexOf(".");
  if (iDecpt < 0) iDecpt = sval.length;
  if (digits != null && digits > 0) {
    if (iDecpt == sval.length)
      sval = sval + ".";
    var places = sval.length - sval.indexOf(".") - 1;
    for (i = 0; i < digits - places; i++)
      sval = sval + "0";
  }
  var firstNumchar = 0;
  if (sval.charAt(0) == "-") firstNumchar = 1;
  for (i = iDecpt - 3; i > firstNumchar; i -= 3)
    sval = sval.substring(0, i) + "," + sval.substring(i);

  return sval;
}

function presentValue(fv, r, y) {
  return fv / Math.pow(1 + r, y);
}

function futureValue(p, r, y) {
  return p * Math.pow(1 + r, y);
}

function returnRate(pv, fv, y) {
  return Math.pow(fv / pv, 1.0 / y) - 1.0;
}

function geomSeries(z, m, n) {
  var amt;
  if (z == 1.0) amt = n + 1;
  else amt = (Math.pow(z, n + 1) - 1) / (z - 1);
  if (m >= 1) amt -= geomSeries(z, 0, m - 1);
  return amt;
}

function basicInvestment(p, r, y, c) {
  if (c == null) c = 0;

  return futureValue(p, r, y) + c * geomSeries(1 + r, 1, y);
}

function annuityPayout(p, r, y) {
  return futureValue(p, r, y - 1) / geomSeries(1 + r, 0, y - 1);
}

function mortgagePayment(p, r, y) {
  return futureValue(p, r, y) / geomSeries(1 + r, 0, y - 1);
}

function randN(m, s) {
  return s * Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random()) + m;
}

function logNmean(m, s) {
  return Math.log(m) - (Math.pow(logNsigma(m, s), 2) / 2);
}

function logNsigma(m, s) {
  return Math.sqrt(Math.log(Math.pow(s / m, 2) + 1));
}

function gmEst(r_am, s) {
  return Math.sqrt(Math.pow(1 + r_am, 2) - Math.pow(s, 2)) - 1;
}

function numOrder(n, m) {
  return n - m;
}

///
