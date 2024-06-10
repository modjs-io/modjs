import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'
import { IconProps } from '../../utils/IconProps'

const ModDockerIcon = styled.svg<IconProps>`
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.lg};
    width: ${props => (props.width ? props.width : props.theme.icons.width.lg)};
`

const DockerIcon = ({ height, width, ...props }: IconProps) => {
    return (
        <ModDockerIcon
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={height}
            width={width}
        >
            <title>Docker Icon</title>
            <metadata>
                Created by Prashan Pudasaini on Thursday, January 4th, 2024 @
                fullstackpro.io
            </metadata>
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M0.999998,255.000000 
      C1.000000,170.371048 1.000000,85.742104 1.000000,1.056577 
      C171.552902,1.056577 342.105835,1.056577 513.000000,1.056577 
      C513.000000,71.687737 513.000000,142.376022 512.765259,213.872833 
      C501.471252,205.723999 488.541534,201.732437 474.591400,201.086258 
      C464.881439,200.636505 455.133850,200.999664 444.927521,200.999664 
      C445.301270,201.508743 445.158264,201.398621 445.131042,201.264908 
      C440.147217,176.796219 426.572266,158.530182 405.286926,145.721069 
      C402.023224,143.757050 399.895844,143.277115 397.871399,147.304947 
      C394.457123,154.097916 389.990265,160.413376 387.065704,167.390564 
      C380.360321,183.387604 377.560974,200.067383 382.113831,217.181229 
      C384.014313,224.325043 387.123779,231.147217 389.819366,238.485535 
      C377.968536,244.046509 365.065765,246.777527 351.921021,246.864197 
      C301.269501,247.198181 250.614487,246.999664 199.960770,246.999664 
      C138.976364,246.999664 77.991974,247.003830 17.007574,246.992783 
      C11.488600,246.991776 6.800497,248.463791 3.765475,253.555359 
      C3.312009,254.316101 1.944601,254.532028 0.999998,255.000000 
      M273.455780,122.000397 
      C275.288147,122.000374 277.120483,122.002548 278.952850,121.999947 
      C285.695068,121.990356 285.996948,121.691368 285.999023,114.928246 
      C286.002686,102.934631 285.905792,90.939880 286.051636,78.948036 
      C286.102356,74.775269 284.661194,72.903328 280.288879,72.947166 
      C266.131165,73.089134 251.970291,73.086952 237.812531,72.947693 
      C233.527710,72.905556 231.896637,74.590370 231.947845,78.847542 
      C232.096100,91.172523 232.150940,103.503197 231.925995,115.825859 
      C231.836441,120.732315 233.891144,122.151093 238.486725,122.067665 
      C249.810303,121.862099 261.140106,122.000374 273.455780,122.000397 
      M106.000557,149.503433 
      C106.000542,157.831436 106.082443,166.160614 105.962929,174.486908 
      C105.910095,178.167664 107.225914,180.043671 111.118889,180.026154 
      C125.775856,179.960159 140.433319,179.983215 155.090530,180.011887 
      C158.347443,180.018280 160.014313,178.598114 160.008209,175.250320 
      C159.984283,162.092148 159.984573,148.933853 160.008270,135.775681 
      C160.014267,132.447830 158.383530,130.983429 155.116760,130.989304 
      C140.459534,131.015671 125.802132,131.030838 111.145050,130.978485 
      C107.644249,130.965988 105.910652,132.414139 105.981888,136.014282 
      C106.064240,140.176651 106.000732,144.341888 106.000557,149.503433 
      M232.000381,160.497955 
      C232.000473,165.162216 232.117416,169.830276 231.965454,174.489578 
      C231.832260,178.572449 233.667099,180.074127 237.651077,180.043396 
      C251.976151,179.932831 266.302917,179.946243 280.628265,180.036423 
      C284.380402,180.060059 286.059570,178.596451 286.033203,174.763519 
      C285.944946,161.937439 285.950317,149.110046 286.030212,136.283844 
      C286.053925,132.475479 284.396301,130.943512 280.626312,130.965912 
      C266.300903,131.051086 251.974167,131.067383 237.649094,130.956711 
      C233.663910,130.925934 231.885620,132.430740 231.960312,136.511490 
      C232.100464,144.171631 232.000504,151.836151 232.000381,160.497955 
      M259.500000,188.999619 
      C252.170746,188.999741 244.839539,189.101822 237.513031,188.959930 
      C233.433884,188.880951 231.919815,190.659607 231.956970,194.646744 
      C232.074921,207.305267 232.049255,219.965866 231.970825,232.625000 
      C231.947769,236.345886 233.401459,238.060486 237.259323,238.036148 
      C251.750671,237.944702 266.243164,237.957764 280.734772,238.027557 
      C284.527863,238.045807 286.066620,236.405701 286.037170,232.626419 
      C285.938446,219.967560 285.925659,207.306793 286.043365,194.648270 
      C286.080414,190.662201 284.568054,188.871780 280.487976,188.960815 
      C273.828186,189.106125 267.162933,188.999771 259.500000,188.999619 
      M346.759247,237.700195 
      C347.506073,235.979752 348.875031,234.268387 348.900269,232.537430 
      C349.084839,219.876129 348.926849,207.210251 349.042297,194.547318 
      C349.079315,190.489899 347.394348,188.925568 343.384277,188.956909 
      C329.221466,189.067596 315.056488,189.084702 300.894135,188.947662 
      C296.674896,188.906815 294.895416,190.441803 294.947266,194.768311 
      C295.096954,207.263855 295.093994,219.763458 294.948883,232.259125 
      C294.898651,236.583054 296.681671,238.098022 300.903900,238.054443 
      C315.899017,237.899719 330.896454,237.970398 346.759247,237.700195 
      M98.000648,215.499695 
      C98.000298,208.342880 97.957191,201.185684 98.018936,194.029404 
      C98.046738,190.806396 96.791138,188.992844 93.378853,188.996185 
      C78.399498,189.010834 63.417694,188.883469 48.444489,189.187439 
      C46.937973,189.218002 44.234272,191.779739 44.199245,193.218262 
      C43.871136,206.691711 43.871548,220.179550 44.192402,233.653336 
      C44.227634,235.132751 46.841793,237.776245 48.303246,237.806870 
      C63.109676,238.116989 77.925758,238.067383 92.737587,237.939362 
      C95.993324,237.911224 98.262932,236.501144 98.064613,232.474167 
      C97.802956,227.161057 98.000504,221.825348 98.000648,215.499695 
      M110.919159,189.000443 
      C106.890335,188.862350 105.940994,191.204758 105.966530,194.734863 
      C106.054459,206.889008 105.994781,219.044205 106.002861,231.198990 
      C106.006729,237.014435 106.954788,237.975601 112.986671,237.989746 
      C126.639923,238.021774 140.294952,237.880035 153.945709,238.067398 
      C158.492966,238.129807 160.124451,236.399292 160.060181,231.924225 
      C159.885666,219.771942 160.011261,207.615479 159.995621,195.460709 
      C159.988007,189.541122 159.429031,189.007355 153.307953,189.002838 
      C139.488113,188.992630 125.668282,188.999649 110.919159,189.000443 
      M217.274292,188.999741 
      C203.472992,188.999756 189.671692,188.995087 175.870392,189.001999 
      C170.014984,189.004913 169.028290,189.952408 169.008987,195.899689 
      C168.970673,207.705505 168.972229,219.511597 169.009766,231.317429 
      C169.026306,236.520111 170.481674,237.972870 175.725754,237.987076 
      C189.526962,238.024445 203.329208,237.913467 217.129120,238.051666 
      C221.349503,238.093933 223.101654,236.534317 223.052505,232.229355 
      C222.906357,219.427399 222.889633,206.621155 223.069412,193.820068 
      C223.121277,190.126541 221.937714,188.498535 217.274292,188.999741 
      M202.498962,180.000275 
      C207.328094,180.000275 212.165680,179.822327 216.983902,180.051697 
      C221.556244,180.269363 223.126923,178.315308 223.062164,173.858627 
      C222.883163,161.538620 222.797775,149.209305 223.103821,136.894318 
      C223.219727,132.229858 221.480270,130.899368 217.149780,130.945435 
      C203.330063,131.092499 189.507767,130.993484 175.686478,131.002960 
      C170.181396,131.006744 169.036804,132.078873 169.013550,137.609924 
      C168.963120,149.599258 169.058548,161.589432 168.967285,173.578293 
      C168.932419,178.157166 170.994629,180.092636 175.522400,180.032990 
      C184.180008,179.918915 192.840210,180.000122 202.498962,180.000275 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M0.999998,255.468658 
      C1.944601,254.532028 3.312009,254.316101 3.765475,253.555359 
      C6.800497,248.463791 11.488600,246.991776 17.007574,246.992783 
      C77.991974,247.003830 138.976364,246.999664 199.960770,246.999664 
      C250.614487,246.999664 301.269501,247.198181 351.921021,246.864197 
      C365.065765,246.777527 377.968536,244.046509 389.819366,238.485535 
      C387.123779,231.147217 384.014313,224.325043 382.113831,217.181229 
      C377.560974,200.067383 380.360321,183.387604 387.065704,167.390564 
      C389.990265,160.413376 394.457123,154.097916 397.871399,147.304947 
      C399.895844,143.277115 402.023224,143.757050 405.286926,145.721069 
      C426.572266,158.530182 440.147217,176.796219 445.131042,201.264908 
      C445.158264,201.398621 445.301270,201.508743 444.927521,200.999664 
      C455.133850,200.999664 464.881439,200.636505 474.591400,201.086258 
      C488.541534,201.732437 501.471252,205.723999 512.765259,214.340668 
      C513.000000,216.370560 513.000000,218.741104 512.733521,221.215668 
      C512.082764,221.637543 511.504913,221.877853 511.342010,222.284454 
      C503.505798,241.840637 489.041687,254.118866 469.515320,261.264496 
      C458.177338,265.413635 446.565216,266.412109 434.694305,265.954254 
      C431.365509,273.897095 428.421539,281.776154 424.821808,289.343262 
      C415.722961,308.470490 405.700439,327.078308 392.994049,344.138245 
      C380.213959,361.297241 365.591858,376.750000 348.574951,389.616394 
      C325.203186,407.287537 299.223358,419.961121 271.106750,428.588684 
      C247.518997,435.826569 223.342911,439.118713 198.964935,440.762817 
      C184.633804,441.729309 170.105865,440.869141 155.736221,439.848450 
      C142.890091,438.935974 130.064743,437.109314 117.364182,434.911743 
      C97.204414,431.423523 78.178047,424.912842 61.072456,413.108582 
      C43.269974,400.823395 31.023891,384.114349 21.732668,365.127716 
      C11.667187,344.558868 5.857688,322.613892 2.916257,299.904968 
      C2.824825,299.199097 1.662873,298.631866 0.999999,298.000000 
      C1.000000,283.979095 1.000000,269.958221 0.999998,255.468658 z"
            />
            <path
                fill="transparent"
                opacity="1.000000"
                stroke="none"
                d="M0.999999,298.468658 
      C1.662873,298.631866 2.824825,299.199097 2.916257,299.904968 
      C5.857688,322.613892 11.667187,344.558868 21.732668,365.127716 
      C31.023891,384.114349 43.269974,400.823395 61.072456,413.108582 
      C78.178047,424.912842 97.204414,431.423523 117.364182,434.911743 
      C130.064743,437.109314 142.890091,438.935974 155.736221,439.848450 
      C170.105865,440.869141 184.633804,441.729309 198.964935,440.762817 
      C223.342911,439.118713 247.518997,435.826569 271.106750,428.588684 
      C299.223358,419.961121 325.203186,407.287537 348.574951,389.616394 
      C365.591858,376.750000 380.213959,361.297241 392.994049,344.138245 
      C405.700439,327.078308 415.722961,308.470490 424.821808,289.343262 
      C428.421539,281.776154 431.365509,273.897095 434.694305,265.954254 
      C446.565216,266.412109 458.177338,265.413635 469.515320,261.264496 
      C489.041687,254.118866 503.505798,241.840637 511.342010,222.284454 
      C511.504913,221.877853 512.082764,221.637543 512.733521,221.659821 
      C513.000000,318.958282 513.000000,415.916595 513.000000,512.937439 
      C342.448456,512.937439 171.896866,512.937439 1.000000,512.937439 
      C1.000000,441.646149 1.000000,370.291718 0.999999,298.468658 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M272.961609,122.000397 
      C261.140106,122.000374 249.810303,121.862099 238.486725,122.067665 
      C233.891144,122.151093 231.836441,120.732315 231.925995,115.825859 
      C232.150940,103.503197 232.096100,91.172523 231.947845,78.847542 
      C231.896637,74.590370 233.527710,72.905556 237.812531,72.947693 
      C251.970291,73.086952 266.131165,73.089134 280.288879,72.947166 
      C284.661194,72.903328 286.102356,74.775269 286.051636,78.948036 
      C285.905792,90.939880 286.002686,102.934631 285.999023,114.928246 
      C285.996948,121.691368 285.695068,121.990356 278.952850,121.999947 
      C277.120483,122.002548 275.288147,122.000374 272.961609,122.000397 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M106.000557,149.004669 
      C106.000732,144.341888 106.064240,140.176651 105.981888,136.014282 
      C105.910652,132.414139 107.644249,130.965988 111.145050,130.978485 
      C125.802132,131.030838 140.459534,131.015671 155.116760,130.989304 
      C158.383530,130.983429 160.014267,132.447830 160.008270,135.775681 
      C159.984573,148.933853 159.984283,162.092148 160.008209,175.250320 
      C160.014313,178.598114 158.347443,180.018280 155.090530,180.011887 
      C140.433319,179.983215 125.775856,179.960159 111.118889,180.026154 
      C107.225914,180.043671 105.910095,178.167664 105.962929,174.486908 
      C106.082443,166.160614 106.000542,157.831436 106.000557,149.004669 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M232.000381,159.998413 
      C232.000504,151.836151 232.100464,144.171631 231.960312,136.511490 
      C231.885620,132.430740 233.663910,130.925934 237.649094,130.956711 
      C251.974167,131.067383 266.300903,131.051086 280.626312,130.965912 
      C284.396301,130.943512 286.053925,132.475479 286.030212,136.283844 
      C285.950317,149.110046 285.944946,161.937439 286.033203,174.763519 
      C286.059570,178.596451 284.380402,180.060059 280.628265,180.036423 
      C266.302917,179.946243 251.976151,179.932831 237.651077,180.043396 
      C233.667099,180.074127 231.832260,178.572449 231.965454,174.489578 
      C232.117416,169.830276 232.000473,165.162216 232.000381,159.998413 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M260.000000,188.999619 
      C267.162933,188.999771 273.828186,189.106125 280.487976,188.960815 
      C284.568054,188.871780 286.080414,190.662201 286.043365,194.648270 
      C285.925659,207.306793 285.938446,219.967560 286.037170,232.626419 
      C286.066620,236.405701 284.527863,238.045807 280.734772,238.027557 
      C266.243164,237.957764 251.750671,237.944702 237.259323,238.036148 
      C233.401459,238.060486 231.947769,236.345886 231.970825,232.625000 
      C232.049255,219.965866 232.074921,207.305267 231.956970,194.646744 
      C231.919815,190.659607 233.433884,188.880951 237.513031,188.959930 
      C244.839539,189.101822 252.170746,188.999741 260.000000,188.999619 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M346.326111,237.827942 
      C330.896454,237.970398 315.899017,237.899719 300.903900,238.054443 
      C296.681671,238.098022 294.898651,236.583054 294.948883,232.259125 
      C295.093994,219.763458 295.096954,207.263855 294.947266,194.768311 
      C294.895416,190.441803 296.674896,188.906815 300.894135,188.947662 
      C315.056488,189.084702 329.221466,189.067596 343.384277,188.956909 
      C347.394348,188.925568 349.079315,190.489899 349.042297,194.547318 
      C348.926849,207.210251 349.084839,219.876129 348.900269,232.537430 
      C348.875031,234.268387 347.506073,235.979752 346.326111,237.827942 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M98.000648,215.999512 
      C98.000504,221.825348 97.802956,227.161057 98.064613,232.474167 
      C98.262932,236.501144 95.993324,237.911224 92.737587,237.939362 
      C77.925758,238.067383 63.109676,238.116989 48.303246,237.806870 
      C46.841793,237.776245 44.227634,235.132751 44.192402,233.653336 
      C43.871548,220.179550 43.871136,206.691711 44.199245,193.218262 
      C44.234272,191.779739 46.937973,189.218002 48.444489,189.187439 
      C63.417694,188.883469 78.399498,189.010834 93.378853,188.996185 
      C96.791138,188.992844 98.046738,190.806396 98.018936,194.029404 
      C97.957191,201.185684 98.000298,208.342880 98.000648,215.999512 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M111.383804,189.000061 
      C125.668282,188.999649 139.488113,188.992630 153.307953,189.002838 
      C159.429031,189.007355 159.988007,189.541122 159.995621,195.460709 
      C160.011261,207.615479 159.885666,219.771942 160.060181,231.924225 
      C160.124451,236.399292 158.492966,238.129807 153.945709,238.067398 
      C140.294952,237.880035 126.639923,238.021774 112.986671,237.989746 
      C106.954788,237.975601 106.006729,237.014435 106.002861,231.198990 
      C105.994781,219.044205 106.054459,206.889008 105.966530,194.734863 
      C105.940994,191.204758 106.890335,188.862350 111.383804,189.000061 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M217.746841,188.999847 
      C221.937714,188.498535 223.121277,190.126541 223.069412,193.820068 
      C222.889633,206.621155 222.906357,219.427399 223.052505,232.229355 
      C223.101654,236.534317 221.349503,238.093933 217.129120,238.051666 
      C203.329208,237.913467 189.526962,238.024445 175.725754,237.987076 
      C170.481674,237.972870 169.026306,236.520111 169.009766,231.317429 
      C168.972229,219.511597 168.970673,207.705505 169.008987,195.899689 
      C169.028290,189.952408 170.014984,189.004913 175.870392,189.001999 
      C189.671692,188.995087 203.472992,188.999756 217.746841,188.999847 z"
            />
            <path
                fill="#2496ED"
                opacity="1.000000"
                stroke="none"
                d="M201.999146,180.000275 
      C192.840210,180.000122 184.180008,179.918915 175.522400,180.032990 
      C170.994629,180.092636 168.932419,178.157166 168.967285,173.578293 
      C169.058548,161.589432 168.963120,149.599258 169.013550,137.609924 
      C169.036804,132.078873 170.181396,131.006744 175.686478,131.002960 
      C189.507767,130.993484 203.330063,131.092499 217.149780,130.945435 
      C221.480270,130.899368 223.219727,132.229858 223.103821,136.894318 
      C222.797775,149.209305 222.883163,161.538620 223.062164,173.858627 
      C223.126923,178.315308 221.556244,180.269363 216.983902,180.051697 
      C212.165680,179.822327 207.328094,180.000275 201.999146,180.000275 z"
            />
        </ModDockerIcon>
    )
}

export default withLayout(DockerIcon)
