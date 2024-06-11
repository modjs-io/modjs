import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '@modjs/utils'
import { IconProps } from '../../utils/IconProps'

const ModSwiftIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const SwiftIcon = ({ height, width, ...props }: IconProps) => {
    return (
        <ModSwiftIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-100 -100 712 712"
            height={height}
            width={width}
        >
            <title>Swift Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <path
                fill="#FF5034"
                opacity="1.000000"
                stroke="none"
                d="M0.999995,414.000000 
      C1.000000,310.645233 1.000000,207.290466 1.356446,103.756210 
      C2.114579,103.067505 2.765140,102.608727 2.880122,102.041412 
      C4.298748,95.042030 5.243389,87.921700 7.072035,81.034828 
      C13.219413,57.883198 25.450750,38.469913 44.752468,24.160944 
      C60.819954,12.249615 79.271523,5.703556 99.068436,2.917171 
      C99.787987,2.815896 100.359497,1.662869 101.000000,1.000000 
      C204.688095,1.000000 308.376190,1.000000 412.219177,1.345234 
      C418.320587,3.128754 424.274933,4.535643 430.212250,6.010851 
      C453.805786,11.872989 473.251251,24.626377 488.445404,43.242245 
      C501.343658,59.045181 508.287903,77.784088 511.081940,98.021309 
      C511.183289,98.755157 512.336792,99.343735 513.000000,100.000008 
      C513.000000,205.021439 513.000000,310.042877 512.654907,415.219055 
      C511.877014,416.213837 511.168671,417.017273 511.051575,417.899200 
      C507.324066,445.977173 493.761719,468.633545 472.051270,486.229675 
      C454.907562,500.124512 434.857056,507.975464 412.973938,511.081482 
      C412.239960,511.185638 411.654602,512.336853 411.000000,513.000000 
      C307.978577,513.000000 204.957138,513.000000 101.789612,512.659546 
      C95.703735,510.877808 89.742638,509.518616 83.827850,507.981201 
      C57.963772,501.258667 37.132675,487.086212 21.734112,465.249512 
      C11.327105,450.491272 5.472629,433.871033 2.919332,416.033173 
      C2.811426,415.279327 1.663444,414.674347 0.999995,414.000000 
      M138.651398,110.874359 
      C138.803680,111.132683 138.996429,111.356102 139.526932,112.176613 
      C170.752686,157.247742 204.830566,200.067154 241.287033,241.158417 
      C188.186844,207.876450 138.924942,169.587418 90.896713,129.495117 
      C143.740356,200.619965 200.028610,268.466827 270.679779,323.724792 
      C249.517059,336.429565 227.238983,342.990326 203.548737,344.972900 
      C168.942673,347.869049 135.739853,341.616486 104.378593,327.287323 
      C87.069580,319.378754 70.863724,309.055725 53.884151,299.325897 
      C53.436008,299.298157 52.987862,299.270416 52.539715,299.242676 
      C52.788021,299.715179 53.036324,300.187683 53.557823,301.286163 
      C99.065010,367.653198 160.242813,409.365814 241.226959,418.430756 
      C277.071075,422.442932 311.580597,416.291748 343.321228,397.892578 
      C347.887085,395.245880 352.912170,393.229095 357.938049,391.564941 
      C389.196411,381.214874 415.402283,389.434265 430.930481,417.835205 
      C431.503357,418.882965 432.499084,419.699493 433.972015,421.404144 
      C435.233704,418.684357 436.620697,416.879639 436.872559,414.928436 
      C437.615265,409.174500 438.495911,403.340363 438.278290,397.577057 
      C437.197479,368.954620 426.389221,343.907196 409.165710,321.440613 
      C406.880768,318.460144 406.394745,315.941010 407.301239,312.410950 
      C413.883331,286.778839 414.144196,260.912781 408.362305,235.199951 
      C392.915405,166.505432 352.717346,115.427185 294.728760,77.248718 
      C293.781464,76.625046 292.614044,76.335709 290.933716,75.632820 
      C328.919403,132.204926 347.804779,191.350937 325.412140,258.784210 
      C322.266327,257.172211 319.888824,256.047852 317.606079,254.756088 
      C315.580353,253.609726 313.638611,252.309433 311.695892,251.022644 
      C265.633575,220.513245 222.434662,186.324356 181.472229,149.298309 
      C167.517517,136.684586 153.956009,123.635849 140.045868,110.303131 
      C139.758408,110.140984 139.470963,109.978844 138.943024,109.282188 
      C138.676315,109.283470 138.409622,109.284752 138.142914,109.286034 
      C138.254761,109.679306 138.366608,110.072578 138.651398,110.874359 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M411.468628,513.000000 
      C411.654602,512.336853 412.239960,511.185638 412.973938,511.081482 
      C434.857056,507.975464 454.907562,500.124512 472.051270,486.229675 
      C493.761719,468.633545 507.324066,445.977173 511.051575,417.899200 
      C511.168671,417.017273 511.877014,416.213837 512.654907,415.686920 
      C513.000000,448.262115 513.000000,480.524200 513.000000,513.000000 
      C479.312744,513.000000 445.625031,513.000000 411.468628,513.000000 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M100.531342,1.000000 
      C100.359497,1.662869 99.787987,2.815896 99.068436,2.917171 
      C79.271523,5.703556 60.819954,12.249615 44.752468,24.160944 
      C25.450750,38.469913 13.219413,57.883198 7.072035,81.034828 
      C5.243389,87.921700 4.298748,95.042030 2.880122,102.041412 
      C2.765140,102.608727 2.114579,103.067505 1.356446,103.288361 
      C1.000000,69.073784 1.000000,35.147572 1.000000,1.000000 
      C34.020565,1.000000 67.041626,1.000000 100.531342,1.000000 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M0.999995,414.468658 
      C1.663444,414.674347 2.811426,415.279327 2.919332,416.033173 
      C5.472629,433.871033 11.327105,450.491272 21.734112,465.249512 
      C37.132675,487.086212 57.963772,501.258667 83.827850,507.981201 
      C89.742638,509.518616 95.703735,510.877808 101.321762,512.659546 
      C67.740105,513.000000 34.480202,513.000000 1.000000,513.000000 
      C1.000000,480.312775 1.000000,447.625031 0.999995,414.468658 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M513.000000,99.531349 
      C512.336792,99.343735 511.183289,98.755157 511.081940,98.021309 
      C508.287903,77.784088 501.343658,59.045181 488.445404,43.242245 
      C473.251251,24.626377 453.805786,11.872989 430.212250,6.010851 
      C424.274933,4.535643 418.320587,3.128754 412.687042,1.345234 
      C446.259888,1.000000 479.519775,1.000000 513.000000,1.000000 
      C513.000000,33.687229 513.000000,66.374954 513.000000,99.531349 z"
            />
            <path
                fill="#FFFEFE"
                opacity="1.000000"
                stroke="none"
                d="M140.214844,110.785881 
      C153.956009,123.635849 167.517517,136.684586 181.472229,149.298309 
      C222.434662,186.324356 265.633575,220.513245 311.695892,251.022644 
      C313.638611,252.309433 315.580353,253.609726 317.606079,254.756088 
      C319.888824,256.047852 322.266327,257.172211 325.412140,258.784210 
      C347.804779,191.350937 328.919403,132.204926 290.933716,75.632820 
      C292.614044,76.335709 293.781464,76.625046 294.728760,77.248718 
      C352.717346,115.427185 392.915405,166.505432 408.362305,235.199951 
      C414.144196,260.912781 413.883331,286.778839 407.301239,312.410950 
      C406.394745,315.941010 406.880768,318.460144 409.165710,321.440613 
      C426.389221,343.907196 437.197479,368.954620 438.278290,397.577057 
      C438.495911,403.340363 437.615265,409.174500 436.872559,414.928436 
      C436.620697,416.879639 435.233704,418.684357 433.972015,421.404144 
      C432.499084,419.699493 431.503357,418.882965 430.930481,417.835205 
      C415.402283,389.434265 389.196411,381.214874 357.938049,391.564941 
      C352.912170,393.229095 347.887085,395.245880 343.321228,397.892578 
      C311.580597,416.291748 277.071075,422.442932 241.226959,418.430756 
      C160.242813,409.365814 99.065010,367.653198 53.641319,300.764587 
      C53.870064,300.102356 54.015312,299.961731 54.160564,299.821136 
      C70.863724,309.055725 87.069580,319.378754 104.378593,327.287323 
      C135.739853,341.616486 168.942673,347.869049 203.548737,344.972900 
      C227.238983,342.990326 249.517059,336.429565 270.679779,323.724792 
      C200.028610,268.466827 143.740356,200.619965 90.896713,129.495117 
      C138.924942,169.587418 188.186844,207.876450 241.287033,241.158417 
      C204.830566,200.067154 170.752686,157.247742 139.629623,111.677261 
      C139.893143,111.047241 140.053986,110.916565 140.214844,110.785881 
      M242.156021,241.071793 
      C242.047043,241.406586 241.938080,241.741364 241.829086,242.076141 
      C242.071930,242.138977 242.314758,242.201797 242.557602,242.264633 
      C242.617767,241.983337 242.677933,241.702042 242.156021,241.071793 z"
            />
            <path
                fill="#FFFEFE"
                opacity="1.000000"
                stroke="none"
                d="M53.504719,300.451599 
      C53.036324,300.187683 52.788021,299.715179 52.539719,299.242676 
      C52.987862,299.270416 53.436008,299.298157 54.022358,299.573517 
      C54.015312,299.961731 53.870064,300.102356 53.504719,300.451599 z"
            />
            <path
                fill="#FFFEFE"
                opacity="1.000000"
                stroke="none"
                d="M138.478455,110.465851 
      C138.366608,110.072578 138.254761,109.679306 138.142914,109.286026 
      C138.409622,109.284752 138.676315,109.283470 138.886932,109.711662 
      C138.830841,110.141136 138.478455,110.465851 138.478455,110.465851 z"
            />
            <path
                fill="#FFFEFE"
                opacity="1.000000"
                stroke="none"
                d="M139.007172,109.978920 
      C139.470963,109.978844 139.758408,110.140984 140.130356,110.544510 
      C140.053986,110.916565 139.893143,111.047241 139.480972,111.361259 
      C138.996429,111.356102 138.803680,111.132683 138.564926,110.670105 
      C138.478455,110.465851 138.830841,110.141136 139.007172,109.978920 z"
            />
            <path
                fill="#FF5034"
                opacity="1.000000"
                stroke="none"
                d="M242.447052,241.246277 
      C242.677933,241.702042 242.617767,241.983337 242.557602,242.264633 
      C242.314758,242.201797 242.071930,242.138977 241.829102,242.076141 
      C241.938080,241.741364 242.047043,241.406586 242.447052,241.246277 z"
            />
        </ModSwiftIcon>
    )
}

export default withLayout(SwiftIcon)
