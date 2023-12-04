import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HardHatIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.87 12.1491L9 6.45914C10.95 5.83914 13.05 5.83914 15 6.45914L14.13 12.1491C14.06 12.6391 13.63 12.9991 13.13 12.9991H10.86C10.37 12.9991 9.94 12.6391 9.87 12.1491ZM22 15.9991C22 15.2091 21.53 14.4991 20.8 14.1691C20.32 11.8591 18.96 9.82914 17 8.49914L15.24 13.3391C15.1 13.7391 14.72 13.9991 14.3 13.9991H9.7C9.28 13.9991 8.9 13.7391 8.76 13.3391L7 8.49914C5.04 9.82914 3.68 11.8591 3.2 14.1591C2.47 14.4991 2 15.1991 2 15.9991L8.45 17.8391C8.81 17.9391 9.18 17.9991 9.55 17.9991H14.43C14.8 17.9991 15.17 17.9391 15.53 17.8391L22 15.9991Z" />
    </Svg>
  );
};
