import Svg, { Path } from "react-native-svg";
type SvgType = {
  classStyle?: string;
};
export const AngleLeftIcon = ({ classStyle }: SvgType) => (
  <Svg className={classStyle} viewBox="0 0 256 512">
    <Path d="M166.547 424.503L22.562 272.501C18.187 267.876 16 261.938 16 256.001C16 250.063 18.188 244.126 22.562 239.501L166.547 87.499C175.672 77.874 190.859 77.468 200.48 86.561C210.168 95.686 210.512 110.936 201.418 120.499L73.055 256.001L201.418 391.503C210.512 401.065 210.168 416.253 200.48 425.44C190.859 434.534 175.672 434.128 166.547 424.503Z" />
  </Svg>
);
export const ThreeDotVerticalIcon = ({ classStyle }: SvgType) => (
  <Svg className={classStyle} viewBox="0 0 128 512">
    <Path d="M64 112C90.5 112 112 90.5 112 64S90.5 16 64 16S16 37.5 16 64S37.5 112 64 112ZM64 400C37.5 400 16 421.5 16 448S37.5 496 64 496S112 474.5 112 448S90.5 400 64 400ZM64 208C37.5 208 16 229.5 16 256S37.5 304 64 304S112 282.5 112 256S90.5 208 64 208Z" />
  </Svg>
);
export const StarIcon = ({ classStyle }: SvgType) => (
  <Svg className={classStyle} viewBox="0 0 576 512">
    <Path d="M316.74 17.805L382.171 150.196L528.532 171.491C554.798 175.287 565.317 207.581 546.283 226.078L440.371 329.067L465.417 474.551C469.925 500.86 442.187 520.452 418.926 508.25L288 439.555L157.074 508.25C133.813 520.546 106.075 500.86 110.583 474.551L135.629 329.067L29.717 226.078C10.683 207.581 21.202 175.287 47.468 171.491L193.829 150.196L259.26 17.805C271.063 -6.083 305.031 -5.786 316.74 17.805Z" />
  </Svg>
);
export const LocationIcon = ({ classStyle }: SvgType) => (
  <Svg className={classStyle} viewBox="0 0 384 512">
    <Path d="M192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C181.813 515.441 202.188 515.441 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM192 271.998C147.875 271.998 112 236.123 112 191.998S147.875 111.997 192 111.997S272 147.872 272 191.998S236.125 271.998 192 271.998Z" />
  </Svg>
);
export const ShareIcon = ({ classStyle }: SvgType) => (
  <Svg className={classStyle} viewBox="0 0 448 512">
    <Path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM336 192C362.51 192 384 170.51 384 144S362.51 96 336 96S288 117.49 288 144C288 148.871 288.939 153.48 290.289 157.91L150.629 227.74C141.895 215.826 127.904 208 112 208C85.49 208 64 229.49 64 256S85.49 304 112 304C127.904 304 141.895 296.174 150.629 284.26L290.289 354.09C288.939 358.52 288 363.129 288 368C288 394.51 309.49 416 336 416S384 394.51 384 368S362.51 320 336 320C320.096 320 306.105 327.826 297.371 339.74L157.711 269.91C159.061 265.48 160 260.871 160 256S159.061 246.52 157.711 242.09L297.371 172.26C306.105 184.174 320.096 192 336 192ZM336 112C353.645 112 368 126.355 368 144S353.645 176 336 176S304 161.645 304 144S318.355 112 336 112ZM112 288C94.355 288 80 273.645 80 256S94.355 224 112 224S144 238.355 144 256S129.645 288 112 288ZM336 336C353.645 336 368 350.355 368 368S353.645 400 336 400S304 385.645 304 368S318.355 336 336 336Z" />
  </Svg>
);