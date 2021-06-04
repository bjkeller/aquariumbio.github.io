import React from 'react';
import { SvgIcon } from '@material-ui/core';

// TODO: figure out how to make this work --- doesn't have to be svgicon
// this is function material-ui uses for icons
// https://github.com/mui-org/material-ui/blob/398684450a89ef2cf167d56be3e1a95ea1763f7a/packages/material-ui/src/utils/createSvgIcon.js#L7
// see, for instance: https://github.com/mui-org/material-ui/blob/next/packages/material-ui-icons/custom/Apple.js

const AquariumLogo = () => (
    <SvgIcon
        width={62}
        height={62}
    >
        <svg width="223" height="219" viewBox="0 0 223 219" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="223" height="219" fill="#40D3FD" />
            <path d="M58.0804 145.215H88.8975L94.9401 168.738H118.053L85.272 56.7029H63.2165L30.4355 168.738H51.8867L58.0804 145.215ZM84.2145 127.422H62.7634L65.7846 115.962C68.957 104.201 71.5251 96.209 73.4889 85.654H73.7911C75.906 96.0583 78.323 104.352 81.3443 116.113L84.2145 127.422Z" fill="white" />
            <path d="M170.406 198.895H192.764V88.3681H170.406V97.4153C165.572 90.9315 159.076 86.7095 149.861 86.7095C134.151 86.7095 123.576 100.13 123.576 128.93C123.576 157.73 134 169.944 149.71 169.944C159.681 169.944 166.176 164.365 170.406 158.786V198.895ZM158.17 152.603C149.71 152.603 145.934 144.762 145.934 128.779C145.934 112.192 149.861 105.407 158.019 105.407C163.004 105.407 166.932 108.423 170.406 112.343V145.516C167.083 148.984 163.155 152.603 158.17 152.603Z" fill="white" />
        </svg>
    </SvgIcon>
)

export default AquariumLogo