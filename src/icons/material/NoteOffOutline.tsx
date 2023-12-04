import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NoteOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 5.00047V8.80047L15.2 12.0005H19V15.8005L21 17.8005V9.00047L15 3.00047H6.19999L8.19999 5.00047H12ZM14 4.50047L19.5 10.0005H14V4.50047ZM20.7 20.0505V20.0405L19 18.3405V18.3505L12.66 12.0005L12 11.3405V11.3505L6.13999 5.50047L2.38999 1.73047L1.10999 3.00047L2.99999 4.90047C2.99999 4.93047 2.99999 4.97047 2.99999 5.00047V19.0005C2.99999 20.1005 3.88999 21.0005 4.99999 21.0005H19C19.03 21.0005 19.07 21.0005 19.1 21.0005L20.84 22.7305L22.11 21.4605L20.7 20.0505ZM4.99999 19.0005V6.89047L17.11 19.0005H4.99999Z" />
    </Svg>
  );
};
