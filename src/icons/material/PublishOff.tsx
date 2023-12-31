import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PublishOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8001 22.6992L15.0001 16.8992V19.9992H9.0001V13.9992H5.0001L8.6001 10.3992L1.1001 2.99922L2.4001 1.69922L22.1001 21.3992L20.8001 22.6992ZM19.0001 5.99922V3.99922H7.2001L9.2001 5.99922H19.0001ZM17.2001 13.9992H19.0001L12.0001 6.99922L11.1001 7.89922L17.2001 13.9992Z" />
    </Svg>
  );
};
