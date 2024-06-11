import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModQtIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const QtIcon = ({ height, width, ...props }: IconProps) => {
    return (
        <ModQtIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-350 -600 3200 3200"
            height={height}
            width={width}
        >
            <title>QT Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <path
                fill="#41CD52"
                opacity="1.000000"
                stroke="none"
                d="M2208.000000,1880.000000 
	C1472.828979,1880.000000 737.657837,1880.000000 2.000000,1880.000000 
	C2.000000,1371.274658 2.000000,862.549255 2.690983,352.860931 
	C5.202494,350.497559 7.216306,349.287628 8.813836,347.667267 
	C25.881834,330.355103 42.719357,312.812897 59.936707,295.651398 
	C102.177223,253.548004 144.665466,211.693130 186.904312,169.588074 
	C240.724915,115.937950 294.409790,62.151604 348.081329,8.352299 
	C349.791595,6.637956 350.711609,4.135217 352.000000,2.000006 
	C1088.504272,2.000000 1825.008423,2.000000 2562.000000,2.000000 
	C2562.000000,510.058655 2562.000000,1018.117432 2561.655029,1526.311035 
	C2557.607422,1529.737183 2553.735596,1532.858398 2550.227051,1536.345093 
	C2482.638428,1603.514038 2415.050781,1670.684570 2347.551270,1737.943115 
	C2302.698975,1782.635498 2257.966797,1827.448486 2213.263184,1872.289429 
	C2211.103516,1874.455566 2209.736328,1877.411743 2208.000000,1880.000000 
	M546.052307,1228.940674 
	C554.650024,1249.152832 562.368408,1269.795044 572.006714,1289.498169 
	C603.730469,1354.349731 653.242737,1400.898193 719.311890,1429.894043 
	C745.315247,1441.306152 772.259644,1449.808594 799.928223,1456.123901 
	C845.624023,1466.554199 892.072021,1470.343262 938.765564,1471.485229 
	C975.470459,1472.382935 1012.034424,1470.094971 1048.357300,1464.466309 
	C1050.589111,1464.120361 1052.921143,1464.421265 1055.413208,1464.421265 
	C1102.275635,1541.781860 1149.050171,1618.999756 1195.841919,1696.207153 
	C1196.350708,1697.046753 1197.061279,1697.771362 1197.729126,1698.502563 
	C1197.935669,1698.728271 1198.305298,1698.819946 1198.615479,1698.931030 
	C1198.914429,1699.038330 1199.233032,1699.091309 1200.037964,1699.290771 
	C1254.907959,1673.947876 1310.138184,1648.438721 1366.315552,1622.491943 
	C1321.050049,1549.854248 1276.414917,1478.228149 1232.046387,1407.029663 
	C1233.297729,1405.380127 1233.615967,1404.761841 1234.107300,1404.350098 
	C1235.638916,1403.067505 1237.221680,1401.844360 1238.809448,1400.630737 
	C1293.051636,1359.176758 1332.923950,1306.716309 1358.287598,1243.405762 
	C1381.638428,1185.119385 1393.260498,1124.034546 1399.905151,1061.889282 
	C1404.301270,1020.772644 1405.928589,979.496826 1406.582153,938.153748 
	C1407.971069,850.311096 1403.748901,762.932129 1385.928833,676.636353 
	C1374.844360,622.958801 1358.718140,570.972107 1334.495972,521.568909 
	C1294.060547,439.097443 1230.278931,383.916077 1143.123535,355.274963 
	C1096.876953,340.077362 1049.310181,332.697235 1000.897034,330.052704 
	C962.574463,327.959412 924.274536,328.559967 886.034790,332.040131 
	C841.398193,336.102386 797.718994,344.579376 755.506775,359.995514 
	C684.115051,386.068115 627.464355,430.107635 588.607300,496.119019 
	C567.879822,531.331421 551.921936,568.587341 539.993774,607.588318 
	C517.926941,679.738892 508.081299,753.928589 504.464874,829.003357 
	C500.546814,910.340637 502.016785,991.576416 511.724091,1072.547241 
	C518.045288,1125.273926 528.571167,1177.057495 546.052307,1228.940674 
	M1631.901245,883.000000 
	C1631.909424,970.649231 1631.887085,1058.298462 1631.940063,1145.947754 
	C1631.963501,1184.956543 1633.227417,1223.915405 1638.048218,1262.669067 
	C1642.301758,1296.862915 1650.081055,1330.166382 1663.875488,1361.897827 
	C1669.793945,1375.511719 1678.019775,1387.514282 1688.500244,1398.008667 
	C1705.322632,1414.853271 1725.394409,1426.333496 1747.815308,1433.888306 
	C1787.452393,1447.244141 1828.326660,1451.462891 1869.943604,1450.640625 
	C1916.407959,1449.722656 1962.128174,1442.548584 2007.806396,1434.894897 
	C2015.927612,1433.534180 2024.028931,1432.054321 2033.049072,1430.469604 
	C2030.320068,1383.919312 2027.640747,1338.215942 2024.933716,1292.040283 
	C2019.943848,1292.040283 2016.306396,1291.944702 2012.675293,1292.055054 
	C1979.366455,1293.066772 1946.063599,1294.341797 1912.748535,1295.043091 
	C1898.793701,1295.336914 1884.725952,1295.301880 1870.863037,1293.899780 
	C1841.950928,1290.975220 1821.540161,1276.866699 1814.157593,1247.314819 
	C1813.431763,1244.409058 1812.556274,1241.540771 1811.816040,1238.638184 
	C1805.163330,1212.547852 1804.653809,1185.768799 1804.540405,1159.188477 
	C1804.009766,1034.880371 1804.196655,910.569092 1804.169678,786.258972 
	C1804.169189,783.724670 1804.684692,781.190308 1805.065063,777.683411 
	C1879.824341,777.683411 1953.968750,777.683411 2029.144897,777.683411 
	C2030.043091,726.908447 2032.328735,677.195862 2032.660034,626.330811 
	C1957.321533,626.330811 1883.183716,626.330811 1807.879395,626.330811 
	C1807.879395,548.477783 1807.879395,471.695923 1807.879395,395.110779 
	C1794.037598,392.952545 1639.434814,393.547729 1631.912354,395.776855 
	C1631.912354,408.227661 1631.913818,420.865112 1631.911743,433.502533 
	C1631.909546,446.500122 1631.904053,459.497681 1631.899780,472.495270 
	C1631.895752,485.159576 1631.890869,497.823914 1631.887329,510.488220 
	C1631.883667,523.485779 1631.881592,536.483398 1631.877686,549.480957 
	C1631.873779,562.145264 1631.909668,574.809753 1631.853027,587.473816 
	C1631.795654,600.302246 1632.101685,613.150391 1631.595337,626.783325 
	C1590.264893,626.783325 1550.356689,626.783325 1509.748413,626.783325 
	C1509.748413,677.442566 1509.748413,727.216248 1509.748413,778.137268 
	C1550.586182,778.137268 1590.739624,778.137268 1631.900879,778.137268 
	C1631.900879,813.182861 1631.900879,847.091431 1631.901245,883.000000 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M2208.937256,1880.000000 
	C2209.736328,1877.411743 2211.103516,1874.455566 2213.263184,1872.289429 
	C2257.966797,1827.448486 2302.698975,1782.635498 2347.551270,1737.943115 
	C2415.050781,1670.684570 2482.638428,1603.514038 2550.227051,1536.345093 
	C2553.735596,1532.858398 2557.607422,1529.737183 2561.655029,1527.222900 
	C2562.000000,1645.187744 2562.000000,1762.375610 2562.000000,1880.000000 
	C2444.625244,1880.000000 2327.249756,1880.000000 2208.937256,1880.000000 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M351.062683,2.000006 
	C350.711609,4.135217 349.791595,6.637956 348.081329,8.352299 
	C294.409790,62.151604 240.724915,115.937950 186.904312,169.588074 
	C144.665466,211.693130 102.177223,253.548004 59.936707,295.651398 
	C42.719357,312.812897 25.881834,330.355103 8.813836,347.667267 
	C7.216306,349.287628 5.202494,350.497559 2.690983,351.949036 
	C2.000000,235.479294 2.000000,118.958588 2.000000,2.000000 
	C118.041420,2.000000 234.083389,2.000000 351.062683,2.000006 z"
            />
            <path
                fill="#FEFFFE"
                opacity="1.000000"
                stroke="none"
                d="M545.829773,1228.184570 
	C528.571167,1177.057495 518.045288,1125.273926 511.724091,1072.547241 
	C502.016785,991.576416 500.546814,910.340637 504.464874,829.003357 
	C508.081299,753.928589 517.926941,679.738892 539.993774,607.588318 
	C551.921936,568.587341 567.879822,531.331421 588.607300,496.119019 
	C627.464355,430.107635 684.115051,386.068115 755.506775,359.995514 
	C797.718994,344.579376 841.398193,336.102386 886.034790,332.040131 
	C924.274536,328.559967 962.574463,327.959412 1000.897034,330.052704 
	C1049.310181,332.697235 1096.876953,340.077362 1143.123535,355.274963 
	C1230.278931,383.916077 1294.060547,439.097443 1334.495972,521.568909 
	C1358.718140,570.972107 1374.844360,622.958801 1385.928833,676.636353 
	C1403.748901,762.932129 1407.971069,850.311096 1406.582153,938.153748 
	C1405.928589,979.496826 1404.301270,1020.772644 1399.905151,1061.889282 
	C1393.260498,1124.034546 1381.638428,1185.119385 1358.287598,1243.405762 
	C1332.923950,1306.716309 1293.051636,1359.176758 1238.809448,1400.630737 
	C1237.221680,1401.844360 1235.638916,1403.067505 1234.107300,1404.350098 
	C1233.615967,1404.761841 1233.297729,1405.380127 1232.046387,1407.029663 
	C1276.414917,1478.228149 1321.050049,1549.854248 1366.315552,1622.491943 
	C1310.138184,1648.438721 1254.907959,1673.947876 1200.037964,1699.290771 
	C1199.233032,1699.091309 1198.914429,1699.038330 1198.615479,1698.931030 
	C1198.305298,1698.819946 1197.935669,1698.728271 1197.729126,1698.502563 
	C1197.061279,1697.771362 1196.350708,1697.046753 1195.841919,1696.207153 
	C1149.050171,1618.999756 1102.275635,1541.781860 1055.413208,1464.421265 
	C1052.921143,1464.421265 1050.589111,1464.120361 1048.357300,1464.466309 
	C1012.034424,1470.094971 975.470459,1472.382935 938.765564,1471.485229 
	C892.072021,1470.343262 845.624023,1466.554199 799.928223,1456.123901 
	C772.259644,1449.808594 745.315247,1441.306152 719.311890,1429.894043 
	C653.242737,1400.898193 603.730469,1354.349731 572.006714,1289.498169 
	C562.368408,1269.795044 554.650024,1249.152832 545.829773,1228.184570 
	M1203.758301,743.474976 
	C1199.802612,722.879700 1196.964355,701.987915 1191.598755,681.766724 
	C1185.379150,658.326965 1178.003296,635.064758 1169.257202,612.449463 
	C1145.709106,551.559509 1100.956421,513.608276 1038.654541,495.995636 
	C983.657959,480.448212 928.053284,480.653168 872.380310,491.764465 
	C805.069275,505.198486 757.354370,543.373657 729.891968,606.493225 
	C727.766602,611.378113 725.638611,616.265259 723.668457,621.213745 
	C707.167114,662.660950 698.482239,706.034302 692.207947,749.972595 
	C684.222168,805.895996 682.302734,862.141235 684.211731,918.525208 
	C686.096863,974.202209 692.117126,1029.486206 701.173828,1084.444824 
	C706.653259,1117.695801 714.029785,1150.474854 725.947388,1182.083130 
	C733.490112,1202.088257 742.240051,1221.475586 755.460449,1238.551514 
	C781.615601,1272.334106 816.564453,1292.420410 857.003357,1303.972046 
	C897.564697,1315.558228 939.008118,1317.588623 980.837280,1315.108521 
	C1008.563293,1313.464844 1035.744995,1308.879150 1062.080322,1299.794922 
	C1114.359253,1281.761597 1152.446655,1248.139648 1173.996582,1196.879028 
	C1180.172607,1182.187866 1185.502808,1167.024170 1189.789307,1151.677246 
	C1203.210938,1103.625244 1208.533203,1054.228149 1211.489868,1004.650085 
	C1216.657715,917.994446 1215.671753,831.438171 1203.758301,743.474976 z"
            />
            <path
                fill="#FEFFFE"
                opacity="1.000000"
                stroke="none"
                d="M1631.901123,882.000000 
	C1631.900879,847.091431 1631.900879,813.182861 1631.900879,778.137268 
	C1590.739624,778.137268 1550.586182,778.137268 1509.748413,778.137268 
	C1509.748413,727.216248 1509.748413,677.442566 1509.748413,626.783325 
	C1550.356689,626.783325 1590.264893,626.783325 1631.595337,626.783325 
	C1632.101685,613.150391 1631.795654,600.302246 1631.853027,587.473816 
	C1631.909668,574.809753 1631.873779,562.145264 1631.877686,549.480957 
	C1631.881592,536.483398 1631.883667,523.485779 1631.887329,510.488220 
	C1631.890869,497.823914 1631.895752,485.159576 1631.899780,472.495270 
	C1631.904053,459.497681 1631.909546,446.500122 1631.911743,433.502533 
	C1631.913818,420.865112 1631.912354,408.227661 1631.912354,395.776855 
	C1639.434814,393.547729 1794.037598,392.952545 1807.879395,395.110779 
	C1807.879395,471.695923 1807.879395,548.477783 1807.879395,626.330811 
	C1883.183716,626.330811 1957.321533,626.330811 2032.660034,626.330811 
	C2032.328735,677.195862 2030.043091,726.908447 2029.144897,777.683411 
	C1953.968750,777.683411 1879.824341,777.683411 1805.065063,777.683411 
	C1804.684692,781.190308 1804.169189,783.724670 1804.169678,786.258972 
	C1804.196655,910.569092 1804.009766,1034.880371 1804.540405,1159.188477 
	C1804.653809,1185.768799 1805.163330,1212.547852 1811.816040,1238.638184 
	C1812.556274,1241.540771 1813.431763,1244.409058 1814.157593,1247.314819 
	C1821.540161,1276.866699 1841.950928,1290.975220 1870.863037,1293.899780 
	C1884.725952,1295.301880 1898.793701,1295.336914 1912.748535,1295.043091 
	C1946.063599,1294.341797 1979.366455,1293.066772 2012.675293,1292.055054 
	C2016.306396,1291.944702 2019.943848,1292.040283 2024.933716,1292.040283 
	C2027.640747,1338.215942 2030.320068,1383.919312 2033.049072,1430.469604 
	C2024.028931,1432.054321 2015.927612,1433.534180 2007.806396,1434.894897 
	C1962.128174,1442.548584 1916.407959,1449.722656 1869.943604,1450.640625 
	C1828.326660,1451.462891 1787.452393,1447.244141 1747.815308,1433.888306 
	C1725.394409,1426.333496 1705.322632,1414.853271 1688.500244,1398.008667 
	C1678.019775,1387.514282 1669.793945,1375.511719 1663.875488,1361.897827 
	C1650.081055,1330.166382 1642.301758,1296.862915 1638.048218,1262.669067 
	C1633.227417,1223.915405 1631.963501,1184.956543 1631.940063,1145.947754 
	C1631.887085,1058.298462 1631.909424,970.649231 1631.901123,882.000000 z"
            />
            <path
                fill="#41CD52"
                opacity="1.000000"
                stroke="none"
                d="M1203.852783,744.355103 
	C1215.671753,831.438171 1216.657715,917.994446 1211.489868,1004.650085 
	C1208.533203,1054.228149 1203.210938,1103.625244 1189.789307,1151.677246 
	C1185.502808,1167.024170 1180.172607,1182.187866 1173.996582,1196.879028 
	C1152.446655,1248.139648 1114.359253,1281.761597 1062.080322,1299.794922 
	C1035.744995,1308.879150 1008.563293,1313.464844 980.837280,1315.108521 
	C939.008118,1317.588623 897.564697,1315.558228 857.003357,1303.972046 
	C816.564453,1292.420410 781.615601,1272.334106 755.460449,1238.551514 
	C742.240051,1221.475586 733.490112,1202.088257 725.947388,1182.083130 
	C714.029785,1150.474854 706.653259,1117.695801 701.173828,1084.444824 
	C692.117126,1029.486206 686.096863,974.202209 684.211731,918.525208 
	C682.302734,862.141235 684.222168,805.895996 692.207947,749.972595 
	C698.482239,706.034302 707.167114,662.660950 723.668457,621.213745 
	C725.638611,616.265259 727.766602,611.378113 729.891968,606.493225 
	C757.354370,543.373657 805.069275,505.198486 872.380310,491.764465 
	C928.053284,480.653168 983.657959,480.448212 1038.654541,495.995636 
	C1100.956421,513.608276 1145.709106,551.559509 1169.257202,612.449463 
	C1178.003296,635.064758 1185.379150,658.326965 1191.598755,681.766724 
	C1196.964355,701.987915 1199.802612,722.879700 1203.852783,744.355103 z"
            />
        </ModQtIcon>
    )
}

export default withLayout(QtIcon)
