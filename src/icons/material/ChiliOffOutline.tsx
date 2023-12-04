import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChiliOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.0001 8.27998C15.6001 8.62998 16.0001 9.26998 16.0001 9.99998V12.8L11.5001 8.28998L12.0001 7.99998L13.7501 8.99998L15.0001 8.27998ZM12.0001 6.49998L13.7501 7.49998L15.2701 6.62998C14.7201 5.65998 13.9101 4.93998 12.9701 4.64998C12.7901 3.15998 11.5401 1.99998 10.0001 1.99998V3.99998C10.4401 3.99998 10.8001 4.28998 10.9401 4.68998C10.2601 4.91998 9.66011 5.36998 9.17011 5.96998L10.5401 7.33998L12.0001 6.49998ZM22.1101 21.46L20.8401 22.73L16.0001 17.89V22C16.0001 22 8.00011 20 8.00011 11V9.99998C8.00011 9.96998 8.00011 9.93998 8.00011 9.89998L1.11011 2.99998L2.39011 1.72998L22.1101 21.46ZM14.0001 15.89L10.0701 11.96C10.3801 15.63 12.3101 17.74 14.0001 18.87V15.89Z" />
    </Svg>
  );
};
