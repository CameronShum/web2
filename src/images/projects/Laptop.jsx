import React from 'react';

const Laptop = () => (
  <svg
    width="108"
    height="68"
    viewBox="0 0 108 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <rect
        x="6.23462"
        width="96.0894"
        height="56.7391"
        rx="3"
        fill="#78909C"
      />
      <g filter="url(#filter1_i)">
        <rect x="10" y="3" width="89" height="51" fill="#006064" />
      </g>
      <rect x="4" y="54.1304" width="100" height="5.86957" fill="#607D8B" />
      <rect
        width="10.3175"
        height="2.00481"
        rx="1.00241"
        transform="matrix(0.719151 -0.694853 0.719151 0.694853 40 28.393)"
        fill="#009688"
      />
      <rect
        width="9.14417"
        height="2.00481"
        rx="1.00241"
        transform="matrix(0.719151 0.694853 -0.719151 0.694853 41.4503 27.024)"
        fill="#009688"
      />
      <path
        d="M69.2791 28.917C69.6772 28.5324 69.6772 27.9087 69.2791 27.524L64.0241 22.4465C63.626 22.0618 62.9805 22.0618 62.5823 22.4465C62.1842 22.8312 62.1842 23.4549 62.5823 23.8396L67.8374 28.917C68.2355 29.3017 68.881 29.3017 69.2791 28.917Z"
        fill="#009688"
      />
      <rect
        width="9.14416"
        height="2.00481"
        rx="1.00241"
        transform="matrix(-0.719151 0.694854 0.719151 0.694854 68.3662 27.024)"
        fill="#009688"
      />
      <rect
        width="21.6475"
        height="1.98407"
        rx="0.992034"
        transform="matrix(0.481647 -0.876365 0.855029 0.51858 47.839 36.9711)"
        fill="#009688"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="108"
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
      <filter
        id="filter1_i"
        x="10"
        y="3"
        width="89"
        height="53"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>
);

export default Laptop;
