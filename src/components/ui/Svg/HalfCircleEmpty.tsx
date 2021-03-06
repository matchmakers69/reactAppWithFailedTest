import { FC } from "react";
import { IPropsIcons } from "interfaces/icons";

const Icon: FC<IPropsIcons> = function ({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 558 261"
      preserveAspectRatio="xMidYMid meet"
    >
      <g id="Group_985" data-name="Group 985" transform="translate(-1077 -347)">
        <path
          id="Subtraction_2"
          data-name="Subtraction 2"
          d="M558,261H502.2c0-55.684-23.243-108.093-65.448-147.574S338.523,52.2,279,52.2C155.927,52.2,55.8,145.867,55.8,261H0A245.784,245.784,0,0,1,21.925,159.406a256.215,256.215,0,0,1,25.724-44.334A267.548,267.548,0,0,1,81.717,76.445a277.848,277.848,0,0,1,41.291-31.87A285.629,285.629,0,0,1,170.4,20.511,291.875,291.875,0,0,1,222.772,5.3a300.8,300.8,0,0,1,112.456,0A291.877,291.877,0,0,1,387.6,20.511a285.659,285.659,0,0,1,47.392,24.064,277.839,277.839,0,0,1,41.291,31.87,267.51,267.51,0,0,1,34.068,38.627,256.222,256.222,0,0,1,25.724,44.334A245.785,245.785,0,0,1,558,261Z"
          transform="translate(1077 347)"
          fill="#e5e5e5"
        />
        <g
          id="Styling_-_heading-xl"
          data-name="Styling - heading-xl"
          transform="translate(1245 501)"
        >
          <text
            id="What_s_this_"
            data-name="What's this?"
            transform="translate(0 41)"
            fill="#0b0c0c"
            fontSize="41"
            fontFamily="NeueKabel-Regular, Neue Kabel"
          >
            <tspan x="0" y="0">
              What&apos;s this?
            </tspan>
          </text>
        </g>
        <g id="Tooltip" transform="translate(1452.222 481.735)">
          <path
            id="ic_help_24px"
            d="M15.487,2A13.487,13.487,0,1,0,28.973,15.487,13.491,13.491,0,0,0,15.487,2Zm1.349,22.927h-2.7v-2.7h2.7Zm2.792-10.452-1.214,1.241a4.591,4.591,0,0,0-1.578,3.817h-2.7v-.674a5.428,5.428,0,0,1,1.578-3.817l1.672-1.7a2.637,2.637,0,0,0,.8-1.9,2.7,2.7,0,0,0-5.395,0h-2.7a5.395,5.395,0,1,1,10.789,0A4.291,4.291,0,0,1,19.627,14.475Z"
            transform="translate(-2 -2)"
            fill="#f8a916"
          />
        </g>
      </g>
    </svg>
  );
};

export default Icon;
