import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToolboxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 5V6H15V5H9ZM22 18C22 18.53 21.79 19 21.4 19.41C21 19.81 20.55 20 20 20H4C3.45 20 3 19.81 2.6 19.41C2.21 19 2 18.53 2 18V14H7V15H9V14H15V15H17V14H22V18ZM4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5C7 4.45 7.18 4 7.57 3.59C7.96 3.2 8.44 3 9 3H15C15.56 3 16.04 3.2 16.43 3.59C16.82 4 17 4.45 17 5V6H17.67C18.55 6 19.16 6.41 19.5 7.22L21.58 12H17V11H15V12H9V11H7V12H2.42L4.5 7.22Z" />
    </Svg>
  );
};
