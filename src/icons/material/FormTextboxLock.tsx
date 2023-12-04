import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormTextboxLockIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 7H6V9H4V15H6V17H2V7ZM10 7H22V12C21.42 11.56 20.74 11.25 20 11.1V9H10V15H14.25C13.56 15 13 15.56 13 16.25V17H10V19C10 19.55 10.45 20 11 20H13V22H10.5C9.95 22 9 21.55 9 21C9 21.55 8.05 22 7.5 22H5V20H7C7.55 20 8 19.55 8 19V5C8 4.45 7.55 4 7 4H5V2H7.5C8.05 2 9 2.45 9 3C9 2.45 9.95 2 10.5 2H13V4H11C10.45 4 10 4.45 10 5V7ZM21.8 17C22.4 17 23 17.6 23 18.3V21.8C23 22.4 22.4 23 21.7 23H16.2C15.6 23 15 22.4 15 21.7V18.2C15 17.6 15.6 17 16.2 17V15.5C16.2 14.1 17.6 13 19 13C20.4 13 21.8 14.1 21.8 15.5V17ZM20.5 17V15.5C20.5 14.7 19.8 14.2 19 14.2C18.2 14.2 17.5 14.7 17.5 15.5V17H20.5Z" />
    </Svg>
  );
};
