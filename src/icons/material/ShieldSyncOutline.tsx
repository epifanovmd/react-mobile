import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldSyncOutlineIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M12 21C8.25 20 5 15.54 5 11.22V6.3L12 3.18L19 6.3V12.07C19.664 12.1694 20.3084 12.3718 20.91 12.67C20.98 12.1162 21.0101 11.5581 21 11V5L12 1L3 5V11C3 16.55 6.84 21.74 12 23C12.35 22.91 12.7 22.8 13 22.68C12.5813 22.1754 12.2439 21.6086 12 21ZM18 14.5V13L15.75 15.25L18 17.5V16C18.4267 15.9992 18.8466 16.1076 19.2196 16.3149C19.5926 16.5223 19.9063 16.8216 20.1308 17.1845C20.3554 17.5474 20.4833 17.9617 20.5024 18.388C20.5215 18.8144 20.4312 19.2385 20.24 19.62L21.33 20.71C21.7293 20.1076 21.958 19.4082 21.9916 18.6862C22.0253 17.9643 21.8627 17.2467 21.5211 16.6097C21.1796 15.9727 20.6718 15.4402 20.0518 15.0687C19.4318 14.6973 18.7228 14.5007 18 14.5ZM18 21C17.5733 21.0008 17.1534 20.8924 16.7804 20.6851C16.4074 20.4777 16.0937 20.1784 15.8692 19.8155C15.6446 19.4526 15.5167 19.0383 15.4976 18.612C15.4785 18.1856 15.5688 17.7615 15.76 17.38L14.67 16.29C14.2707 16.8924 14.042 17.5918 14.0084 18.3138C13.9747 19.0357 14.1373 19.7533 14.4789 20.3903C14.8204 21.0273 15.3282 21.5598 15.9482 21.9312C16.5682 22.3027 17.2772 22.4993 18 22.5V24L20.25 21.75L18 19.5V21Z" />
    </Svg>
  );
};
