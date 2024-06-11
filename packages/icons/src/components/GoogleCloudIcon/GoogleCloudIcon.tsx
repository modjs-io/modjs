import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModGoogleCloudIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const GoogleCloudIcon = ({ height, width, ...props }: IconProps) => {
    return (
        <ModGoogleCloudIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="600 -200 2700 2700"
            height={height}
            width={width}
        >
            <title>Google Cloud Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M2890.000000,2162.000000 
      C1926.666870,2162.000000 964.333679,2162.000000 2.000387,2162.000000 
      C2.000258,1442.000244 2.000258,722.000610 2.000129,2.000677 
      C1281.999390,2.000452 2561.998779,2.000452 3841.998535,2.000226 
      C3841.999023,721.999329 3841.999023,1441.998657 3841.999512,2161.999023 
      C3525.000000,2162.000000 3208.000000,2162.000000 2890.000000,2162.000000 
      M1948.014648,28.203915 
      C1942.640015,28.325768 1937.265259,28.447622 1930.044312,28.410156 
      C1920.091675,28.488800 1910.139038,28.567442 1898.352783,28.281668 
      C1890.148682,28.758463 1881.944458,29.235258 1872.530518,29.704279 
      C1871.726562,29.762369 1870.922607,29.820459 1869.597412,29.591934 
      C1868.969604,29.468197 1868.412720,29.605665 1866.653198,29.946142 
      C1865.803955,29.969795 1864.954590,29.993448 1862.991821,29.879559 
      C1862.628052,29.966381 1862.264282,30.053204 1860.225586,30.171658 
      C1856.880737,30.330193 1853.535889,30.488729 1848.564819,30.362120 
      C1844.341309,30.911438 1840.117920,31.460756 1834.125488,32.023079 
      C1807.689331,35.224686 1781.129761,37.639584 1754.838623,41.765339 
      C1646.338867,58.791859 1543.351440,92.809120 1445.851196,143.410706 
      C1332.524170,202.226135 1233.844971,279.712524 1149.477783,375.517395 
      C1055.267822,482.499420 986.606323,603.975403 942.707397,739.516479 
      C938.325928,753.044617 934.362183,766.708008 930.010742,780.942749 
      C932.944397,781.472839 935.460144,781.927368 937.445801,783.585449 
      C935.889709,784.824646 934.399048,786.158142 932.768127,787.289490 
      C868.778809,831.678955 812.918457,884.636597 765.716980,946.582397 
      C698.664856,1034.579712 653.535339,1132.769775 630.221558,1240.909668 
      C625.675659,1261.995361 621.551453,1283.210083 618.348206,1304.532959 
      C616.279907,1318.301147 616.243591,1332.374756 614.738647,1347.607422 
      C614.659546,1350.451050 614.580444,1353.294800 614.416687,1357.994385 
      C614.444214,1383.281250 614.471680,1408.568115 614.198486,1435.350464 
      C614.572632,1438.756226 614.946716,1442.162109 615.599487,1447.161133 
      C615.660095,1448.237671 615.720642,1449.314209 615.451721,1451.352661 
      C615.628662,1453.377930 615.805603,1455.403198 616.241882,1458.892456 
      C616.327759,1459.879761 616.413635,1460.867065 616.212097,1463.494751 
      C616.791626,1468.189575 617.371094,1472.884521 618.238281,1478.989868 
      C618.326355,1479.945190 618.414429,1480.900391 618.254517,1483.365845 
      C618.820923,1486.772583 619.387329,1490.179199 620.239563,1494.992310 
      C620.328552,1495.944702 620.417603,1496.897095 620.459045,1498.628296 
      C620.527466,1499.171509 620.763794,1499.627930 621.440430,1501.430420 
      C621.509949,1502.400269 621.579407,1503.369995 621.389404,1505.529053 
      C622.239624,1510.209961 623.089844,1514.890747 624.193359,1521.241577 
      C625.273926,1526.372559 626.393494,1531.495850 627.428467,1536.635986 
      C632.399597,1561.326660 638.050842,1585.828979 645.442932,1609.945679 
      C659.530151,1655.904541 677.540588,1700.231079 700.100586,1742.655396 
      C739.039185,1815.879883 788.635254,1881.038696 849.698608,1937.207886 
      C866.800781,1952.939209 885.337097,1967.111328 903.835022,1983.262329 
      C906.885803,1986.271240 909.586487,1989.781006 913.048950,1992.200806 
      C926.700439,2001.741333 940.379089,2011.272949 954.429626,2020.207153 
      C1020.533630,2062.240234 1091.911499,2091.971680 1167.734741,2111.348389 
      C1229.795288,2127.208008 1293.060303,2133.522949 1356.845093,2133.685547 
      C1543.498657,2134.161865 1730.154175,2133.849121 1918.147949,2135.143066 
      C1923.084473,2135.539307 1928.020996,2136.280029 1932.957642,2136.281738 
      C2116.572754,2136.340576 2300.187988,2136.387939 2483.803223,2136.249756 
      C2503.771729,2136.234863 2523.752930,2135.372070 2543.704590,2134.413574 
      C2583.066650,2132.523438 2621.916016,2126.502686 2660.186279,2117.417725 
      C2803.643799,2083.362549 2926.747803,2013.455322 3028.896240,1906.907349 
      C3085.681885,1847.675781 3131.017334,1780.687378 3165.316162,1706.192871 
      C3206.219727,1617.353516 3228.555420,1524.043823 3233.251465,1424.789551 
      C3233.349854,1415.949707 3233.447998,1407.109985 3233.616943,1396.722656 
      C3233.578613,1395.174194 3233.540283,1393.625732 3233.813477,1390.269897 
      C3233.392578,1382.198730 3232.971680,1374.127441 3232.398682,1364.210815 
      C3232.100098,1356.811157 3231.801514,1349.411377 3231.736816,1340.665405 
      C3231.342041,1338.458740 3230.947266,1336.252197 3230.360352,1332.279785 
      C3229.733398,1326.321777 3229.133545,1320.360596 3228.475830,1314.406006 
      C3217.963379,1219.232422 3189.832031,1129.469116 3144.378906,1045.308594 
      C3089.148682,943.044250 3013.920166,858.290649 2918.630859,791.588806 
      C2911.113525,786.326904 2906.603027,780.320557 2904.103760,771.352478 
      C2883.726318,698.231873 2854.983154,628.433533 2818.662109,561.822876 
      C2769.193359,471.099121 2707.357178,389.670074 2633.278076,317.593323 
      C2623.494629,308.074219 2613.249512,299.030273 2603.406982,289.569824 
      C2600.569824,286.842865 2598.057373,285.992676 2594.472412,287.288055 
      C2592.587158,284.688995 2591.112549,281.620514 2588.756592,279.559418 
      C2522.940674,221.984161 2450.829834,173.697983 2372.519775,134.879471 
      C2253.216309,75.740540 2127.033691,41.350937 1992.818237,30.799047 
      C1989.768066,30.647556 1986.717896,30.496067 1982.159302,30.297861 
      C1980.148926,30.212162 1978.138428,30.126465 1975.015991,29.537189 
      C1972.645752,29.586607 1970.275635,29.636026 1966.346924,29.673317 
      C1964.270874,29.609560 1962.194824,29.545805 1958.758545,28.874981 
      C1955.769775,28.702982 1952.781128,28.530981 1948.014648,28.203915 z"
            />
            <path
                fill="#4285F4"
                opacity="1.000000"
                stroke="none"
                d="M2594.842529,288.513458 
      C2598.057373,285.992676 2600.569824,286.842865 2603.406982,289.569824 
      C2613.249512,299.030273 2623.494629,308.074219 2633.278076,317.593323 
      C2707.357178,389.670074 2769.193359,471.099121 2818.662109,561.822876 
      C2854.983154,628.433533 2883.726318,698.231873 2904.103760,771.352478 
      C2906.603027,780.320557 2911.113525,786.326904 2918.630859,791.588806 
      C3013.920166,858.290649 3089.148682,943.044250 3144.378906,1045.308594 
      C3189.832031,1129.469116 3217.963379,1219.232422 3228.475830,1314.406006 
      C3229.133545,1320.360596 3229.733398,1326.321777 3230.305176,1333.840820 
      C3230.667969,1337.605103 3231.085449,1339.808350 3231.502930,1342.011719 
      C3231.801514,1349.411377 3232.100098,1356.811157 3232.312500,1366.030273 
      C3232.651611,1375.925537 3233.076660,1384.001343 3233.501953,1392.077271 
      C3233.540283,1393.625732 3233.578613,1395.174194 3233.291260,1398.215332 
      C3232.831299,1408.583374 3232.696777,1417.458862 3232.562500,1426.334351 
      C3228.555420,1524.043823 3206.219727,1617.353516 3165.316162,1706.192871 
      C3131.017334,1780.687378 3085.681885,1847.675781 3028.896240,1906.907349 
      C2926.747803,2013.455322 2803.643799,2083.362549 2660.186279,2117.417725 
      C2621.916016,2126.502686 2583.066650,2132.523438 2543.704590,2134.413574 
      C2523.752930,2135.372070 2503.771729,2136.234863 2483.803223,2136.249756 
      C2300.187988,2136.387939 2116.572754,2136.340576 1932.957642,2136.281738 
      C1928.020996,2136.280029 1923.084473,2135.539307 1917.822266,2133.628418 
      C1917.678101,2129.135986 1918.017822,2126.157715 1918.018555,2123.179688 
      C1918.043579,2015.099976 1918.005493,1907.020264 1918.051880,1798.940552 
      C1918.068604,1760.035767 1918.277954,1721.130981 1919.307617,1682.182373 
      C1925.547485,1682.092529 1930.879028,1682.006714 1936.210571,1682.006470 
      C2117.839355,1681.999512 2299.468262,1682.012695 2481.096924,1681.940918 
      C2486.351807,1681.938843 2491.605957,1681.049316 2497.733398,1680.545532 
      C2534.337402,1679.843262 2568.502197,1671.829834 2601.074951,1657.479248 
      C2661.286621,1630.951660 2707.159912,1588.514771 2738.539307,1530.730957 
      C2753.881592,1502.478638 2764.342773,1472.424561 2768.587891,1439.869629 
      C2769.048096,1438.347656 2769.182129,1437.275269 2769.448242,1435.489746 
      C2769.642822,1433.811279 2769.705078,1432.846313 2769.980469,1431.539185 
      C2770.137451,1430.143188 2770.080566,1429.089233 2770.123535,1427.420654 
      C2770.235840,1425.976440 2770.248779,1425.146729 2770.626953,1423.716675 
      C2771.098145,1420.825439 2771.204346,1418.534668 2771.430664,1415.410400 
      C2771.619873,1412.332397 2771.688965,1410.088013 2771.990234,1407.113770 
      C2772.087402,1399.657471 2771.952148,1392.930786 2771.816162,1385.337646 
      C2771.649414,1381.590576 2771.483398,1378.709839 2771.442871,1375.191284 
      C2771.181641,1372.897827 2770.794922,1371.242310 2770.389648,1368.722412 
      C2766.890381,1326.693359 2753.977783,1288.512939 2733.143799,1253.048218 
      C2702.751221,1201.312134 2660.075439,1162.857056 2605.572021,1137.827759 
      C2575.408691,1123.975952 2543.784180,1115.218628 2509.844238,1113.221558 
      C2507.066406,1112.831421 2504.870361,1112.810913 2501.749268,1112.652100 
      C2496.699951,1112.167480 2492.575439,1111.821411 2487.561035,1111.400635 
      C2487.561035,1090.183350 2487.561035,1070.102051 2487.692383,1049.533325 
      C2487.775879,1048.712769 2487.728516,1048.379639 2487.754883,1047.240967 
      C2487.779785,1044.280273 2487.730469,1042.125488 2487.753418,1039.472900 
      C2487.738037,1038.651245 2487.650879,1038.327515 2487.598389,1037.106201 
      C2487.527344,1031.410767 2487.421875,1026.613037 2487.457031,1021.057983 
      C2487.134277,1016.777405 2486.671631,1013.254211 2486.243164,1008.825684 
      C2484.881348,993.365662 2484.002441,978.739258 2481.999268,964.268433 
      C2473.299072,901.417542 2454.072021,841.797668 2425.216797,785.373901 
      C2396.025146,728.292236 2357.986328,677.653076 2311.534912,633.460205 
      C2301.729004,624.131287 2292.536377,613.857849 2280.081299,606.960449 
      C2282.413818,603.167297 2284.433594,599.743225 2287.154053,597.019470 
      C2386.979492,497.082092 2486.872803,397.212646 2586.736084,297.313263 
      C2589.553223,294.495026 2592.145508,291.451813 2594.842529,288.513458 z"
            />
            <path
                fill="#FBBC05"
                opacity="1.000000"
                stroke="none"
                d="M621.648865,1504.339844 
      C621.579407,1503.369995 621.509949,1502.400269 621.400879,1500.311646 
      C621.317749,1498.591553 621.032898,1498.143677 620.506653,1497.849487 
      C620.417603,1496.897095 620.328552,1495.944702 620.252563,1493.745972 
      C619.677795,1488.951660 619.090149,1485.403687 618.502502,1481.855713 
      C618.414429,1480.900391 618.326355,1479.945190 618.254700,1477.698364 
      C617.680603,1471.556030 617.090088,1466.705200 616.499573,1461.854370 
      C616.413635,1460.867065 616.327759,1459.879761 616.281372,1457.687500 
      C616.141052,1454.451904 615.961182,1452.421265 615.781250,1450.390747 
      C615.720642,1449.314209 615.660095,1448.237671 615.632568,1445.640869 
      C615.276794,1440.698853 614.888000,1437.276855 614.499146,1433.854980 
      C614.471680,1408.568115 614.444214,1383.281250 614.848694,1356.465332 
      C615.286011,1352.061279 615.291260,1349.186401 615.296570,1346.311401 
      C616.243591,1332.374756 616.279907,1318.301147 618.348206,1304.532959 
      C621.551453,1283.210083 625.675659,1261.995361 630.221558,1240.909668 
      C653.535339,1132.769775 698.664856,1034.579712 765.716980,946.582397 
      C812.918457,884.636597 868.778809,831.678955 932.768127,787.289490 
      C934.399048,786.158142 935.889709,784.824646 938.410156,782.806885 
      C943.098633,779.867188 946.931274,777.872192 950.530640,775.520264 
      C1017.424133,731.808716 1089.653320,700.118835 1166.902344,679.926453 
      C1213.699829,667.693848 1261.270020,660.313538 1309.622559,657.462891 
      C1353.291382,654.888367 1396.757446,656.039551 1440.102905,661.606506 
      C1458.573486,663.978699 1476.954956,667.045654 1496.183350,669.992920 
      C1499.571533,670.842407 1502.133667,671.590210 1504.738159,672.135254 
      C1561.034790,683.917542 1615.232666,702.109619 1667.146362,726.747498 
      C1771.753174,776.393188 1860.077515,846.705811 1932.112061,937.405762 
      C1934.319946,940.185547 1936.196045,943.228882 1938.075439,945.931519 
      C1919.900269,967.252258 1615.280151,1270.356567 1608.265991,1274.069092 
      C1606.755981,1271.129150 1605.238281,1268.195557 1603.739380,1265.252319 
      C1585.819824,1230.066284 1561.927124,1199.540161 1531.409058,1174.497314 
      C1483.949829,1135.552734 1429.723999,1113.189575 1367.425781,1109.112915 
      C1354.542114,1109.015381 1342.377441,1109.314575 1329.299561,1109.647461 
      C1292.313721,1111.708496 1258.145630,1121.232544 1225.870605,1137.091309 
      C1155.236572,1171.798218 1106.969238,1226.759033 1080.613525,1300.736694 
      C1072.717041,1322.901245 1067.104614,1345.803955 1065.807861,1369.562500 
      C1065.430786,1370.073242 1065.529541,1370.393677 1065.908447,1371.620117 
      C1065.687866,1376.936768 1065.515015,1381.190186 1065.103760,1385.945801 
      C1064.919800,1390.133911 1064.974243,1393.819824 1065.163330,1398.499878 
      C1065.504150,1404.201050 1065.710327,1408.908203 1065.776367,1413.618896 
      C1065.636230,1413.622559 1065.544678,1414.176514 1065.544678,1414.176514 
      C1065.544678,1414.176514 1065.936157,1414.458130 1065.955078,1415.424072 
      C1067.962769,1439.213379 1072.240601,1461.553101 1079.833618,1483.223511 
      C1105.541870,1556.595337 1152.439331,1611.561890 1221.847290,1647.061157 
      C1225.341919,1648.848633 1228.499878,1651.294189 1231.143311,1653.815063 
      C1229.511475,1655.117676 1228.533447,1656.020874 1227.592896,1656.961548 
      C1121.221313,1763.319092 1014.850830,1869.677856 908.498047,1976.054199 
      C906.627136,1977.925659 904.971558,1980.012329 903.215515,1981.998657 
      C885.337097,1967.111328 866.800781,1952.939209 849.698608,1937.207886 
      C788.635254,1881.038696 739.039185,1815.879883 700.100586,1742.655396 
      C677.540588,1700.231079 659.530151,1655.904541 645.442932,1609.945679 
      C638.050842,1585.828979 632.399597,1561.326660 627.428467,1536.635986 
      C626.393494,1531.495850 625.273926,1526.372559 624.206787,1519.838257 
      C623.363159,1513.736572 622.506042,1509.038208 621.648865,1504.339844 z"
            />
            <path
                fill="#EA4335"
                opacity="1.000000"
                stroke="none"
                d="M1495.376831,669.796814 
      C1476.954956,667.045654 1458.573486,663.978699 1440.102905,661.606506 
      C1396.757446,656.039551 1353.291382,654.888367 1309.622559,657.462891 
      C1261.270020,660.313538 1213.699829,667.693848 1166.902344,679.926453 
      C1089.653320,700.118835 1017.424133,731.808716 950.530640,775.520264 
      C946.931274,777.872192 943.098633,779.867188 938.675293,782.205139 
      C935.460144,781.927368 932.944397,781.472839 930.010742,780.942749 
      C934.362183,766.708008 938.325928,753.044617 942.707397,739.516479 
      C986.606323,603.975403 1055.267822,482.499420 1149.477783,375.517395 
      C1233.844971,279.712524 1332.524170,202.226135 1445.851196,143.410706 
      C1543.351440,92.809120 1646.338867,58.791859 1754.838623,41.765339 
      C1781.129761,37.639584 1807.689331,35.224686 1835.625366,32.175934 
      C1841.480469,31.768284 1845.835815,31.207777 1850.191040,30.647270 
      C1853.535889,30.488729 1856.880737,30.330193 1861.328125,30.292221 
      C1863.053223,30.538033 1863.611450,30.406136 1864.105347,30.017101 
      C1864.954590,29.993448 1865.803955,29.969795 1867.843262,30.023186 
      C1869.395020,30.026331 1869.756836,29.952435 1870.118652,29.878544 
      C1870.922607,29.820459 1871.726562,29.762369 1874.060303,29.866943 
      C1883.788818,29.568434 1891.987671,29.107262 1900.186401,28.646088 
      C1910.139038,28.567442 1920.091675,28.488800 1931.710327,28.793270 
      C1938.961182,29.371212 1944.545898,29.566042 1950.963379,29.821720 
      C1954.570190,29.749063 1957.344482,29.615559 1960.118774,29.482052 
      C1962.194824,29.545805 1964.270874,29.609560 1967.926270,29.897758 
      C1971.713135,30.095055 1973.920654,30.067911 1976.128052,30.040768 
      C1978.138428,30.126465 1980.148926,30.212162 1983.598145,30.666422 
      C1988.096924,31.164715 1991.156738,31.294449 1994.216553,31.424183 
      C2127.033691,41.350937 2253.216309,75.740540 2372.519775,134.879471 
      C2450.829834,173.697983 2522.940674,221.984161 2588.756592,279.559418 
      C2591.112549,281.620514 2592.587158,284.688995 2594.657471,287.900757 
      C2592.145508,291.451813 2589.553223,294.495026 2586.736084,297.313263 
      C2486.872803,397.212646 2386.979492,497.082092 2287.154053,597.019470 
      C2284.433594,599.743225 2282.413818,603.167297 2279.362793,607.080566 
      C2275.578125,606.100403 2272.250488,604.624451 2269.454590,602.461304 
      C2214.449951,559.904785 2153.866211,528.084167 2087.364258,507.625336 
      C2043.320435,494.075653 1998.365356,485.631439 1951.499756,483.364990 
      C1943.785645,482.875336 1936.834961,482.696289 1928.991211,482.454285 
      C1922.136230,482.452759 1916.174561,482.514191 1909.325439,482.398987 
      C1902.160278,482.682037 1895.882324,483.141663 1888.711182,483.623871 
      C1839.972046,485.787872 1793.322021,494.676178 1747.796875,509.280365 
      C1654.973633,539.057434 1574.751099,589.017395 1507.733398,660.002319 
      C1504.162598,663.784546 1499.520264,666.555237 1495.376831,669.796814 z"
            />
            <path
                fill="#34A853"
                opacity="1.000000"
                stroke="none"
                d="M903.525269,1982.630493 
      C904.971558,1980.012329 906.627136,1977.925659 908.498047,1976.054199 
      C1014.850830,1869.677856 1121.221313,1763.319092 1227.592896,1656.961548 
      C1228.533447,1656.020874 1229.511475,1655.117676 1231.776733,1653.982178 
      C1234.973511,1654.361084 1236.932373,1654.797852 1238.747559,1655.571655 
      C1274.240967,1670.705322 1311.351196,1677.890137 1350.640625,1678.554443 
      C1356.385132,1679.226807 1361.343994,1679.949097 1366.302979,1679.950562 
      C1550.159668,1680.006958 1734.016357,1679.996704 1917.903931,1680.012207 
      C1917.934814,1680.028687 1917.952637,1679.961182 1918.025391,1680.535156 
      C1918.198608,1681.481567 1918.299072,1681.853882 1918.399414,1682.226196 
      C1918.277954,1721.130981 1918.068604,1760.035767 1918.051880,1798.940552 
      C1918.005493,1907.020264 1918.043579,2015.099976 1918.018555,2123.179688 
      C1918.017822,2126.157715 1917.678101,2129.135986 1917.152710,2132.979736 
      C1730.154175,2133.849121 1543.498657,2134.161865 1356.845093,2133.685547 
      C1293.060303,2133.522949 1229.795288,2127.208008 1167.734741,2111.348389 
      C1091.911499,2091.971680 1020.533630,2062.240234 954.429626,2020.207153 
      C940.379089,2011.272949 926.700439,2001.741333 913.048950,1992.200806 
      C909.586487,1989.781006 906.885803,1986.271240 903.525269,1982.630493 z"
            />
            <path
                fill="#72808D"
                opacity="1.000000"
                stroke="none"
                d="M3232.906982,1425.562012 
      C3232.696777,1417.458862 3232.831299,1408.583374 3233.255859,1398.989014 
      C3233.447998,1407.109985 3233.349854,1415.949707 3232.906982,1425.562012 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1899.269531,28.463879 
      C1891.987671,29.107262 1883.788818,29.568434 1874.665283,29.870831 
      C1881.944458,29.235258 1890.148682,28.758463 1899.269531,28.463879 z"
            />
            <path
                fill="#72808D"
                opacity="1.000000"
                stroke="none"
                d="M3233.657715,1391.173584 
      C3233.076660,1384.001343 3232.651611,1375.925537 3232.388672,1366.952881 
      C3232.971680,1374.127441 3233.392578,1382.198730 3233.657715,1391.173584 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M621.519165,1504.934448 
      C622.506042,1509.038208 623.363159,1513.736572 624.080200,1519.003296 
      C623.089844,1514.890747 622.239624,1510.209961 621.519165,1504.934448 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M616.355835,1462.674561 
      C617.090088,1466.705200 617.680603,1471.556030 618.110840,1476.993164 
      C617.371094,1472.884521 616.791626,1468.189575 616.355835,1462.674561 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1950.130737,29.760870 
      C1944.545898,29.566042 1938.961182,29.371212 1932.633545,28.872929 
      C1937.265259,28.447622 1942.640015,28.325768 1948.987305,28.632088 
      C1949.959839,29.060259 1950.130737,29.760868 1950.130737,29.760870 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1849.377930,30.504696 
      C1845.835815,31.207777 1841.480469,31.768284 1836.509766,32.169434 
      C1840.117920,31.460756 1844.341309,30.911438 1849.377930,30.504696 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M618.378540,1482.610840 
      C619.090149,1485.403687 619.677795,1488.951660 620.109619,1493.042725 
      C619.387329,1490.179199 618.820923,1486.772583 618.378540,1482.610840 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M615.616455,1450.871704 
      C615.961182,1452.421265 616.141052,1454.451904 616.151733,1456.955444 
      C615.805603,1455.403198 615.628662,1453.377930 615.616455,1450.871704 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M614.348816,1434.602783 
      C614.888000,1437.276855 615.276794,1440.698853 615.493286,1444.844238 
      C614.946716,1442.162109 614.572632,1438.756226 614.348816,1434.602783 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M615.017578,1346.959473 
      C615.291260,1349.186401 615.286011,1352.061279 614.890991,1355.537354 
      C614.580444,1353.294800 614.659546,1350.451050 615.017578,1346.959473 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M1993.517334,31.111614 
      C1991.156738,31.294449 1988.096924,31.164715 1984.352417,30.689779 
      C1986.717896,30.496067 1989.768066,30.647556 1993.517334,31.111614 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M1950.963379,29.821718 
      C1950.130737,29.760868 1949.959839,29.060259 1949.876099,28.709620 
      C1952.781128,28.530981 1955.769775,28.702982 1959.438721,29.178518 
      C1957.344482,29.615559 1954.570190,29.749063 1950.963379,29.821718 z"
            />
            <path
                fill="#72808D"
                opacity="1.000000"
                stroke="none"
                d="M3231.619873,1341.338623 
      C3231.085449,1339.808350 3230.667969,1337.605103 3230.401367,1334.723633 
      C3230.947266,1336.252197 3231.342041,1338.458740 3231.619873,1341.338623 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M1975.572021,29.788979 
      C1973.920654,30.067911 1971.713135,30.095055 1968.705566,29.903822 
      C1970.275635,29.636026 1972.645752,29.586607 1975.572021,29.788979 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M620.482849,1498.238892 
      C621.032898,1498.143677 621.317749,1498.591553 621.264709,1499.595215 
      C620.763794,1499.627930 620.527466,1499.171509 620.482849,1498.238892 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1863.548584,29.948330 
      C1863.611450,30.406136 1863.053223,30.538033 1862.165527,30.276405 
      C1862.264282,30.053204 1862.628052,29.966381 1863.548584,29.948330 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1869.858032,29.735237 
      C1869.756836,29.952435 1869.395020,30.026331 1868.479980,30.052284 
      C1868.412720,29.605665 1868.969604,29.468197 1869.858032,29.735237 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M1349.855103,1678.268066 
      C1311.351196,1677.890137 1274.240967,1670.705322 1238.747559,1655.571655 
      C1236.932373,1654.797852 1234.973511,1654.361084 1232.447998,1653.600342 
      C1228.499878,1651.294189 1225.341919,1648.848633 1221.847290,1647.061157 
      C1152.439331,1611.561890 1105.541870,1556.595337 1079.833618,1483.223511 
      C1072.240601,1461.553101 1067.962769,1439.213379 1066.063477,1415.302490 
      C1066.152832,1414.215210 1065.916382,1413.615234 1065.916504,1413.615234 
      C1065.710327,1408.908203 1065.504150,1404.201050 1065.355713,1397.753296 
      C1065.389526,1392.489502 1065.365967,1388.966553 1065.342285,1385.443481 
      C1065.515015,1381.190186 1065.687866,1376.936768 1066.023560,1371.469482 
      C1066.186523,1370.255493 1065.955688,1369.529663 1065.955688,1369.529663 
      C1067.104614,1345.803955 1072.717041,1322.901245 1080.613525,1300.736694 
      C1106.969238,1226.759033 1155.236572,1171.798218 1225.870605,1137.091309 
      C1258.145630,1121.232544 1292.313721,1111.708496 1330.191406,1109.787964 
      C1344.046021,1109.766357 1356.095459,1109.637939 1368.144897,1109.509644 
      C1429.723999,1113.189575 1483.949829,1135.552734 1531.409058,1174.497314 
      C1561.927124,1199.540161 1585.819824,1230.066284 1603.739380,1265.252319 
      C1605.238281,1268.195557 1606.755981,1271.129150 1608.265991,1274.069092 
      C1615.280151,1270.356567 1919.900269,967.252258 1938.075439,945.931519 
      C1936.196045,943.228882 1934.319946,940.185547 1932.112061,937.405762 
      C1860.077515,846.705811 1771.753174,776.393188 1667.146362,726.747498 
      C1615.232666,702.109619 1561.034790,683.917542 1504.738159,672.135254 
      C1502.133667,671.590210 1499.571533,670.842407 1496.183350,669.992920 
      C1499.520264,666.555237 1504.162598,663.784546 1507.733398,660.002319 
      C1574.751099,589.017395 1654.973633,539.057434 1747.796875,509.280365 
      C1793.322021,494.676178 1839.972046,485.787872 1889.613770,483.781494 
      C1897.677368,483.469574 1903.945068,483.022583 1910.212891,482.575623 
      C1916.174561,482.514191 1922.136230,482.452759 1929.746338,482.762817 
      C1938.351074,483.314758 1945.307129,483.495178 1952.263306,483.675629 
      C1998.365356,485.631439 2043.320435,494.075653 2087.364258,507.625336 
      C2153.866211,528.084167 2214.449951,559.904785 2269.454590,602.461304 
      C2272.250488,604.624451 2275.578125,606.100403 2279.376709,607.776184 
      C2292.536377,613.857849 2301.729004,624.131287 2311.534912,633.460205 
      C2357.986328,677.653076 2396.025146,728.292236 2425.216797,785.373901 
      C2454.072021,841.797668 2473.299072,901.417542 2481.999268,964.268433 
      C2484.002441,978.739258 2484.881348,993.365662 2486.136719,1009.608948 
      C2486.436279,1014.803406 2486.876465,1018.309387 2487.316650,1021.815369 
      C2487.421875,1026.613037 2487.527344,1031.410767 2487.484863,1037.345459 
      C2487.229248,1039.032227 2487.344238,1039.528320 2487.681152,1039.970581 
      C2487.730469,1042.125488 2487.779785,1044.280273 2487.612793,1047.463135 
      C2487.227295,1049.026978 2487.282227,1049.536743 2487.561035,1050.020630 
      C2487.561035,1070.102051 2487.561035,1090.183350 2487.561035,1111.400635 
      C2492.575439,1111.821411 2496.699951,1112.167480 2502.310547,1112.929932 
      C2506.006348,1113.427979 2508.216309,1113.509644 2510.426025,1113.591309 
      C2543.784180,1115.218628 2575.408691,1123.975952 2605.572021,1137.827759 
      C2660.075439,1162.857056 2702.751221,1201.312134 2733.143799,1253.048218 
      C2753.977783,1288.512939 2766.890381,1326.693359 2770.319336,1369.364258 
      C2770.617432,1372.523560 2770.967529,1374.176392 2771.317627,1375.829224 
      C2771.483398,1378.709839 2771.649414,1381.590576 2771.553223,1386.057373 
      C2771.446533,1394.376831 2771.602295,1401.110107 2771.758057,1407.843506 
      C2771.688965,1410.088013 2771.619873,1412.332397 2771.144531,1416.024414 
      C2770.579346,1419.753662 2770.420410,1422.035400 2770.261719,1424.317139 
      C2770.248779,1425.146729 2770.235840,1425.976440 2769.923584,1427.772705 
      C2769.671875,1429.786621 2769.719482,1430.833984 2769.767090,1431.881226 
      C2769.705078,1432.846313 2769.642822,1433.811279 2769.179932,1435.954590 
      C2768.606934,1438.194946 2768.434570,1439.257080 2768.262207,1440.319214 
      C2764.342773,1472.424561 2753.881592,1502.478638 2738.539307,1530.730957 
      C2707.159912,1588.514771 2661.286621,1630.951660 2601.074951,1657.479248 
      C2568.502197,1671.829834 2534.337402,1679.843262 2496.729980,1680.412231 
      C2488.856934,1680.205444 2482.860352,1680.015625 2476.864014,1680.014648 
      C2290.560303,1679.985474 2104.256348,1679.974731 1917.952637,1679.961182 
      C1917.952637,1679.961182 1917.934814,1680.028687 1917.956909,1679.589600 
      C1917.979004,1679.150513 1918.036987,1678.300903 1917.297729,1677.904907 
      C1912.291382,1677.007080 1908.024292,1676.067993 1903.757080,1676.066284 
      C1723.797485,1675.993042 1543.838013,1675.990601 1363.878418,1676.075317 
      C1359.285156,1676.077515 1354.692505,1677.152710 1350.033936,1677.860596 
      C1349.968262,1677.993774 1349.855103,1678.268066 1349.855103,1678.268066 z"
            />
            <path
                fill="#72808D"
                opacity="1.000000"
                stroke="none"
                d="M1918.025391,1680.535156 
      C2104.256348,1679.974731 2290.560303,1679.985474 2476.864014,1680.014648 
      C2482.860352,1680.015625 2488.856934,1680.205444 2495.856934,1680.440430 
      C2491.605957,1681.049316 2486.351807,1681.938843 2481.096924,1681.940918 
      C2299.468262,1682.012695 2117.839355,1681.999512 1936.210571,1682.006470 
      C1930.879028,1682.006714 1925.547485,1682.092529 1919.307617,1682.182373 
      C1918.299072,1681.853882 1918.198608,1681.481567 1918.025391,1680.535156 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2771.990234,1407.113770 
      C2771.602295,1401.110107 2771.446533,1394.376831 2771.553955,1386.923828 
      C2771.952148,1392.930786 2772.087402,1399.657471 2771.990234,1407.113770 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2487.457031,1021.057983 
      C2486.876465,1018.309387 2486.436279,1014.803406 2486.102539,1010.514160 
      C2486.671631,1013.254211 2487.134277,1016.777405 2487.457031,1021.057983 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2770.626709,1423.716675 
      C2770.420410,1422.035400 2770.579346,1419.753662 2771.024414,1416.857910 
      C2771.204346,1418.534668 2771.098145,1420.825439 2770.626709,1423.716675 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2769.980469,1431.539185 
      C2769.719482,1430.833984 2769.671875,1429.786621 2769.824219,1428.387329 
      C2770.080566,1429.089233 2770.137451,1430.143188 2769.980469,1431.539185 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2509.844238,1113.221558 
      C2508.216309,1113.509644 2506.006348,1113.427979 2503.235352,1113.068481 
      C2504.870361,1112.810913 2507.066406,1112.831421 2509.844238,1113.221558 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2771.443115,1375.191284 
      C2770.967529,1374.176392 2770.617432,1372.523560 2770.337891,1370.228760 
      C2770.794922,1371.242310 2771.181641,1372.897827 2771.443115,1375.191284 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2768.587891,1439.869629 
      C2768.434570,1439.257080 2768.606934,1438.194946 2769.047852,1436.667969 
      C2769.182129,1437.275269 2769.048096,1438.347656 2768.587891,1439.869629 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2487.692383,1049.533325 
      C2487.282227,1049.536743 2487.227295,1049.026978 2487.538818,1048.268921 
      C2487.728516,1048.379639 2487.775879,1048.712769 2487.692383,1049.533325 z"
            />
            <path
                fill="#457576"
                opacity="1.000000"
                stroke="none"
                d="M2487.753418,1039.472900 
      C2487.344238,1039.528320 2487.229248,1039.032227 2487.450195,1038.243164 
      C2487.650879,1038.327515 2487.738037,1038.651245 2487.753418,1039.472900 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M1367.425781,1109.112915 
      C1356.095459,1109.637939 1344.046021,1109.766357 1331.104736,1109.754150 
      C1342.377441,1109.314575 1354.542114,1109.015381 1367.425781,1109.112915 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1065.103760,1385.945801 
      C1065.365967,1388.966553 1065.389526,1392.489502 1065.220947,1396.759155 
      C1064.974243,1393.819824 1064.919800,1390.133911 1065.103760,1385.945801 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1065.776367,1413.618896 
      C1065.916382,1413.615234 1066.152832,1414.215210 1066.044434,1414.336670 
      C1065.936157,1414.458130 1065.544678,1414.176514 1065.544678,1414.176514 
      C1065.544678,1414.176514 1065.636230,1413.622559 1065.776367,1413.618896 z"
            />
            <path
                fill="#B05B47"
                opacity="1.000000"
                stroke="none"
                d="M1065.807861,1369.562500 
      C1065.955688,1369.529663 1066.186523,1370.255493 1066.071411,1370.406128 
      C1065.529541,1370.393677 1065.430786,1370.073242 1065.807861,1369.562500 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M1951.499756,483.364990 
      C1945.307129,483.495178 1938.351074,483.314758 1930.639648,482.825806 
      C1936.834961,482.696289 1943.785645,482.875336 1951.499756,483.364990 z"
            />
            <path
                fill="#8B664E"
                opacity="1.000000"
                stroke="none"
                d="M1909.325439,482.398987 
      C1903.945068,483.022583 1897.677368,483.469574 1890.507080,483.758942 
      C1895.882324,483.141663 1902.160278,482.682037 1909.325439,482.398987 z"
            />
            <path
                fill="#4F9F5D"
                opacity="1.000000"
                stroke="none"
                d="M1918.036987,1678.300903 
      C1918.036987,1678.300903 1917.979004,1679.150513 1917.926025,1679.572998 
      C1734.016357,1679.996704 1550.159668,1680.006958 1366.302979,1679.950562 
      C1361.343994,1679.949097 1356.385132,1679.226807 1350.640625,1678.554443 
      C1349.855103,1678.268066 1349.968262,1677.993774 1350.957764,1677.923706 
      C1357.604248,1677.902466 1363.261230,1677.993652 1368.918213,1677.993896 
      C1546.302612,1678.001343 1723.687134,1677.997314 1901.071533,1678.012695 
      C1906.726685,1678.013184 1912.381836,1678.200562 1918.036987,1678.300903 z"
            />
            <path
                fill="#5D7557"
                opacity="1.000000"
                stroke="none"
                d="M1917.297729,1677.904907 
      C1912.381836,1678.200562 1906.726685,1678.013184 1901.071533,1678.012695 
      C1723.687134,1677.997314 1546.302612,1678.001343 1368.918213,1677.993896 
      C1363.261230,1677.993652 1357.604248,1677.902466 1351.023438,1677.790527 
      C1354.692505,1677.152710 1359.285156,1676.077515 1363.878418,1676.075317 
      C1543.838013,1675.990601 1723.797485,1675.993042 1903.757080,1676.066284 
      C1908.024292,1676.067993 1912.291382,1677.007080 1917.297729,1677.904907 z"
            />
        </ModGoogleCloudIcon>
    )
}

export default withLayout(GoogleCloudIcon)
