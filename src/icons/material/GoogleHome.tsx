import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleHomeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.05989 7.78005C7.49989 7.78005 7.16989 7.73005 7.07989 7.64005L6.65989 13.73C7.18989 14.05 7.87989 14.3 8.71989 14.5C9.55989 14.71 10.7799 14.77 12.3799 14.67C13.9699 14.58 15.6299 14.23 17.3399 13.64L16.5499 4.22005C15.6699 5.09005 14.3799 5.91005 12.6599 6.66005C11.1299 7.31005 9.80989 7.69005 8.71989 7.78005H8.05989ZM7.96989 5.34005C7.27989 5.94005 6.99989 6.34005 7.12989 6.56005C7.21989 6.78005 7.69989 6.84005 8.57989 6.75005C9.66989 6.66005 10.9099 6.31005 12.2799 5.72005C13.2199 5.31005 14.0299 4.88005 14.7199 4.41005C15.4099 3.94005 15.8799 3.55005 16.1299 3.23005C16.3799 2.92005 16.4699 2.70005 16.4099 2.58005C16.3399 2.42005 16.0299 2.34005 15.4699 2.34005C14.3399 2.34005 12.9399 2.70005 11.2499 3.42005C9.80989 4.05005 8.71989 4.69005 7.96989 5.34005ZM17.3399 2.20005C17.4099 2.33005 17.4399 2.47005 17.4399 2.63005L18.6099 17C18.6099 18.73 17.9999 20.09 16.8299 21.07C15.6399 22.05 14.0299 22.55 11.9999 22.55C9.99989 22.55 8.39989 22.04 7.19989 21C5.99989 20 5.38989 18.64 5.38989 16.92L6.08989 6.47005C6.08989 6.22005 6.19989 5.94005 6.41989 5.63005C6.63989 5.31005 6.83989 5.06005 7.02989 4.88005L7.35989 4.59005C8.32989 3.78005 9.49989 3.08005 10.8799 2.50005C11.8099 2.08005 12.7299 1.77005 13.6199 1.57005C14.4999 1.37005 15.2999 1.30005 15.9999 1.38005C16.7099 1.46005 17.1599 1.73005 17.3399 2.20005Z" />
    </Svg>
  );
};
