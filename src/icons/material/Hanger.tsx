import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HangerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 4C11.0717 4 10.1815 4.36875 9.52513 5.02513C8.86875 5.6815 8.5 6.57174 8.5 7.5H10.5C10.5 7.10218 10.658 6.72064 10.9393 6.43934C11.2206 6.15804 11.6022 6 12 6C12.3978 6 12.7794 6.15804 13.0607 6.43934C13.342 6.72064 13.5 7.10218 13.5 7.5C13.5 7.89782 13.342 8.27936 13.0607 8.56066C12.7794 8.84196 12.3978 9 12 9C11.45 9 11 9.45 11 10V11.75L2.4 18.2C2.23209 18.3259 2.10807 18.5015 2.04549 18.7018C1.98291 18.9022 1.98495 19.1171 2.05132 19.3162C2.11769 19.5153 2.24502 19.6885 2.41529 19.8112C2.58556 19.934 2.79012 20 3 20H21C21.2099 20 21.4144 19.934 21.5847 19.8112C21.755 19.6885 21.8823 19.5153 21.9487 19.3162C22.0151 19.1171 22.0171 18.9022 21.9545 18.7018C21.8919 18.5015 21.7679 18.3259 21.6 18.2L13 11.75V10.85C13.7216 10.6349 14.3546 10.1927 14.805 9.58919C15.2554 8.98569 15.4991 8.25303 15.5 7.5C15.5 6.57174 15.1313 5.6815 14.4749 5.02513C13.8185 4.36875 12.9283 4 12 4ZM12 13.5L18 18H6L12 13.5Z" />
    </Svg>
  );
};
