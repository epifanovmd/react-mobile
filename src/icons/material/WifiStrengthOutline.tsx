import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrengthOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 3C7.79011 3 3.70011 4.41 0.380107 7H0.360107C4.24011 11.83 8.13011 16.66 12.0001 21.5C15.8901 16.66 19.7701 11.83 23.6401 7H23.6501C20.3201 4.41 16.2201 3 12.0001 3ZM12.0001 5C15.0701 5 18.0901 5.86 20.7101 7.45L12.0001 18.3L3.27011 7.44C5.90011 5.85 8.92011 5 12.0001 5Z" />
    </Svg>
  );
};
