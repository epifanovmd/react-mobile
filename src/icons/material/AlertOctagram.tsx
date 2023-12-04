import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlertOctagramIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.19995 16.06L3.87995 12L2.19995 7.94001L6.25995 6.26001L7.93995 2.20001L12 3.88001L16.06 2.20001L17.74 6.26001L21.7999 7.94001L20.12 12L21.7999 16.06L17.74 17.74L16.06 21.8L12 20.12L7.93995 21.8L6.25995 17.74L2.19995 16.06ZM13 17V15H11V17H13ZM13 13V7.00001H11V13H13Z" />
    </Svg>
  );
};
