import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SquareOpacityIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 13V11H21V13H19ZM21 9V7H19V9H21ZM21 3H19V5H21V3ZM17 15H19V13H17V15ZM21 17V15H19V17H21ZM13 17V15H15V13H13V11H15V9H13V7H15V5H13V3H3V21H13V19H15V17H13ZM15 21H17V19H15V21ZM17 3H15V5H17V3ZM17 11H19V9H17V11ZM15 17H17V15H15V17ZM17 19H19V17H17V19ZM21 21V19H19V21H21ZM15 9H17V7H15V9ZM15 13H17V11H15V13ZM17 5V7H19V5H17Z" />
    </Svg>
  );
};
