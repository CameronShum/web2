import React from "react";

const Phone = () => (
  <svg
    width="38"
    height="68"
    viewBox="0 0 38 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <rect
        x="5"
        y="1"
        width="28"
        height="58"
        rx="4"
        fill="#546E7A"
        stroke="#37474F"
        strokeWidth="2"
      />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="4"
        y="0"
        width="30"
        height="60"
      >
        <rect
          x="5.5"
          y="1.5"
          width="27"
          height="57"
          rx="3.5"
          fill="#546E7A"
          stroke="#263238"
          strokeWidth="3"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect x="11" y="-4" width="15" height="9.41177" rx="3" fill="#37474F" />
      </g>
      <rect
        x="10"
        y="10"
        width="16.1721"
        height="3.84615"
        rx="1.92308"
        fill="#76FF03"
      />
      <path
        d="M21.5097 10C20.8358 11.6667 21.5905 15 30 15L21.5097 10Z"
        fill="#76FF03"
      />
      <rect
        width="16.1721"
        height="3.84615"
        rx="1.92308"
        transform="matrix(-1 0 0 1 28 17)"
        fill="#CFD8DC"
      />
      <path
        d="M16.4903 17C17.1642 18.6667 16.4095 22 8 22L16.4903 17Z"
        fill="#CFD8DC"
      />
      <rect x="14" y="56" width="10" height="1" rx="0.5" fill="#CFD8DC" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="38"
        height="68"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Phone;
