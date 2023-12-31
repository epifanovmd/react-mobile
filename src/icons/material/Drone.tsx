import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DroneIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 11H21L20 9H13.75L16 12.5H14L10.75 9H4C3.45 9 2 8.55 2 8C2 7.45 3.5 5.5 5.5 5.5C7.5 5.5 7.67 6.5 9 7H21C21.2652 7 21.5196 7.10536 21.7071 7.29289C21.8946 7.48043 22 7.73478 22 8V9V11ZM10.75 6.5L14 3H16L13.75 6.5H10.75ZM18 11V9.5H19.75L19 11H18ZM3 19C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18C2 17.7348 2.10536 17.4804 2.29289 17.2929C2.48043 17.1054 2.73478 17 3 17C4.06087 17 5.07828 17.4214 5.82843 18.1716C6.57857 18.9217 7 19.9391 7 21C7 21.2652 6.89464 21.5196 6.70711 21.7071C6.51957 21.8946 6.26522 22 6 22C5.73478 22 5.48043 21.8946 5.29289 21.7071C5.10536 21.5196 5 21.2652 5 21C5 20.4696 4.78929 19.9609 4.41421 19.5858C4.03914 19.2107 3.53043 19 3 19ZM11 21C11 21.2652 10.8946 21.5196 10.7071 21.7071C10.5196 21.8946 10.2652 22 10 22C9.73478 22 9.48043 21.8946 9.29289 21.7071C9.10536 21.5196 9 21.2652 9 21C9 19.4087 8.36786 17.8826 7.24264 16.7574C6.11742 15.6321 4.5913 15 3 15C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13C5.12173 13 7.15656 13.8429 8.65685 15.3431C10.1571 16.8434 11 18.8783 11 21Z" />
    </Svg>
  );
};
