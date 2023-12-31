import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallSconceRoundIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 19.0005V16.0005H11V19.0005H13ZM19.09 16.5005L20.5 15.0905L18.73 13.3205L17.32 14.7305L19.09 16.5005ZM4.91 16.5005L6.68 14.7305L5.27 13.3205L3.5 15.0905L4.91 16.5005ZM20 12.0005C20 9.14055 18.5 6.50055 16 5.07055C13.5 3.64055 10.5 3.64055 8 5.07055C5.5 6.50055 4 9.14055 4 12.0005H20Z" />
    </Svg>
  );
};
