import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandBackRightOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.73L19.1701 21.06C17.7001 22.85 15.5001 24 13.0001 24C9.74011 24 6.81011 22 5.60011 19L2.57011 11.37C2.26011 10.58 3.00011 9.79 3.81011 10.05L4.60011 10.31C5.16011 10.5 5.62011 10.92 5.84011 11.47L7.25011 15H8.00011V9.89L1.11011 3L2.39011 1.73L22.1101 21.46L20.8401 22.73ZM14.0001 1.25C14.0001 0.56 13.4401 0 12.7501 0C12.0601 0 11.5001 0.56 11.5001 1.25V8.3L14.0001 10.8V1.25ZM21.0001 16V5.75C21.0001 5.06 20.4401 4.5 19.7501 4.5C19.0601 4.5 18.5001 5.06 18.5001 5.75V12H17.5001V2.75C17.5001 2.06 16.9401 1.5 16.2501 1.5C15.5601 1.5 15.0001 2.06 15.0001 2.75V11.8L20.8301 17.63C20.9401 17.11 21.0001 16.56 21.0001 16ZM10.5001 3.25C10.5001 2.56 9.94011 2 9.25011 2C8.56011 2 8.00011 2.56 8.00011 3.25V4.8L10.5001 7.3V3.25Z" />
    </Svg>
  );
};
