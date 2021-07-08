interface Props {
  width?: string;
  height?: string;
}

const Logo = ({ height = '90px', width = '112px' }: Props) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 199 121"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-reactroot=""
    >
      <g
        id="social-media-ads"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <path
          d="M135.096916,0.670145992 C146.505229,1.08317975 157.523195,1.65039916 167.878339,3.46948354 C170.591553,15.3750206 173.494959,34.3864838 171.258265,58.2441646 L171.191395,58.936845 L171.354395,59.185845 L171.712994,59.2963601 C188.738905,64.5834973 198.925911,71.6607003 198.925911,79.5478506 C198.925911,90.7815015 177.708644,100.546095 146.50143,105.518362 L146.429355,105.545845 L145.895046,105.926472 C133.038367,114.966108 116.044626,120.469132 97.406571,120.469132 C77.9422494,120.469132 60.2803787,114.460229 47.2425019,104.695687 L47.0173402,104.590127 C18.7932262,99.3898802 -5.10256418e-05,90.120117 -5.10256418e-05,79.5477996 C-5.10256418e-05,72.0616266 9.42744641,65.2289557 24.9494464,60.0305506 L24.866949,60.057845 L24.9563554,59.954845 L25.017873,59.2537368 C25.3944606,55.3769459 26.282217,51.6137945 27.5991569,47.9928886 C27.6501826,47.8458506 27.706821,47.7003443 27.7593774,47.5543274 C27.9374569,47.0800278 28.1165569,46.6067494 28.3094338,46.1380658 C38.8763338,19.3526481 74.2983338,-1.53082869 135.096916,0.670145992 Z M73.0591251,79.4642228 C71.0619815,70.0512397 65.8374662,63.1858937 61.3900713,64.1304084 C56.9426764,65.0754338 54.9562482,73.4719148 56.9533918,82.8854084 C58.9505354,92.2983916 64.1750508,99.1637376 68.6224456,98.2187122 C73.0698405,97.2741975 75.056779,88.8772059 73.0591251,79.4642228 Z M126.111301,79.4640696 C124.114157,88.8775633 126.100585,97.2740443 130.54798,98.2190696 C134.995375,99.1635844 140.21989,92.2982384 142.217034,82.8852553 C144.214177,73.4722722 142.227749,65.0752806 137.780865,64.1307658 C133.332959,63.1857405 128.108954,70.0510865 126.111301,79.4640696 Z"
          id="Combined-Shape"
          fill="#fff"
        ></path>
      </g>
    </svg>
  );
};

export default Logo;
