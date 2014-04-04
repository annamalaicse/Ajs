 var app =angular.module("formConverter", [])
  function CurncyCtrl($scope, $http) {
	
	$scope.countries = [
{val:"AED", name: "United Arab Emirates Dirham (AED)"},
{val:"AFN", name: "Afghan Afghani (AFN)"},
{val:"ALL", name: "Albanian Lek (ALL)"},
{val:"AMD", name: "Armenian Dram (AMD)"},
{val:"ANG", name: "Netherlands Antillean Guilder (ANG)"},
{val:"AOA", name: "Angolan Kwanza (AOA)"},
{val:"ARS", name: "Argentine Peso (ARS)"},
{val:"AUD", name: "Australian Dollar (A$)"},
{val:"AWG", name: "Aruban Florin (AWG)"},
{val:"AZN", name: "Azerbaijani Manat (AZN)"},
{val:"BAM", name: "Bosnia-Herzegovina Convertible Mark (BAM)"},
{val:"BBD", name: "Barbadian Dollar (BBD)"},
{val:"BDT", name: "Bangladeshi Taka (BDT)"},
{val:"BGN", name: "Bulgarian Lev (BGN)"},
{val:"BHD", name: "Bahraini Dinar (BHD)"},
{val:"BIF", name: "Burundian Franc (BIF)"},
{val:"BMD", name: "Bermudan Dollar (BMD)"},
{val:"BND", name: "Brunei Dollar (BND)"},
{val:"BOB", name: "Bolivian Boliviano (BOB)"},
{val:"BRL", name: "Brazilian Real (R$)"},
{val:"BSD", name: "Bahamian Dollar (BSD)"},
{val:"BTN", name: "Bhutanese Ngultrum (BTN)"},
{val:"BWP", name: "Botswanan Pula (BWP)"},
{val:"BYR", name: "Belarusian Ruble (BYR)"},
{val:"BZD", name: "Belize Dollar (BZD)"},
{val:"CAD", name: "Canadian Dollar (CA$)"},
{val:"CDF", name: "Congolese Franc (CDF)"},
{val:"CHF", name: "Swiss Franc (CHF)"},
{val:"CLF", name: "Chilean Unit of Account (UF) (CLF)"},
{val:"CLP", name: "Chilean Peso (CLP)"},
{val:"CNH", name: "CNH (CNH)"},
{val:"CNY", name: "Chinese Yuan (CN¥)"},
{val:"COP", name: "Colombian Peso (COP)"},
{val:"CRC", name: "Costa Rican Colón (CRC)"},
{val:"CUP", name: "Cuban Peso (CUP)"},
{val:"CVE", name: "Cape Verdean Escudo (CVE)"},
{val:"CZK", name: "Czech Republic Koruna (CZK)"},
{val:"DEM", name: "German Mark (DEM)"},
{val:"DJF", name: "Djiboutian Franc (DJF)"},
{val:"DKK", name: "Danish Krone (DKK)"},
{val:"DOP", name: "Dominican Peso (DOP)"},
{val:"DZD", name: "Algerian Dinar (DZD)"},
{val:"EGP", name: "Egyptian Pound (EGP)"},
{val:"ERN", name: "Eritrean Nakfa (ERN)"},
{val:"ETB", name: "Ethiopian Birr (ETB)"},
{val:"EUR", name: "Euro (€)"},
{val:"FIM", name: "Finnish Markka (FIM)"},
{val:"FJD", name: "Fijian Dollar (FJD)"},
{val:"FKP", name: "Falkland Islands Pound (FKP)"},
{val:"FRF", name: "French Franc (FRF)"},
{val:"GBP", name: "British Pound Sterling (£)"},
{val:"GEL", name: "Georgian Lari (GEL)"},
{val:"GHS", name: "Ghanaian Cedi (GHS)"},
{val:"GIP", name: "Gibraltar Pound (GIP)"},
{val:"GMD", name: "Gambian Dalasi (GMD)"},
{val:"GNF", name: "Guinean Franc (GNF)"},
{val:"GTQ", name: "Guatemalan Quetzal (GTQ)"},
{val:"GYD", name: "Guyanaese Dollar (GYD)"},
{val:"HKD", name: "Hong Kong Dollar (HK$)"},
{val:"HNL", name: "Honduran Lempira (HNL)"},
{val:"HRK", name: "Croatian Kuna (HRK)"},
{val:"HTG", name: "Haitian Gourde (HTG)"},
{val:"HUF", name: "Hungarian Forint (HUF)"},
{val:"IDR", name: "Indonesian Rupiah (IDR)"},
{val:"IEP", name: "Irish Pound (IEP)"},
{val:"ILS", name: "Israeli New Sheqel (₪)"},
{val:"INR", name: "Indian Rupee (Rs.)"},
{val:"IQD", name: "Iraqi Dinar (IQD)"},
{val:"IRR", name: "Iranian Rial (IRR)"},
{val:"ISK", name: "Icelandic Króna (ISK)"},
{val:"ITL", name: "Italian Lira (ITL)"},
{val:"JMD", name: "Jamaican Dollar (JMD)"},
{val:"JOD", name: "Jordanian Dinar (JOD)"},
{val:"JPY", name: "Japanese Yen (¥)"},
{val:"KES", name: "Kenyan Shilling (KES)"},
{val:"KGS", name: "Kyrgystani Som (KGS)"},
{val:"KHR", name: "Cambodian Riel (KHR)"},
{val:"KMF", name: "Comorian Franc (KMF)"},
{val:"KPW", name: "North Korean Won (KPW)"},
{val:"KRW", name: "South Korean Won (₩)"},
{val:"KWD", name: "Kuwaiti Dinar (KWD)"},
{val:"KYD", name: "Cayman Islands Dollar (KYD)"},
{val:"KZT", name: "Kazakhstani Tenge (KZT)"},
{val:"LAK", name: "Laotian Kip (LAK)"},
{val:"LBP", name: "Lebanese Pound (LBP)"},
{val:"LKR", name: "Sri Lankan Rupee (LKR)"},
{val:"LRD", name: "Liberian Dollar (LRD)"},
{val:"LSL", name: "Lesotho Loti (LSL)"},
{val:"LTL", name: "Lithuanian Litas (LTL)"},
{val:"LVL", name: "Latvian Lats (LVL)"},
{val:"LYD", name: "Libyan Dinar (LYD)"},
{val:"MAD", name: "Moroccan Dirham (MAD)"},
{val:"MDL", name: "Moldovan Leu (MDL)"},
{val:"MGA", name: "Malagasy Ariary (MGA)"},
{val:"MKD", name: "Macedonian Denar (MKD)"},
{val:"MMK", name: "Myanmar Kyat (MMK)"},
{val:"MNT", name: "Mongolian Tugrik (MNT)"},
{val:"MOP", name: "Macanese Pataca (MOP)"},
{val:"MRO", name: "Mauritanian Ouguiya (MRO)"},
{val:"MUR", name: "Mauritian Rupee (MUR)"},
{val:"MVR", name: "Maldivian Rufiyaa (MVR)"},
{val:"MWK", name: "Malawian Kwacha (MWK)"},
{val:"MXN", name: "Mexican Peso (MX$)"},
{val:"MYR", name: "Malaysian Ringgit (MYR)"},
{val:"MZN", name: "Mozambican Metical (MZN)"},
{val:"NAD", name: "Namibian Dollar (NAD)"},
{val:"NGN", name: "Nigerian Naira (NGN)"},
{val:"NIO", name: "Nicaraguan Córdoba (NIO)"},
{val:"NOK", name: "Norwegian Krone (NOK)"},
{val:"NPR", name: "Nepalese Rupee (NPR)"},
{val:"NZD", name: "New Zealand Dollar (NZ$)"},
{val:"OMR", name: "Omani Rial (OMR)"},
{val:"PAB", name: "Panamanian Balboa (PAB)"},
{val:"PEN", name: "Peruvian Nuevo Sol (PEN)"},
{val:"PGK", name: "Papua New Guinean Kina (PGK)"},
{val:"PHP", name: "Philippine Peso (Php)"},
{val:"PKG", name: "PKG (PKG)"},
{val:"PKR", name: "Pakistani Rupee (PKR)"},
{val:"PLN", name: "Polish Zloty (PLN)"},
{val:"PYG", name: "Paraguayan Guarani (PYG)"},
{val:"QAR", name: "Qatari Rial (QAR)"},
{val:"RON", name: "Romanian Leu (RON)"},
{val:"RSD", name: "Serbian Dinar (RSD)"},
{val:"RUB", name: "Russian Ruble (RUB)"},
{val:"RWF", name: "Rwandan Franc (RWF)"},
{val:"SAR", name: "Saudi Riyal (SAR)"},
{val:"SBD", name: "Solomon Islands Dollar (SBD)"},
{val:"SCR", name: "Seychellois Rupee (SCR)"},
{val:"SDG", name: "Sudanese Pound (SDG)"},
{val:"SEK", name: "Swedish Krona (SEK)"},
{val:"SGD", name: "Singapore Dollar (SGD)"},
{val:"SHP", name: "Saint Helena Pound (SHP)"},
{val:"SLL", name: "Sierra Leonean Leone (SLL)"},
{val:"SOS", name: "Somali Shilling (SOS)"},
{val:"SRD", name: "Surivalse Dollar (SRD)"},
{val:"STD", name: "São Tomé and Príncipe Dobra (STD)"},
{val:"SVC", name: "Salvadoran Colón (SVC)"},
{val:"SYP", name: "Syrian Pound (SYP)"},
{val:"SZL", name: "Swazi Lilangeni (SZL)"},
{val:"THB", name: "Thai Baht (฿)"},
{val:"TJS", name: "Tajikistani Somoni (TJS)"},
{val:"TMT", name: "Turkmenistani Manat (TMT)"},
{val:"TND", name: "Tunisian Dinar (TND)"},
{val:"TOP", name: "Tongan Paʻanga (TOP)"},
{val:"TRY", name: "Turkish Lira (TRY)"},
{val:"TTD", name: "Trinidad and Tobago Dollar (TTD)"},
{val:"TWD", name: "New Taiwan Dollar (NT$)"},
{val:"TZS", name: "Tanzanian Shilling (TZS)"},
{val:"UAH", name: "Ukrainian Hryvnia (UAH)"},
{val:"UGX", name: "Ugandan Shilling (UGX)"},
{val:"USD", name: "US Dollar ($)"},
{val:"UYU", name: "Uruguayan Peso (UYU)"},
{val:"UZS", name: "Uzbekistan Som (UZS)"},
{val:"VEF", name: "Venezuelan Bolívar (VEF)"},
{val:"VND", name: "Vietvalse Dong (₫)"},
{val:"VUV", name: "Vanuatu Vatu (VUV)"},
{val:"WST", name: "Samoan Tala (WST)"},
{val:"XAF", name: "CFA Franc BEAC (FCFA)"},
{val:"XCD", name: "East Caribbean Dollar (EC$)"},
{val:"XDR", name: "Special Drawing Rights (XDR)"},
{val:"XOF", name: "CFA Franc BCEAO (CFA)"},
{val:"XPF", name: "CFP Franc (CFPF)"},
{val:"YER", name: "Yemeni Rial (YER)"},
{val:"ZAR", name: "South African Rand (ZAR)"},
{val:"ZMK", name: "Zambian Kwacha (1968–2012) (ZMK)"},
{val:"ZMW", name: "Zambian Kwacha (ZMW)"},
{val:"ZWL", name: "Zimbabwean Dollar (2009) (ZWL)"},
];


     $scope.submitTheForm = function(item, event) 
     {
       
        
		$http.get('http://www.google.com/finance/converter',{
					params:{
						/*selectedCountries1:$scope.selectedCountries1,
						selectedCountries2:$scope.selectedCountries2,
						selectedamount:$scope.amount*/
						from:$scope.selectedCountries1,
						to:$scope.selectedCountries2,
						a:$scope.amount,
						
					}
				}
				).then(function(result) {
		if((result.status)== 200)
		{
			var getAmntSpanStart = getAmntSpanEnd='';
			getAmntSpanStart = result.data.split('<span class=bld>')
			$scope.message = "OOPS! Something went Wrong";
			if(getAmntSpanStart[1] != undefined)
			{
				 getAmntSpanEnd = getAmntSpanStart[1].split('</span>')
				if(getAmntSpanEnd[0] != undefined)
				{
			         
					 $scope.message =  "Today "+$scope.amount+" "+$scope.selectedCountries1+" is "+getAmntSpanEnd[0]+" "+$scope.selectedCountries2;
				}
			}
			
			/*getAmntSpanStart= $scope.result.split('<span class=bld>')
			getAmntSpanEnd = getAmntSpanStart[1].split('</span>');
			
			$scope.message = getAmntSpanEnd[0];*/
		}
		else
		{
			$scope.message = "OOPS! Something went Wrong";
		}
});
     }
 }
     
 
     
     

 
