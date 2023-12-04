import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ParaglidingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 17C10.9 17 10 16.11 10 15C10 13.89 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.11 17 12 17ZM19 14H17C17 16.76 14.76 19 12 19C9.24001 19 7.00001 16.76 7.00001 14H5.00001C5.00001 16.79 6.64001 19.19 9.00001 20.32V23H15V20.32C17.36 19.19 19 16.79 19 14ZM23 7.76C23.04 8.56 22.05 9.06 21.41 8.6C21.27 8.46 21.16 8.44 21 8.32L18.97 13H17L15.5 6.73C13.21 6.5 10.79 6.5 8.50001 6.73L7.00001 13H5.03001L3.00001 8.32C2.84001 8.44 2.73001 8.46 2.59001 8.6C1.95001 9.06 0.959012 8.56 1.00001 7.76V4C1.00001 4 1.00001 1 12 1C23 1 23 4 23 4V7.76ZM6.90001 7C6.00001 7.2 5.15001 7.43 4.37001 7.71L5.87001 11.27L6.90001 7ZM19.63 7.71C18.85 7.43 18 7.2 17.1 7L18.13 11.27L19.63 7.71Z" />
    </Svg>
  );
};
