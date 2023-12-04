import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Numeric9PlusBoxMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 9H19V7H17V9H15V11H17V13H19V11H21V17H7V3H21V9ZM21 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H21C21.5304 19 22.0391 18.7893 22.4142 18.4142C22.7893 18.0391 23 17.5304 23 17V3C23 2.46957 22.7893 1.96086 22.4142 1.58579C22.0391 1.21071 21.5304 1 21 1ZM11 9V8H12V9H11ZM14 12V8C14 6.89 13.1 6 12 6H11C10.4696 6 9.96086 6.21071 9.58579 6.58579C9.21071 6.96086 9 7.46957 9 8V9C9 10.11 9.9 11 11 11H12V12H9V14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12ZM3 5H1V21C1 21.5304 1.21071 22.0391 1.58579 22.4142C1.96086 22.7893 2.46957 23 3 23H19V21H3V5Z" />
    </Svg>
  );
};
