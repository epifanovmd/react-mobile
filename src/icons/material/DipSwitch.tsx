import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DipSwitchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 4H7C7.26522 4 7.51957 4.10536 7.70711 4.29289C7.89464 4.48043 8 4.73478 8 5V19C8 19.2652 7.89464 19.5196 7.70711 19.7071C7.51957 19.8946 7.26522 20 7 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4ZM10 4H14C14.2652 4 14.5196 4.10536 14.7071 4.29289C14.8946 4.48043 15 4.73478 15 5V19C15 19.2652 14.8946 19.5196 14.7071 19.7071C14.5196 19.8946 14.2652 20 14 20H10C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4ZM17 4H21C21.2652 4 21.5196 4.10536 21.7071 4.29289C21.8946 4.48043 22 4.73478 22 5V19C22 19.2652 21.8946 19.5196 21.7071 19.7071C21.5196 19.8946 21.2652 20 21 20H17C16.7348 20 16.4804 19.8946 16.2929 19.7071C16.1054 19.5196 16 19.2652 16 19V5C16 4.73478 16.1054 4.48043 16.2929 4.29289C16.4804 4.10536 16.7348 4 17 4ZM4 18H6V13H4V18ZM11 11H13V6H11V11ZM18 18H20V13H18V18Z" />
    </Svg>
  );
};
