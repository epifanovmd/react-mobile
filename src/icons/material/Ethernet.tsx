import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EthernetIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 15H9V18H11V15H13V18H15V15H17V18H19V9H15V6H9V9H5V18H7V15ZM4.38 3H19.63C20.94 3 22 4.06 22 5.38V19.63C22 20.2586 21.7503 20.8614 21.3058 21.3058C20.8614 21.7503 20.2586 22 19.63 22H4.38C3.06 22 2 20.94 2 19.63V5.38C2 4.06 3.06 3 4.38 3Z" />
    </Svg>
  );
};
