import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarInfoIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 15H17V13H19V15ZM20 20V22H16V20H17V18H16V16H19V20H20ZM18.92 5.00001C18.8163 4.70663 18.6239 4.45276 18.3694 4.27359C18.115 4.09442 17.8112 3.99881 17.5 4.00001H6.5C6.18882 3.99881 5.88497 4.09442 5.63055 4.27359C5.37613 4.45276 5.18372 4.70663 5.08 5.00001L3 11V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8947 3.73478 20 4 20H5C5.26522 20 5.51957 19.8947 5.70711 19.7071C5.89464 19.5196 6 19.2652 6 19V18H11C11 16.1435 11.7375 14.363 13.0503 13.0503C14.363 11.7375 16.1435 11 18 11C19.0387 10.996 20.0646 11.2285 21 11.68V11L18.92 5.00001ZM6.5 15C6.20333 15 5.91332 14.912 5.66664 14.7472C5.41997 14.5824 5.22771 14.3481 5.11418 14.074C5.00065 13.7999 4.97094 13.4983 5.02882 13.2074C5.0867 12.9164 5.22956 12.6491 5.43934 12.4394C5.64912 12.2296 5.91639 12.0867 6.20736 12.0288C6.49834 11.971 6.79994 12.0007 7.07403 12.1142C7.34811 12.2277 7.58238 12.42 7.7472 12.6667C7.91203 12.9133 8 13.2033 8 13.5C8 13.8978 7.84196 14.2794 7.56066 14.5607C7.27936 14.842 6.89782 15 6.5 15ZM5 10L6.5 5.50001H17.5L19 10H5Z" />
    </Svg>
  );
};
