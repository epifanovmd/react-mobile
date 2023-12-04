import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraBurstIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1 5H3V19H1V5ZM5 5H7V19H5V5ZM22 5H10C9.73478 5 9.48043 5.10536 9.29289 5.29289C9.10536 5.48043 9 5.73478 9 6V18C9 18.2652 9.10536 18.5196 9.29289 18.7071C9.48043 18.8946 9.73478 19 10 19H22C22.2652 19 22.5196 18.8946 22.7071 18.7071C22.8946 18.5196 23 18.2652 23 18V6C23 5.73478 22.8946 5.48043 22.7071 5.29289C22.5196 5.10536 22.2652 5 22 5ZM11 17L13.5 13.85L15.29 16L17.79 12.78L21 17H11Z" />
    </Svg>
  );
};
