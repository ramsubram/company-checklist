interface Props {
  size?: string;
  rotate?: number;
}

const Arrow = ({ size = '6px', rotate = 0 }: Props) => {
  return (
    <svg
      transform={`rotate(${rotate})`}
      height={size}
      viewBox="0 0 11 7"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="1"
      >
        <g
          id="ICONS"
          transform="translate(-155.000000, -280.000000)"
          className="caret_stroke"
          stroke="#fff"
          stroke-width="2"
        >
          <g id="Choose-grey" transform="translate(156.000000, 276.000000)">
            <polyline
              id="Path_3587"
              transform="translate(4.741359, 4.743000) rotate(135.000000) translate(-4.741359, -4.743000)"
              points="1.74135931 1.743 7.74135931 1.743 7.74135931 7.743"
            ></polyline>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Arrow;
