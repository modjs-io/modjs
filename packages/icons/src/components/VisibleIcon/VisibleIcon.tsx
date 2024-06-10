import React from 'react'
import { styled } from 'styled-components'
import { withLayout } from '../../../../utils/src/index'
import { IconProps } from '../../utils/IconProps'

const ModVisibleIcon = styled.svg<IconProps>`
    fill: ${props => (props.fill ? props.fill : props.theme.color.primary)};
    height: ${props =>
        props.height ? props.height : props.theme.icons.height.sm};
    width: ${props => (props.width ? props.width : props.theme.icons.width.sm)};
`

const VisibleIcon = ({ fill, height, width, ...props }: IconProps) => {
    return (
        <ModVisibleIcon
            {...props}
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900.000000 900.000000"
            preserveAspectRatio="xMidYMid meet"
            height={height}
            width={width}
        >
            <g
                transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
                fill={fill}
                stroke="none"
            >
                <path
                    d="M4065 7539 c-22 -5 -83 -13 -135 -19 -128 -12 -279 -36 -313 -49 -16
-6 -48 -11 -73 -11 -25 0 -61 -7 -81 -15 -19 -8 -47 -15 -62 -15 -24 0 -41 -4
-166 -44 -27 -9 -58 -16 -68 -16 -11 0 -33 -6 -50 -14 -18 -8 -45 -16 -62 -19
-16 -3 -55 -15 -85 -27 -30 -12 -70 -25 -89 -30 -18 -5 -38 -13 -44 -19 -6 -6
-20 -11 -32 -11 -12 0 -30 -7 -41 -15 -10 -8 -27 -15 -36 -15 -10 0 -48 -14
-85 -31 -38 -16 -81 -36 -98 -43 -87 -39 -172 -79 -185 -87 -8 -5 -22 -12 -30
-15 -27 -11 -34 -14 -95 -49 -33 -18 -82 -45 -110 -60 -27 -14 -63 -35 -80
-45 -16 -11 -37 -23 -45 -27 -8 -4 -41 -25 -75 -47 -68 -46 -93 -62 -115 -72
-8 -4 -40 -26 -70 -49 -30 -22 -65 -47 -76 -55 -19 -13 -69 -51 -188 -143 -30
-22 -157 -131 -231 -196 -96 -86 -355 -357 -461 -482 -70 -83 -277 -355 -285
-374 -2 -5 -30 -49 -62 -97 -31 -48 -57 -89 -57 -92 0 -3 -19 -33 -43 -68 -23
-35 -59 -97 -80 -138 -21 -41 -42 -83 -47 -92 -20 -36 -29 -54 -66 -128 -35
-71 -50 -103 -80 -175 -7 -16 -24 -56 -38 -87 -32 -71 -32 -85 0 -156 14 -31
31 -70 38 -87 30 -72 45 -104 80 -175 37 -74 46 -92 66 -127 5 -10 26 -52 47
-93 21 -41 57 -103 80 -138 24 -35 43 -66 43 -69 0 -26 277 -411 405 -563 104
-123 364 -395 460 -481 74 -65 201 -174 231 -196 119 -92 169 -130 188 -143
11 -8 46 -33 76 -55 30 -23 62 -45 70 -49 22 -10 47 -26 115 -72 34 -22 67
-43 75 -47 8 -4 29 -16 45 -27 17 -10 53 -31 80 -45 28 -15 77 -42 110 -60 33
-19 67 -37 75 -40 8 -4 22 -11 30 -16 8 -5 22 -12 30 -15 8 -3 44 -20 80 -36
36 -17 79 -36 95 -44 17 -7 60 -27 98 -43 37 -17 75 -31 86 -31 10 0 24 -7 31
-15 7 -8 24 -15 39 -15 15 0 32 -5 38 -11 6 -6 26 -14 44 -19 19 -5 59 -18 89
-30 30 -12 69 -24 85 -27 17 -3 44 -11 62 -19 17 -8 39 -14 50 -14 10 0 39 -7
66 -15 26 -8 68 -22 95 -30 26 -8 59 -15 73 -15 15 0 43 -7 62 -15 20 -8 56
-15 81 -15 25 0 57 -5 73 -11 35 -13 186 -37 313 -49 52 -5 115 -14 140 -19
59 -13 781 -13 840 0 25 5 88 14 140 19 123 11 286 36 301 46 7 4 42 10 78 14
78 8 197 36 321 76 25 8 53 14 63 14 11 0 33 6 50 14 18 8 46 16 62 19 17 3
55 15 85 27 30 12 70 25 89 30 18 5 38 13 44 19 6 6 22 11 36 11 15 0 35 7 45
15 11 8 26 15 33 15 7 0 43 14 80 31 38 16 82 36 98 43 136 61 234 109 310
152 33 18 67 36 75 40 8 3 22 9 30 14 8 5 33 18 54 30 36 20 123 75 224 141
24 16 45 29 48 29 3 0 31 19 62 43 31 23 67 49 78 57 19 13 63 47 188 143 145
111 461 411 591 562 24 28 74 86 112 130 37 44 74 84 81 88 6 4 12 12 12 18 0
5 42 65 93 134 88 118 207 295 207 308 0 3 19 34 43 69 23 35 59 97 80 138 21
41 43 84 49 95 24 43 96 189 115 232 7 18 20 47 28 65 8 18 24 57 37 86 13 28
29 52 35 52 8 0 13 13 13 30 0 17 -5 30 -13 30 -6 0 -22 24 -35 53 -13 28 -29
67 -37 85 -8 18 -21 47 -28 65 -19 43 -91 189 -115 232 -6 11 -28 54 -49 95
-21 41 -57 103 -80 138 -24 35 -43 65 -43 68 0 3 -26 44 -57 92 -32 48 -60 92
-62 97 -2 6 -44 63 -93 127 -48 64 -88 122 -88 127 0 6 -6 14 -12 18 -7 4 -44
44 -81 88 -38 44 -88 103 -112 130 -130 151 -446 451 -591 562 -125 96 -169
130 -188 143 -11 8 -47 34 -78 57 -31 24 -59 43 -62 43 -3 0 -24 13 -48 29
-101 66 -188 121 -224 141 -21 12 -46 25 -54 30 -8 5 -22 11 -30 14 -8 4 -35
18 -60 32 -76 44 -186 98 -325 160 -16 7 -60 27 -98 43 -37 17 -75 31 -86 31
-10 0 -24 7 -31 15 -7 8 -24 15 -39 15 -15 0 -32 5 -38 11 -6 6 -26 14 -44 19
-19 5 -59 18 -89 30 -30 12 -68 24 -85 27 -16 3 -44 11 -62 19 -17 8 -39 14
-50 14 -10 0 -38 6 -63 14 -124 40 -243 68 -321 76 -36 4 -71 10 -78 14 -15
10 -178 35 -301 46 -52 5 -115 14 -140 19 -56 13 -790 12 -845 0z m720 -1024
c22 -8 58 -15 80 -15 22 0 60 -6 85 -14 25 -8 68 -21 96 -30 29 -9 60 -16 70
-16 11 0 28 -7 38 -15 11 -8 28 -15 38 -15 25 0 257 -108 323 -150 17 -11 37
-23 45 -27 75 -36 262 -184 376 -297 113 -114 261 -301 297 -376 4 -8 16 -28
27 -45 42 -66 150 -298 150 -323 0 -10 7 -27 15 -38 8 -10 15 -27 15 -38 0
-10 7 -41 16 -70 9 -28 22 -71 30 -96 8 -25 14 -63 14 -85 0 -22 7 -58 15 -80
11 -31 14 -98 14 -295 0 -197 -3 -264 -14 -295 -8 -22 -15 -58 -15 -80 0 -22
-6 -60 -14 -85 -8 -25 -21 -68 -30 -96 -9 -29 -16 -60 -16 -70 0 -11 -7 -28
-15 -38 -8 -11 -15 -28 -15 -38 0 -25 -108 -257 -150 -323 -11 -16 -23 -37
-27 -45 -36 -75 -184 -262 -297 -376 -114 -113 -301 -261 -376 -297 -8 -4 -28
-16 -45 -27 -66 -42 -298 -150 -323 -150 -10 0 -27 -7 -38 -15 -10 -8 -27 -15
-38 -15 -10 0 -41 -7 -70 -16 -28 -9 -71 -22 -96 -30 -25 -8 -63 -14 -85 -14
-22 0 -58 -7 -80 -15 -58 -20 -532 -20 -590 0 -22 8 -58 15 -80 15 -22 0 -60
6 -85 14 -25 8 -68 21 -96 30 -29 9 -60 16 -70 16 -11 0 -28 7 -38 15 -11 8
-28 15 -38 15 -25 0 -257 108 -323 150 -16 11 -37 23 -45 27 -75 36 -262 184
-376 297 -113 114 -261 301 -297 376 -4 8 -16 29 -27 45 -42 66 -150 298 -150
323 0 10 -7 27 -15 38 -8 10 -15 27 -15 38 0 10 -7 41 -16 70 -9 28 -22 71
-30 96 -8 25 -14 63 -14 85 0 22 -7 58 -15 80 -20 58 -20 532 0 590 8 22 15
58 15 80 0 22 6 60 14 85 8 25 21 68 30 96 9 29 16 60 16 70 0 11 7 28 15 38
8 11 15 28 15 38 0 25 108 257 150 323 11 17 23 37 27 45 36 75 184 262 297
376 114 113 301 261 376 297 8 4 29 16 45 27 66 42 298 150 323 150 10 0 27 7
38 15 10 8 27 15 38 15 10 0 41 7 70 16 28 9 71 22 96 30 25 8 63 14 85 14 22
0 58 7 80 15 31 11 98 14 295 14 197 0 264 -3 295 -14z"
                />
                <path
                    d="M4355 5708 c-22 -5 -65 -13 -95 -17 -55 -7 -107 -22 -168 -47 -18 -8
-39 -14 -46 -14 -15 0 -161 -74 -226 -115 -122 -77 -278 -233 -355 -355 -41
-65 -115 -211 -115 -226 0 -7 -6 -28 -14 -46 -25 -61 -40 -113 -47 -168 -4
-30 -12 -75 -18 -100 -5 -25 -10 -83 -10 -130 0 -47 5 -105 10 -130 6 -25 14
-70 18 -100 7 -55 22 -107 47 -168 8 -18 14 -39 14 -46 0 -15 74 -161 115
-226 77 -122 233 -278 355 -355 65 -41 211 -115 226 -115 7 0 28 -6 46 -14 61
-25 113 -40 168 -47 30 -4 75 -12 100 -18 25 -5 83 -10 130 -10 47 0 105 5
130 10 25 6 70 14 100 18 55 7 107 22 168 47 18 8 39 14 46 14 15 0 161 74
226 115 122 77 278 233 355 355 41 65 115 211 115 226 0 7 6 28 14 46 25 61
40 113 47 168 4 30 12 75 18 100 5 25 10 83 10 130 0 47 -5 105 -10 130 -6 25
-14 70 -18 100 -7 55 -22 107 -47 168 -8 18 -14 39 -14 46 0 15 -74 161 -115
226 -77 122 -233 278 -355 355 -65 41 -211 115 -226 115 -7 0 -28 6 -46 14
-61 25 -113 40 -168 47 -30 4 -75 12 -100 18 -55 12 -211 12 -265 -1z"
                />
            </g>
        </ModVisibleIcon>
    )
}

export default withLayout(VisibleIcon)
