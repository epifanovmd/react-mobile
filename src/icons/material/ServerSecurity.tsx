import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ServerSecurityIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 1H19C19.2652 1 19.5196 1.10536 19.7071 1.29289C19.8946 1.48043 20 1.73478 20 2V6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H3C2.73478 7 2.48043 6.89464 2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6V2C2 1.73478 2.10536 1.48043 2.29289 1.29289C2.48043 1.10536 2.73478 1 3 1ZM3 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10V10.67L17.5 9.56L11 12.44V15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9ZM3 17H11C11.06 19.25 12 21.4 13.46 23H3C2.73478 23 2.48043 22.8946 2.29289 22.7071C2.10536 22.5196 2 22.2652 2 22V18C2 17.7348 2.10536 17.4804 2.29289 17.2929C2.48043 17.1054 2.73478 17 3 17ZM8 5H9V3H8V5ZM8 13H9V11H8V13ZM8 21H9V19H8V21ZM4 3V5H6V3H4ZM4 11V13H6V11H4ZM4 19V21H6V19H4ZM17.5 12L22 14V17C22 19.78 20.08 22.37 17.5 23C14.92 22.37 13 19.78 13 17V14L17.5 12ZM17.5 13.94L15 15.06V17.72C15 19.26 16.07 20.7 17.5 21.06V13.94Z" />
    </Svg>
  );
};
