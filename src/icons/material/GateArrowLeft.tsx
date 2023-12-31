import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GateArrowLeftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 6H7V11H5V6H3V11H2V13H3V14.81C3.62 14.45 4.3 14.21 5 14.09V13H7V14.09C7.7 14.21 8.38 14.45 9 14.81V13H11V16.69C11.65 17.67 12 18.82 12 20C12 20.34 11.97 20.67 11.91 21H13V19H15V21H17V9H15V11H13V7H11V11H9V6ZM15 13V17H13V13H15ZM2 20L5 23V21H9V19H5V17L2 20Z" />
    </Svg>
  );
};
