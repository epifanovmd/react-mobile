import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicClefTrebleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.9999 11V7.5L15.1999 5.29C15.9999 4.5 16.1499 3.24 15.5899 2.26C15.1399 1.47 14.3199 1 13.4499 1C13.2399 1 12.9999 1.03 12.8099 1.09C11.7299 1.38 10.9999 2.38 10.9999 3.5V6.74L7.85991 9.91C6.19991 11.6 5.69991 14.13 6.60991 16.34C7.37991 18.24 9.05991 19.55 10.9999 19.89V20.5C10.9999 20.76 10.7699 21 10.4999 21H8.99991V23H10.4999C11.8499 23 12.9999 21.89 12.9999 20.5V20C15.0299 20 17.1599 18.08 17.1599 15.25C17.1599 12.95 15.2399 11 12.9999 11ZM12.9999 3.5C12.9999 3.27 13.1099 3.09 13.3199 3.03C13.5399 2.97 13.7699 3.06 13.8799 3.26C13.9999 3.46 13.9599 3.71 13.7999 3.87L12.9999 4.73V3.5ZM10.9999 11.5C10.0299 12.14 9.29991 13.24 9.03991 14.26L10.9999 14.78V17.83C9.86991 17.53 8.89991 16.71 8.42991 15.57C7.83991 14.11 8.15991 12.45 9.25991 11.33L10.9999 9.5V11.5ZM12.9999 18V12.94C14.1699 12.94 15.1799 14.04 15.1799 15.25C15.1799 17 13.9099 18 12.9999 18Z" />
    </Svg>
  );
};
