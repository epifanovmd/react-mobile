import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardBulletedOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.59 20.8701L19.17 22.2901L16.88 20.0001H4.00004C3.46961 20.0001 2.9609 19.7894 2.58583 19.4143C2.21076 19.0393 2.00004 18.5306 2.00004 18.0001V6.00012C2.00004 5.74012 2.05004 5.50012 2.14004 5.26012L1.17004 4.29012L2.59004 2.87012L3.73004 4.00012L20.59 20.8701ZM6.54004 4.00012H20C20.5305 4.00012 21.0392 4.21083 21.4143 4.5859C21.7893 4.96098 22 5.46968 22 6.00012V18.0001C22 18.4101 21.87 18.8001 21.66 19.1201L20 17.4601V6.00012H8.54004L6.54004 4.00012ZM4.00004 18.0001H14.88L11.88 15.0001H10V13.1201L7.88004 11.0001H6.00004V9.12012L4.00004 7.12012V18.0001ZM18 15.0001H17.54L15.54 13.0001H18V15.0001ZM18 11.0001H13.54L11.54 9.00012H18V11.0001Z" />
    </Svg>
  );
};
