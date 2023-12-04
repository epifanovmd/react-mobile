import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const QrcodeEditIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 5H7V7H5V5ZM1 1H11V11H1V1ZM3 3V9H9V3H3ZM5 17H7V19H5V17ZM1 13H11V23H1V13ZM3 15V21H9V15H3ZM13 13H17V15H19V13H23V15H19V17H23V23H19V21H15V23H13V21H15V19H13V13ZM21 21V19H19V21H21ZM19 17H17V15H15V19H19V17ZM22.7 3.35L21.7 4.35L19.65 2.35L20.65 1.35C20.85 1.14 21.19 1.13 21.42 1.35L22.7 2.58C22.91 2.78 22.92 3.12 22.7 3.35ZM13 8.94L19.07 2.88L21.12 4.93L15.06 11H13V8.94Z" />
    </Svg>
  );
};
