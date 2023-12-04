import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V6H7V4H17V20H7V18H5V21C5 21.5304 5.21071 22.0391 5.58579 22.4142C5.96086 22.7893 6.46957 23 7 23H17C17.5304 23 18.0391 22.7893 18.4142 22.4142C18.7893 22.0391 19 21.5304 19 21V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1ZM8.8 11V9.5C8.8 8.1 7.4 7 6 7C4.6 7 3.2 8.1 3.2 9.5V11C2.6 11 2 11.6 2 12.2V15.7C2 16.4 2.6 17 3.2 17H8.7C9.4 17 10 16.4 10 15.8V12.3C10 11.6 9.4 11 8.8 11ZM7.5 11H4.5V9.5C4.5 8.7 5.2 8.2 6 8.2C6.8 8.2 7.5 8.7 7.5 9.5V11Z" />
    </Svg>
  );
};
