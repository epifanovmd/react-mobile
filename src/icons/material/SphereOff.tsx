import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SphereOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.39011 1.73047L1.11011 3.00047L4.06011 5.95047C2.77011 7.63047 2.00011 9.72047 2.00011 12.0005C2.00011 17.5005 6.50011 22.0005 12.0001 22.0005C14.2801 22.0005 16.3701 21.2305 18.0501 19.9405L20.8401 22.7305L22.1101 21.4605L2.39011 1.73047ZM5.50011 7.39047L6.58011 8.47047C5.87011 8.62047 5.18011 8.80047 4.57011 9.05047C4.81011 8.45047 5.13011 7.90047 5.50011 7.39047ZM4.00011 12.0005C4.00011 11.2305 5.76011 10.5605 8.33011 10.2205L12.1101 14.0005H12.0001C7.58011 14.0005 4.00011 13.1105 4.00011 12.0005ZM12.0001 20.0005C8.63011 20.0005 5.75011 17.9105 4.57011 14.9505C6.07011 15.5705 8.39011 16.0005 12.0001 16.0005C12.6301 16.0005 13.3301 16.0005 14.0501 15.9405L16.6301 18.5005C15.3201 19.4505 13.7301 20.0005 12.0001 20.0005ZM8.19011 5.00047L6.72011 3.50047C8.25011 2.56047 10.0601 2.00047 12.0001 2.00047C17.5001 2.00047 22.0001 6.50047 22.0001 12.0005C22.0001 13.9405 21.4401 15.7505 20.5001 17.2805L19.0001 15.8105C19.1701 15.5405 19.3101 15.2505 19.4301 14.9605C19.1301 15.0805 18.8101 15.1805 18.4701 15.2705L16.8001 13.6005C18.7401 13.2305 20.0001 12.6505 20.0001 12.0005C20.0001 11.0005 17.0601 10.1705 13.2301 10.0305L11.2101 8.00047C11.5001 8.00047 11.7501 8.00047 12.0001 8.00047C15.6101 8.00047 17.9301 8.43047 19.4301 9.05047C18.2501 6.09047 15.3701 4.00047 12.0001 4.00047C10.6101 4.00047 9.32011 4.36047 8.19011 5.00047Z" />
    </Svg>
  );
};
