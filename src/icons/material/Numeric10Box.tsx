import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Numeric10BoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 9H16V15H14V9ZM21 5V19C21 20.11 20.11 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C20.11 3 21 3.9 21 5ZM10 7H6V9H8V17H10V7ZM18 9C18 8.46957 17.7893 7.96086 17.4142 7.58579C17.0391 7.21071 16.5304 7 16 7H14C13.4696 7 12.9609 7.21071 12.5858 7.58579C12.2107 7.96086 12 8.46957 12 9V15C12 16.11 12.9 17 14 17H16C17.11 17 18 16.11 18 15V9Z" />
    </Svg>
  );
};
