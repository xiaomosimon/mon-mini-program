// create 2021.01
const miniCountry = [
  { id: "AF", sortId:"AFH", countryCN: "阿富汗", countryEN: "Afghanistan",},
  { id: "AM", sortId:"YMNY", countryCN: "亚美尼亚", countryEN: "Armenia"},
  { id: "AZ", sortId:"ASBJ", countryCN: "阿塞拜疆", countryEN: "Azerbaijan"},
  { id: "BH", sortId:"BL", countryCN: "巴林", countryEN: "Bahrain"},
  { id: "BD", sortId:"MJLG", countryCN: "孟加拉国", countryEN: "Bangladesh"},
  { id: "BT", sortId:"BD", countryCN: "不丹", countryEN: "Bhutan"},
  { id: "BN", sortId:"WL", countryCN: "文莱", countryEN: "Brunei Darussalam"},
  { id: "KH", sortId:"JPZ", countryCN: "柬埔寨", countryEN: "Cambodia"},
  { id: "CN", sortId:"ZG", countryCN: "中国", countryEN: "China"},
  { id: "CY", sortId:"SPLS", countryCN: "塞浦路斯", countryEN: "Cyprus"},
  { id: "GE", sortId:"GLJY", countryCN: "格鲁吉亚", countryEN: "Georgia"},
  { id: "IN", sortId:"YD", countryCN: "印度", countryEN: "India"},
  { id: "ID", sortId:"YDNXY", countryCN: "印度尼西亚", countryEN: "Indonesia"},
  { id: "IR", sortId:"YL", countryCN: "伊朗", countryEN: "Iran, Islamic Republic of"},
  { id: "IQ", sortId:"YLK", countryCN: "伊拉克", countryEN: "Iraq"},
  { id: "IL", sortId:"YSL", countryCN: "以色列", countryEN: "Israel"},
  { id: "JP", sortId:"RB", countryCN: "日本", countryEN: "Japan"},
  { id: "JO", sortId:"YD", countryCN: "约旦", countryEN: "Jordan"},
  { id: "KZ", sortId:"HSKST", countryCN: "哈萨克斯坦", countryEN: "Kazakhstan"},
  { id: "KP", sortId:"CX", countryCN: "朝鲜", countryEN: "Korea (North)"},
  { id: "KR", sortId:"HG", countryCN: "韩国", countryEN: "Korea (South)"},
  { id: "KW", sortId:"KWT", countryCN: "科威特", countryEN: "Kuwait"},
  { id: "KG", sortId:"JEJSST", countryCN: "吉尔吉斯斯坦", countryEN: "Kyrgyzstan"},
  { id: "LA", sortId:"LW", countryCN: "老挝", countryEN: "Lao PDR"},
  { id: "LB", sortId:"LBN", countryCN: "黎巴嫩", countryEN: "Lebanon"},
  { id: "MY", sortId:"MLXY", countryCN: "马来西亚", countryEN: "Malaysia"},
  { id: "MV", sortId:"MEDF", countryCN: "马尔代夫", countryEN: "Maldives"},
  { id: "MN", sortId:"MG", countryCN: "蒙古", countryEN: "Mongolia"},
  { id: "MM", sortId:"MD", countryCN: "缅甸", countryEN: "Myanmar"},
  { id: "NP", sortId:"NBE", countryCN: "尼泊尔", countryEN: "Nepal"},
  { id: "OM", sortId:"AM", countryCN: "阿曼", countryEN: "Oman"},
  { id: "PK", sortId:"BJST", countryCN: "巴基斯坦", countryEN: "Pakistan"},
  { id: "PS", sortId:"BLST", countryCN: "巴勒斯坦", countryEN: "Palestinian Territory"},
  { id: "PH", sortId:"FLB", countryCN: "菲律宾", countryEN: "Philippines"},
  { id: "QA", sortId:"KTE", countryCN: "卡塔尔", countryEN: "Qatar"},
  { id: "SA", sortId:"STALB", countryCN: "沙特阿拉伯", countryEN: "Saudi Arabia"},
  { id: "SG", sortId:"XJP", countryCN: "新加坡", countryEN: "Singapore"},
  { id: "LK", sortId:"SLLK", countryCN: "斯里兰卡", countryEN: "Sri Lanka"},
  { id: "SY", sortId:"XLY", countryCN: "叙利亚", countryEN: "Syrian Arab Republic (Syria)"},
  { id: "TJ", sortId:"TJKST", countryCN: "塔吉克斯坦", countryEN: "Tajikistan"},
  { id: "TH", sortId:"TG", countryCN: "泰国", countryEN: "Thailand"},
  { id: "TL", sortId:"DDF", countryCN: "东帝汶", countryEN: "Timor-Leste"},
  { id: "TR", sortId:"TEQ", countryCN: "土耳其", countryEN: "Turkey"},
  { id: "TM", sortId:"TKMST", countryCN: "土库曼斯坦", countryEN: "Turkmenistan"},
  { id: "AE", sortId:"ALBLHQZG", countryCN: "阿拉伯联合酋长国", countryEN: "United Arab Emirates"},
  { id: "UZ", sortId:"WZBKST", countryCN: "乌兹别克斯坦", countryEN: "Uzbekistan"},
  { id: "VN", sortId:"YN", countryCN: "越南", countryEN: "Viet Nam"},
  { id: "YE", sortId:"YM", countryCN: "也门", countryEN: "Yemen"},
  { id: "AL", sortId:"AEBNY", countryCN: "阿尔巴尼亚", countryEN: "Albania"},
  { id: "AD", sortId:"ADE", countryCN: "安道尔", countryEN: "Andorra"},
  { id: "AT", sortId:"ADL", countryCN: "奥地利", countryEN: "Austria"},
  { id: "BY", sortId:"BELS", countryCN: "白俄罗斯", countryEN: "Belarus"},
  { id: "BE", sortId:"BLS", countryCN: "比利时", countryEN: "Belgium"},
  { id: "BA", sortId:"BSNYAHSGWN", countryCN: "波斯尼亚和黑塞哥维那", countryEN: "Bosnia and Herzegovina"},
  { id: "BG", sortId:"BJLY", countryCN: "保加利亚", countryEN: "Bulgaria"},
  { id: "HR", sortId:"KLDY", countryCN: "克罗地亚", countryEN: "Croatia"},
  { id: "CZ", sortId:"JK", countryCN: "捷克", countryEN: "Czech Republic"},
  { id: "DK", sortId:"DM", countryCN: "丹麦", countryEN: "Denmark"},
  { id: "EE", sortId:"ASNY", countryCN: "爱沙尼亚", countryEN: "Estonia"},
  { id: "FI", sortId:"FL", countryCN: "芬兰", countryEN: "Finland"},
  { id: "FR", sortId:"FG", countryCN: "法国", countryEN: "France"},
  { id: "DE", sortId:"DG", countryCN: "德国", countryEN: "Germany"},
  { id: "GR", sortId:"XL", countryCN: "希腊", countryEN: "Greece"},
  { id: "VA", sortId:"FDG", countryCN: "梵蒂冈", countryEN: "Holy See (Vatican City State)"},
  { id: "HU", sortId:"XYL", countryCN: "匈牙利", countryEN: "Hungary"},
  { id: "IS", sortId:"BD", countryCN: "冰岛", countryEN: "Iceland"},
  { id: "IE", sortId:"AEL", countryCN: "爱尔兰", countryEN: "Ireland"},
  { id: "IT", sortId:"YDL", countryCN: "意大利", countryEN: "Italy"},
  { id: "LV", sortId:"LTWY", countryCN: "拉脱维亚", countryEN: "Latvia"},
  { id: "LI", sortId:"LZDSD", countryCN: "列支敦士登", countryEN: "Liechtenstein"},
  { id: "LT", sortId:"LTW", countryCN: "立陶宛", countryEN: "Lithuania"},
  { id: "LU", sortId:"LSB", countryCN: "卢森堡", countryEN: "Luxembourg"},
  { id: "MK", sortId:"BMQD", countryCN: "北马其顿", countryEN: "Macedonia, Republic of"},
  { id: "MT", sortId:"MET", countryCN: "马耳他", countryEN: "Malta"},
  { id: "MD", sortId:"MEDW", countryCN: "摩尔多瓦", countryEN: "Moldova"},
  { id: "MC", sortId:"MNG", countryCN: "摩纳哥", countryEN: "Monaco"},
  { id: "ME", sortId:"HS", countryCN: "黑山", countryEN: "Montenegro"},
  { id: "NL", sortId:"HL", countryCN: "荷兰", countryEN: "Netherlands"},
  { id: "NO", sortId:"NW", countryCN: "挪威", countryEN: "Norway"},
  { id: "PL", sortId:"BL", countryCN: "波兰", countryEN: "Poland"},
  { id: "PT", sortId:"PTY", countryCN: "葡萄牙", countryEN: "Portugal"},
  { id: "RO", sortId:"LMNY", countryCN: "罗马尼亚", countryEN: "Romania"},
  { id: "RU", sortId:"ELS", countryCN: "俄罗斯", countryEN: "Russian Federation"},
  { id: "SM", sortId:"SMLN", countryCN: "圣马力诺", countryEN: "San Marino"},
  { id: "RS", sortId:"SEWY", countryCN: "塞尔维亚", countryEN: "Serbia"},
  { id: "SK", sortId:"SLFK", countryCN: "斯洛伐克", countryEN: "Slovakia"},
  { id: "SI", sortId:"SLWNY", countryCN: "斯洛文尼亚", countryEN: "Slovenia"},
  { id: "ES", sortId:"XBY", countryCN: "西班牙", countryEN: "Spain"},
  { id: "SE", sortId:"RD", countryCN: "瑞典", countryEN: "Sweden"},
  { id: "CH", sortId:"RS", countryCN: "瑞士", countryEN: "Switzerland"},
  { id: "UA", sortId:"WKL", countryCN: "乌克兰", countryEN: "Ukraine"},
  { id: "GB", sortId:"YG", countryCN: "英国", countryEN: "United Kingdom"},
  { id: "DZ", sortId:"AEJLY", countryCN: "阿尔及利亚", countryEN: "Algeria"},
  { id: "AO", sortId:"AGL", countryCN: "安哥拉", countryEN: "Angola"},
  { id: "BJ", sortId:"BN", countryCN: "贝宁", countryEN: "Benin"},
  { id: "BW", sortId:"BCWN", countryCN: "博茨瓦纳", countryEN: "Botswana"},
  { id: "BF", sortId:"BJNGS", countryCN: "布基纳法索", countryEN: "Burkina Faso"},
  { id: "BI", sortId:"BLD", countryCN: "布隆迪", countryEN: "Burundi"},
  { id: "CM", sortId:"KML", countryCN: "喀麦隆", countryEN: "Cameroon"},
  { id: "CV", sortId:"FDJ", countryCN: "佛得角", countryEN: "Cape Verde"},
  { id: "CF", sortId:"ZFGHG", countryCN: "中非共和国", countryEN: "Central African Republic"},
  { id: "TD", sortId:"ZD", countryCN: "乍得", countryEN: "Chad"},
  { id: "KM", sortId:"KML", countryCN: "科摩罗", countryEN: "Comoros"},
  { id: "CG", sortId:"GGGHG", countryCN: "刚果共和国", countryEN: "Congo (Brazzaville)"},
  { id: "CD", sortId:"GGMZGHG", countryCN: "刚果民主共和国", countryEN: "Congo, (Kinshasa)"},
  { id: "CI", sortId:"KTDW", countryCN: "科特迪瓦", countryEN: "Côte d'Ivoire"},
  { id: "DJ", sortId:"JBT", countryCN: "吉布提", countryEN: "Djibouti"},
  { id: "EG", sortId:"AJ", countryCN: "埃及", countryEN: "Egypt"},
  { id: "GQ", sortId:"CDJNW", countryCN: "赤道几内亚", countryEN: "Equatorial Guinea"},
  { id: "ER", sortId:"ELTLY", countryCN: "厄立特里亚", countryEN: "Eritrea"},
  { id: "ET", sortId:"ASEBY", countryCN: "埃塞俄比亚", countryEN: "Ethiopia"},
  { id: "GA", sortId:"JP", countryCN: "加蓬", countryEN: "Gabon"},
  { id: "GM", sortId:"GBY", countryCN: "冈比亚", countryEN: "Gambia"},
  { id: "GH", sortId:"JN", countryCN: "加纳", countryEN: "Ghana"},
  { id: "GN", sortId:"JNY", countryCN: "几内亚", countryEN: "Guinea"},
  { id: "GW", sortId:"JNYBS", countryCN: "几内亚比绍", countryEN: "Guinea-Bissau"},
  { id: "KE", sortId:"KNY", countryCN: "肯尼亚", countryEN: "Kenya"},
  { id: "LS", sortId:"LST", countryCN: "莱索托", countryEN: "Lesotho"},
  { id: "LR", sortId:"LBLY", countryCN: "利比里亚", countryEN: "Liberia"},
  { id: "LY", sortId:"LBY", countryCN: "利比亚", countryEN: "Libya"},
  { id: "MG", sortId:"MDJSJ", countryCN: "马达加斯加", countryEN: "Madagascar"},
  { id: "MW", sortId:"MLW", countryCN: "马拉维", countryEN: "Malawi"},
  { id: "ML", sortId:"ML", countryCN: "马里", countryEN: "Mali"},
  { id: "MR", sortId:"MLTNY", countryCN: "毛里塔尼亚", countryEN: "Mauritania"},
  { id: "MU", sortId:"MLQS", countryCN: "毛里求斯", countryEN: "Mauritius"},
  { id: "MA", sortId:"MLG", countryCN: "摩洛哥", countryEN: "Morocco"},
  { id: "MZ", sortId:"MSBK", countryCN: "莫桑比克", countryEN: "Mozambique"},
  { id: "NA", sortId:"NMBY", countryCN: "纳米比亚", countryEN: "Namibia"},
  { id: "NE", sortId:"NRE", countryCN: "尼日尔", countryEN: "Niger"},
  { id: "NG", sortId:"NRLY", countryCN: "尼日利亚", countryEN: "Nigeria"},
  { id: "RW", sortId:"LWD", countryCN: "卢旺达", countryEN: "Rwanda"},
  { id: "ST", sortId:"SDMHPLXB", countryCN: "圣多美和普林西比", countryEN: "Sao Tome and Principe"},
  { id: "SN", sortId:"SNJE", countryCN: "塞内加尔", countryEN: "Senegal"},
  { id: "SC", sortId:"SSE", countryCN: "塞舌尔", countryEN: "Seychelles"},
  { id: "SL", sortId:"SLLA", countryCN: "塞拉利昂", countryEN: "Sierra Leone"},
  { id: "SO", sortId:"SML", countryCN: "索马里", countryEN: "Somalia"},
  { id: "ZA", sortId:"NF", countryCN: "南非", countryEN: "South Africa"},
  { id: "SS", sortId:"NSD", countryCN: "南苏丹", countryEN: "South Sudan"},
  { id: "SD", sortId:"SD", countryCN: "苏丹", countryEN: "Sudan"},
  { id: "SZ", sortId:"SWSL", countryCN: "斯威士兰", countryEN: "Swaziland"},
  { id: "TZ", sortId:"TSNY", countryCN: "坦桑尼亚", countryEN: "Tanzania, United Republic of"},
  { id: "TG", sortId:"DG", countryCN: "多哥", countryEN: "Togo"},
  { id: "TN", sortId:"TNS", countryCN: "突尼斯", countryEN: "Tunisia"},
  { id: "UG", sortId:"WGD", countryCN: "乌干达", countryEN: "Uganda"},
  { id: "ZM", sortId:"ZBY", countryCN: "赞比亚", countryEN: "Zambia"},
  { id: "ZW", sortId:"JBBW", countryCN: "津巴布韦", countryEN: "Zimbabwe"},
  { id: "AU", sortId:"ADLY", countryCN: "澳大利亚", countryEN: "Australia"},
  { id: "CK", sortId:"KKQD", countryCN: "库克群岛", countryEN: "Cook Islands"},
  { id: "FJ", sortId:"FJ", countryCN: "斐济", countryEN: "Fiji"},
  { id: "KI", sortId:"JLBS", countryCN: "基里巴斯", countryEN: "Kiribati"},
  { id: "MH", sortId:"MSEQD", countryCN: "马绍尔群岛", countryEN: "Marshall Islands"},
  { id: "FM", sortId:"MKLNXYLB", countryCN: "密克罗尼西亚联邦", countryEN: "Micronesia, Federated States of"},
  { id: "NR", sortId:"NL", countryCN: "瑙鲁", countryEN: "Nauru"},
  { id: "NZ", sortId:"XXL", countryCN: "新西兰", countryEN: "New Zealand"},
  { id: "NU", sortId:"NA", countryCN: "纽埃", countryEN: "Niue"},
  { id: "PW", sortId:"PL", countryCN: "帕劳", countryEN: "Palau"},
  { id: "WS", sortId:"SMY", countryCN: "萨摩亚", countryEN: "Samoa"},
  { id: "SB", sortId:"SLMQD", countryCN: "所罗门群岛", countryEN: "Solomon Islands"},
  { id: "TO", sortId:"TJ", countryCN: "汤加", countryEN: "Tonga"},
  { id: "TV", sortId:"TWL", countryCN: "图瓦卢", countryEN: "Tuvalu"},
  { id: "VU", sortId:"WNAT", countryCN: "瓦努阿图", countryEN: "Vanuatu"},
  { id: "PG", sortId:"BBYXJNY", countryCN: "巴布亚新几内亚", countryEN: "Papua New Guinea"},
  { id: "AG", sortId:"ATGHBBD", countryCN: "安提瓜和巴布达", countryEN: "Antigua and Barbuda"},
  { id: "BS", sortId:"BHM", countryCN: "巴哈马", countryEN: "Bahamas"},
  { id: "BB", sortId:"BBDS", countryCN: "巴巴多斯", countryEN: "Barbados"},
  { id: "BZ", sortId:"BLZ", countryCN: "伯利兹", countryEN: "Belize"},
  { id: "CA", sortId:"JND", countryCN: "加拿大", countryEN: "Canada"},
  { id: "CR", sortId:"GSDLJ", countryCN: "哥斯达黎加", countryEN: "Costa Rica"},
  { id: "CU", sortId:"GB", countryCN: "古巴", countryEN: "Cuba"},
  { id: "DM", sortId:"MDNK", countryCN: "多米尼克", countryEN: "The Commonwealth of Dominica"},
  { id: "DO", sortId:"MDNJGHG", countryCN: "多米尼加共和国", countryEN: "Dominican Republic"},
  { id: "SV", sortId:"WEWD", countryCN: "萨尔瓦多", countryEN: "El Salvador"},
  { id: "GD", sortId:"GLND", countryCN: "格林纳达", countryEN: "Grenada"},
  { id: "GT", sortId:"WDML", countryCN: "危地马拉", countryEN: "Guatemala"},
  { id: "HT", sortId:"HD", countryCN: "海地", countryEN: "Haiti"},
  { id: "HN", sortId:"HDLS", countryCN: "洪都拉斯", countryEN: "Honduras"},
  { id: "JM", sortId:"YMJ", countryCN: "牙买加", countryEN: "Jamaica"},
  { id: "MX", sortId:"MXG", countryCN: "墨西哥", countryEN: "Mexico"},
  { id: "NI", sortId:"NJLG", countryCN: "尼加拉瓜", countryEN: "Nicaragua"},
  { id: "PA", sortId:"BNM", countryCN: "巴拿马", countryEN: "Panama"},
  { id: "KN", sortId:"SJCHNWS", countryCN: "圣基茨和尼维斯", countryEN: "Saint Kitts and Nevis"},
  { id: "LC", sortId:"SLXY", countryCN: "圣卢西亚", countryEN: "Saint Lucia"},
  { id: "VC", sortId:"SWSTHGLNDS", countryCN: "圣文森特和格林纳丁斯", countryEN: "Saint Vincent and Grenadines"},
  { id: "TT", sortId:"TLNDHDBG", countryCN: "特立尼达和多巴哥", countryEN: "Trinidad and Tobago"},
  { id: "US", sortId:"MG", countryCN: "美国", countryEN: "United States of America"},
  { id: "AR", sortId:"AGT", countryCN: "阿根廷", countryEN: "Argentina"},
  { id: "BO", sortId:"BLWY", countryCN: "玻利维亚", countryEN: "Bolivia"},
  { id: "BR", sortId:"BX", countryCN: "巴西", countryEN: "Brazil"},
  { id: "CL", sortId:"ZL", countryCN: "智利", countryEN: "Chile"},
  { id: "CO", sortId:"GLBY", countryCN: "哥伦比亚", countryEN: "Colombia"},
  { id: "EC", sortId:"EGDE", countryCN: "厄瓜多尔", countryEN: "Ecuador"},
  { id: "GY", sortId:"GYN", countryCN: "圭亚那", countryEN: "Guyana"},
  { id: "PY", sortId:"BLG", countryCN: "巴拉圭", countryEN: "Paraguay"},
  { id: "PE", sortId:"ML", countryCN: "秘鲁", countryEN: "Peru"},
  { id: "SR", sortId:"SLN", countryCN: "苏里南", countryEN: "Suriname"},
  { id: "UY", sortId:"WLG", countryCN: "乌拉圭", countryEN: "Uruguay"},
  { id: "VE", sortId:"WNRL", countryCN: "委内瑞拉", countryEN: "Venezuela (Bolivarian Republic)"}
]

export default miniCountry