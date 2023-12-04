import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OfficeBuildingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 3V21H11V17.5H13V21H19V3H5ZM7 5H9V7H7V5ZM11 5H13V7H11V5ZM15 5H17V7H15V5ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9ZM7 13H9V15H7V13ZM11 13H13V15H11V13ZM15 13H17V15H15V13ZM7 17H9V19H7V17ZM15 17H17V19H15V17Z" />
    </Svg>
  );
};
