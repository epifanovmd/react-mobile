import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountMultipleMinusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 17V19H7V17C7 17 7 13 13 13C19 13 19 17 19 17ZM16 8C16 7.40666 15.8241 6.82664 15.4944 6.33329C15.1648 5.83994 14.6962 5.45543 14.1481 5.22836C13.5999 5.0013 12.9967 4.94189 12.4147 5.05765C11.8328 5.1734 11.2982 5.45912 10.8787 5.87868C10.4591 6.29824 10.1734 6.83279 10.0576 7.41473C9.94189 7.99667 10.0013 8.59987 10.2284 9.14805C10.4554 9.69623 10.8399 10.1648 11.3333 10.4944C11.8266 10.8241 12.4067 11 13 11C13.7956 11 14.5587 10.6839 15.1213 10.1213C15.6839 9.55871 16 8.79565 16 8ZM19.2 13.06C19.7466 13.5643 20.1873 14.1724 20.4964 14.8489C20.8054 15.5254 20.9766 16.2566 21 17V19H24V17C24 17 24 13.55 19.2 13.06ZM18 5C17.6979 5.00018 17.3976 5.04741 17.11 5.14C17.6951 5.97897 18.0087 6.97718 18.0087 8C18.0087 9.02282 17.6951 10.021 17.11 10.86C17.3976 10.9526 17.6979 10.9998 18 11C18.7956 11 19.5587 10.6839 20.1213 10.1213C20.6839 9.55871 21 8.79565 21 8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5ZM8 10H0V12H8V10Z" />
    </Svg>
  );
};
