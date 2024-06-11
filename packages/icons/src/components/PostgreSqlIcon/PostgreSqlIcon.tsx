import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModPostgreSqlIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const PostgreSqlIcon = ({ height, width, ...props }: IconProps) => {
    return (
        <ModPostgreSqlIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-50 -80 600 600"
            height={height}
            width={width}
        >
            <title>PostgreSql Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M513.000000,168.000000 
      C513.000000,283.305298 513.000000,398.110596 513.000000,512.957947 
      C342.403015,512.957947 171.806046,512.957947 1.104528,512.957947 
      C1.104528,342.444733 1.104528,171.889374 1.104528,1.167012 
      C171.666534,1.167012 342.333252,1.167012 513.000000,1.167012 
      C513.000000,56.527256 513.000000,112.013626 513.000000,168.000000 
      M457.472015,307.076324 
      C444.143311,308.863159 430.804901,310.787750 417.561554,304.587158 
      C418.558563,302.901550 419.268250,301.621094 420.052338,300.387939 
      C442.367645,265.292969 460.036377,227.984070 472.631775,188.361801 
      C482.140625,158.449158 489.347992,128.063370 488.042542,96.296402 
      C487.455048,82.000778 482.986328,69.534027 472.888214,58.841949 
      C457.488403,42.536404 439.671722,30.162216 418.433716,23.015059 
      C381.767853,10.676047 345.054688,12.773368 308.374542,23.217173 
      C306.075256,23.871838 303.492920,24.140984 301.130798,23.855875 
      C293.045074,22.879915 285.034821,21.108866 276.930817,20.486143 
      C252.982147,18.645897 230.191895,22.465189 209.324860,35.220646 
      C207.639465,36.250881 204.645020,36.125313 202.613968,35.457279 
      C169.567291,24.587896 136.016129,17.422583 101.057129,23.054207 
      C65.693893,28.750952 41.113503,47.912762 29.778162,82.577988 
      C22.285433,105.491913 20.986233,129.096542 24.387337,152.702164 
      C31.137493,199.552109 42.759575,245.273438 59.016376,289.752411 
      C66.504395,310.239746 75.084061,330.268036 88.677223,347.626526 
      C92.039993,351.920807 95.885056,356.003357 100.127960,359.412048 
      C114.106705,370.642334 129.478867,370.240967 142.464905,357.854553 
      C149.667526,350.984497 155.802368,342.998016 162.453247,335.545776 
      C171.072906,325.887604 179.727158,316.260254 187.485962,307.602234 
      C197.801453,310.380157 206.997192,312.856567 216.376877,315.382477 
      C210.689728,323.234161 204.883209,331.456848 193.818695,333.438660 
      C189.898392,334.140839 185.951202,334.924927 182.178116,336.164307 
      C176.068848,338.171021 169.630157,339.800018 164.175247,343.019623 
      C156.914001,347.305389 156.440613,355.744751 162.314606,361.791168 
      C164.253815,363.787262 166.545883,365.755066 169.063599,366.826233 
      C195.516205,378.080231 221.077042,377.797089 245.152725,360.407715 
      C246.265228,359.604126 247.401505,358.833435 248.197189,358.277618 
      C249.139404,383.097137 249.888275,407.719971 251.075089,432.321655 
      C251.835098,448.076263 254.657150,463.359985 263.644135,476.909027 
      C272.254669,489.890442 283.903473,498.315491 299.602539,499.055389 
      C308.610535,499.479950 317.890320,498.472290 326.761047,496.685669 
      C357.015472,490.592194 375.072510,472.167358 379.801514,441.466003 
      C382.841400,421.730988 385.379517,401.917572 388.031311,382.124359 
      C389.372162,372.116302 390.466125,362.075195 391.717377,351.669403 
      C406.338348,355.198730 420.531982,354.215851 434.734528,351.972595 
      C451.566010,349.314117 466.695099,342.677521 479.525177,331.559540 
      C483.878387,327.787262 487.519745,322.651276 490.021484,317.435730 
      C492.565643,312.131653 489.187683,306.472137 483.444336,305.096527 
      C479.982361,304.267334 476.191895,304.266785 472.614044,304.597504 
      C467.826721,305.039978 463.102386,306.164124 457.472015,307.076324 z"
            />
            <path
                fill="#FBFCFC"
                opacity="1.000000"
                stroke="none"
                d="M457.911499,307.035950 
      C463.102386,306.164124 467.826721,305.039978 472.614044,304.597504 
      C476.191895,304.266785 479.982361,304.267334 483.444336,305.096527 
      C489.187683,306.472137 492.565643,312.131653 490.021484,317.435730 
      C487.519745,322.651276 483.878387,327.787262 479.525177,331.559540 
      C466.695099,342.677521 451.566010,349.314117 434.734528,351.972595 
      C420.531982,354.215851 406.338348,355.198730 391.717377,351.669403 
      C390.466125,362.075195 389.372162,372.116302 388.031311,382.124359 
      C385.379517,401.917572 382.841400,421.730988 379.801514,441.466003 
      C375.072510,472.167358 357.015472,490.592194 326.761047,496.685669 
      C317.890320,498.472290 308.610535,499.479950 299.602539,499.055389 
      C283.903473,498.315491 272.254669,489.890442 263.644135,476.909027 
      C254.657150,463.359985 251.835098,448.076263 251.075089,432.321655 
      C249.888275,407.719971 249.139404,383.097137 248.197189,358.277618 
      C247.401505,358.833435 246.265228,359.604126 245.152725,360.407715 
      C221.077042,377.797089 195.516205,378.080231 169.063599,366.826233 
      C166.545883,365.755066 164.253815,363.787262 162.314606,361.791168 
      C156.440613,355.744751 156.914001,347.305389 164.175247,343.019623 
      C169.630157,339.800018 176.068848,338.171021 182.178116,336.164307 
      C185.951202,334.924927 189.898392,334.140839 193.818695,333.438660 
      C204.883209,331.456848 210.689728,323.234161 216.376877,315.382477 
      C206.997192,312.856567 197.801453,310.380157 187.485962,307.602234 
      C179.727158,316.260254 171.072906,325.887604 162.453247,335.545776 
      C155.802368,342.998016 149.667526,350.984497 142.464905,357.854553 
      C129.478867,370.240967 114.106705,370.642334 100.127960,359.412048 
      C95.885056,356.003357 92.039993,351.920807 88.677223,347.626526 
      C75.084061,330.268036 66.504395,310.239746 59.016376,289.752411 
      C42.759575,245.273438 31.137493,199.552109 24.387337,152.702164 
      C20.986233,129.096542 22.285433,105.491913 29.778162,82.577988 
      C41.113503,47.912762 65.693893,28.750952 101.057129,23.054207 
      C136.016129,17.422583 169.567291,24.587896 202.613968,35.457279 
      C204.645020,36.125313 207.639465,36.250881 209.324860,35.220646 
      C230.191895,22.465189 252.982147,18.645897 276.930817,20.486143 
      C285.034821,21.108866 293.045074,22.879915 301.130798,23.855875 
      C303.492920,24.140984 306.075256,23.871838 308.374542,23.217173 
      C345.054688,12.773368 381.767853,10.676047 418.433716,23.015059 
      C439.671722,30.162216 457.488403,42.536404 472.888214,58.841949 
      C482.986328,69.534027 487.455048,82.000778 488.042542,96.296402 
      C489.347992,128.063370 482.140625,158.449158 472.631775,188.361801 
      C460.036377,227.984070 442.367645,265.292969 420.052338,300.387939 
      C419.268250,301.621094 418.558563,302.901550 417.561554,304.587158 
      C430.804901,310.787750 444.143311,308.863159 457.911499,307.035950 
      M350.717377,62.762253 
      C325.760406,43.648502 297.416656,34.500774 266.129974,34.465843 
      C229.619720,34.425079 202.199051,50.299614 185.942657,83.110352 
      C179.809235,95.489594 176.014587,109.133972 172.141479,122.488091 
      C169.696930,130.916626 169.081238,139.875610 167.475952,149.624512 
      C180.870804,142.499512 193.624069,138.026306 207.356293,136.415604 
      C228.946350,133.883224 245.948029,144.320236 250.775742,164.371750 
      C259.876831,202.172653 260.919556,239.436874 242.451660,275.360382 
      C238.092316,283.840088 235.551712,293.254822 232.201279,302.168091 
      C233.316422,302.689789 233.602127,302.932861 233.898270,302.946350 
      C253.143906,303.821381 264.725037,316.571350 263.884064,335.706848 
      C262.360809,370.368530 263.158691,404.988434 266.067535,439.561127 
      C267.021179,450.895203 270.355804,461.374603 276.985748,470.726196 
      C283.613525,480.074768 292.649811,485.724365 304.050720,484.918091 
      C314.220642,484.198853 324.484924,482.290863 334.285370,479.450653 
      C349.690308,474.986237 359.292969,464.188385 363.321716,448.606628 
      C364.360931,444.587341 365.539032,440.554199 366.037323,436.452576 
      C370.411621,400.446106 374.723083,364.431549 378.879028,328.399292 
      C380.255676,316.463898 385.341919,307.571869 397.210052,303.507263 
      C397.928864,303.261108 398.598724,302.872070 399.667023,302.374573 
      C396.652222,298.375000 393.315918,294.966919 391.164551,290.927734 
      C378.278015,266.733459 364.894531,242.753769 353.296631,217.945251 
      C347.829071,206.249786 344.841309,193.056549 342.708191,180.213409 
      C338.659424,155.836105 352.140686,138.303864 376.486481,135.000931 
      C384.840210,133.867599 393.368774,134.022781 402.589935,133.549667 
      C391.761536,105.447372 374.879303,81.911827 350.717377,62.762253 
      M153.991364,189.551010 
      C152.507309,167.218506 152.345444,144.962097 156.995926,122.888252 
      C162.312546,97.652679 170.946548,73.951622 187.953873,53.992249 
      C189.636200,52.017918 191.369598,50.087109 193.552063,47.596615 
      C161.536636,38.015839 129.906021,31.449518 97.157082,38.441631 
      C69.165947,44.417927 50.985348,61.564255 42.757973,89.085846 
      C36.940395,108.546356 35.427078,128.541077 38.324673,148.439270 
      C45.922829,200.616913 58.643105,251.544189 78.760559,300.423218 
      C85.043266,315.688202 92.189735,330.606750 103.404320,343.008179 
      C115.808716,356.725281 125.809647,356.359558 137.870667,342.325378 
      C146.665848,332.091339 155.538803,321.923767 164.420700,311.764740 
      C168.308090,307.318359 172.304321,302.967194 176.379013,298.430450 
      C174.759186,296.902893 173.501038,295.811249 172.349884,294.616547 
      C156.110214,277.762543 149.541550,257.568115 151.278900,234.373840 
      C152.372375,219.775681 153.100906,205.150162 153.991364,189.551010 
      M439.694092,234.160370 
      C447.298615,213.595047 455.662537,193.271500 462.307343,172.400635 
      C469.897888,148.559296 474.705383,124.015953 473.898041,98.760460 
      C473.626343,90.260803 473.234802,81.252678 467.130096,74.735794 
      C458.978973,66.034294 450.690125,57.040947 440.985840,50.293861 
      C411.539581,29.820776 378.177094,26.329929 343.491882,30.508024 
      C339.045929,31.043570 334.635712,31.875835 328.897308,32.776512 
      C330.855621,33.876072 331.406067,34.224464 331.988586,34.506603 
      C367.113403,51.518944 391.719757,78.756958 409.480133,113.044014 
      C418.291718,130.055084 421.005615,147.496826 417.311707,166.169693 
      C413.492065,185.478119 413.727142,204.791473 416.575073,224.281464 
      C419.680817,245.535690 418.905243,266.505157 407.909027,285.938812 
      C407.334076,286.954834 408.009949,288.678589 408.103516,290.072876 
      C408.918213,290.242859 409.732910,290.412842 410.547607,290.582825 
      C420.139221,271.995911 429.730835,253.408997 439.694092,234.160370 
      M230.055435,267.532104 
      C246.940628,235.076096 244.875168,201.308365 236.667068,167.249161 
      C234.163803,156.862015 226.824722,151.410629 216.024490,150.820450 
      C198.801865,149.879364 183.811295,156.386917 169.683441,165.348602 
      C168.490540,166.105286 167.505173,168.320190 167.589874,169.790436 
      C168.886475,192.297241 168.030472,214.686783 165.789825,237.136185 
      C163.633362,258.742279 171.671616,276.659973 189.003311,289.964905 
      C197.505234,296.491608 207.275543,299.842834 217.687424,299.853973 
      C221.846268,289.002625 225.823044,278.626404 230.055435,267.532104 
      M360.681976,158.308807 
      C354.983093,166.758240 355.787476,176.025284 357.546112,185.287323 
      C360.709961,201.950363 367.650970,217.258499 375.278656,232.228500 
      C382.405487,246.215607 390.023346,259.952484 397.577393,274.084412 
      C398.165863,272.838470 398.636902,271.961609 399.005066,271.043457 
      C404.712097,256.811401 404.311584,242.036285 402.476929,227.253769 
      C400.215881,209.036026 398.542023,190.891922 401.861450,172.595581 
      C403.240448,164.994675 403.772797,157.240173 404.844574,148.261551 
      C397.375092,148.261551 390.911194,147.881714 384.510254,148.354324 
      C375.822968,148.995758 367.234375,150.414703 360.681976,158.308807 
      M240.734146,345.240723 
      C244.647583,340.671509 250.088791,336.997681 249.055435,329.685181 
      C248.293427,324.292938 244.296097,319.261627 239.174652,317.650818 
      C233.916687,315.997040 231.781219,320.120453 229.001175,323.030548 
      C227.740372,324.350342 226.452927,325.700500 225.477478,327.228333 
      C217.092102,340.362244 204.586563,346.626678 189.680954,349.184875 
      C184.756653,350.030029 179.950333,351.562561 174.372971,352.960541 
      C192.483566,365.004028 222.608307,361.362335 240.734146,345.240723 
      M404.311798,339.255981 
      C428.411377,340.586884 450.988129,336.729187 469.906006,320.344818 
      C463.036407,320.743591 456.319214,321.886169 449.553894,322.488464 
      C436.713959,323.631500 423.879517,323.960449 411.982056,317.727997 
      C405.403900,314.282074 396.803833,317.348633 394.211792,324.325836 
      C390.318329,334.806244 392.363586,338.102051 404.311798,339.255981 
      M471.339935,319.587830 
      C471.339935,319.587830 471.217468,319.485046 471.339935,319.587830 z"
            />
            <path
                fill="#346791"
                opacity="1.000000"
                stroke="none"
                d="M351.013550,62.958878 
      C374.879303,81.911827 391.761536,105.447372 402.589935,133.549667 
      C393.368774,134.022781 384.840210,133.867599 376.486481,135.000931 
      C352.140686,138.303864 338.659424,155.836105 342.708191,180.213409 
      C344.841309,193.056549 347.829071,206.249786 353.296631,217.945251 
      C364.894531,242.753769 378.278015,266.733459 391.164551,290.927734 
      C393.315918,294.966919 396.652222,298.375000 399.667023,302.374573 
      C398.598724,302.872070 397.928864,303.261108 397.210052,303.507263 
      C385.341919,307.571869 380.255676,316.463898 378.879028,328.399292 
      C374.723083,364.431549 370.411621,400.446106 366.037323,436.452576 
      C365.539032,440.554199 364.360931,444.587341 363.321716,448.606628 
      C359.292969,464.188385 349.690308,474.986237 334.285370,479.450653 
      C324.484924,482.290863 314.220642,484.198853 304.050720,484.918091 
      C292.649811,485.724365 283.613525,480.074768 276.985748,470.726196 
      C270.355804,461.374603 267.021179,450.895203 266.067535,439.561127 
      C263.158691,404.988434 262.360809,370.368530 263.884064,335.706848 
      C264.725037,316.571350 253.143906,303.821381 233.898270,302.946350 
      C233.602127,302.932861 233.316422,302.689789 232.201279,302.168091 
      C235.551712,293.254822 238.092316,283.840088 242.451660,275.360382 
      C260.919556,239.436874 259.876831,202.172653 250.775742,164.371750 
      C245.948029,144.320236 228.946350,133.883224 207.356293,136.415604 
      C193.624069,138.026306 180.870804,142.499512 167.475952,149.624512 
      C169.081238,139.875610 169.696930,130.916626 172.141479,122.488091 
      C176.014587,109.133972 179.809235,95.489594 185.942657,83.110352 
      C202.199051,50.299614 229.619720,34.425079 266.129974,34.465843 
      C297.416656,34.500774 325.760406,43.648502 351.013550,62.958878 z"
            />
            <path
                fill="#346791"
                opacity="1.000000"
                stroke="none"
                d="M153.992249,190.043976 
      C153.100906,205.150162 152.372375,219.775681 151.278900,234.373840 
      C149.541550,257.568115 156.110214,277.762543 172.349884,294.616547 
      C173.501038,295.811249 174.759186,296.902893 176.379013,298.430450 
      C172.304321,302.967194 168.308090,307.318359 164.420700,311.764740 
      C155.538803,321.923767 146.665848,332.091339 137.870667,342.325378 
      C125.809647,356.359558 115.808716,356.725281 103.404320,343.008179 
      C92.189735,330.606750 85.043266,315.688202 78.760559,300.423218 
      C58.643105,251.544189 45.922829,200.616913 38.324673,148.439270 
      C35.427078,128.541077 36.940395,108.546356 42.757973,89.085846 
      C50.985348,61.564255 69.165947,44.417927 97.157082,38.441631 
      C129.906021,31.449518 161.536636,38.015839 193.552063,47.596615 
      C191.369598,50.087109 189.636200,52.017918 187.953873,53.992249 
      C170.946548,73.951622 162.312546,97.652679 156.995926,122.888252 
      C152.345444,144.962097 152.507309,167.218506 153.992249,190.043976 z"
            />
            <path
                fill="#346892"
                opacity="1.000000"
                stroke="none"
                d="M439.508301,234.491226 
      C429.730835,253.408997 420.139221,271.995911 410.547607,290.582825 
      C409.732910,290.412842 408.918213,290.242859 408.103516,290.072876 
      C408.009949,288.678589 407.334076,286.954834 407.909027,285.938812 
      C418.905243,266.505157 419.680817,245.535690 416.575073,224.281464 
      C413.727142,204.791473 413.492065,185.478119 417.311707,166.169693 
      C421.005615,147.496826 418.291718,130.055084 409.480133,113.044014 
      C391.719757,78.756958 367.113403,51.518944 331.988586,34.506603 
      C331.406067,34.224464 330.855621,33.876072 328.897308,32.776512 
      C334.635712,31.875835 339.045929,31.043570 343.491882,30.508024 
      C378.177094,26.329929 411.539581,29.820776 440.985840,50.293861 
      C450.690125,57.040947 458.978973,66.034294 467.130096,74.735794 
      C473.234802,81.252678 473.626343,90.260803 473.898041,98.760460 
      C474.705383,124.015953 469.897888,148.559296 462.307343,172.400635 
      C455.662537,193.271500 447.298615,213.595047 439.508301,234.491226 z"
            />
            <path
                fill="#346891"
                opacity="1.000000"
                stroke="none"
                d="M229.927628,267.891113 
      C225.823044,278.626404 221.846268,289.002625 217.687424,299.853973 
      C207.275543,299.842834 197.505234,296.491608 189.003311,289.964905 
      C171.671616,276.659973 163.633362,258.742279 165.789825,237.136185 
      C168.030472,214.686783 168.886475,192.297241 167.589874,169.790436 
      C167.505173,168.320190 168.490540,166.105286 169.683441,165.348602 
      C183.811295,156.386917 198.801865,149.879364 216.024490,150.820450 
      C226.824722,151.410629 234.163803,156.862015 236.667068,167.249161 
      C244.875168,201.308365 246.940628,235.076096 229.927628,267.891113 
      M228.826309,162.686691 
      C223.019211,158.586090 216.505493,157.974442 209.763168,159.105759 
      C205.320496,159.851212 203.479385,162.892120 204.882095,166.497849 
      C208.723618,176.372650 221.511658,178.834747 228.687744,171.126129 
      C231.038330,168.601074 231.842224,166.079834 228.826309,162.686691 z"
            />
            <path
                fill="#356992"
                opacity="1.000000"
                stroke="none"
                d="M360.898865,158.012085 
      C367.234375,150.414703 375.822968,148.995758 384.510254,148.354324 
      C390.911194,147.881714 397.375092,148.261551 404.844574,148.261551 
      C403.772797,157.240173 403.240448,164.994675 401.861450,172.595581 
      C398.542023,190.891922 400.215881,209.036026 402.476929,227.253769 
      C404.311584,242.036285 404.712097,256.811401 399.005066,271.043457 
      C398.636902,271.961609 398.165863,272.838470 397.577393,274.084412 
      C390.023346,259.952484 382.405487,246.215607 375.278656,232.228500 
      C367.650970,217.258499 360.709961,201.950363 357.546112,185.287323 
      C355.787476,176.025284 354.983093,166.758240 360.898865,158.012085 
      M367.542084,163.730774 
      C374.339813,172.026505 383.990204,171.902451 389.599487,163.447220 
      C392.237610,159.470612 391.470703,156.694275 386.962982,155.569977 
      C380.755768,154.021774 374.691925,154.895309 369.358093,158.517365 
      C368.165466,159.327240 367.906464,161.511932 367.542084,163.730774 z"
            />
            <path
                fill="#366993"
                opacity="1.000000"
                stroke="none"
                d="M240.476990,345.488129 
      C222.608307,361.362335 192.483566,365.004028 174.372971,352.960541 
      C179.950333,351.562561 184.756653,350.030029 189.680954,349.184875 
      C204.586563,346.626678 217.092102,340.362244 225.477478,327.228333 
      C226.452927,325.700500 227.740372,324.350342 229.001175,323.030548 
      C231.781219,320.120453 233.916687,315.997040 239.174652,317.650818 
      C244.296097,319.261627 248.293427,324.292938 249.055435,329.685181 
      C250.088791,336.997681 244.647583,340.671509 240.476990,345.488129 z"
            />
            <path
                fill="#376A93"
                opacity="1.000000"
                stroke="none"
                d="M403.870300,339.217285 
      C392.363586,338.102051 390.318329,334.806244 394.211792,324.325836 
      C396.803833,317.348633 405.403900,314.282074 411.982056,317.727997 
      C423.879517,323.960449 436.713959,323.631500 449.553894,322.488464 
      C456.319214,321.886169 463.036407,320.743591 469.906006,320.344818 
      C450.988129,336.729187 428.411377,340.586884 403.870300,339.217285 z"
            />
            <path
                fill="#376A93"
                opacity="1.000000"
                stroke="none"
                d="M471.278687,319.536438 
      C471.217468,319.485046 471.339935,319.587830 471.278687,319.536438 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M229.100815,162.945251 
      C231.842224,166.079834 231.038330,168.601074 228.687744,171.126129 
      C221.511658,178.834747 208.723618,176.372650 204.882095,166.497849 
      C203.479385,162.892120 205.320496,159.851212 209.763168,159.105759 
      C216.505493,157.974442 223.019211,158.586090 229.100815,162.945251 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M367.379852,163.397217 
      C367.906464,161.511932 368.165466,159.327240 369.358093,158.517365 
      C374.691925,154.895309 380.755768,154.021774 386.962982,155.569977 
      C391.470703,156.694275 392.237610,159.470612 389.599487,163.447220 
      C383.990204,171.902451 374.339813,172.026505 367.379852,163.397217 z"
            />
        </ModPostgreSqlIcon>
    )
}

export default withLayout(PostgreSqlIcon)
