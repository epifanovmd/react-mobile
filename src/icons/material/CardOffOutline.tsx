import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.20011 5.99998L7.20011 3.99998H20.0001C21.1101 3.99998 22.0001 4.88998 22.0001 5.99998V18C22.0001 18.24 21.9601 18.47 21.8801 18.68L20.0001 16.8V5.99998H9.20011ZM22.1101 21.46L20.8401 22.73L18.1101 20H4.00011C2.90011 20 2.00011 19.11 2.00011 18V5.99998C2.00011 5.41998 2.25011 4.89998 2.65011 4.53998L1.11011 2.99998L2.39011 1.72998L6.66011 5.99998L18.6501 18H18.6601L20.5701 19.91H20.5601L22.1101 21.46ZM16.1101 18L4.11011 5.99998H4.00011V18H16.1101Z" />
    </Svg>
  );
};
